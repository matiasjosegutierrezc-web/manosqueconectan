import Image           from 'next/image'
import Reveal          from '@/components/Reveal'
import PhotoPlaceholder from '@/components/PhotoPlaceholder'
import StatCounter      from '@/components/StatCounter'

export default function Equipo() {
  return (
    <section id="equipo" className="bg-cream py-24">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: photo collage */}
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              {/* Reemplazar con <Image src="..." alt="Equipo Manos que Conectan" fill className="object-cover" /> */}
              <PhotoPlaceholder
                label="Foto principal equipo"
                aspect="16/9"
                className="col-span-2"
              />
              <div className="relative w-full min-h-[180px] overflow-hidden">
                <Image
                  src="/foto-equipo-chica.jpg"
                  alt="Equipo Manos que Conectan"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="relative w-full min-h-[180px] overflow-hidden">
                <Image
                  src="/foto-equipo-chica2.jpg"
                  alt="Equipo en actividad"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          </Reveal>

          {/* Right: text */}
          <Reveal delay={200}>
            <span className="block font-inter text-[11px] font-medium tracking-[0.15em] uppercase text-blue-dark mb-3.5">
              El equipo
            </span>
            <h2
              className="font-lora font-normal text-text-main leading-[1.2] mb-6"
              style={{ fontSize: 'clamp(28px, 3.8vw, 44px)' }}
            >
              Conectamos voluntad<br />
              con <em className="text-blue-mid">impacto real</em>
            </h2>
            <p className="font-inter text-[16px] leading-[1.72] text-gray-dark mb-4">
              Somos un grupo de voluntarios que cree que cada persona tiene algo valioso para dar. No hace falta experiencia previa, solo las ganas de estar presente y acompañar.
            </p>
            <p className="font-inter text-[16px] leading-[1.72] text-gray-dark">
              Trabajamos en red con los hogares, coordinamos con sus equipos y nos aseguramos de que cada visita, donación y actividad llegue donde más se necesita.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-0 mt-8 mb-2 border-t border-gray-mid/22 border-b border-gray-mid/22 py-7">
              <div className="flex-1 min-w-[100px] pr-8 mr-8 border-r border-gray-mid/30 last:border-0 last:pr-0 last:mr-0">
                <StatCounter value={5} suffix="+" label="Tipos de actividades" />
              </div>
              <div className="flex-1 min-w-[100px] pr-8 mr-8 border-r border-gray-mid/30 last:border-0 last:pr-0 last:mr-0">
                <StatCounter value={3} prefix="+" label="Formas de colaborar" />
              </div>
              <div className="flex-1 min-w-[100px]">
                <StatCounter value="∞" label="Impacto posible" />
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdY4OFAwCyP9FmRJ4oH8pfTW-OclGIy2IyLcUy-NL0ytmXkTQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 min-h-[44px] bg-blue-dark border-2 border-blue-dark text-white font-inter text-[12px] font-semibold tracking-[0.10em] uppercase rounded-none transition-all hover:opacity-85 hover:-translate-y-px"
              >
                Sumate
              </a>
              <a
                href="https://instagram.com/manosqueconectan.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 min-h-[44px] bg-transparent border-2 border-blue-dark text-blue-dark font-inter text-[12px] font-semibold tracking-[0.10em] uppercase rounded-none transition-all hover:opacity-85 hover:-translate-y-px"
              >
                Instagram
              </a>
            </div>

          </Reveal>

        </div>
      </div>
    </section>
  )
}
