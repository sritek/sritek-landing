"use client";

const squares = [
  { top: "10%", left: "8%", delay: "0s", duration: "4s" },
  { top: "18%", left: "38%", delay: "1.5s", duration: "5s" },
  { top: "24%", left: "72%", delay: "0.5s", duration: "3s" },
  { top: "36%", left: "14%", delay: "2s", duration: "6s" },
  { top: "42%", left: "60%", delay: "1s", duration: "4s" },
  { top: "58%", left: "82%", delay: "3s", duration: "5.5s" },
  { top: "70%", left: "22%", delay: "0.8s", duration: "3.5s" },
  { top: "76%", left: "48%", delay: "2.5s", duration: "4.5s" },
  { top: "84%", left: "68%", delay: "1.2s", duration: "5s" },
];

export default function GridDotBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.10) 1.5px, transparent 1.5px)",
        backgroundSize: "80px 80px",
      }}
      aria-hidden
    >
      {squares.map((s, i) => (
        <div
          key={i}
          className="absolute h-3 w-3 border border-white/20 flex items-center justify-center"
          style={{
            top: s.top,
            left: s.left,
          }}
        >
          {/* Internal Glow Pulse */}
          <div
            className="h-full w-full bg-white/10 animate-pulse"
            style={{
              animationDelay: s.delay,
              animationDuration: s.duration,
            }}
          />

          {/* Floating 'Crosshair' Corners (Optional Detail) */}
          <div className="absolute -inset-[1px] border-t border-l border-cream/40 w-1 h-1" />
          {/* <div className="absolute -bottom-[2px] -right-[2px] border-b border-right border-white/40 w-1 h-1" /> */}
          <div className="absolute inset-[7px] border-b border-r border-cream/40 w-1 h-1" />
        </div>
      ))}

      {/* Subtle Scanline Overlay to add "Interesting" texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 50%, white 50%)",
          backgroundSize: "100% 4px",
        }}
      />
    </div>
  );
}
