'use client'

import { useLocale } from '@/lib/locale-context'
import { Users, Package, Globe2, Award, Camera, Factory } from 'lucide-react'
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

const galleryItems = [
  {
    image: '/images/market-research.jpg',
    alt: 'Müşteri ile birlikte Çin pazar araştırması',
    captionTr: 'Müşterimizle birlikte yerinde pazar araştırması',
    captionEn: 'On-site market research with our client',
  },
  {
    image: '/images/client-matching.jpg',
    alt: 'Müşteri ve iş ortağı buluşturma toplantısı',
    captionTr: 'Müşteri ve iş ortağı buluşturma toplantıları',
    captionEn: 'Client and partner matchmaking meetings',
  },
  {
    image: '/images/china-dinner.jpg',
    alt: 'Çin iş ortaklarıyla yemekli toplantı',
    captionTr: "Çin'de iş ortaklarımızla yemekli toplantılar",
    captionEn: 'Working dinners with our partners in China',
  },
  {
    image: '/images/business-relationship.jpg',
    alt: 'Samimi ilişkiler başarılı ticaret',
    captionTr: 'Samimi ilişkiler, başarılı ticaret',
    captionEn: 'Strong relationships, successful trade',
  },
]

export function AboutSection() {
  const { locale, t } = useLocale()
  const isTr = locale === 'tr'
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: galRef, inView: galInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: vidRef, inView: vidInView } = useInView({ threshold: 0.2, triggerOnce: true })

  const stats = [
    { icon: Users, value: 500, label: t?.about?.stats?.clients ?? 'Clients', suffix: '' },
    { icon: Package, value: 5000, label: t?.about?.stats?.products ?? 'Products', suffix: '' },
    { icon: Globe2, value: 25, label: t?.about?.stats?.countries ?? 'Countries', suffix: '' },
    { icon: Award, value: 10, label: t?.about?.stats?.experience ?? 'Experience', suffix: '' },
  ]

  return (
    <>
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
                src="/images/team-meeting.jpg"
                alt="Çin'den Al Sat danışmanlık ekibi iş ortaklarıyla buluşmada"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium">
                  {isTr ? "Shenzhen'da iş ortaklarımızla" : 'With our partners in Shenzhen'}
                </p>
              </div>
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

      {/* On-Ground Operations Gallery */}
      <section className="py-16 sm:py-20 bg-card" ref={galRef}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={galInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Camera className="w-4 h-4" />
              {isTr ? 'Yerinde Operasyonlar' : 'On-Ground Operations'}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {isTr ? "Çin'de Fiziksel Varlığımız" : 'Our Physical Presence in China'}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {isTr
                ? "Uzaktan yönetilen ithalatın aksine, tedarikçilerle yüz yüze çalışıyor, fabrikaları ve pazarları yerinde inceliyoruz."
                : 'Unlike remotely managed imports, we work face-to-face with suppliers, inspecting factories and markets on the ground.'}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={galInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-muted">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center px-1">
                  {isTr ? item.captionTr : item.captionEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Visit Video */}
      <section className="py-16 sm:py-20" ref={vidRef}>
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={vidInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Factory className="w-4 h-4" />
              {isTr ? 'Fabrika Ziyaretleri' : 'Factory Visits'}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {isTr ? 'Tedarikçi Fabrikalarını Yerinde Denetliyoruz' : 'We Audit Supplier Factories On-Site'}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {isTr
                ? 'Kalite kontrolü sadece numune ile sınırlı kalmıyor — üretim tesislerini bizzat ziyaret ediyoruz.'
                : 'Quality control goes beyond samples — we visit production facilities in person.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={vidInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl bg-black aspect-video"
          >
            <video
              controls
              preload="metadata"
              poster="/videos/factory-visit-poster.jpg"
              className="w-full h-full object-cover"
            >
              <source src="/videos/factory-visit.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            {isTr
              ? "Çin'deki tedarikçi fabrika ziyaretlerimizden bir kesit"
              : 'A glimpse from our supplier factory visits in China'}
          </p>
        </div>
      </section>
    </>
  )
}
