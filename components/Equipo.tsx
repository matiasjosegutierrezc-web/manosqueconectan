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
              {/* Reemplazar con <Image src="..." alt="Actividad grupal" fill className="object-cover" /> */}
              <PhotoPlaceholder label="Foto" aspect="1/1" />
              {/* Reemplazar con <Image src="..." alt="Actividad grupal" fill className="object-cover" /> */}
              <PhotoPlaceholder label="Foto" aspect="1/1" />
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
                <StatCounter value={3} label="Formas de colaborar" />
              </div>
              <div className="flex-1 min-w-[100px]">
                <StatCounter value="∞" label="Impacto posible" />
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href="#cta-final"
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

            {/* WhatsApp — TODO: agregar link */}
            <a
              href="#" /* TODO: agregar link de WhatsApp aquí */
              className="mt-3 inline-flex items-center gap-2 px-5 py-3 min-h-[44px] bg-blue-mid/[0.07] border border-blue-mid/20 text-blue-dark font-inter text-[11px] font-semibold tracking-[0.10em] uppercase rounded-none transition-colors hover:bg-blue-mid/[0.13]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Grupo de voluntarios
            </a>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
