import { CTA } from "../ui/CTA";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] px-6 py-20 text-blue">
      <div className="dot-grid-bg absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-[1280px] text-center">
        <h2 className="font-canela text-[9vw] font-light leading-none text-blue text-shadow-glow">
          LET'S WORK TOGETHER
        </h2>
        <div className="mx-auto mt-10 inline-block max-w-xs rounded-3xl border border-[#99daff]/8 bg-[#1a1a1a] p-6 text-left text-[#99daff]/55">
          We create digital products that launch faster and scale reliably —
          with polished UI, strong engineering, and clear communication.
        </div>
        <div className="mt-12">
          <CTA size="lg" />
        </div>
      </div>
    </section>
  );
}
