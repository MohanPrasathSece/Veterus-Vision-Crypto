import { motion } from "motion/react";
import { ContactForm } from "@/components/site/ContactForm";

export default function CryptoBasics() {
  return (
    <main className="bg-[#050505] min-h-screen text-white overflow-x-hidden selection:bg-[#a855f7]/30 selection:text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#a855f7]/20 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#7e22ce]/20 blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] rounded-full bg-[#c084fc]/10 blur-[150px]" />
        <div className="absolute inset-0 noise opacity-30 mix-blend-overlay" />
      </div>

      {/* Nav Overlay */}
      <nav className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-20 sm:h-24 flex items-center justify-between border-b border-white/5">
        <a href="/" className="flex items-center gap-2 font-display font-semibold tracking-tight text-xl">
          <span className="inline-block h-3 w-3 rounded-full bg-[#a855f7]" />
          Veterus Crypto
        </a>
        <a href="/" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
          Logout
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-24 pb-20 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-sm text-[10px] uppercase tracking-[0.3em] text-[#d8b4fe] mb-6">
            Educational Portal
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.1] tracking-tight">
            Mastering the <span className="gradient-text-purple">Digital Asset</span> Landscape.
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl">
            Discover how we leverage blockchain technology, AI market analysis, and advanced portfolio diversification to securely improve your investment strategy.
          </p>
        </motion.div>
      </section>

      {/* Section 1: Improving Investments */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-24 border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">Maximizing Returns with AI & Market Trends</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              We don't just guess. Our algorithms analyze trading basics, candlestick patterns, and complex market trends in real-time. By utilizing AI market analysis, we identify high-probability setups across cryptocurrency and digital assets to continuously optimize your portfolio.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl border border-white/10">
                <div className="text-[#c084fc] mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Portfolio Growth</h3>
                <p className="text-sm text-white/50">Strategic allocation and rebalancing to capture market upside.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/10">
                <div className="text-[#c084fc] mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 21 9-9 9 9M21 3v6M21 3h-6"/></svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">AI Analysis</h3>
                <p className="text-sm text-white/50">Predictive modeling based on vast historical market data.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative h-[250px] sm:h-[300px] lg:h-[400px] w-full rounded-2xl sm:rounded-3xl glass border border-white/10 overflow-hidden p-4 sm:p-6 flex flex-col">
            {/* Mac-style header */}
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            {/* Fake Candlestick Chart */}
            <div className="flex-1 flex items-end justify-between gap-2 pb-4">
              {[40, 60, 45, 70, 55, 80, 65, 90, 75, 100].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className={`w-full rounded-t-sm ${i % 2 === 0 ? 'bg-red-500/80' : 'bg-[#a855f7]'}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Security & Risk Management */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-24 border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-2 lg:order-1 relative h-[250px] sm:h-[300px] lg:h-[400px] w-full rounded-2xl sm:rounded-3xl glass border border-white/10 p-6 sm:p-8 flex items-center justify-center">
             {/* Floating Illustration */}
             <motion.div 
                animate={{ y: [0, -15, 0], rotate: [0, 2, -2, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-48 h-48"
             >
                <div className="absolute inset-0 rounded-full border border-[#a855f7]/30 border-dashed animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.2)]">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d8b4fe" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
             </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-1 lg:order-2">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">Uncompromising Security & Risk Management</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Protecting your digital assets is our foundation. We employ institutional-grade security protocols and strict risk management frameworks. By understanding the fundamentals of blockchain, we ensure your capital is insulated from unnecessary exposure while maintaining high liquidity.
            </p>
            <ul className="space-y-4">
              {[
                { title: "Risk Mitigation", desc: "Dynamic stop-losses and position sizing." },
                { title: "Cold Storage", desc: "95% of assets held in secure, offline environments." },
                { title: "Smart Contract Audits", desc: "Rigorous vetting of all DeFi protocols we interact with." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="w-10 h-10 rounded-full bg-[#c084fc]/10 flex items-center justify-center shrink-0 text-[#c084fc]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-white/50">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-32 border-t border-white/5 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">Have Questions?</h2>
          <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
            Our experts are here to guide you through cryptocurrency basics, investing strategies, or any inquiries you have.
          </p>
          
          <ContactForm variant="dark" />
        </motion.div>
      </section>
      
      {/* Footer minimal */}
      <footer className="border-t border-white/5 py-8 text-center text-sm text-white/40">
         <p>&copy; {new Date().getFullYear()} Veterus. All rights reserved.</p>
         <div className="flex justify-center gap-4 mt-4">
           <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
           <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
         </div>
      </footer>
    </main>
  );
}
