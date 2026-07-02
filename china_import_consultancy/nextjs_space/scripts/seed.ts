import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Seed admin users
  const adminPassword = await bcrypt.hash('Admin2026!', 12)
  const testPassword = await bcrypt.hash('johndoe123', 12)

  await prisma.user.upsert({
    where: { email: 'admin@cindenalsat.com' },
    update: {},
    create: {
      email: 'admin@cindenalsat.com',
      password: adminPassword,
      name: 'Admin',
      role: 'admin',
    },
  })

  await prisma.user.upsert({
    where: { email: 'john@doe.com' },
    update: {},
    create: {
      email: 'john@doe.com',
      password: testPassword,
      name: 'Test',
      role: 'admin',
    },
  })

  // Seed blog posts
  const blogPosts = [
    {
      slug: 'uluslararasi-mobilya-uretim-teknoloji-fuari-2026',
      categoryKey: 'cin-fuarlari',
      date: new Date('2026-05-14'),
      image: 'https://designweekguide.com/wp-content/uploads/2024/08/54_CIFF_15.jpg',
      titleTr: 'Uluslararası Mobilya Üretim ve Teknoloji Fuarı 2026 | Çin',
      titleEn: 'International Furniture Manufacturing & Technology Fair 2026 | China',
      excerptTr: 'Uluslararası Mobilya Üretim ve Teknoloji Fuarı 2026 | Guangzhou Çin. Dünyanın en büyük mobilya fuarlarından biri.',
      excerptEn: 'International Furniture Manufacturing & Technology Fair 2026 | Guangzhou China. One of the largest furniture fairs in the world.',
      contentTr: `Uluslararası Mobilya Üretim ve Teknoloji Fuarı (CIFF), her yıl Guangzhou'da düzenlenen dünyanın en büyük mobilya fuarlarından biridir.\n\nFuar, ev mobilyası, ofis mobilyası, dış mekan mobilyası ve mobilya üretim makineleri gibi geniş bir yelpazede ürünler sunmaktadır.\n\n**Fuar Bilgileri:**\n- Tarih: Mart 2026\n- Yer: Guangzhou, Çin\n- Sektör: Mobilya ve İç Tasarım`,
      contentEn: `The International Furniture Manufacturing & Technology Fair (CIFF) is one of the world's largest furniture fairs held annually in Guangzhou.\n\nThe fair offers a wide range of products including home furniture, office furniture, outdoor furniture, and furniture manufacturing machinery.\n\n**Fair Information:**\n- Date: March 2026\n- Location: Guangzhou, China\n- Sector: Furniture & Interior Design`,
    },
    {
      slug: 'chinaplas-2026-shanghai-fuari',
      categoryKey: 'cin-fuarlari',
      date: new Date('2026-05-14'),
      image: 'https://scrapc.com/wp-content/uploads/2025/06/CHINAPLAS-2026-Shanghai-Plastics-Rubber-Expo.webp',
      titleTr: 'CHINAPLAS 2026 Shanghai Fuarı',
      titleEn: 'CHINAPLAS 2026 Shanghai Fair',
      excerptTr: 'Plastik ve Kauçuk Sektörünün Dünyadaki En Büyük Buluşmalarından Biri.',
      excerptEn: 'One of the Biggest Gatherings of the Plastics and Rubber Industry in the World.',
      contentTr: `CHINAPLAS, plastik ve kauçuk endüstrisinin Asya'daki en büyük fuarıdır.\n\n**Fuar Bilgileri:**\n- Tarih: Nisan 2026\n- Yer: Shanghai, Çin\n- Sektör: Plastik & Kauçuk`,
      contentEn: `CHINAPLAS is the largest fair in Asia for the plastics and rubber industry.\n\n**Fair Information:**\n- Date: April 2026\n- Location: Shanghai, China\n- Sector: Plastics & Rubber`,
    },
    {
      slug: 'guangzhou-aydinlatma-fuari',
      categoryKey: 'cin-fuarlari',
      date: new Date('2026-03-20'),
      image: 'https://i.ytimg.com/vi/7fPEPLdS2m8/maxresdefault.jpg',
      titleTr: 'Guangzhou Uluslararası Aydınlatma Fuarı',
      titleEn: 'Guangzhou International Lighting Fair',
      excerptTr: 'Dünyanın en büyük aydınlatma fuarı olan Guangzhou Lighting Fair.',
      excerptEn: 'The world\'s largest lighting fair, Guangzhou Lighting Fair.',
      contentTr: `Guangzhou Uluslararası Aydınlatma Fuarı, her yıl düzenlenen aydınlatma sektörünün en büyük buluşma noktasıdır.\n\n**Fuar Bilgileri:**\n- Tarih: Haziran 2026\n- Yer: Guangzhou, Çin\n- Sektör: Aydınlatma & LED`,
      contentEn: `The Guangzhou International Lighting Fair is the largest annual meeting point for the lighting industry.\n\n**Fair Information:**\n- Date: June 2026\n- Location: Guangzhou, China\n- Sector: Lighting & LED`,
    },
    {
      slug: '139-cin-ithal-ihrac-mallari-fuari-kanton',
      categoryKey: 'cin-fuarlari',
      date: new Date('2025-12-09'),
      image: 'https://news.cgtn.com/news/2026-04-15/Canton-Fair-opens-in-China-with-record-scale-1MmsnXTBWH6/img/d55ff4814ac944f3b4ea46cbb139b83b/d55ff4814ac944f3b4ea46cbb139b83b.png',
      titleTr: '139. Çin İthal ve İhraç Malları Fuarı (Kanton Fuarı)',
      titleEn: '139th China Import and Export Fair (Canton Fair)',
      excerptTr: 'Dünyanın en büyük ticaret fuarı olan Kanton Fuarı hakkında bilmeniz gereken her şey.',
      excerptEn: 'Everything you need to know about the Canton Fair, the world\'s largest trade fair.',
      contentTr: `Kanton Fuarı (Canton Fair), 1957'den bu yana düzenlenen dünyanın en büyük ticaret fuarıdır.\n\n**Fuar Bilgileri:**\n- Tarih: 15 Nisan - 05 Mayıs 2026\n- Yer: Guangzhou, Çin`,
      contentEn: `The Canton Fair has been held since 1957 and is the world's largest trade fair.\n\n**Fair Information:**\n- Date: April 15 - May 05, 2026\n- Location: Guangzhou, China`,
    },
    {
      slug: 'mastering-import-consultancy',
      categoryKey: 'importing-from-china',
      date: new Date('2025-12-09'),
      image: 'https://cdn.abacus.ai/images/408ef4c4-ffc6-418c-9246-3ecf505e4e86.png',
      titleTr: 'Çin İthalat Danışmanlığında Ustalaşmak: Kapsamlı Rehber',
      titleEn: 'Mastering Import Consultancy: A Comprehensive Guide',
      excerptTr: 'Küresel Ticaretin Kapısı: Çin İthalat Danışmanlığını keşfedin.',
      excerptEn: 'The Gateway to Global Trade: Discover Import Consultancy.',
      contentTr: `Çin'den ithalat, doğru strateji ve bilgiyle son derece kârlı bir iş modelidir.\n\n**Tedarikçi Seçimi**\nAlibaba, Made-in-China gibi platformlarda tedarikçi aramak başlangıç için iyi bir adımdır.\n\n**Kalite Kontrol**\nÜretim öncesi, üretim sırası ve sevkiyat öncesi denetimler kalite sorunlarını minimize eder.`,
      contentEn: `Importing from China is an extremely profitable business model with the right strategy.\n\n**Supplier Selection**\nSearching for suppliers on platforms like Alibaba is a good starting point.\n\n**Quality Control**\nPre-production, during-production, and pre-shipment inspections minimize quality issues.`,
    },
    {
      slug: 'amerikada-ara-depo-prep-center',
      categoryKey: 'prep-center',
      date: new Date('2025-08-15'),
      image: 'https://cdn.prod.website-files.com/617a425fb7d20469bc145bf4/68a6df9c4014a18f7bfce69a_8646193b-c6f2-4410-b1d2-89e99bf6c382.jpeg',
      titleTr: "Amerika'da Ara Depo (Prep Center) Hizmeti Nedir, Neden Kullanmalı?",
      titleEn: 'What is a US Prep Center Service and Why Should You Use One?',
      excerptTr: 'E-ticaretin hızla büyüdüğü günümüzde, ürünlerin doğru saklanması ve etiketlenmesi her zamankinden önemli.',
      excerptEn: 'In today\'s rapidly growing e-commerce landscape, proper storage and labeling is more important than ever.',
      contentTr: `Amerika'da Prep Center hizmeti, özellikle Amazon FBA satıcıları için kritik bir altyapı unsurudur.\n\n**Prep Center Avantajları:**\n- Amazon FBA gereksinimlerine uygun hazırlama\n- Etiketleme ve barkodlama\n- Kalite kontrol`,
      contentEn: `A Prep Center service in the US is a critical infrastructure element for Amazon FBA sellers.\n\n**Prep Center Advantages:**\n- Preparing products to meet Amazon FBA requirements\n- Labeling and barcoding\n- Quality control`,
    },
    {
      slug: 'cin-ithalatinda-guvenli-tedarikci-secimi',
      categoryKey: 'tedarikci-bulma',
      date: new Date('2025-11-20'),
      image: 'https://image.cnbcfm.com/api/v1/image/108084402-1736447375007-gettyimages-2191474671-vcg111538748527.jpeg?v=1744819797&w=1920&h=1080',
      titleTr: 'Çin İthalatında Güvenli Tedarikçi Seçimi: Dikkat Edilmesi Gerekenler',
      titleEn: 'Safe Supplier Selection in China Import: Key Considerations',
      excerptTr: 'Çin\'den ithalat yaparken en kritik adımlardan biri güvenilir tedarikçi bulmaktır.',
      excerptEn: 'One of the most critical steps when importing from China is finding a reliable supplier.',
      contentTr: `Güvenilir tedarikçi bulmak, başarılı Çin ithalatının en önemli adımıdır.\n\n**1. Tedarikçi Doğrulama**\nAlibaba Gold Supplier sertifikalara sahip firmaları tercih edin.\n\n**2. Fabrika Denetimi**\nMümkünse fabrikayı bizzat ziyaret edin.`,
      contentEn: `Finding a reliable supplier is the most important step for successful China imports.\n\n**1. Supplier Verification**\nPrefer companies with Alibaba Gold Supplier certifications.\n\n**2. Factory Inspection**\nIf possible, visit the factory in person.`,
    },
    {
      slug: 'e-ticaret-icin-cin-ithalat-stratejileri',
      categoryKey: 'e-ticaret',
      date: new Date('2025-10-05'),
      image: 'https://subsites.chinadaily.com.cn/Qiushi/att/20260416/1776305100399035929.jpg',
      titleTr: 'E-Ticaret İçin Çin İthalat Stratejileri',
      titleEn: 'China Import Strategies for E-Commerce',
      excerptTr: 'Amazon, Trendyol gibi platformlarda satış yapanlar için Çin\'den ithalat stratejileri.',
      excerptEn: 'China import strategies for sellers on Amazon, Trendyol and similar platforms.',
      contentTr: `E-ticaret girişimcileri için Çin'den ithalat, rekabetçi fiyat avantajı sağlamanın en etkili yoludur.\n\n**Amazon FBA**\n- Private label ürün geliştirme\n- FBA etiketleme ve paketleme standartları`,
      contentEn: `For e-commerce entrepreneurs, importing from China is the most effective way to gain competitive pricing.\n\n**Amazon FBA**\n- Private label product development\n- FBA labeling and packaging standards`,
    },
  ]

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: { ...post, published: true },
    })
  }

  // Seed services
  const services = [
    { key: 'sourcing', icon: 'Search', image: 'https://d14kfatmu8g2q8.cloudfront.net/assets/0c6y4qslwvqw/4JTzgywLnqOjkb8UPkmlwR/82b74ebc678b040931a3da8bec12c37e/Product_Inspections_in_China.jpg?w=1000&fm=jpg&q=60', titleTr: 'Ürün Tedariği', titleEn: 'Product Sourcing', descTr: 'Çin pazarında ihtiyacınız olan ürünleri en uygun fiyat ve kalitede araştırıyor, güvenilir tedarikçilerle buluşturuyoruz.', descEn: 'We research the products you need in the Chinese market at the best price and quality, connecting you with reliable suppliers.', sortOrder: 0 },
    { key: 'quality', icon: 'ShieldCheck', image: 'https://www.investopedia.com/thmb/LV8P4KOKOzBRa7sCFYYQmdLA2-M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Quality-control-d2412c505d014b9d94007cae3dda47f4.jpg', titleTr: 'Kalite Kontrol', titleEn: 'Quality Control', descTr: 'Numune temini, fabrika denetimi ve üretim sürecinde kalite kontrol hizmetleri ile ürün kalitesini garanti altına alıyoruz.', descEn: 'Sample procurement, factory inspection and quality control services during the production process to guarantee product quality.', sortOrder: 1 },
    { key: 'logistics', icon: 'Truck', image: 'https://www.trailerbridge.com/media/wpejgdo5/7-things-every-international-freight-shipper-needs-to-know.jpg?width=1920&quality=60&v=1dbf7cc7f9a4f90', titleTr: 'Lojistik & Nakliye', titleEn: 'Logistics & Shipping', descTr: 'Deniz, hava ve kara yolu ile uluslararası nakliye organizasyonu ve takibi.', descEn: 'International shipping organization and tracking via sea, air and land routes.', sortOrder: 2 },
    { key: 'customs', icon: 'FileCheck', image: 'https://cdn.abacus.ai/images/f7b4bbb0-aa78-4588-aa9d-f1474e3caf78.png', titleTr: 'Gümrükleme', titleEn: 'Customs Clearance', descTr: 'Gümrük mevzuatına uygun belge hazırlığı, tarife belirleme ve gümrük işlemlerinin takibi.', descEn: 'Document preparation compliant with customs regulations, tariff determination and complete follow-up of customs procedures.', sortOrder: 3 },
    { key: 'ecommerce', icon: 'ShoppingCart', image: 'https://cdn.prod.website-files.com/6802176be9f419ff728cce1c/682d77f70e557eec64606864_Source%20Products%20for%20Amazon%20FBA.jpg', titleTr: 'E-Ticaret Çözümleri', titleEn: 'E-Commerce Solutions', descTr: 'Amazon FBA, Etsy ve diğer platformlar için private label ürün tedariği, barkodlama ve depolama hizmetleri.', descEn: 'Private label product sourcing, barcoding and storage services for Amazon FBA, Etsy and other platforms.', sortOrder: 4 },
    { key: 'consulting', icon: 'Handshake', image: 'https://cdn.abacus.ai/images/31e3de8d-020e-4e5b-bb58-bc9026cfa834.png', titleTr: 'Satın Alma Danışmanlığı', titleEn: 'Purchasing Consultancy', descTr: 'Üreticilerle sözleşme yönetimi, fiyat müzakeresi ve satın alma süreçlerinin profesyonel yönetimi.', descEn: 'Contract management with manufacturers, price negotiation and professional management of purchasing processes.', sortOrder: 5 },
  ]

  for (const svc of services) {
    await prisma.service.upsert({
      where: { key: svc.key },
      update: {},
      create: { ...svc, published: true },
    })
  }

  // Seed site content (images)
  const siteContent = [
    { key: 'hero_image', value: 'https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/content-assets/images/20260502_IRP001.jpg' },
    { key: 'team_image', value: 'https://bluematterconsulting.com/wp-content/uploads/2024/10/acceleration-lab-cropped-1920x1080.png' },
    { key: 'fair_image', value: 'https://www.ihomechinabuy.com/wp-content/uploads/2026/05/Missed-the-Canton-Fair-Heres-a-Smarter-Way-to-Source-Products-in-China-2026050707354745.webp' },
    { key: 'warehouse_image', value: 'https://packaging.casestore.us/assets/hero-warehouse-8CABKWKS.jpg' },
    { key: 'handshake_image', value: 'https://cdn.abacus.ai/images/31e3de8d-020e-4e5b-bb58-bc9026cfa834.png' },
  ]

  for (const item of siteContent) {
    await prisma.siteContent.upsert({
      where: { key: item.key },
      update: {},
      create: item,
    })
  }

  // Seed Products
  const productSeeds = [
    // Viral products
    { category: 'viral', titleTr: 'Isısız Saç Şekillendirme Seti', titleEn: 'Heatless Hair Styling Set', descTr: 'Saçlara zarar vermeden doğal dalgalar oluşturan trend ürün. Sosyal medyada viral olmuş, yüksek satış potansiyeli.', descEn: 'Trending product creating natural waves without heat damage. Viral on social media with high sales potential.', image: 'https://m.media-amazon.com/images/I/51WQm8LJfEL._AC_UF1000,1000_QL80_.jpg', priceTr: '₺50 - ₺120', priceEn: '$5 - $12', sortOrder: 1 },
    { category: 'viral', titleTr: 'LED Projektör Lamba', titleEn: 'LED Flood Light', descTr: 'Dış mekan aydınlatma için yüksek performanslı LED projektör. Enerji tasarruflu ve uzun ömürlü.', descEn: 'High performance LED flood light for outdoor lighting. Energy efficient and long lasting.', image: 'https://www.industry-plaza.com/img/outdoor-led-projector-60-5700k-560w-62720lm-230v-002336678-product_zoom.jpg', priceTr: '₺200 - ₺500', priceEn: '$20 - $50', sortOrder: 2 },
    { category: 'viral', titleTr: 'Akıllı Saat', titleEn: 'Smart Watch', descTr: 'Sağlık takibi, bildirim ve spor özellikleriyle donatılmış akıllı saat. Uygun fiyatlı Çin üretimi.', descEn: 'Smart watch with health tracking, notifications and sports features. Affordable Chinese production.', image: 'https://thumbs.dreamstime.com/b/state-art-smart-watch-white-background-product-photo-138293212.jpg', priceTr: '₺150 - ₺400', priceEn: '$15 - $40', sortOrder: 3 },
    { category: 'viral', titleTr: 'Taşınabilir Blender', titleEn: 'Portable Blender', descTr: 'USB şarjlı mini blender. Smoothie ve meyve suyu hazırlamak için ideal. Kompakt ve taşınabilir.', descEn: 'USB rechargeable mini blender. Ideal for smoothies and juices. Compact and portable.', image: 'https://media.istockphoto.com/id/1414044619/photo/portable-mini-blender-for-making-smoothie-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=IK9LGsRwRmQuq5ME1IUOH2R20dwanMhvra4TpM-u6Eo=', priceTr: '₺80 - ₺200', priceEn: '$8 - $20', sortOrder: 4 },
    { category: 'viral', titleTr: 'Kablosuz Kulaklık', titleEn: 'Wireless Earbuds', descTr: 'Bluetooth 5.0 kablosuz kulaklık. Yüksek ses kalitesi ve uzun pil ömrü. Şarj kutusuyla birlikte.', descEn: 'Bluetooth 5.0 wireless earbuds. High sound quality and long battery life. Includes charging case.', image: 'https://thumbs.dreamstime.com/b/white-wireless-earbuds-charging-case-background-isolated-pair-one-partially-out-its-plain-product-photo-449377087.jpg', priceTr: '₺100 - ₺300', priceEn: '$10 - $30', sortOrder: 5 },
    // Previous projects
    { category: 'previous', titleTr: 'Barmag Tekstil Yedek Parça', titleEn: 'Barmag Textile Spare Parts', descTr: 'Tekstil makineleri için yedek parça tedariği. Fabrika doğrudan temin, kalite kontrol dahil.', descEn: 'Spare parts supply for textile machinery. Direct factory sourcing with quality control.', image: 'https://cdn.techpilot.com/public/120175/featuredParts/b82fcc82-c7cd-4927-af17-7bac51ef2d3d/400x300/t__barmag_fotos_-_logos_-_und_mehr_fotos_neue_fotos_pumpengruppe_19_10_2015.webp', sortOrder: 1 },
    { category: 'previous', titleTr: 'Mutfak Gereçleri Seti', titleEn: 'Kitchen Utensils Set', descTr: 'Paslanmaz çelik mutfak gereçleri seti. Toptan ithalat projesi başarıyla tamamlandı.', descEn: 'Stainless steel kitchen utensils set. Wholesale import project completed successfully.', image: 'https://m.media-amazon.com/images/I/61sZKHOYwPL._AC_UF894,1000_QL80_.jpg', sortOrder: 2 },
    { category: 'previous', titleTr: 'Araç İçi Organizer', titleEn: 'Car Trunk Organizer', descTr: 'Araç bagajı için katlanabilir organizer. Amazon ve e-ticaret satışı için ideal.', descEn: 'Foldable car trunk organizer. Ideal for Amazon and e-commerce sales.', image: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2Farchive%2F81c467a4683f57583439e8e0c452f636727f9769', sortOrder: 3 },
    { category: 'previous', titleTr: 'Telefon Aksesuar Seti', titleEn: 'Phone Accessories Set', descTr: 'Telefon kılıfı, şarj kablosu ve adaptör seti. Perakende satış için paketlenmiş.', descEn: 'Phone case, charging cable and adapter set. Packaged for retail sales.', image: 'https://img.magnific.com/free-vector/realistic-set-different-wired-wireless-audio-equipment-music-listening-smartphones-gaming-isolated-vector-illustration_1284-81532.jpg?semt=ais_hybrid&w=740&q=80', sortOrder: 4 },
    // Alibaba trending
    { category: 'alibaba', titleTr: 'Dekoratif LED Sarkıt Lamba', titleEn: 'Decorative LED Pendant Lamp', descTr: 'Modern tasarım dekoratif aydınlatma. Restoran, kafe ve ev kullanımına uygun.', descEn: 'Modern design decorative lighting. Suitable for restaurants, cafes and home use.', image: 'https://www.assets.cooperlighting.com/is/image/CLS/prentalux-210-thumb-white?wid=960&hei=720&qlt=82', priceTr: '₺300 - ₺800', priceEn: '$30 - $80', sortOrder: 1 },
    { category: 'alibaba', titleTr: 'Endüstriyel LED Panel', titleEn: 'Industrial LED Panel', descTr: 'Ofis ve endüstriyel alanlara uygun yüksek lümen LED panel aydınlatma.', descEn: 'High lumen LED panel lighting for office and industrial areas.', image: 'https://nvcuk.net/_panel/public/site-panel/products-subcategories/223/id223-image_1768903494.png', priceTr: '₺150 - ₺400', priceEn: '$15 - $40', sortOrder: 2 },
    { category: 'alibaba', titleTr: 'Solar Bahçe Aydınlatma', titleEn: 'Solar Garden Lights', descTr: 'Güneş enerjili bahçe aydınlatma seti. Kablo gerektirmez, kolay kurulum.', descEn: 'Solar powered garden lighting set. No wiring needed, easy installation.', image: 'https://m.media-amazon.com/images/I/41BfKG6PNpL.jpg', priceTr: '₺50 - ₺150', priceEn: '$5 - $15', sortOrder: 3 },
  ]

  for (const p of productSeeds) {
    const existing = await prisma.product.findFirst({ where: { titleTr: p.titleTr, category: p.category } })
    if (!existing) {
      await prisma.product.create({ data: { ...p, published: true } })
    }
  }
  console.log('Products seeded')

  // Seed Testimonials
  const testimonialSeeds = [
    { name: 'Ahmet Yılmaz', company: 'Yılmaz Mobilya', role: 'Genel Müdür', textTr: 'Çin\'den mobilya hammaddesi ithalatında çok profesyonel bir hizmet aldık. Kalite kontrol süreçleri ve lojistik yönetimi mükemmeldi. Kesinlikle tavsiye ediyorum.', textEn: 'We received a very professional service in importing furniture raw materials from China. Quality control processes and logistics management were excellent. Highly recommended.', rating: 5, sortOrder: 1 },
    { name: 'Fatma Demir', company: 'DekoPlus', role: 'Satın Alma Müdürü', textTr: 'DİR belgesi ile ithalat sürecinde büyük kolaylık sağladılar. Vergisiz ithalat avantajıyla maliyetlerimizi önemli ölçüde düşürdük.', textEn: 'They provided great convenience in the import process with IPR certificate. We significantly reduced our costs with tax-free import advantage.', rating: 5, sortOrder: 2 },
    { name: 'Mehmet Kaya', company: 'KayaTech', role: 'Kurucu', textTr: 'Amazon satışlarımız için Çin\'den ürün tedariğinde güvenilir bir partner bulduk. Numune sürecinden sevkiyata kadar her adımda destek aldık.', textEn: 'We found a reliable partner for product sourcing from China for our Amazon sales. We received support at every step from sampling to shipment.', rating: 5, sortOrder: 3 },
    { name: 'Elif Şahin', company: 'ES Tekstil', role: 'İhracat Sorumlusu', textTr: 'Çin fuarlarında tercüman desteği ve tedarikçi doğrulama hizmeti sayesinde güvenle iş ortağı bulabildik. Profesyonel ve güvenilir bir ekip.', textEn: 'Thanks to interpreter support and supplier verification at Chinese fairs, we were able to find business partners with confidence. A professional and reliable team.', rating: 5, sortOrder: 4 },
    { name: 'Can Özturk', company: 'Global Import Co.', role: 'CEO', textTr: 'Yıllardır Çin\'den ithalat yapıyoruz ama bu ekiple çalışmaya başladıktan sonra süreçlerimiz çok daha verimli hale geldi. Gümrük ve lojistik danışmanlıkları paha biçilemez.', textEn: 'We have been importing from China for years, but after working with this team, our processes became much more efficient. Their customs and logistics consultancy is invaluable.', rating: 5, sortOrder: 5 },
    { name: 'Zeynep Arslan', company: 'Arslan E-Ticaret', role: 'Genel Müdür', textTr: 'E-ticaret ürünlerimizin tedariğinde mükemmel bir iş çıkardılar. Ürünler tam istediğimiz kalitede ve zamanında geldi.', textEn: 'They did an excellent job in sourcing our e-commerce products. Products arrived on time and in exactly the quality we wanted.', rating: 5, sortOrder: 6 },
  ]

  for (const t of testimonialSeeds) {
    const existing = await prisma.testimonial.findFirst({ where: { name: t.name } })
    if (!existing) {
      await prisma.testimonial.create({ data: { ...t, published: true } })
    }
  }
  console.log('Testimonials seeded')

  console.log('Seeding complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
