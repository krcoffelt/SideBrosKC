import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { StructuredData } from "@/components/StructuredData";
import { companyInfo } from "@/data/company";
import { buildLocalBusinessSchema, buildOrganizationSchema, buildWebsiteSchema } from "@/lib/seo";

const googleTagManagerId = "GTM-NZ7X9N58";

export const metadata: Metadata = {
  title: companyInfo.name,
  description:
    "Side Bros KC LLC delivers professional power washing, concrete staining, and custom Christmas lighting across the Kansas City metro. Get your free quote today.",
  metadataBase: new URL(companyInfo.siteUrl),
  alternates: {
    canonical: companyInfo.siteUrl,
  },
  category: "home services",
  openGraph: {
    title: companyInfo.name,
    description:
      "Kansas City’s trusted team for exterior cleaning, concrete restoration, and holiday lighting.",
    url: companyInfo.siteUrl,
    siteName: companyInfo.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/SideBrosWebPic12.jpg",
        width: 1200,
        height: 800,
        alt: companyInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: companyInfo.name,
    description:
      "Kansas City’s trusted team for exterior cleaning, concrete restoration, and holiday lighting.",
    images: ["/images/SideBrosWebPic12.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${googleTagManagerId}');
          `}
        </Script>
      </head>
      <body className="font-body antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <StructuredData
          id="site-structured-data"
          data={[buildOrganizationSchema(), buildLocalBusinessSchema(), buildWebsiteSchema()]}
        />
        <AnalyticsScripts />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
