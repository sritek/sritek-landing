import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/data/projects";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = { title: "Our Projects" };

export default function ProjectsPage() {
  return (
    <main className="bg-[#0D0D1F] pb-20 pt-[120px]">
      <section className="section-container">
        <h1 className="font-display text-7xl font-extrabold text-white">PROJECTS</h1>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="rounded-2xl bg-white p-6">
              <p className="text-xs uppercase tracking-widest text-[#6600FF]">{project.category}</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-[#0D0D1F]">{project.title}</h2>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
