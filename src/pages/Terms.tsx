import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export default function Terms() {
  return (
    <main className="bg-[#f7f7f5] text-[#111] overflow-x-clip min-h-screen pt-24">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
        <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-[#111]/60 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8 prose prose-slate max-w-none">
          <section>
            <h2 className="text-2xl font-bold">1. Acceptance & Eligibility</h2>
            <p>By accessing our website, you agree to be bound by these Terms and Conditions. You must be at least 18 years old to use this website and our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">2. Website Purpose</h2>
            <p>This website serves as an educational and advisory platform for business growth, technology scaling, and cryptocurrency basics. The information provided is for informational purposes only.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">3. Cryptocurrency Risk Disclosure</h2>
            <p>Trading and investing in cryptocurrencies and digital assets involves significant risk. The value of digital assets is highly volatile and can fluctuate dramatically. You could lose all of your initial investment.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">4. No Financial or Investment Advice</h2>
            <p>None of the content on this website constitutes financial advice, investment advice, trading advice, or any other sort of advice. We do not provide personalized investment recommendations. You should conduct your own research and consult with a qualified financial advisor before making any investment decisions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">5. No Guaranteed Returns</h2>
            <p>Past performance is not indicative of future results. We make no representations or warranties regarding the potential for profit or the avoidance of loss in any market conditions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">6. User Responsibilities & Acceptable Use</h2>
            <p>You agree not to use the website for any unlawful purpose or to solicit others to perform or participate in any unlawful acts. You must not submit false information through our forms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">7. Intellectual Property</h2>
            <p>All content, branding, designs, and materials on this website are the intellectual property of The Capital Space and are protected by applicable copyright and trademark laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">8. Limitation of Liability</h2>
            <p>Under no circumstances shall The Capital Space or its directors, employees, or affiliates be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your access or use of our website or services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">9. Privacy Reference</h2>
            <p>Your use of our website is also governed by our Privacy Policy, which details how we collect and use your data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">10. Governing Law & Disputes</h2>
            <p>These terms shall be governed by and defined following the laws of our primary operating jurisdiction. Any disputes arising from these terms will be subject to exclusive jurisdiction in those courts.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">11. Contact</h2>
            <p>For any questions or concerns regarding these Terms, please contact us via our contact form.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
