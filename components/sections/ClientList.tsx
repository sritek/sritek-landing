"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import CTA from "@/components/ui/CTA";
import type { ClientItem } from "@/lib/types";

const clients: ClientItem[] = [
  { name: "ZEPHYR", service: "Web Development & UI/UX Design" },
  { name: "AXIOM", service: "Custom SaaS Platform" },
  { name: "NODEX", service: "AI Integration & Automation" },
  { name: "STRATA", service: "Mobile App Development" },
  { name: "KOVA", service: "E-Commerce & UI/UX Design" },
  { name: "LUMINA", service: "ERP System" },
  { name: "VANTAGE", service: "Web Development" },
  { name: "CIRRUS", service: "Dedicated Team" },
  { name: "PRISM", service: "Sales Analytics Platform" },
  { name: "VELOX", service: "Web Development & UI/UX Design" },
];

export default function ClientList() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!headingRef.current || !rowsRef.current) return;

    // Heading word reveal
    gsap.from(headingRef.current.querySelectorAll(".word"), {
      y: 40,
      opacity: 0,
      stagger: 0.06,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    });

    // Rows stagger in
    gsap.from(rowsRef.current.querySelectorAll(".client-row"), {
      y: 20,
      opacity: 0,
      stagger: 0.04,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: rowsRef.current,
        start: "top 80%",
      },
    });
  }, []);

  const headingWords = "TRUSTED BY INDIA'S FASTEST GROWING COMPANIES".split(" ");

  return (
    <section ref={sectionRef} className="bg-dark-deep dot-grid-bg py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Sticky */}
          <div className="lg:w-[35%] lg:sticky lg:top-24 lg:self-start">
            <div ref={headingRef}>
              <h2 className="font-canela text-4xl lg:text-5xl font-light text-blue leading-tight">
                {headingWords.map((word, i) => (
                  <span key={i} className="word inline-block mr-[0.3em]">
                    {word}
                  </span>
                ))}
              </h2>
            </div>
            <div className="mt-8">
              <CTA variant="outline" label="WORK WITH US" />
            </div>
          </div>

          {/* Right Column - Client Rows */}
          <div ref={rowsRef} className="lg:w-[65%]">
            {clients.map((client, i) => (
              <div
                key={client.name}
                className="client-row group flex items-center py-5 border-b border-blue/[0.07] hover:bg-blue/[0.03] transition-colors cursor-pointer px-2"
              >
                <span className="text-blue-mid mr-4 transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
                <span className="font-canela text-xl text-blue font-light flex-1">
                  {client.name}
                </span>
                <span className="font-avenir text-xs text-blue/30 hidden sm:block">
                  {client.service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
