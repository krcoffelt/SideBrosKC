import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { StructuredData } from "@/components/StructuredData";
import { companyInfo } from "@/data/company";
import {
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebsiteSchema,
} from "@/lib/seo";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
      <body className={`${montserrat.variable} ${openSans.variable} font-body antialiased`}>
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
