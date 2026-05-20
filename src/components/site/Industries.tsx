import { motion } from "motion/react";
import engineering from "@/assets/sector-engineering.jpg";
import manufacturing from "@/assets/sector-manufacturing.jpg";
import construction from "@/assets/sector-construction.jpg";
import defence from "@/assets/sector-defence.jpg";
import aerospace from "@/assets/sector-aerospace.jpg";
import autonomous from "@/assets/sector-autonomous.jpg";
import datacentre from "@/assets/sector-datacentre.jpg";

const items = [
  { label: "Engineering", img: engineering },
  { label: "Manufacturing", img: manufacturing },
  { label: "Construction", img: construction },
  { label: "Defence", img: defence },
  { label: "Aerospace", img: aerospace },
  { label: "Autonomous Systems", img: autonomous },
  { label: "Data Centres", img: datacentre },
];

export function Industries() {
  return (
    <section id="resources" className="relative bg-[#f7f7f5] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#6b7280]">Sectors</span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            Built for the businesses we know best.
          </h2>
          <p className="mt-5 text-[#6b7280] text-base lg:text-lg">
            We work exclusively with engineering-led companies — high-trust, high-complexity, high-stakes.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ label, img }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative rounded-[24px] overflow-hidden border border-black/5 aspect-[4/5] card-tilt hover:shadow-[0_30px_60px_-30px_rgba(168,85,247,0.4)]"
            >
              <img src={img} alt={`${label} sector`} width={800} height={600} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest text-white/90">
                <span className="h-1 w-1 rounded-full bg-[#d8b4fe]" /> Sector
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="font-display text-xl text-white tracking-tight">{label}</div>
                <div className="mt-1 text-xs text-white/70">Advisory available</div>
              </div>
              <div className="absolute right-4 bottom-4 h-9 w-9 rounded-full bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">→</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
