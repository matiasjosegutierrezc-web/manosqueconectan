import Image  from 'next/image'
import Reveal from '@/components/Reveal'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-blue-dark"
    >
      {/* Foto — solo mitad derecha */}
      <div className="absolute right-0 top-0 bottom-0 w-[55%] hidden lg:block">
        <Image
          src="/hero-principal.jpg"
          alt="Manos que Conectan — voluntarios con niños en el hogar"
          fill
          className="object-cover object-[center_40%]"
          priority
          sizes="55vw"
        />
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-blue-dark to-transparent" />
      </div>

      {/* Gradiente inferior: transición al quote banner */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-blue-dark z-20 pointer-events-none" />

      {/* Texto */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-32 w-full">
        <div className="max-w-lg">
          <Reveal>
            <span className="block font-inter text-[11px] font-medium tracking-[0.15em] uppercase text-green-mint mb-5">
              Grupo de Voluntarios · Argentina
            </span>
            <h1 className="font-lora font-medium text-white leading-[1.08] mb-6" style={{ fontSize: 'clamp(44px, 7.5vw, 72px)' }}>
              Manos que<br />
              <em>conectan</em>
            </h1>
            <p className="font-inter text-[17px] leading-[1.65] text-white/80 mb-9">
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
                className="inline-flex items-center justify-center px-7 py-3.5 min-h-[44px] bg-white/10 border-2 border-white/20 text-white font-inter text-[12px] font-semibold tracking-[0.10em] uppercase rounded-none transition-all hover:bg-white/15 hover:-translate-y-px"
              >
                Conocernos
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
