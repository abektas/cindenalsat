'use client'

import { useState } from 'react'
import { useLocale } from '@/lib/locale-context'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import {
  CheckCircle2,
  ArrowRight,
  FileCheck,
  Shield,
  TrendingDown,
  Package,
  Truck,
  ClipboardCheck,
  Factory,
  Scale,
  BadgePercent,
  Phone,
  MessageCircle,
  Layers,
  Ruler,
  Leaf,
  Send,
  ShoppingCart,
  Loader2,
  Scissors,
  Hammer,
  ScanLine,
  CircleSlash,
  FileText,
  Camera,
  Weight,
  Gauge,
} from 'lucide-react'

const plywoodImages = {
  hero: 'https://cdn.abacus.ai/images/31e46e16-44e6-400f-a23a-65745afa1bfe.png',
  production: 'https://cdn.abacus.ai/images/2ca951af-5860-4c9a-803f-10811c013375.png',
  quality: 'https://cdn.abacus.ai/images/ff1f307c-2447-4c0b-8116-abf900ba9deb.png',
  logistics: 'https://cdn.abacus.ai/images/27f31c30-29ad-4d46-ac1e-e9c65da16d37.png',
  dir: 'https://cdn.abacus.ai/images/e87edb3f-a9d2-4624-a1e3-1f1e0497ef17.png',
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

function Section({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export function KavakKontraplakClient() {
  const { locale } = useLocale()
  const isTr = locale === 'tr'

  const content = {
    hero: {
      badge: isTr ? 'Dahilde İşleme Rejimi ile İthalat' : 'Import with Inward Processing Regime',
      title: isTr ? 'Çin\'den Kavak Kontraplak Tedariği' : 'Poplar Plywood Supply from China',
      subtitle: isTr
        ? 'Dahilde İşleme Rejimi (DİR) avantajlarıyla, gümrük vergisi ödemeden kavak kontraplak ithalatı yapın. Profesyonel danışmanlık ve uçtan uca tedarik hizmeti.'
        : 'Import poplar plywood without customs duties through the Inward Processing Regime (IPR). Professional consultancy and end-to-end supply service.',
      cta1: isTr ? 'Hemen Sipariş Verin' : 'Order Now',
      cta2: isTr ? 'Detaylı Bilgi' : 'Learn More',
    },
    product: {
      sectionTitle: isTr ? 'İthal Edilen Kavak Kontrplakın Teknik Özellikleri' : 'Technical Specifications of Imported Poplar Plywood',
      sectionSubtitle: isTr
        ? 'Koltuk, Kanepe, Oturma Grubu, Baza İç İskeleti ve Taşıyıcı Olmayan Mobilya İç Elemanları İçin'
        : 'For Sofa, Couch, Seating Group, Bed Base Frame and Non-Structural Furniture Components',
      productName: isTr
        ? 'Koltuk, Kanepe, Oturma Grubu, Baza İç İskeleti ve Taşıyıcı Olmayan Mobilya İç Elemanları İçin Kavak Kontrplak'
        : 'Poplar Plywood for Sofa, Couch, Upholstered Furniture Frame and Non-Structural Furniture Components',
      description: isTr
        ? 'CNC kesim ve şerit testere üretimine uygun, mobilya iç iskelet uygulamalarında güvenle kullanılabilen profesyonel kalitede kavak kontrplak. Çin\'den Dahilde İşleme Rejimi (DİR) avantajlarıyla ithal edilmektedir.'
        : 'Professional quality poplar plywood suitable for CNC cutting and band saw production, safely used in furniture frame applications. Imported from China with Inward Processing Regime (IPR) advantages.',
      usageAreas: [
        { title: isTr ? 'Koltuk İç İskeleti' : 'Sofa Internal Frame' },
        { title: isTr ? 'Kanepe İç İskeleti' : 'Couch Internal Frame' },
        { title: isTr ? 'Oturma Grubu İç Konstrüksiyonu' : 'Seating Group Internal Construction' },
        { title: isTr ? 'Baza İç Taşıyıcı Olmayan Panel' : 'Bed Base Non-Structural Panel' },
        { title: isTr ? 'Mobilya İç Destek Elemanları' : 'Furniture Internal Support Elements' },
        { title: isTr ? 'Döşemeli Mobilya İç Parçaları' : 'Upholstered Furniture Internal Parts' },
        { title: isTr ? 'CNC Kesim Üretimi' : 'CNC Cutting Production' },
        { title: isTr ? 'Şerit Testere Üretimi' : 'Band Saw Production' },
      ],
      limitations: [
        isTr ? 'Yapısal bina uygulamaları için değildir' : 'Not for structural building applications',
        isTr ? 'Dış ortam kullanımına uygun değildir' : 'Not suitable for outdoor use',
      ],
    },
    dir: {
      sectionTitle: isTr ? 'Dahilde İşleme Rejimi (DİR) Nedir?' : 'What is Inward Processing Regime (IPR)?',
      sectionSubtitle: isTr
        ? 'İthalatta vergisiz avantaj, ihracatta rekabet gücü'
        : 'Tax-free advantage in imports, competitive power in exports',
      description: isTr
        ? 'Dahilde İşleme Rejimi (DİR), Türkiye\'de üretim yapan firmaların, ihraç ürünlerinin üretiminde kullanılmak üzere hammadde ve yarı mamulleri gümrük vergisi, KDV ve diğer vergilerden muaf olarak ithal etmelerini sağlayan bir teşvik rejimidir.'
        : 'The Inward Processing Regime (IPR) is an incentive regime that allows manufacturers in Turkey to import raw materials and semi-finished products exempt from customs duties, VAT and other taxes, to be used in the production of export goods.',
      advantages: [
        { icon: BadgePercent, title: isTr ? 'Gümrük Vergisi Muafiyeti' : 'Customs Duty Exemption', desc: isTr ? 'İthalatta gümrük vergisi %0 olarak uygulanır' : 'Customs duty applied as 0% on imports' },
        { icon: TrendingDown, title: isTr ? 'KDV Muafiyeti' : 'VAT Exemption', desc: isTr ? 'İthalatta KDV ödenmez, maliyet düşer' : 'No VAT on imports, costs decrease' },
        { icon: Scale, title: isTr ? 'Rekabet Avantajı' : 'Competitive Advantage', desc: isTr ? 'İhraç ürünlerinde maliyet avantajı sağlar' : 'Provides cost advantage in export products' },
        { icon: FileCheck, title: isTr ? 'Belge Kolaylığı' : 'Document Facilitation', desc: isTr ? 'DİR belgesi ile ithalat süreçleri hızlanır' : 'Import processes accelerated with IPR certificate' },
      ],
      howItWorks: [
        { step: '01', title: isTr ? 'DİR Belgesi Başvurusu' : 'IPR Certificate Application', desc: isTr ? 'Ticaret Bakanlığı\'na DİR belgesi başvurusu yapılır' : 'IPR certificate application is made to the Ministry of Trade' },
        { step: '02', title: isTr ? 'Belge Onayı' : 'Certificate Approval', desc: isTr ? 'Başvuru değerlendirilir ve DİR belgesi düzenlenir' : 'Application is evaluated and IPR certificate is issued' },
        { step: '03', title: isTr ? 'Vergisiz İthalat' : 'Tax-Free Import', desc: isTr ? 'Kavak kontraplak vergisiz olarak ithal edilir' : 'Poplar plywood is imported tax-free' },
        { step: '04', title: isTr ? 'Üretim & İhracat' : 'Production & Export', desc: isTr ? 'İthal edilen hammadde ile üretim yapılır ve ihraç edilir' : 'Production is done with imported raw materials and exported' },
      ],
    },
    specs: {
      sectionTitle: isTr ? 'Panel Teknik Özellikleri' : 'Panel Technical Specifications',
      sectionSubtitle: isTr ? '14mm 7 katmanlı kavak kontrplak standart değerleri' : '14mm 7-ply poplar plywood standard values',
      items: [
        { label: isTr ? 'Panel Ölçüsü' : 'Panel Size', value: '1220 × 2440 mm' },
        { label: isTr ? 'Nominal Kalınlık' : 'Nominal Thickness', value: '14 mm' },
        { label: isTr ? 'Gerçek Kalınlık' : 'Actual Thickness', value: '≥ 13,8 mm' },
        { label: isTr ? 'Kalınlık Toleransı' : 'Thickness Tolerance', value: '±0,3 mm' },
        { label: isTr ? 'Katman Yapısı' : 'Layer Structure', value: isTr ? '7 Katman (7 Ply)' : '7 Ply' },
        { label: isTr ? 'İç Katman' : 'Inner Layer', value: isTr ? '%100 Tam Kavak İç Malzeme' : '100% Full Poplar Core' },
        { label: isTr ? 'Yüzey' : 'Surface', value: isTr ? 'Çift Zımparalanmış' : 'Double Sanded' },
        { label: isTr ? 'Tutkal' : 'Adhesive', value: 'MR – E1' },
        { label: isTr ? 'Nem Oranı' : 'Moisture Content', value: '%8–12' },
      ],
    },
    mechanical: {
      sectionTitle: isTr ? 'Mekanik Performans & Kalite Gereksinimleri' : 'Mechanical Performance & Quality Requirements',
      sectionSubtitle: isTr ? 'Üretim hattında sorunsuz işleme için gerekli standartlar' : 'Standards required for seamless processing on the production line',
      performance: [
        { label: isTr ? 'Vida Tutma' : 'Screw Holding', value: isTr ? 'İyi' : 'Good' },
        { label: isTr ? 'Zımba Tutma' : 'Staple Holding', value: isTr ? 'İyi' : 'Good' },
        { label: isTr ? 'Çivi Tutma' : 'Nail Holding', value: isTr ? 'İyi' : 'Good' },
        { label: isTr ? 'Kesim Kenarı' : 'Cut Edge', value: isTr ? 'Pürüzsüz' : 'Smooth' },
        { label: isTr ? 'Kenar Kırılması' : 'Edge Chipping', value: isTr ? 'Düşük' : 'Low' },
        { label: isTr ? 'İşleme Stabilitesi' : 'Processing Stability', value: isTr ? 'Yüksek' : 'High' },
        { label: isTr ? 'Katman Dayanımı' : 'Layer Strength', value: isTr ? 'Homojen' : 'Homogeneous' },
      ],
      qualityReqs: [
        isTr ? 'Katman ayrılması olmamalıdır' : 'No delamination',
        isTr ? 'İç boşluk olmamalıdır' : 'No internal voids',
        isTr ? 'Üst üste binen iç katman olmamalıdır' : 'No overlapping inner layers',
        isTr ? 'Yapışma kusuru olmamalıdır' : 'No bonding defects',
        isTr ? 'Üretim deformasyonu olmamalıdır' : 'No production deformation',
        isTr ? 'Aşırı kenar kırılması olmamalıdır' : 'No excessive edge chipping',
        isTr ? 'Görünür üretim hatası olmamalıdır' : 'No visible production defects',
      ],
      processing: [
        isTr ? 'CNC kesime uygun olmalıdır' : 'Must be suitable for CNC cutting',
        isTr ? 'Şerit testere kesimine uygun olmalıdır' : 'Must be suitable for band saw cutting',
        isTr ? 'Kesim sonrası kenar stabil kalmalıdır' : 'Edge must remain stable after cutting',
        isTr ? 'Kesim sonrası kaplama ayrılması olmamalıdır' : 'No veneer separation after cutting',
      ],
    },
    documents: {
      sectionTitle: isTr ? 'Sevkiyat Öncesi Belgeler' : 'Pre-Shipment Documents',
      sectionSubtitle: isTr ? 'Her sevkiyatta talep edilen belgeler' : 'Documents required for each shipment',
      items: [
        'Commercial Invoice',
        'Packing List',
        'Technical Data Sheet (TDS)',
        isTr ? 'Nem Ölçüm Raporu' : 'Moisture Measurement Report',
        isTr ? 'Kalınlık Ölçüm Raporu' : 'Thickness Measurement Report',
        isTr ? 'E1 / Tutkal Beyanı' : 'E1 / Adhesive Declaration',
        isTr ? 'Kesit Fotoğrafları' : 'Cross-Section Photos',
        isTr ? 'Yükleme Fotoğrafları' : 'Loading Photos',
        isTr ? 'Üretici Beyanı' : 'Manufacturer Declaration',
      ],
    },
    services: {
      sectionTitle: isTr ? 'Tedarik Hizmetlerimiz' : 'Our Supply Services',
      sectionSubtitle: isTr ? 'Çin\'den Türkiye\'ye uçtan uca kavak kontraplak tedariği' : 'End-to-end poplar plywood supply from China to Turkey',
      items: [
        { icon: Package, title: isTr ? 'Tedarikçi Bulma' : 'Supplier Sourcing', desc: isTr ? 'Sertifikalı ve güvenilir Çinli kontraplak üreticileriyle doğrudan çalışıyoruz' : 'We work directly with certified and reliable Chinese plywood manufacturers' },
        { icon: ClipboardCheck, title: isTr ? 'Kalite Kontrol' : 'Quality Control', desc: isTr ? 'Fabrika denetimi, numune testi ve üretim takibi yapıyoruz' : 'We conduct factory audits, sample testing and production monitoring' },
        { icon: FileCheck, title: isTr ? 'DİR Belge Danışmanlığı' : 'IPR Document Consultancy', desc: isTr ? 'DİR belgesi başvurusu ve süreç yönetiminde rehberlik sağlıyoruz' : 'We provide guidance on IPR certificate application and process management' },
        { icon: Truck, title: isTr ? 'Lojistik & Gümrükleme' : 'Logistics & Customs', desc: isTr ? 'Deniz yolu, demiryolu ve kombine taşımacılık organizasyonu' : 'Sea, rail and combined transport organization' },
      ],
    },
    cta: {
      title: isTr ? 'Kavak Kontraplak Tedariği İçin Hemen İletişime Geçin' : 'Contact Us Now for Poplar Plywood Supply',
      subtitle: isTr
        ? 'DİR avantajlarıyla maliyetlerinizi düşürün, rekabet gücünüzü artırın. Uzman ekibimiz size en uygun çözümü sunmak için hazır.'
        : 'Reduce your costs with IPR advantages and increase your competitive power. Our expert team is ready to offer you the best solution.',
      orderBtn: isTr ? 'Hemen Sipariş Verin' : 'Order Now',
      whatsapp: isTr ? 'WhatsApp ile Yazın' : 'Write on WhatsApp',
    },
    orderForm: {
      sectionTitle: isTr ? 'Sipariş / Teklif Formu' : 'Order / Quote Form',
      sectionSubtitle: isTr
        ? 'Kavak kontraplak ihtiyacınız için formu doldurun, size en kısa sürede dönüş yapalım'
        : 'Fill out the form for your poplar plywood needs, we will get back to you as soon as possible',
      name: isTr ? 'Ad Soyad *' : 'Full Name *',
      email: isTr ? 'E-posta *' : 'Email *',
      phone: isTr ? 'Telefon *' : 'Phone *',
      company: isTr ? 'Firma Adı' : 'Company Name',
      city: isTr ? 'Şehir' : 'City',
      productType: isTr ? 'Ürün Tipi' : 'Product Type',
      thickness: isTr ? 'Kalınlık' : 'Thickness',
      size: isTr ? 'Ölçü' : 'Size',
      quantity: isTr ? 'Miktar (m³ veya adet) *' : 'Quantity (m³ or pcs) *',
      adhesive: isTr ? 'Yapıştırıcı Türü' : 'Adhesive Type',
      surface: isTr ? 'Yüzey İşlemi' : 'Surface Finish',
      usage: isTr ? 'Kullanım Alanı' : 'Application Area',
      dirInterest: isTr ? 'DİR (Dahilde İşleme Rejimi) İlginiz' : 'IPR (Inward Processing Regime) Interest',
      dirOptions: {
        none: isTr ? 'Seçiniz' : 'Select',
        yes: isTr ? 'Evet, DİR belgesi ile ithalat yapmak istiyorum' : 'Yes, I want to import with IPR certificate',
        info: isTr ? 'DİR hakkında bilgi almak istiyorum' : 'I want to learn about IPR',
        no: isTr ? 'Hayır, DİR ile ilgilenmiyorum' : 'No, I am not interested in IPR',
      },
      notes: isTr ? 'Ek Notlar / Özel İstekler' : 'Additional Notes / Special Requests',
      submit: isTr ? 'Sipariş Talebini Gönder' : 'Submit Order Request',
      sending: isTr ? 'Gönderiliyor...' : 'Sending...',
      success: isTr ? 'Sipariş talebiniz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.' : 'Your order request has been sent successfully! We will get back to you soon.',
      error: isTr ? 'Bir hata oluştu. Lütfen tekrar deneyin.' : 'An error occurred. Please try again.',
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={plywoodImages.hero}
            alt={isTr ? 'Kavak kontraplak levhalar' : 'Poplar plywood sheets'}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-teal-400/40 text-teal-300 text-sm font-semibold mb-6">
              <FileCheck className="w-4 h-4" />
              {content.hero.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-6">
              {content.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-white leading-relaxed mb-8 max-w-xl">
              {content.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#order-form">
                <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-6 text-base font-semibold shadow-xl shadow-teal-500/20">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {content.hero.cta1}
                </Button>
              </a>
              <a href="#dir">
                <Button size="lg" className="bg-white/15 border border-white/40 text-white hover:bg-white/25 px-8 py-6 text-base backdrop-blur-sm font-semibold">
                  {content.hero.cta2}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Info Section */}
      <Section className="py-20 sm:py-28 bg-gray-50" id="product">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">{content.product.sectionTitle}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{content.product.sectionSubtitle}</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeUp}>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4">{content.product.productName}</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{content.product.description}</p>

              {/* Usage Areas Grid */}
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Factory className="w-5 h-5 text-teal-500" />
                {isTr ? 'Kullanım Alanları' : 'Usage Areas'}
              </h4>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {content.product.usageAreas.map((area: { title: string }, i: number) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span className="text-gray-800 text-sm font-medium">{area.title}</span>
                  </div>
                ))}
              </div>

              {/* Limitations */}
              <div className="space-y-2">
                {content.product.limitations.map((lim: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-amber-50 border border-amber-200">
                    <CircleSlash className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span className="text-amber-800 text-sm font-medium">{lim}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={plywoodImages.production}
                alt={isTr ? 'Kavak kontraplak üretimi' : 'Poplar plywood production'}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* DİR Section */}
      <Section className="py-20 sm:py-28 bg-white" id="dir">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              {isTr ? 'Vergi Avantajı' : 'Tax Advantage'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">{content.dir.sectionTitle}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{content.dir.sectionSubtitle}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <motion.div variants={fadeUp} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={plywoodImages.dir}
                alt={isTr ? 'Dahilde İşleme Rejimi belgeleri' : 'Inward Processing Regime documents'}
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{content.dir.description}</p>
              <div className="space-y-4">
                {content.dir.advantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white flex-shrink-0">
                      <adv.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{adv.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{adv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* How DİR Works */}
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-2">
              {isTr ? 'DİR Süreci Nasıl İşler?' : 'How Does the IPR Process Work?'}
            </h3>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.dir.howItWorks.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow text-center group"
              >
                <div className="text-4xl font-display font-extrabold bg-gradient-to-br from-blue-500 to-teal-400 bg-clip-text text-transparent mb-3">
                  {step.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* YouTube Video Embed */}
          <motion.div variants={fadeUp} className="mt-14">
            <div className="max-w-[800px] mx-auto">
              <h4 className="font-display font-bold text-gray-900 text-lg mb-4 text-center flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                {isTr ? 'Dahilde İşleme Rejimi Nedir ve Süreç Nasıl İşler?' : 'What is Inward Processing Regime & How Does the Process Work?'}
              </h4>
              <p className="text-sm text-gray-500 text-center mb-6">
                {isTr ? 'Daha fazla bilgi almak için videoyu izleyin' : 'Watch the video to learn more'}
              </p>
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/Lj1nl5kcNM4?start=707"
                  title={isTr ? 'Dahilde İşleme Rejimi Nedir ve Süreç Nasıl İşler?' : 'What is Inward Processing Regime & How Does the Process Work?'}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Technical Specs */}
      <Section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">{content.specs.sectionTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content.specs.sectionSubtitle}</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {content.specs.items.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${i < content.specs.items.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <span className="font-medium text-gray-700">{item.label}</span>
                    <span className="text-gray-900 font-semibold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={plywoodImages.quality}
                alt={isTr ? 'Kontraplak kalite kontrol' : 'Plywood quality control'}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Mechanical Performance & Quality */}
      <Section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">{content.mechanical.sectionTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content.mechanical.sectionSubtitle}</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Performance Table */}
            <motion.div variants={fadeUp} className="lg:col-span-1">
              <h4 className="font-display font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Gauge className="w-5 h-5 text-blue-500" />
                {isTr ? 'Mekanik Performans' : 'Mechanical Performance'}
              </h4>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {content.mechanical.performance.map((item: { label: string; value: string }, i: number) => (
                  <div key={i} className={`flex items-center justify-between px-5 py-3 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${i < content.mechanical.performance.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <span className="text-gray-700 text-sm">{item.label}</span>
                    <span className="text-gray-900 font-semibold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quality Requirements */}
            <motion.div variants={fadeUp} className="lg:col-span-1">
              <h4 className="font-display font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-teal-500" />
                {isTr ? 'Kalite Gereksinimleri' : 'Quality Requirements'}
              </h4>
              <div className="space-y-2">
                {content.mechanical.qualityReqs.map((req: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-100">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-sm">{req}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Processing Requirements */}
            <motion.div variants={fadeUp} className="lg:col-span-1">
              <h4 className="font-display font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Scissors className="w-5 h-5 text-blue-500" />
                {isTr ? 'İşleme Gereksinimleri' : 'Processing Requirements'}
              </h4>
              <div className="space-y-2">
                {content.mechanical.processing.map((proc: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-sm">{proc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Pre-Shipment Documents */}
      <Section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">{content.documents.sectionTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content.documents.sectionSubtitle}</p>
          </motion.div>
          <motion.div variants={fadeUp} className="max-w-[800px] mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {content.documents.items.map((doc: string, i: number) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white flex-shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-gray-800 text-sm font-medium">{doc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Our Services */}
      <Section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">{content.services.sectionTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content.services.sectionSubtitle}</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid sm:grid-cols-2 gap-5">
              {content.services.items.map((svc, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white mb-4">
                    <svc.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{svc.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={plywoodImages.logistics}
                alt={isTr ? 'Lojistik ve gümrükleme' : 'Logistics and customs clearance'}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Order Form Section */}
      <OrderFormSection content={content} locale={locale} />

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">{content.cta.title}</h2>
            <p className="text-lg text-white mb-10 leading-relaxed">{content.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#order-form">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-6 text-base font-semibold shadow-xl w-full sm:w-auto">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {content.cta.orderBtn}
                </Button>
              </a>
              <a href="https://wa.me/905053697425?text=Merhaba%2C%20kavak%20kontraplak%20tedariği%20hakkında%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-base font-semibold shadow-xl w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {content.cta.whatsapp}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

/* ─── Order Form Component ─── */
function OrderFormSection({ content, locale }: { content: any; locale: string }) {
  const f = content.orderForm
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', city: '',
    productType: 'Kavak Kontraplak', thickness: '', size: '1220x2440mm',
    quantity: '', adhesive: '', surface: '', usage: '', dirInterest: '', notes: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/plywood-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, locale }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', company: '', city: '', productType: 'Kavak Kontraplak', thickness: '', size: '1220x2440mm', quantity: '', adhesive: '', surface: '', usage: '', dirInterest: '', notes: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputCls = 'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all placeholder:text-gray-400'
  const labelCls = 'block text-sm font-medium text-gray-700 mb-1.5'
  const selectCls = 'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all appearance-none'

  return (
    <motion.section
      ref={ref}
      id="order-form"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="py-20 sm:py-28 bg-white"
    >
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        <motion.div variants={fadeUp} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 text-teal-600 text-sm font-medium mb-4">
            <ShoppingCart className="w-4 h-4" />
            {content.hero.cta1}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">{f.sectionTitle}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{f.sectionSubtitle}</p>
        </motion.div>

        {status === 'success' ? (
          <motion.div variants={fadeUp} className="text-center py-16 px-8 rounded-2xl bg-green-50 border border-green-200">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <p className="text-green-800 text-lg font-semibold">{f.success}</p>
          </motion.div>
        ) : (
          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 sm:p-10 border border-gray-100 shadow-sm">
            {/* Contact Info */}
            <div className="mb-8">
              <h3 className="font-display font-semibold text-gray-900 text-lg mb-5 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-sm font-bold">1</div>
                {locale === 'tr' ? 'İletişim Bilgileri' : 'Contact Information'}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div><label className={labelCls}>{f.name}</label><input name="name" value={form.name} onChange={handleChange} required className={inputCls} /></div>
                <div><label className={labelCls}>{f.email}</label><input name="email" type="email" value={form.email} onChange={handleChange} required className={inputCls} /></div>
                <div><label className={labelCls}>{f.phone}</label><input name="phone" type="tel" value={form.phone} onChange={handleChange} required className={inputCls} /></div>
                <div><label className={labelCls}>{f.company}</label><input name="company" value={form.company} onChange={handleChange} className={inputCls} /></div>
                <div><label className={labelCls}>{f.city}</label><input name="city" value={form.city} onChange={handleChange} className={inputCls} /></div>
              </div>
            </div>

            {/* Product Details */}
            <div className="mb-8">
              <h3 className="font-display font-semibold text-gray-900 text-lg mb-5 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-white text-sm font-bold">2</div>
                {locale === 'tr' ? 'Ürün Detayları' : 'Product Details'}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className={labelCls}>{f.productType}</label>
                  <select name="productType" value={form.productType} onChange={handleChange} className={selectCls}>
                    <option>Kavak Kontraplak</option>
                    <option>{locale === 'tr' ? 'Film Kaplı Kontraplak' : 'Film Faced Plywood'}</option>
                    <option>{locale === 'tr' ? 'Lamine Kontraplak' : 'Laminated Plywood'}</option>
                    <option>{locale === 'tr' ? 'Diğer' : 'Other'}</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>{f.thickness}</label>
                  <select name="thickness" value={form.thickness} onChange={handleChange} className={selectCls}>
                    <option value="">{locale === 'tr' ? 'Seçiniz' : 'Select'}</option>
                    <option>3mm</option><option>5mm</option><option>9mm</option><option>12mm</option>
                    <option>15mm</option><option>18mm</option><option>21mm</option><option>25mm</option><option>30mm</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>{f.size}</label>
                  <select name="size" value={form.size} onChange={handleChange} className={selectCls}>
                    <option>1220x2440mm</option>
                    <option>1250x2500mm</option>
                    <option>{locale === 'tr' ? 'Özel Ölçü' : 'Custom Size'}</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>{f.quantity}</label>
                  <input name="quantity" value={form.quantity} onChange={handleChange} required placeholder={locale === 'tr' ? 'Örn: 50 m³' : 'e.g. 50 m³'} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>{f.adhesive}</label>
                  <select name="adhesive" value={form.adhesive} onChange={handleChange} className={selectCls}>
                    <option value="">{locale === 'tr' ? 'Seçiniz' : 'Select'}</option>
                    <option>MR ({locale === 'tr' ? 'Nem Dayanımlı' : 'Moisture Resistant'})</option>
                    <option>WBP ({locale === 'tr' ? 'Su Geçirmez' : 'Waterproof'})</option>
                    <option>E0</option>
                    <option>E1</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>{f.surface}</label>
                  <select name="surface" value={form.surface} onChange={handleChange} className={selectCls}>
                    <option value="">{locale === 'tr' ? 'Seçiniz' : 'Select'}</option>
                    <option>{locale === 'tr' ? 'Ham' : 'Raw'}</option>
                    <option>{locale === 'tr' ? 'Zımparalı' : 'Sanded'}</option>
                    <option>{locale === 'tr' ? 'Film Kaplı' : 'Film Faced'}</option>
                    <option>{locale === 'tr' ? 'Melamin Kaplı' : 'Melamine Coated'}</option>
                  </select>
                </div>
                <div className="sm:col-span-2 lg:col-span-3">
                  <label className={labelCls}>{f.usage}</label>
                  <select name="usage" value={form.usage} onChange={handleChange} className={selectCls}>
                    <option value="">{locale === 'tr' ? 'Seçiniz' : 'Select'}</option>
                    <option>{locale === 'tr' ? 'Mobilya Üretimi' : 'Furniture Production'}</option>
                    <option>{locale === 'tr' ? 'Ambalaj' : 'Packaging'}</option>
                    <option>{locale === 'tr' ? 'İnşaat / Kalıp' : 'Construction / Formwork'}</option>
                    <option>{locale === 'tr' ? 'Dekorasyon' : 'Decoration'}</option>
                    <option>{locale === 'tr' ? 'Oyuncak Üretimi' : 'Toy Production'}</option>
                    <option>{locale === 'tr' ? 'Araç İçi Kaplama' : 'Vehicle Interior'}</option>
                    <option>{locale === 'tr' ? 'Diğer' : 'Other'}</option>
                  </select>
                </div>
              </div>
            </div>

            {/* DİR Section */}
            <div className="mb-8">
              <h3 className="font-display font-semibold text-gray-900 text-lg mb-5 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white text-sm font-bold">3</div>
                {f.dirInterest}
              </h3>
              <select name="dirInterest" value={form.dirInterest} onChange={handleChange} className={selectCls}>
                <option value="">{f.dirOptions.none}</option>
                <option value="evet">{f.dirOptions.yes}</option>
                <option value="bilgi">{f.dirOptions.info}</option>
                <option value="hayir">{f.dirOptions.no}</option>
              </select>
            </div>

            {/* Notes */}
            <div className="mb-8">
              <label className={labelCls}>{f.notes}</label>
              <textarea name="notes" value={form.notes} onChange={handleChange} rows={4} className={`${inputCls} resize-none`} />
            </div>

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">{f.error}</div>
            )}

            <Button
              type="submit"
              disabled={status === 'sending'}
              size="lg"
              className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white py-6 text-base font-semibold shadow-xl"
            >
              {status === 'sending' ? (
                <><Loader2 className="w-5 h-5 mr-2 animate-spin" />{f.sending}</>
              ) : (
                <><Send className="w-5 h-5 mr-2" />{f.submit}</>
              )}
            </Button>
          </motion.form>
        )}
      </div>
    </motion.section>
  )
}
