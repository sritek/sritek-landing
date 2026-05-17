import Button from "@/components/ui/Button";
import { projects } from "@/lib/data/projects";

export default function OurWork() {
  return (
    <section className="bg-red section-padding">
      <div className="section-container">
        <h2 className="mb-12 font-display text-7xl font-extrabold text-cream">
          OUR WORK
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={` ${index === 2 ? "md:col-span-2" : ""} group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-transparent bg-cream p-8 transition-all duration-200 hover:scale-[1.02] hover:border-black`}
            >
              <p className="text-xs uppercase tracking-widest text-red">
                {project.category}
              </p>
              <h3 className="mt-2 font-display text-4xl font-extrabold text-dark">
                {project.title}
              </h3>
              <p className="mt-4 text-sm text-dark/70">{project.description}</p>
              <div className="mt-6 h-40 rounded-xl bg-gray-100" />
              <span className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-red text-cream opacity-0 transition group-hover:opacity-100">
                →
              </span>
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
