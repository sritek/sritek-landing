"use client";

import Link from "next/link";

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  href: string;
  imagePlaceholderColor?: string;
}

export default function ProjectCard({
  category,
  title,
  description,
  href,
  imagePlaceholderColor = "#0c1520",
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-dark border border-blue/[0.07] rounded-2xl overflow-hidden p-8 transition-all duration-500 hover:border-blue/[0.22] hover:shadow-[0_0_40px_rgba(153,218,255,0.05)]"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="flex-1">
          <span className="font-avenir text-xs tracking-[0.15em] uppercase text-blue-mid">
            {category}
          </span>
          <h3 className="font-canela text-2xl lg:text-3xl text-blue font-light mt-2 leading-tight">
            {title}
          </h3>
          <p className="font-avenir text-sm text-blue/[0.38] leading-relaxed mt-3">
            {description}
          </p>
          <span className="inline-block mt-4 text-blue opacity-0 group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0 transition-all duration-500">
            →
          </span>
        </div>
        <div
          className="w-full lg:w-48 h-48 lg:h-auto rounded-xl flex-shrink-0"
          style={{ backgroundColor: imagePlaceholderColor }}
        />
      </div>
    </Link>
  );
}
