import Link from "next/link";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Articles" };

const articles = [
  { slug: "shipping-faster-with-ai", title: "Shipping Faster with AI" },
  { slug: "building-saas-in-public", title: "Building SaaS in Public" },
];

export default function ArticlesPage() {
  return (
    <main className="bg-dark pb-20 pt-[120px]">
      <section className="section-container">
        <h1 className="font-display text-7xl font-extrabold text-white">
          ARTICLES
        </h1>
        <div className="mt-10 space-y-4">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="block rounded-xl border border-white/15 p-6 text-xl text-white"
            >
              {a.title}
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
