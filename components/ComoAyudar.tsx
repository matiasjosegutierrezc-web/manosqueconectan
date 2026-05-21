import Reveal from '@/components/Reveal'

interface Card {
  num:      string
  title:    string
  body:     string
  cta:      string
  href:     string
  external: boolean
}

const CARDS: Card[] = [
  {
    num:      '01',
    title:    'Con tu tiempo',
    body:     'Visitas, deportes, salidas y festejos. Tu presencia transforma el fin de semana de un chico. Coordinamos todo, vos solo venís.',
    cta:      'Ser voluntario →',
    href:     'https://forms.gle/q5gykQwf5fitdZot7',
    external: true,
  },
  {
    num:      '02',
    title:    'Con cosas',
    body:     'Ropa, juguetes, artículos de higiene, útiles y regalos. Gestionamos la entrega según las necesidades reales de cada hogar.',
    cta:      'Donar cosas →',
    href:     'https://wa.me/?text=Hola%2C%20quiero%20donar%20cosas%20a%20Manos%20que%20Conectan',
    external: true,
  },
  {
    num:      '03',
    title:    'Con un aporte',
    body:     'Micros, entradas, meriendas y campañas específicas. Cada peso tiene destino concreto y transparente.',
    cta:      'Contribuir →',
    href:     'https://wa.me/?text=Hola%2C%20quiero%20hacer%20un%20aporte%20a%20Manos%20que%20Conectan',
    external: true,
  },
]

export default function ComoAyudar() {
  return (
    <section id="como-ayudar" className="bg-off-white py-24 border-t border-gray-mid/[0.12]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-12">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-end mb-14">
          <Reveal>
            <span className="block font-inter text-[11px] font-medium tracking-[0.15em] uppercase text-blue-dark mb-3">
              Cómo colaborar
            </span>
            <h2 className="font-lora font-normal text-text-main leading-[1.15]" style={{ fontSize: 'clamp(30px, 4.5vw, 48px)' }}>
              Tres formas de<br />
              <em className="text-blue-mid">sumar tu aporte</em>
            </h2>
          </Reveal>
          <Reveal delay={100} className="md:text-right">
            <p className="font-inter text-[16px] leading-[1.7] text-gray-dark">
              No hace falta mucho. Cada gesto cuenta. Elegí la forma que mejor se adapte a tus posibilidades.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map(({ num, title, body, cta, href, external }, i) => (
            <Reveal key={num} delay={i * 100}>
              <div className="relative overflow-hidden p-9 border border-gray-mid/20 bg-off-white transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(42,100,120,0.09)]">
                {/* Decorative number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute -top-3 right-4 font-lora font-medium text-blue-mid opacity-[0.10] leading-none"
                  style={{ fontSize: '108px' }}
                >
                  {num}
                </span>

                <h3 className="relative font-lora font-medium text-[22px] text-text-main mb-3.5">
                  {title}
                </h3>
                <p className="relative font-inter text-[15px] leading-[1.65] text-gray-dark mb-6">
                  {num === '03' ? (
                    <>
                      {body}{' '}
                      <span className="font-inter font-semibold text-text-main">Alias: MANOSQUECONECTAN</span>.
                    </>
                  ) : body}
                </p>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="relative font-inter text-[11px] font-semibold tracking-[0.12em] uppercase text-blue-dark border-b border-blue-dark pb-0.5 transition-colors hover:text-green-cta hover:border-green-cta"
                >
                  {cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
