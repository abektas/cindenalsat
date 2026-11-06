import { Metadata } from 'next'
import { ProductShowcaseClient } from '@/components/product-showcase-client'

export const metadata: Metadata = {
  title: 'Alibaba Tedarik Adayları | Çin\'den Al Sat',
  description: 'Alibaba Hot Selling liste kartlarından 15 aday. Görünen fiyatlar teklif değildir; tedarik, varyant ve MOQ teyidi NEEDS_REVIEW.',
  keywords: ['Alibaba tedarik adayları', 'Alibaba liste kartları', 'Çin tedarik', 'ithalat araştırması'],
  openGraph: {
    title: 'Alibaba Tedarik Adayları | Çin İthalat Danışmanlığı',
    description: '15 Alibaba Hot Selling liste kartı; fiyatlar tedarikçi teklifi değildir ve doğrulanmalıdır.',
    url: 'https://cindenalsat.com/alibaba-trend-urunler',
    siteName: 'Çin\'den Al Sat',
    images: [{ url: 'https://cindenalsat.com/images/fair-meeting.jpg', width: 1200, height: 630, alt: 'Alibaba Tedarik Adayları' }],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alibaba Tedarik Adayları | Çin İthalat Danışmanlığı',
    description: '15 Alibaba liste kartı; fiyat ve tedarik koşulları NEEDS_REVIEW.',
    images: ['https://cindenalsat.com/images/fair-meeting.jpg'],
  },
}

export default function AlibabaTrendPage() {
  return (
    <ProductShowcaseClient
      category="alibaba"
      heroImage="/images/fair-meeting.jpg"
      heroTitle={{ tr: 'Alibaba Tedarik Adayları', en: 'Alibaba Supplier Candidates' }}
      heroSubtitle={{ tr: '15 liste kartı — NEEDS_REVIEW', en: '15 listing cards — NEEDS_REVIEW' }}
      heroDescription={{
        tr: '6 Kasım 2026 tarihli Alibaba Hot Selling liste kartlarından seçilmiş adaylar. Görünen fiyat aralıkları ve MOQ’lar teklif değildir; ürün varyantı, güncel tedarik koşulları, numune, kargo ve uygunluk teyidi gerekir.',
        en: 'Candidates selected from Alibaba Hot Selling listing cards observed on November 6, 2026. Displayed price ranges and MOQs are not quotes; product variant, current supplier terms, samples, shipping, and compliance need confirmation.',
      }}
      emptyMessage={{ tr: 'Ürünler yükleniyor', en: 'Loading products' }}
    />
  )
}
