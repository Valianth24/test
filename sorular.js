

window.questionBank = [
  // =========================================================
  // ==== GÖRSEL PROGRAMLAMA – 20 FİNAL SORUSU ================
  // =========================================================

  {
    q: "Windows Forms uygulamasında kullanıcıya bilgi göstermek için en uygun kontrol hangisidir?",
    t: "mcq",
    o: ["Label", "TextBox", "Button", "Timer", "OpenFileDialog"],
    a: 0,
    difficulty: "easy",
    week: 1,
    topic: "Görsel Programlama / Kontroller",
    importance: 5,
    explanation: "Label, kullanıcıya yazı veya sonuç göstermek için kullanılır. TextBox veri almak, Button işlem başlatmak içindir."
  },
  {
    q: "Kullanıcıdan metin veya sayı girişi almak için hangi Windows Forms kontrolü kullanılır?",
    t: "mcq",
    o: ["Label", "TextBox", "PictureBox", "ProgressBar", "Panel"],
    a: 1,
    difficulty: "easy",
    week: 1,
    topic: "Görsel Programlama / TextBox",
    importance: 5,
    explanation: "TextBox, kullanıcının klavyeden veri girdiği kutudur. Sayı da girilebilir ama işlem yapmadan önce genellikle dönüştürmek gerekir."
  },
  {
    q: "Button kontrolünde kullanıcı tıkladığında çalışan olay hangisidir?",
    t: "mcq",
    o: ["Load", "TextChanged", "Click", "SelectedIndexChanged", "Tick"],
    a: 2,
    difficulty: "easy",
    week: 1,
    topic: "Görsel Programlama / Olaylar",
    importance: 5,
    explanation: "Click olayı, butona tıklanınca çalışır. Olay, kullanıcının yaptığı hareket sonucunda çalışan kod bölümüdür."
  },
  {
    q: "C# dilinde tam sayı saklamak için hangi veri tipi kullanılır?",
    t: "mcq",
    o: ["string", "bool", "double", "int", "char"],
    a: 3,
    difficulty: "easy",
    week: 2,
    topic: "Görsel Programlama / Veri Tipleri",
    importance: 5,
    explanation: "int, tam sayı veri tipidir. 10, 25, -3 gibi ondalıksız sayıları saklar."
  },
  {
    q: "C# dilinde doğru/yanlış değer tutan veri tipi hangisidir?",
    t: "mcq",
    o: ["string", "int", "float", "char", "bool"],
    a: 4,
    difficulty: "easy",
    week: 2,
    topic: "Görsel Programlama / Boolean",
    importance: 5,
    explanation: "bool veri tipi true veya false değerini tutar. Koşul yapılarında çok kullanılır."
  },
  {
    q: "C# dilinde '=' operatörü ne işe yarar?",
    t: "mcq",
    o: ["Atama yapar", "Eşit mi diye karşılaştırır", "Bölme yapar", "Metni siler", "Döngüyü durdurur"],
    a: 0,
    difficulty: "easy",
    week: 2,
    topic: "Görsel Programlama / Operatörler",
    importance: 5,
    explanation: "'=' atama operatörüdür. Örneğin x = 5; ifadesi x değişkenine 5 değerini verir."
  },
  {
    q: "C# dilinde '==' operatörü ne için kullanılır?",
    t: "mcq",
    o: ["Değer atamak için", "Eşitlik karşılaştırması yapmak için", "Çarpma yapmak için", "Dosya açmak için", "Form kapatmak için"],
    a: 1,
    difficulty: "easy",
    week: 2,
    topic: "Görsel Programlama / Karşılaştırma",
    importance: 5,
    explanation: "'==' iki değerin eşit olup olmadığını kontrol eder. Sonuç true veya false olur."
  },
  {
    q: "MessageBox.Show() metodu ne işe yarar?",
    t: "mcq",
    o: ["Dosya siler", "Form rengini değiştirir", "Ekrana mesaj kutusu çıkarır", "Dizi oluşturur", "Veritabanı açar"],
    a: 2,
    difficulty: "easy",
    week: 3,
    topic: "Görsel Programlama / MessageBox",
    importance: 5,
    explanation: "MessageBox.Show(), kullanıcıya küçük bir mesaj penceresi gösterir. Uyarı, bilgi veya hata mesajlarında kullanılır."
  },
  {
    q: "Bir öğrencinin notu 50 ve üzeriyse 'Geçti', değilse 'Kaldı' yazdırmak için en uygun yapı hangisidir?",
    t: "mcq",
    o: ["for", "while", "foreach", "if-else", "try-finally"],
    a: 3,
    difficulty: "easy",
    week: 4,
    topic: "Görsel Programlama / if-else",
    importance: 5,
    explanation: "İki ihtimal varsa if-else kullanılır. Koşul doğruysa if, yanlışsa else bloğu çalışır."
  },
  {
    q: "Aynı değişkenin 1, 2, 3 gibi farklı sabit değerlerine göre işlem yapılacaksa hangi yapı uygundur?",
    t: "mcq",
    o: ["if only", "for", "while", "try-catch", "switch-case"],
    a: 4,
    difficulty: "medium",
    week: 5,
    topic: "Görsel Programlama / switch-case",
    importance: 5,
    explanation: "switch-case, aynı değişkenin farklı sabit değerlerine göre işlem yaptırır. Menü seçimlerinde çok kullanılır."
  },
  {
    q: "Kaç kez çalışacağı belli olan tekrar işlemlerinde hangi döngü daha uygundur?",
    t: "mcq",
    o: ["for", "while", "do-while", "switch", "try"],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "Görsel Programlama / for",
    importance: 5,
    explanation: "for döngüsü başlangıç, koşul ve artış bölümleriyle belirli sayıda tekrar yapar."
  },
  {
    q: "Koşul doğru olduğu sürece çalışan döngü hangisidir?",
    t: "mcq",
    o: ["switch", "while", "if", "catch", "return"],
    a: 1,
    difficulty: "easy",
    week: 6,
    topic: "Görsel Programlama / while",
    importance: 5,
    explanation: "while döngüsü koşul doğru olduğu sürece çalışır. Koşul baştan yanlışsa hiç çalışmayabilir."
  },
  {
    q: "Bir dizi veya koleksiyonun elemanlarını tek tek gezmek için hangi döngü kullanılır?",
    t: "mcq",
    o: ["if", "switch", "foreach", "try", "case"],
    a: 2,
    difficulty: "easy",
    week: 7,
    topic: "Görsel Programlama / foreach",
    importance: 5,
    explanation: "foreach, dizi veya liste içindeki elemanları sırayla dolaşmak için kullanılır."
  },
  {
    q: "Geriye değer döndürmeyen metot hangi anahtar kelimeyle tanımlanır?",
    t: "mcq",
    o: ["int", "string", "return", "void", "bool"],
    a: 3,
    difficulty: "medium",
    week: 8,
    topic: "Görsel Programlama / Metotlar",
    importance: 5,
    explanation: "void, metodun geriye değer döndürmediğini gösterir. Sadece işlem yapar."
  },
  {
    q: "Bir metodun dışarıdan aldığı değerlere ne denir?",
    t: "mcq",
    o: ["Değişken tipi", "Form", "Kontrol", "Olay", "Parametre"],
    a: 4,
    difficulty: "medium",
    week: 8,
    topic: "Görsel Programlama / Parametre",
    importance: 5,
    explanation: "Parametre, metoda dışarıdan gönderilen değerdir. Örneğin Topla(int a, int b) metodunda a ve b parametredir."
  },
  {
    q: "Aynı türden birden fazla veriyi tek isim altında saklayan yapı hangisidir?",
    t: "mcq",
    o: ["Dizi", "Button", "Label", "Form", "Exception"],
    a: 0,
    difficulty: "easy",
    week: 11,
    topic: "Görsel Programlama / Diziler",
    importance: 5,
    explanation: "Dizi, aynı türden birden fazla veriyi tek isim altında tutar. Örneğin int[] sayilar = {1,2,3};"
  },
  {
    q: "C# Windows Forms'ta sıfıra bölme hatasını yakalamak için hangi özel hata sınıfı kullanılır?",
    t: "mcq",
    o: ["FormatException", "DivideByZeroException", "FileNotFoundException", "IndexOutOfRangeException", "NullReferenceException"],
    a: 1,
    difficulty: "medium",
    week: 12,
    topic: "Görsel Programlama / Hata Yakalama",
    importance: 5,
    explanation: "DivideByZeroException, bir sayının sıfıra bölünmesi durumunda oluşan hatadır."
  },
  {
    q: "Kullanıcı sayı yerine harf girerse ve sayıya çevrilemezse genellikle hangi hata oluşur?",
    t: "mcq",
    o: ["DivideByZeroException", "IOException", "FormatException", "OverflowException", "ArgumentException"],
    a: 2,
    difficulty: "medium",
    week: 12,
    topic: "Görsel Programlama / FormatException",
    importance: 5,
    explanation: "FormatException, veri beklenen biçime çevrilemediğinde oluşur. Örneğin 'abc' değerini int'e çevirmek hata verir."
  },
  {
    q: "try-catch-finally yapısında hata olsa da olmasa da çalışan blok hangisidir?",
    t: "mcq",
    o: ["try", "catch", "throw", "finally", "return"],
    a: 3,
    difficulty: "easy",
    week: 13,
    topic: "Görsel Programlama / finally",
    importance: 5,
    explanation: "finally bloğu her durumda çalışır. Dosya kapatma veya işlem sonu mesajı verme için kullanılabilir."
  },
  {
    q: "ListBox içindeki tüm elemanları temizlemek için kullanılan ifade hangisidir?",
    t: "mcq",
    o: ["listBox1.Items.Add();", "listBox1.Text.Clear();", "listBox1.SelectedIndex = 0;", "listBox1.Hide();", "listBox1.Items.Clear();"],
    a: 4,
    difficulty: "medium",
    week: 3,
    topic: "Görsel Programlama / ListBox",
    importance: 4,
    explanation: "Items.Clear(), ListBox içindeki bütün elemanları temizler. Items, listedeki eleman koleksiyonudur."
  },

  // =========================================================
  // ==== MOBİL PROGRAMLAMA – 20 FİNAL SORUSU =================
  // =========================================================

  {
    q: "Mobil programlama en doğru şekilde neyi ifade eder?",
    t: "mcq",
    o: ["Taşınabilir cihazlar için uygulama geliştirmeyi", "Sadece masaüstü program yazmayı", "Sadece veritabanı kurmayı", "Sadece web sayfası renklendirmeyi", "Sadece ağ kablosu kurmayı"],
    a: 0,
    difficulty: "easy",
    week: 1,
    topic: "Mobil Programlama / Giriş",
    importance: 5,
    explanation: "Mobil programlama, telefon, tablet ve giyilebilir cihaz gibi taşınabilir cihazlarda çalışan uygulamalar geliştirmektir."
  },
  {
    q: "Mobil cihazlarda düşük güç tüketimi ve verimlilik için yaygın kullanılan işlemci mimarisi hangisidir?",
    t: "mcq",
    o: ["x86 Server", "ARM/RISC", "CISC only", "Mainframe", "Quantum"],
    a: 1,
    difficulty: "medium",
    week: 1,
    topic: "Mobil Programlama / Donanım",
    importance: 5,
    explanation: "ARM tabanlı RISC mimarisi, düşük güç tüketimi ve iyi performans dengesi nedeniyle mobil cihazlarda yaygındır."
  },
  {
    q: "1992 yılında tanıtılan ve ilk gerçek akıllı telefon hamlesi kabul edilen cihaz hangisidir?",
    t: "mcq",
    o: ["iPhone", "T-Mobile G1", "IBM Simon", "Nokia 3310", "Motorola Razr"],
    a: 2,
    difficulty: "medium",
    week: 1,
    topic: "Mobil Programlama / Tarihçe",
    importance: 4,
    explanation: "IBM Simon; dokunmatik ekran, e-posta, faks ve uygulama özellikleriyle ilk gerçek akıllı telefon hamlesi olarak kabul edilir."
  },
  {
    q: "5G teknolojisinin en belirgin özelliklerinden biri hangisidir?",
    t: "mcq",
    o: ["Sadece analog ses", "Sadece SMS", "Sadece MMS", "Ultra düşük gecikme", "Sadece kablolu bağlantı"],
    a: 3,
    difficulty: "easy",
    week: 1,
    topic: "Mobil Programlama / 5G",
    importance: 5,
    explanation: "5G; yüksek hız, düşük gecikme, IoT, AR/VR ve çok sayıda cihaz bağlantısı ile öne çıkar."
  },
  {
    q: "Android için resmi/yerel geliştirmede en yaygın kullanılan diller hangileridir?",
    t: "mcq",
    o: ["Swift ve Objective-C", "PHP ve SQL", "HTML ve CSS", "Ruby ve Perl", "Kotlin ve Java"],
    a: 4,
    difficulty: "easy",
    week: 1,
    topic: "Mobil Programlama / Native",
    importance: 5,
    explanation: "Android native geliştirmede Kotlin ve Java kullanılır. Native, platformun resmi araçlarıyla geliştirme demektir."
  },
  {
    q: "iOS için native geliştirmede kullanılan temel modern dil hangisidir?",
    t: "mcq",
    o: ["Swift", "Kotlin", "PHP", "SQL", "C# Windows Forms"],
    a: 0,
    difficulty: "easy",
    week: 1,
    topic: "Mobil Programlama / iOS",
    importance: 5,
    explanation: "Swift, Apple ekosisteminde iOS/macOS uygulama geliştirmek için kullanılan modern dildir."
  },
  {
    q: "Tek kod tabanıyla Android ve iOS uygulaması geliştirme yaklaşımı hangisidir?",
    t: "mcq",
    o: ["Native", "Cross-platform", "Kernel mode", "Database first", "Console app"],
    a: 1,
    difficulty: "easy",
    week: 1,
    topic: "Mobil Programlama / Cross-platform",
    importance: 5,
    explanation: "Cross-platform, tek kod tabanından birden fazla platforma uygulama çıkarmaya çalışır. Flutter ve React Native örnektir."
  },
  {
    q: "HTML, CSS ve JavaScript ile geliştirilip WebView içinde çalışan mobil uygulama yaklaşımı hangisidir?",
    t: "mcq",
    o: ["Native", "SDK", "Hybrid", "Emulator", "Gradle"],
    a: 2,
    difficulty: "easy",
    week: 1,
    topic: "Mobil Programlama / Hybrid",
    importance: 5,
    explanation: "Hybrid uygulama web teknolojileriyle yapılır ve mobil cihazda WebView adlı yerel kapsayıcı içinde çalışır."
  },
  {
    q: "SDK açılımı hangisidir?",
    t: "mcq",
    o: ["System Data Kernel", "Software Design Key", "Secure Device Kit", "Software Development Kit", "Server Debug Kernel"],
    a: 3,
    difficulty: "easy",
    week: 3,
    topic: "Mobil Programlama / SDK",
    importance: 5,
    explanation: "SDK, Software Development Kit demektir. Geliştirme araçları, API’ler, kütüphaneler, emülatör ve dokümantasyon içerir."
  },
  {
    q: "API en doğru şekilde neyi ifade eder?",
    t: "mcq",
    o: ["Uygulamanın mağaza ikonu", "Sadece fiziksel cihaz", "Sadece ekran tasarımı", "Sadece RAM alanı", "Yazılımların iletişim kurmasını sağlayan arayüz/sözleşme"],
    a: 4,
    difficulty: "medium",
    week: 3,
    topic: "Mobil Programlama / API",
    importance: 5,
    explanation: "API, Application Programming Interface demektir. Yazılımların birbirleriyle hangi kurallarla konuşacağını belirler."
  },
  {
    q: "Android Studio hangi tür yazılımdır?",
    t: "mcq",
    o: ["IDE", "Veritabanı motoru", "Mobil işletim sistemi", "Ağ protokolü", "Dosya sıkıştırıcı"],
    a: 0,
    difficulty: "easy",
    week: 3,
    topic: "Mobil Programlama / Android Studio",
    importance: 5,
    explanation: "Android Studio bir IDE’dir. Kod yazma, derleme, hata ayıklama ve emülatör çalıştırma gibi araçları bir arada sunar."
  },
  {
    q: "Android Activity yaşam döngüsünde uygulama ilk oluşturulduğunda çalışan metot hangisidir?",
    t: "mcq",
    o: ["onPause()", "onCreate()", "onDestroy()", "onStop()", "onRestart()"],
    a: 1,
    difficulty: "medium",
    week: 1,
    topic: "Mobil Programlama / Activity Lifecycle",
    importance: 5,
    explanation: "onCreate(), Activity ilk oluşturulduğunda çalışır. Arayüz genellikle burada hazırlanır."
  },
  {
    q: "Android'de uygulama ön planda ve kullanıcıyla etkileşimdeyken hangi yaşam döngüsü metodu aktif durumdadır?",
    t: "mcq",
    o: ["onStop()", "onDestroy()", "onResume()", "onCreate()", "onPause()"],
    a: 2,
    difficulty: "medium",
    week: 1,
    topic: "Mobil Programlama / onResume",
    importance: 5,
    explanation: "onResume(), uygulamanın ön planda olduğu ve kullanıcı etkileşimine hazır olduğu durumdur."
  },
  {
    q: "Android'de kullanıcıya görünen ekranı temsil eden bileşen hangisidir?",
    t: "mcq",
    o: ["Service", "Broadcast Receiver", "Content Provider", "Activity", "Manifest"],
    a: 3,
    difficulty: "easy",
    week: 3,
    topic: "Mobil Programlama / Android Bileşenleri",
    importance: 5,
    explanation: "Activity, Android uygulamasında kullanıcıya gösterilen ekranı temsil eder."
  },
  {
    q: "Android'de arka planda çalışan işlemler için kullanılan bileşen hangisidir?",
    t: "mcq",
    o: ["Activity", "Intent", "View", "Layout", "Service"],
    a: 4,
    difficulty: "easy",
    week: 3,
    topic: "Mobil Programlama / Service",
    importance: 5,
    explanation: "Service, kullanıcı arayüzü olmadan arka planda çalışan işlemler için kullanılır."
  },
  {
    q: "Ekran döndürme, adım sayma ve hareket algılama için kullanılan sensör hangisidir?",
    t: "mcq",
    o: ["İvmeölçer", "Barometre", "Işık sensörü", "NFC", "Mikrofon"],
    a: 0,
    difficulty: "easy",
    week: 12,
    topic: "Mobil Programlama / Sensörler",
    importance: 5,
    explanation: "İvmeölçer, cihazın 3 eksendeki ivmesini ölçer. Ekran yönü ve hareket algılamada kullanılır."
  },
  {
    q: "Dönüş hareketini ve açısal hızı algılayan sensör hangisidir?",
    t: "mcq",
    o: ["GPS", "Jiroskop", "Yakınlık sensörü", "Işık sensörü", "Barometre"],
    a: 1,
    difficulty: "medium",
    week: 12,
    topic: "Mobil Programlama / Jiroskop",
    importance: 4,
    explanation: "Jiroskop, cihazın dönüş hareketlerini algılar. Oyun, AR/VR ve kamera stabilizasyonunda kullanılır."
  },
  {
    q: "Android'de hassas konum izni hangisidir?",
    t: "mcq",
    o: ["ACCESS_WIFI_STATE", "INTERNET", "ACCESS_FINE_LOCATION", "VIBRATE", "CAMERA"],
    a: 2,
    difficulty: "medium",
    week: 10,
    topic: "Mobil Programlama / Konum İzinleri",
    importance: 5,
    explanation: "ACCESS_FINE_LOCATION, GPS gibi hassas konum kaynaklarına erişmek için kullanılır."
  },
  {
    q: "Android uygulamasını Google Play'e yüklemek için modern dağıtım paketi genellikle hangisidir?",
    t: "mcq",
    o: ["ZIP", "EXE", "DLL", "AAB", "DOCX"],
    a: 3,
    difficulty: "medium",
    week: 14,
    topic: "Mobil Programlama / Yayınlama",
    importance: 5,
    explanation: "AAB, Android App Bundle demektir. Google Play'e modern Android uygulama dağıtımında kullanılır."
  },
  {
    q: "To-Do uygulamasında görevleri listelemek için kullanılan Android arayüz bileşeni hangisidir?",
    t: "mcq",
    o: ["Toast", "Button", "EditText", "ImageView", "ListView"],
    a: 4,
    difficulty: "easy",
    week: 14,
    topic: "Mobil Programlama / To-Do App",
    importance: 4,
    explanation: "ListView, verileri liste halinde göstermek için kullanılır. To-Do uygulamasında görevler burada gösterilebilir."
  },

  // =========================================================
  // ==== İNTERNET PROGRAMLAMA – 20 FİNAL SORUSU ==============
  // =========================================================

  {
    q: "PHP'de tek bir koşul doğruysa kod çalıştırmak için hangi yapı kullanılır?",
    t: "mcq",
    o: ["if", "for", "while", "echo", "switch only"],
    a: 0,
    difficulty: "easy",
    week: 3,
    topic: "İnternet Programlama / if",
    importance: 5,
    explanation: "if, koşul doğruysa içindeki kodu çalıştırır. Koşul yanlışsa çalıştırmaz."
  },
  {
    q: "PHP'de koşul yanlış olduğunda çalışacak alternatif blok hangisidir?",
    t: "mcq",
    o: ["case", "else", "break", "default", "foreach"],
    a: 1,
    difficulty: "easy",
    week: 3,
    topic: "İnternet Programlama / else",
    importance: 5,
    explanation: "else, if koşulu yanlışsa çalışır. İki ihtimalli durumlarda kullanılır."
  },
  {
    q: "PHP'de kaç kez çalışacağı belli olan tekrar işlemlerinde hangi döngü tercih edilir?",
    t: "mcq",
    o: ["while", "switch", "for", "if", "include"],
    a: 2,
    difficulty: "easy",
    week: 4,
    topic: "İnternet Programlama / for",
    importance: 5,
    explanation: "for döngüsü, belirli sayıda tekrar yapılacaksa uygundur."
  },
  {
    q: "PHP'de koşul doğru olduğu sürece çalışan döngü hangisidir?",
    t: "mcq",
    o: ["for", "switch", "case", "while", "echo"],
    a: 3,
    difficulty: "easy",
    week: 4,
    topic: "İnternet Programlama / while",
    importance: 5,
    explanation: "while, koşul doğru olduğu sürece çalışır. Koşul yanlış olduğunda döngü biter."
  },
  {
    q: "PHP'de bir metnin uzunluğunu bulmak için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["trim()", "substr()", "strpos()", "str_replace()", "strlen()"],
    a: 4,
    difficulty: "easy",
    week: 5,
    topic: "İnternet Programlama / strlen",
    importance: 5,
    explanation: "strlen(), string yani metin uzunluğunu verir. Boşluklar da karakter sayılır."
  },
  {
    q: "PHP'de metnin başındaki ve sonundaki boşlukları temizleyen fonksiyon hangisidir?",
    t: "mcq",
    o: ["trim()", "strlen()", "substr()", "strpos()", "explode()"],
    a: 0,
    difficulty: "easy",
    week: 5,
    topic: "İnternet Programlama / trim",
    importance: 5,
    explanation: "trim(), metnin başındaki ve sonundaki boşlukları siler. Form verilerini temizlerken kullanılır."
  },
  {
    q: "HTTP'de verileri URL üzerinde taşıyan yöntem hangisidir?",
    t: "mcq",
    o: ["POST", "GET", "FILES", "SESSION", "COOKIE"],
    a: 1,
    difficulty: "easy",
    week: 6,
    topic: "İnternet Programlama / GET",
    importance: 5,
    explanation: "GET, verileri URL parametresi olarak gönderir. Bu yüzden adres çubuğunda görünür."
  },
  {
    q: "HTTP'de veriyi istek gövdesinde taşıyan ve formlarda sık kullanılan yöntem hangisidir?",
    t: "mcq",
    o: ["GET", "COOKIE", "POST", "SERVER", "REQUEST"],
    a: 2,
    difficulty: "easy",
    week: 6,
    topic: "İnternet Programlama / POST",
    importance: 5,
    explanation: "POST, veriyi URL yerine HTTP body içinde gönderir. Şifre ve form işlemlerinde GET'e göre daha uygundur."
  },
  {
    q: "PHP'de GET yöntemiyle gelen veriler hangi süper global dizide tutulur?",
    t: "mcq",
    o: ["$_POST", "$_FILES", "$_SESSION", "$_GET", "$_COOKIE"],
    a: 3,
    difficulty: "easy",
    week: 6,
    topic: "İnternet Programlama / $_GET",
    importance: 5,
    explanation: "$_GET, URL üzerinden gelen verileri tutar. Örneğin sayfa.php?id=5 için $_GET['id'] kullanılabilir."
  },
  {
    q: "PHP'de dosya yükleme bilgileri hangi süper global dizide tutulur?",
    t: "mcq",
    o: ["$_GET", "$_POST", "$_SESSION", "$_COOKIE", "$_FILES"],
    a: 4,
    difficulty: "easy",
    week: 7,
    topic: "İnternet Programlama / $_FILES",
    importance: 5,
    explanation: "$_FILES, yüklenen dosyanın adı, geçici yolu, boyutu ve hata kodu gibi bilgileri tutar."
  },
  {
    q: "Dosya yükleme formunda bulunması gereken enctype değeri hangisidir?",
    t: "mcq",
    o: ["multipart/form-data", "text/plain", "application/json", "urlencoded-only", "file/input"],
    a: 0,
    difficulty: "easy",
    week: 7,
    topic: "İnternet Programlama / Dosya Yükleme",
    importance: 5,
    explanation: "Dosya yüklemek için formda enctype='multipart/form-data' olmalıdır. Aksi halde dosya düzgün gönderilmez."
  },
  {
    q: "PHP'de yüklenen dosyayı geçici konumdan kalıcı klasöre taşımak için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["copy_file()", "move_uploaded_file()", "file_put_contents()", "mkdir()", "rename_only()"],
    a: 1,
    difficulty: "easy",
    week: 7,
    topic: "İnternet Programlama / move_uploaded_file",
    importance: 5,
    explanation: "move_uploaded_file(), yüklenen dosyayı tmp_name geçici yolundan hedef klasöre taşır."
  },
  {
    q: "PHP'de oturum başlatmak için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["session_destroy()", "setcookie()", "session_start()", "session_close()", "start_cookie()"],
    a: 2,
    difficulty: "easy",
    week: 8,
    topic: "İnternet Programlama / Session",
    importance: 5,
    explanation: "session_start(), oturum mekanizmasını başlatır. $_SESSION kullanmadan önce çağrılmalıdır."
  },
  {
    q: "PHP'de oturum bilgileri hangi süper global dizide tutulur?",
    t: "mcq",
    o: ["$_GET", "$_POST", "$_FILES", "$_SESSION", "$_SERVER"],
    a: 3,
    difficulty: "easy",
    week: 8,
    topic: "İnternet Programlama / $_SESSION",
    importance: 5,
    explanation: "$_SESSION, kullanıcıya ait oturum verilerini sunucu tarafında tutar."
  },
  {
    q: "Şifreleri güvenli saklamak için PHP'de hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["strlen()", "trim()", "md5_text()", "echo()", "password_hash()"],
    a: 4,
    difficulty: "medium",
    week: 9,
    topic: "İnternet Programlama / password_hash",
    importance: 5,
    explanation: "password_hash(), şifreyi güvenli hash değerine dönüştürür. Şifreler düz metin saklanmamalıdır."
  },
  {
    q: "Hash'lenmiş şifreyi kontrol etmek için hangi PHP fonksiyonu kullanılır?",
    t: "mcq",
    o: ["password_verify()", "password_hash()", "trim()", "session_start()", "mysqli_connect()"],
    a: 0,
    difficulty: "medium",
    week: 9,
    topic: "İnternet Programlama / password_verify",
    importance: 5,
    explanation: "password_verify(), kullanıcının girdiği şifreyi kayıtlı hash ile karşılaştırır."
  },
  {
    q: "Veritabanına yeni kayıt eklemek için kullanılan SQL komutu hangisidir?",
    t: "mcq",
    o: ["SELECT", "INSERT INTO", "UPDATE", "DELETE", "DROP"],
    a: 1,
    difficulty: "easy",
    week: 11,
    topic: "İnternet Programlama / INSERT",
    importance: 5,
    explanation: "INSERT INTO, tabloya yeni kayıt ekler. CRUD işlemlerinde Create karşılığıdır."
  },
  {
    q: "Veritabanından veri çekmek için kullanılan SQL komutu hangisidir?",
    t: "mcq",
    o: ["INSERT", "DELETE", "SELECT", "UPDATE", "CREATE"],
    a: 2,
    difficulty: "easy",
    week: 11,
    topic: "İnternet Programlama / SELECT",
    importance: 5,
    explanation: "SELECT, veritabanından veri okumak veya listelemek için kullanılır."
  },
  {
    q: "SQL Injection riskini azaltmak için hangi yöntem tercih edilmelidir?",
    t: "mcq",
    o: ["URL uzatmak", "Şifreyi ekrana yazdırmak", "GET kullanmak", "Prepared statement kullanmak", "Dosya adını büyütmek"],
    a: 3,
    difficulty: "medium",
    week: 13,
    topic: "İnternet Programlama / SQL Injection",
    importance: 5,
    explanation: "Prepared statement, kullanıcı verisi ile SQL sorgusunu ayırır. Bu, SQL Injection saldırı riskini azaltır."
  },
  {
    q: "PHP'de dosyaya tek fonksiyonla veri yazmak için hangisi kullanılır?",
    t: "mcq",
    o: ["fopen()", "fread()", "feof()", "mkdir()", "file_put_contents()"],
    a: 4,
    difficulty: "easy",
    week: 14,
    topic: "İnternet Programlama / Dosya İşlemleri",
    importance: 5,
    explanation: "file_put_contents(), dosyaya veri yazmayı tek fonksiyonla kolaylaştırır."
  },

  // =========================================================
  // ==== VERİTABANI YÖNETİM SİSTEMLERİ – 20 FİNAL SORUSU =====
  // =========================================================

  {
    q: "Veritabanı en doğru şekilde neyi ifade eder?",
    t: "mcq",
    o: ["Verilerin düzenli saklandığı ve yönetildiği yapı", "Sadece klavye kısayolu", "Sadece resim dosyası", "Sadece işletim sistemi", "Sadece web tarayıcısı"],
    a: 0,
    difficulty: "easy",
    week: 1,
    topic: "Veritabanı Yönetim Sistemleri / Temel Kavram",
    importance: 5,
    explanation: "Veritabanı, verilerin düzenli biçimde saklandığı, arandığı, güncellendiği ve yönetildiği sistemdir."
  },
  {
    q: "DBMS açılımı hangisidir?",
    t: "mcq",
    o: ["Data Backup Main Server", "Database Management System", "Digital Base Memory Script", "Dynamic Binary Model System", "Database Mapping Service"],
    a: 1,
    difficulty: "easy",
    week: 1,
    topic: "Veritabanı Yönetim Sistemleri / DBMS",
    importance: 5,
    explanation: "DBMS, Database Management System demektir. Türkçesi Veritabanı Yönetim Sistemi'dir."
  },
  {
    q: "SQL Server hangi tür sistemdir?",
    t: "mcq",
    o: ["Kelime işlemci", "E-posta istemcisi", "İlişkisel veritabanı yönetim sistemi", "Grafik editörü", "Mobil işletim sistemi"],
    a: 2,
    difficulty: "easy",
    week: 1,
    topic: "Veritabanı Yönetim Sistemleri / SQL Server",
    importance: 5,
    explanation: "SQL Server, Microsoft tarafından geliştirilen ilişkisel veritabanı yönetim sistemidir."
  },
  {
    q: "SQL Server'ın kullandığı SQL genişletmesi hangisidir?",
    t: "mcq",
    o: ["HTML", "CSS", "PHP", "T-SQL", "XML"],
    a: 3,
    difficulty: "medium",
    week: 1,
    topic: "Veritabanı Yönetim Sistemleri / T-SQL",
    importance: 5,
    explanation: "T-SQL, Transact-SQL demektir. SQL Server'ın SQL üzerine eklediği gelişmiş yapılardır."
  },
  {
    q: "SQL Server güvenlik yapılandırmasında Mixed Mode ne anlama gelir?",
    t: "mcq",
    o: ["Sadece Windows kullanıcıları giriş yapabilir", "Sadece tablo sahipleri giriş yapabilir", "Hiç kullanıcı giremez", "Sadece yedekten giriş yapılır", "Hem Windows hem SQL Server kullanıcıları giriş yapabilir"],
    a: 4,
    difficulty: "medium",
    week: 1,
    topic: "Veritabanı Yönetim Sistemleri / SQL Server Güvenlik",
    importance: 4,
    explanation: "Mixed Mode, hem Windows Authentication hem de SQL Server Authentication kullanılabildiği anlamına gelir."
  },
  {
    q: "Tablodaki her kaydı benzersiz tanımlayan alan hangisidir?",
    t: "mcq",
    o: ["Primary Key", "Foreign Key", "VARCHAR", "ORDER BY", "JOIN"],
    a: 0,
    difficulty: "easy",
    week: 2,
    topic: "Veritabanı Yönetim Sistemleri / Primary Key",
    importance: 5,
    explanation: "Primary Key, tablodaki her satırı benzersiz tanımlar. Aynı değer tekrar edemez ve genellikle boş bırakılamaz."
  },
  {
    q: "Bir tablodaki alanın başka tablodaki primary key'e bağlanmasını sağlayan anahtar hangisidir?",
    t: "mcq",
    o: ["Candidate Key", "Foreign Key", "Index Only", "View", "Trigger"],
    a: 1,
    difficulty: "medium",
    week: 2,
    topic: "Veritabanı Yönetim Sistemleri / Foreign Key",
    importance: 5,
    explanation: "Foreign Key, iki tablo arasında ilişki kurar. Örneğin sipariş tablosundaki musteri_id, müşteri tablosundaki id alanına bağlanabilir."
  },
  {
    q: "SQL'de yeni tablo oluşturmak için hangi komut kullanılır?",
    t: "mcq",
    o: ["INSERT TABLE", "MAKE TABLE", "CREATE TABLE", "ADD TABLE", "NEW TABLE"],
    a: 2,
    difficulty: "easy",
    week: 3,
    topic: "Veritabanı Yönetim Sistemleri / CREATE TABLE",
    importance: 5,
    explanation: "CREATE TABLE, veritabanı içinde yeni tablo oluşturur. Tablo, satır ve sütunlardan oluşur."
  },
  {
    q: "SQL'de tabloya yeni kayıt eklemek için hangi komut kullanılır?",
    t: "mcq",
    o: ["SELECT", "UPDATE", "DELETE", "INSERT INTO", "DROP"],
    a: 3,
    difficulty: "easy",
    week: 3,
    topic: "Veritabanı Yönetim Sistemleri / INSERT",
    importance: 5,
    explanation: "INSERT INTO, tabloya yeni kayıt yani yeni satır eklemek için kullanılır."
  },
  {
    q: "SQL'de tablodaki kayıtları listelemek için hangi komut kullanılır?",
    t: "mcq",
    o: ["INSERT", "UPDATE", "DELETE", "CREATE", "SELECT"],
    a: 4,
    difficulty: "easy",
    week: 3,
    topic: "Veritabanı Yönetim Sistemleri / SELECT",
    importance: 5,
    explanation: "SELECT, veritabanından veri çekmek için kullanılır. Listeleme ve arama işlemlerinin temelidir."
  },
  {
    q: "SQL'de var olan kaydı değiştirmek için hangi komut kullanılır?",
    t: "mcq",
    o: ["UPDATE", "INSERT", "SELECT", "DROP", "CREATE"],
    a: 0,
    difficulty: "easy",
    week: 4,
    topic: "Veritabanı Yönetim Sistemleri / UPDATE",
    importance: 5,
    explanation: "UPDATE, mevcut kaydı günceller. Genellikle WHERE ile hangi kaydın güncelleneceği belirtilir."
  },
  {
    q: "SQL'de kayıt silmek için kullanılan komut hangisidir?",
    t: "mcq",
    o: ["SELECT", "DELETE", "INSERT", "CREATE", "ORDER BY"],
    a: 1,
    difficulty: "easy",
    week: 4,
    topic: "Veritabanı Yönetim Sistemleri / DELETE",
    importance: 5,
    explanation: "DELETE, tablodan kayıt siler. WHERE kullanılmazsa tüm kayıtlar silinebilir."
  },
  {
    q: "SQL'de sonuçları koşula göre filtrelemek için hangi ifade kullanılır?",
    t: "mcq",
    o: ["ORDER BY", "GROUP BY", "WHERE", "CREATE", "DROP"],
    a: 2,
    difficulty: "easy",
    week: 4,
    topic: "Veritabanı Yönetim Sistemleri / WHERE",
    importance: 5,
    explanation: "WHERE, hangi kayıtların seçileceğini, güncelleneceğini veya silineceğini belirleyen koşul bölümüdür."
  },
  {
    q: "SQL'de sonuçları sıralamak için hangi ifade kullanılır?",
    t: "mcq",
    o: ["WHERE", "INSERT", "DELETE", "ORDER BY", "CREATE"],
    a: 3,
    difficulty: "easy",
    week: 4,
    topic: "Veritabanı Yönetim Sistemleri / ORDER BY",
    importance: 4,
    explanation: "ORDER BY, sonuçları belirli bir sütuna göre artan veya azalan sıralar."
  },
  {
    q: "SQL'de iki tabloyu ortak alan üzerinden birleştirmek için genel olarak hangi yapı kullanılır?",
    t: "mcq",
    o: ["WHERE only", "CREATE", "DROP", "BACKUP", "JOIN"],
    a: 4,
    difficulty: "medium",
    week: 5,
    topic: "Veritabanı Yönetim Sistemleri / JOIN",
    importance: 5,
    explanation: "JOIN, ilişkili tabloları ortak alanlar üzerinden birleştirir. Örneğin öğrenci ve bölüm tabloları birleştirilebilir."
  },
  {
    q: "LEFT JOIN ne yapar?",
    t: "mcq",
    o: ["Sol tablodaki tüm kayıtları ve eşleşen sağ tablo kayıtlarını getirir", "Sadece sağ tabloyu siler", "Veritabanını yedekler", "Sadece yeni tablo oluşturur", "Tüm kayıtları siler"],
    a: 0,
    difficulty: "medium",
    week: 5,
    topic: "Veritabanı Yönetim Sistemleri / LEFT JOIN",
    importance: 4,
    explanation: "LEFT JOIN, sol tablodaki tüm kayıtları getirir; sağ tabloda eşleşme varsa onu da ekler, yoksa NULL dönebilir."
  },
  {
    q: "Normalizasyonun temel amacı nedir?",
    t: "mcq",
    o: ["Veriyi düzensiz çoğaltmak", "Veri tekrarını azaltmak ve tutarlılığı artırmak", "Tablodaki tüm kayıtları silmek", "Sadece kullanıcı eklemek", "Veritabanını kapatmak"],
    a: 1,
    difficulty: "medium",
    week: 6,
    topic: "Veritabanı Yönetim Sistemleri / Normalizasyon",
    importance: 5,
    explanation: "Normalizasyon, veri tekrarını azaltıp veri bütünlüğünü korumak için tabloları düzenleme işlemidir."
  },
  {
    q: "1NF için temel şartlardan biri hangisidir?",
    t: "mcq",
    o: ["Her tabloda resim olmalı", "Tüm kayıtlar silinmeli", "Alanlar atomik olmalı", "Tablo adı boş olmalı", "JOIN yasak olmalı"],
    a: 2,
    difficulty: "hard",
    week: 6,
    topic: "Veritabanı Yönetim Sistemleri / 1NF",
    importance: 4,
    explanation: "1NF, alanların atomik yani bölünemeyen tek değerler içermesini ister. Bir hücrede birden fazla değer tutulmamalıdır."
  },
  {
    q: "Veritabanı yedekleme işleminin temel amacı nedir?",
    t: "mcq",
    o: ["Veriyi bilinçli silmek", "Tablo adını değiştirmek", "Sorguyu renklendirmek", "Veri kaybına karşı geri dönüş sağlayabilmek", "Kullanıcı arayüzü çizmek"],
    a: 3,
    difficulty: "easy",
    week: 7,
    topic: "Veritabanı Yönetim Sistemleri / Yedekleme",
    importance: 5,
    explanation: "Yedekleme, sistem arızası veya yanlış silme gibi durumlarda veriyi geri döndürmek için yapılır."
  },
  {
    q: "Bir sütunda boş değer girilmesini engelleyen SQL kısıtı hangisidir?",
    t: "mcq",
    o: ["DEFAULT", "CHECK", "JOIN", "ORDER BY", "NOT NULL"],
    a: 4,
    difficulty: "medium",
    week: 7,
    topic: "Veritabanı Yönetim Sistemleri / Constraint",
    importance: 4,
    explanation: "NOT NULL, bir sütunun boş bırakılmasını engeller. Veri bütünlüğünü artırır."
  }
];    importance: 4,
    explanation: "Enabled false yapılırsa kontrol pasif olur ve kullanıcı onunla işlem yapamaz. Visible gizler, Enabled pasifleştirir."
  },
  {
    q: "Birden fazla seçeneğin aynı anda işaretlenebilmesi için hangi kontrol daha uygundur?",
    t: "mcq",
    o: ["CheckBox", "RadioButton", "Label", "TextBox", "Timer"],
    a: 0,
    difficulty: "easy",
    week: 3,
    topic: "CheckBox",
    importance: 5,
    explanation: "CheckBox, birden fazla seçeneğin aynı anda seçilebildiği durumlar için uygundur. Örneğin hobiler seçimi."
  },
  {
    q: "Açılır liste şeklinde seçim yaptırmak için hangi kontrol kullanılır?",
    t: "mcq",
    o: ["Label", "ComboBox", "PictureBox", "Timer", "Panel"],
    a: 1,
    difficulty: "easy",
    week: 3,
    topic: "ComboBox",
    importance: 5,
    explanation: "ComboBox, kullanıcıya açılır liste sunar. İl, bölüm, kategori gibi seçenekler için kullanılır."
  },
  {
    q: "Form üzerinde resim göstermek için hangi kontrol kullanılır?",
    t: "mcq",
    o: ["TextBox", "Label", "PictureBox", "Button", "ListBox"],
    a: 2,
    difficulty: "easy",
    week: 3,
    topic: "PictureBox",
    importance: 4,
    explanation: "PictureBox, form üzerinde resim göstermeye yarayan kontroldür. Logo veya fotoğraf göstermek için kullanılabilir."
  },
  {
    q: "Kullanıcıya dosya seçtirmek için kullanılan dialog hangisidir?",
    t: "mcq",
    o: ["SaveFileDialog", "ColorDialog", "FontDialog", "OpenFileDialog", "PrintDialog"],
    a: 3,
    difficulty: "medium",
    week: 3,
    topic: "OpenFileDialog",
    importance: 4,
    explanation: "OpenFileDialog, kullanıcının bilgisayardan dosya seçmesini sağlar. SaveFileDialog ise kaydetme yeri seçtirir."
  },
  {
    q: "Renk seçtirmek için kullanılan hazır dialog hangisidir?",
    t: "mcq",
    o: ["OpenFileDialog", "SaveFileDialog", "FontDialog", "PrintDialog", "ColorDialog"],
    a: 4,
    difficulty: "medium",
    week: 3,
    topic: "ColorDialog",
    importance: 3,
    explanation: "ColorDialog, kullanıcıya renk seçme penceresi açar. Seçilen renk form veya kontrol renginde kullanılabilir."
  },
  {
    q: "TextBox'tan alınan ondalıklı sayı için en uygun dönüştürme örneği hangisidir?",
    t: "mcq",
    o: ["Convert.ToDouble(txtSayi.Text)", "txtSayi.Clear()", "txtSayi.Visible", "txtSayi.Items.Add()", "txtSayi.Tick"],
    a: 0,
    difficulty: "medium",
    week: 3,
    topic: "Veri Dönüştürme",
    importance: 5,
    explanation: "TextBox.Text metin olarak gelir. Ondalıklı sayı işlemi yapılacaksa Convert.ToDouble ile double tipine çevrilir."
  },
  {
    q: "C#'ta ekrana sonuç yazdırmadan önce sayısal değeri metne çevirmek için genellikle hangi metot kullanılır?",
    t: "mcq",
    o: ["ToInt32()", "ToString()", "Clear()", "Add()", "ShowDialog()"],
    a: 1,
    difficulty: "easy",
    week: 3,
    topic: "ToString",
    importance: 5,
    explanation: "ToString(), bir değeri metne çevirir. Label.Text gibi metin bekleyen alanlarda sayıları göstermek için kullanılır."
  },
  {
    q: "Bir sayının karekökünü almak için hangi Math metodu kullanılır?",
    t: "mcq",
    o: ["Math.Pow()", "Math.Abs()", "Math.Sqrt()", "Math.Round()", "Math.Min()"],
    a: 2,
    difficulty: "easy",
    week: 2,
    topic: "Math Fonksiyonları",
    importance: 4,
    explanation: "Math.Sqrt(), karekök alır. Örneğin Math.Sqrt(9) sonucu 3 olur."
  },
  {
    q: "Bir sayının negatif olsa bile pozitif uzaklığını bulmak için hangi metot kullanılır?",
    t: "mcq",
    o: ["Math.Sqrt()", "Math.Pow()", "Math.Round()", "Math.Abs()", "Math.Max()"],
    a: 3,
    difficulty: "medium",
    week: 2,
    topic: "Math Abs",
    importance: 4,
    explanation: "Math.Abs(), mutlak değer alır. Örneğin Math.Abs(-5) sonucu 5 olur."
  },
  {
    q: "Dizideki eleman sayısını bulmak için C#'ta genellikle hangi özellik kullanılır?",
    t: "mcq",
    o: ["Text", "Visible", "Name", "Enabled", "Length"],
    a: 4,
    difficulty: "medium",
    week: 11,
    topic: "Diziler",
    importance: 5,
    explanation: "Length, dizinin kaç eleman içerdiğini verir. Ortalama hesaplarken toplamı Length değerine böleriz."
  },
  {
    q: "Bir sayının çift olup olmadığını kontrol etmek için en uygun ifade hangisidir?",
    t: "mcq",
    o: ["sayi % 2 == 0", "sayi + 2 == 0", "sayi / 2 == 0", "sayi * 2 == 0", "sayi == true"],
    a: 0,
    difficulty: "easy",
    week: 11,
    topic: "Tek Çift Kontrolü",
    importance: 5,
    explanation: "% kalan operatörüdür. Bir sayı 2'ye bölününce kalan 0 ise sayı çifttir."
  },
  {
    q: "Geriye tam sayı döndüren bir metot hangi dönüş tipiyle tanımlanır?",
    t: "mcq",
    o: ["void", "int", "string", "bool", "object"],
    a: 1,
    difficulty: "medium",
    week: 8,
    topic: "Metotlar",
    importance: 5,
    explanation: "Metot geriye tam sayı döndürecekse dönüş tipi int olmalıdır. void ise değer döndürmeyen metotlar için kullanılır."
  },
  {
    q: "try-catch yapısında beklenmeyen tüm hataları genel olarak yakalamak için hangi sınıf kullanılır?",
    t: "mcq",
    o: ["FormatException", "DivideByZeroException", "Exception", "Timer", "DialogResult"],
    a: 2,
    difficulty: "medium",
    week: 12,
    topic: "Hata Yakalama",
    importance: 5,
    explanation: "Exception genel hata sınıfıdır. Özel hata türleri yakalanmadığında genel hatalar için kullanılabilir."
  },
  {
    q: "Timer kontrolünde belirli süre doldukça çalışan olay hangisidir?",
    t: "mcq",
    o: ["Click", "Load", "TextChanged", "Tick", "Closed"],
    a: 3,
    difficulty: "medium",
    week: 3,
    topic: "Timer",
    importance: 4,
    explanation: "Timer aktifken Interval süresi doldukça Tick olayı çalışır. Sayaç ve süre işlemlerinde kullanılır."
  },
  {
    q: "Kullanıcının MessageBox üzerindeki Evet/Hayır seçimini kontrol etmek için kullanılan dönüş tipi genellikle hangisidir?",
    t: "mcq",
    o: ["int", "string", "bool only", "double", "DialogResult"],
    a: 4,
    difficulty: "hard",
    week: 3,
    topic: "DialogResult",
    importance: 3,
    explanation: "DialogResult, MessageBox gibi pencerelerden dönen sonucu temsil eder. Kullanıcı Yes, No, OK gibi seçimler yapabilir."
  },

  // =========================================================
  // ==== MOBİL PROGRAMLAMA – FLUTTER AĞIRLIKLI EK 20 =========
  // =========================================================

  {
    q: "Flutter'da kullanıcı arayüzünü tarif eden ve ekrana döndüren temel metot hangisidir?",
    t: "mcq",
    o: ["build()", "main()", "runApp()", "dispose()", "pub get"],
    a: 0,
    difficulty: "easy",
    week: 3,
    topic: "Flutter build",
    importance: 5,
    explanation: "build(), widget'ın ekranda ne göstereceğini tarif eder. Flutter arayüzü build metodunun döndürdüğü widget ağacına göre oluşturur."
  },
  {
    q: "Flutter'da uygulamanın en üst widget'ını çalıştırmak için main içinde hangi fonksiyon çağrılır?",
    t: "mcq",
    o: ["setState()", "runApp()", "build()", "Navigator.pop()", "dispose()"],
    a: 1,
    difficulty: "easy",
    week: 3,
    topic: "runApp",
    importance: 5,
    explanation: "runApp(), Flutter uygulamasını başlatır. Genellikle main() içinde ana widget ile birlikte kullanılır."
  },
  {
    q: "Flutter'da değişmeyen arayüzler için kullanılan widget sınıfı hangisidir?",
    t: "mcq",
    o: ["StatefulWidget", "MaterialApp", "StatelessWidget", "Scaffold", "Navigator"],
    a: 2,
    difficulty: "easy",
    week: 3,
    topic: "StatelessWidget",
    importance: 5,
    explanation: "StatelessWidget değişebilir state tutmaz. Ekrandaki bilgi çalışma sırasında değişmeyecekse kullanılır."
  },
  {
    q: "Flutter'da sayaç gibi ekrandaki değeri değişen yapılarda hangi widget sınıfı kullanılır?",
    t: "mcq",
    o: ["StatelessWidget", "Scaffold", "Text", "StatefulWidget", "Icon"],
    a: 3,
    difficulty: "easy",
    week: 3,
    topic: "StatefulWidget",
    importance: 5,
    explanation: "StatefulWidget, değişebilir state yani durum bilgisi olan ekranlarda kullanılır. Sayaç, form ve liste ekleme buna örnektir."
  },
  {
    q: "Flutter'da StatefulWidget içinde ekranı yenilemek için hangi metot kullanılır?",
    t: "mcq",
    o: ["print()", "main()", "runApp()", "buildOnly()", "setState()"],
    a: 4,
    difficulty: "easy",
    week: 3,
    topic: "setState",
    importance: 5,
    explanation: "setState(), veri değiştiğinde Flutter'a ekranı yeniden çizmesini söyler. State değişti ama setState yoksa ekranda değişim görünmeyebilir."
  },
  {
    q: "Flutter'da bir sayfanın üst başlık çubuğunu oluşturmak için hangi widget kullanılır?",
    t: "mcq",
    o: ["AppBar", "Body", "Column", "TextField", "ListTile"],
    a: 0,
    difficulty: "easy",
    week: 3,
    topic: "AppBar",
    importance: 5,
    explanation: "AppBar, sayfanın üst kısmındaki başlık çubuğudur. Başlık, menü ve ikonlar burada gösterilebilir."
  },
  {
    q: "Flutter'da sayfanın temel Material iskeletini kuran widget hangisidir?",
    t: "mcq",
    o: ["Text", "Scaffold", "Padding", "Icon", "Image"],
    a: 1,
    difficulty: "easy",
    week: 3,
    topic: "Scaffold",
    importance: 5,
    explanation: "Scaffold, sayfanın iskeletidir. AppBar, body, drawer ve floatingActionButton gibi alanları barındırabilir."
  },
  {
    q: "Flutter'da widget'ları alt alta yerleştirmek için hangi widget kullanılır?",
    t: "mcq",
    o: ["Row", "Stack", "Column", "MaterialApp", "Navigator"],
    a: 2,
    difficulty: "easy",
    week: 3,
    topic: "Column",
    importance: 5,
    explanation: "Column, children listesindeki widget'ları dikey biçimde alt alta dizer."
  },
  {
    q: "Flutter'da widget'ları yan yana yerleştirmek için hangi widget kullanılır?",
    t: "mcq",
    o: ["Column", "Stack", "Container", "Row", "Scaffold"],
    a: 3,
    difficulty: "easy",
    week: 3,
    topic: "Row",
    importance: 5,
    explanation: "Row, widget'ları yatay yönde yan yana dizer. Column ise alt alta dizer."
  },
  {
    q: "Flutter'da widget'ların boş alanı orantılı paylaşması için hangi widget sık kullanılır?",
    t: "mcq",
    o: ["Text", "Icon", "Image", "SnackBar", "Expanded"],
    a: 4,
    difficulty: "medium",
    week: 4,
    topic: "Expanded",
    importance: 4,
    explanation: "Expanded, Row veya Column içindeki widget'ın kullanılabilir boş alanı doldurmasını sağlar. Responsive yerleşimlerde sık kullanılır."
  },
  {
    q: "Flutter'da kullanıcıdan metin girişi almak için hangi widget kullanılır?",
    t: "mcq",
    o: ["TextField", "Text", "Icon", "AppBar", "Image"],
    a: 0,
    difficulty: "easy",
    week: 5,
    topic: "TextField",
    importance: 5,
    explanation: "TextField, kullanıcıdan yazı almak için kullanılır. İsim, şifre, görev veya arama metni almak için uygundur."
  },
  {
    q: "TextField içindeki yazıyı kontrol etmek ve okumak için hangi yapı kullanılır?",
    t: "mcq",
    o: ["Navigator", "TextEditingController", "AppBar", "Scaffold", "MaterialApp"],
    a: 1,
    difficulty: "medium",
    week: 5,
    topic: "TextEditingController",
    importance: 5,
    explanation: "TextEditingController, TextField içindeki yazıyı okumak, değiştirmek ve kontrol etmek için kullanılır."
  },
  {
    q: "TextEditingController gibi kaynakları temizlemek için StatefulWidget içinde genellikle hangi metot kullanılır?",
    t: "mcq",
    o: ["build()", "runApp()", "dispose()", "main()", "push()"],
    a: 2,
    difficulty: "hard",
    week: 5,
    topic: "dispose",
    importance: 4,
    explanation: "dispose(), widget artık kullanılmayacakken kaynakları temizlemek için çalışır. Controller gibi nesneler burada temizlenebilir."
  },
  {
    q: "Flutter'da çok sayıda veriyi performanslı listelemek için hangi yapı yaygın kullanılır?",
    t: "mcq",
    o: ["Text.only", "Column.only", "Container.all", "ListView.builder", "MaterialApp.body"],
    a: 3,
    difficulty: "medium",
    week: 5,
    topic: "ListView.builder",
    importance: 5,
    explanation: "ListView.builder, liste elemanlarını ihtiyaç oldukça üretir. Çok sayıda veri gösterirken performans açısından daha uygundur."
  },
  {
    q: "Flutter'da sayfalar arasında ileri geçiş yapmak için genellikle hangi Navigator metodu kullanılır?",
    t: "mcq",
    o: ["pop()", "dispose()", "setState()", "build()", "push()"],
    a: 4,
    difficulty: "medium",
    week: 5,
    topic: "Navigator push",
    importance: 5,
    explanation: "Navigator.push(), yeni bir sayfayı ekran yığınına ekler ve kullanıcıyı o sayfaya götürür. Geri dönüş için pop() kullanılır."
  },
  {
    q: "Flutter'da önceki sayfaya geri dönmek için hangi Navigator metodu kullanılır?",
    t: "mcq",
    o: ["Navigator.pop(context)", "Navigator.run(context)", "Navigator.build(context)", "Navigator.state(context)", "Navigator.reload(context)"],
    a: 0,
    difficulty: "easy",
    week: 5,
    topic: "Navigator pop",
    importance: 5,
    explanation: "Navigator.pop(context), mevcut sayfayı kapatır ve önceki sayfaya döner."
  },
  {
    q: "Flutter projesinde paket ve asset tanımlamaları hangi dosyada yapılır?",
    t: "mcq",
    o: ["main.dart", "pubspec.yaml", "index.html", "database.sql", "style.css"],
    a: 1,
    difficulty: "easy",
    week: 6,
    topic: "pubspec.yaml",
    importance: 5,
    explanation: "pubspec.yaml, Flutter projesinin yapılandırma dosyasıdır. Paketler, assetler, fontlar ve sürüm bilgileri burada tanımlanır."
  },
  {
    q: "pubspec.yaml dosyasına yeni paket eklendikten sonra bağımlılıkları indirmek için hangi komut kullanılır?",
    t: "mcq",
    o: ["flutter clean only", "dart print", "flutter pub get", "flutter delete", "flutter stop"],
    a: 2,
    difficulty: "medium",
    week: 6,
    topic: "flutter pub get",
    importance: 5,
    explanation: "flutter pub get, pubspec.yaml içindeki paketleri indirir ve projeye hazırlar."
  },
  {
    q: "Flutter'da kullanıcıya kısa süreli alt uyarı mesajı göstermek için hangi widget kullanılır?",
    t: "mcq",
    o: ["AppBar", "Column", "Container", "SnackBar", "MaterialApp"],
    a: 3,
    difficulty: "medium",
    week: 7,
    topic: "SnackBar",
    importance: 4,
    explanation: "SnackBar, kullanıcıya kısa bilgi mesajı göstermek için kullanılır. Örneğin 'Görev eklendi' mesajı."
  },
  {
    q: "Flutter'da ekran ölçüsü gibi cihaz bilgilerini almak için hangi yapı kullanılır?",
    t: "mcq",
    o: ["Text", "Icon", "Button", "Navigator", "MediaQuery"],
    a: 4,
    difficulty: "medium",
    week: 8,
    topic: "MediaQuery",
    importance: 4,
    explanation: "MediaQuery, ekran genişliği, yüksekliği ve cihaz bilgilerini almak için kullanılır. Responsive tasarımda önemlidir."
  },

  // =========================================================
  // ==== İNTERNET PROGRAMLAMA – EK 20 FİNAL SORUSU ==========
  // =========================================================

  {
    q: "PHP kodları genellikle hangi etiketler arasına yazılır?",
    t: "mcq",
    o: ["<?php ... ?>", "<html> ... </html>", "<css> ... </css>", "<sql> ... </sql>", "<script type='php'>"],
    a: 0,
    difficulty: "easy",
    week: 3,
    topic: "PHP Temel Sözdizimi",
    importance: 5,
    explanation: "PHP kodları genellikle <?php ile başlar ve ?> ile biter. Sunucu bu aradaki kodları PHP olarak yorumlar."
  },
  {
    q: "PHP'de değişkenler hangi sembol ile başlar?",
    t: "mcq",
    o: ["#", "$", "@", "&", "%"],
    a: 1,
    difficulty: "easy",
    week: 3,
    topic: "PHP Değişken",
    importance: 5,
    explanation: "PHP'de değişkenler $ işareti ile başlar. Örneğin $ad, $yas, $sonuc gibi."
  },
  {
    q: "PHP'de ekrana yazı yazdırmak için en sık kullanılan ifade hangisidir?",
    t: "mcq",
    o: ["input", "select", "echo", "where", "mkdir"],
    a: 2,
    difficulty: "easy",
    week: 3,
    topic: "echo",
    importance: 5,
    explanation: "echo, PHP'de ekrana metin veya değişken değeri yazdırmak için kullanılır."
  },
  {
    q: "PHP'de aynı değişkenin farklı sabit değerlerine göre işlem yapmak için en uygun yapı hangisidir?",
    t: "mcq",
    o: ["for", "while", "foreach", "switch-case", "include"],
    a: 3,
    difficulty: "easy",
    week: 3,
    topic: "switch-case",
    importance: 5,
    explanation: "switch-case, bir değişkenin farklı değerlerine göre işlem yapmayı sağlar. Menü seçimlerinde sık kullanılır."
  },
  {
    q: "PHP'de bir dizinin elemanlarını tek tek gezmek için en uygun döngü hangisidir?",
    t: "mcq",
    o: ["if", "else", "switch", "echo", "foreach"],
    a: 4,
    difficulty: "easy",
    week: 4,
    topic: "foreach",
    importance: 5,
    explanation: "foreach, dizi elemanlarını sırayla dolaşmak için kullanılır. Her eleman üzerinde işlem yapılmasını kolaylaştırır."
  },
  {
    q: "PHP'de bir metindeki belirli karakter aralığını almak için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["substr()", "strlen()", "trim()", "strtolower()", "explode()"],
    a: 0,
    difficulty: "easy",
    week: 5,
    topic: "substr",
    importance: 5,
    explanation: "substr(), string içinden belirli başlangıç ve uzunluğa göre parça alır. Alt metin çıkarmak için kullanılır."
  },
  {
    q: "PHP'de bir metindeki kelimeyi başka bir kelimeyle değiştirmek için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["strlen()", "str_replace()", "substr()", "trim()", "mb_strlen()"],
    a: 1,
    difficulty: "easy",
    week: 5,
    topic: "str_replace",
    importance: 5,
    explanation: "str_replace(), bir metindeki aranan ifadeyi yeni ifadeyle değiştirir."
  },
  {
    q: "PHP'de metni diziye bölmek için genellikle hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["implode()", "trim()", "explode()", "strlen()", "ucfirst()"],
    a: 2,
    difficulty: "medium",
    week: 5,
    topic: "explode",
    importance: 4,
    explanation: "explode(), belirli ayırıcıya göre metni parçalara böler ve dizi döndürür. Örneğin virgülle ayrılmış sayıları ayırmak için kullanılır."
  },
  {
    q: "HTML formunda PHP tarafında okunacak alan adını belirleyen özellik hangisidir?",
    t: "mcq",
    o: ["id", "class", "style", "name", "src"],
    a: 3,
    difficulty: "easy",
    week: 6,
    topic: "Form name",
    importance: 5,
    explanation: "name özelliği, form verisinin PHP tarafında hangi anahtarla geleceğini belirler. Örneğin name='ad' için $_POST['ad'] kullanılır."
  },
  {
    q: "HTML formunda verinin gönderileceği PHP dosyasını belirleyen özellik hangisidir?",
    t: "mcq",
    o: ["name", "method", "type", "value", "action"],
    a: 4,
    difficulty: "easy",
    week: 6,
    topic: "Form action",
    importance: 5,
    explanation: "action, form gönderildiğinde isteğin hangi PHP dosyasına gideceğini belirtir."
  },
  {
    q: "Şifre gibi URL'de görünmemesi gereken form verileri için hangi yöntem daha uygundur?",
    t: "mcq",
    o: ["POST", "GET", "REQUEST", "LINK", "TRACE"],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "POST",
    importance: 5,
    explanation: "POST, veriyi URL'de göstermez; HTTP isteğinin gövdesinde taşır. Bu yüzden formlar ve hassas veriler için GET'e göre daha uygundur."
  },
  {
    q: "PHP'de dosya yükleme işleminde geçici dosya yolunu veren $_FILES alanı hangisidir?",
    t: "mcq",
    o: ["name", "tmp_name", "type", "size", "error"],
    a: 1,
    difficulty: "medium",
    week: 7,
    topic: "tmp_name",
    importance: 5,
    explanation: "tmp_name, yüklenen dosyanın sunucuda geçici olarak tutulduğu yolu verir. Dosya kalıcı klasöre buradan taşınır."
  },
  {
    q: "PHP dosya yükleme işleminde dosya boyutu hangi $_FILES alanından okunur?",
    t: "mcq",
    o: ["name", "type", "size", "tmp_name", "error"],
    a: 2,
    difficulty: "easy",
    week: 7,
    topic: "Dosya Boyutu",
    importance: 4,
    explanation: "size, yüklenen dosyanın boyut bilgisini verir. Dosya boyutu kontrolü güvenlik için önemlidir."
  },
  {
    q: "Oturum kullanmadan önce PHP dosyasının başında hangi fonksiyon çağrılmalıdır?",
    t: "mcq",
    o: ["session_destroy()", "setcookie()", "mysqli_connect()", "session_start()", "password_hash()"],
    a: 3,
    difficulty: "easy",
    week: 8,
    topic: "session_start",
    importance: 5,
    explanation: "session_start(), oturumu başlatır. $_SESSION değişkeniyle sağlıklı çalışmak için sayfanın başında çağrılır."
  },
  {
    q: "PHP'de tarayıcıda saklanan küçük verilere erişmek için hangi süper global kullanılır?",
    t: "mcq",
    o: ["$_GET", "$_POST", "$_SESSION", "$_FILES", "$_COOKIE"],
    a: 4,
    difficulty: "medium",
    week: 8,
    topic: "Cookie",
    importance: 4,
    explanation: "$_COOKIE, tarayıcıda saklanan çerez verilerine erişir. Session genelde sunucuda tutulur, cookie istemci tarafındadır."
  },
  {
    q: "PHP'de oturumu tamamen bitirmek için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["session_destroy()", "session_start()", "session_id()", "setcookie()", "header()"],
    a: 0,
    difficulty: "easy",
    week: 8,
    topic: "session_destroy",
    importance: 5,
    explanation: "session_destroy(), aktif oturumu sonlandırır. Çıkış/logout işleminde kullanılır."
  },
  {
    q: "PHP'de MySQL bağlantısı için kullanılan geliştirilmiş eklenti hangisidir?",
    t: "mcq",
    o: ["PDO only", "mysqli", "session", "cookie", "strlen"],
    a: 1,
    difficulty: "easy",
    week: 9,
    topic: "mysqli",
    importance: 5,
    explanation: "mysqli, PHP ile MySQL veritabanı arasında bağlantı ve sorgu işlemleri yapmak için kullanılan eklentidir."
  },
  {
    q: "Prepared statement içinde sorguyu çalıştıran metot hangisidir?",
    t: "mcq",
    o: ["prepare()", "bind_param()", "execute()", "fetch_only()", "connect()"],
    a: 2,
    difficulty: "medium",
    week: 11,
    topic: "execute",
    importance: 5,
    explanation: "execute(), daha önce prepare ile hazırlanmış sorguyu çalıştırır. prepare hazırlar, bind_param veri bağlar, execute çalıştırır."
  },
  {
    q: "SQL'de mevcut bir kaydı değiştirmek için hangi komut kullanılır?",
    t: "mcq",
    o: ["INSERT", "SELECT", "DELETE", "UPDATE", "CREATE"],
    a: 3,
    difficulty: "easy",
    week: 13,
    topic: "UPDATE",
    importance: 5,
    explanation: "UPDATE, var olan kaydın değerlerini değiştirmek için kullanılır. Genellikle WHERE ile hedef kayıt seçilir."
  },
  {
    q: "file_put_contents() ile dosya sonuna ekleme yapmak için hangi sabit kullanılır?",
    t: "mcq",
    o: ["FILE_START", "FILE_WRITE", "FILE_READ", "FILE_END", "FILE_APPEND"],
    a: 4,
    difficulty: "medium",
    week: 14,
    topic: "FILE_APPEND",
    importance: 5,
    explanation: "FILE_APPEND, mevcut dosya içeriğini silmeden dosyanın sonuna ekleme yapılmasını sağlar."
  },

  // =========================================================
  // ==== VERİTABANI YÖNETİM SİSTEMLERİ – EK 20 FİNAL SORUSU ==
  // =========================================================

  {
    q: "İlişkisel veritabanında veriler temel olarak hangi yapıda saklanır?",
    t: "mcq",
    o: ["Tablo", "Resim", "Video", "CSS dosyası", "Tarayıcı geçmişi"],
    a: 0,
    difficulty: "easy",
    week: 1,
    topic: "İlişkisel Veritabanı",
    importance: 5,
    explanation: "İlişkisel veritabanında veriler satır ve sütunlardan oluşan tablolar içinde saklanır."
  },
  {
    q: "Bir tabloda yatay kayıt satırına genellikle ne denir?",
    t: "mcq",
    o: ["Sütun", "Satır/Kayıt", "Veritabanı", "İndeks", "Şema"],
    a: 1,
    difficulty: "easy",
    week: 1,
    topic: "Satır Kayıt",
    importance: 5,
    explanation: "Satır veya kayıt, tablodaki tek bir veri örneğini temsil eder. Örneğin bir öğrenci bilgisi bir satır olabilir."
  },
  {
    q: "Bir tabloda aynı tür bilgileri tutan dikey alana ne denir?",
    t: "mcq",
    o: ["Kayıt", "Satır", "Sütun/Alan", "Backup", "Transaction"],
    a: 2,
    difficulty: "easy",
    week: 1,
    topic: "Sütun Alan",
    importance: 5,
    explanation: "Sütun, tablodaki aynı tür bilgileri tutar. Örneğin ad, soyad, yaş birer sütundur."
  },
  {
    q: "SQL Server'da otomatik artan sayı üretmek için kullanılan özellik hangisidir?",
    t: "mcq",
    o: ["VARCHAR", "NOT NULL", "FOREIGN KEY", "IDENTITY", "ORDER BY"],
    a: 3,
    difficulty: "medium",
    week: 2,
    topic: "IDENTITY",
    importance: 5,
    explanation: "IDENTITY, SQL Server'da genellikle id alanının otomatik artmasını sağlar. MySQL'deki AUTO_INCREMENT mantığına benzer."
  },
  {
    q: "Bir alana boş değer girilmesini engelleyen kısıt hangisidir?",
    t: "mcq",
    o: ["PRIMARY KEY only", "ORDER BY", "GROUP BY", "SELECT", "NOT NULL"],
    a: 4,
    difficulty: "easy",
    week: 2,
    topic: "NOT NULL",
    importance: 5,
    explanation: "NOT NULL, ilgili sütunun boş bırakılmasını engeller. Veri bütünlüğünü korur."
  },
  {
    q: "Bir sütundaki değerlerin tekrar etmesini engelleyen kısıt hangisidir?",
    t: "mcq",
    o: ["UNIQUE", "WHERE", "FROM", "JOIN", "BACKUP"],
    a: 0,
    difficulty: "medium",
    week: 2,
    topic: "UNIQUE",
    importance: 4,
    explanation: "UNIQUE kısıtı, bir sütundaki değerlerin tekrarlanmasını engeller. Örneğin e-posta alanında kullanılabilir."
  },
  {
    q: "Bir sütuna değer girilmediğinde otomatik atanacak değeri belirleyen kısıt hangisidir?",
    t: "mcq",
    o: ["CHECK", "DEFAULT", "ORDER BY", "HAVING", "JOIN"],
    a: 1,
    difficulty: "medium",
    week: 2,
    topic: "DEFAULT",
    importance: 4,
    explanation: "DEFAULT, kullanıcı değer girmezse kullanılacak varsayılan değeri belirler."
  },
  {
    q: "Bir sütundaki değerin belirli şartı sağlamasını zorunlu kılan kısıt hangisidir?",
    t: "mcq",
    o: ["SELECT", "INSERT", "CHECK", "BACKUP", "VIEW"],
    a: 2,
    difficulty: "medium",
    week: 2,
    topic: "CHECK",
    importance: 4,
    explanation: "CHECK kısıtı, değerlerin belirli kurala uymasını sağlar. Örneğin yaş >= 18 şartı verilebilir."
  },
  {
    q: "SQL'de tablo yapısını değiştirmek için hangi komut kullanılır?",
    t: "mcq",
    o: ["SELECT", "INSERT", "DELETE", "ALTER TABLE", "ORDER BY"],
    a: 3,
    difficulty: "medium",
    week: 3,
    topic: "ALTER TABLE",
    importance: 4,
    explanation: "ALTER TABLE, mevcut tablonun yapısını değiştirmek için kullanılır. Yeni sütun ekleme veya sütun değiştirme işlemleri yapılabilir."
  },
  {
    q: "SQL'de tabloyu tamamen silmek için hangi komut kullanılır?",
    t: "mcq",
    o: ["DELETE ROW", "SELECT", "UPDATE", "WHERE", "DROP TABLE"],
    a: 4,
    difficulty: "medium",
    week: 3,
    topic: "DROP TABLE",
    importance: 5,
    explanation: "DROP TABLE, tabloyu yapısıyla birlikte siler. DELETE ise tablodaki kayıtları siler, tablo yapısını silmez."
  },
  {
    q: "SELECT * FROM Ogrenciler ifadesindeki * ne anlama gelir?",
    t: "mcq",
    o: ["Tüm sütunları getir", "Sadece ilk satırı getir", "Tabloyu sil", "Veritabanı oluştur", "Kayıt ekle"],
    a: 0,
    difficulty: "easy",
    week: 4,
    topic: "SELECT",
    importance: 5,
    explanation: "* işareti tüm sütunları seçmek için kullanılır. SELECT * FROM Ogrenciler tüm alanları getirir."
  },
  {
    q: "SQL'de sadece farklı/tekrarsız değerleri getirmek için hangi ifade kullanılır?",
    t: "mcq",
    o: ["ORDER BY", "DISTINCT", "JOIN", "DELETE", "DROP"],
    a: 1,
    difficulty: "medium",
    week: 4,
    topic: "DISTINCT",
    importance: 4,
    explanation: "DISTINCT, tekrar eden değerleri tekilleştirir. Örneğin aynı şehir adlarını bir kez göstermek için kullanılır."
  },
  {
    q: "SQL'de belirli bir metin desenine göre arama yapmak için hangi operatör kullanılır?",
    t: "mcq",
    o: ["INTO", "DROP", "LIKE", "CREATE", "DEFAULT"],
    a: 2,
    difficulty: "medium",
    week: 4,
    topic: "LIKE",
    importance: 5,
    explanation: "LIKE, metin desenine göre arama yapar. Örneğin Ad LIKE 'A%' A ile başlayan adları getirir."
  },
  {
    q: "SQL'de birden fazla olası değerden herhangi birine eşit olan kayıtları seçmek için hangi operatör kullanılır?",
    t: "mcq",
    o: ["LIKE", "JOIN", "ORDER", "IN", "DROP"],
    a: 3,
    difficulty: "medium",
    week: 4,
    topic: "IN",
    importance: 4,
    explanation: "IN, bir değerin verilen liste içindeki değerlerden biri olup olmadığını kontrol eder."
  },
  {
    q: "SQL'de iki değer aralığındaki kayıtları seçmek için hangi operatör kullanılır?",
    t: "mcq",
    o: ["LIKE", "IN", "JOIN", "CREATE", "BETWEEN"],
    a: 4,
    difficulty: "medium",
    week: 4,
    topic: "BETWEEN",
    importance: 4,
    explanation: "BETWEEN, iki değer arasındaki kayıtları seçer. Örneğin yas BETWEEN 18 AND 25."
  },
  {
    q: "INNER JOIN ne yapar?",
    t: "mcq",
    o: ["İki tabloda eşleşen kayıtları getirir", "Sol tablonun tüm kayıtlarını koşulsuz getirir", "Tabloyu siler", "Yedek alır", "Sütun ekler"],
    a: 0,
    difficulty: "medium",
    week: 5,
    topic: "INNER JOIN",
    importance: 5,
    explanation: "INNER JOIN, iki tabloda eşleşen kayıtları getirir. Eşleşmeyen kayıtlar sonuçta yer almaz."
  },
  {
    q: "COUNT() fonksiyonu ne işe yarar?",
    t: "mcq",
    o: ["Ortalama alır", "Kayıt sayısını bulur", "En büyük değeri bulur", "Tabloyu siler", "Metin birleştirir"],
    a: 1,
    difficulty: "easy",
    week: 5,
    topic: "COUNT",
    importance: 5,
    explanation: "COUNT(), kayıt sayısını verir. Örneğin SELECT COUNT(*) FROM Ogrenciler toplam öğrenci sayısını döndürür."
  },
  {
    q: "AVG() fonksiyonu ne işe yarar?",
    t: "mcq",
    o: ["Toplam alır", "En küçük değeri bulur", "Ortalama hesaplar", "Sıralama yapar", "Silme yapar"],
    a: 2,
    difficulty: "easy",
    week: 5,
    topic: "AVG",
    importance: 5,
    explanation: "AVG(), sayısal değerlerin ortalamasını hesaplar. Not ortalaması gibi işlemlerde kullanılır."
  },
  {
    q: "GROUP BY ne için kullanılır?",
    t: "mcq",
    o: ["Tablo silmek için", "Kayıt eklemek için", "Alan adı değiştirmek için", "Kayıtları gruplamak için", "Veritabanı kapatmak için"],
    a: 3,
    difficulty: "medium",
    week: 5,
    topic: "GROUP BY",
    importance: 5,
    explanation: "GROUP BY, kayıtları belirli sütuna göre gruplar. Örneğin bölümlere göre öğrenci sayısı almak için kullanılır."
  },
  {
    q: "GROUP BY sonrası gruplara koşul uygulamak için hangi ifade kullanılır?",
    t: "mcq",
    o: ["WHERE only", "ORDER ONLY", "JOIN ONLY", "DROP", "HAVING"],
    a: 4,
    difficulty: "hard",
    week: 5,
    topic: "HAVING",
    importance: 4,
    explanation: "HAVING, gruplandırılmış sonuçlar üzerinde koşul uygulamak için kullanılır. WHERE satırlara, HAVING gruplara uygulanır."
  }
];
