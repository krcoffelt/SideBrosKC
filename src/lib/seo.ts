import type { Metadata } from "next";
import { companyInfo } from "@/data/company";

type FAQItem = {
  question: string;
  answer: string;
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
  image?: string;
};

const defaultSocialImage = "/images/SideBrosWebPic12.jpg";

export function absoluteUrl(path = "/") {
  return path === "/" ? companyInfo.siteUrl : `${companyInfo.siteUrl}${path}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = defaultSocialImage,
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: companyInfo.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 800,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: companyInfo.name,
    url: companyInfo.siteUrl,
    logo: absoluteUrl("/images/SideBrosKCLogoIcon.png"),
    image: absoluteUrl(defaultSocialImage),
    email: companyInfo.email,
    telephone: companyInfo.phone,
    foundingDate: companyInfo.founded,
    sameAs: companyInfo.sameAs,
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": absoluteUrl("/#local-business"),
    name: companyInfo.name,
    url: companyInfo.siteUrl,
    image: absoluteUrl(defaultSocialImage),
    logo: absoluteUrl("/images/SideBrosKCLogoIcon.png"),
    telephone: companyInfo.phone,
    email: companyInfo.email,
    priceRange: companyInfo.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1545 West Park Street",
      addressLocality: "Olathe",
      addressRegion: "KS",
      postalCode: "66061",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: companyInfo.geo.latitude,
      longitude: companyInfo.geo.longitude,
    },
    areaServed: companyInfo.serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    openingHoursSpecification: companyInfo.openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    hasMap: companyInfo.mapUrl,
    sameAs: companyInfo.sameAs,
  };
}

export function buildWebsiteSchema() {
  return {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: companyInfo.siteUrl,
    name: companyInfo.name,
    description: "Professional power washing, concrete staining, and Christmas lighting in Kansas City.",
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
  };
}

export function buildServiceSchema({
  name,
  description,
  path,
  image = defaultSocialImage,
}: ServiceSchemaInput) {
  return {
    "@type": "Service",
    "@id": absoluteUrl(`${path}#service`),
    name,
    description,
    url: absoluteUrl(path),
    areaServed: companyInfo.serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    image: absoluteUrl(image),
    provider: {
      "@id": absoluteUrl("/#local-business"),
    },
  };
}

export function buildFAQSchema(items: FAQItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
