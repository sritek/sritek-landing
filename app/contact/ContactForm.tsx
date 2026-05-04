"use client";

import { useState } from "react";
import CTA from "@/components/ui/CTA";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClasses = "w-full bg-blue/[0.04] border border-blue/[0.08] text-blue font-avenir text-sm px-4 py-3 focus:border-blue/[0.38] focus:shadow-[0_0_20px_rgba(153,218,255,0.07)] outline-none transition-all placeholder:text-blue/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          type="text" placeholder="Your name" required
          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClasses}
        />
        <input
          type="email" placeholder="Email address" required
          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClasses}
        />
      </div>
      <input
        type="text" placeholder="Company (optional)"
        value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
        className={inputClasses}
      />
      <textarea
        placeholder="Tell us about your project" rows={6} required
        value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={`${inputClasses} resize-none`}
      />
      <div className="flex items-center gap-4">
        <button type="submit" disabled={status === "sending"} className="bg-blue text-dark px-8 py-4 font-avenir text-sm font-semibold uppercase tracking-[0.15em] hover:bg-blue-mid hover:shadow-[0_0_30px_rgba(153,218,255,0.3)] transition-all duration-300 disabled:opacity-50">
          {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
        </button>
        {status === "sent" && <span className="font-avenir text-xs text-blue-mid">Message sent!</span>}
        {status === "error" && <span className="font-avenir text-xs text-red-400">Failed to send. Try again.</span>}
      </div>
    </form>
  );
}
