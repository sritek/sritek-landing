"use client";

const squares = [
  { top: "10%", left: "8%" }, { top: "18%", left: "38%" }, { top: "24%", left: "72%" },
  { top: "36%", left: "14%" }, { top: "42%", left: "60%" }, { top: "58%", left: "82%" },
  { top: "70%", left: "22%" }, { top: "76%", left: "48%" }, { top: "84%", left: "68%" }
];

export default function GridDotBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.10) 1.5px, transparent 1.5px)",
        backgroundSize: "80px 80px"
      }}
      aria-hidden
    >
      {squares.map((s, i) => (
        <div
          key={i}
          className="absolute h-3 w-3 border border-white/15"
          style={{ top: s.top, left: s.left }}
        />
      ))}
    </div>
  );
}
