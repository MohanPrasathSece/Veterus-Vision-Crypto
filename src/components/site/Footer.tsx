export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display font-semibold text-lg">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#d8b4fe] to-[#a855f7]" />
          The Capital Space Crypto
        </div>
        
        <div className="flex gap-6 text-sm text-white/50">
          <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-white transition">Terms & Conditions</a>
        </div>
        
        <div className="text-sm text-white/40">
          © {new Date().getFullYear()} The Capital Space. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
