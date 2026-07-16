import { motion } from "motion/react";

const steps = [
  {
    title: "Capital Allocation & Diversification",
    desc: "We analyze your risk profile and distribute capital across high-yield DeFi protocols, blue-chip assets, and emerging altcoins.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  },
  {
    title: "AI-Driven Execution",
    desc: "Our proprietary algorithms execute trades automatically based on technical indicators and real-time sentiment analysis, removing human error.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  },
  {
    title: "Yield Generation & Rebalancing",
    desc: "Profits are strategically harvested and reinvested. The portfolio is dynamically rebalanced to maintain your target risk-to-reward ratio.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  }
];

export function InvestmentStrategy() {
  return (
    <section id="strategy" className="relative py-20 lg:py-40 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.22em] text-[#a855f7] font-semibold block mb-4">The Methodology</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-[#111]">
            A System for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#c084fc]">Scalable Wealth.</span>
          </h2>
          <p className="mt-6 text-[#6b7280] text-lg leading-relaxed max-w-xl mx-auto">
            We replace guesswork with a rigid, three-step methodology. By treating digital assets with institutional rigor, we transform speculative trading into compounding wealth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=800" 
              alt="Trading Analysis" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
              <div className="font-semibold text-lg">Algorithmic Execution</div>
              <div className="text-sm text-white/70 mt-1">Removing human emotion from volatile markets.</div>
            </div>
          </motion.div>

          {/* Right Side: Steps */}
          <div className="relative">
            <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-[#a855f7]/50 via-[#a855f7]/20 to-transparent hidden sm:block" />
            <div className="space-y-12">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative sm:pl-20"
                >
                  <div className="absolute left-0 top-1 w-16 h-16 rounded-full bg-white border border-[#a855f7]/20 shadow-lg flex items-center justify-center z-10 hidden sm:flex">
                    <svg className="w-6 h-6 text-[#a855f7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {step.icon}
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-mono text-[#a855f7] mb-2 block">Phase 0{i + 1}</span>
                    <h3 className="font-display text-2xl font-semibold text-[#111]">{step.title}</h3>
                    <p className="mt-3 text-[#6b7280] leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
