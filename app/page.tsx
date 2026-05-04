import Hero from "@/components/sections/Hero";
import MarqueeRow from "@/components/animations/MarqueeRow";
import ClientList from "@/components/sections/ClientList";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSection from "@/components/sections/ProcessSection";
import WhoWeAre from "@/components/sections/WhoWeAre";
import OurWork from "@/components/sections/OurWork";
import Reviews from "@/components/sections/Reviews";
import CTABanner from "@/components/sections/CTABanner";

const techStack = [
  "NEXT.JS", "REACT", "TYPESCRIPT", "NODE.JS", "POSTGRESQL",
  "GSAP", "TAILWIND", "PRISMA", "AWS", "OPENAI",
];

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeRow items={techStack} />
      <ClientList />
      <ServicesGrid />
      <ProcessSection />
      <WhoWeAre />
      <OurWork />
      <Reviews />
      <CTABanner />
    </>
  );
}
