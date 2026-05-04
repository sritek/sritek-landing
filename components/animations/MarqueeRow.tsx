"use client";

interface MarqueeRowProps {
  items: string[];
  speed?: number;
  direction?: "left" | "right";
}

export default function MarqueeRow({
  items,
  speed = 22,
  direction = "left",
}: MarqueeRowProps) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="overflow-hidden bg-dark-deep border-y border-blue/[0.06] py-4">
      <div
        className="flex items-center whitespace-nowrap"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {duplicatedItems.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-avenir text-xs tracking-[0.2em] uppercase text-blue/35 mx-6">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-blue-mid/35 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
