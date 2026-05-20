import { motion } from "motion/react";
import { Cog, Factory, HardHat, Shield, Plane, Bot, Server } from "lucide-react";

const items = [
  { label: "Engineering", Icon: Cog, grad: "from-[#d8b4fe] to-[#c084fc]" },
  { label: "Manufacturing", Icon: Factory, grad: "from-[#f7b6d2] to-[#fbcfe8]" },
  { label: "Construction", Icon: HardHat, grad: "from-[#fde68a] to-[#f7b6d2]" },
  { label: "Defence", Icon: Shield, grad: "from-[#b7b5ff] to-[#c4b5fd]" },
  { label: "Aerospace", Icon: Plane, grad: "from-[#dbeafe] to-[#b7b5ff]" },
  { label: "Autonomous Systems", Icon: Bot, grad: "from-[#e9d5ff] to-[#d8b4fe]" },
  { label: "Data Centres", Icon: Server, grad: "from-[#c4b5fd] to-[#a855f7]" },
];

export function Industries() {
  return (
    <section id="resources" className="relative bg-[#f7f7f5] py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.22em] text-[#6b7280]">Sectors</span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
            Built for the businesses we know best.
          </h2>
          <p className="mt-6 text-[#6b7280] text-lg">
            We work exclusively with engineering-led companies — high-trust, high-complexity, high-stakes.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ label, Icon, grad }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-[24px] bg-white border border-black/5 p-6 overflow-hidden hover:shadow-[0_30px_60px_-30px_rgba(168,85,247,0.25)] transition-shadow"
            >
              <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${grad} opacity-60 group-hover:scale-110 transition-transform`} />
              <div className="relative">
                <div className="h-11 w-11 rounded-2xl bg-white border border-black/5 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#111]" strokeWidth={1.5} />
                </div>
                <div className="mt-8 font-display text-xl tracking-tight">{label}</div>
                <div className="mt-2 text-xs text-[#6b7280]">Advisory engagements available</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
