"use client";

import { Check } from "lucide-react";

const packages = [
  {
    name: "MVP Launch",
    price: "$99",
    description: "Perfect for testing your Web3 idea",
    features: [
      "Landing page + basic dApp",
      "Smart contract integration",
      "Wallet connectivity",
      "2-3 week delivery",
      "1 month support",
      "Source code included"
    ],
    popular: false
  },
  {
    name: "Full Product",
    price: "$500+",
    description: "Complete Web3 application",
    features: [
      "Full-featured dApp",
      "Custom smart contracts",
      "Backend + database",
      "Admin dashboard",
      "4-6 week delivery",
      "3 months support",
      "Free security audit",
      "Deployment + DevOps"
    ],
    popular: true
  },
  {
    name: "Custom Support",
    price: "$1,000+",
    description: "Ongoing support & mainnet deployment",
    features: [
      "Mainnet deployment",
      "Ongoing maintenance",
      "Priority support",
      "Performance monitoring",
      "Bug fixes & updates",
      "Infrastructure management",
      "Monthly reports",
      "Dedicated support channel"
    ],
    popular: false
  }
];

export default function PricingPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-black dark:text-white mb-8">
            Transparent Pricing
          </h1>
          <p className="text-xl sm:text-2xl text-black/50 dark:text-white/50 max-w-3xl mx-auto font-light">
            No hidden fees. Pay 50% upfront, 50% on delivery.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative border rounded-2xl p-8 transition-all duration-300 flex flex-col ${
                pkg.popular
                  ? 'border-black dark:border-white bg-black/[0.02] dark:bg-white/[0.02]'
                  : 'border-black/[0.08] dark:border-white/[0.08] hover:border-black/20 dark:hover:border-white/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-bold rounded-full">
                  POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-black text-black dark:text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-4xl font-black text-black dark:text-white mb-3">
                  {pkg.price}
                </p>
                <p className="text-sm text-black/60 dark:text-white/60 font-light">
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-black dark:text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-black/70 dark:text-white/70 font-light">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="/quote"
                className={`block w-full h-12 text-center text-sm font-semibold rounded-full transition-all leading-[3rem] ${
                  pkg.popular
                    ? 'bg-black dark:bg-white text-white dark:text-black hover:scale-[1.02]'
                    : 'border border-black/[0.08] dark:border-white/[0.08] text-black dark:text-white hover:border-black/20 dark:hover:border-white/20'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="border border-black/[0.08] dark:border-white/[0.08] rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-black text-black dark:text-white mb-6">
            Add-ons & Extras
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-black dark:text-white mb-2">Smart Contract Audit</h4>
              <p className="text-sm text-black/60 dark:text-white/60 font-light">
                Third-party security audit — $119
              </p>
            </div>
            <div>
              <h4 className="font-bold text-black dark:text-white mb-2">Extended Support</h4>
              <p className="text-sm text-black/60 dark:text-white/60 font-light">
                Monthly maintenance package — $49/month
              </p>
            </div>
            <div>
              <h4 className="font-bold text-black dark:text-white mb-2">UI/UX Design</h4>
              <p className="text-sm text-black/60 dark:text-white/60 font-light">
                Custom design system — $99
              </p>
            </div>
            <div>
              <h4 className="font-bold text-black dark:text-white mb-2">Tokenomics Consulting</h4>
              <p className="text-sm text-black/60 dark:text-white/60 font-light">
                Token design & economics — $19
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Note */}
        <div className="text-center mt-16">
          <p className="text-black/60 dark:text-white/60 font-light mb-4">
            All prices in USD. Final cost depends on project complexity.
          </p>
          <a href="/quote" className="text-black dark:text-white font-bold hover:underline">
            Get a custom quote →
          </a>
        </div>
      </main>
    </div>
  );
}
