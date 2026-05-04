"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type AnimationVariant =
  | "fadeUp"
  | "fadeIn"
  | "slideLeft"
  | "slideRight"
  | "scaleIn"
  | "maskReveal"
  | "glowIn";

interface ScrollFadeProps {
  children: React.ReactNode;
  animation?: AnimationVariant;
  delay?: number;
  duration?: number;
  stagger?: number;
  threshold?: string;
  className?: string;
}

const variants: Record<AnimationVariant, gsap.TweenVars> = {
  fadeUp: { y: 40, opacity: 0 },
  fadeIn: { opacity: 0 },
  slideLeft: { x: -60, opacity: 0 },
  slideRight: { x: 60, opacity: 0 },
  scaleIn: { scale: 0.94, opacity: 0 },
  maskReveal: { clipPath: "inset(0 100% 0 0)" },
  glowIn: { opacity: 0, filter: "blur(8px)" },
};

export default function ScrollFade({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.9,
  stagger = 0,
  threshold = "top 85%",
  className = "",
}: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const fromVars = variants[animation];
    const toVars: gsap.TweenVars = {
      ...Object.fromEntries(
        Object.keys(fromVars).map((key) => {
          if (key === "y" || key === "x") return [key, 0];
          if (key === "opacity") return [key, 1];
          if (key === "scale") return [key, 1];
          if (key === "filter") return [key, "blur(0px)"];
          if (key === "clipPath") return [key, "inset(0 0% 0 0)"];
          return [key, undefined];
        })
      ),
      duration,
      delay,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: threshold,
        toggleActions: "play none none none",
      },
    };

    if (animation === "glowIn") {
      toVars.textShadow = "0 0 60px rgba(153,218,255,0.25)";
    }

    gsap.fromTo(ref.current.children.length > 1 ? ref.current.children : ref.current, fromVars, toVars);
  }, [animation, delay, duration, stagger, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
