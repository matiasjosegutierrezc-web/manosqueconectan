'use client'

import { motion } from 'framer-motion'

const EASE = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

const slideIn = (dir: 'left' | 'right', delay = 0) => ({
  initial: { opacity: 0, x: dir === 'left' ? -50 : 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: EASE },
})

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.55, delay, ease: EASE },
})

export default function MisionVision() {
  return (
    <section id="quienes-somos" className="bg-off-white min-h-[calc(100vh-40px)]" style={{ scrollMarginTop: '80px' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">

        {/* Misión — entra desde la izquierda */}
        <motion.div {...slideIn('left')} className="bg-cream py-12 lg:py-40 px-12">
          <span className="font-inter text-[11px] font-medium tracking-[0.15em] uppercase text-blue-dark">
            Nuestra Misión
          </span>
          <hr className="border-gray-mid/30 my-4" />
          <motion.h2
            {...fadeUp(0.1)}
            className="font-lora font-normal text-text-main leading-[1.3] mb-5"
            style={{ fontSize: 'clamp(24px, 2.8vw, 34px)' }}
          >
            Acompañamos a niños que viven en hogares. Acercamos a quienes quieren ayudar.
          </motion.h2>
          <motion.p {...fadeUp(0.18)} className="font-inter text-[16px] leading-[1.7] text-gray-dark">
            Conectamos a personas con ganas de involucrarse con las necesidades reales de los hogares y de los chicos que viven en ellos. Organizamos visitas, actividades recreativas, propuestas deportivas y festejos de cumpleaños que generan momentos de compañía, integración y alegría.
          </motion.p>
        </motion.div>

        {/* Visión — entra desde la derecha */}
        <motion.div {...slideIn('right', 0.1)} className="bg-[#3D5A6B] py-12 lg:py-40 px-12">
          <span className="font-inter text-[11px] font-medium tracking-[0.15em] uppercase text-green-mint opacity-85">
            Nuestra Visión
          </span>
          <hr className="border-white/25 my-4" />
          <motion.h2
            {...fadeUp(0.2)}
            className="font-lora font-normal text-white leading-[1.3] mb-5"
            style={{ fontSize: 'clamp(24px, 2.8vw, 34px)' }}
          >
            <em>Que ayudar sea simple y accesible para todos.</em>
          </motion.h2>
          <motion.p {...fadeUp(0.28)} className="font-inter text-[16px] leading-[1.7] text-white/80">
            Soñamos con una comunidad donde nadie se quede con las ganas de ayudar y donde cada hogar pueda encontrar el acompañamiento que necesita. Queremos construir una red cada vez más amplia de personas comprometidas, transformando la solidaridad en vínculos reales y oportunidades para más chicos.
          </motion.p>
        </motion.div>

      </div>
    </section>
  )
}
