import Image  from 'next/image'
import Reveal from '@/components/Reveal'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <Image
        src="/hero-principal.jpg"
        alt="Manos que Conectan — voluntarios con niños en el hogar"
        fill
        className="object-cover"
        style={{ objectPosition: 'center center' }}
        priority
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-dark/85 via-blue-dark/60 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <Reveal>
          <span className="block font-inter text-[11px] font-medium tracking-[0.15em] uppercase text-green-mint mb-5">
            Grupo de Voluntarios · Argentina
          </span>
          <h1 className="font-lora font-medium text-white leading-[1.08] mb-6 max-w-2xl" style={{ fontSize: 'clamp(44px, 7.5vw, 72px)' }}>
            Manos que<br />
            <em>conectan</em>
          </h1>
          <p className="font-inter text-[17px] leading-[1.65] text-white/80 max-w-[480px] mb-9">
            Somos el nexo entre personas con ganas de ayudar y chicos que viven en hogares. Organizamos, conectamos y acompañamos.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#como-ayudar"
              className="inline-flex items-center justify-center px-7 py-3.5 min-h-[44px] border-2 border-white/50 text-white font-inter text-[12px] font-semibold tracking-[0.10em] uppercase rounded-none transition-all hover:border-white/90 hover:opacity-90 hover:-translate-y-px"
            >
              Cómo ayudar
            </a>
            <a
              href="#quienes-somos"
              className="inline-flex items-center justify-center px-7 py-3.5 min-h-[44px] bg-blue-dark border-2 border-blue-dark text-white font-inter text-[12px] font-semibold tracking-[0.10em] uppercase rounded-none transition-all hover:opacity-85 hover:-translate-y-px"
            >
              Conocernos
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
