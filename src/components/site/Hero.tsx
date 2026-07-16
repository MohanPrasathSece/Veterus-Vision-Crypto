import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { SignupDialog } from "./SignupDialog";
import { LoginDialog } from "./LoginDialog";

function TypingIntro() {
  const phrases = ["Algorithmic Trading", "Institutional Security", "Optimized Yield"];
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = phrases[i % phrases.length];
    const t = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1500);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDeleting(false); setI(i + 1); }
      }
    }, deleting ? 35 : 70);
    return () => clearTimeout(t);
  }, [text, deleting, i]);
  return <span className="caret font-mono text-[10px] tracking-[0.3em] uppercase text-[#d8b4fe]">{text}</span>;
}

function TradingVisual() {
  return (
    <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px]">
      <div className="absolute inset-0 flex items-center justify-center">
        
        {/* Main Glass Chart Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="relative w-full sm:w-[90%] h-[240px] sm:h-[320px] rounded-2xl sm:rounded-3xl glass border border-white/10 p-4 sm:p-6 flex flex-col justify-end gap-2 overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.15)]"
        >
          {/* Header */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Portfolio Value</div>
              <div className="text-white font-display text-lg sm:text-2xl font-semibold">$1,482,904.50</div>
            </div>
            <div className="text-[#4ade80] bg-[#4ade80]/10 px-3 py-1 rounded-full text-xs font-semibold border border-[#4ade80]/20 flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              +145% APY
            </div>
          </div>

          {/* Candlesticks */}
          <div className="flex-1 flex items-end justify-between gap-1 sm:gap-2 pb-2 relative z-0 mt-20">
            {[30, 45, 35, 60, 50, 75, 65, 85, 80, 100].map((h, i) => {
              const isUp = i === 0 || h >= [30, 45, 35, 60, 50, 75, 65, 85, 80, 100][i - 1];
              return (
                <div key={i} className="flex-1 flex flex-col items-center justify-end relative h-full group">
                  {/* Wick */}
                  <motion.div 
                    initial={{ height: 0 }} animate={{ height: `${h + 10}%` }} transition={{ duration: 1, delay: i * 0.1 }}
                    className={`w-[1px] absolute bottom-0 ${isUp ? 'bg-[#4ade80]' : 'bg-[#f87171]'}`}
                  />
                  {/* Body */}
                  <motion.div 
                    initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1, delay: i * 0.1 }}
                    className={`w-full max-w-[12px] sm:max-w-[20px] rounded-sm relative z-10 ${isUp ? 'bg-[#4ade80]' : 'bg-[#f87171]'}`}
                  />
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Floating Crypto Asset 1 */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-4 top-16 w-16 h-16 rounded-full glass border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.3)] z-20"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d8b4fe" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </motion.div>

        {/* Floating AI Tech Node */}
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -left-6 bottom-24 w-20 h-20 rounded-full glass border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(74,222,128,0.2)] z-20"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.5"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zM12 6v12M8 12h8M10 9l4 6M14 9l-4 6"/></svg>
        </motion.div>
        
        {/* Risk Management Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute right-4 bottom-8 rounded-2xl glass border border-white/10 px-4 py-3 text-left z-20 flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-full bg-[#a855f7]/20 flex items-center justify-center text-[#d8b4fe]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-white/50">Security</div>
            <div className="text-white text-sm font-semibold">Cold Storage Active</div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden text-[#f5f5f5]" style={{ background: "#050505" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[900px] w-[1200px] rounded-full bg-[#a855f7]/25 blur-[160px]" />
        <div className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-[#7e22ce]/25 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#c084fc]/15 blur-[160px]" />
        <div className="absolute inset-0 noise opacity-50 mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#f7f7f5]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-24 sm:pt-32 lg:pt-36 pb-20 sm:pb-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#c084fc]" />
            <TypingIntro />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 font-display font-bold text-[34px] sm:text-[46px] lg:text-[58px] xl:text-[64px] leading-[1.02] tracking-[-0.03em]"
          >
            Next-Generation Crypto
            <br />
            <span className="gradient-text-purple">Asset Management.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-6 text-base lg:text-lg text-white/65 max-w-xl leading-relaxed"
          >
            Harness AI-driven market analysis and institutional-grade security to scale your digital asset portfolio. We eliminate the noise of volatile markets with algorithmic execution and strict risk management.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-9 flex flex-col sm:flex-row gap-3"
          >
            <SignupDialog>
              <button className="btn-premium">Create Your Account <span className="arrow">→</span></button>
            </SignupDialog>
            <LoginDialog>
              <button className="btn-ghost-glow">Login to Dashboard</button>
            </LoginDialog>
          </motion.div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] uppercase tracking-[0.22em] text-white/40">
            <span>DeFi</span>
            <span className="h-px w-6 bg-white/20" />
            <span>Smart Contracts</span>
            <span className="h-px w-6 bg-white/20" />
            <span>Cold Storage</span>
            <span className="h-px w-6 bg-white/20" />
            <span>AI Execution</span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <TradingVisual />
        </div>
      </div>
    </section>
  );
}
