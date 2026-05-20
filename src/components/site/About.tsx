import { motion } from "motion/react";

const creds = ["CEng", "MSc", "Royal Navy", "DISC Certified", "20+ Years Experience"];

export function About() {
  return (
    <section id="about" className="relative bg-[#f7f7f5] py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Portrait card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-[#efefea] to-white border border-black/5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] aspect-[4/5]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d8b4fe]/30 via-transparent to-[#f7b6d2]/30" />
            <div className="absolute inset-6 rounded-[20px] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-end p-8">
              <div>
                <div className="text-white/60 text-xs uppercase tracking-[0.2em]">Founder</div>
                <div className="text-white font-display text-3xl mt-2">Brad</div>
                <div className="text-white/50 text-sm mt-1">Veterus Business Growth</div>
              </div>
            </div>
            {/* floating accents */}
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-[#c084fc] to-[#a855f7] blur-md floaty" />
            <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-gradient-to-br from-[#f7b6d2] to-[#b7b5ff] blur-sm floaty-slow" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <span className="text-xs uppercase tracking-[0.22em] text-[#6b7280]">About</span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
            I've Spent 25 Years Inside Engineering-Led Organisations Like Yours.
          </h2>
          <p className="mt-6 text-[#6b7280] text-lg max-w-2xl leading-relaxed">
            From the Royal Navy to boardrooms across engineering, defence and advanced manufacturing — I've operated, scaled and advised the kind of business you're building. Veterus exists to give technical founders a strategic partner who actually understands the machine.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {creds.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#a855f7]" />
                {c}
              </span>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-2xl">
            {[
              { k: "25+", v: "Years in engineering" },
              { k: "120+", v: "Founders advised" },
              { k: "9 figures", v: "Enterprise value built" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-black/5 bg-white p-5">
                <div className="font-display text-3xl">{s.k}</div>
                <div className="text-sm text-[#6b7280] mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
