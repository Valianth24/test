// Yazılım Mimarisi – 50 Soruluk Soru Bankası (MCQ)
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]
// Not: a = doğru şık index’i (0=A, 1=B, 2=C, 3=D, 4=E)

window.questionBank = [
  // =========================================================
  // ==== 1. HAFTA – Mimari Temeller (10) =====================
  // =========================================================

  {
    q: "Yazılım mimarisi en doğru şekilde neyi tanımlar?",
    t: "mcq",
    o: [
      "Sadece ekran tasarımını (UI) ve renk paletini",
      "Kod satırlarının sıralamasını ve değişken isimlerini",
      "Sistemin ana bileşenlerini, aralarındaki ilişkileri ve önemli kararları",
      "Sadece veritabanı tablolarını ve kolon tiplerini",
      "Sadece test senaryolarını ve test raporlarını"
    ],
    a: 2,
    difficulty: "easy",
    week: 1,
    topic: "Mimari Temeller",
    importance: 5,
    explanation: "Mimari; yapı taşları (bileşenler), bağlantılar (ilişkiler) ve bu yapıyı doğuran kritik kararları açıklar."
  },
  {
    q: "“Mimari karar” denince en çok hangisi kastedilir?",
    t: "mcq",
    o: [
      "Kodda yorum satırı yazıp yazmama kararı",
      "Sistemin performans, güvenlik gibi hedeflere göre şekillenmesini etkileyen temel seçimler",
      "Butonların köşe yuvarlaklığını seçmek",
      "Her fonksiyona aynı isimle başlamak",
      "Sadece log formatını seçmek"
    ],
    a: 1,
    difficulty: "easy",
    week: 1,
    topic: "Mimari Kararlar",
    importance: 5,
    explanation: "Mimari kararlar “sistemi gerçekten yönlendiren” büyük seçimlerdir (ör. monolith vs microservice, senkron vs async)."
  },
  {
    q: "Aşağıdakilerden hangisi paydaş (stakeholder) örneğidir?",
    t: "mcq",
    o: [
      "Sadece uygulamanın logosu",
      "Sadece RAM miktarı",
      "Sistemin başarısından etkilenen kişi/kurum (kullanıcı, işletme, devops, güvenlik ekibi vb.)",
      "Sadece kod editörü",
      "Sadece domain adı"
    ],
    a: 2,
    difficulty: "easy",
    week: 1,
    topic: "Paydaşlar",
    importance: 4,
    explanation: "Paydaş, sistemle ilgisi olan ve sistemin sonuçlarından etkilenen tüm taraflardır."
  },
  {
    q: "Fonksiyonel gereksinim ile (quality/non-functional) kalite gereksinimi arasındaki fark en iyi hangi seçenekte anlatılır?",
    t: "mcq",
    o: [
      "Fonksiyonel = nasıl hızlı çalışacağı, kalite = hangi butonların olacağı",
      "Fonksiyonel = ne yapacağı, kalite = ne kadar iyi yapacağı",
      "Fonksiyonel = sadece test, kalite = sadece kod",
      "Fonksiyonel = veritabanı, kalite = frontend",
      "Aralarında fark yoktur"
    ],
    a: 1,
    difficulty: "easy",
    week: 1,
    topic: "Gereksinimler",
    importance: 5,
    explanation: "Fonksiyonel “özellik”; kalite gereksinimi “performans, güvenlik, kullanılabilirlik” gibi nitelikleri anlatır."
  },
  {
    q: "Aşağıdakilerden hangisi kalite (non-functional) gereksinimine örnektir?",
    t: "mcq",
    o: [
      "Kullanıcı kayıt olabilsin",
      "Kullanıcı şifre sıfırlayabilsin",
      "Sistem, %99.9 erişilebilirlik hedefini sağlamalı",
      "Kullanıcı profil fotoğrafı yükleyebilsin",
      "Kullanıcı bildirim alabilsin"
    ],
    a: 2,
    difficulty: "easy",
    week: 1,
    topic: "Kalite Gereksinimleri",
    importance: 5,
    explanation: "Erişilebilirlik (availability) bir kalite özelliğidir."
  },
  {
    q: "“Trade-off” kavramı mimaride en iyi neyi ifade eder?",
    t: "mcq",
    o: [
      "Aynı anda tüm kalite özelliklerini maksimum yapmak",
      "Bir hedefi iyileştirirken başka bir hedefte bedel ödemek (denge kurmak)",
      "Sadece kodu kısaltmak",
      "Sadece sunucu sayısını artırmak",
      "Sadece veri tabanını değiştirmek"
    ],
    a: 1,
    difficulty: "medium",
    week: 1,
    topic: "Trade-off",
    importance: 5,
    explanation: "Örn. güvenliği artırmak bazen kullanım kolaylığını düşürebilir; mimari denge kurar."
  },
  {
    q: "Bir mimariyi “iyi” yapan şey en çok hangisidir?",
    t: "mcq",
    o: [
      "Sadece popüler teknoloji kullanması",
      "Sadece çok fazla sınıf içermesi",
      "Paydaş endişelerini (concerns) doğru karşılaması",
      "Sadece en hızlı olması",
      "Sadece en ucuz bulut servisini kullanması"
    ],
    a: 2,
    difficulty: "medium",
    week: 1,
    topic: "Değerlendirme",
    importance: 4,
    explanation: "Mimari, paydaşların ihtiyaçlarını ve risklerini yönetmek için vardır."
  },
  {
    q: "“Concern (endişe/ilgi alanı)” neye denir?",
    t: "mcq",
    o: [
      "Sistemde kullanılan renkler",
      "Paydaşların önem verdiği konu başlıkları (performans, güvenlik, maliyet vb.)",
      "Sadece API endpoint listesi",
      "Sadece kod standardı",
      "Sadece logo dosyası"
    ],
    a: 1,
    difficulty: "easy",
    week: 1,
    topic: "Concern",
    importance: 4,
    explanation: "Concern = paydaşın “benim için kritik” dediği konulardır."
  },
  {
    q: "Aşağıdakilerden hangisi mimarinin amaçlarından biri değildir?",
    t: "mcq",
    o: [
      "Bakımı kolaylaştırmak",
      "Riskleri yönetmek",
      "Geliştirmeyi ölçeklemek",
      "Tüm geliştirme hatalarını tamamen sıfırlamak",
      "Kalite hedeflerini görünür kılmak"
    ],
    a: 3,
    difficulty: "medium",
    week: 1,
    topic: "Mimari Amaçlar",
    importance: 3,
    explanation: "Mimari riski azaltır ama “hata sıfır” garantisi vermez."
  },
  {
    q: "“Architecture description” en çok ne işe yarar?",
    t: "mcq",
    o: [
      "Sadece kodu otomatik üretmek",
      "Mimariyi paydaşlara anlaşılır biçimde belgelemek ve iletişimi standardize etmek",
      "Sadece UI mockup saklamak",
      "Sadece tablo çizmek",
      "Sadece test otomasyonunu çalıştırmak"
    ],
    a: 1,
    difficulty: "medium",
    week: 1,
    topic: "Architecture Description",
    importance: 4,
    explanation: "Mimari tanım, iletişimi ve doğrulanabilirliği güçlendirir; “kim neyi nasıl anladı” problemini azaltır."
  },

  // =========================================================
  // ==== 2. HAFTA – Kalite Özellikleri & Senaryolar (10) =====
  // =========================================================

  {
    q: "Kalite senaryosu (quality scenario) genelde hangi parçaları içerir?",
    t: "mcq",
    o: [
      "Sadece veritabanı şeması",
      "Sadece UI ekran listesi",
      "Kaynak (source), tetikleyici (stimulus), ortam (environment), ölçülebilir cevap (response/measure)",
      "Sadece kod satır sayısı",
      "Sadece proje bütçesi"
    ],
    a: 2,
    difficulty: "hard",
    week: 2,
    topic: "Kalite Senaryosu",
    importance: 5,
    explanation: "Kalite senaryosu ölçülebilir olmalıdır; “hızlı” yerine “< 200ms” gibi."
  },
  {
    q: "Aşağıdakilerden hangisi “performans” için doğru bir ölçü örneğidir?",
    t: "mcq",
    o: [
      "Ekran güzel görünsün",
      "İstekler çok hızlı olsun",
      "API yanıt süresi p95 < 300ms olsun",
      "Kod okunabilir olsun",
      "Veritabanı olsun"
    ],
    a: 2,
    difficulty: "medium",
    week: 2,
    topic: "Performans",
    importance: 5,
    explanation: "Performans hedefi ölçülebilir metrikle yazılır (p95, ms, throughput vb.)."
  },
  {
    q: "Aşağıdakilerden hangisi “güvenilirlik (reliability)” ile en yakından ilişkilidir?",
    t: "mcq",
    o: [
      "Uygulama ikonunun boyutu",
      "Sistemin arıza durumunda bekleneni koruması ve hatalara dayanması",
      "Buton renkleri",
      "Kodun kısa olması",
      "Şifrelerin düz metin tutulması"
    ],
    a: 1,
    difficulty: "medium",
    week: 2,
    topic: "Güvenilirlik",
    importance: 4,
    explanation: "Reliability; hata/arıza anında sistem davranışının öngörülebilir ve dayanıklı olmasıdır."
  },
  {
    q: "“Kullanılabilirlik (usability)” çoğunlukla hangi soruyu hedefler?",
    t: "mcq",
    o: [
      "Sistem kaç sunucuda çalışıyor?",
      "Kullanıcı işi ne kadar kolay ve hatasız yapabiliyor?",
      "DB index var mı?",
      "Kodu hangi dilde yazdık?",
      "Loglar kaç satır?"
    ],
    a: 1,
    difficulty: "easy",
    week: 2,
    topic: "Kullanılabilirlik",
    importance: 4,
    explanation: "Usability: öğrenilebilirlik, verimlilik, hata önleme gibi başlıklara odaklanır."
  },
  {
    q: "“Güvenlik (security)” gereksinimi yazarken en doğru yaklaşım hangisidir?",
    t: "mcq",
    o: [
      "“Güvenlik çok önemli” demek yeterlidir",
      "Sadece antivirüs önerisi yazmak",
      "Tehdit modeli + kontrol listesi + ölçülebilir kurallar (şifreleme, yetkilendirme, audit vb.)",
      "Sadece admin şifresini not etmek",
      "Sadece UI’da kilit ikonu koymak"
    ],
    a: 2,
    difficulty: "hard",
    week: 2,
    topic: "Güvenlik",
    importance: 5,
    explanation: "Güvenlik, tehditlere göre kontrol seçimi ve doğrulanabilir kurallarla yönetilir."
  },
  {
    q: "“Modifiye edilebilirlik (modifiability/maintainability)” en çok hangi mimari pratikle artar?",
    t: "mcq",
    o: [
      "Her şeyi tek dosyada toplamak",
      "Bileşen sınırlarını net yapmak ve bağımlılıkları azaltmak",
      "Sadece daha hızlı CPU almak",
      "Şifreleri düz metin saklamak",
      "UI renklerini değiştirmek"
    ],
    a: 1,
    difficulty: "medium",
    week: 2,
    topic: "Maintainability",
    importance: 5,
    explanation: "Düşük bağlılık (loose coupling) ve yüksek uyum (cohesion) bakım kolaylığı sağlar."
  },
  {
    q: "“Ölçeklenebilirlik (scalability)” en iyi hangi senaryoyla test edilir?",
    t: "mcq",
    o: [
      "Tek kullanıcı login olsun",
      "10 kullanıcı aynı anda profil açsın",
      "Trafik 10 kat arttığında sistem hedef metrikleri korusun (örn. p95 < 300ms)",
      "Buton metni değişsin",
      "Logo güncellensin"
    ],
    a: 2,
    difficulty: "medium",
    week: 2,
    topic: "Scalability",
    importance: 4,
    explanation: "Scalability; yük artınca davranışın ölçülebilir şekilde korunmasıdır."
  },
  {
    q: "“Availability (erişilebilirlik)” ile “reliability (güvenilirlik)” ilişkisi için en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Aynı şeydir, fark yoktur",
      "Availability sadece tasarım, reliability sadece kod demektir",
      "Reliability iyi olursa availability genelde artar; ama aynı kavram değildir",
      "Availability sadece CPU ile çözülür",
      "Reliability sadece UI ile çözülür"
    ],
    a: 2,
    difficulty: "hard",
    week: 2,
    topic: "Kalite İlişkileri",
    importance: 4,
    explanation: "Reliability (hata toleransı) availability’i destekler; fakat availability “çalışır durumda olma oranıdır”."
  },
  {
    q: "“Test edilebilirlik (testability)” için en doğru mimari yaklaşım hangisidir?",
    t: "mcq",
    o: [
      "Tüm bağımlılıkları global yapmak",
      "IO (DB, ağ) ile iş mantığını ayırmak ve bağımlılıkları enjekte edilebilir kılmak",
      "Sadece daha fazla yorum satırı yazmak",
      "Tüm fonksiyonları 1000 satır yapmak",
      "Sadece manuel test yapmak"
    ],
    a: 1,
    difficulty: "hard",
    week: 2,
    topic: "Testability",
    importance: 5,
    explanation: "Bağımlılıkları ayrıştırmak, unit test yazmayı kolaylaştırır (mock/stub ile)."
  },
  {
    q: "Kalite hedefleri belirsiz yazılırsa en büyük risk hangisidir?",
    t: "mcq",
    o: [
      "Kod daha kısa olur",
      "Takım otomatik hızlanır",
      "“Hızlı/kolay/iyi” gibi ölçülemez hedefler yüzünden mimari doğrulanamaz ve tartışma uzar",
      "UI daha güzel olur",
      "Veritabanı kendiliğinden optimize olur"
    ],
    a: 2,
    difficulty: "medium",
    week: 2,
    topic: "Kalite Gereksinimi Yazımı",
    importance: 4,
    explanation: "Ölçülemeyen hedef, doğru/yanlış değerlendirmeyi imkânsızlaştırır."
  },

  // =========================================================
  // ==== 3. HAFTA – Mimari Stiller (10) ======================
  // =========================================================

  {
    q: "Monolith mimaride en tipik özellik hangisidir?",
    t: "mcq",
    o: [
      "Her servis ayrı deploy edilir",
      "Bütün uygulama tek deploy edilebilir paket olarak çalışır",
      "Sadece event-driven çalışır",
      "Her parça farklı dilde olmak zorundadır",
      "Hiç veritabanı kullanmaz"
    ],
    a: 1,
    difficulty: "easy",
    week: 3,
    topic: "Monolith",
    importance: 4,
    explanation: "Monolith’te tek uygulama paketi vardır; ölçekleme/deploy genelde birlikte yapılır."
  },
  {
    q: "Microservices yaklaşımının en belirgin artısı hangisidir?",
    t: "mcq",
    o: [
      "Her zaman daha ucuzdur",
      "Her zaman daha basittir",
      "Servisleri bağımsız deploy/ölçekleme imkânı",
      "Test ihtiyacını ortadan kaldırır",
      "Log ihtiyacını kaldırır"
    ],
    a: 2,
    difficulty: "medium",
    week: 3,
    topic: "Microservices",
    importance: 4,
    explanation: "Microservice’te bağımsız deploy/scale mümkün; ancak operasyonel karmaşıklık artabilir."
  },
  {
    q: "Microservices’in en yaygın zorluğu hangisidir?",
    t: "mcq",
    o: [
      "UI tasarımı yapılamaması",
      "Dağıtık sistem karmaşıklığı (ağ, gözlemlenebilirlik, data tutarlılığı, servis keşfi)",
      "Hiç test yazılamaması",
      "Sadece tek dil kullanma zorunluluğu",
      "Veritabanı kullanamama"
    ],
    a: 1,
    difficulty: "medium",
    week: 3,
    topic: "Microservices Riskleri",
    importance: 5,
    explanation: "Dağıtık sistem maliyeti: ağ hataları, tracing, versiyonlama, tutarlılık problemleri."
  },
  {
    q: "Layered (katmanlı) mimaride temel amaç genelde hangisidir?",
    t: "mcq",
    o: [
      "Her katmanın aynı işi yapması",
      "Sorumlulukları ayırmak (UI, iş mantığı, veri erişim vb.)",
      "Tüm kodu tek dosyada toplamak",
      "Sadece performansı artırmak",
      "Sadece güvenliği artırmak"
    ],
    a: 1,
    difficulty: "easy",
    week: 3,
    topic: "Layered Architecture",
    importance: 5,
    explanation: "Katmanlama, sorumluluk ayrımı ile bakım ve anlaşılabilirliği artırır."
  },
  {
    q: "Client–Server mimarisinin en basit tanımı hangisidir?",
    t: "mcq",
    o: [
      "Sadece mobil uygulamalar için kullanılır",
      "İstemci istek yapar, sunucu hizmet/yanıt verir",
      "Her zaman offline çalışır",
      "Veri tabanı yoktur",
      "Sadece oyunlarda kullanılır"
    ],
    a: 1,
    difficulty: "easy",
    week: 3,
    topic: "Client-Server",
    importance: 3,
    explanation: "Client (istemci) talep eder; server (sunucu) işleyip yanıt döner."
  },
  {
    q: "Event-driven mimarinin temel fikri hangisidir?",
    t: "mcq",
    o: [
      "Her şey senkron çalışır",
      "Bileşenler olay (event) yayınlar, diğerleri olayı dinleyip tepki verir",
      "Sadece SQL ile çalışır",
      "UI olmadan çalışmaz",
      "Sadece tek makinede çalışır"
    ],
    a: 1,
    difficulty: "medium",
    week: 3,
    topic: "Event-Driven",
    importance: 4,
    explanation: "Publish/Subscribe mantığı ile gevşek bağlılık sağlar; asenkron akışlar yaygındır."
  },
  {
    q: "Pipe-and-Filter stiline en yakın örnek hangisidir?",
    t: "mcq",
    o: [
      "Birden çok veritabanı tablosu",
      "Verinin aşama aşama işlemden geçmesi (filter) ve boru (pipe) ile aktarılması",
      "Sadece UI bileşen ağacı",
      "Sadece login ekranı",
      "Sadece cache kullanımı"
    ],
    a: 1,
    difficulty: "hard",
    week: 3,
    topic: "Pipe-and-Filter",
    importance: 3,
    explanation: "Örn. medya işleme hattı: decode → filter → encode → upload."
  },
  {
    q: "Repository (depo) stilinde tipik olarak ne olur?",
    t: "mcq",
    o: [
      "Her servis kendi verisini asla tutmaz",
      "Ortak bir veri deposu etrafında bileşenler veri okur/yazar",
      "Sadece event gönderilir, veri tutulmaz",
      "UI katmanı yoktur",
      "Sadece mobilde kullanılır"
    ],
    a: 1,
    difficulty: "hard",
    week: 3,
    topic: "Repository Style",
    importance: 3,
    explanation: "Merkezi veri deposu (repository) sistemin kalbidir; entegrasyon noktası olur."
  },
  {
    q: "Microservices için “veri yönetimi” konusunda en doğru genelleme hangisidir?",
    t: "mcq",
    o: [
      "Tek bir ortak veritabanı her zaman en iyi çözümdür",
      "Her servis kendi verisinin sahibi olmalı; tutarlılık için entegrasyon stratejisi gerekir",
      "Veritabanı asla kullanılmaz",
      "Her servis aynı tabloyu yazar",
      "Sadece CSV saklanır"
    ],
    a: 1,
    difficulty: "hard",
    week: 3,
    topic: "Data Ownership",
    importance: 5,
    explanation: "Servis sahipliği (ownership) net olmalı; dağıtık tutarlılık için event/CDC/saga gibi yaklaşımlar doğar."
  },
  {
    q: "“Conway’s Law” mimari açısından en çok neye işaret eder?",
    t: "mcq",
    o: [
      "CPU frekansı artınca mimari iyileşir",
      "Organizasyon yapısı, üretilen sistemin iletişim yapısına benzer",
      "UI tasarımcıları backend’i belirler",
      "Test yazmak gereksizdir",
      "Veritabanı türü mimariyi etkilemez"
    ],
    a: 1,
    difficulty: "hard",
    week: 3,
    topic: "Conway’s Law",
    importance: 4,
    explanation: "Takım sınırları ve iletişim şekli, servis sınırlarını ve modülleri etkiler."
  },

  // =========================================================
  // ==== 4. HAFTA – View, Viewpoint, C4, ISO 42010 (8) =======
  // =========================================================

  {
    q: "View (görünüm) ile viewpoint (bakış açısı) arasındaki fark hangisidir?",
    t: "mcq",
    o: [
      "Aynı şeydir",
      "Viewpoint, hangi kurallarla/şablonla bakılacağını; view, o şablona göre üretilmiş çıktıyı ifade eder",
      "View sadece kod, viewpoint sadece UI’dır",
      "Viewpoint sadece testtir",
      "View sadece veritabanıdır"
    ],
    a: 1,
    difficulty: "hard",
    week: 4,
    topic: "View & Viewpoint",
    importance: 5,
    explanation: "Viewpoint = tarif/şablon; view = o tarifle çizilmiş gerçek mimari görünüm."
  },
  {
    q: "ISO/IEC/IEEE 42010 standardı en çok neyi standardize eder?",
    t: "mcq",
    o: [
      "Programlama dilini",
      "Mimari tanımın (architecture description) kavramlarını: stakeholder, concern, view, viewpoint vb.",
      "Sadece veritabanı normalizasyonunu",
      "Sadece UI çizimlerini",
      "Sadece log formatını"
    ],
    a: 1,
    difficulty: "hard",
    week: 4,
    topic: "ISO 42010",
    importance: 4,
    explanation: "42010, mimariyi nasıl tanımlayıp iletişim kuracağımızın kavramsal çerçevesini verir."
  },
  {
    q: "C4 Modeli’nin “Container” seviyesi en yakın neyi anlatır?",
    t: "mcq",
    o: [
      "Tek bir fonksiyonun içindeki değişkenleri",
      "Uygulamadaki ana çalıştırılabilir parçaları (web app, mobile app, API, DB gibi) ve ilişkilerini",
      "Sadece ekran tasarımını",
      "Sadece CSS dosyalarını",
      "Sadece kullanıcı hikayelerini"
    ],
    a: 1,
    difficulty: "medium",
    week: 4,
    topic: "C4 Model",
    importance: 4,
    explanation: "Container seviyesi; deploy edilebilir/parçalanmış ana birimleri ve aralarındaki iletişimi gösterir."
  },
  {
    q: "C4 Modeli’nde en üst seviye genelde hangisidir?",
    t: "mcq",
    o: [
      "Code",
      "Component",
      "Container",
      "Context",
      "Class"
    ],
    a: 3,
    difficulty: "easy",
    week: 4,
    topic: "C4 Model",
    importance: 3,
    explanation: "Context: sistemin çevresi, kullanıcılar ve dış sistemlerle ilişkisi."
  },
  {
    q: "4+1 View Model’de “+1” neyi temsil eder?",
    t: "mcq",
    o: [
      "Logo dosyasını",
      "Geliştirici sayısını",
      "Senaryoları / use-case’leri (diğer görünümleri doğrulamak için)",
      "Veritabanını",
      "Sadece test otomasyonunu"
    ],
    a: 2,
    difficulty: "medium",
    week: 4,
    topic: "4+1 View Model",
    importance: 4,
    explanation: "Use-case senaryoları, diğer görünüm kararlarını gerçek kullanım üzerinden test eder."
  },
  {
    q: "Mimari dokümantasyonda “tek diyagram her şeyi anlatır” yaklaşımının temel sorunu nedir?",
    t: "mcq",
    o: [
      "Her zaman doğrudur, sorun yoktur",
      "Farklı paydaşların farklı concerns’larını tek çizimde net karşılamak zordur",
      "PDF açılmaz",
      "Kod derlenmez",
      "Sunucu yanar"
    ],
    a: 1,
    difficulty: "medium",
    week: 4,
    topic: "Dokümantasyon",
    importance: 4,
    explanation: "Farklı ihtiyaçlar için farklı view’lar gerekir (ops, dev, security, business)."
  },
  {
    q: "Bir mimari diyagramın “yanlış anlaşılma” riskini azaltan en temel pratik hangisidir?",
    t: "mcq",
    o: [
      "Sadece renkleri değiştirmek",
      "Legend/anahtar ve net isimlendirme + sınırların çizilmesi",
      "PDF’i kilitlemek",
      "Daha büyük font seçmek",
      "Sadece screenshot almak"
    ],
    a: 1,
    difficulty: "easy",
    week: 4,
    topic: "Diyagram Pratikleri",
    importance: 3,
    explanation: "Neyi temsil ettiği belli olmayan kutu/oklar iletişimi bozar; legend ve sınırlar kritik."
  },
  {
    q: "C4 “Component” seviyesi genelde hangi soruya cevap verir?",
    t: "mcq",
    o: [
      "Bu sistemin kullanıcıları kimler?",
      "Bu container’ın içinde hangi ana modüller/bileşenler var ve nasıl konuşuyorlar?",
      "Bu fonksiyonun if-else’i kaç satır?",
      "Bu log satırı neden var?",
      "Bu ikon kaç piksel?"
    ],
    a: 1,
    difficulty: "medium",
    week: 4,
    topic: "C4 Model",
    importance: 4,
    explanation: "Component seviyesi, container içindeki büyük parçaları (ör. AuthService, BillingModule) gösterir."
  },

  // =========================================================
  // ==== 5. HAFTA – ADR, Değerlendirme, ATAM (6) =============
  // =========================================================

  {
    q: "ADR (Architectural Decision Record) temel olarak neyi kayıt altına alır?",
    t: "mcq",
    o: [
      "Sadece commit mesajlarını",
      "Mimari kararın bağlamını, alternatifleri, seçimi ve sonuçlarını",
      "Sadece UI renklerini",
      "Sadece sprint planını",
      "Sadece test sonuçlarını"
    ],
    a: 1,
    difficulty: "medium",
    week: 5,
    topic: "ADR",
    importance: 5,
    explanation: "ADR, “neden böyle yaptık?” sorusunu gelecekte net cevaplayabilmek için yazılır."
  },
  {
    q: "ADR yazmanın en büyük faydası genelde hangisidir?",
    t: "mcq",
    o: [
      "Derleme hızını artırır",
      "Takım hafızası oluşturur ve kararların nedenlerini görünür kılar",
      "UI’ı güzelleştirir",
      "Bug bulmayı imkânsız yapar",
      "Veritabanını otomatik tasarlar"
    ],
    a: 1,
    difficulty: "easy",
    week: 5,
    topic: "ADR",
    importance: 4,
    explanation: "Kararların gerekçesi kaybolmaz; yeni gelen ekip üyeleri hızlanır."
  },
  {
    q: "ATAM (Architecture Tradeoff Analysis Method) en çok ne için kullanılır?",
    t: "mcq",
    o: [
      "UI çizmek için",
      "Mimariyi kalite hedefleri üzerinden değerlendirmek ve trade-off/riskleri çıkarmak için",
      "Kod formatlamak için",
      "Sadece veritabanı yedeklemek için",
      "Sadece deployment yapmak için"
    ],
    a: 1,
    difficulty: "hard",
    week: 5,
    topic: "ATAM",
    importance: 4,
    explanation: "ATAM, kalite senaryolarıyla mimari riskleri ve hassas noktaları ortaya çıkarır."
  },
  {
    q: "ATAM çıktılarından biri olarak en çok hangisi beklenir?",
    t: "mcq",
    o: [
      "Yeni logo",
      "Risk listesi ve hassas noktalar (sensitivity points) / trade-off noktaları",
      "Sadece yeni renk paleti",
      "Sadece daha fazla kod",
      "Sadece sprint sayısı"
    ],
    a: 1,
    difficulty: "hard",
    week: 5,
    topic: "ATAM",
    importance: 4,
    explanation: "ATAM, kararların hangi kaliteyi etkilediğini ve nerede risk biriktiğini görünür kılar."
  },
  {
    q: "“Sensitivity point” mimari değerlendirmede en iyi neyi ifade eder?",
    t: "mcq",
    o: [
      "UI’daki hassas renk",
      "Bir tasarım kararının belirli bir kalite özelliğini güçlü şekilde etkilemesi",
      "CPU sıcaklığı",
      "Log seviyeleri",
      "Klavye kısayolu"
    ],
    a: 1,
    difficulty: "hard",
    week: 5,
    topic: "Değerlendirme Kavramları",
    importance: 3,
    explanation: "Örn. cache stratejisi performansı çok etkiler → sensitivity point."
  },
  {
    q: "Mimari değerlendirmede “risk” ne anlama gelir?",
    t: "mcq",
    o: [
      "Kodun uzun olması",
      "Bir kararın kalite hedefini tutturmama ihtimali ve bunun doğuracağı olumsuz sonuç",
      "UI’ın çirkin olması",
      "Sadece internetin yavaş olması",
      "Sadece RAM’in az olması"
    ],
    a: 1,
    difficulty: "medium",
    week: 5,
    topic: "Risk Yönetimi",
    importance: 4,
    explanation: "Risk = olasılık × etki; mimari, yüksek riskli alanları erken görmeye çalışır."
  },

  // =========================================================
  // ==== 6. HAFTA – MVC, Clean, Hexagonal, Bağımlılık (6) ====
  // =========================================================

  {
    q: "MVC’de “Model” katmanı en çok hangi sorumluluğu taşır?",
    t: "mcq",
    o: [
      "Butonların yerini ayarlamak",
      "Veri ve iş kurallarını temsil etmek (domain + business logic)",
      "Sadece HTTP istek atmak",
      "Sadece CSS yazmak",
      "Sadece test raporu üretmek"
    ],
    a: 1,
    difficulty: "easy",
    week: 6,
    topic: "MVC",
    importance: 5,
    explanation: "Model; uygulamanın “anlamını” ve iş kurallarını taşır, UI’dan bağımsızdır."
  },
  {
    q: "MVC’de “Controller” genelde ne yapar?",
    t: "mcq",
    o: [
      "Veritabanı tablolarını çizer",
      "Kullanıcı girdisini alır, gerekli iş akışını başlatır, view/model arasında koordinasyon sağlar",
      "Sadece animasyon yapar",
      "Sadece log temizler",
      "Sadece cache siler"
    ],
    a: 1,
    difficulty: "easy",
    week: 6,
    topic: "MVC",
    importance: 5,
    explanation: "Controller, kullanıcı aksiyonunu uygulama davranışına çeviren “orkestra şefi” gibidir."
  },
  {
    q: "Clean Architecture / Hexagonal (Ports & Adapters) yaklaşımında temel ilke hangisidir?",
    t: "mcq",
    o: [
      "İş mantığı UI’a sıkı bağlı olmalı",
      "Bağımlılıkların dışarıdan içeriye doğru akması (domain merkezde, dış dünya adaptör)",
      "Her şey tek dosyada olmalı",
      "Sadece microservices ile olur",
      "Veritabanı her şeyi belirler"
    ],
    a: 1,
    difficulty: "hard",
    week: 6,
    topic: "Clean/Hexagonal",
    importance: 5,
    explanation: "Merkez (domain) dışa bağımlı olmaz; DB/UI gibi detaylar adaptör olur."
  },
  {
    q: "Dependency Inversion Principle (DIP) pratikte çoğunlukla ne sağlar?",
    t: "mcq",
    o: [
      "Daha büyük ikon",
      "İş mantığını framework/DB gibi detaylardan bağımsız tutmayı",
      "Her zaman daha hızlı çalışmayı",
      "Her zaman daha ucuz bulutu",
      "Hiç test yazmamayı"
    ],
    a: 1,
    difficulty: "hard",
    week: 6,
    topic: "SOLID & Bağımlılık",
    importance: 4,
    explanation: "DIP sayesinde domain, dış bağımlılıklara değil arayüzlere (abstraction) bağlı kalır."
  },
  {
    q: "Hexagonal mimaride “port” ile “adapter” en iyi nasıl eşleşir?",
    t: "mcq",
    o: [
      "Port = somut kütüphane, Adapter = domain kuralı",
      "Port = arayüz/kontrat, Adapter = bu kontratı dış sistemle (DB/API/UI) gerçekleştiren parça",
      "Port = ikon, Adapter = renk",
      "Port = test, Adapter = deploy",
      "Port = tablo, Adapter = kolon"
    ],
    a: 1,
    difficulty: "hard",
    week: 6,
    topic: "Ports & Adapters",
    importance: 4,
    explanation: "Port “ne isterim?”; adapter “bunu şu teknolojiyle nasıl yaparım?” cevabıdır."
  },
  {
    q: "Layered mimaride “katman atlama” (UI doğrudan DB’ye bağlanması gibi) en çok neyi bozar?",
    t: "mcq",
    o: [
      "Sadece ikon boyutunu",
      "Sorumluluk ayrımını ve bakım/test edilebilirliği",
      "Sadece internet hızını",
      "Sadece ekran parlaklığını",
      "Hiçbir şeyi bozmaz"
    ],
    a: 1,
    difficulty: "medium",
    week: 6,
    topic: "Layered Architecture",
    importance: 4,
    explanation: "Katman atlama bağımlılıkları karıştırır; değişiklik maliyeti ve bug riski artar."
  },

  // =========================================================
  // ==== EXTRA (10) – Karışık / Sınav Tarzı ==================
  // =========================================================

  {
    q: "“Architecture is about the important stuff... whatever that is” ifadesi en çok ne anlatır?",
    t: "mcq",
    o: [
      "Mimari tamamen rastgeledir",
      "Mimarinin kapsamı projeye göre değişir; önemli olan kararlar mimaridir",
      "Mimari sadece UI’dır",
      "Mimari sadece DB’dir",
      "Mimari sadece testtir"
    ],
    a: 1,
    difficulty: "hard",
    week: 1,
    topic: "Mimari Kavramı",
    importance: 3,
    explanation: "Mimari, proje bağlamına göre “kritik kararlar” kümesidir."
  },
  {
    q: "Bir sistemde “bileşen sınırları” yanlış çizilirse en olası sonuç hangisidir?",
    t: "mcq",
    o: [
      "Her şey otomatik hızlanır",
      "Bağımlılıklar artar, değişiklikler zincirleme etkiler, ekipler birbirini bloklar",
      "Test ihtiyacı azalır",
      "Hiçbir şey değişmez",
      "Sadece ikon kalitesi düşer"
    ],
    a: 1,
    difficulty: "medium",
    week: 2,
    topic: "Modülerlik",
    importance: 4,
    explanation: "Yanlış sınırlar, coupling’i artırır; teslimat hızı düşer."
  },
  {
    q: "“Loose coupling” ile en uyumlu hedef hangisidir?",
    t: "mcq",
    o: [
      "Değişiklikleri daha izole yapmak ve bakım kolaylığı",
      "Tek dosyada her şeyi toplamak",
      "Şifreleri düz metin saklamak",
      "Hiç log tutmamak",
      "UI’ı büyütmek"
    ],
    a: 0,
    difficulty: "medium",
    week: 2,
    topic: "Coupling",
    importance: 4,
    explanation: "Loose coupling: bir parçayı değiştirince diğerleri minimum etkilenir."
  },
  {
    q: "SLA/SLO gibi kavramlar mimaride en çok hangi alanda kullanılır?",
    t: "mcq",
    o: [
      "Renk seçimi",
      "Hizmet seviyesini ölçmek (availability/latency hedefleri) ve operasyonel beklenti yönetimi",
      "Sadece test yazmak",
      "Sadece kod formatlamak",
      "Sadece ikon boyutu"
    ],
    a: 1,
    difficulty: "hard",
    week: 2,
    topic: "Operasyonel Kalite",
    importance: 3,
    explanation: "SLO hedefleri (örn. p95 latency, uptime) mimari ve operasyonu yönlendirir."
  },
  {
    q: "Bir mimari karar verirken “alternatifler” bölümünü yazmanın temel sebebi nedir?",
    t: "mcq",
    o: [
      "Metni uzatmak",
      "Seçimin nedenini ve reddedilen seçeneklerin gerekçesini görünür kılmak",
      "UI’ı renklendirmek",
      "Sadece testleri kapatmak",
      "Veritabanını silmek"
    ],
    a: 1,
    difficulty: "medium",
    week: 5,
    topic: "ADR Pratiği",
    importance: 4,
    explanation: "Alternatifler, gelecekte “neden bunu seçtik?” sorusuna net cevap verir."
  },
  {
    q: "“Observability (gözlemlenebilirlik)” dağıtık sistemlerde en çok hangi üçlüyle anılır?",
    t: "mcq",
    o: [
      "HTML-CSS-JS",
      "CPU-RAM-GPU",
      "Logs-Metrics-Traces",
      "PNG-JPG-WEBP",
      "FTP-SMTP-POP3"
    ],
    a: 2,
    difficulty: "hard",
    week: 3,
    topic: "Operasyon",
    importance: 4,
    explanation: "Microservices dünyasında logs/metrics/traces olmadan hata ayıklamak çok zorlaşır."
  },
  {
    q: "“Consistency” ile ilgili olarak CAP teoremi bağlamında en doğru yaklaşım hangisidir?",
    t: "mcq",
    o: [
      "Her sistem aynı anda her şeyi maksimum sağlar",
      "Dağıtık sistemde bazı durumlarda tutarlılık yerine erişilebilirlik/partition tolerance dengesi seçilir",
      "CAP sadece UI için geçerlidir",
      "CAP veritabanıyla ilgisizdir",
      "CAP sadece tek makinede geçerlidir"
    ],
    a: 1,
    difficulty: "hard",
    week: 3,
    topic: "Dağıtık Sistemler",
    importance: 3,
    explanation: "Partition durumlarında bazı özellikler arasında seçim yapılır; mimari bu dengeyi yönetir."
  },
  {
    q: "Bir “mimari stil” seçimi en çok neyi etkiler?",
    t: "mcq",
    o: [
      "Sadece ikon boyutunu",
      "Kalite özelliklerini (performans, ölçeklenebilirlik, bakım, deploy kolaylığı vb.)",
      "Sadece yazı tipini",
      "Sadece cihaz modelini",
      "Sadece kullanıcı adını"
    ],
    a: 1,
    difficulty: "easy",
    week: 1,
    topic: "Mimari Stiller",
    importance: 4,
    explanation: "Stil seçimi, hangi kalite hedeflerinin kolay/zor olacağını belirler."
  },
  {
    q: "“Single point of failure (SPOF)” en çok hangi durumla ilgilidir?",
    t: "mcq",
    o: [
      "Tek bir bileşenin çökmesiyle tüm sistemin durması riski",
      "Tek bir ikonun bozulması",
      "Tek bir CSS kuralı",
      "Tek bir kullanıcı",
      "Tek bir log satırı"
    ],
    a: 0,
    difficulty: "medium",
    week: 2,
    topic: "Availability",
    importance: 4,
    explanation: "SPOF azaltmak için redundancy/failover gibi yaklaşımlar kullanılır."
  },
  {
    q: "Bir sistemi “modüler” yapmak mimari açıdan en çok ne kazandırır?",
    t: "mcq",
    o: [
      "Değişiklikleri parça parça yönetme, daha iyi test edilebilirlik ve bakım kolaylığı",
      "Her zaman daha fazla bug",
      "Her zaman daha pahalı sunucu",
      "Her zaman daha yavaş UI",
      "Hiçbir kazanç"
    ],
    a: 0,
    difficulty: "easy",
    week: 2,
    topic: "Modülerlik",
    importance: 5,
    explanation: "Modülerlik değişiklik maliyetini düşürür; karmaşıklığı yönetilebilir parçalara böler."
  }
];
