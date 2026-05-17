import { services } from "@/lib/data/services";
import { notFound } from "next/navigation";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/layout/Footer";

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();
  return (
    <main className="pt-[72px]">
      <section className="bg-red section-padding">
        <div className="section-container">
          <p className="text-xs uppercase tracking-widest text-cream/70">
            Service / {service.id}
          </p>
          <h1 className="mt-2 creamspace-pre-line font-display text-7xl font-extrabold text-cream">
            {service.title}
          </h1>
          <p className="mt-6 max-w-3xl text-cream/85">
            We design and build this service from strategy to production-grade
            delivery.
          </p>
        </div>
      </section>
      <CTABanner />
      <Footer />
    </main>
  );
}
