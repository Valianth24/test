// FINAL – Yazılım Mimarileri (1-6. Hafta) – 50 Soru (MCQ)
// ÖNEMLİ: a alanı 1-tabanlıdır: 1=A, 2=B, 3=C, 4=D
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]

window.questionBank = [

  // =========================
  // ===== 1. HAFTA (8) ======
  // =========================
  {
    q: "‘Yazılım’ kavramını en doğru şekilde hangisi açıklar?",
    t: "mcq",
    o: [
      "Bilgisayarın fiziksel parçaları ve bunların elektriksel yapısı",
      "Bir sistemi çalıştıran komutlar/talimatlar ve bunların oluşturduğu programlar bütünü",
      "Sadece kullanıcı arayüzü tasarımı (buton, renk, font)",
      "Sadece internet bağlantısı ve ağ ayarları"
    ],
    a: 2,
    difficulty: 1,
    week: 1,
    topic: "Yazılım Tanımı",
    importance: 3,
    explanation:
      "Doğru cevap: B\nYazılım, donanıma ‘ne yapacağını’ söyleyen komutlar ve bu komutların oluşturduğu programlar bütünüdür. Donanım tek başına iş yapamaz; işi yaptıran yazılımdır.\nTaktik: Donanım = beden, yazılım = komut veren zihin."
  },
  {
    q: "Sistem yazılımı ile uygulama yazılımı arasındaki temel fark hangisidir?",
    t: "mcq",
    o: [
      "Sistem yazılımı kullanıcı işlerini yapar; uygulama yazılımı donanımı yönetir",
      "Sistem yazılımı donanım/kaynakları yönetir ve ortam sağlar; uygulama yazılımı kullanıcı görevlerini gerçekleştirir",
      "Sistem yazılımı sadece internet içindir; uygulama yazılımı sadece oyun içindir",
      "İkisi aynı şeydir, sadece isimleri farklıdır"
    ],
    a: 2,
    difficulty: 1,
    week: 1,
    topic: "Sistem vs Uygulama",
    importance: 3,
    explanation:
      "Doğru cevap: B\nSistem yazılımı (işletim sistemi, sürücüler) kaynakları yönetir ve ortam sağlar. Uygulama yazılımı (tarayıcı, ofis, oyun) kullanıcı işini yapar.\nTaktik: Sistem = altyapı; uygulama = hizmet."
  },
  {
    q: "Bir yazılımın geliştirilmesinde en temel yaşam döngüsü akışı hangisine en yakındır?",
    t: "mcq",
    o: [
      "Test → Kodlama → Dağıtım → Tasarım",
      "Gereksinim/Tasarım → Kodlama → Test → Dağıtım/Canlıya Alma",
      "Kodlama → Tasarım → Test → Gereksinim",
      "Dağıtım → Tasarım → Kodlama → Test"
    ],
    a: 2,
    difficulty: 1,
    week: 1,
    topic: "SDLC Temel Akış",
    importance: 3,
    explanation:
      "Doğru cevap: B\nGenel omurga: ne istendiğini anla/tasarla, kodla, test et, sonra kullanıcıya sun.\nTaktik: Planla → Yap → Doğrula → Yayınla."
  },
  {
    q: "Algoritma nedir?",
    t: "mcq",
    o: [
      "Bir problemin çözümünü adım adım tanımlayan işlem sırası",
      "Sadece programlama dilinin sözdizimi kuralları",
      "Uygulamanın ekran çizimleri",
      "Bilgisayarın işlem gücünü ölçen değer"
    ],
    a: 1,
    difficulty: 1,
    week: 1,
    topic: "Algoritma",
    importance: 2,
    explanation:
      "Doğru cevap: A\nAlgoritma, bir işi çözmek için izlenen adımların mantıksal tarifidir. Kod, algoritmanın bir dille yazılmış halidir.\nTaktik: Algoritma = tarif; kod = tarifin yazıldığı dil."
  },
  {
    q: "Derleme (compile) ile yorumlama (interpret) arasındaki fark hangisidir?",
    t: "mcq",
    o: [
      "Derleme kodu çalışma anında satır satır çalıştırır; yorumlama önce makine diline çevirir",
      "Derleme kaynak kodu önce makine diline/ara koda çevirir; yorumlama kodu genellikle çalışma anında işler",
      "İkisi tamamen aynı süreçtir",
      "Derleme sadece mobilde, yorumlama sadece masaüstünde olur"
    ],
    a: 2,
    difficulty: 2,
    week: 1,
    topic: "Compile vs Interpret",
    importance: 3,
    explanation:
      "Doğru cevap: B\nCompile: önce çevir, sonra çalıştır. Interpret: çoğunlukla çalıştırırken yorumla. Bu fark performans ve hata yakalama biçimini etkileyebilir.\nTaktik: Compile = önce çevir; Interpret = çalıştırırken çevir."
  },
  {
    q: "Entegrasyon (integration) neyi ifade eder?",
    t: "mcq",
    o: [
      "Bir yazılımın görsel tasarımını hazırlamak",
      "Farklı bileşen/sistemlerin birlikte çalışacak şekilde birleştirilmesi ve veri alışverişinin sağlanması",
      "Sadece veritabanında tablo oluşturmak",
      "Kodu kısaltmak için yapılan optimizasyon"
    ],
    a: 2,
    difficulty: 2,
    week: 1,
    topic: "Entegrasyon",
    importance: 2,
    explanation:
      "Doğru cevap: B\nEntegrasyon, farklı parçaların (servis/modül/harici sistem) birbirine bağlanıp birlikte çalışmasıdır.\nTaktik: Entegrasyon = parçaları konuşturma."
  },
  {
    q: "Sürüm kontrol (version control) sistemlerinin (örn. Git) temel faydası hangisidir?",
    t: "mcq",
    o: [
      "Uygulamanın internet hızını artırmak",
      "Kod değişikliklerini tarihçeli takip etmek, geri almak ve ekip çalışmasını kolaylaştırmak",
      "Sadece arayüz tasarımını çizmek",
      "Veritabanındaki verileri otomatik silmek"
    ],
    a: 2,
    difficulty: 2,
    week: 1,
    topic: "Sürüm Kontrol",
    importance: 3,
    explanation:
      "Doğru cevap: B\nSürüm kontrol; değişiklik geçmişi, geri dönüş (rollback) ve ekip çalışmasını düzenler.\nTaktik: Git = geçmiş + geri alma + ekip uyumu."
  },
  {
    q: "‘Yazılım mimarisi’ en iyi hangi ifadeyle özetlenir?",
    t: "mcq",
    o: [
      "Kodun girinti ve yazım stili kuralları",
      "Sistemin bileşenleri, sorumlulukları ve aralarındaki ilişkilerin üst seviye tasarımı",
      "Sadece renk/font seçimi",
      "Sadece veritabanı tablo isimlendirmesi"
    ],
    a: 2,
    difficulty: 3,
    week: 1,
    topic: "Mimari Kavramı",
    importance: 3,
    explanation:
      "Doğru cevap: B\nMimari; büyük resimdir: hangi parçalar var, ne yaparlar, nasıl iletişim kurarlar.\nTaktik: Mimari = harita (büyük resim)."
  },

  // =========================
  // ===== 2. HAFTA (8) ======
  // =========================
  {
    q: "Komut (command) kavramı en doğru hangi açıklamaya uyar?",
    t: "mcq",
    o: [
      "Sadece grafikli arayüzde tıklanan buton adı",
      "İşletim sistemi veya bir yazılıma belirli bir işi yaptıran talimat",
      "Programlama dilinde değişken türü",
      "Veritabanında kayıtların saklandığı alan"
    ],
    a: 2,
    difficulty: 1,
    week: 2,
    topic: "Komut Kavramı",
    importance: 2,
    explanation:
      "Doğru cevap: B\nKomut, sisteme ‘şunu yap’ diyen talimattır (CLI komutları gibi).\nTaktik: Komut = tek satırlık iş emri."
  },
  {
    q: "Linux/Unix’te dizin içeriğini listelemek için kullanılan komut hangisidir?",
    t: "mcq",
    o: ["cd", "ls", "mkdir", "rm"],
    a: 2,
    difficulty: 1,
    week: 2,
    topic: "Linux Komutları",
    importance: 2,
    explanation:
      "Doğru cevap: B\nls içerik listeler. cd dizin değiştirir, mkdir klasör oluşturur, rm siler.\nTaktik: ls = list."
  },
  {
    q: "Linux/Unix’te dizin değiştirmek için kullanılan komut hangisidir?",
    t: "mcq",
    o: ["pwd", "cd", "rm", "touch"],
    a: 2,
    difficulty: 1,
    week: 2,
    topic: "Linux Komutları",
    importance: 2,
    explanation:
      "Doğru cevap: B\ncd (change directory) dizin değiştirir.\nTaktik: cd = change directory."
  },
  {
    q: "Windows CMD’de dizin içeriğini listelemek için kullanılan komut hangisidir?",
    t: "mcq",
    o: ["dir", "ls", "pwd", "cat"],
    a: 1,
    difficulty: 1,
    week: 2,
    topic: "Windows Komutları",
    importance: 2,
    explanation:
      "Doğru cevap: A\nWindows’ta dir içerik listeler.\nTaktik: dir = directory."
  },
  {
    q: "SQL’de veri eklemek için kullanılan temel komut hangisidir?",
    t: "mcq",
    o: ["SELECT", "UPDATE", "INSERT", "DELETE"],
    a: 3,
    difficulty: 1,
    week: 2,
    topic: "SQL CRUD",
    importance: 3,
    explanation:
      "Doğru cevap: C\nINSERT ekler, SELECT okur, UPDATE günceller, DELETE siler.\nTaktik: CRUD: Create=INSERT, Read=SELECT, Update=UPDATE, Delete=DELETE."
  },
  {
    q: "SQL’de veri çekmek (okumak) için kullanılan temel komut hangisidir?",
    t: "mcq",
    o: ["SELECT", "INSERT", "UPDATE", "DELETE"],
    a: 1,
    difficulty: 1,
    week: 2,
    topic: "SQL CRUD",
    importance: 3,
    explanation:
      "Doğru cevap: A\nSELECT veriyi okur/çeker.\nTaktik: SELECT = seç/çek."
  },
  {
    q: "Veri yapıları neden performans açısından kritiktir?",
    t: "mcq",
    o: [
      "Sadece arayüz tasarımını belirler",
      "Erişim/arama/ekleme/silme maliyetini ve bellek kullanımını doğrudan etkiler",
      "İnternet hızını artırır",
      "Programlama dilinin kurallarını değiştirir"
    ],
    a: 2,
    difficulty: 2,
    week: 2,
    topic: "Veri Yapıları",
    importance: 3,
    explanation:
      "Doğru cevap: B\nDoğru veri yapısı seçimi işlemleri hızlandırır ve kaynak kullanımını iyileştirir.\nTaktik: Yavaşlıkta önce ‘algoritma + veri yapısı’na bak."
  },
  {
    q: "DBMS (Veritabanı Yönetim Sistemi) ile veritabanı (database) arasındaki fark hangisidir?",
    t: "mcq",
    o: [
      "DBMS verinin kendisidir; veritabanı yönetim yazılımıdır",
      "DBMS veritabanını yönetmeye yarayan yazılımdır; veritabanı verinin saklandığı yapıdır",
      "İkisi aynı şeydir",
      "DBMS sadece dosya sistemi yönetir; veritabanı sadece UI’dır"
    ],
    a: 2,
    difficulty: 2,
    week: 2,
    topic: "DBMS Kavramı",
    importance: 2,
    explanation:
      "Doğru cevap: B\nDatabase = veri deposu/yapı; DBMS = o depoyu yöneten sistem (MySQL, PostgreSQL vb.).\nTaktik: DBMS = yönetici, database = depo."
  },

  // =========================
  // ===== 3. HAFTA (9) ======
  // =========================
  {
    q: "Gereksinim (requirement) en doğru neyi ifade eder?",
    t: "mcq",
    o: [
      "Sistemin nasıl kodlanacağını belirleyen sınıf isimleri",
      "Sistemin hangi ihtiyacı karşılayacağı ve ne yapması gerektiğinin tanımı",
      "Sadece veritabanı tablo listesi",
      "Sadece UI renk ve font listesi"
    ],
    a: 2,
    difficulty: 1,
    week: 3,
    topic: "Gereksinim",
    importance: 3,
    explanation:
      "Doğru cevap: B\nGereksinim ‘NE yapılacak?’ sorusunu cevaplar. ‘NASIL yapılacak?’ tasarım/kodlamadır.\nTaktik: Requirement=NE, Design=NASIL."
  },
  {
    q: "Gereksinim çıkarımı (elicitation) için kullanılan yöntemlerden biri hangisidir?",
    t: "mcq",
    o: [
      "Kullanıcı/paydaş mülakatı ve gözlem",
      "Kodun minify edilmesi",
      "Sunucu ölçekleme",
      "Veritabanı index ekleme"
    ],
    a: 1,
    difficulty: 2,
    week: 3,
    topic: "Elicitation",
    importance: 3,
    explanation:
      "Doğru cevap: A\nElicitation: ihtiyaç toplama. Mülakat/anket/gözlem/prototip geri bildirimi gibi yöntemlerle yapılır.\nTaktik: İhtiyaç tahmin edilmez, toplanır."
  },
  {
    q: "Gereksinim analizi aşamasında temel olarak ne yapılır?",
    t: "mcq",
    o: [
      "Gereksinimler kod haline getirilir",
      "Gereksinimler netleştirilir, çakışma/eksikler bulunur ve önceliklendirilir",
      "Sadece UI çizilir",
      "Sadece sunucu kurulur"
    ],
    a: 2,
    difficulty: 2,
    week: 3,
    topic: "Gereksinim Analizi",
    importance: 3,
    explanation:
      "Doğru cevap: B\nAnaliz: belirsizliği temizler ve öncelik sırası oluşturur.\nTaktik: Analiz = temizle + sırala."
  },
  {
    q: "Fonksiyonel ve fonksiyonel olmayan gereksinim farkı hangisidir?",
    t: "mcq",
    o: [
      "Fonksiyonel olmayan gereksinimler önemsizdir",
      "Fonksiyonel gereksinim sistemin ne yapacağını; fonksiyonel olmayan gereksinim kalite özelliklerini (performans, güvenlik vb.) tanımlar",
      "Fonksiyonel sadece UI’dır, fonksiyonel olmayan sadece veritabanıdır",
      "Fonksiyonel sadece performans, fonksiyonel olmayan sadece güvenliktir"
    ],
    a: 2,
    difficulty: 3,
    week: 3,
    topic: "Requirement Türleri",
    importance: 3,
    explanation:
      "Doğru cevap: B\nFonksiyonel: kayıt ol, sipariş ver. Non-functional: hızlı olsun, güvenli olsun, kullanılabilir olsun.\nTaktik: Fonksiyonel=NE, Non-functional=NE KADAR İYİ."
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
    a: 2,
    difficulty: 2,
    week: 3,
    topic: "SRS",
    importance: 3,
    explanation:
      "Doğru cevap: B\nSRS, geliştirme ve test ekipleri için ‘tek doğru kaynak’ gibidir.\nTaktik: SRS = ortak sözleşme."
  },
  {
    q: "Gereksinim doğrulama (validation) en iyi hangi soruyla özetlenir?",
    t: "mcq",
    o: [
      "Doğru ürünü mü yapıyoruz?",
      "Kodu doğru mu yazdık?",
      "Sunucu doğru mu seçildi?",
      "UI renkleri doğru mu?"
    ],
    a: 1,
    difficulty: 3,
    week: 3,
    topic: "Validation",
    importance: 2,
    explanation:
      "Doğru cevap: A\nValidation: ihtiyaca uygun mu? Paydaş/kullanıcı ile doğrulanır.\nTaktik: Validation = doğru ürün."
  },
  {
    q: "Gereksinim yönetimi neden gereklidir?",
    t: "mcq",
    o: [
      "Gereksinimler hiç değişmediği için",
      "Gereksinimler değişebildiği için değişikliklerin kayıt-altına alınması, etkisinin analiz edilmesi ve onaylanması gerektiği için",
      "Sadece test ekibini ilgilendirdiği için",
      "Sadece tasarım süresini uzatmak için"
    ],
    a: 2,
    difficulty: 2,
    week: 3,
    topic: "Gereksinim Yönetimi",
    importance: 3,
    explanation:
      "Doğru cevap: B\nDeğişiklik kontrol edilmezse kapsam taşar, süre/bütçe bozulur.\nTaktik: Değişiklik = kayıt + etki + onay."
  },
  {
    q: "Proje planlamada ‘kapsam (scope)’ ne demektir?",
    t: "mcq",
    o: [
      "Projede yapılacak işlerin sınırı: neler var/neler yok",
      "Takımın kişi sayısı",
      "Programlama dili seçimi",
      "Test araçlarının listesi"
    ],
    a: 1,
    difficulty: 2,
    week: 3,
    topic: "Planlama / Scope",
    importance: 3,
    explanation:
      "Doğru cevap: A\nScope net değilse proje sürekli genişler ve bitmesi zorlaşır.\nTaktik: Scope = sınır çizgisi."
  },
  {
    q: "Mimari tasarım ile detay tasarım arasındaki doğru fark hangisidir?",
    t: "mcq",
    o: [
      "Mimari tasarım sınıf fonksiyonlarını; detay tasarım bileşen ilişkilerini belirler",
      "Mimari tasarım büyük resmi (bileşenler/ilişkiler); detay tasarım sınıflar/algoritmalar gibi ayrıntıları belirler",
      "Detay tasarım sadece UI; mimari tasarım sadece renk seçer",
      "İkisi tamamen aynıdır"
    ],
    a: 2,
    difficulty: 3,
    week: 3,
    topic: "Mimari vs Detay",
    importance: 2,
    explanation:
      "Doğru cevap: B\nMimari = sistemin iskeleti; detay = kasları/organları (sınıf-fonksiyon-çıktı).\nTaktik: Mimari=harita, detay=sokak planı."
  },

  // =========================
  // ===== 4. HAFTA (9) ======
  // =========================
  {
    q: "Modüler geliştirme (modularity) neden tercih edilir?",
    t: "mcq",
    o: [
      "Her şeyi tek dosyada tutmayı kolaylaştırdığı için",
      "Bakım, test ve yeniden kullanım kolaylaştığı; değişikliklerin daha kontrollü yönetildiği için",
      "Veritabanını otomatik kurduğu için",
      "İnternet bağlantısını artırdığı için"
    ],
    a: 2,
    difficulty: 2,
    week: 4,
    topic: "Modülerlik",
    importance: 3,
    explanation:
      "Doğru cevap: B\nModülerlik sistemi parçalara böler; parçalar ayrı test edilir, bakım kolaylaşır.\nTaktik: Büyük işi parçala, yönet."
  },
  {
    q: "Code review (kod inceleme) en doğru hangi amaçla yapılır?",
    t: "mcq",
    o: [
      "Kodu daha uzun yazdırmak için",
      "Hata/kalite sorunlarını erken yakalamak ve ekip standardını korumak için",
      "Sadece tasarım kararlarını değiştirmek için",
      "Sadece sürüm numarasını artırmak için"
    ],
    a: 2,
    difficulty: 2,
    week: 4,
    topic: "Code Review",
    importance: 3,
    explanation:
      "Doğru cevap: B\nReview, hatayı üretime gitmeden yakalar ve kaliteyi yükseltir.\nTaktik: Erken yakala = ucuz düzelt."
  },
  {
    q: "Birim testi (unit test) en çok neyi test eder?",
    t: "mcq",
    o: [
      "Tüm sistemin uçtan uca akışını",
      "En küçük kod parçalarını (fonksiyon/sınıf) izole şekilde",
      "Gerçek kullanıcı senaryolarını tarayıcıda",
      "Sunucu ağ performansını"
    ],
    a: 2,
    difficulty: 2,
    week: 4,
    topic: "Unit Test",
    importance: 3,
    explanation:
      "Doğru cevap: B\nUnit test: küçük parçanın doğru çalışması.\nTaktik: Unit = en küçük parça."
  },
  {
    q: "Entegrasyon testi ile sistem testi arasındaki fark hangisidir?",
    t: "mcq",
    o: [
      "Entegrasyon testi bileşenlerin birlikte çalışmasını; sistem testi tüm sistemin gereksinimlere göre davranmasını test eder",
      "Entegrasyon testi sadece UI; sistem testi sadece veritabanını test eder",
      "Sistem testi tek fonksiyonu test eder",
      "İkisi aynı testtir"
    ],
    a: 1,
    difficulty: 3,
    week: 4,
    topic: "Test Seviyeleri",
    importance: 3,
    explanation:
      "Doğru cevap: A\nEntegrasyon: parçalar konuşuyor mu? Sistem testi: bütün sistem doğru mu?\nTaktik: Entegrasyon=parça-parça, sistem=bütün."
  },
  {
    q: "Test senaryosu (test case) tipik olarak hangi bilgileri içerir?",
    t: "mcq",
    o: [
      "Sadece yazılımcı adı ve tarih",
      "Adımlar, test verisi, beklenen sonuç ve gerçek sonuç",
      "Sadece ekran görüntüsü",
      "Sadece sürüm numarası"
    ],
    a: 2,
    difficulty: 2,
    week: 4,
    topic: "Test Case",
    importance: 2,
    explanation:
      "Doğru cevap: B\nTest case tekrar edilebilir olmalı: adım + veri + beklenen sonuç.\nTaktik: Test case = tekrar edilebilirlik."
  },
  {
    q: "Hata raporu (bug report) yazarken en kritik nokta hangisidir?",
    t: "mcq",
    o: [
      "Hatanın nasıl tekrar edileceğini (reproduce steps) açık yazmak",
      "Sadece ‘çalışmıyor’ demek",
      "Sadece kullanıcıyı suçlamak",
      "Hatanın olduğu sayfayı gizlemek"
    ],
    a: 1,
    difficulty: 2,
    week: 4,
    topic: "Bug Report",
    importance: 3,
    explanation:
      "Doğru cevap: A\nEn kritik şey: adım adım tekrar. Böylece geliştirici aynı hatayı görüp çözer.\nTaktik: Bug report = adımlar + beklenen/gerçek."
  },
  {
    q: "Dağıtım (deployment) neyi ifade eder?",
    t: "mcq",
    o: [
      "Kodun bilgisayardan silinmesini",
      "Yazılımın canlı ortama/ kullanıcıların erişebileceği ortama alınmasını",
      "Sadece testlerin yazılmasını",
      "Sadece tasarımın çizilmesini"
    ],
    a: 2,
    difficulty: 2,
    week: 4,
    topic: "Deployment",
    importance: 2,
    explanation:
      "Doğru cevap: B\nDeployment: uygulamayı kullanıcıların erişeceği ortama taşımak/yayınlamak.\nTaktik: Deployment = yayına alma."
  },
  {
    q: "Bakım (maintenance) aşamasında hangisi tipik bir faaliyettir?",
    t: "mcq",
    o: [
      "Canlıda hata düzeltmek ve ihtiyaçlara göre iyileştirmeler yapmak",
      "Sadece uygulama ikonunu değiştirmek",
      "Sadece kodu silmek",
      "Sadece proje adını değiştirmek"
    ],
    a: 1,
    difficulty: 2,
    week: 4,
    topic: "Maintenance",
    importance: 3,
    explanation:
      "Doğru cevap: A\nCanlıda hata düzeltme, uyarlama ve iyileştirme bakımın parçasıdır.\nTaktik: Canlıya çıktı = bakım başladı."
  },
  {
    q: "Yedekleme ve kurtarma (backup & recovery) neden önemlidir?",
    t: "mcq",
    o: [
      "Veri kaybını azaltmak ve felaket durumunda geri dönebilmek için",
      "Sadece arayüzü güzelleştirmek için",
      "Sadece test sayısını azaltmak için",
      "Sadece kodu kısaltmak için"
    ],
    a: 1,
    difficulty: 2,
    week: 4,
    topic: "Backup/Recovery",
    importance: 3,
    explanation:
      "Doğru cevap: A\nVeri kaybı ciddi zarar verir. Backup & recovery bu riske karşı güvenlik ağıdır.\nTaktik: Veri = en kritik varlık."
  },

  // =========================
  // ===== 5. HAFTA (8) ======
  // =========================
  {
    q: "Proje yönetiminin temel amacı hangisidir?",
    t: "mcq",
    o: [
      "Projeyi plansız yürütüp hızlı bitirmek",
      "Kapsam-zaman-bütçe-kalite dengesini yöneterek hedeflere uygun tamamlamak",
      "Sadece kod standardı belirlemek",
      "Sadece arayüz tasarlamak"
    ],
    a: 2,
    difficulty: 2,
    week: 5,
    topic: "Proje Yönetimi",
    importance: 3,
    explanation:
      "Doğru cevap: B\nProje yönetimi; kapsam, zaman, bütçe ve kaliteyi dengeleyip projeyi hedefte tutar.\nTaktik: Dörtlü kısıt: scope-time-cost-quality."
  },
  {
    q: "Planlama aşamasında tipik olarak hangisi yapılır?",
    t: "mcq",
    o: [
      "Takvim, bütçe, kaynak ve risk planlarının çıkarılması",
      "Sadece logo tasarımı",
      "Sadece testleri silme",
      "Sadece internet paketi seçme"
    ],
    a: 1,
    difficulty: 2,
    week: 5,
    topic: "Planlama",
    importance: 3,
    explanation:
      "Doğru cevap: A\nPlanlama ‘ne, ne zaman, kim, hangi kaynakla’ sorularını netleştirir.\nTaktik: Plan = zaman + kaynak + risk."
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
    a: 2,
    difficulty: 2,
    week: 5,
    topic: "İzleme & Kontrol",
    importance: 3,
    explanation:
      "Doğru cevap: B\nİzleme-kontrol, sapmayı erken yakalayıp proje raydan çıkmadan düzeltmeyi sağlar.\nTaktik: Erken sapma = ucuz çözüm."
  },
  {
    q: "Risk yönetiminde doğru yaklaşım hangisidir?",
    t: "mcq",
    o: [
      "Riskleri yok saymak",
      "Riskleri tanımlamak, olasılık/etki analiz etmek, önlem planlamak ve izlemek",
      "Riskleri sadece test ekibine bırakmak",
      "Riskleri sadece proje sonunda konuşmak"
    ],
    a: 2,
    difficulty: 2,
    week: 5,
    topic: "Risk Yönetimi",
    importance: 3,
    explanation:
      "Doğru cevap: B\nRisk yönetimi: olası sorunları önceden görüp hazırlık yapmaktır.\nTaktik: Risk = olasılık × etki."
  },
  {
    q: "Kalite kontrol (QC) ile kalite güvence (QA) arasındaki fark hangisidir?",
    t: "mcq",
    o: [
      "QC süreç odaklıdır, QA ürün odaklıdır",
      "QC ürün/çıktı üzerinde hatayı bulur; QA süreçleri iyileştirerek hatayı azaltır",
      "QC sadece toplantıdır, QA sadece kod yazmaktır",
      "İkisi tamamen aynıdır"
    ],
    a: 2,
    difficulty: 3,
    week: 5,
    topic: "QA vs QC",
    importance: 3,
    explanation:
      "Doğru cevap: B\nQC: ürün üzerinde kontrol (test/inceleme). QA: süreçle kaliteyi garanti etme (standart/denetim/iyileştirme).\nTaktik: QC=ürün, QA=süreç."
  },
  {
    q: "Değişiklik (change) yönetimi neden gereklidir?",
    t: "mcq",
    o: [
      "Değişiklikler her zaman projeyi hızlandırır",
      "Değişiklikler kapsam/süre/bütçeyi etkiler; kontrol edilmezse proje yönetilemez hale gelir",
      "Değişiklikler sadece renkleri etkiler",
      "Değişiklik yönetimi sadece küçük projelerde yapılır"
    ],
    a: 2,
    difficulty: 2,
    week: 5,
    topic: "Değişiklik Yönetimi",
    importance: 3,
    explanation:
      "Doğru cevap: B\nHer değişiklik yeni iş ve maliyet demektir; etkisi ölçülmeli ve onayla ilerlemeli.\nTaktik: Değişiklik = yeni iş + yeni maliyet."
  },
  {
    q: "İletişim planı (communication plan) neyi sağlar?",
    t: "mcq",
    o: [
      "Bilginin kimden kime, hangi sıklıkla ve hangi formatta gideceğini netleştirir",
      "Sadece sprint süresini belirler",
      "Sadece veritabanı şemasını çizer",
      "Sadece kod inceleme kurallarını yazar"
    ],
    a: 1,
    difficulty: 2,
    week: 5,
    topic: "İletişim Yönetimi",
    importance: 2,
    explanation:
      "Doğru cevap: A\nDoğru bilgi doğru kişiye zamanında giderse beklenti hizalanır.\nTaktik: İyi iletişim = hizalı beklenti."
  },
  {
    q: "Konfigürasyon yönetimi (configuration management) en çok hangi ihtiyacı karşılar?",
    t: "mcq",
    o: [
      "Sürüm/değişiklik/yayınların kontrol altında tutulmasını ve izlenebilirliği sağlar",
      "Sadece kullanıcı şifre politikasını belirler",
      "Sadece UI tasarım sistemini seçer",
      "Sadece ağ kablolamasını düzenler"
    ],
    a: 1,
    difficulty: 3,
    week: 5,
    topic: "Konfigürasyon Yönetimi",
    importance: 2,
    explanation:
      "Doğru cevap: A\nHangi sürümde ne var, hangi değişiklik nereden geldi, yayın nasıl çıktı gibi soruları düzenler.\nTaktik: Konfigürasyon = sürüm disiplini."
  },

  // =========================
  // ===== 6. HAFTA (8) ======
  // =========================
  {
    q: "Şelale (Waterfall) modelinin en ayırt edici özelliği hangisidir?",
    t: "mcq",
    o: [
      "Aşamalar sıralıdır; bir aşama tamamlanmadan diğeri başlamaz, geri dönüş maliyetlidir",
      "Sürekli küçük teslimler ve sprintlerle ilerler",
      "Her döngüde risk analizi merkezde yer alır",
      "Sadece prototip üretip ardından proje biter"
    ],
    a: 1,
    difficulty: 2,
    week: 6,
    topic: "Waterfall",
    importance: 3,
    explanation:
      "Doğru cevap: A\nWaterfall sıralı ilerler; gereksinimler çok değişmiyorsa daha uygundur.\nTaktik: Waterfall = sıra var, geri dönüş pahalı."
  },
  {
    q: "Çevik (Agile) yaklaşımın temel ilerleme şekli hangisidir?",
    t: "mcq",
    o: [
      "Bütün ürünü tek seferde en sonda teslim etmek",
      "Küçük parçalarda iteratif/inkremental ilerlemek ve sık geri bildirim almak",
      "Testleri tamamen kaldırmak",
      "Gereksinimleri hiç yazmadan direkt kodlamak"
    ],
    a: 2,
    difficulty: 2,
    week: 6,
    topic: "Agile",
    importance: 3,
    explanation:
      "Doğru cevap: B\nAgile; küçük teslim + hızlı geri bildirimle gelişir, değişime daha dayanıklıdır.\nTaktik: Agile = küçük teslim + sık geri bildirim."
  },
  {
    q: "Scrum’da ‘Sprint’ en doğru nasıl tanımlanır?",
    t: "mcq",
    o: [
      "Belirsiz süreli, plansız çalışma dönemi",
      "Zaman kutulu (time-boxed) belirli süreli geliştirme döngüsü ve sonunda çalışan çıktı hedefi",
      "Sadece test ekibinin çalıştığı dönem",
      "Sadece tasarım ekibinin çizim yaptığı dönem"
    ],
    a: 2,
    difficulty: 2,
    week: 6,
    topic: "Scrum",
    importance: 2,
    explanation:
      "Doğru cevap: B\nSprint kısa bir döngüdür; amaç sprint sonunda çalışan ürün artışı üretmektir.\nTaktik: Sprint = kısa süre + somut çıktı."
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
    a: 2,
    difficulty: 3,
    week: 6,
    topic: "Kanban",
    importance: 2,
    explanation:
      "Doğru cevap: B\nWIP limiti ‘başlamak’ yerine ‘bitirmeyi’ artırır; akışı güçlendirir.\nTaktik: Kanban’da hedef = bitirmek."
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
    a: 2,
    difficulty: 3,
    week: 6,
    topic: "Spiral",
    importance: 2,
    explanation:
      "Doğru cevap: B\nSpiral döngüsel ilerler ve her döngüde risk değerlendirmesi temel karardır.\nTaktik: Spiral = döngü + risk kontrolü."
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
    a: 2,
    difficulty: 2,
    week: 6,
    topic: "RAD",
    importance: 2,
    explanation:
      "Doğru cevap: B\nRAD: hızlı prototip + hızlı geri bildirimle ürünü çabuk olgunlaştırma yaklaşımıdır.\nTaktik: RAD = hızlı prototip, hızlı öğrenme."
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
    a: 2,
    difficulty: 3,
    week: 6,
    topic: "V-Model",
    importance: 2,
    explanation:
      "Doğru cevap: B\nV-Model’de geliştirme adımlarıyla test adımları eşleştirilir; test planı erkenden düşünülür.\nTaktik: V’nin bir tarafı geliştirme, diğer tarafı test."
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
    a: 2,
    difficulty: 2,
    week: 6,
    topic: "Component-Based",
    importance: 2,
    explanation:
      "Doğru cevap: B\nAmaç tekrar eden işleri hazır bileşenlerle hızlandırmak ve kaliteyi artırmaktır.\nTaktik: Bileşen = hazır parça, sistem = parçaların uyumu."
  },

  // =========================
  // ===== EK 8 SORU (50’yi tamamlamak için) =====
  // (Dağılım: 1-6 haftaların kavramlarına paralel, sınavda çok sorulan tarzda)
  // =========================
  {
    q: "Aşağıdakilerden hangisi ‘uygulama yazılımına’ örnektir?",
    t: "mcq",
    o: ["Aygıt sürücüsü (driver)", "İşletim sistemi çekirdeği", "Web tarayıcısı", "BIOS/UEFI yazılımı"],
    a: 3,
    difficulty: 1,
    week: 1,
    topic: "Uygulama Yazılımı",
    importance: 2,
    explanation:
      "Doğru cevap: C\nTarayıcı kullanıcıya hizmet veren uygulamadır. Driver/BIOS/çekirdek daha çok sistem katmanındadır.\nTaktik: Kullanıcı işi yapan = uygulama."
  },
  {
    q: "SQL’de ‘veri silme’ işlemi için kullanılan komut hangisidir?",
    t: "mcq",
    o: ["DELETE", "DROP", "REMOVE", "CLEAR"],
    a: 1,
    difficulty: 1,
    week: 2,
    topic: "SQL CRUD",
    importance: 2,
    explanation:
      "Doğru cevap: A\nDELETE satır/kayıt siler. DROP tablo gibi nesneyi tamamen kaldırabilir.\nTaktik: DELETE = kayıt sil; DROP = tabloyu bile kaldırabilir."
  },
  {
    q: "Prototip kullanmanın en büyük faydası hangisidir?",
    t: "mcq",
    o: [
      "Kodu tamamen gereksiz hale getirmesi",
      "Yanlış anlama varsa erken fark edilmesini ve tasarım kararlarının hızla doğrulanmasını sağlaması",
      "Testi tamamen ortadan kaldırması",
      "Gereksinim belgesini yazmayı engellemesi"
    ],
    a: 2,
    difficulty: 2,
    week: 3,
    topic: "Prototip",
    importance: 2,
    explanation:
      "Doğru cevap: B\nPrototip, kullanıcıya erken gösterip geri bildirim almayı sağlar; yanlış yön daha baştan düzeltilir.\nTaktik: Erken göster = erken düzelt."
  },
  {
    q: "Dokümantasyonun bakım (maintenance) maliyetine etkisi genelde nasıldır?",
    t: "mcq",
    o: [
      "Bakım maliyetini artırır çünkü daha çok dosya olur",
      "Bakım maliyetini düşürür çünkü yeni gelen kişi sistemi daha hızlı anlar",
      "Bakımla ilgisi yoktur",
      "Sadece test maliyetini artırır"
    ],
    a: 2,
    difficulty: 2,
    week: 4,
    topic: "Dokümantasyon",
    importance: 2,
    explanation:
      "Doğru cevap: B\nDokümantasyon bilgi kaybını azaltır; ekip değişse bile sistem sürdürülebilir olur.\nTaktik: Belge = proje hafızası."
  },
  {
    q: "Kalite planı oluşturmanın en doğru amacı hangisidir?",
    t: "mcq",
    o: [
      "Sadece ekip için motivasyon metni yazmak",
      "Kalite hedeflerini, standartları ve kalite faaliyetlerini önceden tanımlamak",
      "Sadece kod satır sayısını artırmak",
      "Sadece testleri azaltmak"
    ],
    a: 2,
    difficulty: 2,
    week: 5,
    topic: "Kalite Planı",
    importance: 3,
    explanation:
      "Doğru cevap: B\nKalite planı: hangi kalite seviyesine ulaşılacak, nasıl ölçülecek, hangi kontroller yapılacak gibi konuları belirler.\nTaktik: Plan = hedef + ölçüm + yöntem."
  },
  {
    q: "Şelale modelinin en zayıf kaldığı durum hangisine daha yakındır?",
    t: "mcq",
    o: [
      "Gereksinimlerin baştan net ve sabit olduğu projeler",
      "Gereksinimlerin süreç içinde sık değiştiği projeler",
      "Çok küçük ve basit projeler",
      "Yasal zorunlulukların güçlü olduğu projeler"
    ],
    a: 2,
    difficulty: 3,
    week: 6,
    topic: "Waterfall Uygunluk",
    importance: 2,
    explanation:
      "Doğru cevap: B\nWaterfall’da geri dönüş pahalıdır; gereksinim çok değişiyorsa çevik yaklaşımlar daha rahat eder.\nTaktik: Değişim çoksa → çevik düşün."
  },
  {
    q: "Agile yaklaşımda ‘geri bildirim’ neden bu kadar değerlidir?",
    t: "mcq",
    o: [
      "Çünkü dokümantasyonu tamamen kaldırır",
      "Çünkü ürünün doğru yöne evrilmesini sağlar ve hatalı varsayımları erken düzeltir",
      "Çünkü test ihtiyacını ortadan kaldırır",
      "Çünkü proje yönetimini gereksiz yapar"
    ],
    a: 2,
    difficulty: 2,
    week: 6,
    topic: "Agile Geri Bildirim",
    importance: 3,
    explanation:
      "Doğru cevap: B\nSık geri bildirim, yanlış özelliğe aylar harcamayı önler ve değeri artırır.\nTaktik: Geri bildirim = yön düzeltme."
  },
  {
    q: "Bir proje ‘kapsam taşması (scope creep)’ yaşadığında en olası sonuç hangisidir?",
    t: "mcq",
    o: [
      "Zaman ve bütçenin daha rahat yönetilmesi",
      "Zaman/bütçe sapması ve kalite riskinin artması",
      "Test ihtiyacının azalması",
      "Dokümantasyon ihtiyacının ortadan kalkması"
    ],
    a: 2,
    difficulty: 3,
    week: 5,
    topic: "Scope Creep",
    importance: 3,
    explanation:
      "Doğru cevap: B\nKapsam kontrolsüz büyürse süre uzar, bütçe artar, kalite düşebilir.\nTaktik: Kapsam = sınır; sınır yoksa proje uzar."
  }
];
