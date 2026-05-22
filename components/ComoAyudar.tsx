'use client'

import { useEffect, useState } from 'react'
import Reveal from '@/components/Reveal'

function DonationModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div
        className="relative bg-white max-w-sm w-full p-8"
        style={{ animation: 'fadeSlideUp 0.25s ease-out' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 font-inter text-[22px] leading-none text-gray-400 hover:text-gray-800 transition-colors"
        >
          ×
        </button>
        <h3 className="font-lora font-medium text-[22px] text-text-main mb-7">
          Datos para donar
        </h3>
        <div className="flex flex-col gap-5">
          <div>
            <span className="block font-inter text-[10px] font-semibold tracking-[0.14em] uppercase text-gray-400 mb-1">Alias</span>
            <span className="font-inter text-[16px] font-medium text-text-main">manosqueconectan</span>
          </div>
          <div>
            <span className="block font-inter text-[10px] font-semibold tracking-[0.14em] uppercase text-gray-400 mb-1">CVU</span>
            <span className="font-inter text-[16px] font-medium text-text-main tracking-wide">0000003100089856853552</span>
          </div>
          <div>
            <span className="block font-inter text-[10px] font-semibold tracking-[0.14em] uppercase text-gray-400 mb-1">Nombre</span>
            <span className="font-inter text-[16px] font-medium text-text-main">Mariano Gutierrez Cantilo</span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface Card {
  num:      string
  title:    string
  body:     string
  cta:      string
  href?:    string
  external: boolean
  modal?:   boolean
}

const CARDS: Card[] = [
  {
    num:      '01',
    title:    'Con tiempo',
    body:     'Visitas, deportes, salidas y festejos. Tu presencia transforma el fin de semana de un chico.',
    cta:      'Ser voluntario →',
    href:     'https://docs.google.com/forms/d/e/1FAIpQLSdY4OFAwCyP9FmRJ4oH8pfTW-OclGIy2IyLcUy-NL0ytmXkTQ/viewform',
    external: true,
  },
  {
    num:      '02',
    title:    'Con donaciones materiales',
    body:     'Ropa, juguetes, artículos de higiene, útiles y regalos. Gestionamos la entrega según las necesidades de cada hogar.',
    cta:      'Donar cosas →',
    href:     'https://wa.me/?text=Hola%2C%20quiero%20donar%20cosas%20a%20Manos%20que%20Conectan',
    external: true,
  },
  {
    num:      '03',
    title:    'Con donaciones económicas',
    body:     'Para ayudarnos a hacer todo esto posible...',
    cta:      'DONÁ',
    external: false,
    modal:    true,
  },
]

export default function ComoAyudar() {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const handler = () => setModalOpen(true)
    window.addEventListener('open-donation-modal', handler)
    return () => window.removeEventListener('open-donation-modal', handler)
  }, [])

  return (
    <section id="como-ayudar" className="bg-off-white py-24 border-t border-gray-mid/[0.12]" style={{ scrollMarginTop: '70px' }}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-12">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-end mb-14">
          <Reveal>
            <span className="block font-inter text-[11px] font-medium tracking-[0.15em] uppercase text-blue-dark mb-3">
              Cómo colaborar
            </span>
            <h2 className="font-lora font-normal text-text-main leading-[1.15]" style={{ fontSize: 'clamp(30px, 4.5vw, 48px)' }}>
              Tres formas de<br />
              <em className="text-blue-mid">ayudar</em>
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
          {CARDS.map(({ num, title, body, cta, href, external, modal }, i) => (
            <Reveal key={num} delay={i * 100}>
              <div className="relative overflow-hidden p-9 border border-gray-mid/20 bg-off-white transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(42,100,120,0.09)]">
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
                  {body}
                </p>

                {modal ? (
                  <button
                    onClick={() => setModalOpen(true)}
                    className="relative font-inter text-[11px] font-semibold tracking-[0.12em] uppercase text-white px-5 py-2.5 rounded-none transition-opacity hover:opacity-85"
                    style={{ backgroundColor: '#4DB896' }}
                  >
                    {cta}
                  </button>
                ) : (
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="relative font-inter text-[11px] font-semibold tracking-[0.12em] uppercase text-blue-dark border-b border-blue-dark pb-0.5 transition-colors hover:text-green-cta hover:border-green-cta"
                  >
                    {cta}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

      </div>

      {modalOpen && <DonationModal onClose={() => setModalOpen(false)} />}
    </section>
  )
}
