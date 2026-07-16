import { useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { CountrySelect, getCountryByCode, formatPhoneForCRM, formatPhoneForBlob } from "./CountrySelect";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function SignupDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", country: "CH" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [apiError, setApiError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("open-signup", handleOpen);
    return () => window.removeEventListener("open-signup", handleOpen);
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name || form.name.trim().length < 2) errs.name = "Please enter your name";
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Enter a valid email";
    
    const countryObj = getCountryByCode(form.country);
    if (!form.phone) {
      errs.phone = "Phone number is required";
    } else if (!countryObj.regex.test(form.phone.trim())) {
      errs.phone = `Invalid format. Example: ${countryObj.example}`;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setErrors({});
    setApiError("");
    setSubmitting(true);

    try {
      const formattedCRM = formatPhoneForCRM(form.phone, form.country);
      const formattedBlob = formatPhoneForBlob(form.phone, form.country);

      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, phone: formattedCRM, blobPhone: formattedBlob })
      });
      
      const data = await response.json();

      if (!response.ok) {
        setApiError(data.error || "Please check your details and try again.");
        toast.error("Signup Failed", { description: data.error || "Please check your details and try again." });
        setSubmitting(false);
        return;
      }

      if (data.alreadyExists) {
        toast.success("Welcome Back", { description: data.message });
      } else {
        toast.success("Account Created", { description: "You are now logged in." });
      }
      
      // Store session and redirect
      localStorage.setItem("sessionToken", data.sessionToken);
      setOpen(false);
      setForm({ name: "", email: "", phone: "", country: "CH" });
      navigate("/crypto-basics");

    } catch (err) {
      toast.error("Error", { description: "Failed to connect to the server." });
    }
    setSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[95vw] sm:max-w-[420px] p-0 overflow-hidden bg-[#050505] border-white/10 rounded-2xl sm:rounded-2xl">
        <button type="button" onClick={() => setOpen(false)} className="absolute right-4 top-4 z-50 text-white/40 hover:text-white transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div className="relative text-white p-6 sm:p-8 pb-3 sm:pb-4">
          <div className="relative">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d8b4fe] font-medium">Get Started</span>
            <DialogHeader className="mt-2 sm:mt-3 text-left">
              <DialogTitle className="font-display text-2xl sm:text-3xl tracking-tight">Create Account</DialogTitle>
              <DialogDescription className="text-white/60 mt-1 sm:mt-1.5 text-xs sm:text-sm">
                Join to access your strategic dashboard.
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="p-6 sm:p-8 pt-1 sm:pt-2 space-y-3.5 sm:space-y-5 text-white"
        >
          <Field label="Full name" error={errors.name}>
            <Input 
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-11 focus-visible:ring-1 focus-visible:ring-[#a855f7]/50 focus-visible:border-[#a855f7]/50 transition-all"
              value={form.name} 
              onChange={(e) => setForm({ ...form, name: e.target.value })} 
              placeholder="Jane Carter" 
            />
          </Field>
          <Field label="Email address" error={errors.email}>
            <Input 
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-11 focus-visible:ring-1 focus-visible:ring-[#a855f7]/50 focus-visible:border-[#a855f7]/50 transition-all"
              type="email" 
              value={form.email} 
              onChange={(e) => setForm({ ...form, email: e.target.value })} 
              placeholder="jane@example.com" 
            />
          </Field>
          <div className="grid grid-cols-[90px_1fr] sm:grid-cols-[100px_1fr] gap-2 sm:gap-3 items-start">
            <Field label="Country">
              <CountrySelect value={form.country} onChange={(val) => setForm({ ...form, country: val })} />
            </Field>
            <Field label="Phone number" error={errors.phone}>
              <Input 
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-11 focus-visible:ring-1 focus-visible:ring-[#a855f7]/50 focus-visible:border-[#a855f7]/50 transition-all"
                type="tel" 
                value={form.phone} 
                onChange={(e) => setForm({ ...form, phone: e.target.value })} 
                placeholder={getCountryByCode(form.country).example} 
              />
            </Field>
          </div>

          {apiError && (
            <div className="pt-2">
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                {apiError}
              </div>
            </div>
          )}
          
          <div className="pt-4">
            <button type="submit" disabled={submitting} className="btn-premium w-full justify-center disabled:opacity-60 text-sm h-11">
              {submitting ? "Processing…" : "Continue →"}
            </button>
          </div>
          
          <p className="text-center text-xs text-white/40 mt-4">
            Already have an account? <span className="underline cursor-pointer hover:text-white transition" onClick={() => { setOpen(false); setTimeout(() => window.dispatchEvent(new Event("open-login")), 100); }}>Log in here</span>
          </p>
          
          <p className="text-center text-xs text-white/40 mt-2">
            By continuing, you agree to our <a href="/terms" className="underline hover:text-white">Terms</a> and <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.1em] text-white/50">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 inline-block text-xs text-red-400">{error}</span>}
    </label>
  );
}
