import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative bg-[#6EA0BE] py-12 overflow-hidden">
      {/* Logo watermark */}
      <Image
        src="/logo.png"
        alt=""
        width={200}
        height={200}
        className="absolute right-8 bottom-0 opacity-[0.08] object-contain pointer-events-none select-none"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-center text-center md:text-left">

          {/* Logo */}
          <a href="#hero" className="inline-flex justify-center md:justify-start">
            <Image src="/logo.png" alt="Manos que Conectan" width={120} height={44} className="object-contain object-left" />
          </a>

          {/* Center */}
          <div className="text-center">
            <a
              href="https://instagram.com/manosqueconectan.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-inter text-[14px] font-medium text-white mb-3 hover:opacity-80 transition-opacity"
            >
              @manosqueconectan.ar
            </a>
            <nav aria-label="Links del footer" className="flex flex-wrap justify-center gap-1.5 font-inter text-[13px]">
              <a href="#quienes-somos" className="text-white/80 hover:text-white transition-colors">Quiénes somos</a>
              <span className="opacity-35 text-white" aria-hidden="true">·</span>
              <a href="#que-hacemos"   className="text-white/80 hover:text-white transition-colors">Qué hacemos</a>
              <span className="opacity-35 text-white" aria-hidden="true">·</span>
              <a href="#como-ayudar"   className="text-white/80 hover:text-white transition-colors">Cómo ayudar</a>
            </nav>
          </div>

          {/* Right */}
          <div className="text-center md:text-right">
            <a
              href="mailto:manosqueconectan.ar@gmail.com"
              className="block font-inter text-[13px] text-white/80 hover:text-white transition-colors mb-2"
            >
              manosqueconectan.ar@gmail.com
            </a>
            <p className="font-inter text-[12px] text-white/50">
              © 2026 Manos que Conectan
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
