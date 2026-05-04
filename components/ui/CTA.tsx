"use client";

import Link from "next/link";
import { useRef } from "react";

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
    "bg-blue text-dark hover:bg-blue-mid hover:shadow-[0_0_30px_rgba(153,218,255,0.3)]",
  outline:
    "border border-blue/35 text-blue hover:border-blue hover:bg-blue/[0.06] hover:shadow-[0_0_20px_rgba(153,218,255,0.1)]",
  ghost:
    "text-blue/55 underline underline-offset-4 hover:text-blue",
};

export default function CTA({
  label = "GET IN TOUCH",
  href = "/contact",
  variant = "solid",
  size = "md",
  className = "",
  onClick,
  external = false,
}: CTAProps) {
  const btnRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const baseClasses = `
    inline-block font-avenir font-semibold uppercase tracking-[0.15em]
    transition-all duration-300 relative overflow-hidden
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  const handleClick = (e: React.MouseEvent) => {
    // Click spring animation
    const el = btnRef.current;
    if (el) {
      el.style.transform = "scale(0.97)";
      setTimeout(() => {
        el.style.transform = "scale(1)";
      }, 150);
    }
    onClick?.();
  };

  if (onClick && !href) {
    return (
      <button
        ref={btnRef as React.RefObject<HTMLButtonElement>}
        onClick={handleClick}
        className={baseClasses}
      >
        {label}
      </button>
    );
  }

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      ref={btnRef as React.RefObject<HTMLAnchorElement>}
      href={href}
      onClick={handleClick}
      className={baseClasses}
      {...linkProps}
    >
      {label}
    </Link>
  );
}
