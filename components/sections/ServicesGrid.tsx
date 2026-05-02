import { ServiceCard } from "../ui/ServiceCard";

const services = [
  {
    number: "01",
    title: "AI INTEGRATION & AUTOMATION",
    href: "/services/ai-integration",
    description: "Automate workflows and intelligence with AI-first platforms.",
  },
  {
    number: "02",
    title: "DEDICATED DEVELOPMENT TEAM",
    href: "/services/dedicated-team",
    description: "Extend your engineering team with senior software experts.",
  },
  {
    number: "03",
    title: "MOBILE APP DEVELOPMENT",
    href: "/services/mobile-apps",
    description: "Build engaging mobile experiences for iOS and Android.",
  },
  {
    number: "04",
    title: "CREATING INTUITIVE UI/UX DESIGN",
    href: "/services/ui-ux",
    description: "Design elegant experiences that convert and delight users.",
  },
  {
    number: "05",
    title: "CONVERSION OPTIMISED WEBSITE",
    href: "/services/websites",
    description: "Launch high-converting web products with speed and polish.",
  },
  {
    number: "06",
    title: "CUSTOM WEB APP DEVELOPMENT",
    href: "/services/web-apps",
    description:
      "Craft scalable, secure custom web applications for business growth.",
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-[#1a1a1a] px-6 py-20 text-blue">
      <div className="mx-auto max-w-[1280px]">
        <p className="font-avenir text-xs uppercase tracking-[0.2em] text-blue-mid">
          OUR SERVICES
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
