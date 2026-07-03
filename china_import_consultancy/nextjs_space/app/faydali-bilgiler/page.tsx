import { BlogPageClient } from '@/components/blog-page-client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Faydalı Bilgiler | Çin İthalat Rehberi | Çin\'den Al Sat',
  description: 'Çin\'den ithalat, tedarikçi seçimi, Alibaba kullanımı ve lojistik süreçleri hakkında güncel rehberler ve uzman içerikler.',
  keywords: ['Çin ithalat', 'Çin fuarları', 'tedarikçi bulma', 'lojistik', 'gümrük', 'e-ticaret', 'ithalat rehberi'],
  openGraph: {
    title: 'Faydalı Bilgiler | Çin İthalat Rehberi',
    description: 'Çin ithalatı hakkında güncel bilgiler, fuar rehberleri ve uzman içerikler.',
    type: 'website',
  },
}

export default function BlogPage() {
  return <BlogPageClient />
}
