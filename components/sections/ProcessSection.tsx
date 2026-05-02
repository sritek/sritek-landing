export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-dark px-6 py-20 text-blue">
      <div className="dot-grid-bg absolute inset-0 opacity-10" />
      <div className="relative mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-8">
          <p className="font-avenir text-xs uppercase tracking-[0.2em] text-[#99daff]/22">
            OUR PROCESS
          </p>
          <div className="space-y-4">
            <h2 className="font-canela text-[8vw] font-light leading-none text-blue">
              DESIGN DEVELOPMENT
            </h2>
            <div className="max-w-sm rounded-3xl border border-[#99daff]/8 bg-[#1a1a1a] p-8 shadow-[inset_0_1px_0_rgba(153,218,255,0.06)]">
              <p className="font-avenir text-sm text-[#99daff]/55 leading-relaxed">
                From idea to working software, we handle every step — discovery,
                design, development, and thorough testing — to bring your vision
                to life.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-[#99daff]/8 bg-[#99daff]/20 p-8">
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 36 }).map((_, index) => (
              <span
                key={index}
                className="h-10 rounded-lg bg-[rgba(153,218,255,0.06)]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
