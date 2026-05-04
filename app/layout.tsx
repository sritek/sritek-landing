import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Sritek — Turning Ideas Into Powerful Software",
  description:
    "Sritek is a premium software development agency specializing in custom web apps, SaaS, AI integration, and mobile development. We ship your software 3× faster with production-grade quality.",
  keywords: [
    "software development",
    "web development",
    "SaaS",
    "AI integration",
    "mobile app development",
    "UI/UX design",
    "digital agency",
  ],
  openGraph: {
    title: "Sritek — Turning Ideas Into Powerful Software",
    description:
      "Premium software development agency. Custom web apps, SaaS, AI integration, and mobile development.",
    type: "website",
    locale: "en_US",
    siteName: "Sritek",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sritek — Turning Ideas Into Powerful Software",
    description:
      "Premium software development agency. Custom web apps, SaaS, AI integration, and mobile development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-dark text-blue font-avenir">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
