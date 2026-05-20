import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Blueprint } from "@/components/site/Blueprint";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { Industries } from "@/components/site/Industries";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-[#f7f7f5] text-[#111] overflow-x-clip">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Problem />
      <Blueprint />
      <About />
      <Testimonials />
      <Industries />
      <FinalCTA />
      <Footer />
    </main>
  );
}
