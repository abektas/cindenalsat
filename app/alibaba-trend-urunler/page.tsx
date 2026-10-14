import { Metadata } from 'next'
import { ProductShowcaseClient } from '@/components/product-showcase-client'

export const metadata: Metadata = {
  title: 'Alibaba\'dan Trend Ürünler | Çin\'den Al Sat',
  description: 'Alibaba\'da bu ay en çok satan 15 trend ürün. Gerçek tedarik fiyatları, Alibaba satıcı linkleri ve ithalat danışmanlığı.',
  keywords: ['Alibaba trend ürünler', 'Alibaba en çok satanlar', 'Çin tedarik', 'Alibaba ithalat', 'Çin den al sat', 'toptan ürünler'],
  openGraph: {
    title: 'Alibaba Trend Ürünler | Çin İthalat Danışmanlığı',
    description: 'Alibaba\'daki en popüler 15 ürün — gerçek toptan fiyatlar ve tedarikçi linkleri.',
    url: 'https://cindenalsat.com/alibaba-trend-urunler',
    siteName: 'Çin\'den Al Sat',
    images: [{ url: 'https://cindenalsat.com/images/fair-meeting.jpg', width: 1200, height: 630, alt: 'Alibaba Trend Ürünler' }],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alibaba Trend Ürünler | Çin İthalat Danışmanlığı',
    description: 'Alibaba\'daki en popüler 15 ürün — gerçek toptan fiyatlar.',
    images: ['https://cindenalsat.com/images/fair-meeting.jpg'],
  },
}

export default function AlibabaTrendPage() {
  return (
    <ProductShowcaseClient
      category="alibaba"
      heroImage="/images/fair-meeting.jpg"
      heroTitle={{ tr: "Alibaba'dan Trend Ürünler", en: 'Trending Products on Alibaba' }}
      heroSubtitle={{ tr: 'Bu Ayın En Çok Satan 15 Ürünü', en: 'Top 15 Best Sellers This Month' }}
      heroDescription={{
        tr: "Alibaba'da bu ay en çok satan, TikTok'ta viral olan ve en yeni trend ürünleri. Gerçek tedarik fiyatları ve Alibaba satıcı linkleri ile birlikte.",
        en: 'The most sold, TikTok viral and newest trending products on Alibaba this month. With real wholesale prices and Alibaba supplier links.',
      }}
      emptyMessage={{ tr: 'Ürünler yükleniyor', en: 'Loading products' }}
    />
  )
}
