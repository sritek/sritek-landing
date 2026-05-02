import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { PageTransition } from "../components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Sritek — Turning Ideas Into Powerful Software",
  description:
    "Sritek builds premium SaaS, web, and AI platforms with speed, polish, and production-grade engineering.",
  openGraph: {
    title: "Sritek — Turning Ideas Into Powerful Software",
    description:
      "Sritek builds premium SaaS, web, and AI platforms with speed, polish, and production-grade engineering.",
    siteName: "Sritek",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-blue antialiased">
        <div id="smooth-wrapper" className="min-h-screen bg-dark">
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </div>
      </body>
    </html>
  );
}
