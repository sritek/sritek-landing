import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <main className="bg-[#0D0D1F] pb-20 pt-[120px]">
      <section className="section-container grid gap-10 md:grid-cols-2">
        <form className="space-y-4 rounded-2xl bg-white p-8 text-[#0D0D1F]">
          <h1 className="font-display text-5xl font-extrabold">LET&apos;S TALK</h1>
          <input className="w-full rounded border p-3" placeholder="Name" />
          <input className="w-full rounded border p-3" placeholder="Email" type="email" />
          <input className="w-full rounded border p-3" placeholder="Project Type" />
          <input className="w-full rounded border p-3" placeholder="Budget" />
          <textarea className="w-full rounded border p-3" rows={5} placeholder="Message" />
          <Button>Submit</Button>
        </form>
        <div className="rounded-2xl border border-white/15 p-8 text-white">
          <h2 className="font-display text-4xl font-extrabold">GET IN TOUCH</h2>
          <p className="mt-4">hello@sritek.in</p>
          <p className="mt-1">+91 XXXXXXXXXX</p>
          <p className="mt-1">Jaipur, Rajasthan, India</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
