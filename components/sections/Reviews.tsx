"use client";

import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import ScrollFade from "@/components/animations/ScrollFade";

export default function Reviews() {
  return (
    <section className="bg-dark-surface py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <ScrollFade animation="glowIn">
          <h2 className="font-canela text-5xl lg:text-7xl text-blue font-light mb-12 lg:mb-16">
            CLIENT REVIEWS
          </h2>
        </ScrollFade>
        <TestimonialCarousel />
      </div>
    </section>
  );
}
