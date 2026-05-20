import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { useEffect, useState, type MouseEvent } from "react";
import orb from "@/assets/hero-orb.jpg";
import { BookingDialog } from "./BookingDialog";
import { DiagnosticDialog } from "./DiagnosticDialog";

function TypingIntro() {
  const phrases = ["Strategic Advisory", "Built for Founders", "Engineered for Scale"];
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

function OrbVisual() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [10, -10]), { stiffness: 80, damping: 20 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-10, 10]), { stiffness: 80, damping: 20 });
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 100);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 100);
  };
  return (
    <div onMouseMove={onMove} onMouseLeave={() => { mx.set(0); my.set(0); }} className="relative w-full h-[420px] lg:h-[520px] [perspective:1400px]">
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 spin-slow opacity-40">
          <div className="absolute inset-12 rounded-full border border-white/10" />
          <div className="absolute inset-24 rounded-full border border-white/5" />
        </div>
        <motion.img
          src={orb}
          alt="Veterus advisory glow orb"
          width={520}
          height={520}
          className="relative z-10 w-[80%] max-w-[460px] object-contain floaty"
          style={{ transform: "translateZ(80px)" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute right-2 top-10 rounded-2xl glass border border-white/10 px-4 py-3 text-left"
          style={{ transform: "translateZ(140px)" }}
        >
          <div className="text-[10px] uppercase tracking-widest text-white/50">Enterprise Value</div>
          <div className="text-white font-display text-2xl">+47%</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute left-2 bottom-12 rounded-2xl glass border border-white/10 px-4 py-3 text-left"
          style={{ transform: "translateZ(120px)" }}
        >
          <div className="text-[10px] uppercase tracking-widest text-white/50">Dependency</div>
          <div className="text-white font-display text-2xl">— 62%</div>
        </motion.div>
      </motion.div>
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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 lg:pt-36 pb-28 grid lg:grid-cols-12 gap-10 items-center">
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
            Strategic advisory for
            <br />
            <span className="gradient-text-purple">engineering-led businesses.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-6 text-base lg:text-lg text-white/65 max-w-xl leading-relaxed"
          >
            You built a successful business — but too much of it still depends on you.
            We help technical founders build companies that scale, operate and grow without constant founder dependency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-9 flex flex-col sm:flex-row gap-3"
          >
            <BookingDialog>
              <button className="btn-premium">Book a Strategy Conversation <span className="arrow">→</span></button>
            </BookingDialog>
            <DiagnosticDialog>
              <button className="btn-ghost-glow">Take the Diagnostic</button>
            </DiagnosticDialog>
          </motion.div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] uppercase tracking-[0.22em] text-white/40">
            <span>Engineering</span>
            <span className="h-px w-6 bg-white/20" />
            <span>Defence</span>
            <span className="h-px w-6 bg-white/20" />
            <span>Aerospace</span>
            <span className="h-px w-6 bg-white/20" />
            <span>Manufacturing</span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <OrbVisual />
        </div>
      </div>
    </section>
  );
}
