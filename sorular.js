// Nesne Yönelimli Programlama – Son 3 Hafta 30 Soruluk Final Seti
// Konular: Hafta 12 Database First + Hafta 13-14 LINQ CRUD
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]
// Not: a = doğru şık index’i (0=A, 1=B, 2=C, 3=D, 4=E)

window.questionBank = [
  // =========================================================
  // ==== HAFTA 12 – DATABASE FIRST / EF / BAĞLANTI (10) ======
  // =========================================================

  {
    q: "Database First yaklaşımı en doğru şekilde neyi ifade eder?",
    t: "mcq",
    o: [
      "Var olan veritabanından C# entity sınıfları ve DbContext oluşturmayı",
      "Önce C# sınıfları yazıp sonra veritabanı üretmeyi",
      "Sadece constructor yazmayı",
      "Sadece LINQ ile liste sıralamayı",
      "Nesneyi bellekten silmeyi"
    ],
    a: 0,
    difficulty: "easy",
    week: 12,
    topic: "Database First",
    importance: 5,
    explanation: "Database First, önce veritabanının hazır olduğu yaklaşımdır. Yani tablolar SQL Server veya MySQL gibi sistemde önceden vardır. Entity Framework bu tablolardan C# sınıflarını ve DbContext yapısını otomatik üretir. Finalde 'var olan veritabanından sınıf oluşturma' denirse cevap Database First olur."
  },

  {
    q: "Database First yaklaşımında ilk adım genellikle hangisidir?",
    t: "mcq",
    o: [
      "Destructor yazmak",
      "Veritabanını hazırlamak",
      "LINQ ile Remove yapmak",
      "Interface oluşturmak",
      "Constructor overload yapmak"
    ],
    a: 1,
    difficulty: "easy",
    week: 12,
    topic: "Database First Aşamaları",
    importance: 5,
    explanation: "Database First adından da anlaşılır: önce database yani veritabanı vardır. Bu yüzden ilk iş SQL Server, MySQL veya benzeri sistemde veritabanı ve tabloların hazırlanmasıdır. Kod tarafı bundan sonra gelir."
  },

  {
    q: "Visual Studio’da Database First için hangi seçenek kullanılır?",
    t: "mcq",
    o: [
      "Add > Destructor",
      "Add > Constructor",
      "Add > New Item > ADO.NET Entity Data Model",
      "Add > Override Method",
      "Add > Console Menu"
    ],
    a: 2,
    difficulty: "medium",
    week: 12,
    topic: "ADO.NET Entity Data Model",
    importance: 5,
    explanation: "PDF’de Database First geliştirme aşamalarında Visual Studio’da 'Add > New Item > ADO.NET Entity Data Model' seçildiği anlatılır. Bu seçenek, hazır veritabanından Entity Framework modeli oluşturmak için kullanılır."
  },

  {
    q: "Database First sürecinde 'Model From Database' seçeneği ne işe yarar?",
    t: "mcq",
    o: [
      "Koddan veritabanı üretir",
      "Sadece metot overload eder",
      "Destructor oluşturur",
      "Var olan veritabanından model oluşturur",
      "Listeden öğrenci siler"
    ],
    a: 3,
    difficulty: "medium",
    week: 12,
    topic: "Model From Database",
    importance: 5,
    explanation: "Model From Database, 'modeli veritabanından oluştur' demektir. EF, seçilen veritabanındaki tabloları okur ve buna uygun entity sınıflarını üretir. Yani hazır veritabanı C# tarafına sınıf olarak yansıtılır."
  },

  {
    q: "Database First yaklaşımında EF otomatik olarak ne oluşturabilir?",
    t: "mcq",
    o: [
      "Sadece destructor sembolü",
      "Sadece Console.WriteLine kodu",
      "Sadece LINQ where koşulu",
      "Sadece overload metotları",
      "Entity sınıfları ve DbContext"
    ],
    a: 4,
    difficulty: "medium",
    week: 12,
    topic: "EF Otomatik Oluşturma",
    importance: 5,
    explanation: "Database First’te EF, veritabanı tablolarına karşılık gelen entity sınıflarını ve veritabanı işlemlerini yöneten DbContext sınıfını oluşturabilir. Entity sınıfı tabloyu, DbContext ise veritabanıyla konuşan ana yapıyı temsil eder."
  },

  {
    q: "Connection string nedir?",
    t: "mcq",
    o: [
      "Uygulamanın veritabanına nasıl bağlanacağını belirten bağlantı cümlesi",
      "Bir sınıfın yıkıcı fonksiyonu",
      "Bir metodu override etme komutu",
      "Listeye eleman ekleme metodu",
      "LINQ sorgusundaki select kısmı"
    ],
    a: 0,
    difficulty: "medium",
    week: 12,
    topic: "Connection String",
    importance: 5,
    explanation: "Connection string, uygulamanın hangi veritabanı sunucusuna, hangi veritabanı adına ve hangi güvenlik bilgileriyle bağlanacağını söyler. PDF’de bunun App.config veya Web.config içine yazıldığı gösterilir. Basitçe: programın veritabanına giden adres bilgisidir."
  },

  {
    q: "Database First yaklaşımının önemli avantajlarından biri hangisidir?",
    t: "mcq",
    o: [
      "Kod kontrolünü tamamen yok etmesi",
      "Mevcut veritabanı ile hızlı entegrasyon sağlaması",
      "Veritabanı kullanmayı engellemesi",
      "Her metodu private yapması",
      "Sadece console uygulaması oluşturması"
    ],
    a: 1,
    difficulty: "medium",
    week: 12,
    topic: "Database First Avantajları",
    importance: 5,
    explanation: "Eğer kurumda veya projede önceden hazırlanmış büyük bir veritabanı varsa Database First çok kullanışlıdır. EF bu hazır veritabanından sınıfları otomatik üretebilir. Bu yüzden hızlı entegrasyon sağlar."
  },

  {
    q: "Database First yaklaşımının dezavantajlarından biri hangisidir?",
    t: "mcq",
    o: [
      "Var olan veritabanlarıyla çalışamaması",
      "Hiç sınıf oluşturamaması",
      "Model değişiklikleri için yeniden güncelleme gerekebilmesi",
      "Connection string kullanamaması",
      "EF ile birlikte çalışamaması"
    ],
    a: 2,
    difficulty: "medium",
    week: 12,
    topic: "Database First Dezavantajları",
    importance: 5,
    explanation: "Database First’te model veritabanından üretildiği için veritabanı tarafında tablo veya kolon değişirse modelin yeniden güncellenmesi gerekebilir. Bu, kod kontrolünün Code First’e göre daha sınırlı olmasına neden olabilir."
  },

  {
    q: "Database First ne zaman tercih edilmelidir?",
    t: "mcq",
    o: [
      "Hiç veritabanı yokken ve önce kod yazılacakken",
      "Sadece constructor konusu çalışılırken",
      "Sadece overload yapılırken",
      "Zaten var olan bir veritabanı varsa",
      "Sadece interface sınavı varsa"
    ],
    a: 3,
    difficulty: "easy",
    week: 12,
    topic: "Database First Kullanım Zamanı",
    importance: 5,
    explanation: "Database First, hazır veritabanı bulunan projelerde idealdir. Örneğin şirketin yıllardır kullandığı bir veritabanı varsa, EF bu veritabanından C# sınıfları oluşturabilir. Bu yüzden 'hazır veritabanı varsa' cevabı çok kritiktir."
  },

  {
    q: "Code First ile Database First arasındaki temel fark hangisidir?",
    t: "mcq",
    o: [
      "İkisi tamamen aynıdır",
      "Database First’te veritabanı kullanılmaz",
      "Code First sadece destructor yazmak içindir",
      "Database First sadece LINQ filtresidir",
      "Code First’te önce kod/sınıf; Database First’te önce veritabanı vardır"
    ],
    a: 4,
    difficulty: "hard",
    week: 12,
    topic: "Code First vs Database First",
    importance: 5,
    explanation: "Code First yaklaşımında önce C# sınıfları yazılır, veritabanı bu sınıflara göre oluşur. Database First yaklaşımında ise veritabanı önceden vardır; EF bu veritabanından sınıfları oluşturur. Finalde bu karşılaştırma kesin bilinmelidir."
  },

  // =========================================================
  // ==== HAFTA 13-14 – LINQ, CRUD, ÖĞRENCİ SİSTEMİ (20) ======
  // =========================================================

  {
    q: "LINQ açılımı nedir?",
    t: "mcq",
    o: [
      "Language Integrated Query",
      "Local Internet Queue",
      "Library Internal Query",
      "Linked Input Question",
      "List Integer Queue"
    ],
    a: 0,
    difficulty: "easy",
    week: 13,
    topic: "LINQ",
    importance: 5,
    explanation: "LINQ, Language Integrated Query demektir. C# dilinin içine entegre edilmiş sorgu yazma yapısıdır. SQL’e benzer şekilde koleksiyonlar üzerinde filtreleme, seçme ve sıralama yapmayı sağlar."
  },

  {
    q: "LINQ C# dilinde en çok hangi amaçla kullanılır?",
    t: "mcq",
    o: [
      "Nesneyi bellekten silmek için",
      "Koleksiyonlar üzerinde sorgu yazmak için",
      "Constructor oluşturmak için",
      "Database First modelini silmek için",
      "Interface’i kapatmak için"
    ],
    a: 1,
    difficulty: "easy",
    week: 13,
    topic: "LINQ Kullanımı",
    importance: 5,
    explanation: "Koleksiyon, birden fazla veriyi tutan yapıdır. List<Ogrenci> buna örnektir. LINQ, bu listedeki verileri okumak, filtrelemek ve sıralamak için kullanılır. Örneğin adı A ile başlayan öğrencileri bulmak LINQ ile kolaydır."
  },

  {
    q: "CRUD kısaltmasındaki C harfi neyi ifade eder?",
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
    explanation: "CRUD veri üzerinde yapılan dört temel işlemdir: Create, Read, Update, Delete. C harfi Create yani ekleme anlamına gelir. Örneğin listeye yeni öğrenci eklemek Create işlemidir."
  },

  {
    q: "CRUD kısaltmasındaki R harfi hangi işlemdir?",
    t: "mcq",
    o: [
      "Remove",
      "Return",
      "Run",
      "Read",
      "Reset"
    ],
    a: 3,
    difficulty: "easy",
    week: 13,
    topic: "CRUD Read",
    importance: 5,
    explanation: "R harfi Read anlamına gelir. Read, veriyi okumak veya listelemek demektir. Öğrencileri ekrana yazdırmak, A-Z sıralamak veya adı A ile başlayanları göstermek Read işlemidir."
  },

  {
    q: "CRUD kısaltmasındaki D harfi neyi ifade eder?",
    t: "mcq",
    o: [
      "Data",
      "Display",
      "Database",
      "Default",
      "Delete"
    ],
    a: 4,
    difficulty: "easy",
    week: 13,
    topic: "CRUD Delete",
    importance: 5,
    explanation: "D harfi Delete yani silme anlamına gelir. Örneğin Id’si 2 olan öğrenciyi listeden kaldırmak Delete işlemidir. C# List yapısında Remove metodu bu iş için kullanılabilir."
  },

  {
    q: "public class Ogrenci { public int Id { get; set; } public string Ad { get; set; } public string Soyad { get; set; } } yapısında Id neyi temsil eder?",
    t: "mcq",
    o: [
      "Öğrenciyi ayırt etmek için kullanılan kimlik bilgisini",
      "Öğrencinin sadece soyadını",
      "LINQ sorgusunun dönüş tipini",
      "Listenin adını",
      "Destructor sembolünü"
    ],
    a: 0,
    difficulty: "medium",
    week: 13,
    topic: "Ogrenci Sınıfı",
    importance: 5,
    explanation: "Id, her öğrenciyi ayırt etmek için kullanılan kimlik bilgisidir. Aynı ada sahip iki öğrenci olabilir ama Id farklı olursa hangi öğrencinin güncelleneceği veya silineceği netleşir."
  },

  {
    q: "List<Ogrenci> ogrenciler = new List<Ogrenci>(); kodu ne yapar?",
    t: "mcq",
    o: [
      "Bir öğrenciyi siler",
      "Ogrenci nesnelerini tutacak boş bir liste oluşturur",
      "Veritabanını otomatik siler",
      "Constructor’ı override eder",
      "Connection string oluşturur"
    ],
    a: 1,
    difficulty: "medium",
    week: 13,
    topic: "List Koleksiyonu",
    importance: 5,
    explanation: "List<Ogrenci>, Ogrenci tipindeki nesneleri saklayan bir koleksiyondur. Koleksiyon, birden fazla nesneyi bir arada tutar. Öğrenci yönetim sisteminde tüm öğrenciler bu listede tutulur."
  },

  {
    q: "ogrenciler.Add(new Ogrenci { Id = 1, Ad = 'Ali', Soyad = 'Kaya' }); hangi CRUD işlemidir?",
    t: "mcq",
    o: [
      "Read",
      "Update",
      "Create",
      "Delete",
      "Exit"
    ],
    a: 2,
    difficulty: "easy",
    week: 13,
    topic: "Create İşlemi",
    importance: 5,
    explanation: "Add metodu listeye yeni eleman ekler. Burada yeni bir Ogrenci nesnesi oluşturulup ogrenciler listesine eklenmiştir. Bu yüzden işlem Create yani ekleme işlemidir."
  },

  {
    q: "from o in ogrenciler where o.Ad.StartsWith('A') select o; sorgusu ne yapar?",
    t: "mcq",
    o: [
      "Tüm öğrencileri siler",
      "Listeye yeni öğrenci ekler",
      "Id değeri 1 olanı günceller",
      "Adı A harfiyle başlayan öğrencileri seçer",
      "Programdan çıkar"
    ],
    a: 3,
    difficulty: "medium",
    week: 13,
    topic: "LINQ Filtreleme",
    importance: 5,
    explanation: "where filtreleme koşuludur. StartsWith('A') ise 'A ile başlıyor mu?' diye kontrol eder. Bu sorgu Ali, Ayşe, Ahmet gibi adı A harfiyle başlayan öğrencileri seçer."
  },

  {
    q: "foreach (var ogrenci in sonuc) yapısı ne için kullanılır?",
    t: "mcq",
    o: [
      "Yeni öğrenci eklemek için",
      "Öğrenciyi güncellemek için",
      "Listeyi silmek için",
      "Connection string yazmak için",
      "LINQ sonucundaki öğrencileri tek tek gezmek için"
    ],
    a: 4,
    difficulty: "medium",
    week: 13,
    topic: "foreach",
    importance: 5,
    explanation: "foreach, koleksiyondaki elemanları tek tek dolaşmak için kullanılır. LINQ sonucu birden fazla öğrenci döndürebilir. foreach ile her öğrenci sırayla alınır ve Console.WriteLine ile ekrana yazdırılabilir."
  },

  {
    q: "Console.WriteLine($'{ogrenci.Ad} {ogrenci.Soyad}'); satırı ne yapar?",
    t: "mcq",
    o: [
      "Öğrencinin adını ve soyadını ekrana yazdırır",
      "Öğrenciyi listeden siler",
      "Yeni öğrenci oluşturur",
      "Id değerini günceller",
      "Database First modeli oluşturur"
    ],
    a: 0,
    difficulty: "easy",
    week: 13,
    topic: "Console.WriteLine",
    importance: 4,
    explanation: "Console.WriteLine ekrana yazı yazdırır. Burada ogrenci.Ad ve ogrenci.Soyad değerleri birleştirilerek ekranda öğrencinin adı ve soyadı gösterilir. Bu, Read yani okuma/listeleme işleminin çıktı kısmıdır."
  },

  {
    q: "FirstOrDefault(o => o.Id == 1) ne işe yarar?",
    t: "mcq",
    o: [
      "Listeye yeni öğrenci ekler",
      "Id değeri 1 olan ilk öğrenciyi bulur; yoksa null dönebilir",
      "Tüm öğrencileri siler",
      "Listeyi A-Z sıralar",
      "Connection string oluşturur"
    ],
    a: 1,
    difficulty: "medium",
    week: 13,
    topic: "FirstOrDefault",
    importance: 5,
    explanation: "FirstOrDefault, verilen koşula uyan ilk elemanı bulur. Koşul o.Id == 1 ise Id’si 1 olan öğrenciyi arar. Eğer bulamazsa null dönebilir. Bu yüzden sonrasında null kontrolü yapılmalıdır."
  },

  {
    q: "if (guncellenecek != null) kontrolü neden yapılır?",
    t: "mcq",
    o: [
      "Listeyi alfabetik sıralamak için",
      "Yeni öğrenci eklemek için",
      "Güncellenecek öğrencinin gerçekten bulunup bulunmadığını kontrol etmek için",
      "Programı kapatmak için",
      "Database First başlatmak için"
    ],
    a: 2,
    difficulty: "medium",
    week: 13,
    topic: "Null Kontrolü",
    importance: 5,
    explanation: "FirstOrDefault aranan öğrenciyi bulamazsa null dönebilir. Null olan bir nesnenin Ad özelliğini değiştirmeye çalışmak hata verir. Bu yüzden önce 'bulundu mu?' kontrolü yapılır."
  },

  {
    q: "guncellenecek.Ad = 'Ali Can'; satırı hangi CRUD işlemine örnektir?",
    t: "mcq",
    o: [
      "Create",
      "Read",
      "Delete",
      "Update",
      "Exit"
    ],
    a: 3,
    difficulty: "easy",
    week: 13,
    topic: "Update İşlemi",
    importance: 5,
    explanation: "Update, var olan veriyi güncellemek demektir. Burada listede zaten bulunan öğrencinin Ad değeri değiştirilir. Yeni kayıt eklenmediği için Create değildir; mevcut kayıt değiştiği için Update’tir."
  },

  {
    q: "ogrenciler.Remove(silinecek); satırı ne yapar?",
    t: "mcq",
    o: [
      "Öğrencinin adını değiştirir",
      "Listeye yeni öğrenci ekler",
      "A harfiyle başlayanları listeler",
      "Öğrencileri A-Z sıralar",
      "Belirlenen öğrenciyi listeden siler"
    ],
    a: 4,
    difficulty: "easy",
    week: 13,
    topic: "Delete İşlemi",
    importance: 5,
    explanation: "Remove, listeden eleman silmek için kullanılır. Önce silinecek öğrenci FirstOrDefault ile bulunur. Sonra Remove ile listeden çıkarılır. Bu CRUD içindeki Delete işlemidir."
  },

  {
    q: "Öğrenci Yönetim Sistemi menüsündeki 'Öğrenci Listele (A-Z)' için en uygun LINQ metodu hangisidir?",
    t: "mcq",
    o: [
      "OrderBy",
      "Remove",
      "Add",
      "FirstOrDefault",
      "StartsWith"
    ],
    a: 0,
    difficulty: "medium",
    week: 14,
    topic: "A-Z Sıralama",
    importance: 5,
    explanation: "A-Z sıralama alfabetik sıralamadır. LINQ’da OrderBy, bir listeyi belirli alana göre küçükten büyüğe veya A-Z sıralamak için kullanılır. Örneğin ogrenciler.OrderBy(o => o.Ad) ada göre sıralar."
  },

  {
    q: "Öğrenci silme ve güncelleme işlemlerinde neden Id'ye göre arama yapılır?",
    t: "mcq",
    o: [
      "Çünkü Soyad her zaman benzersizdir",
      "Çünkü Id öğrenciyi benzersiz tanımlamak için daha güvenlidir",
      "Çünkü Ad hiçbir zaman aynı olamaz",
      "Çünkü LINQ sadece Id ile çalışır",
      "Çünkü Remove sadece string kabul eder"
    ],
    a: 1,
    difficulty: "medium",
    week: 14,
    topic: "Id ile Arama",
    importance: 5,
    explanation: "Aynı isimde birden fazla öğrenci olabilir. Mesela iki tane Ali olabilir. Id ise benzersiz kimlik gibi kullanılır. Bu yüzden güncelleme ve silme gibi hassas işlemlerde Id’ye göre arama yapmak en doğru yaklaşımdır."
  },

  {
    q: "Öğrenci Yönetim Sistemi'nde her işlemden sonra tekrar menüye dönmek için genellikle hangi yapı kullanılır?",
    t: "mcq",
    o: [
      "Destructor",
      "Interface",
      "Döngü",
      "Connection string",
      "Abstract class"
    ],
    a: 2,
    difficulty: "medium",
    week: 14,
    topic: "Menü Döngüsü",
    importance: 5,
    explanation: "Menülü console uygulamalarında kullanıcı işlem yaptıktan sonra tekrar menüyü görmelidir. Bunu sağlamak için while gibi döngü yapısı kullanılır. Kullanıcı çıkış seçeneğini seçene kadar menü tekrar gösterilir."
  },

  {
    q: "Menüde '6 - Çıkış' seçeneğinin amacı nedir?",
    t: "mcq",
    o: [
      "Yeni öğrenci eklemek",
      "Öğrenci güncellemek",
      "A harfiyle başlayanları listelemek",
      "Program döngüsünden çıkmak",
      "Öğrencileri A-Z sıralamak"
    ],
    a: 3,
    difficulty: "easy",
    week: 14,
    topic: "Çıkış İşlemi",
    importance: 4,
    explanation: "Console menüsünde çıkış seçeneği programı bitirmek için kullanılır. Menü bir döngü içindeyse, çıkış seçildiğinde bu döngü durdurulur. Böylece kullanıcı tekrar menüye gönderilmez."
  },

  {
    q: "LINQ özellikle hangi CRUD işleminde büyük avantaj sağlar?",
    t: "mcq",
    o: [
      "Sadece Create işleminde",
      "Sadece Delete işleminde",
      "Sadece programdan çıkışta",
      "Sadece constructor çalıştırmada",
      "Read yani okuma/listeleme işleminde"
    ],
    a: 4,
    difficulty: "easy",
    week: 13,
    topic: "LINQ ve Read",
    importance: 5,
    explanation: "PDF’de LINQ’in özellikle okuma yani Read işlemlerinde büyük avantaj sağladığı belirtilir. Çünkü LINQ ile filtreleme, sıralama ve seçme işlemleri okunabilir şekilde yazılır. Örneğin adı A ile başlayan öğrencileri listelemek çok kolaydır."
  }
];
