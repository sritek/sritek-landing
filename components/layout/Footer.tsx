"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

const footerLinks = {
  services: [
    { label: "AI Integration", href: "/services/ai-integration" },
    { label: "Dedicated Team", href: "/services/dedicated-team" },
    { label: "Mobile Development", href: "/services/mobile-development" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "Website Development", href: "/services/conversion-website" },
    { label: "Custom Web Apps", href: "/services/custom-web-app" },
  ],
  company: [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Cookie Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
  ],
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

export default function Footer() {
  const watermarkRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!watermarkRef.current) return;

    gsap.fromTo(
      watermarkRef.current,
      { scale: 0.95, opacity: 0.02 },
      {
        scale: 1,
        opacity: 0.04,
        ease: "none",
        scrollTrigger: {
          trigger: watermarkRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <footer className="bg-dark border-t border-blue/[0.08]">
      {/* Links Grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Services */}
          <div>
            <h4 className="font-avenir text-xs tracking-[0.2em] uppercase text-blue-mid mb-6">
              SERVICES
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-avenir text-xs text-blue/50 hover:text-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-avenir text-xs tracking-[0.2em] uppercase text-blue-mid mb-6">
              COMPANY
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-avenir text-xs text-blue/50 hover:text-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-avenir text-xs tracking-[0.2em] uppercase text-blue-mid mb-6">
              LEGAL
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-avenir text-xs text-blue/50 hover:text-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-avenir text-xs tracking-[0.2em] uppercase text-blue-mid mb-6">
              FOLLOW US
            </h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-avenir text-xs text-blue/50 hover:text-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-avenir text-xs tracking-[0.2em] uppercase text-blue-mid mb-6">
              GET IN TOUCH
            </h4>
            <div className="space-y-3 text-blue/35 font-avenir text-xs leading-relaxed">
              <p>hello@sritek.dev</p>
              <p>+91 98765 43210</p>
              <p className="mt-4">
                Sritek Technologies
                <br />
                India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Giant Watermark */}
      <div className="relative overflow-hidden pb-8">
        <div
          className="relative flex items-center justify-center"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(153,218,255,0.04) 0%, transparent 70%)",
          }}
        >
          <div
            ref={watermarkRef}
            className="font-canela text-[20vw] font-light leading-none text-blue/[0.04] select-none whitespace-nowrap"
          >
            SRITEK
          </div>
        </div>
        <p className="text-center font-avenir text-xs text-blue/20 mt-4">
          © 2026 SRITEK
        </p>
      </div>
    </footer>
  );
}
