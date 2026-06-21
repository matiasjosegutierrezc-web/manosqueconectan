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
    desc:   'Compartimos tardes de juegos, charlas y actividades recreativas dentro de los hogares.',
    src:    '/actividad-visitas.jpg',
    objPos: 'center 85%',
  },
  {
    freq:   'Sábados',
    title:  'Deportes',
    desc:   'Rugby, fútbol, baile y otras actividades deportivas que promueven valores, vínculos y trabajo en equipo.',
    src:    '/actividad-deportes.jpg',
    objPos: 'center bottom',
  },
  {
    freq:   '',
    title:  'Salidas',
    desc:   'Organizamos paseos y actividades recreativas para que los chicos descubran nuevos espacios y vivan experiencias diferentes.',
    src:    '/actividad-recreativa.jpg',
    objPos: 'center center',
  },
  {
    freq:   'Festejos',
    title:  'Cumpleaños',
    desc:   'Porque cada cumpleaños merece ser especial, organizamos festejos, regalos y momentos para compartir.',
    src:    '/actividad-cumple.jpg',
    objPos: 'center 85%',
  },
  {
    freq:   'Todo el año',
    title:  'Donaciones',
    desc:   'Coordinamos la recepción y entrega de ropa, juguetes, útiles y artículos esenciales según las necesidades de cada hogar.',
    src:    '/actividad-donaciones.jpg',
    objPos: 'center center',
  },
  {
    freq:   'PROPUESTAS',
    title:  '¿Tenés una idea?',
    desc:   '¿Tenés una idea para compartir? Un taller, una actividad, una salida especial o cualquier propuesta que pueda sumar. Siempre estamos abiertos a nuevas formas de acompañar.',
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
            Generamos espacios de encuentro, acompañamiento y diversión para niños y adolescentes que viven en hogares. Organizamos actividades, salidas, festejos y donaciones que responden a las necesidades reales de cada lugar.
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
