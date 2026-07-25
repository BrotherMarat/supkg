import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { CONTACT } from '../assets/data'
import { useTranslation } from '../context/LanguageContext'
import { usePageSEO } from '../hooks/usePageSEO'
import { Card } from '../components/Card'
import { ContactForm } from '../components/ContactForm'
import { Container } from '../components/Container'
import { ScrollReveal } from '../components/ScrollReveal'

export function ContactsPage() {
  const { t } = useTranslation()
  usePageSEO(t.seo.contacts)

  const contactItems = [
    {
      icon: Phone,
      label: t.contacts.phone,
      value: CONTACT.phone,
      href: CONTACT.phoneHref,
    },
    {
      icon: Mail,
      label: t.contacts.email,
      value: CONTACT.email,
      href: CONTACT.emailHref,
    },
    {
      icon: MapPin,
      label: t.contacts.countryKg,
      value: t.contacts.addressKgValue,
    },
    {
      icon: MapPin,
      label: t.contacts.countryKz,
      value: t.contacts.addressKzValue,
    },
    {
      icon: Clock,
      label: t.contacts.hours,
      value: t.contacts.hoursValue,
    },
  ]

  return (
    <>
      <section className="py-16 lg:py-24">
        <Container>
          <ScrollReveal>
            <h1 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              {t.contacts.title}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
              {t.contacts.subtitle}
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <div className="space-y-6">
                {contactItems.map((item) => (
                  <div key={item.label + item.value} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/8 text-accent">
                      <item.icon size={20} strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-sm text-secondary transition-colors hover:text-accent sm:text-base"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm text-secondary sm:text-base">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Card className="shadow-md">
                <ContactForm />
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="pb-20 lg:pb-28">
        <Container>
          <ScrollReveal>
            <div className="flex h-[400px] items-center justify-center rounded-2xl border border-border bg-white shadow-sm">
              <p className="text-sm text-secondary">{t.contacts.mapPlaceholder}</p>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  )
}
