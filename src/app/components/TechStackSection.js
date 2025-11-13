"use client";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Solidity", category: "Smart Contracts" },
  { name: "Ethereum", category: "Blockchain" },
  { name: "Polygon", category: "Layer 2" },
  { name: "Hardhat", category: "Development" },
  { name: "Web3.js", category: "Integration" },
  { name: "Ethers.js", category: "Integration" },
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
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 px-4">
            Our Tech Stack
          </h3>
          <p className="text-base sm:text-lg text-black/50 dark:text-white/50 px-4">
            Industry-leading tools and frameworks
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative px-6 py-3 border border-accent hover:shadow-accent rounded-full backdrop-blur-sm bg-white/50 dark:bg-black/50 cursor-default transition-all"
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
