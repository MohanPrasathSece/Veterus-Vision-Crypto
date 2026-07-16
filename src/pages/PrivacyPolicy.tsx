import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#f7f7f5] text-[#111] overflow-x-clip min-h-screen pt-24">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
        <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-[#111]/60 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8 prose prose-slate max-w-none">
          <section>
            <h2 className="text-2xl font-bold">1. Information Collection</h2>
            <p>We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the website or otherwise when you contact us. This includes Name, Email, Phone Number, and Country location.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">2. Data Usage</h2>
            <p>We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">3. CRM Processing</h2>
            <p>When you submit a contact or signup form, your data is processed securely through our Customer Relationship Management (CRM) system. We use this system to organize communications, track interactions, and manage our relationship with you effectively. We ensure all CRM transfers are encrypted and compliant with relevant privacy regulations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">4. Cookies and Tracking</h2>
            <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. This helps us understand how you use the site and improve your experience. We do not use intrusive cross-site tracking without your explicit consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">5. Security</h2>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. All backend requests are validated and CRM tokens are securely managed. However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">6. Data Retention</h2>
            <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">7. User Rights</h2>
            <p>Depending on your location, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">8. Marketing & Third Parties</h2>
            <p>We only share information with third parties that perform services for us or on our behalf and require access to such information to do that work. We do not sell your personal data to third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">9. International Transfers</h2>
            <p>Our servers are located globally. If you are accessing our website from outside our primary operational regions, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">10. Contact Us</h2>
            <p>If you have questions or comments about this notice, you may email us or use the contact form on our website.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
