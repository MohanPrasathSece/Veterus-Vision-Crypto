import { BookingDialog } from "./BookingDialog";

const cols = [
  { title: "Services", links: ["Strategic Clarity", "Leadership Capability", "Commercial Maturity", "Operational Leverage", "Enterprise Value"] },
  { title: "Resources", links: ["The Freedom Blueprint", "Diagnostic", "Insights", "Case Studies"] },
  { title: "Company", links: ["The Founder", "Approach", "Sectors", "Press"] },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-white" style={{ background: "linear-gradient(135deg, #0b0314 0%, #1a0a2e 50%, #2d0f4a 100%)" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/4 h-[400px] w-[600px] rounded-full bg-[#a855f7]/25 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#f7b6d2]/15 blur-[140px]" />
        <div className="absolute inset-0 noise opacity-30 mix-blend-overlay" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-12">
        {/* Top CTA band */}
        <div className="grid lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          <div className="lg:col-span-6">
            <h3 className="font-display font-bold text-3xl lg:text-5xl leading-[1.05] tracking-tight">
              Ready to build a business that<br />
              <span className="gradient-text-purple">runs without you?</span>
            </h3>
          </div>
          <div className="lg:col-span-6 flex lg:justify-end items-center">
            <BookingDialog>
              <button className="btn-premium">Book a Strategy Conversation <span className="arrow">→</span></button>
            </BookingDialog>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 pt-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 font-display font-semibold text-lg">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#d8b4fe] to-[#a855f7]" />
              Veterus
            </div>
            <p className="mt-6 text-white/65 max-w-sm leading-relaxed">
              Strategic advisory for engineering-led businesses. Build a company that scales, operates and grows — without constant founder dependency.
            </p>
            <div className="mt-8 flex gap-2">
              {["LinkedIn", "X", "YouTube"].map((s) => (
                <a key={s} href="#" className="h-10 px-4 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#d8b4fe]/60 transition-all flex items-center text-xs">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#d8b4fe]">{c.title}</div>
                <ul className="mt-5 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-white/80 hover:text-white hover:translate-x-0.5 inline-block transition-all">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/55">
          <div>© {new Date().getFullYear()} Veterus Business Growth. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <span>Engineered in the UK.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
