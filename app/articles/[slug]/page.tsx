import Footer from "@/components/layout/Footer";

export default function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="bg-dark pb-20 pt-[120px]">
      <article className="section-container">
        <h1 className="font-display text-6xl font-extrabold text-white">
          {params.slug.replaceAll("-", " ").toUpperCase()}
        </h1>
        <p className="mt-6 max-w-3xl text-white/80">
          Article content placeholder. Replace with MDX content later.
        </p>
      </article>
      <Footer />
    </main>
  );
}
