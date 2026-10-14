import { Metadata } from 'next'
import { ProductShowcaseClient } from '@/components/product-showcase-client'

export const metadata: Metadata = {
  title: 'Önceki Proje Ürünleri | Çin\'den Al Sat',
  description: 'Daha önce gerçekleştirdiğimiz Çin ithalat projelerini ve tedarik ettiğimiz ürünleri inceleyin.',
  keywords: ['Çin ithalat projeleri', 'tedarik portföyü', 'önceki projeler', 'Çin\'den al sat'],
}

export default function OncekiProjelerPage() {
  return (
    <ProductShowcaseClient
      category="previous"
      heroImage="/images/client-matching.jpg"
      heroTitle={{ tr: 'Önceki Proje Ürünleri', en: 'Previous Project Products' }}
      heroSubtitle={{ tr: 'Portföyümüz', en: 'Our Portfolio' }}
      heroDescription={{
        tr: 'Bugüne kadar Çin\'den başarıyla tedarik ettiğimiz ürün ve projelerimizi inceleyin.',
        en: 'Browse products and projects we have successfully sourced from China.',
      }}
      emptyMessage={{ tr: 'Yakında projeler eklenecek', en: 'Projects coming soon' }}
    />
  )
}
