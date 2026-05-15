"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Button from "@/components/ui/Button";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "SERVICES",
    href: "/services",
    dropdown: true,
    items: [
      "AI INTEGRATION & AUTOMATION",
      "DEDICATED DEVELOPMENT TEAM",
      "MOBILE APP DEVELOPMENT",
      "CREATING INTUITIVE UI/UX DESIGN",
      "CONVERSION OPTIMISED WEBSITE",
      "CUSTOM WEB APP DEVELOPMENT",
    ],
  },
  { label: "PROJECTS", href: "/projects" },
  { label: "ABOUT", href: "/about" },
  { label: "ARTICLES", href: "/articles" },
  { label: "EN", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!navRef.current) return;

    const ctx = gsap.context(() => {
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
        },
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
        },
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    function handleDocClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleDocClick);
    return () => document.removeEventListener("mousedown", handleDocClick);
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
          {links.map((link) => {
            const isActive = pathname === link.href;

            // SERVICES DROPDOWN
            if (link.dropdown) {
              return (
                <div key={link.label} className="relative">
                  <Link
                    href={link.href}
                    onMouseEnter={() => setServicesOpen(true)}
                    className={clsx(
                      `
                      nav-link
                      flex items-center gap-2
                      rounded-[10px]
                      px-5 py-2
                      text-[12px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      transition-all duration-300
                      `,
                      isActive
                        ? "bg-black text-white"
                        : "text-white/90 hover:bg-black/20 hover:text-white",
                    )}
                  >
                    {link.label}

                    <ChevronDown
                      size={14}
                      className={clsx(
                        "transition-transform duration-300",
                        servicesOpen && "rotate-180",
                      )}
                    />
                  </Link>

                  {/* DROPDOWN */}
                  <div
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="
    absolute left-0 top-full z-50
    pt-3
    w-[300px]
  "
                  >
                    <div
                      className={clsx(
                        `
    rounded-[18px]
    bg-[#ffebeb]
    p-2
    shadow-2xl
    transition-all duration-300
    `,
                        servicesOpen
                          ? "translate-y-0 opacity-100 pointer-events-auto"
                          : "translate-y-2 opacity-0 pointer-events-none",
                      )}
                    >
                      <div className="flex flex-col">
                        {link.items?.map((item) => (
                          <button
                            key={item}
                            className="
            rounded-xl
            px-5 py-4
            text-left
            text-[12px]
            font-black
            uppercase
            text-black
            transition-all duration-200
            hover:bg-white/60
          "
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={clsx(
                  `
                  nav-link
                  rounded-[10px]
                  px-5 py-3
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  transition-all duration-300
                  `,
                  isActive
                    ? "bg-black text-white"
                    : "text-white/90 hover:bg-black/20 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Button
          className="
            hidden md:inline-flex
            px-7
            text-[12px]
            font-bold
            uppercase
            tracking-[0.12em]
          "
          variant="primary"
          href="/contact"
        >
          Get In Touch
        </Button>

        {/* Mobile Toggle */}
        <button
          className="
            flex h-11 w-11 items-center justify-center
            rounded-lg text-white transition
            hover:bg-white/10 md:hidden
          "
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          `
          fixed inset-0 z-40
          flex flex-col justify-center gap-6
          bg-red px-8
          transition-all duration-500 md:hidden
          `,
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
              `
              font-display
              text-5xl
              font-extrabold
              uppercase
              tracking-tight
              text-white
              transition-all duration-300
              `,
              pathname === link.href && "text-primary",
            )}
          >
            {link.label}
          </Link>
        ))}

        <Button
          variant="primary"
          href="/contact"
          className="
            mt-6
            w-full justify-center
            rounded-xl py-4
            text-sm font-bold uppercase
            tracking-[0.12em]
          "
        >
          Get In Touch
        </Button>
      </div>
    </nav>
  );
}
