export default function TeamCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-blue/[0.08] hover:border-blue/[0.22] hover:shadow-[0_0_30px_rgba(153,218,255,0.06)] transition-all duration-500">
      <div className="bg-blue/[0.05] h-56 flex items-center justify-center">
        <span className="font-avenir text-xs text-blue/[0.12] tracking-widest uppercase">PHOTO</span>
      </div>
      <div className="bg-dark-surface p-4">
        <p className="font-avenir text-sm font-semibold text-blue">{name}</p>
        <p className="font-avenir text-xs text-blue-mid uppercase tracking-[0.15em] mt-1">{role}</p>
      </div>
    </div>
  );
}
