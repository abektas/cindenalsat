import { Metadata } from 'next'
import { ProductShowcaseClient } from '@/components/product-showcase-client'

export const metadata: Metadata = {
  title: 'Alibaba\'dan Trend Ürünler | Çin\'den Al Sat',
  description: 'Alibaba\'da öne çıkan trend ürünleri keşfedin. Çin\'den güvenli tedarik ve ithalat danışmanlığı.',
  keywords: ['Alibaba ürünleri', 'trend ürünler', 'Alibaba ithalat', 'Çin tedarik', 'Çin\'den al sat'],
}

export default function AlibabaTrendPage() {
  return (
    <ProductShowcaseClient
      category="alibaba"
      heroImage="https://cdn.abacus.ai/images/27f31c30-29ad-4d46-ac1e-e9c65da16d37.png"
      heroTitle={{ tr: "Alibaba'dan Trend Ürünler", en: 'Trending Alibaba Products' }}
      heroSubtitle={{ tr: 'Alibaba Seçkileri', en: 'Alibaba Picks' }}
      heroDescription={{
        tr: "Alibaba'da öne çıkan ürünleri keşfedin, güvenli tedarik süreciyle ithalatınızı kolaylaştıralım.",
        en: 'Discover trending products on Alibaba and let us simplify your import process with secure sourcing.',
      }}
      emptyMessage={{ tr: 'Yakında ürünler eklenecek', en: 'Products coming soon' }}
    />
  )
}
