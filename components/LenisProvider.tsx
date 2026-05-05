"use client";

import { ReactNode, useEffect } from "react";
import { initLenis } from "@/lib/lenis";

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenisController = initLenis();
    return () => {
      lenisController.destroy();
    };
  }, []);

  return <>{children}</>;
}
