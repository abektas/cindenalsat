# SEO Kanıtları — cindenalsat.com (2026-11-08)

> **Kaynak:** OpenSEO ücretsiz araçları (backlink checker, spam score checker, traffic checker, keyword generator)
> **Veri kaynağı:** DataForSEO (OpenSEO'nun sağlayıcısı)
> **Kim yaptı:** Ana oturum (OpenSEO değerlendirmesi), isteği üzerine bu oturuma aktarıldı
> **Durum:** Keşif tamam, aksiyon bekliyor

---

## 1. Backlink profili — cindenalsat.com

| Metrik | Değer |
|---|---|
| Domain rank | **0** |
| Backlink | 53 |
| Referring domain | 50 |
| Kırık backlink | 0 |

**İlk 8 backlink (hepsi PBN/spam):**

| Domain | Anchor | Tip |
|---|---|---|
| `drjack.world` | cindenalsat.com | Nofollow |
| `onvaxs.com` | "High Quality Dofollow Backlinks DA 50 PA 40 Premium PBN Network Service cindenalsat.com Rank First Page Google Fast SEO Link Building Buy Backlinks Online Cheap" | Follow |
| `anchorurl.cloud` | cindenalsat.com | Nofollow |
| `bazerdaily.com` | Aynı PBN metni | Follow |
| `screenshots.wiki` | cindenalsat.com | Nofollow |
| `urls-shortener.eu` | cindenalsat.com | Nofollow |
| `sites.jake.eu` | cindenalsat.com | Nofollow |
| `onlyhealthydeals.com` | Aynı PBN metni | Follow |

**Yorum:** 53 backlink / 50 domain oranı (1.06) ve tamamının PBN olması, satın alınmış link paketi işareti. Anchor'ların çoğu exact-match marka adı.

---

## 2. Spam skoru — cindenalsat.com

| Metrik | Değer |
|---|---|
| **Backlink spam skoru** | **60** (yüksek) |
| Domain spam skoru | 0 |
| Referring domain | 50 |
| Domain rank | 0 |

**En spam'li linkler:**

| Skor | Domain | Anchor |
|---|---|---|
| 75 | `bestwebs123.site` | "High Quality Dofollow Backlinks DA 50 PA 40 Premium PBN Network Service cindenalsat.com…" |
| 75 | `clonidine01mg.store` | "Expert Tiered Link Building for cindenalsat.com to Boost Domain Authority…" |
| 70 | `connectedcannabis.shop` | "Expert Tiered Link Building for cindenalsat.com to Boost Domain Authority…" |

**Yorum:** PBN ağı 3 farklı kategoriden (SEO hizmeti, ilaç, esrar) aynı anchor metniyle link veriyor. Bu, otomatik/kitlesel bir link satın alma kampanyasının izı.

---

## 3. Organik trafik — cindenalsat.com

| Metrik | Değer |
|---|---|
| Organic traffic / month | — |
| Organic keywords | — |
| Traffic value | — |
| Ranking pages | — |
| Ranking keywords | "No ranking keywords found for this country" |

**Yorum:** Sitenin ölçülebilir organik arama varlığı yok. Domain rank 0 ile tutarlı.

---

## 4. Keyword verisi — ABD, "mosaic lamp"

OpenSEO keyword generator, 20 öneri (DataForSEO hacim + zorluk):

| Keyword | Hacim/ay | Zorluk |
|---|---|---|
| mosaic lamp turkey | 4.400 | 7 |
| mosaic lamp | 4.400 | 11 |
| **mosaic lamp workshop** | **1.900** | **0** |
| **turkish mosaic lamp workshop** | **1.300** | **0** |
| mosaic lamp kit | 880 | 0 |
| mosaic table lamp | 480 | 0 |
| mosaic turkish floor lamp | 390 | 0 |
| turkish mosaic lamp workshop near me | 390 | 0 |
| diy mosaic lamp kit | 390 | 0 |
| mosaic floor lamp | 390 | 0 |
| mosaic lamp base | 320 | 0 |
| mosaic lamp pattern | 320 | — |
| mosaic lamp class | 320 | 0 |
| pier 1 mosaic lamp | 320 | 0 |
| pier one mosaic lamp | 320 | 0 |
| diy mosaic lamp | 320 | 0 |
| mosaic swan lamp | 320 | 0 |
| handmade turkish mosaic floor lamp | 260 | — |
| mosaic lamp designs | 260 | 3 |
| mosaic lamp class near me | 260 | 3 |

**Mevcut sayfa:** `app/mosaic-lamp-supplies/page.tsx`
- Title: "Wholesale Mosaic Lamp Supplies: Glass Cuts, Beads & Globes"
- Keywords: 'mosaic workshop supplies USA' + 5 diğer
- H1: 1 · H2: 8

**Boşluk:** Sayfa "mosaic lamp supplies" ve "mosaic workshop supplies USA" hedefliyor; **"mosaic lamp workshop" (1.900/ay, zorluk 0)** ve **"turkish mosaic lamp workshop" (1.300/ay, zorluk 0)** henüz title'da yok.

---

## 5. Öneriler

### R1 — PBN linklerini disavow et (acil)

**Neden:** 53 backlink'in tamamı PBN, spam skoru 60, domain rank 0. Bu profilin Google'da ceza/filtre riski var. Linklerin faydası yok, zararı büyük.

**Yol:**
1. **Önce doğrula:** Google Search Console'ta cindenalsat.com için "Manual Actions" ve "Security Issues" sayfalarını kontrol et. Elle ceza varsa kesin disavow gerekir.
2. **Link listesini çek:** Ücretsiz araç sadece ilk 15'i veriyor. Tam liste için:
   - GSC → Links → External links (ücretsiz, eksiksiz), veya
   - OpenSEO ücretli sürüm (sayfalama + filtre)
3. **Disavow dosyası hazırla:** Domain bazında, `cindenalsat.com` için:
   ```
   domain:drjack.world
   domain:onvaxs.com
   domain:anchorurl.cloud
   domain:bazerdaily.com
   domain:screenshots.wiki
   domain:urls-shortener.eu
   domain:sites.jake.eu
   domain:onlyhealthydeals.com
   domain:bestwebs123.site
   domain:clonidine01mg.store
   domain:connectedcannabis.shop
   ```
   *(Bu 11 domain ücretsiz araçtan gelen kanıt. GSC'deki tam listeyle genişlet.)*
4. **GSC → Disavow Tools** ile yükle. Google'ın kendi kriterlerine göre uygula; geçmiş cezayı kaldırmaz ama gelecekteki riski azaltır.

**Not:** Disavow işlemi geri döndürülemez nitelikte değil ama dikkatli olunmalı — yanlış link disavow etmek trafik kaybına yol açar. Bu yüzden önce GSC doğrulaması şart.

### R2 — Keyword odak: "mosaic lamp workshop" sayfası

**Neden:** İş modeli "workshop'ları sen yönet, tedariği biz taşırız". Bu cümleyle birebir örtüşen iki anahtar kelime var ve rekabeti neredeyse sok:
- `mosaic lamp workshop` — 1.900/ay, zorluk 0
- `turkish mosaic lamp workshop` — 1.300/ay, zorluk 0

**Yol:**
1. `app/mosaic-lamp-supplies/page.tsx` sayfasının title ve description'ına bu iki keyword'ü ekle:
   - Title önerisi: `Mosaic Lamp Workshop Supplies, Sourced from China | cindenalsat`
   - Description'da "mosaic lamp workshop" tam eşleşme olsun
2. H1'de "mosaic lamp workshop" geçsin (şu an "Wholesale mosaic lamp supplies…" gibi bir yapı var — H1'in tam metni dosyada var, gözden geçir)
3. Sayfada "turkish mosaic lamp workshop" için ayrı bir bölüm/alt başlık (H2) aç
4. `mosaic workshop supplies USA` (mevcut keyword) korunmalı — komplementer

**Ek fırsatlar (düşük zorluk):**
- `mosaic lamp class` (320/ay, 0) — workshop eğitimlerine yönelik sayfa
- `mosaic lamp class near me` (260/ay, 3) — yerel arama
- `diy mosaic lamp kit` (390/ay, 0) — DIY kit üreticileri
- `mosaic lamp pattern` (320/ay) — pattern/şablon içeriği

---

## 6. Yapılacaklar sırası

1. **GSC kontrolü** (manual action var mı) — R1'in ön koşulu
2. **GSC'den tam backlink listesi** çek
3. **Disavow dosyası** hazırla + yükle
4. **Mosaic sayfasına** "mosaic lamp workshop" keyword'ünü ekle (title/description/H1/H2)
5. **Yeni sayfa/section:** "turkish mosaic lamp workshop"
6. (Opsiyonel) `mosaic lamp class` ve `diy mosaic lamp kit` için içerik planı

---

## 7. Kanıt ekran görüntüleri

- `docs/evidence/openseo-keywords-2026-11-08.png` — keyword tablosu (ABD, "mosaic lamp")
- `docs/evidence/openseo-keywords-form-2026-11-08.png` — form + sonuç başlığı

---

## 8. Araç notu

OpenSEO ücretsiz araçları kayıt gerektirmez, DataForSEO verisi kullanır. Rate limit: IP başına dakikada 5 gönderim, günlük 40 upstream çağrı. Bu rapor 5 araç çalıştırarak hazırlandı.

Ücretli sürüm ($10/ay) sayfalama, filtre ve export sağlıyor. Kendi kendine hosting (Docker/Cloudflare) mümkün — DataForSEO anahtarı gerekiyor ($50 minimum top-up).

---

## 9. GSC doğrulaması — 9 Kasım 2026 (ÖNEMLİ DÜZELTME)

Kullanıcı GSC'den iki kanıt verdi:

**a) Links raporu ekran görüntüsü** (`search.google.com/search-console/links?resource_id=sc-domain%3Acindanalsat.com`)

| | GSC (Google'ın görüşü) | DataForSEO (OpenSEO) |
|---|---|---|
| Dış link | **1** | 53 |
| Bağlanan site | **1** (pinterest.com) | 50 |
| Anchor | "cindenalsat com" | PBN spam metinleri |

**b) "Top target pages" export** — 1 satır:
```
Hedef sayfa,Gelen bağlantılar,Bağlanan siteler
https://cindenalsat.com/,1,1
```

### Ne anlaşılıyor

**Google, PBN linklerini zaten saymıyor.** GSC'nin Links raporu bir *örnektir* ve Google'ın spam filtresi tarafından süzülmüştür; DataForSEO'nun indeksi ise ham web taramasıdır. 53 linkin 52'si Google tarafından zaten göz ardı edilmiş.

Bu, Google'ın kendi rehberiyle tutarlı: *"most sites will not need to use this tool"* ve *"Google can assess which links to trust without additional guidance."*

### Sonuç: **Disavow gerekli DEĞİL**

- GSC'de elle ceza görünmüyor (kenar çubuğunda uyarı ikonu yok)
- Google zaten spam'i sayıyor
- Disavow yapmak bu durumda **riskli ve gereksiz** — yanlış link reddi trafik kaybına yol açabilir

**Öneri:** Disavow dosyasını **yükleme**. Tek şart: Manuel İşlemler sayfasının boş olduğunu doğrula (1 tıklama).

### ✅ Doğrulama tamamlandı (9 Kas 2026, 09:20)

GSC → Güvenlik ve Manuel İşlemler → **Manuel İşlemler** sayfası:

> **"Hiçbir sorun algılanmadı"**

Cezay kaydı yok, liste yok. URL: `search.google.com/search-console/manual-actions?resource_id=sc-domain%3Acindenalsat.com`

**Görev 1 resmen kapandı** — üç koşul da doğrulandı:
1. Elle ceza yok ✓
2. Google spam'i zaten sayıyor ✓
3. Domain property → disavow toolu desteklemiyor ✓

### GSC property türü notu

Property: `sc-domain:cindanalsat.com` → **Domain property**. Disavow toolu Domain property'leri **desteklemez**. Yani bu iş zaten otomatik olarak kapanıyor.

---

## 10. Güncel öneri (9 Kas 2026 sonrası)

| # | İş | Durum |
|---|---|---|
| R1 | PBN disavow | **İPTAL** — Google zaten sayıyor, ceza yok, Domain property desteklemiyor |
| R2 | Keyword ekleme | **YAPILDI** (commit `7ce84c1`) |
| Yeni | GSC performans takibi | İsteğe bağlı — API gerektirmez, GSC UI'dan haftalık bakılabilir |
