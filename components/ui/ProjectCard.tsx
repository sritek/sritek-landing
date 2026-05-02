import Link from "next/link";

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  href: string;
  imagePlaceholderColor?: string;
  fullWidth?: boolean;
}

export function ProjectCard({
  category,
  title,
  description,
  href,
  imagePlaceholderColor = "#111827",
  fullWidth = false,
}: ProjectCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-[#99daff]/7 bg-[#121212] p-8 ${fullWidth ? "lg:col-span-2" : ""}`}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="space-y-4">
          <p className="font-avenir text-xs tracking-widest uppercase text-blue-mid">
            {category}
          </p>
          <h3 className="font-canela text-3xl font-light leading-tight text-blue">
            {title}
          </h3>
          <p className="max-w-xl font-avenir text-sm text-[#99daff]/38 leading-relaxed">
            {description}
          </p>
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-blue transition group-hover:translate-x-1"
          >
            View case study <span>→</span>
          </Link>
        </div>
        <div
          className="h-48 max-w-[320px] flex-1 rounded-3xl border border-[#99daff]/8"
          style={{ backgroundColor: imagePlaceholderColor }}
        />
      </div>
    </article>
  );
}
