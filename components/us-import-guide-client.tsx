'use client'

import { useLocale } from '@/lib/locale-context'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { ShieldCheck, FileText, Lightbulb, Package, Truck, ArrowRight, Store } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const sectionIcons = {
  customs: ShieldCheck,
  tariffs: FileText,
  process: Truck,
  tips: Lightbulb,
  states: Package,
}

export function UsImportGuideClient() {
  const { locale, t } = useLocale()
  const isTr = locale === 'tr'
  const { ref: photoRef, inView: photoInView } = useInView({ threshold: 0.2, triggerOnce: true })

  const usData = t?.usImport as any
  if (!usData) return null

  const sections = usData.sections
  const sectionEntries = Object.entries(sections)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/trade-center.jpg"
            alt="Shenzhen dünya ticaret merkezi - Çin'den ABD'ye ithalat"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/15" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Badge className="mb-4 bg-black/40 border-teal-400/40 text-teal-300 text-sm px-4 py-1">
              {usData.subtitle}
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-white">
              {usData.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
              {usData.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/#contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-teal-400 text-white border-0 shadow-lg hover:shadow-xl gap-2">
                  {isTr ? 'Ücretsiz Danışmanlık' : 'Free Consultation'}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="/faydali-bilgiler">
                <Button variant="outline" size="lg" className="gap-2 text-sm text-white border-white/40 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/60">
                  {isTr ? 'Faydalı Bilgiler' : 'Useful Info'}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid gap-8">
            {sectionEntries.slice(0, 3).map(([key, section]: [string, any], idx: number) => {
              const Icon = sectionIcons[key as keyof typeof sectionIcons] || ShieldCheck
              return <SectionCard key={key} icon={Icon} title={section.title} items={section.items} delay={idx * 0.1} />
            })}
          </div>
        </div>
      </section>

      {/* On-Ground Photo Break */}
      <section className="relative py-24 overflow-hidden" ref={photoRef}>
        <div className="absolute inset-0">
          <Image
            src="/images/retail-visit.jpg"
            alt="Satış mağazalarını yerinde ziyaret - ABD pazarı ürün analizi"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-blue-900/45 to-teal-800/35" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={photoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-white"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-medium mb-4 border border-white/20">
              <Store className="w-4 h-4" />
              {isTr ? 'Yerinde Pazar Zekâsı' : 'On-Ground Market Intelligence'}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {isTr ? 'Ürün Seçimini Şansa Bırakmıyoruz' : 'We Do Not Leave Product Selection to Chance'}
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              {isTr
                ? 'ABD pazarındaki perakende mağazalarını yerinde ziyaret ediyor, raf ürünlerini ve fiyatlandırmayı analiz ediyoruz. Tedarik kararlarını gerçek pazar verisiyle veriyoruz.'
                : 'We visit retail stores in the US market on the ground, analyzing shelf products and pricing. Sourcing decisions are backed by real market data.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Remaining Sections */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid gap-8">
            {sectionEntries.slice(3).map(([key, section]: [string, any], idx: number) => {
              const Icon = sectionIcons[key as keyof typeof sectionIcons] || ShieldCheck
              return <SectionCard key={key} icon={Icon} title={section.title} items={section.items} delay={idx * 0.1} />
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-teal-400 text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            {t?.cta?.title}
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            {t?.cta?.description}
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-white/90 transition-colors shadow-lg"
          >
            {t?.cta?.button}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function SectionCard({ icon: Icon, title, items, delay }: { icon: any; title: string; items: string[]; delay: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="shadow-md hover:shadow-lg transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500/10 to-teal-400/10">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="font-display text-xl sm:text-2xl">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {items.map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                <span className="text-sm sm:text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
