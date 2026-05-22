import Image  from 'next/image'
import Reveal from '@/components/Reveal'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col lg:flex-row lg:items-center overflow-hidden"
      style={{ backgroundColor: '#6EA0BE' }}
    >
      {/* Foto mobile — arriba */}
      <div className="relative w-full h-[45vh] lg:hidden">
        <Image
          src="/hero-principal.jpg"
          alt="Manos que Conectan — voluntarios con niños en el hogar"
          fill
          className="object-cover object-[center_40%]"
          priority
          sizes="100vw"
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#6EA0BE]" />
      </div>

      {/* Foto desktop — derecha */}
      <div className="absolute right-0 top-0 bottom-0 w-[38%] hidden lg:block">
        <Image
          src="/hero-principal.jpg"
          alt="Manos que Conectan — voluntarios con niños en el hogar"
          fill
          className="object-cover object-[center_40%]"
          priority
          sizes="38vw"
        />
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#6EA0BE] to-transparent" />
      </div>

      {/* Gradiente inferior desktop */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-[#6EA0BE] z-20 pointer-events-none hidden lg:block" />

      {/* Texto */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-12 lg:py-32 w-full">
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
              Somos el nexo entre personas con ganas de ayudar y niños y adolescentes que viven en hogares. Organizamos, conectamos y acompañamos siendo voluntario, donando materiales o haciendo un aporte económico.
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
