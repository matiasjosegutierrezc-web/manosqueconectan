function LogoSVG() {
  return (
    <svg width="28" height="22" viewBox="0 0 34 26" fill="none" aria-hidden="true">
      <path
        d="M2 24 C2 12 8.5 4 17 4 C25.5 4 32 12 32 24"
        stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"
      />
      <circle cx="2"  cy="24" r="2.5" fill="currentColor" />
      <circle cx="32" cy="24" r="2.5" fill="currentColor" />
      <path
        d="M8 24 C8 15.5 12 9.5 17 9.5 C22 9.5 26 15.5 26 24"
        stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.55"
      />
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
            <nav aria-label="Links del footer" className="flex flex-wrap justify-center gap-1.5 font-inter text-[13px] text-white/60">
              <a href="#mision"      className="text-white/65 hover:text-white transition-colors">Quiénes somos</a>
              <span className="opacity-35" aria-hidden="true">·</span>
              <a href="#que-hacemos" className="text-white/65 hover:text-white transition-colors">Qué hacemos</a>
              <span className="opacity-35" aria-hidden="true">·</span>
              <a href="#como-ayudar" className="text-white/65 hover:text-white transition-colors">Cómo ayudar</a>
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
