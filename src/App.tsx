import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { MarketAnalysis } from "@/components/site/MarketAnalysis";
import { InvestmentStrategy } from "@/components/site/InvestmentStrategy";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { ContactForm } from "@/components/site/ContactForm";

export default function App() {
  return (
    <main className="bg-[#f7f7f5] text-[#111] overflow-x-clip min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <MarketAnalysis />
      <InvestmentStrategy />
      
      <section id="contact" className="relative py-28 lg:py-36 bg-white text-[#111] overflow-hidden border-t border-black/5">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[1100px] rounded-full bg-[#a855f7]/10 blur-[160px]" />
          <div className="absolute inset-0 noise opacity-20 mix-blend-overlay" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            Take the next step<br />
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto text-base lg:text-lg mb-12">
            A focused conversation. A clear picture of where you are. A defined route to where you want to be.
          </p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
