const cols = [
  { title: "Services", links: ["Strategic Clarity", "Leadership Capability", "Commercial Maturity", "Operational Leverage", "Enterprise Value"] },
  { title: "Resources", links: ["The Freedom Blueprint", "Diagnostic", "Insights", "Case Studies"] },
  { title: "About", links: ["The Founder", "Approach", "Sectors", "Press"] },
  { title: "Contact", links: ["Book a Call", "Email", "LinkedIn"] },
  { title: "Legal", links: ["Privacy", "Terms", "Cookies"] },
];

export function Footer() {
  return (
    <footer className="bg-[#f7f7f5] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 font-display font-semibold text-lg">
              <span className="h-2.5 w-2.5 rounded-full bg-[#a855f7]" />
              Veterus
            </div>
            <p className="mt-6 text-[#6b7280] max-w-sm leading-relaxed">
              Strategic advisory for engineering-led businesses. Build a company that scales, operates and grows — without constant founder dependency.
            </p>
            <div className="mt-8 flex gap-3">
              {["in", "x", "yt"].map((s) => (
                <a key={s} href="#" className="h-10 w-10 rounded-full border border-black/10 bg-white flex items-center justify-center text-xs uppercase">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-xs uppercase tracking-[0.2em] text-[#6b7280]">{c.title}</div>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-[#111] hover:text-[#a855f7] transition-colors">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-black/5 flex flex-wrap items-center justify-between gap-4 text-xs text-[#6b7280]">
          <div>© {new Date().getFullYear()} Veterus Business Growth. All rights reserved.</div>
          <div>Engineered in the UK.</div>
        </div>
      </div>
    </footer>
  );
}
