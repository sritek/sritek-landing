"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface ServiceCardProps {
  title: string;
  number: string;
  href: string;
  description?: string;
}

export default function ServiceCard({
  title,
  number,
  href,
  description,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  return (
    <Link
      ref={cardRef}
      href={href}
      className="group block bg-dark border border-blue/[0.06] p-8 transition-all duration-500 hover:border-blue/25 hover:shadow-[0_0_30px_rgba(153,218,255,0.06)] relative overflow-hidden"
    >
      {/* Number label */}
      <span className="font-avenir text-xs tracking-[0.15em] text-blue/[0.18] uppercase">
        SERVICE / {number}
      </span>

      {/* Title */}
      <h3 className="font-canela text-2xl lg:text-3xl text-blue font-light leading-tight mt-3">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="font-avenir text-xs text-blue/30 leading-relaxed mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {description}
        </p>
      )}

      {/* Hover arrow */}
      <div className="absolute bottom-4 right-4 w-10 h-10 bg-blue text-dark flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <span className="text-lg">→</span>
      </div>
    </Link>
  );
}
