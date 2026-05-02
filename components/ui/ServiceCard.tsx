import Link from "next/link";

interface ServiceCardProps {
  number: string;
  title: string;
  href: string;
  description?: string;
}

export function ServiceCard({
  number,
  title,
  href,
  description,
}: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[24px] border border-[#99daff]/6 bg-[#121212] p-8 transition duration-300 hover:border-[#99daff]/25 hover:shadow-[0_0_30px_rgba(153,218,255,0.06)]">
      <p className="font-avenir text-xs uppercase tracking-[0.35em] text-[#99daff]/25">
        SERVICE / {number}
      </p>
      <h3 className="mt-4 font-canela text-3xl font-light leading-tight text-blue">
        {title}
      </h3>
      {description ? (
        <p className="mt-4 font-avenir text-sm text-[#99daff]/55 leading-relaxed">
          {description}
        </p>
      ) : null}
      <Link
        href={href}
        className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-blue transition group-hover:translate-x-1"
      >
        VIEW SERVICE <span>→</span>
      </Link>
    </article>
  );
}
