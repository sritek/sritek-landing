"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import CTA from "@/components/ui/CTA";

export default function WhoWeAre() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cardsRef.current) return;

    gsap.from(cardsRef.current.querySelectorAll(".photo-card"), {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section className="bg-dark-deep py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left - Photo collage */}
          <div ref={cardsRef} className="lg:w-1/2 relative h-[400px] lg:h-[500px] w-full max-w-lg">
            <div className="photo-card absolute w-56 h-72 bg-blue/[0.05] border border-blue/[0.12] rounded-xl -rotate-2 left-0 top-0 flex items-center justify-center hover:shadow-[0_0_30px_rgba(153,218,255,0.08)] transition-shadow duration-500">
              <span className="font-avenir text-xs text-blue/[0.12] tracking-widest uppercase">
                TEAM PHOTO
              </span>
            </div>
            <div className="photo-card absolute w-44 h-56 bg-blue/[0.05] border border-blue/[0.12] rounded-xl rotate-[1.5deg] top-16 left-24 flex items-center justify-center hover:shadow-[0_0_30px_rgba(153,218,255,0.08)] transition-shadow duration-500">
              <span className="font-avenir text-xs text-blue/[0.12] tracking-widest uppercase">
                TEAM PHOTO
              </span>
            </div>
            <div className="photo-card absolute w-48 h-64 bg-blue/[0.05] border border-blue/[0.12] rounded-xl -rotate-1 top-32 left-8 flex items-center justify-center hover:shadow-[0_0_30px_rgba(153,218,255,0.08)] transition-shadow duration-500">
              <span className="font-avenir text-xs text-blue/[0.12] tracking-widest uppercase">
                TEAM PHOTO
              </span>
            </div>
          </div>

          {/* Right - Text content */}
          <div className="lg:w-1/2">
            <h2 className="font-canela text-5xl lg:text-6xl text-blue font-light">
              WHO WE ARE
            </h2>
            <p className="font-avenir text-sm text-blue/[0.48] leading-relaxed max-w-md mt-6">
              Sritek is a talented team of developers, UI/UX designers, and
              project managers creating custom software, SaaS, and AI that
              scales your business. We don&apos;t just write code — we architect
              solutions that transform how companies operate.
            </p>
            <div className="mt-8">
              <CTA variant="outline" label="ABOUT US" href="/about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
