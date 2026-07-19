import { motion } from 'framer-motion'
import {
  Award,
  Building,
  Building2,
  ChevronDown,
  Globe,
  Home,
  Hotel,
  Package,
  Settings2,
  ShieldCheck,
  Stethoscope,
  UtensilsCrossed,
} from 'lucide-react'
import { HERO_IMAGE } from '../assets/data'
import { useTranslation } from '../context/LanguageContext'
import { usePageSEO } from '../hooks/usePageSEO'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { FeatureCard } from '../components/FeatureCard'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionTitle } from '../components/SectionTitle'

const featureIcons = [ShieldCheck, Globe, Package, Settings2]
const segmentIcons = [Hotel, UtensilsCrossed, Building2, Building, Stethoscope, Home]

export function HomePage() {
  const { t } = useTranslation()
  usePageSEO(t.seo.home)

  const features = t.home.features.map((feature, index) => ({
    ...feature,
    icon: featureIcons[index],
  }))

  const segments = t.home.segments.map((title, index) => ({
    title,
    icon: segmentIcons[index],
  }))

  const workflowSteps = t.home.workflowSteps.map((title, index) => ({
    step: index + 1,
    title,
  }))

  return (
    <>
      <section className="relative flex min-h-screen items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-primary/65" />

        <Container className="relative z-10 py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.home.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {t.home.heroSubtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button to="/contacts" variant="primary">
                {t.common.contact}
              </Button>
              <Button to="/about" variant="ghost">
                {t.common.aboutCompany}
              </Button>
            </div>
          </motion.div>
        </Container>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <a
            href="#why-us"
            className="flex flex-col items-center gap-1 text-white/60 transition-colors hover:text-white"
            aria-label={t.a11y.scrollDown}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ChevronDown size={28} />
            </motion.div>
          </a>
        </motion.div>
      </section>

      <section id="why-us" className="py-20 lg:py-28">
        <Container>
          <SectionTitle title={t.home.whyUs} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionTitle title={t.home.segmentsTitle} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {segments.map((segment, index) => (
              <ScrollReveal key={segment.title} delay={index * 0.06}>
                <div className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                    <segment.icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">{segment.title}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <SectionTitle title={t.home.brandsTitle} />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {t.brands.map((brand, index) => (
              <ScrollReveal key={brand.name} delay={index * 0.04}>
                <div className="flex h-24 items-center justify-center rounded-2xl border border-border bg-white px-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:h-28">
                  <span className="text-center text-sm font-semibold tracking-wide text-primary sm:text-base">
                    {brand.name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-10 text-center">
            <p className="text-sm text-secondary">{t.home.brandsMore}</p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionTitle title={t.home.workflowTitle} />
          <ScrollReveal>
            <div className="hidden items-start justify-between lg:flex">
              {workflowSteps.map((step, index) => (
                <div key={step.step} className="flex flex-1 items-start">
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-lg font-semibold text-white shadow-sm shadow-accent/25">
                      {step.step}
                    </div>
                    <p className="mt-4 max-w-[140px] text-center text-sm font-medium text-primary">
                      {step.title}
                    </p>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="mx-2 mt-7 h-px flex-1 bg-border" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4 lg:hidden">
              {workflowSteps.map((step, index) => (
                <div key={step.step} className="flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-lg font-semibold text-white shadow-sm shadow-accent/25">
                    {step.step}
                  </div>
                  <p className="mt-4 text-center text-sm font-medium text-primary">{step.title}</p>
                  {index < workflowSteps.length - 1 && (
                    <div className="my-2 text-secondary">↓</div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center sm:px-12 sm:py-20 lg:px-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_60%)]" />
              <div className="relative">
                <Award className="mx-auto mb-6 text-accent" size={36} strokeWidth={1.5} />
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {t.home.ctaTitle}
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                  {t.home.ctaSubtitle}
                </p>
                <div className="mt-10">
                  <Button to="/contacts" variant="primary" className="px-10 py-4 text-base">
                    {t.common.contact}
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  )
}
