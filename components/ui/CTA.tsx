"use client";

import Link from "next/link";
import { MouseEvent } from "react";

interface CTAProps {
  label?: string;
  href?: string;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

const sizeClasses = {
  sm: "text-xs px-4 py-2",
  md: "text-xs px-6 py-3",
  lg: "text-sm px-8 py-4",
};

const variantClasses = {
  solid:
    "bg-blue text-[#121212] hover:bg-blue-mid shadow-[0_0_30px_rgba(153,218,255,0.3)]",
  outline:
    "border border-[#99daff]/35 bg-transparent text-blue hover:border-blue hover:bg-[rgba(153,218,255,0.06)] shadow-[0_0_20px_rgba(153,218,255,0.1)]",
  ghost:
    "bg-transparent text-[#99daff]/55 underline underline-offset-4 hover:text-blue",
};

export function CTA({
  label = "GET IN TOUCH",
  href = "/contact",
  variant = "solid",
  size = "md",
  className = "",
  onClick,
  external = false,
}: CTAProps) {
  const classes = `inline-flex items-center justify-center rounded-none font-avenir font-semibold uppercase tracking-widest transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href && !external) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {label}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      onClick={(event: MouseEvent<HTMLAnchorElement>) => {
        onClick?.();
        if (!href) event.preventDefault();
      }}
    >
      {label}
    </a>
  );
}
