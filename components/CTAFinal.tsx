import Reveal from '@/components/Reveal'

export default function CTAFinal() {
  return (
    <section id="cta-final" className="relative bg-blue-mid py-28 overflow-hidden text-center">
      {/* JMAT background letters */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-lora font-medium text-white opacity-[0.06] leading-none whitespace-nowrap z-0"
        style={{ fontSize: 'clamp(110px, 20vw, 240px)' }}
      >
        JMAT
      </span>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 lg:px-12">
        <Reveal>
          <span className="block font-inter text-[11px] font-medium tracking-[0.15em] uppercase text-white/65 mb-3.5">
            El primer paso
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2
            className="font-lora font-normal text-white leading-[1.2] mb-9"
            style={{ fontSize: 'clamp(30px, 4.5vw, 52px)' }}
          >
            Encontrá tu forma de sumar
          </h2>
        </Reveal>
        <Reveal delay={200} className="flex flex-wrap gap-3.5 justify-center">
          <a
            href="#como-ayudar"
            className="inline-flex items-center justify-center px-7 py-3.5 min-h-[44px] bg-blue-dark border-2 border-blue-dark text-white font-inter text-[12px] font-semibold tracking-[0.10em] uppercase rounded-none transition-all hover:opacity-85 hover:-translate-y-px"
          >
            Ver cómo colaborar
          </a>
          <a
            href="https://instagram.com/manosqueconectan.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 min-h-[44px] bg-transparent border-2 border-white/50 text-white font-inter text-[12px] font-semibold tracking-[0.10em] uppercase rounded-none transition-all hover:border-white/90 hover:opacity-90 hover:-translate-y-px"
          >
            Seguinos en Instagram
          </a>
        </Reveal>
      </div>
    </section>
  )
}
