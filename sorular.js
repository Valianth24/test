// Mobil Programlama – 50 Soruluk Soru Bankası (MCQ)
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]
// Not: a = doğru şık index’i (0=A, 1=B, 2=C, 3=D, 4=E)

window.questionBank = [
  // =========================================================
  // ==== 1. HAFTA – Mobil Programlamaya Giriş, Donanım ve Sensörler (12) =
  // =========================================================

  {
    q: "Mobil uygulamanın masaüstü yazılımdan temel farkı aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Her zaman web tarayıcıda çalışması",
      "Sadece kablolu ağ kullanması",
      "Taşınabilir ve kaynakları sınırlı cihazlarda belirli bir işi optimize biçimde yapması",
      "Sunucu tarafında çalışmasının zorunlu olması",
      "Donanım özelliklerinden bağımsız geliştirilmesi"
    ],
    a: 2,
    difficulty: "easy",
    week: 1,
    topic: "Mobil Uygulama Tanımı",
    importance: 5,
    explanation: "Mobil uygulama; pil, bellek ve sensör gibi kısıtları olan taşınabilir cihazlarda belirli işlevleri optimize biçimde yerine getirir."
  },

  {
    q: "Mobil bilişim alanının temelini oluşturan dört unsur hangi seçenekte doğru verilmiştir?",
    t: "mcq",
    o: [
      "Veritabanı, kablo, masaüstü CPU, yazıcı",
      "Kablosuz iletişim, küresel ağlar, cihaz minyatürleşmesi ve mobil yazılım platformları",
      "Sadece internet, klavye, monitör ve fare",
      "Yalnızca işletim sistemi, RAM, disk ve ekran kartı",
      "Sunucu, masaüstü uygulama, modem ve tarayıcı"
    ],
    a: 1,
    difficulty: "medium",
    week: 1,
    topic: "Mobil Bilişim",
    importance: 4,
    explanation: "Mobil bilişim; kablosuz iletişim, küresel altyapı ağları, cihazların küçülmesi ve mobil yazılım platformları üzerinde yükselir."
  },

  {
    q: "2G mobil ağların ayırt edici özelliği aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Ultra düşük gecikme ve IoT desteği",
      "Sadece analog ses iletimi",
      "HD video akışı ve bulut oyun",
      "Dijital sinyalleşme, SMS ve MMS desteği",
      "AR/VR için gigabit veri aktarımı"
    ],
    a: 3,
    difficulty: "easy",
    week: 1,
    topic: "Mobil Ağ Nesilleri",
    importance: 4,
    explanation: "2G dönemi GSM tabanlı dijital sinyalleşme, SMS ve MMS gibi servislerle öne çıkar."
  },

  {
    q: "5G ağların ders içeriğinde vurgulanan temel katkısı hangisidir?",
    t: "mcq",
    o: [
      "Ultra düşük gecikme, IoT entegrasyonu ve yüksek veri kapasitesi",
      "Yalnızca analog ses iletişimi",
      "Manuel operatörle arama yapılması",
      "Sadece SMS ve MMS gönderimi",
      "Fiziksel klavye kullanımının zorunlu olması"
    ],
    a: 0,
    difficulty: "easy",
    week: 1,
    topic: "5G Teknolojisi",
    importance: 4,
    explanation: "5G; düşük gecikme, IoT/AR-VR desteği ve 1-20 Gbps aralığına çıkan veri kapasitesiyle anlatılır."
  },

  {
    q: "Tarihteki ilk gerçek akıllı telefon hamlesi olarak verilen cihaz hangisidir?",
    t: "mcq",
    o: [
      "T-Mobile G1",
      "iPhone OS 1.0",
      "Motorola DynaTAC 8000X",
      "Windows Phone 7",
      "IBM Simon"
    ],
    a: 4,
    difficulty: "medium",
    week: 1,
    topic: "Akıllı Telefon Tarihi",
    importance: 4,
    explanation: "IBM Simon; dokunmatik ekran, faks, e-posta ve yüklenebilir uygulamalarla ilk gerçek akıllı telefon örneği olarak verilir."
  },

  {
    q: "Mobil cihazlarda ARM tabanlı RISC mimarisinin tercih edilmesinin ana nedeni nedir?",
    t: "mcq",
    o: [
      "Sadece masaüstü uygulamalarını çalıştırması",
      "Donanım sensörlerini devre dışı bırakması",
      "Düşük güç tüketimi ile yüksek performans arasında denge sağlaması",
      "Veritabanı tablolarını otomatik oluşturması",
      "İşletim sistemi güncellemesini engellemesi"
    ],
    a: 2,
    difficulty: "medium",
    week: 1,
    topic: "Donanım Mimarisi",
    importance: 5,
    explanation: "ARM/RISC yaklaşımı mobil cihazlarda pil tüketimi ve performans arasında verimli bir denge kurmak için kullanılır."
  },

  {
    q: "Process Killing kavramı mobil işletim sistemlerinde neyi ifade eder?",
    t: "mcq",
    o: [
      "Uygulamanın mağazadan silinmesini",
      "Ön plandaki performansı korumak için arka plan uygulamalarının kapatılmasını",
      "Kullanıcı arayüzünün yeniden tasarlanmasını",
      "Sensörlerin fabrika ayarına dönmesini",
      "Ağ bağlantısının şifrelenmesini"
    ],
    a: 1,
    difficulty: "medium",
    week: 1,
    topic: "Bellek Yönetimi",
    importance: 5,
    explanation: "Kaynaklar kısıtlı olduğunda sistem, ön plandaki deneyimi korumak için arka plandaki süreçleri dondurabilir veya sonlandırabilir."
  },

  {
    q: "İvmeölçer (accelerometer) temel olarak neyi ölçer?",
    t: "mcq",
    o: [
      "Üç eksende ivmeyi",
      "Ekranın piksel yoğunluğunu",
      "Batarya sıcaklığını",
      "İşlemci çekirdek sayısını",
      "Kablosuz ağ şifresini"
    ],
    a: 0,
    difficulty: "easy",
    week: 1,
    topic: "Sensörler",
    importance: 4,
    explanation: "İvmeölçer üç eksendeki ivmeyi ölçer; ekran döndürme, adım sayma ve oyun kontrollerinde kullanılır."
  },

  {
    q: "Jiroskop (gyroscope) hangi kullanım alanıyla en doğrudan ilişkilidir?",
    t: "mcq",
    o: [
      "Temassız ödeme",
      "Otomatik ekran parlaklığı",
      "Dosya sistemi yönetimi",
      "Dönüş hızını algılama ve AR/VR deneyimleri",
      "Veritabanı normalizasyonu"
    ],
    a: 3,
    difficulty: "easy",
    week: 1,
    topic: "Sensörler",
    importance: 4,
    explanation: "Jiroskop dönüş hızını ölçer; AR/VR, 360 derece içerik ve hassas oyun kontrollerinde önemlidir."
  },

  {
    q: "Yakınlık sensörünün (proximity) tipik görevi nedir?",
    t: "mcq",
    o: [
      "Uydu sinyaliyle konum bulmak",
      "Hava basıncı ölçmek",
      "Grafik motorunu hızlandırmak",
      "Uygulama paketini imzalamak",
      "Arama sırasında cihaz yüze yaklaştığında ekranı kapatmak"
    ],
    a: 4,
    difficulty: "easy",
    week: 1,
    topic: "Sensörler",
    importance: 3,
    explanation: "Yakınlık sensörü nesne yakınlığını algılar; telefon görüşmesinde ekranın kapanması bunun klasik örneğidir."
  },

  {
    q: "Android Application Framework katmanının görevi hangisidir?",
    t: "mcq",
    o: [
      "Cihazın fiziksel ekran kablosunu yönetmek",
      "Geliştiricilere Activity Manager, Window Manager ve bildirim gibi Java/Kotlin API servisleri sunmak",
      "Sadece bootloader yazılımını çalıştırmak",
      "Uygulamaları App Store'a göndermek",
      "Donanım üreticisinin kamera sürücüsünü üretmek"
    ],
    a: 1,
    difficulty: "medium",
    week: 1,
    topic: "Android Katmanları",
    importance: 5,
    explanation: "Application Framework, geliştiricinin uygulama yazarken kullandığı temel Android servislerini API olarak sunar."
  },

  {
    q: "Native geliştirme yaklaşımı için en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "En yüksek performans ve en kapsamlı donanım erişimi sağlar, ancak maliyeti yüksektir",
      "WebView içinde HTML, CSS ve JavaScript çalıştırır",
      "Her zaman tek kod tabanı ile bütün platformlara çıkar",
      "Donanım özelliklerine erişimi bilinçli olarak engeller",
      "Sadece sunucu taraflı uygulamalar için kullanılır"
    ],
    a: 0,
    difficulty: "medium",
    week: 1,
    topic: "Geliştirme Yaklaşımları",
    importance: 5,
    explanation: "Native geliştirme platformun resmi dilleriyle yapılır; performans ve donanım erişimi yüksektir fakat iki platform için maliyet artabilir."
  },

  // =========================================================
  // ==== 2. HAFTA – Mobil İşletim Sistemleri Analizi (13) =========
  // =========================================================

  {
    q: "Symbian, BlackBerry OS ve Palm OS gibi erken mobil sistemlerin temel eksikliği neydi?",
    t: "mcq",
    o: [
      "Hiçbir cihazda çalışmamaları",
      "Sadece masaüstü bilgisayarlara kurulmaları",
      "Modern sezgisel arayüz ve güçlü uygulama ekosistemi sunamamaları",
      "Bulut bilişim zorunluluğu getirmeleri",
      "Sadece 5G ağlarda çalışmaları"
    ],
    a: 2,
    difficulty: "medium",
    week: 2,
    topic: "Mobil İşletim Sistemleri Tarihi",
    importance: 4,
    explanation: "Bu platformlar dönemin önemli sistemleri olsa da modern kullanıcı deneyimi ve uygulama ekosistemi beklentilerini karşılayamadı."
  },

  {
    q: "Android'in tarihsel gelişimi için doğru eşleşme hangisidir?",
    t: "mcq",
    o: [
      "2007'de Microsoft tarafından geliştirildi",
      "2003'te Android Inc. olarak başladı, 2005'te Google tarafından satın alındı",
      "2014'te Apple tarafından iOS yerine çıkarıldı",
      "2020'de Windows NT çekirdeğine taşındı",
      "1992'de IBM Simon ile birlikte duyuruldu"
    ],
    a: 1,
    difficulty: "easy",
    week: 2,
    topic: "Android Tarihi",
    importance: 5,
    explanation: "Ders içeriğinde Android'in 2003'te Android Inc. ile başladığı ve 2005'te Google tarafından satın alındığı belirtilir."
  },

  {
    q: "Android'in Apache lisansı altında sunulmasının sonucu ne olmuştur?",
    t: "mcq",
    o: [
      "Sadece Apple cihazlarında çalışması",
      "Uygulama mağazasının kapanması",
      "Windows Phone 7 cihazlarının güncellenmesi",
      "Samsung, Xiaomi ve benzeri üreticilerce hızla benimsenmesi",
      "Swift dilinin zorunlu hale gelmesi"
    ],
    a: 3,
    difficulty: "medium",
    week: 2,
    topic: "Android Ekosistemi",
    importance: 4,
    explanation: "Açık ve esnek lisans modeli, farklı donanım üreticilerinin Android'i benimsemesini kolaylaştırmıştır."
  },

  {
    q: "iOS için kullanılan “kapalı bahçe” modeli en çok neyi anlatır?",
    t: "mcq",
    o: [
      "Apple'ın donanım ve yazılım üzerinde tam kontrol kurduğu kapalı ekosistemi",
      "Android'in açık kaynaklı lisans yapısını",
      "Windows Phone'un NT çekirdeğine geçişini",
      "Uygulamanın sadece web tarayıcıda çalışmasını",
      "Veritabanı normalizasyonunu"
    ],
    a: 0,
    difficulty: "easy",
    week: 2,
    topic: "iOS Ekosistemi",
    importance: 5,
    explanation: "iOS, Apple'ın donanım-yazılım bütünlüğünü kontrol ettiği kapalı ekosistem modeliyle açıklanır."
  },

  {
    q: "Windows Phone 8'e geçişte geliştirici güvenini sarsan temel karar hangisidir?",
    t: "mcq",
    o: [
      "C# dilinin desteklenmesi",
      "Canlı kutucukların kullanılması",
      "Visual Studio entegrasyonu",
      "UWP hedefinin duyurulması",
      "Çekirdeğin Windows CE'den Windows NT'ye taşınması ve eski cihazların güncellenememesi"
    ],
    a: 4,
    difficulty: "medium",
    week: 2,
    topic: "Windows Phone",
    importance: 4,
    explanation: "Windows Phone 8 ile NT çekirdeğine geçiş, Windows Phone 7 cihazlarının güncelleme dışı kalmasına yol açmıştır."
  },

  {
    q: "Android HAL katmanı hangi amacı taşır?",
    t: "mcq",
    o: [
      "Kullanıcıya uygulama ikonlarını göstermek",
      "App Store inceleme sürecini yönetmek",
      "Donanım özelliklerine üst katmanların standart arayüzlerle erişmesini sağlamak",
      "Swift kodunu makine koduna çevirmek",
      "Sadece reklam gelirlerini yönetmek"
    ],
    a: 2,
    difficulty: "hard",
    week: 2,
    topic: "Android Mimarisi",
    importance: 5,
    explanation: "HAL, kamera, ses, Bluetooth gibi cihaz özellikleri için üst katmanlara standart erişim yüzeyi sağlar."
  },

  {
    q: "iOS Core Services katmanında aşağıdakilerden hangisi yer alır?",
    t: "mcq",
    o: [
      "Sadece dokunmatik ekran hareketleri",
      "Core Data, CloudKit ve Core Location gibi temel servisler",
      "Android Binder IPC mekanizması",
      "Silverlight ve XAML arayüzleri",
      "APK paketleme araçları"
    ],
    a: 1,
    difficulty: "medium",
    week: 2,
    topic: "iOS Mimarisi",
    importance: 4,
    explanation: "Core Services; veri yönetimi, ağ/bulut servisleri ve konum gibi UI dışı temel servisleri sağlar."
  },

  {
    q: "UWP'nin Windows 10 Mobile ile hedeflediği temel fikir nedir?",
    t: "mcq",
    o: [
      "Sadece Android uygulaması derlemek",
      "iOS uygulamalarını SwiftUI ile yazmak",
      "Telefonlarda arka plan servislerini tamamen kapatmak",
      "Tek uygulama paketinin farklı Windows cihaz ailelerinde çalışması",
      "Linux çekirdeğini mobil cihazlara taşımak"
    ],
    a: 3,
    difficulty: "medium",
    week: 2,
    topic: "Windows Ekosistemi",
    importance: 3,
    explanation: "UWP, PC, telefon ve Xbox gibi Windows cihaz aileleri için ortak uygulama modeli hedeflemiştir."
  },

  {
    q: "Android ve iOS bellek yönetimi karşılaştırmasında doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Android GC kullanırken iOS ARC yaklaşımını benimser",
      "iOS yalnızca Garbage Collection kullanır",
      "Android bellek yönetimi yapmaz",
      "ARC sadece Windows Phone için geçerlidir",
      "GC nesneleri referans sıfırlandığı anda kesin olarak serbest bırakır"
    ],
    a: 0,
    difficulty: "hard",
    week: 2,
    topic: "Bellek Yönetimi",
    importance: 5,
    explanation: "Android tarafında çöp toplama, iOS tarafında ise referans sayımı temelli ARC yaklaşımı öne çıkar."
  },

  {
    q: "iOS çoklu görev modelinde arka plana geçen uygulama çoğunlukla hangi duruma alınır?",
    t: "mcq",
    o: [
      "Kernel moduna",
      "Yüksek performans moduna",
      "Tam ekran oyun moduna",
      "Root erişimine",
      "Askıya alınmış (suspended) duruma"
    ],
    a: 4,
    difficulty: "medium",
    week: 2,
    topic: "Çoklu Görev",
    importance: 4,
    explanation: "iOS, pil ve kaynak yönetimi için arka plan uygulamalarını çoğu durumda askıya alır; sadece özel modlara sınırlı izin verir."
  },

  {
    q: "Güncel Android geliştirme için önerilen birincil dil hangisidir?",
    t: "mcq",
    o: [
      "Objective-C",
      "C#",
      "Kotlin",
      "VB.NET",
      "PHP"
    ],
    a: 2,
    difficulty: "easy",
    week: 2,
    topic: "Android Geliştirme Ekosistemi",
    importance: 5,
    explanation: "Ders içeriğinde Kotlin; modern, güvenli ve Android geliştirme için önerilen birincil dil olarak verilir."
  },

  {
    q: "iOS uygulaması geliştirmek için temel IDE ve çalışma ortamı hangi seçenekte doğru verilmiştir?",
    t: "mcq",
    o: [
      "Android Studio ve Linux",
      "Xcode ve macOS",
      "Visual Studio Code ve Windows Phone 7",
      "Eclipse ve Symbian",
      "Flutter Doctor ve Chrome OS"
    ],
    a: 1,
    difficulty: "easy",
    week: 2,
    topic: "iOS Geliştirme Ekosistemi",
    importance: 5,
    explanation: "iOS geliştirme Apple'ın macOS üzerinde çalışan Xcode IDE'sine bağlıdır."
  },

  {
    q: "Girişimlerin bazı durumlarda iOS-first stratejisi izlemesinin temel ekonomik nedeni nedir?",
    t: "mcq",
    o: [
      "iOS cihazların hiç güncelleme almaması",
      "Android'in uygulama mağazası bulunmaması",
      "Windows Phone'un daha yüksek pazar payına sahip olması",
      "iOS kullanıcılarının ücretli indirme ve uygulama içi satın almalara daha fazla harcama eğilimi",
      "Swift dilinin sadece reklam tabanlı gelir üretmesi"
    ],
    a: 3,
    difficulty: "medium",
    week: 2,
    topic: "Gelir Modelleri",
    importance: 4,
    explanation: "Ders içeriğinde iOS'un yüksek gelirli pazarlarda güçlü olduğu ve kullanıcıların IAP/ücretli indirmelerde daha fazla harcama eğiliminde olduğu belirtilir."
  },

  // =========================================================
  // ==== 3. HAFTA – SDK, IDE ve Geliştirme Ortamı (13) ============
  // =========================================================

  {
    q: "SDK ile API arasındaki temel fark hangisidir?",
    t: "mcq",
    o: [
      "API derleyici içerir, SDK sadece ikon sağlar",
      "SDK yalnızca veritabanı tablosudur",
      "API, fiziksel cihazın bataryasıdır",
      "SDK sadece tasarım renklerini belirler",
      "API iletişim sözleşmesidir; SDK ise API dahil geliştirme, derleme, test ve dağıtım araçlarını kapsar"
    ],
    a: 4,
    difficulty: "easy",
    week: 3,
    topic: "SDK ve API",
    importance: 5,
    explanation: "API yazılımlar arası iletişim kurallarını tanımlar; SDK ise bu API'leri de içeren tam araç setidir."
  },

  {
    q: "Platform SDK'sı için doğru tanım hangisidir?",
    t: "mcq",
    o: [
      "İşletim sistemi üreticisinin sağladığı, uygulamanın ilgili platformda çalışması için temel araç paketidir",
      "Sadece reklam gösteren dış kütüphanedir",
      "Veri tabanı normalizasyon kuralıdır",
      "Kullanıcıya gösterilen tek bir butondur",
      "Sadece oyun motoru sahnesidir"
    ],
    a: 0,
    difficulty: "easy",
    week: 3,
    topic: "SDK Türleri",
    importance: 4,
    explanation: "Platform SDK'ları Android için Google, iOS için Apple gibi üreticiler tarafından sağlanan temel geliştirme altyapılarıdır."
  },

  {
    q: "SDK içindeki kütüphanelerin temel işlevi nedir?",
    t: "mcq",
    o: [
      "Sadece terminal rengini değiştirmek",
      "Donanım sürücülerini fiziksel olarak üretmek",
      "Sık kullanılan görevler için test edilmiş yeniden kullanılabilir kod parçaları sunmak",
      "Uygulamanın mağaza puanını garanti etmek",
      "Telefonun ekran camını değiştirmek"
    ],
    a: 2,
    difficulty: "medium",
    week: 3,
    topic: "SDK Bileşenleri",
    importance: 4,
    explanation: "Kütüphaneler; kimlik doğrulama, veri yönetimi, ağ istekleri ve UI gibi sık görevlerde hazır kod sağlar."
  },

  {
    q: "Derleyicinin (compiler) görevi aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Uygulama ikonlarını mağazada sıralamak",
      "Yüksek seviyeli kaynak kodu makine koduna veya ara formata dönüştürmek",
      "Kullanıcı yorumlarını analiz etmek",
      "Veritabanı kayıtlarını otomatik silmek",
      "Ekran parlaklığını ölçmek"
    ],
    a: 1,
    difficulty: "easy",
    week: 3,
    topic: "Derleyiciler",
    importance: 5,
    explanation: "Derleyici; Java, Kotlin, Swift gibi kaynak kodları hedef platformun anlayacağı makine koduna veya bytecode/Dex gibi ara biçimlere dönüştürür."
  },

  {
    q: "ADB'nin Android geliştirme sürecindeki temel rolü nedir?",
    t: "mcq",
    o: [
      "iOS uygulamasını App Store'a göndermek",
      "Swift kodunu optimize etmek",
      "Kamera lensini fiziksel olarak kontrol etmek",
      "Geliştirme ortamı ile cihaz/emülatör arasında köprü kurmak",
      "Veritabanı normal formunu hesaplamak"
    ],
    a: 3,
    difficulty: "medium",
    week: 3,
    topic: "Android Platform Tools",
    importance: 5,
    explanation: "ADB; uygulama yükleme, shell erişimi ve hata ayıklama için bilgisayar ile Android cihaz/emülatör arasında komut satırı köprüsü kurar."
  },

  {
    q: "Android SDK Build-Tools içinde D8/R8 araçlarının görevi nedir?",
    t: "mcq",
    o: [
      "Sadece tasarım renklerini seçmek",
      "Xcode simülatörünü başlatmak",
      "APK'yı mağazada yorumlamak",
      "Kullanıcı konumunu ölçmek",
      "Java/Kotlin bytecode'unu Android'in anlayacağı Dex formatına dönüştürmek"
    ],
    a: 4,
    difficulty: "hard",
    week: 3,
    topic: "Build-Tools",
    importance: 5,
    explanation: "D8/R8, Android derleme sürecinde bytecode'u Dex formatına dönüştürerek ART/Dalvik çalışma ortamına uygun hale getirir."
  },

  {
    q: "Android SDK Platforms paketinin kurulma nedeni nedir?",
    t: "mcq",
    o: [
      "Sadece emülatör temasını değiştirmek",
      "Kullanıcı yorumlarını çekmek",
      "Belirli Android sürümüne ait framework kütüphaneleri ve android.jar referanslarını sağlamak",
      "Apple Developer üyeliği oluşturmak",
      "Windows NT çekirdeğini güncellemek"
    ],
    a: 2,
    difficulty: "medium",
    week: 3,
    topic: "SDK Platforms",
    importance: 5,
    explanation: "Bir uygulamanın hedeflenen API seviyesinde derlenebilmesi için o sürüme ait framework kütüphaneleri sistemde bulunmalıdır."
  },

  {
    q: "Google Play etiketli Android sistem imajının Google APIs imajına göre önemli farkı nedir?",
    t: "mcq",
    o: [
      "Resmi Play Store uygulaması ve Google servislerini de içermesi",
      "Sadece siyah ekran göstermesi",
      "NDK'yı tamamen kaldırması",
      "Java derleyicisini devre dışı bırakması",
      "SwiftUI önizlemesi sunması"
    ],
    a: 0,
    difficulty: "medium",
    week: 3,
    topic: "Emülatör ve Sistem İmajları",
    importance: 4,
    explanation: "Google Play imajları, Play Store ve Google servisleriyle birlikte gelir; harita veya uygulama içi satın alma testleri için önemlidir."
  },

  {
    q: "Android NDK en çok hangi durumda tercih edilir?",
    t: "mcq",
    o: [
      "Sadece HTML sayfası görüntülemek için",
      "C/C++ ile işlemci merkezli yüksek performans gerektiren yerel kod çalıştırmak için",
      "Kullanıcı arayüzünü XML olmadan çizmek için",
      "Uygulama mağazası açıklamasını yazmak için",
      "Veritabanı ilişkilerini normalleştirmek için"
    ],
    a: 1,
    difficulty: "hard",
    week: 3,
    topic: "NDK",
    importance: 4,
    explanation: "NDK, C/C++ kodlarının native olarak çalıştırılmasına imkan verir; oyun motoru, grafik veya sinyal işleme gibi alanlarda kullanılır."
  },

  {
    q: "ANDROID_HOME ortam değişkeni neyi göstermelidir?",
    t: "mcq",
    o: [
      "Xcode DerivedData klasörünü",
      "Uygulamanın ekran görüntüsü klasörünü",
      "Telefonun IMEI numarasını",
      "Android SDK'nın kök dizinini",
      "Google Play yorum sayfasını"
    ],
    a: 3,
    difficulty: "medium",
    week: 3,
    topic: "Ortam Değişkenleri",
    importance: 5,
    explanation: "ANDROID_HOME, terminal ve cross-platform araçların Android SDK araç zincirinin yerini bulabilmesi için SDK kök yolunu gösterir."
  },

  {
    q: "sdkmanager --list komutu ne için kullanılır?",
    t: "mcq",
    o: [
      "Cihazın pil sağlığını ölçmek",
      "iOS simülatörünü donanıma dönüştürmek",
      "Gradle önbelleğini silmek",
      "Google Play'de uygulama yayınlamak",
      "Kurulu ve indirilebilir SDK paketlerini listelemek"
    ],
    a: 4,
    difficulty: "medium",
    week: 3,
    topic: "sdkmanager",
    importance: 4,
    explanation: "sdkmanager --list komutu yerel makinedeki ve indirilebilir durumdaki SDK paketlerini terminalde listeler."
  },

  {
    q: "build.gradle içinde yer alan Min SDK neyi ifade eder?",
    t: "mcq",
    o: [
      "Uygulamanın çalışabileceği en eski Android sürümünü",
      "Uygulamanın optimize edildiği en yüksek Android sürümünü",
      "Uygulamanın hangi kütüphane kodlarıyla derleneceğini",
      "Sadece uygulama ikonunun minimum boyutunu",
      "Emülatörün kullanacağı ekran çözünürlüğünü"
    ],
    a: 0,
    difficulty: "hard",
    week: 3,
    topic: "API Seviyeleri",
    importance: 5,
    explanation: "Min SDK, uygulamanın desteklediği en eski Android işletim sistemi/API seviyesini belirtir."
  },

  {
    q: "“SDK licenses have not been accepted” hatasında temel çözüm nedir?",
    t: "mcq",
    o: [
      "Telefonun SIM kartını değiştirmek",
      "Xcode Preview penceresini kapatmak",
      "yes | sdkmanager --licenses komutuyla lisansları kabul etmek",
      "Uygulamanın adını değiştirmek",
      "Ekran parlaklığını düşürmek"
    ],
    a: 2,
    difficulty: "medium",
    week: 3,
    topic: "Troubleshooting",
    importance: 5,
    explanation: "Gradle lisans onayı bulamadığında derleme durur; sdkmanager üzerinden lisansların kabul edilmesi gerekir."
  },

  // =========================================================
  // ==== 4. HAFTA – Mobil Arayüz Mimarisi (12) ====================
  // =========================================================

  {
    q: "Mobil arayüz mimarisi en doğru şekilde neyi ifade eder?",
    t: "mcq",
    o: [
      "Sadece veritabanı kolon tiplerini",
      "Telefonun batarya kapasitesini",
      "Uygulama mağazası fiyatlandırmasını",
      "Mobil UI'nin nasıl tasarlandığını, yapılandırıldığını ve yönetildiğini",
      "Sadece işletim sistemi çekirdeğini"
    ],
    a: 3,
    difficulty: "easy",
    week: 4,
    topic: "Mobil Arayüz Mimarisi",
    importance: 5,
    explanation: "Mobil arayüz mimarisi; UI'nin tasarım, yapılandırma ve yönetim biçimini ele alır; sürdürülebilirlik, ölçeklenebilirlik ve UX'i etkiler."
  },

  {
    q: "UI ve UX ayrımı için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "UI sadece sunucu belleğidir, UX sadece veritabanıdır",
      "UI ve UX tamamen aynı kavramdır",
      "UX yalnızca buton rengidir, UI yalnızca kullanıcı memnuniyetidir",
      "UI sadece işletim sistemi çekirdeğidir",
      "UI görsel/etkileşim bileşenleridir; UX kullanıcının yaşadığı deneyim ve memnuniyettir"
    ],
    a: 4,
    difficulty: "easy",
    week: 4,
    topic: "UI ve UX",
    importance: 5,
    explanation: "UI ekran, buton ve görsel bileşenleri; UX ise kullanıcının uygulamayı kullanırken yaşadığı toplam deneyimi anlatır."
  },

  {
    q: "Android manifest dosyasının kullanıcı deneyimi açısından rolü nedir?",
    t: "mcq",
    o: [
      "Uygulama bileşenlerini beyan ederek Android OS'in uygulamayı sisteme nasıl entegre edeceğini anlamasını sağlamak",
      "Kullanıcı şifresini düz metin saklamak",
      "Ekran parlaklığını otomatik ayarlamak",
      "Veritabanı tablolarını normalleştirmek",
      "Sadece uygulama fiyatını belirlemek"
    ],
    a: 0,
    difficulty: "medium",
    week: 4,
    topic: "Android Bileşenleri",
    importance: 4,
    explanation: "Etkinlik, hizmet, içerik sağlayıcı ve yayın alıcı gibi bileşenlerin çoğu manifestte bildirilir."
  },

  {
    q: "Mobil bileşenlerde durumun yalnızca bellekte tutulmamasının nedeni nedir?",
    t: "mcq",
    o: [
      "Veritabanı kullanmak yasak olduğu için",
      "İşletim sistemi veya kullanıcı bileşenleri herhangi bir zamanda yok edebileceği için",
      "UI bileşeni her zaman sunucuda çalıştığı için",
      "Android'de hiçbir bileşen bulunmadığı için",
      "Manifest dosyası kullanılamadığı için"
    ],
    a: 1,
    difficulty: "hard",
    week: 4,
    topic: "Yaşam Döngüsü ve Durum",
    importance: 5,
    explanation: "Mobil OS kaynak yönetimi nedeniyle süreç veya bileşenleri sonlandırabilir; bu yüzden kritik durum sadece bellekte tutulmamalıdır."
  },

  {
    q: "Ders içeriğine göre her uygulamada en az hangi iki katman bulunmalıdır?",
    t: "mcq",
    o: [
      "Reklam katmanı ve mağaza katmanı",
      "Kamera katmanı ve GPS katmanı",
      "Kullanıcı arayüzü katmanı ve veri katmanı",
      "Sadece domain katmanı ve test katmanı",
      "Çekirdek katmanı ve bootloader katmanı"
    ],
    a: 2,
    difficulty: "easy",
    week: 4,
    topic: "Ortak Mimari İlkeleri",
    importance: 5,
    explanation: "Temel mimaride UI katmanı uygulama verilerini gösterir; veri katmanı ise iş mantığı ve verilerle ilgilenir."
  },

  {
    q: "Repository sınıflarının temel sorumluluğu aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Sadece buton renklerini değiştirmek",
      "Telefon donanımını üretmek",
      "Uygulamanın logosunu çizmek",
      "Veriyi uygulamanın geri kalanına sunmak, değişiklikleri merkezileştirmek ve veri kaynaklarını soyutlamak",
      "Cihazın işletim sistemini güncellemek"
    ],
    a: 3,
    difficulty: "medium",
    week: 4,
    topic: "Veri Katmanı",
    importance: 5,
    explanation: "Depo sınıfları veriyi gösterir, veri değişikliklerini merkezileştirir, kaynak çakışmalarını çözer ve veri kaynaklarını soyutlar."
  },

  {
    q: "Veri kaynağı sınıfı için doğru sorumluluk tanımı hangisidir?",
    t: "mcq",
    o: [
      "Birden fazla ekranın animasyonunu yönetmek",
      "Tüm uygulama tasarımını çizmek",
      "Kullanıcının mağaza yorumunu almak",
      "ViewModel ile View arasında veri bağlamak",
      "Dosya, ağ kaynağı veya yerel veritabanı gibi tek bir veri kaynağıyla çalışmak"
    ],
    a: 4,
    difficulty: "medium",
    week: 4,
    topic: "Data Source",
    importance: 4,
    explanation: "Her veri kaynağı sınıfının tek bir kaynağa odaklanması sorumluluk ayrımını güçlendirir."
  },

  {
    q: "Alan adı (domain) katmanı hangi durumda eklenmelidir?",
    t: "mcq",
    o: [
      "Karmaşık iş mantığını yönetmek veya birden fazla ViewModel tarafından kullanılan mantığı yeniden kullanmak gerektiğinde",
      "Sadece uygulama ikonu değiştirileceğinde",
      "Her zaman zorunlu olduğu için",
      "Telefonun kamerası bozulduğunda",
      "Uygulama mağazası hesabı açmak için"
    ],
    a: 0,
    difficulty: "medium",
    week: 4,
    topic: "Domain Katmanı",
    importance: 5,
    explanation: "Domain katmanı isteğe bağlıdır; karmaşıklık veya yeniden kullanılabilir iş mantığı olduğunda kullanılır."
  },

  {
    q: "MVC mimarisinde Controller'ın görevi nedir?",
    t: "mcq",
    o: [
      "Veritabanı diskini biçimlendirmek",
      "Model ve View arasında köprü olup kullanıcı etkileşimlerini yönetmek",
      "Sadece uygulama paketini imzalamak",
      "Telefonun GPS sinyalini yükseltmek",
      "Bütün UI durumunu global saklamak"
    ],
    a: 1,
    difficulty: "easy",
    week: 4,
    topic: "MVC",
    importance: 4,
    explanation: "Controller kullanıcı etkileşimlerini alır, Model ile View arasındaki akışı koordine eder."
  },

  {
    q: "MVVM mimarisinde ViewModel'in temel görevi nedir?",
    t: "mcq",
    o: [
      "Cihaz çekirdeğini güncellemek",
      "Uygulama mağazası gelirini hesaplamak",
      "View ile Model arasındaki veri bağlamayı sağlamak",
      "Sadece ağ paketlerini şifrelemek",
      "Veritabanı dosyasını silmek"
    ],
    a: 2,
    difficulty: "medium",
    week: 4,
    topic: "MVVM",
    importance: 5,
    explanation: "ViewModel, View ile Model arasında veri bağlama ve sunum mantığı görevini üstlenir."
  },

  {
    q: "Clean Architecture'da Frameworks & Drivers katmanı neyi temsil eder?",
    t: "mcq",
    o: [
      "Uygulamanın saf iş kurallarını",
      "Kullanım senaryolarını",
      "Entities nesnelerini",
      "UI, veritabanı ve ağ gibi dış bağımlılıkları",
      "Sadece sınav açıklamasını"
    ],
    a: 3,
    difficulty: "hard",
    week: 4,
    topic: "Clean Architecture",
    importance: 5,
    explanation: "Frameworks & Drivers katmanı UI, veritabanı, ağ ve framework gibi dış dünya detaylarını kapsar."
  },

  {
    q: "Responsive tasarımda kullanılan temel yaklaşımlar hangi seçenekte doğru verilmiştir?",
    t: "mcq",
    o: [
      "Garbage Collection, ARC ve OOM Killer",
      "ADB, fastboot ve logcat",
      "Entity, Use Case ve Presenter",
      "APK, IPA ve XIP",
      "Flex Layouts, Media Queries ve Aspect Ratios"
    ],
    a: 4,
    difficulty: "medium",
    week: 4,
    topic: "Responsive Tasarım",
    importance: 4,
    explanation: "Responsive tasarım farklı ekranlara uyum için esnek yerleşimler, medya sorguları ve görsel oran korumayı kullanır."
  }
];
