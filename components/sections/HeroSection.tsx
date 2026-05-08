"use client";

import { useEffect } from "react";
import GridDotBackground from "@/components/ui/GridDotBackground";
import { gsap } from "@/lib/gsap";
import Image from "next/image";

export default function HeroSection() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
      });
      gsap.from(".hero-sub", { y: 20, opacity: 0, delay: 0.8 });
      gsap.from(".hero-mascot", { x: 150, opacity: 0, delay: 0.4 });
      gsap.to(".hero-mascot", {
        y: -20,
        yoyo: true,
        repeat: -1,
        duration: 2.5,
        ease: "sine.inOut",
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className="bg-red px-6 pb-12 pt-[72px]">
      <div className="relative min-h-[85vh] overflow-hidden rounded-2xl bg-dark p-6 md:p-12">
        <GridDotBackground />
        <div className="relative z-10">
          <h1 className="font-display font-extrabold uppercase text-cream">
            {["TURNING", "IDEAS", "INTO POWERFUL", "SOLUTIONS"].map((line) => (
              <span
                key={line}
                className="hero-line block text-[clamp(3rem,10vw,9rem)] leading-[0.9]"
              >
                {line}
              </span>
            ))}
          </h1>
          <p className="hero-sub mt-14 max-w-[300px] text-white/90">
            Stop wasting your time. We ship your SaaS 3x faster with
            production-grade quality.
          </p>
        </div>
        <div className="hero-mascot absolute right-6 top-1/2 hidden -translate-y-1/2 md:block">
          <div>
            <Image
              src="/hero-girl.png"
              alt="SRITEK Mascot"
              width={500}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
