# Çin'den Al Sat — Logo Tasarım Brifi ve AI Promptları

> **Marka**: Çin'den Al Sat / China Import Consultancy  
> **Hedef Kitle**: ABD'de yaşayan Türk girişimciler, Çin'den ithalat yapanlar  
> **Pozisyonlama**: Güvenilir, hızlı, modern, B2B danışmanlık  
> **Tarih**: 2026-10-14

---

## 🎨 Renk Paleti (Kesin Değerler)

| Token | HSL | HEX | RGB | Kullanım |
|-------|-----|-----|-----|----------|
| **Primary Blue** | `210 76% 52%` | `#2563EB` | 37, 99, 235 | Ana marka rengi, güven, kurumsal |
| **Accent Cyan** | `174 60% 51%` | `#06B6D4` | 6, 182, 212 | Modern, hız, global, vurgular |
| **Secondary Rose** | `340 65% 60%` | `#EC4899` | 236, 72, 153 | İnsan odaklı, enerji, CTA vurgusu |
| **Dark Navy** | `222 47% 11%` | `#0B1220` | 11, 18, 32 | Metin, başlıklar (Light mode) |
| **Muted Slate** | `215 16% 47%` | `#64748B` | 100, 116, 139 | İkincil metin, EN alt metin |
| **White** | `0 0% 100%` | `#FFFFFF` | 255, 255, 255 | Koyu arka planlarda sembol |
| **Gradient Primary** | 45° `Blue → Cyan` | — | — | Sembol fill, CTA butonlar, hero |

**CSS Variables (globals.css)**:
```css
:root {
  --primary: 210 76% 52%;        /* #2563EB */
  --accent: 174 60% 51%;         /* #06B6D4 */
  --secondary: 340 65% 60%;      /* #EC4899 */
  --foreground: 222 47% 11%;     /* #0B1220 */
  --muted-foreground: 215 16% 47%; /* #64748B */
}
```

---

## 🏗️ Logo Konsepti: "BRIDGE ARROW" (Köprü Ok)

### Temel Metafor
> **Çin ↔ ABD arasını birleştiren, yukarı doğru giden bir ok** — ithalat sürecinin "hızlı, güvenli, büyüme odaklı" olduğunu anlatır. Türk girişimcisinin ABD'de büyümesini simgeler.

### Geometrik Kurallar

| Unsur | Ölçü | Açıklama |
|-------|------|----------|
| **Ok açısı** | 60° | Eşkenar üçgen → denge, istikrar |
| **Köprü yay radius** | 1.5× ok yüksekliği | Yumuşak geçiş, güven hissi |
| **Tipografi** | Display font (Inter Display / Space Grotesk) | Modern, okunabilir, TR/EN karakter desteği |
| **Kerning** | +10 tracking (büyük harfler) | Hava, premium hissi |
| **Baseline** | Ok uç noktası = metin baseline'i | Optik hizalama |

---

## 📐 3 Logo Varyantı

### A. Ana Logo (Lockup) — Header, Proposal, İmza
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│      ▲                    Çin'den Al Sat                        │
│     ╱ ╲                   China Import Consultancy             │
│    ╱───╲                                                                       
│   ╱     ╲                                                                       
│         │  ← Yükselen ok = Büyüme, İlerleme, ABD pazarı        │
│         │                                                                       
│  ┌──────┴──────┐  ← Köprü zemini = Çin-ABD bağlantısı, Güven   │
│  │   BRIDGE    │                                                                       
│  └────────────┘                                                                       
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Renk Kullanımı**:
- Sembol: Gradient fill → Blue `#2563EB` → Cyan `#06B6D4` [45° angle]
- TR Metin: Dark Navy `#0B1220`
- EN Metin: Muted Slate `#64748B`

---

### B. Sembol Only (Icon) — Favicon, App Icon, Social Avatar
```
32×32 / 192×192 / 512×512 px

┌─────────────┐
│             │
│      ▲      │  ← Beyaz ok, gradient arka plan
│     ╱╲      │
│    ╱══╲     │
│   ╱    ╲    │
│  ════════   │  ← Köprü çizgisi (beyaz, 2px)
│             │
└─────────────┘
Arka plan: Circular gradient Blue → Cyan
```
**Safe area**: Sembol çerçevenin %70'i

---

### C. Yatay Kompakt — Mobile Header, Footer, Email Signature
```
▲  Çin'den Al Sat  |  China Import Consultancy
```
- Sembol sol, metin sağ
- Arada 24px gap
- EN metni %80 opacity, 0.875rem

---

## 🤖 AI IMAGE GENERATION PROMPTLARI

### Prompt 1: Ana Logo Lockup (Vector Style, Flat Design)

```markdown
Professional minimalist logo for "Çin'den Al Sat" China Import Consultancy, 
B2B consultancy brand targeting Turkish entrepreneurs in USA importing from China.

Design: Geometric upward arrow bridging two points, 60-degree angle, 
smooth curved bridge base connecting left (China) to right (USA). 
Arrow tip points northeast = growth, progress. 
Clean vector lines, no gradients in symbol, single weight stroke.

Typography: "Çin'den Al Sat" primary, "China Import Consultancy" secondary smaller. 
Modern geometric sans-serif (Space Grotesk / Inter Display style), 
medium weight, slight positive tracking (+10). 
Turkish text dark navy #0B1220, English text muted slate #64748B.

Color palette: Primary Blue #2563EB → Accent Cyan #06B6D4 gradient (45°) 
applied to symbol only. White background.

Style: Flat vector, Swiss design principles, corporate identity manual aesthetic. 
High contrast, scalable to 16px favicon. No shadows, no 3D, no photorealism. 
Professional, trustworthy, modern, premium B2B feel.

--ar 4:1 --stylize 250 --quality 2
```

---

### Prompt 2: Sembol Only (App Icon / Favicon / Social Avatar)

```markdown
Minimalist app icon for China Import Consultancy brand. 
White upward arrow (60°) on circular gradient background Blue #2563EB → Cyan #06B6D4. 
Bridge curve subtle at base. Arrow reaches 70% of circle radius. 
Clean, bold, recognizable at 16×16px. 
iOS/Android adaptive icon safe zone respected. 
Flat design, no shadows, no stroke outlines. 
Professional tech/B2B aesthetic.

--ar 1:1 --stylize 200 --quality 2
```

---

### Prompt 3: Brand Pattern / Background Texture (Hero, Cards, Docs)

```markdown
Seamless geometric pattern derived from logo mark. 
Repeating micro arrow-bridge motifs at 15° rotation intervals. 
Ultra-subtle: 3% opacity lines in Primary Blue #2563EB. 
Light mode: on #F8FAFC background. Dark mode: on #0A0F1A background at 5% opacity. 
Used as hero section noise overlay, card backgrounds, PDF watermarks. 
Modern, corporate, non-distracting.

--tile --ar 1:1 --stylize 100
```

---

### Prompt 4: Lockup - White Version (Dark Backgrounds)

```markdown
Professional minimalist logo for "Çin'den Al Sat" China Import Consultancy - WHITE VERSION for dark backgrounds.

Design: Same geometric upward arrow bridging two points, 60-degree angle, 
smooth curved bridge base. White symbol (no gradient), clean vector lines.

Typography: "Çin'den Al Sat" primary white #FFFFFF, 
"China Import Consultancy" secondary white 80% opacity #CCCCCC. 
Modern geometric sans-serif (Space Grotesk / Inter Display), 
medium weight, slight positive tracking (+10).

Background: Dark navy #0B1220 or transparent.

Style: Flat vector, Swiss design, corporate identity. 
High contrast, scalable to 16px. No shadows, no 3D.

--ar 4:1 --stylize 250 --quality 2
```

---

### Prompt 5: Vertical Stack Version (Square Format)

```markdown
Vertical stack logo for "Çin'den Al Sat" China Import Consultancy. 
Square format for social media profile, print.

Layout: Symbol centered top, typography centered below.
Symbol: Geometric upward arrow (60°) with curved bridge base, 
gradient Blue #2563EB → Cyan #06B6D4 (45°).
Typography: "Çin'den Al Sat" dark navy #0B1220, 
"China Import Consultancy" muted slate #64748B smaller.
Modern geometric sans-serif, medium weight, +10 tracking.
Generous padding around (20% safe zone).

Style: Flat vector, professional B2B, Swiss design.

--ar 1:1 --stylize 250 --quality 2
```

---

## 🛠️ Figma / Illustrator Master Dosya Yapısı

### Layer Hiyerarşisi
```
📁 LOGO_MASTER
├── 📁 VARIANTS
│   ├── 📄 A_Lockup_Horizontal (Artboard 400×120px)
│   ├── 📄 B_Icon_Square (Artboard 512×512px)
│   ├── 📄 C_Compact_Horizontal (Artboard 320×60px)
│   ├── 📄 D_Vertical_Stack (Artboard 200×200px)
│   ├── 📄 E_Lockup_White (Artboard 400×120px)
│   └── 📄 F_Icon_White (Artboard 512×512px)
├── 📁 COMPONENTS (Master Components)
│   ├── 🔧 Symbol_ArrowBridge
│   ├── 🔧 Logotype_TR
│   ├── 🔧 Logotype_EN
│   └── 🔧 BridgeCurve
├── 📁 COLOR_TOKENS
│   ├── 🎨 Primary_Blue (#2563EB)
│   ├── 🎨 Accent_Cyan (#06B6D4)
│   ├── 🎨 Gradient_Primary (45° Blue→Cyan)
│   ├── 🎨 Dark_Navy (#0B1220)
│   ├── 🎨 Muted_Slate (#64748B)
│   └── 🎨 White (#FFFFFF)
└── 📁 EXPORTS
    ├── SVG (all variants)
    ├── PNG @1x, @2x, @3x
    ├── Favicon package (16,32,48,64,128,192,256,512)
    └── WebP / AVIF (for web)
```

### Figma Auto-Layout Ayarları
```json
{
  "Lockup": {
    "direction": "HORIZONTAL",
    "spacing": 24,
    "alignment": "CENTER",
    "padding": 0
  },
  "Logotype": {
    "direction": "VERTICAL",
    "spacing": 2,
    "alignment": "LEFT",
    "lineHeight": "1.1 (TR), 1.2 (EN)"
  }
}
```

---

## 📦 Teslim Formatları ve Naming

| Format | Boyutlar | Kullanım |
|--------|----------|----------|
| **SVG** | Scalable | Web, print, Figma component |
| **PNG** | 512×512, 1024×1024 | Social, presentations |
| **ICO** | 16,32,48,64,256 | Favicon |
| **WebP/AVIF** | 256×256 | Web performance |
| **PDF** | Vector | Print (business card, letterhead) |

### Dosya Adlandırma Standardı
```
cindenalsat-logo-lockup-primary.svg
cindenalsat-logo-lockup-white.svg
cindenalsat-logo-icon-primary.svg
cindenalsat-logo-icon-white.svg
cindenalsat-logo-compact-primary.svg
cindenalsat-logo-vertical-primary.svg
favicon.ico
favicon-16.png ... favicon-512.png
apple-touch-icon.png (180×180)
```

---

## ✅ Logo Test Checklist (Teslim Öncesi)

| Test | Geçme Kriteri |
|------|---------------|
| **16px favicon** | Ok ve köprü ayrıştırılabilir mi? |
| **Tek renk (siyah)** | Form hâlâ anlaşılıyor mu? |
| **Beyaz üzerinde koyu** | Kontrast yeterli mi? (WCAG AA) |
| **Koyu üzerinde beyaz** | Gradient yerine solid white çalışıyor mu? |
| **Yatay/dikey** | Her iki oryantasyonda dengeli mi? |
| **TR/EN metin** | İkisi de okunuyor, hiyerarşi net mi? |
| **Kırpma (crop)** | Sosyal medya dairesinde (Instagram, X) merkezde mi? |
| **Animasyon ready** | SVG path'leri temiz, morphing için uygun mu? |
| **Küçük boyut (32px)** | Sembol detayı kaybolmadan tanınabilir mi? |
| **Büyük boyut (1000px)** | Vektör kalitesinde mi, pikselasyon yok mu? |

---

## 🎯 Marka Kişiliği ve Ton

| Özellik | 1-5 Skalası | Açıklama |
|---------|-------------|----------|
| **Güvenilirlik** | 5/5 | Kurumsal, şeffaf, deneyimli |
| **Modernlik** | 5/5 | Teknoloji odaklı, yenilikçi |
| **Hız** | 4/5 | Pratik, verimli, bürokrasisiz |
| **İnsan Odaklılık** | 4/5 | Danışmanlık, ilişkisel, destekleyici |
| **Premium** | 4/5 | Kaliteli, seçkin, değer katıcı |

**Marka Sesi**: Profesyonel ama erişilebilir, jargon kullanmayan, çözüm odaklı, ilham verici.

---

## 🚫 Yasaklar (Don'ts)

- ❌ Logo sembolünü döndürme, bükme, yatırma
- ❌ Gradient'i başka açıyla kullanma (sabit 45°)
- ❌ Sembolü metinden ayırıp tek başına kullanma (sadece B varyantında)
- ❌ Renk paleti dışı renkler ekleme
- ❌ Tipografiyi değiştirme (font, weight, tracking)
- ❌ Clear space alanına başka öğe koyma (min. sembol yüksekliği kadar)
- ❌ Sembolün içini pattern/doku ile doldurma
- ❌ Drop shadow, glow, 3D efekti ekleme (flat design prensibi)

---

## 📋 AI'a Verilecek Özet Komut (Kopyala-Yapıştır)

> **Bu brifi bir AI görsel üretecine (Midjourney/DALL-E/Flux) vereceksin. Aşağıdaki 5 prompttan istediklerini sırayla dene, en beğendini seç. Sonra vektörize et (SVG cleanup) veya Figma'da yeniden çiz.**

**Sıralı Deneme Stratejisi**:
1. **Prompt 1** → Ana lockup (4:1) — en kritik
2. **Prompt 2** → Icon (1:1) — favicon/app icon
3. **Prompt 4** → White version — dark mode test
4. **Prompt 5** → Vertical stack — social profile
5. **Prompt 3** → Pattern — opsiyonel, brand texture için

**Seçim Kriterleri**:
- [ ] 16px favicon'da ok/köprü ayrışık
- [ ] Tek renk (siyah) versiyonunda form bozulmamış
- [ ] TR/EN metin hiyerarşisi net
- [ ] Gradient Blue→Cyan 45° doğru uygulanmış
- [ ] Genel his: "Güvenilir, modern, büyüme odaklı"

---

## 📞 İletişim ve Onay

Bu brif onaylandığında:
1. AI'dan 5-10 varyasyon üret
2. En iyi 3'ü seç, vektörize et (Illustrator Image Trace → cleanup)
3. Figma master dosyası oluştur (yukarıdaki layer yapısı)
4. Tüm export formatlarını üret
5. Brand guideline 1-pager hazırla

**Hazırlayan**: Hermes Agent  
**Proje**: Çin İthalat Danışmanlığı / Cinden Al Sat  
**Repo**: `/home/selam/roller/cin-ithalat-danısmanı/cindenalsat/china_import_consultancy/nextjs_space/`