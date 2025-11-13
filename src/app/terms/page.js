export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-black dark:text-white mb-8">
            Terms of Service
          </h1>
          <p className="text-xl text-black/50 dark:text-white/50 font-light">
            Last updated: November 13, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-black/70 dark:text-white/70">
            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">1. Agreement to Terms</h2>
              <p className="leading-relaxed font-light">
                By accessing or using Chainship's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">2. Services</h2>
              <p className="leading-relaxed font-light mb-4">
                Chainship provides Web3 development services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-light">
                <li>Smart contract development and auditing</li>
                <li>Decentralized application (dApp) development</li>
                <li>Blockchain integration and consulting</li>
                <li>Token and NFT platform development</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">3. Intellectual Property</h2>
              <p className="leading-relaxed font-light">
                All code, designs, and deliverables created by Chainship remain our intellectual property until full payment is received. Upon full payment, ownership transfers to the client as specified in the project agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">4. Payment Terms</h2>
              <p className="leading-relaxed font-light">
                Payment terms are established in individual project agreements. Typically, we require 50% upfront and 50% upon project completion. Late payments may incur additional fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">5. Limitation of Liability</h2>
              <p className="leading-relaxed font-light">
                Chainship provides services on an "as is" basis. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">6. Governing Law</h2>
              <p className="leading-relaxed font-light">
                These terms are governed by the laws of India. Any disputes shall be resolved in the courts of India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">7. Contact</h2>
              <p className="leading-relaxed font-light">
                For questions about these terms, please contact us at legal@chainship.dev
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
