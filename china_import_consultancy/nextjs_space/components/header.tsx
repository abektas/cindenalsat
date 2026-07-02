'use client';

import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/locale-context';
import { Globe, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
{ key: 'home', href: '/#hero' },
{ key: 'services', href: '/#services' },
{ key: 'plywood', href: '/kavak-kontraplak' },
{ key: 'viral', href: '/viral-urunler' },
{ key: 'previous', href: '/onceki-projeler' },
{ key: 'alibaba', href: '/alibaba-trend-urunler' },
{ key: 'blog', href: '/faydali-bilgiler' },
{ key: 'contact', href: '/#contact' }] as
const;

export function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLocale(locale === 'tr' ? 'en' : 'tr');

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ?
        'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-md header-scrolled' :
        'bg-gradient-to-b from-black/80 via-black/50 to-black/20 header-top'
      )}>
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Çin'den Al Sat Logo" className="h-10 sm:h-12 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems?.map?.((item: any) =>
            <a
              key={item?.key}
              href={item?.href}
              className={cn('px-4 py-2 text-sm font-medium rounded-lg transition-colors', scrolled ? 'hover:bg-primary/10 hover:text-primary text-foreground' : 'text-white hover:bg-white/15 drop-shadow-sm')}>
              
                {(t?.nav as any)?.[item?.key] ?? item?.key}
              </a>
            ) ?? []}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLang}
              className={cn('gap-1.5', !scrolled && 'text-white hover:bg-white/15 hover:text-white')}>
              
              <Globe className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase">{locale === 'tr' ? 'EN' : 'TR'}</span>
            </Button>

            <a href="tel:+905053697425" className="hidden sm:flex">
              <Button variant="outline" size="sm" className={cn('gap-1.5 bg-sky-700', !scrolled && 'border-white/40 text-white hover:bg-white/15 hover:text-white')}>
                <Phone className="w-3.5 h-3.5" />
                <span className="text-xs">+90 505 369 74 25</span>
              </Button>
            </a>

            <a href="/#contact" className="hidden sm:block">
              <Button size="sm" className="bg-gradient-to-r from-blue-500 to-teal-400 text-white border-0 shadow-md hover:shadow-lg">
                {t?.hero?.cta ?? 'Contact'}
              </Button>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn('lg:hidden p-2 rounded-lg', scrolled ? 'hover:bg-muted' : 'text-white hover:bg-white/15')}
              aria-label="Menu">
              
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t">
          
            <nav className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems?.map?.((item: any) =>
            <a
              key={item?.key}
              href={item?.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-colors">
              
                  {(t?.nav as any)?.[item?.key] ?? item?.key}
                </a>
            ) ?? []}
              <a href="/#contact" onClick={() => setMobileOpen(false)}>
                <Button className="w-full mt-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white border-0">
                  {t?.hero?.cta ?? 'Contact'}
                </Button>
              </a>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}