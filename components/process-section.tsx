'use client'

import { useLocale } from '@/lib/locale-context'
import { ClipboardList, Search, Package, Factory, Truck, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stepIcons = [ClipboardList, Search, Package, Factory, Truck, CheckCircle]

export function ProcessSection() {
  const { t } = useLocale()
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const steps = (t?.process?.steps ?? []) as unknown as any[]

  return (
    <section id="process" className="py-20 sm:py-28" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t?.process?.title ?? 'Process'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t?.process?.subtitle ?? ''}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-teal-300 to-pink-300 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {(steps as any[])?.map?.((step: any, idx: number) => {
              const Icon = stepIcons?.[idx] ?? CheckCircle
              const isLeft = idx % 2 === 0

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative flex items-start gap-4 sm:gap-0 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'}`}>
                    <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <span className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 text-white text-sm font-bold">
                          {idx + 1}
                        </span>
                        <h3 className="font-display font-semibold text-lg">
                          {step?.title ?? ''}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {step?.desc ?? ''}
                      </p>
                    </div>
                  </div>

                  {/* Center circle */}
                  <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 text-white shadow-lg z-10 flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden sm:block flex-1" />
                </motion.div>
              )
            }) ?? []}
          </div>
        </div>
      </div>
    </section>
  )
}
