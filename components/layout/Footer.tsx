"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const cols = [
  {
    title: "SERVICES",
    items: ["AI Integration", "Dedicated Team", "Mobile App Development"],
  },
  { title: "COMPANY", items: ["Projects", "About", "Articles"] },
  { title: "LEGAL", items: ["Cookie Policy", "Terms of Use"] },
  { title: "FOLLOW US", items: ["Instagram", "LinkedIn", "Twitter", "GitHub"] },
  {
    title: "GET IN TOUCH",
    items: [
      "hello@sritek.in",
      "+91-7904073129",
      "Jagatpura, Jaipur, Rajasthan, India",
    ],
  },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".watermark", {
        y: 50,
        opacity: 0.2,
        duration: 1,
        scrollTrigger: { trigger: ref.current, start: "top bottom" },
      });
    }, ref);
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  return (
    <footer ref={ref} className="bg-dark overflow-hidden">
      <div className="section-container grid grid-cols-2 gap-8 py-20 md:grid-cols-5">
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-widest text-red">
              {c.title}
            </h4>
            {c.items.map((i) => (
              <p key={i} className="mb-2 text-sm text-white/80">
                {i}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 px-12 py-6 text-xs text-white/40">
        © 2026 SRITEK
      </div>
      <div className="watermark select-none text-center font-display text-[clamp(12rem,40vw,32rem)]  font-extrabold leading-[0.85] text-red">
        SRITEK
      </div>
    </footer>
  );
}
