import { Metadata } from 'next'
import { ProductShowcaseClient } from '@/components/product-showcase-client'

export const metadata: Metadata = {
  title: 'Viral Ürünler | Çin\'den Al Sat',
  description: 'Amazon ABD\'de viral olan 15 trend ürün. TikTok fenomenleri, yüksek yorumlu bestseller\'lar ve tedarik fırsatları.',
  keywords: ['viral ürünler', 'Amazon viral', 'TikTok ürünler', 'trend ürünler', 'Çin ithalat', 'ABD pazarı'],
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
