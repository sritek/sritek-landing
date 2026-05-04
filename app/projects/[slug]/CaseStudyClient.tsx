"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function CaseStudyClient({ results }: { results: string[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    gsap.from(ref.current.querySelectorAll(".result-item"), {
      y: 30, opacity: 0, stagger: 0.12, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 85%" },
    });
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {results.map((r, i) => (
        <div key={i} className="result-item text-center">
          <p
            className="font-canela text-5xl lg:text-6xl text-blue font-light"
            style={{ textShadow: "0 0 40px rgba(153,218,255,0.25)" }}
          >
            {r.match(/[\d.×%$M]+/)?.[0] || "✓"}
          </p>
          <p className="font-avenir text-sm text-blue/50 mt-3">{r}</p>
        </div>
      ))}
    </div>
  );
}
