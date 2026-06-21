'use client'

import { motion } from 'framer-motion'

const EASE = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

export default function CTAFinal() {
  return (
    <section id="cta-final" className="relative py-20 lg:py-40 overflow-hidden text-center" style={{ backgroundColor: '#1F5F6B' }}>

      {/* Watermark animado */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute bottom-8 left-0 right-0 text-center font-lora italic text-white/[0.04] pointer-events-none select-none tracking-widest"
        style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}
      >
        conectar · acompañar · sumar
      </motion.p>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 lg:px-12">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="block font-inter text-[11px] font-medium tracking-[0.15em] uppercase text-white/65 mb-3.5"
        >
          El primer paso
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
          className="font-lora font-normal text-white leading-[1.2] mb-9"
          style={{ fontSize: 'clamp(30px, 4.5vw, 52px)' }}
        >
          Encontrá tu forma de sumar
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="flex flex-wrap gap-3.5 justify-center"
        >
          <motion.a
            href="#como-ayudar"
            whileHover={{ y: -3, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center justify-center px-7 py-3.5 min-h-[44px] bg-blue-dark border-2 border-blue-dark text-white font-inter text-[12px] font-semibold tracking-[0.10em] uppercase rounded-none"
          >
            Ver cómo colaborar
          </motion.a>
          <motion.a
            href="https://instagram.com/manosqueconectan.ar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center justify-center px-7 py-3.5 min-h-[44px] bg-transparent border-2 border-white/50 text-white font-inter text-[12px] font-semibold tracking-[0.10em] uppercase rounded-none"
          >
            Seguinos en Instagram
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
