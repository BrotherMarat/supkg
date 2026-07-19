import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from '../context/LanguageContext'
import { usePageSEO } from '../hooks/usePageSEO'
import { BrandCard } from '../components/BrandCard'
import { Container } from '../components/Container'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionTitle } from '../components/SectionTitle'

export function AboutPage() {
  const { t } = useTranslation()
  usePageSEO(t.seo.about)

  return (
    <>
      <section className="py-16 lg:py-24">
        <Container>
          <ScrollReveal>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              {t.about.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-10 max-w-3xl space-y-6">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-secondary sm:text-lg">
                {paragraph}
              </p>
            ))}
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionTitle title={t.about.brandsTitle} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.brands.map((brand, index) => (
              <BrandCard
                key={brand.name}
                name={brand.name}
                description={brand.description}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <SectionTitle title={t.about.advantagesTitle} align="left" />
          <div className="grid gap-4 sm:grid-cols-2">
            {t.about.advantages.map((advantage, index) => (
              <ScrollReveal key={advantage} delay={index * 0.05}>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-accent"
                    strokeWidth={1.75}
                  />
                  <p className="text-sm leading-relaxed text-secondary sm:text-base">
                    {advantage}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
