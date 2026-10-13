'use client'

import { useLocale } from '@/lib/locale-context'
import { services } from '@/lib/services-data'
import { Search, ShieldCheck, Truck, FileCheck, ShoppingCart, Handshake, Package, Globe, Star, Zap, Award, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const iconMap: Record<string, any> = {
  Search, ShieldCheck, Truck, FileCheck, ShoppingCart, Handshake,
  Package, Globe, Star, Zap, Award, Briefcase,
}

export function ServicesSection() {
  const { locale, t } = useLocale()
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="services" className="py-20 sm:py-28 pastel-gradient-1" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t?.services?.title ?? 'Services'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t?.services?.subtitle ?? ''}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Package
            const title = locale === 'tr' ? service.titleTr : service.titleEn
            const desc = locale === 'tr' ? service.descTr : service.descEn
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-video bg-muted">
                  <Image src={service.image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 p-2 bg-white/90 dark:bg-gray-900/90 rounded-lg backdrop-blur-sm">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
