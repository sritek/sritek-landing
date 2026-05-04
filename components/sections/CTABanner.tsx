"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import CTA from "@/components/ui/CTA";

export default function CTABanner() {
  const headingRef = useRef<HTMLDivElement>(null);
  const arcRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    if (!headingRef.current) return;
    gsap.from(headingRef.current.querySelectorAll(".cta-word"), {
      y: 60, opacity: 0, stagger: 0.08, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: headingRef.current, start: "top 80%" },
    });
    if (arcRef.current) {
      const length = arcRef.current.getTotalLength();
      gsap.fromTo(arcRef.current,
        { strokeDasharray: length, strokeDashoffset: length },
        { strokeDashoffset: 0, duration: 1.5, ease: "power2.out",
          scrollTrigger: { trigger: arcRef.current, start: "top 85%" } }
      );
    }
  }, []);

  const words = "LET'S WORK TOGETHER".split(" ");

  return (
    <section className="relative bg-dark-deep dot-grid-bg py-24 lg:py-40 overflow-hidden">
      <svg className="absolute top-0 right-0 w-[60%] h-full pointer-events-none opacity-60" viewBox="0 0 400 300" preserveAspectRatio="none">
        <path ref={arcRef} d="M 400 0 Q 200 150 400 300" fill="none" stroke="rgba(153,218,255,0.1)" strokeWidth="2" />
      </svg>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div className="flex-1" ref={headingRef}>
            <h2 className="font-canela text-[9vw] text-blue font-light leading-none" style={{ textShadow: "0 0 80px rgba(153,218,255,0.18)" }}>
              {words.map((w, i) => (
                <span key={i} className="cta-word inline-block mr-[0.3em]">{w}</span>
              ))}
            </h2>
          </div>
          <div className="bg-dark-surface border border-blue/[0.08] p-6 rounded-xl max-w-xs">
            <p className="font-avenir text-sm text-blue/55 mb-6">
              Ready to turn your idea into powerful software? Let&apos;s talk about your project.
            </p>
            <CTA size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
