"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap"; // ✅ direct import, no custom wrapper
import Button from "@/components/ui/Button";
import Image from "next/image";
import clsx from "clsx";

const links = [
  { label: "SERVICES ▾", href: "/services" },
  { label: "PROJECTS", href: "/projects" },
  { label: "ABOUT", href: "/about", active: true },
  { label: "ARTICLES", href: "/articles" },
  { label: "EN ▾", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return; // ✅ guard: don't run if ref isn't attached

    const ctx = gsap.context(() => {
      gsap.from(".nav-shell", {
        y: -100,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".nav-link", {
        opacity: 0,
        y: -10,
        stagger: 0.08,
        delay: 0.2,
        duration: 0.45,
        ease: "power2.out",
      });
    }, el); // ✅ pass navRef.current, not navRef

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 bg-red"
      aria-label="Main navigation"
    >
      <div className="nav-shell section-container flex h-[78px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="SRITEK"
            width={132}
            height={32}
            priority
            className="w-[120px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-3 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={clsx(
                "nav-link rounded-[10px] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.12em] transition-all duration-300",
                link.active
                  ? "bg-black text-white"
                  : "text-white/90 hover:bg-black/20 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Button
          className="hidden md:inline-flex rounded-xl px-7 text-[12px] font-bold uppercase tracking-[0.12em]"
          variant="primary"
          href="/contact"
        >
          Get In Touch
        </Button>

        {/* Mobile Toggle */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed inset-0 z-40 flex flex-col justify-center gap-6 bg-red px-8 transition-all duration-500 md:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setOpen(false)}
            className={clsx(
              "font-display text-5xl font-extrabold uppercase tracking-tight text-white transition-all duration-300",
              link.active && "text-primary",
            )}
          >
            {link.label}
          </Link>
        ))}

        <Button
          variant="primary"
          href="/contact"
          className="mt-6 w-full justify-center rounded-xl py-4 text-sm font-bold uppercase tracking-[0.12em]"
        >
          Get In Touch
        </Button>
      </div>
    </nav>
  );
}
