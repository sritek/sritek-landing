import { CTA } from "../ui/CTA";

export function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] px-6 py-20 text-blue">
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2">
        <div className="relative h-[560px]">
          <div className="absolute left-0 top-0 h-72 w-56 rounded-xl border border-[#99daff]/12 bg-[#99daff]/5" />
          <div className="absolute left-24 top-16 h-56 w-44 rounded-xl border border-[#99daff]/12 bg-[#99daff]/5" />
          <div className="absolute left-8 top-32 h-64 w-48 rounded-xl border border-[#99daff]/12 bg-[#99daff]/5" />
          <div className="absolute inset-x-0 bottom-4 text-center text-xs text-[#99daff]/12">
            TEAM PHOTO
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="font-canela text-6xl font-light text-blue">
            WHO WE ARE
          </h2>
          <p className="max-w-md font-avenir text-sm text-[#99daff]/48 leading-relaxed">
            Sritek is a talented team of developers, UI/UX designers, and
            project managers creating custom software, SaaS, and AI that scales
            your business.
          </p>
          <CTA variant="outline" label="ABOUT US" />
        </div>
      </div>
    </section>
  );
}
