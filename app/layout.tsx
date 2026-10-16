import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'
import { LocaleProvider } from '@/lib/locale-context'
import { SiteContentProvider } from '@/lib/site-content-context'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cindenalsat.com'
const contactPhone = '+905053697425'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: 'Çin\'den Al Sat - Çin İthalat Danışmanlığı | China Import Consultancy',
      template: '%s | Çin\'den Al Sat',
    },
    description: 'Çin\'den ürün tedariği, kalite kontrol, lojistik ve gümrükleme süreçlerinde profesyonel danışmanlık hizmeti. Professional China import consultancy services.',
    keywords: ['çin ithalat', 'china import', 'ithalat danışmanlığı', 'import consultancy', 'ürün tedariği', 'product sourcing', 'kalite kontrol', 'quality control', 'lojistik', 'gümrükleme'],
    authors: [{ name: 'Çin\'den Al Sat' }],
    openGraph: {
      title: 'Çin\'den Al Sat - Çin İthalat Danışmanlığı',
      description: 'Güvenilir, hızlı ve şeffaf Çin ithalat danışmanlığı hizmeti.',
      images: ['/og-image.png'],
      type: 'website',
    },
    icons: {
      icon: [{ url: '/favicon.ico', sizes: 'any' }],
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
    },
    twitter: {
      card: 'summary_large_image',
      title: "Çin'den Al Sat - Çin İthalat Danışmanlığı",
      description: 'Güvenilir, hızlı ve şeffaf Çin ithalat danışmanlığı hizmeti.',
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: baseUrl,
      languages: {
        'tr': baseUrl,
        'en': `${baseUrl}/en`,
      },
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: "Çin'den nasıl ürün ithal edebilirim?",
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Çin'den ürün ithal etmek için önce güvenilir tedarikçiler bulunur, numuneler talep edilir, kalite kontrol yapılır, sözleşme imzalanır ve lojistik/gümrük süreçleri yönetilir. Çin'den Al Sat bu sürecin her adımında danışmanlık sunar.",
                  },
                },
                {
                  '@type': 'Question',
                  name: "Alibaba'dan toptan alım nasıl yapılır?",
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Alibaba üzerinden tedarikçilerle iletişime geçilir, fiyat müzakeresi yapılır, örnek ürün talep edilir ve toplu sipariş verilir. En düşük fabrika çıkış fiyatını almak için doğrudan üreticilerle çalışmak önemlidir.",
                  },
                },
                {
                  '@type': 'Question',
                  name: "ABD'ye ithalat vergileri nedir?",
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "ABD'ye ithalatta gümrük vergisi, ISF (Importer Security Filing) ücreti ve eyalet bazlı ek vergiler uygulanabilir. Ürün kategorisine göre vergi oranları değişir.",
                  },
                },
                {
                  '@type': 'Question',
                  name: "Özel marka (private label) nedir?",
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Özel marka, Çin'deki üreticilerin ürettiği ürünlere kendi markanızı uygulayarak ABD pazarında satış yapmanızı sağlayan bir modeldir. Daha yüksek kar marjı ve marka değeri oluşturur.",
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: "Çin'den Al Sat",
              alternateName: 'China Import Consultancy',
              url: baseUrl,
              logo: `${baseUrl}/cindenalsat-logo.jpg`,
              description:
                "Çin'den ABD'ye ithalat danışmanlığı. Ürün tedariği, kalite kontrol, gümrükleme ve lojistik hizmetleri. ABD'deki Türk girişimcilere özel.",
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: contactPhone,
                contactType: 'customer service',
                availableLanguage: ['Turkish', 'English'],
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'TR',
              },
              areaServed: ['US', 'TR'],
              knowsLanguage: ['Turkish', 'English'],
              sameAs: [
                'https://www.facebook.com/678806195312322',
                'https://www.instagram.com/cindenal_ithalat/',
                'https://www.youtube.com/channel/UCiXofJ92GDpJf06qM5gEI6g',
                'https://x.com/CindenAlSat',
                'https://www.pinterest.com/chinaimportconsultancy',
              ],
            }),
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>
            <SiteContentProvider>
              {children}
              <Toaster />
              <ChunkLoadErrorHandler />
            </SiteContentProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
