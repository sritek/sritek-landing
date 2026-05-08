import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustedBy from "@/components/sections/TrustedBy";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSection from "@/components/sections/ProcessSection";
import WhoWeAre from "@/components/sections/WhoWeAre";
import OurWork from "@/components/sections/OurWork";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/layout/Footer";
import PageProgress from "@/components/ui/PageProgress";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustedBy />
      <ServicesGrid />
      <ProcessSection />
      <WhoWeAre />
      <OurWork />
      <TestimonialCarousel />
      <CTABanner />
      <PageProgress />
      <Footer />
    </main>
  );
}
