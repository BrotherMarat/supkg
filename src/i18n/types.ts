export type Language = 'ky' | 'ru' | 'en'

export interface BrandTranslation {
  name: string
  description: string
}

export interface Translations {
  companyName: string
  nav: {
    home: string
    about: string
    contacts: string
  }
  common: {
    contact: string
    aboutCompany: string
    send: string
  }
  a11y: {
    scrollDown: string
    openMenu: string
    closeMenu: string
    selectLanguage: string
  }
  footer: {
    description: string
    navigation: string
    contacts: string
    copyright: string
  }
  home: {
    heroTitle: string
    heroSubtitle: string
    whyUs: string
    features: Array<{ title: string; description: string }>
    segmentsTitle: string
    segments: string[]
    brandsTitle: string
    brandsMore: string
    workflowTitle: string
    workflowSteps: string[]
    ctaTitle: string
    ctaSubtitle: string
  }
  about: {
    title: string
    paragraphs: string[]
    brandsTitle: string
    advantagesTitle: string
    advantages: string[]
  }
  contacts: {
    title: string
    subtitle: string
    phone: string
    email: string
    address: string
    hours: string
    addressValue: string
    hoursValue: string
    mapPlaceholder: string
    form: {
      name: string
      phone: string
      email: string
      message: string
      namePlaceholder: string
      phonePlaceholder: string
      emailPlaceholder: string
      messagePlaceholder: string
    }
  }
  brands: BrandTranslation[]
  seo: {
    home: { title: string; description: string }
    about: { title: string; description: string }
    contacts: { title: string; description: string }
  }
}
