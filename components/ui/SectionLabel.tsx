import { clsx } from "clsx";

export default function SectionLabel({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={clsx("text-xs font-medium uppercase tracking-[0.15em] text-[#4DFF7C]", className)}>
      {children}
    </p>
  );
}
