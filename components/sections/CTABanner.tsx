"use client";

import GridDotBackground from "@/components/ui/GridDotBackground";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="bg-[#6600FF] px-6 pb-12">
      <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-2xl bg-[#0D0D1F]">
        <GridDotBackground />
        <div className="relative z-10 text-center">
          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] font-extrabold text-[#4DFF7C]">LET&apos;S WORK TOGETHER</h2>
          <Button className="mt-8" variant="purpleShadow" href="/contact">Get In Touch</Button>
        </div>
        <div className="absolute right-8 top-3/4 max-w-[280px] -translate-y-1/2 rounded-2xl bg-white p-6 text-[#0D0D1F]">
          Ready to bring your ideas to life? We&apos;re here to help.
        </div>
      </div>
    </section>
  );
}
