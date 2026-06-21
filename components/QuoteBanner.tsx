'use client'

import { motion } from 'framer-motion'

const EASE = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

export default function QuoteBanner() {
  return (
    <section id="quote" className="pt-24 pb-16 min-h-[200px] flex items-center" style={{ backgroundColor: '#6EA0BE' }}>
      <div className="w-full max-w-[1200px] mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-9 md:gap-0 items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="md:pr-16"
          >
            <blockquote className="font-lora italic text-white/95 leading-[1.35]" style={{ fontSize: 'clamp(24px, 3.2vw, 36px)' }}>
              &ldquo;Hay tantas formas de{' '}
              <span className="text-green-mint">colaborar</span>
              {' '}como personas.&rdquo;
            </blockquote>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block w-px bg-white/20 self-stretch min-h-[120px] origin-top"
            aria-hidden="true"
          />
          <div className="md:hidden h-px bg-white/20 w-full" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
            className="md:pl-16"
          >
            <p className="font-inter text-[16px] leading-[1.72] text-white/80">
              Cada persona puede sumar desde sus posibilidades: con tiempo, siendo voluntario, con donaciones materiales o con aportes económicos.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
