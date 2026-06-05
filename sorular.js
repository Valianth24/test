
window.questionBank = [
  // =========================================================
  // ==== 1. HAFTA – Görsel Programlama Temelleri (10) ========
  // =========================================================

  {
    q: "Görsel programlama en doğru şekilde neyi ifade eder?",
    t: "mcq",
    o: [
      "Resim ve grafiksel öğelerle program geliştirme yaklaşımını",
      "Sadece komut satırında program yazmayı",
      "Yalnızca veritabanı sorgusu yazmayı",
      "Sadece donanım devresi tasarlamayı",
      "Program yazmadan dosya kopyalamayı"
    ],
    a: 0,
    difficulty: "easy",
    week: 1,
    topic: "Görsel Programlama Tanımı",
    importance: 5,
    explanation: "Görsel programlama, programın tamamının ya da bir kısmının grafiksel araçlar, formlar, kontroller veya bloklar kullanılarak geliştirilmesidir. Buradaki temel fikir kullanıcıya daha anlaşılır ve görsel bir arayüz sunmaktır. Komut satırında sadece yazı ile işlem yapmak yerine buton, metin kutusu, etiket gibi nesnelerle program oluşturulur."
  },

  {
    q: "Görsel programlama ile geliştirilebilen uygulamalara hangisi örnek verilebilir?",
    t: "mcq",
    o: [
      "Sadece işlemci üretimi",
      "Windows Forms arayüzlü masaüstü uygulaması",
      "Sadece elektrik kablosu bağlantısı",
      "Sadece BIOS güncellemesi",
      "Sadece kağıt üzerinde algoritma çizimi"
    ],
    a: 1,
    difficulty: "easy",
    week: 1,
    topic: "Uygulama Alanları",
    importance: 4,
    explanation: "Görsel programlama ile masaüstü uygulamaları, web arayüzleri, mobil uygulamalar ve kullanıcı etkileşimli programlar geliştirilebilir. Windows Forms, görsel programlamanın klasik örneklerinden biridir. Form üzerine Button, TextBox, Label gibi kontroller eklenir ve bu kontrollerin olaylarına kod yazılır."
  },

  {
    q: ".NET Framework neden gereklidir?",
    t: "mcq",
    o: [
      "Sadece bilgisayarın ekran kartını değiştirmek için",
      "Sadece internet hızını artırmak için",
      "Visual Studio .NET ile geliştirilen uygulamaların çalışabilmesi için",
      "Sadece Word dosyası açmak için",
      "Sadece klavye dilini değiştirmek için"
    ],
    a: 2,
    difficulty: "medium",
    week: 1,
    topic: ".NET Framework",
    importance: 5,
    explanation: ".NET Framework, Microsoft tarafından geliştirilen bir uygulama geliştirme ve çalıştırma platformudur. Visual Studio .NET ile yazılan uygulamalar çalışırken .NET kütüphanelerine ve çalışma ortamına ihtiyaç duyar. Java programlarının Java Virtual Machine'e ihtiyaç duymasına benzer şekilde, .NET uygulamaları da .NET çalışma altyapısına ihtiyaç duyar."
  },

  {
    q: "Visual Studio en doğru şekilde nasıl tanımlanır?",
    t: "mcq",
    o: [
      "Sadece resim düzenleme programı",
      "Sadece işletim sistemi",
      "Sadece oyun oynatma aracı",
      "Yazılım geliştirmek için kullanılan geliştirme platformu",
      "Sadece veritabanı yedekleme aracı"
    ],
    a: 3,
    difficulty: "easy",
    week: 1,
    topic: "Visual Studio",
    importance: 5,
    explanation: "Visual Studio, Microsoft tarafından geliştirilen bir yazılım geliştirme ortamıdır. İçinde Windows Forms, konsol uygulamaları, web sayfaları ve web servisleri gibi farklı proje türleri geliştirilebilir. Finalde 'hangi araçla Windows Forms arayüzü tasarlanır?' gibi soru gelirse cevap Visual Studio olabilir."
  },

  {
    q: "Windows Forms ortamında pencere yapısı hangi kavramla adlandırılır?",
    t: "mcq",
    o: [
      "Package",
      "Console",
      "Database",
      "Thread",
      "Form"
    ],
    a: 4,
    difficulty: "easy",
    week: 1,
    topic: "Form",
    importance: 5,
    explanation: "Windows işletim sistemindeki pencereler Visual Studio Windows Forms içinde Form olarak adlandırılır. Form, uygulamanın kullanıcıya görünen ana yüzeyidir. Button, TextBox, Label gibi kontroller bu Form üzerine eklenir."
  },

  {
    q: "Toolbox'ın temel görevi nedir?",
    t: "mcq",
    o: [
      "Form üzerine eklenecek hazır kontrol nesnelerini sunmak",
      "Kodları otomatik olarak silmek",
      "Sadece veritabanı yedeği almak",
      "Programı kapatmak",
      "Bilgisayarın sürücülerini güncellemek"
    ],
    a: 0,
    difficulty: "easy",
    week: 1,
    topic: "Toolbox",
    importance: 5,
    explanation: "Toolbox, Visual Studio içinde Button, TextBox, Label, ComboBox gibi hazır kontrollerin bulunduğu araç kutusudur. Bir kontrolü forma eklemek için genellikle Toolbox'tan seçilip sürükle-bırak yapılır. Yani arayüz tasarımında ilk başvurulan yerlerden biridir."
  },

  {
    q: "Windows Forms'ta forma eklenen Button, TextBox ve Label gibi yapılar ne olarak adlandırılır?",
    t: "mcq",
    o: [
      "Veritabanı",
      "Kontrol nesnesi",
      "İşletim sistemi",
      "Derleyici",
      "Sunucu"
    ],
    a: 1,
    difficulty: "easy",
    week: 1,
    topic: "Kontrol Nesneleri",
    importance: 5,
    explanation: "Forma eklenen her görsel parça bir kontrol nesnesidir. Button tıklama işlemi için, TextBox kullanıcıdan veri almak için, Label kullanıcıya bilgi göstermek için kullanılır. Bu kontroller nesne olduğu için özellikleri, olayları ve metotları vardır."
  },

  {
    q: "Bir kontrol nesnesinin 'özellik' kavramı neyi ifade eder?",
    t: "mcq",
    o: [
      "Sadece programın kapanmasını",
      "Sadece veritabanı bağlantısını",
      "Kontrolün görünümünü veya davranışını belirleyen değerleri",
      "Sadece kodun yorum satırlarını",
      "Sadece işlemci hızını"
    ],
    a: 2,
    difficulty: "medium",
    week: 1,
    topic: "Özellik",
    importance: 5,
    explanation: "Özellik, bir nesnenin nasıl görüneceğini veya nasıl davranacağını belirleyen değerdir. Örneğin Label1.Text etikette yazacak metni, ForeColor yazı rengini belirler. TextBox1.Text ise metin kutusundaki yazıyı okuma veya değiştirme için kullanılır."
  },

  {
    q: "Bir kontrol nesnesinin 'olay' kavramı hangi durumu anlatır?",
    t: "mcq",
    o: [
      "Kontrolün sabit rengini",
      "Kontrolün veritabanı tablosunu",
      "Kontrolün ekran çözünürlüğünü",
      "Kullanıcı veya sistem tarafından tetiklenen etkileşimi",
      "Kontrolün fiziksel ağırlığını"
    ],
    a: 3,
    difficulty: "medium",
    week: 1,
    topic: "Olay",
    importance: 5,
    explanation: "Olay, kullanıcı bir işlem yaptığında veya sistem belirli bir durum yaşadığında çalışan mekanizmadır. Örneğin Button'ın en sık kullanılan olayı Click'tir. Kullanıcı butona tıkladığında Button1_Click gibi bir olay metodu çalışır ve içine yazılan kodlar uygulanır."
  },

  {
    q: "Görsel bir program genel olarak hangi iki ana parçadan oluşur?",
    t: "mcq",
    o: [
      "Sadece klavye ve fare",
      "Sadece RAM ve işlemci",
      "Sadece dosya ve klasör",
      "Sadece internet ve ağ",
      "Arayüz kısmı ve kod kısmı"
    ],
    a: 4,
    difficulty: "easy",
    week: 1,
    topic: "Program Yapısı",
    importance: 5,
    explanation: "Görsel programlamada programın görünen tarafı arayüz kısmıdır; Button, TextBox, Label gibi nesneler burada bulunur. Kod kısmı ise bu nesnelerin ne yapacağını belirler. Örneğin kullanıcı butona basınca hangi hesaplama yapılacaksa bu kod kısmında yazılır."
  },

  // =========================================================
  // ==== 1. HAFTA – Kontroller: Label, TextBox, Button (10) ===
  // =========================================================

  {
    q: "Label kontrolünün temel amacı nedir?",
    t: "mcq",
    o: [
      "Kullanıcıya bilgi göstermek",
      "Kullanıcıdan gizli parola almak",
      "Butona tıklama işlemi yapmak",
      "Dosya seçtirmek",
      "Liste elemanı silmek"
    ],
    a: 0,
    difficulty: "easy",
    week: 1,
    topic: "Label",
    importance: 5,
    explanation: "Label, form üzerinde kullanıcıya bilgi göstermek için kullanılır. Genellikle sonuç, açıklama, başlık veya uyarı metni göstermek için tercih edilir. Kullanıcı Label içeriğini doğrudan düzenleyemez; programcı Label'ın Text özelliğini kodla değiştirebilir."
  },

  {
    q: "Label kontrolündeki yazıyı değiştirmek için en sık hangi özellik kullanılır?",
    t: "mcq",
    o: [
      "Visible",
      "Text",
      "NameSpace",
      "Loop",
      "Return"
    ],
    a: 1,
    difficulty: "easy",
    week: 1,
    topic: "Label Text Özelliği",
    importance: 5,
    explanation: "Text özelliği, bir kontrol üzerinde görünen metni belirler. Örneğin label1.Text = \"Sonuç: 80\" yazarsan label üzerinde Sonuç: 80 görünür. Bu mantık finalde çok çıkar; çünkü sonuçları ekrana yazdırmanın en temel yolu Label.Text kullanmaktır."
  },

  {
    q: "TextBox kontrolü en çok hangi amaçla kullanılır?",
    t: "mcq",
    o: [
      "Sadece sabit bilgi göstermek için",
      "Sadece resim göstermek için",
      "Kullanıcıdan metin veya sayı girişi almak için",
      "Sadece ilerleme çubuğu göstermek için",
      "Sadece uygulamayı kapatmak için"
    ],
    a: 2,
    difficulty: "easy",
    week: 1,
    topic: "TextBox",
    importance: 5,
    explanation: "TextBox, kullanıcıdan veri almak için kullanılır. Kullanıcı ad, soyad, vize notu, final notu, boy veya kilo gibi bilgileri TextBox içine yazar. Program bu değeri textBox1.Text ile okuyabilir."
  },

  {
    q: "TextBox1.Text = \"Deneme\" kodu ne yapar?",
    t: "mcq",
    o: [
      "TextBox'ı siler",
      "TextBox'ı gizler",
      "TextBox rengini değiştirir",
      "TextBox içine Deneme yazısını atar",
      "TextBox'ı butona çevirir"
    ],
    a: 3,
    difficulty: "easy",
    week: 1,
    topic: "TextBox Text Özelliği",
    importance: 5,
    explanation: "TextBox1.Text ifadesi metin kutusunun içindeki yazıyı temsil eder. Eşittir işaretiyle yeni bir değer atanırsa kutunun içeriği değişir. Çift tırnak kullanılması, yazılan değerin metin yani string olduğunu gösterir."
  },

  {
    q: "Button kontrolünün en sık kullanılan olayı hangisidir?",
    t: "mcq",
    o: [
      "Load",
      "Visible",
      "ForeColor",
      "Return",
      "Click"
    ],
    a: 4,
    difficulty: "easy",
    week: 1,
    topic: "Button Click",
    importance: 5,
    explanation: "Button kontrolünün en sık kullanılan olayı Click olayıdır. Kullanıcı butona bastığında bu olay tetiklenir. Örneğin Hesapla butonuna basıldığında not ortalaması hesaplatmak için kod Button_Click içine yazılır."
  },

  {
    q: "Form Designer'da bir Button üzerine çift tıklamak genellikle ne oluşturur?",
    t: "mcq",
    o: [
      "Button'ın Click olay metodunu",
      "Yeni veritabanını",
      "Yeni işletim sistemini",
      "Yeni ekran kartını",
      "Yeni ağ bağlantısını"
    ],
    a: 0,
    difficulty: "medium",
    week: 1,
    topic: "Event Handler",
    importance: 5,
    explanation: "Visual Studio'da Button üzerine çift tıklayınca genellikle button1_Click gibi bir olay metodu oluşturulur. Bu metoda yazılan kod, butona basıldığında çalışır. Finalde 'butona basınca işlem yaptırmak için kod nereye yazılır?' denirse cevap Click olay metodudur."
  },

  {
    q: "MessageBox.Show(\"Merhaba\"); kodunun görevi nedir?",
    t: "mcq",
    o: [
      "TextBox içine veri almak",
      "Kullanıcıya mesaj kutusu göstermek",
      "Döngü başlatmak",
      "Formu veritabanına kaydetmek",
      "Buton rengini değiştirmek"
    ],
    a: 1,
    difficulty: "easy",
    week: 1,
    topic: "MessageBox",
    importance: 5,
    explanation: "MessageBox.Show, kullanıcıya küçük bir diyalog/uyarı penceresi göstermek için kullanılır. Hatalı giriş, başarılı işlem veya bilgi mesajları için çok sık kullanılır. Örneğin kullanıcı sayı yerine harf girerse MessageBox ile uyarı verilebilir."
  },

  {
    q: "Label1.ForeColor = Color.Red; kodu hangi işlemi yapar?",
    t: "mcq",
    o: [
      "Label yazısını siler",
      "Label metnini değiştirir",
      "Label yazı rengini kırmızı yapar",
      "Label'ı butona çevirir",
      "Label'a sayı girdirir"
    ],
    a: 2,
    difficulty: "medium",
    week: 1,
    topic: "ForeColor",
    importance: 4,
    explanation: "ForeColor, bir kontrolün yazı rengini belirleyen özelliktir. Label1.ForeColor = Color.Red ifadesi Label üzerindeki metnin kırmızı görünmesini sağlar. Text metni, ForeColor ise metnin rengini kontrol eder."
  },

  {
    q: "TextBox kontrolüne değer atanırken metin için neden çift tırnak kullanılır?",
    t: "mcq",
    o: [
      "Çünkü sayı olduğunu göstermek için",
      "Çünkü buton olduğunu göstermek için",
      "Çünkü döngü olduğunu göstermek için",
      "Çünkü string/metin değer olduğunu göstermek için",
      "Çünkü formu gizlemek için"
    ],
    a: 3,
    difficulty: "medium",
    week: 1,
    topic: "String Değer",
    importance: 4,
    explanation: "C# gibi dillerde çift tırnak içindeki değerler string yani metin olarak kabul edilir. TextBox1.Text = \"Deneme\" kodunda Deneme bir yazıdır, bu yüzden çift tırnak gerekir. Sayısal işlem yapılacaksa TextBox'tan gelen metin ayrıca sayıya dönüştürülmelidir."
  },

  {
    q: "Kullanıcıdan vize ve final notu almak için en uygun kontrol çifti hangisidir?",
    t: "mcq",
    o: [
      "Label ve PictureBox",
      "ProgressBar ve Timer",
      "Button ve MenuStrip",
      "NotifyIcon ve TreeView",
      "İki adet TextBox"
    ],
    a: 4,
    difficulty: "easy",
    week: 1,
    topic: "TextBox Kullanımı",
    importance: 5,
    explanation: "Kullanıcıdan veri almak için TextBox kullanılır. Vize ve final iki ayrı giriş olduğu için iki adet TextBox gerekir. Label sonuç göstermek için, Button ise hesaplama işlemini başlatmak için kullanılabilir."
  },

  // =========================================================
  // ==== 2. HAFTA – Veri Tipleri ve Operatörler (10) =========
  // =========================================================

  {
    q: "Veri tipi kavramı neyi belirler?",
    t: "mcq",
    o: [
      "Bir değişkenin ne tür veri tutacağını",
      "Butonun nereye konacağını",
      "Formun kaç piksel olacağını",
      "Programın hangi renkte açılacağını",
      "Dosyanın hangi klasöre kaydedileceğini"
    ],
    a: 0,
    difficulty: "easy",
    week: 2,
    topic: "Veri Tipleri",
    importance: 5,
    explanation: "Veri tipi, bir değişkenin hangi tür değeri saklayacağını belirler. Örneğin int tam sayı, float/decimal ondalıklı sayı, string metin, bool doğru/yanlış değeri tutar. Yanlış veri tipi seçilirse hesaplama veya karşılaştırma hatalı olabilir."
  },

  {
    q: "String veri tipi ne için kullanılır?",
    t: "mcq",
    o: [
      "Sadece doğru/yanlış tutmak için",
      "Metin verisi tutmak için",
      "Sadece tam sayı tutmak için",
      "Sadece resim saklamak için",
      "Sadece döngü başlatmak için"
    ],
    a: 1,
    difficulty: "easy",
    week: 2,
    topic: "String",
    importance: 5,
    explanation: "String veri tipi metin tutar. İsim, soyisim, adres, açıklama, kullanıcı adı gibi yazısal bilgiler string olarak saklanır. Örneğin \"Merhaba Dünya\" bir string değerdir."
  },

  {
    q: "Boolean veri tipi hangi değerleri tutar?",
    t: "mcq",
    o: [
      "Sadece uzun metinleri",
      "Sadece ondalıklı sayıları",
      "True veya False değerlerini",
      "Sadece resimleri",
      "Sadece dosya yollarını"
    ],
    a: 2,
    difficulty: "easy",
    week: 2,
    topic: "Boolean",
    importance: 5,
    explanation: "Boolean mantıksal veri tipidir ve yalnızca iki temel değer alır: true veya false. Koşul ifadelerinde çok kullanılır. Örneğin kullanıcı giriş yaptı mı, not 50'den büyük mü, checkbox seçili mi gibi durumlar bool mantığıyla değerlendirilir."
  },

  {
    q: "Array veya liste yapısı en doğru şekilde neyi sağlar?",
    t: "mcq",
    o: [
      "Tek bir metni ekrana yazmayı",
      "Sadece programı kapatmayı",
      "Sadece buton oluşturmayı",
      "Birden fazla öğeyi sıralı şekilde saklamayı",
      "Sadece form rengini değiştirmeyi"
    ],
    a: 3,
    difficulty: "medium",
    week: 2,
    topic: "Array / Liste",
    importance: 4,
    explanation: "Liste veya array, birden fazla değeri tek yapı altında saklamayı sağlar. Örneğin öğrencilerin notları, ürün isimleri veya ComboBox'a eklenecek şehirler liste olarak tutulabilir. Tek tek değişken açmak yerine dizi/liste kullanmak daha düzenlidir."
  },

  {
    q: "Aritmetik operatörlere hangisi örnektir?",
    t: "mcq",
    o: [
      "==",
      ">",
      "&&",
      "||",
      "+"
    ],
    a: 4,
    difficulty: "easy",
    week: 2,
    topic: "Aritmetik Operatör",
    importance: 5,
    explanation: "+ operatörü toplama işleminde kullanılan aritmetik operatördür. Aritmetik operatörler sayısal işlemler yapar: + toplama, - çıkarma, * çarpma, / bölme. Not ortalaması, toplam ücret veya BMI hesaplama gibi işlemlerde kullanılır."
  },

  {
    q: "Karşılaştırma operatörü hangi amaçla kullanılır?",
    t: "mcq",
    o: [
      "İki değeri karşılaştırıp doğru/yanlış sonuç üretmek için",
      "Formu kapatmak için",
      "Buton oluşturmak için",
      "Dosya seçmek için",
      "Metin kutusunu gizlemek için"
    ],
    a: 0,
    difficulty: "easy",
    week: 2,
    topic: "Karşılaştırma Operatörü",
    importance: 5,
    explanation: "Karşılaştırma operatörleri iki değeri karşılaştırır ve sonuç olarak true veya false üretir. Örneğin ortalama >= 50 ifadesi öğrencinin geçip geçmediğini kontrol eder. If yapıları çoğunlukla bu tür karşılaştırmalarla çalışır."
  },

  {
    q: "Mantıksal operatörlerden AND neyi ifade eder?",
    t: "mcq",
    o: [
      "Koşullardan sadece birinin doğru olmasını",
      "Tüm bağlanan koşulların doğru olmasını",
      "Her zaman yanlış sonucu",
      "Metin birleştirmeyi",
      "Formu yeniden başlatmayı"
    ],
    a: 1,
    difficulty: "medium",
    week: 2,
    topic: "AND Operatörü",
    importance: 5,
    explanation: "AND mantığında sonucun doğru olması için tüm koşulların doğru olması gerekir. Örneğin yaş >= 18 AND üyelikAktif == true ise kişi işlem yapabilir. Bir koşul bile yanlışsa AND sonucu yanlış olur."
  },

  {
    q: "Mantıksal OR operatörü ne zaman true sonuç verir?",
    t: "mcq",
    o: [
      "Tüm koşullar yanlışsa",
      "Hiç koşul yoksa",
      "Koşullardan en az biri doğruysa",
      "Sadece sayı girilirse",
      "Sadece form açılırsa"
    ],
    a: 2,
    difficulty: "medium",
    week: 2,
    topic: "OR Operatörü",
    importance: 5,
    explanation: "OR mantığında koşullardan en az biri doğruysa sonuç true olur. Örneğin kullanıcı admin ise veya öğretmen ise sisteme giriş yapabilir. Bu durumda iki koşuldan birinin sağlanması yeterlidir."
  },

  {
    q: "TextBox'tan alınan sayısal veriyle matematiksel işlem yapılmadan önce genellikle ne gerekir?",
    t: "mcq",
    o: [
      "TextBox silinmelidir",
      "Label gizlenmelidir",
      "Button kapatılmalıdır",
      "Metin değeri sayısal tipe dönüştürülmelidir",
      "Form yeniden çizilmelidir"
    ],
    a: 3,
    difficulty: "medium",
    week: 2,
    topic: "Tip Dönüşümü",
    importance: 5,
    explanation: "TextBox.Text her zaman metin yani string olarak gelir. Matematik yapmak için bu değer int.Parse, double.Parse veya TryParse gibi yöntemlerle sayıya çevrilmelidir. Örneğin vize ve final ortalaması hesaplanacaksa TextBox içeriği önce sayıya dönüştürülür."
  },

  {
    q: "Basit hesap makinesi uygulamasında en çok hangi veri tipi ve operatör grubu kullanılır?",
    t: "mcq",
    o: [
      "String ve mantıksal operatörler",
      "Boolean ve karşılaştırma operatörleri",
      "Sadece liste ve dosya operatörleri",
      "Sadece tarih ve saat operatörleri",
      "Sayısal veri tipi ve aritmetik operatörler"
    ],
    a: 4,
    difficulty: "medium",
    week: 2,
    topic: "Hesaplama Mantığı",
    importance: 5,
    explanation: "Hesap makinesi uygulamasında sayılar üzerinde işlem yapılır. Bu nedenle int, double, decimal gibi sayısal veri tipleri ve +, -, *, / gibi aritmetik operatörler kullanılır. Sonuç daha sonra Label veya MessageBox ile kullanıcıya gösterilebilir."
  },

  // =========================================================
  // ==== 3. HAFTA – Giriş-Çıkış ve Diyalog Kutuları (10) =====
  // =========================================================

  {
    q: "Giriş işlemi (input) ne anlama gelir?",
    t: "mcq",
    o: [
      "Kullanıcıdan programa veri alınması",
      "Programın tamamen kapatılması",
      "Formun arka plan renginin değişmesi",
      "Sadece sonucu ekranda göstermesi",
      "Uygulamanın derlenmesi"
    ],
    a: 0,
    difficulty: "easy",
    week: 3,
    topic: "Input",
    importance: 5,
    explanation: "Input, kullanıcının programa veri vermesidir. Kullanıcı TextBox'a adını, notunu veya dosya yolunu yazabilir; RadioButton ile seçim yapabilir; ComboBox'tan ülke seçebilir. Program bu girişleri kullanarak işlem yapar."
  },

  {
    q: "Çıkış işlemi (output) neyi ifade eder?",
    t: "mcq",
    o: [
      "Kullanıcının veri yazmasını",
      "Programın kullanıcıya bilgi veya sonuç göstermesini",
      "Programın kod dosyasını silmesini",
      "Sadece buton eklemeyi",
      "Sadece form tasarlamayı"
    ],
    a: 1,
    difficulty: "easy",
    week: 3,
    topic: "Output",
    importance: 5,
    explanation: "Output, programın kullanıcıya bilgi sunmasıdır. Örneğin hesaplanan ortalamanın Label üzerinde gösterilmesi veya MessageBox ile uyarı verilmesi çıkış işlemidir. Giriş kullanıcıdan programa, çıkış programdan kullanıcıya doğru veri akışıdır."
  },

  {
    q: "Kullanıcıdan isim, şifre veya not gibi metin/sayı girişi almak için hangi kontrol kullanılır?",
    t: "mcq",
    o: [
      "Label",
      "PictureBox",
      "TextBox",
      "ProgressBar",
      "NotifyIcon"
    ],
    a: 2,
    difficulty: "easy",
    week: 3,
    topic: "TextBox Input",
    importance: 5,
    explanation: "TextBox kullanıcıdan veri almak için en temel kontroldür. Kullanıcı bu kutuya metin veya sayı yazar. Ancak sayı girilse bile TextBox.Text string olduğu için hesaplama öncesi sayısal tipe çevrilmesi gerekir."
  },

  {
    q: "Checkbox hangi durumda daha uygundur?",
    t: "mcq",
    o: [
      "Kullanıcının sadece bir seçenek seçmesi zorunluysa",
      "Programı otomatik derlemek gerekiyorsa",
      "Kullanıcıdan uzun metin almak gerekiyorsa",
      "Bir veya birden fazla seçeneğin işaretlenebilmesi gerekiyorsa",
      "Sadece resim göstermek gerekiyorsa"
    ],
    a: 3,
    difficulty: "medium",
    week: 3,
    topic: "CheckBox",
    importance: 5,
    explanation: "CheckBox, kullanıcının bir seçeneği işaretleyip işaretlememesini sağlar. Birden fazla CheckBox aynı anda seçilebilir. Örneğin kullanıcı 'spor', 'müzik', 'sinema' ilgi alanlarından birden fazlasını işaretleyebilir."
  },

  {
    q: "RadioButton için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Metin yazmak için kullanılır",
      "Dosya seçmek için kullanılır",
      "Birden fazla bağımsız seçim için en uygundur",
      "Sadece resim gösterir",
      "Bir seçenek grubundan yalnızca birini seçtirmek için kullanılır"
    ],
    a: 4,
    difficulty: "medium",
    week: 3,
    topic: "RadioButton",
    importance: 5,
    explanation: "RadioButton, kullanıcıya birden fazla seçenek sunup yalnızca birini seçtirmek için kullanılır. Örneğin ödeme yöntemi olarak kredi kartı, havale veya kapıda ödeme seçeneklerinden sadece biri seçilecekse RadioButton uygundur. Çoklu seçim gerekiyorsa CheckBox daha uygundur."
  },

  {
    q: "ComboBox hangi iş için kullanılır?",
    t: "mcq",
    o: [
      "Açılır listeden seçim yaptırmak için",
      "Sadece dosya silmek için",
      "Sadece mesaj kutusu açmak için",
      "Sadece döngü kurmak için",
      "Sadece metin rengini değiştirmek için"
    ],
    a: 0,
    difficulty: "easy",
    week: 3,
    topic: "ComboBox",
    importance: 5,
    explanation: "ComboBox, kullanıcıya açılır liste sunar. Örneğin ülke, şehir, bölüm veya sınıf seçimi yaptırmak için kullanılabilir. Kullanıcı seçenekleri tek tek yazmak yerine listeden bir değer seçer."
  },

  {
    q: "File Dialog bileşeni ne sağlar?",
    t: "mcq",
    o: [
      "Butona renk vermeyi",
      "Kullanıcıya dosya seçtirmeyi veya kaydettirmeyi",
      "Döngüyü bitirmeyi",
      "TextBox'ı sayıya çevirmeyi",
      "Label'ı gizlemeyi"
    ],
    a: 1,
    difficulty: "medium",
    week: 3,
    topic: "File Dialog",
    importance: 4,
    explanation: "File Dialog, kullanıcının bilgisayarındaki dosya sisteminden dosya seçmesini veya dosya kaydetmesini sağlayan diyalog yapısıdır. Örneğin resim seçme, dosya açma veya farklı kaydetme işlemlerinde kullanılır. Kullanıcıdan dosya yolu almanın görsel yoludur."
  },

  {
    q: "Hatalı veri girişinde kullanıcıyı uyarmak için en uygun yapı hangisidir?",
    t: "mcq",
    o: [
      "ForeColor",
      "Array",
      "MessageBox",
      "Thread",
      "Namespace"
    ],
    a: 2,
    difficulty: "easy",
    week: 3,
    topic: "Uyarı Mesajı",
    importance: 5,
    explanation: "Kullanıcı yanlış veya eksik veri girdiğinde MessageBox ile uyarı vermek çok yaygın bir yöntemdir. Örneğin sayı yerine harf girilirse 'Lütfen geçerli sayı giriniz' mesajı gösterilebilir. Bu, kullanıcı deneyimini artırır ve programın hatalı işlem yapmasını engeller."
  },

  {
    q: "Bir programda kullanıcının seçtiği değere göre işlem yapılması hangi kavramla ilgilidir?",
    t: "mcq",
    o: [
      "Sadece çıkış işlemi",
      "Sadece form tasarımı",
      "Sadece renk değiştirme",
      "Giriş verisinin program tarafından işlenmesi",
      "Sadece uygulama kapatma"
    ],
    a: 3,
    difficulty: "medium",
    week: 3,
    topic: "Input İşleme",
    importance: 5,
    explanation: "Kullanıcıdan alınan veri tek başına yeterli değildir; program bu veriyi okuyup işlemelidir. Örneğin ComboBox'tan şehir seçildiyse seçilen şehir bilgisine göre kargo ücreti hesaplanabilir. Bu, input verisinin işlenmesidir."
  },

  {
    q: "Formda kullanıcıya hesaplanan sonucu göstermek için en uygun kontrollerden biri hangisidir?",
    t: "mcq",
    o: [
      "Sadece FileDialog",
      "Sadece RadioButton",
      "Sadece CheckBox",
      "Sadece Timer",
      "Label"
    ],
    a: 4,
    difficulty: "easy",
    week: 3,
    topic: "Output Gösterimi",
    importance: 5,
    explanation: "Label, kullanıcıya sonuç veya bilgi göstermek için çok uygundur. Örneğin ortalama hesaplandıktan sonra labelSonuc.Text = \"Geçti\" yazılabilir. Kullanıcı Label'ı doğrudan düzenlemez; program sonuçları orada gösterir."
  },

  // =========================================================
  // ==== 4-5. HAFTA – Karar Yapıları ve Görsel Araçlar (10) ==
  // =========================================================

  {
    q: "If-Else karar yapısı hangi amaçla kullanılır?",
    t: "mcq",
    o: [
      "Koşula göre farklı işlemler yaptırmak için",
      "Sadece formun başlığını değiştirmek için",
      "Sadece döngüyü sonsuz yapmak için",
      "Sadece dosya seçmek için",
      "Sadece TextBox eklemek için"
    ],
    a: 0,
    difficulty: "easy",
    week: 4,
    topic: "If-Else",
    importance: 5,
    explanation: "If-Else, bir koşul doğruysa bir işlemi, yanlışsa başka bir işlemi yaptırır. Örneğin ortalama >= 50 ise 'Geçti', değilse 'Kaldı' yazdırılır. Programın karar verme mantığı bu yapı ile kurulur."
  },

  {
    q: "if (ortalama >= 50) koşulu neyi kontrol eder?",
    t: "mcq",
    o: [
      "Ortalamanın metin olup olmadığını",
      "Ortalamanın 50 veya daha büyük olup olmadığını",
      "Ortalamanın silinip silinmediğini",
      "Formun açık olup olmadığını",
      "Butonun görünür olup olmadığını"
    ],
    a: 1,
    difficulty: "easy",
    week: 4,
    topic: "Koşul Kontrolü",
    importance: 5,
    explanation: "Bu ifade bir karşılaştırmadır. Ortalama değeri 50 veya daha yüksekse koşul true olur ve if bloğu çalışır. 50'nin altındaysa koşul false olur ve varsa else bloğuna geçilir."
  },

  {
    q: "Bir not hesaplama uygulamasında 'ortalama 50 altındaysa kaldı' kararını hangi yapı ile kurmak en uygundur?",
    t: "mcq",
    o: [
      "Sadece Label ile",
      "Sadece TextBox ile",
      "if-else yapısı ile",
      "Sadece Toolbox ile",
      "Sadece FileDialog ile"
    ],
    a: 2,
    difficulty: "easy",
    week: 4,
    topic: "If-Else Senaryosu",
    importance: 5,
    explanation: "Burada program bir karar vermelidir: ortalama 50 ve üstüyse geçti, altındaysa kaldı. Bu tip koşullu kararlar if-else ile yapılır. Label yalnızca sonucu gösterir; kararı veren yapı if-else'tir."
  },

  {
    q: "Else bloğu ne zaman çalışır?",
    t: "mcq",
    o: [
      "Program ilk açıldığında her zaman",
      "Button nesnesi oluşturulurken",
      "TextBox boşken her zaman",
      "If koşulu yanlış olduğunda",
      "Form tasarım ekranındayken"
    ],
    a: 3,
    difficulty: "easy",
    week: 4,
    topic: "Else",
    importance: 5,
    explanation: "Else, if koşulu sağlanmadığında çalışan bölümdür. Örneğin if (not >= 50) doğru değilse yani not 50'den küçükse else bloğu çalışır. Bu yüzden else 'koşul değilse yapılacak işlem' olarak düşünülebilir."
  },

  {
    q: "Görsel programlamada değişkenler ne için kullanılır?",
    t: "mcq",
    o: [
      "Sadece buton çizmek için",
      "Sadece formu küçültmek için",
      "Sadece dosya seçmek için",
      "Sadece uygulama simgesi değiştirmek için",
      "Değerleri saklamak ve gerektiğinde kullanmak için"
    ],
    a: 4,
    difficulty: "easy",
    week: 4,
    topic: "Değişken",
    importance: 5,
    explanation: "Değişken, program içinde bir değeri saklayan yapıdır. Örneğin vize, final, ortalama gibi bilgiler değişkende tutulabilir. Bu değerler daha sonra hesaplama veya if-else kontrolünde kullanılır."
  },

  {
    q: "Scratch nasıl bir araçtır?",
    t: "mcq",
    o: [
      "Sürükle-bırak mantığıyla çalışan görsel programlama aracı",
      "Sadece profesyonel veritabanı sunucusu",
      "Sadece işletim sistemi",
      "Sadece ekran kartı sürücüsü",
      "Sadece dosya sıkıştırma programı"
    ],
    a: 0,
    difficulty: "easy",
    week: 4,
    topic: "Scratch",
    importance: 4,
    explanation: "Scratch, özellikle çocuklar ve yeni başlayanlar için tasarlanmış sürükle-bırak tabanlı bir görsel programlama aracıdır. Kod satırları yazmak yerine bloklar birleştirilir. Bu sayede program akışı daha kolay anlaşılır."
  },

  {
    q: "Blockly için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Sadece masaüstü veritabanıdır",
      "Blokları birleştirerek program yazmayı sağlayan açık kaynaklı araçtır",
      "Sadece fotoğraf düzenleme aracıdır",
      "Sadece Windows güncellemesidir",
      "Sadece donanım programıdır"
    ],
    a: 1,
    difficulty: "medium",
    week: 4,
    topic: "Blockly",
    importance: 4,
    explanation: "Blockly, Google tarafından geliştirilen görsel blok tabanlı bir programlama aracıdır. Kullanıcılar kod yazmak yerine blokları bir araya getirerek program akışını oluşturur. Yeni başlayanlara algoritma mantığını öğretmek için uygundur."
  },

  {
    q: "App Inventor hangi amaçla kullanılır?",
    t: "mcq",
    o: [
      "Sadece SQL Server yönetmek için",
      "Sadece video düzenlemek için",
      "Mobil uygulama oluşturmak için",
      "Sadece BIOS ayarı yapmak için",
      "Sadece klavye düzeni değiştirmek için"
    ],
    a: 2,
    difficulty: "easy",
    week: 4,
    topic: "App Inventor",
    importance: 4,
    explanation: "App Inventor, özellikle mobil uygulama geliştirmek için kullanılan görsel programlama aracıdır. Bloklarla işlem mantığı kurulabilir. Kod bilmeyen veya öğrenme aşamasında olan kişiler için faydalıdır."
  },

  {
    q: "Görsel programlamada temel adımlardan biri olan 'bağlantı kurma' ne anlama gelir?",
    t: "mcq",
    o: [
      "Sadece internet bağlantısı açmak",
      "Sadece dosya indirmek",
      "Sadece ekranı kapatmak",
      "Blokları veya işlemleri program akışına göre birbirine bağlamak",
      "Sadece form rengini değiştirmek"
    ],
    a: 3,
    difficulty: "medium",
    week: 4,
    topic: "Program Akışı",
    importance: 4,
    explanation: "Görsel programlamada bloklar tek başına anlamlı olabilir ama program oluşturmak için doğru sırayla bağlanmalıdır. Bağlantı kurma, komutların hangi sırayla çalışacağını belirler. Bu, klasik kodda satırların sırasını belirlemeye benzer."
  },

  {
    q: "Koşullar ve döngüler görsel programlamada en çok neyi kontrol eder?",
    t: "mcq",
    o: [
      "Sadece bilgisayarın fan hızını",
      "Sadece dosya boyutunu",
      "Sadece ekran parlaklığını",
      "Sadece klavye düzenini",
      "Programın mantığını ve akışını"
    ],
    a: 4,
    difficulty: "medium",
    week: 4,
    topic: "Akış Kontrolü",
    importance: 5,
    explanation: "Koşullar ve döngüler programın ne zaman, hangi işlemi, kaç kez yapacağını belirler. If-else karar verir; döngü tekrar ettirir. Bu yüzden program mantığının temel kontrol araçlarıdır."
  },

  // =========================================================
  // ==== 6-7. HAFTA – Döngüler ve Windows Forms Kullanımı (10)
  // =========================================================

  {
    q: "Döngü kavramı neyi ifade eder?",
    t: "mcq",
    o: [
      "Bir kod bloğunu belirli şart veya sayı boyunca tekrar çalıştırmayı",
      "Sadece programı kapatmayı",
      "Sadece form başlığını değiştirmeyi",
      "Sadece TextBox'a değer atamayı",
      "Sadece MessageBox göstermeyi"
    ],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "Döngü Tanımı",
    importance: 5,
    explanation: "Döngü, aynı kodu tekrar tekrar yazmak yerine belirli bir koşula veya sayıya göre tekrar çalıştıran yapıdır. Örneğin ListBox'a 1'den 10'a kadar eleman eklemek için 10 satır kod yazmak yerine for döngüsü kullanılabilir. Döngüler tekrar eden işleri düzenli hale getirir."
  },

  {
    q: "For döngüsü en çok hangi durumda tercih edilir?",
    t: "mcq",
    o: [
      "Kaç kez tekrar edeceği bilinmeyen işlemlerde",
      "Belirli sayıda tekrar yapılacak işlemlerde",
      "Sadece hatalı girişte",
      "Sadece dosya seçerken",
      "Sadece form kapanırken"
    ],
    a: 1,
    difficulty: "easy",
    week: 6,
    topic: "For Döngüsü",
    importance: 5,
    explanation: "For döngüsü tekrar sayısı baştan belli olduğunda en uygun döngüdür. Örneğin 1'den 10'a kadar sayıları yazdırmak veya bir listeye 10 eleman eklemek için for kullanılır. Başlangıç, koşul ve artış değeri genellikle aynı satırda yazılır."
  },

  {
    q: "while döngüsü hangi mantıkla çalışır?",
    t: "mcq",
    o: [
      "Kodu kesinlikle sadece bir kez çalıştırır",
      "Sadece form tasarlar",
      "Şart doğru olduğu sürece çalışır",
      "Hiç koşul kontrol etmez",
      "Sadece metin rengi değiştirir"
    ],
    a: 2,
    difficulty: "easy",
    week: 6,
    topic: "While Döngüsü",
    importance: 5,
    explanation: "While döngüsü önce koşulu kontrol eder. Koşul doğruysa döngü bloğu çalışır, sonra tekrar koşula bakılır. Koşul yanlış olduğunda döngü biter. Tekrar sayısı net değil ama şart belliyse while kullanmak uygundur."
  },

  {
    q: "Do-While döngüsünü while döngüsünden ayıran en önemli fark nedir?",
    t: "mcq",
    o: [
      "Hiç koşul kullanmaması",
      "Sadece butonda çalışması",
      "Sadece sayı yazdırması",
      "Koşul yanlış olsa bile bloğu en az bir kez çalıştırması",
      "Sadece MessageBox göstermesi"
    ],
    a: 3,
    difficulty: "medium",
    week: 6,
    topic: "Do-While",
    importance: 5,
    explanation: "Do-While döngüsünde kod bloğu önce çalışır, koşul sonra kontrol edilir. Bu yüzden koşul baştan yanlış olsa bile döngü en az bir kez çalışmış olur. Kullanıcıdan en az bir kez veri istemek gibi durumlarda mantıklıdır."
  },

  {
    q: "while(true) kullanımında en büyük risk nedir?",
    t: "mcq",
    o: [
      "TextBox'ın otomatik silinmesi",
      "Label'ın renginin değişmesi",
      "Button'ın görünmemesi",
      "Formun başlığının değişmesi",
      "Sonsuz döngü oluşması"
    ],
    a: 4,
    difficulty: "medium",
    week: 6,
    topic: "Sonsuz Döngü",
    importance: 5,
    explanation: "while(true) koşulu her zaman doğru olduğu için çıkış şartı yazılmazsa döngü sonsuza kadar çalışabilir. Bu durum programın donmasına veya tepki vermemesine neden olabilir. Döngülerde mutlaka bitiş şartı doğru planlanmalıdır."
  },

  {
    q: "for (int i = 1; i <= 10; i++) yapısında i++ ne işe yarar?",
    t: "mcq",
    o: [
      "Her döngü sonunda i değerini 1 artırır",
      "i değerini her zaman sıfırlar",
      "Formu kapatır",
      "TextBox'a yazı atar",
      "Döngüyü başlatmadan bitirir"
    ],
    a: 0,
    difficulty: "medium",
    week: 6,
    topic: "For Artış İfadesi",
    importance: 5,
    explanation: "i++ ifadesi her tekrar sonunda sayaç değişkenini 1 artırır. Başlangıçta i = 1 ise bir sonraki turda 2 olur. i <= 10 koşulu sağlandığı sürece döngü devam eder ve 1'den 10'a kadar işlem yapılabilir."
  },

  {
    q: "ListBox'a 1'den 10'a kadar eleman eklemek için en uygun yapı hangisidir?",
    t: "mcq",
    o: [
      "Sadece if",
      "for döngüsü",
      "Sadece MessageBox",
      "Sadece FileDialog",
      "Sadece Label"
    ],
    a: 1,
    difficulty: "easy",
    week: 6,
    topic: "ListBox ve Döngü",
    importance: 5,
    explanation: "Eleman sayısı belli olduğu için for döngüsü en uygundur. Örneğin for (int i = 1; i <= 10; i++) listBox1.Items.Add(\"Eleman \" + i); şeklinde her turda listeye yeni eleman eklenir. Bu, finalde doğrudan kod yorumlama olarak gelebilir."
  },

  {
    q: "progressBar1.Value < progressBar1.Maximum koşulu neyi kontrol eder?",
    t: "mcq",
    o: [
      "ProgressBar'ın gizli olup olmadığını",
      "TextBox'ın boş olup olmadığını",
      "İlerleme değerinin maksimum değere ulaşıp ulaşmadığını",
      "Button'ın tıklanıp tıklanmadığını",
      "Formun kapalı olup olmadığını"
    ],
    a: 2,
    difficulty: "medium",
    week: 6,
    topic: "ProgressBar",
    importance: 4,
    explanation: "ProgressBar bir ilerleme durumunu gösterir. Value mevcut değeri, Maximum ulaşılabilecek en yüksek değeri temsil eder. Value, Maximum'dan küçük olduğu sürece ilerleme artırılabilir; eşit olduğunda ilerleme tamamlanmış demektir."
  },

  {
    q: "Thread.Sleep(100) döngü içinde kullanıldığında genel olarak ne yapar?",
    t: "mcq",
    o: [
      "Döngüyü siler",
      "TextBox oluşturur",
      "Label'ı temizler",
      "İşlemi kısa süre bekletir/yavaşlatır",
      "Formu veritabanına kaydeder"
    ],
    a: 3,
    difficulty: "medium",
    week: 6,
    topic: "Thread.Sleep",
    importance: 3,
    explanation: "Thread.Sleep(100), çalışan iş parçacığını 100 milisaniye bekletir. ProgressBar örneğinde artışın gözle görülebilmesi için kullanılabilir. Ancak görsel arayüzde aşırı veya yanlış kullanılırsa program geçici olarak donmuş gibi görünebilir."
  },

  {
    q: "Döngülerin doğru kullanımı Windows Forms uygulamalarında neyi artırır?",
    t: "mcq",
    o: [
      "Kod tekrarını ve karmaşayı artırır",
      "Programın mutlaka bozulmasını sağlar",
      "Sadece tasarım rengini değiştirir",
      "Kullanıcı girişini tamamen engeller",
      "Performansı ve kodun anlaşılabilirliğini artırır"
    ],
    a: 4,
    difficulty: "medium",
    week: 6,
    topic: "Döngü Avantajı",
    importance: 5,
    explanation: "Döngüler tekrar eden işlemleri daha kısa ve düzenli yazar. Örneğin aynı listeye birçok eleman eklemek, aynı kontrol grubunu gezmek veya belirli sayıda işlem yapmak döngüyle daha okunabilir hale gelir. Yanlış kullanılırsa sonsuz döngü riski vardır."
  },

  // =========================================================
  // ==== 8. HAFTA – Fonksiyonlar / Metotlar (10) =============
  // =========================================================

  {
    q: "Fonksiyon veya metot en doğru şekilde nedir?",
    t: "mcq",
    o: [
      "Belirli bir görevi yapan, tekrar kullanılabilir kod bloğu",
      "Sadece formun arka plan rengi",
      "Sadece bilgisayarın dosya sistemi",
      "Sadece kullanıcı şifresi",
      "Sadece ekran çözünürlüğü"
    ],
    a: 0,
    difficulty: "easy",
    week: 8,
    topic: "Fonksiyon Tanımı",
    importance: 5,
    explanation: "Fonksiyon, belirli bir işi yapmak için yazılan kod bloğudur. Aynı işlemi programın farklı yerlerinde tekrar tekrar yazmak yerine fonksiyon oluşturulur ve gerektiğinde çağrılır. Bu kod tekrarını azaltır ve programı modüler hale getirir."
  },

  {
    q: "Aşağıdakilerden hangisi fonksiyon yapısının temel parçalarından biridir?",
    t: "mcq",
    o: [
      "Sadece ekran kartı",
      "Geri dönüş tipi",
      "Sadece klasör adı",
      "Sadece işletim sistemi",
      "Sadece internet bağlantısı"
    ],
    a: 1,
    difficulty: "easy",
    week: 8,
    topic: "Fonksiyon Yapısı",
    importance: 5,
    explanation: "Bir fonksiyonun temel parçaları erişim belirteci, geri dönüş tipi, fonksiyon adı ve parametre listesidir. Geri dönüş tipi fonksiyonun sonuç olarak hangi tür değeri döndüreceğini belirtir. Eğer değer döndürmüyorsa void kullanılır."
  },

  {
    q: "void anahtar kelimesi fonksiyonlarda ne anlama gelir?",
    t: "mcq",
    o: [
      "Fonksiyonun mutlaka sayı döndürmesini",
      "Fonksiyonun gizli olmasını",
      "Fonksiyonun geriye değer döndürmemesini",
      "Fonksiyonun sadece veritabanı açmasını",
      "Fonksiyonun sonsuz döngü olmasını"
    ],
    a: 2,
    difficulty: "easy",
    week: 8,
    topic: "Void Fonksiyon",
    importance: 5,
    explanation: "void, fonksiyonun geriye bir değer döndürmediğini belirtir. Böyle fonksiyonlar genellikle işlem yapar; örneğin ekrana mesaj yazdırır, Label değerini değiştirir veya listeye eleman ekler. Sonuç değeri üretmesi gerekmez."
  },

  {
    q: "int KareAl(int sayi) fonksiyonunda int geri dönüş tipi neyi ifade eder?",
    t: "mcq",
    o: [
      "Fonksiyonun hiç değer döndürmeyeceğini",
      "Fonksiyonun sadece metin yazacağını",
      "Fonksiyonun private olduğunu",
      "Fonksiyonun tam sayı döndüreceğini",
      "Fonksiyonun formu kapatacağını"
    ],
    a: 3,
    difficulty: "medium",
    week: 8,
    topic: "Geriye Değer Döndüren Fonksiyon",
    importance: 5,
    explanation: "Fonksiyon adından önce yazılan int, fonksiyonun sonuç olarak tam sayı döndüreceğini belirtir. KareAl fonksiyonu sayının karesini hesaplayıp return ile geri verir. Bu sonuç başka bir değişkene atanabilir."
  },

  {
    q: "return ifadesi ne işe yarar?",
    t: "mcq",
    o: [
      "Sadece formu büyütür",
      "Sadece butonu siler",
      "Sadece TextBox oluşturur",
      "Sadece Label rengini değiştirir",
      "Fonksiyondan değer döndürür ve fonksiyonun sonucunu verir"
    ],
    a: 4,
    difficulty: "medium",
    week: 8,
    topic: "Return",
    importance: 5,
    explanation: "return, fonksiyonun hesapladığı sonucu çağıran yere geri gönderir. Örneğin return sayi * sayi; ifadesi hesaplanan kare değerini fonksiyonun sonucu yapar. Geriye değer döndüren fonksiyonlarda return kullanmak zorunludur."
  },

  {
    q: "Parametreli fonksiyon ne demektir?",
    t: "mcq",
    o: [
      "Dışarıdan değer alarak çalışan fonksiyon",
      "Hiç çağrılamayan fonksiyon",
      "Sadece form tasarlayan fonksiyon",
      "Sadece işletim sistemini kapatan fonksiyon",
      "Sadece MessageBox açan fonksiyon"
    ],
    a: 0,
    difficulty: "easy",
    week: 8,
    topic: "Parametreli Fonksiyon",
    importance: 5,
    explanation: "Parametreli fonksiyon, çalışırken dışarıdan bilgi alan fonksiyondur. Örneğin void Yaz(string mesaj) fonksiyonu mesaj adında bir metin alır ve onu ekrana yazdırır. Parametre, fonksiyona gönderilen veri olarak düşünülebilir."
  },

  {
    q: "Parametresiz fonksiyon için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Mutlaka dışarıdan değer almak zorundadır",
      "Çalışmak için dışarıdan değer alması gerekmez",
      "Sadece hata üretir",
      "Sadece veritabanı siler",
      "Sadece Label oluşturur"
    ],
    a: 1,
    difficulty: "easy",
    week: 8,
    topic: "Parametresiz Fonksiyon",
    importance: 5,
    explanation: "Parametresiz fonksiyonun parantez içinde dışarıdan aldığı bir değer yoktur. Örneğin RastgeleSayi() fonksiyonu dışarıdan bilgi almadan kendi içinde rastgele sayı üretebilir. Fonksiyon yine de geriye değer döndürebilir."
  },

  {
    q: "Fonksiyonların en önemli avantajlarından biri hangisidir?",
    t: "mcq",
    o: [
      "Kod tekrarını artırması",
      "Programı daha karışık yapması",
      "Kod tekrarını azaltması",
      "Butonları silmesi",
      "Döngüleri yasaklaması"
    ],
    a: 2,
    difficulty: "easy",
    week: 8,
    topic: "Fonksiyon Avantajı",
    importance: 5,
    explanation: "Fonksiyonlar aynı kodu tekrar tekrar yazmayı engeller. Örneğin ortalama hesaplama işlemi birkaç yerde gerekiyorsa her yere formülü yazmak yerine OrtalamaHesapla fonksiyonu çağrılır. Bu bakım kolaylığı ve okunabilirlik sağlar."
  },

  {
    q: "void Degistir(int x) { x = 10; } örneğinde ana fonksiyondaki değişken neden etkilenmez?",
    t: "mcq",
    o: [
      "Çünkü x hiç değişmez",
      "Çünkü int her zaman string olur",
      "Çünkü fonksiyon hiç çalışmaz",
      "Çünkü değer tipli parametre kopya olarak gönderilir",
      "Çünkü return zorunludur"
    ],
    a: 3,
    difficulty: "hard",
    week: 8,
    topic: "Değer Tipli Parametre",
    importance: 5,
    explanation: "int gibi değer tipleri fonksiyona gönderildiğinde genellikle değer kopyalanır. Fonksiyon içindeki x değişirse, dışarıdaki asıl değişken değişmez. Bu yüzden Degistir fonksiyonu içindeki x = 10 işlemi ana fonksiyondaki değişkeni doğrudan etkilemez."
  },

  {
    q: "Windows Forms'ta fonksiyonlar genellikle nasıl aktif hale getirilir?",
    t: "mcq",
    o: [
      "Sadece bilgisayar açılınca",
      "Sadece dosya adı değişince",
      "Sadece form rengi değişince",
      "Sadece Visual Studio kapanınca",
      "Buton tıklama gibi olaylara bağlanarak"
    ],
    a: 4,
    difficulty: "medium",
    week: 8,
    topic: "Fonksiyon Çağırma",
    importance: 5,
    explanation: "Görsel programlamada fonksiyonlar çoğunlukla olaylarla tetiklenir. Örneğin btnHesapla_Click içinde int sonuc = Topla(5, 3); yazılırsa butona basıldığında Topla fonksiyonu çalışır. Kullanıcı etkileşimi ile kodun çalışması Windows Forms mantığının merkezindedir."
  },

  // =========================================================
  // ==== Final Tipi Senaryo/Kod Yorumlama Soruları (10) ======
  // =========================================================

  {
    q: "Vize ve final notunu TextBox'tan alıp ortalama hesaplayan uygulamada sonuç hangi kontrolde gösterilmelidir?",
    t: "mcq",
    o: [
      "Label",
      "OpenFileDialog",
      "CheckBox",
      "RadioButton",
      "Toolbox"
    ],
    a: 0,
    difficulty: "easy",
    week: 8,
    topic: "Not Hesaplama Senaryosu",
    importance: 5,
    explanation: "Sonuç göstermek için Label uygundur. TextBox kullanıcıdan veri almak için, Button işlemi başlatmak için kullanılır. Ortalama hesaplandıktan sonra labelSonuc.Text = \"Geçti\" veya labelOrtalama.Text = ortalama.ToString() gibi bir kullanım yapılabilir."
  },

  {
    q: "OrtalamaHesapla adında bir fonksiyon yazılacaksa ve ortalama değeri döndürecekse hangi dönüş tipi daha uygundur?",
    t: "mcq",
    o: [
      "void",
      "double",
      "Button",
      "Form",
      "MessageBox"
    ],
    a: 1,
    difficulty: "medium",
    week: 8,
    topic: "Fonksiyon Tasarımı",
    importance: 5,
    explanation: "Ortalama ondalıklı çıkabileceği için double uygun bir geri dönüş tipidir. void fonksiyon değer döndürmez; fakat OrtalamaHesapla bir hesap sonucu üretmelidir. Bu yüzden double OrtalamaHesapla(double vize, double final) gibi bir yapı daha mantıklıdır."
  },

  {
    q: "DurumBelirle fonksiyonu ortalamaya göre 'Geçti' veya 'Kaldı' metni döndürecekse hangi dönüş tipi uygundur?",
    t: "mcq",
    o: [
      "int",
      "bool",
      "string",
      "ProgressBar",
      "CheckBox"
    ],
    a: 2,
    difficulty: "medium",
    week: 8,
    topic: "DurumBelirle",
    importance: 5,
    explanation: "Fonksiyon 'Geçti' veya 'Kaldı' gibi metinsel sonuç döndüreceği için string dönüş tipi uygundur. int sayı, bool true/false, void ise değer döndürmeme anlamına gelir. Metin döndürmek için string kullanılır."
  },

  {
    q: "BMI = kilo / (boy * boy) hesaplamasında boy ve kilo TextBox'tan geliyorsa ilk yapılması gereken nedir?",
    t: "mcq",
    o: [
      "TextBox'ları silmek",
      "Formu kapatmak",
      "Label rengini değiştirmek",
      "TextBox.Text değerlerini sayıya dönüştürmek",
      "Button'ı görünmez yapmak"
    ],
    a: 3,
    difficulty: "medium",
    week: 8,
    topic: "BMI Hesaplama",
    importance: 5,
    explanation: "TextBox'tan gelen her değer metindir. BMI hesabı matematiksel işlem olduğu için kilo ve boy değerleri double gibi sayısal tipe çevrilmelidir. Aksi halde metin üzerinde bölme ve çarpma işlemi yapılamaz."
  },

  {
    q: "Kullanıcı boy yerine 'abc' yazarsa programda ne yapılmalıdır?",
    t: "mcq",
    o: [
      "Program sessizce kapanmalıdır",
      "Yanlış değer doğru kabul edilmelidir",
      "TextBox verisi doğrudan bölünmelidir",
      "Döngü sonsuza alınmalıdır",
      "MessageBox ile geçersiz giriş uyarısı verilmelidir"
    ],
    a: 4,
    difficulty: "medium",
    week: 8,
    topic: "Hatalı Giriş Kontrolü",
    importance: 5,
    explanation: "abc sayısal değer değildir, bu yüzden BMI veya ortalama hesaplamasında hata oluşturur. Kullanıcıya anlaşılır bir uyarı verilmelidir. Final uygulama sorularında 'hatalı girişte kullanıcıyı uyarınız' ifadesi genellikle MessageBox kullanımını işaret eder."
  },

  {
    q: "Aşağıdaki kodda hangi kontrol kullanıcıdan veri almak için kullanılır? int vize = int.Parse(txtVize.Text);",
    t: "mcq",
    o: [
      "txtVize adlı TextBox",
      "label1 adlı Label",
      "btnHesapla adlı Button",
      "Form1 adlı Form",
      "MessageBox"
    ],
    a: 0,
    difficulty: "medium",
    week: 8,
    topic: "Kod Yorumlama",
    importance: 5,
    explanation: "txtVize.Text ifadesi txtVize adlı TextBox'ın içindeki metni okur. int.Parse ise bu metni tam sayıya çevirmeye çalışır. Bu kod, kullanıcının TextBox'a yazdığı vize notunu program içinde sayı olarak kullanmak içindir."
  },

  {
    q: "private void btnHesapla_Click(object sender, EventArgs e) bloğu ne zaman çalışır?",
    t: "mcq",
    o: [
      "Program derlenmeden önce",
      "btnHesapla butonuna tıklandığında",
      "TextBox görünmez olduğunda",
      "Form dosyası silindiğinde",
      "Bilgisayar kapanınca"
    ],
    a: 1,
    difficulty: "medium",
    week: 8,
    topic: "Button Click Event",
    importance: 5,
    explanation: "Bu yapı btnHesapla butonunun Click olay metodudur. Kullanıcı butona bastığında içindeki kodlar çalışır. Windows Forms uygulamalarında kullanıcı etkileşimi çoğunlukla bu tarz olay metotlarıyla yönetilir."
  },

  {
    q: "if (bmi < 18.5) sonuc = \"Zayıf\"; kodu ne yapar?",
    t: "mcq",
    o: [
      "BMI değerini 18.5 yapar",
      "Programı kapatır",
      "BMI 18.5'ten küçükse sonucu Zayıf yapar",
      "TextBox oluşturur",
      "Döngü başlatır"
    ],
    a: 2,
    difficulty: "medium",
    week: 8,
    topic: "BMI Karar Yapısı",
    importance: 5,
    explanation: "Bu kod bir koşul kontrolüdür. Eğer bmi değeri 18.5'ten küçükse sonuc değişkenine 'Zayıf' metni atanır. Burada karar veren yapı if, karşılaştırma yapan ifade ise bmi < 18.5 kısmıdır."
  },

  {
    q: "for döngüsüyle listBox1.Items.Add(\"Eleman \" + i); kodu ne yapar?",
    t: "mcq",
    o: [
      "ListBox'ı siler",
      "Formu kapatır",
      "MessageBox açar",
      "ListBox'a sırayla eleman ekler",
      "TextBox'ı sayıya çevirir"
    ],
    a: 3,
    difficulty: "medium",
    week: 6,
    topic: "ListBox Kod Yorumlama",
    importance: 5,
    explanation: "Items.Add, ListBox içine yeni eleman ekler. Döngü içinde kullanıldığında her turda farklı bir eleman listeye eklenebilir. Örneğin i değeri 1'den 10'a gidiyorsa ListBox'a Eleman 1, Eleman 2 ... Eleman 10 yazılır."
  },

  {
    q: "Bir fonksiyonun kod tekrarını azaltması ne anlama gelir?",
    t: "mcq",
    o: [
      "Aynı kodun daha fazla yere kopyalanması",
      "Programın sadece tasarım ekranında kalması",
      "Kodun hiç çalışmaması",
      "TextBox'ın kullanılmaması",
      "Aynı işin tek fonksiyona yazılıp gerektiğinde çağrılması"
    ],
    a: 4,
    difficulty: "medium",
    week: 8,
    topic: "Fonksiyon Mantığı",
    importance: 5,
    explanation: "Kod tekrarını azaltmak, aynı işlemi birçok yerde tekrar yazmamak demektir. Örneğin ortalama hesaplama formülü tek bir OrtalamaHesapla fonksiyonuna yazılır. Nerede ortalama gerekiyorsa bu fonksiyon çağrılır; böylece hata yapma ihtimali azalır ve bakım kolaylaşır."
  }
];
