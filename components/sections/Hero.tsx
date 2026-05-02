import { CTA } from "../ui/CTA";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-dark text-blue">
      <div className="dot-grid-bg absolute inset-0 opacity-40" />
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute right-10 top-1/3 h-[40vw] w-[40vw] rounded-full border border-[#99daff]/12" />
      </div>
      <div className="relative mx-auto flex min-h-[100svh] max-w-[1280px] flex-col justify-between px-6 py-28">
        <div className="space-y-4">
          <h1 className="font-canela text-[12vw] leading-none text-blue font-light">
            TURNING
          </h1>
          <h1 className="font-canela text-[12vw] leading-none text-blue font-light text-right">
            IDEAS
          </h1>
          <h1 className="font-canela text-[12vw] leading-none text-blue font-light">
            INTO
          </h1>
          <h1 className="font-canela text-[12vw] leading-none text-blue font-light text-center">
            POWERFUL
          </h1>
          <h1 className="font-canela text-[12vw] leading-none text-blue font-light text-right">
            SOLUTIONS
          </h1>
        </div>

        <div className="max-w-xs pb-12">
          <p className="font-avenir text-sm text-[#99daff]/50 leading-relaxed">
            Stop building slow. We ship your SaaS 3× faster with
            production-grade quality.
          </p>
          <div className="mt-8">
            <CTA />
          </div>
        </div>
      </div>
    </section>
  );
}
