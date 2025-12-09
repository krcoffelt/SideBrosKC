import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { companyInfo } from "@/data/company";

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
  title: `${companyInfo.name} | ${companyInfo.tagline}`,
  description:
    "Side Bros KC LLC delivers professional power washing, concrete staining, and custom Christmas lighting across the Kansas City metro. Get your free quote today.",
  metadataBase: new URL("https://www.sidebroskc.com"),
  openGraph: {
    title: `${companyInfo.name} | ${companyInfo.tagline}`,
    description:
      "Kansas City’s trusted team for exterior cleaning, concrete restoration, and holiday lighting.",
    images: [
      {
        url: "/images/SideBrosKCLogoIcon.png",
        width: 512,
        height: 512,
        alt: "Side Bros KC logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyInfo.name} | ${companyInfo.tagline}`,
    description:
      "Kansas City’s trusted team for exterior cleaning, concrete restoration, and holiday lighting.",
    images: ["/images/SideBrosKCLogoIcon.png"],
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
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
