import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EasyList.Homes | Create Professional Real Estate Listings in 60 Seconds",
  description: "AI-powered real estate listing generator that creates compelling property descriptions in seconds. Perfect for agents, homeowners, and vacation rental hosts. No MLS required.",
  keywords: ["real estate listing", "property description generator", "AI listing writer", "FSBO", "real estate marketing", "Airbnb description"],
  authors: [{ name: "EasyList.Homes" }],
  openGraph: {
    title: "EasyList.Homes | AI-Powered Real Estate Listings",
    description: "Create professional real estate listings in 60 seconds. AI-powered descriptions that sell properties faster.",
    url: "https://easylist.homes",
    siteName: "EasyList.Homes",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EasyList.Homes | AI-Powered Real Estate Listings",
    description: "Create professional real estate listings in 60 seconds.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
