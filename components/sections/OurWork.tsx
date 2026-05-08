import Button from "@/components/ui/Button";
import { projects } from "@/lib/data/projects";

export default function OurWork() {
  return (
    <section className="bg-[#9a0002] section-padding">
      <div className="section-container">
        <h2 className="mb-12 font-display text-7xl font-extrabold text-white">
          OUR WORK
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`rounded-2xl bg-white p-8 ${project.featured ? "border-2 border-[#0D0D1F]" : ""}`}
            >
              <p className="text-xs uppercase tracking-widest text-[#9a0002]">
                {project.category}
              </p>
              <h3 className="mt-2 font-display text-4xl font-extrabold text-[#0D0D1F]">
                {project.title}
              </h3>
              <p className="mt-4 text-sm text-[#0D0D1F]/70">
                {project.description}
              </p>
              <div className="mt-6 h-40 rounded-xl bg-gray-100" />
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline">Show More</Button>
        </div>
      </div>
    </section>
  );
}
