import { Metadata } from 'next'
import { UsImportGuideClient } from '@/components/us-import-guide-client'

export const metadata: Metadata = {
  title: 'ABD İthalat Rehberi | Çin\'den Al Sat',
  description: 'Çin\'den ABD\'ye ithalat için bilmeniz gereken her şey: gümrük kuralları, tarifeler, vergi ve ithalat süreçleri.',
  keywords: ['ABD ithalat', 'USA import', 'China to USA', 'gümrük', 'tarife', 'HTS code', 'CBP', 'ithalat rehberi'],
}

export default function AbdIthalatPage() {
  return <UsImportGuideClient />
}
