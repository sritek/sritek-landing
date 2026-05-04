import CTA from "@/components/ui/CTA";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-dark flex flex-col items-center justify-center relative overflow-hidden">
      {/* Giant 404 watermark */}
      <div
        className="font-canela text-[20vw] text-blue/[0.05] font-light leading-none select-none absolute"
        style={{
          background: "radial-gradient(circle, rgba(153,218,255,0.06) 0%, transparent 60%)",
          WebkitBackgroundClip: "text",
        }}
      >
        404
      </div>

      <div className="relative z-10 text-center">
        <p className="font-avenir text-blue/[0.28] text-sm tracking-[0.2em] uppercase mb-8">
          PAGE NOT FOUND
        </p>
        <CTA label="GO HOME" href="/" />
      </div>
    </section>
  );
}
