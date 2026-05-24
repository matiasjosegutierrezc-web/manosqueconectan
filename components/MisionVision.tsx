import Reveal from '@/components/Reveal'

export default function MisionVision() {
  return (
    <section id="quienes-somos" className="bg-off-white min-h-[600px]" style={{ scrollMarginTop: '60px' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">

        {/* Misión */}
        <Reveal className="bg-cream py-16 px-12">
          <span className="font-inter text-[11px] font-medium tracking-[0.15em] uppercase text-blue-dark">
            Nuestra Misión
          </span>
          <hr className="border-gray-mid/30 my-4" />
          <h2
            className="font-lora font-normal text-text-main leading-[1.3] mb-5"
            style={{ fontSize: 'clamp(24px, 2.8vw, 34px)' }}
          >
            Acompañamos a niños que viven en hogares. Somos el puente hacia quienes quieren ayudar.
          </h2>
          <p className="font-inter text-[16px] leading-[1.7] text-gray-dark">
            Acompañamos a niños que se encuentran en hogares. Buscamos conectar a personas que quieren ayudar con las necesidades reales de cada lugar. Organizamos visitas para jugar, salidas recreativas, actividades deportivas y festejos de cumpleaños.
          </p>
        </Reveal>

        {/* Visión */}
        <Reveal delay={200} className="bg-[#3D5A6B] py-16 px-12">
          <span className="font-inter text-[11px] font-medium tracking-[0.15em] uppercase text-green-mint opacity-85">
            Nuestra Visión
          </span>
          <hr className="border-white/25 my-4" />
          <h2
            className="font-lora font-normal text-white leading-[1.3] mb-5"
            style={{ fontSize: 'clamp(24px, 2.8vw, 34px)' }}
          >
            <em>Ser el nexo transparente entre la intención solidaria y el impacto real.</em>
          </h2>
          <p className="font-inter text-[16px] leading-[1.7] text-white/80">
            Ser el nexo entre las personas que tienen ganas de ayudar y las organizaciones que necesitan ayuda. Soñamos con expandir nuestra red para que cualquier persona encuentre un canal transparente, ágil y directo donde transformar su intención solidaria en un impacto real.
          </p>
        </Reveal>

      </div>
    </section>
  )
}
