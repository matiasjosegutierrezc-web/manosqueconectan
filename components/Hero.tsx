'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const EASE = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: EASE },
})

export default function Hero() {
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 600], [0, -120])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col lg:flex-row lg:items-center overflow-hidden"
      style={{ backgroundColor: '#6EA0BE' }}
    >
      {/* Foto mobile — arriba */}
      <div className="relative w-full h-[45vh] lg:hidden overflow-hidden">
        <motion.div
          style={{ y: imageY, position: 'absolute', inset: '-80px 0 -80px 0' }}
        >
          <Image
            src="/hero-principal.jpg"
            alt="Voluntarios de Manos que Conectan compartiendo actividades con niños en un hogar"
            fill
            className="object-cover object-[center_40%]"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#6EA0BE]" />
      </div>

      {/* Foto desktop — derecha con parallax */}
      <div className="absolute right-0 top-0 bottom-0 w-[38%] hidden lg:block overflow-hidden">
        <motion.div
          style={{ y: imageY, position: 'absolute', top: -120, bottom: -120, left: 0, right: 0 }}
        >
          <Image
            src="/hero-principal.jpg"
            alt="Voluntarios de Manos que Conectan compartiendo actividades con niños en un hogar"
            fill
            className="object-cover object-[center_40%]"
            priority
            sizes="38vw"
          />
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#6EA0BE] to-transparent" />
      </div>

      {/* Gradiente inferior desktop */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-[#6EA0BE] z-20 pointer-events-none hidden lg:block" />

      {/* Texto con stagger de entrada */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-12 lg:py-32 w-full">
        <div className="max-w-lg">

          <motion.span
            {...fadeUp(0)}
            className="block font-inter text-[11px] font-medium tracking-[0.15em] uppercase text-green-mint mb-5"
          >
            Grupo de Voluntarios · Argentina
          </motion.span>

          <motion.h1
            {...fadeUp(0.08)}
            className="font-lora font-medium text-white leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(44px, 7.5vw, 72px)' }}
          >
            Manos que<br />
            <em>conectan</em>
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="font-inter text-[17px] leading-[1.65] text-white/80 mb-9"
          >
            Somos el puente entre personas con ganas de ayudar y niños y adolescentes que viven en hogares. Trabajamos junto a los hogares para transformar esa voluntad en acciones concretas: acompañando actividades, gestionando donaciones y generando oportunidades para que más chicos puedan disfrutar de experiencias, compañía y nuevas oportunidades.
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#como-ayudar"
              className="inline-flex items-center justify-center px-7 py-3.5 min-h-[44px] border-2 border-white/50 text-white font-inter text-[12px] font-semibold tracking-[0.10em] uppercase rounded-none transition-all hover:border-white/90 hover:opacity-90 hover:-translate-y-px"
            >
              Cómo ayudar
            </a>
            <a
              href="#quienes-somos"
              className="inline-flex items-center justify-center px-7 py-3.5 min-h-[44px] bg-white/10 border-2 border-white/20 text-white font-inter text-[12px] font-semibold tracking-[0.10em] uppercase rounded-none transition-all hover:bg-white/15 hover:-translate-y-px"
            >
              Conocernos
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
