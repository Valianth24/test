// Nesne Yönelimli Programlama – Final Tipi 100 Soruluk Soru Bankası
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]
// Not: a = doğru şık index’i (0=A, 1=B, 2=C, 3=D, 4=E)

window.questionBank = [
  // =========================================================
  // ==== 1. BÖLÜM – OOP TEMEL KAVRAMLAR (1-20) ===============
  // =========================================================

  {
    q: "Nesne yönelimli programlama en kısa tanımıyla nedir?",
    t: "mcq",
    o: [
      "Yazılımı sınıflar ve nesneler etrafında tasarlama yaklaşımı",
      "Sadece ekrana yazı yazdırma yöntemi",
      "Sadece veritabanı sorgusu yazma yöntemi",
      "Sadece makine dilinde kod yazma yöntemi",
      "Sadece dosya sıkıştırma tekniği"
    ],
    a: 0,
    difficulty: "easy",
    week: 1,
    topic: "OOP Tanımı",
    importance: 5,
    explanation: "OOP, gerçek dünyadaki varlıkları programda nesne ve sınıf olarak modelleme yaklaşımıdır. Örneğin Araba, Öğrenci veya Kitap birer sınıf olarak tasarlanabilir; bu sınıflardan oluşturulan somut örnekler ise nesnedir."
  },

  {
    q: "OOP'nin temel dört ilkesi hangisidir?",
    t: "mcq",
    o: [
      "SELECT, INSERT, UPDATE, DELETE",
      "Kapsülleme, kalıtım, soyutlama, çok biçimlilik",
      "Form, Button, Label, TextBox",
      "HTML, CSS, JavaScript, SQL",
      "Try, Catch, Finally, Throw"
    ],
    a: 1,
    difficulty: "easy",
    week: 2,
    topic: "OOP İlkeleri",
    importance: 5,
    explanation: "OOP'nin sınavda en çok sorulan dört ilkesi kapsülleme, kalıtım, soyutlama ve çok biçimliliktir. Bu dört kavram OOP'nin temelini oluşturur."
  },

  {
    q: "Sınıf (class) kavramı neyi ifade eder?",
    t: "mcq",
    o: [
      "Bellekte oluşturulmuş gerçek nesneyi",
      "Programın hatasını",
      "Nesnelerin özellik ve davranışlarını tanımlayan şablonu",
      "Sadece konsol ekranını",
      "Sadece veritabanı bağlantısını"
    ],
    a: 2,
    difficulty: "easy",
    week: 3,
    topic: "Class",
    importance: 5,
    explanation: "Sınıf, nesnenin planıdır. Örneğin Araba sınıfında marka, model, hız gibi özellikler; Hizlan(), Dur() gibi metotlar bulunabilir. Ancak sınıf tek başına somut nesne değildir."
  },

  {
    q: "Nesne (object) ne demektir?",
    t: "mcq",
    o: [
      "Sadece kod satırı",
      "Sadece metot adı",
      "Sadece veri tipi",
      "Sınıftan oluşturulan somut örnek",
      "Sadece hata mesajı"
    ],
    a: 3,
    difficulty: "easy",
    week: 3,
    topic: "Object",
    importance: 5,
    explanation: "Nesne, sınıftan üretilen gerçek örnektir. Araba sınıfı bir şablonsa, Toyota Corolla veya BMW gibi belirli özelliklere sahip örnekler nesnedir."
  },

  {
    q: "Bir sınıfta davranışları temsil eden yapılar ne olarak adlandırılır?",
    t: "mcq",
    o: [
      "Field",
      "Namespace",
      "Constructor",
      "Property",
      "Method"
    ],
    a: 4,
    difficulty: "easy",
    week: 3,
    topic: "Method",
    importance: 5,
    explanation: "Metotlar, nesnenin yapabileceği işlemleri temsil eder. Örneğin Araba sınıfında Hizlan(), FrenYap(), Dur() gibi işlemler metottur."
  },

  {
    q: "Bir sınıfta nesnenin verilerini tutan yapılar genel olarak neyi temsil eder?",
    t: "mcq",
    o: [
      "Özellikleri / alanları",
      "Sadece program hatalarını",
      "Sadece döngüleri",
      "Sadece namespace'i",
      "Sadece yorum satırlarını"
    ],
    a: 0,
    difficulty: "easy",
    week: 3,
    topic: "Attributes",
    importance: 5,
    explanation: "Özellikler veya alanlar, nesnenin sahip olduğu verileri tutar. Örneğin Öğrenci sınıfında ad, yaş, notOrtalaması gibi alanlar nesnenin özellikleridir."
  },

  {
    q: "C# dilinde sınıftan nesne oluştururken genellikle hangi anahtar kelime kullanılır?",
    t: "mcq",
    o: [
      "delete",
      "new",
      "void",
      "base",
      "static"
    ],
    a: 1,
    difficulty: "easy",
    week: 3,
    topic: "Nesne Oluşturma",
    importance: 5,
    explanation: "new anahtar kelimesi sınıftan nesne oluşturmak için kullanılır. Örneğin Araba a = new Araba(); ifadesinde Araba sınıfından a nesnesi oluşturulur."
  },

  {
    q: "Aşağıdakilerden hangisi sınıf–nesne ilişkisini en doğru anlatır?",
    t: "mcq",
    o: [
      "Nesne plan, sınıf gerçek örnektir",
      "Sınıf ve nesne aynı şeydir",
      "Sınıf plan, nesne bu plandan üretilen örnektir",
      "Sınıf sadece hata yakalamadır",
      "Nesne sadece veritabanıdır"
    ],
    a: 2,
    difficulty: "medium",
    week: 3,
    topic: "Class vs Object",
    importance: 5,
    explanation: "Sınıf, nesneleri üretmek için kullanılan şablondur. Nesne ise bu şablondan oluşturulan somut örnektir. Sınavda 'şablon' kelimesi çoğunlukla class cevabını gösterir."
  },

  {
    q: "C# dilinde sınıf tanımlamak için hangi anahtar kelime kullanılır?",
    t: "mcq",
    o: [
      "object",
      "method",
      "new",
      "class",
      "return"
    ],
    a: 3,
    difficulty: "easy",
    week: 3,
    topic: "Class Keyword",
    importance: 5,
    explanation: "C# dilinde sınıf tanımlamak için class anahtar kelimesi kullanılır. Örneğin class Araba { } ifadesi Araba adında bir sınıf tanımlar."
  },

  {
    q: "OOP'nin büyük projelerde tercih edilmesinin en önemli nedenlerinden biri hangisidir?",
    t: "mcq",
    o: [
      "Kodun tamamen rastgele yazılmasını sağlaması",
      "Sadece makine dili kullanması",
      "Kodun bakımını zorlaştırması",
      "Her şeyi tek fonksiyona toplaması",
      "Modülerlik ve bakım kolaylığı sağlaması"
    ],
    a: 4,
    difficulty: "medium",
    week: 1,
    topic: "OOP Avantajları",
    importance: 5,
    explanation: "OOP, büyük yazılımları küçük ve anlamlı parçalara böler. Her sınıf kendi görevinden sorumlu olur. Bu da bakım, geliştirme ve ekip çalışmasını kolaylaştırır."
  },

  {
    q: "Programlama dili ne işe yarar?",
    t: "mcq",
    o: [
      "Bilgisayara ne yapılacağını anlatmayı sağlar",
      "Sadece ekrana resim koyar",
      "Sadece bilgisayarı kapatır",
      "Sadece donanımı temizler",
      "Sadece dosya adını değiştirir"
    ],
    a: 0,
    difficulty: "easy",
    week: 1,
    topic: "Programlama Dili",
    importance: 4,
    explanation: "Programlama dili, geliştiricinin bilgisayara hangi verilerle hangi işlemleri yapacağını anlatmasını sağlar. Algoritma programlama diliyle bilgisayara aktarılır."
  },

  {
    q: "Makine dili hangi özelliklerle tanımlanır?",
    t: "mcq",
    o: [
      "İnsan diline çok yakın olması",
      "0 ve 1'lerden oluşan en düşük seviyeli dil olması",
      "Sadece görsel tasarım dili olması",
      "Sadece sınıf oluşturması",
      "Sadece web sayfası yazması"
    ],
    a: 1,
    difficulty: "medium",
    week: 1,
    topic: "Makine Dili",
    importance: 3,
    explanation: "Makine dili işlemcinin doğrudan anlayabildiği 0 ve 1 tabanlı dildir. İnsanlar için okunması zordur ama donanıma en yakın seviyededir."
  },

  {
    q: "Nesne yönelimli dillere hangisi örnek verilebilir?",
    t: "mcq",
    o: [
      "HTML",
      "CSS",
      "C#",
      "SQL SELECT",
      "TXT"
    ],
    a: 2,
    difficulty: "easy",
    week: 1,
    topic: "OOP Dilleri",
    importance: 4,
    explanation: "C#, Java ve C++ nesne yönelimli programlamayı destekleyen dillerdendir. Bu dillerde sınıf, nesne, kalıtım ve çok biçimlilik gibi yapılar kullanılabilir."
  },

  {
    q: "Bir program geliştirme sürecinde analiz aşamasının temel amacı nedir?",
    t: "mcq",
    o: [
      "Programı rastgele yazmak",
      "Sadece kodu silmek",
      "Sadece ekran rengini seçmek",
      "Problemi ve ihtiyaçları anlamak",
      "Sadece exe dosyası oluşturmak"
    ],
    a: 3,
    difficulty: "medium",
    week: 1,
    topic: "Program Geliştirme",
    importance: 3,
    explanation: "Analiz aşamasında problem anlaşılır, kullanıcının ihtiyacı belirlenir. Kodlama bundan sonra gelir. İyi analiz yapılmazsa doğru program yazmak zorlaşır."
  },

  {
    q: "Aşağıdakilerden hangisi programlama dillerinin genel ilkelerinden biridir?",
    t: "mcq",
    o: [
      "Rastgelelik",
      "Gereksiz karmaşıklık",
      "Kod tekrarını artırma",
      "Veriyi bozma",
      "Soyutlama"
    ],
    a: 4,
    difficulty: "easy",
    week: 1,
    topic: "Programlama İlkeleri",
    importance: 4,
    explanation: "Soyutlama, gereksiz ayrıntıları gizleyip gerekli bilgileri öne çıkarma ilkesidir. OOP'nin de temel ilkelerinden biridir."
  },

  {
    q: "OOP'de gerçek dünya nesnelerini modellemek ne anlama gelir?",
    t: "mcq",
    o: [
      "Gerçek varlıkları sınıf ve nesne yapılarıyla temsil etmek",
      "Sadece metin dosyası oluşturmak",
      "Sadece bilgisayarı kapatmak",
      "Sadece veri silmek",
      "Sadece grafik çizmek"
    ],
    a: 0,
    difficulty: "easy",
    week: 2,
    topic: "Modelleme",
    importance: 5,
    explanation: "OOP'de gerçek dünyadaki araba, insan, öğrenci, kitap gibi varlıklar sınıflarla modellenir. Bu sınıflardan oluşturulan nesneler program içinde kullanılır."
  },

  {
    q: "OOP'de veri ve davranışların bir arada tutulması hangi yaklaşımı anlatır?",
    t: "mcq",
    o: [
      "Sadece SQL",
      "Nesne yaklaşımı",
      "Makine dili",
      "Dosya sıkıştırma",
      "Konsol temizleme"
    ],
    a: 1,
    difficulty: "easy",
    week: 2,
    topic: "Data + Behavior",
    importance: 5,
    explanation: "OOP'de veri ve davranış birlikte düşünülür. Örneğin Araba sınıfında hem marka/hız gibi veriler hem de Hizlan() gibi davranışlar bulunur."
  },

  {
    q: "Aşağıdakilerden hangisi OOP'nin bakım kolaylığı sağlamasına örnektir?",
    t: "mcq",
    o: [
      "Tüm kodu tek satıra yazmak",
      "Tüm sınıfları silmek",
      "Değişikliğin sadece ilgili sınıfta yapılabilmesi",
      "Verileri rastgele dağıtmak",
      "Her metodu aynı işi yapacak şekilde yazmak"
    ],
    a: 2,
    difficulty: "medium",
    week: 3,
    topic: "Bakım Kolaylığı",
    importance: 5,
    explanation: "OOP'de görevler sınıflara bölündüğü için değişiklik çoğunlukla ilgili sınıfta yapılır. Bu, büyük projelerde hata riskini ve bakım maliyetini azaltır."
  },

  {
    q: "Bir sınıftan birden fazla nesne oluşturulabilmesi neyi gösterir?",
    t: "mcq",
    o: [
      "Sınıfın sadece bir kez kullanılabileceğini",
      "Nesnenin sınıftan bağımsız olduğunu",
      "Metotların çalışmayacağını",
      "Sınıfın şablon gibi tekrar kullanılabildiğini",
      "Programın çalışmayacağını"
    ],
    a: 3,
    difficulty: "medium",
    week: 3,
    topic: "Nesne Üretimi",
    importance: 5,
    explanation: "Bir sınıf plan gibi olduğu için aynı plandan çok sayıda nesne oluşturulabilir. Her nesne aynı özelliklere sahip olur ama değerleri farklı olabilir."
  },

  {
    q: "Araba sınıfında Marka, Model, Hiz alanları; Hizlan() metodu varsa en doğru yorum hangisidir?",
    t: "mcq",
    o: [
      "Marka ve Model metottur, Hizlan alanıdır",
      "Sınıf kullanılamaz",
      "Hizlan bir veritabanıdır",
      "Marka sadece constructor'dır",
      "Marka/Model/Hiz özellik, Hizlan davranıştır"
    ],
    a: 4,
    difficulty: "medium",
    week: 3,
    topic: "Özellik ve Metot",
    importance: 5,
    explanation: "Sınıfta veriyi tutan yapılar özellik/alan, işlem yapan yapılar metottur. Marka, Model, Hiz veri; Hizlan() ise davranıştır."
  },

  // =========================================================
  // ==== 2. BÖLÜM – KAPSÜLLEME, SOYUTLAMA, ERİŞİM (21-40) ====
  // =========================================================

  {
    q: "Kapsülleme (encapsulation) en doğru şekilde neyi sağlar?",
    t: "mcq",
    o: [
      "Veriyi sınıf içinde koruyup kontrollü erişim sağlamayı",
      "Tüm verileri public yapmayı",
      "Sınıfları tamamen silmeyi",
      "Kalıtımı yasaklamayı",
      "Metotların çalışmasını engellemeyi"
    ],
    a: 0,
    difficulty: "easy",
    week: 2,
    topic: "Encapsulation",
    importance: 5,
    explanation: "Kapsülleme, sınıfın iç verilerini dışarıdan doğrudan erişime kapatıp metot veya property aracılığıyla kontrollü erişim sağlar. Bu, veri güvenliği için önemlidir."
  },

  {
    q: "private erişim belirleyicisi ne anlama gelir?",
    t: "mcq",
    o: [
      "Her yerden erişilebilir",
      "Sadece tanımlandığı sınıf içinden erişilebilir",
      "Sadece alt sınıflardan erişilebilir",
      "Sadece namespace dışından erişilebilir",
      "Her zaman static olur"
    ],
    a: 1,
    difficulty: "easy",
    week: 4,
    topic: "Private",
    importance: 5,
    explanation: "private üyeye yalnızca tanımlandığı sınıf içinden erişilebilir. Kapsülleme yaparken alanlar genellikle private yapılır."
  },

  {
    q: "public erişim belirleyicisi için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Sadece aynı metot içinde erişilir",
      "Sadece constructor içinde çalışır",
      "Her yerden erişilebilir",
      "Sadece yıkıcı fonksiyonda kullanılır",
      "Sadece abstract sınıfta geçerlidir"
    ],
    a: 2,
    difficulty: "easy",
    week: 5,
    topic: "Public",
    importance: 5,
    explanation: "public üyeler sınıf dışından da erişilebilir. Ancak her şeyi public yapmak kapsülleme açısından doğru değildir; kritik veriler kontrollü açılmalıdır."
  },

  {
    q: "protected erişim belirleyicisi en çok hangi durumda kullanılır?",
    t: "mcq",
    o: [
      "Her yerden tamamen serbest erişim için",
      "Sadece veritabanı silmek için",
      "Sadece private alan oluşturmak için",
      "Sınıf içinden ve alt sınıflardan erişim için",
      "Metodu overload etmek için"
    ],
    a: 3,
    difficulty: "medium",
    week: 5,
    topic: "Protected",
    importance: 5,
    explanation: "protected üye sınıfın kendi içinde ve o sınıftan türeyen alt sınıflar içinde kullanılabilir. Kalıtım konularında sık sorulur."
  },

  {
    q: "Kapsülleme için en uygun örnek hangisidir?",
    t: "mcq",
    o: [
      "Tüm alanları public yapmak",
      "Veriyi doğrudan dışarı açmak",
      "Metotları hiç kullanmamak",
      "Sınıfı hiç oluşturmamak",
      "private alanı public metot/property ile kontrollü kullanmak"
    ],
    a: 4,
    difficulty: "medium",
    week: 4,
    topic: "Kapsülleme Örneği",
    importance: 5,
    explanation: "Kapsülleme mantığında veri doğrudan dışarı açılmaz. Örneğin private int yas; alanına negatif değer girilmesini engellemek için SetYas veya property içinde kontrol yapılır."
  },

  {
    q: "Soyutlama (abstraction) en kısa tanımıyla nedir?",
    t: "mcq",
    o: [
      "Gereksiz ayrıntıları gizleyip gerekli bilgileri sunmak",
      "Tüm metotları silmek",
      "Tüm alanları public yapmak",
      "Sınıftan nesne üretmeyi engellemek",
      "Programı makine diline çevirmek"
    ],
    a: 0,
    difficulty: "easy",
    week: 1,
    topic: "Abstraction",
    importance: 5,
    explanation: "Soyutlama, karmaşık yapının sadece gerekli kısmını kullanıcıya göstermektir. Örneğin araba kullanırken motorun tüm iç detaylarını bilmeden gaz/fren kullanırız."
  },

  {
    q: "Veri soyutlamasına en uygun örnek hangisidir?",
    t: "mcq",
    o: [
      "Yaş alanına -10 değerini doğrudan vermek",
      "Yaş değerini property/metot ile kontrol ederek atamak",
      "Tüm sınıfları kaldırmak",
      "Metotları hiç çağırmamak",
      "Constructor yazmamak"
    ],
    a: 1,
    difficulty: "medium",
    week: 1,
    topic: "Veri Soyutlama",
    importance: 5,
    explanation: "Veri soyutlaması, verinin doğru ve kontrollü kullanılmasını sağlar. Yaş alanına negatif değer atanmasını engellemek bunun tipik örneğidir."
  },

  {
    q: "Kontrol soyutlaması hangi yapılarla ilişkilidir?",
    t: "mcq",
    o: [
      "Sadece veritabanı tabloları",
      "Sadece dosya isimleri",
      "Fonksiyon, metot veya alt programlar",
      "Sadece renk seçimi",
      "Sadece namespace"
    ],
    a: 2,
    difficulty: "medium",
    week: 1,
    topic: "Kontrol Soyutlama",
    importance: 4,
    explanation: "Kontrol soyutlaması, belirli işlemleri fonksiyon veya metot gibi yapılarla düzenlemektir. Yaş kontrolünü ayrı metotta yapmak buna örnektir."
  },

  {
    q: "Bir sınıfın iç verilerini gizlemesi ve sadece belirli metotlarla eriştirmesi hangi OOP ilkesidir?",
    t: "mcq",
    o: [
      "Kalıtım",
      "Çok biçimlilik",
      "Overloading",
      "Kapsülleme",
      "Yıkıcı fonksiyon"
    ],
    a: 3,
    difficulty: "easy",
    week: 2,
    topic: "Encapsulation",
    importance: 5,
    explanation: "Veriyi gizleme ve kontrollü erişim kapsüllemedir. Özellikle private alan + public property/metot yapısı sınavda sık sorulur."
  },

  {
    q: "Aşağıdakilerden hangisi kapsüllemenin avantajıdır?",
    t: "mcq",
    o: [
      "Veri güvenliğini azaltır",
      "Yanlış veri girişini kolaylaştırır",
      "Kod tekrarını artırır",
      "Sınıf kullanımını yasaklar",
      "Veriye kontrollü erişim sağlar"
    ],
    a: 4,
    difficulty: "medium",
    week: 4,
    topic: "Kapsülleme Avantajı",
    importance: 5,
    explanation: "Kapsülleme sayesinde sınıf içindeki veri rastgele değiştirilemez. Programcı verinin nasıl okunup yazılacağını kontrol eder."
  },

  {
    q: "Property kullanımının temel amacı nedir?",
    t: "mcq",
    o: [
      "Alanlara kontrollü okuma/yazma sağlamak",
      "Programı kapatmak",
      "Tüm metotları silmek",
      "Sınıfı abstract yapmak",
      "Sadece namespace değiştirmek"
    ],
    a: 0,
    difficulty: "medium",
    week: 4,
    topic: "Property",
    importance: 5,
    explanation: "Property, private alanlara kontrollü erişim için kullanılır. get ile okuma, set ile yazma yapılır ve gerekirse set içinde kontrol eklenir."
  },

  {
    q: "Aşağıdaki alan tanımı kapsülleme açısından neden uygundur? private string kartNumarasi;",
    t: "mcq",
    o: [
      "Çünkü dışarıdan doğrudan değiştirilemez",
      "Çünkü herkes erişebilir",
      "Çünkü metot değildir",
      "Çünkü sınıfı yok eder",
      "Çünkü constructor'dır"
    ],
    a: 1,
    difficulty: "medium",
    week: 2,
    topic: "Private Field",
    importance: 5,
    explanation: "private alan dışarıdan doğrudan erişilemez. Kart numarası gibi hassas veriler bu şekilde korunmalı ve kontrollü metotlarla kullanılmalıdır."
  },

  {
    q: "Kapsülleme ihlaline en uygun örnek hangisidir?",
    t: "mcq",
    o: [
      "private alan kullanmak",
      "Property içinde kontrol yapmak",
      "Hassas alanları public yapıp doğrudan değiştirmek",
      "Metotla erişim sağlamak",
      "Veri doğrulaması yapmak"
    ],
    a: 2,
    difficulty: "medium",
    week: 4,
    topic: "Kapsülleme İhlali",
    importance: 5,
    explanation: "Hassas verileri public yapmak, dışarıdan kontrolsüz değişiklik yapılmasına neden olur. Bu kapsülleme mantığına aykırıdır."
  },

  {
    q: "Bir sınıfta sadece gerekli metotların kullanıcıya sunulması, detayların gizlenmesi hangi ilkeyle ilişkilidir?",
    t: "mcq",
    o: [
      "Overload",
      "Constructor",
      "Destructor",
      "Soyutlama",
      "Boxing"
    ],
    a: 3,
    difficulty: "medium",
    week: 2,
    topic: "Soyutlama",
    importance: 5,
    explanation: "Soyutlama, kullanıcının gereksiz iç detaylarla uğraşmadan gerekli işlevleri kullanmasını sağlar. Bu, karmaşıklığı azaltır."
  },

  {
    q: "Aşağıdakilerden hangisi erişim belirleyicidir?",
    t: "mcq",
    o: [
      "Console",
      "WriteLine",
      "return",
      "foreach",
      "public"
    ],
    a: 4,
    difficulty: "easy",
    week: 5,
    topic: "Access Modifier",
    importance: 5,
    explanation: "public, private ve protected erişim belirleyicilerdir. Üyelere nereden erişileceğini belirlerler."
  },

  {
    q: "Bir sınıfta alanların private, metotların public yapılması genelde hangi amaca hizmet eder?",
    t: "mcq",
    o: [
      "Veriyi koruyup davranışları dışarı açmaya",
      "Programı bozarak test etmeye",
      "Sınıfı kullanılamaz yapmaya",
      "Metotları gizlemeye",
      "Kalıtımı tamamen engellemeye"
    ],
    a: 0,
    difficulty: "medium",
    week: 4,
    topic: "OOP Tasarımı",
    importance: 5,
    explanation: "Bu yaklaşım OOP tasarımında yaygındır. Veri doğrudan korunur, kullanıcı ise sınıfın sunduğu metotlarla güvenli işlem yapar."
  },

  {
    q: "Soyut sınıfın doğrudan nesnesi neden oluşturulamaz?",
    t: "mcq",
    o: [
      "Çünkü her zaman static olmak zorundadır",
      "Çünkü eksik/genel davranışları temsil eder ve alt sınıflar tarafından tamamlanmalıdır",
      "Çünkü public alan içeremez",
      "Çünkü metot içeremez",
      "Çünkü sadece veritabanıdır"
    ],
    a: 1,
    difficulty: "medium",
    week: 6,
    topic: "Abstract Class",
    importance: 5,
    explanation: "Abstract sınıf genel bir taslaktır. İçinde alt sınıfların tamamlaması gereken soyut metotlar olabilir; bu yüzden doğrudan new ile nesne oluşturulamaz."
  },

  {
    q: "Interface hangi görevi üstlenir?",
    t: "mcq",
    o: [
      "Sadece veri saklar",
      "Sadece nesneyi yok eder",
      "Bir sınıfın uygulaması gereken metotları tanımlar",
      "Constructor'ın yerine geçer",
      "Sadece private alan üretir"
    ],
    a: 2,
    difficulty: "medium",
    week: 3,
    topic: "Interface",
    importance: 5,
    explanation: "Interface, sınıfa 'şu metotları uygulamak zorundasın' diyen bir sözleşme gibidir. Metotların nasıl yapılacağını değil, hangi metotların olması gerektiğini belirtir."
  },

  {
    q: "Interface içinde tanımlanan metot için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Mutlaka gövdesi olmak zorundadır",
      "Sadece private olabilir",
      "Hiçbir sınıf tarafından uygulanamaz",
      "Sınıf tarafından uygulanması gereken imzayı belirtir",
      "Sadece constructor olabilir"
    ],
    a: 3,
    difficulty: "medium",
    week: 3,
    topic: "Interface Method",
    importance: 5,
    explanation: "Interface metotları genellikle sadece imza olarak tanımlanır. Bu interface'i kullanan sınıf, metodu kendi içinde yazar."
  },

  {
    q: "Soyutlama ile kapsülleme arasındaki fark için en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "İkisi tamamen aynıdır",
      "Soyutlama sadece veritabanıdır",
      "Kapsülleme sadece inheritance demektir",
      "Soyutlama gereksiz detayı gizler; kapsülleme veriye erişimi kontrol eder",
      "İkisi de OOP dışı kavramdır"
    ],
    a: 4,
    difficulty: "hard",
    week: 4,
    topic: "Abstraction vs Encapsulation",
    importance: 5,
    explanation: "Soyutlama kullanıcıya gerekli kısmı gösterir, kapsülleme verinin dışarıdan kontrolsüz değişmesini engeller. İkisi benzer görünse de amaçları farklıdır."
  },

  // =========================================================
  // ==== 3. BÖLÜM – KALITIM / MİRAS ALMA (41-55) =============
  // =========================================================

  {
    q: "Kalıtım (inheritance) nedir?",
    t: "mcq",
    o: [
      "Bir sınıfın başka bir sınıftan özellik ve metot devralması",
      "Bir metodu aynı sınıfta tekrar yazmak",
      "Nesneyi bellekten silmek",
      "Veritabanı oluşturmak",
      "Sadece hata yakalamak"
    ],
    a: 0,
    difficulty: "easy",
    week: 5,
    topic: "Inheritance",
    importance: 5,
    explanation: "Kalıtım, alt sınıfın üst sınıftaki özellik ve metotları kullanabilmesidir. Örneğin Kedi sınıfı Hayvan sınıfından türeyebilir."
  },

  {
    q: "Base class ne demektir?",
    t: "mcq",
    o: [
      "Alt sınıf",
      "Kendisinden başka sınıf türetilen üst sınıf",
      "Yıkıcı fonksiyon",
      "Interface metodu",
      "Nesne dizisi"
    ],
    a: 1,
    difficulty: "easy",
    week: 5,
    topic: "Base Class",
    importance: 5,
    explanation: "Base class, kendisinden alt sınıflar üretilen üst sınıftır. Parent class veya super class olarak da adlandırılır."
  },

  {
    q: "Derived class ne demektir?",
    t: "mcq",
    o: [
      "Sadece constructor",
      "Sadece private field",
      "Başka bir sınıftan türeyen alt sınıf",
      "Veritabanı tablosu",
      "Dönüş tipi"
    ],
    a: 2,
    difficulty: "easy",
    week: 5,
    topic: "Derived Class",
    importance: 5,
    explanation: "Derived class, bir üst sınıftan türetilen alt sınıftır. Child class veya subclass olarak da geçebilir."
  },

  {
    q: "C# dilinde kalıtım hangi sembol ile gösterilir?",
    t: "mcq",
    o: [
      ".",
      "->",
      "=",
      ":",
      "::"
    ],
    a: 3,
    difficulty: "easy",
    week: 5,
    topic: "Inheritance Syntax",
    importance: 5,
    explanation: "C# dilinde class Kedi : Hayvan ifadesi Kedi sınıfının Hayvan sınıfından türediğini gösterir. İki nokta üst üste kalıtım için kullanılır."
  },

  {
    q: "class Kedi : Hayvan ifadesinde Hayvan neyi temsil eder?",
    t: "mcq",
    o: [
      "Alt sınıfı",
      "Nesne adını",
      "Yıkıcı fonksiyonu",
      "Metot adını",
      "Üst sınıfı"
    ],
    a: 4,
    difficulty: "easy",
    week: 5,
    topic: "Inheritance Syntax",
    importance: 5,
    explanation: "class Kedi : Hayvan ifadesinde Kedi alt sınıf, Hayvan üst sınıftır. Kedi, Hayvan sınıfındaki public/protected üyeleri kullanabilir."
  },

  {
    q: "Kalıtımın temel avantajı hangisidir?",
    t: "mcq",
    o: [
      "Kod tekrarını azaltması",
      "Tüm sınıfları private yapması",
      "Programı çalışmaz hale getirmesi",
      "Metot kullanımını yasaklaması",
      "Nesne oluşturmayı engellemesi"
    ],
    a: 0,
    difficulty: "easy",
    week: 5,
    topic: "Inheritance Advantage",
    importance: 5,
    explanation: "Kalıtım sayesinde ortak özellikler üst sınıfta yazılır ve alt sınıflar bu kodu tekrar yazmadan kullanır. Böylece kod tekrarı azalır."
  },

  {
    q: "Alt sınıf, üst sınıfın hangi üyelerine doğrudan erişebilir?",
    t: "mcq",
    o: [
      "Sadece private üyelere",
      "public ve protected üyelere",
      "Sadece destructor'a",
      "Sadece namespace'e",
      "Hiçbir üyeye erişemez"
    ],
    a: 1,
    difficulty: "medium",
    week: 5,
    topic: "Access in Inheritance",
    importance: 5,
    explanation: "Alt sınıf, üst sınıfın public ve protected üyelerine erişebilir. private üyeler yalnızca tanımlandığı sınıf içinde kullanılabilir."
  },

  {
    q: "Aşağıdakilerden hangisi kalıtım örneğidir?",
    t: "mcq",
    o: [
      "class Araba { }",
      "int x = 5;",
      "class Kedi : Hayvan { }",
      "Console.WriteLine();",
      "string ad;"
    ],
    a: 2,
    difficulty: "easy",
    week: 5,
    topic: "Inheritance Example",
    importance: 5,
    explanation: "class Kedi : Hayvan ifadesi kalıtım örneğidir. Kedi, Hayvan sınıfından türetilmiştir."
  },

  {
    q: "Base class içindeki ortak metotlar neden üst sınıfta tanımlanır?",
    t: "mcq",
    o: [
      "Alt sınıflar kullanamasın diye",
      "Program hata versin diye",
      "Her alt sınıfta tekrar yazmak için",
      "Kod tekrarını azaltmak için",
      "Sınıf oluşturmayı engellemek için"
    ],
    a: 3,
    difficulty: "medium",
    week: 5,
    topic: "Reuse",
    importance: 5,
    explanation: "Ortak davranış üst sınıfta yazılırsa alt sınıflar tekrar yazmadan kullanır. Örneğin Hayvan sınıfındaki SesCikar() metodu Kedi tarafından kullanılabilir."
  },

  {
    q: "Aşağıdakilerden hangisi is-a ilişkisine örnektir?",
    t: "mcq",
    o: [
      "Araba motor sahibidir",
      "Kitap sayfa sahibidir",
      "Öğrenci not sahibidir",
      "Ev kapı sahibidir",
      "Kedi bir Hayvandır"
    ],
    a: 4,
    difficulty: "medium",
    week: 5,
    topic: "is-a",
    importance: 5,
    explanation: "Kalıtım is-a ilişkisiyle açıklanır. Kedi bir Hayvandır ifadesi doğru bir kalıtım ilişkisidir. Bu yüzden Kedi sınıfı Hayvan sınıfından türeyebilir."
  },

  {
    q: "Aşağıdakilerden hangisi kalıtım için yanlış bir kullanımdır?",
    t: "mcq",
    o: [
      "Ortak özellikleri üst sınıfa koymak",
      "Alt sınıfta özel davranış eklemek",
      "Kedi sınıfını Hayvan'dan türetmek",
      "Her farklı nesne arasında zorla kalıtım kurmak",
      "Kod tekrarını azaltmak"
    ],
    a: 3,
    difficulty: "hard",
    week: 5,
    topic: "Kalıtım Tasarımı",
    importance: 4,
    explanation: "Kalıtım sadece mantıklı is-a ilişkilerinde kullanılmalıdır. Her sınıfı birbirinden türetmek doğru değildir; bazen composition daha uygundur."
  },

  {
    q: "base anahtar kelimesi ne için kullanılır?",
    t: "mcq",
    o: [
      "Alt sınıfı silmek için",
      "Nesneyi yok etmek için",
      "Üst sınıf üyesine/metoduna erişmek için",
      "Interface oluşturmak için",
      "Metodu overload etmek için"
    ],
    a: 2,
    difficulty: "medium",
    week: 6,
    topic: "base Keyword",
    importance: 5,
    explanation: "base, alt sınıftan üst sınıfın metot veya constructor'ına erişmek için kullanılır. Örneğin base.SesCikar() üst sınıftaki metodu çağırır."
  },

  {
    q: "Kedi sınıfı Hayvan sınıfından türediğinde Kedi nesnesi için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Hayvan sınıfındaki hiçbir metodu kullanamaz",
      "Sadece private alanları kullanır",
      "Kalıtım çalışmaz",
      "Hayvan sınıfının public/protected üyelerini kullanabilir",
      "Nesne oluşturulamaz"
    ],
    a: 3,
    difficulty: "medium",
    week: 5,
    topic: "Derived Object",
    importance: 5,
    explanation: "Alt sınıf nesnesi, kendi üyelerini ve üst sınıftan gelen erişilebilir üyeleri kullanabilir. Bu yüzden Kedi nesnesi hem Miyav() hem de SesCikar() çağırabilir."
  },

  {
    q: "Miras alma ile yeniden kullanılabilirlik arasındaki ilişki nedir?",
    t: "mcq",
    o: [
      "Kalıtım kodun tekrar kullanılmasını engeller",
      "Kalıtım sadece hata üretir",
      "Kalıtım sadece veritabanı içindir",
      "Kalıtım metotları tamamen siler",
      "Üst sınıftaki ortak kod alt sınıflarca tekrar kullanılabilir"
    ],
    a: 4,
    difficulty: "medium",
    week: 5,
    topic: "Reusability",
    importance: 5,
    explanation: "Kalıtımın en büyük faydalarından biri yeniden kullanılabilirliktir. Üst sınıftaki kod alt sınıflarda tekrar yazılmadan kullanılabilir."
  },

  {
    q: "Kalıtımda private üyelere neden doğrudan erişilemez?",
    t: "mcq",
    o: [
      "Private yalnızca tanımlandığı sınıf içinde geçerli olduğu için",
      "Private her yerden erişilebilir olduğu için",
      "Private sadece constructor olduğu için",
      "Private sadece interface olduğu için",
      "Private static zorunlu olduğu için"
    ],
    a: 0,
    difficulty: "medium",
    week: 5,
    topic: "Private in Inheritance",
    importance: 5,
    explanation: "private erişim belirleyicisi en kısıtlayıcı erişimdir. Alt sınıf bile private üyeye doğrudan erişemez; erişim gerekiyorsa protected veya public metot/property kullanılabilir."
  },

  // =========================================================
  // ==== 4. BÖLÜM – POLYMORPHISM, VIRTUAL, OVERRIDE (56-75) ==
  // =========================================================

  {
    q: "Çok biçimlilik (polymorphism) nedir?",
    t: "mcq",
    o: [
      "Sadece tek sınıf yazmak",
      "Aynı isimli davranışın farklı sınıflarda farklı çalışabilmesi",
      "Nesneyi silmek",
      "Veritabanı oluşturmak",
      "Sadece constructor çağırmak"
    ],
    a: 1,
    difficulty: "easy",
    week: 6,
    topic: "Polymorphism",
    importance: 5,
    explanation: "Polymorphism, aynı mesajın farklı nesnelerde farklı sonuç üretmesidir. Örneğin Ciz() metodu Daire'de daire, Kare'de kare çizebilir."
  },

  {
    q: "Overloading hangi çok biçimlilik türüne örnektir?",
    t: "mcq",
    o: [
      "Çalışma zamanı çok biçimliliği",
      "Yıkıcı fonksiyon",
      "Derleme zamanı çok biçimliliği",
      "Veritabanı çok biçimliliği",
      "Interface mirası"
    ],
    a: 2,
    difficulty: "medium",
    week: 8,
    topic: "Overloading",
    importance: 5,
    explanation: "Overloading, aynı isimde metotların farklı parametrelerle tanımlanmasıdır. Hangi metodun çalışacağı derleme zamanında belirlenir."
  },

  {
    q: "Overriding hangi durumda gerçekleşir?",
    t: "mcq",
    o: [
      "Aynı sınıfta aynı isimli farklı parametreli metot yazınca",
      "Constructor parametresiz olunca",
      "Destructor çağrılınca",
      "Alt sınıfın üst sınıftaki virtual metodu override etmesiyle",
      "Private alan public olunca"
    ],
    a: 3,
    difficulty: "medium",
    week: 6,
    topic: "Overriding",
    importance: 5,
    explanation: "Overriding, kalıtım ilişkisi içinde alt sınıfın üst sınıftaki virtual metodu kendi ihtiyacına göre yeniden yazmasıdır."
  },

  {
    q: "Üst sınıftaki bir metodun alt sınıfta override edilebilmesi için genellikle hangi anahtar kelime gerekir?",
    t: "mcq",
    o: [
      "private",
      "static",
      "sealed",
      "new",
      "virtual"
    ],
    a: 4,
    difficulty: "medium",
    week: 6,
    topic: "Virtual",
    importance: 5,
    explanation: "C# dilinde üst sınıftaki metot virtual olarak tanımlanırsa alt sınıfta override edilebilir. Bu, çalışma zamanı çok biçimliliğinin temelidir."
  },

  {
    q: "Alt sınıfta üst sınıftaki virtual metodu yeniden yazmak için hangi anahtar kelime kullanılır?",
    t: "mcq",
    o: [
      "override",
      "new",
      "base",
      "class",
      "return"
    ],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "Override",
    importance: 5,
    explanation: "override, üst sınıftaki virtual metodu alt sınıfta yeniden yazmak için kullanılır. Örneğin public override void Hizlan() { ... }."
  },

  {
    q: "Aşağıdaki kodda hangi çıktı beklenir? Arac arac = new Araba(); arac.Hizlan(); Araba sınıfı Hizlan metodunu override etmişse.",
    t: "mcq",
    o: [
      "Araç hızlanıyor.",
      "Araba hızlanıyor.",
      "Hata verir",
      "Hiçbir şey yazmaz",
      "Constructor çağrılmaz"
    ],
    a: 1,
    difficulty: "medium",
    week: 6,
    topic: "Runtime Polymorphism",
    importance: 5,
    explanation: "Referans tipi Arac olsa bile nesnenin gerçek tipi Araba'dır. Metot virtual/override ise çalışma zamanında Araba sınıfındaki metot çalışır."
  },

  {
    q: "Metot overloading için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Mutlaka kalıtım gerekir",
      "Sadece private metotlarda olur",
      "Aynı isimli metotların farklı parametrelerle tanımlanmasıdır",
      "Sadece destructor için geçerlidir",
      "Metot adı farklı olmak zorundadır"
    ],
    a: 2,
    difficulty: "easy",
    week: 8,
    topic: "Method Overloading",
    importance: 5,
    explanation: "Overloading'de metot adı aynıdır ama parametre sayısı, sırası veya türü farklıdır. Örneğin Topla(int,int) ve Topla(double,double)."
  },

  {
    q: "Aşağıdakilerden hangisi overload örneğidir?",
    t: "mcq",
    o: [
      "void Topla(int a, int b) ve void Cikar(int a, int b)",
      "class Kedi : Hayvan",
      "public override void SesCikar()",
      "int Topla(int a, int b) ve double Topla(double a, double b)",
      "private string ad;"
    ],
    a: 3,
    difficulty: "medium",
    week: 8,
    topic: "Overload Example",
    importance: 5,
    explanation: "İki metodun adı Topla'dır ama parametre türleri farklıdır. Bu overload örneğidir. Kalıtım gerekmez."
  },

  {
    q: "Overload ile override arasındaki temel fark nedir?",
    t: "mcq",
    o: [
      "Overload sadece yıkıcı fonksiyondur",
      "Override aynı sınıfta olur, overload kalıtım ister",
      "İkisi tamamen aynıdır",
      "Overload hiçbir parametre kullanmaz",
      "Overload aynı sınıfta farklı parametrelerle; override kalıtımda metodu yeniden yazmayla ilgilidir"
    ],
    a: 4,
    difficulty: "hard",
    week: 8,
    topic: "Overload vs Override",
    importance: 5,
    explanation: "Overload: aynı isim, farklı parametre. Override: üst sınıftaki virtual metodu alt sınıfta yeniden yazma. Finalde en çok karıştırılan ayrımdır."
  },

  {
    q: "Abstract metot için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Gövdesi yoktur ve alt sınıfta uygulanmalıdır",
      "Her zaman private olmalıdır",
      "Sadece constructor içinde yazılır",
      "Sadece static olabilir",
      "Alt sınıfta kullanılamaz"
    ],
    a: 0,
    difficulty: "medium",
    week: 6,
    topic: "Abstract Method",
    importance: 5,
    explanation: "Abstract metot gövdesiz tanımlanır. Alt sınıf bu metodu override ederek kendi uygulamasını yazmak zorundadır."
  },

  {
    q: "abstract class Sekil { public abstract void Ciz(); } için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Sekil sınıfından doğrudan nesne oluşturulabilir",
      "Ciz metodu alt sınıflarca uygulanmalıdır",
      "Ciz metodu private olmak zorundadır",
      "Sekil sınıfı interface değildir ama hiç metot içeremez",
      "Kodda kalıtım yoktur"
    ],
    a: 1,
    difficulty: "medium",
    week: 6,
    topic: "Abstract Class",
    importance: 5,
    explanation: "Abstract sınıftaki abstract metot alt sınıflarca override edilmelidir. Örneğin Daire sınıfı Ciz() metodunu kendi şekilde yazar."
  },

  {
    q: "Interface ile abstract class arasındaki temel farklardan biri hangisidir?",
    t: "mcq",
    o: [
      "Interface hiçbir sınıf tarafından kullanılamaz",
      "Abstract class sadece veritabanı içindir",
      "Interface bir sınıfa uygulanması gereken metot sözleşmesi verir",
      "Abstract class içinde hiç metot olamaz",
      "Interface constructor olmak zorundadır"
    ],
    a: 2,
    difficulty: "hard",
    week: 6,
    topic: "Interface vs Abstract",
    importance: 5,
    explanation: "Interface, sınıfın uygulaması gereken metotları tanımlayan bir sözleşme gibidir. Abstract class ise ortak temel davranış ve soyut metotları birlikte taşıyabilir."
  },

  {
    q: "interface ICalisabilir { void Calis(); } kodu ne anlatır?",
    t: "mcq",
    o: [
      "Calis metodu hemen çalışır",
      "ICalisabilir bir nesnedir",
      "Calis private alandır",
      "Bu interface'i kullanan sınıf Calis metodunu yazmalıdır",
      "Calis bir destructor'dır"
    ],
    a: 3,
    difficulty: "medium",
    week: 6,
    topic: "Interface Kullanımı",
    importance: 5,
    explanation: "Interface içinde metot imzası vardır. Robot : ICalisabilir yazılırsa Robot sınıfı Calis() metodunu uygulamalıdır."
  },

  {
    q: "Çalışma zamanı çok biçimliliği en çok hangi yapılarla ilişkilidir?",
    t: "mcq",
    o: [
      "Sadece overload",
      "Sadece field",
      "Sadece private değişken",
      "Sadece constructor overloading",
      "virtual ve override"
    ],
    a: 4,
    difficulty: "medium",
    week: 6,
    topic: "Runtime Polymorphism",
    importance: 5,
    explanation: "Çalışma zamanı çok biçimliliğinde hangi metodun çalışacağı nesnenin gerçek tipine göre belirlenir. C#'ta virtual/override bu işin temelidir."
  },

  {
    q: "Derleme zamanı çok biçimliliği için en uygun örnek hangisidir?",
    t: "mcq",
    o: [
      "Metot overloading",
      "Metot overriding",
      "Abstract metot",
      "Virtual metot",
      "Base referansla alt sınıf çağırma"
    ],
    a: 0,
    difficulty: "medium",
    week: 8,
    topic: "Compile-time Polymorphism",
    importance: 5,
    explanation: "Overloading'de hangi metodun çağrılacağı parametrelerden derleme zamanında anlaşılır. Bu yüzden compile-time polymorphism örneğidir."
  },

  {
    q: "public virtual void SesCikar() ifadesindeki virtual ne sağlar?",
    t: "mcq",
    o: [
      "Metodun private olmasını",
      "Alt sınıfta override edilebilmesini",
      "Sınıfın sealed olmasını",
      "Metodun constructor olmasını",
      "Metodun silinmesini"
    ],
    a: 1,
    difficulty: "easy",
    week: 6,
    topic: "Virtual Keyword",
    importance: 5,
    explanation: "virtual, üst sınıftaki metodun alt sınıfta yeniden yazılabileceğini belirtir. Alt sınıf override ile kendi davranışını verir."
  },

  {
    q: "public override void SesCikar() ifadesi ne anlama gelir?",
    t: "mcq",
    o: [
      "Yeni bir sınıf oluşturur",
      "Nesneyi yok eder",
      "Üst sınıftaki virtual metodu yeniden yazar",
      "Metodu overload eder",
      "Interface siler"
    ],
    a: 2,
    difficulty: "easy",
    week: 6,
    topic: "Override Keyword",
    importance: 5,
    explanation: "override, üst sınıftaki virtual metodu alt sınıfta yeniden tanımlamak için kullanılır. Bu, runtime polymorphism sağlar."
  },

  {
    q: "Şekil, Daire, Kare örneği çok biçimliliği nasıl açıklar?",
    t: "mcq",
    o: [
      "Tüm sınıflar aynı çıktıyı vermek zorundadır",
      "Metotlar hiç çalışmaz",
      "Kalıtım yasaktır",
      "Aynı Ciz mesajına farklı şekillerin farklı cevap vermesiyle",
      "Sadece constructor çalışmasıyla"
    ],
    a: 3,
    difficulty: "medium",
    week: 1,
    topic: "Polymorphism Example",
    importance: 5,
    explanation: "Daire, Kare ve Üçgen sınıfları aynı Ciz() metoduna sahip olabilir ama her biri farklı çizim yapar. Bu çok biçimliliktir."
  },

  {
    q: "Aşağıdakilerden hangisi interface kullanımının avantajıdır?",
    t: "mcq",
    o: [
      "Sınıfların hiçbir kurala uymamasını sağlamak",
      "Metotların çalışmasını engellemek",
      "Kalıtımı tamamen kaldırmak",
      "Constructor yazmayı yasaklamak",
      "Sınıflara ortak bir standart/sözleşme kazandırmak"
    ],
    a: 4,
    difficulty: "medium",
    week: 3,
    topic: "Interface Advantage",
    importance: 5,
    explanation: "Interface, farklı sınıfların ortak metotları uygulamasını zorunlu kılar. Böylece kod daha düzenli ve standart hale gelir."
  },

  {
    q: "Nesne dizileri ne işe yarar?",
    t: "mcq",
    o: [
      "Birden fazla nesneyi aynı dizi içinde saklamaya",
      "Sadece tek sayı tutmaya",
      "Sadece hata yakalamaya",
      "Sadece constructor silmeye",
      "Sadece interface kapatmaya"
    ],
    a: 0,
    difficulty: "easy",
    week: 3,
    topic: "Object Arrays",
    importance: 4,
    explanation: "Nesne dizileri birden fazla nesneyi düzenli şekilde saklamak için kullanılır. Örneğin Ogrenci[] ogrenciler = new Ogrenci[2];"
  },

  // =========================================================
  // ==== 5. BÖLÜM – CONSTRUCTOR / DESTRUCTOR / EF (76-100) ===
  // =========================================================

  {
    q: "Constructor nedir?",
    t: "mcq",
    o: [
      "Nesne yok olunca çalışan metot",
      "Nesne oluşturulduğunda otomatik çalışan özel metot",
      "Sadece hata yakalayan blok",
      "Sadece interface tanımı",
      "Sadece veritabanı sorgusu"
    ],
    a: 1,
    difficulty: "easy",
    week: 9,
    topic: "Constructor",
    importance: 5,
    explanation: "Constructor, nesne oluşturulduğunda otomatik çalışan özel fonksiyondur. Genellikle nesnenin ilk değerlerini atamak için kullanılır."
  },

  {
    q: "Constructor için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Mutlaka int döndürür",
      "Mutlaka private olmak zorundadır",
      "Sınıf adıyla aynı isme sahiptir ve dönüş tipi yazılmaz",
      "Sadece interface içinde olur",
      "Yalnızca nesne yok olunca çalışır"
    ],
    a: 2,
    difficulty: "medium",
    week: 9,
    topic: "Constructor Özellikleri",
    importance: 5,
    explanation: "Constructor'ın adı sınıf adıyla aynıdır ve dönüş tipi yoktur. Örneğin class Car için constructor Car() şeklindedir."
  },

  {
    q: "Parametreli constructor ne sağlar?",
    t: "mcq",
    o: [
      "Nesne oluşturmayı engeller",
      "Sınıfı interface yapar",
      "Metodu virtual yapar",
      "Nesne oluşturulurken başlangıç değerleri verilmesini sağlar",
      "Destructor'ı iptal eder"
    ],
    a: 3,
    difficulty: "medium",
    week: 9,
    topic: "Parametreli Constructor",
    importance: 5,
    explanation: "Parametreli constructor, nesne oluşturulurken dışarıdan değer alır. Örneğin new Ogrenci(\"Ali\", 20, 3.8) ile nesnenin ilk bilgileri atanabilir."
  },

  {
    q: "Constructor overloading ne demektir?",
    t: "mcq",
    o: [
      "Constructor'ın hiç yazılmaması",
      "Destructor'ın parametre alması",
      "Metotların silinmesi",
      "Sınıfın nesne oluşturamaması",
      "Aynı sınıfta farklı parametrelerle birden fazla constructor tanımlanması"
    ],
    a: 4,
    difficulty: "medium",
    week: 9,
    topic: "Constructor Overloading",
    importance: 5,
    explanation: "Constructor overloading, aynı sınıfta farklı parametre listelerine sahip birden fazla constructor yazmaktır. Böylece nesneler farklı yollarla başlatılabilir."
  },

  {
    q: "Destructor nedir?",
    t: "mcq",
    o: [
      "Nesne yok edilirken otomatik çalışan özel fonksiyon",
      "Nesne oluşturulurken çalışan fonksiyon",
      "Sınıfı kalıtımla genişleten yapı",
      "Metodu overload eden yapı",
      "Veritabanı bağlamı"
    ],
    a: 0,
    difficulty: "easy",
    week: 9,
    topic: "Destructor",
    importance: 5,
    explanation: "Destructor, nesne bellekten silinirken veya kapsam dışı kalırken çalışan özel fonksiyondur. Temizlik ve kaynak serbest bırakma işlerinde kullanılır."
  },

  {
    q: "C++ tarzı destructor yazımında sınıf adının önüne hangi sembol gelir?",
    t: "mcq",
    o: [
      "#",
      "~",
      "@",
      "$",
      "!"
    ],
    a: 1,
    difficulty: "easy",
    week: 9,
    topic: "Destructor Syntax",
    importance: 5,
    explanation: "Destructor sınıf adıyla aynı isme sahiptir ancak başında ~ sembolü bulunur. Örneğin Car sınıfının destructor'ı ~Car() şeklindedir."
  },

  {
    q: "Destructor için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Birden fazla overload edilebilir",
      "Parametre alır",
      "Genellikle parametre almaz ve sınıfta tek tane olur",
      "Sınıftan nesne oluşturur",
      "Mutlaka int döndürür"
    ],
    a: 2,
    difficulty: "medium",
    week: 9,
    topic: "Destructor Özellikleri",
    importance: 5,
    explanation: "Destructor genellikle parametre almaz, dönüş tipi yoktur ve overload edilmez. Sınıf için tek destructor bulunur."
  },

  {
    q: "Yıkıcı fonksiyonun temel amacı hangisidir?",
    t: "mcq",
    o: [
      "Nesnenin ilk değerlerini atamak",
      "Sınıfı kalıtımla genişletmek",
      "Metodu overload etmek",
      "Kaynakları serbest bırakmak ve temizlik yapmak",
      "Interface oluşturmak"
    ],
    a: 3,
    difficulty: "medium",
    week: 9,
    topic: "Destructor Purpose",
    importance: 5,
    explanation: "Destructor, nesne yok edilmeden önce bellek, dosya, bağlantı gibi kaynakları serbest bırakmak için kullanılabilir."
  },

  {
    q: "Öğrenci sınıfında constructor'ın isim, yaş, notOrtalaması alması neyi sağlar?",
    t: "mcq",
    o: [
      "Nesnenin yok edilmesini",
      "Metodun override edilmesini",
      "Interface uygulanmasını",
      "Sınıfın abstract olmasını",
      "Öğrenci nesnesinin başlangıç bilgilerinin atanmasını"
    ],
    a: 4,
    difficulty: "medium",
    week: 9,
    topic: "Constructor Senaryosu",
    importance: 5,
    explanation: "Constructor parametreleri, nesne oluşurken değerleri doğrudan alanlara atamak için kullanılır. Böylece nesne eksik veya boş başlamaz."
  },

  {
    q: "displayInfo() gibi bir metot genellikle ne için kullanılır?",
    t: "mcq",
    o: [
      "Nesne bilgilerini ekrana yazdırmak için",
      "Nesneyi bellekten silmek için",
      "Sınıfı interface yapmak için",
      "Metodu overload etmek için",
      "Veritabanını silmek için"
    ],
    a: 0,
    difficulty: "easy",
    week: 9,
    topic: "displayInfo",
    importance: 4,
    explanation: "displayInfo() metodu, nesnenin bilgilerini kullanıcıya göstermek için kullanılır. Araba model/yıl/fiyat veya öğrenci isim/yaş/ortalama gibi bilgiler yazdırılabilir."
  },

  {
    q: "Entity Framework nedir?",
    t: "mcq",
    o: [
      "Sadece grafik çizim aracı",
      "Microsoft tarafından geliştirilen ORM aracıdır",
      "Sadece dosya sıkıştırıcıdır",
      "Sadece makine dili derleyicisidir",
      "Sadece interface türüdür"
    ],
    a: 1,
    difficulty: "medium",
    week: 11,
    topic: "Entity Framework",
    importance: 5,
    explanation: "Entity Framework, nesneler ile veritabanı tabloları arasında köprü kuran ORM aracıdır. Veritabanı işlemlerini sınıflar ve nesneler üzerinden yapmayı sağlar."
  },

  {
    q: "ORM ne anlama gelir?",
    t: "mcq",
    o: [
      "Object Random Method",
      "Only Read Memory",
      "Object Relational Mapping",
      "Open Runtime Model",
      "Output Record Manager"
    ],
    a: 2,
    difficulty: "medium",
    week: 11,
    topic: "ORM",
    importance: 5,
    explanation: "ORM, Object Relational Mapping demektir. Nesne yönelimli kod ile ilişkisel veritabanı arasındaki eşleştirmeyi sağlar."
  },

  {
    q: "Entity Framework'te entity sınıfları genellikle neye karşılık gelir?",
    t: "mcq",
    o: [
      "Sadece konsol ekranına",
      "Sadece hata mesajına",
      "Sadece constructor'a",
      "Veritabanı tablolarına",
      "Destructor'a"
    ],
    a: 3,
    difficulty: "medium",
    week: 11,
    topic: "Entity",
    importance: 5,
    explanation: "EF mantığında sınıflar veritabanı tablolarını temsil eder. Örneğin Book sınıfı veritabanında Books tablosuna karşılık gelebilir."
  },

  {
    q: "Entity Framework'te sınıf özellikleri (properties) genellikle neye karşılık gelir?",
    t: "mcq",
    o: [
      "Veritabanı satırlarına",
      "Metot gövdelerine",
      "Constructor parametrelerine",
      "Namespace adlarına",
      "Veritabanı sütunlarına"
    ],
    a: 4,
    difficulty: "medium",
    week: 11,
    topic: "EF Mapping",
    importance: 5,
    explanation: "EF'de entity sınıfındaki property'ler veritabanındaki kolonlara karşılık gelir. Book sınıfında Title, Author, PublishedYear sütun gibi düşünülebilir."
  },

  {
    q: "DbContext ne için kullanılır?",
    t: "mcq",
    o: [
      "Veritabanı işlemlerini yönetmek için",
      "Metodu overload etmek için",
      "Nesneyi yok etmek için",
      "Sadece ekrana yazı yazmak için",
      "Sadece abstract sınıf oluşturmak için"
    ],
    a: 0,
    difficulty: "medium",
    week: 11,
    topic: "DbContext",
    importance: 5,
    explanation: "DbContext, Entity Framework'te veritabanı ile uygulama arasındaki ana yönetim sınıfıdır. Ekleme, listeleme, silme gibi işlemler DbContext üzerinden yapılır."
  },

  {
    q: "DbSet<Book> Books ifadesi neyi temsil eder?",
    t: "mcq",
    o: [
      "Tek bir string değişkeni",
      "Book kayıtlarının veritabanı kümesini/tablosunu",
      "Destructor metodunu",
      "Sadece console çıktısını",
      "Interface imzasını"
    ],
    a: 1,
    difficulty: "medium",
    week: 11,
    topic: "DbSet",
    importance: 5,
    explanation: "DbSet<Book>, Book nesnelerinin veritabanında temsil edildiği koleksiyondur. Kitap ekleme, listeleme ve silme bu DbSet üzerinden yapılabilir."
  },

  {
    q: "Code First yaklaşımı ne demektir?",
    t: "mcq",
    o: [
      "Önce veritabanı elle kurulur, sonra sınıf üretilir",
      "Önce model çizilir, sonra kod silinir",
      "Önce kod/sınıflar yazılır, veritabanı bu modele göre oluşturulur",
      "Önce destructor çalıştırılır",
      "Önce interface kapatılır"
    ],
    a: 2,
    difficulty: "medium",
    week: 11,
    topic: "Code First",
    importance: 5,
    explanation: "Code First yaklaşımında önce C# sınıfları yazılır. EF bu sınıflara göre veritabanı yapısını oluşturur."
  },

  {
    q: "Database First yaklaşımı neyi ifade eder?",
    t: "mcq",
    o: [
      "Önce kod yazılır",
      "Önce interface yazılır",
      "Önce constructor silinir",
      "Var olan veritabanından sınıfların oluşturulmasını",
      "Metotların overload edilmesini"
    ],
    a: 3,
    difficulty: "medium",
    week: 11,
    topic: "Database First",
    importance: 4,
    explanation: "Database First yaklaşımında önce hazır bir veritabanı vardır. EF bu veritabanı yapısından sınıfları oluşturur."
  },

  {
    q: "Book sınıfında BookId, Title, Author, PublishedYear alanları hangi senaryoya uygundur?",
    t: "mcq",
    o: [
      "Hayvan sesi çıkarma",
      "Araç hızlandırma",
      "Şekil çizme",
      "Constructor yok etme",
      "Kitaplık sistemi için kitap bilgisi tutma"
    ],
    a: 4,
    difficulty: "easy",
    week: 11,
    topic: "Book Entity",
    importance: 5,
    explanation: "BookId, Title, Author ve PublishedYear bir kitabı tanımlayan bilgilerdir. Bu yüzden Book sınıfı kitaplık/kütüphane sistemi için entity olarak uygundur."
  },

  {
    q: "Entity Framework ile kitap ekleme işleminde temel mantık hangisidir?",
    t: "mcq",
    o: [
      "Book nesnesi oluşturup DbSet'e eklemek ve değişiklikleri kaydetmek",
      "Book sınıfını abstract yapmak",
      "Constructor'ı silmek",
      "Interface'i kapatmak",
      "Destructor'ı overload etmek"
    ],
    a: 0,
    difficulty: "medium",
    week: 11,
    topic: "EF Add",
    importance: 5,
    explanation: "EF ile ekleme işleminde önce yeni Book nesnesi oluşturulur. Sonra context.Books.Add(book) ve SaveChanges() mantığıyla veritabanına kaydedilir."
  },

  {
    q: "Entity Framework'te SaveChanges() ne işe yarar?",
    t: "mcq",
    o: [
      "Sadece nesne oluşturur",
      "Yapılan ekleme/silme/güncelleme değişikliklerini veritabanına kaydeder",
      "Metodu override eder",
      "Constructor'ı çağırır",
      "Interface oluşturur"
    ],
    a: 1,
    difficulty: "medium",
    week: 11,
    topic: "SaveChanges",
    importance: 5,
    explanation: "EF'de Add, Remove veya Update gibi işlemler bellekte takip edilir. SaveChanges() çağrılınca bu değişiklikler gerçek veritabanına uygulanır."
  },

  {
    q: "Entity Framework'te kitap silme için genellikle hangi bilgi kullanılır?",
    t: "mcq",
    o: [
      "Kitabın rengi",
      "Constructor sayısı",
      "BookId",
      "Destructor adı",
      "Interface sayısı"
    ],
    a: 2,
    difficulty: "easy",
    week: 11,
    topic: "EF Delete",
    importance: 5,
    explanation: "PDF'deki kitaplık senaryosunda kitap silme işlemi ID'ye göre yapılır. BookId, kitabı benzersiz tanımladığı için silmede kullanılır."
  },

  {
    q: "EF'nin OOP ile ilişkisi için en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "OOP'yi tamamen gereksiz yapar",
      "Sadece destructor çalıştırır",
      "Sadece console temizler",
      "Veritabanı işlemlerini nesneler üzerinden yönetmeyi sağlar",
      "Sadece metot overload eder"
    ],
    a: 3,
    difficulty: "medium",
    week: 11,
    topic: "EF ve OOP",
    importance: 5,
    explanation: "Entity Framework, veritabanı tablolarını sınıflar ve nesnelerle temsil eder. Böylece OOP mantığı veritabanı işlemlerinde de kullanılabilir."
  },

  {
    q: "Aşağıdakilerden hangisi EF kullanım yöntemlerinden biridir?",
    t: "mcq",
    o: [
      "Destructor First",
      "Override First",
      "Interface First",
      "Private First",
      "Code First"
    ],
    a: 4,
    difficulty: "easy",
    week: 11,
    topic: "EF Yaklaşımları",
    importance: 5,
    explanation: "Entity Framework kullanım yöntemleri arasında Code First, Database First ve Model First bulunur. Code First, koddan veritabanı üretme yaklaşımıdır."
  }
];
