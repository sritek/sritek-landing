"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initGSAP() {
  if (typeof window === "undefined") return;
  gsap.defaults({ ease: "power3.out", duration: 0.9 });
  ScrollTrigger.defaults({ markers: false });
  ScrollTrigger.normalizeScroll(true);
  gsap.ticker.lagSmoothing(0);
}

export function revealText(target: string | Element, delay = 0) {
  gsap.from(target, {
    y: 60,
    opacity: 0,
    stagger: 0.08,
    delay,
    duration: 0.9,
    ease: "power3.out",
  });
}

export function fadeInUp(target: string | Element, stagger = 0.05) {
  gsap.from(target, {
    y: 40,
    opacity: 0,
    stagger,
    scrollTrigger: {
      trigger: target,
      start: "top 85%",
    },
  });
}

export function pinSection(trigger: string, endOffset = "+=100%") {
  ScrollTrigger.create({
    trigger,
    start: "top top",
    end: endOffset,
    pin: true,
    scrub: true,
  });
}

export function horizontalScroll(container: string) {
  const element = document.querySelector(container);
  if (!element) return;

  gsap.to(element, {
    xPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      scrub: true,
      pin: true,
      end: "+=200%",
    },
  });
}

export function useGSAP(callback: () => void) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      callback();
    });

    return () => ctx.revert();
  }, [callback]);
}
