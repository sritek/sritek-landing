import Link from "next/link";
import { clsx } from "clsx";

type Props = {
  variant?: "primary" | "outline" | "dark" | "purpleShadow";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  onClick,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-sm text-sm font-bold uppercase tracking-widest transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-neon";
  const sizes = {
    sm: "px-5 py-2",
    md: "px-8 py-3",
    lg: "px-10 py-4",
  };
  const variants = {
    primary:
      "bg-cream text-dark font-bold rounded-md hover:shadow-[-5px_5px_0px_0px_#130606]",
    purpleShadow:
      "bg-cream text-dark font-bold rounded-md hover:shadow-[-5px_5px_0px_0px_#9a0002]",
    outline: "border-2 border-cream text-cream hover:bg-cream hover:text-dark",
    dark: "bg-dark text-white hover:bg-dark/80",
  };
  const classes = clsx(base, sizes[size], variants[variant], className);

  if (href)
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
