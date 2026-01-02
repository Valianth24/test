// FINAL – Yazılım Mimarileri (1-6. Hafta) – 50 Soru (MCQ)
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]

window.questionBank = [
  // =========================
  // ==== 1. HAFTA (8) ========
  // =========================
  {
    q: "‘Yazılım’ kavramını en doğru şekilde hangisi açıklar?",
    t: "mcq",
    o: [
      "Bilgisayarın fiziksel parçalarının (ekran, RAM, işlemci) tümü",
      "Dijital sistemlerin çalışmasını sağlayan komutlar, veriler ve talimatların oluşturduğu programlar bütünü",
      "Sadece internet sitelerinde kullanılan görseller ve tasarımlar",
      "Sadece oyunlar için yazılan kodlar"
    ],
    a: 1,
    difficulty: 1,
    week: 1,
    topic: "Yazılım Tanımı",
    importance: 3,
    explanation:
      "Yazılım; bilgisayar/akıllı cihaz gibi dijital sistemlere ‘ne yapacağını’ söyleyen komutlar ve talimatlardan oluşur. Donanım tek başına iş yapamaz; işi yaptıran şey yazılımdır. Örneğin bir bankacılık uygulaması da, bir işletim sistemi de yazılımdır.\nTaktik: Donanım = beden, yazılım = beyin gibi düşün."
  },
  {
    q: "Sistem yazılımı ile uygulama yazılımı arasındaki temel fark nedir?",
    t: "mcq",
    o: [
      "Sistem yazılımı sadece oyun çalıştırır, uygulama yazılımı sadece internete girer",
      "Sistem yazılımı donanımı ve kaynakları yönetir; uygulama yazılımı belirli kullanıcı görevlerini yapar",
      "Uygulama yazılımı donanım sürücülerini yönetir; sistem yazılımı metin düzenler",
      "İkisi aynı şeydir, sadece isimleri farklıdır"
    ],
    a: 1,
    difficulty: 1,
    week: 1,
    topic: "Sistem vs Uygulama Yazılımı",
    importance: 3,
    explanation:
      "Sistem yazılımı (ör. işletim sistemi, sürücüler) bilgisayarın kaynaklarını yönetir ve diğer yazılımların çalışmasını sağlar. Uygulama yazılımı ise kullanıcıya yönelik ‘iş’ yapar: tarayıcı, ofis programı, oyun, mesajlaşma gibi.\nTaktik: Sistem yazılımı = altyapı, uygulama yazılımı = üstüne kurulan hizmet."
  },
  {
    q: "‘Yazılım süreci’ denince en temel olarak hangi adımlar anlaşılmalıdır?",
    t: "mcq",
    o: [
      "Sadece kod yazma ve uygulamayı mağazaya koyma",
      "Tasarım, kodlama, test ve dağıtımı içeren geliştirme süreci",
      "Sadece kullanıcı arayüzü çizme",
      "Sadece veri tabanı kurma"
    ],
    a: 1,
    difficulty: 1,
    week: 1,
    topic: "Yazılım Süreci",
    importance: 3,
    explanation:
      "Yazılım geliştirme; önce nasıl çalışacağını planlamak/tasarlamak, sonra kodlamak, sonra test etmek ve en sonunda kullanıcıya dağıtmak gibi aşamalardan oluşur. Bu adımlar birlikte yönetilmezse proje “çalışıyor gibi” görünür ama sürdürülemez hale gelir.\nTaktik: T-K-T-D = Tasarla, Kodla, Test et, Dağıt."
  },
  {
    q: "Algoritma nedir?",
    t: "mcq",
    o: [
      "Bir bilgisayarın fiziksel işlem gücü",
      "Bir problemin çözümünü adım adım tanımlayan mantıksal sıralama",
      "Bir programlama dilinin derleyicisi",
      "Bir veritabanı türü"
    ],
    a: 1,
    difficulty: 1,
    week: 1,
    topic: "Algoritma",
    importance: 2,
    explanation:
      "Algoritma; bir işi ‘hangi sırayla ve nasıl’ yapacağını adım adım anlatan çözümdür. Kod, algoritmanın programlama diliyle yazılmış halidir. Örneğin ‘iki sayıyı topla’ işi bile bir algoritmadır: sayıları al, topla, sonucu yazdır.\nTaktik: Algoritma = yemek tarifi, kod = tarifi yazdığın dil."
  },
  {
    q: "Derleme (compile) ile yorumlama (interpret) arasındaki fark hangisidir?",
    t: "mcq",
    o: [
      "Derleme satır satır çalıştırır; yorumlama tamamen makine diline çevirir",
      "Derleme kaynak kodu makine diline çevirir; yorumlama kodu çalışma anında satır satır çalıştırır",
      "İkisi de aynı anlama gelir",
      "Derleme sadece web sitelerinde olur"
    ],
    a: 1,
    difficulty: 2,
    week: 1,
    topic: "Compile vs Interpret",
    importance: 3,
    explanation:
      "Derlemede (compile) kaynak kod önce makine diline çevrilir; sonra çalışır. Yorumlamada (interpret) kod genellikle çalışma anında satır satır yorumlanır. Bu fark, hata yakalama biçimini ve çalışma performansını etkileyebilir.\nTaktik: Compile = önce çevir sonra çalıştır; Interpret = çalıştırırken çevir."
  },
  {
    q: "Entegrasyon (integration) en doğru şekilde hangi durumu ifade eder?",
    t: "mcq",
    o: [
      "Bir yazılımın hiç test edilmeden yayınlanması",
      "Farklı yazılımlar/bileşenlerin birlikte çalışacak şekilde bir araya getirilmesi",
      "Sadece kullanıcı arayüzünün tasarlanması",
      "Veritabanındaki tüm tabloların silinmesi"
    ],
    a: 1,
    difficulty: 2,
    week: 1,
    topic: "Entegrasyon",
    importance: 2,
    explanation:
      "Entegrasyon; bir sistemin parçalarının veya farklı sistemlerin birbirine bağlanıp veri alışverişi yapmasıdır. Örneğin bir e-ticaret sitesinin ödeme sağlayıcısıyla API üzerinden konuşması bir entegrasyondur.\nTaktik: Entegrasyon = parçaları konuşturma."
  },
  {
    q: "CI/CD kavramı genel olarak neyi amaçlar?",
    t: "mcq",
    o: [
      "Sadece tasarım dokümanı yazmayı",
      "Sürekli entegrasyon ve sürekli dağıtım ile hızlı ve sık sürüm çıkarmayı",
      "Sadece veritabanını yedeklemeyi",
      "Sadece kullanıcı şifrelerini değiştirmeyi"
    ],
    a: 1,
    difficulty: 2,
    week: 1,
    topic: "CI/CD",
    importance: 2,
    explanation:
      "CI/CD; kodun sık sık birleştirilmesi (entegrasyon) ve güvenli/otomatik şekilde ortama taşınması (dağıtım) fikridir. Amaç, “büyük-büyük yayınlar” yerine daha küçük ama daha sık ve kontrollü sürümlerle ilerlemektir.\nTaktik: CI = birleştir, CD = dağıt."
  },
  {
    q: "Mikroservis mimarisi en iyi hangi cümleyle özetlenir?",
    t: "mcq",
    o: [
      "Uygulamanın tek bir dev program olarak yazılması",
      "Uygulamanın bağımsız hizmetlere bölünmesi ve her hizmetin ayrı bileşen olarak çalışması",
      "Sadece mobil uygulamalar için kullanılan bir yöntem",
      "Veritabanı normalizasyon tekniği"
    ],
    a: 1,
    difficulty: 3,
    week: 1,
    topic: "Mikroservis",
    importance: 2,
    explanation:
      "Mikroserviste sistem; ‘sipariş’, ‘ödeme’, ‘kargo’ gibi bağımsız servislerden oluşur. Her servis ayrı geliştirilebilir/dağıtılabilir. Bu, ölçeklemeyi ve ekiplerin paralel çalışmasını kolaylaştırır; ancak servisler arası iletişim ve yönetim daha dikkat ister.\nTaktik: Mikroservis = küçük bağımsız servisler, birlikte büyük sistem."
  },

  // =========================
  // ==== 2. HAFTA (8) ========
  // =========================
  {
    q: "Veri yapıları (data structures) neden önemlidir?",
    t: "mcq",
    o: [
      "Sadece ekran tasarımını güzelleştirmek için",
      "Veriye hızlı erişim, düzenleme, bellek yönetimi ve performans optimizasyonu sağladığı için",
      "Sadece internet hızını artırdığı için",
      "Sadece işletim sistemine özel olduğu için"
    ],
    a: 1,
    difficulty: 2,
    week: 2,
    topic: "Veri Yapıları",
    importance: 3,
    explanation:
      "Veri yapıları, veriyi nasıl sakladığını ve nasıl eriştiğini belirler. Doğru veri yapısı seçimi programı hızlandırır, bellek kullanımını iyileştirir ve problemi daha temiz çözer.\nTaktik: Veri yapısı seçimi = performansın temel anahtarı."
  },
  {
    q: "Aynı problemi çözen iki programdan biri çok yavaşsa, aşağıdakilerden hangisi en mantıklı ilk kontrol noktasıdır?",
    t: "mcq",
    o: [
      "Programın ikonunun rengi",
      "Kullanılan veri yapısı ve algoritmanın verimliliği",
      "Klavyenin marka modeli",
      "Bilgisayarın ekran çözünürlüğü"
    ],
    a: 1,
    difficulty: 2,
    week: 2,
    topic: "Performans Mantığı",
    importance: 2,
    explanation:
      "Performans çoğu zaman veri yapısı + algoritma seçiminden etkilenir. Örneğin büyük bir listede sürekli arama yapıyorsan, yanlış yapı seçimi (ör. düz liste yerine uygun indeks yapısı) programı gereksiz yavaşlatır.\nTaktik: Yavaşlıkta önce ‘algoritma + veri yapısı’ diye düşün."
  },
  {
    q: "‘Kuyruk (Queue)’ mantığına en uygun örnek hangisidir?",
    t: "mcq",
    o: [
      "Son giren ilk çıkar (LIFO) çalışan bir geri alma sistemi",
      "İlk giren ilk çıkar (FIFO) çalışan bir banka sırası",
      "Rastgele sırayla işlem yapan bir sistem",
      "Sadece tek eleman tutan yapı"
    ],
    a: 1,
    difficulty: 2,
    week: 2,
    topic: "FIFO/LIFO",
    importance: 2,
    explanation:
      "Queue (kuyruk) FIFO çalışır: İlk gelen ilk işlem görür. Banka sırası, yazıcı kuyruğu gibi örnekler FIFO’ya uygundur. Stack ise LIFO’dur (son gelen ilk çıkar).\nTaktik: FIFO = “First In First Out” = sıradaki mantık."
  },
  {
    q: "Ofis üretkenliği uygulamalarının temel amacı hangisidir?",
    t: "mcq",
    o: [
      "Sadece oyun oynamak",
      "Belge düzenleme, tablo, sunum ve e-posta gibi iş görevlerini desteklemek",
      "Sadece donanım sürücülerini yönetmek",
      "Sadece işletim sistemi kurmak"
    ],
    a: 1,
    difficulty: 1,
    week: 2,
    topic: "Uygulama Türleri",
    importance: 2,
    explanation:
      "Ofis uygulamaları iş dünyasının temel işlerini kolaylaştırır: Word benzeri belge, Excel benzeri tablo, PowerPoint benzeri sunum ve e-posta yönetimi gibi.\nTaktik: Ofis yazılımları = belge + tablo + sunum + iletişim."
  },
  {
    q: "Web tarayıcılarının (browser) temel görevi hangisidir?",
    t: "mcq",
    o: [
      "Bilgisayarın RAM’ini artırmak",
      "Web sayfalarını görüntülemek ve çevrimiçi işlemleri yapmak",
      "Sadece fotoğraf düzenlemek",
      "Sadece antivirüs taraması yapmak"
    ],
    a: 1,
    difficulty: 1,
    week: 2,
    topic: "Web Tarayıcıları",
    importance: 2,
    explanation:
      "Tarayıcı, web sayfalarını açan ve kullanıcı ile internet hizmetleri arasında köprü kuran uygulamadır. Örneğin bir e-devlet işlemi, alışveriş, form doldurma gibi işlemler tarayıcı üzerinden yapılır.\nTaktik: Tarayıcı = web’e giriş kapısı."
  },
  {
    q: "‘İşletim Sistemi’ en iyi hangi tanıma uyar?",
    t: "mcq",
    o: [
      "Sadece internete bağlanmayı sağlayan bir uygulama",
      "Donanımı yönetir, kaynakları tahsis eder ve uygulamaların çalışmasını sağlar",
      "Sadece metin yazma programıdır",
      "Sadece veritabanı türüdür"
    ],
    a: 1,
    difficulty: 1,
    week: 2,
    topic: "İşletim Sistemleri",
    importance: 3,
    explanation:
      "İşletim sistemi; işlemci, bellek, disk gibi kaynakları yönetir ve uygulamaların bu kaynakları kullanmasını sağlar. Windows/macOS/Linux tipik örneklerdir.\nTaktik: OS = kaynak yöneticisi + uygulama çalıştırıcı."
  },
  {
    q: "Yazılım Mühendisliği’nin temel amacı en doğru hangisidir?",
    t: "mcq",
    o: [
      "Sadece kod yazmayı öğrenmek",
      "Mühendislik prensipleri ve iyi uygulamalarla yazılım geliştirme süreçlerini yönetip projeyi başarıyla tamamlamak",
      "Sadece tasarım yapmak",
      "Sadece bilgisayar donanımı üretmek"
    ],
    a: 1,
    difficulty: 2,
    week: 2,
    topic: "Yazılım Mühendisliği",
    importance: 3,
    explanation:
      "Yazılım mühendisliği; tasarım, geliştirme, test, sürdürme ve yönetim süreçlerini disiplinli şekilde ele alır. Amaç ‘tesadüfen çalışan’ değil, planlı ve sürdürülebilir yazılım üretmektir.\nTaktik: Mühendislik = süreç + kalite + yönetim."
  },
  {
    q: "Bir yazılım mühendisinin tipik görevleri arasında hangisi yer alır?",
    t: "mcq",
    o: [
      "Sadece bilgisayar toplamak",
      "Gereksinim analizi, tasarım, kod geliştirme gibi süreçlerde aktif rol almak",
      "Sadece klavye sürücüsü güncellemek",
      "Sadece internet kablosu çekmek"
    ],
    a: 1,
    difficulty: 2,
    week: 2,
    topic: "Mühendis Görevleri",
    importance: 2,
    explanation:
      "Yazılım mühendisi sadece kod yazmaz; gereksinimi anlamadan kod yazmak, doğru ürünü üretmeyi zorlaştırır. Bu yüzden analiz, tasarım ve geliştirme gibi aşamalar birlikte ele alınır.\nTaktik: İyi yazılım = doğru gereksinim + doğru tasarım + doğru kod."
  },

  // =========================
  // ==== 3. HAFTA (9) ========
  // =========================
  {
    q: "Gereksinim toplamada (requirements gathering) aşağıdakilerden hangisi kullanılan bir yöntemdir?",
    t: "mcq",
    o: [
      "Ekran kartı overclock ayarı",
      "Mülakat/anket/gözlem gibi yöntemlerle kullanıcı ihtiyaçlarını toplama",
      "Sadece rastgele özellik ekleme",
      "Sadece log dosyası silme"
    ],
    a: 1,
    difficulty: 2,
    week: 3,
    topic: "Gereksinim Toplama",
    importance: 3,
    explanation:
      "Gereksinimler; kullanıcıyı dinleyerek, anket yaparak, sahada gözlemleyerek veya prototip gösterip geri bildirim alarak toplanabilir. Amaç, ‘ne yapılacağını’ netleştirmektir.\nTaktik: Gereksinim = tahmin değil, kullanıcıdan veri toplama."
  },
  {
    q: "Gereksinim analizi aşamasında temel olarak ne yapılır?",
    t: "mcq",
    o: [
      "Kod yazılır ve hemen yayınlanır",
      "Tutarsızlık/eksik/çakışma bulunur, gereksinimler önceliklendirilir",
      "Sadece ikonlar çizilir",
      "Sadece sunucu kurulur"
    ],
    a: 1,
    difficulty: 2,
    week: 3,
    topic: "Gereksinim Analizi",
    importance: 3,
    explanation:
      "Toplanan gereksinimler her zaman temiz değildir: çelişebilir, eksik olabilir. Analizde bunlar düzeltilir ve hangi gereksinimin daha önemli olduğu belirlenir. Böylece ekip neye önce odaklanacağını bilir.\nTaktik: Analiz = temizle + sırala (önceliklendir)."
  },
  {
    q: "Gereksinim belirtimi (requirements specification) belgesinin amacı nedir?",
    t: "mcq",
    o: [
      "Sadece kodun çalışmasını sağlamak",
      "Yazılımın işlevsellik, performans, arayüz ve diğer özelliklerini ayrıntılı belgelemek",
      "Sadece reklam metni yazmak",
      "Sadece bilgisayara sürücü yüklemek"
    ],
    a: 1,
    difficulty: 2,
    week: 3,
    topic: "Gereksinim Belirtimi",
    importance: 3,
    explanation:
      "Belirtim belgesi, ‘ürün tam olarak ne yapacak?’ sorusunun yazılı cevabıdır. Geliştirme ve test ekibi bu belgeyi referans alarak çalışır. Belge yoksa “kimin dediği doğru?” tartışması büyür.\nTaktik: Belirtim = proje için ortak sözleşme."
  },
  {
    q: "Gereksinim doğrulama (validation) aşamasında ne hedeflenir?",
    t: "mcq",
    o: [
      "Gereksinimleri müşteri/paydaş ile gözden geçirip doğru ve eksiksiz olduğunu onaylamak",
      "Sadece veritabanı yedeklemek",
      "Sadece kodu minify etmek",
      "Sadece sunucu kapatıp açmak"
    ],
    a: 0,
    difficulty: 2,
    week: 3,
    topic: "Gereksinim Doğrulama",
    importance: 3,
    explanation:
      "Doğrulama; yazılan gereksinimlerin müşteri ve paydaşlarca incelenip onaylanmasıdır. Burada amaç, yanlış anlama varsa erken yakalamaktır; çünkü geç yakalanırsa maliyet artar.\nTaktik: Doğrulama = ‘Doğru mu anladık?’ kontrolü."
  },
  {
    q: "Gereksinim yönetimi (requirements management) neden kritik kabul edilir?",
    t: "mcq",
    o: [
      "Çünkü gereksinimler proje boyunca değişebilir; değişiklikler belgelenmeli, izlenmeli ve onaylanmalıdır",
      "Çünkü gereksinimler hiç değişmez",
      "Çünkü sadece test ekibini ilgilendirir",
      "Çünkü sadece tasarım renklerini belirler"
    ],
    a: 0,
    difficulty: 3,
    week: 3,
    topic: "Gereksinim Yönetimi",
    importance: 3,
    explanation:
      "Projede yeni ihtiyaçlar çıkabilir. Eğer değişiklik kontrol edilmezse kapsam şişer, zaman/bütçe bozulur. Bu yüzden her değişiklik kayda alınır, etkisi değerlendirilir ve onaylanarak projeye eklenir.\nTaktik: Değişiklik = kayıt + etki analizi + onay."
  },
  {
    q: "‘İzleme ve güncelleme’ adımı gereksinim sürecinde neyi ifade eder?",
    t: "mcq",
    o: [
      "Proje ilerlerken gereksinimlerin hedeflerle uyumunu kontrol etmek ve değişiklikleri belgeye yansıtmak",
      "Sadece sunucu loglarını silmek",
      "Sadece yeni logo tasarlamak",
      "Sadece kablo değiştirmek"
    ],
    a: 0,
    difficulty: 2,
    week: 3,
    topic: "İzleme & Güncelleme",
    importance: 2,
    explanation:
      "Proje ilerledikçe gereksinimler güncel kalmalıdır. Aksi halde ekip eski belgeye göre çalışır, ürün yanlış yöne gider. İzleme, gereksinimlerin proje hedefleriyle uyumlu olduğundan emin olmayı sağlar.\nTaktik: Belge yaşayan bir şeydir; güncel tut."
  },
  {
    q: "Yazılım planlama sürecinin ana amacı hangisidir?",
    t: "mcq",
    o: [
      "Projenin hedefini, kapsamını, kaynaklarını ve takvimini belirlemek",
      "Sadece kod stilini seçmek",
      "Sadece test araçlarını kurmak",
      "Sadece kullanıcı şifrelerini sıfırlamak"
    ],
    a: 0,
    difficulty: 2,
    week: 3,
    topic: "Planlama",
    importance: 3,
    explanation:
      "Planlama; ‘ne yapıyoruz, ne kadar sürede, kimlerle, hangi kaynakla’ sorularını netleştirir. Planlama yoksa proje yönetilemez, sürprizler artar.\nTaktik: Plan = kapsam + zaman + kaynak."
  },
  {
    q: "Tasarım sürecinde ‘yazılım mimarisi tasarımı’ en çok neyi belirler?",
    t: "mcq",
    o: [
      "Uygulamanın bileşenlerini/modüllerini ve alt sistemlerini; aralarındaki bağlantıları",
      "Sadece font ve renkleri",
      "Sadece klavye kısayollarını",
      "Sadece internet hızını"
    ],
    a: 0,
    difficulty: 3,
    week: 3,
    topic: "Mimari Tasarım",
    importance: 3,
    explanation:
      "Mimari tasarım; sistemin büyük resmini çıkarır: modüller, veritabanı yaklaşımı, UI yapısı ve bileşenlerin nasıl konuşacağı. İyi mimari, geliştirmeyi hızlandırır ve değişiklik maliyetini düşürür.\nTaktik: Mimari = büyük resim + parçaların ilişkisi."
  },
  {
    q: "Prototip geliştirme tasarım aşamasında neden faydalı olabilir?",
    t: "mcq",
    o: [
      "Müşteriye/paydaşlara daha iyi anlayış sunar ve tasarım kararlarını doğrulamaya yardım eder",
      "Kod yazmayı tamamen gereksiz yapar",
      "Testi tamamen ortadan kaldırır",
      "Veritabanını otomatik normalleştirir"
    ],
    a: 0,
    difficulty: 2,
    week: 3,
    topic: "Prototip",
    importance: 2,
    explanation:
      "Prototip, ürünün küçük bir örneğidir. Kullanıcı prototipi görünce ‘evet bu’ veya ‘böyle değil’ diyebilir. Bu geri bildirim erken gelirse, yanlış tasarıma büyük emek harcanmaz.\nTaktik: Prototip = erken göster, erken düzelt."
  },

  // =========================
  // ==== 4. HAFTA (9) ========
  // =========================
  {
    q: "Kod geliştirme sırasında ‘test aşaması’ ile birlikte sık geçen ‘debugging’ ne demektir?",
    t: "mcq",
    o: [
      "Kodu süsleme işlemi",
      "Hataları bulma ve düzeltme süreci",
      "Sadece veritabanı tablo ekleme",
      "Sadece tasarım rengi değiştirme"
    ],
    a: 1,
    difficulty: 1,
    week: 4,
    topic: "Debugging",
    importance: 3,
    explanation:
      "Debugging (hata ayıklama), yazılımın yanlış davranmasının nedenini bulup düzeltmektir. Test hatayı ortaya çıkarır; debugging ise hatanın kaynağına inip çözmektir.\nTaktik: Test = hatayı buldurur, debug = hatayı çözer."
  },
  {
    q: "Performans optimizasyonunun temel amacı nedir?",
    t: "mcq",
    o: [
      "Kodun daha yavaş çalışmasını sağlamak",
      "Kodun daha hızlı çalışması veya daha az kaynak kullanması için iyileştirme yapmak",
      "Sadece ikonları küçültmek",
      "Sadece kullanıcı adını değiştirmek"
    ],
    a: 1,
    difficulty: 2,
    week: 4,
    topic: "Performans",
    importance: 2,
    explanation:
      "Performans optimizasyonu; CPU/RAM gibi kaynakları verimli kullanmak ve uygulamayı hızlandırmak için yapılır. Örneğin gereksiz döngüler azaltılır, ağır sorgular iyileştirilir.\nTaktik: Performans = aynı işi daha az maliyetle yapmak."
  },
  {
    q: "Kod güvenliği incelenmesi (security review) en doğru hangi amaçla yapılır?",
    t: "mcq",
    o: [
      "Kodun daha uzun görünmesi için",
      "Güvenlik açıklarını tespit edip düzeltmek için",
      "Sadece renk paletini seçmek için",
      "Sadece klavye düzenini değiştirmek için"
    ],
    a: 1,
    difficulty: 2,
    week: 4,
    topic: "Güvenlik",
    importance: 3,
    explanation:
      "Güvenlik incelemesi; kullanıcı verisini korumak ve sistemin saldırılara açık olmamasını sağlamak için yapılır. Örneğin input doğrulama eksikleri, yetki kontrolleri, zayıf şifreleme gibi konular burada ele alınır.\nTaktik: Güvenlikte soru: ‘Bu açık nasıl kötüye kullanılabilir?’"
  },
  {
    q: "Belgelemenin (documentation) en pratik faydası hangisidir?",
    t: "mcq",
    o: [
      "Sadece projeyi daha ağır yapmak",
      "Gelecekteki geliştiricilerin ve bakım ekibinin sistemi anlamasını ve sürdürmesini kolaylaştırmak",
      "Sadece testleri silmek",
      "Sadece veri tabanını kapatmak"
    ],
    a: 1,
    difficulty: 1,
    week: 4,
    topic: "Dokümantasyon",
    importance: 3,
    explanation:
      "Dokümantasyon; ‘bu sistem nasıl çalışıyor, nasıl kurulur, nasıl geliştirilir’ sorularını cevaplar. Ekip değişse bile proje devam eder. Belge yoksa bilgi kişilerin kafasında kalır ve kaybolur.\nTaktik: Belge = projeyi kişiden bağımsızlaştırır."
  },
  {
    q: "‘Dağıtım ve sürdürme’ aşamasında temel hedef nedir?",
    t: "mcq",
    o: [
      "Yazılımı canlı ortama çıkarıp kullanıcıların erişebileceği ve desteklenebileceği hale getirmek",
      "Sadece kodu silmek",
      "Sadece interneti kapatmak",
      "Sadece yeni logo eklemek"
    ],
    a: 0,
    difficulty: 2,
    week: 4,
    topic: "Dağıtım",
    importance: 2,
    explanation:
      "Dağıtım; yazılımın canlı ortama alınmasıdır. Sürdürme ise bu canlı ortamda yazılımın desteklenmesi, sorunların çözülmesi ve güncellemelerin yönetilmesidir.\nTaktik: Dağıtım = yayına al, sürdürme = yayında sağlam tut."
  },
  {
    q: "Yazılım test sürecinin temel amacı hangisidir?",
    t: "mcq",
    o: [
      "Yazılımın kalitesini/doğruluğunu değerlendirmek ve hataları tespit etmek",
      "Sadece tasarımı güzelleştirmek",
      "Sadece kullanıcı adını değiştirmek",
      "Sadece bilgisayarı hızlandırmak"
    ],
    a: 0,
    difficulty: 2,
    week: 4,
    topic: "Test Süreci",
    importance: 3,
    explanation:
      "Test süreci, yazılımın gereksinimleri karşıladığını ve güvenilir çalıştığını doğrular. Erken hata yakalamak maliyeti düşürür ve kullanıcı memnuniyetini artırır.\nTaktik: Test = kalite sigortası."
  },
  {
    q: "Test sürecinde ‘hata raporlama ve izleme’ neyi sağlar?",
    t: "mcq",
    o: [
      "Bulunan hataların belgelenmesini ve geliştirme ekibine düzenli geri bildirim verilmesini",
      "Hataları saklamayı",
      "Sadece internet hızını artırmayı",
      "Sadece logları yok etmeyi"
    ],
    a: 0,
    difficulty: 2,
    week: 4,
    topic: "Hata Yönetimi",
    importance: 3,
    explanation:
      "Hata raporu; hatanın ne olduğu, nasıl oluştuğu, beklenen/gerçek sonuç gibi bilgileri içerir. İzleme sayesinde hata ‘kaybolmaz’, çözüm süreci takip edilir.\nTaktik: Hata raporu = “nasıl tekrar ederim?” bilgisini yaz."
  },
  {
    q: "Test raporu (test report) hazırlanmasının en önemli katkısı nedir?",
    t: "mcq",
    o: [
      "Test sonuçlarını, bulunan hataları ve durumu görünür kılar; proje ilerlemesini takip etmeyi kolaylaştırır",
      "Sadece klasörleri çoğaltır",
      "Sadece bilgisayarı yavaşlatır",
      "Sadece renk paleti seçtirir"
    ],
    a: 0,
    difficulty: 2,
    week: 4,
    topic: "Test Raporu",
    importance: 2,
    explanation:
      "Test raporu; ne test edildi, hangi sonuçlar çıktı, kaç hata var gibi bilgileri toplar. Böylece yönetim ve ekip ‘hazır mıyız?’ sorusuna somut verilerle cevap verir.\nTaktik: Rapor = karar vermeyi kolaylaştırır."
  },
  {
    q: "İşletim ve bakım sürecinde ‘veri yedekleme ve kurtarma’ neden yapılır?",
    t: "mcq",
    o: [
      "Veri kaybını önlemek ve felaket durumlarında verileri geri getirebilmek için",
      "Sadece arayüzü güzelleştirmek için",
      "Sadece kodu daha uzun yapmak için",
      "Sadece yeni özellik eklemek için"
    ],
    a: 0,
    difficulty: 2,
    week: 4,
    topic: "Bakım: Backup/Recovery",
    importance: 3,
    explanation:
      "Canlı sistemlerde veri en kritik varlıktır. Hata, saldırı veya donanım arızasında veri kaybı ciddi sonuç doğurur. Yedekleme ve kurtarma bu riski azaltır.\nTaktik: Veri giderse sistem de gider; yedek = hayat kurtarır."
  },

  // =========================
  // ==== 5. HAFTA (8) ========
  // =========================
  {
    q: "Proje planlama aşamasında aşağıdakilerden hangisi tipik bir faaliyettir?",
    t: "mcq",
    o: [
      "Proje takvimi oluşturma, bütçe tahmini, risk analizi ve iletişim planı hazırlama",
      "Sadece logo tasarlama",
      "Sadece bilgisayar toplama",
      "Sadece internet paketi satın alma"
    ],
    a: 0,
    difficulty: 2,
    week: 5,
    topic: "Proje Planlama",
    importance: 3,
    explanation:
      "Proje planlama; zaman çizelgesi, bütçe, riskler, görev paketleri ve iletişim gibi başlıkları netleştirir. Bu çıktılar, projenin yönetilebilir olmasını sağlar.\nTaktik: Plan = zaman + bütçe + risk + görev + iletişim."
  },
  {
    q: "Kaynak tahsisi ve ekip oluşturma sürecinde temel olarak ne yapılır?",
    t: "mcq",
    o: [
      "Gerekli insan/donanım/yazılım kaynakları atanır; ekip rolleri ve sorumlulukları tanımlanır",
      "Sadece test raporu yazılır",
      "Sadece kod sıkıştırılır",
      "Sadece veritabanı tablo isimleri değiştirilir"
    ],
    a: 0,
    difficulty: 2,
    week: 5,
    topic: "Kaynak & Ekip",
    importance: 2,
    explanation:
      "Proje planı kağıtta kalmamalıdır. İşin yapılması için doğru yetkinlikte insanlar atanır, roller netleşir ve ekip uyumu desteklenir.\nTaktik: Rol net değilse sorumluluk dağılır."
  },
  {
    q: "İlerleme izleme ve kontrol (monitoring & controlling) sürecinin ana odağı nedir?",
    t: "mcq",
    o: [
      "Zaman çizelgesi ve bütçenin takip edilmesi; sapma varsa düzeltici eylem alınması",
      "Sadece ikon çizmek",
      "Sadece sunucuyu kapatmak",
      "Sadece e-posta yazmak"
    ],
    a: 0,
    difficulty: 2,
    week: 5,
    topic: "İzleme & Kontrol",
    importance: 3,
    explanation:
      "Proje ilerlerken her şey plana birebir uymayabilir. İzleme-kontrol, sapmayı erken yakalayıp önlem almayı sağlar. Böylece proje “geç fark edip büyük kriz yaşama” yerine “erken düzeltme” ile yürür.\nTaktik: Sapmayı erken gör = maliyeti düşür."
  },
  {
    q: "Proje yönetiminde ‘gereksinimler yönetimi’ neyi kapsar?",
    t: "mcq",
    o: [
      "Gereksinim değişikliklerini/eklemelerini izleme, belgeleme, değerlendirme ve onaylayarak projeye entegre etme",
      "Sadece tasarım rengini seçme",
      "Sadece testleri silme",
      "Sadece bilgisayar hızlandırma"
    ],
    a: 0,
    difficulty: 3,
    week: 5,
    topic: "Gereksinim Değişikliği",
    importance: 3,
    explanation:
      "Gereksinim değişince iş yükü, süre ve maliyet değişebilir. Bu yüzden değişiklikler kayıt altına alınır, etkisi değerlendirilir ve kontrollü şekilde projeye dahil edilir.\nTaktik: Değişiklik = kontrol edilmezse kapsam taşar."
  },
  {
    q: "Risk yönetiminde doğru yaklaşım hangisidir?",
    t: "mcq",
    o: [
      "Riskleri tanımlamak, analiz etmek, önlem planlamak ve süreç boyunca izleyip güncellemek",
      "Riskleri yok saymak",
      "Riskleri sadece final haftası düşünmek",
      "Riskleri sadece test ekibine bırakmak"
    ],
    a: 0,
    difficulty: 2,
    week: 5,
    topic: "Risk Yönetimi",
    importance: 3,
    explanation:
      "Risk yönetimi; kötü şeyler olduğunda ‘şaşırmamak’ için yapılır. Riskleri erken görürsen önlem alırsın; böylece proje daha öngörülebilir olur.\nTaktik: Risk = olasılık + etki; ikisini de düşün."
  },
  {
    q: "Kalite yönetimi proje yönetiminde neyi hedefler?",
    t: "mcq",
    o: [
      "Kalite planı oluşturmak, kalite standartlarını izlemek ve kalite kontrol faaliyetleri yürütmek",
      "Sadece yeni özellik eklemek",
      "Sadece veritabanını büyütmek",
      "Sadece sunucu maliyetini artırmak"
    ],
    a: 0,
    difficulty: 2,
    week: 5,
    topic: "Kalite Yönetimi",
    importance: 3,
    explanation:
      "Kalite yönetimi, ürünün belirlenen seviyede güvenilir/kullanılabilir/güvenli/perfomanslı olmasını hedefler. Kalite ‘sonradan eklenen’ değil, süreç içinde yönetilen bir konudur.\nTaktik: Kalite = süreç boyunca inşa edilir."
  },
  {
    q: "İletişim yönetimi proje başarısına nasıl katkı sağlar?",
    t: "mcq",
    o: [
      "Paydaşlarla düzenli iletişim, ilerleme raporları ve güncel iletişim planı ile bilgi akışını düzenler",
      "Sadece kodu kısaltır",
      "Sadece testleri azaltır",
      "Sadece UI renklerini değiştirir"
    ],
    a: 0,
    difficulty: 1,
    week: 5,
    topic: "İletişim Yönetimi",
    importance: 2,
    explanation:
      "Projede herkes aynı resmi görmezse yanlış beklentiler oluşur. İletişim yönetimi, doğru bilginin doğru kişiye zamanında gitmesini sağlar.\nTaktik: Sessizlik = yanlış varsayım üretir; iletişim = hizalar."
  },
  {
    q: "Yazılım kalite yönetimi sürecinde aşağıdakilerden hangisi yer alır?",
    t: "mcq",
    o: [
      "Dokümantasyon/standartlar, risk & değişiklik kontrolü, müşteri geri bildirimiyle sürekli iyileştirme, test & denetim",
      "Sadece masaüstü duvar kağıdı seçmek",
      "Sadece kablo düzenlemek",
      "Sadece bilgisayar formatlamak"
    ],
    a: 0,
    difficulty: 3,
    week: 5,
    topic: "Kalite Süreci Adımları",
    importance: 3,
    explanation:
      "Kalite yönetimi; standartlara uyum, değişikliklerin kontrolü, müşteri geri bildirimiyle iyileştirme ve denetim/testlerle seviyenin ölçülmesi gibi parçaları kapsar. Böylece kalite rastlantı değil, sistematik hale gelir.\nTaktik: Kalite = standart + kontrol + geri bildirim + ölçüm."
  },

  // =========================
  // ==== 6. HAFTA (8) ========
  // =========================
  {
    q: "Aşağıdakilerden hangisi yaygın yazılım geliştirme modelleri arasında yer alır?",
    t: "mcq",
    o: [
      "Şelale, Çevik, Spiral, RAD, V-Model, Bileşen Tabanlı Geliştirme",
      "Sadece ‘Tek Seferde Kodla’ modeli",
      "Sadece ‘Logo Tasarla’ modeli",
      "Sadece ‘Sunucu Satın Al’ modeli"
    ],
    a: 0,
    difficulty: 1,
    week: 6,
    topic: "Geliştirme Modelleri",
    importance: 3,
    explanation:
      "Geliştirme modelleri projenin nasıl ilerleyeceğini belirler. Şelale daha sıralı; çevik daha iteratif; spiral risk odaklı; RAD hızlı prototip; V-model test eşleşmeli; bileşen tabanlı ise yeniden kullanım odaklıdır.\nTaktik: Model seçimi = projenin doğasına göre yapılır."
  },
  {
    q: "Şelale (Waterfall) modelinin en ayırt edici özelliği hangisidir?",
    t: "mcq",
    o: [
      "Aşamalar sıralıdır; bir aşama bitmeden diğeri başlamaz ve geriye dönüş sınırlıdır",
      "Gereksinimler sürekli değişir ve her gün yeni sprint açılır",
      "Hiç dokümantasyon yapılmaz",
      "Test asla yapılmaz"
    ],
    a: 0,
    difficulty: 2,
    week: 6,
    topic: "Waterfall Özellikleri",
    importance: 3,
    explanation:
      "Şelale modelinde iş akışı basamak basamaktır. Gereksinimler başta netleşmiş kabul edilir. Sonradan değişiklik çıkarsa geriye dönmek maliyetli olur.\nTaktik: Şelale = sıra var, geri dönüş zor."
  },
  {
    q: "Şelale modelinde doğru aşama sırası hangisidir?",
    t: "mcq",
    o: [
      "Test → Kodlama → Tasarım → Gereksinim",
      "Gereksinim → Tasarım → Geliştirme → Test → Entegrasyon/Dağıtım → Bakım",
      "Bakım → Dağıtım → Gereksinim → Tasarım",
      "Tasarım → Bakım → Test → Gereksinim"
    ],
    a: 1,
    difficulty: 2,
    week: 6,
    topic: "Waterfall Aşamaları",
    importance: 3,
    explanation:
      "Şelale modelinde önce ne isteniyor belirlenir (gereksinim), sonra nasıl yapılacağı tasarlanır, sonra kodlanır, test edilir, bütünleştirilip dağıtılır ve kullanım sırasında bakım yapılır.\nTaktik: G-T-G-T-D-B diye kısa sırala."
  },
  {
    q: "Çevik (Agile) yaklaşımın temel ilerleme biçimi hangisidir?",
    t: "mcq",
    o: [
      "Tek seferde büyük ürün teslimi",
      "İteratif ve inkremental: küçük parçalarda ilerleme ve her iterasyonda çalışan ürün artışı",
      "Sadece dokümantasyon yazma",
      "Sadece veritabanı kurma"
    ],
    a: 1,
    difficulty: 2,
    week: 6,
    topic: "Agile Temeli",
    importance: 3,
    explanation:
      "Çevik yaklaşımda ürün küçük parçalara bölünür. Her sprint/iterasyon sonunda çalışır bir parça ortaya çıkar ve geri bildirimle sonraki adımlar şekillenir.\nTaktik: Agile = küçük teslim + hızlı geri bildirim."
  },
  {
    q: "Çevik geliştirmede ‘müşteri odaklılık’ ne anlama gelir?",
    t: "mcq",
    o: [
      "Müşteri projeye hiç karışmaz",
      "Müşteri geri bildirimi ve ihtiyaçları önceliklidir; müşteri süreç boyunca katılır",
      "Müşteri sadece finalde görür",
      "Müşteri sadece bütçe konuşur"
    ],
    a: 1,
    difficulty: 2,
    week: 6,
    topic: "Agile Müşteri Odaklılık",
    importance: 3,
    explanation:
      "Çevikte müşteri, sadece başta istek verip kaybolmaz; süreçte ürünü görür, geri bildirim verir. Bu sayede ürün gerçekten değer üreten yöne evrilir.\nTaktik: Müşteri = erken + sık geri bildirim."
  },
  {
    q: "Scrum ile Kanban arasındaki temel fark en doğru hangisidir?",
    t: "mcq",
    o: [
      "Scrum sprint ve rollerle ilerler; Kanban iş akışını görsel takip edip akışı yönetir",
      "Kanban sprint zorunludur; Scrum’da hiç sprint yoktur",
      "Scrum sadece donanım içindir; Kanban sadece oyun içindir",
      "İkisi tamamen aynıdır"
    ],
    a: 0,
    difficulty: 3,
    week: 6,
    topic: "Scrum vs Kanban",
    importance: 2,
    explanation:
      "Scrum genellikle time-boxed sprintlerle ve belirli rollerle ilerler. Kanban ise iş akışını (board) görünür kılar, darboğazları yönetir ve akışı optimize eder.\nTaktik: Scrum = sprint; Kanban = akış."
  },
  {
    q: "Spiral modelin en kritik ayırt edici noktası hangisidir?",
    t: "mcq",
    o: [
      "Her döngü sonunda risk analizi yapıp devam/ değişiklik kararları vermesi",
      "Gereksinimlerin hiç değişmemesi",
      "Testin tamamen kaldırılması",
      "Sadece tek teslim yapılması"
    ],
    a: 0,
    difficulty: 3,
    week: 6,
    topic: "Spiral Model",
    importance: 2,
    explanation:
      "Spiral model döngüler halinde ilerler; her döngüde analiz-tasarım-geliştirme-test yapılır ve risk değerlendirilir. Risk yüksekse yön değiştirme veya durdurma kararı daha erken alınabilir.\nTaktik: Spiral = döngü + risk kontrolü."
  },
  {
    q: "V-Model’de temel fikir hangisidir?",
    t: "mcq",
    o: [
      "Her geliştirme aşamasının karşılığında bir test aşaması bulunması (eşleşme)",
      "Testin tamamen en sona bırakılması",
      "Sadece prototipleme yapılması",
      "Sadece bakım yapılması"
    ],
    a: 0,
    difficulty: 3,
    week: 6,
    topic: "V-Model",
    importance: 2,
    explanation:
      "V-Model, geliştirme adımlarını test adımlarıyla eşleştirir. Böylece doğrulama/validasyon mantığı daha sistematik hale gelir ve test planı daha erken düşünülür.\nTaktik: V harfi = sol taraf geliştirme, sağ taraf test eşleşmesi."
  }
];
