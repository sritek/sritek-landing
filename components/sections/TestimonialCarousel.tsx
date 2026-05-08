"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  return (
    <section className="bg-red section-padding">
      <h2 className="section-container mb-12 font-display text-7xl font-extrabold text-white">
        CLIENT REVIEWS
      </h2>
      <div className="overflow-hidden">
        <div
          className="flex gap-6 px-6 transition-transform md:px-12"
          style={{ transform: `translateX(-${index * 346}px)` }}
        >
          {testimonials.map((t, i) => (
            <article key={i} className="min-w-[340px] rounded-2xl bg-white p-8">
              <p className="mb-8 italic text-dark">{t.quote}</p>
              <p className="text-xs uppercase tracking-widest text-red">
                {t.company}
              </p>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-3">
        <button
          className="h-12 w-12 rounded-sm bg-dark text-white"
          onClick={() => setIndex((v) => Math.max(0, v - 1))}
        >
          <ChevronLeft className="mx-auto" />
        </button>
        <button
          className="h-12 w-12 rounded-sm bg-dark text-white"
          onClick={() =>
            setIndex((v) => Math.min(testimonials.length - 1, v + 1))
          }
        >
          <ChevronRight className="mx-auto" />
        </button>
      </div>
    </section>
  );
}
