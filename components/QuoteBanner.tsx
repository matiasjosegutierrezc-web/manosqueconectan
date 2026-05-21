import Reveal from '@/components/Reveal'

export default function QuoteBanner() {
  return (
    <section id="quote" className="bg-blue-dark pt-0 pb-20">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-9 md:gap-0 items-center">

          <Reveal className="md:pr-16">
            <blockquote className="font-lora italic text-white leading-[1.35]" style={{ fontSize: 'clamp(24px, 3.2vw, 36px)' }}>
              &ldquo;Hay tantas formas de{' '}
              <span className="text-green-mint">colaborar</span>
              {' '}como personas.&rdquo;
            </blockquote>
          </Reveal>

          {/* Divider */}
          <div className="hidden md:block w-px bg-white/20 self-stretch min-h-[120px]" aria-hidden="true" />
          <div className="md:hidden h-px bg-white/20 w-full" aria-hidden="true" />

          <Reveal delay={200} className="md:pl-16">
            <p className="font-inter text-[16px] leading-[1.72] text-white/75">
              Conectamos voluntad con impacto real. Cada persona puede sumar desde sus posibilidades: con tiempo, con cosas o con aportes económicos.
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
