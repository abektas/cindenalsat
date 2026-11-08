import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { MosaicSampleForm } from '@/components/mosaic-sample-form'
import { MosaicHeader, MosaicFooter } from '@/components/mosaic-page-chrome'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cindenalsat.com'
const pagePath = '/mosaic-lamp-supplies'
const ogImage = `${baseUrl}/images/mosaic/og-mosaic-lamp-supplies.jpg`

export const metadata: Metadata = {
  title: 'Wholesale Mosaic Lamp Supplies: Glass Cuts, Beads & Globes',
  description:
    'Wholesale mosaic lamp supplies from factories in Shenzhen, Zhongshan, Jiangmen, Hangzhou, Ningbo and Zhengzhou: 2 mm electroplated glass cuts in twelve colors, 3 mm acrylic beads, 11 cm and 13 cm glass globes, metal fittings and kit-ready packaging. Sourcing, quality control, shipping and door delivery to the United States handled for you.',
  keywords: [
    'mosaic lamp supplies',
    'wholesale mosaic glass',
    'mosaic lamp kit supplies',
    'mosaic glass cuts',
    'turkish mosaic lamp materials',
    'stained glass pieces wholesale',
    'mosaic beads 3mm',
    'glass globe 13cm mosaic',
    'mosaic workshop supplies USA',
    'china mosaic lamp supplier',
    'mosaic lamp kit wholesale',
    'mosaic supplies Zhongshan',
    'mosaic lamp manufacturer China',
  ],
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
    languages: { en: `${baseUrl}${pagePath}` },
  },
  openGraph: {
    title: 'Wholesale Mosaic Lamp Supplies, Delivered Door to Door',
    description:
      'Glass cuts in twelve colors, acrylic beads, globes, fittings and kit-ready packaging for mosaic lamp workshops in the United States. We source, check, consolidate and deliver.',
    url: `${baseUrl}${pagePath}`,
    siteName: "Çin'den Al Sat",
    images: [{ url: ogImage, width: 1200, height: 630, alt: 'Mosaic lamp with glass mosaic shade' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wholesale Mosaic Lamp Supplies, Delivered Door to Door',
    description:
      'Glass cuts, beads, globes, fittings and kit-ready packaging for mosaic lamp workshops. Sourcing and delivery from China to the USA handled end to end.',
    images: [ogImage],
  },
  robots: { index: true, follow: true },
}

const colors = [
  'Emerald green',
  'Sapphire blue',
  'Turquoise blue',
  'Royal purple',
  'Lilac',
  'Pink',
  'Red',
  'Orange',
  'Yellow',
  'White',
  'Mirror',
  'Clear / transparent',
]

const parts = [
  { name: 'Diamond cut', spec: '1.8 cm', note: 'The shape most patterns are built on' },
  { name: 'Square cut', spec: '0.8 cm', note: 'Borders, fill and tight curves' },
  { name: 'Triangle cut', spec: 'various', note: 'Points, petals and star centres' },
  { name: 'Acrylic beads', spec: '3 mm', note: 'Shade edges and hanging trim' },
  { name: 'Glass globes', spec: '11 cm / 13 cm', note: 'Clear and frosted, pre-drilled' },
  { name: 'Metal fittings', spec: 'various', note: 'Holders, bases, crowns, chains' },
  { name: 'Cabochons', spec: 'various', note: 'Raised centre pieces' },
  { name: 'Adhesive & grout', spec: 'various', note: 'Silicone, plaster and finishing' },
]

const service = [
  { step: 'Sourcing', detail: 'We already buy mosaic materials from factories we work with in six Chinese cities. Your items go into the same factory conversations instead of starting from a marketplace listing.' },
  { step: 'Quoting', detail: 'One landed cost per line: goods, packing, freight, duty and our fee, quoted in dollars rather than EXW plus six unknowns.' },
  { step: 'Sampling', detail: 'A sample box with the actual cuts, beads and shade you will receive. Colors and thickness are checked against your cut list before anything is produced.' },
  { step: 'Quality control', detail: 'Pieces counted, colors matched across lots, broken glass weighed and reported with photographs before the cartons are closed.' },
  { step: 'Consolidation', detail: 'Tiles from one factory, globes from another, packing from a third all collected into one shipment, so you pay one freight bill.' },
  { step: 'Documents', detail: 'Commercial invoice, packing list, HS classification support and the paperwork your customs broker asks for, prepared before the vessel sails.' },
  { step: 'Freight', detail: 'Sea LCL for bulk glass, air for restocks that cannot wait, and a tracking sheet that shows where the shipment actually is.' },
  { step: 'Delivery', detail: 'Delivered to your workshop door. If a carton arrives short or broken, we handle the claim with the factory, not you.' },
]

const faqs = [
  {
    q: 'What is the minimum order for mosaic lamp supplies?',
    a: 'A first order can start as small as a sample box plus one cut list, usually a few kilos of each shape and color you use most. Because glass cuts are ordered by color and shape in bulk, it makes sense to combine your first order with a workshop restock so freight is shared across more weight.',
  },
  {
    q: 'How long does delivery to the United States take?',
    a: 'Glass cuts and beads are produced or pulled from stock in about two to three weeks, then sea freight to a US port adds roughly four to five weeks plus customs clearance and inland delivery. Air freight shortens the ocean leg to about a week at a higher cost per kilo. Every quote states the production window and the freight window separately, so you know which one moved if a date slips.',
  },
  {
    q: 'Can the kits be packed under our own brand?',
    a: 'Yes. Boxes, printed step-by-step guides and pattern cards can carry your logo, and the contents can be pre-sorted by color so a workshop participant opens one bag instead of counting forty. Logo files are needed before production, and printed material adds a few days to the schedule.',
  },
  {
    q: 'What glass and beads do you supply?',
    a: 'Glass cuts are 2 mm electroplated glass in twelve named colors, cut as diamond 1.8 cm, square 0.8 cm and triangle pieces. Beads are acrylic, 3 mm thick. Globes are 11 cm and 13 cm clear glass. If you need a different thickness or an unusual shape, that is a factory question we can ask rather than a catalogue limit.',
  },
  {
    q: 'Do you work with workshops that already import from China?',
    a: 'That is most of our customers. Existing suppliers are usually kept for the items that work well. The change is who carries the work: supplier chasing, sample rounds, color matching, broken-glass arguments and freight coordination move from your desk to ours, and you get one landed cost instead of five invoices.',
  },
  {
    q: 'Who is responsible for US customs and duties?',
    a: 'Import duties and customs clearance depend on how your business is set up as an importer, so the arrangement is agreed before the first shipment: either you import on your own bond with our broker coordinating, or the shipment moves on a delivered basis. We confirm the classification and the responsible party in writing in the quote rather than assuming it.',
  },
]

export default function MosaicLampSuppliesPage() {
  return (
    <>
      <MosaicHeader />
      <main className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Wholesale mosaic lamp supplies and China sourcing for US workshops',
              serviceType: 'Wholesale supply of mosaic lamp materials',
              provider: {
                '@type': 'Organization',
                name: "Çin'den Al Sat",
                url: baseUrl,
              },
              areaServed: { '@type': 'Country', name: 'United States' },
              availableChannel: {
                '@type': 'ServiceChannel',
                serviceUrl: `${baseUrl}${pagePath}`,
                serviceLocation: [
                  'Shenzhen',
                  'Zhongshan',
                  'Jiangmen',
                  'Hangzhou',
                  'Ningbo',
                  'Zhengzhou',
                ].map((city) => ({
                  '@type': 'Place',
                  address: { '@type': 'PostalAddress', addressLocality: city, addressCountry: 'CN' },
                })),
              },
              audience: {
                '@type': 'BusinessAudience',
                audienceType: 'Mosaic lamp workshops, DIY kit brands, craft studios',
              },
              description:
                'Supply of 2 mm electroplated glass cuts in twelve colors, 3 mm acrylic beads, 11 cm and 13 cm glass globes, metal fittings and kit-ready packaging to mosaic lamp workshops in the United States, including sourcing, sampling, quality control, consolidation and door delivery.',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Mosaic lamp consumables',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Diamond glass cuts 1.8 cm' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Square glass cuts 0.8 cm' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Triangle glass cuts' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Acrylic beads 3 mm' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Glass globes 11 cm and 13 cm' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Mosaic lamp kit packaging' } },
                ],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
                { '@type': 'ListItem', position: 2, name: 'Mosaic Lamp Supplies', item: `${baseUrl}${pagePath}` },
              ],
            },
          ]),
        }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-10 pb-12 pt-14 lg:grid-cols-12 lg:gap-16 lg:pb-16 lg:pt-20">
            <div className="lg:col-span-5 lg:pb-24">
              <h1 className="font-display text-[2.6rem] leading-[1.03] tracking-tight sm:text-6xl lg:text-[4.2rem]">
                Mosaic lamp supplies,
                <br />
                delivered door to door.
              </h1>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
                We keep mosaic lamp workshops and DIY kit brands in the United States supplied
                with 2 mm glass cuts in twelve colors, 3 mm acrylic beads, 11 and 13 cm globes,
                fittings and kit-ready packaging. Bought from factories we work with in six
                Chinese cities, checked before they leave, delivered to your door.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link
                  href="#sample"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
                >
                  Request a sample box
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#parts"
                  className="inline-flex items-center gap-1.5 text-sm font-medium underline decoration-border decoration-1 underline-offset-4 transition-colors hover:decoration-foreground"
                >
                  See what we stock
                </a>
              </div>
              <p className="mt-10 border-t border-border pt-5 text-sm text-muted-foreground">
                Currently supplying mosaic lamp workshops and DIY kit brands across the United
                States. References available on request.
              </p>
            </div>

            <div className="relative lg:col-span-7">
              <div className="relative -mr-5 overflow-hidden sm:-mr-8 lg:-mr-12">
                <img
                  src="/images/mosaic/hero-lamp.webp"
                  alt="Handmade Turkish mosaic table lamp with an electroplated glass shade"
                  width={1200}
                  height={1500}
                  className="aspect-[4/5] w-full object-cover object-center"
                  fetchPriority="high"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/70 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* material ribbon */}
        <div className="border-t border-border bg-card p-2">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-border border-x border-border sm:grid-cols-4">
            {[
              { img: '/images/mosaic/mat-diamond.webp', label: 'Diamond cut', value: '1.8 cm' },
              { img: '/images/mosaic/mat-square.webp', label: 'Square cut', value: '0.8 cm' },
              { img: '/images/mosaic/mat-beads.webp', label: 'Acrylic beads', value: '3 mm' },
              { img: '/images/mosaic/mat-globe.webp', label: 'Glass globes', value: '11 / 13 cm' },
            ].map((m) => (
              <div key={m.label} className="group flex items-center gap-3 p-4 sm:p-5">
                <div className="relative h-14 w-14 flex-none overflow-hidden rounded-sm bg-muted">
                  <img
                    src={m.img}
                    alt={m.label}
                    width={56}
                    height={56}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{m.label}</p>
                  <p className="font-mono text-xs text-muted-foreground">{m.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Answer-first (GEO) ───────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground lg:col-span-3">
              In short
            </p>
            <p className="max-w-3xl text-xl leading-relaxed text-foreground/90 lg:col-span-9 lg:text-[1.4rem]">
              We supply mosaic lamp workshops in the United States with the consumables they
              reorder every month: cut glass tiles, acrylic beads, glass globes, metal
              fittings and packing materials. We buy directly from the manufacturers, check
              the goods before they leave, consolidate several suppliers into one shipment,
              and deliver to your workshop with the customs paperwork prepared. You keep
              running workshops; we carry the sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* ── Parts & sizes ────────────────────────────────────────────────── */}
      <section id="parts" className="scroll-mt-24 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                  The parts, in the sizes you actually order.
                </h2>
                <p className="mt-6 max-w-md text-muted-foreground">
                  No &ldquo;assorted&rdquo; bags and no surprise substitutions. Every line below
                  is a fixed specification we buy against, so a restock in March matches the
                  lot you received in November.
                </p>
                <div className="mt-8 overflow-hidden rounded-lg border border-border">
                  <img
                    src="/images/mosaic/mat-cut-sizes.webp"
                    alt="Diagram of mosaic glass cut shapes and their relative sizes"
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <dl className="divide-y divide-border border-y border-border">
                {parts.map((p, i) => (
                  <div
                    key={p.name}
                    className="group grid grid-cols-1 gap-y-1 py-5 transition-colors hover:bg-muted/40 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-x-6"
                  >
                    <dt className="font-display text-xl tracking-tight sm:text-2xl">{p.name}</dt>
                    <dd className="font-mono text-xs text-muted-foreground sm:text-right sm:text-sm">
                      {p.spec}
                    </dd>
                    <dd className="text-sm text-muted-foreground sm:col-start-1">
                      {p.note}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { v: '2 mm', l: 'Electroplated glass thickness' },
                  { v: '3 mm', l: 'Acrylic bead thickness' },
                  { v: '12', l: 'Named colors, held stable across lots' },
                ].map((s) => (
                  <div key={s.l} className="border-t border-border pt-4">
                    <p className="font-display text-3xl tracking-tight">{s.v}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Colors ───────────────────────────────────────────────────────── */}
      <section id="colors" className="scroll-mt-20 border-b border-border bg-muted/40">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                Twelve colors. Not &ldquo;assorted&rdquo;.
              </h2>
              <p className="mt-6 max-w-sm text-muted-foreground">
                Every color has a name, a code and a sample we keep. When a workshop asks for
                the same sapphire blue it had last season, the answer is a lot number, not a
                guess.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-md border border-border">
                  <img
                    src="/images/mosaic/mat-glass-cuts.webp"
                    alt="Cut glass mosaic pieces in warm color tones"
                    width={810}
                    height={1440}
                    loading="lazy"
                    className="h-40 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-md border border-border">
                  <img
                    src="/images/mosaic/tile-painted.webp"
                    alt="Painted glass mosaic tiles in red and orange tones"
                    width={456}
                    height={419}
                    loading="lazy"
                    className="h-40 w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <ol className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
                {colors.map((c, i) => (
                  <li
                    key={c}
                    className="border-b border-border py-4 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
                  >
                    <span className="font-display text-xl tracking-tight sm:text-2xl">{c}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm text-muted-foreground">
                Mirror and clear behave differently under an adhesive. Mention both in the cut
                list and we will flag which ones need a different backing before production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Kits ─────────────────────────────────────────────────────────── */}
      <section id="kits" className="scroll-mt-20 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg border border-border">
                  <img
                    src="/images/mosaic/kit-boxed.webp"
                    alt="Packaged mosaic lamp kit box"
                    width={678}
                    height={680}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg border border-border">
                  <img
                    src="/images/mosaic/kit-contents.webp"
                    alt="Contents of a mosaic lamp kit spread out: glass pieces, beads, globe and tools"
                    width={1200}
                    height={1226}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg border border-border">
                  <img
                    src="/images/mosaic/patterns.webp"
                    alt="Printed mosaic pattern templates"
                    width={1000}
                    height={720}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg border border-border">
                  <img
                    src="/images/mosaic/pack-tiles.webp"
                    alt="Packed glass mosaic pieces prepared for export"
                    width={800}
                    height={1067}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-5">
              <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                Kit-ready, not bulk-dumped.
              </h2>
              <p className="mt-6 text-muted-foreground">
                Counting pieces into forty bags is the job that eats a workshop weekend. We do
                it at the factory, before the box is sealed.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Contents pre-sorted by color and shape, one bag per participant',
                  'Printed step-by-step guide with your logo and your language',
                  'Pattern cards and templates included in the box',
                  'Globe, fittings and adhesive packed separately so glass does not travel against metal',
                  'Outer carton marked with your SKU and barcode',
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-accent" aria-hidden />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-border pt-5 text-sm text-muted-foreground">
                Private-label boxes and guides are produced from your print-ready files. Artwork
                adds a few days to the production window, so it is agreed before the order is
                placed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service / the work we carry ───────────────────────────────────── */}
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              The part you don&rsquo;t want to do.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Most workshops we talk to already import. What they do not have is somebody in
              China who answers on the same day, counts what was loaded, and is still there when
              a carton arrives short. That is the job we take over.
            </p>
          </div>

          <div className="mt-14 grid gap-x-16 gap-y-0 sm:grid-cols-2">
            {service.map((s, i) => (
              <div
                key={s.step}
                className="group border-t border-border py-6 transition-colors hover:bg-background/60"
              >
                <h3 className="font-display text-lg tracking-tight">{s.step}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process footage ──────────────────────────────────────────────── */}
      <section id="process" className="scroll-mt-20 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                From the manufacturer to your door.
              </h2>
              <p className="mt-6 text-muted-foreground">
                This is footage we collect on factory visits, not a stock reel. Cutting,
                sorting, gluing and packing, filmed at the plant where your order is actually
                made, before we consolidate it and ship it to you.
              </p>
              <ol className="mt-10 space-y-5">
                {[
                  ['Cut', 'Glass is scored and snapped into the three shapes, then weighed by color.'],
                  ['Sort', 'Bags are filled to the piece count on your cut list, not by eye.'],
                  ['Check', 'A sample from each lot is laid against the previous one under daylight.'],
                  ['Pack', 'Globes wrapped separately, cartons strapped, marks printed for the forwarder.'],
                ].map(([t, d], i) => (
                  <li key={t} className="border-t border-border pt-4">
                    <p className="font-display text-base">{t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <figure className="relative overflow-hidden rounded-lg border border-border bg-muted">
                  <video
                    className="h-full w-full object-cover"
                    src="/videos/mosaic-workshop.mp4"
                    poster="/videos/mosaic-workshop-poster.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Footage of mosaic lamp materials being assembled and packed"
                  />
                  <figcaption className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-foreground/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-background backdrop-blur-sm">
                    Assembly &amp; packing
                  </figcaption>
                </figure>
                <figure className="relative overflow-hidden rounded-lg border border-border bg-muted">
                  <video
                    className="h-full w-full object-cover"
                    src="/videos/mosaic-cuts.mp4"
                    poster="/videos/mosaic-cuts-poster.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Footage of glass being cut into mosaic pieces"
                  />
                  <figcaption className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-foreground/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-background backdrop-blur-sm">
                    Cutting &amp; sorting
                  </figcaption>
                </figure>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="overflow-hidden rounded-md border border-border bg-muted/60">
                  <img src="/images/mosaic/pack-lamp-1.webp" alt="Cartons of mosaic lamp shades ready for export" width={800} height={1067} loading="lazy" className="aspect-[4/3] w-full object-contain" />
                </div>
                <div className="overflow-hidden rounded-md border border-border bg-muted/60">
                  <img src="/images/mosaic/mat-metal-pack.webp" alt="Metal lamp fittings packed for shipping" width={1200} height={674} loading="lazy" className="aspect-[4/3] w-full object-contain" />
                </div>
                <div className="overflow-hidden rounded-md border border-border bg-muted/60">
                  <img src="/images/mosaic/pack-lamp-3.webp" alt="Packed mosaic lamp components in a warehouse" width={900} height={674} loading="lazy" className="aspect-[4/3] w-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── Where the work happens ───────────────────────────────────────── */}
      <section id="cities" className="scroll-mt-20 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                Six cities, one supply chain.
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                Our supplier factories are spread across six cities in China. Glass comes from
                one, lamp bodies and metal fittings from another, packing from a third. We are
                the only party talking to all of them at once, which is why your order arrives
                as one shipment and one invoice instead of five.
              </p>
              <p className="mt-6 max-w-md text-sm text-muted-foreground">
                Which factory makes which line, and what it quotes, is shared once we are
                working together. On this page we can only name cities.
              </p>
              <div className="mt-10 overflow-hidden rounded-lg border border-border bg-muted/40">
                <img
                  src="/images/mosaic/factory-original.webp"
                  alt="Factory floor where mosaic lamp parts are produced and packed"
                  width={1400}
                  height={761}
                  loading="lazy"
                  className="w-full"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
                <div>
                  <p className="border-b border-border pb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Pearl River Delta
                  </p>
                  <ul className="mt-4 space-y-4">
                    {['Shenzhen', 'Zhongshan', 'Jiangmen'].map((city) => (
                      <li key={city} className="font-display text-2xl tracking-tight sm:text-3xl">
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="border-b border-border pb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Yangtze Delta &amp; inland
                  </p>
                  <ul className="mt-4 space-y-4">
                    {['Hangzhou', 'Ningbo', 'Zhengzhou'].map((city) => (
                      <li key={city} className="font-display text-2xl tracking-tight sm:text-3xl">
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  ['6', 'cities with supplier factories'],
                  ['1', 'consolidated shipment'],
                  ['1', 'landed price per line'],
                ].map(([v, l]) => (
                  <div key={l}>
                    <p className="font-display text-3xl tracking-tight sm:text-4xl">{v}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sample CTA + form ────────────────────────────────────────────── */}
      <section id="sample" className="scroll-mt-20 border-b border-border bg-muted/40">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                Ask for a sample box.
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                Send the cut list you work from: the shapes, colors and piece counts. You get a
                box with the actual glass, beads and globe, plus one landed price per line, so
                you can compare against what you pay today.
              </p>
              <div className="mt-10 space-y-6 border-t border-border pt-6 text-sm">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">WhatsApp</p>
                  <a href="https://wa.me/905053697425" className="mt-1 block text-base hover:underline" target="_blank" rel="noopener noreferrer">
                    +90 505 369 74 25
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Email</p>
                  <a href="mailto:china.import.consultancy@gmail.com" className="mt-1 block text-base break-all hover:underline">
                    china.import.consultancy@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">In China</p>
                  <p className="mt-1 text-base">Shenzhen · Zhongshan · Jiangmen</p>
                  <p className="text-base">Hangzhou · Ningbo · Zhengzhou</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <MosaicSampleForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="scroll-mt-20 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                What workshops ask first.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <dl className="divide-y divide-border border-y border-border">
                {faqs.map((f) => (
                  <div key={f.q} className="py-7">
                    <dt className="font-display text-lg tracking-tight sm:text-xl">{f.q}</dt>
                    <dd className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {f.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing ──────────────────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <p className="max-w-xl font-display text-2xl leading-snug tracking-tight sm:text-3xl">
              Keep the workshops. Hand us the cartons, the counting and the arguments with
              factories.
            </p>
            <div className="flex flex-none flex-wrap gap-x-8 gap-y-4">
              <Link href="#sample" className="group inline-flex items-center gap-2 text-sm font-medium underline decoration-border underline-offset-4 hover:decoration-foreground">
                Request a sample box
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a href="https://wa.me/905053697425" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium underline decoration-border underline-offset-4 hover:decoration-foreground">
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      </main>
      <MosaicFooter />
    </>
  )
}
