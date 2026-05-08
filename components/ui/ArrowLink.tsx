import Link from "next/link";

export default function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-white hover:text-cream"
    >
      <span>→</span>
      <span>{children}</span>
    </Link>
  );
}
