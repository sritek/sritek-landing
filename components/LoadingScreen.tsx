"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setShowSplash(false), 1000);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <>
      {children}
      {showSplash && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark text-white">
          <Image
            src="/logo.svg"
            alt="Sritek logo"
            width={160}
            height={160}
            priority
          />
        </div>
      )}
    </>
  );
}
