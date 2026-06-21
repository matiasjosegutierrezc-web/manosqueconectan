'use client'

import Image           from 'next/image'
import { motion }      from 'framer-motion'
import PhotoPlaceholder from '@/components/PhotoPlaceholder'
import StatCounter      from '@/components/StatCounter'

const EASE = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay, ease: EASE },
})

export default function Equipo() {
  return (
    <section id="equipo" className="bg-cream py-24">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: photo collage con stagger */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <div className="grid grid-cols-2 gap-3">
              <motion.div
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="col-span-2"
              >
                <PhotoPlaceholder
                  label="Foto principal equipo"
                  aspect="16/9"
                />
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55 } } }}
                className="relative w-full min-h-[180px] overflow-hidden"
              >
                <Image
                  src="/foto-equipo-chica.jpg"
                  alt="Integrantes del equipo de voluntarios de Manos que Conectan"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55 } } }}
                className="relative w-full min-h-[180px] overflow-hidden"
              >
                <Image
                  src="/foto-equipo-chica2.jpg"
                  alt="Voluntarios de Manos que Conectan en una actividad con niños"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: texto slide desde la derecha */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
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
            <motion.p {...fadeUp(0.2)} className="font-inter text-[16px] leading-[1.72] text-gray-dark mb-4">
              Somos un equipo de voluntarios comprometidos con conectar a las personas con oportunidades concretas para ayudar.
            </motion.p>
            <motion.p {...fadeUp(0.28)} className="font-inter text-[16px] leading-[1.72] text-gray-dark mb-4">
              Trabajamos junto a hogares y organizaciones para identificar necesidades, coordinar actividades y acompañar cada iniciativa de principio a fin.
            </motion.p>
            <motion.p {...fadeUp(0.36)} className="font-inter text-[16px] leading-[1.72] text-gray-dark">
              Creemos que la solidaridad genera más impacto cuando existe una red que organiza, conecta y facilita que la ayuda llegue donde realmente hace falta.
            </motion.p>

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
            <motion.div {...fadeUp(0.44)} className="flex flex-wrap gap-3 mt-7">
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
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
