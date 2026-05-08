import { services } from "@/lib/data/services";

export default function ServicesGrid() {
  return (
    <section className="bg-red section-padding">
      <div className="section-container grid grid-cols-1 gap-4 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.id}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-transparent bg-white p-8 transition-all duration-200 hover:scale-[1.02] hover:border-black"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-red">
              Service / {service.id}
            </p>
            <h3 className="whitespace-pre-line font-display text-6xl font-extrabold leading-none text-dark">
              {service.title}
            </h3>
            <span className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-cream opacity-0 transition group-hover:opacity-100">
              →
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
