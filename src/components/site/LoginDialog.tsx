import { useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function LoginDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [apiError, setApiError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("open-login", handleOpen);
    return () => window.removeEventListener("open-login", handleOpen);
  }, []);

  const validate = () => {
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email");
      return false;
    }
    setError("");
    return true;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError("");
    if (!validate()) return;
    
    setSubmitting(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      
      const data = await response.json();

      if (!response.ok) {
        setApiError(data.error || "Invalid credentials.");
        toast.error("Login Failed", { description: data.error || "Invalid credentials." });
        setSubmitting(false);
        return;
      }

      toast.success("Welcome Back", { description: "You are now logged in." });
      
      // Store session and redirect
      localStorage.setItem("sessionToken", data.sessionToken);
      setOpen(false);
      setEmail("");
      navigate("/crypto-basics");

    } catch (err) {
      toast.error("Error", { description: "Failed to connect to the server." });
    }
    setSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[400px] p-0 overflow-hidden bg-[#050505]/60 backdrop-blur-3xl border-white/10 shadow-[0_0_80px_rgba(168,85,247,0.15)] sm:rounded-2xl">
        <div className="relative text-white p-8 pb-4">
          <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-[#7e22ce]/30 blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[#a855f7]/20 blur-[80px]" />
          <div className="relative">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d8b4fe] font-medium">Welcome Back</span>
            <DialogHeader className="mt-3 text-left">
              <DialogTitle className="font-display text-3xl tracking-tight">Login</DialogTitle>
              <DialogDescription className="text-white/60 mt-1.5 text-sm">
                Enter your email to access the platform.
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative p-8 pt-2 space-y-5 text-white"
        >
          <Field label="Email address" error={error}>
            <Input 
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-11 focus-visible:ring-1 focus-visible:ring-[#a855f7]/50 focus-visible:border-[#a855f7]/50 transition-all"
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="jane@example.com" 
            />
          </Field>
          
          {apiError && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
              {apiError}
            </div>
          )}

          <div className="pt-4">
            <button type="submit" disabled={submitting} className="btn-premium w-full justify-center disabled:opacity-60 text-sm h-11">
              {submitting ? "Processing…" : "Sign In"}
            </button>
          </div>
          
          <p className="text-center text-xs text-white/40 mt-4">
            Don't have an account? <span className="underline cursor-pointer hover:text-white transition" onClick={() => { setOpen(false); setTimeout(() => window.dispatchEvent(new Event("open-signup")), 100); }}>Sign up instead</span>
          </p>
        </motion.form>
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
