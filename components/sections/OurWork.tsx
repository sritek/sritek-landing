import { ProjectCard } from "../ui/ProjectCard";

const projects = [
  {
    category: "Digital Market Research",
    title: "AI Video Survey Platform",
    description:
      "Designing an immersive research platform for rapid customer insights.",
    href: "/projects/ai-survey-platform",
    imagePlaceholderColor: "#0c1520",
  },
  {
    category: "AI-Driven Insurtech",
    title: "AI Vehicle Damage Assessment",
    description:
      "Automating claims for faster, more accurate insurance approvals.",
    href: "/projects/vehicle-damage-ai",
    imagePlaceholderColor: "#0a1825",
  },
  {
    category: "SaaS",
    title: "Real-Time Analytics Dashboard",
    description:
      "A data-rich dashboard for teams to monitor growth and performance.",
    href: "/projects/saas-dashboard",
    imagePlaceholderColor: "#111827",
  },
];

export function OurWork() {
  return (
    <section className="bg-[#1a1a1a] px-6 py-20 text-blue">
      <div className="mx-auto max-w-[1280px] space-y-12">
        <h2 className="font-canela text-[8vw] font-light leading-none text-blue">
          OUR WORK
        </h2>
        <div className="grid gap-4 lg:grid-cols-[40%_60%]">
          <ProjectCard {...projects[0]} />
          <ProjectCard {...projects[1]} />
        </div>
        <ProjectCard {...projects[2]} fullWidth />
      </div>
    </section>
  );
}
