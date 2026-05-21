'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface NavLink {
  href:      string
  label:     string
  external?: boolean
}

const LINKS: NavLink[] = [
  { href: '#quienes-somos',                                                                                              label: 'Quiénes somos' },
  { href: '#que-hacemos',                                                                                                label: 'Qué hacemos'   },
  { href: '#como-ayudar',                                                                                                label: 'Cómo ayudar'   },
  { href: 'https://docs.google.com/forms/d/e/1FAIpQLSdY4OFAwCyP9FmRJ4oH8pfTW-OclGIy2IyLcUy-NL0ytmXkTQ/viewform',  label: 'Sumate', external: true },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

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
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 lg:px-12"
      style={{ backgroundColor: '#6EA0BE' }}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <a href="#hero">
          <Image src="/logo.png" alt="Manos que Conectan" width={48} height={48} className="object-contain" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-9 items-center list-none m-0 p-0">
          {LINKS.map(({ href, label, external }) => (
            <li key={href}>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className={`text-[13px] font-medium tracking-[0.04em] pb-0.5 border-b transition-colors duration-200 ${
                  !external && activeId === href.slice(1)
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
          <span className={`block h-[2px] bg-current rounded-sm transition-opacity  duration-250 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-[2px] bg-current rounded-sm transition-transform duration-250 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden px-5 py-4 flex flex-col" style={{ backgroundColor: '#6EA0BE' }}>
          {LINKS.map(({ href, label, external }) => (
            <a
              key={href}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              onClick={closeMenu}
              className="text-white/90 text-base font-medium py-3 border-b border-white/20 last:border-0 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
