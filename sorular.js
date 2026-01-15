
// Yazılım Mimarileri (1-3) – 50 Soruluk Sınav Soru Bankası (MCQ)
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]

window.questionBank = [
  // =========================================================
  // ==== 1. HAFTA – Yazılım Mimarisi Temelleri (17 Soru) =====
  // =========================================================
  {
    q: "Yazılım mimarisi (software architecture) en doğru hangi ifadeyle tanımlanır?",
    t: "mcq",
    o: [
      "Sadece arayüz (UI) tasarımının renk ve font seçimleri",
      "Bir uygulamanın kaynak kodundaki tüm fonksiyonların sıralı listesi",
      "Bir sistemin bileşenleri, bu bileşenlerin ilişkileri ve bu ilişkileri yöneten temel kararlar bütünü",
      "Yalnızca veritabanı tablolarının şeması",
      "Sadece test senaryolarının dokümantasyonu"
    ],
    a: "Bir sistemin bileşenleri, bu bileşenlerin ilişkileri ve bu ilişkileri yöneten temel kararlar bütünü",
    difficulty: "easy",
    week: 1,
    topic: "Mimari - tanım",
    importance: "high",
    explanation:
      "Mimari; sistemin ana parçalarını (bileşenleri), aralarındaki iletişimi/bağımlılığı ve bunları belirleyen kritik kararları kapsar. UI, veritabanı veya test tek başına “mimari” değildir; mimari hepsini üst seviyede organize eden iskelet yapıdır."
  },
  {
    q: "Mimari (architecture) ile tasarım (design) arasındaki en doğru ayrım hangisidir?",
    t: "mcq",
    o: [
      "Mimari sadece kod yazımıdır; tasarım sadece testtir",
      "Mimari büyük resim/ana kararlar; tasarım ise bileşen içi detay çözümleridir",
      "Mimari sadece UI çizimi; tasarım sadece veritabanıdır",
      "Mimari sadece küçük projelerde; tasarım sadece büyük projelerde kullanılır",
      "Aralarında fark yoktur; ikisi aynı kavramdır"
    ],
    a: "Mimari büyük resim/ana kararlar; tasarım ise bileşen içi detay çözümleridir",
    difficulty: "easy",
    week: 1,
    topic: "Mimari vs Tasarım",
    importance: "high",
    explanation:
      "Mimari; katmanlar, servisler, iletişim protokolleri, dağıtım/topoloji gibi “ana omurga” kararlarıdır. Tasarım ise bu omurganın içinde sınıflar, metodlar, veri yapıları gibi daha detaylı çözümlerdir. Sınavda bu ayrım sık sorulur."
  },
  {
    q: "Aşağıdakilerden hangisi bir sistemin “paydaşı” (stakeholder) değildir?",
    t: "mcq",
    o: [
      "Son kullanıcı",
      "Müşteri/iş sahibi",
      "Geliştirici ekip",
      "Sunucudaki RAM modülü (donanım parçası)",
      "Test/QA ekibi"
    ],
    a: "Sunucudaki RAM modülü (donanım parçası)",
    difficulty: "easy",
    week: 1,
    topic: "Paydaşlar",
    importance: "medium",
    explanation:
      "Paydaş; sistemden beklentisi olan insan/rol/gruptur (kullanıcı, müşteri, geliştirici, operasyon, güvenlik vb.). Donanım bileşeni paydaş değildir; paydaş “beklentisi olan taraf”tır."
  },
  {
    q: "Fonksiyonel gereksinim (functional requirement) aşağıdakilerden hangisine örnektir?",
    t: "mcq",
    o: [
      "Sistem 2 saniyeden kısa sürede yanıt vermelidir",
      "Uygulama %99.9 erişilebilir olmalıdır",
      "Kullanıcı e-posta ve şifre ile giriş yapabilmelidir",
      "Sistem KVKK/GDPR uyumlu olmalıdır",
      "Uygulama engelli kullanıcılar için ekran okuyucu desteklemelidir"
    ],
    a: "Kullanıcı e-posta ve şifre ile giriş yapabilmelidir",
    difficulty: "easy",
    week: 1,
    topic: "Gereksinimler - fonksiyonel",
    importance: "high",
    explanation:
      "Fonksiyonel gereksinim “sistem ne yapacak?” sorusunun cevabıdır: giriş, kayıt, sipariş oluşturma, ödeme alma gibi işlevler. Diğer seçenekler performans/erişilebilirlik/yasal uyum gibi fonksiyonel olmayan (kalite) gereksinimlerdir."
  },
  {
    q: "Fonksiyonel olmayan gereksinim (non-functional requirement) en doğru neyi ifade eder?",
    t: "mcq",
    o: [
      "Sistemin hangi özellikleri sunduğunu",
      "Sistemin kalitesini/çıktı standartlarını (performans, güvenlik, kullanılabilirlik vb.)",
      "Sadece veritabanı tablolarını",
      "Sadece UI ekran sayısını",
      "Kodun kaç satır olduğunu"
    ],
    a: "Sistemin kalitesini/çıktı standartlarını (performans, güvenlik, kullanılabilirlik vb.)",
    difficulty: "easy",
    week: 1,
    topic: "Gereksinimler - NFR",
    importance: "high",
    explanation:
      "NFR = kalite hedefleri. Örn: hızlı olsun, güvenli olsun, ölçeklenebilir olsun, kolay bakılsın. Mimari kararlar çoğu zaman NFR’leri karşılamak için alınır."
  },
  {
    q: "Aşağıdakilerden hangisi “ölçeklenebilirlik (scalability)” kavramını en doğru anlatır?",
    t: "mcq",
    o: [
      "Sistemin ekran tasarımının responsive olması",
      "Sistemin kullanıcı sayısı artınca performansı koruyacak şekilde büyüyebilmesi",
      "Sistemin kaynak kodunun daha kısa olması",
      "Sistemin internet olmadan çalışması",
      "Sistemin sadece tek kullanıcıya hizmet vermesi"
    ],
    a: "Sistemin kullanıcı sayısı artınca performansı koruyacak şekilde büyüyebilmesi",
    difficulty: "medium",
    week: 1,
    topic: "Kalite nitelikleri - ölçeklenebilirlik",
    importance: "high",
    explanation:
      "Ölçeklenebilirlik; yük arttığında sistemi daha güçlü hale getirerek (dikey) veya daha fazla node ekleyerek (yatay) performansı koruyabilmektir. UI responsive = ekran uyumu; ölçeklenebilirlik değildir."
  },
  {
    q: "Performans ile ölçeklenebilirlik arasındaki en doğru fark hangisidir?",
    t: "mcq",
    o: [
      "Performans: hız/yanıt süresi; ölçeklenebilirlik: artan yükte büyüyebilme",
      "Performans: sadece güvenlik; ölçeklenebilirlik: sadece UI",
      "Performans: sadece veri tabanı; ölçeklenebilirlik: sadece test",
      "İkisi aynı kavramdır",
      "Performans: bakım; ölçeklenebilirlik: dokümantasyon"
    ],
    a: "Performans: hız/yanıt süresi; ölçeklenebilirlik: artan yükte büyüyebilme",
    difficulty: "medium",
    week: 1,
    topic: "Kalite nitelikleri - performans vs scalability",
    importance: "high",
    explanation:
      "Performans ‘şu anda ne kadar hızlı?’ sorusudur. Ölçeklenebilirlik ‘yük artınca aynı hızı koruyacak şekilde büyüyebilir miyim?’ sorusudur. Karıştırılan klasik sınav konusudur."
  },
  {
    q: "Aşağıdakilerden hangisi “kısıt (constraint)” örneğidir?",
    t: "mcq",
    o: [
      "Kullanıcı sipariş verebilmelidir",
      "Sistem çok güzel görünmelidir",
      "Uygulama sadece Java ile geliştirilecektir (teknoloji zorunluluğu)",
      "Uygulama 1 saniyede yanıt vermelidir",
      "Kullanıcılar ürünleri listeleyebilmelidir"
    ],
    a: "Uygulama sadece Java ile geliştirilecektir (teknoloji zorunluluğu)",
    difficulty: "medium",
    week: 1,
    topic: "Kısıtlar",
    importance: "medium",
    explanation:
      "Kısıt; seçenekleri sınırlar: belirli dil/altyapı/uyumluluk zorunluluğu gibi. Fonksiyonel gereksinim ‘ne yapacak’ der; NFR ‘ne kadar iyi’ der; kısıt ‘bunu şu şartla yapacaksın’ der."
  },
  {
    q: "Bir mimari kararın en tipik çıktısı aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Renk paleti dosyası",
      "Sadece kod satırı sayısı",
      "Kararın gerekçesi ve etkilerini açıklayan kayıt (örn. ADR - Architectural Decision Record)",
      "Sadece kullanıcı şikayetleri listesi",
      "Otomatik oluşturulmuş ekran görüntüleri"
    ],
    a: "Kararın gerekçesi ve etkilerini açıklayan kayıt (örn. ADR - Architectural Decision Record)",
    difficulty: "medium",
    week: 1,
    topic: "Mimari kararlar - ADR",
    importance: "medium",
    explanation:
      "ADR; “neden bu kararı aldık, alternatifler neydi, artı/eksi etkileri ne?” gibi bilgileri kayıt altına alır. Bu, ileride ekip değişince veya sorun çıkınca ‘niye böyle yaptık?’ sorusunun cevabıdır."
  },
  {
    q: "“Trade-off (ödünleşim)” kavramı mimaride neyi anlatır?",
    t: "mcq",
    o: [
      "Bir özelliği ücretsiz yapmak",
      "Bir kalite hedefini artırırken başka bir kalite hedefinde bedel ödemek",
      "Sadece kodu kopyalamak",
      "Sadece dokümantasyonu azaltmak",
      "Sunucu fiyatını düşürmek"
    ],
    a: "Bir kalite hedefini artırırken başka bir kalite hedefinde bedel ödemek",
    difficulty: "medium",
    week: 1,
    topic: "Trade-off",
    importance: "high",
    explanation:
      "Örn: Güvenliği artırmak bazen kullanım kolaylığını azaltabilir. Performansı artırmak bazen geliştirme maliyetini yükseltir. Mimari çoğunlukla bu dengeyi kurma işidir."
  },
  {
    q: "Yüksek bağlılık (high coupling) genellikle hangi sonuca yol açar?",
    t: "mcq",
    o: [
      "Değişikliklerin daha kolay ve risksiz olmasına",
      "Bir modüldeki değişikliğin diğer modülleri de kırma riskinin artmasına",
      "Test yazmanın gereksiz hale gelmesine",
      "Sistemin otomatik ölçeklenmesine",
      "UI’ın otomatik güzelleşmesine"
    ],
    a: "Bir modüldeki değişikliğin diğer modülleri de kırma riskinin artmasına",
    difficulty: "medium",
    week: 1,
    topic: "Coupling",
    importance: "high",
    explanation:
      "Coupling (bağlılık) yüksekse modüller birbirine aşırı bağımlıdır. Bir yerde yapılan değişiklik domino etkisi yaratır. İyi mimari genelde düşük coupling + yüksek cohesion hedefler."
  },
  {
    q: "Yüksek bütünlük (high cohesion) ne demektir?",
    t: "mcq",
    o: [
      "Bir modülün tek bir sorumluluğa odaklanması ve iç işlerinin birbiriyle ilgili olması",
      "Bir modülün her işi yapması (her şey onda toplanması)",
      "Modüller arası bağımlılığın artması",
      "Kodun satır sayısının artması",
      "Veritabanının silinmesi"
    ],
    a: "Bir modülün tek bir sorumluluğa odaklanması ve iç işlerinin birbiriyle ilgili olması",
    difficulty: "easy",
    week: 1,
    topic: "Cohesion",
    importance: "high",
    explanation:
      "Cohesion (bütünlük) yüksekse modül içindeki parçalar aynı amaç için çalışır. Bu, bakım ve test edilebilirliği artırır. “Her şeyi yapan sınıf” cohesion’ı düşürür."
  },
  {
    q: "“Görünüm (view)” kavramı mimari dokümantasyonda en çok neyi sağlar?",
    t: "mcq",
    o: [
      "Kodu otomatik üretmeyi",
      "Farklı paydaşların ihtiyacına göre sistemi farklı açılardan anlatmayı",
      "Sadece ikon çizimini",
      "Sadece veri tabanı yedeğini",
      "Sadece ağ hızını ölçmeyi"
    ],
    a: "Farklı paydaşların ihtiyacına göre sistemi farklı açılardan anlatmayı",
    difficulty: "medium",
    week: 1,
    topic: "Mimari dokümantasyon - views",
    importance: "medium",
    explanation:
      "Tek bir çizim/doküman herkesin ihtiyacını karşılamaz. Yönetici “büyük resim” ister, geliştirici “bileşen ilişkisi” ister, operasyon “dağıtım topolojisi” ister. View’lar bu nedenle kullanılır."
  },
  {
    q: "Bir mimarinin “bakım yapılabilirliği (maintainability)” artırmak için en doğru yaklaşım hangisidir?",
    t: "mcq",
    o: [
      "Tüm kodu tek dosyada toplamak",
      "Modülerleştirmek, sorumlulukları ayırmak ve bağımlılıkları azaltmak",
      "Testleri tamamen kaldırmak",
      "Dokümantasyon yazmamak",
      "Değişiklik taleplerini tamamen reddetmek"
    ],
    a: "Modülerleştirmek, sorumlulukları ayırmak ve bağımlılıkları azaltmak",
    difficulty: "easy",
    week: 1,
    topic: "Maintainability",
    importance: "high",
    explanation:
      "Bakım yapılabilirlik; yeni özellik ekleme/hata düzeltme işinin hızlı ve güvenli yapılabilmesidir. Modüler yapı + düşük coupling bu hedefin temelidir."
  },
  {
    q: "Güvenilirlik (reliability) ile erişilebilirlik (availability) arasındaki en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "İkisi aynıdır; ikisi de UI ile ilgilidir",
      "Reliability: doğru çalışmayı sürdürme; Availability: sistemin erişilebilir/ayakta olma oranı",
      "Reliability: hız; Availability: tasarım",
      "Reliability: sadece veritabanı; Availability: sadece tarayıcı",
      "Reliability: dokümantasyon; Availability: kod satırı"
    ],
    a: "Reliability: doğru çalışmayı sürdürme; Availability: sistemin erişilebilir/ayakta olma oranı",
    difficulty: "hard",
    week: 1,
    topic: "Kalite nitelikleri - reliability vs availability",
    importance: "medium",
    explanation:
      "Availability ‘çalışır durumda olma yüzdesi’ (uptime) gibi düşünülür. Reliability ise hata yapmadan doğru sonuç üretme ve arızasız çalışma yeteneğidir. Sistem ayakta olabilir ama yanlış sonuç üretiyorsa reliability düşüktür."
  },
  {
    q: "Aşağıdakilerden hangisi mimari kararların “geç değişmesinin” en olası sonucudur?",
    t: "mcq",
    o: [
      "Maliyetin genelde düşmesi",
      "Değişiklik maliyetinin artması ve daha büyük refactor ihtiyacı",
      "Test ihtiyacının tamamen bitmesi",
      "UI’ın otomatik düzelmesi",
      "Hiçbir etkisi olmaması"
    ],
    a: "Değişiklik maliyetinin artması ve daha büyük refactor ihtiyacı",
    difficulty: "medium",
    week: 1,
    topic: "Mimari kararların etkisi",
    importance: "high",
    explanation:
      "Mimari kararlar omurgadır. Geç değişirse birçok bileşen etkilenir, yeniden düzenleme (refactor) büyür, risk artar. Bu yüzden mimari kararların gerekçeli alınması ve kayıt altına alınması önemlidir."
  },
  {
    q: "“Architectural style (mimari stil)” ile “design pattern (tasarım deseni)” arasındaki fark için en doğru seçenek hangisidir?",
    t: "mcq",
    o: [
      "Stil: sistemin genel organizasyonu; Pattern: daha lokal/tekrarlayan problem çözümleri",
      "Stil: sadece UI; Pattern: sadece veritabanı",
      "Stil: sadece küçük projelerde; Pattern: sadece büyük projelerde",
      "İkisi tamamen aynıdır",
      "Pattern: sistem topolojisi; Stil: kod satırı"
    ],
    a: "Stil: sistemin genel organizasyonu; Pattern: daha lokal/tekrarlayan problem çözümleri",
    difficulty: "hard",
    week: 1,
    topic: "Stil vs Pattern",
    importance: "medium",
    explanation:
      "Mimari stil (örn. katmanlı, istemci-sunucu) sistemi üst düzeyde şekillendirir. Tasarım deseni (örn. Singleton, Factory) daha küçük ölçekte tekrar eden tasarım problemlerine çözümdür."
  },

  // =========================================================
  // ==== 2. HAFTA – SDLC & Şelale (Waterfall) (16 Soru) ======
  // =========================================================
  {
    q: "SDLC (Software Development Life Cycle) en doğru hangi ifadeyle açıklanır?",
    t: "mcq",
    o: [
      "Sadece kod yazma süresi",
      "Bir yazılımın planlama, geliştirme, test ve bakım dahil uçtan uca yaşam döngüsü",
      "Sadece UI tasarım aşaması",
      "Sadece veritabanı kurulum süreci",
      "Sadece sürüm numarası artırma işlemi"
    ],
    a: "Bir yazılımın planlama, geliştirme, test ve bakım dahil uçtan uca yaşam döngüsü",
    difficulty: "easy",
    week: 2,
    topic: "SDLC - tanım",
    importance: "high",
    explanation:
      "SDLC; fikirden üretime ve bakıma kadar tüm süreci kapsar. Sadece kod yazmak değil; analiz, tasarım, test, dağıtım ve bakım da bu döngünün parçalarıdır."
  },
  {
    q: "Şelale (Waterfall) modelinin temel çalışma mantığı aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Aşamalar arasında sürekli geri dönüş yapılır, sıra önemli değildir",
      "Aşamalar sıralı ilerler; bir aşama bitmeden diğeri başlatılmaz (genel yaklaşım)",
      "Sadece prototip üretmeye dayanır",
      "Test tamamen kaldırılır",
      "Her gün yeni sürüm yayınlanır"
    ],
    a: "Aşamalar sıralı ilerler; bir aşama bitmeden diğeri başlatılmaz (genel yaklaşım)",
    difficulty: "easy",
    week: 2,
    topic: "Waterfall - temel mantık",
    importance: "high",
    explanation:
      "Waterfall; analiz → tasarım → geliştirme → test → dağıtım → bakım gibi sıralı ilerlemeyi hedefler. Pratikte geri dönüş olabilir ama modelin ana fikri ‘aşamaları tamamlayarak ilerleme’dir."
  },
  {
    q: "Waterfall modelinin en güçlü olduğu senaryo aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Gereksinimlerin çok sık değiştiği belirsiz projeler",
      "Gereksinimlerin baştan net olduğu ve değişimin az beklendiği projeler",
      "Kullanıcıyla hiç iletişim kurulamayan ama sürekli yeni fikir gelen projeler",
      "Her gün ürünün yön değiştirdiği startup projeleri",
      "Sadece UI denemeleri yapılan deneysel projeler"
    ],
    a: "Gereksinimlerin baştan net olduğu ve değişimin az beklendiği projeler",
    difficulty: "medium",
    week: 2,
    topic: "Waterfall - uygunluk",
    importance: "high",
    explanation:
      "Waterfall, net ve sabit gereksinimlerde daha rahattır çünkü planlama ve dokümantasyon fazladır. Gereksinim sürekli değişiyorsa model zorlanır; değişiklik maliyeti artar."
  },
  {
    q: "“Gereksinim analizi” aşamasının ana çıktısı (deliverable) aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Çalışan uygulama (APK/EXE)",
      "Gereksinim dokümanı (SRS gibi) ve kabul kriterleri",
      "Sadece veritabanı yedeği",
      "Sadece UI ikon seti",
      "Sadece sunucu log dosyası"
    ],
    a: "Gereksinim dokümanı (SRS gibi) ve kabul kriterleri",
    difficulty: "easy",
    week: 2,
    topic: "SDLC - gereksinim çıktısı",
    importance: "high",
    explanation:
      "Analizin amacı ‘ne yapılacak’ı netleştirmektir. Bu yüzden çıktı çoğunlukla gereksinim dokümanıdır. Kabul kriterleri de ‘bitti sayılması için ne olmalı’ sorusunu netleştirir."
  },
  {
    q: "Doğrulama (verification) ile geçerleme/validasyon (validation) arasındaki en doğru ayrım hangisidir?",
    t: "mcq",
    o: [
      "Verification: doğru ürünü yapmak; Validation: ürünü doğru yapmak",
      "Verification: spesifikasyona uygun mu? Validation: gerçekten ihtiyaç mı?",
      "Verification sadece UI içindir; Validation sadece veritabanı içindir",
      "İkisi aynı kavramdır",
      "Validation: derleme; Verification: internet bağlantısı"
    ],
    a: "Verification: spesifikasyona uygun mu? Validation: gerçekten ihtiyaç mı?",
    difficulty: "hard",
    week: 2,
    topic: "Verification vs Validation",
    importance: "medium",
    explanation:
      "Verification ‘dokümana uygun yaptın mı?’ (spesifikasyon kontrolü) sorusudur. Validation ‘kullanıcının ihtiyacını karşılıyor mu?’ sorusudur. Sınavlarda çok karıştırılır."
  },
  {
    q: "Waterfall modelinde en sık eleştirilen risklerden biri aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Erken aşamada çalışan ürün görülmesi",
      "Hataların ve yanlış anlaşılmaların geç fark edilmesi",
      "Sürekli kullanıcı geri bildirimi alınması",
      "Her sprint sonunda demo yapılması",
      "WIP limitlerinin aşılması"
    ],
    a: "Hataların ve yanlış anlaşılmaların geç fark edilmesi",
    difficulty: "medium",
    week: 2,
    topic: "Waterfall - dezavantaj",
    importance: "high",
    explanation:
      "Çalışan ürün genelde geç ortaya çıktığı için kullanıcı ‘böyle istememiştim’ dediğinde dönüş maliyeti yükselir. Bu yüzden Waterfall’da yanlış anlaşılma riski daha geç görünür."
  },
  {
    q: "Aşağıdakilerden hangisi SDLC’de “bakım (maintenance)” kapsamına girer?",
    t: "mcq",
    o: [
      "İlk gereksinim toplantısını yapmak",
      "Yeni çıkan işletim sistemi sürümüne uyum için düzenleme yapmak",
      "İlk tasarım diyagramlarını çizmek",
      "İlk kodu yazmak",
      "İlk prototipi hazırlamak"
    ],
    a: "Yeni çıkan işletim sistemi sürümüne uyum için düzenleme yapmak",
    difficulty: "easy",
    week: 2,
    topic: "Bakım - kapsam",
    importance: "medium",
    explanation:
      "Bakım, sistem yayınlandıktan sonra devam eder: hata düzeltme, ortama uyum (adaptation), performans iyileştirme, güvenlik güncellemesi vb."
  },
  {
    q: "Aşağıdakilerden hangisi “düzeltici bakım” (corrective maintenance) örneğidir?",
    t: "mcq",
    o: [
      "Sistemi yeni bir mevzuata uydurmak",
      "Ürün arama ekranına filtre eklemek",
      "Prod ortamında bulunan bir hatayı (bug) düzeltmek",
      "Kodun okunabilirliğini artırmak için yeniden düzenlemek",
      "Sunucu sayısını artırmak"
    ],
    a: "Prod ortamında bulunan bir hatayı (bug) düzeltmek",
    difficulty: "easy",
    week: 2,
    topic: "Bakım türleri - corrective",
    importance: "high",
    explanation:
      "Corrective bakım = hata düzeltme. Kullanıcı ‘şu ekranda hata veriyor’ dediğinde yapılan düzeltme bu sınıfa girer."
  },
  {
    q: "Aşağıdakilerden hangisi “uyarlayıcı bakım” (adaptive maintenance) örneğidir?",
    t: "mcq",
    o: [
      "Kullanıcı şikayetini analiz etmek",
      "Yeni Android sürümünde bozulmaması için uyumluluk güncellemesi yapmak",
      "Ödeme akışına yeni kampanya eklemek",
      "Kodun karmaşıklığını azaltmak için refactor yapmak",
      "Yeni test aracı kurmak"
    ],
    a: "Yeni Android sürümünde bozulmaması için uyumluluk güncellemesi yapmak",
    difficulty: "medium",
    week: 2,
    topic: "Bakım türleri - adaptive",
    importance: "medium",
    explanation:
      "Adaptive bakım = çevre değişimine uyum. OS sürümü, kütüphane, altyapı, donanım değişir; sistemin çalışması için uyarlama yapılır."
  },
  {
    q: "Waterfall modelinde “değişiklik maliyeti” neden genellikle projede ilerledikçe artar?",
    t: "mcq",
    o: [
      "Çünkü kod satırı sayısı azalır",
      "Çünkü daha fazla bileşen ve bağımlılık oluşur; değişiklik daha çok yeri etkiler",
      "Çünkü test sayısı azalır",
      "Çünkü dokümantasyon hiç yoktur",
      "Çünkü kullanıcı sayısı sıfıra iner"
    ],
    a: "Çünkü daha fazla bileşen ve bağımlılık oluşur; değişiklik daha çok yeri etkiler",
    difficulty: "medium",
    week: 2,
    topic: "Değişiklik maliyeti",
    importance: "high",
    explanation:
      "Projede ilerledikçe tasarım kararları, kod, testler, entegrasyonlar artar. Erken bir gereksinim değişikliği geç fark edilirse birçok modül yeniden düzenlenir; maliyet büyür."
  },
  {
    q: "“İzlenebilirlik (traceability)” kavramı SDLC’de en çok neyi sağlar?",
    t: "mcq",
    o: [
      "Her gereksinimin tasarım, kod ve test ile ilişkilendirilebilmesini",
      "Sadece ekran renklerinin tutulmasını",
      "Sadece sunucu maliyetinin hesaplanmasını",
      "Sadece derleme hızının artmasını",
      "Kullanıcı şifresinin otomatik değişmesini"
    ],
    a: "Her gereksinimin tasarım, kod ve test ile ilişkilendirilebilmesini",
    difficulty: "hard",
    week: 2,
    topic: "Traceability",
    importance: "medium",
    explanation:
      "Traceability; ‘bu gereksinim nerede karşılandı, hangi test bunu doğruluyor?’ sorusunu cevaplar. Büyük projelerde eksik/unutulan gereksinimleri yakalamada kritik rol oynar."
  },
  {
    q: "Aşağıdakilerden hangisi “teslim edilebilir (deliverable)” kavramına en uygun örnektir?",
    t: "mcq",
    o: [
      "Geliştiricinin kişisel not defteri",
      "Sprintte konuşulan ama yazılmayan fikir",
      "Gereksinim dokümanı, tasarım diyagramı, çalışan modül gibi resmi proje çıktısı",
      "Rastgele internet sayfası linki",
      "Sadece ekip içi sohbet mesajları"
    ],
    a: "Gereksinim dokümanı, tasarım diyagramı, çalışan modül gibi resmi proje çıktısı",
    difficulty: "easy",
    week: 2,
    topic: "Deliverable",
    importance: "medium",
    explanation:
      "Deliverable; proje sonunda veya aşama sonunda ‘teslim edilebilir’ somut çıktıdır. Doküman, çalışan yazılım parçası, test raporu vb. olabilir."
  },
  {
    q: "Sürüm kontrolü (version control) SDLC’de en çok hangi problemi azaltır?",
    t: "mcq",
    o: [
      "Aynı kod üzerinde yapılan değişikliklerin kaybolması/çakışması ve geri dönüşün zor olması",
      "UI tasarımının otomatik çizilmemesi",
      "Sunucu internetinin yavaş olması",
      "Kullanıcıların şifreyi unutması",
      "Veritabanının hiç büyümemesi"
    ],
    a: "Aynı kod üzerinde yapılan değişikliklerin kaybolması/çakışması ve geri dönüşün zor olması",
    difficulty: "easy",
    week: 2,
    topic: "Version Control",
    importance: "high",
    explanation:
      "Git gibi araçlar kim neyi ne zaman değiştirdiğini kayıt eder, çakışmaları yönetir ve gerekirse önceki sürüme geri dönmeyi sağlar. Takım çalışmasının omurgasıdır."
  },
  {
    q: "Aşağıdakilerden hangisi “kabul testi (acceptance test)” için en doğru ifadedir?",
    t: "mcq",
    o: [
      "Sadece geliştiricinin kendi yazdığı birim testi",
      "Sistemin kullanıcı/iş gereksinimlerini karşılayıp karşılamadığını doğrulayan test",
      "Sadece performans testi",
      "Sadece veritabanı testi",
      "Sadece UI renk testi"
    ],
    a: "Sistemin kullanıcı/iş gereksinimlerini karşılayıp karşılamadığını doğrulayan test",
    difficulty: "medium",
    week: 2,
    topic: "Test - acceptance",
    importance: "medium",
    explanation:
      "Acceptance test ‘müşteri bunu kabul eder mi?’ sorusuna cevap verir. Genellikle kullanıcı senaryoları ve kabul kriterleri üzerinden yapılır."
  },
  {
    q: "Waterfall modelinde dokümantasyonun ağır olmasının en doğru avantajı hangisidir?",
    t: "mcq",
    o: [
      "Sistemi kimse anlamasın diye",
      "Ekip değişse bile bilgi kaybını azaltması ve resmi gereksinim/tasarım kaydı oluşturması",
      "Testin tamamen kaldırılmasını sağlaması",
      "Kodu otomatik yazması",
      "Dağıtımı tamamen ortadan kaldırması"
    ],
    a: "Ekip değişse bile bilgi kaybını azaltması ve resmi gereksinim/tasarım kaydı oluşturması",
    difficulty: "medium",
    week: 2,
    topic: "Dokümantasyon - fayda",
    importance: "medium",
    explanation:
      "Dokümantasyon, özellikle kurumsal projelerde ‘kalıcı hafıza’ gibi çalışır. Yeni gelen kişi sistemi daha hızlı anlayabilir; kararlar izlenebilir olur."
  },

  // =========================================================
  // ==== 3. HAFTA – Prototipleme, Iteratif/Artımlı, Agile (17)
  // =========================================================
  {
    q: "Prototip (prototype) oluşturmanın en temel amacı aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Sistemi %100 bitmiş halde teslim etmek",
      "Kullanıcı ihtiyacını ve tasarım doğruluğunu erken doğrulamak (erken geri bildirim)",
      "Testleri tamamen kaldırmak",
      "Sadece veritabanını kurmak",
      "Kod standardını zorunlu kılmak"
    ],
    a: "Kullanıcı ihtiyacını ve tasarım doğruluğunu erken doğrulamak (erken geri bildirim)",
    difficulty: "easy",
    week: 3,
    topic: "Prototip - amaç",
    importance: "high",
    explanation:
      "Prototip ‘deneme sürümü’dür. Amaç en başta mükemmel ürünü bitirmek değil; yanlış anlaşılmaları erken yakalamak, kullanıcıya somut bir şey gösterip geri bildirim almaktır."
  },
  {
    q: "“Atılabilir prototip” (throwaway prototype) için en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Prototip üretilir ve aynı kod doğrudan production’a alınır",
      "Prototip yalnızca ihtiyaçları netleştirmek için yapılır, sonra çöpe atılıp asıl sistem sıfırdan doğru şekilde geliştirilir",
      "Prototip sadece performans ölçer",
      "Prototip sadece veritabanı yedeği üretir",
      "Prototip yapmak kesinlikle yasaktır"
    ],
    a: "Prototip yalnızca ihtiyaçları netleştirmek için yapılır, sonra çöpe atılıp asıl sistem sıfırdan doğru şekilde geliştirilir",
    difficulty: "medium",
    week: 3,
    topic: "Prototip türleri - throwaway",
    importance: "high",
    explanation:
      "Throwaway prototip ‘öğrenmek’ içindir. Hızlıca yapılır, geri bildirim alınır, sonra o acele kodun üretim sistemine taşınmaması için atılır. Ama öğrenilenler asıl sisteme aktarılır."
  },
  {
    q: "“Evrimsel prototip” (evolutionary prototype) yaklaşımı neyi anlatır?",
    t: "mcq",
    o: [
      "Prototip asla değişmez",
      "Prototip zamanla geliştirilerek gerçek ürüne dönüşür (artımlarla olgunlaşır)",
      "Prototip sadece çizim olarak kalır, kod yazılmaz",
      "Prototip sadece test için kullanılır, kullanıcı görmez",
      "Prototip yalnızca bir gün çalışır"
    ],
    a: "Prototip zamanla geliştirilerek gerçek ürüne dönüşür (artımlarla olgunlaşır)",
    difficulty: "easy",
    week: 3,
    topic: "Prototip türleri - evolutionary",
    importance: "high",
    explanation:
      "Evolutionary prototipte ortaya çıkan sürüm ‘atılmaz’; sürekli iyileştirilir. Böylece ürün, kullanıcı geri bildirimiyle büyüyerek gerçek sisteme dönüşür."
  },
  {
    q: "PoC (Proof of Concept) ile prototip arasındaki en doğru ayrım hangisidir?",
    t: "mcq",
    o: [
      "PoC: “bu teknik olarak mümkün mü?”; Prototip: “kullanıcı bunu nasıl deneyimler?”",
      "PoC: UI makyajı; Prototip: sadece veritabanı",
      "PoC: yalnızca test; Prototip: yalnızca deploy",
      "İkisi tamamen aynıdır",
      "Prototip: teknik kanıt; PoC: kullanıcı akışı"
    ],
    a: "PoC: “bu teknik olarak mümkün mü?”; Prototip: “kullanıcı bunu nasıl deneyimler?”",
    difficulty: "hard",
    week: 3,
    topic: "PoC vs Prototip",
    importance: "medium",
    explanation:
      "PoC teknik risk azaltır: ‘Bu entegrasyon olur mu? Bu algoritma yeterli mi?’ gibi. Prototip ise genelde kullanıcı akışı/arayüz ve gereksinim doğrulamasına hizmet eder."
  },
  {
    q: "Iteratif (iterative) geliştirme yaklaşımının ana fikri aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Tek seferde tüm sistemi tamamlamak",
      "Aynı özelliği döngülerle iyileştirerek olgunlaştırmak (yap → değerlendir → düzelt)",
      "Testi tamamen en sona bırakmak",
      "Sadece dokümantasyon üretmek",
      "Değişiklik taleplerini reddetmek"
    ],
    a: "Aynı özelliği döngülerle iyileştirerek olgunlaştırmak (yap → değerlendir → düzelt)",
    difficulty: "easy",
    week: 3,
    topic: "Iteratif model",
    importance: "high",
    explanation:
      "Iteratif yaklaşımda aynı kapsam tekrar tekrar elden geçirilir: ilk sürüm basit olur, sonra kullanıcı geri bildirimiyle iyileşir. Amaç ‘mükemmel ilk sefer’ değil, ‘sürekli iyileştirme’dir."
  },
  {
    q: "Artımlı (incremental) geliştirme yaklaşımı en doğru neyi ifade eder?",
    t: "mcq",
    o: [
      "Ürünün tek seferde teslim edilmesini",
      "Ürünün parça parça yeni özellikler eklenerek büyütülmesini",
      "Sadece UI tasarımını",
      "Sadece performans testini",
      "Sadece bakım süreçlerini"
    ],
    a: "Ürünün parça parça yeni özellikler eklenerek büyütülmesini",
    difficulty: "easy",
    week: 3,
    topic: "Artımlı model",
    importance: "high",
    explanation:
      "Incremental ‘özellik ekleyerek büyütmek’tir. İlk teslim çekirdek olabilir; sonra her artımda yeni modül/özellik eklenir."
  },
  {
    q: "Iteratif ve artımlı geliştirme arasındaki en doğru fark hangisidir?",
    t: "mcq",
    o: [
      "Iteratif: aynı parçayı iyileştirir; Artımlı: yeni parçalar ekler",
      "Iteratif: sadece test; Artımlı: sadece analiz",
      "Artımlı: geri bildirim almaz; Iteratif: hiç kod yazmaz",
      "İkisi aynı şeydir",
      "Iteratif: sadece UI; Artımlı: sadece veritabanı"
    ],
    a: "Iteratif: aynı parçayı iyileştirir; Artımlı: yeni parçalar ekler",
    difficulty: "medium",
    week: 3,
    topic: "Iteratif vs Incremental",
    importance: "high",
    explanation:
      "Iterative = aynı özelliği sürüm sürüm iyileştirme. Incremental = kapsamı büyütme (yeni özellik ekleme). Pratikte çoğu proje ikisini birlikte kullanır."
  },
  {
    q: "MVP (Minimum Viable Product) kavramı en doğru hangi amaçla kullanılır?",
    t: "mcq",
    o: [
      "Ürünün tüm özelliklerini baştan bitirmek",
      "En az özellik ile piyasaya çıkıp gerçek kullanıcıdan öğrenmek",
      "Sadece dokümantasyon yazmak",
      "Testleri kaldırmak",
      "Veritabanını tamamen kapatmak"
    ],
    a: "En az özellik ile piyasaya çıkıp gerçek kullanıcıdan öğrenmek",
    difficulty: "easy",
    week: 3,
    topic: "MVP",
    importance: "high",
    explanation:
      "MVP ‘minimum ama işe yarar’ sürümdür. Amaç, büyük yatırım yapmadan önce kullanıcı davranışıyla doğrulama yapmaktır: ‘Bu ürün gerçekten isteniyor mu?’"
  },
  {
    q: "User Story (Kullanıcı Hikayesi) ifadesi genellikle hangi kalıpla yazılır?",
    t: "mcq",
    o: [
      "Sadece teknik görev listesi şeklinde",
      "“As a …, I want …, so that …” (Ben … olarak … istiyorum, çünkü …)",
      "Sadece UML sınıf diyagramı ile",
      "Sadece SQL sorgusu olarak",
      "Sadece log çıktısı olarak"
    ],
    a: "“As a …, I want …, so that …” (Ben … olarak … istiyorum, çünkü …)",
    difficulty: "easy",
    week: 3,
    topic: "Agile - User Story",
    importance: "medium",
    explanation:
      "Bu kalıp, ‘kim’ (rol), ‘ne’ (ihtiyaç) ve ‘neden’ (değer) bilgilerini tek cümlede toplar. Böylece işin amacı netleşir."
  },
  {
    q: "Acceptance Criteria (kabul kriteri) en doğru neyi ifade eder?",
    t: "mcq",
    o: [
      "Kodun kaç satır olacağını",
      "Bir işin “tamamlandı sayılması” için objektif şartlarını",
      "Sunucunun marka modelini",
      "UI renk paletini",
      "Sürüm numarasını"
    ],
    a: "Bir işin “tamamlandı sayılması” için objektif şartlarını",
    difficulty: "medium",
    week: 3,
    topic: "Agile - Acceptance Criteria",
    importance: "high",
    explanation:
      "Kabul kriteri; “bitti mi?” tartışmasını azaltır. Örn: ‘Doğru şifre girilince giriş yapılmalı, yanlış şifreye hata mesajı çıkmalı, 3 denemede kilitlenmeli’ gibi net şartlar koyar."
  },
  {
    q: "Backlog kavramı en doğru hangi tanıma karşılık gelir?",
    t: "mcq",
    o: [
      "Tamamlanmış işlerin arşivi",
      "Yapılacak işlerin (özellik, hata, iyileştirme) öncelikli listesi",
      "Sadece test sonuçları",
      "Sadece kullanıcı şikayetleri",
      "Sadece sunucu logları"
    ],
    a: "Yapılacak işlerin (özellik, hata, iyileştirme) öncelikli listesi",
    difficulty: "easy",
    week: 3,
    topic: "Agile - Backlog",
    importance: "high",
    explanation:
      "Backlog; ürün için yapılacak her şeyin listesi gibi düşünülür. Önceliklendirme sayesinde ekip ‘önce en değerli işi yapar’ mantığıyla ilerler."
  },
  {
    q: "Agile yaklaşımın “değişime tepki” (responding to change) ilkesinin pratik sonucu hangisidir?",
    t: "mcq",
    o: [
      "Plan asla değişmez; her şey baştan sabitlenir",
      "Gereksinim değişirse süreç bunu yönetebilir; değerli değişiklikler planı günceller",
      "Dokümantasyon tamamen yasaktır",
      "Test yapmak gereksizdir",
      "Sürüm kontrolü kullanılmaz"
    ],
    a: "Gereksinim değişirse süreç bunu yönetebilir; değerli değişiklikler planı günceller",
    difficulty: "medium",
    week: 3,
    topic: "Agile - değişim",
    importance: "medium",
    explanation:
      "Agile ‘değişiklik kötü’ demez; ‘değişiklik olacak, yönetelim’ der. Ama bu sınırsız değişiklik demek değildir: değer/öncelik hesabıyla plan güncellenir."
  },
  {
    q: "Timeboxing (zaman kutulama) yaklaşımının temel amacı aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Bir işi sonsuza kadar uzatmak",
      "Süreyi sabitleyip kapsamı buna göre ayarlayarak odaklanmak",
      "Testleri iptal etmek",
      "Kod kalitesini düşürmek",
      "Sadece rapor üretmek"
    ],
    a: "Süreyi sabitleyip kapsamı buna göre ayarlayarak odaklanmak",
    difficulty: "medium",
    week: 3,
    topic: "Timeboxing",
    importance: "medium",
    explanation:
      "Timebox = ‘2 hafta içinde şu kadar işi bitirelim’ mantığı. Süre sabitlenir; sığmayan iş bir sonraya kalır. Bu, kontrolsüz uzamayı engeller ve ekipte odak yaratır."
  },
  {
    q: "Continuous Integration (CI) yaklaşımının en temel faydası aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Kod değişikliklerini uzun süre biriktirip en sonda birleştirmek",
      "Sık entegrasyon yaparak entegrasyon hatalarını erken yakalamak",
      "Sadece UI çizmek",
      "Sadece veritabanı yedeği almak",
      "Gereksinim yazmayı kaldırmak"
    ],
    a: "Sık entegrasyon yaparak entegrasyon hatalarını erken yakalamak",
    difficulty: "hard",
    week: 3,
    topic: "CI - amaç",
    importance: "medium",
    explanation:
      "CI; küçük değişiklikleri sık sık ana dala entegre eder, otomatik build/test çalıştırır. Böylece “son gün birleştirme felaketi” azalır; hatalar erken görülür."
  },
  {
    q: "Refactoring (yeniden düzenleme) için en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Dış davranışı değiştirerek yeni özellik eklemek",
      "Dış davranışı değiştirmeden kodun iç yapısını iyileştirmek",
      "Sistemi baştan yazmak",
      "Testleri silmek",
      "Veritabanını formatlamak"
    ],
    a: "Dış davranışı değiştirmeden kodun iç yapısını iyileştirmek",
    difficulty: "medium",
    week: 3,
    topic: "Refactoring",
    importance: "high",
    explanation:
      "Refactor = temizlik. Kullanıcı açısından aynı çalışır; ama iç yapı daha okunabilir, daha modüler, daha sürdürülebilir olur. Yeni özellik eklemekten farklı bir amaçtır."
  },
  {
    q: "Aşağıdakilerden hangisi prototiplemenin yanlış kullanımı sonucu ortaya çıkabilecek bir risktir?",
    t: "mcq",
    o: [
      "Prototipteki acele yazılmış kodun üretime taşınması ve kalitenin düşmesi",
      "Geri bildirimin erken alınması",
      "Gereksinimlerin daha netleşmesi",
      "Kullanıcının ürünü daha erken görmesi",
      "Risklerin daha erken fark edilmesi"
    ],
    a: "Prototipteki acele yazılmış kodun üretime taşınması ve kalitenin düşmesi",
    difficulty: "hard",
    week: 3,
    topic: "Prototip - risk",
    importance: "high",
    explanation:
      "Prototip hızlı yapılır; kalite/ölçek/güvenlik tam düşünülmeyebilir. Bu kodu ‘nasıl olsa çalışıyor’ diye production’a taşımak teknik borcu büyütür. Bu yüzden prototipin türü (throwaway/evolutionary) bilinçli seçilmelidir."
  },
  {
    q: "Bir iş için “Definition of Done” (DoD) mantığının en doğru faydası hangisidir?",
    t: "mcq",
    o: [
      "‘Bitti’ kavramını netleştirip kalite standardı oluşturmak (test, review, doküman vb.)",
      "Sadece UI renk seçimini sabitlemek",
      "Kod yazmayı yasaklamak",
      "Gereksinim toplamayı tamamen kaldırmak",
      "Sadece sunucu maliyetini düşürmek"
    ],
    a: "‘Bitti’ kavramını netleştirip kalite standardı oluşturmak (test, review, doküman vb.)",
    difficulty: "medium",
    week: 3,
    topic: "DoD",
    importance: "medium",
    explanation:
      "DoD; ‘iş gerçekten bitti mi?’ sorusuna standart getirir. Örn: kod yazıldı + test eklendi + code review geçti + dokümantasyon güncellendi gibi şartlar koyarak kalitenin düşmesini engeller."
  }
];

