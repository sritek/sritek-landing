"use client";

import Button from "@/components/ui/Button";
import { clients } from "@/lib/data/clients";

export default function TrustedBy() {
  return (
    <section className="bg-dark section-padding">
      <div className="section-container grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-extrabold text-cream">
            TRUSTED BY INDIA&apos;S FASTEST GROWING COMPANIES
          </h2>
          <Button className="mt-8" variant="redShadow" href="/contact">
            Get In Touch
          </Button>
        </div>
        <div className="lg:col-span-3">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-between border-b border-cream/10 py-4"
            >
              <p className="font-display text-2xl font-bold text-cream">
                → {client.name}
              </p>
              <p className="text-sm text-cream/60">{client.service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
