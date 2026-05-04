"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface SplitTextRevealProps {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  splitBy?: "words" | "chars";
}

export default function SplitTextReveal({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
  splitBy = "words",
}: SplitTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const elements = containerRef.current.querySelectorAll(".split-item");

    gsap.from(elements, {
      y: 80,
      opacity: 0,
      duration: 0.9,
      stagger: splitBy === "chars" ? 0.03 : 0.08,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, [text, delay, splitBy]);

  const items =
    splitBy === "chars" ? text.split("") : text.split(" ");

  return (
    <div ref={containerRef}>
      {/* @ts-expect-error - dynamic tag */}
      <Tag className={className}>
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden"
            style={{ verticalAlign: "top" }}
          >
            <span className="split-item inline-block">
              {item}
              {splitBy === "words" && i < items.length - 1 ? "\u00A0" : ""}
            </span>
          </span>
        ))}
      {/* @ts-expect-error - dynamic tag */}
      </Tag>
    </div>
  );
}
