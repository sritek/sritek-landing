import GridDotBackground from "@/components/ui/GridDotBackground";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-dark section-padding">
      <GridDotBackground />
      <div className="section-container relative z-10 grid gap-12 lg:grid-cols-2">
        <div>
          <SectionLabel>OUR PROCESS</SectionLabel>
          <h2 className="mt-4 font-display text-[clamp(3rem,7vw,6rem)] font-extrabold text-cream">
            DESIGN DEVELOPMENT
          </h2>
          <p className="mt-8 max-w-md rounded-2xl bg-white p-8 text-dark">
            From idea to working software, we handle every step design,
            development, and testing.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="h-[280px] w-[400px] rotate-6 rounded-xl bg-red" />
        </div>
      </div>
    </section>
  );
}
