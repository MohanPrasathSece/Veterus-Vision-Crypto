import { motion } from "motion/react";

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-28 lg:py-40 text-white overflow-hidden" style={{ background: "#050505" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[1100px] rounded-full bg-[#a855f7]/30 blur-[160px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#7e22ce]/30 blur-[140px]" />
        <div className="absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-[#c084fc]/20 blur-[140px]" />
        <div className="absolute inset-0 noise opacity-40 mix-blend-overlay" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-sm text-xs uppercase tracking-[0.2em] text-white/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#c084fc]" />
          Take the next step
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.0] tracking-[-0.03em]"
        >
          Build A Business
          <br />
          That Performs
          <br />
          <span className="gradient-text-purple">Without You.</span>
        </motion.h2>

        <p className="mt-8 text-white/60 max-w-xl mx-auto text-lg">
          A focused conversation. A clear picture of where you are. A defined route to where you want to be.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-white text-[#111] pl-6 pr-2 py-2 text-sm font-medium hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.7)] transition-all"
          >
            Schedule Your Call
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#111] text-white group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
          <a
            href="#diagnostic"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
          >
            Take the Diagnostic
          </a>
        </div>
      </div>
    </section>
  );
}
