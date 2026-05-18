import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Image from "next/image";

export const metadata: Metadata = { title: "Contact Us" };

const services = [
  "AI Integration & Automation",
  "Dedicated Development Team",
  "Mobile App Development",
  "Creating Intuitive UI/UX Design",
  "Conversion Optimised Website",
  "Custom Web App Development",
];

export default function ContactPage() {
  return (
    <main className="bg-dark text-cream">
      <section className="section-container min-h-screen py-20 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[340px_minmax(0,1fr)]">
          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Big heading */}
              <h1 className="font-display text-[clamp(3.5rem,8vw,6rem)] font-extrabold uppercase leading-[0.9] tracking-tight text-cream">
                Get in
                <br />
                Touch
              </h1>

              {/* Contact details */}
              <div className="mt-12 space-y-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/40">
                    Email
                  </p>
                  <p className="mt-2 text-base text-cream/80">info@sritek.in</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/40">
                    Phone
                  </p>
                  <p className="mt-2 text-base text-cream/80">
                    +91 79040 73129
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/40">
                    Address
                  </p>
                  <p className="mt-2 max-w-[16rem] text-base leading-6 text-cream/80">
                    Jagatpura, Jaipur,
                    <br />
                    Rajasthan, India
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom decorative element */}
            <div className="mt-16 hidden lg:block">
              <div className="flex h-48 w-48 items-center justify-center rounded-full border border-cream/10 bg-red/10">
                <div className="flex h-32 w-32 items-center justify-center rounded-full border border-cream/10 bg-red/20">
                  <span className="font-display text-4xl font-extrabold text-cream/20">
                    S
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="space-y-5">
            {/* Booking card — full width horizontal strip */}
            <div className="flex items-center justify-between rounded-2xl border border-cream/10 bg-dark-deep px-8 py-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/10">
                  <Image
                    src="/contact.png"
                    alt="S"
                    width={100}
                    height={100}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-cream">Yashaswi</p>
                  <p className="text-sm text-cream/50">
                    Ready to solve your challenges
                  </p>
                </div>
              </div>
              <Button variant="redShadow" size="sm">
                Book Meeting
              </Button>
            </div>

            {/* Main form card */}
            <div className="rounded-2xl border border-cream/10 bg-dark-deep p-8 lg:p-10">
              {/* Service tags */}
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cream/40">
                What can we do for you?
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-cream/10 bg-cream/5 px-4 py-1.5 text-xs text-cream/70 transition hover:border-red/50 hover:bg-red/10 hover:text-cream cursor-pointer"
                  >
                    {service} +
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-cream/8" />

              {/* Form fields */}
              <form className="space-y-5">
                {/* Row 1: Budget + Project type */}
                <div className="grid gap-5 lg:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/40"
                      htmlFor="budget"
                    >
                      Estimate Budget
                    </label>
                    <select
                      id="budget"
                      className="w-full rounded-xl border border-cream/10 bg-cream/5 px-4 py-3 text-sm text-cream outline-none transition focus:border-red/60 focus:ring-2 focus:ring-red/20"
                    >
                      <option className="bg-dark">Select your budget</option>
                      <option className="bg-dark">₹50k – ₹1L</option>
                      <option className="bg-dark">₹1L – ₹5L</option>
                      <option className="bg-dark">₹5L+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/40"
                      htmlFor="project"
                    >
                      Project Type
                    </label>
                    <input
                      id="project"
                      className="w-full rounded-xl border border-cream/10 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/25 outline-none transition focus:border-red/60 focus:ring-2 focus:ring-red/20"
                      placeholder="e.g. SaaS, Mobile App…"
                    />
                  </div>
                </div>

                {/* Row 2: Name + Email */}
                <div className="grid gap-5 lg:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/40"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full rounded-xl border border-cream/10 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/25 outline-none transition focus:border-red/60 focus:ring-2 focus:ring-red/20"
                      placeholder="Your Name & Surname"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/40"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-xl border border-cream/10 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/25 outline-none transition focus:border-red/60 focus:ring-2 focus:ring-red/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Row 3: Phone + Company */}
                <div className="grid gap-5 lg:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/40"
                      htmlFor="phone"
                    >
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      className="w-full rounded-xl border border-cream/10 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/25 outline-none transition focus:border-red/60 focus:ring-2 focus:ring-red/20"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/40"
                      htmlFor="company"
                    >
                      Company (optional)
                    </label>
                    <input
                      id="company"
                      className="w-full rounded-xl border border-cream/10 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/25 outline-none transition focus:border-red/60 focus:ring-2 focus:ring-red/20"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/40"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-xl border border-cream/10 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/25 outline-none transition focus:border-red/60 focus:ring-2 focus:ring-red/20 resize-none"
                    placeholder="We would love to hear from you!"
                  />
                </div>

                {/* Footer row */}
                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-cream/30">
                    By submitting, you agree to our{" "}
                    <a
                      href="/legal"
                      className="underline underline-offset-2 hover:text-cream/60 transition"
                    >
                      Terms of Use
                    </a>
                  </p>
                  <Button variant="redShadow" size="lg">
                    Submit →
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
