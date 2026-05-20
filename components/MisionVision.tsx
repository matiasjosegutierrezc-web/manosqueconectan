import Reveal from '@/components/Reveal'

export default function MisionVision() {
  return (
    <section id="mision" className="bg-off-white py-24">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Misión */}
          <Reveal className="bg-cream p-12 lg:p-14 border border-gray-mid/20 md:border-r-0">
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
              Organizamos visitas para jugar, salidas recreativas, actividades deportivas y festejos de cumpleaños. Gestionamos donaciones materiales y coordinamos aportes para financiar actividades concretas.
            </p>
          </Reveal>

          {/* Visión */}
          <Reveal delay={200} className="bg-blue-mid p-12 lg:p-14 border border-gray-mid/20">
            <span className="font-inter text-[11px] font-medium tracking-[0.15em] uppercase text-green-mint opacity-85">
              Nuestra Visión
            </span>
            <hr className="border-white/22 my-4" />
            <h2
              className="font-lora font-normal text-white leading-[1.3] mb-5"
              style={{ fontSize: 'clamp(24px, 2.8vw, 34px)' }}
            >
              <em>Ser el nexo transparente entre la intención solidaria y el impacto real.</em>
            </h2>
            <p className="font-inter text-[16px] leading-[1.7] text-white/80">
              Soñamos con expandir la red para que cualquier persona encuentre un canal ágil y directo donde transformar sus ganas de ayudar en un cambio concreto en la vida de un chico.
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
