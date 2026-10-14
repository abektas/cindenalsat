import { Metadata } from 'next'
import { ProductShowcaseClient } from '@/components/product-showcase-client'

export const metadata: Metadata = {
  title: 'Viral Ürünler | Çin\'den Al Sat',
  description: 'Amazon ABD\'de viral olan 15 trend ürün. TikTok fenomenleri, yüksek yorumlu bestseller\'lar ve tedarik fırsatları.',
  keywords: ['viral ürünler', 'Amazon viral', 'TikTok ürünler', 'trend ürünler', 'Çin ithalat', 'ABD pazarı'],
  openGraph: {
    title: 'Viral Ürünler | Çin İthalat Danışmanlığı',
    description: 'Amazon ABD\'de viral olan 15 trend ürün — Amazon fiyatı ve fabrika çıkış fiyatı karşılaştırması.',
    url: 'https://cindenalsat.com/viral-urunler',
    siteName: 'Çin\'den Al Sat',
    images: [{ url: 'https://cindenalsat.com/images/viral-hero.jpg', width: 1200, height: 630, alt: 'Viral Ürünler' }],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Viral Ürünler | Çin İthalat Danışmanlığı',
    description: 'Amazon ABD\'de viral olan 15 trend ürün — fiyat karşılaştırması.',
    images: ['https://cindenalsat.com/images/viral-hero.jpg'],
  },
}

export default function ViralUrunlerPage() {
  return (
    <ProductShowcaseClient
      category="viral"
      heroImage="/images/viral-hero.jpg"
      heroTitle={{ tr: 'Viral Ürünler', en: 'Viral Products' }}
      heroSubtitle={{ tr: 'Amazon ABD\'de Viral Olan 15 Ürün', en: '15 Products Viral on Amazon US' }}
      heroDescription={{
        tr: 'TikTok ve Instagram\'da fenomen olan, yüz binlerce yorum alan bestseller ürünler. Her biri için Amazon satış fiyatı ve Çin tedarik maliyeti yan yana.',
        en: 'Products that became sensations on TikTok and Instagram with hundreds of thousands of reviews. Amazon retail price and China sourcing cost side by side for each.',
      }}
      emptyMessage={{ tr: 'Yakında yeni ürünler eklenecek', en: 'New products coming soon' }}
    />
  )
}
