import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const features = [
  {
    title: "Emotional Trading & Volatility",
    desc: "Retail traders often buy high and sell low, driven by market panic. We eliminate human emotion with strict algorithmic rules and objective execution.",
  },
  {
    title: "Poor Risk Management",
    desc: "Many investors risk too much capital on single assets. Our protocols enforce strict position sizing, dynamic stop-losses, and broad diversification.",
  },
  {
    title: "Security Vulnerabilities",
    desc: "Keeping assets on exchanges exposes you to hacks and insolvency. We utilize offline cold storage for 95% of all digital assets managed.",
  },
  {
    title: "Lack of Market Insight",
    desc: "The crypto market moves 24/7. Without predictive AI modeling and real-time data analysis, reacting to trends is often too late.",
  }
];

export function MarketAnalysis() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="market" className="relative py-20 lg:py-32 bg-[#f7f7f5] text-[#111] border-t border-black/5" ref={containerRef}>
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7e22ce]/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#d8b4fe] font-medium block mb-4">The Challenge</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
            Why Retail <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#a855f7]">Traders Fail.</span>
          </h2>
          <p className="mt-6 text-lg text-[#6b7280]">
            Most crypto investors chase volatile pumps with zero fundamental strategy. The symptoms of a failing portfolio are familiar and completely avoidable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side: Animated abstract visual */}
          <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl border border-black/5 bg-white overflow-hidden shadow-xl hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800"
              alt="Market Volatility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            
            {/* Overlay Stats */}
            <div className="absolute top-6 left-6 right-6 flex justify-between">
              <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg border border-black/5 shadow-sm">
                <div className="text-[10px] text-[#6b7280] uppercase tracking-wider">Market Volatility</div>
                <div className="text-[#f87171] font-semibold">High Risk</div>
              </div>
            </div>
          </div>

          {/* Right Side: Features List */}
          <div className="flex flex-col gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-all cursor-default"
              >
                <h3 className="text-xl font-display font-semibold mb-3 flex items-center gap-3 text-[#111]">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f3e8ff] text-[#a855f7] text-sm">0{i+1}</span>
                  {f.title}
                </h3>
                <p className="text-[#6b7280] leading-relaxed pl-11">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
