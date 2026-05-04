export default function Loading() {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center">
      <span
        className="font-canela text-4xl text-blue font-light tracking-widest"
        style={{ textShadow: "0 0 60px rgba(153,218,255,0.4)" }}
      >
        SRITEK
      </span>
      <div className="mt-6 w-48 h-[2px] bg-dark-surface rounded-full overflow-hidden relative">
        <div
          className="absolute inset-0 bg-blue rounded-full animate-[loadBar_600ms_ease-in-out_forwards]"
          style={{ boxShadow: "0 2px 12px rgba(153,218,255,0.4)" }}
        />
      </div>
    </div>
  );
}
