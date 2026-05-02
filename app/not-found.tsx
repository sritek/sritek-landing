import Link from "next/link";
import { CTA } from "../components/ui/CTA";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-dark px-6 text-blue">
      <div className="space-y-10 text-center">
        <p className="font-canela text-[20vw] font-light leading-none text-[#99daff]/10">
          404
        </p>
        <p className="text-sm uppercase tracking-[0.25em] text-[#99daff]/28">
          PAGE NOT FOUND
        </p>
        <div className="space-y-6">
          <p className="max-w-xl text-[#99daff]/55">
            The page you are looking for does not exist. Head back home to
            explore our services and projects.
          </p>
          <div className="mx-auto w-fit">
            <CTA href="/" label="GO HOME" />
          </div>
        </div>
      </div>
    </main>
  );
}
