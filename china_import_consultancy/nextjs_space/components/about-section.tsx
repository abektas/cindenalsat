'use client'

import { useLocale } from '@/lib/locale-context'
import { useSiteContent } from '@/lib/site-content-context'
import { Users, Package, Globe2, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="font-display text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
      {count}+{suffix ? ` ${suffix}` : ''}
    </span>
  )
}

export function AboutSection() {
  const { locale, t } = useLocale()
  const { getImage } = useSiteContent()
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const stats = [
    { icon: Users, value: 500, label: t?.about?.stats?.clients ?? 'Clients', suffix: '' },
    { icon: Package, value: 5000, label: t?.about?.stats?.products ?? 'Products', suffix: '' },
    { icon: Globe2, value: 25, label: t?.about?.stats?.countries ?? 'Countries', suffix: '' },
    { icon: Award, value: 10, label: t?.about?.stats?.experience ?? 'Experience', suffix: '' },
  ]

  return (
    <section id="about" className="py-20 sm:py-28 pastel-gradient-2" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-muted"
          >
            <Image
              src={getImage('team_image')}
              alt="Çin'den Al Sat danışmanlık ekibi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-2">
              {t?.about?.title ?? 'About'}
            </h2>
            <p className="text-primary font-semibold mb-6">
              {t?.about?.subtitle ?? ''}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t?.about?.description ?? ''}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t?.about?.experience ?? ''}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats?.map?.((stat: any, idx: number) => {
                const Icon = stat?.icon
                return (
                  <div key={idx} className="bg-card rounded-xl p-4 shadow-md text-center">
                    {Icon ? <Icon className="w-6 h-6 text-primary mx-auto mb-2" /> : null}
                    <CountUp target={stat?.value ?? 0} suffix="" />
                    <p className="text-sm text-muted-foreground mt-1">{stat?.label ?? ''}</p>
                  </div>
                )
              }) ?? []}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
