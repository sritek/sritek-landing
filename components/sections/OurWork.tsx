import Button from "@/components/ui/Button";
import { projects } from "@/lib/data/projects";

export default function OurWork() {
  return (
    <section className="bg-red section-padding">
      <div className="section-container">
        <h2 className="mb-12 font-display text-7xl font-extrabold text-white">
          OUR WORK
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`rounded-2xl bg-white p-8 ${project.featured ? "border-2 border-dark" : ""} ${index === 2 ? "md:col-span-2" : ""}`}
            >
              <p className="text-xs uppercase tracking-widest text-red">
                {project.category}
              </p>
              <h3 className="mt-2 font-display text-4xl font-extrabold text-dark">
                {project.title}
              </h3>
              <p className="mt-4 text-sm text-dark/70">{project.description}</p>
              <div className="mt-6 h-40 rounded-xl bg-gray-100" />
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="primary">Show More</Button>
        </div>
      </div>
    </section>
  );
}
