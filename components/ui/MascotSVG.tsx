export default function MascotSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 280" className={className} aria-hidden>
      <circle cx="120" cy="70" r="54" fill="white" />
      <rect x="72" y="128" width="96" height="110" rx="30" fill="white" />
      <circle cx="95" cy="64" r="11" fill="#9a0002" />
      <circle cx="145" cy="64" r="11" fill="#9a0002" />
    </svg>
  );
}
