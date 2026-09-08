import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Exodus Exports | Premium International B2B Trade & Export",
  description:
    "Exodus Exports connects global markets with premium agricultural commodities, organic spices, grains, and industrial raw materials. Built for reliability, quality, and seamless international supply chains.",
  keywords: [
    "Exodus Exports",
    "International Export Company",
    "B2B Global Trade",
    "Agricultural Commodities Export",
    "Spices Exporter",
    "Bulk Grain Logistics",
    "FOB CIF Trade",
  ],
  authors: [{ name: "Exodus Exports Trade Management" }],
  openGraph: {
    title: "Exodus Exports | Connecting Global Markets. Delivering Excellence.",
    description:
      "Premier international trade enterprise facilitating reliable bulk sourcing and maritime logistics worldwide.",
    url: "https://www.exodusexports.com",
    siteName: "Exodus Exports",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-brand-navy selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
