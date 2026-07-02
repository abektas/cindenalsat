import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'
import { LocaleProvider } from '@/lib/locale-context'
import { AuthProvider } from '@/lib/providers'
import { SiteContentProvider } from '@/lib/site-content-context'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000'
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
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
      </head>
      <body className={`${dmSans.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <LocaleProvider>
              <SiteContentProvider>
                {children}
                <Toaster />
                <ChunkLoadErrorHandler />
              </SiteContentProvider>
            </LocaleProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
