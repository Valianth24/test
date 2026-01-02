
// Yazılım Mimarileri (7-11) – 50 Soruluk Sınav Soru Bankası (MCQ)
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]

window.questionBank = [
  // =========================================================
  // ==== 7. HAFTA – Spiral Model & RAD (10 Soru) ============
  // =========================================================
  {
    q: "Spiral Model’in temel amacı aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Sadece kodu hızlı yazmak",
      "Riskleri erken tespit edip yöneterek iteratif geliştirmek",
      "Testi tamamen sona bırakmak",
      "Sadece küçük projeleri tek seferde bitirmek",
      "Sadece tasarım dokümanı üretmek"
    ],
    a: "Riskleri erken tespit edip yöneterek iteratif geliştirmek",
    difficulty: "easy",
    week: 7,
    topic: "Spiral Model - amaç",
    importance: "high",
    explanation:
      "Spiral Model, projeyi tek seferde bitirmek yerine tur tur (iteratif = tekrar eden döngülerle) ilerletir. Her turda önce ‘risk’ (projeyi bozabilecek belirsizlik/tehlike: yanlış gereksinim, performans sorunu, bütçe, teknik zorluk) belirlenir ve azaltılır."
  },
  {
    q: "Spiral Model’de her döngü (spiral turu) genel olarak hangi mantıkla ilerler?",
    t: "mcq",
    o: [
      "Tek sefer gereksinim yaz → direkt teslim",
      "Planla → risk analizi yap → geliştir → değerlendir ve sonraki döngüyü planla",
      "Kodla → hiç test etmeden yayınla",
      "Sadece prototip çiz → projeyi bitir",
      "Sadece müşteri toplantısı yap → kod yazma"
    ],
    a: "Planla → risk analizi yap → geliştir → değerlendir ve sonraki döngüyü planla",
    difficulty: "medium",
    week: 7,
    topic: "Spiral Model - aşamalar",
    importance: "high",
    explanation:
      "Spiral’de her tur bir mini proje gibidir: (1) Plan/ hedef belirleme, (2) Risk analizi (ne ters gidebilir?), (3) Geliştirme (tasarım+kodu ilerletme), (4) Değerlendirme (çıktıyı inceleme, geri bildirim alma) ve sonra bir sonraki tur için tekrar planlama."
  },
  {
    q: "Spiral Model, hangi proje tipi için daha uygundur?",
    t: "mcq",
    o: [
      "Riskin çok düşük olduğu, çok küçük projeler",
      "Gereksinimleri hiç değişmeyen, çok basit projeler",
      "Büyük, karmaşık ve riskli projeler",
      "Sadece tek geliştirici ile yapılan hobi projeleri",
      "Sadece statik web sayfası projeleri"
    ],
    a: "Büyük, karmaşık ve riskli projeler",
    difficulty: "easy",
    week: 7,
    topic: "Spiral Model - kullanım",
    importance: "high",
    explanation:
      "Spiral Model’in en güçlü yönü risk yönetimidir. Büyük projelerde belirsizlik (teknik zorluklar, kapsam değişimi, entegrasyon problemleri) çok olur; Spiral bu belirsizliği turlar boyunca kontrol etmeyi hedefler."
  },
  {
    q: "RAD (Rapid Application Development) yaklaşımının en belirgin özelliği hangisidir?",
    t: "mcq",
    o: [
      "Uzun analiz dönemi, geç teslim",
      "Hızlı prototipleme ve kısa iterasyonlarla hızlı teslim",
      "Testin tamamen kaldırılması",
      "Sadece dokümantasyon üretmek",
      "Yalnızca tek teknoloji kullanmak zorunda olmak"
    ],
    a: "Hızlı prototipleme ve kısa iterasyonlarla hızlı teslim",
    difficulty: "easy",
    week: 7,
    topic: "RAD - temel fikir",
    importance: "high",
    explanation:
      "RAD, hızlı geliştirme yaklaşımıdır: kısa döngülerle çalışır ve prototip (ilk örnek/deneme sürümü) çıkararak kullanıcıya erken gösterir. Amaç, ürünü hızlıca görünür hale getirip daha çabuk teslim etmektir."
  },
  {
    q: "RAD yaklaşımında müşteri/kullanıcı katılımı için hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Müşteri sadece proje sonunda sistemi görür",
      "Müşteri sadece test aşamasında devreye girer",
      "Müşteri iterasyonlar boyunca sık geri bildirim verir",
      "Müşteri katılımı RAD’da önerilmez",
      "Müşteri sadece kod incelemesi yapar"
    ],
    a: "Müşteri iterasyonlar boyunca sık geri bildirim verir",
    difficulty: "easy",
    week: 7,
    topic: "RAD - müşteri geri bildirimi",
    importance: "high",
    explanation:
      "RAD’ın başarısı geri bildirime dayanır. Kullanıcı prototipi görür, ‘şu eksik/şu yanlış’ der; ekip bir sonraki kısa iterasyonda (kısa geliştirme turu) bunu düzeltir ve ürünü hızla olgunlaştırır."
  },
  {
    q: "RAD’da prototip (prototype) kullanmanın temel amacı hangisidir?",
    t: "mcq",
    o: [
      "Kodu tamamen bitirmek",
      "İhtiyaçları ve arayüz/işlevi erken görünür kılıp geri bildirim almak",
      "Sadece performans ölçmek",
      "Sadece veritabanı kurmak",
      "Sadece dokümantasyon yazmak"
    ],
    a: "İhtiyaçları ve arayüz/işlevi erken görünür kılıp geri bildirim almak",
    difficulty: "medium",
    week: 7,
    topic: "RAD - prototip",
    importance: "high",
    explanation:
      "Prototip, ‘ürünün küçük bir deneme hali’dir. Amaç en başta %100 bitmiş ürün yapmak değil; kullanıcıya erken gösterip ihtiyaçların doğru anlaşılıp anlaşılmadığını hızlıca doğrulamaktır."
  },
  {
    q: "Spiral Model’de her döngü sonunda sonuçlar hangi işlemden geçer ve sonraki döngü buna göre planlanır?",
    t: "mcq",
    o: ["Şifrelenir", "Silinir", "Değerlendirilir", "Arşivlenip değişmeden kalır", "Test edilmeden yayınlanır"],
    a: "Değerlendirilir",
    difficulty: "easy",
    week: 7,
    topic: "Spiral - değerlendirme",
    importance: "medium",
    explanation:
      "Her spiral turunun sonunda ortaya çıkan çıktı (doküman, prototip, modül, test sonucu) incelenir. Bu değerlendirme; ‘ne işe yaradı, ne eksik, hangi riskler kaldı’ sorularına cevap verir ve bir sonraki turun planını belirler."
  },
  {
    q: "RAD yaklaşımında hızlı geliştirme için sık kullanılan yöntemlerden biri aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Prototip oluşturma",
      "Sadece uzun dokümantasyon yazma",
      "Tüm testleri sona bırakma",
      "Tek seferde büyük teslim",
      "Değişiklik taleplerini reddetme"
    ],
    a: "Prototip oluşturma",
    difficulty: "easy",
    week: 7,
    topic: "RAD - prototip",
    importance: "high",
    explanation:
      "RAD’da prototip, ‘hızlı ilerleme aracı’dır. Prototip sayesinde ekip, kullanıcıyla aynı şeyi konuşur (aynı ekranı/akışı görür) ve yanlış anlaşılmalar erken yakalanır."
  },
  {
    q: "Spiral Model ile RAD arasındaki en doğru fark hangisidir?",
    t: "mcq",
    o: [
      "Spiral tamamen tek seferliktir, RAD iteratiftir",
      "Spiral risk yönetimine çok odaklanır; RAD hız ve prototiplemeye odaklanır",
      "RAD sadece büyük projelerde kullanılır, Spiral küçük projelerde",
      "İkisi de test yapmayı yasaklar",
      "İkisi de kullanıcı geri bildirimini gereksiz görür"
    ],
    a: "Spiral risk yönetimine çok odaklanır; RAD hız ve prototiplemeye odaklanır",
    difficulty: "medium",
    week: 7,
    topic: "Spiral vs RAD",
    importance: "high",
    explanation:
      "Spiral Model’in kalbi ‘risk analizi’dir (riskleri bul, azalt, sonra ilerle). RAD’ın kalbi ‘hızlı prototip + kısa iterasyon’ ile hızlı teslimdir. İkisi de döngüseldir ama odak noktaları farklıdır."
  },
  {
    q: "Aşağıdakilerden hangisi RAD için daha uygun bir senaryodur?",
    t: "mcq",
    o: [
      "Çok sık değişen kullanıcı talepleri olan bir arayüz uygulaması",
      "Hiç değişmeyecek, sabit gereksinimli bir proje",
      "Kullanıcıyla iletişimin mümkün olmadığı proje",
      "Teslim tarihi çok uzak, hızın önemsiz olduğu proje",
      "Risk analizi gerekmeyen, tamamen standart bir ürün"
    ],
    a: "Çok sık değişen kullanıcı talepleri olan bir arayüz uygulaması",
    difficulty: "medium",
    week: 7,
    topic: "RAD - uygunluk",
    importance: "medium",
    explanation:
      "RAD, kullanıcı geri bildiriminin güçlü olduğu ve UI/akışların sık değiştiği işlerde çok iyi çalışır. Çünkü prototip hızlı değişir; kullanıcı ‘böyle olsun’ der, ekip hemen uyarlayabilir."
  },

  // =========================================================
  // ==== 8. HAFTA – V-Model, CBSD, Incremental, Scrum, Kanban
  // ==== (10 Soru) ==========================================
  // =========================================================
  {
    q: "V-Model için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Test sadece en sonda yapılır",
      "Geliştirme aşamalarının karşısında ilgili test aşamaları vardır",
      "Dokümantasyon hiç yapılmaz",
      "Sadece prototipleme kullanır",
      "Sadece mobil uygulamalarda kullanılır"
    ],
    a: "Geliştirme aşamalarının karşısında ilgili test aşamaları vardır",
    difficulty: "easy",
    week: 8,
    topic: "V-Model - temel mantık",
    importance: "high",
    explanation:
      "V-Model’de sol taraf geliştirme (analiz→tasarım→kodlama), sağ taraf ise test (birim→entegrasyon→sistem→kabul) olarak düşünülür. Yani her geliştirme adımının bir ‘karşı test adımı’ vardır."
  },
  {
    q: "V-Model’de “Birim Testi (Unit Test)” en çok hangi aşamanın karşılığı gibi düşünülür?",
    t: "mcq",
    o: ["Gereksinim analizi", "Sistem tasarımı", "Kodlama", "Kullanıcı kabul", "Bakım"],
    a: "Kodlama",
    difficulty: "easy",
    week: 8,
    topic: "V-Model - test eşleşmesi",
    importance: "high",
    explanation:
      "Birim testi, en küçük parça olan fonksiyon/sınıf gibi kod birimlerini test eder. Bu nedenle doğrudan kodlama adımıyla ilişkilidir: ‘Bu fonksiyon doğru çalışıyor mu?’ sorusunun cevabıdır."
  },
  {
    q: "CBSD (Bileşen Tabanlı Geliştirme) yaklaşımının temel avantajı hangisidir?",
    t: "mcq",
    o: [
      "Her şeyi sıfırdan yazmayı zorunlu kılar",
      "Tekrar kullanılabilir bileşenlerle geliştirmeyi hızlandırır",
      "İletişimi tamamen kaldırır",
      "Test ihtiyacını yok eder",
      "Sadece tek katmanlı mimariye uygundur"
    ],
    a: "Tekrar kullanılabilir bileşenlerle geliştirmeyi hızlandırır",
    difficulty: "easy",
    week: 8,
    topic: "CBSD - avantaj",
    importance: "high",
    explanation:
      "CBSD’de ‘bileşen (component)’ yeniden kullanılabilen modül/parçadır (ör: ödeme modülü, giriş modülü). Hazır bileşen kullanmak veya daha önce yapılmış bileşeni yeniden kullanmak, geliştirmeyi hızlandırır ve maliyeti düşürür."
  },
  {
    q: "CBSD sürecinde “Bileşen Kataloğu” (component catalog) ne işe yarar?",
    t: "mcq",
    o: [
      "Kullanıcı şifrelerini saklar",
      "Kullanılabilir bileşenleri listeler ve seçimi kolaylaştırır",
      "Test raporlarını otomatik siler",
      "Sunucu kurulumunu yapar",
      "Sadece UI renk paletini tutar"
    ],
    a: "Kullanılabilir bileşenleri listeler ve seçimi kolaylaştırır",
    difficulty: "medium",
    week: 8,
    topic: "CBSD - katalog",
    importance: "high",
    explanation:
      "Bileşen kataloğu, ‘hangi bileşenler var, ne işe yarar, nasıl kullanılır’ bilgisini tutar. Böylece ekip ‘sıfırdan yazmak’ yerine uygun bileşeni bulup seçebilir (yeniden kullanım kolaylaşır)."
  },
  {
    q: "Artımlı (Incremental) modelin temel fikri hangisidir?",
    t: "mcq",
    o: [
      "Ürün tek seferde tam teslim edilir",
      "Ürün, küçük artımlarla (parça parça) geliştirilip teslim edilir",
      "Hiç geri bildirim alınmaz",
      "Sadece test yazılır",
      "Sadece tasarım yapılır"
    ],
    a: "Ürün, küçük artımlarla (parça parça) geliştirilip teslim edilir",
    difficulty: "easy",
    week: 8,
    topic: "Incremental - temel fikir",
    importance: "high",
    explanation:
      "Incremental (artımlı) demek ‘parça parça ekleyerek büyütmek’ demektir. Önce temel özellikler gelir, sonra her artımda yeni bir özellik eklenir. Kullanıcı ürünü erken görür ve kullanmaya başlayabilir."
  },
  {
    q: "Artımlı modelde erken geri bildirim almanın pratik sonucu hangisidir?",
    t: "mcq",
    o: [
      "Hatalar daha geç ortaya çıkar",
      "Sonradan değişiklik yapmak imkânsız olur",
      "Sonraki artımlar, gerçek kullanıcı geri bildirimine göre şekillenir",
      "Test ihtiyacı tamamen biter",
      "Sadece dokümantasyon artar"
    ],
    a: "Sonraki artımlar, gerçek kullanıcı geri bildirimine göre şekillenir",
    difficulty: "medium",
    week: 8,
    topic: "Incremental - geri bildirim",
    importance: "high",
    explanation:
      "Erken teslim edilen artımlar kullanıcı tarafından denenir. Kullanıcı ‘şu eksik, şu zor’ dediğinde sonraki artımları buna göre planlarsın. Böylece ürün gerçek ihtiyaca daha iyi uyar."
  },
  {
    q: "Scrum’da Product Owner (Ürün Sahibi) için en doğru görev hangisidir?",
    t: "mcq",
    o: [
      "Sunucu konfigürasyonu yapmak",
      "Product Backlog’u oluşturmak ve önceliklendirmek",
      "Her gün kod incelemek zorunda olmak",
      "Testleri tamamen kaldırmak",
      "Sadece tasarım çizmek"
    ],
    a: "Product Backlog’u oluşturmak ve önceliklendirmek",
    difficulty: "medium",
    week: 8,
    topic: "Scrum - roller",
    importance: "high",
    explanation:
      "Product Backlog, yapılacak işlerin listesi (özellikler, düzeltmeler, iyileştirmeler) demektir. Product Owner, iş değerini temsil eder ve ‘hangi iş önce yapılmalı’ önceliğini belirler."
  },
  {
    q: "Kanban’da WIP limitinin (Work In Progress limiti) temel amacı hangisidir?",
    t: "mcq",
    o: [
      "Daha fazla işi aynı anda başlatmak",
      "İş akışında tıkanmayı azaltıp odaklanmayı artırmak",
      "Testleri iptal etmek",
      "Sadece rapor üretmek",
      "Yalnızca tasarım işlerini engellemek"
    ],
    a: "İş akışında tıkanmayı azaltıp odaklanmayı artırmak",
    difficulty: "easy",
    week: 8,
    topic: "Kanban - WIP",
    importance: "high",
    explanation:
      "WIP (Work In Progress) ‘üzerinde çalışılan iş sayısı’dır. Çok iş aynı anda açılırsa hiçbir iş bitmez. WIP limiti ‘aynı anda en fazla şu kadar iş’ diyerek odaklanmayı artırır ve işleri daha hızlı bitirmeye yardım eder."
  },
  {
    q: "Scrum’da işi zaman kutularına bölen yinelemeli geliştirme aralığına ne denir?",
    t: "mcq",
    o: ["Sprint", "Milestone", "Release Train", "Kanban WIP", "Prototype"],
    a: "Sprint",
    difficulty: "easy",
    week: 8,
    topic: "Scrum - sprint",
    importance: "high",
    explanation:
      "Sprint, Scrum’da genelde 1–4 hafta süren sabit zaman aralığıdır (timebox). Bu süre içinde planlanan iş yapılır; sprint sonunda çalışan bir ürün artımı (increment) gösterilir."
  },
  {
    q: "Kanban tahtasında işler genellikle “Yapılacak → Yapılıyor → ____” şeklinde ilerler. Boşluğa en uygun ifade hangisidir?",
    t: "mcq",
    o: ["Bitti", "Analiz", "Risk", "Backlog", "Test Yok"],
    a: "Bitti",
    difficulty: "easy",
    week: 8,
    topic: "Kanban - kolonlar",
    importance: "medium",
    explanation:
      "Kanban tahtası işin durumunu görünür yapar. En temel akış: Yapılacak (To Do) → Yapılıyor (In Progress) → Bitti (Done). Böylece ekip ‘hangi iş nerede’yi net görür."
  },

  // =========================================================
  // ==== 9. HAFTA – Döngüsel/Evrimsel, Katmanlar, 2-Tier (10)
  // =========================================================
  {
    q: "Döngüsel (Cyclic) geliştirme modelinin ana fikri hangisidir?",
    t: "mcq",
    o: [
      "Tek seferde analiz yapıp bitirmek",
      "Her döngü sonunda geri bildirim alıp bir sonraki döngüde geliştirmek",
      "Testi tamamen kaldırmak",
      "Sadece prototip çizip kod yazmamak",
      "Sadece sunucu tarafını geliştirmek"
    ],
    a: "Her döngü sonunda geri bildirim alıp bir sonraki döngüde geliştirmek",
    difficulty: "easy",
    week: 9,
    topic: "Döngüsel model - temel fikir",
    importance: "high",
    explanation:
      "Cyclic (döngüsel) modelde proje turlar halinde ilerler. Her turda bir şey üretirsin, kullanıcı/ekip değerlendirir (geri bildirim), sonra bir sonraki turda iyileştirirsin. Yani ‘yap–gör–düzelt’ döngüsü vardır."
  },
  {
    q: "Döngüsel modelde aşağıdaki sıralamalardan hangisi daha doğrudur?",
    t: "mcq",
    o: [
      "Kodlama → bakım → analiz",
      "Gereksinim → tasarım/planlama → geliştirme → test/değerlendirme → geri bildirim",
      "Test → kodlama → hiç değerlendirme yok",
      "Sadece analiz → teslim",
      "Sadece bakım → teslim"
    ],
    a: "Gereksinim → tasarım/planlama → geliştirme → test/değerlendirme → geri bildirim",
    difficulty: "medium",
    week: 9,
    topic: "Döngüsel model - adımlar",
    importance: "high",
    explanation:
      "Önce ne istendiği anlaşılır (gereksinim), sonra nasıl yapılacağı planlanır (tasarım/plan), ardından geliştirme yapılır. Sonra test/değerlendirme ile sonuç kontrol edilir ve geri bildirim toplanır; bir sonraki döngü bu geri bildirime göre şekillenir."
  },
  {
    q: "Evrimsel (Evolutionary) geliştirme için en doğru açıklama hangisidir?",
    t: "mcq",
    o: [
      "Ürün en baştan tam yapılır, sonra hiç değişmez",
      "Önce çekirdek bir sürüm çıkar, zamanla özellikler eklenerek evrilir",
      "Sadece tasarım yapılır, kod yazılmaz",
      "Test yapılmaz",
      "Sadece veritabanı geliştirilir"
    ],
    a: "Önce çekirdek bir sürüm çıkar, zamanla özellikler eklenerek evrilir",
    difficulty: "easy",
    week: 9,
    topic: "Evrimsel geliştirme",
    importance: "high",
    explanation:
      "Evolutionary yaklaşımda önce ‘çekirdek (core)’ sürüm yapılır: temel iş çalışır. Sonra sürümler halinde yeni özellikler eklenir. Ürün zamanla büyür ve olgunlaşır (evrilir)."
  },
  {
    q: "Evrimsel geliştirmede kontrolsüz büyüme riskini azaltmak için en mantıklı yaklaşım hangisidir?",
    t: "mcq",
    o: [
      "Gereksinimleri hiç yazmamak",
      "Her yeni özellik için değerlendirme/önceliklendirme ve test sürecini sürdürmek",
      "Testleri kaldırmak",
      "Backlog’u tamamen kapatmak",
      "Sadece UI değiştirip iş mantığını hiç dokunmamak"
    ],
    a: "Her yeni özellik için değerlendirme/önceliklendirme ve test sürecini sürdürmek",
    difficulty: "medium",
    week: 9,
    topic: "Evrimsel - yönetim",
    importance: "medium",
    explanation:
      "Evrimsel modelde sürekli özellik eklenir. Kontrol olmazsa ürün şişer ve kalite düşer. Bu yüzden her özellik için ‘değer var mı, öncelik ne, test edildi mi’ sorularını disiplinle uygulamak gerekir."
  },
  {
    q: "Katmanlı yaklaşımda UI (Sunum) katmanının temel görevi hangisidir?",
    t: "mcq",
    o: [
      "Veritabanı tablolarını oluşturmak",
      "Kullanıcı ile etkileşim ve verinin ekranda gösterilmesi",
      "Sunucu işletim sistemini kurmak",
      "Sadece log dosyası yönetmek",
      "Sadece ağ trafiğini izlemek"
    ],
    a: "Kullanıcı ile etkileşim ve verinin ekranda gösterilmesi",
    difficulty: "easy",
    week: 9,
    topic: "Katmanlar - UI",
    importance: "high",
    explanation:
      "UI (Sunum) katmanı, kullanıcının gördüğü ekranları ve etkileşimleri içerir: buton, form, liste, menü. Kullanıcıdan veri alır (girdi) ve sonucu ekranda gösterir (çıktı)."
  },
  {
    q: "Katmanlı mimaride “iş mantığı (application/business logic)” katmanı neyi yapar?",
    t: "mcq",
    o: [
      "Sadece buton rengi ayarlar",
      "Kurallar, süreçler ve hesaplamalar gibi iş kurallarını yürütür",
      "Sadece veritabanını yedekler",
      "Sadece HTML üretir",
      "Sadece ağ paketlerini işler"
    ],
    a: "Kurallar, süreçler ve hesaplamalar gibi iş kurallarını yürütür",
    difficulty: "medium",
    week: 9,
    topic: "Katmanlar - iş mantığı",
    importance: "high",
    explanation:
      "İş mantığı katmanı, uygulamanın ‘kural motoru’dur: indirim hesaplama, sipariş kuralları, yetki kontrolü, süreç akışı gibi kararları burada verirsin. UI sadece gösterir; iş mantığı ne olacağını belirler."
  },
  {
    q: "2-Tier (İstemci–Sunucu) mimarinin en doğru tanımı hangisidir?",
    t: "mcq",
    o: [
      "İstemci ile sunucu hiç konuşmaz",
      "İstemci doğrudan sunucuya bağlanır ve veri/servis alır",
      "Sadece tek bilgisayarda çalışan sistemdir",
      "Sadece mikroservislerde kullanılır",
      "Sadece mobil uygulamalarda zorunludur"
    ],
    a: "İstemci doğrudan sunucuya bağlanır ve veri/servis alır",
    difficulty: "easy",
    week: 9,
    topic: "2-Tier - tanım",
    importance: "high",
    explanation:
      "2-Tier’de iki ana parça vardır: İstemci (client: kullanıcı uygulaması) ve Sunucu (server: veri/servis sağlayan taraf). İstemci istek gönderir, sunucu cevap verir; arada ekstra bir katman yoktur."
  },
  {
    q: "2-Tier mimaride performansla ilgili olası bir sorun hangisidir?",
    t: "mcq",
    o: [
      "Hiç ağ gecikmesi olmaz",
      "Ağ gecikmesi ve sunucu yükü artabilir",
      "Test ihtiyacı kalmaz",
      "UI katmanı ortadan kalkar",
      "Veri asla bozulmaz"
    ],
    a: "Ağ gecikmesi ve sunucu yükü artabilir",
    difficulty: "medium",
    week: 9,
    topic: "2-Tier - dezavantaj",
    importance: "medium",
    explanation:
      "İstemci-sunucu iletişimi ağ üzerinden olduğu için gecikme (latency) oluşabilir. Ayrıca çok istemci aynı anda sunucuya yük bindirirse sunucu yavaşlayabilir; bu da performansı etkiler."
  },
  {
    q: "Katmanlı mimaride veriye erişim ve CRUD işlemleri genellikle hangi katmanda yapılır?",
    t: "mcq",
    o: ["UI (Sunum)", "İş Mantığı", "Veri Erişim (Data Access)", "Ağ Katmanı", "Test Katmanı"],
    a: "Veri Erişim (Data Access)",
    difficulty: "easy",
    week: 9,
    topic: "Katmanlar - data access",
    importance: "high",
    explanation:
      "CRUD = Create/Read/Update/Delete (ekle/oku/güncelle/sil). Bu işlemler genellikle Data Access katmanında yapılır; böylece veritabanı detayları UI ve iş mantığından ayrılır (bakımı kolaylaşır)."
  },
  {
    q: "Döngüsel modelde her döngünün sonunda kullanıcı/müşteri ne alınır ve bir sonraki döngü buna göre şekillenir?",
    t: "mcq",
    o: ["Log", "Geri bildirim", "Derleme çıktısı", "Sadece tasarım", "Kod standardı"],
    a: "Geri bildirim",
    difficulty: "easy",
    week: 9,
    topic: "Döngüsel - geri bildirim",
    importance: "high",
    explanation:
      "Geri bildirim, kullanıcının ‘bu iyi/şu eksik/şu yanlış’ değerlendirmesidir. Döngüsel modelde bu değerlendirme, bir sonraki döngünün hedeflerini ve yapılacaklarını belirleyen ana girdidir."
  },

  // =========================================================
  // ==== 10. HAFTA – UML (10 Soru) ==========================
  // =========================================================
  {
    q: "UML (Unified Modeling Language) ne için kullanılır?",
    t: "mcq",
    o: [
      "Sadece program derlemek için",
      "Sistemleri görsel olarak modellemek, tasarlamak ve dokümante etmek için",
      "Sadece veri tabanı yedeği almak için",
      "Sadece CSS yazmak için",
      "Sadece işletim sistemi kurmak için"
    ],
    a: "Sistemleri görsel olarak modellemek, tasarlamak ve dokümante etmek için",
    difficulty: "easy",
    week: 10,
    topic: "UML - amaç",
    importance: "high",
    explanation:
      "UML, sistemi çizimlerle anlatma standardıdır. Kod yazmadan önce veya kodla birlikte; ‘sistem hangi parçalardan oluşuyor, nasıl çalışıyor’ sorularını diyagramlarla gösterir."
  },
  {
    q: "UML’in “ortak dil” olması aşağıdakilerden hangisini en çok kolaylaştırır?",
    t: "mcq",
    o: [
      "Sunucu RAM’ini artırmayı",
      "Ekip içinde analiz/tasarım hakkında iletişim kurmayı",
      "Ekran parlaklığını ayarlamayı",
      "Kodu otomatik yazmayı",
      "Sadece UI renk seçimini"
    ],
    a: "Ekip içinde analiz/tasarım hakkında iletişim kurmayı",
    difficulty: "easy",
    week: 10,
    topic: "UML - iletişim",
    importance: "high",
    explanation:
      "Ortak dil demek herkesin aynı sembolleri aynı anlamda kullanmasıdır. Analist, geliştirici, testçi ve yönetici aynı diyagramı görünce ‘aynı şeyi’ anlar; yanlış anlaşılma azalır."
  },
  {
    q: "UML diyagramlarının projeye katkılarından biri aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Testi tamamen kaldırır",
      "Erken aşamada tasarım hatalarını görmeye yardım eder",
      "Gereksinimleri gereksiz yapar",
      "Sunucu maliyetini otomatik düşürür",
      "İnternet bağlantısını hızlandırır"
    ],
    a: "Erken aşamada tasarım hatalarını görmeye yardım eder",
    difficulty: "medium",
    week: 10,
    topic: "UML - erken hata tespiti",
    importance: "high",
    explanation:
      "Diyagram çizince eksikler daha net görünür: eksik sınıf, yanlış ilişki, unutulan akış vb. Koda geçmeden fark edilirse düzeltmek daha ucuz ve daha hızlıdır."
  },
  {
    q: "Bir sistemi modellemek için UML kullanırken doğru yaklaşım hangisidir?",
    t: "mcq",
    o: [
      "Önce kod yaz, sonra diyagram çiz",
      "Önce analiz yap, sonra uygun diyagram türünü seç ve diyagramı oluştur",
      "Sadece tek diyagram çizmek yeterlidir",
      "Diyagramları testten sonra çizmek zorunludur",
      "Diyagramlar sadece görsel amaçlıdır, içerik doldurulmaz"
    ],
    a: "Önce analiz yap, sonra uygun diyagram türünü seç ve diyagramı oluştur",
    difficulty: "medium",
    week: 10,
    topic: "UML - süreç",
    importance: "high",
    explanation:
      "Analiz, ‘ne yapıyoruz ve neye ihtiyaç var’ demektir. Sonra hangi diyagramın uygun olduğuna karar verirsin (sınıf diyagramı mı, kullanım senaryosu mu, durum diyagramı mı). Doğru diyagram, doğru bilgiyi doğru şekilde gösterir."
  },
  {
    q: "Sınıf diyagramı (Class Diagram) çoğunlukla neyi göstermede kullanılır?",
    t: "mcq",
    o: [
      "Zaman çizelgesi",
      "Sınıflar, özellikler, metotlar ve aralarındaki ilişkiler",
      "Sunucu CPU kullanımı",
      "Sadece kullanıcı arayüzü renkleri",
      "Sadece dosya boyutları"
    ],
    a: "Sınıflar, özellikler, metotlar ve aralarındaki ilişkiler",
    difficulty: "easy",
    week: 10,
    topic: "UML - sınıf diyagramı",
    importance: "high",
    explanation:
      "Class Diagram, yazılımın ‘iskeletini’ gösterir: hangi sınıflar var, bu sınıfların alanları (özellik/attribute) ve fonksiyonları (metot/method) neler, birbirleriyle ilişkileri (kalıtım, ilişki, bileşim vb.) nasıl."
  },
  {
    q: "Durum diyagramı (State Diagram) en çok hangi tip bilgiyi gösterir?",
    t: "mcq",
    o: [
      "Bir varlığın zaman içinde farklı durumlara geçişini",
      "Sadece veritabanı tablolarını",
      "Sadece UI bileşenlerini",
      "Sadece sınıf ilişkilerini",
      "Sadece proje bütçesini"
    ],
    a: "Bir varlığın zaman içinde farklı durumlara geçişini",
    difficulty: "medium",
    week: 10,
    topic: "UML - durum diyagramı",
    importance: "medium",
    explanation:
      "State Diagram, bir nesnenin/varlığın ‘hangi durumlarda olabileceğini’ ve ‘hangi olayla hangi duruma geçeceğini’ gösterir. Örn: Sipariş ‘Hazırlanıyor → Kargoda → Teslim Edildi’ gibi."
  },
  {
    q: "UML diyagramları dokümantasyon açısından neden değerlidir?",
    t: "mcq",
    o: [
      "Çünkü kodu tamamen değiştirir",
      "Çünkü sistemi herkes için anlaşılır şekilde kayıt altına alır",
      "Çünkü test yazmayı yasaklar",
      "Çünkü interneti hızlandırır",
      "Çünkü sadece görsel süs amaçlıdır"
    ],
    a: "Çünkü sistemi herkes için anlaşılır şekilde kayıt altına alır",
    difficulty: "easy",
    week: 10,
    topic: "UML - dokümantasyon",
    importance: "high",
    explanation:
      "Dokümantasyon, sistem bilgisini kalıcı hale getirir. UML diyagramı ile ‘sistem böyle çalışıyor’ bilgisi hızlı okunur; yeni gelen ekip üyesi bile daha kolay anlayabilir."
  },
  {
    q: "UML, sistemleri ______ olarak modellemek için kullanılan standart bir dildir. Boşluğa en uygun kelime hangisidir?",
    t: "mcq",
    o: ["Görsel", "Rastgele", "Sadece metin", "Sadece kod", "Donanımsal"],
    a: "Görsel",
    difficulty: "easy",
    week: 10,
    topic: "UML - tanım",
    importance: "high",
    explanation:
      "UML’nin gücü görselleştirmedir: karmaşık yapıları şekiller/oklar/kutular ile anlatır. Böylece uzun metin yerine tek diyagramla büyük resmi görebilirsin."
  },
  {
    q: "UML kullanırken önce ______ yapılır, sonra uygun diyagram türü seçilir. Boşluğa hangisi gelir?",
    t: "mcq",
    o: ["Analiz", "Formatlama", "Deploy", "Refactor", "Sadece test"],
    a: "Analiz",
    difficulty: "easy",
    week: 10,
    topic: "UML - süreç",
    importance: "medium",
    explanation:
      "Analiz, problemi ve gereksinimi anlamaktır. Ne modelleyeceğini bilmeden diyagram seçemezsin. Analiz bittikten sonra ‘hangi diyagram hangi bilgiyi gösterecek’ kararı netleşir."
  },
  {
    q: "UML’in ekip çalışmasına katkısı en iyi hangi seçenekle açıklanır?",
    t: "mcq",
    o: [
      "Herkesin farklı semboller kullanmasını sağlar",
      "Tüm paydaşların aynı modeli görüp aynı dili konuşmasını kolaylaştırır",
      "Sadece yöneticilerin anlayacağı şekilde tasarlanır",
      "Sadece testçilerin kullanacağı bir araçtır",
      "Sadece çizim programıdır"
    ],
    a: "Tüm paydaşların aynı modeli görüp aynı dili konuşmasını kolaylaştırır",
    difficulty: "medium",
    week: 10,
    topic: "UML - ekip çalışması",
    importance: "high",
    explanation:
      "Paydaş = projede sözü olan kişi/gruplar (müşteri, yönetici, geliştirici, testçi). UML, ortak bir gösterim sağlayarak herkesin aynı modeli konuşmasını kolaylaştırır; karar alma hızlanır."
  },

  // =========================================================
  // ==== 11. HAFTA – UI/UX + Mikroservis + SOA (10 Soru) =====
  // =========================================================
  {
    q: "UI (User Interface) en doğru hangi ifadeyle tanımlanır?",
    t: "mcq",
    o: [
      "Kullanıcının ürünü kullanırken hissettiği duygu",
      "Kullanıcının etkileşime geçtiği arayüz (ekran, buton, menü vb.)",
      "Sadece veritabanı şeması",
      "Sadece sunucu tarafı kodu",
      "Sadece test senaryoları"
    ],
    a: "Kullanıcının etkileşime geçtiği arayüz (ekran, buton, menü vb.)",
    difficulty: "easy",
    week: 11,
    topic: "UI - tanım",
    importance: "high",
    explanation:
      "UI, kullanıcının gördüğü ve tıkladığı her şeydir: ekran düzeni, butonlar, menüler, formlar. Kısaca ‘ürünün yüzü’dür."
  },
  {
    q: "UX (User Experience) aşağıdakilerden hangisini kapsar?",
    t: "mcq",
    o: [
      "Sadece sekme başlığını",
      "Kullanıcının ürünü kullanırken yaşadığı genel deneyimi (kolaylık, hız, memnuniyet vb.)",
      "Sadece ikon tasarımını",
      "Sadece veritabanını",
      "Sadece kod standardını"
    ],
    a: "Kullanıcının ürünü kullanırken yaşadığı genel deneyimi (kolaylık, hız, memnuniyet vb.)",
    difficulty: "easy",
    week: 11,
    topic: "UX - tanım",
    importance: "high",
    explanation:
      "UX, ‘kullanım deneyimi’dir: kullanıcı işi kolayca yapabiliyor mu, hız yeterli mi, hata veriyor mu, kullanıcı memnun mu? UI sadece görüntü değil; UX kullanımın toplam kalitesidir."
  },
  {
    q: "UI ve UX farkı için en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "UI deneyimdir, UX arayüzdür",
      "UI arayüzün kendisidir; UX kullanıcı deneyiminin bütünüdür",
      "İkisi tamamen aynı şeydir",
      "UI sadece mobil içindir, UX sadece web içindir",
      "UX sadece renk seçimiyle ilgilidir"
    ],
    a: "UI arayüzün kendisidir; UX kullanıcı deneyiminin bütünüdür",
    difficulty: "easy",
    week: 11,
    topic: "UI vs UX",
    importance: "high",
    explanation:
      "UI = kullanıcıya görünen ve etkileşilen öğeler (buton, ekran). UX = o öğeleri kullanırken yaşanan süreç (kolaylık, anlaşılabilirlik, memnuniyet). UI iyi görünüp UX kötü olabilir (kullanım zor)."
  },
  {
    q: "UX tasarım sürecinde “kullanıcı araştırması” neden yapılır?",
    t: "mcq",
    o: [
      "Sunucu performansını artırmak için",
      "Kullanıcının ihtiyaçlarını, hedeflerini ve sorunlarını anlamak için",
      "Sadece renk paleti seçmek için",
      "Sadece veritabanı tasarlamak için",
      "Sadece kodu kısaltmak için"
    ],
    a: "Kullanıcının ihtiyaçlarını, hedeflerini ve sorunlarını anlamak için",
    difficulty: "medium",
    week: 11,
    topic: "UX - kullanıcı araştırması",
    importance: "high",
    explanation:
      "Kullanıcı araştırması; ‘kullanıcı kim, ne yapmak istiyor, nerede zorlanıyor’ sorularını cevaplar. Böylece tasarım kararları tahmine değil, gerçek kullanıcı ihtiyacına dayanır."
  },
  {
    q: "Mikroservis mimarisi için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Uygulama tek parça (monolit) olmalıdır",
      "Uygulama küçük, bağımsız servisler halinde bölünür",
      "Servisler hiçbir şekilde iletişim kurmaz",
      "Tek bir veritabanı zorunludur",
      "Deploy (dağıtım) her zaman toplu yapılır"
    ],
    a: "Uygulama küçük, bağımsız servisler halinde bölünür",
    difficulty: "easy",
    week: 11,
    topic: "Mikroservis - tanım",
    importance: "high",
    explanation:
      "Mikroservis, büyük uygulamayı küçük servislere ayırır (ör: kullanıcı servisi, ödeme servisi, ürün servisi). Her servis bağımsız geliştirilebilir, ayrı deploy edilebilir (deploy = çalışır ortama dağıtım/yayınlama)."
  },
  {
    q: "Mikroservislerde “hata izolasyonu” (fault isolation) ne sağlar?",
    t: "mcq",
    o: [
      "Bir servisteki sorun tüm sistemi her zaman çökertebilir",
      "Bir servisteki sorun diğer servisleri mümkün olduğunca az etkiler",
      "Test ihtiyacını kaldırır",
      "Veritabanını otomatik çoğaltır",
      "UI’ı otomatik çizer"
    ],
    a: "Bir servisteki sorun diğer servisleri mümkün olduğunca az etkiler",
    difficulty: "medium",
    week: 11,
    topic: "Mikroservis - hata izolasyonu",
    importance: "high",
    explanation:
      "Hata izolasyonu, bir serviste problem olunca tüm sistemin aynı anda çökmesini engellemeye çalışır. Servisler ayrıldığı için sorunlu servis sınırlandırılabilir; diğer servisler çalışmaya devam edebilir (tam garanti değil ama hedef budur)."
  },
  {
    q: "Mikroservislerde servisler arası iletişim genellikle hangi yöntemlerle yapılır?",
    t: "mcq",
    o: [
      "Sadece USB ile",
      "API çağrıları (HTTP/HTTPS) ve gerektiğinde mesajlaşma/RPC gibi yöntemlerle",
      "Sadece ekran görüntüsü ile",
      "Sadece e-posta ile",
      "Hiç iletişim kurulmaz"
    ],
    a: "API çağrıları (HTTP/HTTPS) ve gerektiğinde mesajlaşma/RPC gibi yöntemlerle",
    difficulty: "medium",
    week: 11,
    topic: "Mikroservis - iletişim",
    importance: "medium",
    explanation:
      "Servisler farklı süreçler/uygulamalar olduğu için ağ üzerinden konuşur. En yaygın yöntem API (HTTP/HTTPS) çağrılarıdır; bazen mesaj kuyruğu (message queue) veya RPC gibi yöntemlerle de iletişim kurulur."
  },
  {
    q: "Mikroservis mimaride “servis bazlı veritabanı” yaklaşımı neyi anlatır?",
    t: "mcq",
    o: [
      "Tüm servisler tek ortak veritabanı kullanmak zorundadır",
      "Her servisin kendi verisini yönetebilmesi ve gerekirse ayrı veritabanı kullanabilmesi",
      "Veritabanı kullanılmaması",
      "Sadece dosya sistemi kullanılması",
      "Verinin UI içinde tutulması"
    ],
    a: "Her servisin kendi verisini yönetebilmesi ve gerekirse ayrı veritabanı kullanabilmesi",
    difficulty: "hard",
    week: 11,
    topic: "Mikroservis - veri bağımsızlığı",
    importance: "medium",
    explanation:
      "Bu yaklaşımda her servis ‘kendi verisinin sahibi’ olur. İster aynı veritabanı sunucusunda ayrı şema/koleksiyon kullanır, ister tamamen ayrı veritabanı kullanır. Ama temel fikir: veri kontrolünün serviste olmasıdır (bağımsızlık)."
  },
  {
    q: "SOA (Service-Oriented Architecture) yaklaşımında “interface (arabirim)” kavramı en çok neyi ifade eder?",
    t: "mcq",
    o: [
      "Servisin veritabanı dosyasını",
      "Servisin dışarıya sunduğu hizmeti nasıl çağıracağını tanımlayan sözleşmeyi",
      "Servisin ekran tasarımını",
      "Servisin sunucu IP adresini",
      "Servisin renk paletini"
    ],
    a: "Servisin dışarıya sunduğu hizmeti nasıl çağıracağını tanımlayan sözleşmeyi",
    difficulty: "medium",
    week: 11,
    topic: "SOA - interface",
    importance: "high",
    explanation:
      "Interface (arabirim), ‘bu servisi nasıl kullanacaksın’ tanımıdır: hangi fonksiyon/endpoint var, hangi parametreleri alır, ne döndürür, hata durumları nedir. Buna ‘sözleşme (contract)’ denir; entegrasyonu kolaylaştırır."
  },
  {
    q: "Aşağıdakilerden hangisi Mikroservis mimarinin olası bir zorluğudur?",
    t: "mcq",
    o: [
      "Yönetim ve operasyonel karmaşıklığın artması (izleme, dağıtım, ağ iletişimi)",
      "Hiçbir şekilde ölçeklenememesi",
      "Sadece tek teknoloji ile yazılabilmesi",
      "API kullanamaması",
      "Test yapılamaması"
    ],
    a: "Yönetim ve operasyonel karmaşıklığın artması (izleme, dağıtım, ağ iletişimi)",
    difficulty: "medium",
    week: 11,
    topic: "Mikroservis - zorluklar",
    importance: "high",
    explanation:
      "Servis sayısı arttıkça yönetim zorlaşır: loglama/izleme (monitoring), hata takibi, ağ iletişimi, servis keşfi, her servisin ayrı deploy edilmesi gibi operasyonel işler büyür. Yani teknik kazançlar yanında yönetim maliyeti de artabilir."
  }
];

