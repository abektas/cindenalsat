import { AboutSection } from '@/components/about-section'

export const metadata = {
  title: 'Hakkımızda - Çin\'den Al Sat | China Import Consultancy',
  description: 'Çin\'den ABD\'ye ithalat danışmanlığı. Ürün tedariği, kalite kontrol, gümrükleme ve lojistik hizmetleri hakkında tüm detaylar.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutSection />
      <section className="py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Hakkımızda
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Çin\'den Al Sat İthalat Danışmanlığı olarak, ABD\'de yaşayan ve iş yapan Türk girişimcilere özel Çin ithalat danışmanlık hizmeti sunuyoruz. Gümrük, tarifeler ve lojistik süreçlerinde uzman ekibimizle yanınızdayız.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            ABD gümrük mevzuatı, HTS kodları, Section 301 tarifeleri ve e-ticaret lojistik süreçlerinde deneyimliyiz. Amazon FBA, Etsy ve kendi marka ürünleriniz için uçtan uca destek sunuyoruz.
          </p>
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border">
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-4">
              Neden Biz?
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                Tedarikçilerle yüz yüze çalışma ve fabrika denetimleri
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                Kalite kontrolü numuneden üretime kadar
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                ABD gümrük ve HTS kodu uzmanlığı
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                Amazon FBA ve özel marka (private label) desteği
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
