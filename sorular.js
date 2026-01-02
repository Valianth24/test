// FINAL – Yazılım Mimarileri (1-6. Hafta) – 50 Soru (MCQ)
// Not: a alanı 0-tabanlıdır: 0=A, 1=B, 2=C, 3=D
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]

window.questionBank = [

  // =========================
  // ==== 1. HAFTA (8) ========
  // =========================
  {
    q: "‘Yazılım’ kavramını en doğru şekilde hangisi açıklar?",
    t: "mcq",
    o: [
      "Bilgisayarın fiziksel parçaları (işlemci, RAM, disk) ve bunların çalışması",
      "Bir sistemi çalıştıran komutlar/talimatlar ve bu talimatların işlendiği programlar bütünü",
      "Sadece kullanıcı arayüzü (butonlar, menüler, ekran tasarımları)",
      "Sadece programlama diliyle yazılmış metin dosyaları (kod) ve başka hiçbir şey"
    ],
    a: 1,
    difficulty: 1,
    week: 1,
    topic: "Yazılım Tanımı",
    importance: 3,
    explanation:
      "Doğru cevap: B)\nYazılım; bir sistemin ne yapacağını belirleyen komutlar/talimatlar ve bunların bir araya geldiği programlar bütünüdür. Donanım (fiziksel parçalar) tek başına iş yapamaz; işi yaptıran yazılımdır.\nTaktik: Donanım ‘beden’, yazılım ‘komut veren zihin’ gibi düşün."
  },
  {
    q: "Sistem yazılımı ile uygulama yazılımı arasındaki temel fark hangisidir?",
    t: "mcq",
    o: [
      "Sistem yazılımı kullanıcı işlerini yapar; uygulama yazılımı donanımı yönetir",
      "Sistem yazılımı donanım/kaynakları yönetir ve ortam sağlar; uygulama yazılımı kullanıcı görevlerini gerçekleştirir",
      "Sistem yazılımı sadece internete çıkar; uygulama yazılımı sadece dosya yönetir",
      "İkisi aynı şeydir, sadece isimleri farklıdır"
    ],
    a: 1,
    difficulty: 1,
    week: 1,
    topic: "Sistem vs Uygulama",
    importance: 3,
    explanation:
      "Doğru cevap: B)\nSistem yazılımı (işletim sistemi, sürücüler vb.) kaynak yönetimi yapar ve diğer yazılımların çalışacağı ortamı sağlar. Uygulama yazılımı ise kullanıcıya yönelik iş üretir (tarayıcı, oyun, ofis vb.).\nTaktik: Sistem = altyapı; uygulama = hizmet."
  },
  {
    q: "Bir yazılımın geliştirilmesinde en temel yaşam döngüsü sırası hangisine en yakındır?",
    t: "mcq",
    o: [
      "Test → Kodlama → Dağıtım → Tasarım",
      "Gereksinim/Tasarım → Kodlama → Test → Dağıtım/Canlıya Alma",
      "Kodlama → Tasarım → Test → Gereksinim",
      "Dağıtım → Tasarım → Kodlama → Test"
    ],
    a: 1,
    difficulty: 1,
    week: 1,
    topic: "SDLC Temel Akış",
    importance: 3,
    explanation:
      "Doğru cevap: B)\nGenel akış: Ne istendiğini anla/tasarla, kodla, test et, sonra kullanıcıya sun (dağıt). Kurumlara göre detaylar değişse de omurga bu sıradır.\nTaktik: ‘Önce planla, sonra yap, sonra doğrula, sonra yayınla’ diye ezberle."
  },
  {
    q: "Algoritma kavramı en doğru nasıl tanımlanır?",
    t: "mcq",
    o: [
      "Bir problemin çözümünü adım adım tanımlayan işlem sırası",
      "Sadece yüksek seviyeli programlama dillerinin sözdizimi kuralları",
      "Bir uygulamanın ekran tasarımının çizimi",
      "Bilgisayarın işlem gücünü ölçen birim"
    ],
    a: 0,
    difficulty: 1,
    week: 1,
    topic: "Algoritma",
    importance: 2,
    explanation:
      "Doğru cevap: A)\nAlgoritma; bir problemi çözmek için izlenen adımların (işlem sırasının) mantıksal tarifidir. Kod, bu adımların bir programlama diliyle yazılmış halidir.\nTaktik: Algoritma = tarif; kod = tarifin yazıldığı dil."
  },
  {
    q: "Derleme (compile) ile yorumlama (interpret) arasındaki fark hangisidir?",
    t: "mcq",
    o: [
      "Derleme kodu çalışma anında satır satır çalıştırır; yorumlama önce makine diline çevirir",
      "Derleme kaynak kodu önce makine diline çevirir; yorumlama kodu genellikle çalışma anında işler",
      "İkisi tamamen aynı süreçtir",
      "Derleme sadece mobil uygulamalarda olur; yorumlama sadece masaüstünde olur"
    ],
    a: 1,
    difficulty: 2,
    week: 1,
    topic: "Compile vs Interpret",
    importance: 3,
    explanation:
      "Doğru cevap: B)\nDerlemede kod önce çevrilir (makine diline / ara koda), sonra çalışır. Yorumlamada kod daha çok çalışma anında yorumlanarak yürütülür. Bu fark hata yakalama ve performans gibi konuları etkileyebilir.\nTaktik: Compile = ‘önce çevir, sonra çalıştır’; Interpret = ‘çalıştırırken çevir’."
  },
  {
    q: "Entegrasyon (integration) neyi ifade eder?",
    t: "mcq",
    o: [
      "Bir yazılımın görsel tasarımını (UI) hazırlama süreci",
      "Farklı bileşen/sistemlerin birlikte çalışacak şekilde birleştirilmesi ve veri alışverişinin sağlanması",
      "Sadece veritabanında tablo oluşturma işlemi",
      "Kodu daha kısa yazmak için yapılan optimizasyon"
    ],
    a: 1,
    difficulty: 2,
    week: 1,
    topic: "Entegrasyon",
    importance: 2,
    explanation:
      "Doğru cevap: B)\nEntegrasyon, farklı parçaların (servisler, modüller, harici sistemler) birbirleriyle konuşup birlikte çalışmasıdır. Örneğin ödeme altyapısı ile e-ticaret sisteminin API üzerinden bağlanması.\nTaktik: Entegrasyon = ‘parçaları konuşturma’."
  },
  {
    q: "Sürüm kontrol (version control) sistemleri (örn. Git) en çok ne işe yarar?",
    t: "mcq",
    o: [
      "Uygulamanın internet hızını artırır",
      "Kod değişikliklerini tarihçeli takip eder, geri alma ve ekip çalışmasını kolaylaştırır",
      "Sadece kullanıcı arayüzü çiziminde kullanılır",
      "Veritabanındaki verileri otomatik siler"
    ],
    a: 1,
    difficulty: 2,
    week: 1,
    topic: "Sürüm Kontrol",
    importance: 3,
    explanation:
      "Doğru cevap: B)\nSürüm kontrol; kim neyi ne zaman değiştirdi, önceki sürüme nasıl dönülür, ekip aynı kod üzerinde nasıl güvenle çalışır gibi konuları çözer.\nTaktik: Git = ‘geri alma + ekip uyumu + değişiklik geçmişi’."
  },
  {
    q: "‘Yazılım mimarisi’ en iyi hangi ifadeyle özetlenir?",
    t: "mcq",
    o: [
      "Kodun satır satır yazım stili ve girintileme kuralları",
      "Sistemin bileşenleri, bu bileşenlerin sorumlulukları ve aralarındaki ilişkilerin üst seviye tasarımı",
      "Sadece ekranların (UI) renk ve font seçimi",
      "Sadece veritabanı tablo isimlendirme yöntemi"
    ],
    a: 1,
    difficulty: 3,
    week: 1,
    topic: "Mimari Kavramı",
    importance: 2,
    explanation:
      "Doğru cevap: B)\nMimari, sistemin ‘büyük resmi’dir: hangi parçalar var, her parça ne yapar, nasıl iletişim kurarlar. Kod detayından önce gelir.\nTaktik: Mimari = ‘büyük resim + bileşen ilişkileri’."
  },

  // =========================
  // ==== 2. HAFTA (8) ========
  // =========================
  {
    q: "Komut (command) kavramı en doğru hangi açıklamaya uyar?",
    t: "mcq",
    o: [
      "Sadece grafikli arayüzde (GUI) tıklanan butonlara verilen isim",
      "İşletim sistemi veya bir yazılıma belirli bir işi yaptıran talimat",
      "Bir programlama dilindeki değişken türü",
      "Veritabanındaki kayıtların saklandığı alan"
    ],
    a: 1,
    difficulty: 1,
    week: 2,
    topic: "Komut Kavramı",
    importance: 2,
    explanation:
      "Doğru cevap: B)\nKomut; işletim sistemine veya bir araca ‘şunu yap’ diyen talimattır. Komut satırı (CLI) üzerinden verilir (ör. ls, dir, cd).\nTaktik: Komut = ‘tek cümlelik iş emri’."
  },
  {
    q: "Linux/Unix’te dizin içeriğini listelemek için en yaygın komut hangisidir?",
    t: "mcq",
    o: ["cd", "ls", "mkdir", "rm"],
    a: 1,
    difficulty: 1,
    week: 2,
    topic: "Linux Komutları",
    importance: 2,
    explanation:
      "Doğru cevap: B)\nls dizin içeriğini listeler. cd dizin değiştirir, mkdir klasör oluşturur, rm siler.\nTaktik: ls = ‘list’ (listele)."
  },
  {
    q: "Windows CMD’de dizin içeriğini listelemek için kullanılan komut hangisidir?",
    t: "mcq",
    o: ["dir", "ls", "pwd", "cat"],
    a: 0,
    difficulty: 1,
    week: 2,
    topic: "Windows Komutları",
    importance: 2,
    explanation:
      "Doğru cevap: A)\nWindows CMD’de dir içerik listeler. ls Linux tarafında yaygındır.\nTaktik: Windows’ta ‘dir’ = directory (dizin)."
  },
  {
    q: "SQL’de ‘veri ekleme’ işlemi için kullanılan temel komut hangisidir?",
    t: "mcq",
    o: ["SELECT", "UPDATE", "INSERT", "DELETE"],
    a: 2,
    difficulty: 1,
    week: 2,
    topic: "SQL CRUD",
    importance: 3,
    explanation:
      "Doğru cevap: C)\nINSERT yeni kayıt ekler. SELECT okur, UPDATE günceller, DELETE siler.\nTaktik: CRUD = Create(INSERT), Read(SELECT), Update(UPDATE), Delete(DELETE)."
  },
  {
    q: "SQL’de ‘mevcut veriyi güncelleme’ işlemi için kullanılan komut hangisidir?",
    t: "mcq",
    o: ["UPDATE", "INSERT", "SELECT", "DROP"],
    a: 0,
    difficulty: 1,
    week: 2,
    topic: "SQL CRUD",
    importance: 3,
    explanation:
      "Doğru cevap: A)\nUPDATE mevcut kaydı değiştirir. INSERT ekler, SELECT okur. DROP ise tablo gibi nesneleri kaldırmaya gider (daha farklı ve tehlikeli bir işlemdir).\nTaktik: Güncelleme = UPDATE."
  },
  {
    q: "Veri yapıları neden performans açısından kritiktir?",
    t: "mcq",
    o: [
      "Çünkü sadece arayüz tasarımını belirler",
      "Çünkü veriye erişim/arama/ekleme/silme maliyetini ve bellek kullanımını etkiler",
      "Çünkü internet bağlantısını hızlandırır",
      "Çünkü sadece programlama dilinin sözdizimini değiştirir"
    ],
    a: 1,
    difficulty: 2,
    week: 2,
    topic: "Veri Yapıları",
    importance: 3,
    explanation:
      "Doğru cevap: B)\nDoğru veri yapısı; arama, ekleme, silme gibi işlemlerin hızını belirler. Büyük veride yanlış seçim ciddi yavaşlık doğurabilir.\nTaktik: Yavaşlık şüphesinde önce ‘algoritma + veri yapısı’na bak."
  },
  {
    q: "Aşağıdakilerden hangisi ‘Stack (Yığın)’ mantığına uyar?",
    t: "mcq",
    o: [
      "FIFO: İlk giren ilk çıkar (banka sırası)",
      "LIFO: Son giren ilk çıkar (geri alma/undo gibi)",
      "Rastgele seçimle işlem yapan sistem",
      "Sadece bir tane eleman tutan yapı"
    ],
    a: 1,
    difficulty: 2,
    week: 2,
    topic: "Stack / Queue",
    importance: 2,
    explanation:
      "Doğru cevap: B)\nStack LIFO’dur: en son eklenen en önce çıkar. Undo, tarayıcı geri/ileri yığınları gibi örnekler verilebilir.\nTaktik: Stack = ‘üst üste koy, en üstten al’."
  },
  {
    q: "DBMS (Veritabanı Yönetim Sistemi) ile veritabanı (database) arasındaki fark hangisidir?",
    t: "mcq",
    o: [
      "DBMS verinin kendisidir; veritabanı ise programdır",
      "DBMS veritabanını oluşturup yönetmeye yarayan yazılımdır; veritabanı ise verilerin saklandığı yapıdır",
      "İkisi aynı şeydir",
      "DBMS sadece dosya sistemi yönetir; veritabanı sadece UI’dır"
    ],
    a: 1,
    difficulty: 2,
    week: 2,
    topic: "DBMS Kavramı",
    importance: 2,
    explanation:
      "Doğru cevap: B)\nVeritabanı verinin kendisini ve yapısını ifade eder; DBMS ise bu veriyi ekleme-okuma-güncelleme-silme gibi işlemlerle yöneten sistemdir (MySQL, PostgreSQL vb.).\nTaktik: DBMS = ‘yönetici’, database = ‘depo’."
  },

  // =========================
  // ==== 3. HAFTA (9) ========
  // =========================
  {
    q: "Gereksinim (requirement) en doğru neyi ifade eder?",
    t: "mcq",
    o: [
      "Sistemin nasıl kodlanacağını belirleyen sınıf isimleri",
      "Sistemin hangi ihtiyacı karşılayacağı ve kullanıcıdan ne beklendiğinin tanımı",
      "Sadece veritabanı tablo listesi",
      "Sadece ekran renkleri ve fontları"
    ],
    a: 1,
    difficulty: 1,
    week: 3,
    topic: "Gereksinim",
    importance: 3,
    explanation:
      "Doğru cevap: B)\nGereksinim, sistemin ‘ne yapması gerektiği’ni tanımlar. ‘Nasıl yapılacağı’ tasarım/kodlama kısmında belirlenir.\nTaktik: Requirement = ‘NE?’, Design = ‘NASIL?’"
  },
  {
    q: "Gereksinim çıkarımı (elicitation) için kullanılan yöntemlerden biri hangisidir?",
    t: "mcq",
    o: [
      "Kullanıcı ve paydaşlarla mülakat/anket yapma",
      "Sadece kodu optimize etme",
      "Sadece sunucuyu ölçekleme",
      "Sadece test raporu yazma"
    ],
    a: 0,
    difficulty: 2,
    week: 3,
    topic: "Gereksinim Çıkarımı",
    importance: 3,
    explanation:
      "Doğru cevap: A)\nElicitation; kullanıcıdan ihtiyaç toplama işidir. Mülakat, anket, gözlem, prototip üzerinden geri bildirim gibi teknikler kullanılır.\nTaktik: İhtiyaç ‘tahmin edilmez’, ‘toplanır’."
  },
  {
    q: "Gereksinim analizi aşamasında en temel hedef hangisidir?",
    t: "mcq",
    o: [
      "Gereksinimleri kod haline çevirmek",
      "Gereksinimlerdeki çakışmaları/eksikleri bulup netleştirmek ve önceliklendirmek",
      "Sadece UI ekranlarını çizmek",
      "Sadece veritabanı yedeklemek"
    ],
    a: 1,
    difficulty: 2,
    week: 3,
    topic: "Gereksinim Analizi",
    importance: 3,
    explanation:
      "Doğru cevap: B)\nAnalizde amaç: belirsizliği azaltmak. ‘Bu özellik şart mı? Öncelik ne? Birbiriyle çelişiyor mu?’ gibi sorular burada çözülür.\nTaktik: Analiz = ‘temizle + sırala (önceliklendir)’."
  },
  {
    q: "Fonksiyonel gereksinim ile fonksiyonel olmayan (non-functional) gereksinim farkı hangisidir?",
    t: "mcq",
    o: [
      "Fonksiyonel olmayan gereksinimler hiç önemli değildir",
      "Fonksiyonel gereksinim sistemin ne yapacağını, fonksiyonel olmayan gereksinim sistemin nasıl bir kaliteyle yapacağını tanımlar",
      "Fonksiyonel gereksinim sadece UI’dır, fonksiyonel olmayan sadece veritabanıdır",
      "Fonksiyonel gereksinim sadece güvenliği, fonksiyonel olmayan sadece performansı anlatır"
    ],
    a: 1,
    difficulty: 3,
    week: 3,
    topic: "Requirement Türleri",
    importance: 3,
    explanation:
      "Doğru cevap: B)\nFonksiyonel: ‘sipariş ver’, ‘kayıt ol’, ‘rapor üret’ gibi işlevler. Non-functional: performans, güvenlik, kullanılabilirlik, erişilebilirlik gibi kalite hedefleri.\nTaktik: Fonksiyonel = ‘NE yapar?’, Non-functional = ‘NE KADAR iyi yapar?’"
  },
  {
    q: "SRS (Software Requirements Specification) belgesinin temel amacı nedir?",
    t: "mcq",
    o: [
      "Kodun otomatik üretilmesini sağlamak",
      "Gereksinimleri net ve test edilebilir şekilde belgelendirip ortak referans oluşturmak",
      "Sadece tasarım renklerini sabitlemek",
      "Sadece sürüm numarası belirlemek"
    ],
    a: 1,
    difficulty: 2,
    week: 3,
    topic: "SRS / Belirtim",
    importance: 3,
    explanation:
      "Doğru cevap: B)\nSRS; ekipler arası ‘tek doğru referans’ gibidir. Geliştirme ve test ekibi, neyin doğru olduğunu bu belge üzerinden değerlendirir.\nTaktik: SRS = ‘ortak sözleşme’."
  },
  {
    q: "Gereksinim doğrulama (validation) neyi hedefler?",
    t: "mcq",
    o: [
      "‘Doğru ürünü mü yapıyoruz?’ sorusunu paydaşla kontrol etmek",
      "‘Kodu doğru mu yazdık?’ sorusunu derleyiciyle kontrol etmek",
      "Sadece performans testi yapmak",
      "Sadece UI test etmek"
    ],
    a: 0,
    difficulty: 3,
    week: 3,
    topic: "Validation",
    importance: 2,
    explanation:
      "Doğru cevap: A)\nValidation; kullanıcı/paydaş ihtiyacına uygun mu diye kontrol eder. ‘Doğru ürünü yapıyor muyuz?’ yaklaşımıdır.\nTaktik: Validation = ‘doğru ürün’ kontrolü."
  },
  {
    q: "Gereksinim yönetimi neden yapılır?",
    t: "mcq",
    o: [
      "Çünkü gereksinimler proje boyunca değişebileceği için değişikliklerin kayıt-altına alınması ve kontrol edilmesi gerekir",
      "Çünkü gereksinimler asla değişmez",
      "Çünkü sadece test ekibini ilgilendirir",
      "Çünkü sadece sunucu maliyetini düşürür"
    ],
    a: 0,
    difficulty: 2,
    week: 3,
    topic: "Gereksinim Yönetimi",
    importance: 3,
    explanation:
      "Doğru cevap: A)\nDeğişiklikler kontrol edilmezse kapsam şişer, süre/bütçe bozulur. Yönetim; kayıt + etki analizi + onay gibi adımlarla ilerler.\nTaktik: Değişiklik = ‘kayıt + etki + onay’."
  },
  {
    q: "Proje planlamada ‘kapsam (scope)’ neyi ifade eder?",
    t: "mcq",
    o: [
      "Proje içinde yapılacak işlerin sınırını: neler var, neler yok",
      "Sadece takımın kaç kişi olduğunu",
      "Sadece kullanılacak programlama dilini",
      "Sadece test senaryolarını"
    ],
    a: 0,
    difficulty: 2,
    week: 3,
    topic: "Planlama / Scope",
    importance: 3,
    explanation:
      "Doğru cevap: A)\nScope; projenin sınırıdır. ‘Bu projede şu var, şu yok’ netleşmezse proje sürekli genişler.\nTaktik: Scope net değilse proje ‘bitmez’."
  },
  {
    q: "Mimari tasarım (architecture design) ile detay tasarım (detailed design) arasındaki fark hangisidir?",
    t: "mcq",
    o: [
      "Mimari tasarım büyük resmi (bileşenler/ilişkiler) belirler; detay tasarım sınıflar/algoritmalar gibi ayrıntılara iner",
      "Mimari tasarım sadece UI renklerini seçer; detay tasarım sadece test yazar",
      "Detay tasarım büyük resmi; mimari tasarım kod satırlarını belirler",
      "İkisi aynı çalışmadır"
    ],
    a: 0,
    difficulty: 3,
    week: 3,
    topic: "Mimari vs Detay Tasarım",
    importance: 2,
    explanation:
      "Doğru cevap: A)\nMimari: bileşenlerin yapısı ve iletişimi. Detay tasarım: sınıflar, fonksiyonlar, veri yapıları gibi daha teknik ayrıntılar.\nTaktik: Mimari = ‘harita’, detay tasarım = ‘sokak planı’."
  },

  // =========================
  // ==== 4. HAFTA (9) ========
  // =========================
  {
    q: "Modüler geliştirme (modularity) neden tercih edilir?",
    t: "mcq",
    o: [
      "Çünkü her şeyi tek dosyada toplamak daha hızlıdır",
      "Çünkü bakım, test ve yeniden kullanım kolaylaşır; değişiklikler daha kontrollü olur",
      "Çünkü veritabanını otomatik kurar",
      "Çünkü internet bağlantısını güçlendirir"
    ],
    a: 1,
    difficulty: 2,
    week: 4,
    topic: "Modülerlik",
    importance: 3,
    explanation:
      "Doğru cevap: B)\nModülerlik; sistemi parçalara ayırır. Bu parçalar ayrı test edilebilir, ayrı geliştirilebilir, hata ayıklama kolaylaşır.\nTaktik: Büyük işi ‘parçala, yönet’."
  },
  {
    q: "Code review (kod inceleme) en doğru hangi amaçla yapılır?",
    t: "mcq",
    o: [
      "Kodu daha uzun yazmaya zorlamak için",
      "Hata/kalite sorunlarını erken yakalamak ve ekip standardını korumak için",
      "Sadece tasarım kararlarını değiştirmek için",
      "Sadece sürüm numarasını artırmak için"
    ],
    a: 1,
    difficulty: 2,
    week: 4,
    topic: "Code Review",
    importance: 3,
    explanation:
      "Doğru cevap: B)\nKod inceleme; hatayı üretimden önce yakalatır, güvenliği artırır, ortak kod standartlarını oturtur.\nTaktik: Review = ‘erken yakala, ucuz düzelt’."
  },
  {
    q: "Birim testi (unit test) en çok neyi test eder?",
    t: "mcq",
    o: [
      "Sistemin tümünün uçtan uca çalışmasını",
      "En küçük kod parçalarını (fonksiyon/sınıf) izole şekilde",
      "Gerçek kullanıcı senaryolarını tarayıcıda",
      "Sunucu altyapısının ağ performansını"
    ],
    a: 1,
    difficulty: 2,
    week: 4,
    topic: "Unit Test",
    importance: 3,
    explanation:
      "Doğru cevap: B)\nUnit test; küçük parçaların doğru çalıştığını doğrular. ‘Fonksiyon doğru değer döndürüyor mu?’ gibi.\nTaktik: Unit = ‘en küçük parça’."
  },
  {
    q: "Entegrasyon testi (integration test) ile sistem testi (system test) arasındaki fark hangisidir?",
    t: "mcq",
    o: [
      "Entegrasyon testi bileşenlerin birlikte çalışmasını, sistem testi tüm sistemin gereksinimlere göre davranmasını test eder",
      "Entegrasyon testi sadece UI’ı, sistem testi sadece veritabanını test eder",
      "Sistem testi sadece tek bir fonksiyonu test eder",
      "İkisi aynı test türüdür"
    ],
    a: 0,
    difficulty: 3,
    week: 4,
    topic: "Test Seviyeleri",
    importance: 3,
    explanation:
      "Doğru cevap: A)\nEntegrasyon: parçalar konuşuyor mu? Sistem testi: tüm sistem hedeflenen işlevleri ve kaliteyi sağlıyor mu?\nTaktik: Entegrasyon = ‘parçalar arası’; sistem testi = ‘bütün sistem’."
  },
  {
    q: "Test senaryosu (test case) tipik olarak hangi bilgileri içerir?",
    t: "mcq",
    o: [
      "Sadece yazılımcının ismi",
      "Adımlar, test verisi, beklenen sonuç ve gerçek sonuç gibi bilgiler",
      "Sadece ekran görüntüsü",
      "Sadece sürüm numarası"
    ],
    a: 1,
    difficulty: 2,
    week: 4,
    topic: "Test Case",
    importance: 2,
    explanation:
      "Doğru cevap: B)\nİyi bir test case ‘nasıl tekrar edilir’ bilgisini taşır: adımlar + veri + beklenen sonuç. Böylece hata kolayca bulunur.\nTaktik: Test case yazarken ‘tekrar edilebilirlik’ şart."
  },
  {
    q: "Hata raporu (bug report) yazarken en kritik nokta hangisidir?",
    t: "mcq",
    o: [
      "Hatanın nasıl tekrar edileceğini (reproduce steps) açık yazmak",
      "Hatanın görselini hiç eklememek",
      "Sadece ‘çalışmıyor’ demek",
      "Sadece kullanıcıyı suçlamak"
    ],
    a: 0,
    difficulty: 2,
    week: 4,
    topic: "Bug Report",
    importance: 3,
    explanation:
      "Doğru cevap: A)\nHata raporu ne kadar netse çözüm o kadar hızlıdır. En önemlisi: adım adım tekrar (reproduce) bilgisi.\nTaktik: Bug report = ‘adım adım tekrar + beklenen/gerçek sonuç’."
  },
  {
    q: "Bakım (maintenance) aşamasında aşağıdakilerden hangisi tipik bir faaliyettir?",
    t: "mcq",
    o: [
      "Canlıda hata düzeltmek ve yeni gereksinimlere göre uyarlamak",
      "Sadece uygulamanın adını değiştirmek",
      "Sadece kodu silmek",
      "Sadece tasarım rengini sabitlemek"
    ],
    a: 0,
    difficulty: 2,
    week: 4,
    topic: "Bakım",
    importance: 3,
    explanation:
      "Doğru cevap: A)\nBakım; canlıya çıktıktan sonra hata düzeltme (corrective), uyarlama (adaptive), iyileştirme (perfective) gibi işleri kapsar.\nTaktik: Canlı = ‘iş bitti’ değil, ‘bakım başladı’."
  },
  {
    q: "Yedekleme ve kurtarma (backup & recovery) neden önemlidir?",
    t: "mcq",
    o: [
      "Veri kaybı riskini azaltmak ve felaket durumunda sistemi geri döndürebilmek için",
      "Sadece uygulamayı hızlandırmak için",
      "Sadece arayüzü güzelleştirmek için",
      "Sadece test yazmayı azaltmak için"
    ],
    a: 0,
    difficulty: 2,
    week: 4,
    topic: "Backup/Recovery",
    importance: 3,
    explanation:
      "Doğru cevap: A)\nCanlı sistemlerde veri kaybı ciddi sonuç doğurur. Backup & recovery; bu riske karşı güvenlik ağıdır.\nTaktik: ‘Veri giderse sistem gider’ diye düşün."
  },
  {
    q: "Dokümantasyonun (documentation) projeye en büyük katkısı hangisidir?",
    t: "mcq",
    o: [
      "Projeyi daha yavaşlatmak",
      "Yeni ekip üyelerinin sistemi hızlı anlamasını ve bakımın sürdürülebilir olmasını sağlamak",
      "Sadece testleri artırmak",
      "Sadece sürüm numarasını düşürmek"
    ],
    a: 1,
    difficulty: 1,
    week: 4,
    topic: "Dokümantasyon",
    importance: 3,
    explanation:
      "Doğru cevap: B)\nDokümantasyon, bilginin kişilerin kafasında kalmasını engeller. Kurulum, mimari, akışlar, kararlar yazılı kalır.\nTaktik: Belge = ‘proje hafızası’."
  },

  // =========================
  // ==== 5. HAFTA (8) ========
  // =========================
  {
    q: "Proje yönetiminin temel amacı hangisidir?",
    t: "mcq",
    o: [
      "Projeyi plansız yürütmek ve hızlıca bitirmek",
      "Kapsam-zaman-bütçe-kalite dengesini yöneterek projeyi hedeflere uygun tamamlamak",
      "Sadece kod standardını belirlemek",
      "Sadece UI tasarımı yapmak"
    ],
    a: 1,
    difficulty: 2,
    week: 5,
    topic: "Proje Yönetimi",
    importance: 3,
    explanation:
      "Doğru cevap: B)\nProje yönetimi; kapsam (ne yapılacak), zaman (ne zaman), bütçe (ne kadar), kalite (hangi seviyede) dengesini yönetir.\nTaktik: Üçlü/ dörtlü kısıt: scope-time-cost-(quality)."
  },
  {
    q: "WBS (Work Breakdown Structure) en çok ne işe yarar?",
    t: "mcq",
    o: [
      "Projedeki işleri daha küçük iş paketlerine bölerek planlamayı ve takip etmeyi kolaylaştırır",
      "Sadece veritabanı tablolarını listeler",
      "Sadece kullanıcı arayüzü akışını çizer",
      "Sadece test otomasyonunu kurar"
    ],
    a: 0,
    difficulty: 2,
    week: 5,
    topic: "WBS",
    importance: 2,
    explanation:
      "Doğru cevap: A)\nWBS; büyük işi parçalara böler. Böylece süre, sorumluluk ve takip netleşir.\nTaktik: WBS = ‘büyük işi yönetilebilir parçalara böl’."
  },
  {
    q: "İzleme ve kontrol (monitoring & controlling) aşamasının odak noktası hangisidir?",
    t: "mcq",
    o: [
      "Planı bir kere yazıp hiç bakmamak",
      "Gerçek ilerlemeyi planla karşılaştırmak ve sapma varsa düzeltici aksiyon almak",
      "Sadece tasarım değişikliklerini yapmak",
      "Sadece kullanıcı şikayetlerini kapatmak"
    ],
    a: 1,
    difficulty: 2,
    week: 5,
    topic: "İzleme/Kontrol",
    importance: 3,
    explanation:
      "Doğru cevap: B)\nTakip edilmezse sapmalar büyür. İzleme-kontrol, sapmayı erken yakalayıp proje raydan çıkmadan düzeltmeyi sağlar.\nTaktik: Erken sapma = ucuz çözüm."
  },
  {
    q: "Risk yönetiminde doğru yaklaşım hangisidir?",
    t: "mcq",
    o: [
      "Riskleri yok saymak",
      "Riskleri tanımlamak, olasılık/etki analiz etmek, önlem planlamak ve düzenli izlemek",
      "Riskleri sadece test ekibine bırakmak",
      "Riskleri sadece proje sonunda değerlendirmek"
    ],
    a: 1,
    difficulty: 2,
    week: 5,
    topic: "Risk Yönetimi",
    importance: 3,
    explanation:
      "Doğru cevap: B)\nRisk yönetimi; ‘olabilir’ sorunları önceden görüp hazırlıklı olmaktır.\nTaktik: Risk = olasılık × etki."
  },
  {
    q: "Kalite kontrol (QC) ile kalite güvence (QA) arasındaki temel fark hangisidir?",
    t: "mcq",
    o: [
      "QC süreç odaklıdır; QA ürün odaklıdır",
      "QC ürün/çıktı üzerinde hataları bulur; QA süreçleri iyileştirerek hatayı en baştan azaltır",
      "QC sadece toplantıdır; QA sadece kod yazmaktır",
      "İkisi aynı anlama gelir"
    ],
    a: 1,
    difficulty: 3,
    week: 5,
    topic: "QA vs QC",
    importance: 3,
    explanation:
      "Doğru cevap: B)\nQC: ‘üründe hata var mı?’ (test, inceleme). QA: ‘süreç doğru mu, kaliteyi nasıl garanti ederiz?’ (standartlar, denetimler, süreç iyileştirme).\nTaktik: QC = ürün, QA = süreç."
  },
  {
    q: "Değişiklik (change) yönetimi neden gereklidir?",
    t: "mcq",
    o: [
      "Çünkü değişiklikler projeyi her zaman hızlandırır",
      "Çünkü değişiklikler kapsam/süre/bütçeyi etkiler; kontrol edilmezse proje yönetilemez hale gelir",
      "Çünkü değişiklikler sadece tasarım rengini etkiler",
      "Çünkü değişiklik yönetimi sadece küçük projelerde yapılır"
    ],
    a: 1,
    difficulty: 2,
    week: 5,
    topic: "Değişiklik Yönetimi",
    importance: 3,
    explanation:
      "Doğru cevap: B)\nHer değişiklik yeni iş demektir. Etkisi ölçülür, onaylanır, plan güncellenir.\nTaktik: Değişiklik = ‘yeni iş + yeni maliyet’."
  },
  {
    q: "İletişim planı (communication plan) neyi sağlar?",
    t: "mcq",
    o: [
      "Bilginin kimden kime, hangi sıklıkla ve hangi formatta aktarılacağını netleştirir",
      "Sadece sprint süresini belirler",
      "Sadece veritabanı şemasını çizer",
      "Sadece kod inceleme kurallarını belirler"
    ],
    a: 0,
    difficulty: 2,
    week: 5,
    topic: "İletişim Yönetimi",
    importance: 2,
    explanation:
      "Doğru cevap: A)\nİletişim planı; paydaşların doğru bilgiyi doğru zamanda almasını sağlar. Aksi halde yanlış beklenti oluşur.\nTaktik: İyi iletişim = hizalı beklenti."
  },
  {
    q: "Konfigürasyon yönetimi (configuration management) en çok hangi ihtiyacı karşılar?",
    t: "mcq",
    o: [
      "Sürüm, değişiklik, yapılandırma öğeleri ve yayınların kontrol altında tutulması",
      "Sadece kullanıcı şifre politikası belirlemek",
      "Sadece UI tasarım sistemini seçmek",
      "Sadece network kablolamasını yapmak"
    ],
    a: 0,
    difficulty: 3,
    week: 5,
    topic: "Konfigürasyon Yönetimi",
    importance: 2,
    explanation:
      "Doğru cevap: A)\nHangi sürümde hangi özellik var, hangi dosya hangi değişiklikle geldi, yayın nasıl çıktı gibi konuları düzenler.\nTaktik: Konfigürasyon = ‘sürüm disiplinidir’."
  },

  // =========================
  // ==== 6. HAFTA (8) ========
  // =========================
  {
    q: "Şelale (Waterfall) modelinin en ayırt edici özelliği hangisidir?",
    t: "mcq",
    o: [
      "Aşamalar sıralıdır; bir aşama tamamlanmadan diğeri başlamaz, geri dönüş maliyetlidir",
      "Sürekli küçük teslimler ve sprintlerle ilerler",
      "Her döngüde risk analizi merkezde yer alır",
      "Sadece prototip üretip sonra projeyi bitirir"
    ],
    a: 0,
    difficulty: 2,
    week: 6,
    topic: "Waterfall",
    importance: 3,
    explanation:
      "Doğru cevap: A)\nWaterfall, aşamaları sırayla yürütür. Gereksinimler çok değişmiyorsa uygundur; değişiyorsa zorlanır.\nTaktik: Waterfall = ‘sıra var, geri dönüş pahalı’."
  },
  {
    q: "Çevik (Agile) yaklaşımın temel ilerleme şekli hangisidir?",
    t: "mcq",
    o: [
      "Bütün ürünü tek seferde, en sonda teslim etmek",
      "Küçük parçalarda iteratif/inkremental ilerlemek ve sık geri bildirim almak",
      "Tüm testleri sadece proje sonunda yapmak",
      "Gereksinimleri hiç yazmadan doğrudan kodlamak"
    ],
    a: 1,
    difficulty: 2,
    week: 6,
    topic: "Agile",
    importance: 3,
    explanation:
      "Doğru cevap: B)\nAgile; küçük teslimler + hızlı geri bildirimle ilerler. Değişime daha dayanıklıdır.\nTaktik: Agile = ‘küçük teslim + sık geri bildirim’."
  },
  {
    q: "Scrum’da ‘Sprint’ en doğru nasıl tanımlanır?",
    t: "mcq",
    o: [
      "Belirsiz süreli ve planı olmayan çalışma dönemi",
      "Zaman kutulu (time-boxed) belirli süreli geliştirme döngüsü ve sonunda çalışır çıktı hedefi",
      "Sadece test ekibinin yaptığı dönem",
      "Sadece tasarım ekibinin çizim yaptığı dönem"
    ],
    a: 1,
    difficulty: 2,
    week: 6,
    topic: "Scrum",
    importance: 2,
    explanation:
      "Doğru cevap: B)\nSprint, belirli süreli (ör. 1-2 hafta) bir döngüdür; amaç sprint sonunda çalışan bir ürün artışı üretmektir.\nTaktik: Sprint = ‘kısa süre + somut çıktı’."
  },
  {
    q: "Kanban yaklaşımında WIP (Work In Progress) limiti neyi hedefler?",
    t: "mcq",
    o: [
      "Aynı anda çok iş açıp hızlanmayı",
      "Aynı anda yapılan işi sınırlayıp darboğazları azaltmayı ve akışı iyileştirmeyi",
      "Testleri tamamen kaldırmayı",
      "Gereksinimleri belgesiz yapmayı"
    ],
    a: 1,
    difficulty: 3,
    week: 6,
    topic: "Kanban",
    importance: 2,
    explanation:
      "Doğru cevap: B)\nWIP limit; çok işi aynı anda başlayıp hiçbirini bitirememe sorununu azaltır. Akış verimliliğini artırır.\nTaktik: Kanban’da hedef ‘başlamak’ değil ‘bitirmek’."
  },
  {
    q: "Spiral modelin merkezindeki kritik fikir hangisidir?",
    t: "mcq",
    o: [
      "Sadece sıralı adımlarla ilerlemek",
      "Her döngüde risk analizi yaparak ilerlemek ve kararları buna göre güncellemek",
      "Sadece hızlı prototip yapmak",
      "Testi en sona bırakmak"
    ],
    a: 1,
    difficulty: 3,
    week: 6,
    topic: "Spiral",
    importance: 2,
    explanation:
      "Doğru cevap: B)\nSpiral model döngüsel ilerler ve risk analizi her döngünün kritik parçasıdır.\nTaktik: Spiral = ‘döngü + risk kontrolü’."
  },
  {
    q: "RAD (Rapid Application Development) yaklaşımının temel hedefi hangisidir?",
    t: "mcq",
    o: [
      "Değişimi minimuma indirip sabit plana bağlı kalmak",
      "Hızlı prototipleme ve kullanıcı geri bildirimiyle hızlı geliştirme yapmak",
      "Sadece dokümantasyon üretmek",
      "Sadece performans testi yapmak"
    ],
    a: 1,
    difficulty: 2,
    week: 6,
    topic: "RAD",
    importance: 2,
    explanation:
      "Doğru cevap: B)\nRAD, hızlı prototip + hızlı geri bildirim ile ürünü çabuk olgunlaştırmayı hedefler.\nTaktik: RAD = ‘hızlı prototip, hızlı öğrenme’."
  },
  {
    q: "V-Model’in temel fikri hangisidir?",
    t: "mcq",
    o: [
      "Testi tamamen en sona bırakmak",
      "Her geliştirme aşamasına karşılık gelen bir test aşaması tasarlamak ve eşlemek",
      "Sadece sprintlerle ilerlemek",
      "Sadece risk analizine odaklanmak"
    ],
    a: 1,
    difficulty: 3,
    week: 6,
    topic: "V-Model",
    importance: 2,
    explanation:
      "Doğru cevap: B)\nV-Model’de geliştirme adımları test adımlarıyla eşleştirilir; test planı daha erken düşünülür.\nTaktik: V’nin bir tarafı geliştirme, diğer tarafı test."
  },
  {
    q: "Bileşen tabanlı geliştirme (Component-Based Development) neyi vurgular?",
    t: "mcq",
    o: [
      "Her şeyi sıfırdan yazmayı",
      "Yeniden kullanılabilir, önceden test edilmiş bileşenleri birleştirerek geliştirmeyi",
      "Sadece tek bir dil kullanmayı",
      "Sadece UI tasarımı yapmayı"
    ],
    a: 1,
    difficulty: 2,
    week: 6,
    topic: "Component-Based",
    importance: 2,
    explanation:
      "Doğru cevap: B)\nAmaç; tekrar eden işleri hazır bileşenlerle hızlandırmak ve kaliteyi yükseltmektir.\nTaktik: Bileşen = ‘hazır parça’; sistem = ‘parçaların uyumu’."
  }
];
