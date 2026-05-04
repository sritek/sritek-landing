"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { testimonials } from "@/lib/data/testimonials";

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="flex gap-4 overflow-hidden">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`flex-shrink-0 w-full sm:w-[45%] lg:w-[30%] bg-dark border rounded-2xl p-8 min-h-[280px] flex flex-col transition-all duration-500 ${
              i === active
                ? "border-blue/[0.28] shadow-[0_0_30px_rgba(153,218,255,0.07)] opacity-100"
                : "border-blue/[0.07] opacity-50"
            }`}
            style={{ transform: `translateX(-${active * 105}%)` }}
          >
            <p className="font-avenir text-sm text-blue/55 leading-relaxed italic flex-1">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="font-avenir text-xs tracking-[0.15em] uppercase text-blue-mid mt-6">
              {t.client}
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-3 mt-8">
        <button onClick={prev} className="w-12 h-12 rounded-full bg-blue/[0.08] border border-blue/[0.18] text-blue hover:bg-blue/15 hover:shadow-[0_0_15px_rgba(153,218,255,0.15)] transition-all flex items-center justify-center">
          ←
        </button>
        <button onClick={next} className="w-12 h-12 rounded-full bg-blue/[0.08] border border-blue/[0.18] text-blue hover:bg-blue/15 hover:shadow-[0_0_15px_rgba(153,218,255,0.15)] transition-all flex items-center justify-center">
          →
        </button>
      </div>
    </div>
  );
}
