import { Metadata } from 'next'
import { KavakKontraplakClient } from '@/components/kavak-kontraplak-client'

export const metadata: Metadata = {
  title: 'Kavak Kontraplak İthalatı | Dahilde İşleme Rejimi ile Çin\'den Tedarik',
  description: 'Çin\'den kavak kontraplak ithalatı, Dahilde İşleme Rejimi (DİR) avantajları ile uygun fiyatlı, kaliteli kontraplak tedariği. Profesyonel danışmanlık hizmeti.',
  keywords: ['kavak kontraplak', 'poplar plywood', 'dahilde işleme rejimi', 'DİR', 'Çin ithalat', 'kontraplak ithalatı', 'plywood import'],
  openGraph: {
    title: 'Kavak Kontraplak İthalatı | Dahilde İşleme Rejimi',
    description: 'Çin\'den kavak kontraplak ithalatı, DİR avantajları ile uygun fiyatlı tedarik.',
    type: 'website',
  },
}

export default function KavakKontraplakPage() {
  return <KavakKontraplakClient />
}
