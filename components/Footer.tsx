function LogoSVG() {
  return (
    <svg width="32" height="22" viewBox="0 0 40 28" fill="none" aria-hidden="true">
      {/* Arco izquierdo */}
      <path d="M4 22 Q8 8 16 6"  stroke="currentColor" strokeWidth="2"   strokeLinecap="round" fill="none" />
      <path d="M7 24 Q11 10 18 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
      {/* Punto central */}
      <circle cx="20" cy="4" r="2" fill="currentColor" />
      {/* Arco derecho */}
      <path d="M36 22 Q32 8 24 6"  stroke="currentColor" strokeWidth="2"   strokeLinecap="round" fill="none" />
      <path d="M33 24 Q29 10 22 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-blue-dark py-12">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-center text-center md:text-left">

          {/* Logo */}
          <a
            href="#hero"
            className="inline-flex items-center justify-center md:justify-start gap-2.5 text-white font-lora text-[16px] font-medium"
          >
            <LogoSVG />
            Manos que conectan
          </a>

          {/* Center */}
          <div className="text-center">
            <a
              href="https://instagram.com/manosqueconectan.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-inter text-[14px] font-medium text-green-mint mb-3 hover:opacity-80 transition-opacity"
            >
              @manosqueconectan.ar
            </a>
            <nav aria-label="Links del footer" className="flex flex-wrap justify-center gap-1.5 font-inter text-[13px]">
              <a href="#quienes-somos" className="text-white/65 hover:text-white transition-colors">Quiénes somos</a>
              <span className="opacity-35 text-white" aria-hidden="true">·</span>
              <a href="#que-hacemos"   className="text-white/65 hover:text-white transition-colors">Qué hacemos</a>
              <span className="opacity-35 text-white" aria-hidden="true">·</span>
              <a href="#como-ayudar"   className="text-white/65 hover:text-white transition-colors">Cómo ayudar</a>
            </nav>
          </div>

          {/* Right */}
          <div className="text-center md:text-right">
            <a
              href="mailto:manosqueconectan.ar@gmail.com"
              className="block font-inter text-[13px] text-white/65 hover:text-white transition-colors mb-2"
            >
              manosqueconectan.ar@gmail.com
            </a>
            <p className="font-inter text-[12px] text-white/35">
              © 2026 Manos que Conectan
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
