"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "SERVICES", href: "/services" },
  { label: "PROJECTS", href: "/projects" },
  { label: "ABOUT", href: "/about" },
  { label: "ARTICLES", href: "/articles" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#121212]/95 backdrop-blur-xl border-b border-[#99daff]/10" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 text-[#99daff]">
        <Link
          href="/"
          className="font-canela text-2xl font-light tracking-[0.35em] text-blue"
        >
          SRITEK
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.15em] text-[#99daff]/60 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-xs font-semibold uppercase tracking-[0.2em] text-[#99daff]/60">
            EN
          </button>
          <Link
            href="/contact"
            className="rounded-none bg-blue px-5 py-2.5 text-xs font-bold uppercase text-[#121212] transition hover:bg-blue-mid"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </header>
  );
}
