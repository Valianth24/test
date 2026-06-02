// Mobil Programlama – 100 Aldırmaya Yönelik Öğretici Vize Testi (MCQ)
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]
// Not: a = doğru şık index’i (0=A, 1=B, 2=C, 3=D, 4=E)

window.questionBank = [
  // =========================================================
  // ==== 5. HAFTA – Mobil Ağ Yapıları / Vize Kritik (10) =====
  // =========================================================

  {
    q: "Mobil cihazların en yaygın bağlantı yöntemi hangisidir?",
    t: "mcq",
    o: [
      "Hücresel ağlar",
      "Sadece NFC",
      "Sadece USB",
      "Kızılötesi",
      "Yerel dosya sistemi"
    ],
    a: 0,
    difficulty: "easy",
    week: 5,
    topic: "Mobil Ağ Türleri",
    importance: 5,
    explanation: "Vize ipucu: Mobil ağ türleri içinde en genel ve yaygın bağlantı hücresel ağdır. 2G, 3G, 4G ve 5G bu başlığın altındadır."
  },

  {
    q: "2G hangi hizmetlerle ilişkilidir?",
    t: "mcq",
    o: [
      "Yüksek hızlı video akışı",
      "Temel ses ve düşük hızlı veri",
      "1 ms gecikme",
      "mmWave bağlantı",
      "OSMDroid harita"
    ],
    a: 1,
    difficulty: "easy",
    week: 5,
    topic: "2G",
    importance: 5,
    explanation: "2G; GSM/EDGE ile temel sesli iletişim, SMS ve düşük hızlı veri hizmetleriyle bilinir. 4G/5G özellikleriyle karıştırma."
  },

  {
    q: "3G'nin ayırt edici katkısı nedir?",
    t: "mcq",
    o: [
      "Sadece analog ses",
      "10 cm iletişim",
      "Mobil internetin yaygınlaşması",
      "Çevrimdışı harita",
      "Liste güncelleme"
    ],
    a: 2,
    difficulty: "easy",
    week: 5,
    topic: "3G",
    importance: 5,
    explanation: "3G; UMTS/HSPA ile daha yüksek veri hızı ve mobil internetin yaygınlaşması dönemidir."
  },

  {
    q: "4G LTE için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Sadece SMS sağlar",
      "Yaklaşık 10 cm çalışır",
      "Sensör verisi üretir",
      "Yüksek hızlı veri ve VoIP sağlar",
      "Sadece Bluetooth'tur"
    ],
    a: 3,
    difficulty: "medium",
    week: 5,
    topic: "4G LTE",
    importance: 5,
    explanation: "4G/LTE; yüksek hızlı veri, video akışı, VoIP ve düşük gecikmeyle öne çıkar."
  },

  {
    q: "5G'nin vizede en çok sorulabilecek özelliği hangisidir?",
    t: "mcq",
    o: [
      "Sadece ses",
      "Düşük hızlı veri",
      "Kablolu bağlantı",
      "Sadece SMS",
      "Düşük gecikme ve yüksek hız"
    ],
    a: 4,
    difficulty: "easy",
    week: 5,
    topic: "5G",
    importance: 5,
    explanation: "5G denince sınavda genelde yüksek hız, düşük gecikme ve çok sayıda cihaz bağlantısı beklenir."
  },

  {
    q: "Wi-Fi'nin açılımı ders notunda hangi kavramla verilmiştir?",
    t: "mcq",
    o: [
      "Kablosuz Yerel Alan Ağı",
      "Küresel Konum Sistemi",
      "Yakın Alan İletişimi",
      "Çekirdek Ağ",
      "Ağ Geçidi"
    ],
    a: 0,
    difficulty: "easy",
    week: 5,
    topic: "Wi-Fi",
    importance: 4,
    explanation: "Wi-Fi, WLAN yani Kablosuz Yerel Alan Ağı olarak düşünülmelidir. Kısa mesafe, hızlı ve düşük maliyetli bağlantı sağlar."
  },

  {
    q: "NFC'nin ayırt edici mesafe özelliği nedir?",
    t: "mcq",
    o: [
      "1 km çalışır",
      "Yaklaşık 10 cm çalışır",
      "Sadece uydudan çalışır",
      "Sadece kablolu çalışır",
      "Sadece 5G ile çalışır"
    ],
    a: 1,
    difficulty: "easy",
    week: 5,
    topic: "NFC",
    importance: 5,
    explanation: "NFC çok kısa mesafede çalışır. Mobil ödeme ve hızlı eşleştirme sorularında doğru cevap genellikle NFC'dir."
  },

  {
    q: "Gateway'in temel görevi nedir?",
    t: "mcq",
    o: [
      "Sensör dinlemek",
      "Video oynatmak",
      "Ağlar arasında geçiş sağlamak",
      "Görev metni almak",
      "Liste göstermek"
    ],
    a: 2,
    difficulty: "medium",
    week: 5,
    topic: "Ağ Mimarisi",
    importance: 4,
    explanation: "Gateway, mobil ağ ile internet veya başka ağlar arasında geçiş sağlar. Türkçesi ağ geçididir."
  },

  {
    q: "WebSocket en çok hangi kullanım için uygundur?",
    t: "mcq",
    o: [
      "Statik resim göstermek",
      "Boş görev uyarmak",
      "Harita izni almak",
      "Anlık mesajlaşma",
      "XML layout çizmek"
    ],
    a: 3,
    difficulty: "medium",
    week: 5,
    topic: "WebSocket",
    importance: 5,
    explanation: "Anlık iletişim, canlı veri ve oyun gibi gerçek zamanlı senaryolarda WebSocket sorulur."
  },

  {
    q: "MQTT hangi alan için hafif protokoldür?",
    t: "mcq",
    o: [
      "Video düzenleme",
      "UI prototipleme",
      "Konum izni",
      "Resim yükleme",
      "IoT cihazları"
    ],
    a: 4,
    difficulty: "medium",
    week: 5,
    topic: "MQTT",
    importance: 4,
    explanation: "MQTT, IoT cihazları için hafif mesajlaşma protokolüdür. Vizede 'hafif protokol' ifadesi MQTT'yi işaret eder."
  },

  // =========================================================
  // ==== 8. HAFTA – Mobil Arayüz / UI-UX Vize Kritik (8) =====
  // =========================================================

  {
    q: "Mobil arayüz, uygulamanın hangi yönüdür?",
    t: "mcq",
    o: [
      "Kullanıcının gördüğü ve etkileştiği yüzü",
      "Cihazın bataryası",
      "Sunucu işlemcisi",
      "GPS uydusu",
      "Ağ geçidi"
    ],
    a: 0,
    difficulty: "easy",
    week: 8,
    topic: "Mobil Arayüz",
    importance: 5,
    explanation: "Mobil arayüz, kullanıcının uygulamada gördüğü ekranlar ve etkileşim kurduğu bileşenlerden oluşur."
  },

  {
    q: "UX en kısa şekilde neyi ifade eder?",
    t: "mcq",
    o: [
      "Sadece renk seçimi",
      "Kullanıcı deneyimi",
      "Veritabanı ilişkisi",
      "Dosya yolu",
      "Ağ protokolü"
    ],
    a: 1,
    difficulty: "easy",
    week: 8,
    topic: "UX",
    importance: 5,
    explanation: "UX, kullanıcının uygulamayı kullanırken yaşadığı deneyimdir. Güzel tasarım tek başına iyi UX anlamına gelmez."
  },

  {
    q: "Wireframe ne için kullanılır?",
    t: "mcq",
    o: [
      "Konum izni almak için",
      "Video oynatmak için",
      "Ekran iskeletini göstermek için",
      "Sensör ölçmek için",
      "APK imzalamak için"
    ],
    a: 2,
    difficulty: "medium",
    week: 8,
    topic: "Wireframe",
    importance: 5,
    explanation: "Wireframe, ekranın kaba yerleşim planıdır. Renkten önce yapı ve akış düşünülür."
  },

  {
    q: "Prototip neyi temsil eder?",
    t: "mcq",
    o: [
      "Ham sensör verisini",
      "Ağ geçidini",
      "Boş görev uyarısını",
      "Etkileşimli taslak ekranı",
      "Konum doğruluğunu"
    ],
    a: 3,
    difficulty: "medium",
    week: 8,
    topic: "Prototip",
    importance: 4,
    explanation: "Prototip, kullanıcının akışı deneyebildiği etkileşimli taslaktır. Wireframe'den bir adım daha etkileşimlidir."
  },

  {
    q: "Hiyerarşi prensibi neyi amaçlar?",
    t: "mcq",
    o: [
      "Tüm bilgileri aynı göstermek",
      "Verileri silmek",
      "Pil tüketimini artırmak",
      "Konumu kapatmak",
      "Önemli bilgiyi daha görünür yapmak"
    ],
    a: 4,
    difficulty: "easy",
    week: 8,
    topic: "Tasarım Prensipleri",
    importance: 5,
    explanation: "Hiyerarşi, kullanıcının önce neye bakacağını belirler. Sınavda 'önemli bilgi daha görünür' ifadesi hiyerarşidir."
  },

  {
    q: "White Space ne işe yarar?",
    t: "mcq",
    o: [
      "Bilgi yoğunluğunu azaltır",
      "Sensörü başlatır",
      "Video sıkıştırır",
      "Harita çizer",
      "Konum izni ister"
    ],
    a: 0,
    difficulty: "medium",
    week: 8,
    topic: "Görsel Tasarım",
    importance: 4,
    explanation: "White Space boşluk kullanımıdır. Arayüzü ferahlatır, okunabilirliği artırır."
  },

  {
    q: "Button bileşeni ne yapar?",
    t: "mcq",
    o: [
      "Konum ölçer",
      "Tıklanabilir eylem tetikler",
      "Harita kaynağıdır",
      "Ses dosyasıdır",
      "Veri tabanıdır"
    ],
    a: 1,
    difficulty: "easy",
    week: 8,
    topic: "UI Bileşeni",
    importance: 5,
    explanation: "Button, kullanıcı tıklayınca bir eylem başlatır. To-Do uygulamasında görev ekleme butonu buna örnektir."
  },

  {
    q: "TextField hangi amaçla kullanılır?",
    t: "mcq",
    o: [
      "Video oynatmak",
      "GPS açmak",
      "Kullanıcıdan veri almak",
      "Marker eklemek",
      "Sensör durdurmak"
    ],
    a: 2,
    difficulty: "easy",
    week: 8,
    topic: "UI Bileşeni",
    importance: 5,
    explanation: "TextField veya EditText, kullanıcının metin/veri girmesi için kullanılır."
  },

  // =========================================================
  // ==== 10. HAFTA – Konum ve Harita / Vize Kritik (12) ======
  // =========================================================

  {
    q: "GPS doğruluk aralığı ders notunda nasıl verilmiştir?",
    t: "mcq",
    o: [
      "1-10 km",
      "50-500 m",
      "500 m-1 km",
      "5-50 m",
      "10-20 km"
    ],
    a: 3,
    difficulty: "medium",
    week: 10,
    topic: "Konum Doğruluğu",
    importance: 5,
    explanation: "Yüksek doğruluk GPS ile sağlanır ve ders notunda 5-50 metre aralığı verilmiştir."
  },

  {
    q: "IP tabanlı konum hangi doğruluk seviyesindedir?",
    t: "mcq",
    o: [
      "5-50 m",
      "10-20 m",
      "50-500 m",
      "1 metre",
      "1-10 km"
    ],
    a: 4,
    difficulty: "medium",
    week: 10,
    topic: "Konum Doğruluğu",
    importance: 5,
    explanation: "IP tabanlı konum düşük doğruluktur. Ders notunda 1-10 km aralığı verilmiştir."
  },

  {
    q: "ACCESS_FINE_LOCATION ne sağlar?",
    t: "mcq",
    o: [
      "Yüksek doğruluklu konum erişimi",
      "Video oynatma",
      "Ses kaydı",
      "Liste güncelleme",
      "Boş görev uyarısı"
    ],
    a: 0,
    difficulty: "easy",
    week: 10,
    topic: "Android Konum İzinleri",
    importance: 5,
    explanation: "FINE kelimesi 'hassas' anlamına gelir. ACCESS_FINE_LOCATION yüksek doğruluklu konum iznidir."
  },

  {
    q: "ACCESS_COARSE_LOCATION ne sağlar?",
    t: "mcq",
    o: [
      "Arka plan video",
      "Yaklaşık konum erişimi",
      "Ses sıkıştırma",
      "Marker başlığı",
      "Bluetooth eşleştirme"
    ],
    a: 1,
    difficulty: "easy",
    week: 10,
    topic: "Android Konum İzinleri",
    importance: 5,
    explanation: "COARSE yaklaşık/kaba konumdur. FINE kadar hassas değildir."
  },

  {
    q: "ACCESS_BACKGROUND_LOCATION ne için kullanılır?",
    t: "mcq",
    o: [
      "Sadece UI çizmek için",
      "Video başlatmak için",
      "Arka planda konum almak için",
      "Toast göstermek için",
      "Liste adaptörü kurmak için"
    ],
    a: 2,
    difficulty: "medium",
    week: 10,
    topic: "Android Konum İzinleri",
    importance: 5,
    explanation: "BACKGROUND kelimesi arka planı gösterir. Uygulama önde değilken konum almak için kullanılır."
  },

  {
    q: "LocationRequest interval = 10000 ne demektir?",
    t: "mcq",
    o: [
      "1 saniyede bir",
      "5 saniyede bir",
      "100 saniyede bir",
      "10 saniyede bir",
      "Konum kapalı"
    ],
    a: 3,
    difficulty: "medium",
    week: 10,
    topic: "Konum Güncellemeleri",
    importance: 4,
    explanation: "10000 milisaniye 10 saniyedir. Vizede milisaniye-saniye dönüşümü sorulabilir."
  },

  {
    q: "fastestInterval = 5000 ne anlama gelir?",
    t: "mcq",
    o: [
      "50 saniye",
      "10 saniye",
      "1 dakika",
      "Konum yok",
      "En hızlı 5 saniye"
    ],
    a: 4,
    difficulty: "medium",
    week: 10,
    topic: "Konum Güncellemeleri",
    importance: 4,
    explanation: "5000 ms = 5 saniye. fastestInterval en hızlı güncelleme aralığıdır."
  },

  {
    q: "PRIORITY_HIGH_ACCURACY neyi hedefler?",
    t: "mcq",
    o: [
      "Yüksek doğruluklu konum",
      "Düşük parlaklık",
      "Video sıkıştırma",
      "Liste silme",
      "Boş metin kontrolü"
    ],
    a: 0,
    difficulty: "easy",
    week: 10,
    topic: "Konum Doğruluğu",
    importance: 5,
    explanation: "HIGH_ACCURACY yüksek doğruluk demektir. Genelde GPS gibi daha hassas kaynakları kullanır."
  },

  {
    q: "removeLocationUpdates ne işe yarar?",
    t: "mcq",
    o: [
      "Marker ekler",
      "Konum güncellemelerini durdurur",
      "Video başlatır",
      "Görev ekler",
      "Sensör türü seçer"
    ],
    a: 1,
    difficulty: "medium",
    week: 10,
    topic: "Konum Güncellemeleri",
    importance: 5,
    explanation: "Konum güncellemelerini gereksiz çalıştırmak pil tüketir. Durdurmak için removeLocationUpdates kullanılır."
  },

  {
    q: "SupportMapFragment ne için kullanılır?",
    t: "mcq",
    o: [
      "Ses oynatmak",
      "Görev listelemek",
      "Google Maps haritası göstermek",
      "Sensör ölçmek",
      "NFC ödeme yapmak"
    ],
    a: 2,
    difficulty: "medium",
    week: 10,
    topic: "Google Maps",
    importance: 4,
    explanation: "Google Maps kullanımında harita XML içinde SupportMapFragment ile gösterilebilir."
  },

  {
    q: "MarkerOptions().position(...) ne belirler?",
    t: "mcq",
    o: [
      "Uygulama temasını",
      "Ses seviyesini",
      "Liste satırını",
      "Marker konumunu",
      "Pil seviyesini"
    ],
    a: 3,
    difficulty: "medium",
    week: 10,
    topic: "Marker",
    importance: 5,
    explanation: "position(...) marker'ın harita üzerinde hangi koordinata konacağını belirler."
  },

  {
    q: "PolylineOptions ne için kullanılır?",
    t: "mcq",
    o: [
      "Ses çalmak",
      "Görev silmek",
      "Boş metin kontrolü",
      "Sensör hassasiyeti",
      "Haritada çizgi çizmek"
    ],
    a: 4,
    difficulty: "medium",
    week: 10,
    topic: "Polyline",
    importance: 4,
    explanation: "Polyline, harita üzerinde iki veya daha fazla nokta arasında çizgi çizmek için kullanılır."
  },

  // =========================================================
  // ==== 10. HAFTA – OSMDroid / Harita Uygulaması (6) ========
  // =========================================================

  {
    q: "OSMDroid bağımlılığı nereye eklenir?",
    t: "mcq",
    o: [
      "build.gradle",
      "AndroidManifest.xml",
      "strings.xml",
      "colors.xml",
      "ic_launcher"
    ],
    a: 0,
    difficulty: "medium",
    week: 10,
    topic: "OSMDroid",
    importance: 5,
    explanation: "Kütüphane bağımlılıkları dependencies bloğuna, yani build.gradle dosyasına eklenir."
  },

  {
    q: "OSMDroid örneğinde MapView ne işe yarar?",
    t: "mcq",
    o: [
      "Ses çalar",
      "Harita görünümü sağlar",
      "Görev siler",
      "Sensör dinler",
      "Video kaydeder"
    ],
    a: 1,
    difficulty: "easy",
    week: 10,
    topic: "MapView",
    importance: 5,
    explanation: "MapView, uygulama ekranında harita göstermek için kullanılan bileşendir."
  },

  {
    q: "MAPNIK neyle ilişkilidir?",
    t: "mcq",
    o: [
      "Ses kaynağı",
      "Video formatı",
      "OpenStreetMap harita kaynağı",
      "Sensör tipi",
      "Liste adaptörü"
    ],
    a: 2,
    difficulty: "medium",
    week: 10,
    topic: "MAPNIK",
    importance: 4,
    explanation: "OSMDroid örneğinde MAPNIK, OpenStreetMap tabanlı harita tile kaynağıdır."
  },

  {
    q: "setMultiTouchControls(true) ne sağlar?",
    t: "mcq",
    o: [
      "Konumu kapatır",
      "Listeyi günceller",
      "Görev ekler",
      "Çoklu dokunma desteği verir",
      "Video sıkıştırır"
    ],
    a: 3,
    difficulty: "easy",
    week: 10,
    topic: "MapView Ayarları",
    importance: 4,
    explanation: "Bu metot haritada parmak hareketleriyle gezinme/etkileşim için çoklu dokunmayı etkinleştirir."
  },

  {
    q: "setBuiltInZoomControls(true) neyi açar?",
    t: "mcq",
    o: [
      "Konum iznini",
      "Ses kaydını",
      "Görev girişini",
      "Bluetooth'u",
      "Zoom kontrollerini"
    ],
    a: 4,
    difficulty: "easy",
    week: 10,
    topic: "MapView Ayarları",
    importance: 4,
    explanation: "Built-in zoom controls, harita üzerinde yakınlaştırma/uzaklaştırma kontrollerini aktif eder."
  },

  {
    q: "mapView.onPause() hangi durumda çağrılır?",
    t: "mcq",
    o: [
      "Uygulama duraklatılırken",
      "Görev eklenirken",
      "Video başlarken",
      "Sensör okunurken",
      "Toast gösterilirken"
    ],
    a: 0,
    difficulty: "medium",
    week: 10,
    topic: "MapView Yaşam Döngüsü",
    importance: 5,
    explanation: "Harita bileşenleri Activity yaşam döngüsüne uyumlu yönetilmelidir. onPause sırasında mapView.onPause() çağrılır."
  },

  // =========================================================
  // ==== 11. HAFTA – Çoklu Ortam / Vize Kritik (7) ===========
  // =========================================================

  {
    q: "Çoklu ortam hangi bileşenleri kapsar?",
    t: "mcq",
    o: [
      "Sadece metin",
      "Metin, görsel, ses, video, animasyon",
      "Sadece konum",
      "Sadece sensör",
      "Sadece veri tabanı"
    ],
    a: 1,
    difficulty: "easy",
    week: 11,
    topic: "Çoklu Ortam",
    importance: 5,
    explanation: "Multimedya; metin, görsel, ses, video ve animasyonun birlikte kullanımını ifade eder."
  },

  {
    q: "Android'de ses oynatmak için hangi sınıf kullanılır?",
    t: "mcq",
    o: [
      "MapView",
      "ArrayAdapter",
      "MediaPlayer",
      "SensorManager",
      "Marker"
    ],
    a: 2,
    difficulty: "easy",
    week: 11,
    topic: "MediaPlayer",
    importance: 5,
    explanation: "MediaPlayer, Android'de ses çalma işlemlerinde temel sınıflardan biridir."
  },

  {
    q: "VideoView ne için kullanılır?",
    t: "mcq",
    o: [
      "Sensör verisi okumak",
      "Konum izni almak",
      "Liste göstermek",
      "Video oynatmak",
      "Toast göstermek"
    ],
    a: 3,
    difficulty: "easy",
    week: 11,
    topic: "VideoView",
    importance: 5,
    explanation: "VideoView, Android tarafında video oynatmak için kullanılan arayüz bileşenidir."
  },

  {
    q: "AVFoundation hangi platformda kullanılır?",
    t: "mcq",
    o: [
      "Android",
      "Windows Phone",
      "OSMDroid",
      "Retrofit",
      "iOS"
    ],
    a: 4,
    difficulty: "easy",
    week: 11,
    topic: "iOS Multimedya",
    importance: 5,
    explanation: "AVFoundation, iOS tarafında ses ve video işlemleri için kullanılan framework'tür."
  },

  {
    q: "Glide ve Picasso ne için kullanılır?",
    t: "mcq",
    o: [
      "Resim yükleme",
      "GPS izni",
      "Görev silme",
      "NFC ödeme",
      "WebSocket bağlantısı"
    ],
    a: 0,
    difficulty: "medium",
    week: 11,
    topic: "Görsel Yükleme",
    importance: 4,
    explanation: "Android'de uzak veya yerel görselleri verimli yüklemek için Glide/Picasso gibi kütüphaneler kullanılır."
  },

  {
    q: "Lazy loading neyi ifade eder?",
    t: "mcq",
    o: [
      "Tüm içeriği başta yükleme",
      "İçeriği gerektiğinde yükleme",
      "Konumu kapatma",
      "Sensörü silme",
      "Videoyu bozma"
    ],
    a: 1,
    difficulty: "medium",
    week: 11,
    topic: "Performans",
    importance: 5,
    explanation: "Lazy loading, özellikle medya içeriklerinde performans için önemlidir. İçerik ihtiyaç oldukça yüklenir."
  },

  {
    q: "FFmpeg hangi işlemlerle ilişkilidir?",
    t: "mcq",
    o: [
      "Konum izni",
      "Liste silme",
      "Medya dönüştürme ve sıkıştırma",
      "Sensör doğruluğu",
      "Marker başlığı"
    ],
    a: 2,
    difficulty: "hard",
    week: 11,
    topic: "FFmpeg",
    importance: 4,
    explanation: "FFmpeg; video/ses dönüştürme, sıkıştırma ve streaming gibi medya işlerinde kullanılır."
  },

  // =========================================================
  // ==== 12. HAFTA – Sensörler / Vize Kritik (10) ============
  // =========================================================

  {
    q: "Sensör en kısa tanımıyla nedir?",
    t: "mcq",
    o: [
      "Arayüz bileşeni",
      "Harita kaynağı",
      "Liste adaptörü",
      "Çevresel bilgiyi dijital veriye çeviren bileşen",
      "Video oynatıcı"
    ],
    a: 3,
    difficulty: "easy",
    week: 12,
    topic: "Sensör Tanımı",
    importance: 5,
    explanation: "Sensör; hareket, ışık, konum, sıcaklık gibi çevresel bilgileri algılar ve dijital veriye dönüştürür."
  },

  {
    q: "Android'de sensörlere hangi sınıfla erişilir?",
    t: "mcq",
    o: [
      "MapView",
      "MediaPlayer",
      "ArrayAdapter",
      "VideoView",
      "SensorManager"
    ],
    a: 4,
    difficulty: "easy",
    week: 12,
    topic: "SensorManager",
    importance: 5,
    explanation: "Android'de sensör işlemlerinin merkezi sınıfı SensorManager'dır."
  },

  {
    q: "TYPE_ACCELEROMETER hangi sensördür?",
    t: "mcq",
    o: [
      "İvmeölçer",
      "Yakınlık sensörü",
      "Işık sensörü",
      "Barometre",
      "GPS"
    ],
    a: 0,
    difficulty: "easy",
    week: 12,
    topic: "İvmeölçer",
    importance: 5,
    explanation: "Accelerometer = ivmeölçer. 3 eksende hız değişimini algılar."
  },

  {
    q: "Gyroscope neyi algılar?",
    t: "mcq",
    o: [
      "Işık seviyesi",
      "Açısal dönüş",
      "IP adresi",
      "Harita kaynağı",
      "Liste verisi"
    ],
    a: 1,
    difficulty: "easy",
    week: 12,
    topic: "Jiroskop",
    importance: 5,
    explanation: "Jiroskop açısal dönüşü algılar. Oyunlarda yön kontrolü ve VR uygulamalarında kullanılır."
  },

  {
    q: "Magnetometer hangi uygulamada önemlidir?",
    t: "mcq",
    o: [
      "Video oynatıcı",
      "Görev listesi",
      "Dijital pusula",
      "Toast mesajı",
      "REST API"
    ],
    a: 2,
    difficulty: "easy",
    week: 12,
    topic: "Manyetometre",
    importance: 5,
    explanation: "Manyetometre dünyanın manyetik alanını algılar. Pusula sorularında doğru cevap manyetometredir."
  },

  {
    q: "Proximity Sensor ne işe yarar?",
    t: "mcq",
    o: [
      "Ses dosyası çalar",
      "Harita çizer",
      "Video sıkıştırır",
      "Yakınlık algılar",
      "Görevleri saklar"
    ],
    a: 3,
    difficulty: "easy",
    week: 12,
    topic: "Yakınlık Sensörü",
    importance: 5,
    explanation: "Yakınlık sensörü, telefon yüze yaklaştığında ekranı kapatma gibi işlerde kullanılır."
  },

  {
    q: "Light Sensor neyi ölçer?",
    t: "mcq",
    o: [
      "Dönüş hızını",
      "Manyetik alanı",
      "Hava basıncını",
      "Konumu",
      "Ortam ışığını"
    ],
    a: 4,
    difficulty: "easy",
    week: 12,
    topic: "Işık Sensörü",
    importance: 5,
    explanation: "Light Sensor ortam ışığını ölçer. Otomatik ekran parlaklığı klasik örnektir."
  },

  {
    q: "Barometer neyi ölçer?",
    t: "mcq",
    o: [
      "Hava basıncını",
      "Yakınlığı",
      "Ses seviyesini",
      "Liste sayısını",
      "Video süresini"
    ],
    a: 0,
    difficulty: "easy",
    week: 12,
    topic: "Barometre",
    importance: 4,
    explanation: "Barometre hava basıncını ölçer; rakım ve hava durumu uygulamalarında kullanılabilir."
  },

  {
    q: "onSensorChanged ne zaman çalışır?",
    t: "mcq",
    o: [
      "Liste boşalınca",
      "Sensör verisi değişince",
      "Harita kapanınca",
      "Video bitince",
      "Toast kapanınca"
    ],
    a: 1,
    difficulty: "medium",
    week: 12,
    topic: "SensorEventListener",
    importance: 5,
    explanation: "SensorEventListener içindeki onSensorChanged, yeni sensör verisi geldiğinde tetiklenir."
  },

  {
    q: "getDefaultSensor(...) != null kontrolü neyi sınar?",
    t: "mcq",
    o: [
      "Video çözünürlüğünü",
      "Konum hızını",
      "Cihazda ilgili sensör var mı",
      "Liste boş mu",
      "Toast süresi kaç"
    ],
    a: 2,
    difficulty: "medium",
    week: 12,
    topic: "Cihaz Uyumluluğu",
    importance: 5,
    explanation: "Her cihaz her sensöre sahip değildir. Bu kontrol cihaz uyumluluğu için kritik bir sınav bilgisidir."
  },

  // =========================================================
  // ==== 14. HAFTA – To-Do App / Kod Mantığı (7) =============
  // =========================================================

  {
    q: "To-Do uygulamasında EditText ne işe yarar?",
    t: "mcq",
    o: [
      "Görevi listeler",
      "Harita gösterir",
      "Video oynatır",
      "Görev metni alır",
      "Sensör okur"
    ],
    a: 3,
    difficulty: "easy",
    week: 14,
    topic: "To-Do App",
    importance: 5,
    explanation: "EditText, kullanıcının görev metnini yazdığı giriş alanıdır."
  },

  {
    q: "To-Do uygulamasında ListView ne yapar?",
    t: "mcq",
    o: [
      "Ses çalar",
      "Konum alır",
      "Sensör ölçer",
      "Boş metin kontrol eder",
      "Görevleri listeler"
    ],
    a: 4,
    difficulty: "easy",
    week: 14,
    topic: "ListView",
    importance: 5,
    explanation: "ListView, ArrayList'teki görevlerin ekranda liste halinde görünmesini sağlar."
  },

  {
    q: "ArrayList<String> ne için kullanılır?",
    t: "mcq",
    o: [
      "Görevleri geçici tutmak",
      "Harita çizmek",
      "Video oynatmak",
      "GPS izni istemek",
      "Sensör tipi seçmek"
    ],
    a: 0,
    difficulty: "medium",
    week: 14,
    topic: "ArrayList",
    importance: 5,
    explanation: "Bu projede görevler kalıcı veritabanında değil, ArrayList<String> içinde geçici tutulur."
  },

  {
    q: "ArrayAdapter ne yapar?",
    t: "mcq",
    o: [
      "Konum günceller",
      "ArrayList ile ListView arasında köprü kurar",
      "Video sıkıştırır",
      "Sensör doğruluğu ölçer",
      "Harita tile indirir"
    ],
    a: 1,
    difficulty: "medium",
    week: 14,
    topic: "ArrayAdapter",
    importance: 5,
    explanation: "ArrayAdapter, veri kaynağı ile ListView arasında bağlantı kurar. Sınavda 'köprü' kelimesi ArrayAdapter'ı işaret eder."
  },

  {
    q: "notifyDataSetChanged() ne işe yarar?",
    t: "mcq",
    o: [
      "Konum izni ister",
      "Video başlatır",
      "Listeyi günceller",
      "Sensörü kapatır",
      "Marker ekler"
    ],
    a: 2,
    difficulty: "medium",
    week: 14,
    topic: "Liste Güncelleme",
    importance: 5,
    explanation: "Veri değiştiğinde ListView'ın ekranda yenilenmesi için notifyDataSetChanged() çağrılır."
  },

  {
    q: "To-Do uygulaması neden görevleri kalıcı saklamaz?",
    t: "mcq",
    o: [
      "Button yoktur",
      "ListView yoktur",
      "EditText yoktur",
      "Room DB veya SharedPreferences kullanılmaz",
      "Toast çalışmaz"
    ],
    a: 3,
    difficulty: "medium",
    week: 14,
    topic: "Veri Kalıcılığı",
    importance: 5,
    explanation: "Görevler sadece bellekte tutulur. Room DB veya SharedPreferences olmadığı için uygulama kapanınca silinir."
  },

  {
    q: "Boş görev girilirse hangi bileşenle uyarı verilir?",
    t: "mcq",
    o: [
      "MapView",
      "VideoView",
      "SensorManager",
      "ArrayAdapter",
      "Toast"
    ],
    a: 4,
    difficulty: "easy",
    week: 14,
    topic: "Toast",
    importance: 5,
    explanation: "Toast, kullanıcıya kısa uyarı mesajı göstermek için kullanılır. Boş görev uyarısı için uygundur."
  }
];
