// Nesne Yönelimli Programlama – Son 7 Hafta Final Tipi 100 Soru
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]
// Not: a = doğru şık index’i (0=A, 1=B, 2=C, 3=D, 4=E)

window.questionBank = [
  // =========================================================
  // ==== HAFTA 7 – POLYMORPHISM, VIRTUAL, OVERRIDE (1-20) ====
  // =========================================================

  {
    q: "Çok biçimlilik (polymorphism) en kısa tanımıyla nedir?",
    t: "mcq",
    o: [
      "Aynı davranışın farklı nesnelerde farklı şekilde çalışabilmesi",
      "Bir sınıfın hiç metot içermemesi",
      "Bir nesnenin bellekten silinmesi",
      "Bir veritabanının otomatik oluşması",
      "Bir değişkenin sadece sayı tutması"
    ],
    a: 0,
    difficulty: "easy",
    week: 7,
    topic: "Polymorphism",
    importance: 5,
    explanation: "Polymorphism Türkçede çok biçimlilik demektir. Temel fikir şudur: Aynı isimli metot farklı sınıflarda farklı sonuç verebilir. Örneğin Hayvan sınıfında SesCikar() vardır; Kedi bunu miyavlama, Köpek havlama olarak uygulayabilir."
  },

  {
    q: "C# dilinde üst sınıftaki bir metodun alt sınıfta değiştirilebilmesi için üst sınıfta genellikle hangi anahtar kelime kullanılır?",
    t: "mcq",
    o: [
      "static",
      "virtual",
      "private",
      "new",
      "sealed"
    ],
    a: 1,
    difficulty: "easy",
    week: 7,
    topic: "Virtual",
    importance: 5,
    explanation: "virtual, 'bu metot alt sınıfta yeniden yazılabilir' anlamına gelir. Üst sınıfta virtual yazılmazsa alt sınıf aynı metodu gerçek anlamda override edemez. Finalde virtual kelimesi genellikle override ile birlikte sorulur."
  },

  {
    q: "Alt sınıfta, üst sınıftaki virtual metodu yeniden yazmak için hangi anahtar kelime kullanılır?",
    t: "mcq",
    o: [
      "base",
      "class",
      "override",
      "void",
      "using"
    ],
    a: 2,
    difficulty: "easy",
    week: 7,
    topic: "Override",
    importance: 5,
    explanation: "override, üst sınıfta virtual olarak tanımlanmış bir metodu alt sınıfta yeniden yazmak için kullanılır. Örneğin Arac sınıfındaki virtual Hizlan() metodu, Araba sınıfında override edilirse Araba kendi hızlanma mesajını yazabilir."
  },

  {
    q: "Aşağıdaki kodda çıktı ne olur? Arac arac = new Araba(); arac.Hizlan(); Araba sınıfı Hizlan() metodunu override etmiş ve 'Araba hızlanıyor.' yazdırıyorsa.",
    t: "mcq",
    o: [
      "Araç hızlanıyor.",
      "Hiçbir çıktı oluşmaz.",
      "Derleme hatası verir.",
      "Araba hızlanıyor.",
      "Sadece constructor çalışır."
    ],
    a: 3,
    difficulty: "medium",
    week: 7,
    topic: "Runtime Polymorphism",
    importance: 5,
    explanation: "Burada değişkenin tipi Arac gibi görünür; fakat bellekte oluşturulan gerçek nesne Araba'dır. Metot virtual/override ise çalışma zamanında gerçek nesnenin metodu çalışır. Bu yüzden çıktı 'Araba hızlanıyor.' olur."
  },

  {
    q: "Runtime polymorphism hangi zamanda karar verilen çok biçimliliktir?",
    t: "mcq",
    o: [
      "Kod yazılmadan önce",
      "Derleme sırasında kesin olarak",
      "Program silinirken",
      "Veritabanı oluşturulurken",
      "Program çalışırken"
    ],
    a: 4,
    difficulty: "medium",
    week: 7,
    topic: "Runtime Polymorphism",
    importance: 5,
    explanation: "Runtime, programın çalıştığı an demektir. Runtime polymorphism'te hangi metodun çalışacağı nesnenin gerçek tipine göre program çalışırken belirlenir. virtual ve override yapıları bu yüzden çalışma zamanı çok biçimliliğiyle ilgilidir."
  },

  {
    q: "abstract class ne anlama gelir?",
    t: "mcq",
    o: [
      "Doğrudan nesne oluşturulamayan, alt sınıflara temel olmak için kullanılan sınıf",
      "Sadece veritabanı bağlantısı kuran sınıf",
      "Her zaman private olmak zorunda olan sınıf",
      "Hiçbir metot içeremeyen sınıf",
      "Sadece constructor içeren sınıf"
    ],
    a: 0,
    difficulty: "medium",
    week: 7,
    topic: "Abstract Class",
    importance: 5,
    explanation: "abstract class, tamamlanmamış veya genel taslak gibi düşünülebilir. Bu sınıftan doğrudan new ile nesne oluşturulamaz. Alt sınıflar bu sınıftan türeyerek eksik metotları tamamlar."
  },

  {
    q: "abstract metot için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Mutlaka gövdesi vardır.",
      "Alt sınıflar tarafından uygulanması gereken gövdesiz metottur.",
      "Sadece private olabilir.",
      "Sadece constructor içinde yazılır.",
      "Hiçbir sınıfta kullanılamaz."
    ],
    a: 1,
    difficulty: "medium",
    week: 7,
    topic: "Abstract Method",
    importance: 5,
    explanation: "abstract metot, sadece ne yapılacağını söyler; nasıl yapılacağını söylemez. Yani metot imzası vardır ama gövdesi yoktur. Alt sınıf bu metodu override ederek içini doldurmak zorundadır."
  },

  {
    q: "interface ne işe yarar?",
    t: "mcq",
    o: [
      "Nesneyi bellekten siler.",
      "Sadece constructor oluşturur.",
      "Bir sınıfın uygulaması gereken metotları sözleşme gibi tanımlar.",
      "Veritabanını otomatik siler.",
      "Metotların çalışmasını engeller."
    ],
    a: 2,
    difficulty: "medium",
    week: 7,
    topic: "Interface",
    importance: 5,
    explanation: "Interface, bir sözleşme gibidir. Bir sınıf interface'i kullanıyorsa, interface içinde yazan metotları uygulamak zorundadır. Örneğin ICalisabilir içinde Calis() varsa Robot sınıfı Calis() metodunu yazmalıdır."
  },

  {
    q: "interface ICalisabilir { void Calis(); } kodu neyi ifade eder?",
    t: "mcq",
    o: [
      "Calis metodu hemen çalışır.",
      "Calis metodu private değişkendir.",
      "ICalisabilir bir veritabanı tablosudur.",
      "Bu interface'i kullanan sınıf Calis() metodunu yazmalıdır.",
      "Bu kod constructor overload örneğidir."
    ],
    a: 3,
    difficulty: "medium",
    week: 7,
    topic: "Interface Method",
    importance: 5,
    explanation: "Interface içindeki metotlar bir zorunluluk bildirir. ICalisabilir'i kullanan sınıf, Calis() metodunun içini kendi ihtiyacına göre doldurmalıdır. Interface, davranışın adını verir; davranışın nasıl yapılacağını sınıf yazar."
  },

  {
    q: "abstract class ile interface arasındaki temel farklardan biri hangisidir?",
    t: "mcq",
    o: [
      "Interface içinde hiçbir metot adı yazılamaz.",
      "Abstract class asla miras alınamaz.",
      "Interface sadece veritabanı için kullanılır.",
      "Abstract class sadece string veri tutar.",
      "Abstract class ortak temel yapı verebilir; interface daha çok uygulanacak davranış sözleşmesi verir."
    ],
    a: 4,
    difficulty: "hard",
    week: 7,
    topic: "Abstract vs Interface",
    importance: 5,
    explanation: "Abstract class, ortak alan/metot ve soyut metotları birlikte taşıyabilir. Interface ise genellikle 'bu sınıf şu davranışları uygulamalı' der. Sıfırdan düşünürsek abstract class aileden gelen ortak yapı, interface ise yapılması gereken görev listesi gibidir."
  },

  {
    q: "base.SesCikar(); ifadesi ne yapar?",
    t: "mcq",
    o: [
      "Alt sınıftan üst sınıftaki SesCikar() metodunu çağırır.",
      "Nesneyi siler.",
      "Yeni interface oluşturur.",
      "Metodu overload eder.",
      "DbContext oluşturur."
    ],
    a: 0,
    difficulty: "medium",
    week: 7,
    topic: "base Keyword",
    importance: 5,
    explanation: "base anahtar kelimesi üst sınıfı temsil eder. Alt sınıfta override edilen bir metot içinde base.SesCikar() yazılırsa önce üst sınıftaki eski davranış çalıştırılır. Sonra alt sınıf kendi ek davranışını yapabilir."
  },

  {
    q: "virtual ve override birlikte kullanıldığında hangi OOP ilkesini güçlendirir?",
    t: "mcq",
    o: [
      "Kapsülleme",
      "Çok biçimlilik",
      "Constructor overloading",
      "LINQ",
      "Database First"
    ],
    a: 1,
    difficulty: "easy",
    week: 7,
    topic: "Virtual Override",
    importance: 5,
    explanation: "virtual ve override, aynı metot adının farklı sınıflarda farklı davranmasını sağlar. Bu da çok biçimlilik ilkesidir. Örneğin Arac.Hizlan() ve Araba.Hizlan() aynı isimdedir ama farklı çıktı verebilir."
  },

  {
    q: "Aşağıdakilerden hangisi polymorphism örneğidir?",
    t: "mcq",
    o: [
      "int sayi = 5;",
      "string ad = 'Ali';",
      "Sekil referansı ile Daire ve Kare nesnelerinin kendi Ciz() metotlarını çalıştırması",
      "Sadece console ekranını temizlemek",
      "Connection string yazmak"
    ],
    a: 2,
    difficulty: "medium",
    week: 7,
    topic: "Polymorphism Example",
    importance: 5,
    explanation: "Sekil genel bir üst sınıftır; Daire ve Kare ondan türeyebilir. Sekil tipindeki referansla farklı nesnelerin Ciz() metodu çağrıldığında her nesne kendi şeklini çizerse bu polymorphism olur."
  },

  {
    q: "abstract class Sekil { public abstract void Ciz(); } yapısında Ciz() metodu için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Ciz() metodu gövdeli olmak zorundadır.",
      "Ciz() metodu static olmak zorundadır.",
      "Ciz() metodu private olmak zorundadır.",
      "Sekil'den türeyen somut sınıflar Ciz() metodunu override etmelidir.",
      "Bu yapı LINQ sorgusudur."
    ],
    a: 3,
    difficulty: "hard",
    week: 7,
    topic: "Abstract Method",
    importance: 5,
    explanation: "abstract metot, alt sınıfa 'bu metodu sen yazacaksın' der. Sekil sınıfı Ciz() metodunun adını belirler ama çizimin nasıl olacağını Daire, Kare gibi alt sınıflar belirler. Bu yüzden override zorunludur."
  },

  {
    q: "Bir sınıf interface'i uyguladığı halde interface içindeki metodu yazmazsa ne olur?",
    t: "mcq",
    o: [
      "Program her durumda çalışır.",
      "Metot otomatik silinir.",
      "Interface constructor'a dönüşür.",
      "Sınıf otomatik veritabanı olur.",
      "Derleme hatası oluşur."
    ],
    a: 4,
    difficulty: "medium",
    week: 7,
    topic: "Interface Implementation",
    importance: 5,
    explanation: "Interface bir sözleşmedir. Sınıf bu sözleşmeyi kabul ettiyse içerideki metotları yazmak zorundadır. Yazmazsa derleyici 'sözleşmeyi tamamlamadın' diyerek hata verir."
  },

  {
    q: "Arac arac = new Araba(); yazımı hangi kavrama örnektir?",
    t: "mcq",
    o: [
      "Üst sınıf referansıyla alt sınıf nesnesi tutma",
      "Constructor yok etme",
      "Database First",
      "LINQ update",
      "Return type overload"
    ],
    a: 0,
    difficulty: "medium",
    week: 7,
    topic: "Base Reference",
    importance: 5,
    explanation: "Değişken tipi Arac'tır ama nesnenin gerçek tipi Araba'dır. Bu yapı polymorphism için çok önemlidir. Çünkü aynı üst sınıf referansı farklı alt sınıf nesnelerini tutabilir."
  },

  {
    q: "Polymorphism büyük projelerde neden önemlidir?",
    t: "mcq",
    o: [
      "Çünkü tüm kodu tek sınıfa toplar.",
      "Çünkü farklı alt sınıfları ortak üst tip üzerinden yönetmeyi sağlar.",
      "Çünkü tüm metotları private yapar.",
      "Çünkü veritabanını siler.",
      "Çünkü constructor yazmayı yasaklar."
    ],
    a: 1,
    difficulty: "medium",
    week: 7,
    topic: "Polymorphism Advantage",
    importance: 5,
    explanation: "Polymorphism sayesinde farklı türde nesneler ortak bir üst tip üzerinden yönetilebilir. Mesela bir List<Sekil> içinde Daire, Kare, Ucgen tutulabilir ve hepsine Ciz() denebilir. Her nesne kendi çizimini yapar."
  },

  {
    q: "Aşağıdakilerden hangisi interface kullanımına en uygun senaryodur?",
    t: "mcq",
    o: [
      "Bütün sınıfların hiçbir ortak davranışı yoksa",
      "Bir davranışın adını tüm ilgili sınıflara zorunlu kılmak istiyorsak",
      "Sadece int değişken oluşturmak istiyorsak",
      "Constructor'ı otomatik silmek istiyorsak",
      "Sadece dizin yolu yazmak istiyorsak"
    ],
    a: 1,
    difficulty: "medium",
    week: 7,
    topic: "Interface Scenario",
    importance: 5,
    explanation: "Interface, ortak davranış zorunluluğu için kullanılır. Örneğin IYazdirilabilir interface'i varsa Rapor, Fatura ve Belge sınıfları Yazdir() metodunu uygulamak zorunda kalabilir. Bu standart sağlar."
  },

  {
    q: "Virtual metot override edilmezse ne olur?",
    t: "mcq",
    o: [
      "Derleme kesinlikle hata verir.",
      "Metot otomatik silinir.",
      "Alt sınıf, üst sınıftaki mevcut metodu kullanabilir.",
      "Program veritabanına bağlanır.",
      "Metot constructor olur."
    ],
    a: 2,
    difficulty: "medium",
    week: 7,
    topic: "Virtual Without Override",
    importance: 4,
    explanation: "virtual metot override edilebilir ama override edilmek zorunda değildir. Alt sınıf override etmezse üst sınıftaki metot aynen kullanılabilir. Yani virtual 'değiştirilebilir' demektir, 'mutlaka değiştirilecek' demek değildir."
  },

  {
    q: "Abstract metot ile virtual metot arasındaki en temel fark nedir?",
    t: "mcq",
    o: [
      "İkisi tamamen aynıdır.",
      "Virtual metot gövdeli olabilir; abstract metot gövdesizdir ve uygulanmak zorundadır.",
      "Abstract metot constructor'dır.",
      "Virtual metot sadece veritabanında kullanılır.",
      "Abstract metot LINQ sorgusudur."
    ],
    a: 1,
    difficulty: "hard",
    week: 7,
    topic: "Abstract vs Virtual",
    importance: 5,
    explanation: "Virtual metot üst sınıfta normal şekilde çalışacak gövdeye sahip olabilir; alt sınıf isterse değiştirir. Abstract metotta gövde yoktur; alt sınıf onu yazmak zorundadır. Bu ayrım finalde çok sorulur."
  },

  {
    q: "Aşağıdaki ifadelerden hangisi yanlıştır?",
    t: "mcq",
    o: [
      "virtual metot override edilebilir.",
      "abstract sınıftan doğrudan nesne oluşturulamaz.",
      "interface davranış sözleşmesi verebilir.",
      "override, üst sınıftaki virtual metodu yeniden yazmak için kullanılır.",
      "abstract metot mutlaka gövdeli olmak zorundadır."
    ],
    a: 4,
    difficulty: "hard",
    week: 7,
    topic: "Abstract Yanlış İfade",
    importance: 5,
    explanation: "Yanlış ifade E seçeneğidir. Abstract metot gövdeli olmaz; yalnızca imza içerir. Gövdeyi yani metodun nasıl çalışacağını alt sınıf override ederek yazar."
  },

  // =========================================================
  // ==== HAFTA 8 – OVERLOAD / CONSTRUCTOR OVERLOAD (21-40) ===
  // =========================================================

  {
    q: "Overload (aşırı yükleme) nedir?",
    t: "mcq",
    o: [
      "Aynı sınıfta aynı isimli metotların farklı parametrelerle tanımlanması",
      "Bir metodun alt sınıfta yeniden yazılması",
      "Bir nesnenin bellekten silinmesi",
      "Bir veritabanının otomatik oluşması",
      "Sadece interface kullanılması"
    ],
    a: 0,
    difficulty: "easy",
    week: 8,
    topic: "Overload",
    importance: 5,
    explanation: "Overload, aynı isimli metotların farklı parametre sayısı veya tipiyle yazılmasıdır. Örneğin Topla(int,int) ve Topla(double,double) iki farklı overload olabilir. Metot adı aynı kalır ama kullanım şekli değişir."
  },

  {
    q: "Overload hangi çok biçimlilik türüne örnektir?",
    t: "mcq",
    o: [
      "Runtime polymorphism",
      "Compile-time polymorphism",
      "Database polymorphism",
      "Destructor polymorphism",
      "Interface-only polymorphism"
    ],
    a: 1,
    difficulty: "medium",
    week: 8,
    topic: "Compile-time Polymorphism",
    importance: 5,
    explanation: "Compile-time, derleme zamanı demektir. Overload'da hangi metodun çalışacağı parametre tipine ve sayısına bakılarak derleme sırasında belirlenir. Bu yüzden overload, derleme zamanı çok biçimliliğidir."
  },

  {
    q: "C#'ta overload yapılabilmesi için en az hangi fark gerekir?",
    t: "mcq",
    o: [
      "Sadece dönüş tipi farklı olmalıdır.",
      "Sadece yorum satırı farklı olmalıdır.",
      "Parametre sayısı veya parametre tipi farklı olmalıdır.",
      "Sadece metot gövdesi aynı olmalıdır.",
      "Sadece sınıf adı değişmelidir."
    ],
    a: 2,
    difficulty: "easy",
    week: 8,
    topic: "Overload Rules",
    importance: 5,
    explanation: "Overload için metot adı aynı kalır; fakat parametre sayısı veya tipi farklı olmalıdır. Sadece dönüş tipi farklıysa overload sayılmaz. Bu, sınavda en çok sorulan kurallardan biridir."
  },

  {
    q: "Aşağıdakilerden hangisi doğru overload örneğidir?",
    t: "mcq",
    o: [
      "int Topla(int a, int b) ve int Cikar(int a, int b)",
      "int Topla(int a, int b) ve string Topla(int a, int b)",
      "void Yaz() ve void Yaz()",
      "int Topla(int a, int b) ve double Topla(double a, double b)",
      "class Araba : Arac"
    ],
    a: 3,
    difficulty: "medium",
    week: 8,
    topic: "Overload Example",
    importance: 5,
    explanation: "D seçeneğinde metot adı aynıdır: Topla. Parametre türleri farklıdır: biri int, diğeri double. Bu yüzden gerçek overload örneğidir. Sadece dönüş tipi farkı overload için yeterli değildir."
  },

  {
    q: "Sadece dönüş tipi farklı olan iki metot neden overload kabul edilmez?",
    t: "mcq",
    o: [
      "Çünkü C# metotlarda dönüş tipi kullanmaz.",
      "Çünkü overload sadece constructor'da olur.",
      "Çünkü metot adı farklı olmalıdır.",
      "Çünkü parametre kullanmak yasaktır.",
      "Çünkü derleyici çağrıda sadece dönüş tipine bakarak metodu ayırt edemez."
    ],
    a: 4,
    difficulty: "hard",
    week: 8,
    topic: "Return Type Overload",
    importance: 5,
    explanation: "Bir metot çağrılırken genellikle metot adı ve verilen parametrelere bakılır. Dönüş tipi çağrıda açıkça görünmez. Bu yüzden sadece int Topla(int,int) ve double Topla(int,int) yazmak derleyicinin kafasını karıştırır ve overload sayılmaz."
  },

  {
    q: "Constructor overload nedir?",
    t: "mcq",
    o: [
      "Aynı sınıfta farklı parametrelerle birden fazla kurucu fonksiyon tanımlanması",
      "Destructor'ın iki kez çalışması",
      "Metodun alt sınıfta override edilmesi",
      "DbContext'in otomatik silinmesi",
      "LINQ sorgusunun sıralanması"
    ],
    a: 0,
    difficulty: "easy",
    week: 8,
    topic: "Constructor Overload",
    importance: 5,
    explanation: "Constructor overload, bir sınıfın farklı şekillerde nesne oluşturmasına izin verir. Örneğin Ogrenci(), Ogrenci(string ad), Ogrenci(string ad, int yas) aynı sınıfta bulunabilir. Böylece nesne oluştururken farklı bilgi seviyeleri kullanılabilir."
  },

  {
    q: "Aşağıdakilerden hangisi overload'ın avantajıdır?",
    t: "mcq",
    o: [
      "Kodun okunabilirliğini tamamen bozar.",
      "Aynı işlemi farklı parametrelerle esnek şekilde yapmayı sağlar.",
      "Tüm sınıfları siler.",
      "Veritabanını zorunlu hale getirir.",
      "Interface kullanımını engeller."
    ],
    a: 1,
    difficulty: "easy",
    week: 8,
    topic: "Overload Advantage",
    importance: 5,
    explanation: "Overload sayesinde aynı mantıktaki işlem için farklı metot adları uydurmak gerekmez. Topla(2,3), Topla(2.5,3.5), Topla(1,2,3) gibi kullanımlar daha okunabilir olur. Bu, fonksiyonel esneklik sağlar."
  },

  {
    q: "Aşağıdakilerden hangisi overload değildir?",
    t: "mcq",
    o: [
      "void Yazdir(string metin)",
      "void Yazdir(byte[] veri)",
      "int Topla(int a, int b) ve double Topla(int a, int b)",
      "void Yazdir(string metin, int kopya)",
      "int Topla(int a, int b) ve int Topla(int a, int b, int c)"
    ],
    a: 2,
    difficulty: "hard",
    week: 8,
    topic: "Invalid Overload",
    importance: 5,
    explanation: "C seçeneği overload değildir çünkü parametre listesi aynıdır: iki int parametre. Sadece dönüş tipi farklıdır. C#'ta sadece dönüş tipi değiştirerek overload yapılamaz."
  },

  {
    q: "Overload ile override arasındaki temel fark nedir?",
    t: "mcq",
    o: [
      "Overload kalıtımda olur, override aynı sınıfta olur.",
      "İkisi tamamen aynıdır.",
      "Overload sadece destructor için geçerlidir.",
      "Overload aynı isimli farklı parametreli metotlardır; override üst sınıftaki virtual metodu alt sınıfta yeniden yazmaktır.",
      "Override parametre sayısını değiştirmek demektir."
    ],
    a: 3,
    difficulty: "hard",
    week: 8,
    topic: "Overload vs Override",
    importance: 5,
    explanation: "Overload için kalıtım şart değildir; aynı sınıfta aynı metot adı farklı parametrelerle yazılır. Override ise kalıtım ister; üst sınıfta virtual metot vardır, alt sınıf onu yeniden yazar. Bu ayrım finalde klasik sorudur."
  },

  {
    q: "Yazici sınıfında Yazdir(string metin), Yazdir(byte[] veri), Yazdir(string metin, int kopya) metotları varsa bu yapı neye örnektir?",
    t: "mcq",
    o: [
      "Database First",
      "Destructor",
      "Interface",
      "Abstract class",
      "Metot overloading"
    ],
    a: 4,
    difficulty: "medium",
    week: 8,
    topic: "Overload Scenario",
    importance: 5,
    explanation: "Üç metodun adı aynıdır: Yazdir. Fakat parametreleri farklıdır. Biri string alır, biri byte dizisi alır, biri string ve int alır. Bu yüzden metot overloading örneğidir."
  },

  {
    q: "Hesaplayici sınıfında Topla(int,int), Topla(double,double), Topla(int,int,int) varsa hangi ifade doğrudur?",
    t: "mcq",
    o: [
      "Topla metodu overload edilmiştir.",
      "Topla metodu override edilmiştir.",
      "Topla metodu destructor'dır.",
      "Topla metodu interface'tir.",
      "Bu kod Database First örneğidir."
    ],
    a: 0,
    difficulty: "easy",
    week: 8,
    topic: "Topla Overload",
    importance: 5,
    explanation: "Aynı isimde üç Topla metodu vardır ama parametreleri farklıdır. Bu yüzden overload yapılmıştır. Kullanıcı hangi parametreleri gönderirse derleyici uygun Topla metodunu seçer."
  },

  {
    q: "Constructor overload ne zaman özellikle işe yarar?",
    t: "mcq",
    o: [
      "Nesne oluşturmanın tamamen yasaklanması gerektiğinde",
      "Nesnenin farklı başlangıç bilgileriyle oluşturulması gerektiğinde",
      "Tüm metotları private yapmak istediğimizde",
      "DbContext silmek istediğimizde",
      "Sadece LINQ sorgusu yazarken"
    ],
    a: 1,
    difficulty: "medium",
    week: 8,
    topic: "Constructor Overload Use",
    importance: 5,
    explanation: "Bazen nesne tam bilgiyle, bazen eksik bilgiyle oluşturulur. Constructor overload bu esnekliği sağlar. Örneğin Ogrenci sadece ad ile de, ad+yaş+ortalama ile de oluşturulabilir."
  },

  {
    q: "Aşağıdaki constructor çiftlerinden hangisi overload oluşturur?",
    t: "mcq",
    o: [
      "Ogrenci(string ad) ve Ogrenci(string ad)",
      "Ogrenci() ve Ogrenci()",
      "Ogrenci(string ad) ve Ogrenci(string ad, int yas)",
      "Ogrenci(int yas) ve Ogrenci(int yas)",
      "Sadece dönüş tipi farklı constructor"
    ],
    a: 2,
    difficulty: "medium",
    week: 8,
    topic: "Constructor Overload Example",
    importance: 5,
    explanation: "C seçeneğinde constructor adları aynıdır ama parametre listeleri farklıdır. Biri sadece string alır, diğeri string ve int alır. Bu yüzden overload doğru yapılmıştır."
  },

  {
    q: "Overload sorularında derleyici hangi metodu seçeceğini nasıl anlar?",
    t: "mcq",
    o: [
      "Metodun yorum satırına bakarak",
      "Metodun dönüş tipine bakarak",
      "Metodun yazıldığı satır rengine bakarak",
      "Gönderilen parametrelerin sayısı ve tipine bakarak",
      "Connection string'e bakarak"
    ],
    a: 3,
    difficulty: "medium",
    week: 8,
    topic: "Method Resolution",
    importance: 5,
    explanation: "Metot çağrısı yapılırken verilen argümanların sayısı ve tipi önemlidir. Topla(2,3) int,int olanı; Topla(2.5,3.7) double,double olanı seçtirir. Dönüş tipi tek başına karar verdirmeye yetmez."
  },

  {
    q: "Aşağıdakilerden hangisi overload kuralına aykırıdır?",
    t: "mcq",
    o: [
      "Metot adı aynı olabilir.",
      "Parametre sayısı farklı olabilir.",
      "Parametre tipi farklı olabilir.",
      "Constructor overload yapılabilir.",
      "Sadece return type değişirse overload yapılmış olur."
    ],
    a: 4,
    difficulty: "hard",
    week: 8,
    topic: "Overload Rule",
    importance: 5,
    explanation: "E seçeneği yanlıştır. Return type yani dönüş tipi tek başına overload oluşturmaz. Metodu ayırt ettiren şey parametre sayısı, tipi veya sırasıdır."
  },

  {
    q: "Overload final sorularında 'aynı isim, farklı parametre' ifadesi hangi cevabı işaret eder?",
    t: "mcq",
    o: [
      "Overload",
      "Override",
      "Database First",
      "Destructor",
      "LINQ"
    ],
    a: 0,
    difficulty: "easy",
    week: 8,
    topic: "Overload Keyword",
    importance: 5,
    explanation: "Bu soru kalıbı çok direkt gelir. 'Aynı isimli ama farklı parametreli metotlar' denirse cevap overload'dır. 'Üst sınıftaki virtual metodu alt sınıfta yeniden yazmak' denirse cevap override'dır."
  },

  {
    q: "Overload ile kod okunabilirliği nasıl artar?",
    t: "mcq",
    o: [
      "Her işlem için rastgele farklı metot adı verildiği için",
      "Aynı amaca hizmet eden işlemler aynı metot adı altında toplandığı için",
      "Metotlar tamamen silindiği için",
      "Program veritabanına zorunlu bağlandığı için",
      "Constructor çalışmadığı için"
    ],
    a: 1,
    difficulty: "medium",
    week: 8,
    topic: "Overload Readability",
    importance: 4,
    explanation: "Toplama işlemi için ToplaInt, ToplaDouble, ToplaUcSayi gibi farklı adlar yerine Topla adı kullanılabilir. Parametreye göre doğru metot seçilir. Bu kodu daha sade ve anlaşılır yapar."
  },

  {
    q: "Overload kullanırken aynı isimli metotların parametreleri aynı olursa ne olur?",
    t: "mcq",
    o: [
      "Kod kesinlikle doğru çalışır.",
      "Derleyici metotları ayırt edemediği için hata oluşur.",
      "Metot otomatik override olur.",
      "Metot constructor'a dönüşür.",
      "Veritabanı güncellenir."
    ],
    a: 1,
    difficulty: "medium",
    week: 8,
    topic: "Overload Error",
    importance: 5,
    explanation: "Aynı isim ve aynı parametre listesi varsa iki metot ayırt edilemez. Derleyici 'hangisini çağıracağım?' sorusunu cevaplayamaz. Bu yüzden aynı imzaya sahip iki metot yazmak hatadır."
  },

  {
    q: "Aşağıdakilerden hangisi finalde overload ile ilgili en kritik bilgidir?",
    t: "mcq",
    o: [
      "Overload için kalıtım zorunludur.",
      "Overload sadece abstract class içinde olur.",
      "Overload için parametre tipi veya sayısı farklı olmalıdır.",
      "Overload metodu bellekten siler.",
      "Overload sadece EF'de kullanılır."
    ],
    a: 2,
    difficulty: "easy",
    week: 8,
    topic: "Overload Critical",
    importance: 5,
    explanation: "Overload'ın özü parametre farkıdır. Aynı isimli metotlar farklı parametrelerle yazılır. Sadece dönüş tipi farkı yeterli değildir."
  },

  {
    q: "Metot overloading ile constructor overloading arasındaki ortak nokta nedir?",
    t: "mcq",
    o: [
      "İkisi de sadece destructor için geçerlidir.",
      "İkisinde de aynı ad farklı parametrelerle kullanılabilir.",
      "İkisi de interface oluşturur.",
      "İkisi de veritabanı bağlantısı yapar.",
      "İkisinde de dönüş tipi zorunlu olarak int olmalıdır."
    ],
    a: 1,
    difficulty: "medium",
    week: 8,
    topic: "Method vs Constructor Overload",
    importance: 5,
    explanation: "Metot overload'da aynı metot adı farklı parametrelerle kullanılır. Constructor overload'da sınıf adıyla aynı olan constructor farklı parametrelerle yazılır. Ortak mantık: aynı ad, farklı parametre."
  },

  // =========================================================
  // ==== HAFTA 9 – CONSTRUCTOR / DESTRUCTOR (41-60) ==========
  // =========================================================

  {
    q: "Constructor (kurucu fonksiyon) nedir?",
    t: "mcq",
    o: [
      "Nesne oluşturulduğunda otomatik çalışan özel fonksiyon",
      "Nesne yok edilirken çalışan metot",
      "Sadece LINQ sorgusu",
      "Sadece veritabanı tablosu",
      "Sadece interface imzası"
    ],
    a: 0,
    difficulty: "easy",
    week: 9,
    topic: "Constructor",
    importance: 5,
    explanation: "Constructor, nesne oluşturulduğu anda otomatik çalışan özel fonksiyondur. Amacı nesneye başlangıç değerlerini vermektir. Örneğin Araba nesnesi oluşurken model, yıl ve fiyat bilgileri constructor ile atanabilir."
  },

  {
    q: "Constructor'ın adı genellikle neyle aynı olur?",
    t: "mcq",
    o: [
      "Namespace adıyla",
      "Sınıf adıyla",
      "Metot dönüş tipiyle",
      "Veritabanı adıyla",
      "Interface adıyla"
    ],
    a: 1,
    difficulty: "easy",
    week: 9,
    topic: "Constructor Name",
    importance: 5,
    explanation: "Constructor adı sınıf adıyla aynı olur. Örneğin sınıf adı Araba ise constructor Araba() şeklinde yazılır. Constructor'ın dönüş tipi yazılmaz; void bile yazılmaz."
  },

  {
    q: "Constructor'ın dönüş değeri için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Mutlaka int döndürür.",
      "Mutlaka string döndürür.",
      "Dönüş tipi yoktur.",
      "Mutlaka bool döndürür.",
      "Mutlaka double döndürür."
    ],
    a: 2,
    difficulty: "easy",
    week: 9,
    topic: "Constructor Return",
    importance: 5,
    explanation: "Constructor değer döndürmek için değil, nesneyi başlatmak için vardır. Bu yüzden dönüş tipi yazılmaz. void yazmak bile constructor yapısını bozar; o zaman normal metot olur."
  },

  {
    q: "Parametreli constructor ne sağlar?",
    t: "mcq",
    o: [
      "Nesnenin yok edilmesini sağlar.",
      "Metodu override eder.",
      "LINQ sorgusu çalıştırır.",
      "Nesne oluşturulurken dışarıdan başlangıç değerleri verilmesini sağlar.",
      "Database First modelini günceller."
    ],
    a: 3,
    difficulty: "medium",
    week: 9,
    topic: "Parameterized Constructor",
    importance: 5,
    explanation: "Parametreli constructor dışarıdan değer alır. Örneğin new Araba('BMW', 2023, 650000) yazıldığında model, yıl ve fiyat bilgisi nesne oluşurken atanır. Bu, nesnenin boş başlamasını engeller."
  },

  {
    q: "Constructor ne zaman otomatik çağrılır?",
    t: "mcq",
    o: [
      "Program kapanınca",
      "Nesne bellekten silinince",
      "Interface uygulanınca",
      "LINQ sorgusu yazılınca",
      "Nesne oluşturulunca"
    ],
    a: 4,
    difficulty: "easy",
    week: 9,
    topic: "Constructor Call",
    importance: 5,
    explanation: "Constructor, new ile nesne oluşturulduğu anda otomatik çalışır. Programcı genelde constructor'ı normal metot gibi manuel çağırmaz. Nesne başlatma işlemleri bu otomatik çağrı sırasında yapılır."
  },

  {
    q: "Destructor (yıkıcı fonksiyon) nedir?",
    t: "mcq",
    o: [
      "Nesne yok edilirken otomatik çalışan özel fonksiyon",
      "Nesne oluşturulduğunda çalışan fonksiyon",
      "Sınıfın ilk değerlerini atayan fonksiyon",
      "Aynı isimli metotları çoğaltan yapı",
      "SQL benzeri sorgu yazan yapı"
    ],
    a: 0,
    difficulty: "easy",
    week: 9,
    topic: "Destructor",
    importance: 5,
    explanation: "Destructor, nesne yok edilirken çalışan özel fonksiyondur. Amacı nesne yok olmadan önce temizlik yapmaktır. Dosya kapatma, bağlantı kesme veya bellek temizleme gibi işlemler için düşünülür."
  },

  {
    q: "C++ tarzı destructor yazımında sınıf adının önünde hangi sembol bulunur?",
    t: "mcq",
    o: [
      "@",
      "~",
      "#",
      "$",
      "&"
    ],
    a: 1,
    difficulty: "easy",
    week: 9,
    topic: "Destructor Syntax",
    importance: 5,
    explanation: "Destructor sınıf adıyla aynı isme sahiptir ama başına ~ sembolü gelir. Örneğin Car sınıfının yıkıcı fonksiyonu ~Car() şeklindedir. Bu sembol finalde çok net sorulabilir."
  },

  {
    q: "Destructor'ın parametre almasıyla ilgili doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Mutlaka parametre alır.",
      "En az iki parametre alır.",
      "Parametre almaz.",
      "Sadece string parametre alır.",
      "Sadece int parametre alır."
    ],
    a: 2,
    difficulty: "medium",
    week: 9,
    topic: "Destructor Parameters",
    importance: 5,
    explanation: "Destructor parametre almaz. Çünkü program onu nesne yok edilirken otomatik çağırır; dışarıdan bilgi gönderilerek çağrılmaz. Bu yüzden overload da edilemez."
  },

  {
    q: "Bir sınıfta kaç tane destructor bulunabilir?",
    t: "mcq",
    o: [
      "Sınırsız sayıda",
      "Parametre sayısı kadar",
      "Her constructor için bir tane",
      "Yalnızca bir tane",
      "Hiçbir zaman bulunamaz"
    ],
    a: 3,
    difficulty: "medium",
    week: 9,
    topic: "Destructor Count",
    importance: 5,
    explanation: "Bir sınıfta tek destructor bulunur. Constructor gibi overload edilemez. Çünkü destructor'ın görevi nesne yok edilirken tek bir temizlik sürecini çalıştırmaktır."
  },

  {
    q: "Constructor ile destructor arasındaki temel fark hangisidir?",
    t: "mcq",
    o: [
      "Constructor nesne yok edilirken, destructor nesne oluşturulurken çalışır.",
      "İkisi de sadece veritabanı için kullanılır.",
      "İkisi de sadece interface içinde yazılır.",
      "Constructor parametre alamaz, destructor parametre alır.",
      "Constructor nesne oluşturulurken; destructor nesne yok edilirken çalışır."
    ],
    a: 4,
    difficulty: "medium",
    week: 9,
    topic: "Constructor vs Destructor",
    importance: 5,
    explanation: "Constructor başlangıç içindir; nesne oluşturulurken çalışır. Destructor bitiş içindir; nesne yok edilirken çalışır. Yani biri başlatma, diğeri temizlik görevi görür."
  },

  {
    q: "Constructor'ın temel kullanım amacı nedir?",
    t: "mcq",
    o: [
      "Nesnenin başlangıç değerlerini atamak",
      "Nesneyi bellekten silmek",
      "Metodu overload etmek",
      "DbContext'i otomatik güncellemek",
      "LINQ sorgusunu sıralamak"
    ],
    a: 0,
    difficulty: "easy",
    week: 9,
    topic: "Constructor Purpose",
    importance: 5,
    explanation: "Constructor, nesnenin başlangıç durumunu oluşturur. Örneğin Öğrenci nesnesi oluşurken isim, yaş ve not ortalaması constructor ile atanabilir. Böylece nesne kullanılmaya hazır hale gelir."
  },

  {
    q: "Destructor'ın temel kullanım amacı nedir?",
    t: "mcq",
    o: [
      "Nesneye ilk değer vermek",
      "Kaynakları serbest bırakmak ve temizlik yapmak",
      "Metodu override etmek",
      "Constructor overload yapmak",
      "LINQ ile filtreleme yapmak"
    ],
    a: 1,
    difficulty: "easy",
    week: 9,
    topic: "Destructor Purpose",
    importance: 5,
    explanation: "Destructor, nesne yok olmadan önce son temizlik işlemleri için kullanılır. Örneğin açılmış dosyayı kapatma, ağ bağlantısını kesme veya ayrılmış belleği serbest bırakma gibi işlemler düşünülebilir."
  },

  {
    q: "Araba sınıfı için model, yıl ve fiyat bilgilerini nesne oluşturulurken almak istiyorsak hangi yapı en uygundur?",
    t: "mcq",
    o: [
      "Destructor",
      "Interface",
      "Parametreli constructor",
      "LINQ where",
      "Database First"
    ],
    a: 2,
    difficulty: "medium",
    week: 9,
    topic: "Araba Constructor",
    importance: 5,
    explanation: "Model, yıl ve fiyat nesneye ait başlangıç bilgileridir. Bu bilgiler nesne oluşturulurken verilecekse parametreli constructor kullanılır. Böylece Araba nesnesi eksik bilgiyle değil, dolu bilgiyle başlar."
  },

  {
    q: "displayInfo() metodunun görevi genellikle nedir?",
    t: "mcq",
    o: [
      "Nesneyi silmek",
      "Constructor'ı çağırmak",
      "Database First modeli oluşturmak",
      "Nesne bilgilerini ekrana yazdırmak",
      "LINQ sorgusunu güncellemek"
    ],
    a: 3,
    difficulty: "easy",
    week: 9,
    topic: "displayInfo",
    importance: 4,
    explanation: "displayInfo() genellikle nesnenin bilgilerini gösteren metottur. Örneğin Araba için model, yıl, fiyat; Öğrenci için ad, yaş, not ortalaması ekrana yazdırılır. Bu metot davranış örneğidir."
  },

  {
    q: "Constructor overloading ile ilgili doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Destructor'ın birden fazla yazılmasıdır.",
      "Aynı sınıfta farklı parametrelerle birden fazla constructor yazılmasıdır.",
      "Constructor'ın dönüş tipinin değiştirilmesidir.",
      "Constructor'ın interface'e çevrilmesidir.",
      "Constructor'ın LINQ ile çağrılmasıdır."
    ],
    a: 1,
    difficulty: "medium",
    week: 9,
    topic: "Constructor Overload",
    importance: 5,
    explanation: "Constructor overloading, aynı sınıf içinde birden fazla constructor tanımlamaktır. Bu constructor'ların parametreleri farklı olmalıdır. Nesne farklı şekillerde başlatılabilir."
  },

  {
    q: "Aşağıdakilerden hangisi destructor için yanlıştır?",
    t: "mcq",
    o: [
      "Otomatik çağrılır.",
      "Dönüş değeri yoktur.",
      "Parametre almaz.",
      "Bir sınıfta birden fazla overload edilebilir.",
      "Kaynak temizliği için kullanılabilir."
    ],
    a: 3,
    difficulty: "hard",
    week: 9,
    topic: "Destructor Wrong",
    importance: 5,
    explanation: "Yanlış ifade D seçeneğidir. Destructor overload edilemez ve bir sınıfta yalnızca bir destructor bulunur. Parametre almadığı için farklı parametrelerle çoğaltılması mümkün değildir."
  },

  {
    q: "Öğrenci sınıfında constructor isim, yaş ve notOrtalaması alıyorsa bu bilgiler ne zaman atanır?",
    t: "mcq",
    o: [
      "Program kapandıktan sonra",
      "Nesne oluşturulurken",
      "Destructor çalışırken",
      "LINQ sorgusu bitince",
      "Connection string yazılınca"
    ],
    a: 1,
    difficulty: "medium",
    week: 9,
    topic: "Student Constructor",
    importance: 5,
    explanation: "Constructor nesne oluşturulduğunda çalışır. Bu nedenle isim, yaş ve not ortalaması gibi bilgiler new Ogrenci(...) sırasında atanır. Sonra displayInfo() bu bilgileri gösterebilir."
  },

  {
    q: "Kurucu fonksiyonun manuel çağrılmasına gerek olmamasının sebebi nedir?",
    t: "mcq",
    o: [
      "Constructor hiç çalışmaz.",
      "Constructor sadece veritabanı içindir.",
      "Nesne oluşturulurken otomatik çağrılması",
      "Destructor'ın onu çağırması",
      "LINQ sorgusunun onu çağırması"
    ],
    a: 2,
    difficulty: "medium",
    week: 9,
    topic: "Automatic Constructor",
    importance: 5,
    explanation: "Constructor, new ile nesne oluşturulduğunda otomatik çalışır. Programcı ayrıca Araba() diye normal metot gibi çağırmaz. Bu otomatik başlatma mantığı constructor'ın temel özelliğidir."
  },

  {
    q: "Yıkıcı fonksiyonun manuel çağrılmamasının nedeni nedir?",
    t: "mcq",
    o: [
      "Çünkü hiçbir zaman çalışmaz.",
      "Çünkü program tarafından nesne yok edilirken otomatik çağrılır.",
      "Çünkü constructor'ın içine yazılır.",
      "Çünkü overload edilir.",
      "Çünkü LINQ tarafından çağrılır."
    ],
    a: 1,
    difficulty: "medium",
    week: 9,
    topic: "Automatic Destructor",
    importance: 5,
    explanation: "Destructor, nesne yok edilme sürecinde otomatik çalışır. Kullanıcı genellikle destructor'ı doğrudan çağırmaz. Bu yüzden destructor'ın görevi otomatik temizliktir."
  },

  {
    q: "Constructor ve destructor ortak olarak hangi özelliğe sahiptir?",
    t: "mcq",
    o: [
      "İkisi de dönüş tipi döndürür.",
      "İkisi de parametre almak zorundadır.",
      "İkisi de özel fonksiyondur ve otomatik çağrılabilir.",
      "İkisi de sadece LINQ içinde kullanılır.",
      "İkisi de interface'tir."
    ],
    a: 2,
    difficulty: "medium",
    week: 9,
    topic: "Constructor Destructor Common",
    importance: 4,
    explanation: "İkisi de sınıfa ait özel fonksiyonlardır. Constructor nesne oluşurken, destructor nesne yok olurken otomatik çalışır. İkisi de normal iş metodu gibi düşünülmemelidir."
  },

  // =========================================================
  // ==== HAFTA 11 – ENTITY FRAMEWORK / CODE FIRST (61-80) ====
  // =========================================================

  {
    q: "Entity Framework (EF) nedir?",
    t: "mcq",
    o: [
      "Microsoft tarafından geliştirilen ORM aracıdır.",
      "Sadece destructor oluşturan C# yapısıdır.",
      "Sadece console ekranını temizleyen araçtır.",
      "Sadece metot overload eden yapı",
      "Sadece interface yazma kuralıdır."
    ],
    a: 0,
    difficulty: "easy",
    week: 11,
    topic: "Entity Framework",
    importance: 5,
    explanation: "Entity Framework, veritabanı işlemlerini nesneler üzerinden yapmayı sağlayan ORM aracıdır. ORM, Object Relational Mapping demektir. Yani sınıflar ile veritabanı tabloları arasında köprü kurar."
  },

  {
    q: "ORM açılımı nedir?",
    t: "mcq",
    o: [
      "Object Runtime Method",
      "Object Relational Mapping",
      "Only Read Memory",
      "Open Resource Model",
      "Output Result Manager"
    ],
    a: 1,
    difficulty: "easy",
    week: 11,
    topic: "ORM",
    importance: 5,
    explanation: "ORM, Object Relational Mapping demektir. Türkçe mantığıyla 'nesne-ilişkisel eşleme' anlamına gelir. OOP tarafındaki sınıfları, ilişkisel veritabanındaki tablolarla eşleştirir."
  },

  {
    q: "Entity Framework'te entity sınıfı genellikle neye karşılık gelir?",
    t: "mcq",
    o: [
      "Console çıktısına",
      "Constructor'a",
      "Veritabanı tablosuna",
      "Destructor'a",
      "Namespace'e"
    ],
    a: 2,
    difficulty: "medium",
    week: 11,
    topic: "Entity Mapping",
    importance: 5,
    explanation: "Entity sınıfı, veritabanındaki tabloyu temsil eder. Örneğin Book sınıfı, veritabanında Books tablosuna karşılık gelebilir. Bu yüzden entity, veri tablosunun C# tarafındaki nesne modelidir."
  },

  {
    q: "EF'de sınıf özellikleri (properties) genellikle neye karşılık gelir?",
    t: "mcq",
    o: [
      "Veritabanı satırlarına",
      "DbContext'e",
      "LINQ sorgusuna",
      "Veritabanı sütunlarına",
      "Connection string adına"
    ],
    a: 3,
    difficulty: "medium",
    week: 11,
    topic: "Property Mapping",
    importance: 5,
    explanation: "Bir entity sınıfındaki property'ler veritabanı sütunlarına karşılık gelir. Örneğin Book sınıfında Title property’si, Books tablosunda Title sütunu gibi düşünülür. Bu eşleme EF'nin temel mantığıdır."
  },

  {
    q: "DbContext ne işe yarar?",
    t: "mcq",
    o: [
      "Metotları overload eder.",
      "Nesneleri bellekten siler.",
      "Sadece abstract class oluşturur.",
      "Sadece console çıktısı verir.",
      "Veritabanı ile uygulama arasındaki işlemleri yönetir."
    ],
    a: 4,
    difficulty: "medium",
    week: 11,
    topic: "DbContext",
    importance: 5,
    explanation: "DbContext, EF'de veritabanı bağlantısı ve veri işlemlerinin merkezidir. Ekleme, silme, listeleme, güncelleme gibi işlemler DbContext üzerinden yapılır. Basitçe, uygulamanın veritabanıyla konuştuğu ana kapıdır."
  },

  {
    q: "DbSet<Book> Books ifadesi neyi temsil eder?",
    t: "mcq",
    o: [
      "Book nesnelerinin veritabanındaki kümesini/tablosunu",
      "Book sınıfının destructor'ını",
      "Book sınıfının constructor overload'ını",
      "Book için interface sözleşmesini",
      "Book için virtual metodu"
    ],
    a: 0,
    difficulty: "medium",
    week: 11,
    topic: "DbSet",
    importance: 5,
    explanation: "DbSet<Book>, Book nesnelerinin veritabanındaki koleksiyonu gibi düşünülebilir. Kitap ekleme, silme ve listeleme işlemleri bu DbSet üzerinden yapılır. Tabloya karşılık gelen nesne kümesidir."
  },

  {
    q: "Code First yaklaşımı nedir?",
    t: "mcq",
    o: [
      "Önce veritabanı hazırlanır, sonra sınıf otomatik çıkarılır.",
      "Önce C# sınıfları yazılır, veritabanı bu sınıflara göre oluşturulur.",
      "Önce destructor yazılır, sonra veri silinir.",
      "Önce LINQ sorgusu yazılır, sonra sınıf silinir.",
      "Önce connection string silinir."
    ],
    a: 1,
    difficulty: "medium",
    week: 11,
    topic: "Code First",
    importance: 5,
    explanation: "Code First, koddan veritabanı üretme yaklaşımıdır. Önce Book gibi entity sınıfları ve DbContext yazılır. Sonra EF bu modelden veritabanı yapısını oluşturabilir."
  },

  {
    q: "EF'de Book sınıfında BookId, Title, Author, PublishedYear bulunması hangi yapıya örnektir?",
    t: "mcq",
    o: [
      "Destructor overload",
      "Virtual override",
      "Entity sınıfı",
      "Interface implementation",
      "LINQ delete"
    ],
    a: 2,
    difficulty: "easy",
    week: 11,
    topic: "Book Entity",
    importance: 5,
    explanation: "Book sınıfı bir entity'dir çünkü veritabanında kitap bilgilerini temsil eder. BookId kimlik alanı, Title kitap adı, Author yazar, PublishedYear yayın yılı bilgisidir. Bu sınıf tablo mantığını C# nesnesi olarak taşır."
  },

  {
    q: "EF ile kitap ekleme işleminde temel sıra hangisidir?",
    t: "mcq",
    o: [
      "Destructor çağır, sonra interface yaz.",
      "DbContext'i sil, sonra programı kapat.",
      "Virtual metodu override et.",
      "Book nesnesi oluştur, DbSet'e Add et, SaveChanges çağır.",
      "Connection string'i sil."
    ],
    a: 3,
    difficulty: "medium",
    week: 11,
    topic: "EF Create",
    importance: 5,
    explanation: "Create yani ekleme işleminde önce yeni Book nesnesi oluşturulur. Sonra context.Books.Add(book) ile EF'ye eklenir. SaveChanges() çağrıldığında değişiklik gerçek veritabanına kaydedilir."
  },

  {
    q: "SaveChanges() ne işe yarar?",
    t: "mcq",
    o: [
      "Sadece nesne oluşturur.",
      "Sadece interface'i kapatır.",
      "Sadece constructor overload yapar.",
      "Sadece LINQ sorgusunu okur.",
      "Yapılan değişiklikleri veritabanına kaydeder."
    ],
    a: 4,
    difficulty: "medium",
    week: 11,
    topic: "SaveChanges",
    importance: 5,
    explanation: "EF önce değişiklikleri bellekte takip eder. Add, Remove veya güncelleme yaptıktan sonra SaveChanges() çağrılmazsa bu değişiklikler veritabanına kalıcı yazılmaz. Finalde SaveChanges() genellikle 'değişikliği kaydetme' olarak sorulur."
  },

  {
    q: "EF kullanmanın OOP açısından temel faydası nedir?",
    t: "mcq",
    o: [
      "Veritabanı işlemlerini sınıf ve nesnelerle yönetmeyi sağlaması",
      "Bütün metotları silmesi",
      "Sadece destructor çalıştırması",
      "Kod yazmayı tamamen yasaklaması",
      "Interface kullanımını engellemesi"
    ],
    a: 0,
    difficulty: "medium",
    week: 11,
    topic: "EF and OOP",
    importance: 5,
    explanation: "EF, OOP'deki sınıf ve nesne mantığını veritabanı işlemlerine taşır. SQL tablosuyla uğraşmak yerine Book nesnesiyle çalışırsın. Bu da kodu daha okunabilir ve sürdürülebilir yapar."
  },

  {
    q: "EF'de performanslı sorgular için hangi teknoloji desteği öne çıkar?",
    t: "mcq",
    o: [
      "Destructor",
      "LINQ",
      "Interface destructor",
      "Console.Clear",
      "Only return type overload"
    ],
    a: 1,
    difficulty: "easy",
    week: 11,
    topic: "EF LINQ",
    importance: 5,
    explanation: "LINQ, C# içinde sorgu yazmayı sağlayan teknolojidir. EF ile birlikte kullanıldığında veritabanındaki kayıtlar nesneler üzerinden filtrelenebilir, sıralanabilir ve listelenebilir. Bu yüzden EF avantajlarında LINQ desteği önemlidir."
  },

  {
    q: "EF kullanım yöntemlerinden hangisi doğru verilmiştir?",
    t: "mcq",
    o: [
      "Destructor First, Interface First, Return First",
      "Only First, Static First, Base First",
      "Code First, Database First, Model First",
      "Override First, Virtual First, Abstract First",
      "Delete First, Remove First, Clean First"
    ],
    a: 2,
    difficulty: "easy",
    week: 11,
    topic: "EF Approaches",
    importance: 5,
    explanation: "Entity Framework'te temel yaklaşımlar Code First, Database First ve Model First olarak verilir. Code First koddan veritabanı oluşturur; Database First hazır veritabanından sınıf üretir; Model First modelden veritabanı üretme yaklaşımıdır."
  },

  {
    q: "EF'de kitap silme işleminde genellikle hangi bilgiye göre silme yapılır?",
    t: "mcq",
    o: [
      "Kitabın rengine göre",
      "Constructor adına göre",
      "Interface sayısına göre",
      "BookId değerine göre",
      "Destructor sembolüne göre"
    ],
    a: 3,
    difficulty: "medium",
    week: 11,
    topic: "EF Delete",
    importance: 5,
    explanation: "BookId, kitabı benzersiz tanımlayan kimlik alanıdır. Silme işleminde önce silinecek kitap ID'ye göre bulunur. Sonra Remove ve SaveChanges ile veritabanından kaldırılır."
  },

  {
    q: "EF'de context.Books.ToList() gibi bir kullanım genel olarak ne yapar?",
    t: "mcq",
    o: [
      "Kitapları veritabanından siler.",
      "Yeni kitap ekler.",
      "Constructor overload yapar.",
      "Destructor çağırır.",
      "Kitap kayıtlarını liste olarak getirir."
    ],
    a: 4,
    difficulty: "medium",
    week: 11,
    topic: "EF Read",
    importance: 5,
    explanation: "ToList(), sorgu sonucunu liste haline getirir. context.Books.ToList() Books tablosundaki Book nesnelerini okumak için kullanılabilir. Bu Read yani okuma işlemidir."
  },

  {
    q: "BookId alanının entity sınıfında bulunmasının temel amacı nedir?",
    t: "mcq",
    o: [
      "Kitabı benzersiz tanımlamak",
      "Kitabı otomatik silmek",
      "Kitabı abstract yapmak",
      "Book sınıfını interface yapmak",
      "LINQ sorgusunu bozmak"
    ],
    a: 0,
    difficulty: "easy",
    week: 11,
    topic: "Primary Key Mantığı",
    importance: 5,
    explanation: "BookId, her kitabın benzersiz kimliği gibi düşünülebilir. Aynı ada sahip iki kitap olabilir ama BookId farklı olur. Güncelleme ve silme işlemlerinde bu kimlik çok önemlidir."
  },

  {
    q: "EF'de 'sınıflar → tablolar, properties → sütunlar' eşleşmesi hangi kavramla ilgilidir?",
    t: "mcq",
    o: [
      "Destructor",
      "ORM eşleme mantığı",
      "Constructor silme",
      "Virtual override",
      "Console menüsü"
    ],
    a: 1,
    difficulty: "medium",
    week: 11,
    topic: "ORM Mapping",
    importance: 5,
    explanation: "ORM'nin yaptığı iş tam olarak budur: OOP tarafındaki sınıfları veritabanı tablolarıyla, property'leri sütunlarla eşleştirir. Bu sayede programcı nesnelerle çalışır, EF arka planda veritabanıyla iletişim kurar."
  },

  {
    q: "Code First kitaplık sistemi sorusunda LibraryContext'in görevi nedir?",
    t: "mcq",
    o: [
      "Book sınıfını destructor yapmak",
      "Kitap adını büyütmek",
      "Veritabanı işlemlerini DbContext üzerinden yönetmek",
      "Interface'i silmek",
      "Constructor'a ~ eklemek"
    ],
    a: 2,
    difficulty: "medium",
    week: 11,
    topic: "LibraryContext",
    importance: 5,
    explanation: "LibraryContext, DbContext'ten türeyen sınıf gibi düşünülür. İçinde DbSet<Book> Books bulunabilir. Bu sınıf uygulamanın veritabanı işlemlerini yönetir."
  },

  {
    q: "EF ile OOP'nin birleşmesi ne anlama gelir?",
    t: "mcq",
    o: [
      "Veritabanı işlemlerini tamamen elle SQL yazarak yapmak",
      "Sınıfları kullanmadan veritabanı silmek",
      "Nesne mantığını kapatmak",
      "Veritabanı kayıtlarını C# nesneleri gibi yönetmek",
      "Destructor'ı zorunlu hale getirmek"
    ],
    a: 3,
    difficulty: "medium",
    week: 11,
    topic: "EF OOP Integration",
    importance: 5,
    explanation: "EF ile kitap, öğrenci, ürün gibi veriler C# sınıflarıyla temsil edilir. Programcı tablo satırı yerine Book nesnesiyle işlem yapar. Bu, OOP'nin veritabanı katmanına taşınmasıdır."
  },

  {
    q: "EF'nin bakım kolaylığı sağlamasının sebebi nedir?",
    t: "mcq",
    o: [
      "Kod ve veri modelini nesne yapısıyla daha düzenli hale getirmesi",
      "Tüm sınıfları silmesi",
      "Sadece console uygulaması yazması",
      "Interface kullanımını engellemesi",
      "Constructor'ları yok etmesi"
    ],
    a: 0,
    difficulty: "medium",
    week: 11,
    topic: "EF Maintainability",
    importance: 4,
    explanation: "EF'de veri modeli sınıflarla temsil edildiği için kod daha anlaşılır olur. Book, Author, Student gibi sınıflar gerçek dünya kavramlarına benzer. Bu da büyük projelerde bakım kolaylığı sağlar."
  },

  // =========================================================
  // ==== HAFTA 12 – DATABASE FIRST / CONNECTION STRING (81-90)
  // =========================================================

  {
    q: "Database First nedir?",
    t: "mcq",
    o: [
      "Önce C# sınıflarını yazıp veritabanı oluşturma yaklaşımı",
      "Var olan veritabanından entity sınıflarının oluşturulması yaklaşımı",
      "Nesne yok edilirken çalışan yöntem",
      "Sadece overload yapılan yöntem",
      "Sadece console menüsü oluşturma yaklaşımı"
    ],
    a: 1,
    difficulty: "easy",
    week: 12,
    topic: "Database First",
    importance: 5,
    explanation: "Database First yaklaşımında önce veritabanı hazırdır. EF bu var olan veritabanındaki tablolara bakarak C# entity sınıflarını ve DbContext'i oluşturur. Yani koddan önce veritabanı gelir."
  },

  {
    q: "Database First yaklaşımında ilk yapılan işlem genellikle hangisidir?",
    t: "mcq",
    o: [
      "Destructor yazmak",
      "LINQ ile silme yapmak",
      "Veritabanını hazırlamak",
      "Interface'i override etmek",
      "Constructor overload yapmak"
    ],
    a: 2,
    difficulty: "easy",
    week: 12,
    topic: "DB First Steps",
    importance: 5,
    explanation: "Database First adından da anlaşılır: önce database yani veritabanı vardır. SQL Server veya MySQL gibi bir sistemde tablolar hazırlanır. Sonra Visual Studio üzerinden model oluşturulur."
  },

  {
    q: "Database First geliştirme aşamalarında Visual Studio'da hangi seçenek kullanılır?",
    t: "mcq",
    o: [
      "Add > Destructor",
      "Add > Virtual Method",
      "Add > Interface Contract",
      "Add > New Item > ADO.NET Entity Data Model",
      "Add > Console Clear"
    ],
    a: 3,
    difficulty: "medium",
    week: 12,
    topic: "ADO.NET Entity Data Model",
    importance: 5,
    explanation: "PDF'de Database First için Visual Studio'da ADO.NET Entity Data Model seçildiği belirtilir. Bu seçenek, hazır veritabanından EF modeli oluşturmak için kullanılır. Sonrasında Model From Database seçilir."
  },

  {
    q: "Database First'te 'Model From Database' seçeneği ne işe yarar?",
    t: "mcq",
    o: [
      "Koddan veritabanı üretir.",
      "Destructor oluşturur.",
      "Constructor overload yapar.",
      "LINQ sorgularını siler.",
      "Var olan veritabanından model oluşturur."
    ],
    a: 4,
    difficulty: "medium",
    week: 12,
    topic: "Model From Database",
    importance: 5,
    explanation: "Model From Database, 'modeli hazır veritabanından oluştur' demektir. EF, tabloları okuyarak entity sınıflarını ve DbContext yapısını üretir. Bu, Database First yaklaşımının kalbidir."
  },

  {
    q: "Database First yaklaşımının en önemli avantajlarından biri hangisidir?",
    t: "mcq",
    o: [
      "Mevcut veritabanı ile hızlı entegrasyon sağlaması",
      "Kod kontrolünü tamamen artırması",
      "Model güncellemesini gereksiz kılması",
      "Her zaman en hızlı yöntem olması",
      "Destructor overload yapması"
    ],
    a: 0,
    difficulty: "medium",
    week: 12,
    topic: "DB First Advantage",
    importance: 5,
    explanation: "Eğer şirketin veya projenin hazır bir veritabanı varsa Database First çok kullanışlıdır. Var olan tablo yapısından sınıflar otomatik oluşturulur. Bu yüzden büyük ve olgun sistemlerde tercih edilebilir."
  },

  {
    q: "Database First yaklaşımının dezavantajlarından biri hangisidir?",
    t: "mcq",
    o: [
      "Var olan veritabanıyla çalışamaz.",
      "Model değişiklikleri için yeniden güncelleme gerekebilir.",
      "Kod yazmadan sınıf oluşturamaz.",
      "Büyük projelerde asla kullanılamaz.",
      "Connection string kullanılamaz."
    ],
    a: 1,
    difficulty: "medium",
    week: 12,
    topic: "DB First Disadvantage",
    importance: 5,
    explanation: "Database First'te model veritabanından türetildiği için veritabanında değişiklik olursa modelin güncellenmesi gerekebilir. Ayrıca kod kontrolü Code First'e göre daha sınırlı olabilir. Bu da sınavda dezavantaj olarak sorulabilir."
  },

  {
    q: "Connection string nedir?",
    t: "mcq",
    o: [
      "Destructor'ın adı",
      "Constructor'ın dönüş tipi",
      "Uygulamanın veritabanına nasıl bağlanacağını belirten bağlantı cümlesi",
      "Metot overload kuralı",
      "Interface içindeki metot"
    ],
    a: 2,
    difficulty: "medium",
    week: 12,
    topic: "Connection String",
    importance: 5,
    explanation: "Connection string, veritabanı bağlantı bilgilerini tutan metindir. İçinde sunucu adresi, veritabanı adı, güvenlik bilgileri gibi bağlantı için gerekli bilgiler bulunur. App.config veya Web.config içine yazılabilir."
  },

  {
    q: "Database First ne zaman tercih edilir?",
    t: "mcq",
    o: [
      "Hiç veritabanı yoksa ve önce kod yazılacaksa",
      "Sadece overload çalışılacaksa",
      "Sadece destructor yazılacaksa",
      "Zaten var olan bir veritabanı varsa",
      "Sadece console renkleri değiştirilecekse"
    ],
    a: 3,
    difficulty: "easy",
    week: 12,
    topic: "DB First Use Case",
    importance: 5,
    explanation: "Database First'in en doğru kullanım alanı hazır veritabanı olan projelerdir. Veritabanı zaten tasarlanmışsa EF onu okuyup sınıfları oluşturabilir. Bu yaklaşım kısa sürede veritabanıyla çalışmayı sağlar."
  },

  {
    q: "Database First sürecinde EF otomatik olarak ne oluşturabilir?",
    t: "mcq",
    o: [
      "Sadece destructor sembolü",
      "Sadece overload metotları",
      "Sadece console menüsü",
      "Sadece MessageBox",
      "Entity sınıfları ve DbContext"
    ],
    a: 4,
    difficulty: "medium",
    week: 12,
    topic: "EF Auto Generation",
    importance: 5,
    explanation: "Database First'te EF, seçilen tabloları okuyarak entity sınıflarını ve DbContext'i oluşturabilir. Entity sınıfları tabloları, DbContext ise veritabanı işlemlerini temsil eder. Bu yüzden elle çok fazla sınıf yazmaya gerek kalmaz."
  },

  {
    q: "Code First ile Database First arasındaki temel fark nedir?",
    t: "mcq",
    o: [
      "Code First'te önce kod/sınıf; Database First'te önce veritabanı vardır.",
      "Code First destructor'dır, Database First constructor'dır.",
      "İkisi tamamen aynıdır.",
      "Database First'te veritabanı kullanılmaz.",
      "Code First'te sınıf yazılamaz."
    ],
    a: 0,
    difficulty: "hard",
    week: 12,
    topic: "Code First vs Database First",
    importance: 5,
    explanation: "Code First'te önce C# sınıfları yazılır ve veritabanı bunlardan üretilir. Database First'te ise veritabanı önceden vardır ve sınıflar veritabanından üretilir. Finalde bu karşılaştırma direkt gelebilir."
  },

  // =========================================================
  // ==== HAFTA 13-14 – LINQ, CRUD, ÖĞRENCİ SİSTEMİ (91-100) ==
  // =========================================================

  {
    q: "LINQ açılımı nedir?",
    t: "mcq",
    o: [
      "Local Internet Query",
      "Language Integrated Query",
      "List Internal Queue",
      "Library Input Question",
      "Linked Integer Query"
    ],
    a: 1,
    difficulty: "easy",
    week: 13,
    topic: "LINQ",
    importance: 5,
    explanation: "LINQ, Language Integrated Query demektir. C# dilinin içine entegre edilmiş sorgu yazma yapısıdır. Koleksiyonlar üzerinde SQL'e benzeyen filtreleme, sıralama ve seçme işlemleri yapılmasını sağlar."
  },

  {
    q: "CRUD işlemlerindeki C harfi neyi ifade eder?",
    t: "mcq",
    o: [
      "Console",
      "Class",
      "Create",
      "Connection",
      "Constructor"
    ],
    a: 2,
    difficulty: "easy",
    week: 13,
    topic: "CRUD Create",
    importance: 5,
    explanation: "CRUD, veri üzerinde yapılan dört temel işlemin kısaltmasıdır. C harfi Create yani ekleme anlamına gelir. Örneğin listeye yeni öğrenci eklemek Create işlemidir."
  },

  {
    q: "CRUD işlemlerindeki Read ne anlama gelir?",
    t: "mcq",
    o: [
      "Veri silmek",
      "Veri güncellemek",
      "Veri eklemek",
      "Veri okumak/listelemek",
      "Programı kapatmak"
    ],
    a: 3,
    difficulty: "easy",
    week: 13,
    topic: "CRUD Read",
    importance: 5,
    explanation: "Read, veriyi okumak veya listelemek demektir. Örneğin öğrencileri ekrana yazdırmak, A harfi ile başlayanları listelemek veya A-Z sıralamak Read işlemidir. LINQ özellikle Read işlemlerinde çok güçlüdür."
  },

  {
    q: "CRUD işlemlerindeki Delete ne anlama gelir?",
    t: "mcq",
    o: [
      "Veri listelemek",
      "Veri eklemek",
      "Veri sorgulamak",
      "Veri sıralamak",
      "Veri silmek"
    ],
    a: 4,
    difficulty: "easy",
    week: 13,
    topic: "CRUD Delete",
    importance: 5,
    explanation: "Delete, veri silmek demektir. Örneğin Id değeri 2 olan öğrenciyi listeden kaldırmak Delete işlemidir. C# List yapısında Remove metodu bu amaçla kullanılabilir."
  },

  {
    q: "List<Ogrenci> ogrenciler = new List<Ogrenci>(); kodu ne yapar?",
    t: "mcq",
    o: [
      "Ogrenci nesnelerini tutacak boş bir liste oluşturur.",
      "Veritabanını siler.",
      "Constructor'ı override eder.",
      "LINQ sorgusunu çalıştırır.",
      "Interface oluşturur."
    ],
    a: 0,
    difficulty: "medium",
    week: 13,
    topic: "List Collection",
    importance: 5,
    explanation: "List<Ogrenci>, Ogrenci tipinde nesneleri saklayan bir koleksiyondur. Koleksiyon, birden fazla nesneyi düzenli şekilde tutan yapıdır. Öğrenci yönetim sisteminde tüm öğrenciler bu listede tutulabilir."
  },

  {
    q: "ogrenciler.Add(new Ogrenci { Id = 1, Ad = 'Ali', Soyad = 'Kaya' }); hangi CRUD işlemidir?",
    t: "mcq",
    o: [
      "Read",
      "Create",
      "Update",
      "Delete",
      "Sort"
    ],
    a: 1,
    difficulty: "easy",
    week: 13,
    topic: "CRUD Create",
    importance: 5,
    explanation: "Add metodu listeye yeni eleman ekler. Burada yeni bir Ogrenci nesnesi oluşturulup listeye eklenmiştir. Bu nedenle işlem Create yani ekleme işlemidir."
  },

  {
    q: "var sonuc = from o in ogrenciler where o.Ad.StartsWith('A') select o; sorgusu ne yapar?",
    t: "mcq",
    o: [
      "Tüm öğrencileri siler.",
      "Adı A ile bitenleri getirir.",
      "Adı A harfiyle başlayan öğrencileri seçer.",
      "Id değeri 1 olan öğrenciyi günceller.",
      "Listeye yeni öğrenci ekler."
    ],
    a: 2,
    difficulty: "medium",
    week: 13,
    topic: "LINQ Where",
    importance: 5,
    explanation: "StartsWith('A'), metnin A harfiyle başlayıp başlamadığını kontrol eder. where filtreleme koşuludur. Bu sorgu, adı A ile başlayan öğrencileri seçer; örneğin Ali veya Ayşe sonuçta yer alabilir."
  },

  {
    q: "FirstOrDefault(o => o.Id == 1) ne işe yarar?",
    t: "mcq",
    o: [
      "Listedeki tüm öğrencileri siler.",
      "Listeye yeni öğrenci ekler.",
      "Adı A olan tüm öğrencileri getirir.",
      "Id değeri 1 olan ilk öğrenciyi bulur; yoksa null dönebilir.",
      "Listeyi ters çevirir."
    ],
    a: 3,
    difficulty: "medium",
    week: 13,
    topic: "FirstOrDefault",
    importance: 5,
    explanation: "FirstOrDefault, verilen koşula uyan ilk elemanı bulur. Hiç uygun eleman yoksa hata fırlatmak yerine default değer döner; sınıf nesneleri için bu genellikle null olur. Bu yüzden sonrasında null kontrolü yapılır."
  },

  {
    q: "if (guncellenecek != null) kontrolü neden yapılır?",
    t: "mcq",
    o: [
      "Programı yavaşlatmak için",
      "LINQ sorgusunu silmek için",
      "Constructor'ı çağırmak için",
      "Database First başlatmak için",
      "Bulunan nesne gerçekten var mı diye kontrol etmek için"
    ],
    a: 4,
    difficulty: "medium",
    week: 13,
    topic: "Null Control",
    importance: 5,
    explanation: "FirstOrDefault aranan öğrenciyi bulamazsa null dönebilir. Null olan bir nesnenin Ad özelliğini değiştirmeye çalışırsan hata oluşur. Bu yüzden önce nesne var mı diye kontrol edilir."
  },

  {
    q: "guncellenecek.Ad = 'Ali Can'; satırı hangi CRUD işlemine örnektir?",
    t: "mcq",
    o: [
      "Update",
      "Create",
      "Read",
      "Delete",
      "Exit"
    ],
    a: 0,
    difficulty: "easy",
    week: 13,
    topic: "CRUD Update",
    importance: 5,
    explanation: "Update, mevcut veriyi değiştirmek demektir. Burada listede zaten bulunan öğrencinin Ad değeri 'Ali Can' olarak güncellenir. Yeni öğrenci eklenmediği için Create değildir."
  },

  {
    q: "ogrenciler.Remove(silinecek); hangi işlemi yapar?",
    t: "mcq",
    o: [
      "Öğrencinin adını değiştirir.",
      "Belirlenen öğrenciyi listeden siler.",
      "Tüm öğrencileri A-Z sıralar.",
      "Yeni öğrenci oluşturur.",
      "LINQ sorgusu tanımlar."
    ],
    a: 1,
    difficulty: "easy",
    week: 13,
    topic: "CRUD Delete",
    importance: 5,
    explanation: "Remove, listeden eleman kaldırmak için kullanılır. Önce silinecek öğrenci bulunur, sonra Remove ile listeden çıkarılır. Bu Delete yani silme işlemidir."
  },

  {
    q: "Öğrenci yönetim sistemi menüsünde 'Öğrenci Listele (A-Z)' işlemi için en uygun LINQ işlemi hangisidir?",
    t: "mcq",
    o: [
      "Remove",
      "Add",
      "OrderBy",
      "FirstOrDefault",
      "Clear"
    ],
    a: 2,
    difficulty: "medium",
    week: 14,
    topic: "LINQ OrderBy",
    importance: 5,
    explanation: "A-Z sıralama alfabetik sıralama demektir. LINQ'da OrderBy genellikle küçükten büyüğe veya A-Z sıralama için kullanılır. Örneğin ogrenciler.OrderBy(o => o.Ad) öğrencileri ada göre sıralayabilir."
  },

  {
    q: "Console menü yapısında '6 - Çıkış' seçeneğinin amacı nedir?",
    t: "mcq",
    o: [
      "Yeni öğrenci eklemek",
      "Öğrenci güncellemek",
      "A harfiyle başlayanları listelemek",
      "Program döngüsünden çıkmak",
      "Öğrenci silmek"
    ],
    a: 3,
    difficulty: "easy",
    week: 14,
    topic: "Console Menu",
    importance: 4,
    explanation: "Menülü console uygulamalarında kullanıcı işlem seçer. Çıkış seçeneği programın tekrar menüye dönmesini durdurur ve uygulamayı bitirir. Bu genellikle while döngüsünden çıkmak anlamına gelir."
  },

  {
    q: "Her işlem sonrası tekrar menüye dönmek için genellikle hangi yapı kullanılır?",
    t: "mcq",
    o: [
      "Sadece destructor",
      "Sadece interface",
      "Sadece property",
      "Sadece connection string",
      "Döngü yapısı"
    ],
    a: 4,
    difficulty: "medium",
    week: 14,
    topic: "Menu Loop",
    importance: 5,
    explanation: "Kullanıcı işlem yaptıktan sonra menünün tekrar görünmesi için program bir döngü içinde çalıştırılır. Örneğin while(true) veya çıkış koşullu bir while döngüsü kullanılabilir. Çıkış seçilince döngü kırılır."
  },

  {
    q: "Ogrenci sınıfında Id, Ad, Soyad property'leri neyi temsil eder?",
    t: "mcq",
    o: [
      "Öğrenci nesnesinin verilerini/niteliklerini",
      "Sadece metotları",
      "Sadece constructor'ları",
      "Sadece destructor'ı",
      "Sadece interface'i"
    ],
    a: 0,
    difficulty: "easy",
    week: 13,
    topic: "Ogrenci Class",
    importance: 5,
    explanation: "Property, nesnenin taşıdığı bilgidir. Öğrenci nesnesi için Id kimlik, Ad isim, Soyad soyisim bilgisini tutar. Bu property'ler gerçek dünyadaki öğrencinin özelliklerini yazılımda temsil eder."
  },

  {
    q: "LINQ özellikle hangi CRUD işleminde büyük avantaj sağlar?",
    t: "mcq",
    o: [
      "Sadece Create",
      "Read",
      "Sadece Delete",
      "Sadece Exit",
      "Sadece Constructor"
    ],
    a: 1,
    difficulty: "easy",
    week: 13,
    topic: "LINQ Read",
    importance: 5,
    explanation: "LINQ özellikle Read yani okuma/listeleme işlemlerinde güçlüdür. Filtreleme, sıralama ve seçme işlemleri okunabilir şekilde yazılır. Örneğin adı A ile başlayan öğrencileri listelemek LINQ ile kolaydır."
  },

  {
    q: "CRUD işlemlerinin OOP ile kolay entegre edilmesinin nedeni nedir?",
    t: "mcq",
    o: [
      "Verilerin nesne olarak modellenebilmesi",
      "Sınıfların hiç kullanılmaması",
      "Metotların silinmesi",
      "Constructor'ın yasaklanması",
      "LINQ'in sadece string üretmesi"
    ],
    a: 0,
    difficulty: "medium",
    week: 14,
    topic: "OOP CRUD",
    importance: 5,
    explanation: "OOP'de öğrenci, kitap, ürün gibi varlıklar sınıf olarak tasarlanır. CRUD işlemleri de bu nesneler üzerinde yapılır: nesne eklenir, okunur, güncellenir veya silinir. Bu yüzden OOP ve CRUD birlikte çok doğal çalışır."
  },

  {
    q: "Adı 'A' ile başlayan öğrencileri listelemek için hangi metot kullanılabilir?",
    t: "mcq",
    o: [
      "Remove()",
      "StartsWith('A')",
      "Add()",
      "SaveChanges()",
      "~Ogrenci()"
    ],
    a: 1,
    difficulty: "easy",
    week: 13,
    topic: "StartsWith",
    importance: 5,
    explanation: "StartsWith('A'), bir metnin A harfiyle başlayıp başlamadığını kontrol eder. Öğrencinin Ad property’si üzerinde kullanılırsa Ali, Ayşe, Ahmet gibi isimleri bulabilir. Bu filtreleme Read işlemidir."
  },

  {
    q: "Öğrenci güncelleme işleminde neden Id'ye göre arama yapılır?",
    t: "mcq",
    o: [
      "Çünkü Id öğrenciyi benzersiz tanımlamak için uygundur.",
      "Çünkü Ad her zaman benzersizdir.",
      "Çünkü Soyad hiçbir zaman değişmez.",
      "Çünkü LINQ Id olmadan çalışmaz.",
      "Çünkü Remove sadece Id siler."
    ],
    a: 0,
    difficulty: "medium",
    week: 14,
    topic: "Id ile Arama",
    importance: 5,
    explanation: "Aynı ada sahip birden fazla öğrenci olabilir. Id ise öğrenciyi benzersiz tanımlamak için kullanılır. Bu yüzden güncelleme ve silme gibi işlemlerde Id'ye göre arama yapmak daha güvenlidir."
  }
];
