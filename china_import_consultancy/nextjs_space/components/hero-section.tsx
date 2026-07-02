'use client';

import { useLocale } from '@/lib/locale-context';
import { ArrowRight, Shield, Zap, Globe2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';

const heroSlides = [
{
  src: '/hero-slides/slide-1.jpg',
  alt: 'Çinden Al - Çin İthalat Danışmanlığı'
},
{
  src: '/hero-slides/slide-2.jpg',
  alt: 'Kanton Fuarı - Canton Fair China'
},
{
  src: '/hero-slides/slide-3.jpg',
  alt: 'Çin tedarikçi ziyareti - China supplier visit'
},
{
  src: '/hero-slides/slide-4.jpg',
  alt: 'Çin iş ilişkileri - China business relations'
},
{
  src: '/hero-slides/slide-5.webp',
  alt: 'Çin ithalat süreçleri - China import processes'
}];


const SLIDE_INTERVAL = 5000; // 5 seconds

export function HeroSection() {
  const { t } = useLocale();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_INTERVAL);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    startAutoPlay();
  }, [currentSlide, startAutoPlay]);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    startAutoPlay();
  }, [startAutoPlay]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    startAutoPlay();
  }, [startAutoPlay]);

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, scale: 1.08, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, scale: 1.04, x: dir > 0 ? -60 : 60 })
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0">
            
            <Image
              src={heroSlides[currentSlide].src}
              alt={heroSlides[currentSlide].alt}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              sizes="100vw"
              quality={85} />
            
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-white/20">
            <Shield className="w-4 h-4" />
            {t?.hero?.subtitle ?? ''}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-white drop-shadow-lg">
            {t?.hero?.title ?? ''}
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-xl drop-shadow text-white text-center">
            {t?.hero?.description ?? ''}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-teal-400 text-white border-0 shadow-lg hover:shadow-xl gap-2 text-base">
                {t?.hero?.cta ?? 'Contact'}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline" size="lg" className="gap-2 text-sm text-white border-black bg-sky-700 backdrop-blur-sm hover:bg-white/20 hover:text-white" style={{ border: '0px', borderRadius: '0px', left: '0px', width: '203px' }}>
                {t?.hero?.cta2 ?? 'Services'}
              </Button>
            </a>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-6 mt-12">
            
            {[
            { icon: Shield, label: locale_safe('Güvenilir Tedarikçiler', 'Trusted Suppliers') },
            { icon: Zap, label: locale_safe('Hızlı Süreç', 'Fast Process') },
            { icon: Globe2, label: locale_safe('Global Teslimat', 'Global Delivery') }]?.
            map?.((badge: any, idx: number) =>
            <div key={idx} className="flex items-center gap-2 text-sm text-white/80">
                <badge.icon className="w-4 h-4 text-teal-300" />
                {badge?.label ?? ''}
              </div>
            ) ?? []}
          </motion.div>
        </motion.div>
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={goPrev}
        aria-label="Önceki slayt"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 group">
        
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={goNext}
        aria-label="Sonraki slayt"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 group">
        
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Slide Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {heroSlides.map((_, idx) =>
        <button
          key={idx}
          onClick={() => goToSlide(idx)}
          aria-label={`Slayt ${idx + 1}`}
          className="group relative p-1">
          
            <span
            className={`block rounded-full transition-all duration-500 ${
            isMounted && idx === currentSlide ?
            'w-8 h-3 bg-white shadow-lg shadow-white/30' :
            'w-3 h-3 bg-white/40 hover:bg-white/60'}`
            } />
          
            {/* Progress bar for active dot */}
            {isMounted && idx === currentSlide &&
          <motion.span
            className="absolute inset-1 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: SLIDE_INTERVAL / 1000, ease: 'linear' }}
            key={`progress-${currentSlide}-${Date.now()}`} />

          }
          </button>
        )}
      </div>

      {/* Slide counter */}
      <div className="absolute top-28 right-4 sm:right-8 z-20 text-white/90 text-sm font-mono drop-shadow-lg">
        {isMounted ?
        <span><span className="text-white font-semibold text-lg">{String(currentSlide + 1).padStart(2, '0')}</span> / {String(heroSlides.length).padStart(2, '0')}</span> :

        <span><span className="text-white font-semibold text-lg">01</span> / 05</span>
        }
      </div>
    </section>);

}

function locale_safe(tr: string, en: string) {
  return typeof window !== 'undefined' && document?.documentElement?.lang === 'en' ? en : tr;
}