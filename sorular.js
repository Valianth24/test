// Mobil Programlama – Vize Tarzı Kısa Bilgi Testi 2 (MCQ)
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]
// Not: a = doğru şık index’i (0=A, 1=B, 2=C, 3=D, 4=E)

window.questionBank = [
  // =========================================================
  // ==== 1. HAFTA – Mobil Giriş, Ağlar, Donanım, Sensörler (12)
  // =========================================================

  {
    q: "Mobil bilişim hangi temel fikre dayanır?",
    t: "mcq",
    o: [
      "Zamandan ve mekândan bağımsız erişim",
      "Sadece masaüstü kullanımı",
      "Kablolu ağ zorunluluğu",
      "Tek kullanıcı desteği",
      "Sunucusuz çalışma"
    ],
    a: 0,
    difficulty: "easy",
    week: 1,
    topic: "Mobil Bilişim",
    importance: 5,
    explanation: "Mobil bilişim, kullanıcının hareket hâlindeyken de bilgiye ve servislere erişebilmesini sağlar."
  },
  {
    q: "0G sistemler en çok neyle ilişkilidir?",
    t: "mcq",
    o: [
      "5G internet",
      "Radyo tabanlı araç telefonları",
      "Mobil uygulama mağazaları",
      "HD video akışı",
      "Bulut oyun"
    ],
    a: 1,
    difficulty: "easy",
    week: 1,
    topic: "Mobil Ağ Tarihi",
    importance: 3,
    explanation: "0G dönemi radyo tabanlı, genellikle araç içi ve operatör destekli mobil iletişim sistemlerini ifade eder."
  },
  {
    q: "1G ağlarda veri iletimi nasıldı?",
    t: "mcq",
    o: [
      "Tamamen dijitaldi",
      "Yalnızca Wi-Fi kullanırdı",
      "Analogdu",
      "Fiber tabanlıydı",
      "Bulut tabanlıydı"
    ],
    a: 2,
    difficulty: "easy",
    week: 1,
    topic: "Mobil Ağ Nesilleri",
    importance: 4,
    explanation: "1G sistemler analog ses iletimiyle çalışır."
  },
  {
    q: "4G en çok hangi kullanımları güçlendirmiştir?",
    t: "mcq",
    o: [
      "Sadece analog aramayı",
      "Manuel operatörlü çağrıyı",
      "Faks göndermeyi",
      "HD video ve gerçek zamanlı servisleri",
      "Sadece SMS göndermeyi"
    ],
    a: 3,
    difficulty: "easy",
    week: 1,
    topic: "Mobil Ağ Nesilleri",
    importance: 4,
    explanation: "4G/LTE; yüksek hızlı internet, HD video, bulut servisleri ve gerçek zamanlı uygulamaları yaygınlaştırmıştır."
  },
  {
    q: "Motorola DynaTAC 8000X neyin örneğidir?",
    t: "mcq",
    o: [
      "İlk Android cihaz",
      "İlk iOS cihaz",
      "İlk tablet bilgisayar",
      "İlk Windows Phone cihazı",
      "Erken dönem cep telefonu"
    ],
    a: 4,
    difficulty: "medium",
    week: 1,
    topic: "Mobil Cihaz Tarihi",
    importance: 3,
    explanation: "Motorola DynaTAC 8000X erken dönem taşınabilir cep telefonu örneklerinden biridir."
  },
  {
    q: "2007 yılında mobil dünyada hangi olay öne çıkar?",
    t: "mcq",
    o: [
      "iPhone'un duyurulması",
      "Android'in Google tarafından satın alınması",
      "Windows Phone 8'in çıkması",
      "IBM Simon'ın tanıtılması",
      "5G'nin yaygınlaşması"
    ],
    a: 0,
    difficulty: "easy",
    week: 1,
    topic: "Akıllı Telefon Tarihi",
    importance: 5,
    explanation: "2007'de iPhone'un duyurulması modern dokunmatik akıllı telefon döneminin önemli kırılma noktasıdır."
  },
  {
    q: "T-Mobile G1 hangi platformun ilk ticari cihazıdır?",
    t: "mcq",
    o: [
      "iOS",
      "Android",
      "Windows Phone",
      "BlackBerry OS",
      "Palm OS"
    ],
    a: 1,
    difficulty: "easy",
    week: 1,
    topic: "Android Tarihi",
    importance: 5,
    explanation: "T-Mobile G1, 2008'de çıkan ilk ticari Android cihazdır."
  },
  {
    q: "Barometre hangi değeri ölçer?",
    t: "mcq",
    o: [
      "Manyetik alan",
      "Dönüş hızı",
      "Hava basıncı",
      "Yakınlık",
      "Ekran rengi"
    ],
    a: 2,
    difficulty: "easy",
    week: 1,
    topic: "Sensörler",
    importance: 4,
    explanation: "Barometre hava basıncını ölçer; yükseklik tahmini ve hava durumu gibi alanlarda kullanılabilir."
  },
  {
    q: "Manyetometre hangi işlevle ilişkilidir?",
    t: "mcq",
    o: [
      "Batarya şarjı",
      "Kamera çözünürlüğü",
      "Ekran parlaklığı",
      "Pusula yönü",
      "Dosya sıkıştırma"
    ],
    a: 3,
    difficulty: "easy",
    week: 1,
    topic: "Sensörler",
    importance: 4,
    explanation: "Manyetometre dünyanın manyetik alanını algılar ve pusula işlevinde kullanılır."
  },
  {
    q: "Işık sensörü ne için kullanılır?",
    t: "mcq",
    o: [
      "Konum bulmak",
      "Titreşim ölçmek",
      "Ağ paketi izlemek",
      "Ses kaydetmek",
      "Otomatik parlaklık ayarı"
    ],
    a: 4,
    difficulty: "easy",
    week: 1,
    topic: "Sensörler",
    importance: 4,
    explanation: "Işık sensörü ortam ışığını ölçerek ekran parlaklığının otomatik ayarlanmasına yardımcı olur."
  },
  {
    q: "Listener/Observer yapısı sensörlerde neden kullanılır?",
    t: "mcq",
    o: [
      "Değişiklik olduğunda uygulamayı haberdar etmek için",
      "Telefonu kapatmak için",
      "Ekranı fiziksel olarak büyütmek için",
      "APK dosyasını imzalamak için",
      "Veritabanı tablosu silmek için"
    ],
    a: 0,
    difficulty: "medium",
    week: 1,
    topic: "Sensör Programlama",
    importance: 5,
    explanation: "Sensör verileri olay tabanlı izlenir; veri değiştiğinde uygulama bilgilendirilir."
  },
  {
    q: "Mobilde pil yönetimi neden kritiktir?",
    t: "mcq",
    o: [
      "Masaüstü uygulamaları hızlandırdığı için",
      "Cihaz sınırlı güç kaynağıyla çalıştığı için",
      "Tüm uygulamalar kablolu olduğu için",
      "Ekran her zaman kapalı olduğu için",
      "Sensör kullanılmadığı için"
    ],
    a: 1,
    difficulty: "easy",
    week: 1,
    topic: "Mobil Donanım",
    importance: 5,
    explanation: "Mobil cihazlar batarya ile çalıştığı için uygulamanın enerji tüketimi doğrudan kullanıcı deneyimini etkiler."
  },

  // =========================================================
  // ==== 2. HAFTA – Mobil İşletim Sistemleri (13)
  // =========================================================

  {
    q: "Symbian hangi dönemde öne çıkmıştır?",
    t: "mcq",
    o: [
      "2020 sonrası",
      "5G dönemi",
      "2000'lerin başı",
      "Windows 11 dönemi",
      "Sadece 1980'ler"
    ],
    a: 2,
    difficulty: "medium",
    week: 2,
    topic: "Mobil OS Tarihi",
    importance: 3,
    explanation: "Symbian, 2000'lerin başında önemli pazar payına sahip erken akıllı telefon işletim sistemlerinden biridir."
  },
  {
    q: "Android'in temel stratejisi neydi?",
    t: "mcq",
    o: [
      "Sadece Apple cihazlarında çalışmak",
      "Kapalı donanım üretmek",
      "Windows CE'yi sürdürmek",
      "Açık ve esnek platform sunmak",
      "Uygulama geliştirmeyi yasaklamak"
    ],
    a: 3,
    difficulty: "easy",
    week: 2,
    topic: "Android Ekosistemi",
    importance: 5,
    explanation: "Google'ın Android stratejisi açık kaynaklı, esnek ve farklı üreticilere uyarlanabilir bir platform sunmaktı."
  },
  {
    q: "iOS'in güçlü tarafı hangisidir?",
    t: "mcq",
    o: [
      "Sınırsız üretici özelleştirmesi",
      "Tamamen açık kaynak olması",
      "Windows NT kullanması",
      "Sadece düşük seviye cihazlara yönelik olması",
      "Donanım-yazılım entegrasyonu"
    ],
    a: 4,
    difficulty: "easy",
    week: 2,
    topic: "iOS Ekosistemi",
    importance: 5,
    explanation: "iOS, Apple'ın donanım ve yazılımı birlikte kontrol etmesi sayesinde yüksek entegrasyon sağlar."
  },
  {
    q: "Windows Phone 7 hangi yılda piyasaya sürülmüştür?",
    t: "mcq",
    o: [
      "2010",
      "2003",
      "2005",
      "2008",
      "2025"
    ],
    a: 0,
    difficulty: "medium",
    week: 2,
    topic: "Windows Phone",
    importance: 3,
    explanation: "Windows Phone 7, 2010 yılında Android ve iOS'e modern rakip olarak piyasaya sürülmüştür."
  },
  {
    q: "Live Tiles hangi platformla ilişkilidir?",
    t: "mcq",
    o: [
      "Android",
      "Windows Phone",
      "iOS",
      "Symbian",
      "Palm OS"
    ],
    a: 1,
    difficulty: "easy",
    week: 2,
    topic: "Windows Phone",
    importance: 4,
    explanation: "Canlı kutucuklar yani Live Tiles, Windows Phone'un Metro tasarım diliyle öne çıkan özelliğidir."
  },
  {
    q: "Android'in en alt mimari katmanı hangisidir?",
    t: "mcq",
    o: [
      "Application Framework",
      "System Apps",
      "Linux Kernel",
      "UIKit",
      "SwiftUI"
    ],
    a: 2,
    difficulty: "medium",
    week: 2,
    topic: "Android Mimarisi",
    importance: 5,
    explanation: "Android'in en alt katmanı Linux çekirdeğidir; bellek, süreç, güvenlik ve sürücülerden sorumludur."
  },
  {
    q: "Android'de yüksek performanslı yerel işler için hangi kütüphaneler kullanılır?",
    t: "mcq",
    o: [
      "Sadece JavaScript",
      "Sadece CSS",
      "Sadece XML",
      "Native C/C++ Libraries",
      "App Store Kit"
    ],
    a: 3,
    difficulty: "medium",
    week: 2,
    topic: "Android Mimarisi",
    importance: 4,
    explanation: "Grafik, medya, SQLite gibi yüksek performans gerektiren işlerde Native C/C++ kütüphaneleri kullanılır."
  },
  {
    q: "iOS çekirdeği hangi yapı üzerine kuruludur?",
    t: "mcq",
    o: [
      "Linux",
      "Windows NT",
      "Dalvik",
      "CLR",
      "XNU"
    ],
    a: 4,
    difficulty: "hard",
    week: 2,
    topic: "iOS Mimarisi",
    importance: 4,
    explanation: "iOS, Darwin tabanlı XNU çekirdeği üzerine kuruludur."
  },
  {
    q: "Cocoa Touch katmanı neyi içerir?",
    t: "mcq",
    o: [
      "UIKit ve SwiftUI gibi UI framework'lerini",
      "Android HAL sürücülerini",
      "Windows NT dosya sistemini",
      "ADB komutlarını",
      "Gradle bağımlılıklarını"
    ],
    a: 0,
    difficulty: "medium",
    week: 2,
    topic: "iOS Katmanları",
    importance: 4,
    explanation: "Cocoa Touch, iOS'ta kullanıcı etkileşimi ve UI framework'leriyle ilişkili katmandır."
  },
  {
    q: "WinRT'nin amacı nedir?",
    t: "mcq",
    o: [
      "Android uygulaması derlemek",
      "Windows cihazları arasında kod paylaşımını kolaylaştırmak",
      "iOS sertifikası üretmek",
      "Linux çekirdeğini değiştirmek",
      "APK imzalamak"
    ],
    a: 1,
    difficulty: "medium",
    week: 2,
    topic: "Windows Mimarisi",
    importance: 3,
    explanation: "WinRT, Windows telefon, tablet ve PC arasında ortak API/kod paylaşımı hedefiyle kullanılmıştır."
  },
  {
    q: "Android'de yürütme ortamı hangisidir?",
    t: "mcq",
    o: [
      "CLR",
      "XNU",
      "ART",
      "UIKit",
      "WinUI"
    ],
    a: 2,
    difficulty: "easy",
    week: 2,
    topic: "Android Runtime",
    importance: 5,
    explanation: "ART, Android uygulamalarının çalıştırıldığı Android Runtime ortamıdır."
  },
  {
    q: "iOS'ta uygulamalar genellikle nasıl çalışır?",
    t: "mcq",
    o: [
      "Dalvik VM üzerinde",
      "CLR üzerinde",
      "Sadece tarayıcıda",
      "Native makine kodu olarak",
      "Sadece Java bytecode olarak"
    ],
    a: 3,
    difficulty: "medium",
    week: 2,
    topic: "iOS Çalışma Modeli",
    importance: 4,
    explanation: "iOS uygulamaları genel olarak native makine kodu olarak çalışır."
  },
  {
    q: "ATT hangi platformla ilişkilidir?",
    t: "mcq",
    o: [
      "Windows Phone",
      "Android 2.2",
      "Symbian",
      "BlackBerry OS",
      "iOS"
    ],
    a: 4,
    difficulty: "hard",
    week: 2,
    topic: "Gizlilik",
    importance: 3,
    explanation: "ATT, Apple'ın App Tracking Transparency özelliğidir ve kullanıcı izleme izinlerini yönetir."
  },

  // =========================================================
  // ==== 3. HAFTA – SDK, IDE, Android Araçları (13)
  // =========================================================

  {
    q: "SDK'nın temel amacı nedir?",
    t: "mcq",
    o: [
      "Geliştirme için gerekli araçları tek pakette sunmak",
      "Sadece ekran parlaklığı ayarlamak",
      "Telefon kamerası üretmek",
      "Kullanıcı puanı yükseltmek",
      "SIM kart yönetmek"
    ],
    a: 0,
    difficulty: "easy",
    week: 3,
    topic: "SDK",
    importance: 5,
    explanation: "SDK; kütüphane, API, dokümantasyon, derleme ve test araçlarını geliştiriciye sunar."
  },
  {
    q: "API en kısa tanımıyla nedir?",
    t: "mcq",
    o: [
      "Uygulama mağazası",
      "Yazılımlar arası iletişim arayüzü",
      "Ekran sensörü",
      "Telefon kasası",
      "Batarya sürücüsü"
    ],
    a: 1,
    difficulty: "easy",
    week: 3,
    topic: "API",
    importance: 5,
    explanation: "API, yazılım bileşenlerinin birbiriyle nasıl iletişim kuracağını tanımlayan arayüzdür."
  },
  {
    q: "IDE'nin görevi nedir?",
    t: "mcq",
    o: [
      "Sadece ağ bağlantısı kurmak",
      "Telefonu şarj etmek",
      "Kodlama, derleme ve hata ayıklamayı tek ortamda toplamak",
      "Kamera çözünürlüğünü artırmak",
      "Uygulama fiyatı belirlemek"
    ],
    a: 2,
    difficulty: "easy",
    week: 3,
    topic: "IDE",
    importance: 5,
    explanation: "IDE; kod editörü, derleyici, hata ayıklayıcı ve proje araçlarını tek arayüzde sunar."
  },
  {
    q: "Android Studio nedir?",
    t: "mcq",
    o: [
      "iOS işletim sistemi",
      "Mobil ağ protokolü",
      "Veritabanı motoru",
      "Android için resmi geliştirme ortamı",
      "Telefon modeli"
    ],
    a: 3,
    difficulty: "easy",
    week: 3,
    topic: "Android Studio",
    importance: 5,
    explanation: "Android Studio, Android uygulamaları geliştirmek için kullanılan resmi IDE'dir."
  },
  {
    q: "Xcode hangi platform için temel geliştirme aracıdır?",
    t: "mcq",
    o: [
      "Android",
      "Windows Phone",
      "Symbian",
      "BlackBerry",
      "iOS"
    ],
    a: 4,
    difficulty: "easy",
    week: 3,
    topic: "Xcode",
    importance: 5,
    explanation: "Xcode, Apple ekosisteminde iOS ve diğer Apple platformları için temel IDE'dir."
  },
  {
    q: "Platform-Tools paketinin en bilinen aracı hangisidir?",
    t: "mcq",
    o: [
      "adb",
      "SwiftUI",
      "UIKit",
      "CoreData",
      "XAML"
    ],
    a: 0,
    difficulty: "easy",
    week: 3,
    topic: "Platform-Tools",
    importance: 5,
    explanation: "Android SDK Platform-Tools içinde en bilinen araç adb yani Android Debug Bridge'dir."
  },
  {
    q: "fastboot neyle ilişkilidir?",
    t: "mcq",
    o: [
      "iOS UI çizimi",
      "Düşük seviyeli cihaz imajı işlemleri",
      "Redux state yönetimi",
      "Swift derleme",
      "Media Query"
    ],
    a: 1,
    difficulty: "hard",
    week: 3,
    topic: "Platform-Tools",
    importance: 3,
    explanation: "fastboot, Android cihazlarda düşük seviyeli imaj yükleme ve bootloader işlemleriyle ilişkilidir."
  },
  {
    q: "Build-Tools hangi işle ilgilenir?",
    t: "mcq",
    o: [
      "Ekran parlaklığını ölçmekle",
      "Sensörleri kapatmakla",
      "Uygulamayı derleyip paketlemekle",
      "Kullanıcı yorumu yazmakla",
      "iPhone donanımı üretmekle"
    ],
    a: 2,
    difficulty: "medium",
    week: 3,
    topic: "Build-Tools",
    importance: 5,
    explanation: "Build-Tools, kaynak kodun derlenmesi ve uygulama paketine dönüştürülmesi sürecinde kullanılır."
  },
  {
    q: "AAPT hangi işle yakından ilişkilidir?",
    t: "mcq",
    o: [
      "GPS ölçümü",
      "NFC ödeme",
      "iOS sertifikası",
      "Android kaynaklarını paketleme",
      "Windows çekirdeği"
    ],
    a: 3,
    difficulty: "hard",
    week: 3,
    topic: "Android Araçları",
    importance: 3,
    explanation: "AAPT, Android kaynaklarının işlenmesi ve paketlenmesiyle ilişkili araçtır."
  },
  {
    q: "NDK hangi dili projeye güçlü biçimde dahil eder?",
    t: "mcq",
    o: [
      "HTML",
      "CSS",
      "SQL",
      "Dart",
      "C/C++"
    ],
    a: 4,
    difficulty: "medium",
    week: 3,
    topic: "NDK",
    importance: 4,
    explanation: "NDK, Android projelerinde C/C++ ile native kod yazma olanağı sağlar."
  },
  {
    q: "sdkmanager ne için kullanılır?",
    t: "mcq",
    o: [
      "SDK paketlerini yönetmek için",
      "UI ikonları çizmek için",
      "Telefon görüşmesi yapmak için",
      "Veritabanı normalleştirmek için",
      "Batarya üretmek için"
    ],
    a: 0,
    difficulty: "medium",
    week: 3,
    topic: "sdkmanager",
    importance: 4,
    explanation: "sdkmanager, Android SDK paketlerini listelemek, yüklemek ve güncellemek için kullanılır."
  },
  {
    q: "PATH değişkenine platform-tools eklenirse ne olur?",
    t: "mcq",
    o: [
      "Telefon kamerası değişir",
      "adb komutu terminalden bulunabilir",
      "iOS uygulaması otomatik yayınlanır",
      "APK boyutu sıfırlanır",
      "Sensör verisi silinir"
    ],
    a: 1,
    difficulty: "medium",
    week: 3,
    topic: "Ortam Değişkenleri",
    importance: 5,
    explanation: "platform-tools PATH'e eklenirse adb gibi komutlar terminalden doğrudan çalıştırılabilir."
  },
  {
    q: "Target SDK neyi belirtir?",
    t: "mcq",
    o: [
      "En düşük desteklenen Android sürümünü",
      "Telefonun RAM miktarını",
      "Uygulamanın hedeflediği Android API seviyesini",
      "Ekran oranını",
      "Kullanıcı sayısını"
    ],
    a: 2,
    difficulty: "hard",
    week: 3,
    topic: "SDK Seviyeleri",
    importance: 5,
    explanation: "Target SDK, uygulamanın hangi Android API seviyesi için hedeflenip test edildiğini belirtir."
  },

  // =========================================================
  // ==== 4. HAFTA – Mobil Arayüz Mimarisi (12)
  // =========================================================

  {
    q: "UI hangi unsurları kapsar?",
    t: "mcq",
    o: [
      "Sadece kernel",
      "Sadece ağ paketi",
      "Sadece batarya",
      "Ekranlar, butonlar ve görsel bileşenler",
      "Sadece mağaza hesabı"
    ],
    a: 3,
    difficulty: "easy",
    week: 4,
    topic: "UI",
    importance: 5,
    explanation: "UI, kullanıcının uygulamayla etkileşime geçtiği ekran, buton ve görsel bileşenleri kapsar."
  },
  {
    q: "UX en çok neyle ilgilenir?",
    t: "mcq",
    o: [
      "Derleyici tipi",
      "Batarya markası",
      "Dosya uzantısı",
      "SDK yolu",
      "Kullanıcı memnuniyeti ve deneyimi"
    ],
    a: 4,
    difficulty: "easy",
    week: 4,
    topic: "UX",
    importance: 5,
    explanation: "UX, kullanıcının uygulamayı kullanırken yaşadığı deneyim ve memnuniyet düzeyiyle ilgilenir."
  },
  {
    q: "Component örneği hangisidir?",
    t: "mcq",
    o: [
      "Buton",
      "Kernel",
      "Bootloader",
      "SDK lisansı",
      "API seviyesi"
    ],
    a: 0,
    difficulty: "easy",
    week: 4,
    topic: "UI Component",
    importance: 4,
    explanation: "Buton, liste ve form gibi yapılar UI bileşeni yani component örneğidir."
  },
  {
    q: "Android manifest dosyası neyi bildirir?",
    t: "mcq",
    o: [
      "Sadece ekran rengini",
      "Uygulama bileşenlerini",
      "Kullanıcı şifresini",
      "Telefon fiyatını",
      "Pil kapasitesini"
    ],
    a: 1,
    difficulty: "medium",
    week: 4,
    topic: "Android Manifest",
    importance: 5,
    explanation: "Manifest dosyası activity, service, receiver ve provider gibi uygulama bileşenlerini bildirir."
  },
  {
    q: "Temel uygulama mimarisinde veri katmanı ne içerir?",
    t: "mcq",
    o: [
      "Sadece ikonları",
      "Sadece renkleri",
      "İş mantığı ve veri işlemlerini",
      "Sadece ekran çözünürlüğünü",
      "Sadece bildirim sesini"
    ],
    a: 2,
    difficulty: "medium",
    week: 4,
    topic: "Veri Katmanı",
    importance: 5,
    explanation: "Veri katmanı, uygulamanın veriyi oluşturma, saklama ve değiştirme kurallarını yani iş mantığını içerir."
  },
  {
    q: "Data Source sınıfı kaç veri kaynağıyla çalışmalıdır?",
    t: "mcq",
    o: [
      "Sınırsız",
      "En az beş",
      "Tüm ekranlarla",
      "Tek bir veri kaynağıyla",
      "Sadece ViewModel ile"
    ],
    a: 3,
    difficulty: "medium",
    week: 4,
    topic: "Data Source",
    importance: 4,
    explanation: "Her veri kaynağı sınıfı dosya, ağ veya yerel veritabanı gibi tek bir kaynakla çalışmalıdır."
  },
  {
    q: "Use Case sınıfının temel özelliği nedir?",
    t: "mcq",
    o: [
      "Sadece UI çizmesi",
      "Tüm uygulamayı tek dosyada tutması",
      "Veritabanını silmesi",
      "APK imzalaması",
      "Tek bir işlevden sorumlu olması"
    ],
    a: 4,
    difficulty: "medium",
    week: 4,
    topic: "Domain Katmanı",
    importance: 5,
    explanation: "Use Case sınıfları tek bir işlevi temsil etmeli ve özellikle tekrar kullanılan iş mantığını kapsamalıdır."
  },
  {
    q: "MVC'de View neyi temsil eder?",
    t: "mcq",
    o: [
      "Kullanıcıya gösterilen arayüzü",
      "Derleyiciyi",
      "İşletim sistemi çekirdeğini",
      "SDK yolunu",
      "API seviyesini"
    ],
    a: 0,
    difficulty: "easy",
    week: 4,
    topic: "MVC",
    importance: 4,
    explanation: "MVC'de View, kullanıcıya gösterilen arayüz kısmıdır."
  },
  {
    q: "MVVM'nin avantajı nedir?",
    t: "mcq",
    o: [
      "Kernel değiştirmesi",
      "Veri bağlamayı desteklemesi",
      "Sadece tek ekran çalışması",
      "SDK kurulumunu kaldırması",
      "Donanım üretmesi"
    ],
    a: 1,
    difficulty: "medium",
    week: 4,
    topic: "MVVM",
    importance: 5,
    explanation: "MVVM, ViewModel üzerinden View ile Model arasında veri bağlama yaklaşımını güçlendirir."
  },
  {
    q: "Clean Architecture'da Use Cases neyi temsil eder?",
    t: "mcq",
    o: [
      "UI butonlarını",
      "Veritabanı sürücüsünü",
      "Uygulama iş mantığını",
      "Telefon ekranını",
      "SDK lisansını"
    ],
    a: 2,
    difficulty: "hard",
    week: 4,
    topic: "Clean Architecture",
    importance: 5,
    explanation: "Use Cases katmanı, uygulamaya özgü iş mantığını temsil eder."
  },
  {
    q: "Asenkron işlem neden kullanılır?",
    t: "mcq",
    o: [
      "Ekranı kilitlemek için",
      "Uygulamayı kapatmak için",
      "SDK'yı silmek için",
      "UI'nin donmasını önlemek için",
      "Manifesti kaldırmak için"
    ],
    a: 3,
    difficulty: "medium",
    week: 4,
    topic: "Performans",
    importance: 5,
    explanation: "Uzun süren işlemler arka planda yürütülürse UI donmaz ve kullanıcı deneyimi korunur."
  },
  {
    q: "Declarative UI yaklaşımı neyi tanımlar?",
    t: "mcq",
    o: [
      "Nasıl çizileceğini adım adım işlemeyi",
      "Sadece veritabanı ilişkilerini",
      "Telefonun çekirdeğini",
      "APK imza anahtarını",
      "Ekranda neyin gösterileceğini"
    ],
    a: 4,
    difficulty: "medium",
    week: 4,
    topic: "Declarative UI",
    importance: 4,
    explanation: "Declarative UI yaklaşımında geliştirici arayüzün hangi durumda ne göstereceğini tanımlar."
  }
];
