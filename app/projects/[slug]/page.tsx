import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";

import { projects } from "@/lib/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project?.title,
    description: project?.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const similarProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <main className="overflow-hidden bg-dark pt-[75px] text-cream">
      {/* BACK BUTTON */}
      <div className=" px-6 py-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cream/50 transition-colors duration-200 hover:text-cream"
        >
          <span className="text-lg leading-none">←</span> All Projects
        </Link>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-red text-cream">
        <div className="section-container section-padding pb-0">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cream/60">
            {project.category}
          </p>

          <h1 className="mt-5 max-w-[12ch] font-display text-[clamp(4rem,10vw,10rem)] leading-[0.88] font-extrabold uppercase tracking-[-0.03em]">
            {project.title}
          </h1>

          <div className="relative mt-14 overflow-hidden rounded-t-[34px] border border-cream/10">
            <div className="relative aspect-[16/8]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* SHARP SLOPE */}
        <div className="relative h-28 overflow-hidden">
          <div
            className="absolute inset-0 bg-dark"
            style={{
              clipPath: "polygon(0 100%, 100% 20%, 100% 100%, 0 100%)",
            }}
          />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-b border-dark/10 py-24">
        <div className="section-container max-w-[1100px]">
          <div className="grid gap-12 md:grid-cols-[220px_1fr]">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red">
              Client Overview
            </p>
            <div className="space-y-8 text-[1.1rem] leading-[2] text-cream">
              <p>{project.overview}</p>
              {project.overview2 && <p>{project.overview2}</p>}
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="border-b border-dark/10 py-24">
        <div className="section-container max-w-[1100px]">
          <div className="grid gap-12 md:grid-cols-[220px_1fr]">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red">
              The Challenge
            </p>
            <div>
              <p className="text-[1.1rem] leading-[2] text-cream">
                {project.challengeDescription}
              </p>
              <ul className="mt-10 space-y-5 text-[1.05rem] leading-8 text-cream">
                {project.challenges.map((challenge) => (
                  <li key={challenge}>• {challenge}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="border-b border-dark/10 py-24">
        <div className="section-container max-w-[1100px]">
          <div className="grid gap-12 md:grid-cols-[220px_1fr]">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red">
              Our Solution
            </p>
            <div className="space-y-8 text-[1.1rem] leading-[2] text-cream">
              <p>{project.solution}</p>
              {project.solution2 && <p>{project.solution2}</p>}
              <div>
                <h3 className="mb-6 text-2xl font-bold text-dark">
                  Key Features
                </h3>
                <ul className="space-y-5">
                  {project.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="border-b border-dark/10 py-24">
        <div className="section-container max-w-[1100px]">
          <div className="grid gap-12 md:grid-cols-[220px_1fr]">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red">
              Tech Stack
            </p>
            <div className="grid gap-y-6">
              {project.stack.map((tech) => (
                <div
                  key={tech}
                  className="border-b border-dark/10 pb-5 text-2xl font-semibold"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-24">
        <div className="section-container max-w-[1100px]">
          <div className="grid gap-12 md:grid-cols-[220px_1fr]">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red">
              Results
            </p>
            <div>
              <div className="space-y-8 text-[1.1rem] leading-[2] text-cream">
                <p>{project.results}</p>
                {project.results2 && <p>{project.results2}</p>}
              </div>

              {/* MEDIA */}
              <div className="relative mt-14 overflow-hidden rounded-[28px] bg-dark shadow-2xl">
                {project.youtubeId ? (
                  <div className="relative aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0&modestbranding=1`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-85"
                    />
                  </div>
                )}
              </div>

              {/* STATS */}
              <div className="mt-20 grid gap-6 md:grid-cols-3">
                {project.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[28px] bg-red p-10 text-cream"
                  >
                    <p className="font-display text-8xl font-extrabold leading-none">
                      {stat.number}
                    </p>
                    <p className="mt-10 max-w-[14ch] text-sm font-semibold uppercase leading-5 tracking-[0.14em] text-cream/80">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIMILAR PROJECTS */}
      <section className="bg-red py-24">
        <div className="section-container">
          <p className="mb-10 text-sm font-semibold uppercase tracking-[0.18em] text-cream/80">
            Similar Projects
          </p>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {similarProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="group relative overflow-hidden rounded-[24px] border border-cream/15 bg-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-[-5px_5px_0px_0px_#130606]"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="border-t border-cream/10 p-6 text-cream">
                  <p className="text-xs uppercase tracking-[0.22em] text-cream/40">
                    {item.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-snug">
                    {item.title}
                  </h3>
                </div>
                <span className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-red text-cream opacity-0 transition group-hover:opacity-100">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  );
}
