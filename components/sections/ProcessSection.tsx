"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const designRef = useRef<HTMLSpanElement>(null);
  const devRef = useRef<HTMLSpanElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!designRef.current || !devRef.current) return;

    // Heading slide-in
    gsap.from(designRef.current, {
      x: -60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    gsap.from(devRef.current, {
      x: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    // Grid squares wave
    if (gridRef.current) {
      gsap.from(gridRef.current.querySelectorAll(".grid-square"), {
        opacity: 0,
        stagger: 0.02,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      });
    }
  }, []);

  // Generate 6x6 grid squares
  const gridSquares = Array.from({ length: 36 }, (_, i) => {
    const isLit = i % 3 === 0 || i % 7 === 0;
    return (
      <div
        key={i}
        className={`grid-square aspect-square rounded-sm ${
          isLit
            ? "bg-blue-mid/[0.12] shadow-[0_0_8px_rgba(153,218,255,0.2)]"
            : "bg-blue/[0.06]"
        }`}
      />
    );
  });

  return (
    <section ref={sectionRef} className="bg-dark dot-grid-bg py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Label */}
        <p className="font-avenir text-xs tracking-[0.2em] uppercase text-blue/[0.22] mb-12">
          OUR PROCESS
        </p>

        {/* Large heading */}
        <div className="mb-16 lg:mb-24">
          <div className="text-center">
            <span
              ref={designRef}
              className="font-canela text-[8vw] text-blue font-light leading-none inline-block"
            >
              DESIGN
            </span>
            <span className="font-canela text-[8vw] text-blue/20 font-light leading-none inline-block mx-4">
              ·
            </span>
            <span
              ref={devRef}
              className="font-canela text-[8vw] text-blue font-light leading-none inline-block"
            >
              DEVELOPMENT
            </span>
          </div>
        </div>

        {/* Content grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Description card */}
          <div className="lg:w-1/2">
            <div className="bg-dark-surface border border-blue/[0.08] p-8 rounded-2xl max-w-sm shadow-[inset_0_1px_0_rgba(153,218,255,0.06)]">
              <p className="font-avenir text-sm text-blue/55 leading-relaxed">
                From idea to working software, we handle every step — discovery,
                design, development, and thorough testing — to bring your vision
                to life.
              </p>
            </div>
          </div>

          {/* Grid visual */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div
              ref={gridRef}
              className="bg-blue/[0.03] border border-blue/[0.08] rounded-xl p-6 w-full max-w-sm"
            >
              <div className="grid grid-cols-6 gap-2">
                {gridSquares}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
