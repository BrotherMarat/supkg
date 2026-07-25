import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { CONTACT, NAV_PATHS } from '../assets/data'
import { useTranslation } from '../context/LanguageContext'
import { Container } from './Container'

export function Footer() {
  const { t } = useTranslation()

  const navLinks = NAV_PATHS.map(({ key, path }) => ({
    path,
    label: t.nav[key],
  }))

  return (
    <footer className="border-t border-border bg-white">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div>
            <Link to="/" className="text-xl font-semibold tracking-tight text-primary">
              {t.companyName}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t.footer.navigation}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-secondary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t.footer.contacts}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-2.5 text-sm text-secondary transition-colors hover:text-accent"
                >
                  <Phone size={16} className="shrink-0 text-accent" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="flex items-center gap-2.5 text-sm text-secondary transition-colors hover:text-accent"
                >
                  <Mail size={16} className="shrink-0 text-accent" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-sm text-secondary">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>
                    <span className="block font-medium text-primary">{t.contacts.countryKg}</span>
                    {t.contacts.addressKgValue}
                  </span>
                </span>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-sm text-secondary">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>
                    <span className="block font-medium text-primary">{t.contacts.countryKz}</span>
                    {t.contacts.addressKzValue}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-secondary">{t.footer.copyright}</p>
        </div>
      </Container>
    </footer>
  )
}
