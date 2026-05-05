import Lenis from "@studio-freight/lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function initLenis() {
  const lenis = new Lenis({
    // Keep Lenis mounted for future effects, but make behavior near-native.
    smoothWheel: false,
    syncTouch: false,
    wheelMultiplier: 1,
    touchMultiplier: 1,
    duration: 0.1
  });

  const raf = (time: number) => {
    lenis.raf(time * 1000);
  };

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  return {
    lenis,
    destroy() {
      gsap.ticker.remove(raf);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
    }
  };
}
