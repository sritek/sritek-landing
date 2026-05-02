interface MarqueeRowProps {
  items: string[];
  speed?: number;
  direction?: "left" | "right";
}

export function MarqueeRow({
  items,
  speed = 22,
  direction = "left",
}: MarqueeRowProps) {
  const repeated = [...items, ...items];
  const animationStyle = {
    animationName: "marquee",
    animationDuration: `${speed}s`,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationDirection: direction === "left" ? "normal" : "reverse",
  } as const;

  return (
    <section className="overflow-hidden bg-[#0d0d0d] border-t border-b border-[#99daff]/6 py-4">
      <div className="mx-auto flex max-w-[1280px] gap-8 px-6 text-[#99daff]/40">
        <div className="flex min-w-full gap-8" style={animationStyle}>
          {repeated.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="inline-flex items-center gap-3 whitespace-nowrap text-xs uppercase tracking-widest text-[#99daff]/40"
            >
              <span className="h-2 w-2 rounded-full bg-[#4ab8f0]/35" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
