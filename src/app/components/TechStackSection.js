"use client";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Solidity", category: "EVM Contracts" },
  { name: "Rust", category: "Solana/Sui" },
  { name: "Ethereum", category: "EVM Chain" },
  { name: "Solana", category: "Blockchain" },
  { name: "Sui", category: "Blockchain" },
  { name: "Polygon", category: "Layer 2" },
  { name: "Hardhat", category: "Development" },
  { name: "Anchor", category: "Solana Framework" },
  { name: "Web3.js", category: "Integration" },
  { name: "Ethers.js", category: "EVM Integration" },
  { name: "@solana/web3.js", category: "Solana SDK" },
  { name: "IPFS", category: "Storage" },
  { name: "The Graph", category: "Indexing" },
  { name: "Tailwind", category: "Styling" },
  { name: "Node.js", category: "Backend" }
];

export default function TechStackSection() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black dark:text-white mb-6">
            Multi-Chain Expertise
          </h3>
          <p className="text-xl text-black/50 dark:text-white/50 font-light">
            EVM, Solana, Sui and cutting-edge blockchain technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative px-6 py-3 border border-black/[0.08] dark:border-white/[0.08] rounded-full backdrop-blur-sm bg-white dark:bg-black hover:border-black/20 dark:hover:border-white/20 cursor-default transition-all"
            >
              <span className="text-sm font-semibold text-black dark:text-white transition-colors">
                {tech.name}
              </span>
              <span className="ml-2 text-xs text-black/40 dark:text-white/40 transition-colors">
                {tech.category}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-black/50 dark:text-white/50">
            And many more cutting-edge Web3 technologies
          </p>
        </div>
      </div>
    </section>
  );
}
