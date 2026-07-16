import { motion } from "motion/react";
import { ContactForm } from "./ContactForm";

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-28 lg:py-36 text-white overflow-hidden" style={{ background: "#050505" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[1100px] rounded-full bg-[#a855f7]/30 blur-[160px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#7e22ce]/30 blur-[140px]" />
        <div className="absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-[#c084fc]/20 blur-[140px]" />
        <div className="absolute inset-0 noise opacity-40 mix-blend-overlay" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-sm text-[10px] uppercase tracking-[0.3em] text-white/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#c084fc]" />
          Take the next step
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.02] tracking-[-0.03em]"
        >
          Build a business that performs<br />
          <span className="gradient-text-purple">without you.</span>
        </motion.h2>

        <p className="mt-7 text-white/65 max-w-xl mx-auto text-base lg:text-lg">
          A focused conversation. A clear picture of where you are. A defined route to where you want to be.
        </p>

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
