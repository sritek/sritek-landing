"use client";

import { useEffect, useState } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <main
      className={`transition-opacity duration-500 ${show ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </main>
  );
}
