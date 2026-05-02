import { CTABanner } from "../../components/sections/CTABanner";

export default function AboutPage() {
  return (
    <main className="bg-dark text-blue">
      <section className="relative overflow-hidden bg-dark px-6 py-20 text-blue">
        <div className="dot-grid-bg absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-[1280px] space-y-12">
          <h1 className="font-canela text-[11vw] leading-none text-blue font-light">
            THE TEAM BEHIND YOUR SOFTWARE
          </h1>
          <div className="h-[60vh] rounded-3xl border border-[#99daff]/7 bg-[#1a1a1a]" />
        </div>
      </section>

      <section className="bg-dark px-6 py-20">
        <div className="mx-auto max-w-[1280px] lg:grid lg:grid-cols-2 lg:gap-20">
          <div />
          <div className="max-w-lg font-avenir text-base text-[#99daff]/52 leading-relaxed">
            Our talented team of developers, UI/UX designers, and project
            managers is passionate about turning your business needs into
            efficient, scalable software solutions. Based in India, we
            specialize in web and mobile apps, SaaS platforms, and AI
            automation.
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0d0d0d] px-6 py-20 text-blue">
        <div className="dot-grid-bg absolute inset-0 opacity-10" />
        <div className="mx-auto max-w-[1280px] space-y-12">
          <div>
            <p className="font-avenir text-xs uppercase tracking-[0.2em] text-[#99daff]/22">
              OUR JOURNEY: KEY MILESTONES
            </p>
            <div className="mt-10 grid gap-10 lg:grid-cols-3">
              <div className="space-y-4 rounded-3xl border border-[#99daff]/15 bg-[#121212] p-8">
                <p className="font-canela text-[8vw] text-[#99daff]/6 font-light">
                  01
                </p>
                <h3 className="font-canela text-3xl text-blue">FOUNDATION</h3>
                <p className="font-avenir text-sm text-[#99daff]/38">
                  Founded with a vision to turn business challenges into
                  technological successes.
                </p>
              </div>
              <div className="space-y-4 rounded-3xl border border-[#99daff]/15 bg-[#121212] p-8">
                <p className="font-canela text-[8vw] text-[#99daff]/6 font-light">
                  02
                </p>
                <h3 className="font-canela text-3xl text-blue">
                  INITIAL GROWTH
                </h3>
                <p className="font-avenir text-sm text-[#99daff]/38">
                  Shipped our first SaaS MVP in weeks, not months. Trust built
                  the company.
                </p>
              </div>
              <div className="space-y-4 rounded-3xl border border-[#99daff]/15 bg-[#121212] p-8">
                <p className="font-canela text-[8vw] text-[#99daff]/6 font-light">
                  03
                </p>
                <h3 className="font-canela text-3xl text-blue">
                  FROM LOCAL TO GLOBAL
                </h3>
                <p className="font-avenir text-sm text-[#99daff]/38">
                  Partnered with startups and enterprises across India, EU, and
                  US.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#1a1a1a] p-10">
            <p className="font-avenir text-xs uppercase tracking-[0.2em] text-blue-mid">
              THE PILLARS OF SRITEK
            </p>
            <div className="mt-8 space-y-6 border-t border-[#99daff]/10 pt-8 text-[#99daff]/52">
              {[
                {
                  title: "EMBRACING IDEAS AND INNOVATION",
                  description:
                    "We turn bright concepts into polished product experiences.",
                },
                {
                  title: "DRIVEN FOR EXCELLENCE",
                  description:
                    "High standards are central to every delivery and decision.",
                },
                {
                  title: "DEDICATED TO SUCCESS",
                  description:
                    "We partner closely with clients to win together.",
                },
                {
                  title: "HONESTY AND CLARITY",
                  description:
                    "Transparent communication and accountability guide our work.",
                },
              ].map((pillar) => (
                <div
                  key={pillar.title}
                  className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_2fr]"
                >
                  <h3 className="font-canela text-4xl text-blue">
                    {pillar.title}
                  </h3>
                  <p className="font-avenir text-sm text-[#99daff]/42">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <section className="bg-dark px-6 py-20 text-blue">
            <div className="mx-auto max-w-[1280px]">
              <h2 className="font-canela text-6xl font-light text-blue">
                THE TEAM
              </h2>
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {[
                  { name: "Aarav Shah", role: "Founder & CEO" },
                  { name: "Mira Patel", role: "Head of Design" },
                  { name: "Rohan Mehta", role: "Lead Engineer" },
                ].map((member) => (
                  <div
                    key={member.name}
                    className="overflow-hidden rounded-3xl border border-[#99daff]/8 bg-[#121212]"
                  >
                    <div className="h-44 bg-[#99daff]/5" />
                    <div className="p-6 bg-[#1a1a1a]">
                      <p className="font-avenir text-sm font-semibold text-blue">
                        {member.name}
                      </p>
                      <p className="mt-2 font-avenir text-xs uppercase tracking-[0.2em] text-blue-mid">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
