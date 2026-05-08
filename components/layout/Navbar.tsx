"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import Button from "@/components/ui/Button";
import Image from "next/image";

const links = ["SERVICES ▾", "PROJECTS", "ABOUT", "ARTICLES", "EN ▾"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-shell", {
        y: -100,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.from(".nav-link", { opacity: 0, y: -8, stagger: 0.1, delay: 0.2 });
    }, navRef);
    return () => ctx.revert();
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
            <a
              key={link}
              className="nav-link text-xs font-bold uppercase tracking-widest text-white/85 hover:text-white cursor-pointer"
            >
              {link}
            </a>
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
            <a
              key={link}
              className="font-display text-5xl font-extrabold text-white"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
