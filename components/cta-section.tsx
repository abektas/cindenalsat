'use client'

import { useLocale } from '@/lib/locale-context'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'

export function CtaSection() {
  const { t } = useLocale()
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="py-20 sm:py-28 pastel-gradient-3" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl p-8 sm:p-12 lg:p-16 text-center text-white overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
          </div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {t?.cta?.title ?? ''}
            </h2>
            <p className="text-white text-lg max-w-xl mx-auto mb-8">
              {t?.cta?.description ?? ''}
            </p>
            <a href="#contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 shadow-xl gap-2 text-base font-semibold">
                {t?.cta?.button ?? 'Start'}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
