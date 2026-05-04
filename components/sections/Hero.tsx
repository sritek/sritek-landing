"use client";

import { useRef, useEffect } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const circleRef = useRef<SVGSVGElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  // Entrance animation
  useGSAP(() => {
    if (!wordsRef.current || !bodyRef.current || !lineRef.current) return;

    const tl = gsap.timeline({ delay: 0.2 });

    // Words stagger in
    tl.from(wordsRef.current.querySelectorAll(".hero-word"), {
      y: 80,
      opacity: 0,
      stagger: 0.08,
      duration: 0.9,
      ease: "power3.out",
    });

    // Body copy fades in
    tl.from(
      bodyRef.current,
      { y: 20, opacity: 0, duration: 0.7, ease: "power3.out" },
      "-=0.3"
    );

    // Line draws left to right
    tl.fromTo(
      lineRef.current,
      { clipPath: "inset(0 100% 0 0)" },
      { clipPath: "inset(0 0% 0 0)", duration: 0.8, ease: "power2.inOut" },
      "-=0.5"
    );
  }, []);

  // Circle rotation
  useGSAP(() => {
    if (!circleRef.current) return;

    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 40,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center",
    });
  }, []);

  // Mouse parallax for circles
  useEffect(() => {
    if (!circleRef.current) return;

    const quickX = gsap.quickTo(circleRef.current, "x", {
      duration: 0.6,
      ease: "power3.out",
    });
    const quickY = gsap.quickTo(circleRef.current, "y", {
      duration: 0.6,
      ease: "power3.out",
    });

    const handleMove = (e: MouseEvent) => {
      const xPercent = (e.clientX / window.innerWidth - 0.5) * 2;
      const yPercent = (e.clientY / window.innerHeight - 0.5) * 2;
      quickX(xPercent * 20);
      quickY(yPercent * 20);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const words = ["TURNING", "IDEAS", "INTO", "POWERFUL", "SOLUTIONS"];
  const cornerPositions = [
    "top-8 left-8", "top-8 right-24", "top-16 left-[40%]",
    "top-24 right-8", "bottom-32 left-12", "bottom-16 right-16",
    "top-[45%] left-6", "top-[30%] right-[30%]", "bottom-8 left-[60%]",
    "bottom-24 right-[45%]", "top-[60%] right-12", "bottom-40 left-[25%]",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] bg-dark dot-grid-bg overflow-hidden flex flex-col justify-center"
    >
      {/* Floating corner squares */}
      {cornerPositions.map((pos, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 bg-blue/10 ${pos}`}
        />
      ))}

      {/* Decorative circles */}
      <svg
        ref={circleRef}
        className="absolute right-[-5vw] top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] pointer-events-none"
        viewBox="0 0 400 400"
      >
        {/* Large circle outline */}
        <circle
          cx="200"
          cy="200"
          r="195"
          fill="none"
          stroke="rgba(153,218,255,0.12)"
          strokeWidth="2"
        />
        {/* Smaller filled circle */}
        <circle
          cx="220"
          cy="180"
          r="80"
          fill="rgba(74,184,240,0.08)"
        />
        {/* Radial glow */}
        <defs>
          <radialGradient id="heroGlow">
            <stop offset="0%" stopColor="rgba(153,218,255,0.05)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="180" fill="url(#heroGlow)" />
      </svg>

      {/* Typography */}
      <div
        ref={wordsRef}
        className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full"
      >
        {words.map((word, i) => (
          <div
            key={word}
            className={`overflow-hidden ${
              i === 1 ? "text-right" : i === 3 ? "text-center" : i === 4 ? "text-right" : "text-left"
            }`}
          >
            <span className="hero-word inline-block font-canela text-[12vw] lg:text-[11vw] leading-[0.9] text-blue font-light">
              {word}
            </span>
          </div>
        ))}
      </div>

      {/* Body copy */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full mt-8 lg:mt-12">
        <p
          ref={bodyRef}
          className="font-avenir text-sm text-blue/50 max-w-xs leading-relaxed"
        >
          Stop building slow. We ship your SaaS 3× faster with
          production-grade quality.
        </p>
      </div>

      {/* Accent line */}
      <div
        ref={lineRef}
        className="absolute bottom-16 left-6 lg:left-12 right-6 lg:right-12 h-[1px] bg-blue/20"
      />
    </section>
  );
}
