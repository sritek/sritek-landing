import Button from "@/components/ui/Button";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="bg-dark section-padding">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2 ">
        <div className="relative h-96 w-full max-w-md rounded-2xl border-2 border-red bg-gray-700 overflow-hidden">
          <Image
            src="/team.jpeg"
            alt="Team Members"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-6xl font-extrabold text-cream">
            WHO WE ARE
          </h2>
          <p className="mt-6 max-w-md text-lg text-white/85">
            Sritek is a talented team of developers, UI/UX designers, and
            project managers creating custom software, SaaS and AI that scales
            your business.
          </p>
          <Button href="/about" variant="redShadow" className="mt-8" size="lg">
            About Us
          </Button>
        </div>
      </div>
    </section>
  );
}
