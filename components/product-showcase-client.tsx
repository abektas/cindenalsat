'use client'

import { getProductsByCategory } from '@/lib/products-data'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { ShoppingBag, ExternalLink, Mail, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

type ProductShowcaseProps = {
  category: string
  heroImage: string
  heroTitle: { tr: string; en: string }
  heroSubtitle: { tr: string; en: string }
  heroDescription: { tr: string; en: string }
  emptyMessage: { tr: string; en: string }
}

export function ProductShowcaseClient({ category, heroImage, heroTitle, heroSubtitle, heroDescription, emptyMessage }: ProductShowcaseProps) {
  const isTr = typeof window !== 'undefined' ? !window.location.pathname.startsWith('/en') : true
  const products = getProductsByCategory(category)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={isTr ? heroTitle.tr : heroTitle.en} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/15" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-teal-400/40 text-teal-300 text-sm font-semibold mb-6">
              <ShoppingBag className="w-4 h-4" />
              {isTr ? heroSubtitle.tr : heroSubtitle.en}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-6">
              {isTr ? heroTitle.tr : heroTitle.en}
            </h1>
            <p className="text-lg sm:text-xl text-white leading-relaxed max-w-xl">
              {isTr ? heroDescription.tr : heroDescription.en}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              {isTr ? heroTitle.tr : heroTitle.en}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {isTr ? heroDescription.tr : heroDescription.en}
            </p>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">{isTr ? emptyMessage.tr : emptyMessage.en}</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p: any) => (
                <div key={p.id} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
                  <div className="relative aspect-square bg-white border-b border-gray-100 overflow-hidden">
                    <div className="absolute inset-4 sm:inset-6 flex items-center justify-center">
                      <Image
                        src={p.image}
                        alt={isTr ? p.titleTr : p.titleEn || p.titleTr}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                    {(p.priceEn || p.priceTr) && (
                      <div className="absolute bottom-3 right-3 flex flex-col items-end gap-1">
                        {p.priceEn && (
                          <span className="px-2.5 py-0.5 rounded-full bg-blue-500 text-white text-xs font-semibold shadow-lg">
                            Amazon: {p.priceEn}
                          </span>
                        )}
                        {p.priceTr && (
                          <span className="px-2.5 py-0.5 rounded-full bg-teal-500 text-white text-xs font-semibold shadow-lg">
                            {isTr ? 'Fabrika Çıkış Fiyatı:' : 'Factory Price:'} {p.priceTr}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-gray-900 mb-2 line-clamp-2">
                      {isTr ? p.titleTr : (p.titleEn || p.titleTr)}
                    </h3>
                    {(isTr ? p.descTr : p.descEn) && (
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                        {isTr ? p.descTr : (p.descEn || p.descTr)}
                      </p>
                    )}
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 font-medium">
                        <ExternalLink className="w-3.5 h-3.5" />
                        {isTr ? 'Detay Gör' : 'View Details'}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            {isTr ? 'Bu Ürünlerle İlgileniyor musunuz?' : 'Interested in These Products?'}
          </h2>
          <p className="text-lg text-white mb-10 leading-relaxed">
            {isTr ? 'Çin\'den güvenli tedarik, kalite kontrol ve lojistik süreçlerinde uzman ekibimizle iletişime geçin.' : 'Contact our expert team for safe sourcing from China, quality control and logistics processes.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-6 text-base font-semibold shadow-xl w-full sm:w-auto">
                <Mail className="w-5 h-5 mr-2" />
                {isTr ? 'Bize Ulaşın' : 'Contact Us'}
              </Button>
            </a>
            <a href="https://wa.me/905053697425" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-base font-semibold shadow-xl w-full sm:w-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                {isTr ? 'WhatsApp ile Yazın' : 'Write on WhatsApp'}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
