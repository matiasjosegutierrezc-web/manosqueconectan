export default function Footer() {
  return (
    <footer className="bg-[#1F5F6B] py-12">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-center text-center md:text-left">

          {/* Logo */}
          <a href="#hero" className="inline-flex items-center justify-center md:justify-start gap-3">
            <svg width="44" height="32" viewBox="0 0 44 32" fill="none" aria-hidden="true">
              <path d="M2 28 Q6 8 18 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <path d="M7 29 Q10 12 18 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.85"/>
              <circle cx="22" cy="3" r="2.2" fill="white"/>
              <path d="M42 28 Q38 8 26 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <path d="M37 29 Q34 12 26 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.85"/>
            </svg>
            <span className="font-lora text-white text-lg">
              Manos que <strong className="font-semibold">conectan</strong>
            </span>
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
