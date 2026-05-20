import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useState, type MouseEvent } from "react";

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
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setI(i + 1);
        }
      }
    }, deleting ? 35 : 70);
    return () => clearTimeout(t);
  }, [text, deleting, i]);
  return (
    <span className="caret font-mono text-xs tracking-widest uppercase text-[#d8b4fe]">
      {text}
    </span>
  );
}

function FloatingCards() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-50, 50], [8, -8]);
  const ry = useTransform(mx, [-50, 50], [-8, 8]);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 100);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 100);
  };
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="relative w-full h-[520px] lg:h-[640px] [perspective:1400px]"
    >
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="absolute inset-0">
        {/* Big glow */}
        <div className="absolute -top-20 -right-20 h-[420px] w-[420px] rounded-full bg-[#a855f7]/40 blur-[120px]" />
        <div className="absolute bottom-0 left-10 h-[300px] w-[300px] rounded-full bg-[#7e22ce]/40 blur-[120px]" />

        {/* Card 1 - large gradient orb card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-4 top-6 w-[300px] lg:w-[360px] rounded-[28px] p-6 glass border border-white/10 shadow-2xl floaty"
          style={{ transform: "translateZ(60px)" }}
        >
          <div className="flex items-center justify-between text-xs text-white/60">
            <span>Diagnostic</span>
            <span>v.2026</span>
          </div>
          <div className="relative mt-4 h-44 rounded-2xl overflow-hidden bg-gradient-to-br from-[#d8b4fe] via-[#c084fc] to-[#a855f7]">
            <div className="absolute -bottom-12 -right-10 h-44 w-44 rounded-full bg-white/40 blur-2xl" />
            <div className="absolute top-4 left-4 h-12 w-12 rounded-full bg-white/30 backdrop-blur" />
            <div className="absolute bottom-6 left-6 h-20 w-32 rounded-2xl bg-white/20 backdrop-blur" />
          </div>
          <div className="mt-4">
            <p className="text-white font-display text-xl leading-tight">Founder Dependency Score</p>
            <p className="text-white/60 text-sm mt-1">82 / 100 — high reliance</p>
          </div>
        </motion.div>

        {/* Card 2 - small KPI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-2 top-40 w-[230px] rounded-[24px] p-5 glass border border-white/10 shadow-xl floaty-slow"
          style={{ transform: "translateZ(120px)" }}
        >
          <div className="text-white/60 text-xs uppercase tracking-wider">Enterprise Value</div>
          <div className="mt-2 text-white font-display text-3xl">+47%</div>
          <div className="mt-3 h-1.5 w-full rounded-full bg-white/10">
            <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#d8b4fe] to-[#a855f7]" />
          </div>
          <div className="mt-3 text-[10px] text-white/50">vs. prior 18-month baseline</div>
        </motion.div>

        {/* Card 3 - bottom right pastel object */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-16 bottom-2 w-[260px] rounded-[28px] p-5 glass border border-white/10 shadow-xl floaty-fast"
          style={{ transform: "translateZ(80px)" }}
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-[#f7b6d2] to-[#b7b5ff]" />
            <div>
              <div className="text-white text-sm font-medium">Strategic Clarity</div>
              <div className="text-white/50 text-xs">Pillar 01</div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-5 gap-1">
            {Array.from({ length: 5 }).map((_, k) => (
              <div key={k} className={`h-8 rounded-md ${k < 4 ? "bg-white/70" : "bg-white/15"}`} />
            ))}
          </div>
        </motion.div>

        {/* Floating 3D orbs */}
        <div className="absolute top-3 left-24 h-16 w-16 rounded-full bg-gradient-to-br from-[#f7b6d2] to-[#b7b5ff] blur-[2px] floaty" style={{ transform: "translateZ(180px)" }} />
        <div className="absolute bottom-32 right-2 h-10 w-10 rounded-full bg-gradient-to-br from-[#d8b4fe] to-[#a855f7] floaty-fast" style={{ transform: "translateZ(220px)" }} />
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden text-[#f5f5f5]" style={{ background: "#050505" }}>
      {/* Background gradient + noise */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[900px] w-[1200px] rounded-full bg-[#a855f7]/30 blur-[160px]" />
        <div className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-[#7e22ce]/30 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#c084fc]/20 blur-[160px]" />
        <div className="absolute inset-0 noise opacity-50 mix-blend-overlay" />
        {/* Bottom fade to light body */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#f7f7f5]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-36 lg:pt-40 pb-32 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#c084fc]" />
            <TypingIntro />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-display font-bold text-[44px] sm:text-6xl lg:text-7xl xl:text-[88px] leading-[0.98] tracking-[-0.03em]"
          >
            Strategic Advisory
            <br />
            <span className="text-white/90">For Engineering-Led</span>
            <br />
            <span className="gradient-text-purple">Businesses.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-8 text-lg lg:text-xl text-white/70 max-w-xl"
          >
            You built a successful business. But too much of it still depends on you.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-4 text-base text-white/50 max-w-xl"
          >
            Helping engineering and technical business owners build companies that scale, operate, and grow without constant founder dependency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-[#111] pl-6 pr-2 py-2 text-sm font-medium hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.6)] transition-all"
            >
              Book a Strategy Conversation
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#111] text-white group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
            <a
              href="#diagnostic"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-all"
            >
              Take the Diagnostic
            </a>
          </motion.div>

          <div className="mt-14 flex items-center gap-6 text-xs uppercase tracking-[0.18em] text-white/40">
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
          <FloatingCards />
        </div>
      </div>
    </section>
  );
}
