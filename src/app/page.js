export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <main className="flex w-full max-w-4xl flex-col items-center gap-16 px-6 py-20 text-center">
        {/* Logo/Brand */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-6xl font-bold tracking-tight text-white">
            Chainship
          </h1>
          <div className="h-px w-24 bg-white/20"></div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center gap-6 max-w-2xl">
          <h2 className="text-3xl font-light leading-tight text-white md:text-4xl">
            Remote-First Web3 Builders
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            We build your Web3 vision — fast, global, done. Remote devs. Blockchain specialists. Your launch team.
          </p>
        </div>

        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
          <div className="flex flex-col items-center gap-2 p-8 border border-white/10">
            <h3 className="text-sm font-medium text-white uppercase tracking-wider">Fast Delivery</h3>
            <p className="text-sm text-white/50">From quote to product in record time</p>
          </div>
          <div className="flex flex-col items-center gap-2 p-8 border border-white/10">
            <h3 className="text-sm font-medium text-white uppercase tracking-wider">Global Team</h3>
            <p className="text-sm text-white/50">Remote-first blockchain experts</p>
          </div>
          <div className="flex flex-col items-center gap-2 p-8 border border-white/10">
            <h3 className="text-sm font-medium text-white uppercase tracking-wider">Web3 Ready</h3>
            <p className="text-sm text-white/50">Blockchain-powered websites & dApps</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="px-8 py-3 bg-white text-black font-medium hover:bg-white/90 transition-colors">
            Get a Quote
          </button>
          <button className="px-8 py-3 border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
            View Our Work
          </button>
        </div>
      </main>
    </div>
  );
}
