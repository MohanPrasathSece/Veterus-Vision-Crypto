import { motion } from "motion/react";

const pillars = [
  {
    n: "01",
    title: "Strategic Clarity",
    desc: "A sharp, written strategy your team can execute without you in the room.",
    grad: "from-[#e9d5ff] via-[#d8b4fe] to-[#c084fc]",
    shape: "rounded-[40%_60%_55%_45%/55%_45%_55%_45%]",
  },
  {
    n: "02",
    title: "Leadership Capability",
    desc: "Build a leadership layer that owns outcomes — not just tasks.",
    grad: "from-[#fce7f3] via-[#fbcfe8] to-[#f7b6d2]",
    shape: "rounded-[55%_45%_60%_40%/45%_55%_45%_55%]",
  },
  {
    n: "03",
    title: "Commercial Maturity",
    desc: "Predictable pipeline, pricing discipline, and margin expansion.",
    grad: "from-[#dbeafe] via-[#c7d2fe] to-[#b7b5ff]",
    shape: "rounded-[45%_55%_40%_60%/60%_40%_55%_45%]",
  },
  {
    n: "04",
    title: "Operational Leverage",
    desc: "Operating rhythm, systems, and metrics that compound weekly.",
    grad: "from-[#fef3c7] via-[#fde68a] to-[#f7b6d2]",
    shape: "rounded-[50%_50%_45%_55%/55%_45%_50%_50%]",
  },
  {
    n: "05",
    title: "Enterprise Value & Optionality",
    desc: "An asset that performs — investable, sellable, transferable.",
    grad: "from-[#ddd6fe] via-[#c4b5fd] to-[#a855f7]",
    shape: "rounded-[60%_40%_50%_50%/40%_60%_45%_55%]",
  },
];

export function Blueprint() {
  return (
    <section id="services" className="relative bg-[#efefea] py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-black/5" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-start lg:items-center text-left lg:text-center">
          <span className="text-xs uppercase tracking-[0.22em] text-[#6b7280]">Methodology</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-7xl tracking-[-0.03em] leading-[1.02] max-w-3xl"
          >
            The Freedom Blueprint<span className="align-super text-2xl lg:text-3xl">™</span>
          </motion.h2>
          <p className="mt-6 text-[#6b7280] text-lg max-w-2xl">
            A structured method for building a business that performs without you.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`group relative overflow-hidden rounded-[28px] bg-white border border-black/5 p-7 lg:p-8 min-h-[360px] flex flex-col justify-between shadow-[0_2px_0_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_-40px_rgba(168,85,247,0.35)] transition-shadow ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative h-44 rounded-[20px] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.grad}`} />
                {/* floating 3D blob */}
                <div className={`absolute -right-6 -bottom-8 h-44 w-44 ${p.shape} bg-white/40 backdrop-blur-xl floaty`} />
                <div className={`absolute right-10 top-6 h-16 w-16 rounded-full bg-white/60 backdrop-blur floaty-fast`} />
                <div className="absolute left-5 bottom-4 text-white/80 font-mono text-xs tracking-widest">PILLAR {p.n}</div>
              </div>

              <div className="mt-6">
                <h3 className="font-display text-2xl lg:text-[26px] tracking-tight">{p.title}</h3>
                <p className="mt-3 text-[#6b7280] text-[15px] leading-relaxed">{p.desc}</p>
              </div>

              <div className="mt-6 flex items-center justify-between text-sm text-[#111]">
                <span className="opacity-60">Explore pillar</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#111] text-white group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
