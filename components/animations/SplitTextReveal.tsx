"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

ScrollTrigger && gsap.registerPlugin(ScrollTrigger);

interface SplitTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  splitBy?: "words" | "chars";
}

export function SplitTextReveal({
  text,
  className = "",
  delay = 0,
  splitBy = "words",
}: SplitTextRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parts = useMemo(() => {
    return splitBy === "chars" ? text.split("") : text.split(" ");
  }, [text, splitBy]);

  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;

    const spans = target.querySelectorAll("span");
    gsap.from(spans, {
      y: 60,
      opacity: 0,
      stagger: 0.04,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: target,
        start: "top 90%",
      },
    });
  }, [delay]);

  return (
    <div ref={containerRef} className={className}>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`} className="inline-block overflow-hidden">
          <span className="inline-block">
            {part}
            {splitBy === "words" ? " " : ""}
          </span>
        </span>
      ))}
    </div>
  );
}
