# Çin'den Al Sat - Proje Dokümantasyonu

## 📋 Genel Bakış

**Proje Adı:** Çin'den Al Sat İthalat Danışmanlığı Platformu  
**Repo:** https://github.com/abektas/cindenalsat  
**Ana Dizini:** `china_import_consultancy/nextjs_space/`  
**Tarih:** 2026-07-03  
**Durum:** Production Ready

---

## 🎯 İş Amacı

Türk girişimcilere Çin'den ithalat süreçlerinde profesyonel danışmanlık hizmeti sunan, çok dilli (TR/EN) web platformu. Şirket yurt dışında yaşayan Türk müşterilere yönelik Çin tedarikçileri ile güvenilir iş bağlantıları kurmalarını sağlıyor.

---

## 🏢 Şirket Bilgileri

| Özellik | Değer |
|---------|-------|
| **Şirket Adı** | Çin'den Al Sat İthalat Danışmanlığı |
| **Telefon/WhatsApp** | +90 505 369 74 25 |
| **Email** | china.import.consultancy@gmail.com |
| **Website** | cindenalsat.com |
| **Hizmet Bölgeleri** | Türkiye, Avrupa, ABD, UK, Dubai |

---

## 🛠️ Teknik Yığın (Tech Stack)

### Backend
- **Framework**: Next.js 14.2.x (App Router, Server Components)
- **Language**: TypeScript 5.x (strict mode)
- **Database**: PostgreSQL 14+
- **ORM**: Prisma 6.x
- **Auth**: NextAuth.js v4.24.14 (Credentials provider)
- **API**: RESTful API design

### Frontend
- **UI Framework**: React 18.2.x
- **Styling**: Tailwind CSS 3.x
- **UI Library**: Shadcn/ui (90+ components)
- **Animations**: Framer Motion 10.x
- **Forms**: React Hook Form 7.x + Zod validation
- **Icons**: Lucide React 0.446.x

### DevOps & Infrastructure
- **Deployment**: Railway / Vercel (hosteddb.reai.io)
- **Cloud Storage**: AWS S3 (via Abacus AI)
- **Email Notifications**: Abacus AI Notification API
- **Build Tool**: Next.js Built-in Build System

---

## 📐 Mimari Yapı

### Design Patterns

1. **Server-Client Component Architecture**
   - Server Components (default): Data fetching, SEO, performance
   - Client Components (`'use client'`): Interactivity, browser APIs

2. **Repository Pattern** (Prisma abstraction layer)
   - `lib/db.ts`: Database singleton
   - `lib/prisma.ts`: Global Prisma instance

3. **Context-based i18n**
   - `lib/locale-context.tsx`: Language context provider
   - `lib/i18n.ts`: Translation dictionary (TR/EN)

4. **Public vs Admin API Separation**
   - `/api/public/*`: Unauthenticated read endpoints
   - `/api/admin/*`: Authenticated write operations

---

## 🗂️ Dosya Yapısı ve Sorumluluklar

```
nextjs_space/
├── app/                          # App Router pages & API routes
│   ├── api/                      # API endpoint handlers
│   │   ├── admin/                # Admin-only operations
│   │   │   ├── blog/route.ts     # Blog CRUD
│   │   │   ├── products/route.ts # Product CRUD
│   │   │   ├── services/route.ts # Service CRUD
│   │   │   ├── testimonials/route.ts # Testimonial CRUD
│   │   │   ├── site-content/route.ts # Site content management
│   │   │   └── upload/route.ts   # File upload to S3
│   │   ├── auth/[...nextauth]/route.ts # NextAuth handler
│   │   ├── contact/route.ts      # Contact form submission
│   │   ├── public/               # Public read endpoints
│   │   └── signup/route.ts       # User registration
│   │
│   ├── admin/                    # Admin panel pages
│   │   ├── layout.tsx            # Admin layout wrapper
│   │   ├── page.tsx              # Dashboard
│   │   ├── blog/                 # Blog management
│   │   ├── products/             # Product management
│   │   ├── services/             # Service management
│   │   ├── testimonials/         # Testimonial management
│   │   ├── site-content/         # Site configuration
│   │   └── login/                # Login page
│   │
│   ├── faydali-bilgiler/         # Blog section
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/page.tsx       # Blog detail
│   │
│   ├── kavak-kontraplak/         # Plywood product page
│   ├── viral-urunler/            # Viral products showcase
│   ├── onceki-projeler/          # Past projects
│   ├── alibaba-trend-urunler/    # Alibaba trends
│   ├── globals.css               # Global styles & theme
│   ├── layout.tsx                # Root layout (providers)
│   ├── page.tsx                  # Homepage entry point
│   ├── robots.ts                 # SEO: robots.txt
│   └── sitemap.ts                # SEO: sitemap.xml
│
├── components/                   # React UI components
│   ├── layouts/                  # Layout wrappers
│   │   ├── app-shell.tsx         # Dashboard shell (sidebar + header)
│   │   ├── auth-layout.tsx       # Login/signup centered layout
│   │   ├── container.tsx         # Responsive container
│   │   ├── page-header.tsx       # Page title component
│   │   └── section.tsx           # Section wrapper with spacing
│   │
│   ├── ui/                       # Shadcn/ui primitives (90+)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── dialog.tsx
│   │   ├── table.tsx
│   │   ├── form.tsx              # react-hook-form integration
│   │   ├── toast.tsx             # Sonner notifications
│   │   └── ... (70+ more)
│   │
│   ├── hero-section.tsx          # Homepage hero slider
│   ├── services-section.tsx      # Services grid
│   ├── testimonials-section.tsx  # Customer reviews
│   ├── about-section.tsx         # About company
│   ├── contact-section.tsx       # Contact form
│   ├── footer.tsx                # Footer with social links
│   ├── header.tsx                # Sticky header with lang switch
│   ├── product-showcase-client.tsx # Shared product grid
│   └── kavak-kontraplak-client.tsx # Plywood sales page
│
├── lib/                          # Utilities & helpers
│   ├── auth.ts                   # NextAuth configuration
│   ├── db.ts                     # Database connection singleton
│   ├── prisma.ts                 # Prisma client instance
│   ├── utils.ts                  # cn() helper, utility functions
│   ├── i18n.ts                   # TR/EN translation dictionary
│   ├── locale-context.tsx        # i18n Context provider
│   ├── site-content-context.tsx  # Site content context
│   ├── types.ts                  # Shared TypeScript types
│   ├── images.ts                 # Image CDN URLs
│   ├── blog-data.ts              # Static blog data (fallback)
│   ├── s3.ts                     # AWS S3 upload helper
│   ├── aws-config.ts             # AWS configuration
│   └── providers.tsx             # Custom providers
│
├── prisma/
│   ├── schema.prisma             # Database schema definition
│   └── migrations/               # DB migration files
│
├── scripts/
│   ├── seed.ts                   # Database seeding script
│   └── safe-seed.ts              # Safe seed runner
│
├── public/                       # Static assets
│   ├── hero-slides/              # Hero slider images (5 slides)
│   ├── logo.png                  # Company logo
│   └── og-image.png              # Open Graph image
│
├── types/
│   └── next-auth.d.ts            # NextAuth type extensions
│
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript config
├── tailwind.config.ts            # Tailwind configuration
├── postcss.config.js             # PostCSS config
├── next.config.js                # Next.js configuration
└── .env                          # Environment variables (gitignored)
```

---

## 🗄️ Database Schema

### Models & Fields

#### 1. User (Admin Users)
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String   // bcrypt hash
  name      String?
  role      String   @default("admin")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

#### 2. ContactSubmission (Contact Form Submissions)
```prisma
model ContactSubmission {
  id        String   @id @default(cuid())
  name      String
  email     String
  phone     String?
  company   String?
  subject   String
  message   String
  locale    String   @default("tr")
  status    String   @default("new")  // new, read, replied, archived
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([createdAt])
  @@index([status])
}
```

#### 3. BlogPost (Bilingual Blog Articles)
```prisma
model BlogPost {
  id          String   @id @default(cuid())
  slug        String   @unique       // URL-friendly identifier
  categoryKey String       // e.g., "cin-fuarlari", "tedarikci-bulma"
  date        DateTime
  image       String
  imageIsPublic Boolean @default(true)
  titleTr     String       // Turkish title
  titleEn     String       // English title
  excerptTr   String       // Turkish excerpt (summary)
  excerptEn   String       // English excerpt
  contentTr   String       // Turkish full content (markdown)
  contentEn   String       // English full content
  published   Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([categoryKey])
  @@index([published])
  @@index([slug])
}
```

#### 4. Service (Service Cards)
```prisma
model Service {
  id          String   @id @default(cuid())
  key         String   @unique     // e.g., "sourcing", "quality"
  icon        String   @default("Package")  // Lucide icon name
  image       String
  imageIsPublic Boolean @default(true)
  titleTr     String
  titleEn     String
  descTr      String
  descEn      String
  sortOrder   Int      @default(0)   // For ordering in UI
  published   Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([sortOrder])
}
```

#### 5. Product (Product Showcase Items)
```prisma
model Product {
  id          String   @id @default(cuid())
  category    String   // "viral", "previous", "alibaba"
  titleTr     String
  titleEn     String
  descTr      String   @default("")
  descEn      String   @default("")
  image       String
  imageIsPublic Boolean @default(true)
  priceTr     String   @default("")  // e.g., "₺50 - ₺120"
  priceEn     String   @default("")  // e.g., "$5 - $12"
  link        String   @default("")  // External link (optional)
  sortOrder   Int      @default(0)
  published   Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([category])
  @@index([published])
  @@index([sortOrder])
}
```

#### 6. Testimonial (Customer Reviews)
```prisma
model Testimonial {
  id        String   @id @default(cuid())
  name      String
  company   String   @default("")
  role      String   @default("")
  avatar    String   @default("")  // Optional avatar image URL
  textTr    String
  textEn    String
  rating    Int      @default(5)   // 1-5 stars
  sortOrder Int      @default(0)
  published Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([published])
  @@index([sortOrder])
}
```

#### 7. SiteContent (Static Site Configuration)
```prisma
model SiteContent {
  id    String @id @default(cuid())
  key   String @unique  // e.g., "hero_image", "team_image", "logo_url"
  value String         // Image URL or config value
  updatedAt DateTime @updatedAt
  
  @@index([key])
}
```

---

## 🌐 Internationalization (i18n)

### Structure
- **Primary Language**: Turkish (TR) - Default
- **Secondary Language**: English (EN)
- **Switching Mechanism**: React Context Provider (`lib/locale-context.tsx`)
- **Storage**: URL parameter or localStorage (persists across sessions)

### Translation Keys Dictionary (`lib/i18n.ts`)
```typescript
translations = {
  tr: {
    nav: { home, services, blog, plywood, viral, previous, alibaba, contact },
    hero: { title, subtitle, description, cta, cta2 },
    services: { title, subtitle, sourcing, quality, logistics, customs, ecommerce, consulting },
    process: { title, subtitle, steps[] },
    about: { title, subtitle, description, stats },
    contact: { title, form: { name, email, submit, success }, info },
    footer: { rights, description },
    cta: { title, description, button }
  },
  en: { /* same structure */ }
}
```

---

## 🔐 Authentication & Authorization

### Flow
1. User visits `/admin/login`
2. Enters credentials (email/password)
3. `POST /api/auth/signin` calls NextAuth handler
4. Credentials verified against database via Prisma
5. JWT token created with user role
6. Token stored in httpOnly cookie
7. Redirected to `/admin` dashboard

### Role-Based Access Control
```typescript
// Middleware pattern for protected routes
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  
  // Optional: Check specific role
  if ((session.user as any).role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  
  // Proceed with operation...
}
```

---

## 📧 Email Notifications (Abacus AI)

### Integration
- **Provider**: Abacus AI Notification API
- **Configuration**: Environment variables (`NOTIF_ID_*`)
- **Use Cases**: 
  - Contact form submissions → Email alert to admin
  - Plywood order forms → Sales team notification

### Configuration
```env
NOTIF_ID_CONTACT_FORM_SUBMISSION=10a0e8cbbf
NOTIF_ID_KAVAK_KONTRAPLAK_SIPARI_FORMU=3ee57fcc4
ABACUSAI_API_KEY=s2_63f289ee4a3f4677a2ed2d3dfa1c53f3
```

---

## ☁️ Cloud Storage (AWS S3)

### Configuration
```env
AWS_PROFILE=hosted_storage
AWS_REGION=us-west-2
AWS_BUCKET_NAME=abacusai-apps-11ac78167954958a399dccdc-us-west-2
AWS_FOLDER_PREFIX=47067/
```

### Upload Flow
1. Admin uploads image via `/components/image-upload.tsx`
2. Client calls `POST /api/admin/upload`
3. Server uses `@aws-sdk/s3-request-presigner` to generate pre-signed URL
4. Client uploads file directly to S3
5. URL stored in database (`SiteContent`, `BlogPost.image`, etc.)

---

## 🎨 Design System

### Color Palette
| Token | HSL Value | Usage |
|-------|-----------|-------|
| **Primary** | `hsl(210 76% 52%)` | Main buttons, links, accents |
| **Accent** | `hsl(174 60% 51%)` | Success states, highlights |
| **Secondary** | `hsl(340 65% 60%)` | Secondary actions, gradients |
| **Background** | `hsl(0 0% 100%)` | Page background |
| **Foreground** | `hsl(222 84% 5%)` | Text color |

### Typography
| Element | Font Family | Tailwind Class |
|---------|-------------|----------------|
| Body | DM Sans | `font-sans` |
| Headings | Plus Jakarta Sans | `font-display` |
| Code/Mono | JetBrains Mono | `font-mono` |

### Spacing Scale
Based on 8px grid using Tailwind's scale:
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px
- `3xl`: 64px

---

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] Verify `.env` has all required variables
- [ ] Run `npx prisma migrate deploy` (production DB)
- [ ] Run `npm run build` successfully
- [ ] Test all API endpoints (public + admin)
- [ ] Verify email notifications working
- [ ] Check S3 uploads working
- [ ] Test both TR/EN language modes
- [ ] SEO: robots.txt and sitemap.xml accessible

### Recommended Hosting
1. **Frontend**: Vercel (optimized for Next.js)
2. **Database**: Railway (hosteddb.reai.io) or Supabase
3. **S3**: AWS S3 via Abacus AI

---

## 📊 Analytics & Monitoring

### Current Setup
- None configured (basic setup)

### Recommendations
1. **Google Analytics 4**: Track user behavior, conversions
2. **Vercel Analytics**: Built-in performance metrics
3. **Sentry**: Error tracking & exception reporting
4. **PostHog**: Product analytics & feature flags

---

## 🔒 Security Best Practices Implemented

✅ Input validation with Zod schemas  
✅ SQL injection prevention (Prisma parameterized queries)  
✅ XSS protection (React automatic escaping)  
✅ Password hashing with bcrypt (cost factor 12)  
✅ JWT tokens in httpOnly cookies (no localStorage)  
✅ CSRF protection on form submissions  
✅ Rate limiting on sensitive endpoints (via middleware)  
✅ Environment variables for secrets (never committed)  
✅ CORS policy configured for API routes  
✅ Content Security Policy headers  

---

## 🧪 Testing Strategy

### Current State
- Manual testing only
- No automated test suite

### Recommendations
1. **Unit Tests**: Vitest + Testing Library
2. **Integration Tests**: Playwright (E2E)
3. **API Tests**: Jest + Supertest
4. **CI/CD**: GitHub Actions for automated testing

---

## 📝 Maintenance & Updates

### Regular Tasks
- **Weekly**: Check npm dependencies for security updates
- **Monthly**: Review database logs for errors
- **Quarterly**: Update third-party dependencies
- **Annually**: Security audit + penetration testing

### Backup Strategy
- Daily database backups (Railway managed)
- Weekly S3 bucket versioning enabled
- Monthly full deployment snapshot

---

## 🤝 Contributing

Bu proje özel amaçlı geliştirilmiş ve kapalı kaynak olarak korunmaktadır. Dış katkılar kabul edilmez.

İletişim: china.import.consultancy@gmail.com

---

**Son Güncelleme**: 2026-07-03  
**Versiyon**: 1.0.0 (Production)  
**Durum**: ✅ Production Ready
