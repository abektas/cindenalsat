'use client'

import { useEffect, useState } from 'react'
import { useLocale } from '@/lib/locale-context'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

export function TestimonialsSection() {
  const { locale } = useLocale()
  const isTr = locale === 'tr'
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    fetch('/api/public/testimonials')
      .then(r => r.json())
      .then(setTestimonials)
      .catch(() => {})
  }, [])

  if (testimonials.length === 0) return null

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
      className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/30"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            {isTr ? 'Müşterilerimiz Ne Diyor?' : 'What Our Clients Say?'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isTr ? 'Güvenle çalıştığımız müşterilerimizin deneyimleri' : 'Experiences of our trusted clients'}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t: any) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating || 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6 relative z-10">
                &ldquo;{isTr ? t.textTr : (t.textEn || t.textTr)}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name?.charAt(0) || '?'}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  {(t.role || t.company) && (
                    <p className="text-gray-500 text-xs">
                      {t.role}{t.role && t.company ? ' • ' : ''}{t.company}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
