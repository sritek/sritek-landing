import Image from "next/image";
import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About",
};
const milestones = [
  {
    no: "01",
    title: "Foundation",
    body: "Sritek started in Jaipur with a focus on building high-quality software experiences for modern businesses.",
  },
  {
    no: "02",
    title: "Initial Growth",
    body: "We expanded into SaaS platforms, AI integrations, mobile applications, and scalable UI/UX systems.",
  },
  {
    no: "03",
    title: "From Local to Global",
    body: "Today we collaborate with startups and companies across regions to create impactful digital products.",
  },
  {
    no: "04",
    title: "Continuous Evolution",
    body: "Today, Sritek is a dependable, trustworthy partner in custom software development. We create SaaS, web, mobile, and Al-driven products that grow alongside your business. Tomorrow, we guarantee the same - honest communication, careful design, and reliable software that works.",
  },
];

const pillars = [
  {
    title: "Embracing Ideas and Innovation",
    body: "We welcome ambitious ideas and transform them into practical and scalable software solutions.",
  },
  {
    title: "Driven for Excellence",
    body: "Our team is focused on precision, performance, and delivering high-quality digital experiences.",
  },
  {
    title: "Dedicated to Success",
    body: "We prioritize long-term partnerships and meaningful results for every client we work with.",
  },
  {
    title: "Honesty and Clarity",
    body: "Transparent communication and clean execution are at the center of our process.",
  },
];

const team = [
  {
    name: "Yashaswi Soni",
    role: "CEO & Founder",
  },
  {
    name: "Shreyansh Soni",
    role: "Project Manager",
  },
  {
    name: "Ankita Soni",
    role: "CTO",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-dark pt-[72px]">
      {/* HERO */}
      <section className="bg-red">
        <div className="section-container section-padding pb-10">
          <div className="max-w-[1400px]">
            <h1 className="font-display text-[clamp(4rem,11vw,11rem)] leading-[0.88] font-extrabold uppercase tracking-[-0.03em] text-white ">
              THE TEAM
              <br />
              BEHIND YOUR
              <br />
              SOFTWARE
            </h1>
          </div>

          <div className="mt-12 overflow-hidden rounded-[24px] border border-white/10">
            <div className="relative aspect-[16/8] w-full">
              <Image
                src="/images/about/team.jpg"
                alt="Team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-2">
            <div />

            <p className="max-w-[620px] text-lg leading-[1.9] text-white/80 md:text-xl">
              Our talented team of developers, UI/UX designers, and project
              managers is passionate about building efficient, scalable, and
              visually refined digital products. We specialize in web apps,
              mobile experiences, SaaS platforms, and AI-powered systems —
              always focused on fast execution and impactful results.
            </p>
          </div>
        </div>

        {/* CURVE TRANSITION */}
        <div className="relative h-40 overflow-hidden">
          <div className="absolute inset-x-[-10%s] top-10 h-[220px] rounded-[100%] bg-dark" />
        </div>
      </section>

      {/* MILESTONES */}
      <section className="bg-dark py-28">
        <div className="px-12">
          <div className="mb-24 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/60">
                Our Journey:
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white">
                Key Milestones
              </p>
            </div>
          </div>

          <div className="overflow-x-auto overflow-y-hidden pb-8">
            <div className="relative flex min-w-max gap-28 pr-20">
              {/* Timeline line */}
              <div className="absolute left-0 top-[158px] h-px w-full bg-cream/30" />

              {milestones.map((m) => (
                <div key={m.no} className="relative w-[420px] flex-shrink-0">
                  {/* Dot */}
                  <div className="absolute top-[152px] h-3 w-3 rounded-full bg-cream" />

                  {/* Number */}
                  <p className="font-display text-[clamp(5rem,8vw,12rem)] leading-none font-extrabold tracking-[-0.01em] text-red">
                    {m.no}
                  </p>

                  {/* Content */}
                  <div className="mt-10">
                    <h3 className="font-display text-5xl font-extrabold uppercase leading-[0.95] text-white">
                      {m.title}
                    </h3>

                    <p className="mt-6 max-w-sm text-base leading-8 text-white/70">
                      {m.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-red py-28">
        <div className="section-container">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-white/70">
            The Pillars of Sritek
          </p>

          <div className="border-t border-white/20">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="grid gap-8 border-b border-white/20 py-12 md:grid-cols-[1.15fr_1fr]"
              >
                <h3 className="font-display text-[clamp(2.8rem,5vw,6rem)] leading-[0.92] font-extrabold uppercase tracking-[-0.05em] text-white">
                  {pillar.title}
                </h3>

                <p className="max-w-xl pt-2 text-lg leading-9 text-white/80">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-dark py-28">
        <div className="section-container">
          <h2 className="font-display text-[clamp(4rem,8vw,8rem)] font-extrabold uppercase leading-none tracking-[-0.05em] text-cream">
            THE TEAM
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {team.map((member, i) => (
              <article
                key={member.name}
                className="group overflow-hidden rounded-[28px] bg-white"
              >
                m
                <div className="relative aspect-[0.9] overflow-hidden bg-neutral-800">
                  <Image
                    src={`/images/about/member-${i + 1}.jpg`}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 p-7">
                  <h4 className="text-2xl font-semibold text-dark">
                    {member.name}
                  </h4>

                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red">
                    {member.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </main>
  );
}
