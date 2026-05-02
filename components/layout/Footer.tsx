"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-dark border-t border-[#99daff]/10 text-[#99daff]">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid gap-8 md:grid-cols-5">
          <div>
            <h3 className="font-avenir text-xs uppercase tracking-[0.2em] text-blue-mid">
              SERVICES
            </h3>
            <ul className="mt-6 space-y-3 text-xs text-[#99daff]/50">
              <li>
                <Link href="/services">AI Integration</Link>
              </li>
              <li>
                <Link href="/services">Dedicated Team</Link>
              </li>
              <li>
                <Link href="/services">Mobile App</Link>
              </li>
              <li>
                <Link href="/services">UI/UX Design</Link>
              </li>
              <li>
                <Link href="/services">Web Development</Link>
              </li>
              <li>
                <Link href="/services">Custom Web App</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-avenir text-xs uppercase tracking-[0.2em] text-blue-mid">
              COMPANY
            </h3>
            <ul className="mt-6 space-y-3 text-xs text-[#99daff]/50">
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/articles">Articles</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-avenir text-xs uppercase tracking-[0.2em] text-blue-mid">
              LEGAL
            </h3>
            <ul className="mt-6 space-y-3 text-xs text-[#99daff]/50">
              <li>
                <Link href="/cookie-policy">Cookie Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Use</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-avenir text-xs uppercase tracking-[0.2em] text-blue-mid">
              FOLLOW US
            </h3>
            <ul className="mt-6 space-y-3 text-xs text-[#99daff]/50">
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">GitHub</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-avenir text-xs uppercase tracking-[0.2em] text-blue-mid">
              GET IN TOUCH
            </h3>
            <div className="mt-6 space-y-3 text-xs text-[#99daff]/50">
              <p>hello@sritek.io</p>
              <p>+91 98765 43210</p>
              <p>SRITEK Technologies Pvt Ltd</p>
              <p>Bengaluru, India</p>
            </div>
          </div>
        </div>

        <div className="relative mt-20 overflow-hidden rounded-3xl border border-[#99daff]/5 bg-[#121212] p-12 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(153,218,255,0.04)_0%,transparent_70%)]" />
          <p className="relative font-canela text-[20vw] font-light leading-none text-[#99daff]/5">
            SRITEK
          </p>
        </div>

        <p className="mt-10 text-center text-xs text-[#99daff]/20">
          © 2026 SRITEK
        </p>
      </div>
    </footer>
  );
}
