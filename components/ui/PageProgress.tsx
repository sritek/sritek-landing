"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollTrigger, gsap } from "@/lib/gsap";

export default function PageProgress() {
  const [percent, setPercent] = useState(0);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const circumference = 2 * Math.PI * 28;
    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const progress = self.progress;
        if (circleRef.current) {
          gsap.set(circleRef.current, {
            strokeDashoffset: circumference * (1 - progress),
          });
        }
        setPercent(Math.round(progress * 100));
      },
    });
    return () => trigger.kill();
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 hidden md:block">
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#0D0D1F] shadow-xl">
        <svg className="absolute h-16 w-16 -rotate-90" viewBox="0 0 64 64">
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="4"
            fill="none"
          />
          <circle
            ref={circleRef}
            cx="32"
            cy="32"
            r="28"
            stroke="#9a0002"
            strokeWidth="4"
            fill="none"
            strokeDasharray={2 * Math.PI * 28}
            strokeDashoffset={2 * Math.PI * 28}
          />
        </svg>
        <span className="text-xs font-bold text-white">{percent}%</span>
      </div>
    </div>
  );
}
