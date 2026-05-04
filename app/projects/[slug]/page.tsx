import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/data/projects";
import CaseStudyClient from "./CaseStudyClient";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Sritek`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      {/* Hero */}
      <section className="bg-dark-deep pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <span className="font-avenir text-blue-mid uppercase tracking-[0.15em] text-xs">{project.category}</span>
          <h1
            className="font-canela text-[8vw] text-blue font-light leading-none mt-4"
            style={{ textShadow: "0 0 80px rgba(153,218,255,0.15)" }}
          >
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="bg-blue/[0.06] border border-blue/[0.12] text-blue/60 px-3 py-1 rounded-full font-avenir text-xs">
              {project.year}
            </span>
            {project.tech.map((t) => (
              <span key={t} className="bg-blue/[0.06] border border-blue/[0.12] text-blue/60 px-3 py-1 rounded-full font-avenir text-xs">
                {t}
              </span>
            ))}
          </div>
          <div
            className="w-full h-[40vh] lg:h-[60vh] rounded-2xl mt-10 border border-blue/[0.06]"
            style={{ backgroundColor: project.imageColor }}
          />
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-dark py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="font-avenir text-xs tracking-[0.2em] uppercase text-blue-mid mb-6">THE CHALLENGE</p>
          <p className="font-canela text-3xl lg:text-4xl text-blue font-light max-w-3xl leading-snug">
            {project.challenge}
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-dark-deep dot-grid-bg py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="font-avenir text-xs tracking-[0.2em] uppercase text-blue-mid mb-6">OUR SOLUTION</p>
          <p className="font-avenir text-base text-blue/55 leading-relaxed max-w-2xl mb-8">
            {project.solution}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="bg-blue/[0.06] border border-blue/[0.12] text-blue/[0.65] rounded-full px-3 py-1 font-avenir text-xs">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-dark-surface py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="font-avenir text-xs tracking-[0.2em] uppercase text-blue-mid mb-12">THE RESULTS</p>
          <CaseStudyClient results={project.results} />
        </div>
      </section>

      {/* Next Project */}
      <section className="bg-dark py-16 lg:py-24 text-center">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group inline-block"
          >
            <span className="font-avenir text-xs text-blue/40 tracking-widest uppercase">NEXT PROJECT</span>
            <h2 className="font-canela text-4xl lg:text-5xl text-blue font-light mt-2 group-hover:text-blue-mid transition-colors">
              {nextProject.title} →
            </h2>
          </Link>
        </div>
      </section>
    </>
  );
}
