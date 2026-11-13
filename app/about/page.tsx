'use client'

import { useLocale } from '@/lib/locale-context'
import { AboutSection } from '@/components/about-section'

export const metadata = {
  title: 'Hakkımızda - Çin\'den Al Sat | China Import Consultancy',
  description: 'Çin\'den ABD\'ye ithalat danışmanlığı. Ürün tedariği, kalite kontrol, gümrükleme ve lojistik hizmetleri hakkında tüm detaylar.',
}

export default function AboutPage() {
  const { locale } = useLocale()
  const isTr = locale === 'tr'

  return (
    <main className="min-h-screen">
      <AboutSection />
      <section className="py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            {isTr ? 'Hakkımızda' : 'About Us'}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            {isTr
              ? 'Çin\'den Al Sat İthalat Danışmanlığı olarak, ABD\'de yaşayan ve iş yapan Türk girişimcilere özel Çin ithalat danışmanlık hizmeti sunuyoruz. Gümrük, tarifeler ve lojistik süreçlerinde uzman ekibimizle yanınızdayız.'
              : 'As Çin\'den Al Sat Import Consultancy, we provide specialized China import consultancy for Turkish entrepreneurs living and doing business in the USA.'}
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            {isTr
              ? 'ABD gümrük mevzuatı, HTS kodları, Section 301 tarifeleri ve e-ticaret lojistik süreçlerinde deneyimliyiz. Amazon FBA, Etsy ve kendi marka ürünleriniz için uçtan uca destek sunuyoruz.'
              : 'We have hands-on experience with US customs regulations, HTS codes, Section 301 tariffs and e-commerce logistics. We offer end-to-end support for Amazon FBA, Etsy and your own private-label products.'}
          </p>
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border">
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-4">
              {isTr ? 'Neden Biz?' : 'Why Us?'}
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                {isTr ? 'Tedarikçilerle yüz yüze çalışma ve fabrika denetimleri' : 'Face-to-face supplier work and factory audits'}
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                {isTr ? 'Kalite kontrolü numuneden üretime kadar' : 'Quality control from sample to production'}
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                {isTr ? 'ABD gümrük ve HTS kodu uzmanlığı' : 'US customs and HTS code expertise'}
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                {isTr ? 'Amazon FBA ve özel marka (private label) desteği' : 'Amazon FBA and private label support'}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
