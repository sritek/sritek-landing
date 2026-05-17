import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark text-cream">
      <div className="flex items-center justify-center">
        <Image
          src="/logo.svg"
          alt="Sritek logo"
          width={160}
          height={160}
          priority
        />
      </div>
    </div>
  );
}
