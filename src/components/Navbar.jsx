import { useState, useEffect } from 'react'
import { Mail } from 'lucide-react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Active nav link highlighting
      const scrollPos = window.scrollY + 150
      const sections = document.querySelectorAll('section[id]')
      sections.forEach((section) => {
        const top = section.offsetTop
        const height = section.offsetHeight
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#publications', label: 'Research' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/98 shadow-lg shadow-slate-900/5 border-b border-blue-500/10'
            : 'bg-white/95 border-b border-blue-500/10'
        }`}
        style={{ backdropFilter: 'blur(10px)' }}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <h1
            id="logo"
            onClick={handleLogoClick}
            className="logo-text text-2xl cursor-pointer hover:opacity-80 transition"
          >
            AFJAL<span>.DEV</span>
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="mailto:afjal.dali23@gmail.com" className="btn-primary text-sm">
              <span>Contact Me</span>
              <Mail className="w-4 h-4" />
            </a>

            {/* Hamburger */}
            <div
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-link"
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Menu Overlay */}
      <div
        id="menu-overlay"
        className={`${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>
    </>
  )
}

export default Navbar