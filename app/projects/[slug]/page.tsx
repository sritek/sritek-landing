import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import Footer from "@/components/layout/Footer";

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();
  return (
    <main className="bg-dark pb-20 pt-[120px]">
      <section className="section-container">
        <p className="text-xs uppercase tracking-widest text-cream">
          {project.category}
        </p>
        <h1 className="mt-3 font-display text-7xl font-extrabold text-white">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-white/80">{project.description}</p>
      </section>
      <Footer />
    </main>
  );
}
