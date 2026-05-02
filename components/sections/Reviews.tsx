const testimonials = [
  {
    quote:
      "The ability to adapt in a rapidly changing environment and close communication makes Sritek a strong software development partner.",
    client: "AXIOM LABS",
  },
  {
    quote:
      "Speed, flexibility, and quality. Our demands are high, but Sritek enforces our values and makes them stronger.",
    client: "NODEX",
  },
  {
    quote:
      "Working with Sritek since day one. Their team is highly qualified, communication always effortless.",
    client: "ZEPHYR",
  },
];

export function Reviews() {
  return (
    <section className="bg-[#1a1a1a] px-6 py-20 text-blue">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="font-canela text-7xl font-light text-blue">
          CLIENT REVIEWS
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.client}
              className="rounded-3xl border border-[#99daff]/7 bg-[#121212] p-8 text-[#99daff]/90"
            >
              <p className="font-avenir text-sm italic leading-relaxed text-[#99daff]/55">
                “{testimonial.quote}”
              </p>
              <p className="mt-8 font-avenir text-xs uppercase tracking-widest text-blue-mid">
                {testimonial.client}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
