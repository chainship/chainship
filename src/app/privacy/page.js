export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-black dark:text-white mb-8">
            Privacy Policy
          </h1>
          <p className="text-xl text-black/50 dark:text-white/50 font-light">
            Last updated: November 13, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-black/70 dark:text-white/70">
            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed font-light mb-4">
                We collect information you provide directly to us when using our services:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-light">
                <li>Contact information (name, email, company)</li>
                <li>Project requirements and specifications</li>
                <li>Payment and billing information</li>
                <li>Communication history and project files</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">2. How We Use Your Information</h2>
              <p className="leading-relaxed font-light mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-light">
                <li>Provide and improve our development services</li>
                <li>Communicate with you about projects and updates</li>
                <li>Process payments and maintain records</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">3. Information Sharing</h2>
              <p className="leading-relaxed font-light">
                We do not sell or share your personal information with third parties except as necessary to provide our services (e.g., payment processors, cloud hosting providers) or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">4. Data Security</h2>
              <p className="leading-relaxed font-light">
                We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure. We use encryption and secure protocols for all sensitive data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">5. Your Rights</h2>
              <p className="leading-relaxed font-light mb-4">
                Under Indian data protection laws, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-light">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">6. Cookies and Tracking</h2>
              <p className="leading-relaxed font-light">
                We use essential cookies to improve user experience. We do not use third-party tracking cookies for advertising purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">7. Contact Us</h2>
              <p className="leading-relaxed font-light">
                For privacy-related inquiries, contact us at privacy@chainship.dev
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
