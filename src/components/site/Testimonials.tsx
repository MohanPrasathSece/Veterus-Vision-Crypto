import { motion } from "motion/react";
import { useState } from "react";

const quotes = [
  {
    quote: "Within six months the business ran without me sitting on every decision. I got my week — and my company — back.",
    name: "James A.",
    role: "Founder, Advanced Manufacturing",
    metric: "+38%",
    metricLabel: "Operating margin",
  },
  {
    quote: "Brad rebuilt our leadership operating model. Margin is up, the team owns delivery, and we're finally investable.",
    name: "Sarah L.",
    role: "MD, Defence Engineering",
    metric: "9 fig",
    metricLabel: "Enterprise value",
  },
  {
    quote: "The Freedom Blueprint gave us a language. Strategy stopped being a quarterly offsite — it's how we run the company.",
    name: "Daniel P.",
    role: "CEO, Autonomous Systems",
    metric: "−62%",
    metricLabel: "Founder time on ops",
  },
];

const initials = (n: string) => n.split(" ").map((p) => p[0]).join("");

export function Testimonials() {
  const [active, setActive] = useState(0);
  const q = quotes[active];

  return (
    <section id="stories" className="relative bg-[#0a0a0a] text-white py-28 lg:py-36 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/3 h-[600px] w-[900px] rounded-full bg-[#a855f7]/25 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#7e22ce]/20 blur-[140px]" />
        <div className="absolute inset-0 noise opacity-30 mix-blend-overlay" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d8b4fe]">Success Stories</span>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] max-w-2xl">
              Operators who got their business back.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured quote */}
          <motion.figure
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 relative rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 lg:p-14 overflow-hidden"
          >
            <div className="absolute -top-10 -left-6 font-display text-[180px] leading-none text-[#a855f7]/30 select-none">"</div>
            <div className="relative">
              <blockquote className="font-display text-2xl sm:text-3xl lg:text-[34px] leading-[1.15] tracking-tight text-white max-w-3xl">
                {q.quote}
              </blockquote>
              <figcaption className="mt-10 flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#f7b6d2] to-[#b7b5ff] flex items-center justify-center text-[#111] font-semibold">
                    {initials(q.name)}
                  </div>
                  <div>
                    <div className="font-medium">{q.name}</div>
                    <div className="text-xs text-white/55">{q.role}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-3xl gradient-text-purple">{q.metric}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50">{q.metricLabel}</div>
                </div>
              </figcaption>
            </div>
          </motion.figure>

          {/* Selector list */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {quotes.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setActive(i)}
                className={`text-left rounded-2xl border p-5 transition-all ${
                  active === i
                    ? "bg-white/[0.06] border-[#a855f7]/60 shadow-[0_0_0_4px_rgba(168,85,247,0.1)]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className={`text-[10px] uppercase tracking-widest ${active === i ? "text-[#d8b4fe]" : "text-white/40"}`}>0{i + 1}</div>
                </div>
                <div className="mt-1 text-xs text-white/55">{item.role}</div>
                <div className="mt-3 text-xs text-white/70 line-clamp-2">{item.quote}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Marquee logos band */}
        <div className="mt-16 relative overflow-hidden border-y border-white/10 py-6">
          <div className="flex gap-16 marquee-track w-max">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex gap-16 items-center text-white/40 text-sm uppercase tracking-[0.3em] whitespace-nowrap">
                {["Engineering Co.", "Defence Group", "Aerospace Ltd", "Autonomous Sys", "Heavy Industry", "Precision Mfg", "Maritime Eng"].map((b) => (
                  <span key={b + k}>{b}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
