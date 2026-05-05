import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About"
};

const milestones = [
  { no: "01", title: "Foundation", body: "Sritek started in Jaipur with a focus on quality software delivery." },
  { no: "02", title: "Initial Growth", body: "Expanded into SaaS, mobile apps, and UI/UX projects." },
  { no: "03", title: "From Local to Global", body: "Now partnering with startups across regions." }
];

export default function AboutPage() {
  return (
    <main className="pt-[72px]">
      <section className="bg-[#6600FF] section-padding">
        <div className="section-container">
          <h1 className="font-display text-[clamp(4rem,10vw,9rem)] font-extrabold text-white">THE TEAM BEHIND YOUR SOFTWARE</h1>
        </div>
      </section>
      <section className="bg-[#6600FF] px-6 pb-20">
        <div className="section-container h-80 rounded-2xl bg-gray-700" />
      </section>
      <section className="bg-[#6600FF] py-20">
        <p className="section-container ml-auto max-w-2xl text-xl leading-relaxed text-white">
          Our talented team of developers, UI/UX designers, and project managers is passionate about turning your business needs into efficient software.
        </p>
      </section>
      <section className="bg-[#0D0D1F] section-padding">
        <div className="section-container grid gap-8 md:grid-cols-3">
          {milestones.map((m) => (
            <div key={m.no}>
              <p className="font-display text-8xl font-extrabold text-[#4DFF7C]">{m.no}</p>
              <div className="my-4 h-px w-full bg-[#4DFF7C]" />
              <h3 className="text-2xl font-semibold text-white">{m.title}</h3>
              <p className="mt-2 text-white/70">{m.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#6600FF] section-padding">
        <div className="section-container space-y-6">
          {["Embracing Ideas and Innovation", "Driven for Excellence", "Dedicated to Success", "Honesty and Clarity"].map((p) => (
            <div key={p} className="flex flex-col justify-between border-b border-white/20 py-8 md:flex-row">
              <h3 className="font-display text-5xl font-extrabold text-white">{p}</h3>
              <p className="max-w-md text-white/80">We combine practical execution with ambitious thinking to deliver outcomes.</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#0D0D1F] section-padding">
        <div className="section-container">
          <h2 className="mb-12 font-display text-7xl font-extrabold text-[#4DFF7C]">THE TEAM</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Founder", role: "CEO & Founder" },
              { name: "CTO", role: "Tech Lead" },
              { name: "Project Manager", role: "Delivery" }
            ].map((m) => (
              <article key={m.name} className="overflow-hidden rounded-2xl">
                <div className="h-56 bg-gray-700" />
                <div className="bg-white p-6">
                  <h4 className="text-lg font-medium text-[#0D0D1F]">{m.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-[#6600FF]">{m.role}</p>
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
