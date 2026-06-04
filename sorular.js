// Veritabanı Yönetim Sistemleri – Çıkmış Final Tarzı 100 Soruluk Test (MCQ)
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]
// Not: a = doğru şık index’i (0=A, 1=B, 2=C, 3=D, 4=E)

window.questionBank = [
  // =========================================================
  // ==== 2. HAFTA – Temel Kavramlar ve Dosya Sistemi (15) ====
  // =========================================================

  {
    q: "Klasik dosya sisteminde veri tekrarının en önemli sonucu nedir?",
    t: "mcq",
    o: [
      "Veri tutarsızlığı oluşması",
      "SQL sorgularının hızlanması",
      "Primary Key oluşması",
      "JOIN işleminin otomatikleşmesi",
      "Veri güvenliğinin artması"
    ],
    a: 0,
    difficulty: "easy",
    week: 2,
    topic: "Klasik Dosya Sistemi",
    importance: 5,
    explanation: "Aynı veri farklı dosyalarda tekrarlandığında biri güncellenip diğeri eski kalabilir; bu da tutarsızlık oluşturur."
  },

  {
    q: "DBMS'nin Türkçe karşılığı hangisidir?",
    t: "mcq",
    o: [
      "Veri Bağlama Model Sistemi",
      "Veritabanı Yönetim Sistemi",
      "Dosya Biçimlendirme Sistemi",
      "Dinamik Bellek Saklama",
      "Dijital Bilgi Modülü"
    ],
    a: 1,
    difficulty: "easy",
    week: 2,
    topic: "DBMS",
    importance: 5,
    explanation: "DBMS, Database Management System; Türkçesi Veritabanı Yönetim Sistemi’dir."
  },

  {
    q: "Aşağıdakilerden hangisi veritabanı sisteminin klasik dosya sistemine göre avantajıdır?",
    t: "mcq",
    o: [
      "Veri tekrarını artırması",
      "Yetkisiz erişimi kolaylaştırması",
      "Veri güvenliği ve tutarlılığı sağlaması",
      "Sorgulamayı engellemesi",
      "Tüm veriyi tek metin dosyasına zorlaması"
    ],
    a: 2,
    difficulty: "easy",
    week: 2,
    topic: "Veritabanı Avantajları",
    importance: 5,
    explanation: "Veritabanı sistemi; güvenlik, tutarlılık, hızlı erişim ve çok kullanıcılı çalışma avantajı sağlar."
  },

  {
    q: "Tablodaki dikey yapılar ne olarak adlandırılır?",
    t: "mcq",
    o: [
      "Kayıt",
      "Satır",
      "Tuple",
      "Alan/Sütun",
      "Veritabanı"
    ],
    a: 3,
    difficulty: "easy",
    week: 2,
    topic: "Alan",
    importance: 5,
    explanation: "Tablodaki dikey yapılar alan veya sütun olarak adlandırılır."
  },

  {
    q: "Tablodaki yatay yapılar neyi temsil eder?",
    t: "mcq",
    o: [
      "Sadece kolon adını",
      "Veri tipini",
      "Foreign Key kuralını",
      "Veritabanı motorunu",
      "Kayıt/Satır"
    ],
    a: 4,
    difficulty: "easy",
    week: 2,
    topic: "Kayıt",
    importance: 5,
    explanation: "Her yatay satır bir kaydı temsil eder; örneğin bir öğrencinin tüm bilgileri tek satırda tutulur."
  },

  {
    q: "Veri soyutlama en çok neyi sağlar?",
    t: "mcq",
    o: [
      "Kullanıcının fiziksel saklama ayrıntılarıyla uğraşmamasını",
      "Tüm tabloların silinmesini",
      "Veri tekrarının artmasını",
      "SQL komutlarının kaldırılmasını",
      "Dosya sistemine dönüşü"
    ],
    a: 0,
    difficulty: "medium",
    week: 2,
    topic: "Veri Soyutlama",
    importance: 4,
    explanation: "Veri soyutlama, kullanıcıya gereksiz teknik detayları göstermeden veriye erişim sağlar."
  },

  {
    q: "Veri bağımsızlığı ne demektir?",
    t: "mcq",
    o: [
      "Verinin hiç saklanmaması",
      "Veritabanı yapısındaki değişikliklerin uygulamayı en az etkilemesi",
      "Tüm verilerin tek dosyada tutulması",
      "Her tablonun ilişkisiz olması",
      "SQL'in kullanılmaması"
    ],
    a: 1,
    difficulty: "medium",
    week: 2,
    topic: "Veri Bağımsızlığı",
    importance: 5,
    explanation: "Veri bağımsızlığı, fiziksel veya mantıksal değişikliklerin uygulama tarafını mümkün olduğunca az etkilemesidir."
  },

  {
    q: "Hiyerarşik veri modeli hangi yapıya benzer?",
    t: "mcq",
    o: [
      "Düz liste",
      "Rastgele dosya",
      "Ağaç yapısı",
      "Sadece tablo",
      "Kuyruk yapısı"
    ],
    a: 2,
    difficulty: "medium",
    week: 2,
    topic: "Veri Modelleri",
    importance: 4,
    explanation: "Hiyerarşik modelde üst-alt ilişkisi bulunur; yapı ağaç düzenine benzer."
  },

  {
    q: "Günümüzde en yaygın kullanılan veri modeli hangisidir?",
    t: "mcq",
    o: [
      "Hiyerarşik model",
      "Ağ modeli",
      "Dosya modeli",
      "İlişkisel model",
      "Tek satırlı model"
    ],
    a: 3,
    difficulty: "easy",
    week: 2,
    topic: "İlişkisel Model",
    importance: 5,
    explanation: "İlişkisel model tablo yapısı, SQL desteği ve esnekliği nedeniyle en yaygın modeldir."
  },

  {
    q: "İlişkisel modelde veriler temel olarak nerede saklanır?",
    t: "mcq",
    o: [
      "Ağaç düğümlerinde",
      "Sadece metin dosyalarında",
      "Graf kenarlarında",
      "Form ekranlarında",
      "Tablolarda"
    ],
    a: 4,
    difficulty: "easy",
    week: 2,
    topic: "İlişkisel Model",
    importance: 5,
    explanation: "İlişkisel modelde veriler satır ve sütunlardan oluşan tablolarda saklanır."
  },

  {
    q: "Bir okul otomasyonu için klasik dosya sistemi neden yetersiz kalır?",
    t: "mcq",
    o: [
      "Çok kullanıcı, güvenlik ve tutarlılık sorunları oluşturacağı için",
      "Hiç veri saklamadığı için",
      "SQL'i zorunlu yaptığı için",
      "Tablo ilişkilerini otomatik kurduğu için",
      "Veri tekrarını tamamen önlediği için"
    ],
    a: 0,
    difficulty: "medium",
    week: 2,
    topic: "Dosya Sistemi Karşılaştırması",
    importance: 4,
    explanation: "Okul otomasyonu gibi sistemlerde çok kullanıcı, güvenlik, hızlı sorgulama ve veri tutarlılığı gerekir."
  },

  {
    q: "Alan ve kayıt arasındaki fark için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Alan satırdır, kayıt sütundur",
      "Alan sütundur, kayıt satırdır",
      "İkisi de veritabanıdır",
      "Alan tabloyu siler, kayıt tabloyu açar",
      "Kayıt sadece veri tipidir"
    ],
    a: 1,
    difficulty: "easy",
    week: 2,
    topic: "Alan-Kayıt Farkı",
    importance: 5,
    explanation: "Alan/sütun verinin niteliğini, kayıt/satır ise tek varlığa ait değerler bütününü gösterir."
  },

  {
    q: "Veri tutarlılığı hangi durumda bozulur?",
    t: "mcq",
    o: [
      "Primary Key kullanıldığında",
      "Veri tek merkezden yönetildiğinde",
      "Aynı bilgi farklı yerlerde farklı tutulduğunda",
      "Foreign Key tanımlandığında",
      "Normalizasyon yapıldığında"
    ],
    a: 2,
    difficulty: "easy",
    week: 2,
    topic: "Veri Tutarlılığı",
    importance: 5,
    explanation: "Aynı verinin farklı kopyalarında farklı değerler bulunması veri tutarsızlığıdır."
  },

  {
    q: "Nesne yönelimli veri modeli neyi birlikte tutar?",
    t: "mcq",
    o: [
      "Tablo ve view dosyasını",
      "Satır ve SQL Server sürümünü",
      "Kullanıcı adı ve şifreyi",
      "Veri ve metotları",
      "Yedek ve log dosyasını"
    ],
    a: 3,
    difficulty: "medium",
    week: 2,
    topic: "Nesnel Veri Modeli",
    importance: 3,
    explanation: "Nesne yönelimli modelde veri ve o veri üzerinde çalışan davranış/metotlar birlikte ele alınır."
  },

  {
    q: "Veritabanında 'varlık' kavramına en uygun örnek hangisidir?",
    t: "mcq",
    o: [
      "Sadece renk",
      "Sadece boşluk",
      "Sadece noktalama",
      "Sadece dosya yolu",
      "Öğrenci"
    ],
    a: 4,
    difficulty: "easy",
    week: 2,
    topic: "Varlık",
    importance: 4,
    explanation: "Öğrenci, ürün, müşteri veya kitap gibi gerçek dünyadaki nesneler varlık olarak modellenebilir."
  },

  // =========================================================
  // ==== 4-5. HAFTA – İlişkiler, Anahtarlar, İlişkisel Cebir (15)
  // =========================================================

  {
    q: "Primary Key'in temel görevi nedir?",
    t: "mcq",
    o: [
      "Kaydı benzersiz tanımlamak",
      "Tabloyu silmek",
      "Sorguyu yedeklemek",
      "Veri tekrarını zorunlu yapmak",
      "Tüm alanları NULL yapmak"
    ],
    a: 0,
    difficulty: "easy",
    week: 4,
    topic: "Primary Key",
    importance: 5,
    explanation: "Primary Key, tablodaki her kaydın benzersiz biçimde tanımlanmasını sağlar."
  },

  {
    q: "Foreign Key'in temel görevi nedir?",
    t: "mcq",
    o: [
      "Veritabanını kapatmak",
      "Tablolar arasında ilişki kurmak",
      "Tüm kayıtları silmek",
      "Alan adlarını gizlemek",
      "View tanımını şifrelemek"
    ],
    a: 1,
    difficulty: "easy",
    week: 4,
    topic: "Foreign Key",
    importance: 5,
    explanation: "Foreign Key başka bir tablonun Primary Key alanını referans alarak ilişki kurar."
  },

  {
    q: "Bir müşteri birden fazla sipariş verebiliyorsa ilişki türü nedir?",
    t: "mcq",
    o: [
      "Birebir",
      "Çoka çok",
      "Bireçok",
      "İlişkisiz",
      "Kartezyen"
    ],
    a: 2,
    difficulty: "easy",
    week: 4,
    topic: "Bireçok İlişki",
    importance: 5,
    explanation: "Bir müşteri birçok sipariş verebilir; bu 1-N yani bireçok ilişkidir."
  },

  {
    q: "Çoka çok ilişki genellikle hangi yapıyla çözülür?",
    t: "mcq",
    o: [
      "Tek sütun silinerek",
      "Tablo adı değiştirilerek",
      "WHERE kaldırılarak",
      "Ara tablo kullanılarak",
      "View şifrelenerek"
    ],
    a: 3,
    difficulty: "medium",
    week: 4,
    topic: "Çoka Çok İlişki",
    importance: 5,
    explanation: "M-N ilişkilerde iki tablo arasına genellikle junction/ara tablo eklenir."
  },

  {
    q: "Bir öğrencinin yalnızca bir kimlik numarası olması hangi ilişkiye örnektir?",
    t: "mcq",
    o: [
      "Bireçok",
      "Çoka çok",
      "Kartezyen",
      "Join",
      "Birebir"
    ],
    a: 4,
    difficulty: "easy",
    week: 4,
    topic: "Birebir İlişki",
    importance: 4,
    explanation: "Bir öğrencinin tek kimlik numarası olması 1-1 ilişkiye örnektir."
  },

  {
    q: "İlişkisel cebirde selection işlemi ne yapar?",
    t: "mcq",
    o: [
      "Koşula uyan satırları seçer",
      "Sadece sütun adlarını değiştirir",
      "Tabloları siler",
      "Veritabanını yedekler",
      "View tanımını gizler"
    ],
    a: 0,
    difficulty: "easy",
    week: 4,
    topic: "Selection",
    importance: 5,
    explanation: "Selection satır filtreleme işlemidir; SQL'de WHERE ile ilişkilidir."
  },

  {
    q: "İlişkisel cebirde projection işlemi ne yapar?",
    t: "mcq",
    o: [
      "Satırları siler",
      "Belirli sütunları seçer",
      "Tabloyu düşürür",
      "Veritabanını kapatır",
      "Trigger çalıştırır"
    ],
    a: 1,
    difficulty: "easy",
    week: 4,
    topic: "Projection",
    importance: 5,
    explanation: "Projection sütun seçme işlemidir; SELECT ad, soyad gibi düşünülebilir."
  },

  {
    q: "JOIN işleminin amacı nedir?",
    t: "mcq",
    o: [
      "Tek tabloyu silmek",
      "Yedek almak",
      "Tabloları ortak alan üzerinden birleştirmek",
      "Alanları şifrelemek",
      "Tüm ilişkileri kaldırmak"
    ],
    a: 2,
    difficulty: "easy",
    week: 4,
    topic: "JOIN",
    importance: 5,
    explanation: "JOIN, ilişkili tabloları ortak alanlara göre birleştirerek birlikte sorgulamayı sağlar."
  },

  {
    q: "Kartezyen çarpımın sonucu nedir?",
    t: "mcq",
    o: [
      "Sadece ortak satırlar",
      "Sadece farklı satırlar",
      "Sadece birincil anahtarlar",
      "Tüm olası satır kombinasyonları",
      "Sadece NULL kayıtlar"
    ],
    a: 3,
    difficulty: "medium",
    week: 4,
    topic: "Kartezyen Çarpım",
    importance: 4,
    explanation: "Kartezyen çarpım iki tablodaki kayıtların tüm olası eşleşmelerini üretir."
  },

  {
    q: "Union işlemi ne yapar?",
    t: "mcq",
    o: [
      "Tabloyu siler",
      "Tek kaydı günceller",
      "Sadece indeks oluşturur",
      "View tanımını gizler",
      "İki sorgu sonucunu birleştirir"
    ],
    a: 4,
    difficulty: "medium",
    week: 4,
    topic: "UNION",
    importance: 5,
    explanation: "UNION, uyumlu iki SELECT sonucunu birleştirir."
  },

  {
    q: "Intersection işlemi neyi bulur?",
    t: "mcq",
    o: [
      "İki kümedeki ortak satırları",
      "Sadece ilk satırı",
      "Tüm olası kombinasyonları",
      "Birincil anahtarı silmeyi",
      "Tabloyu yedeklemeyi"
    ],
    a: 0,
    difficulty: "medium",
    week: 4,
    topic: "Intersection",
    importance: 4,
    explanation: "Intersection, iki sonuç kümesinde ortak bulunan kayıtları verir."
  },

  {
    q: "Difference işlemi neyi döndürür?",
    t: "mcq",
    o: [
      "Ortak kayıtları",
      "Bir tabloda olup diğerinde olmayan kayıtları",
      "Tüm kayıt kombinasyonlarını",
      "Sadece sütun adlarını",
      "Yedek dosyasını"
    ],
    a: 1,
    difficulty: "medium",
    week: 4,
    topic: "Difference",
    importance: 4,
    explanation: "Difference, ilk kümede olup ikinci kümede bulunmayan kayıtları verir."
  },

  {
    q: "Normalizasyonun ana amacı hangisidir?",
    t: "mcq",
    o: [
      "Tüm tabloları silmek",
      "Sorgu yazmayı yasaklamak",
      "Veri tekrarını azaltmak",
      "Primary Key kaldırmak",
      "SQL Server kurmak"
    ],
    a: 2,
    difficulty: "medium",
    week: 4,
    topic: "Normalizasyon",
    importance: 5,
    explanation: "Normalizasyon, veri tekrarını azaltır ve veritabanı yapısını daha tutarlı hale getirir."
  },

  {
    q: "İlişkisel veritabanında veri bütünlüğünü en çok hangi yapılar destekler?",
    t: "mcq",
    o: [
      "Renkler ve fontlar",
      "Dosya uzantıları",
      "Yazıcı ayarları",
      "Primary Key ve Foreign Key",
      "Sadece ekran kartı"
    ],
    a: 3,
    difficulty: "easy",
    week: 4,
    topic: "Veri Bütünlüğü",
    importance: 5,
    explanation: "Primary Key ve Foreign Key tablolar arası bütünlüğü ve benzersizliği korur."
  },

  {
    q: "Bağıntı (relation) ilişkisel modelde en çok neyi ifade eder?",
    t: "mcq",
    o: [
      "Sunucu donanımını",
      "Yedek dosyasını",
      "Şifreleme anahtarını",
      "İşletim sistemi sürecini",
      "Tabloyu"
    ],
    a: 4,
    difficulty: "medium",
    week: 4,
    topic: "Relation",
    importance: 4,
    explanation: "İlişkisel modelde relation çoğunlukla tablo kavramına karşılık gelir."
  },

  // =========================================================
  // ==== 6. HAFTA – SQL DML, SELECT, JOIN, GROUP BY (20) ======
  // =========================================================

  {
    q: "Tabloya yeni kayıt ekleyen komut hangisidir?",
    t: "mcq",
    o: [
      "INSERT",
      "UPDATE",
      "DELETE",
      "DROP",
      "SELECT"
    ],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "INSERT",
    importance: 5,
    explanation: "INSERT tabloya yeni kayıt eklemek için kullanılır."
  },

  {
    q: "Mevcut veriyi değiştiren SQL komutu hangisidir?",
    t: "mcq",
    o: [
      "CREATE",
      "UPDATE",
      "SELECT",
      "DROP",
      "BACKUP"
    ],
    a: 1,
    difficulty: "easy",
    week: 6,
    topic: "UPDATE",
    importance: 5,
    explanation: "UPDATE mevcut kayıtların değerlerini değiştirmek için kullanılır."
  },

  {
    q: "Belirli kaydı silmek için hangi komut kullanılır?",
    t: "mcq",
    o: [
      "INSERT",
      "SELECT",
      "DELETE",
      "CREATE",
      "ALTER"
    ],
    a: 2,
    difficulty: "easy",
    week: 6,
    topic: "DELETE",
    importance: 5,
    explanation: "DELETE FROM tablo WHERE koşul; belirli kayıtları siler."
  },

  {
    q: "SELECT * FROM Ogrenci; sorgusu ne yapar?",
    t: "mcq",
    o: [
      "Tabloyu siler",
      "Yeni kayıt ekler",
      "Veriyi günceller",
      "Ogrenci tablosundaki tüm alanları listeler",
      "Veritabanını yedekler"
    ],
    a: 3,
    difficulty: "easy",
    week: 6,
    topic: "SELECT",
    importance: 5,
    explanation: "SELECT * tablodaki tüm sütunları getirir."
  },

  {
    q: "UPDATE Ogrenci SET notu = 100; sorgusunda WHERE yoksa ne olur?",
    t: "mcq",
    o: [
      "Sadece ilk kayıt güncellenir",
      "Hiçbir kayıt etkilenmez",
      "Sorgu SELECT'e dönüşür",
      "Tablo silinir",
      "Tüm kayıtların notu 100 olur"
    ],
    a: 4,
    difficulty: "medium",
    week: 6,
    topic: "UPDATE WHERE",
    importance: 5,
    explanation: "UPDATE sorgusunda WHERE yoksa tablodaki tüm kayıtlar etkilenebilir."
  },

  {
    q: "DELETE FROM Ogrenci WHERE id = 5; sorgusu ne yapar?",
    t: "mcq",
    o: [
      "id'si 5 olan kaydı siler",
      "Tüm tabloyu siler",
      "Yeni kayıt ekler",
      "Veritabanını kapatır",
      "id alanını değiştirir"
    ],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "DELETE",
    importance: 5,
    explanation: "WHERE id = 5 koşulu nedeniyle sadece id değeri 5 olan kayıt silinir."
  },

  {
    q: "Notu 50'den küçük öğrencileri listelemek için hangi koşul kullanılır?",
    t: "mcq",
    o: [
      "WHERE not > 50",
      "WHERE not < 50",
      "WHERE not = NULL",
      "GROUP BY not",
      "ORDER BY id"
    ],
    a: 1,
    difficulty: "easy",
    week: 6,
    topic: "WHERE",
    importance: 5,
    explanation: "50'den küçük değerler için WHERE not < 50 koşulu kullanılır."
  },

  {
    q: "DROP TABLE Ogrenci; komutu ne yapar?",
    t: "mcq",
    o: [
      "Sadece kayıt ekler",
      "Sadece kayıt günceller",
      "Ogrenci tablosunu yapısıyla birlikte siler",
      "Tüm kayıtları listeler",
      "Sadece tabloyu yedekler"
    ],
    a: 2,
    difficulty: "medium",
    week: 6,
    topic: "DROP TABLE",
    importance: 5,
    explanation: "DROP TABLE, tabloyu veritabanından tamamen kaldırır."
  },

  {
    q: "SELECT TOP 5 * FROM Urunler; sorgusu ne yapar?",
    t: "mcq",
    o: [
      "Tüm ürünleri siler",
      "Ürün tablosunu oluşturur",
      "Ürün adını değiştirir",
      "İlk 5 kaydı listeler",
      "5 yeni kayıt ekler"
    ],
    a: 3,
    difficulty: "medium",
    week: 6,
    topic: "TOP",
    importance: 4,
    explanation: "TOP, SQL Server'da sonuç kümesinden belirli sayıda kayıt almak için kullanılır."
  },

  {
    q: "MySQL'de sonuç sayısını sınırlamak için hangi ifade kullanılır?",
    t: "mcq",
    o: [
      "TOP",
      "FIRST",
      "ONLY",
      "TAKE",
      "LIMIT"
    ],
    a: 4,
    difficulty: "medium",
    week: 6,
    topic: "LIMIT",
    importance: 4,
    explanation: "MySQL'de LIMIT, dönecek kayıt sayısını sınırlar."
  },

  {
    q: "COUNT(*) fonksiyonu ne yapar?",
    t: "mcq",
    o: [
      "Kayıt sayısını hesaplar",
      "Metni büyütür",
      "Tarih ekler",
      "Tabloyu siler",
      "Veritabanını yedekler"
    ],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "COUNT",
    importance: 5,
    explanation: "COUNT, kayıt sayısını hesaplamak için kullanılır."
  },

  {
    q: "AVG(maas) fonksiyonu neyi hesaplar?",
    t: "mcq",
    o: [
      "Maaş toplamını",
      "Maaş ortalamasını",
      "En yüksek maaşı",
      "En düşük maaşı",
      "Kayıt tarihini"
    ],
    a: 1,
    difficulty: "easy",
    week: 6,
    topic: "AVG",
    importance: 5,
    explanation: "AVG, sayısal bir alanın ortalama değerini hesaplar."
  },

  {
    q: "SUM(StokAdedi) ne işe yarar?",
    t: "mcq",
    o: [
      "Stok adını değiştirir",
      "Stok kayıtlarını siler",
      "Stok adetlerinin toplamını hesaplar",
      "Stok tablosunu oluşturur",
      "Stok alanını NULL yapar"
    ],
    a: 2,
    difficulty: "easy",
    week: 6,
    topic: "SUM",
    importance: 5,
    explanation: "SUM, sayısal değerleri toplamak için kullanılır."
  },

  {
    q: "GROUP BY hangi amaçla kullanılır?",
    t: "mcq",
    o: [
      "Tabloyu silmek",
      "Yeni kayıt eklemek",
      "Veritabanını kapatmak",
      "Kayıtları belirli alana göre gruplamak",
      "Sadece şifre değiştirmek"
    ],
    a: 3,
    difficulty: "medium",
    week: 6,
    topic: "GROUP BY",
    importance: 5,
    explanation: "GROUP BY, kayıtları belirli alanlara göre gruplayıp aggregate fonksiyonlarla analiz yapmayı sağlar."
  },

  {
    q: "HAVING ne zaman kullanılır?",
    t: "mcq",
    o: [
      "Tablo oluştururken",
      "Kayıt eklerken",
      "Veritabanı silerken",
      "Sadece string küçültürken",
      "GROUP BY sonrası grupları filtrelerken"
    ],
    a: 4,
    difficulty: "medium",
    week: 6,
    topic: "HAVING",
    importance: 5,
    explanation: "HAVING, gruplama sonrası aggregate sonuçlara koşul uygulamak için kullanılır."
  },

  {
    q: "WHERE ile HAVING arasındaki en doğru fark hangisidir?",
    t: "mcq",
    o: [
      "WHERE satırları, HAVING grupları filtreler",
      "WHERE sadece tablo siler",
      "HAVING sadece kayıt ekler",
      "İkisi tamamen aynıdır",
      "WHERE sadece view oluşturur"
    ],
    a: 0,
    difficulty: "medium",
    week: 6,
    topic: "WHERE-HAVING",
    importance: 5,
    explanation: "WHERE gruplama öncesi satırları, HAVING gruplama sonrası grupları filtreler."
  },

  {
    q: "INNER JOIN hangi kayıtları getirir?",
    t: "mcq",
    o: [
      "Sadece sol tablodaki tüm kayıtları",
      "İki tabloda eşleşen kayıtları",
      "Sadece sağ tablodaki tüm kayıtları",
      "Hiç eşleşmeyen kayıtları",
      "Tablo adlarını"
    ],
    a: 1,
    difficulty: "medium",
    week: 6,
    topic: "INNER JOIN",
    importance: 5,
    explanation: "INNER JOIN, iki tabloda join koşuluna uyan eşleşmiş kayıtları getirir."
  },

  {
    q: "LEFT JOIN için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Sadece sağ tablodaki kayıtları getirir",
      "Sadece ortak kayıtları getirir",
      "Sol tablodaki tüm kayıtları ve sağdan eşleşenleri getirir",
      "Tabloları siler",
      "Sadece indeks oluşturur"
    ],
    a: 2,
    difficulty: "medium",
    week: 6,
    topic: "LEFT JOIN",
    importance: 5,
    explanation: "LEFT JOIN, sol tabloyu korur; sağ tabloda eşleşme yoksa sağ taraf NULL olabilir."
  },

  {
    q: "AS anahtar kelimesi ne için kullanılır?",
    t: "mcq",
    o: [
      "Tablo silmek için",
      "Kayıt eklemek için",
      "Veritabanı kapatmak için",
      "Takma ad vermek için",
      "Primary Key kaldırmak için"
    ],
    a: 3,
    difficulty: "easy",
    week: 6,
    topic: "Alias",
    importance: 4,
    explanation: "AS, sütun veya tabloya takma ad vermek için kullanılır."
  },

  {
    q: "UNION kullanırken dikkat edilmesi gereken temel şart nedir?",
    t: "mcq",
    o: [
      "Sorgular mutlaka DELETE olmalıdır",
      "Her sorgu farklı veritabanında olmalıdır",
      "Tüm alanlar PRIMARY KEY olmalıdır",
      "Sadece tek tablo kullanılmalıdır",
      "SELECT sonuçlarının sütun yapıları uyumlu olmalıdır"
    ],
    a: 4,
    difficulty: "hard",
    week: 6,
    topic: "UNION",
    importance: 4,
    explanation: "UNION ile birleştirilecek SELECT sorgularında sütun sayısı ve türleri uyumlu olmalıdır."
  },

  // =========================================================
  // ==== 7-8. HAFTA – SQL Server ve SSMS (10) ================
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
    q: "SQL Server hangi tür sistemdir?",
    t: "mcq",
    o: [
      "Grafik tasarım aracı",
      "İlişkisel veritabanı yönetim sistemi",
      "Mobil işletim sistemi",
      "Web tarayıcısı",
      "Dosya sıkıştırma programı"
    ],
    a: 1,
    difficulty: "easy",
    week: 7,
    topic: "SQL Server",
    importance: 5,
    explanation: "SQL Server veri yönetimi, işlem, analiz, güvenlik ve yedekleme için kullanılan RDBMS sistemidir."
  },

  {
    q: "SQL Server'ın özel sorgu dili hangisidir?",
    t: "mcq",
    o: [
      "PL/SQL",
      "MySQL SQL",
      "T-SQL",
      "SQLite SQL",
      "BigQuery SQL"
    ],
    a: 2,
    difficulty: "easy",
    week: 7,
    topic: "T-SQL",
    importance: 5,
    explanation: "SQL Server, Transact-SQL yani T-SQL kullanır."
  },

  {
    q: "SSMS ne için kullanılır?",
    t: "mcq",
    o: [
      "Mobil oyun yapmak için",
      "Video düzenlemek için",
      "Resim çizmek için",
      "SQL Server yönetmek ve sorgu çalıştırmak için",
      "Ağ kablosu test etmek için"
    ],
    a: 3,
    difficulty: "easy",
    week: 7,
    topic: "SSMS",
    importance: 5,
    explanation: "SSMS, SQL Server veritabanlarını yönetmek ve T-SQL sorguları çalıştırmak için kullanılan grafiksel araçtır."
  },

  {
    q: "SQL Server Express Edition için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Sadece büyük bankalar içindir",
      "Tamamen sınırsız kurumsal sürümdür",
      "Yalnızca bulut sistemidir",
      "Sadece Oracle ile çalışır",
      "Ücretsiz ve sınırlı özellikli sürümdür"
    ],
    a: 4,
    difficulty: "medium",
    week: 7,
    topic: "SQL Server Sürümleri",
    importance: 4,
    explanation: "Express Edition ücretsizdir; küçük işletmeler ve geliştiriciler için sınırlı özelliklerle sunulur."
  },

  {
    q: "SQL Server Enterprise Edition hangi kullanım için uygundur?",
    t: "mcq",
    o: [
      "Büyük işletmeler ve gelişmiş ölçeklenebilirlik için",
      "Sadece öğrencilerin not defteri için",
      "Sadece metin editörü olarak",
      "Yalnızca dosya sıkıştırmak için",
      "Sadece offline resim düzenlemek için"
    ],
    a: 0,
    difficulty: "medium",
    week: 7,
    topic: "SQL Server Sürümleri",
    importance: 4,
    explanation: "Enterprise Edition büyük işletmelere yönelik gelişmiş güvenlik, analiz ve ölçeklenebilirlik özellikleri sunar."
  },

  {
    q: "SQL Server Developer Edition ne amaçla kullanılır?",
    t: "mcq",
    o: [
      "Son kullanıcı muhasebesi",
      "Geliştirme ve test",
      "Sadece web hosting",
      "Sadece backup dosyası açma",
      "Mobil uygulama yayınlama"
    ],
    a: 1,
    difficulty: "medium",
    week: 7,
    topic: "Developer Edition",
    importance: 4,
    explanation: "Developer Edition, geliştirme ve test amaçlı kullanılır; üretim ortamı için tasarlanmamıştır."
  },

  {
    q: "ALTER DATABASE komutu ne için kullanılır?",
    t: "mcq",
    o: [
      "Yeni kayıt eklemek için",
      "Tablo sorgulamak için",
      "Var olan veritabanını değiştirmek için",
      "Sadece kayıt silmek için",
      "View tanımını gizlemek için"
    ],
    a: 2,
    difficulty: "medium",
    week: 8,
    topic: "ALTER DATABASE",
    importance: 5,
    explanation: "ALTER DATABASE, mevcut bir veritabanının ayarlarını veya özelliklerini değiştirmek için kullanılır."
  },

  {
    q: "DROP DATABASE komutu ne yapar?",
    t: "mcq",
    o: [
      "Veritabanı yedeği alır",
      "Yeni veritabanı oluşturur",
      "Sorgu sonucunu sıralar",
      "Veritabanını siler",
      "Kayıt ekler"
    ],
    a: 3,
    difficulty: "medium",
    week: 8,
    topic: "DROP DATABASE",
    importance: 5,
    explanation: "DROP DATABASE veritabanını siler; silmeden önce bağlantıların sonlandırılması gerekebilir."
  },

  {
    q: "BACKUP DATABASE komutu hangi amaçla kullanılır?",
    t: "mcq",
    o: [
      "Tablo silmek",
      "Kayıt güncellemek",
      "View oluşturmak",
      "Trigger kapatmak",
      "Veritabanını yedeklemek"
    ],
    a: 4,
    difficulty: "medium",
    week: 8,
    topic: "Backup",
    importance: 5,
    explanation: "BACKUP DATABASE veri kaybına karşı veritabanı yedeği almak için kullanılır."
  },

  // =========================================================
  // ==== 10. HAFTA – T-SQL, Operatörler ve Fonksiyonlar (15) =
  // =========================================================

  {
    q: "T-SQL açılımı nedir?",
    t: "mcq",
    o: [
      "Transact-SQL",
      "Table-SQL",
      "Temporary-SQL",
      "Text-SQL",
      "Trigger-SQL"
    ],
    a: 0,
    difficulty: "easy",
    week: 10,
    topic: "T-SQL",
    importance: 5,
    explanation: "T-SQL, Transact-SQL anlamına gelir."
  },

  {
    q: "T-SQL hangi sisteme özgü SQL uzantısıdır?",
    t: "mcq",
    o: [
      "Oracle",
      "Microsoft SQL Server",
      "MySQL",
      "SQLite",
      "MongoDB"
    ],
    a: 1,
    difficulty: "easy",
    week: 10,
    topic: "T-SQL",
    importance: 5,
    explanation: "T-SQL, Microsoft SQL Server için geliştirilmiş SQL uzantısıdır."
  },

  {
    q: "MERGE komutunun temel amacı nedir?",
    t: "mcq",
    o: [
      "Sadece tablo silmek",
      "Sadece veri listelemek",
      "Koşula göre ekleme veya güncelleme yapmak",
      "View şifrelemek",
      "Veritabanını yedeklemek"
    ],
    a: 2,
    difficulty: "hard",
    week: 10,
    topic: "MERGE",
    importance: 4,
    explanation: "MERGE eşleşme varsa UPDATE, yoksa INSERT gibi koşullu veri işlemlerinde kullanılır."
  },

  {
    q: "BETWEEN operatörü ne için kullanılır?",
    t: "mcq",
    o: [
      "Tabloyu silmek için",
      "Metni büyütmek için",
      "Sadece yedek almak için",
      "Aralık sorgusu yapmak için",
      "Primary Key oluşturmak için"
    ],
    a: 3,
    difficulty: "easy",
    week: 10,
    topic: "BETWEEN",
    importance: 5,
    explanation: "BETWEEN iki değer arasındaki kayıtları seçmek için kullanılır."
  },

  {
    q: "IN operatörü neyi kontrol eder?",
    t: "mcq",
    o: [
      "Metnin uzunluğunu",
      "Tablonun varlığını",
      "Veritabanı adını",
      "Tarihin yılını",
      "Değerin belirtilen kümede olup olmadığını"
    ],
    a: 4,
    difficulty: "easy",
    week: 10,
    topic: "IN",
    importance: 5,
    explanation: "IN, bir alan değerinin verilen değerler listesinde olup olmadığını kontrol eder."
  },

  {
    q: "LIKE 'A%' ifadesi hangi kayıtları getirir?",
    t: "mcq",
    o: [
      "A ile başlayanları",
      "A ile bitenleri",
      "İçinde A olmayanları",
      "Sadece boş değerleri",
      "Tüm sayısal değerleri"
    ],
    a: 0,
    difficulty: "easy",
    week: 10,
    topic: "LIKE",
    importance: 5,
    explanation: "LIKE 'A%' ifadesi A harfiyle başlayan metinleri seçer."
  },

  {
    q: "LIKE '%e' ifadesi hangi kayıtları getirir?",
    t: "mcq",
    o: [
      "e ile başlayanları",
      "e ile bitenleri",
      "İçinde e olmayanları",
      "Sadece NULL değerleri",
      "Sadece sayıları"
    ],
    a: 1,
    difficulty: "easy",
    week: 10,
    topic: "LIKE",
    importance: 5,
    explanation: "LIKE '%e' ifadesi e harfiyle biten değerleri getirir."
  },

  {
    q: "LEN('Anıl Kuş') fonksiyonu ne döndürür?",
    t: "mcq",
    o: [
      "Metni büyütür",
      "Metni küçültür",
      "Metnin karakter uzunluğunu",
      "Bugünün tarihini",
      "Tablo sayısını"
    ],
    a: 2,
    difficulty: "easy",
    week: 10,
    topic: "LEN",
    importance: 4,
    explanation: "LEN, verilen metnin uzunluğunu döndürür."
  },

  {
    q: "LOWER('ANIL') sonucu nedir?",
    t: "mcq",
    o: [
      "ANIL",
      "Anil",
      "NULL",
      "anil",
      "4"
    ],
    a: 3,
    difficulty: "easy",
    week: 10,
    topic: "LOWER",
    importance: 4,
    explanation: "LOWER fonksiyonu metni küçük harfe dönüştürür."
  },

  {
    q: "UPPER('anıl') fonksiyonu ne yapar?",
    t: "mcq",
    o: [
      "Metni siler",
      "Metni küçültür",
      "Metni sayıya çevirir",
      "Metni tarihe çevirir",
      "Metni büyük harfe çevirir"
    ],
    a: 4,
    difficulty: "easy",
    week: 10,
    topic: "UPPER",
    importance: 4,
    explanation: "UPPER, metni büyük harfe dönüştürür."
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
    explanation: "LEFT, metnin solundan belirtilen sayıda karakter alır."
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
    explanation: "RIGHT, metnin sağından belirtilen sayıda karakter alır."
  },

  {
    q: "SUBSTRING('Merhaba', 2, 3) ne yapar?",
    t: "mcq",
    o: [
      "Tabloyu siler",
      "Metni büyütür",
      "Metnin belirli bölümünü alır",
      "Tarihi döndürür",
      "Kayıt sayar"
    ],
    a: 2,
    difficulty: "medium",
    week: 10,
    topic: "SUBSTRING",
    importance: 4,
    explanation: "SUBSTRING, metinden belirli başlangıç noktasından belirli uzunlukta parça alır."
  },

  {
    q: "GETDATE() fonksiyonu ne döndürür?",
    t: "mcq",
    o: [
      "Tablo adını",
      "Kullanıcı adını",
      "En düşük değeri",
      "Geçerli tarih ve saati",
      "Kayıt sayısını"
    ],
    a: 3,
    difficulty: "easy",
    week: 10,
    topic: "GETDATE",
    importance: 5,
    explanation: "GETDATE, SQL Server'da mevcut tarih ve saat bilgisini döndürür."
  },

  {
    q: "DATEADD(DAY, 7, GETDATE()) ne yapar?",
    t: "mcq",
    o: [
      "Bugünden 7 gün öncesini verir",
      "Tabloyu siler",
      "Sadece ay bilgisini verir",
      "Kayıt ekler",
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
  // ==== 12-13. HAFTA – SQL Türleri, View, Trigger (15) ======
  // =========================================================

  {
    q: "Standard SQL hangi temele dayanır?",
    t: "mcq",
    o: [
      "ANSI/ISO standardına",
      "Sadece Microsoft'a",
      "Sadece Oracle'a",
      "Sadece MySQL'e",
      "Sadece SQLite'a"
    ],
    a: 0,
    difficulty: "easy",
    week: 12,
    topic: "Standard SQL",
    importance: 5,
    explanation: "Standard SQL, ANSI/ISO standardı olarak temel SQL komutlarını kapsar."
  },

  {
    q: "PL/SQL hangi veritabanı ile ilişkilidir?",
    t: "mcq",
    o: [
      "SQL Server",
      "Oracle Database",
      "PostgreSQL",
      "MySQL",
      "SQLite"
    ],
    a: 1,
    difficulty: "easy",
    week: 12,
    topic: "PL/SQL",
    importance: 5,
    explanation: "PL/SQL, Oracle Database için geliştirilmiş prosedürel SQL dilidir."
  },

  {
    q: "PL/pgSQL hangi sisteme aittir?",
    t: "mcq",
    o: [
      "Oracle",
      "SQL Server",
      "PostgreSQL",
      "MySQL",
      "Snowflake"
    ],
    a: 2,
    difficulty: "easy",
    week: 12,
    topic: "PL/pgSQL",
    importance: 5,
    explanation: "PL/pgSQL, PostgreSQL'e özel prosedürel SQL dilidir."
  },

  {
    q: "MySQL SQL için öne çıkan özellik hangisidir?",
    t: "mcq",
    o: [
      "TRY...CATCH",
      "WITH SCHEMABINDING",
      "Oracle Package",
      "AUTO_INCREMENT",
      "T-SQL TOP"
    ],
    a: 3,
    difficulty: "medium",
    week: 12,
    topic: "MySQL SQL",
    importance: 5,
    explanation: "MySQL'de AUTO_INCREMENT, LIMIT ve REPLACE INTO gibi özellikler öne çıkar."
  },

  {
    q: "SQLite için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Sadece büyük veri ambarıdır",
      "Sadece SQL Server içinde çalışır",
      "Oracle prosedür dilidir",
      "Sadece bulut sistemidir",
      "Gömülü ve küçük sistemler için uygundur"
    ],
    a: 4,
    difficulty: "medium",
    week: 12,
    topic: "SQLite",
    importance: 4,
    explanation: "SQLite, gömülü ve hafif yapısıyla küçük sistemler için uygundur."
  },

  {
    q: "View en kısa tanımıyla nedir?",
    t: "mcq",
    o: [
      "SELECT sorgusuna dayalı sanal tablo",
      "Fiziksel yedek dosyası",
      "Sunucu donanımı",
      "Primary Key türü",
      "Veri tipi"
    ],
    a: 0,
    difficulty: "easy",
    week: 12,
    topic: "View",
    importance: 5,
    explanation: "View fiziksel olarak veri tutmaz; bir SELECT sorgusunun sonucunu tablo gibi gösterir."
  },

  {
    q: "View kullanım amaçlarından biri hangisidir?",
    t: "mcq",
    o: [
      "Tabloyu zorla silmek",
      "Karmaşık sorguları sadeleştirmek",
      "Veritabanını kapatmak",
      "RAM'i temizlemek",
      "SQL'i engellemek"
    ],
    a: 1,
    difficulty: "easy",
    week: 12,
    topic: "View Kullanımı",
    importance: 5,
    explanation: "View karmaşık sorguları tek isim altında sadeleştirebilir."
  },

  {
    q: "WITH CHECK OPTION neyi sağlar?",
    t: "mcq",
    o: [
      "View tanımını gizler",
      "Tabloyu siler",
      "View koşuluna uymayan INSERT/UPDATE işlemini engeller",
      "Veritabanını yedekler",
      "Sadece kayıt sayar"
    ],
    a: 2,
    difficulty: "medium",
    week: 12,
    topic: "WITH CHECK OPTION",
    importance: 5,
    explanation: "WITH CHECK OPTION, görünüm koşullarının dışına çıkan veri ekleme/güncelleme işlemlerini engeller."
  },

  {
    q: "WITH ENCRYPTION ne işe yarar?",
    t: "mcq",
    o: [
      "View koşulu kontrol eder",
      "Foreign Key oluşturur",
      "Stok artırır",
      "View tanımını gizler",
      "Tablo ilişkisi kurar"
    ],
    a: 3,
    difficulty: "medium",
    week: 12,
    topic: "WITH ENCRYPTION",
    importance: 5,
    explanation: "WITH ENCRYPTION, SQL Server'da view tanımının görüntülenmesini engeller."
  },

  {
    q: "WITH SCHEMABINDING neyi korur?",
    t: "mcq",
    o: [
      "Kullanıcı şifresini",
      "Yedek dosyasını",
      "Rapor çıktısını",
      "Veri tabanı adını",
      "View'in bağlı olduğu tablo yapısını"
    ],
    a: 4,
    difficulty: "medium",
    week: 12,
    topic: "WITH SCHEMABINDING",
    importance: 5,
    explanation: "SCHEMABINDING, view'in bağlı olduğu tabloda yapısal değişiklik yapılmasını engelleyebilir."
  },

  {
    q: "WITH ENCRYPTION ve WITH SCHEMABINDING hangi platformda desteklenir?",
    t: "mcq",
    o: [
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "Oracle",
      "SQLite"
    ],
    a: 0,
    difficulty: "hard",
    week: 13,
    topic: "View Karşılaştırması",
    importance: 5,
    explanation: "PDF'ye göre bu iki özellik SQL Server / T-SQL tarafında desteklenir."
  },

  {
    q: "WITH CHECK OPTION hangi sistemlerde desteklenir?",
    t: "mcq",
    o: [
      "Sadece Oracle",
      "SQL Server, MySQL ve PostgreSQL",
      "Sadece SQLite",
      "Sadece MongoDB",
      "Sadece Excel"
    ],
    a: 1,
    difficulty: "hard",
    week: 13,
    topic: "WITH CHECK OPTION",
    importance: 5,
    explanation: "Ders notunda WITH CHECK OPTION'ın SQL Server, MySQL ve PostgreSQL tarafından desteklendiği belirtilir."
  },

  {
    q: "PostgreSQL'de trigger oluşturma sırası genelde nasıldır?",
    t: "mcq",
    o: [
      "Önce tablo silinir",
      "Önce view şifrelenir",
      "Önce fonksiyon, sonra trigger oluşturulur",
      "Sadece SELECT yazılır",
      "Önce backup alınır"
    ],
    a: 2,
    difficulty: "hard",
    week: 13,
    topic: "PostgreSQL Trigger",
    importance: 5,
    explanation: "PostgreSQL'de trigger için önce trigger fonksiyonu, ardından CREATE TRIGGER tanımı yapılır."
  },

  {
    q: "Trigger'ın temel mantığı nedir?",
    t: "mcq",
    o: [
      "Sadece veri listelemek",
      "Sadece tablo adını değiştirmek",
      "Sadece yedek dosyası almak",
      "Belirli olay gerçekleşince otomatik işlem çalıştırmak",
      "Sadece view tanımını gizlemek"
    ],
    a: 3,
    difficulty: "medium",
    week: 13,
    topic: "Trigger",
    importance: 5,
    explanation: "Trigger, INSERT/UPDATE/DELETE gibi olaylar olduğunda otomatik çalışan veritabanı nesnesidir."
  },

  {
    q: "SQL Server trigger içinde inserted tablosu neyi temsil eder?",
    t: "mcq",
    o: [
      "Eski değerleri",
      "Silinen tabloyu",
      "Yedek dosyasını",
      "View koşulunu",
      "Yeni değerleri"
    ],
    a: 4,
    difficulty: "hard",
    week: 13,
    topic: "inserted",
    importance: 5,
    explanation: "inserted, INSERT veya UPDATE sonrası oluşan yeni değerleri temsil eder."
  },

  // =========================================================
  // ==== 14. HAFTA – Kütüphane Otomasyon Projesi (10) ========
  // =========================================================

  {
    q: "Kütüphane otomasyon projesinde kullanılan VTYS hangisidir?",
    t: "mcq",
    o: [
      "MySQL",
      "MongoDB",
      "SQLite yalnızca",
      "Excel",
      "Access sadece form"
    ],
    a: 0,
    difficulty: "easy",
    week: 14,
    topic: "Kütüphane Otomasyonu",
    importance: 5,
    explanation: "14. hafta projesi MySQL versiyonu olarak verilmiştir."
  },

  {
    q: "Kütüphane otomasyonundaki temel varlıklardan biri hangisidir?",
    t: "mcq",
    o: [
      "EkranKartı",
      "Kitaplar",
      "Bluetooth",
      "RenkPaleti",
      "SunucuLogo"
    ],
    a: 1,
    difficulty: "easy",
    week: 14,
    topic: "Entity",
    importance: 5,
    explanation: "Kitaplar, Üyeler ve Ödünç İşlemleri projenin temel varlıklarıdır."
  },

  {
    q: "Kitaplar tablosunda KitapID nasıl tanımlanmıştır?",
    t: "mcq",
    o: [
      "Sadece VARCHAR",
      "Foreign Key",
      "AUTO_INCREMENT PRIMARY KEY",
      "WITH CHECK OPTION",
      "View"
    ],
    a: 2,
    difficulty: "medium",
    week: 14,
    topic: "Kitaplar Tablosu",
    importance: 5,
    explanation: "KitapID, otomatik artan birincil anahtar olarak tanımlanır."
  },

  {
    q: "Uyeler tablosunda Eposta alanı hangi kısıta sahiptir?",
    t: "mcq",
    o: [
      "PRIMARY KEY",
      "FOREIGN KEY",
      "CHECK OPTION",
      "UNIQUE",
      "SCHEMABINDING"
    ],
    a: 3,
    difficulty: "medium",
    week: 14,
    topic: "Uyeler Tablosu",
    importance: 4,
    explanation: "Eposta alanı UNIQUE olduğu için aynı e-posta değeri tekrar edemez."
  },

  {
    q: "OduncIslemleri tablosunda KitapID hangi görevdedir?",
    t: "mcq",
    o: [
      "View adı",
      "Trigger adı",
      "Sadece metin açıklaması",
      "Backup dosyası",
      "Foreign Key"
    ],
    a: 4,
    difficulty: "medium",
    week: 14,
    topic: "Foreign Key",
    importance: 5,
    explanation: "OduncIslemleri.KitapID, Kitaplar.KitapID alanını referans alan Foreign Key'dir."
  },

  {
    q: "ON DELETE CASCADE ne anlama gelir?",
    t: "mcq",
    o: [
      "Ana kayıt silinirse bağlı kayıtların da silinmesi",
      "Kayıtların şifrelenmesi",
      "Sadece SELECT çalışması",
      "View koşulunun korunması",
      "Stok adedinin artması"
    ],
    a: 0,
    difficulty: "hard",
    week: 14,
    topic: "ON DELETE CASCADE",
    importance: 5,
    explanation: "ON DELETE CASCADE, parent kayıt silindiğinde child kayıtların da otomatik silinmesini sağlar."
  },

  {
    q: "OduncAl stored procedure ne yapar?",
    t: "mcq",
    o: [
      "Tüm üyeleri siler",
      "Ödünç kaydı ekler ve kitap stok adedini azaltır",
      "Sadece view tanımını gizler",
      "Veritabanını siler",
      "Kitap adlarını büyütür"
    ],
    a: 1,
    difficulty: "hard",
    week: 14,
    topic: "Stored Procedure",
    importance: 5,
    explanation: "OduncAl prosedürü stok varsa ödünç işlemi ekler ve ilgili kitabın stok adedini bir azaltır."
  },

  {
    q: "trg_IadeEdildi trigger'ı hangi durumda çalışır?",
    t: "mcq",
    o: [
      "Kitap eklendiğinde",
      "Üye silindiğinde",
      "IadeTarihi NULL'dan dolu değere değiştiğinde",
      "View oluşturulduğunda",
      "Backup alındığında"
    ],
    a: 2,
    difficulty: "hard",
    week: 14,
    topic: "Trigger",
    importance: 5,
    explanation: "Kitap iade edildiğinde IadeTarihi güncellenir; trigger ilgili kitabın StokAdedi değerini artırır."
  },

  {
    q: "AktifOduncIslemleriView hangi kayıtları gösterir?",
    t: "mcq",
    o: [
      "Silinmiş üyeleri",
      "Stokta olmayan kitapları",
      "Tüm üyeleri",
      "Henüz iade edilmemiş ödünç işlemlerini",
      "Tüm yedekleri"
    ],
    a: 3,
    difficulty: "medium",
    week: 14,
    topic: "View",
    importance: 5,
    explanation: "Bu view, IadeTarihi IS NULL olan yani henüz iade edilmemiş kitapları gösterir."
  },

  {
    q: "Stokta olan kitapları listelemek için hangi koşul kullanılır?",
    t: "mcq",
    o: [
      "StokAdedi = 0",
      "IadeTarihi IS NULL",
      "UyeID IS NULL",
      "ISBN IS NULL",
      "StokAdedi > 0"
    ],
    a: 4,
    difficulty: "easy",
    week: 14,
    topic: "SELECT Sorgusu",
    importance: 5,
    explanation: "Stokta bulunan kitapları görmek için StokAdedi > 0 koşulu kullanılır."
  }
];
