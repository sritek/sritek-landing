import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Sritek",
  description: "Get in touch with Sritek. Tell us about your project and let's build something powerful together.",
};

export default function ContactPage() {
  return (
    <section className="bg-dark dot-grid-bg min-h-screen pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <h1
          className="font-canela text-[7vw] text-blue font-light leading-none mb-12"
          style={{ textShadow: "0 0 80px rgba(153,218,255,0.15)" }}
        >
          LET&apos;S BUILD SOMETHING
        </h1>
        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
