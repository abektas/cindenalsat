import { Metadata } from 'next'
import { ProductShowcaseClient } from '@/components/product-showcase-client'

export const metadata: Metadata = {
  title: 'Viral Ürünler | Çin\'den Al Sat',
  description: 'Türkiye\'de satış potansiyeli yüksek Çin trend ürünleri keşfedin. Güvenli tedarik ve ithalat danışmanlığı hizmeti.',
  keywords: ['viral ürünler', 'trend Çin ürünleri', 'ithalat', 'tedarik', 'Çin\'den al sat'],
}

export default function ViralUrunlerPage() {
  return (
    <ProductShowcaseClient
      category="viral"
      heroImage="https://cdn.abacus.ai/images/31e46e16-44e6-400f-a23a-65745afa1bfe.png"
      heroTitle={{ tr: 'Viral Ürünler', en: 'Viral Products' }}
      heroSubtitle={{ tr: 'Trend Çin Ürünleri', en: 'Trending China Products' }}
      heroDescription={{
        tr: 'Türkiye\'de satış potansiyeli yüksek Çin trend ürünleriyle yeni ticaret fırsatları yakalayın.',
        en: 'Discover new trade opportunities with trending Chinese products that have high sales potential in Turkey.',
      }}
      emptyMessage={{ tr: 'Yakında yeni ürünler eklenecek', en: 'New products coming soon' }}
    />
  )
}
