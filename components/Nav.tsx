'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#mision',      label: 'Quiénes somos' },
  { href: '#que-hacemos', label: 'Qué hacemos'   },
  { href: '#como-ayudar', label: 'Cómo ayudar'   },
  { href: '#equipo',      label: 'Sumate'         },
]

function LogoSVG() {
  return (
    <svg width="34" height="26" viewBox="0 0 34 26" fill="none" aria-hidden="true">
      <path
        d="M2 24 C2 12 8.5 4 17 4 C25.5 4 32 12 32 24"
        stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"
      />
      <circle cx="2"  cy="24" r="2.5" fill="currentColor" />
      <circle cx="32" cy="24" r="2.5" fill="currentColor" />
      <path
        d="M8 24 C8 15.5 12 9.5 17 9.5 C22 9.5 26 15.5 26 24"
        stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.55"
      />
    </svg>
  )
}

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeId,  setActiveId]  = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
    const onScroll = () => {
      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      setActiveId(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-blue-dark/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-12 h-16 lg:h-[72px] flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 text-white font-lora text-[17px] font-medium">
          <LogoSVG />
          Manos que conectan
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-9 items-center list-none m-0 p-0">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-[13px] font-medium tracking-[0.04em] pb-0.5 border-b transition-colors duration-200 ${
                  activeId === href.slice(1)
                    ? 'text-white border-green-mint'
                    : 'text-white/80 border-transparent hover:text-white hover:border-green-mint'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger — 44×44 tap target */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex md:hidden flex-col justify-center gap-[5px] w-11 h-11 p-2.5 bg-transparent border-0 cursor-pointer text-white"
        >
          <span className={`block h-[2px] bg-current rounded-sm transition-transform duration-250 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-[2px] bg-current rounded-sm transition-opacity duration-250 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-[2px] bg-current rounded-sm transition-transform duration-250 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-blue-dark px-5 py-4 flex flex-col">
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-white/82 text-base font-medium py-3 border-b border-white/10 last:border-0 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
