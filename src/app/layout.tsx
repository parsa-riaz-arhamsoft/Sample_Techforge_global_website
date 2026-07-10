import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TechForge Global | IT Outsourcing & Staffing",
    template: "%s | TechForge Global",
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">\n      <body className=\"font-sans antialiased\">\n        <div className=\"flex min-h-screen flex-col bg-slate-950 text-slate-100\">\n          <Header />\n          <main className=\"flex-1\">{children}</main>\n          <Footer />\n        </div>\n      </body>\n    </html>\n  );\n}\n