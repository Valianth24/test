// Mobil Programlama – Flutter / BTK Akademi Odaklı 30 Soruluk Final Soru Bankası
// Konu: Flutter, Dart, Widget, State, setState, MaterialApp, Scaffold, To-Do mantığı
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]
// Not: a = doğru şık index’i (0=A, 1=B, 2=C, 3=D, 4=E)

window.questionBank = [
  // =========================================================
  // ==== FLUTTER TEMELLERİ / BTK AKADEMİ FİNAL SETİ (30) ====
  // =========================================================

  {
    q: "Flutter en doğru şekilde nedir?",
    t: "mcq",
    o: [
      "Tek kod tabanıyla mobil, web ve masaüstü uygulama geliştirmeyi sağlayan framework",
      "Sadece veritabanı yönetmek için kullanılan sistem",
      "Sadece Android cihazlarda çalışan işletim sistemi",
      "Sadece resim düzenleme programı",
      "Sadece internet protokolü"
    ],
    a: 0,
    difficulty: "easy",
    week: 1,
    topic: "Flutter Temelleri",
    importance: 5,
    explanation: "Flutter, Google tarafından geliştirilen açık kaynaklı bir framework'tür. Framework, uygulama geliştirmek için hazır yapı ve araçlar sunan çatıdır. Flutter ile tek koddan Android, iOS, web ve masaüstü çıktısı alınabilir."
  },
  {
    q: "Flutter uygulamaları geliştirmek için kullanılan programlama dili hangisidir?",
    t: "mcq",
    o: [
      "Kotlin",
      "Dart",
      "PHP",
      "SQL",
      "HTML"
    ],
    a: 1,
    difficulty: "easy",
    week: 1,
    topic: "Dart Dili",
    importance: 5,
    explanation: "Flutter bir framework'tür; Flutter içinde kod yazmak için Dart dili kullanılır. Yani Flutter araçtır, Dart ise o araçla yazdığımız programlama dilidir."
  },
  {
    q: "Flutter'da ekranda görünen arayüz parçalarına genel olarak ne denir?",
    t: "mcq",
    o: [
      "Database",
      "Compiler",
      "Widget",
      "Server",
      "Router"
    ],
    a: 2,
    difficulty: "easy",
    week: 1,
    topic: "Widget Mantığı",
    importance: 5,
    explanation: "Flutter'da arayüz widget'lardan oluşur. Widget, ekrandaki yazı, buton, kutu, liste veya sayfa iskeleti gibi arayüz parçasıdır."
  },
  {
    q: "Flutter uygulamasında programın başlangıç noktası hangi fonksiyondur?",
    t: "mcq",
    o: [
      "build()",
      "setState()",
      "initState()",
      "main()",
      "dispose()"
    ],
    a: 3,
    difficulty: "easy",
    week: 1,
    topic: "main Fonksiyonu",
    importance: 5,
    explanation: "main() fonksiyonu Dart ve Flutter uygulamasının başlangıç noktasıdır. Program ilk olarak main() içinden çalışmaya başlar."
  },
  {
    q: "Flutter uygulamasını ekrana başlatmak için genellikle hangi fonksiyon kullanılır?",
    t: "mcq",
    o: [
      "print()",
      "startApp()",
      "openApp()",
      "buildApp()",
      "runApp()"
    ],
    a: 4,
    difficulty: "easy",
    week: 1,
    topic: "runApp",
    importance: 5,
    explanation: "runApp(), Flutter uygulamasını başlatır ve verilen ana widget'ı ekrana yerleştirir. Genellikle main() fonksiyonu içinde kullanılır."
  },

  {
    q: "Flutter'da Material Design tabanlı uygulamanın ana yapısını kuran widget hangisidir?",
    t: "mcq",
    o: [
      "MaterialApp",
      "TextField",
      "Column",
      "Icon",
      "Image"
    ],
    a: 0,
    difficulty: "easy",
    week: 2,
    topic: "MaterialApp",
    importance: 5,
    explanation: "MaterialApp, Flutter uygulamasının ana Material Design yapısını kurar. Tema, ana sayfa, sayfa yönlendirme gibi temel uygulama ayarları burada başlar."
  },
  {
    q: "Flutter'da bir sayfanın temel iskeletini oluşturan widget hangisidir?",
    t: "mcq",
    o: [
      "Text",
      "Scaffold",
      "Padding",
      "Icon",
      "Row"
    ],
    a: 1,
    difficulty: "easy",
    week: 2,
    topic: "Scaffold",
    importance: 5,
    explanation: "Scaffold, bir sayfanın temel iskeletidir. İçinde AppBar, body, drawer, floatingActionButton gibi alanlar bulunabilir."
  },
  {
    q: "Scaffold içinde sayfanın ana içerik bölümünü belirtmek için hangi özellik kullanılır?",
    t: "mcq",
    o: [
      "title",
      "icon",
      "body",
      "theme",
      "route"
    ],
    a: 2,
    difficulty: "easy",
    week: 2,
    topic: "Scaffold Body",
    importance: 5,
    explanation: "body, Scaffold içindeki ana içerik alanıdır. Ekranda gösterilecek asıl widget'lar genellikle body içine yazılır."
  },
  {
    q: "Flutter'da üst başlık çubuğu oluşturmak için hangi widget kullanılır?",
    t: "mcq",
    o: [
      "Container",
      "ListView",
      "TextField",
      "AppBar",
      "Navigator"
    ],
    a: 3,
    difficulty: "easy",
    week: 2,
    topic: "AppBar",
    importance: 5,
    explanation: "AppBar, uygulamanın üst kısmındaki başlık çubuğudur. Sayfa başlığı, ikonlar ve menü işlemleri burada gösterilebilir."
  },
  {
    q: "Flutter'da ekranda yazı göstermek için hangi widget kullanılır?",
    t: "mcq",
    o: [
      "Row",
      "Column",
      "Stack",
      "Container",
      "Text"
    ],
    a: 4,
    difficulty: "easy",
    week: 2,
    topic: "Text Widget",
    importance: 5,
    explanation: "Text widget'ı ekranda yazı göstermek için kullanılır. Örneğin Text('Merhaba') ekrana Merhaba yazdırır."
  },

  {
    q: "Widget'ları yatay yani yan yana dizmek için hangi Flutter widget'ı kullanılır?",
    t: "mcq",
    o: [
      "Row",
      "Column",
      "Stack",
      "Scaffold",
      "MaterialApp"
    ],
    a: 0,
    difficulty: "easy",
    week: 3,
    topic: "Row",
    importance: 5,
    explanation: "Row, çocuk widget'ları yatay yönde yani yan yana dizer. Row kelime olarak satır anlamına gelir."
  },
  {
    q: "Widget'ları dikey yani alt alta dizmek için hangi Flutter widget'ı kullanılır?",
    t: "mcq",
    o: [
      "Row",
      "Column",
      "Stack",
      "Container",
      "Icon"
    ],
    a: 1,
    difficulty: "easy",
    week: 3,
    topic: "Column",
    importance: 5,
    explanation: "Column, çocuk widget'ları dikey yönde yani alt alta dizer. Form ekranları ve menülerde çok sık kullanılır."
  },
  {
    q: "Widget'ları üst üste bindirerek yerleştirmek için hangi widget kullanılır?",
    t: "mcq",
    o: [
      "Row",
      "Column",
      "Stack",
      "Text",
      "Scaffold"
    ],
    a: 2,
    difficulty: "medium",
    week: 3,
    topic: "Stack",
    importance: 4,
    explanation: "Stack, widget'ları üst üste yerleştirir. Örneğin bir resmin üstüne yazı koymak için kullanılabilir."
  },
  {
    q: "Flutter'da genişlik, yükseklik, renk ve boşluk gibi ayarlar verilebilen kutu yapısı hangisidir?",
    t: "mcq",
    o: [
      "Text",
      "Icon",
      "Navigator",
      "Container",
      "MaterialApp"
    ],
    a: 3,
    difficulty: "easy",
    week: 3,
    topic: "Container",
    importance: 5,
    explanation: "Container, kutu gibi düşünülebilir. İçine başka widget alabilir; renk, genişlik, yükseklik, padding ve margin gibi ayarlar verilebilir."
  },
  {
    q: "Bir widget'ın etrafına iç boşluk vermek için genellikle hangi widget kullanılır?",
    t: "mcq",
    o: [
      "Text",
      "Image",
      "Navigator",
      "ListView",
      "Padding"
    ],
    a: 4,
    difficulty: "easy",
    week: 3,
    topic: "Padding",
    importance: 4,
    explanation: "Padding, içindeki widget'ın etrafına boşluk verir. Örneğin yazının kenarlara yapışmasını engeller."
  },

  {
    q: "Çalışma sırasında değişmeyen ekrana sahip widget türü hangisidir?",
    t: "mcq",
    o: [
      "StatelessWidget",
      "StatefulWidget",
      "setState",
      "Navigator",
      "TextField"
    ],
    a: 0,
    difficulty: "medium",
    week: 4,
    topic: "StatelessWidget",
    importance: 5,
    explanation: "StatelessWidget, değişebilir durumu olmayan widget'tır. Ekrandaki bilgi çalışma sırasında değişmeyecekse kullanılır."
  },
  {
    q: "Sayaç artması veya butona basınca ekranın değişmesi gibi durumlarda hangi widget türü kullanılır?",
    t: "mcq",
    o: [
      "StatelessWidget",
      "StatefulWidget",
      "MaterialApp",
      "AppBar",
      "Icon"
    ],
    a: 1,
    difficulty: "medium",
    week: 4,
    topic: "StatefulWidget",
    importance: 5,
    explanation: "StatefulWidget, değişebilir state yani durum bilgisi olan widget'tır. Sayaç, form, listeye ekleme gibi değişen ekranlarda kullanılır."
  },
  {
    q: "Flutter'da değişen veriyi ekrana yeniden yansıtmak için hangi metot kullanılır?",
    t: "mcq",
    o: [
      "runApp()",
      "print()",
      "setState()",
      "main()",
      "pop()"
    ],
    a: 2,
    difficulty: "medium",
    week: 4,
    topic: "setState",
    importance: 5,
    explanation: "setState(), StatefulWidget içinde veri değiştiğinde Flutter'a ekranı yeniden çizmesini söyler. Veri değişti ama setState çağrılmazsa ekran güncellenmeyebilir."
  },
  {
    q: "Flutter'da state kavramı en doğru şekilde neyi ifade eder?",
    t: "mcq",
    o: [
      "Uygulamanın mağaza açıklaması",
      "Sadece uygulama ikonu",
      "Sadece internet bağlantısı",
      "Uygulamanın o anki değişebilir durum bilgisi",
      "Sadece cihaz modeli"
    ],
    a: 3,
    difficulty: "medium",
    week: 4,
    topic: "State",
    importance: 5,
    explanation: "State, uygulamanın o anki durum bilgisidir. Örneğin sayaç değeri, seçili kutu, yazılan metin veya liste elemanları state olabilir."
  },
  {
    q: "Flutter'da widget ağacını oluşturan ve arayüzü döndüren temel metot hangisidir?",
    t: "mcq",
    o: [
      "main()",
      "runApp()",
      "dispose()",
      "push()",
      "build()"
    ],
    a: 4,
    difficulty: "medium",
    week: 4,
    topic: "build Metodu",
    importance: 5,
    explanation: "build() metodu, ekranda hangi widget'ların görüneceğini tarif eder. Flutter arayüzü bu metottan dönen widget ağacına göre oluşturur."
  },

  {
    q: "Kullanıcıdan yazı girişi almak için Flutter'da hangi widget kullanılır?",
    t: "mcq",
    o: [
      "TextField",
      "Text",
      "Icon",
      "AppBar",
      "Image"
    ],
    a: 0,
    difficulty: "easy",
    week: 5,
    topic: "TextField",
    importance: 5,
    explanation: "TextField, kullanıcıdan metin almak için kullanılır. Örneğin görev ekleme, isim girme veya arama kutusu için kullanılır."
  },
  {
    q: "Flutter'da butona basıldığında çalışacak kod genellikle hangi özellik içine yazılır?",
    t: "mcq",
    o: [
      "child",
      "onPressed",
      "title",
      "body",
      "theme"
    ],
    a: 1,
    difficulty: "easy",
    week: 5,
    topic: "Button onPressed",
    importance: 5,
    explanation: "onPressed, butona basıldığında çalışacak fonksiyonu belirtir. Örneğin kaydetme, silme veya sayaç artırma işlemi burada yapılır."
  },
  {
    q: "Flutter'da çok sayıda veriyi liste halinde göstermek için hangi widget kullanılır?",
    t: "mcq",
    o: [
      "Text",
      "Container",
      "ListView",
      "AppBar",
      "Padding"
    ],
    a: 2,
    difficulty: "easy",
    week: 5,
    topic: "ListView",
    importance: 5,
    explanation: "ListView, verileri liste halinde göstermek için kullanılır. Görev listesi, ürün listesi veya mesaj listesi buna örnektir."
  },
  {
    q: "Flutter'da sayfalar arasında geçiş yapmak için kullanılan yapı hangisidir?",
    t: "mcq",
    o: [
      "Column",
      "Text",
      "Container",
      "Navigator",
      "Padding"
    ],
    a: 3,
    difficulty: "medium",
    week: 5,
    topic: "Navigator",
    importance: 5,
    explanation: "Navigator, sayfalar arası geçişi yönetir. Yeni sayfaya gitmek için push, geri dönmek için pop kullanılır."
  },
  {
    q: "Navigator ile önceki sayfaya geri dönmek için hangi metot kullanılır?",
    t: "mcq",
    o: [
      "push()",
      "runApp()",
      "setState()",
      "build()",
      "pop()"
    ],
    a: 4,
    difficulty: "medium",
    week: 5,
    topic: "Navigator pop",
    importance: 4,
    explanation: "Navigator.pop(context), mevcut sayfayı kapatıp önceki sayfaya geri döndürür. Pop kelimesi yığından çıkarmak anlamına gelir."
  },

  {
    q: "Flutter projesinde paketler, asset dosyaları ve proje ayarları hangi dosyada tanımlanır?",
    t: "mcq",
    o: [
      "pubspec.yaml",
      "main.exe",
      "index.php",
      "database.sql",
      "style.css"
    ],
    a: 0,
    difficulty: "medium",
    week: 6,
    topic: "pubspec.yaml",
    importance: 5,
    explanation: "pubspec.yaml, Flutter projesinin yapılandırma dosyasıdır. Paketler, bağımlılıklar, resimler, fontlar ve bazı proje bilgileri burada tanımlanır."
  },
  {
    q: "Flutter'da uygulama içinde kullanılacak resim, font veya ses dosyalarına genel olarak ne denir?",
    t: "mcq",
    o: [
      "Route",
      "Asset",
      "Compiler",
      "Exception",
      "Server"
    ],
    a: 1,
    difficulty: "easy",
    week: 6,
    topic: "Assets",
    importance: 4,
    explanation: "Asset, uygulama içinde kullanılan dosyadır. Resim, ikon, font, ses veya JSON dosyası asset olabilir."
  },
  {
    q: "Flutter'da başkalarının yazdığı hazır kod paketlerini projeye eklemek hangi kavramla ilişkilidir?",
    t: "mcq",
    o: [
      "Widget tree",
      "State",
      "Dependency",
      "AppBar",
      "Scaffold"
    ],
    a: 2,
    difficulty: "medium",
    week: 6,
    topic: "Package / Dependency",
    importance: 4,
    explanation: "Dependency, projenin ihtiyaç duyduğu dış pakettir. Örneğin HTTP isteği, video oynatma veya veritabanı için hazır paketler eklenebilir."
  },
  {
    q: "Kod değişikliklerini uygulamayı tamamen kapatmadan hızlıca görmeyi sağlayan Flutter özelliği hangisidir?",
    t: "mcq",
    o: [
      "Cold Start",
      "Full Reset",
      "Manual Build",
      "Hot Reload",
      "Hard Delete"
    ],
    a: 3,
    difficulty: "easy",
    week: 6,
    topic: "Hot Reload",
    importance: 5,
    explanation: "Hot Reload, kodda yapılan değişiklikleri uygulamayı tamamen kapatıp açmadan hızlı görmeyi sağlar. Bu özellik geliştirme sürecini hızlandırır."
  },
  {
    q: "Flutter'da ekran genişliği/yüksekliği gibi cihaz bilgilerini almak için hangi yapı kullanılır?",
    t: "mcq",
    o: [
      "TextField",
      "AppBar",
      "ListView",
      "IconButton",
      "MediaQuery"
    ],
    a: 4,
    difficulty: "medium",
    week: 6,
    topic: "Responsive / MediaQuery",
    importance: 4,
    explanation: "MediaQuery, ekran boyutu ve cihaz bilgilerini almaya yarar. Responsive tasarımda yani farklı ekranlara uyum sağlamada kullanılır."
  },

  {
    q: "Basit bir To-Do uygulamasında kullanıcının görev yazdığı alan Flutter'da genellikle hangi widget ile yapılır?",
    t: "mcq",
    o: [
      "TextField",
      "AppBar",
      "Icon",
      "Divider",
      "Image"
    ],
    a: 0,
    difficulty: "easy",
    week: 7,
    topic: "To-Do App",
    importance: 5,
    explanation: "To-Do uygulamasında kullanıcı görevi yazmak için TextField kullanır. TextField, kullanıcıdan metin girişi almak için kullanılan widget'tır."
  },
  {
    q: "Basit bir To-Do uygulamasında görevleri ekranda listelemek için en uygun widget hangisidir?",
    t: "mcq",
    o: [
      "Text",
      "ListView",
      "AppBar",
      "Padding",
      "Center"
    ],
    a: 1,
    difficulty: "easy",
    week: 7,
    topic: "To-Do Listeleme",
    importance: 5,
    explanation: "Görevler birden fazla elemandan oluştuğu için ListView ile listelenir. ListView, çok sayıda veriyi kaydırılabilir liste şeklinde gösterir."
  },
  {
    q: "To-Do uygulamasında görev listesinin değişmesi için genellikle hangi işlem gerekir?",
    t: "mcq",
    o: [
      "Sadece print yazmak",
      "Sadece AppBar silmek",
      "Listeyi değiştirip setState() çağırmak",
      "MaterialApp kaldırmak",
      "pubspec.yaml silmek"
    ],
    a: 2,
    difficulty: "medium",
    week: 7,
    topic: "To-Do State Yönetimi",
    importance: 5,
    explanation: "Görev eklendiğinde veya silindiğinde liste değişir. Bu değişikliğin ekrana yansıması için StatefulWidget içinde setState() çağrılır."
  },
  {
    q: "Flutter'da kullanıcıya kısa bilgi veya uyarı göstermek için genellikle hangi yapı kullanılır?",
    t: "mcq",
    o: [
      "Navigator",
      "Column",
      "Container",
      "SnackBar",
      "Row"
    ],
    a: 3,
    difficulty: "medium",
    week: 7,
    topic: "SnackBar",
    importance: 4,
    explanation: "SnackBar, kullanıcıya kısa süreli mesaj göstermek için kullanılır. Örneğin 'Görev eklendi' veya 'Boş görev girilemez' mesajı gösterilebilir."
  },
  {
    q: "Flutter'da UI ve UX farkı için en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "UI sadece veritabanı, UX sadece internet demektir",
      "UI sadece kod hatası, UX sadece derleme demektir",
      "UI ve UX tamamen aynı şeydir",
      "UI sadece Android, UX sadece iOS içindir",
      "UI görünen arayüzdür, UX kullanıcının yaşadığı deneyimdir"
    ],
    a: 4,
    difficulty: "medium",
    week: 7,
    topic: "UI / UX",
    importance: 4,
    explanation: "UI, kullanıcının gördüğü ekran ve arayüzdür. UX ise kullanıcının uygulamayı kullanırken yaşadığı kolaylık, memnuniyet ve genel deneyimdir."
  }
];
