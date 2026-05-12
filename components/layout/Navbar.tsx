"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import Button from "@/components/ui/Button";
import Image from "next/image";

const links = [
  { label: "SERVICES ▾", href: "/services" },
  { label: "PROJECTS", href: "/projects" },
  { label: "ABOUT", href: "/about" },
  { label: "ARTICLES", href: "/articles" },
  { label: "EN ▾", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
  if (!navRef.current) return;

  const nav = navRef.current;

  gsap.fromTo(
    ".nav-shell",
    {
      y: -80,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
      clearProps: "all",
    }
  );

  gsap.fromTo(
    ".nav-link",
    {
      y: -10,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.08,
      delay: 0.15,
      duration: 0.45,
      ease: "power2.out",
      clearProps: "all",
    }
  );
}, []);

  return (
    <nav
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 bg-red"
      aria-label="Main navigation"
    >
      <div className="nav-shell section-container flex h-[72px] items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl font-extrabold text-white"
        >
          <Image src="/logo.svg" alt="SRITEK" width={130} height={130} />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="nav-link text-xs font-bold uppercase tracking-widest text-white/85 hover:text-white cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Button
          className="hidden md:inline-flex"
          variant="primary"
          href="/contact"
        >
          Get In Touch
        </Button>
        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center gap-6 bg-red px-8 md:hidden">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-display text-5xl font-extrabold text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
