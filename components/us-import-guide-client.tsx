'use client'

import { useLocale } from '@/lib/locale-context'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ShieldCheck, FileText, Lightbulb, Package, Truck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const sectionIcons = {
  customs: ShieldCheck,
  tariffs: FileText,
  process: Truck,
  tips: Lightbulb,
  states: Package,
}

export function UsImportGuideClient() {
  const { t } = useLocale()

  const usData = t?.usImport as any
  if (!usData) return null

  const sections = usData.sections

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-sm px-4 py-1">
              {usData.subtitle}
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              {usData.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              {usData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid gap-8">
            {Object.entries(sections).map(([key, section]: [string, any], idx: number) => {
              const Icon = sectionIcons[key as keyof typeof sectionIcons] || ShieldCheck
              return (
                <SectionCard key={key} icon={Icon} title={section.title} items={section.items} delay={idx * 0.1} />
              )
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
    </main>
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
