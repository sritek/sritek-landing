"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function AboutClient() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!headingRef.current) return;
    const words = headingRef.current.querySelectorAll(".about-word");
    gsap.from(words, {
      y: 100, opacity: 0, stagger: 0.08, duration: 0.9, ease: "power3.out",
    });
  }, []);

  const headingWords = "THE TEAM BEHIND YOUR SOFTWARE".split(" ");

  return (
    <h1 ref={headingRef} className="font-canela text-[11vw] leading-none text-blue font-light" style={{ textShadow: "0 0 120px rgba(153,218,255,0.12)" }}>
      {headingWords.map((word, i) => (
        <span key={i} className="about-word inline-block mr-[0.3em]">{word}</span>
      ))}
    </h1>
  );
}
