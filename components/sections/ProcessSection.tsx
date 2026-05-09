"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GridDotBackground from "@/components/ui/GridDotBackground";
import SectionLabel from "@/components/ui/SectionLabel";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
  {
    title: "START WITH A CONVERSATION",
    description:
      "Contact us, and we'll determine how to help you meet your needs, goals and challenges.",
    color: "bg-red",
  },
  {
    title: "KICKOFF AND PLANNING",
    description:
      "We collaborate closely to define the project, its scope, and a clear roadmap.",
    color: "bg-red",
  },
  {
    title: "DESIGN DEVELOPMENT",
    description:
      "From idea to working software, we handle every step - design, development, and thorough testing - to bring your vision to life.",
    color: "bg-red",
  },
  {
    title: "LAUNCH & BEYOND",
    description:
      "We'll launch it, then stick around to ensure everything runs smoothly.",
    color: "bg-red",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Calculation: Total steps - 1 = how many "screens" we need to move
      const totalSlides = PROCESS_STEPS.length;

      const pin = gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: `-${(totalSlides - 1) * 100}vw`, // Dynamically moves -300vw for 4 steps
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            // Increase end value slightly for 4 slides so the scroll doesn't feel too fast
            end: `+=${totalSlides * 800}`,
            invalidateOnRefresh: true,
            antialias: true,
          },
        },
      );
      return () => pin.kill();
    },
    { scope: triggerRef },
  );

  return (
    <section ref={triggerRef} className="overflow-hidden bg-dark">
      <div
        ref={sectionRef}
        // Updated: Dynamic width based on the number of steps
        style={{ width: `${PROCESS_STEPS.length * 100}vw` }}
        className="relative flex h-screen flex-row"
      >
        {PROCESS_STEPS.map((step, index) => (
          <div key={index} className="relative h-screen w-[100vw] flex-none">
            <div className="absolute inset-0 z-0">
              <GridDotBackground />
            </div>

            <div className="section-container relative z-10 grid h-full gap-12 items-center lg:grid-cols-2">
              <div>
                <SectionLabel>OUR PROCESS</SectionLabel>
                <h2 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-tight text-cream uppercase">
                  {step.title}
                </h2>
                <div className="mt-8 max-w-md rounded-2xl bg-white p-8 text-dark shadow-2xl">
                  <p className="text-lg font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div
                  className={`h-[320px] w-[450px] rotate-3 rounded-2xl shadow-2xl transition-transform hover:rotate-0 duration-500 ${step.color}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
