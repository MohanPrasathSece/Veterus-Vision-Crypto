import { useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { z } from "zod";

const questions = [
  { id: "deps", q: "How dependent is the business on you for daily decisions?", opts: [
    { label: "Almost everything routes through me", score: 4 },
    { label: "Most key decisions", score: 3 },
    { label: "Some — leaders own a few areas", score: 2 },
    { label: "Very little — the team runs it", score: 1 },
  ]},
  { id: "strategy", q: "Do you have a written, executable strategy for the next 12 months?", opts: [
    { label: "No — it lives in my head", score: 4 },
    { label: "Roughly, not shared", score: 3 },
    { label: "Yes, but not actioned weekly", score: 2 },
    { label: "Yes, and the team executes it", score: 1 },
  ]},
  { id: "leaders", q: "How strong is your leadership layer?", opts: [
    { label: "Mostly me wearing every hat", score: 4 },
    { label: "1–2 capable seconds", score: 3 },
    { label: "A small leadership team", score: 2 },
    { label: "A full team that owns outcomes", score: 1 },
  ]},
  { id: "margin", q: "Is margin growing in line with revenue?", opts: [
    { label: "No — margin is shrinking", score: 4 },
    { label: "Flat", score: 3 },
    { label: "Slowly improving", score: 2 },
    { label: "Yes, materially", score: 1 },
  ]},
  { id: "value", q: "Could the business be sold or transferred in its current state?", opts: [
    { label: "Not really — it's me", score: 4 },
    { label: "With heavy transition support", score: 3 },
    { label: "Probably, with prep", score: 2 },
    { label: "Yes — it's a true asset", score: 1 },
  ]},
];

const emailSchema = z.string().trim().email().max(160);

export function DiagnosticDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [done, setDone] = useState(false);

  const reset = () => { setStep(0); setAnswers({}); setEmail(""); setEmailErr(""); setDone(false); };

  const isQuestionStep = step < questions.length;
  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  const max = questions.length * 4;
  const score = Math.round((total / max) * 100);
  const band = score >= 75 ? "High founder dependency" : score >= 50 ? "Moderate dependency — meaningful upside" : score >= 30 ? "Maturing — refine the system" : "Operating as an enterprise";

  const choose = (s: number) => {
    setAnswers({ ...answers, [questions[step].id]: s });
    setTimeout(() => setStep(step + 1), 180);
  };

  const submit = () => {
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) { setEmailErr("Enter a valid email"); return; }
    setEmailErr("");
    setDone(true);
    toast.success("Diagnostic complete", { description: "Your full report is on its way." });
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) setTimeout(reset, 200); }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[620px] p-0 overflow-hidden bg-white border-black/5">
        <div className="relative bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2a] to-[#0a0a0a] text-white px-8 pt-7 pb-6">
          <div className="absolute -top-12 left-1/3 h-40 w-40 rounded-full bg-[#a855f7]/40 blur-3xl" />
          <div className="relative flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d8b4fe]">Founder Dependency Diagnostic</span>
            <span className="text-xs text-white/60">{isQuestionStep ? `${step + 1} / ${questions.length}` : "Result"}</span>
          </div>
          <div className="mt-4 h-1 w-full rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#d8b4fe] to-[#a855f7]"
              animate={{ width: `${((Math.min(step, questions.length)) / questions.length) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>

        <div className="p-8 min-h-[280px]">
          <AnimatePresence mode="wait">
            {isQuestionStep ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="font-display text-2xl leading-tight tracking-tight">{questions[step].q}</h3>
                <div className="mt-6 space-y-2">
                  {questions[step].opts.map((o) => (
                    <button
                      key={o.label}
                      onClick={() => choose(o.score)}
                      className="group w-full text-left rounded-2xl border border-black/10 px-5 py-4 hover:border-[#a855f7] hover:bg-[#faf5ff] transition-all flex items-center justify-between"
                    >
                      <span className="text-sm">{o.label}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#a855f7]">→</span>
                    </button>
                  ))}
                </div>
                {step > 0 && (
                  <button onClick={() => setStep(step - 1)} className="mt-6 text-xs text-[#6b7280] hover:text-[#111]">
                    ← Previous
                  </button>
                )}
              </motion.div>
            ) : !done ? (
              <motion.div key="email" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-6xl tracking-tight gradient-text-purple">{score}</span>
                  <span className="text-sm text-[#6b7280]">/ 100</span>
                </div>
                <h3 className="mt-2 font-display text-2xl tracking-tight">{band}</h3>
                <p className="mt-3 text-[#6b7280] text-sm leading-relaxed">
                  Get the full written diagnostic with a tailored 3-step action plan delivered to your inbox.
                </p>
                <div className="mt-6">
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" />
                  {emailErr && <span className="text-xs text-red-500 mt-1 inline-block">{emailErr}</span>}
                </div>
                <button onClick={submit} className="btn-premium mt-5 w-full justify-between">
                  Send my report <span className="arrow">→</span>
                </button>
              </motion.div>
            ) : (
              <motion.div key="done" initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
                <div className="mx-auto h-14 w-14 rounded-full bg-gradient-to-br from-[#d8b4fe] to-[#a855f7] flex items-center justify-center text-white text-2xl">✓</div>
                <h3 className="mt-5 font-display text-2xl tracking-tight">Report sent</h3>
                <p className="mt-2 text-[#6b7280] text-sm">Check your inbox in the next few minutes.</p>
                <button onClick={() => setOpen(false)} className="btn-ghost-light mt-6">Close</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
