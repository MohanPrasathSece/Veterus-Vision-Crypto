import { motion } from "motion/react";

const quotes = [
  {
    quote: "Within six months the business ran without me sitting on every decision. I got my week — and my company — back.",
    name: "James A.",
    role: "Founder, Advanced Manufacturing",
  },
  {
    quote: "Brad rebuilt our leadership operating model. Margin is up, the team owns delivery, and we're finally investable.",
    name: "Sarah L.",
    role: "Managing Director, Defence Engineering",
  },
  {
    quote: "The Freedom Blueprint gave us a language. Strategy stopped being a quarterly offsite and started being how we run the company.",
    name: "Daniel P.",
    role: "CEO, Autonomous Systems",
  },
];

export function Testimonials() {
  return (
    <section id="stories" className="relative bg-[#efefea] py-28 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-[#6b7280]">Success Stories</span>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] max-w-2xl">
              Operators who got their business back.
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="h-11 w-11 rounded-full border border-black/10 bg-white">←</button>
            <button className="h-11 w-11 rounded-full bg-[#111] text-white">→</button>
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="relative rounded-[28px] bg-white border border-black/5 p-8 lg:p-10 shadow-[0_2px_0_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_-40px_rgba(168,85,247,0.25)] transition-shadow"
            >
              <div className="absolute -top-6 left-8 font-display text-7xl text-[#c084fc] leading-none select-none">"</div>
              <blockquote className="mt-4 text-[#111] text-lg leading-relaxed">
                {q.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#f7b6d2] to-[#b7b5ff]" />
                <div>
                  <div className="font-medium text-sm">{q.name}</div>
                  <div className="text-xs text-[#6b7280]">{q.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
