import { CTA } from "../../components/ui/CTA";

export default function ContactPage() {
  return (
    <main className="bg-dark text-blue px-6 py-20">
      <section className="relative mx-auto max-w-[900px] rounded-3xl border border-[#99daff]/8 bg-[#121212] px-8 py-16">
        <div className="dot-grid-bg absolute inset-0 opacity-10" />
        <div className="relative space-y-10">
          <h1 className="font-canela text-[7vw] leading-none text-blue">
            LET'S BUILD SOMETHING
          </h1>
          <form className="space-y-6">
            {["Name", "Email", "Company", "Message"].map((label) => (
              <label key={label} className="block text-sm text-[#99daff]/60">
                <span className="mb-2 block">{label}</span>
                {label === "Message" ? (
                  <textarea
                    rows={5}
                    className="w-full border border-[#99daff]/8 bg-[#0d0d0d] px-4 py-3 text-[#99daff] outline-none focus:border-blue-mid focus:shadow-[0_0_20px_rgba(153,218,255,0.07)]"
                  />
                ) : (
                  <input
                    type={label === "Email" ? "email" : "text"}
                    className="w-full border border-[#99daff]/8 bg-[#0d0d0d] px-4 py-3 text-[#99daff] outline-none focus:border-blue-mid focus:shadow-[0_0_20px_rgba(153,218,255,0.07)]"
                  />
                )}
              </label>
            ))}
            <div className="pt-4">
              <CTA size="lg" label="SEND MESSAGE" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
