import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_PATHS } from '../assets/data'
import { useTranslation } from '../context/LanguageContext'
import { useScrollHeader } from '../hooks/useScrollHeader'
import { Container } from './Container'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Navbar() {
  const { t } = useTranslation()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const hasScrolled = useScrollHeader()
  const isScrolled = !isHome || hasScrolled
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = NAV_PATHS.map(({ key, path }) => ({
    path,
    label: t.nav[key],
  }))

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive
        ? isScrolled
          ? 'text-accent'
          : 'text-white'
        : isScrolled
          ? 'text-secondary hover:text-primary'
          : 'text-white/80 hover:text-white'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 py-3 shadow-sm backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className={`shrink-0 text-lg font-semibold tracking-tight transition-colors sm:text-xl ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            {t.companyName}
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path} className={linkClass} end={link.path === '/'}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <LanguageSwitcher light={!isScrolled} />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher light={!isScrolled && isHome} />
            <button
              type="button"
              className={`rounded-lg p-2 ${isScrolled ? 'text-primary' : 'text-white'}`}
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? t.a11y.closeMenu : t.a11y.openMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-white md:hidden"
          >
            <Container className="py-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        `block rounded-lg px-3 py-2.5 text-sm font-medium ${
                          isActive
                            ? 'bg-accent/5 text-accent'
                            : 'text-secondary hover:bg-background hover:text-primary'
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
