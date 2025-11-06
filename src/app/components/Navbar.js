export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight text-black">CHAINSHIP</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black/60">
          <a href="#services" className="hover:text-black transition-colors">Services</a>
          <a href="#work" className="hover:text-black transition-colors">Work</a>
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#contact" className="px-6 py-2 bg-black text-white rounded-full hover:opacity-90 transition-opacity">Contact</a>
        </div>
      </div>
    </nav>
  );
}
