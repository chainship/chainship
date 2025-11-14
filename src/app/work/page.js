"use client";

import { ExternalLink, ArrowRight, Github } from "lucide-react";
import Image from "next/image";

// Photon Logo Component
function PhotonLogo({ size = 'lg' }) {
  const sizes = {
    sm: { container: 'w-6 h-6', outer: 'w-6 h-6', inner: 'w-2.5 h-2.5' },
    md: { container: 'w-8 h-8', outer: 'w-8 h-8', inner: 'w-3.5 h-3.5' },
    lg: { container: 'w-12 h-12', outer: 'w-12 h-12', inner: 'w-5 h-5' },
    xl: { container: 'w-16 h-16', outer: 'w-16 h-16', inner: 'w-7 h-7' },
  };

  const currentSize = sizes[size];

  return (
    <div className={`${currentSize.container} relative flex items-center justify-center`}>
      <div className={`${currentSize.outer} absolute rounded-full bg-gradient-to-br from-yellow-400/30 via-orange-400/30 to-orange-500/30 blur-sm animate-pulse`}></div>
      <div className={`${currentSize.outer} absolute rounded-full bg-gradient-to-br from-yellow-400/20 via-orange-400/20 to-orange-500/20`}></div>
      <div className={`${currentSize.inner} relative rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 shadow-lg shadow-orange-500/50`}></div>
    </div>
  );
}

const projects = [
  {
    title: "Photon",
    subtitle: "Constant Product AMM DEX",
    metrics: [
      { value: "$2.4B", label: "24h Volume" },
      { value: "$850M", label: "Total Value Locked" },
      { value: "1.2M+", label: "Total Swaps" }
    ],
    description: "A production-ready Solana DEX built with Rust and Anchor. Features constant product AMM, real-time price feeds, portfolio tracking, and comprehensive swap interface. Deployed on Solana Devnet for educational and testing purposes.",
    features: ["Constant Product AMM", "Real-time Price Feeds", "Portfolio Tracking", "Multi-token Support"],
    tech: ["Solana", "Rust", "Anchor", "Next.js", "TypeScript"],
    image: "/projects/photon-swap.png",
    imageWidth: 527,
    imageHeight: 600,
    logo: true,
    link: "https://photon-six-flame.vercel.app/",
    github: "https://github.com/chainship/photon-cp-swap",
    layout: "side-by-side"
  },
  {
    title: "Spectra",
    subtitle: "NFT Analytics & Portfolio Tracker",
    metrics: [
      { value: "10K+", label: "Collections Tracked" },
      { value: "500K+", label: "NFTs Indexed" },
      { value: "Real-time", label: "Price Updates" }
    ],
    description: "NFT analytics platform similar to DexScreener but for NFTs. Track trending collections, monitor your NFT portfolio, view leaderboards, and discover top traders. Real-time floor prices, volume tracking, and comprehensive collection insights.",
    features: ["Trending NFT Collections", "Portfolio Tracking", "Trader Leaderboards", "Floor Price Alerts", "Volume Analytics", "Collection Rankings"],
    tech: ["React", "Next.js", "TypeScript", "NFT APIs", "Web3.js"],
    image: "/projects/spectra.png",
    imageWidth: 1577,
    imageHeight: 758,
    logo: false,
    link: "https://spectra-6y41a4tmf-xishs-projects.vercel.app/",
    github: "https://github.com/XD637/spectra",
    layout: "full-width"
  }
];

export default function WorkPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <main className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-black dark:text-white mb-8">
            Our Works
          </h1>
          <p className="text-xl sm:text-2xl text-black/50 dark:text-white/50 max-w-3xl mx-auto font-light">
            Real Web3 projects. Real results. See what we've shipped.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-black/[0.08] dark:border-white/[0.08] rounded-2xl overflow-hidden backdrop-blur-sm hover:border-black/20 dark:hover:border-white/20 transition-all"
            >
              {project.layout === 'full-width' ? (
                // Full-width layout for wide images
                <div className="flex flex-col">
                  {/* Project Header */}
                  <div className="p-6 sm:p-8 border-b border-black/[0.08] dark:border-white/[0.08]">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-black dark:text-white mb-2">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <p className="text-base text-black/50 dark:text-white/50 font-light">
                            {project.subtitle}
                          </p>
                        )}
                      </div>
                      <div className="flex gap-3">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 border border-black/[0.08] dark:border-white/[0.08] rounded-xl hover:border-black/20 dark:hover:border-white/20 hover:scale-105 transition-all"
                          >
                            <ExternalLink className="w-5 h-5 text-black dark:text-white" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 border border-black/[0.08] dark:border-white/[0.08] rounded-xl hover:border-black/20 dark:hover:border-white/20 hover:scale-105 transition-all"
                          >
                            <Github className="w-5 h-5 text-black dark:text-white" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-4">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="text-center p-4 border border-black/[0.08] dark:border-white/[0.08] rounded-xl">
                            <div className="text-2xl sm:text-3xl font-black text-black dark:text-white mb-1">
                              {metric.value}
                            </div>
                            <div className="text-xs text-black/50 dark:text-white/50 font-light">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Full-width Image */}
                  <div className="relative w-full bg-black dark:bg-black overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={project.imageWidth || 1577}
                      height={project.imageHeight || 758}
                      className="w-full h-auto object-cover"
                      quality={100}
                      priority={index === 0}
                      unoptimized
                    />
                  </div>

                  {/* Project Details */}
                  <div className="p-6 sm:p-8">
                    {project.description && (
                      <p className="text-base sm:text-lg text-black/70 dark:text-white/70 leading-relaxed font-light mb-6">
                        {project.description}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 text-sm border border-black/[0.08] dark:border-white/[0.08] rounded-full text-black/70 dark:text-white/70 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    {project.features && (
                      <div className="mb-6">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-black/40 dark:text-white/40 mb-3">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {project.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-black/70 dark:text-white/70">
                              <div className="w-1 h-1 rounded-full bg-black dark:bg-white"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-black dark:text-white hover:gap-3 transition-all"
                      >
                        View Live Project <ArrowRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                // Side-by-side layout for vertical images
              <div className="grid md:grid-cols-[1.2fr_1fr] gap-0">
                {/* Project Image */}
                <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] bg-black dark:bg-black overflow-hidden flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={project.imageWidth || 1280}
                    height={project.imageHeight || 1047}
                    className="w-full h-full object-contain"
                    quality={100}
                    priority={index === 0}
                    unoptimized
                  />
                </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    {project.logo && (
                      <div className="mt-1">
                        <PhotonLogo size="md" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-black dark:text-white mb-2">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-base text-black/50 dark:text-white/50 font-light">
                          {project.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-black/[0.08] dark:border-white/[0.08] rounded-xl hover:border-black/20 dark:hover:border-white/20 hover:scale-105 transition-all"
                      >
                        <ExternalLink className="w-5 h-5 text-black dark:text-white" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-black/[0.08] dark:border-white/[0.08] rounded-xl hover:border-black/20 dark:hover:border-white/20 hover:scale-105 transition-all"
                      >
                        <Github className="w-5 h-5 text-black dark:text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 mb-8">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center p-4 border border-black/[0.08] dark:border-white/[0.08] rounded-xl">
                        <div className="text-2xl sm:text-3xl font-black text-black dark:text-white mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-black/50 dark:text-white/50 font-light">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {project.description && (
                  <p className="text-base sm:text-lg text-black/70 dark:text-white/70 leading-relaxed font-light mb-8">
                    {project.description}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm border border-black/[0.08] dark:border-white/[0.08] rounded-full text-black/70 dark:text-white/70 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                {project.features && (
                  <div className="mb-8">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-black/40 dark:text-white/40 mb-3">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-black/70 dark:text-white/70">
                          <div className="w-1 h-1 rounded-full bg-black dark:bg-white"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.link && (
                  <a 
                    href={`${project.link}/docs`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-black dark:text-white hover:gap-3 transition-all"
                  >
                    View Docs <ArrowRight size={16} />
                  </a>
                )}
              </div>
              </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-6 px-4">
            Your Project Could Be Next
          </h3>
          <button className="px-14 py-6 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold tracking-wide rounded-full hover:scale-[1.02] transition-transform shadow-xl shadow-black/10 dark:shadow-white/10">
            Start Your Project
          </button>
        </div>
      </main>
    </div>
  );
}
