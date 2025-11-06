export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
      
      <main className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-20 px-6 py-32 text-center">

        {/* Hero Section */}
        <div className="flex flex-col items-center gap-8 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white">
            Remote-First<br />
            <span className="text-white/40">Web3 Builders</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/50 leading-relaxed max-w-2xl font-light tracking-wide">
            We build your Web3 vision — fast, global, done.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-6 mt-12">
          <button className="px-10 py-4 bg-white text-black text-sm font-bold uppercase tracking-[0.2em] hover:bg-white/90 transition-all">
            Get a Quote
          </button>
          <button className="px-10 py-4 border border-white/30 text-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-all">
            View Work
          </button>
        </div>
      </main>
    </div>
  );
}
