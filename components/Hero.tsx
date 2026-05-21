import Reveal          from '@/components/Reveal'
import PhotoPlaceholder from '@/components/PhotoPlaceholder'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-blue-mid pt-[120px] pb-24"
      style={{ background: 'linear-gradient(175deg, #6B9AB8 0%, #2A6478 100%)' }}
    >
      {/* MQC background letters */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-lora font-medium text-white opacity-[0.06] leading-none whitespace-nowrap z-0"
        style={{ fontSize: 'clamp(130px, 24vw, 280px)' }}
      >
        MQC
      </span>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <Reveal>
            <span className="block font-inter text-[11px] font-medium tracking-[0.15em] uppercase text-green-mint mb-5">
              Grupo de Voluntarios · Argentina
            </span>
            <h1 className="font-lora font-medium text-white leading-[1.08] mb-6" style={{ fontSize: 'clamp(44px, 7.5vw, 72px)' }}>
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

          {/* Right: photo */}
          <Reveal delay={200} className="w-full">
            {/* Reemplazar con <Image src="..." alt="Voluntarios con niños en el hogar" fill className="object-cover" /> */}
            <PhotoPlaceholder label="Foto principal" aspect="3/4" className="w-full" />
          </Reveal>

        </div>
      </div>
    </section>
  )
}
