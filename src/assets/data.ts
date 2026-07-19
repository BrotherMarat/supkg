export const CONTACT = {
  phone: '+996 (312) 00-00-00',
  phoneHref: 'tel:+996312000000',
  email: 'info@suprize.net',
  emailHref: 'mailto:info@suprize.net',
} as const

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1920&q=80'

export const NAV_PATHS = [
  { key: 'home' as const, path: '/' },
  { key: 'about' as const, path: '/about' },
  { key: 'contacts' as const, path: '/contacts' },
]
