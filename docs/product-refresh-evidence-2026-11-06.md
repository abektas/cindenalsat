# Product refresh — 6 Kasım 2026

## Onaylanan kapsam

- Trend adayları: **T01–T11, T13–T15** (14 ürün). **T12 hariçtir**.
- Alibaba tedarik adayları: **A01–A15** (15 ürün).
- Eski viral/Alibaba listeleri bu iki sayfada artık gösterilmemelidir. `lib/products-data.ts` otomatik üretilmiş olarak işaretli ve üretici/canonical kaynak bu depoda bulunmadığından değiştirilmedi; sayfa bileşenleri için dar kapsamlı yerel override `lib/product-refresh-catalog.ts` içinde tutulur. Bu, canonical kaynakla senkronizasyon için açık bir source-of-truth boşluğudur.

## Kanıt sınırları

- Trend adayları 6 Kasım 2026 tarihli Amazon.com Best Sellers kategori sıralamalarından seçildi. Sıra satış adedi değildir. Kaynak ekranında teslimat bölgesi Türkiye görünüyordu; ABD stok/fiyatı, exact ürün varyantı ve ithalat uygunluğu doğrulanmadı. Bu yüzden perakende/fabrika fiyatı gösterilmez ve TikTok viralitesi iddiası yapılmaz.
- Alibaba adaylarının fiyat aralığı, MOQ, görünen satış sayısı ve satıcı adı yalnızca Hot Selling liste kartı anlık görüntüsünden aktarılmıştır. Doğrudan ürün detay sayfası, güncel teklif, varyant, numune, kargo ve uygunluk doğrulanmamıştır. Liste aralığı “Alibaba liste görünümü” etiketiyle gösterilir; bütün kayıtlar `NEEDS_REVIEW` kalır. Satış sayısının dönemi belirtilmemiştir.
- Kart görselleri onay galerisindeki Amazon/Alibaba liste kartlarından alınmış kırpmalardır; 1200×1200 beyaz zeminli biçime çevrilmiştir. Bunlar ürün detay sayfası görseli veya marka/IP/uygunluk onayı değildir.

## Görsel eşlemesi

Yeni varlıklar `public/images/product-refresh/` altında bulunur. T12 için görsel veya kayıt yoktur. SHA-256 değerleri, onay galerisindeki kırpımlar ile yayımlanacak türevleri eşleyen `docs/product-refresh-image-hashes-2026-11-06.csv` dosyasında tutulur. Kartlardaki `MATCHED` yalnızca kırpımın ilgili ürün kimliğine eşlenmiş ve onaylanan kartta gösterilmiş olduğunu ifade eder; marka/IP hakkı, ticari kullanım izni, teknik varyant veya yayın kalitesi onayı değildir. Test, 14 trend ve 15 Alibaba görselinin bulunduğunu, hiçbir fiyat alanında doğrulanmamış fabrika/perakende fiyatı tutulmadığını ve tüm adayların `NEEDS_REVIEW` durumunda kaldığını doğrular.

## Kaynaklar

- Amazon.com Best Sellers: https://www.amazon.com/Best-Sellers/zgbs
- Alibaba Hot Selling Products: https://www.alibaba.com/picks/hot-selling-products.html
- Onay galerisi: `/home/selam/.hermes/cache/scratch/new-trend-alibaba-review-2026-11-06.html`
- Onay kaydı: kullanıcı “t12 hariç hepsini onaylıyorum” dedi; T12 dışındaki 29 kart uygulandı.
