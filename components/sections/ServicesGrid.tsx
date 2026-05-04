"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/lib/data/services";

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cardsRef.current) return;

    gsap.from(cardsRef.current.querySelectorAll(".service-card"), {
      scale: 0.97,
      opacity: 0,
      stagger: 0.06,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-dark-surface py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Label */}
        <p className="font-avenir text-xs tracking-[0.2em] uppercase text-blue-mid mb-12">
          OUR SERVICES
        </p>

        {/* Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-blue/[0.06]"
        >
          {services.map((service) => (
            <div key={service.slug} className="service-card">
              <ServiceCard
                title={service.title}
                number={service.number}
                href={`/services/${service.slug}`}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
