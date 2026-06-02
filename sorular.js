// Mobil Programlama – Yeni PDF'lerden 50 Soruluk Vize/Final Testi (MCQ)
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]
// Not: a = doğru şık index’i (0=A, 1=B, 2=C, 3=D, 4=E)

window.questionBank = [
  // =========================================================
  // ==== 5. HAFTA – Mobil Ağ Yapıları (10) ===================
  // =========================================================

  {
    q: "Mobil cihazların en yaygın bağlantı yöntemi hangisidir?",
    t: "mcq",
    o: [
      "Hücresel ağlar",
      "Kızılötesi ağlar",
      "Sadece Bluetooth",
      "Sadece NFC",
      "USB bağlantısı"
    ],
    a: 0,
    difficulty: "easy",
    week: 5,
    topic: "Mobil Ağ Türleri",
    importance: 5,
    explanation: "Hücresel ağlar, mobil cihazların en yaygın bağlantı yöntemidir."
  },
  {
    q: "Wi-Fi hangi ağ türüdür?",
    t: "mcq",
    o: [
      "Uydu tabanlı konum ağı",
      "Kablosuz yerel alan ağı",
      "Hücresel çekirdek ağı",
      "Yakın alan ödeme ağı",
      "Kablolu geniş alan ağı"
    ],
    a: 1,
    difficulty: "easy",
    week: 5,
    topic: "Wi-Fi",
    importance: 4,
    explanation: "Wi-Fi, kısa mesafede kullanılan kablosuz yerel alan ağıdır."
  },
  {
    q: "NFC yaklaşık hangi mesafede çalışır?",
    t: "mcq",
    o: [
      "1 kilometre",
      "500 metre",
      "10 cm",
      "50 metre",
      "10 kilometre"
    ],
    a: 2,
    difficulty: "easy",
    week: 5,
    topic: "NFC",
    importance: 4,
    explanation: "NFC çok kısa mesafede, yaklaşık 10 cm civarında çalışan iletişim teknolojisidir."
  },
  {
    q: "GPS ne için kullanılır?",
    t: "mcq",
    o: [
      "Dosya sıkıştırmak",
      "Video oynatmak",
      "Ses kaydetmek",
      "Konum belirlemek",
      "Veritabanı silmek"
    ],
    a: 3,
    difficulty: "easy",
    week: 5,
    topic: "GPS",
    importance: 5,
    explanation: "GPS, uydu üzerinden konum belirleme için kullanılır."
  },
  {
    q: "Bluetooth'un temel kullanım alanı hangisidir?",
    t: "mcq",
    o: [
      "Uzay haberleşmesi",
      "Harita çizimi",
      "REST API çağrısı",
      "Sunucu barındırma",
      "Yakın mesafe veri aktarımı"
    ],
    a: 4,
    difficulty: "easy",
    week: 5,
    topic: "Bluetooth",
    importance: 4,
    explanation: "Bluetooth, yakın mesafede düşük enerjiyle veri aktarımı sağlar."
  },
  {
    q: "UE açılımı mobil ağlarda neyi ifade eder?",
    t: "mcq",
    o: [
      "User Equipment",
      "Universal Engine",
      "Unit Extension",
      "Upload Environment",
      "User Emulator"
    ],
    a: 0,
    difficulty: "medium",
    week: 5,
    topic: "Ağ Mimarisi",
    importance: 5,
    explanation: "UE, User Equipment yani telefon/tablet gibi son kullanıcı cihazını ifade eder."
  },
  {
    q: "Baz istasyonu hangi görevi üstlenir?",
    t: "mcq",
    o: [
      "Uygulama paketini imzalar",
      "Mobil cihazların bağlandığı ilk ağ noktasıdır",
      "Veritabanı tablolarını oluşturur",
      "UI bileşenlerini çizer",
      "Sensör verisini temizler"
    ],
    a: 1,
    difficulty: "medium",
    week: 5,
    topic: "Baz İstasyonu",
    importance: 5,
    explanation: "Baz istasyonu, hücresel ağlarda cihazların bağlandığı ilk noktadır."
  },
  {
    q: "4G LTE'nin önemli avantajı hangisidir?",
    t: "mcq",
    o: [
      "Sadece SMS desteği",
      "Analog ses iletimi",
      "Yüksek hız ve düşük gecikme",
      "Sadece kısa mesafe iletişim",
      "Çevrimdışı harita depolama"
    ],
    a: 2,
    difficulty: "medium",
    week: 5,
    topic: "4G LTE",
    importance: 5,
    explanation: "4G LTE yüksek hızlı veri aktarımı ve düşük gecikme sunar."
  },
  {
    q: "5G'deki Network Slicing neyi ifade eder?",
    t: "mcq",
    o: [
      "Ekranı bölmeyi",
      "Veritabanını yedeklemeyi",
      "Uygulamayı küçültmeyi",
      "Sanal ağ dilimleri oluşturmayı",
      "Bluetooth eşleştirmeyi"
    ],
    a: 3,
    difficulty: "hard",
    week: 5,
    topic: "5G",
    importance: 4,
    explanation: "Network Slicing, farklı kullanım senaryoları için sanal ağ dilimleri oluşturulmasıdır."
  },
  {
    q: "MQTT en çok hangi alanla ilişkilidir?",
    t: "mcq",
    o: [
      "Video düzenleme",
      "UI tasarımı",
      "Harita yakınlaştırma",
      "Ses çalma",
      "IoT cihazları"
    ],
    a: 4,
    difficulty: "medium",
    week: 5,
    topic: "Ağ Protokolleri",
    importance: 4,
    explanation: "MQTT, IoT cihazları için hafif bir iletişim protokolüdür."
  },

  // =========================================================
  // ==== 8. HAFTA – Mobil Arayüz Geliştirme (8) ==============
  // =========================================================

  {
    q: "Mobil arayüz geliştirme neyi oluşturur?",
    t: "mcq",
    o: [
      "Kullanıcının gördüğü ekranları",
      "Cihazın çekirdeğini",
      "Baz istasyonunu",
      "SIM kart belleğini",
      "Sunucu donanımını"
    ],
    a: 0,
    difficulty: "easy",
    week: 8,
    topic: "Mobil Arayüz",
    importance: 5,
    explanation: "Mobil arayüz geliştirme, kullanıcının gördüğü ve etkileşim kurduğu ekranların oluşturulmasıdır."
  },
  {
    q: "UX sürecinde wireframe neyi ifade eder?",
    t: "mcq",
    o: [
      "Uygulama mağazası kaydını",
      "Tasarımın iskeletini",
      "Veritabanı şemasını",
      "APK imza dosyasını",
      "Bluetooth bağlantısını"
    ],
    a: 1,
    difficulty: "medium",
    week: 8,
    topic: "Wireframe",
    importance: 5,
    explanation: "Wireframe, ekran yerleşiminin temel iskeletini gösteren taslak yapıdır."
  },
  {
    q: "Tutarlılık prensibi neyi önerir?",
    t: "mcq",
    o: [
      "Her ekranda farklı yapı kullanmayı",
      "Animasyonları tamamen kaldırmayı",
      "Benzer ekranlarda benzer yapı kullanmayı",
      "Sadece tek renk kullanmayı",
      "Verileri bellekte saklamayı"
    ],
    a: 2,
    difficulty: "easy",
    week: 8,
    topic: "Tasarım Prensipleri",
    importance: 5,
    explanation: "Tutarlılık, uygulama ekranlarında benzer yapı ve davranışların korunmasını sağlar."
  },
  {
    q: "Geri bildirim prensibi hangi örnekle açıklanır?",
    t: "mcq",
    o: [
      "Uygulamayı kapatmak",
      "Veriyi silmek",
      "Kodu derlemek",
      "Butona basınca animasyon göstermek",
      "Ağ paketini yakalamak"
    ],
    a: 3,
    difficulty: "easy",
    week: 8,
    topic: "Geri Bildirim",
    importance: 4,
    explanation: "Kullanıcı işlem yaptığında sistemin görsel/işitsel tepki vermesi geri bildirimdir."
  },
  {
    q: "TextField bileşeninin görevi nedir?",
    t: "mcq",
    o: [
      "Harita çizmek",
      "Ses oynatmak",
      "Konum almak",
      "Bildirim göndermek",
      "Kullanıcıdan veri almak"
    ],
    a: 4,
    difficulty: "easy",
    week: 8,
    topic: "UI Bileşenleri",
    importance: 5,
    explanation: "TextField, kullanıcıdan metin veya veri girişi almak için kullanılır."
  },
  {
    q: "Card bileşeni genelde ne için kullanılır?",
    t: "mcq",
    o: [
      "Bilgileri gruplamak için",
      "GPS izni istemek için",
      "Ses dosyası çalmak için",
      "Ağ protokolü seçmek için",
      "Harita döşemesi indirmek için"
    ],
    a: 0,
    difficulty: "easy",
    week: 8,
    topic: "UI Bileşenleri",
    importance: 4,
    explanation: "Card, arayüzde bilgileri düzenli ve gruplu göstermek için kullanılır."
  },
  {
    q: "Safe Area hangi platformla özellikle ilişkilidir?",
    t: "mcq",
    o: [
      "Android Room",
      "iOS",
      "TCP/IP",
      "Bluetooth",
      "OSMDroid"
    ],
    a: 1,
    difficulty: "medium",
    week: 8,
    topic: "Yerleşim",
    importance: 4,
    explanation: "Safe Area, iOS’ta çentik ve alt bar gibi alanlara içerik taşmasını önler."
  },
  {
    q: "Figma ne için kullanılır?",
    t: "mcq",
    o: [
      "Sensör dinlemek için",
      "Konum izni almak için",
      "UI/UX tasarım ve prototipleme için",
      "REST API kurmak için",
      "Bluetooth eşleştirmek için"
    ],
    a: 2,
    difficulty: "easy",
    week: 8,
    topic: "Prototipleme",
    importance: 5,
    explanation: "Figma, UI/UX tasarım ve prototipleme için kullanılan popüler bir araçtır."
  },

  // =========================================================
  // ==== 10. HAFTA – Yer Bildirimi ve Harita Kullanımı (9) ====
  // =========================================================

  {
    q: "GPS doğruluk seviyesi genellikle kaç metredir?",
    t: "mcq",
    o: [
      "1-10 km",
      "500-1000 m",
      "100-500 m",
      "5-50 m",
      "10-20 km"
    ],
    a: 3,
    difficulty: "medium",
    week: 10,
    topic: "Konum Doğruluğu",
    importance: 5,
    explanation: "Ders notuna göre GPS yüksek doğrulukta yaklaşık 5-50 metre aralığındadır."
  },
  {
    q: "IP tabanlı konum doğruluğu hangisidir?",
    t: "mcq",
    o: [
      "5-50 m",
      "10-20 m",
      "50-500 m",
      "100 m",
      "1-10 km"
    ],
    a: 4,
    difficulty: "medium",
    week: 10,
    topic: "Konum Doğruluğu",
    importance: 4,
    explanation: "IP tabanlı konum düşük doğruluk sunar ve yaklaşık 1-10 km aralığında olabilir."
  },
  {
    q: "ACCESS_FINE_LOCATION hangi izinle ilgilidir?",
    t: "mcq",
    o: [
      "Yüksek doğruluklu konum",
      "Ses kaydı",
      "Video oynatma",
      "Bluetooth eşleştirme",
      "Dosya silme"
    ],
    a: 0,
    difficulty: "easy",
    week: 10,
    topic: "Android Konum İzinleri",
    importance: 5,
    explanation: "ACCESS_FINE_LOCATION yüksek doğruluklu konum erişimi için kullanılır."
  },
  {
    q: "ACCESS_COARSE_LOCATION hangi konumu ifade eder?",
    t: "mcq",
    o: [
      "Arka plan kamera",
      "Düşük/yaklaşık konum",
      "Ses çalma",
      "NFC ödeme",
      "Video sıkıştırma"
    ],
    a: 1,
    difficulty: "easy",
    week: 10,
    topic: "Android Konum İzinleri",
    importance: 5,
    explanation: "ACCESS_COARSE_LOCATION yaklaşık/düşük doğruluklu konum erişimi sağlar."
  },
  {
    q: "LocationRequest interval = 10000 ne anlama gelir?",
    t: "mcq",
    o: [
      "1 saniyede bir güncelleme",
      "5 saniyede bir güncelleme",
      "10 saniyede bir güncelleme",
      "100 saniyede bir güncelleme",
      "Konum kapalı"
    ],
    a: 2,
    difficulty: "medium",
    week: 10,
    topic: "Konum Güncellemeleri",
    importance: 4,
    explanation: "10000 milisaniye, 10 saniyede bir konum güncellemesi anlamına gelir."
  },
  {
    q: "Google Maps bağımlılığı hangi dosyaya eklenir?",
    t: "mcq",
    o: [
      "AndroidManifest.xml",
      "strings.xml",
      "colors.xml",
      "build.gradle",
      "activity_main.xml"
    ],
    a: 3,
    difficulty: "medium",
    week: 10,
    topic: "Google Maps",
    importance: 4,
    explanation: "Google Maps veya OSMDroid gibi kütüphane bağımlılıkları Gradle dosyasına eklenir."
  },
  {
    q: "OSMDroid hangi amaçla kullanılır?",
    t: "mcq",
    o: [
      "Ses kaydı almak",
      "Video sıkıştırmak",
      "Sensör kalibre etmek",
      "Bildirim göndermek",
      "Android'de harita göstermek"
    ],
    a: 4,
    difficulty: "easy",
    week: 10,
    topic: "OSMDroid",
    importance: 5,
    explanation: "OSMDroid, Android uygulamalarında harita gösterimi için kullanılan bir kütüphanedir."
  },
  {
    q: "MapView hangi iş için kullanılır?",
    t: "mcq",
    o: [
      "Harita görünümü göstermek",
      "Ses oynatmak",
      "Görev silmek",
      "SMS göndermek",
      "Resim sıkıştırmak"
    ],
    a: 0,
    difficulty: "easy",
    week: 10,
    topic: "MapView",
    importance: 5,
    explanation: "MapView, uygulama içinde harita görünümü göstermek için kullanılır."
  },
  {
    q: "Marker neyi temsil eder?",
    t: "mcq",
    o: [
      "Ses dosyasını",
      "Haritadaki işaretli noktayı",
      "Liste adaptörünü",
      "Metin giriş alanını",
      "Video oynatıcıyı"
    ],
    a: 1,
    difficulty: "easy",
    week: 10,
    topic: "Marker",
    importance: 5,
    explanation: "Marker, harita üzerinde belirli bir noktayı işaretlemek için kullanılır."
  },

  // =========================================================
  // ==== 11. HAFTA – Çoklu Ortam Uygulamaları (8) ============
  // =========================================================

  {
    q: "Çoklu ortam hangi veri türlerini birleştirir?",
    t: "mcq",
    o: [
      "Sadece metin",
      "Sadece konum",
      "Metin, görsel, ses, video ve animasyon",
      "Sadece ağ protokolü",
      "Sadece veritabanı"
    ],
    a: 2,
    difficulty: "easy",
    week: 11,
    topic: "Çoklu Ortam",
    importance: 5,
    explanation: "Çoklu ortam; metin, grafik/görsel, ses, video ve animasyon gibi veri türlerinin birleşimidir."
  },
  {
    q: "MediaPlayer Android'de ne için kullanılır?",
    t: "mcq",
    o: [
      "Harita çizmek",
      "Konum almak",
      "Metin girmek",
      "Ses oynatmak",
      "Görev silmek"
    ],
    a: 3,
    difficulty: "easy",
    week: 11,
    topic: "MediaPlayer",
    importance: 5,
    explanation: "MediaPlayer, Android'de ses dosyalarını oynatmak için kullanılır."
  },
  {
    q: "VideoView hangi amaçla kullanılır?",
    t: "mcq",
    o: [
      "Sensör okumak",
      "REST API çağırmak",
      "Görev listelemek",
      "Yakınlık ölçmek",
      "Video oynatmak"
    ],
    a: 4,
    difficulty: "easy",
    week: 11,
    topic: "VideoView",
    importance: 5,
    explanation: "VideoView, Android uygulamalarında video oynatmak için kullanılan bileşendir."
  },
  {
    q: "ExoPlayer hangi işte öne çıkar?",
    t: "mcq",
    o: [
      "Gelişmiş video oynatma",
      "Metin girişi",
      "Konum izni",
      "Liste silme",
      "NFC ödeme"
    ],
    a: 0,
    difficulty: "medium",
    week: 11,
    topic: "ExoPlayer",
    importance: 4,
    explanation: "ExoPlayer, Android tarafında gelişmiş video oynatma için kullanılan popüler araçtır."
  },
  {
    q: "AVFoundation hangi platformla ilişkilidir?",
    t: "mcq",
    o: [
      "Android",
      "iOS",
      "Windows Phone",
      "Linux Kernel",
      "Firebase"
    ],
    a: 1,
    difficulty: "easy",
    week: 11,
    topic: "AVFoundation",
    importance: 5,
    explanation: "AVFoundation, iOS tarafında ses ve video işlemleri için kullanılan framework'tür."
  },
  {
    q: "Glide ve Picasso ne için kullanılır?",
    t: "mcq",
    o: [
      "Harita işaretlemek",
      "GPS doğruluğu ölçmek",
      "Android'de resim yüklemek",
      "Bluetooth eşleştirmek",
      "Veri tabanı kurmak"
    ],
    a: 2,
    difficulty: "medium",
    week: 11,
    topic: "Görsel Yükleme",
    importance: 4,
    explanation: "Glide ve Picasso, Android uygulamalarında resim yükleme işlemleri için kullanılır."
  },
  {
    q: "FFmpeg hangi işlemlerle ilişkilidir?",
    t: "mcq",
    o: [
      "Konum izni isteme",
      "UI hizalama",
      "Liste güncelleme",
      "Dönüştürme ve sıkıştırma",
      "Görev ekleme"
    ],
    a: 3,
    difficulty: "hard",
    week: 11,
    topic: "FFmpeg",
    importance: 4,
    explanation: "FFmpeg medya dönüştürme, sıkıştırma ve streaming işlemleriyle ilişkilidir."
  },
  {
    q: "Lazy loading medya yönetiminde ne sağlar?",
    t: "mcq",
    o: [
      "Tüm medyayı başta yükler",
      "Konumu sürekli izler",
      "Sensörü kapatır",
      "Veritabanı oluşturur",
      "İçeriği gerektiğinde yükler"
    ],
    a: 4,
    difficulty: "medium",
    week: 11,
    topic: "Performans",
    importance: 5,
    explanation: "Lazy loading, medya veya içeriğin yalnızca ihtiyaç olduğunda yüklenmesini sağlar."
  },

  // =========================================================
  // ==== 12. HAFTA – Sensör Uygulamaları (8) =================
  // =========================================================

  {
    q: "Sensör nedir?",
    t: "mcq",
    o: [
      "Çevresel bilgiyi dijital veriye dönüştüren bileşen",
      "Sadece uygulama teması",
      "Ağ protokolü",
      "Liste adaptörü",
      "Harita işaretleyici"
    ],
    a: 0,
    difficulty: "easy",
    week: 12,
    topic: "Sensör Tanımı",
    importance: 5,
    explanation: "Sensörler çevresel bilgileri algılar ve dijital verilere dönüştürür."
  },
  {
    q: "Android'de sensörlere hangi sınıfla erişilir?",
    t: "mcq",
    o: [
      "MediaPlayer",
      "SensorManager",
      "ArrayAdapter",
      "MapView",
      "VideoView"
    ],
    a: 1,
    difficulty: "easy",
    week: 12,
    topic: "SensorManager",
    importance: 5,
    explanation: "Android'de sensörlere SensorManager sınıfı üzerinden erişilir."
  },
  {
    q: "TYPE_ACCELEROMETER hangi sensörü ifade eder?",
    t: "mcq",
    o: [
      "Işık sensörü",
      "Barometre",
      "İvmeölçer",
      "GPS",
      "Yakınlık sensörü"
    ],
    a: 2,
    difficulty: "easy",
    week: 12,
    topic: "İvmeölçer",
    importance: 5,
    explanation: "TYPE_ACCELEROMETER, ivmeölçer sensörünü ifade eder."
  },
  {
    q: "onSensorChanged ne zaman çalışır?",
    t: "mcq",
    o: [
      "Uygulama silinince",
      "Video başlayınca",
      "Liste boşalınca",
      "Sensör verisi değişince",
      "Harita kapanınca"
    ],
    a: 3,
    difficulty: "medium",
    week: 12,
    topic: "SensorEventListener",
    importance: 5,
    explanation: "onSensorChanged, sensörden gelen değerler değiştiğinde tetiklenir."
  },
  {
    q: "event.values[0] genellikle hangi ekseni verir?",
    t: "mcq",
    o: [
      "Y ekseni",
      "Z ekseni",
      "Işık değeri",
      "Konum değeri",
      "X ekseni"
    ],
    a: 4,
    difficulty: "medium",
    week: 12,
    topic: "Sensör Verileri",
    importance: 4,
    explanation: "İvmeölçer örneğinde event.values[0] x eksenindeki değeri verir."
  },
  {
    q: "registerListener ne için kullanılır?",
    t: "mcq",
    o: [
      "Sensör dinlemeyi başlatmak için",
      "Video dosyasını açmak için",
      "Harita işaretlemek için",
      "Görev silmek için",
      "Metin temizlemek için"
    ],
    a: 0,
    difficulty: "medium",
    week: 12,
    topic: "Sensör Dinleme",
    importance: 5,
    explanation: "registerListener, belirli bir sensörü dinlemeye başlamak için kullanılır."
  },
  {
    q: "Sürekli sensör dinleme hangi riski artırır?",
    t: "mcq",
    o: [
      "UI güzelliğini",
      "Pil tüketimini",
      "APK adını",
      "Liste uzunluğunu",
      "Harita başlığını"
    ],
    a: 1,
    difficulty: "easy",
    week: 12,
    topic: "Güç Tüketimi",
    importance: 5,
    explanation: "Sürekli sensör dinlemek bataryayı hızlı tüketebilir."
  },
  {
    q: "getDefaultSensor(...) != null kontrolü ne içindir?",
    t: "mcq",
    o: [
      "Konum doğruluğunu artırmak için",
      "Video kalitesini seçmek için",
      "Cihazda sensör var mı kontrol etmek için",
      "Listeyi temizlemek için",
      "Toast göstermek için"
    ],
    a: 2,
    difficulty: "medium",
    week: 12,
    topic: "Cihaz Uyumluluğu",
    importance: 5,
    explanation: "Her cihaz her sensörü desteklemez; bu kontrol sensörün varlığını sınamak için yapılır."
  },

  // =========================================================
  // ==== 14. HAFTA – Proje Çalışması / To-Do App (7) =========
  // =========================================================

  {
    q: "To-Do App'in temel amacı nedir?",
    t: "mcq",
    o: [
      "Harita göstermek",
      "Video oynatmak",
      "Sensör ölçmek",
      "Görevleri listeleyip yönetmek",
      "Ağ protokolü test etmek"
    ],
    a: 3,
    difficulty: "easy",
    week: 14,
    topic: "To-Do App",
    importance: 5,
    explanation: "To-Do App, kullanıcının görevleri ekleyip listeleyebildiği basit görev takip uygulamasıdır."
  },
  {
    q: "EditText ne için kullanılır?",
    t: "mcq",
    o: [
      "Görevleri listelemek için",
      "Harita yakınlaştırmak için",
      "Ses oynatmak için",
      "Konum almak için",
      "Görev metni girmek için"
    ],
    a: 4,
    difficulty: "easy",
    week: 14,
    topic: "EditText",
    importance: 5,
    explanation: "EditText, kullanıcının görev metni girmesi için kullanılır."
  },
  {
    q: "ListView hangi görevi yapar?",
    t: "mcq",
    o: [
      "Görevleri listeler",
      "Ses çalar",
      "GPS açar",
      "Sensör dinler",
      "Video sıkıştırır"
    ],
    a: 0,
    difficulty: "easy",
    week: 14,
    topic: "ListView",
    importance: 5,
    explanation: "ListView, eklenen görevlerin listelendiği UI bileşenidir."
  },
  {
    q: "ArrayList<String> projede neyi tutar?",
    t: "mcq",
    o: [
      "Harita noktalarını",
      "Görevleri geçici olarak",
      "Ses dosyalarını",
      "Kamera görüntülerini",
      "Kullanıcı izinlerini"
    ],
    a: 1,
    difficulty: "medium",
    week: 14,
    topic: "ArrayList",
    importance: 5,
    explanation: "ArrayList<String>, görevleri uygulama çalıştığı sürece bellekte geçici olarak tutar."
  },
  {
    q: "ArrayAdapter'ın görevi nedir?",
    t: "mcq",
    o: [
      "Konum izni istemek",
      "Video oynatmak",
      "Liste verisi ile ListView arasında köprü olmak",
      "Sensör hassasiyeti ayarlamak",
      "Harita indirmek"
    ],
    a: 2,
    difficulty: "medium",
    week: 14,
    topic: "ArrayAdapter",
    importance: 5,
    explanation: "ArrayAdapter, ArrayList içindeki veriyi ListView ile bağlar."
  },
  {
    q: "notifyDataSetChanged() ne işe yarar?",
    t: "mcq",
    o: [
      "Haritayı yakınlaştırır",
      "Sensörü kapatır",
      "Ses başlatır",
      "Liste görünümünü günceller",
      "Konum izni ister"
    ],
    a: 3,
    difficulty: "medium",
    week: 14,
    topic: "Liste Güncelleme",
    importance: 5,
    explanation: "notifyDataSetChanged(), veri değiştiğinde ListView'ın güncellenmesini sağlar."
  },
  {
    q: "Boş görev girilirse kullanıcıya ne gösterilir?",
    t: "mcq",
    o: [
      "Marker",
      "MapView",
      "VideoView",
      "MediaPlayer",
      "Toast"
    ],
    a: 4,
    difficulty: "easy",
    week: 14,
    topic: "Toast",
    importance: 5,
    explanation: "Boş görev girildiğinde kullanıcıya Toast ile kısa uyarı gösterilir."
  }
];
