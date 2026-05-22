import Image  from 'next/image'
import Reveal from '@/components/Reveal'

interface Activity {
  freq:    string
  title:   string
  desc:    string
  src?:    string
  objPos?: string
}

const ACTIVITIES: Activity[] = [
  {
    freq:   'Fines de semana',
    title:  'Visitas para jugar',
    desc:   'Tardes de juego y compañía en el hogar. La actividad más regular y la que más impacto genera semana a semana.',
    src:    '/actividad-visitas.jpg',
    objPos: 'center 85%',
  },
  {
    freq:   'Sábados',
    title:  'Deportes',
    desc:   'Rugby, Fútbol y más. El deporte como herramienta de contención y trabajo en equipo.',
    src:    '/actividad-deportes.jpg',
    objPos: 'center bottom',
  },
  {
    freq:   'Salidas',
    title:  'Recreativas',
    desc:   'Temaikén y otros destinos para que los chicos vivan experiencias únicas fuera del hogar.',
    src:    '/actividad-recreativa.jpg',
    objPos: 'center center',
  },
  {
    freq:   'Cumpleaños',
    title:  'Festejos',
    desc:   'Ningún chico festeja solo.',
    src:    '/actividad-cumple.jpg',
    objPos: 'center 85%',
  },
  {
    freq:   'Todo el año',
    title:  'Donaciones',
    desc:   'Coordinamos recepción y entrega de ropa, juguetes y artículos esenciales según las necesidades de cada hogar.',
    src:    '/actividad-donaciones.jpg',
    objPos: 'center center',
  },
  {
    freq:   'PROPUESTAS',
    title:  '¿Se te ocurre algo?',
    desc:   'Taller, actividad, salida especial. Si tenés ganas y una idea, hay espacio. Hablemos.',
  },
]

export default function QueHacemos() {
  return (
    <section id="que-hacemos" className="bg-[#1F5F6B] py-24" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-12">

        {/* Header */}
        <Reveal className="text-center text-white mb-14">
          <h2 className="font-lora font-normal leading-[1.15] mb-4" style={{ fontSize: 'clamp(30px, 4.5vw, 48px)' }}>
            Lo que<br /><em>hacemos</em>
          </h2>
          <p className="font-inter text-[16px] text-white/70 max-w-[520px] mx-auto leading-[1.65]">
            Llenamos los fines de semana de los chicos de actividades, compañía y contención.
          </p>
        </Reveal>

        {/* Grid — h-full en Reveal + flex-col en card para igualar alturas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACTIVITIES.map(({ freq, title, desc, src, objPos }, i) => (
            <Reveal key={title} delay={(i % 3) * 100} className="h-full">
              <div className="bg-blue-slate/40 border border-white/15 overflow-hidden h-full flex flex-col">

                {src ? (
                  <div className="relative w-full h-56 flex-shrink-0 overflow-hidden">
                    <Image
                      src={src}
                      alt={title}
                      fill
                      className="object-cover"
                      style={{ objectPosition: objPos ?? 'center center' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="w-full h-56 flex-shrink-0 bg-white/10" />
                )}

                <div className="p-5 pb-6 flex-1">
                  <span className="block font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-green-mint mb-2">
                    {freq}
                  </span>
                  <h3 className="font-lora font-medium text-[19px] text-white mb-2.5">
                    {title}
                  </h3>
                  <p className="font-inter text-[14px] leading-[1.62] text-white/75">
                    {desc}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
