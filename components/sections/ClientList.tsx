import { CTA } from "../ui/CTA";

const clients = [
  { name: "ZEPHYR", service: "Web Development & UI/UX Design" },
  { name: "AXIOM", service: "Custom SaaS Platform" },
  { name: "NODEX", service: "AI Integration & Automation" },
  { name: "STRATA", service: "Mobile App Development" },
  { name: "KOVA", service: "E-Commerce & UI/UX Design" },
  { name: "LUMINA", service: "ERP System" },
  { name: "VANTAGE", service: "Web Development" },
  { name: "CIRRUS", service: "Dedicated Team" },
  { name: "PRISM", service: "Sales Analytics Platform" },
  { name: "VELOX", service: "Web Development & UI/UX Design" },
];

export function ClientList() {
  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] px-6 py-20 text-blue">
      <div className="dot-grid-bg absolute inset-0 opacity-15" />
      <div className="relative mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[35%_65%]">
        <div className="sticky top-28 space-y-8 self-start">
          <h2 className="font-canela text-5xl font-light leading-tight">
            TRUSTED BY INDIA&apos;S FASTEST GROWING COMPANIES
          </h2>
          <CTA label="LEARN MORE" variant="outline" />
        </div>

        <div className="space-y-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group rounded-[18px] border border-[#99daff]/10 bg-[#121212] px-6 py-5 transition hover:bg-[#99daff]/10"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="font-canela text-xl text-blue">{client.name}</p>
                <p className="font-avenir text-xs uppercase tracking-[0.2em] text-[#99daff]/30">
                  {client.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
