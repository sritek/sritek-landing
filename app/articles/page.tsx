import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";

import { articles } from "@/lib/data/articles";

export const metadata: Metadata = {
  title: "Articles",
};

export default function ArticlesPage() {
  return (
    <main className="overflow-hidden bg-dark text-cream">
      {/* HERO */}
      <section className="relative bg-red">
        <div className="section-container section-padding pb-32">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <h1 className="font-display text-[clamp(4rem,11vw,11rem)] leading-[0.85] font-extrabold uppercase tracking-[-0.03em] text-cream">
                ARTICLES & INSIGHTS
              </h1>
            </div>

            <p className="max-w-[620px] text-lg leading-[1.9] text-white/80 md:text-xl">
              Explore our expert articles and insights on software development,
              AI automation, design systems, and scalable digital products. Stay
              informed with industry trends and practical strategies.
            </p>
          </div>
        </div>

        {/* ANGLED CUT */}
        <div className="relative h-28 overflow-hidden bg-red">
          <div
            className="absolute inset-0 bg-dark"
            style={{
              clipPath: "polygon(0 100%, 100% 35%, 100% 100%, 0 100%)",
            }}
          />
        </div>
      </section>

      {/* ARTICLES */}
      <section className="bg-dark pb-28 pt-10">
        <div className="section-container">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group overflow-hidden rounded-[26px] border border-white/10 bg-[#090014] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[-6px_6px_0px_0px_#9a0002]"
              >
                {/* IMAGE */}
                <div className="relative aspect-[16/11] overflow-hidden border-b border-white/10 bg-red">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <p className="text-right text-sm text-cream/40">
                    {article.date}
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold leading-snug text-cream">
                    {article.title}
                  </h2>

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-cream/65">
                    {article.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="mt-20 flex flex-col items-center justify-center gap-6">
            <p className="text-sm text-cream/50">
              Showing <span className="text-cream">1–6</span> of{" "}
              <span className="text-cream">64</span> articles
            </p>

            <div className="flex items-center gap-3">
              <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold uppercase text-cream/40 transition hover:bg-white/10">
                Previous
              </button>

              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  className={`flex h-14 w-14 items-center justify-center rounded-xl text-lg font-bold transition ${
                    n === 1
                      ? "bg-lime text-dark"
                      : "bg-red text-cream hover:opacity-90"
                  }`}
                >
                  {n}
                </button>
              ))}

              <button className="rounded-xl bg-red px-8 py-4 text-sm font-semibold uppercase text-cream transition hover:opacity-90">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
