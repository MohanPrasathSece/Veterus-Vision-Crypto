import { useState, type ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { CountrySelect, getCountryByCode, formatPhoneForCRM } from "./CountrySelect";

export function ContactForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", country: "CH", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name || form.name.trim().length < 2) errs.name = "Name required";
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Valid email required";
    
    const countryObj = getCountryByCode(form.country);
    if (!form.phone) {
      errs.phone = "Phone required";
    } else if (!countryObj.regex.test(form.phone.trim())) {
      errs.phone = `Invalid. Ex: ${countryObj.example}`;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setErrors({});
    setSubmitting(true);

    try {
      const payload = {
        ...form,
        phone: formatPhoneForCRM(form.phone, form.country)
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      
      const data = await response.json();

      if (!response.ok) {
        toast.error("Error", { description: data.error || "Please check your details and try again." });
      } else {
        toast.success("Success", { description: data.message });
        setForm({ name: "", email: "", phone: "", country: "CH", message: "" });
      }
    } catch (err) {
      toast.error("Error", { description: "Failed to connect to the server." });
    }
    setSubmitting(false);
  };

  const isDark = variant === "dark";

  return (
    <form onSubmit={onSubmit} className={`w-full max-w-md mx-auto text-left space-y-4 p-6 rounded-2xl border shadow-xl relative z-10 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-black/5'}`}>
      <Field label="Full name" error={errors.name} isDark={isDark}>
        <Input 
          className={`h-10 ${isDark ? 'bg-black/20 border-white/10 text-white placeholder:text-white/30' : 'bg-[#f7f7f5] border-black/5 text-[#111] placeholder:text-[#6b7280]'}`}
          value={form.name} 
          onChange={(e) => setForm({ ...form, name: e.target.value })} 
          placeholder="Jane Carter" 
        />
      </Field>
      <Field label="Email address" error={errors.email} isDark={isDark}>
        <Input 
          className={`h-10 ${isDark ? 'bg-black/20 border-white/10 text-white placeholder:text-white/30' : 'bg-[#f7f7f5] border-black/5 text-[#111] placeholder:text-[#6b7280]'}`}
          type="email" 
          value={form.email} 
          onChange={(e) => setForm({ ...form, email: e.target.value })} 
          placeholder="jane@example.com" 
        />
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-3 items-start">
        <Field label="Country" isDark={isDark}>
          <CountrySelect value={form.country} onChange={(val) => setForm({ ...form, country: val })} variant={variant} />
        </Field>
        <Field label="Phone number" error={errors.phone} isDark={isDark}>
          <Input 
            className={`h-10 ${isDark ? 'bg-black/20 border-white/10 text-white placeholder:text-white/30' : 'bg-[#f7f7f5] border-black/5 text-[#111] placeholder:text-[#6b7280]'}`}
            type="tel" 
            value={form.phone} 
            onChange={(e) => setForm({ ...form, phone: e.target.value })} 
            placeholder={getCountryByCode(form.country).example} 
          />
        </Field>
      </div>
      <Field label="Message (Optional)" isDark={isDark}>
        <Textarea 
          className={`min-h-[80px] ${isDark ? 'bg-black/20 border-white/10 text-white placeholder:text-white/30' : 'bg-[#f7f7f5] border-black/5 text-[#111] placeholder:text-[#6b7280]'}`}
          value={form.message} 
          onChange={(e) => setForm({ ...form, message: e.target.value })} 
          placeholder="How can we help?" 
        />
      </Field>
      
      <div className="pt-2">
        <button type="submit" disabled={submitting} className="btn-premium w-full justify-center disabled:opacity-60 text-sm">
          {submitting ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}

function Field({ label, error, isDark, children }: { label: string; error?: string; isDark?: boolean; children: ReactNode }) {
  return (
    <label className="block">
      <span className={`text-[11px] uppercase tracking-[0.1em] font-medium ${isDark ? 'text-white/50' : 'text-[#6b7280]'}`}>{label}</span>
      <div className="mt-1">{children}</div>
      {error && <span className="mt-1 inline-block text-xs text-red-400">{error}</span>}
    </label>
  );
}
