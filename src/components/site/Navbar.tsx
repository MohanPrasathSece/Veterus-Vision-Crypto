import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Success Stories", href: "#stories" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-black/5 text-[#111]"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display font-semibold tracking-tight text-lg">
          <span className={`inline-block h-2.5 w-2.5 rounded-full ${scrolled ? "bg-[#a855f7]" : "bg-[#c084fc]"}`} />
          Veterus
        </a>
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="relative px-4 py-2 text-sm rounded-full opacity-80 hover:opacity-100 transition-opacity group"
              >
                {l.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform bg-current" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className={`group inline-flex items-center gap-2 rounded-full pl-4 pr-2 py-2 text-sm font-medium transition-all duration-300 ${
            scrolled
              ? "bg-[#111] text-white hover:bg-black"
              : "bg-white/10 text-white hover:bg-white/20 border border-white/15"
          }`}
        >
          Book a Strategy Conversation
          <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full transition-transform group-hover:translate-x-0.5 ${
            scrolled ? "bg-white text-black" : "bg-white text-black"
          }`}>
            →
          </span>
        </a>
      </nav>
    </motion.header>
  );
}
