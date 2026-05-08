import Button from "@/components/ui/Button";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="bg-dark section-padding">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2">
        <div className="relative h-[480px]">
          <div className="absolute left-0 top-0 h-64 w-52 rotate-[-3deg] rounded-2xl border-2 border-red bg-gray-700">
            <Image
              src="/team1.jpeg"
              alt="Team Member 1"
              width={200}
              height={200}
            />
          </div>
          <div className="absolute left-24 top-12 h-72 w-56 rounded-2xl border border-white/20 bg-gray-600">
            <Image
              src="/team2.jpeg"
              alt="Team Member 2"
              width={200}
              height={200}
            />
          </div>
          <div className="absolute left-44 top-40 h-60 w-52 rotate-2 rounded-2xl border-2 border-red bg-gray-700">
            <Image
              src="/team3.jpeg"
              alt="Team Member 3"
              width={200}
              height={200}
            />
          </div>
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
          <Button
            href="/about"
            variant="purpleShadow"
            className="mt-8"
            size="lg"
          >
            About Us
          </Button>
        </div>
      </div>
    </section>
  );
}
