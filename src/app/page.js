"use client";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-white dark:bg-black overflow-hidden transition-colors duration-300">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,white,transparent)]"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/8 dark:bg-pink-400/10 rounded-full blur-[120px]"></div>
      
      <main className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-20 px-6 py-32 text-center">

        {/* Hero Section */}
        <div className="flex flex-col items-center gap-8 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-black dark:text-white">
            Remote-First<br />
            <span className="text-black/40 dark:text-white/40">Web3 Builders</span>
          </h2>
          <p className="text-xl md:text-2xl text-black/50 dark:text-white/50 leading-relaxed max-w-2xl font-light tracking-wide">
            We build your Web3 vision — fast, global, done.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-6 mt-12">
          <button className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:opacity-90 transition-opacity">
            Get a Quote
          </button>
          <button className="px-10 py-4 border border-black/30 dark:border-white/30 text-black dark:text-white text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:border-black/50 dark:hover:border-white/50 transition-colors">
            View Work
          </button>
        </div>
      </main>
    </div>
  );
}
