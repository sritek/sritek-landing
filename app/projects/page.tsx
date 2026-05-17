import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { projects } from "@/lib/data/projects";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Our Projects",
};

export default function ProjectsPage() {
  return (
    <main className="overflow-hidden bg-dark text-white">
      {/* HERO */}
      <section className="relative bg-red">
        <div className="section-container section-padding pb-16 h-[70vh]">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="font-display text-[clamp(5rem,12vw,12rem)] leading-[0.85] font-extrabold uppercase tracking-[-0.03em] text-white">
                PROJECTS
              </h1>
            </div>

            <p className="absolute right-5 bottom-40 max-w-[620px] text-base leading-[1.9] text-white/80 sm:text-lg">
              Our portfolio highlights a diverse collection of projects that
              demonstrate innovative solutions and successful outcomes across
              various industries. Each case study showcases our approach to
              solving complex challenges, delivering measurable impact, and
              driving client success. Explore how we combine technology,
              creativity, and strategy to transform ideas into reality.
            </p>
          </div>
        </div>

        {/* CURVE */}
        <div className="relative h-28 overflow-hidden bg-red">
          <div
            className="absolute inset-0 bg-dark"
            style={{
              clipPath: "polygon(0 100%, 100% 35%, 100% 100%, 0 100%)",
            }}
          />
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="bg-dark pb-28 pt-6">
        <div className="section-container">
          {/* FEATURED */}
          {projects[0] && (
            <Link
              href={`/projects/${projects[0].slug}`}
              className=" relative group mb-8 block overflow-hidden rounded-[28px] border border-white/10 bg-dark transition-all duration-200 hover:shadow-[-5px_5px_0px_0px_#9a0002]"
            >
              <div className="relative aspect-[16/8] overflow-hidden">
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="border-t border-white/10 p-7 bg-red">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cream/40">
                  {projects[0].category}
                </p>

                <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-none text-cream">
                  {projects[0].title}
                </h2>
              </div>
              <span className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-red text-cream opacity-0 transition group-hover:opacity-100">
                →
              </span>
            </Link>
          )}

          {/* GRID */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.slice(1).map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-[24px] border border-white/10 bg-dark transition-all  hover:-translate-y-1 duration-200 hover:shadow-[-5px_5px_0px_0px_#9a0002]"
              >
                {/* IMAGE */}
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="border-t border-white/10 p-6 bg-red">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/40">
                    {project.category}
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold leading-snug text-cream  font-display  uppercase text-cream">
                    {project.title}
                  </h2>
                </div>
                <span className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-red text-cream opacity-0 transition group-hover:opacity-100">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
      <Footer />
    </main>
  );
}
