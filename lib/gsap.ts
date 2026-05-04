"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Initialize GSAP defaults — call once from root layout
 */
export function initGSAP() {
  ScrollTrigger.defaults({ markers: false });
  gsap.defaults({ ease: "power3.out", duration: 0.9 });
  gsap.ticker.lagSmoothing(0);
}

/**
 * Reveal text with staggered word/line animation
 */
export function revealText(
  target: string | Element,
  delay: number = 0
): gsap.core.Timeline {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  tl.from(target, {
    y: 60,
    opacity: 0,
    duration: 0.9,
    delay,
    ease: "power3.out",
  });

  return tl;
}

/**
 * Fade in + translateY animation with ScrollTrigger
 */
export function fadeInUp(
  target: string | Element,
  stagger: number = 0.08
): gsap.core.Tween {
  return gsap.from(target, {
    y: 40,
    opacity: 0,
    stagger,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: target,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
}

/**
 * Pin a section using ScrollTrigger
 */
export function pinSection(
  trigger: string,
  endOffset: string = "+=150%"
): ScrollTrigger {
  return ScrollTrigger.create({
    trigger,
    start: "top top",
    end: endOffset,
    pin: true,
    pinSpacing: true,
  });
}

/**
 * Horizontal scroll for a container
 */
export function horizontalScroll(container: string): gsap.core.Tween {
  const sections = gsap.utils.toArray(`${container} > *`) as Element[];
  return gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      end: () => "+=" + (document.querySelector(container) as HTMLElement)?.offsetWidth,
    },
  });
}

/**
 * Custom React hook that wraps gsap.context for cleanup
 */
export function useGSAP(
  callback: (ctx: gsap.Context) => void,
  deps: React.DependencyList = [],
  scope?: React.RefObject<HTMLElement | null>
) {
  const ctx = useRef<gsap.Context | null>(null);

  useEffect(() => {
    ctx.current = gsap.context(() => {
      callback(ctx.current!);
    }, scope?.current || undefined);

    return () => {
      ctx.current?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ctx;
}

export { gsap, ScrollTrigger };
