"use client";

import { Code2, Blocks, Coins, Zap, Layout, Repeat } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Web & Landing Pages",
    description: "Stunning websites for blockchain projects that convert visitors into users",
    tech: ["Next.js", "React", "Tailwind", "Framer Motion"],
    deliverables: ["Responsive design", "SEO optimized", "Fast loading", "Web3 wallet integration"]
  },
  {
    icon: Code2,
    title: "dApp / Web3 Apps",
    description: "Full-featured decentralized applications with seamless blockchain interaction",
    tech: ["React", "ethers.js", "Web3.js", "IPFS", "The Graph"],
    deliverables: ["Smart contract integration", "Wallet connectivity", "Transaction handling", "Real-time updates"]
  },
  {
    icon: Blocks,
    title: "Smart Contract Integration",
    description: "Connect your frontend to smart contracts with secure, efficient code",
    tech: ["Solidity", "Hardhat", "ethers.js", "OpenZeppelin"],
    deliverables: ["Contract deployment", "Testing suite", "Gas optimization", "Security audit"]
  },
  {
    icon: Coins,
    title: "Token Integration",
    description: "Seamless token and wallet connectivity for your blockchain application",
    tech: ["ERC-20", "ERC-721", "ERC-1155", "WalletConnect", "MetaMask"],
    deliverables: ["Token display", "Transfer functions", "Balance tracking", "Multi-chain support"]
  },
  {
    icon: Zap,
    title: "Rapid MVP Builds",
    description: "From concept to live product in weeks, not months",
    tech: ["Agile methodology", "CI/CD", "Cloud deployment"],
    deliverables: ["Working prototype", "User testing", "Iterative improvements", "Launch support"]
  },
  {
    icon: Repeat,
    title: "Maintenance & Iteration",
    description: "Ongoing support and feature development for your live product",
    tech: ["Remote collaboration", "Git workflow", "Monitoring tools"],
    deliverables: ["Bug fixes", "Feature additions", "Performance optimization", "Regular updates"]
  }
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <main className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black dark:text-white mb-6">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto px-4">
            Full-stack Web3 development services. From landing pages to complex dApps.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-accent rounded-lg p-8 backdrop-blur-sm hover:shadow-accent transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-black dark:text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-black/60 dark:text-white/60 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-black/40 dark:text-white/40 mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs border border-accent rounded-full text-black/70 dark:text-white/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-black/40 dark:text-white/40 mb-3">
                        What You Get
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="text-sm text-black/60 dark:text-white/60 flex items-start">
                            <span className="mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-6 px-4">
            Need Something Custom?
          </h3>
          <p className="text-base sm:text-lg text-black/60 dark:text-white/60 mb-8 px-4">
            Every blockchain project is unique. Let's discuss your specific needs.
          </p>
          <button className="px-8 sm:px-12 py-4 sm:py-5 border-2 border-accent text-black dark:text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:shadow-accent transition-all">
            Get a Custom Quote
          </button>
        </div>
      </main>
    </div>
  );
}
