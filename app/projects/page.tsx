import { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Sritek",
  description: "Explore our portfolio of custom software, SaaS platforms, and AI-powered solutions.",
};

export default function ProjectsPage() {
  return (
    <section className="bg-dark dot-grid-bg min-h-screen pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <h1 className="font-canela text-[8vw] text-blue font-light leading-none mb-12 lg:mb-16">
          OUR PROJECTS
        </h1>
        <div className="space-y-4">
          {projects.map((p) => (
            <ProjectCard
              key={p.slug}
              category={p.category}
              title={p.title}
              description={p.description}
              href={`/projects/${p.slug}`}
              imagePlaceholderColor={p.imageColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
