export default function LegalPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-black dark:text-white mb-8">
            Legal Information
          </h1>
          <p className="text-xl text-black/50 dark:text-white/50 font-light">
            Compliance and Legal Framework
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-black/70 dark:text-white/70">
            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">Business Information</h2>
              <p className="leading-relaxed font-light">
                Chainship is a Web3 development service provider registered and operating under the laws of India. We comply with all applicable Indian regulations including the Information Technology Act, 2000 and amendments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">Regulatory Compliance</h2>
              <p className="leading-relaxed font-light mb-4">
                We adhere to:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-light">
                <li>Information Technology Act, 2000 (IT Act)</li>
                <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
                <li>Digital Personal Data Protection Act, 2023 (DPDPA)</li>
                <li>Reserve Bank of India (RBI) guidelines where applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">Blockchain & Crypto Disclaimer</h2>
              <p className="leading-relaxed font-light">
                Our services involve blockchain technology and may include cryptocurrency-related development. Clients are responsible for ensuring their projects comply with all applicable laws and regulations in their jurisdiction. We do not provide legal or financial advice regarding cryptocurrency regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">Jurisdiction</h2>
              <p className="leading-relaxed font-light">
                All legal matters, disputes, and proceedings related to our services shall be governed by Indian law and subject to the exclusive jurisdiction of courts in India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">Service Terms</h2>
              <p className="leading-relaxed font-light">
                All projects are governed by individual service agreements. We reserve the right to refuse service to any client or project that may violate Indian laws or regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">Warranty Disclaimer</h2>
              <p className="leading-relaxed font-light">
                While we strive for excellence, our services are provided "as is" without warranties of any kind. We are not responsible for regulatory changes or legal interpretations that may affect client projects post-delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">Data Protection Officer</h2>
              <p className="leading-relaxed font-light">
                For data protection inquiries under DPDPA 2023, contact our Data Protection Officer at dpo@chainship.dev
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-black dark:text-white mb-4">Legal Contact</h2>
              <p className="leading-relaxed font-light">
                For all legal matters, compliance questions, or regulatory inquiries, contact legal@chainship.dev
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
