import Link from 'next/link'
import { ArrowRight, Mail, MessageSquare } from 'lucide-react'

const anchors = [
  { href: '#parts', label: 'Parts' },
  { href: '#colors', label: 'Colors' },
  { href: '#kits', label: 'Kits' },
  { href: '#process', label: 'Process' },
  { href: '#cities', label: 'Cities' },
  { href: '#faq', label: 'FAQ' },
]

/**
 * Page-local chrome for the English mosaic-lamp-supplies landing page.
 * The site-wide header/footer follow the visitor's tr/en locale toggle and
 * default to Turkish; this page is aimed at US workshops, so it carries its
 * own English navigation instead of forcing a locale change on the whole site.
 */
export function MosaicHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-[72px] lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="Çin'den Al Sat — home">
          <img
            src="/cindenalsat-logo.jpg"
            alt="Çin'den Al Sat"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full ring-1 ring-border"
          />
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
            Çin&apos;den Al Sat
          </span>
        </Link>

        <nav aria-label="Page sections" className="hidden items-center gap-7 lg:flex">
          {anchors.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {a.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/905053697425"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            WhatsApp
          </a>
          <a
            href="#sample"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-85 sm:text-sm"
          >
            Sample box
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </header>
  )
}

export function MosaicFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/cindenalsat-logo.jpg"
                alt="Çin'den Al Sat"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full ring-1 ring-border"
              />
              <p className="font-display text-base font-semibold tracking-tight">Çin&apos;den Al Sat</p>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Wholesale mosaic lamp supplies and China sourcing for workshops in the United
              States. Glass cuts, beads, globes, fittings and kit-ready packaging — sourced,
              checked, consolidated and delivered.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="https://wa.me/905053697425" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" aria-hidden />
                  +90 505 369 74 25
                </a>
              </li>
              <li>
                <a href="mailto:china.import.consultancy@gmail.com" className="inline-flex items-start gap-2 hover:underline">
                  <Mail className="mt-0.5 h-4 w-4 flex-none text-muted-foreground" aria-hidden />
                  <span className="break-all">china.import.consultancy@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              The site
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground hover:underline">Home</Link></li>
              <li><Link href="/abd-ithalat" className="text-muted-foreground hover:text-foreground hover:underline">US import guide</Link></li>
              <li><Link href="/onceki-projeler" className="text-muted-foreground hover:text-foreground hover:underline">Past projects</Link></li>
              <li><Link href="/faydali-bilgiler" className="text-muted-foreground hover:text-foreground hover:underline">Useful info</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Çin&apos;den Al Sat — China import consultancy.</p>
          <p>Shenzhen · Zhongshan · Jiangmen · Hangzhou · Ningbo · Zhengzhou</p>
        </div>
      </div>
    </footer>
  )
}
