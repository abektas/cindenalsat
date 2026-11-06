import type { Product } from './products-data'

type LocaleText = { tr: string; en: string }
type SourceLink = { label: LocaleText; url: string }
type Evidence = {
  description: LocaleText
  listingPrice?: string
  listingLabel?: LocaleText
  sourceLinks: SourceLink[]
  imageMatch: 'MATCHED' | 'NEEDS_REVIEW'
  statusLabel: LocaleText
  statusNote: LocaleText
}
type CardState = {
  imageSrc: string | null
  description: string
  retailLabel: string
  retailPrice: string
  supplierPrice: string
  supplierStatus: string
  statusLabel: string
  supplierNote: string
  sourceLinks: { label: string; url: string }[]
}

type TrendSeed = {
  id: string
  titleTr: string
  titleEn: string
  categoryTr: string
  categoryEn: string
  rank: number
  reviewTr: string
  reviewEn: string
}
type AlibabaSeed = {
  id: string
  titleTr: string
  titleEn: string
  listedPrice: string
  moq: string
  sold?: string
  supplier: string
  reviewTr: string
  reviewEn: string
}

const amazonBestSellersUrl = 'https://www.amazon.com/Best-Sellers/zgbs'
const alibabaHotSellingUrl = 'https://www.alibaba.com/picks/hot-selling-products.html'
const source = (tr: string, en: string, url: string): SourceLink => ({ label: { tr, en }, url })

const trendSeeds: TrendSeed[] = [
  { id: 'T01', titleTr: 'eos Shea Better Vanilla Cashmere Vücut Losyonu', titleEn: 'eos Shea Better Vanilla Cashmere Body Lotion', categoryTr: 'Beauty & Personal Care', categoryEn: 'Beauty & Personal Care', rank: 1, reviewTr: 'Kozmetik etiketi ve ürün iddiaları incelenmeli.', reviewEn: 'Cosmetic labeling and product claims require review.' },
  { id: 'T02', titleTr: 'Mighty Patch Original Gece Sivilce Bantları', titleEn: 'Mighty Patch Original Nighttime Acne Pimple Patches', categoryTr: 'Beauty & Personal Care', categoryEn: 'Beauty & Personal Care', rank: 2, reviewTr: 'Kozmetik/ürün iddiaları ve marka kullanımı incelenmeli.', reviewEn: 'Cosmetic/product claims and brand use require review.' },
  { id: 'T03', titleTr: 'medicube Zero Pore Pad 2.0 Tonik Pedleri', titleEn: 'medicube Zero Pore Pad 2.0 Toner Pads', categoryTr: 'Beauty & Personal Care', categoryEn: 'Beauty & Personal Care', rank: 3, reviewTr: 'Kozmetik etiketi, içerik ve ürün iddiaları incelenmeli.', reviewEn: 'Cosmetic labeling, ingredients, and product claims require review.' },
  { id: 'T04', titleTr: 'Apple EarPods USB-C', titleEn: 'Apple EarPods USB-C', categoryTr: 'Elektronik', categoryEn: 'Electronics', rank: 2, reviewTr: 'Marka/IP ve elektronik uyumluluğu incelenmeli.', reviewEn: 'Brand/IP and electronics compatibility require review.' },
  { id: 'T05', titleTr: 'Apple AirTag (2. Nesil)', titleEn: 'Apple AirTag (2nd Generation)', categoryTr: 'Elektronik', categoryEn: 'Electronics', rank: 3, reviewTr: 'Marka/IP ve Apple ekosistemi uyumluluğu incelenmeli.', reviewEn: 'Brand/IP and Apple ecosystem compatibility require review.' },
  { id: 'T06', titleTr: 'Roku Streaming Stick HD', titleEn: 'Roku Streaming Stick HD', categoryTr: 'Elektronik', categoryEn: 'Electronics', rank: 5, reviewTr: 'Marka/IP, yayın hizmeti ve elektronik uyumluluğu incelenmeli.', reviewEn: 'Brand/IP, streaming-service, and electronics compatibility require review.' },
  { id: 'T07', titleTr: 'Amazon Basics AA Alkalin Pil, 48’li Paket', titleEn: 'Amazon Basics AA Alkaline Batteries, 48-Pack', categoryTr: 'Sağlık ve Ev', categoryEn: 'Health & Household', rank: 3, reviewTr: 'Pil taşımacılığı ve ithalat uygunluğu incelenmeli.', reviewEn: 'Battery shipping and import eligibility require review.' },
  { id: 'T08', titleTr: 'Bounty Select-A-Size Kağıt Havlu', titleEn: 'Bounty Select-A-Size Paper Towels', categoryTr: 'Sağlık ve Ev', categoryEn: 'Health & Household', rank: 4, reviewTr: 'Hacim, ağırlık ve lojistik maliyeti incelenmeli.', reviewEn: 'Volume, weight, and logistics costs require review.' },
  { id: 'T09', titleTr: 'Amazon Basics Tek Kullanımlık Kağıt Tabak', titleEn: 'Amazon Basics Everyday Disposable Paper Plates', categoryTr: 'Sağlık ve Ev', categoryEn: 'Health & Household', rank: 5, reviewTr: 'Gıda temasına uygunluk ve lojistik maliyeti incelenmeli.', reviewEn: 'Food-contact suitability and logistics costs require review.' },
  { id: 'T10', titleTr: 'Hanes Erkek Sweatshirt', titleEn: "Hanes Men's Sweatshirt", categoryTr: 'Giyim, Ayakkabı ve Takı', categoryEn: 'Clothing, Shoes & Jewelry', rank: 1, reviewTr: 'Beden/kalıp ve marka kullanımı incelenmeli.', reviewEn: 'Sizing/fit and brand use require review.' },
  { id: 'T11', titleTr: 'Trendy Queen Kadın Uzun Kollu Üst', titleEn: "Trendy Queen Women's Long Sleeve Top", categoryTr: 'Giyim, Ayakkabı ve Takı', categoryEn: 'Clothing, Shoes & Jewelry', rank: 2, reviewTr: 'Beden/kalıp ve ürün eşleşmesi incelenmeli.', reviewEn: 'Sizing/fit and product match require review.' },
  { id: 'T13', titleTr: 'Owala FreeSip Paslanmaz Çelik Matara, 24 oz', titleEn: 'Owala FreeSip Stainless Steel Water Bottle, 24oz', categoryTr: 'Mutfak ve Yemek', categoryEn: 'Kitchen & Dining', rank: 1, reviewTr: 'Marka/IP ve gıda temasına uygunluk incelenmeli.', reviewEn: 'Brand/IP and food-contact suitability require review.' },
  { id: 'T14', titleTr: 'KitchenAid Classic Çok İşlevli Konserve/Şişe Açacağı', titleEn: 'KitchenAid Classic Multifunction Can/Bottle Opener', categoryTr: 'Mutfak ve Yemek', categoryEn: 'Kitchen & Dining', rank: 3, reviewTr: 'Marka/IP ve gıda temasına uygunluk incelenmeli.', reviewEn: 'Brand/IP and food-contact suitability require review.' },
  { id: 'T15', titleTr: 'Bella 2 Dilimli Ekmek Kızartma Makinesi', titleEn: 'Bella 2-Slice Toaster', categoryTr: 'Mutfak ve Yemek', categoryEn: 'Kitchen & Dining', rank: 4, reviewTr: 'Elektrik güvenliği ve marka kullanımı incelenmeli.', reviewEn: 'Electrical safety and brand use require review.' },
]

const alibabaSeeds: AlibabaSeed[] = [
  { id: 'A01', titleTr: '10.000 mAh İnce Taşınabilir Şarj Cihazı', titleEn: '10,000mAh Slim Power Bank', listedPrice: '$4.79–5.26', moq: '2', sold: '4,232', supplier: 'Remax Amzo / Shenzhen Remax Technology Co., Ltd.', reviewTr: 'Pil/şarj ürünü; varyant ve uygunluk incelenmeli.', reviewEn: 'Battery/charging product; variant and compliance require review.' },
  { id: 'A02', titleTr: 'Naylon Evcil Hayvan Bakım Eldiveni', titleEn: 'Nylon Pet Grooming Gloves', listedPrice: '$0.49–0.66', moq: '4', sold: '1,500', supplier: 'Shenzhen Yutu Technology Co., Ltd.', reviewTr: 'Malzeme, beden ve numune incelenmeli.', reviewEn: 'Material, sizing, and sample require review.' },
  { id: 'A03', titleTr: 'Promosyon Hediye Seti', titleEn: 'Promotional Gift Set', listedPrice: '$0.15–2.68', moq: '500', sold: '1,351', supplier: 'Shanghai Touch Industrial Development Co., Ltd.', reviewTr: 'Geniş fiyat aralığı; set içeriği/varyant teyidi gerekli.', reviewEn: 'Wide price range; set contents and variant need confirmation.' },
  { id: 'A04', titleTr: 'Kapaklı Şeffaf Plastik Kutu', titleEn: 'Clear Plastic Box with Lid', listedPrice: '$0.19–0.29', moq: '2', sold: '600', supplier: 'Dongguan Yongyun Plastic Products Co., Ltd.', reviewTr: 'Ölçü, malzeme ve nakliye maliyeti incelenmeli.', reviewEn: 'Dimensions, material, and shipping cost require review.' },
  { id: 'A05', titleTr: '3’ü 1 Arada Anahtarlık Şarj Cihazı ve USB Kablosu', titleEn: '3-in-1 Keychain Charger and USB Cable', listedPrice: '$0.69–0.89', moq: '2', sold: '305', supplier: 'Shenzhen Lishan Technology Co., Ltd.', reviewTr: 'Elektrik güvenliği, konnektör ve varyant uyumu incelenmeli.', reviewEn: 'Electrical safety, connector, and variant compatibility require review.' },
  { id: 'A06', titleTr: 'Paslanmaz Çelik Erişim Kontrolü Kapı Döngü Kablosu', titleEn: 'Stainless-Steel Access-Control Door Loop Cable', listedPrice: '$0.72–0.83', moq: '200', supplier: 'Cixi Super Siren Electronic Co., Ltd. (CN)', reviewTr: 'B2B/kurulum ürünü; teknik özellikler incelenmeli.', reviewEn: 'B2B/installation product; technical specifications require review.' },
  { id: 'A07', titleTr: 'ESP32 Wi‑Fi + Bluetooth Geliştirme Kartı', titleEn: 'ESP32 Wi-Fi + Bluetooth Development Board', listedPrice: '$2.56–3.76', moq: '1', sold: '3', supplier: 'Shenzhen Nuoxin Microelectronics Technology Co., Ltd. (CN)', reviewTr: 'Teknik bileşen; kart, firmware ve uygunluk incelenmeli.', reviewEn: 'Technical component; board, firmware, and compliance require review.' },
  { id: 'A08', titleTr: 'Deniz Kabuğu Kristal Mum', titleEn: 'Seashell Crystal Candle', listedPrice: '$3.50–4.00', moq: '2', sold: '213', supplier: 'Lianyungang Chuse Jewelry Co., Ltd. (CN)', reviewTr: 'Varyant, malzeme ve numune incelenmeli.', reviewEn: 'Variant, material, and sample require review.' },
  { id: 'A09', titleTr: 'Mini Metal İz Bırakmayan Saç Tokası', titleEn: 'Mini Metal Creaseless Hair Clip', listedPrice: '$0.45–0.68', moq: '180', sold: '3,462', supplier: 'Yiwu Blue Stone Imp&Exp Corporation (CN)', reviewTr: 'Renk/model ve numune teyidi gerekli.', reviewEn: 'Color/model and sample need confirmation.' },
  { id: 'A10', titleTr: 'Mini Deri Çanta / Anahtarlık Bozuk Para Cüzdanı', titleEn: 'Mini Leather Bag / Keychain Coin Purse', listedPrice: '$0.89–0.98', moq: '10', sold: '1,074', supplier: 'Shenzhen Changsheng Technology Co., Limited (CN)', reviewTr: 'Malzeme beyanı ve varyant incelenmeli.', reviewEn: 'Material declaration and variant require review.' },
  { id: 'A11', titleTr: 'Çift Taraflı Aynalı Anahtarlık', titleEn: 'Double-Sided Mirror Keychain', listedPrice: '$0.38–2.50', moq: '10', supplier: 'Hangzhou Aoyu Import And Export Co., Ltd. (CN)', reviewTr: 'Fiyat varyanta göre değişiyor; dayanıklılık incelenmeli.', reviewEn: 'Price varies by variant; durability requires review.' },
  { id: 'A12', titleTr: '12 Kesimli Mor Düz Tabanlı Kristal Taşlar', titleEn: '12-Cut Purple Flatback Rhinestone Crystals', listedPrice: '$0.62–9.39', moq: '10 bags', sold: '17', supplier: 'Oleeya Industry CO., Limited (country not shown)', reviewTr: 'Paket/adet ve menşe teyidi gerekli.', reviewEn: 'Pack quantity and country of origin need confirmation.' },
  { id: 'A13', titleTr: '2’si 1 Arada Mutfak Blenderı', titleEn: '2-in-1 Kitchen Blender', listedPrice: '$17.30–17.60', moq: '2', supplier: 'Guangdong Sutai Electrical Appliance Co., Ltd. (CN)', reviewTr: 'Elektrik güvenliği, gıda teması ve kapasite incelenmeli.', reviewEn: 'Electrical safety, food contact, and capacity require review.' },
  { id: 'A14', titleTr: 'Profesyonel Spor Boks Ayakkabısı', titleEn: 'Professional Sports Boxing Shoes', listedPrice: '$22–24', moq: '600 pairs', supplier: 'Jinjiang Aotimeng Sport Products Co., Ltd. (CN)', reviewTr: 'Yüksek MOQ; beden tablosu ve numune incelenmeli.', reviewEn: 'High MOQ; size chart and sample require review.' },
  { id: 'A15', titleTr: 'Erkek Naylon Taktik Spor Kemeri', titleEn: 'Men’s Nylon Sports Tactical Belt', listedPrice: '$0.08–0.40', moq: '50', supplier: 'Quanzhou Hengxunxin Import And Export Co., Ltd. (CN)', reviewTr: 'Liste görünümleri arasındaki satış sayısı farkı teyit edilmeli.', reviewEn: 'The sold-count discrepancy between listing views requires confirmation.' },
]

const trendProducts: Product[] = trendSeeds.map((item) => ({
  id: item.id,
  category: 'viral',
  titleTr: item.titleTr,
  titleEn: item.titleEn,
  descTr: `Amazon.com Best Sellers — ${item.categoryTr} kategori sırası #${item.rank}. Bu sıralama satış adedi değildir; 6 Kasım 2026 görüntüsüdür. ${item.reviewTr}`,
  descEn: `Amazon.com Best Sellers — ${item.categoryEn} category rank #${item.rank}. This rank is not a unit-sales count; snapshot dated November 6, 2026. ${item.reviewEn}`,
  image: `/images/product-refresh/${item.id}.jpg`,
  priceTr: '',
  priceEn: '',
  link: amazonBestSellersUrl,
}))

const alibabaProducts: Product[] = alibabaSeeds.map((item) => ({
  id: item.id,
  category: 'alibaba',
  titleTr: item.titleTr,
  titleEn: item.titleEn,
  descTr: `Alibaba liste kartı görüntüsü (6 Kasım 2026): ${item.listedPrice} · MOQ ${item.moq}${item.sold ? ` · ${item.sold} satış (dönem belirtilmemiş)` : ''} · listede görünen satıcı: ${item.supplier}. Teklif, varyant, numune, kargo ve uygunluk doğrulanmadı.`,
  descEn: `Alibaba listing-card snapshot (November 6, 2026): ${item.listedPrice} · MOQ ${item.moq}${item.sold ? ` · ${item.sold} sold (period unspecified)` : ''} · seller shown on the listing: ${item.supplier}. Quote, variant, sample, shipping, and compliance are unverified.`,
  image: `/images/product-refresh/${item.id}.jpg`,
  priceTr: '',
  priceEn: '',
  link: alibabaHotSellingUrl,
}))

export const approvedProductRefresh: Product[] = [...trendProducts, ...alibabaProducts]

const evidenceForTrend = (item: TrendSeed): Evidence => ({
  description: {
    tr: `Amazon.com Best Sellers — ${item.categoryTr} kategori sırası #${item.rank}. Sıralama satış adedi değildir. Ekran görüntüsünde teslimat bölgesi Türkiye görünüyordu; ABD bulunabilirliği/fiyatı ve ithalat uygunluğu doğrulanmadı. ${item.reviewTr}`,
    en: `Amazon.com Best Sellers — ${item.categoryEn} category rank #${item.rank}. Rank is not a unit-sales count. The screenshot showed delivery location Turkey; US availability/price and import eligibility are unverified. ${item.reviewEn}`,
  },
  sourceLinks: [source('Amazon kategori sıralaması', 'Amazon category ranking', amazonBestSellersUrl)],
  imageMatch: 'MATCHED',
  statusLabel: { tr: 'İthalat incelemesi:', en: 'Import review:' },
  statusNote: { tr: 'ABD bulunabilirliği, fiyatı ve tedarik uygunluğu doğrulanmadı.', en: 'US availability, price, and sourcing suitability are unverified.' },
})

const evidenceForAlibaba = (item: AlibabaSeed): Evidence => ({
  description: {
    tr: `Liste kartı görüntüsü: ${item.listedPrice} · MOQ ${item.moq}${item.sold ? ` · ${item.sold} satış (dönem belirtilmemiş)` : ''} · listede görünen satıcı: ${item.supplier}. Bu bir tedarikçi teklifi değildir; varyant, güncel fiyat, numune, kargo ve uygunluk teyidi gerekir. ${item.reviewTr}`,
    en: `Listing-card snapshot: ${item.listedPrice} · MOQ ${item.moq}${item.sold ? ` · ${item.sold} sold (period unspecified)` : ''} · seller shown: ${item.supplier}. This is not a supplier quote; variant, current price, sample, shipping, and compliance need confirmation. ${item.reviewEn}`,
  },
  listingPrice: item.listedPrice,
  listingLabel: { tr: 'Alibaba liste görünümü', en: 'Alibaba listing snapshot' },
  sourceLinks: [source('Alibaba Hot Selling listesi', 'Alibaba Hot Selling list', alibabaHotSellingUrl)],
  imageMatch: 'MATCHED',
  statusLabel: { tr: 'Tedarik incelemesi:', en: 'Supplier review:' },
  statusNote: { tr: 'NEEDS_REVIEW — liste kartı teklifi doğrulamaz.', en: 'NEEDS_REVIEW — the listing card does not verify a quote.' },
})

export const productRefreshEvidence: Record<string, Evidence> = Object.fromEntries([
  ...trendSeeds.map((item) => [item.id, evidenceForTrend(item)] as const),
  ...alibabaSeeds.map((item) => [item.id, evidenceForAlibaba(item)] as const),
])

export function getProductRefreshProducts(category: string): Product[] | null {
  if (category === 'viral') return trendProducts
  if (category === 'alibaba') return alibabaProducts
  return null
}

export function getProductCardState(product: Product, isTr: boolean): CardState {
  const evidence = productRefreshEvidence[product.id]
  if (evidence) return {
    imageSrc: evidence.imageMatch === 'MATCHED' ? product.image : null,
    description: isTr ? evidence.description.tr : evidence.description.en,
    retailLabel: evidence.listingLabel ? (isTr ? evidence.listingLabel.tr : evidence.listingLabel.en) : '',
    retailPrice: evidence.listingPrice ?? '',
    supplierPrice: '',
    supplierStatus: 'NEEDS_REVIEW',
    statusLabel: isTr ? evidence.statusLabel.tr : evidence.statusLabel.en,
    supplierNote: isTr ? evidence.statusNote.tr : evidence.statusNote.en,
    sourceLinks: evidence.sourceLinks.map((item) => ({ label: isTr ? item.label.tr : item.label.en, url: item.url })),
  }

  return {
    imageSrc: product.image,
    description: isTr ? product.descTr : product.descEn,
    retailLabel: product.priceEn ? 'Amazon' : '',
    retailPrice: product.priceEn,
    supplierPrice: product.priceTr,
    supplierStatus: '',
    statusLabel: '',
    supplierNote: '',
    sourceLinks: product.link ? [{ label: isTr ? 'Detay Gör' : 'View Details', url: product.link }] : [],
  }
}

export const productRefreshCounts = { trend: trendProducts.length, alibaba: alibabaProducts.length }
