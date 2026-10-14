import { Metadata } from 'next'
import { UsImportGuideClient } from '@/components/us-import-guide-client'

export const metadata: Metadata = {
  title: 'ABD İthalat Rehberi | Çin\'den Al Sat',
  description: 'Çin\'den ABD\'ye ithalat için bilmeniz gereken her şey: gümrük kuralları, tarifeler, vergi ve ithalat süreçleri.',
  keywords: ['ABD ithalat', 'USA import', 'China to USA', 'gümrük', 'tarife', 'HTS code', 'CBP', 'ithalat rehberi'],
  openGraph: {
    title: 'ABD İthalat Rehberi | Çin İthalat Danışmanlığı',
    description: 'Çin\'den ABD\'ye ithalat süreci, gümrük vergileri, ISF belgeleri ve uyumluluk rehberi.',
    url: 'https://cindenalsat.com/abd-ithalat',
    siteName: 'Çin\'den Al Sat',
    images: [{ url: 'https://cindenalsat.com/images/trade-center.jpg', width: 1200, height: 630, alt: 'ABD İthalat Rehberi' }],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABD İthalat Rehberi | Çin İthalat Danışmanlığı',
    description: 'Çin\'den ABD\'ye ithalat süreci ve gümrük rehberi.',
    images: ['https://cindenalsat.com/images/trade-center.jpg'],
  },
}

export default function AbdIthalatPage() {
  return <UsImportGuideClient />
}
