import { useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";
import { motion } from "motion/react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  company: z.string().trim().min(2, "Company is required").max(120),
  revenue: z.string().min(1, "Select revenue range"),
  message: z.string().trim().max(800).optional(),
});

const ranges = ["< £1M", "£1M – £5M", "£5M – £20M", "£20M – £100M", "£100M+"];

export function BookingDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", revenue: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setOpen(false);
    setForm({ name: "", email: "", company: "", revenue: "", message: "" });
    toast.success("Request received", { description: "We'll be in touch within one working day." });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[540px] p-0 overflow-hidden bg-white border-black/5">
        <div className="relative bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2a] to-[#0a0a0a] text-white p-8">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#a855f7]/40 blur-3xl" />
          <div className="relative">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d8b4fe]">Strategy Conversation</span>
            <DialogHeader className="mt-3 text-left">
              <DialogTitle className="font-display text-3xl tracking-tight">Book a 30-min call</DialogTitle>
              <DialogDescription className="text-white/60 mt-2">
                Tell us where the business is now — we'll reach out to schedule.
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 space-y-4"
        >
          <Field label="Full name" error={errors.name}>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Carter" />
          </Field>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Email" error={errors.email}>
              <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@company.com" />
            </Field>
            <Field label="Company" error={errors.company}>
              <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Acme Engineering Ltd" />
            </Field>
          </div>
          <Field label="Annual revenue" error={errors.revenue}>
            <div className="flex flex-wrap gap-2">
              {ranges.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setForm({ ...form, revenue: r })}
                  className={`px-3.5 py-1.5 rounded-full border text-xs transition-all ${
                    form.revenue === r
                      ? "bg-[#111] text-white border-[#111]"
                      : "bg-white text-[#111] border-black/10 hover:border-[#a855f7]"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </Field>
          <Field label="What's the biggest constraint right now? (optional)">
            <Textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about the bottleneck…" />
          </Field>
          <button type="submit" disabled={submitting} className="btn-premium w-full justify-between disabled:opacity-60">
            {submitting ? "Sending…" : "Request the call"}
            <span className="arrow">→</span>
          </button>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-[#6b7280]">{label}</span>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1 inline-block text-xs text-red-500">{error}</span>}
    </label>
  );
}
