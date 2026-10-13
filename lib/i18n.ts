export type Locale = 'tr' | 'en'

export const translations = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      services: 'Hizmetlerimiz',
      process: 'Süreç',
      about: 'Hakkımızda',
      blog: 'Faydalı Bilgiler',
      plywood: 'ABD İthalat Rehberi',
      viral: 'Viral Ürünler',
      previous: 'Önceki Projeler',
      alibaba: 'Alibaba Trend',
      contact: 'İletişim',
    },
    hero: {
      title: 'Çin\'den ABD\'ye İthalat Danışmanlığı',
      subtitle: 'ABD\'deki Türk Girişimcilere Özel',
      description: 'Çin\'den ABD\'ye ürün tedariği, gümrük, tarifeler ve lojistik süreçlerinde profesyonel danışmanlık hizmeti sunuyoruz.',
      cta: 'Ücretsiz Danışmanlık',
      cta2: 'Hizmetlerimizi Keşfedin',
    },
    services: {
      title: 'Hizmetlerimiz',
      subtitle: 'Çin ithalatının her aşamasında yanınızdayız',
      sourcing: {
        title: 'Ürün Tedariği',
        desc: 'Çin pazarında ihtiyacınız olan ürünleri en uygun fiyat ve kalitede araştırıyor, güvenilir tedarikçilerle buluşturuyoruz.',
      },
      quality: {
        title: 'Kalite Kontrol',
        desc: 'Numune temini, fabrika denetimi ve üretim sürecinde kalite kontrol hizmetleri ile ürün kalitesini garanti altına alıyoruz.',
      },
      logistics: {
        title: 'Lojistik & Nakliye',
        desc: 'Deniz yolu, hava yolu ve kara yolu ile uluslararası nakliye organizasyonu ve takibi.',
      },
      customs: {
        title: 'Gümrükleme',
        desc: 'Gümrük mevzuatına uygun belge hazırlığı, tarife tespiti ve gümrük işlemlerinin eksiksiz takibi.',
      },
      ecommerce: {
        title: 'E-Ticaret Çözümleri',
        desc: 'Amazon FBA, Etsy ve diğer platformlar için özel markalı ürün tedariği, barkodlama ve depolama hizmetleri.',
      },
      consulting: {
        title: 'Satın Alma Danışmanlığı',
        desc: 'Üreticilerle sözleşme yönetimi, fiyat müzakeresi ve satın alma süreçlerinin profesyonel yönetimi.',
      },
    },
    process: {
      title: 'Nasıl Çalışırız?',
      subtitle: 'Adım adım ithalat süreci',
      steps: [
        { title: 'İhtiyaç Analizi', desc: 'Ürün gereksinimlerinizi detaylı olarak analiz ediyoruz.' },
        { title: 'Tedarikçi Araştırması', desc: 'Çin\'deki güvenilir tedarikçileri araştırıp karşılaştırıyoruz.' },
        { title: 'Numune & Kalite Kontrol', desc: 'Numune siparişi verip kalite kontrollerini gerçekleştiriyoruz.' },
        { title: 'Sipariş & Üretim', desc: 'Siparişi onaylayıp üretim sürecini yakından takip ediyoruz.' },
        { title: 'Lojistik & Gümrük', desc: 'Nakliye ve gümrük işlemlerini eksiksiz yönetiyoruz.' },
        { title: 'Teslimat', desc: 'Ürünlerinizi güvenle kapınıza teslim ediyoruz.' },
      ],
    },
    about: {
      title: 'Hakkımızda',
      subtitle: 'ABD\'deki Türk Girişimcilere Özel',
      description: 'Çin\'den Al Sat İthalat Danışmanlığı olarak, ABD\'de yaşayan ve iş yapan Türk girişimcilere özel Çin ithalat danışmanlık hizmeti sunuyoruz. Gümrük, tarifeler ve lojistik süreçlerinde uzman ekibimizle yanınızdayız.',
      experience: 'ABD gümrük mevzuatı, HTS kodları, Section 301 tarifeleri ve e-ticaret lojistik süreçlerinde deneyimliyiz. Amazon FBA, Etsy ve kendi marka ürünleriniz için uçtan uca destek sunuyoruz.',
      stats: {
        clients: 'Mutlu Müşteri',
        products: 'Tedarik Edilen Ürün',
        countries: 'Ülkeye Teslimat',
        experience: 'Yıllık Deneyim',
      },
    },
    contact: {
      title: 'Bize Ulaşın',
      subtitle: 'Sorularınız için 7/24 hizmetinizdeyiz',
      form: {
        name: 'Ad Soyad',
        email: 'E-posta Adresi',
        phone: 'Telefon',
        company: 'Şirket Adı',
        subject: 'Konu',
        message: 'Mesajınız',
        submit: 'Mesaj Gönder',
        sending: 'Gönderiliyor...',
        success: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.',
        error: 'Bir hata oluştu. Lütfen tekrar deneyin.',
      },
      info: {
        phone: 'Telefon',
        email: 'E-posta',
        whatsapp: 'WhatsApp',
        address: 'Adres',
      },
    },
    footer: {
      rights: 'Tüm hakları saklıdır.',
      description: 'Çin ithalatında güvenilir danışmanlık ortağınız.',
    },
    cta: {
      title: 'İthalat Projenizi Başlatmaya Hazır mısınız?',
      description: 'Uzman ekibimizle iletişime geçin ve Çin\'den ithalat sürecinizi hemen başlatın.',
      button: 'Bize Ulaşın',
    },
    usImport: {
      title: 'ABD İthalat Rehberi',
      subtitle: 'Çin\'den ABD\'ye ithalat için bilmeniz gereken her şey',
      description: 'ABD gümrük kuralları, tarifeler, vergi ve ithalat süreçleri hakkında kapsamlı rehber.',
      sections: {
        customs: {
          title: 'ABD Gümrük Kuralları',
          items: [
            'ABD\'ye ithalat yapmak için özel bir lisans gerekmiyor, ancak tüm ithalatçıların bir IRS numarası olmalı',
            'Her ürünün HTS (Harmonized Tariff Schedule) koduna göre sınıflandırılması gerekiyor',
            'Gümrük bedeli ürünün CIF değeri (maliyet + sigorta + nakliye) üzerinden hesaplanıyor',
            'Kargo değeri $800\'in altında olanlar Mini Summits muafiyetinden yararlanabilir (değişebilir)',
            'Tüm belgelerin doğru ve eksiksiz olması gerekiyor — hatalı beyan gecikmelere ve cezalara yol açar',
          ],
        },
        tariffs: {
          title: 'Tarifeler ve Vergiler',
          items: [
            'Çin\'den gelen ürünlere ek tarifeler uygulanıyor (Section 301) — %7.5 ile %25 arası değişiyor',
            'Her ürünün HTS kodunu öğrenmek için CBP Interactive Tariff Database kullanabilirsiniz',
            'Gümrük vergisi ürünün CIF değeri üzerinden hesaplanıyor',
            'Bazı ürürlere ek güvenlik tarifeleri (antidumping) uygulanabilir',
            'Tarifeler sürekli değişiyor — güncel listeyi CBP web sitesinden takip edin',
          ],
        },
        process: {
          title: 'İthalat Süreci Adımları',
          items: [
            '1. Ürünü ve HTS kodunu belirle — doğru kod doğru vergi demek',
            '2. Tedarikçi bul ve numune iste — kalite kontrolü ihaleden önce yap',
            '3. Fiyat ve şartları netleştir — FOB, CIF gibi Incoterms\'ı belirle',
            '4. Nakliye düzenle — deniz (hazne) veya hava (hızlı) seçenekleri',
            '5. Gümrük beyanı — ISF (Importer Security Filing) 24 saat önceden yapılmalı',
            '6. Gümrük kontrolü ve vergi ödeme — CBP inceler, vergini öde',
            '7. Ürün serbest bırakılır — depoya veya FBA warehouse\'e teslim',
          ],
        },
        tips: {
          title: 'İthalat İpuçları',
          items: [
            'Her zaman HTS kodunu kontrol et — yanlış kod ceza demek',
            'Numune mutlaka al — kalite kontrolü ihaleden önce yap',
            'Gümrük komisyoncusu (customs broker) tut — profesyonel destek önemli',
            'ASEAN ülkelerinden alternatif tedarikçi ara — tarifeler düşük olabilir',
            'Amazon FBA için doğru barkod ve etiketleme şart',
            'Sigorta yaptır — nakliye sırasında hasar riskine karşı',
            'Gümrük iadesi (drawback) fırsatlarını ara — vergi iade edilebilir',
            'Her yıl tarifeleri güncelle — Çin-ABD ticaret sürekli değişiyor',
          ],
        },
        states: {
          title: 'Eyalet Vergileri ve Dağıtım',
          items: [
            'ABD\'de federal gümrük vergisi eyaletten bağımsız — tek tip',
            'Ancak satış vergisi (sales tax) eyalete göre değişiyor — bazı eyaletlerde muaf',
            'Dağıtım için FBA (Amazon FBA), 3PL veya kendi depo kombinasyonu',
            'E-ticaret için çoklu kanal stratejisi önerilir',
            'Dropshipping veya wholesale — iki farklı model, farklı vergi sonuçları',
          ],
        },
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      process: 'Process',
      about: 'About Us',
      blog: 'Useful Info',
      plywood: 'US Import Guide',
      viral: 'Viral Products',
      previous: 'Past Projects',
      alibaba: 'Alibaba Trends',
      contact: 'Contact',
    },
    hero: {
      title: 'China to USA Import Consultancy',
      subtitle: 'For Turkish Entrepreneurs in the USA',
      description: 'Professional consultancy for product sourcing, customs, tariffs and logistics from China to the USA.',
      cta: 'Free Consultation',
      cta2: 'Explore Our Services',
    },
    services: {
      title: 'Our Services',
      subtitle: 'We are with you at every stage of China import',
      sourcing: {
        title: 'Product Sourcing',
        desc: 'We research the products you need in the Chinese market at the best price and quality, connecting you with reliable suppliers.',
      },
      quality: {
        title: 'Quality Control',
        desc: 'Sample procurement, factory inspection and quality control services during the production process to guarantee product quality.',
      },
      logistics: {
        title: 'Logistics & Shipping',
        desc: 'International shipping organization and tracking via sea, air and land routes.',
      },
      customs: {
        title: 'Customs Clearance',
        desc: 'Document preparation compliant with customs regulations, tariff determination and complete follow-up of customs procedures.',
      },
      ecommerce: {
        title: 'E-Commerce Solutions',
        desc: 'Private label product sourcing, barcoding and storage services for Amazon FBA, Etsy and other platforms.',
      },
      consulting: {
        title: 'Purchasing Consultancy',
        desc: 'Contract management with manufacturers, price negotiation and professional management of purchasing processes.',
      },
    },
    process: {
      title: 'How We Work',
      subtitle: 'Step by step import process',
      steps: [
        { title: 'Needs Analysis', desc: 'We analyze your product requirements in detail.' },
        { title: 'Supplier Research', desc: 'We research and compare reliable suppliers in China.' },
        { title: 'Sample & QC', desc: 'We order samples and perform quality controls.' },
        { title: 'Order & Production', desc: 'We confirm the order and closely monitor the production.' },
        { title: 'Logistics & Customs', desc: 'We manage shipping and customs procedures completely.' },
        { title: 'Delivery', desc: 'We safely deliver your products to your door.' },
      ],
    },
    about: {
      title: 'About Us',
      subtitle: 'For Turkish Entrepreneurs in the USA',
      description: 'As Çin\'den Al Sat Import Consultancy, we provide specialized China import consultancy for Turkish entrepreneurs living and doing business in the USA. Our expert team supports you through customs, tariffs and logistics.',
      experience: 'We have hands-on experience with US customs regulations, HTS codes, Section 301 tariffs and e-commerce logistics. We offer end-to-end support for Amazon FBA, Etsy and your own private-label products.',
      stats: {
        clients: 'Happy Clients',
        products: 'Products Sourced',
        countries: 'Countries Delivered',
        experience: 'Years Experience',
      },
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are at your service 24/7 for your questions',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone',
        company: 'Company Name',
        subject: 'Subject',
        message: 'Your Message',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Your message has been sent successfully! We will get back to you as soon as possible.',
        error: 'An error occurred. Please try again.',
      },
      info: {
        phone: 'Phone',
        email: 'Email',
        whatsapp: 'WhatsApp',
        address: 'Address',
      },
    },
    footer: {
      rights: 'All rights reserved.',
      description: 'Your trusted consultancy partner in China import.',
    },
    cta: {
      title: 'Ready to Start Your Import Project?',
      description: 'Contact our expert team and start your import process from China right away.',
      button: 'Contact Us',
    },
    usImport: {
      title: 'US Import Guide',
      subtitle: 'Everything you need to know about importing from China to the USA',
      description: 'A comprehensive guide to US customs rules, tariffs, taxes and import processes.',
      sections: {
        customs: {
          title: 'US Customs Rules',
          items: [
            'No special license is required to import into the US, but all importers must have an IRS number',
            'Every product must be classified under its HTS (Harmonized Tariff Schedule) code',
            'Duty is calculated on the CIF value (cost + insurance + freight)',
            'Shipments valued under $800 may qualify for the Mini Summits exemption (subject to change)',
            'All documents must be accurate and complete — errors cause delays and penalties',
          ],
        },
        tariffs: {
          title: 'Tariffs & Duties',
          items: [
            'Additional tariffs apply to goods from China (Section 301) — ranging from 7.5% to 25%',
            'Use the CBP Interactive Tariff Database to find the HTS code for your product',
            'Duty is calculated on the CIF value of the product',
            'Additional safeguard tariffs (antidumping) may apply to certain products',
            'Tariffs change frequently — always check the latest CBP updates',
          ],
        },
        process: {
          title: 'Import Process Steps',
          items: [
            '1. Identify product and HTS code — correct code means correct duty',
            '2. Find supplier and request samples — QC before ordering',
            '3. Finalize price and terms — define Incoterms like FOB, CIF',
            '4. Arrange shipping — sea (economical) or air (fast) options',
            '5. File customs entry — ISF (Importer Security Filing) 24 hours before departure',
            '6. Customs inspection and duty payment — CBP reviews, you pay',
            '7. Goods released — delivered to warehouse or FBA fulfillment center',
          ],
        },
        tips: {
          title: 'Import Tips',
          items: [
            'Always verify the HTS code — wrong code means penalties',
            'Always order samples — QC before placing the order',
            'Hire a customs broker — professional guidance is essential',
            'Explore alternative suppliers from ASEAN countries — lower tariffs',
            'Amazon FBA requires correct labeling and barcoding',
            'Get insurance — protect against transit damage',
            'Look into duty drawback opportunities — duty can be refunded',
            'Update tariff knowledge annually — China-US trade rules change constantly',
          ],
        },
        states: {
          title: 'State Taxes & Distribution',
          items: [
            'US federal duty is uniform across all states — single rate',
            'However, sales tax varies by state — some states are exempt',
            'Distribution via FBA (Amazon FBA), 3PL, or your own warehouse',
            'For e-commerce, a multi-channel strategy is recommended',
            'Dropshipping vs wholesale — two different models, different tax implications',
          ],
        },
      },
    },
  },
} as const

export function getTranslations(locale: Locale) {
  return translations[locale] ?? translations.tr
}
