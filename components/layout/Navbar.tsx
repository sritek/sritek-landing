"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import type { NavItem } from "@/lib/types";

const navItems: NavItem[] = [
  {
    label: "SERVICES",
    href: "/services",
    children: [
      { label: "AI Integration & Automation", href: "/services/ai-integration" },
      { label: "Dedicated Development Team", href: "/services/dedicated-team" },
      { label: "Mobile App Development", href: "/services/mobile-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Conversion Optimised Website", href: "/services/conversion-website" },
      { label: "Custom Web App Development", href: "/services/custom-web-app" },
    ],
  },
  { label: "PROJECTS", href: "/projects" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Entrance animation
  useGSAP(() => {
    if (!linksRef.current) return;
    gsap.from(linksRef.current.children, {
      y: -10,
      opacity: 0,
      stagger: 0.06,
      duration: 0.6,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        mobileMenuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.5, ease: "power3.out" }
      );
      gsap.from(mobileMenuRef.current.querySelectorAll(".mobile-link"), {
        x: 40,
        opacity: 0,
        stagger: 0.06,
        duration: 0.5,
        delay: 0.2,
        ease: "power3.out",
      });
    } else {
      document.body.style.overflow = "";
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [mobileOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-500 ${
          scrolled
            ? "bg-dark/[0.92] backdrop-blur-md border-b border-blue/10"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-canela text-blue font-light text-2xl tracking-[0.15em] hover:opacity-80 transition-opacity"
          >
            SRITEK
          </Link>

          {/* Desktop Nav */}
          <div
            ref={linksRef}
            className="hidden lg:flex items-center gap-8"
          >
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="font-avenir text-xs font-semibold tracking-[0.15em] uppercase text-blue/60 hover:text-blue transition-colors flex items-center gap-1.5"
                  >
                    {item.label}
                    <svg
                      className={`w-3 h-3 transition-transform duration-300 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="font-avenir text-xs font-semibold tracking-[0.15em] uppercase text-blue/60 hover:text-blue transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && dropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-dark-surface border border-blue/10 p-4 min-w-[320px] grid grid-cols-2 gap-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setDropdownOpen(false)}
                        className="font-avenir text-xs text-blue/50 hover:text-blue transition-colors py-2 px-3 hover:bg-blue/[0.04]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-5">
            <span className="font-avenir text-xs tracking-widest text-blue/40">
              EN
            </span>
            <Link
              href="/contact"
              className="bg-blue text-dark px-5 py-2.5 font-avenir text-xs font-bold tracking-[0.15em] uppercase hover:bg-blue-mid hover:shadow-[0_0_20px_rgba(153,218,255,0.3)] transition-all duration-300"
            >
              GET IN TOUCH
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 w-7 z-50 relative"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] bg-blue transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] bg-blue transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] bg-blue transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-40 bg-dark flex flex-col items-center justify-center gap-8 lg:hidden"
        style={{ transform: "translateX(100%)" }}
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="mobile-link font-canela text-4xl text-blue font-light tracking-wide hover:text-blue-mid transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setMobileOpen(false)}
          className="mobile-link mt-4 bg-blue text-dark px-8 py-3 font-avenir text-xs font-bold tracking-[0.15em] uppercase"
        >
          GET IN TOUCH
        </Link>
      </div>
    </>
  );
}
