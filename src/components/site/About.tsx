import { motion } from "motion/react";
import founder from "@/assets/founder.jpg";

const creds = ["CEng", "MSc", "Royal Navy", "DISC Certified", "20+ Years"];

export function About() {
  return (
    <section id="about" className="relative bg-[#f7f7f5] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-[28px] overflow-hidden border border-black/5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] aspect-[4/5]">
            <img src={founder} alt="Brad - Founder of The Capital Space Business Growth" width={896} height={1152} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div className="text-white/70 text-[10px] uppercase tracking-[0.3em]">Founder</div>
              <div className="text-white font-display text-3xl mt-2">Brad</div>
              <div className="text-white/60 text-sm mt-1">The Capital Space Business Growth</div>
            </div>
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-[#c084fc] to-[#a855f7] blur-2xl opacity-70 floaty" />
            <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-gradient-to-br from-[#f7b6d2] to-[#b7b5ff] blur-xl floaty-slow" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#6b7280]">About</span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            25 years inside engineering-led organisations like yours.
          </h2>
          <p className="mt-6 text-[#6b7280] text-base lg:text-lg max-w-2xl leading-relaxed">
            From the Royal Navy to boardrooms across engineering, defence and advanced manufacturing - I've operated, scaled and advised the kind of business you're building. The Capital Space exists to give technical founders a strategic partner who actually understands the machine.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {creds.map((c) => (
              <span key={c} className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#a855f7]" />{c}
              </span>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl">
            {[
              { k: "25+", v: "Years in engineering" },
              { k: "120+", v: "Founders advised" },
              { k: "9 figures", v: "Enterprise value built" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-black/5 bg-white p-5 card-tilt hover:shadow-[0_24px_50px_-30px_rgba(168,85,247,0.4)]">
                <div className="font-display text-2xl">{s.k}</div>
                <div className="text-xs text-[#6b7280] mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
