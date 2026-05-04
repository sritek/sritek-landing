import { Metadata } from "next";
import TeamCard from "@/components/ui/TeamCard";
import CTABanner from "@/components/sections/CTABanner";
import AboutClient from "./AboutClient";
import { team } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "About — Sritek",
  description: "Meet the team behind Sritek. Developers, designers, and project managers turning business challenges into technological successes.",
};

const milestones = [
  { num: "01", title: "FOUNDATION", desc: "Founded with a vision to turn business challenges into technological successes." },
  { num: "02", title: "INITIAL GROWTH", desc: "Shipped our first SaaS MVP in weeks, not months. Trust built the company." },
  { num: "03", title: "FROM LOCAL TO GLOBAL", desc: "Partnered with startups and enterprises across India, EU, and US." },
];

const pillars = [
  { title: "EMBRACING IDEAS AND INNOVATION", desc: "We see every problem as an opportunity for creative engineering solutions." },
  { title: "DRIVEN FOR EXCELLENCE", desc: "Code quality, performance, and user experience are non-negotiable standards." },
  { title: "DEDICATED TO SUCCESS", desc: "Your success is our metric. We measure outcomes, not just outputs." },
  { title: "HONESTY AND CLARITY", desc: "Transparent communication and realistic timelines build lasting partnerships." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark dot-grid-bg pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AboutClient />
          <div className="bg-dark-surface border border-blue/[0.07] rounded-2xl w-full h-[40vh] lg:h-[60vh] mt-8 flex items-center justify-center">
            <span className="font-avenir text-xs text-blue/[0.12] tracking-widest uppercase">TEAM PHOTO</span>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="bg-dark py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row">
          <div className="lg:w-1/2" />
          <div className="lg:w-1/2">
            <p className="font-avenir text-base text-blue/[0.52] leading-relaxed max-w-lg">
              Our talented team of developers, UI/UX designers, and project managers is passionate about turning your business needs into efficient, scalable software solutions. Based in India, we specialize in web and mobile apps, SaaS platforms, and AI automation.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-dark-deep dot-grid-bg py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="font-avenir text-xs tracking-[0.2em] uppercase text-blue/[0.22] mb-16">
            OUR JOURNEY: KEY MILESTONES
          </p>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-blue/[0.15] hidden lg:block" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
              {milestones.map((m) => (
                <div key={m.num} className="relative text-center lg:text-left">
                  <div className="hidden lg:flex items-center justify-center mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-mid shadow-[0_0_10px_rgba(74,184,240,0.5)]" />
                  </div>
                  <span className="font-canela text-[8vw] lg:text-[4vw] text-blue/[0.06] font-light leading-none">{m.num}</span>
                  <h3 className="font-canela text-2xl lg:text-3xl text-blue mt-2">{m.title}</h3>
                  <p className="font-avenir text-sm text-blue/[0.38] leading-relaxed mt-3">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-dark-surface py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="font-avenir text-xs tracking-[0.2em] uppercase text-blue-mid mb-12">THE PILLARS OF SRITEK</p>
          <div className="divide-y divide-blue/[0.07]">
            {pillars.map((p) => (
              <div key={p.title} className="flex flex-col lg:flex-row lg:items-center py-8 gap-4 lg:gap-16">
                <h3 className="font-canela text-3xl lg:text-4xl text-blue font-light lg:w-1/2">{p.title}</h3>
                <p className="font-avenir text-sm text-blue/[0.42] lg:w-1/2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-dark py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2 className="font-canela text-5xl lg:text-6xl text-blue font-light mb-12">THE TEAM</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <TeamCard key={m.name} name={m.name} role={m.role} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
