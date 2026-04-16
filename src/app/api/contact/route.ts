import { NextResponse } from "next/server";
import { companyInfo } from "@/data/company";

const allowedFileTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const maxFiles = 3;
const maxFileSizeBytes = 5 * 1024 * 1024;

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  preferredContact: string;
  services: string[];
  message: string;
  utm: Record<string, string>;
  submittedAt: string;
};

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function readServices(formData: FormData) {
  return formData
    .getAll("services")
    .filter((value): value is string => typeof value === "string")
    .map((value) => value.trim())
    .filter(Boolean);
}

function readFiles(formData: FormData) {
  return formData
    .getAll("photos")
    .filter((value): value is File => value instanceof File && value.size > 0);
}

function buildPayload(formData: FormData): ContactPayload {
  return {
    name: readString(formData, "name"),
    email: readString(formData, "email"),
    phone: readString(formData, "phone"),
    preferredContact: readString(formData, "preferredContact") || "Call",
    services: readServices(formData),
    message: readString(formData, "message"),
    utm: {
      utm_source: readString(formData, "utm_source"),
      utm_medium: readString(formData, "utm_medium"),
      utm_campaign: readString(formData, "utm_campaign"),
      utm_term: readString(formData, "utm_term"),
      utm_content: readString(formData, "utm_content"),
    },
    submittedAt: new Date().toISOString(),
  };
}

function validatePayload(payload: ContactPayload, files: File[]) {
  if (!payload.name || !payload.email || !payload.phone) {
    return "Please complete your name, email, and phone number.";
  }

  if (!payload.email.includes("@")) {
    return "Please enter a valid email address.";
  }

  if (files.length > maxFiles) {
    return `Please upload no more than ${maxFiles} photos.`;
  }

  for (const file of files) {
    if (!allowedFileTypes.has(file.type)) {
      return "Photo uploads must be JPG, PNG, or WebP files.";
    }

    if (file.size > maxFileSizeBytes) {
      return "Each uploaded photo must be 5MB or smaller.";
    }
  }

  return null;
}

function buildEmailText(payload: ContactPayload) {
  const services = payload.services.length > 0 ? payload.services.join(", ") : "Not specified";
  const utm = Object.entries(payload.utm)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  return [
    `New quote request from ${payload.name}`,
    "",
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Preferred contact: ${payload.preferredContact}`,
    `Services: ${services}`,
    "",
    "Project details:",
    payload.message || "No additional details provided.",
    "",
    "Tracking:",
    utm || "No UTM data provided.",
    "",
    `Submitted at: ${payload.submittedAt}`,
  ].join("\n");
}

function buildEmailHtml(payload: ContactPayload) {
  const escapeHtml = (value: string) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const services = payload.services.length > 0 ? payload.services.join(", ") : "Not specified";
  const utm = Object.entries(payload.utm).filter(([, value]) => value);

  return `
    <h2>New quote request from ${escapeHtml(payload.name)}</h2>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>
    <p><strong>Preferred contact:</strong> ${escapeHtml(payload.preferredContact)}</p>
    <p><strong>Services:</strong> ${escapeHtml(services)}</p>
    <p><strong>Project details:</strong><br />${escapeHtml(payload.message || "No additional details provided.")}</p>
    <p><strong>Submitted at:</strong> ${escapeHtml(payload.submittedAt)}</p>
    ${
      utm.length === 0
        ? "<p><strong>Tracking:</strong> No UTM data provided.</p>"
        : `<p><strong>Tracking:</strong></p><ul>${utm
            .map(([key, value]) => `<li>${escapeHtml(key)}: ${escapeHtml(value)}</li>`)
            .join("")}</ul>`
    }
  `;
}

async function sendToWebhook(payload: ContactPayload, files: File[]) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    return false;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.CONTACT_WEBHOOK_SECRET
        ? { "x-webhook-secret": process.env.CONTACT_WEBHOOK_SECRET }
        : {}),
    },
    body: JSON.stringify({
      ...payload,
      photos: files.map((file) => ({
        name: file.name,
        type: file.type,
        size: file.size,
      })),
    }),
  });

  if (!response.ok) {
    throw new Error("Webhook delivery failed.");
  }

  return true;
}

async function sendWithResend(payload: ContactPayload, files: File[]) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_NOTIFICATION_EMAIL;

  if (!apiKey || !from || !to) {
    return false;
  }

  const attachments = await Promise.all(
    files.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()).toString("base64"),
      type: file.type,
    }))
  );

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: to.split(",").map((value) => value.trim()),
      reply_to: payload.email,
      subject: `New Side Bros KC quote request from ${payload.name}`,
      text: buildEmailText(payload),
      html: buildEmailHtml(payload),
      attachments,
    }),
  });

  if (!response.ok) {
    throw new Error("Email delivery failed.");
  }

  return true;
}

export async function POST(request: Request) {
  const formData = await request.formData();

  if (readString(formData, "companyWebsite")) {
    return NextResponse.json({
      message: "Thanks. Your request has been sent and the Bros will follow up soon.",
    });
  }

  const payload = buildPayload(formData);
  const files = readFiles(formData);
  const validationError = validatePayload(payload, files);

  if (validationError) {
    return NextResponse.json({ message: validationError }, { status: 400 });
  }

  try {
    const delivered =
      (await sendToWebhook(payload, files)) || (await sendWithResend(payload, files));

    if (!delivered) {
      return NextResponse.json(
        {
          message: `Quote requests are not configured yet. Please call ${companyInfo.phone} or email ${companyInfo.email}.`,
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      message: "Thanks. Your request has been sent and the Bros will follow up soon.",
    });
  } catch (error) {
    console.error("Contact form delivery failed", error);

    return NextResponse.json(
      {
        message: `We could not send your request right now. Please call ${companyInfo.phone} or email ${companyInfo.email}.`,
      },
      { status: 502 }
    );
  }
}
