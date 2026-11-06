import { Metadata } from 'next'
import { ProductShowcaseClient } from '@/components/product-showcase-client'

export const metadata: Metadata = {
  title: 'Trend Ürün Adayları | Çin\'den Al Sat',
  description: 'Amazon.com kategori sıralamasından 14 ürün adayı. Sıralama satış adedi değildir; ABD fiyatı ve bulunabilirliği doğrulanmadı.',
  keywords: ['trend ürün adayları', 'Amazon kategori sıralaması', 'Çin ithalat', 'ürün araştırması'],
  openGraph: {
    title: 'Trend Ürün Adayları | Çin İthalat Danışmanlığı',
    description: 'Amazon.com kategori sıralamasından 14 aday; satış adedi, ABD fiyatı ve bulunabilirlik iddiası değildir.',
    url: 'https://cindenalsat.com/viral-urunler',
    siteName: 'Çin\'den Al Sat',
    images: [{ url: 'https://cindenalsat.com/images/viral-hero.jpg', width: 1200, height: 630, alt: 'Trend Ürün Adayları' }],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trend Ürün Adayları | Çin İthalat Danışmanlığı',
    description: '14 Amazon.com kategori sıralaması adayı; fiyat ve ABD bulunabilirliği doğrulanmadı.',
    images: ['https://cindenalsat.com/images/viral-hero.jpg'],
  },
}

export default function ViralUrunlerPage() {
  return (
    <ProductShowcaseClient
      category="viral"
      heroImage="/images/viral-hero.jpg"
      heroTitle={{ tr: 'Trend Ürün Adayları', en: 'Trend Product Candidates' }}
      heroSubtitle={{ tr: '14 Amazon kategori sıralaması adayı', en: '14 Amazon category-rank candidates' }}
      heroDescription={{
        tr: '6 Kasım 2026 tarihli Amazon.com Best Sellers kategori sıralamalarından adaylardır; sıralama satış adedi değildir. Görüntüde Türkiye teslimat bölgesi vardı; ABD fiyatı, bulunabilirlik ve ithalat uygunluğu doğrulanmadı. TikTok viralitesi iddiası kullanılmamıştır.',
        en: 'Candidates from Amazon.com Best Sellers category ranks observed on November 6, 2026; rank is not a unit-sales count. The screenshot showed Turkey as the delivery region, so US price, availability, and import eligibility are unverified. No TikTok-virality claim is made.',
      }}
      emptyMessage={{ tr: 'Yakında yeni ürünler eklenecek', en: 'New products coming soon' }}
    />
  )
}
