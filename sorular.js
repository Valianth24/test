// Veritabanı Yönetim Sistemleri – Kapsamlı 100 Soruluk Soru Bankası (MCQ)
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]
// Not: a = doğru şık index’i (0=A, 1=B, 2=C, 3=D, 4=E)

window.questionBank = [
  // =========================================================
  // ==== 2. HAFTA – Temel Veritabanı Kavramları (15) =========
  // =========================================================

  {
    q: "Veritabanı en kısa tanımıyla nedir?",
    t: "mcq",
    o: [
      "Belirli bir amaca göre düzenlenmiş ilişkili veriler topluluğu",
      "Sadece metin dosyası",
      "Yalnızca tablo çizim programı",
      "Sadece işlemci belleği",
      "Bir yazıcı sürücüsü"
    ],
    a: 0,
    difficulty: "easy",
    week: 2,
    topic: "Veritabanı Tanımı",
    importance: 5,
    explanation: "Veritabanı, belirli bir amaca yönelik düzenlenmiş ve birbiriyle ilişkili verilerin sistematik yapısıdır."
  },

  {
    q: "Klasik dosya sisteminin temel sorunu hangisidir?",
    t: "mcq",
    o: [
      "SQL kullanması",
      "Veri tekrarı ve tutarsızlık oluşturması",
      "İlişkisel tablo kullanması",
      "Anahtar zorunluluğu getirmesi",
      "Veri bütünlüğünü otomatik sağlaması"
    ],
    a: 1,
    difficulty: "easy",
    week: 2,
    topic: "Klasik Dosya Sistemi",
    importance: 5,
    explanation: "Klasik dosya sisteminde aynı veri farklı yerlerde tutulabilir; bu da veri tekrarı ve tutarsızlığa yol açar."
  },

  {
    q: "DBMS ne anlama gelir?",
    t: "mcq",
    o: [
      "Data Backup Main System",
      "Digital Base Memory Source",
      "Database Management System",
      "Direct Binary Machine Syntax",
      "Dynamic Boot Management Service"
    ],
    a: 2,
    difficulty: "easy",
    week: 2,
    topic: "DBMS",
    importance: 5,
    explanation: "DBMS, Database Management System yani Veritabanı Yönetim Sistemi anlamına gelir."
  },

  {
    q: "Tablo kavramı neyi ifade eder?",
    t: "mcq",
    o: [
      "Sadece dosya adını",
      "Bir programlama dilini",
      "Bir ağ protokolünü",
      "Satır ve sütunlardan oluşan veri yapısını",
      "İşletim sistemi çekirdeğini"
    ],
    a: 3,
    difficulty: "easy",
    week: 2,
    topic: "Tablo",
    importance: 5,
    explanation: "Tablo, verilerin satır/kayıt ve sütun/alan yapısıyla saklandığı temel ilişkisel veritabanı birimidir."
  },

  {
    q: "Alan (field/column) neyi temsil eder?",
    t: "mcq",
    o: [
      "Tablodaki tüm satırları",
      "Veritabanı sunucusunu",
      "Yedekleme dosyasını",
      "SQL Server sürümünü",
      "Belirli bir veri türünü taşıyan sütunu"
    ],
    a: 4,
    difficulty: "easy",
    week: 2,
    topic: "Alan",
    importance: 5,
    explanation: "Alan ya da sütun, Ad, Soyad, Doğum Tarihi gibi belirli bir veri niteliğini temsil eder."
  },

  {
    q: "Kayıt (record/row) nedir?",
    t: "mcq",
    o: [
      "Tablodaki bir varlığa ait tüm alan değerlerini içeren satır",
      "Sadece bir sütun adı",
      "Veritabanı motoru",
      "Sadece yedekleme komutu",
      "Sunucu bağlantı protokolü"
    ],
    a: 0,
    difficulty: "easy",
    week: 2,
    topic: "Kayıt",
    importance: 5,
    explanation: "Kayıt, bir öğrenci veya ürün gibi tek bir varlığa ait bilgilerin aynı satırda tutulmasıdır."
  },

  {
    q: "Veri tutarlılığı neden önemlidir?",
    t: "mcq",
    o: [
      "Veri tekrarını artırmak için",
      "Aynı bilginin farklı yerlerde çelişmemesi için",
      "Tablo sayısını sonsuz yapmak için",
      "Sadece dosya boyutunu büyütmek için",
      "SQL kullanımını engellemek için"
    ],
    a: 1,
    difficulty: "medium",
    week: 2,
    topic: "Veri Tutarlılığı",
    importance: 5,
    explanation: "Veri tutarlılığı, aynı verinin farklı yerlerde farklı değerlerle tutulmasını engeller."
  },

  {
    q: "Veri bağımsızlığı neyi ifade eder?",
    t: "mcq",
    o: [
      "Verinin hiçbir yerde saklanmamasını",
      "Tüm verilerin aynı dosyada tutulmasını",
      "Fiziksel/mantıksal değişikliklerin uygulamayı en az etkilemesini",
      "Her tablonun silinmesini",
      "Sadece Excel kullanılmasını"
    ],
    a: 2,
    difficulty: "medium",
    week: 2,
    topic: "Veri Bağımsızlığı",
    importance: 5,
    explanation: "Veri bağımsızlığı, veritabanı yapısındaki değişikliklerin uygulama tarafını minimum etkilemesini sağlar."
  },

  {
    q: "Veri soyutlama neden kullanılır?",
    t: "mcq",
    o: [
      "Veriyi tamamen gizlemek için",
      "SQL komutlarını kaldırmak için",
      "Kayıt eklemeyi yasaklamak için",
      "Kullanıcıya gereksiz teknik ayrıntıları göstermemek için",
      "Tabloları dosyaya çevirmek için"
    ],
    a: 3,
    difficulty: "medium",
    week: 2,
    topic: "Veri Soyutlama",
    importance: 4,
    explanation: "Veri soyutlama, kullanıcının verinin fiziksel saklanma ayrıntılarıyla uğraşmadan sistemi kullanmasını sağlar."
  },

  {
    q: "İlişkisel veri modelinin temel saklama yapısı hangisidir?",
    t: "mcq",
    o: [
      "Ağaç düğümleri",
      "Graf kenarları",
      "Sadece nesneler",
      "Metin dosyaları",
      "Tablolar"
    ],
    a: 4,
    difficulty: "easy",
    week: 2,
    topic: "İlişkisel Model",
    importance: 5,
    explanation: "İlişkisel veri modelinde veriler tablolarda saklanır ve ilişkiler ortak sütunlar üzerinden kurulur."
  },

  {
    q: "Hiyerarşik veri modeli hangi yapıya benzer?",
    t: "mcq",
    o: [
      "Ağaç yapısına",
      "Düz metin dosyasına",
      "Rastgele listeye",
      "Sadece web sayfasına",
      "Tek satırlı tabloya"
    ],
    a: 0,
    difficulty: "medium",
    week: 2,
    topic: "Veri Modelleri",
    importance: 4,
    explanation: "Hiyerarşik modelde veriler üst-alt ilişkisiyle ağaç yapısında düzenlenir."
  },

  {
    q: "Ağ veri modeli hangi ilişki yapısını daha esnek kurar?",
    t: "mcq",
    o: [
      "Sadece birebir",
      "Çoklu bağlantılı ilişkiler",
      "Sadece tek tablo",
      "Sadece dosya ilişkisi",
      "Sadece metin ilişkisi"
    ],
    a: 1,
    difficulty: "medium",
    week: 2,
    topic: "Ağ Veri Modeli",
    importance: 3,
    explanation: "Ağ modeli, kayıtlar arasında daha karmaşık bağlantılar kurulmasına izin verir."
  },

  {
    q: "Nesne yönelimli veri modeli hangi yapıyı temel alır?",
    t: "mcq",
    o: [
      "Sadece satırları",
      "Sadece sütunları",
      "Veri ve metotları birlikte tutan nesneleri",
      "Sadece SQL komutlarını",
      "Yedekleme dosyalarını"
    ],
    a: 2,
    difficulty: "medium",
    week: 2,
    topic: "Nesne Yönelimli Model",
    importance: 4,
    explanation: "Nesne yönelimli modelde veri ve veri üzerinde çalışan metotlar nesne yapısında birleştirilir."
  },

  {
    q: "Günümüzde en yaygın kullanılan veri modeli hangisidir?",
    t: "mcq",
    o: [
      "Sadece hiyerarşik model",
      "Sadece ağ modeli",
      "Sadece nesnel model",
      "İlişkisel model",
      "Dosya sistemi modeli"
    ],
    a: 3,
    difficulty: "easy",
    week: 2,
    topic: "İlişkisel Model",
    importance: 5,
    explanation: "İlişkisel model; tablo yapısı, SQL desteği ve yapısal bağımsızlık nedeniyle en yaygın kullanılan modeldir."
  },

  {
    q: "Klasik dosya sistemine göre veritabanının en büyük avantajı hangisidir?",
    t: "mcq",
    o: [
      "Veri tekrarını artırması",
      "Kullanıcı erişimini engellemesi",
      "SQL desteğini kaldırması",
      "Tüm verileri metin dosyasına çevirmesi",
      "Veriyi daha tutarlı, güvenli ve yönetilebilir tutması"
    ],
    a: 4,
    difficulty: "easy",
    week: 2,
    topic: "Veritabanı Avantajları",
    importance: 5,
    explanation: "Veritabanı sistemleri veri tutarlılığı, güvenlik, erişim kontrolü ve sorgulama kolaylığı sağlar."
  },

  // =========================================================
  // ==== 4-5. HAFTA – İlişkisel Veritabanı, İlişkiler, Anahtarlar (15)
  // =========================================================

  {
    q: "İlişkisel veritabanında veriler nasıl saklanır?",
    t: "mcq",
    o: [
      "Satır ve sütunlardan oluşan tablolarda",
      "Yalnızca resim dosyalarında",
      "Sadece ağaç düğümlerinde",
      "RAM üzerinde geçici olarak",
      "Sadece XML etiketlerinde"
    ],
    a: 0,
    difficulty: "easy",
    week: 4,
    topic: "İlişkisel Veritabanı",
    importance: 5,
    explanation: "İlişkisel veritabanının temel yapısı satır ve sütunlardan oluşan tablolardır."
  },

  {
    q: "Primary Key ne işe yarar?",
    t: "mcq",
    o: [
      "Tablodaki tüm verileri siler",
      "Her kaydı benzersiz tanımlar",
      "Sadece tablo adını değiştirir",
      "Veri tekrarını zorunlu yapar",
      "Yalnızca yedek alır"
    ],
    a: 1,
    difficulty: "easy",
    week: 4,
    topic: "Primary Key",
    importance: 5,
    explanation: "Primary Key, tablodaki her kaydı benzersiz biçimde tanımlayan alan veya alan grubudur."
  },

  {
    q: "Foreign Key neyi sağlar?",
    t: "mcq",
    o: [
      "Tabloyu tamamen silmeyi",
      "Veritabanını kapatmayı",
      "Başka tablonun birincil anahtarını referans almayı",
      "Sadece metin biçimlendirmeyi",
      "SQL Server kurulumunu"
    ],
    a: 2,
    difficulty: "easy",
    week: 4,
    topic: "Foreign Key",
    importance: 5,
    explanation: "Foreign Key, tablolar arasında ilişki kurmak için başka bir tablonun Primary Key alanını referans alır."
  },

  {
    q: "Birebir ilişki için doğru örnek hangisidir?",
    t: "mcq",
    o: [
      "Bir öğretmenin birçok öğrencisi olması",
      "Bir öğrencinin birçok derse girmesi",
      "Bir kitabın birçok ödünç kaydı olması",
      "Bir öğrencinin tek kimlik numarasına sahip olması",
      "Bir siparişin birçok ürünü olması"
    ],
    a: 3,
    difficulty: "medium",
    week: 4,
    topic: "Birebir İlişki",
    importance: 5,
    explanation: "Birebir ilişkide bir kaydın karşı tarafta yalnızca bir karşılığı vardır."
  },

  {
    q: "Bireçok ilişki için doğru örnek hangisidir?",
    t: "mcq",
    o: [
      "Bir öğrencinin tek kimliği olması",
      "Bir dersin tek kodu olması",
      "Bir tablonun tek adı olması",
      "Bir kişinin tek doğum tarihi olması",
      "Bir öğretmenin birden çok öğrencisi olması"
    ],
    a: 4,
    difficulty: "easy",
    week: 4,
    topic: "Bireçok İlişki",
    importance: 5,
    explanation: "Bireçok ilişkide bir tablodaki tek kayıt, diğer tabloda birden çok kayıtla ilişkili olabilir."
  },

  {
    q: "Çoka çok ilişki genellikle nasıl modellenir?",
    t: "mcq",
    o: [
      "Ara tablo kullanılarak",
      "Tek sütun silinerek",
      "Veritabanı kapatılarak",
      "Sadece metin dosyasıyla",
      "Primary key kaldırılarak"
    ],
    a: 0,
    difficulty: "medium",
    week: 4,
    topic: "Çoka Çok İlişki",
    importance: 5,
    explanation: "Çoka çok ilişkiler doğrudan değil, genellikle junction/ara tablo ile modellenir."
  },

  {
    q: "Öğrenci-Ders ilişkisinde DersKayit tablosunun görevi nedir?",
    t: "mcq",
    o: [
      "Dersleri silmek",
      "Öğrenci ve Ders arasındaki çoka çok ilişkiyi kurmak",
      "Sadece öğrenci adını değiştirmek",
      "Veritabanını yedeklemek",
      "SQL Server kurmak"
    ],
    a: 1,
    difficulty: "medium",
    week: 4,
    topic: "Ara Tablo",
    importance: 5,
    explanation: "Bir öğrenci birçok derse, bir ders birçok öğrenciye ait olabileceği için ara tablo çoka çok ilişkiyi çözer."
  },

  {
    q: "Veri bütünlüğü hangi araçlarla korunabilir?",
    t: "mcq",
    o: [
      "Sadece tablo rengiyle",
      "Sadece dosya adıyla",
      "Primary Key ve Foreign Key ile",
      "Yalnızca SELECT komutuyla",
      "Sadece kullanıcı adıyla"
    ],
    a: 2,
    difficulty: "medium",
    week: 4,
    topic: "Veri Bütünlüğü",
    importance: 5,
    explanation: "PK ve FK kullanımı ilişkisel modelde veri bütünlüğünü korumanın temel yollarındandır."
  },

  {
    q: "Normalizasyonun temel amacı nedir?",
    t: "mcq",
    o: [
      "Tablo sayısını rastgele artırmak",
      "SQL komutlarını kaldırmak",
      "Veritabanını kapatmak",
      "Veri tekrarını azaltıp yapıyı düzenlemek",
      "Tüm kayıtları silmek"
    ],
    a: 3,
    difficulty: "medium",
    week: 4,
    topic: "Normalizasyon",
    importance: 4,
    explanation: "Normalizasyon, veri tekrarını azaltır ve veritabanı yapısını daha tutarlı hale getirir."
  },

  {
    q: "İlişkisel cebir neyin temelini oluşturur?",
    t: "mcq",
    o: [
      "Donanım kurulumunun",
      "Ekran tasarımının",
      "Yedekleme dosyalarının",
      "İşletim sistemi çekirdeğinin",
      "SQL sorgularının"
    ],
    a: 4,
    difficulty: "medium",
    week: 4,
    topic: "İlişkisel Cebir",
    importance: 5,
    explanation: "İlişkisel cebir işlemleri SQL sorgularının matematiksel temelini oluşturur."
  },

  {
    q: "Selection işlemi ne yapar?",
    t: "mcq",
    o: [
      "Koşulu sağlayan satırları seçer",
      "Sadece tabloyu siler",
      "Veritabanını kapatır",
      "Kullanıcı parolasını değiştirir",
      "Sadece yedek alır"
    ],
    a: 0,
    difficulty: "easy",
    week: 4,
    topic: "Selection",
    importance: 5,
    explanation: "Selection, belirli koşulu sağlayan satırları seçer; SQL'de WHERE ile ilişkilidir."
  },

  {
    q: "Projection işlemi ne yapar?",
    t: "mcq",
    o: [
      "Satırları siler",
      "Belirli sütunları seçer",
      "Tabloyu düşürür",
      "Veri tabanını yedekler",
      "Trigger oluşturur"
    ],
    a: 1,
    difficulty: "easy",
    week: 4,
    topic: "Projection",
    importance: 5,
    explanation: "Projection, belirli sütunları seçme işlemidir; SELECT Ad, Soyad gibi kullanılır."
  },

  {
    q: "Join işlemi ne yapar?",
    t: "mcq",
    o: [
      "Tek tabloyu siler",
      "Sadece kullanıcı oluşturur",
      "Tabloları ortak alan üzerinden birleştirir",
      "Veritabanını şifreler",
      "Sadece dosya taşır"
    ],
    a: 2,
    difficulty: "easy",
    week: 4,
    topic: "Join",
    importance: 5,
    explanation: "Join, iki veya daha fazla tabloyu ilişkili sütunlara göre birleştirir."
  },

  {
    q: "Kartezyen çarpımı ne üretir?",
    t: "mcq",
    o: [
      "Sadece ortak satırları",
      "Sadece farklı satırları",
      "Sadece birincil anahtarları",
      "İki tablonun tüm olası satır kombinasyonlarını",
      "Yalnızca indeksleri"
    ],
    a: 3,
    difficulty: "hard",
    week: 4,
    topic: "Cartesian Product",
    importance: 4,
    explanation: "Kartezyen çarpımı, iki tablodaki kayıtların tüm olası eşleşmelerini üretir."
  },

  {
    q: "Difference işlemi neyi bulur?",
    t: "mcq",
    o: [
      "İki tablodaki tüm satırları",
      "Sadece ortak satırları",
      "Tüm olası kombinasyonları",
      "Sadece sütun adlarını",
      "Bir tabloda olup diğerinde olmayan satırları"
    ],
    a: 4,
    difficulty: "medium",
    week: 4,
    topic: "Difference",
    importance: 4,
    explanation: "Difference, bir ilişkide bulunup diğer ilişkide bulunmayan kayıtları bulur."
  },

  // =========================================================
  // ==== 6. HAFTA – SQL Sorguları, DML, JOIN, Aggregate (15) ==
  // =========================================================

  {
    q: "Tabloya yeni kayıt ekleyen SQL komutu hangisidir?",
    t: "mcq",
    o: [
      "INSERT",
      "SELECT",
      "UPDATE",
      "DELETE",
      "DROP"
    ],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "INSERT",
    importance: 5,
    explanation: "INSERT komutu tabloya yeni kayıt eklemek için kullanılır."
  },

  {
    q: "Veri güncellemek için hangi komut kullanılır?",
    t: "mcq",
    o: [
      "CREATE",
      "UPDATE",
      "DROP",
      "SELECT",
      "TRUNCATE"
    ],
    a: 1,
    difficulty: "easy",
    week: 6,
    topic: "UPDATE",
    importance: 5,
    explanation: "UPDATE komutu mevcut kayıtların değerlerini değiştirmek için kullanılır."
  },

  {
    q: "Belirli kaydı silmek için hangi komut kullanılır?",
    t: "mcq",
    o: [
      "SELECT",
      "INSERT",
      "DELETE",
      "CREATE",
      "ALTER"
    ],
    a: 2,
    difficulty: "easy",
    week: 6,
    topic: "DELETE",
    importance: 5,
    explanation: "DELETE FROM tablo WHERE koşul; belirli kayıtları silmek için kullanılır."
  },

  {
    q: "SELECT * FROM Ogrenci; sorgusu ne yapar?",
    t: "mcq",
    o: [
      "Tabloyu siler",
      "Yeni kayıt ekler",
      "Sadece tablo oluşturur",
      "Ogrenci tablosundaki tüm kayıtları listeler",
      "Veritabanını kapatır"
    ],
    a: 3,
    difficulty: "easy",
    week: 6,
    topic: "SELECT",
    importance: 5,
    explanation: "SELECT * tüm sütunları ve uygun tüm kayıtları listelemek için kullanılır."
  },

  {
    q: "DELETE FROM Ogrenci; sorgusunda WHERE yoksa ne olur?",
    t: "mcq",
    o: [
      "Hiçbir şey olmaz",
      "Sadece ilk kayıt silinir",
      "Sorgu otomatik SELECT olur",
      "Yeni kayıt eklenir",
      "Tablodaki tüm kayıtlar silinir"
    ],
    a: 4,
    difficulty: "medium",
    week: 6,
    topic: "DELETE",
    importance: 5,
    explanation: "DELETE komutunda WHERE kullanılmazsa tablodaki tüm kayıtlar silinebilir; bu yüzden dikkat edilmelidir."
  },

  {
    q: "DROP TABLE Customers; komutu ne yapar?",
    t: "mcq",
    o: [
      "Customers tablosunu siler",
      "Customers tablosunu listeler",
      "Yeni müşteri ekler",
      "Sadece bir satırı günceller",
      "Tabloyu yedekler"
    ],
    a: 0,
    difficulty: "medium",
    week: 6,
    topic: "DROP TABLE",
    importance: 5,
    explanation: "DROP TABLE tabloyu yapısıyla birlikte veritabanından kaldırır."
  },

  {
    q: "SELECT TOP 3 * FROM Customers; ne yapar?",
    t: "mcq",
    o: [
      "Tüm kayıtları siler",
      "İlk 3 kaydı listeler",
      "3 yeni tablo oluşturur",
      "Sadece sütun adlarını değiştirir",
      "Veritabanını kapatır"
    ],
    a: 1,
    difficulty: "medium",
    week: 6,
    topic: "TOP",
    importance: 4,
    explanation: "TOP, SQL Server tarafında sonuç kümesinden belirli sayıda kayıt almak için kullanılır."
  },

  {
    q: "MySQL'de ilk 3 kaydı almak için hangi ifade kullanılır?",
    t: "mcq",
    o: [
      "TOP 3",
      "FIRST 3",
      "LIMIT 3",
      "ONLY 3",
      "COUNT 3"
    ],
    a: 2,
    difficulty: "medium",
    week: 6,
    topic: "LIMIT",
    importance: 4,
    explanation: "MySQL'de sonuç sayısını sınırlamak için LIMIT kullanılır."
  },

  {
    q: "COUNT(ProductName) neyi döndürür?",
    t: "mcq",
    o: [
      "Fiyat toplamını",
      "Ortalama fiyatı",
      "En küçük fiyatı",
      "ProductName değerlerinin sayısını",
      "Tarih farkını"
    ],
    a: 3,
    difficulty: "easy",
    week: 6,
    topic: "COUNT",
    importance: 5,
    explanation: "COUNT, belirtilen alan veya kayıt sayısını hesaplamak için kullanılır."
  },

  {
    q: "SUM(Quantity) ne için kullanılır?",
    t: "mcq",
    o: [
      "En küçük değeri bulmak için",
      "Metin uzunluğu bulmak için",
      "Kayıt silmek için",
      "Tablo oluşturmak için",
      "Miktarların toplamını bulmak için"
    ],
    a: 4,
    difficulty: "easy",
    week: 6,
    topic: "SUM",
    importance: 5,
    explanation: "SUM sayısal değerleri toplar; örneğin sipariş miktarlarının toplamı."
  },

  {
    q: "AVG(Price) neyi hesaplar?",
    t: "mcq",
    o: [
      "Fiyat ortalamasını",
      "Fiyat toplamını siler",
      "Tabloyu oluşturur",
      "En yeni kaydı getirir",
      "Sütun adını değiştirir"
    ],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "AVG",
    importance: 5,
    explanation: "AVG, sayısal değerlerin ortalamasını hesaplar."
  },

  {
    q: "GROUP BY ne için kullanılır?",
    t: "mcq",
    o: [
      "Tabloyu tamamen silmek için",
      "Kayıtları belirli sütuna göre gruplamak için",
      "Yeni veritabanı kurmak için",
      "Sadece bağlantı açmak için",
      "Şifre değiştirmek için"
    ],
    a: 1,
    difficulty: "medium",
    week: 6,
    topic: "GROUP BY",
    importance: 5,
    explanation: "GROUP BY, kayıtları kategori/alan bazında gruplamak ve aggregate fonksiyonlarla analiz etmek için kullanılır."
  },

  {
    q: "INNER JOIN ne döndürür?",
    t: "mcq",
    o: [
      "Sadece sol tablonun tüm kayıtlarını",
      "Sadece sağ tablonun tüm kayıtlarını",
      "İki tabloda eşleşen kayıtları",
      "Hiçbir kayıt döndürmez",
      "Sadece tablo adlarını"
    ],
    a: 2,
    difficulty: "medium",
    week: 6,
    topic: "INNER JOIN",
    importance: 5,
    explanation: "INNER JOIN, iki tabloda eşleşen değerlere sahip kayıtları getirir."
  },

  {
    q: "LEFT JOIN ne yapar?",
    t: "mcq",
    o: [
      "Sadece sağ tablodaki kayıtları getirir",
      "Tüm veritabanını siler",
      "Sadece eşleşmeyenleri getirir",
      "Sol tablonun tüm kayıtlarını ve sağdan eşleşenleri getirir",
      "Sadece indeks oluşturur"
    ],
    a: 3,
    difficulty: "medium",
    week: 6,
    topic: "LEFT JOIN",
    importance: 5,
    explanation: "LEFT JOIN, sol tablodaki tüm kayıtları ve sağ tablodaki eşleşen kayıtları getirir."
  },

  {
    q: "UNION operatörü ne yapar?",
    t: "mcq",
    o: [
      "Tabloyu siler",
      "Kayıt günceller",
      "Sadece tek satır getirir",
      "Yedekleme yapar",
      "Birden fazla SELECT sonucunu birleştirir"
    ],
    a: 4,
    difficulty: "medium",
    week: 6,
    topic: "UNION",
    importance: 4,
    explanation: "UNION, iki veya daha fazla SELECT sorgusunun sonuç kümesini birleştirir."
  },

  // =========================================================
  // ==== 7-8. HAFTA – SQL Server, SSMS, Veritabanı Yönetimi (10)
  // =========================================================

  {
    q: "SQL Server hangi firma tarafından geliştirilmiştir?",
    t: "mcq",
    o: [
      "Microsoft",
      "Oracle",
      "Google",
      "IBM",
      "Apple"
    ],
    a: 0,
    difficulty: "easy",
    week: 7,
    topic: "SQL Server",
    importance: 5,
    explanation: "SQL Server, Microsoft tarafından geliştirilen ilişkisel veritabanı yönetim sistemidir."
  },

  {
    q: "SQL Server ne tür bir sistemdir?",
    t: "mcq",
    o: [
      "Metin editörü",
      "İlişkisel veritabanı yönetim sistemi",
      "Mobil işletim sistemi",
      "Grafik çizim aracı",
      "Dosya sıkıştırıcı"
    ],
    a: 1,
    difficulty: "easy",
    week: 7,
    topic: "SQL Server",
    importance: 5,
    explanation: "SQL Server, veri yönetimi, işlem ve analiz için kullanılan bir RDBMS sistemidir."
  },

  {
    q: "SQL Server hangi özel sorgu dilini kullanır?",
    t: "mcq",
    o: [
      "PL/SQL",
      "PL/pgSQL",
      "T-SQL",
      "SQLite",
      "Snowflake SQL"
    ],
    a: 2,
    difficulty: "easy",
    week: 7,
    topic: "T-SQL",
    importance: 5,
    explanation: "SQL Server, Transact-SQL yani T-SQL adlı SQL genişlemesini kullanır."
  },

  {
    q: "SSMS ne için kullanılır?",
    t: "mcq",
    o: [
      "Mobil uygulama yayınlamak için",
      "Sadece resim düzenlemek için",
      "Video sıkıştırmak için",
      "SQL Server yönetmek ve sorgu çalıştırmak için",
      "Sadece dosya silmek için"
    ],
    a: 3,
    difficulty: "easy",
    week: 7,
    topic: "SSMS",
    importance: 5,
    explanation: "SQL Server Management Studio; veritabanı oluşturma, yönetme, sorgu çalıştırma ve yedekleme işlemlerinde kullanılır."
  },

  {
    q: "SQL Server Express Edition için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Sadece büyük kurumsal sistemler içindir",
      "Bulut tabanlı Azure sürümüdür",
      "Tüm özellikleri üretim için sınırsız sunar",
      "Sadece web uygulamalarına özeldir",
      "Ücretsiz ve sınırlı özelliklere sahip sürümdür"
    ],
    a: 4,
    difficulty: "medium",
    week: 7,
    topic: "SQL Server Sürümleri",
    importance: 4,
    explanation: "Express Edition ücretsizdir ve küçük işletmeler/geliştiriciler için sınırlı özellikler sunar."
  },

  {
    q: "SQL Server Enterprise Edition hangi kullanım için uygundur?",
    t: "mcq",
    o: [
      "Büyük işletmeler ve gelişmiş ölçeklenebilirlik için",
      "Sadece kişisel not tutmak için",
      "Sadece mobil arayüz çizmek için",
      "Sadece dosya kopyalamak için",
      "Sadece ücretsiz eğitim için"
    ],
    a: 0,
    difficulty: "medium",
    week: 7,
    topic: "SQL Server Sürümleri",
    importance: 4,
    explanation: "Enterprise Edition, büyük işletmeler için gelişmiş güvenlik, erişilebilirlik ve ölçeklenebilirlik sağlar."
  },

  {
    q: "SQL Server Developer Edition için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Sadece son kullanıcı raporu içindir",
      "Geliştirme ve test amaçlı kullanılır",
      "Yalnızca web hosting içindir",
      "Sadece Azure üzerinde çalışır",
      "Hiçbir Enterprise özelliği içermez"
    ],
    a: 1,
    difficulty: "medium",
    week: 7,
    topic: "SQL Server Sürümleri",
    importance: 4,
    explanation: "Developer Edition, Enterprise özelliklerine sahip olsa da geliştirme ve test için kullanılır."
  },

  {
    q: "Veritabanını değiştirmek için hangi komut kullanılır?",
    t: "mcq",
    o: [
      "DROP DATABASE",
      "BACKUP DATABASE",
      "ALTER DATABASE",
      "SELECT DATABASE",
      "INSERT DATABASE"
    ],
    a: 2,
    difficulty: "medium",
    week: 8,
    topic: "ALTER DATABASE",
    importance: 5,
    explanation: "Var olan bir veritabanının özelliklerini değiştirmek için ALTER DATABASE kullanılır."
  },

  {
    q: "Veritabanını silmek için hangi komut kullanılır?",
    t: "mcq",
    o: [
      "ALTER DATABASE",
      "BACKUP DATABASE",
      "CREATE DATABASE",
      "DROP DATABASE",
      "ATTACH DATABASE"
    ],
    a: 3,
    difficulty: "medium",
    week: 8,
    topic: "DROP DATABASE",
    importance: 5,
    explanation: "DROP DATABASE, veritabanını silmek için kullanılır; bağlantıların kapatılması gerekebilir."
  },

  {
    q: "BACKUP DATABASE komutu ne için kullanılır?",
    t: "mcq",
    o: [
      "Veritabanını silmek için",
      "Sadece kayıt eklemek için",
      "Tablo adını değiştirmek için",
      "Sorgu sonucunu sıralamak için",
      "Veritabanını yedeklemek için"
    ],
    a: 4,
    difficulty: "medium",
    week: 8,
    topic: "Yedekleme",
    importance: 5,
    explanation: "BACKUP DATABASE, veri kaybını önlemek amacıyla veritabanı yedeği almak için kullanılır."
  },

  // =========================================================
  // ==== 10. HAFTA – T-SQL, DML, Operatörler, Fonksiyonlar (15)
  // =========================================================

  {
    q: "T-SQL neyin kısaltmasıdır?",
    t: "mcq",
    o: [
      "Transact-SQL",
      "Table-SQL",
      "Text-SQL",
      "Trigger-SQL",
      "Temporary-SQL"
    ],
    a: 0,
    difficulty: "easy",
    week: 10,
    topic: "T-SQL",
    importance: 5,
    explanation: "T-SQL, Transact-SQL anlamına gelir ve SQL Server için geliştirilmiş SQL uzantısıdır."
  },

  {
    q: "T-SQL standart SQL'e ek olarak ne sunar?",
    t: "mcq",
    o: [
      "Sadece tablo silme",
      "Değişken, prosedür ve hata yakalama gibi yapılar",
      "Yalnızca HTML desteği",
      "Sadece resim depolama",
      "SQL kullanımını engelleme"
    ],
    a: 1,
    difficulty: "medium",
    week: 10,
    topic: "T-SQL Özellikleri",
    importance: 5,
    explanation: "T-SQL, standart SQL'e ek olarak değişken, prosedür, koşul ve hata yakalama gibi programlama özellikleri sunar."
  },

  {
    q: "MERGE komutu hangi işlemi destekler?",
    t: "mcq",
    o: [
      "Sadece tablo silme",
      "Sadece yedekleme",
      "Koşula göre ekleme veya güncelleme",
      "Sadece SELECT çalıştırma",
      "Veritabanı kapatma"
    ],
    a: 2,
    difficulty: "hard",
    week: 10,
    topic: "MERGE",
    importance: 4,
    explanation: "MERGE, eşleşme varsa UPDATE, eşleşme yoksa INSERT gibi koşullu işlemler yapabilir."
  },

  {
    q: "BETWEEN operatörü ne için kullanılır?",
    t: "mcq",
    o: [
      "Metin değiştirmek için",
      "Tablo oluşturmak için",
      "Sadece kayıt silmek için",
      "Bir aralıktaki değerleri seçmek için",
      "Veritabanını kapatmak için"
    ],
    a: 3,
    difficulty: "easy",
    week: 10,
    topic: "BETWEEN",
    importance: 5,
    explanation: "BETWEEN, örneğin Yas BETWEEN 18 AND 22 gibi aralık sorgularında kullanılır."
  },

  {
    q: "IN operatörü hangi amaçla kullanılır?",
    t: "mcq",
    o: [
      "Tüm tabloyu silmek için",
      "Veri tabanını yedeklemek için",
      "Sadece tarih almak için",
      "Metin uzunluğu ölçmek için",
      "Belirli değer kümesi içinde aramak için"
    ],
    a: 4,
    difficulty: "easy",
    week: 10,
    topic: "IN",
    importance: 5,
    explanation: "IN, örneğin BolumID IN (1,3,5) gibi belirli değerler kümesindeki kayıtları seçer."
  },

  {
    q: "LIKE 'A%' ifadesi neyi getirir?",
    t: "mcq",
    o: [
      "A ile başlayan değerleri",
      "A ile biten değerleri",
      "İçinde A olmayanları",
      "Sadece boş kayıtları",
      "Tablo adlarını"
    ],
    a: 0,
    difficulty: "easy",
    week: 10,
    topic: "LIKE",
    importance: 5,
    explanation: "LIKE 'A%' ifadesi A harfi ile başlayan metinleri eşleştirir."
  },

  {
    q: "LIKE '%e' ifadesi neyi getirir?",
    t: "mcq",
    o: [
      "e ile başlayanları",
      "e ile bitenleri",
      "İçinde e olmayanları",
      "Sadece sayıları",
      "Tüm tabloları"
    ],
    a: 1,
    difficulty: "easy",
    week: 10,
    topic: "LIKE",
    importance: 5,
    explanation: "Yüzde işareti başta olursa sondaki karakter aranır; '%e' e ile bitenleri getirir."
  },

  {
    q: "LEN('Anıl Kuş') fonksiyonu ne döndürür?",
    t: "mcq",
    o: [
      "Metni büyütür",
      "Metni küçültür",
      "Metnin uzunluğunu",
      "Tarihi",
      "Tablo sayısını"
    ],
    a: 2,
    difficulty: "easy",
    week: 10,
    topic: "LEN",
    importance: 4,
    explanation: "LEN fonksiyonu verilen metnin karakter uzunluğunu döndürür."
  },

  {
    q: "LOWER('ANIL') ne döndürür?",
    t: "mcq",
    o: [
      "ANIL",
      "Anil",
      "Boş değer",
      "anil",
      "Metin uzunluğu"
    ],
    a: 3,
    difficulty: "easy",
    week: 10,
    topic: "LOWER",
    importance: 4,
    explanation: "LOWER fonksiyonu metni küçük harfe dönüştürür."
  },

  {
    q: "UPPER('anıl') ne döndürür?",
    t: "mcq",
    o: [
      "anıl",
      "Anıl",
      "Metin uzunluğu",
      "Tarih",
      "ANIL"
    ],
    a: 4,
    difficulty: "easy",
    week: 10,
    topic: "UPPER",
    importance: 4,
    explanation: "UPPER fonksiyonu metni büyük harfe dönüştürür."
  },

  {
    q: "LEFT('Merhaba', 3) sonucu nedir?",
    t: "mcq",
    o: [
      "Mer",
      "aba",
      "erh",
      "Merhaba",
      "3"
    ],
    a: 0,
    difficulty: "medium",
    week: 10,
    topic: "LEFT",
    importance: 4,
    explanation: "LEFT metnin sol tarafından belirtilen sayıda karakter alır."
  },

  {
    q: "RIGHT('Merhaba', 2) sonucu nedir?",
    t: "mcq",
    o: [
      "Me",
      "ba",
      "er",
      "Mer",
      "ha"
    ],
    a: 1,
    difficulty: "medium",
    week: 10,
    topic: "RIGHT",
    importance: 4,
    explanation: "RIGHT metnin sağ tarafından belirtilen sayıda karakter alır."
  },

  {
    q: "SUBSTRING('Merhaba', 2, 3) örneğinde amaç nedir?",
    t: "mcq",
    o: [
      "Tarihi almak",
      "Tablo silmek",
      "Metnin belirli bölümünü almak",
      "Kayıt eklemek",
      "Veritabanı yedeklemek"
    ],
    a: 2,
    difficulty: "medium",
    week: 10,
    topic: "SUBSTRING",
    importance: 4,
    explanation: "SUBSTRING, metnin belirli başlangıç konumundan belirli uzunlukta parça alır."
  },

  {
    q: "GETDATE() fonksiyonu ne döndürür?",
    t: "mcq",
    o: [
      "Tablo adını",
      "Kullanıcı adını",
      "En küçük fiyatı",
      "Geçerli tarih ve saati",
      "Kayıt sayısını"
    ],
    a: 3,
    difficulty: "easy",
    week: 10,
    topic: "GETDATE",
    importance: 5,
    explanation: "GETDATE(), sistemin geçerli tarih ve saat bilgisini döndürür."
  },

  {
    q: "DATEADD(DAY, 7, GETDATE()) ne yapar?",
    t: "mcq",
    o: [
      "Bugünden 7 gün öncesini verir",
      "Tabloyu siler",
      "Ay bilgisini alır",
      "Yıl bilgisini alır",
      "Bugüne 7 gün ekler"
    ],
    a: 4,
    difficulty: "medium",
    week: 10,
    topic: "DATEADD",
    importance: 4,
    explanation: "DATEADD belirtilen tarih değerine istenen miktarda zaman ekler."
  },

  // =========================================================
  // ==== 12-13. HAFTA – SQL Türleri, View, Trigger (20) ======
  // =========================================================

  {
    q: "Standard SQL hangi kuruluşa dayalı standarttır?",
    t: "mcq",
    o: [
      "ANSI/ISO",
      "Sadece Microsoft",
      "Sadece Oracle",
      "Sadece Google",
      "Sadece IBM"
    ],
    a: 0,
    difficulty: "easy",
    week: 12,
    topic: "Standard SQL",
    importance: 5,
    explanation: "Standard SQL, ANSI/ISO standardı olarak tüm RDBMS sistemleri için temel SQL komutlarını içerir."
  },

  {
    q: "T-SQL hangi platformla ilişkilidir?",
    t: "mcq",
    o: [
      "Oracle Database",
      "Microsoft SQL Server",
      "PostgreSQL",
      "MySQL",
      "SQLite"
    ],
    a: 1,
    difficulty: "easy",
    week: 12,
    topic: "T-SQL",
    importance: 5,
    explanation: "T-SQL, Microsoft SQL Server ve Azure SQL ile ilişkilidir."
  },

  {
    q: "PL/SQL hangi veritabanı ile ilişkilidir?",
    t: "mcq",
    o: [
      "SQL Server",
      "MySQL",
      "Oracle Database",
      "SQLite",
      "Snowflake"
    ],
    a: 2,
    difficulty: "easy",
    week: 12,
    topic: "PL/SQL",
    importance: 5,
    explanation: "PL/SQL, Oracle Database için geliştirilmiş prosedürel SQL dilidir."
  },

  {
    q: "PL/pgSQL hangi sistemin prosedürel dilidir?",
    t: "mcq",
    o: [
      "Oracle",
      "MySQL",
      "SQL Server",
      "PostgreSQL",
      "SQLite"
    ],
    a: 3,
    difficulty: "easy",
    week: 12,
    topic: "PL/pgSQL",
    importance: 5,
    explanation: "PL/pgSQL, PostgreSQL'e özel prosedürel SQL dilidir."
  },

  {
    q: "MySQL SQL için öne çıkan özelliklerden biri hangisidir?",
    t: "mcq",
    o: [
      "TRY...CATCH",
      "WITH SCHEMABINDING",
      "SQL Server Agent",
      "Oracle Package",
      "AUTO_INCREMENT"
    ],
    a: 4,
    difficulty: "medium",
    week: 12,
    topic: "MySQL SQL",
    importance: 5,
    explanation: "MySQL SQL tarafında LIMIT, AUTO_INCREMENT, REPLACE INTO gibi özellikler öne çıkar."
  },

  {
    q: "SQLite için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Küçük sistemler için uygun gömülü SQL yorumlayıcısıdır",
      "Yalnızca SQL Server'da çalışır",
      "Sadece büyük veri ambarıdır",
      "Sadece bulut hizmetidir",
      "Sadece Oracle içindir"
    ],
    a: 0,
    difficulty: "medium",
    week: 12,
    topic: "SQLite",
    importance: 4,
    explanation: "SQLite gömülü, hafif ve küçük sistemler için uygun bir SQL yorumlayıcısıdır."
  },

  {
    q: "View nedir?",
    t: "mcq",
    o: [
      "Fiziksel tablo dosyası",
      "SELECT sorgusuna dayalı sanal tablo",
      "Sadece indeks dosyası",
      "Yedekleme yöntemi",
      "Sunucu bağlantısı"
    ],
    a: 1,
    difficulty: "easy",
    week: 12,
    topic: "View",
    importance: 5,
    explanation: "View fiziksel olarak veri tutmaz; arkasında bir SELECT sorgusunun sonucunu tablo gibi gösterir."
  },

  {
    q: "View kullanım amaçlarından biri hangisidir?",
    t: "mcq",
    o: [
      "Tabloyu tamamen yok etmek",
      "Sunucu kapatmak",
      "Karmaşık sorguları sadeleştirmek",
      "Tüm izinleri kaldırmak",
      "Veritabanını bozmak"
    ],
    a: 2,
    difficulty: "easy",
    week: 12,
    topic: "View Kullanımı",
    importance: 5,
    explanation: "View; karmaşık sorguları sadeleştirme, güvenlik, raporlama ve veri soyutlama için kullanılır."
  },

  {
    q: "CREATE VIEW komutunun temel amacı nedir?",
    t: "mcq",
    o: [
      "Tablo silmek",
      "Kayıt güncellemek",
      "Veritabanı yedeklemek",
      "Görünüm oluşturmak",
      "Trigger silmek"
    ],
    a: 3,
    difficulty: "easy",
    week: 12,
    topic: "CREATE VIEW",
    importance: 5,
    explanation: "CREATE VIEW, SELECT sorgusuna dayalı sanal tablo/görünüm oluşturur."
  },

  {
    q: "WITH CHECK OPTION neyi zorunlu kılar?",
    t: "mcq",
    o: [
      "View tanımını gizlemeyi",
      "Tablo yapısını kilitlemeyi",
      "Tüm kayıtları silmeyi",
      "Veritabanını yedeklemeyi",
      "View koşuluna uyan veri ekleme/güncellemeyi"
    ],
    a: 4,
    difficulty: "medium",
    week: 12,
    topic: "WITH CHECK OPTION",
    importance: 5,
    explanation: "WITH CHECK OPTION, view üzerinden yapılan INSERT/UPDATE işlemlerinin view koşullarını ihlal etmesini engeller."
  },

  {
    q: "WITH ENCRYPTION ne işe yarar?",
    t: "mcq",
    o: [
      "View tanımını gizler",
      "Tablodaki tüm kayıtları siler",
      "Sadece veri ekler",
      "Sorguyu yavaşlatır",
      "Foreign key oluşturur"
    ],
    a: 0,
    difficulty: "medium",
    week: 12,
    topic: "WITH ENCRYPTION",
    importance: 5,
    explanation: "WITH ENCRYPTION, view tanımının sp_helptext gibi araçlarla görüntülenmesini engeller."
  },

  {
    q: "WITH SCHEMABINDING ne sağlar?",
    t: "mcq",
    o: [
      "View içeriğini otomatik siler",
      "View'in bağlı olduğu tabloda yapısal değişikliği engeller",
      "Her sorguyu SELECT'e çevirir",
      "SQL Server'ı kapatır",
      "Sadece veri ekler"
    ],
    a: 1,
    difficulty: "medium",
    week: 12,
    topic: "WITH SCHEMABINDING",
    importance: 5,
    explanation: "WITH SCHEMABINDING, görünümün dayandığı tablolarda kolon silme/isim değiştirme gibi değişiklikleri engelleyebilir."
  },

  {
    q: "WITH SCHEMABINDING kullanılırken hangi kural geçerlidir?",
    t: "mcq",
    o: [
      "SELECT * zorunludur",
      "Tablo adı hiç yazılmaz",
      "Tablolar schema.tablo adıyla yazılmalıdır",
      "WHERE kullanılamaz",
      "JOIN yasaktır"
    ],
    a: 2,
    difficulty: "hard",
    week: 12,
    topic: "SCHEMABINDING Kuralı",
    importance: 5,
    explanation: "SCHEMABINDING ile view içinde kullanılan tablolar tam adlarıyla yazılmalı ve SELECT * kullanılmamalıdır."
  },

  {
    q: "WITH ENCRYPTION ve WITH SCHEMABINDING hangi sistemde desteklenir?",
    t: "mcq",
    o: [
      "MySQL",
      "PostgreSQL",
      "Oracle PL/SQL",
      "SQL Server T-SQL",
      "SQLite"
    ],
    a: 3,
    difficulty: "hard",
    week: 13,
    topic: "View Karşılaştırması",
    importance: 5,
    explanation: "Ders notuna göre WITH ENCRYPTION ve WITH SCHEMABINDING özellikleri SQL Server/T-SQL tarafında desteklenir."
  },

  {
    q: "WITH CHECK OPTION hangi platformlarda desteklenir?",
    t: "mcq",
    o: [
      "Sadece Oracle",
      "Sadece SQLite",
      "Sadece MongoDB",
      "Sadece Python",
      "SQL Server, MySQL ve PostgreSQL"
    ],
    a: 4,
    difficulty: "hard",
    week: 13,
    topic: "WITH CHECK OPTION",
    importance: 5,
    explanation: "Ders notunda WITH CHECK OPTION'ın SQL Server, MySQL ve PostgreSQL tarafından desteklendiği; Oracle'da yerel destek olmadığı belirtilir."
  },

  {
    q: "PostgreSQL'de trigger oluştururken tipik sıra nasıldır?",
    t: "mcq",
    o: [
      "Önce fonksiyon, sonra trigger tanımlanır",
      "Önce view, sonra tablo silinir",
      "Önce backup, sonra drop yapılır",
      "Sadece ALTER kullanılır",
      "Sadece SELECT yazılır"
    ],
    a: 0,
    difficulty: "hard",
    week: 13,
    topic: "Trigger Karşılaştırması",
    importance: 5,
    explanation: "PostgreSQL'de trigger mantığı genellikle önce trigger fonksiyonu, sonra CREATE TRIGGER şeklindedir."
  },

  {
    q: "Trigger'ın temel kullanım amacı nedir?",
    t: "mcq",
    o: [
      "Sadece tablo adı değiştirmek",
      "Belirli olay olduğunda otomatik işlem çalıştırmak",
      "Veritabanını kapatmak",
      "Sadece rapor görüntülemek",
      "Sorgu sonucunu renklendirmek"
    ],
    a: 1,
    difficulty: "medium",
    week: 13,
    topic: "Trigger",
    importance: 5,
    explanation: "Trigger, INSERT/UPDATE/DELETE gibi olaylar olduğunda otomatik çalışan veritabanı nesnesidir."
  },

  {
    q: "Stok azaldığında uyarı logu oluşturma hangi nesneye örnektir?",
    t: "mcq",
    o: [
      "Sadece View",
      "Sadece SELECT",
      "Trigger",
      "Primary Key",
      "Projection"
    ],
    a: 2,
    difficulty: "medium",
    week: 13,
    topic: "Trigger Senaryosu",
    importance: 5,
    explanation: "Bir ürün satıldığında stok kritik seviyeye düşerse otomatik log eklemek trigger senaryosudur."
  },

  {
    q: "Fiyat değişikliğinde eski ve yeni fiyatı loglama hangi tablolarla ilişkilidir?",
    t: "mcq",
    o: [
      "Sadece master tablosu",
      "Sadece View",
      "Sadece SELECT sonucu",
      "inserted ve deleted mantığı",
      "Sadece yedekleme dosyası"
    ],
    a: 3,
    difficulty: "hard",
    week: 13,
    topic: "Trigger Loglama",
    importance: 5,
    explanation: "SQL Server trigger örneğinde inserted yeni değerleri, deleted eski değerleri temsil eder."
  },

  {
    q: "AktifSiparisler view örneğinde hangi durum filtrelenmiştir?",
    t: "mcq",
    o: [
      "İptal edildi",
      "Teslim edildi",
      "Silindi",
      "Arşivlendi",
      "Hazırlanıyor"
    ],
    a: 4,
    difficulty: "medium",
    week: 13,
    topic: "View Senaryosu",
    importance: 4,
    explanation: "AktifSiparisler örneğinde Durum = 'Hazırlanıyor' koşulu ile aktif siparişler listelenir."
  },

  // =========================================================
  // ==== 14. HAFTA – Kütüphane Otomasyon Sistemi (10) ========
  // =========================================================

  {
    q: "Kütüphane otomasyon projesinin temel amacı nedir?",
    t: "mcq",
    o: [
      "Kitap, üye ve ödünç/iade işlemlerini yönetmek",
      "Sadece resim depolamak",
      "Mobil arayüz çizmek",
      "Ağ bağlantısı test etmek",
      "Video oynatmak"
    ],
    a: 0,
    difficulty: "easy",
    week: 14,
    topic: "Kütüphane Otomasyonu",
    importance: 5,
    explanation: "Proje; kitapların, üyelerin ve ödünç alma/iade işlemlerinin veritabanı ile yönetilmesini hedefler."
  },

  {
    q: "Kütüphane projesinde kullanılacak VTYS hangisidir?",
    t: "mcq",
    o: [
      "SQLite",
      "MySQL",
      "MongoDB",
      "Excel",
      "Access Forms"
    ],
    a: 1,
    difficulty: "easy",
    week: 14,
    topic: "MySQL",
    importance: 5,
    explanation: "14. hafta projesi MySQL versiyonu olarak verilmiştir."
  },

  {
    q: "Kütüphane projesinde temel varlıklardan biri hangisidir?",
    t: "mcq",
    o: [
      "SepetRengi",
      "SunucuLogosu",
      "Kitaplar",
      "EkranKartı",
      "Bluetooth"
    ],
    a: 2,
    difficulty: "easy",
    week: 14,
    topic: "Entity",
    importance: 5,
    explanation: "Kitaplar, Üyeler ve Ödünç İşlemleri projenin temel varlıklarıdır."
  },

  {
    q: "Kitaplar tablosunda KitapID alanı nasıl tanımlanmıştır?",
    t: "mcq",
    o: [
      "Foreign Key",
      "View",
      "Trigger",
      "AUTO_INCREMENT PRIMARY KEY",
      "CHECK OPTION"
    ],
    a: 3,
    difficulty: "medium",
    week: 14,
    topic: "Kitaplar Tablosu",
    importance: 5,
    explanation: "KitapID, Kitaplar tablosunda otomatik artan birincil anahtar olarak kullanılır."
  },

  {
    q: "Uyeler tablosunda Eposta alanı hangi kısıta sahiptir?",
    t: "mcq",
    o: [
      "PRIMARY KEY",
      "FOREIGN KEY",
      "NOT NULL sadece",
      "CHECK OPTION",
      "UNIQUE"
    ],
    a: 4,
    difficulty: "medium",
    week: 14,
    topic: "Uyeler Tablosu",
    importance: 4,
    explanation: "Eposta alanı UNIQUE olarak tanımlanmıştır; aynı e-posta tekrar edemez."
  },

  {
    q: "OduncIslemleri tablosunun birincil anahtarı hangisidir?",
    t: "mcq",
    o: [
      "OduncID",
      "KitapID",
      "UyeID",
      "IadeTarihi",
      "Telefon"
    ],
    a: 0,
    difficulty: "easy",
    week: 14,
    topic: "OduncIslemleri",
    importance: 5,
    explanation: "OduncID, ödünç işlem kayıtlarını benzersiz tanımlayan primary key alanıdır."
  },

  {
    q: "OduncIslemleri tablosundaki KitapID neyi referans alır?",
    t: "mcq",
    o: [
      "Uyeler(UyeID)",
      "Kitaplar(KitapID)",
      "OduncIslemleri(OduncID)",
      "Yazar(YazarID)",
      "Telefon(TelefonID)"
    ],
    a: 1,
    difficulty: "medium",
    week: 14,
    topic: "Foreign Key",
    importance: 5,
    explanation: "OduncIslemleri.KitapID, Kitaplar tablosundaki KitapID alanını foreign key olarak referans alır."
  },

  {
    q: "ON DELETE CASCADE ne sağlar?",
    t: "mcq",
    o: [
      "Kayıtları şifreler",
      "View oluşturur",
      "Ana kayıt silinirse bağlı kayıtların da silinmesini sağlar",
      "Sadece stok artırır",
      "Tabloyu yedekler"
    ],
    a: 2,
    difficulty: "hard",
    week: 14,
    topic: "ON DELETE CASCADE",
    importance: 5,
    explanation: "ON DELETE CASCADE, ana tablodaki kayıt silindiğinde ona bağlı child kayıtların da silinmesini sağlar."
  },

  {
    q: "OduncAl stored procedure ne yapar?",
    t: "mcq",
    o: [
      "Sadece tüm kitapları listeler",
      "Sadece üyeleri siler",
      "View tanımını gizler",
      "Kitap ödünç alır ve stok adedini azaltır",
      "Veritabanını siler"
    ],
    a: 3,
    difficulty: "hard",
    week: 14,
    topic: "Stored Procedure",
    importance: 5,
    explanation: "OduncAl prosedürü, stok varsa ödünç kaydı ekler ve ilgili kitabın StokAdedi değerini bir azaltır."
  },

  {
    q: "trg_IadeEdildi trigger'ı ne yapar?",
    t: "mcq",
    o: [
      "Kitap stoğunu azaltır",
      "Üyeyi siler",
      "View oluşturur",
      "Veritabanını yedekler",
      "Kitap iade edilince StokAdedi'ni artırır"
    ],
    a: 4,
    difficulty: "hard",
    week: 14,
    topic: "Trigger",
    importance: 5,
    explanation: "IadeTarihi NULL'dan dolu değere döndüğünde trigger ilgili kitabın stok adedini artırır."
  },

  {
    q: "AktifOduncIslemleriView hangi kayıtları gösterir?",
    t: "mcq",
    o: [
      "Henüz iade edilmemiş ödünç kitapları",
      "Tüm silinen üyeleri",
      "Sadece stokta olmayan kitapları",
      "Tüm yedekleri",
      "Sadece eski fiyatları"
    ],
    a: 0,
    difficulty: "medium",
    week: 14,
    topic: "View",
    importance: 5,
    explanation: "AktifOduncIslemleriView, IadeTarihi NULL olan yani henüz iade edilmemiş işlemleri gösterir."
  },

  {
    q: "Stokta olan kitapları listelemek için hangi koşul kullanılır?",
    t: "mcq",
    o: [
      "StokAdedi = 0",
      "StokAdedi > 0",
      "IadeTarihi IS NOT NULL",
      "UyeID IS NULL",
      "ISBN IS NULL"
    ],
    a: 1,
    difficulty: "easy",
    week: 14,
    topic: "SELECT Sorgusu",
    importance: 5,
    explanation: "Stokta olan kitaplar için StokAdedi > 0 koşulu kullanılır."
  },

  {
    q: "Her kitabın kaç kez ödünç alındığını bulmak için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: [
      "AVG",
      "SUM",
      "COUNT",
      "LOWER",
      "GETDATE"
    ],
    a: 2,
    difficulty: "medium",
    week: 14,
    topic: "COUNT",
    importance: 5,
    explanation: "Her kitabın ödünç alınma sayısını bulmak için COUNT(OduncID) gibi sayma fonksiyonu kullanılır."
  },

  {
    q: "Yayın yılına göre ortalama stok hesaplamak için hangi ifade gerekir?",
    t: "mcq",
    o: [
      "DELETE",
      "DROP",
      "INSERT",
      "GROUP BY YayinYili",
      "WITH ENCRYPTION"
    ],
    a: 3,
    difficulty: "medium",
    week: 14,
    topic: "GROUP BY",
    importance: 5,
    explanation: "Yayın yılı bazında ortalama stok için kayıtlar YayinYili alanına göre gruplanır."
  },

  {
    q: "HAVING AVG(StokAdedi) > 2 ne işe yarar?",
    t: "mcq",
    o: [
      "Tabloyu siler",
      "Tüm verileri günceller",
      "Yeni veritabanı oluşturur",
      "View tanımını gizler",
      "Grupların ortalama stok şartını filtreler"
    ],
    a: 4,
    difficulty: "hard",
    week: 14,
    topic: "HAVING",
    importance: 5,
    explanation: "HAVING, GROUP BY sonrası oluşan gruplar üzerinde koşul uygulamak için kullanılır."
  }
];
