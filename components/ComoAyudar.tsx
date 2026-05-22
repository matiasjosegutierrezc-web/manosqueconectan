'use client'

import { useEffect, useState } from 'react'
import Reveal from '@/components/Reveal'

/* ─── shared primitives ─────────────────────────────────── */

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1 font-inter text-[10px] font-semibold tracking-[0.08em] uppercase px-2 py-1 border transition-colors duration-200 shrink-0"
      style={{ color: copied ? '#4DB896' : '#6EA0BE', borderColor: copied ? '#4DB896' : '#6EA0BE' }}
    >
      {copied ? <><CheckIcon />¡Copiado!</> : 'Copiar'}
    </button>
  )
}

function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <button
      onClick={onClose}
      aria-label="Cerrar"
      className="absolute top-4 right-4 transition-opacity hover:opacity-60"
      style={{ color: '#6EA0BE' }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>
  )
}

const HR = () => <hr style={{ borderColor: 'rgba(31,95,107,0.2)' }} />
const LABEL_CLASS = "block font-inter text-[10px] font-semibold tracking-[0.16em] uppercase mb-2"

/* ─── base modal wrapper ─────────────────────────────────── */

function ModalShell({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(id)
  }, [])
  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div
        className={`relative max-w-sm w-full shadow-xl transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ backgroundColor: '#F5F0E8' }}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

/* ─── modal: donación económica ──────────────────────────── */

function DonationModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalShell onClose={onClose}>
      <CloseButton onClose={onClose} />
      <div className="p-8">
        <h3 className="font-lora text-xl font-medium mb-4" style={{ color: '#1F5F6B' }}>
          Datos para donar
        </h3>
        <HR /><div className="mb-6" />

        <div className="mb-5">
          <span className={LABEL_CLASS} style={{ color: '#6EA0BE' }}>Alias</span>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-2xl font-bold" style={{ color: '#1F5F6B' }}>manosqueconectan</span>
            <CopyButton text="manosqueconectan" />
          </div>
        </div>
        <HR /><div className="mb-5" />

        <div className="mb-5">
          <span className={LABEL_CLASS} style={{ color: '#6EA0BE' }}>CVU</span>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-sm" style={{ color: '#3D5A6B' }}>0000003100089856853552</span>
            <CopyButton text="0000003100089856853552" />
          </div>
        </div>
        <HR /><div className="mb-5" />

        <div>
          <span className={LABEL_CLASS} style={{ color: '#6EA0BE' }}>Titular</span>
          <span className="font-inter text-sm" style={{ color: '#3D5A6B' }}>Mariano Gutierrez Cantilo</span>
        </div>
      </div>
    </ModalShell>
  )
}

/* ─── modal: donaciones materiales ──────────────────────── */

function MaterialsModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalShell onClose={onClose}>
      <CloseButton onClose={onClose} />
      <div className="p-8">
        <h3 className="font-lora text-xl font-medium mb-4" style={{ color: '#1F5F6B' }}>
          Donaciones materiales
        </h3>
        <HR /><div className="mb-4" />

        <p className="font-inter text-sm leading-relaxed mb-6" style={{ color: '#3D5A6B' }}>
          Nos sirve cualquier cosa en buen estado. Ropa, juguetes, artículos de higiene, útiles escolares y regalos. Coordinamos la entrega según las necesidades de cada hogar.
        </p>

        <span className={LABEL_CLASS} style={{ color: '#6EA0BE' }}>
          Contactanos por donde prefieras
        </span>
        <HR /><div className="mb-5" />

        {/* Instagram */}
        <div className="mb-5">
          <span className={LABEL_CLASS} style={{ color: '#6EA0BE' }}>Instagram</span>
          <div className="flex items-center gap-3">
            <span className="font-inter text-sm font-semibold" style={{ color: '#1F5F6B' }}>
              @manosqueconectan.ar
            </span>
            <a
              href="https://instagram.com/manosqueconectan.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-inter text-[10px] font-semibold tracking-[0.08em] uppercase px-2 py-1 border transition-opacity hover:opacity-60 shrink-0"
              style={{ color: '#6EA0BE', borderColor: '#6EA0BE' }}
            >
              Ir →
            </a>
          </div>
        </div>
        <HR /><div className="mb-5" />

        {/* Email */}
        <div>
          <span className={LABEL_CLASS} style={{ color: '#6EA0BE' }}>Email</span>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-sm" style={{ color: '#3D5A6B' }}>
              manosqueconectan.ar@gmail.com
            </span>
            <CopyButton text="manosqueconectan.ar@gmail.com" />
          </div>
        </div>
      </div>
    </ModalShell>
  )
}

/* ─── cards ──────────────────────────────────────────────── */

interface Card {
  num:      string
  title:    string
  body:     string
  cta:      string
  href?:    string
  external: boolean
  modal?:   'donation' | 'materials'
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
    external: false,
    modal:    'materials',
  },
  {
    num:      '03',
    title:    'Con donaciones económicas',
    body:     'Para ayudarnos a hacer todo esto posible...',
    cta:      'DONÁ',
    external: false,
    modal:    'donation',
  },
]

const CTA_CLASS = "relative mt-auto font-inter text-[11px] font-semibold tracking-[0.12em] uppercase text-blue-dark border-b border-blue-dark pb-0.5 transition-colors hover:text-green-cta hover:border-green-cta self-start"

/* ─── section ────────────────────────────────────────────── */

export default function ComoAyudar() {
  const [donationOpen,  setDonationOpen]  = useState(false)
  const [materialsOpen, setMaterialsOpen] = useState(false)

  useEffect(() => {
    const handler = () => setDonationOpen(true)
    window.addEventListener('open-donation-modal', handler)
    return () => window.removeEventListener('open-donation-modal', handler)
  }, [])

  return (
    <section id="como-ayudar" className="bg-off-white py-24 border-t border-gray-mid/[0.12]" style={{ scrollMarginTop: '80px' }}>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {CARDS.map(({ num, title, body, cta, href, external, modal }, i) => (
            <Reveal key={num} delay={i * 100} className="h-full">
              <div className="relative overflow-hidden p-9 border border-gray-mid/20 bg-off-white transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(42,100,120,0.09)] h-full flex flex-col">
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
                <p className="relative font-inter text-[15px] leading-[1.65] text-gray-dark mb-6 flex-1">
                  {body}
                </p>

                {modal ? (
                  <button
                    onClick={() => modal === 'donation' ? setDonationOpen(true) : setMaterialsOpen(true)}
                    className={`${CTA_CLASS} bg-transparent p-0 cursor-pointer`}
                  >
                    {cta}
                  </button>
                ) : (
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className={CTA_CLASS}
                  >
                    {cta}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

      </div>

      {donationOpen  && <DonationModal  onClose={() => setDonationOpen(false)}  />}
      {materialsOpen && <MaterialsModal onClose={() => setMaterialsOpen(false)} />}
    </section>
  )
}
