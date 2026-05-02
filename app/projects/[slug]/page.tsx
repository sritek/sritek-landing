import { notFound } from "next/navigation";
import { projects } from "../../../lib/data/projects";

interface Params {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Params) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — SRITEK`,
    description: project.headline,
  };
}

export default function ProjectPage({ params }: Params) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-dark text-blue px-6 py-20">
      <div className="mx-auto max-w-[1280px] space-y-16">
        <section className="space-y-6">
          <p className="font-avenir text-xs uppercase tracking-[0.2em] text-blue-mid">
            {project.category}
          </p>
          <h1 className="font-canela text-[8vw] font-light leading-none text-blue">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-[#99daff]/12 bg-[#99daff]/6 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#99daff]/60">
              {project.year}
            </span>
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#99daff]/12 bg-[#99daff]/6 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#99daff]/60"
              >
                {tech}
              </span>
            ))}
          </div>
          <div
            className="h-[60vh] rounded-3xl border border-[#99daff]/6"
            style={{ backgroundColor: project.imageColor }}
          />
        </section>

        <section className="space-y-8 rounded-3xl border border-[#99daff]/10 bg-[#121212] p-10">
          <div>
            <p className="font-avenir text-xs uppercase tracking-[0.2em] text-blue-mid">
              THE CHALLENGE
            </p>
            <h2 className="font-canela text-4xl font-light text-blue">
              {project.challenge}
            </h2>
          </div>
          <div className="space-y-4">
            <p className="font-avenir text-sm text-[#99daff]/55 leading-relaxed">
              {project.solution}
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {project.results.map((result) => (
                <div
                  key={result}
                  className="rounded-3xl border border-[#99daff]/10 bg-[#0d0d0d] p-6"
                >
                  <p className="font-canela text-3xl text-blue">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
