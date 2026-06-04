// Veritabanı Yönetim Sistemleri – Direkt Sınav Tarzı 30 Soru (MCQ)
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]
// Not: a = doğru şık index’i (0=A, 1=B, 2=C, 3=D, 4=E)

window.questionBank = [
  // =========================================================
  // ==== Direkt Sınav Soruları – SQL, T-SQL, View, Trigger ===
  // =========================================================

  {
    q: "INSERT INTO komutu ne için kullanılır?",
    t: "mcq",
    o: [
      "Tabloya yeni kayıt eklemek için",
      "Tablodaki kayıtları listelemek için",
      "Veritabanını silmek için",
      "View tanımını gizlemek için",
      "Kayıtları gruplamak için"
    ],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "INSERT",
    importance: 5,
    explanation: "INSERT INTO komutu tabloya yeni kayıt eklemek için kullanılır."
  },

  {
    q: "UPDATE ogrenci SET ad = 'Mehmet' WHERE id = 3; sorgusu ne yapar?",
    t: "mcq",
    o: [
      "Tüm öğrencileri siler",
      "id değeri 3 olan öğrencinin adını Mehmet yapar",
      "Yeni öğrenci ekler",
      "Tabloyu siler",
      "Sadece ad sütununu listeler"
    ],
    a: 1,
    difficulty: "easy",
    week: 6,
    topic: "UPDATE",
    importance: 5,
    explanation: "UPDATE mevcut kaydı değiştirir; WHERE id = 3 sadece ilgili kaydı hedefler."
  },

  {
    q: "DELETE FROM ogrenci; sorgusunda WHERE yoksa sonuç ne olur?",
    t: "mcq",
    o: [
      "Hiçbir kayıt silinmez",
      "Sadece ilk kayıt silinir",
      "Tablodaki tüm kayıtlar silinir",
      "Yeni kayıt eklenir",
      "Sadece tablo adı değişir"
    ],
    a: 2,
    difficulty: "medium",
    week: 6,
    topic: "DELETE",
    importance: 5,
    explanation: "DELETE sorgusunda WHERE kullanılmazsa tüm kayıtlar silinebilir."
  },

  {
    q: "SELECT ad, soyad FROM ogrenci; sorgusu ne getirir?",
    t: "mcq",
    o: [
      "Tüm tabloyu siler",
      "Yeni kayıt ekler",
      "Sadece id alanını getirir",
      "ad ve soyad sütunlarını getirir",
      "Veritabanını yedekler"
    ],
    a: 3,
    difficulty: "easy",
    week: 6,
    topic: "SELECT",
    importance: 5,
    explanation: "SELECT ad, soyad ifadesi yalnızca belirtilen sütunları listeler."
  },

  {
    q: "WHERE ifadesinin SQL'deki görevi nedir?",
    t: "mcq",
    o: [
      "Tabloyu silmek",
      "Yeni veritabanı oluşturmak",
      "Sadece sütun adı vermek",
      "View oluşturmak",
      "Koşul belirtmek"
    ],
    a: 4,
    difficulty: "easy",
    week: 6,
    topic: "WHERE",
    importance: 5,
    explanation: "WHERE, sorguda hangi kayıtların seçileceğini belirleyen koşul bölümüdür."
  },

  {
    q: "SELECT * FROM ogrenci WHERE not < 50; ne yapar?",
    t: "mcq",
    o: [
      "Notu 50'den küçük öğrencileri listeler",
      "Notu 50 olanları siler",
      "Tüm notları 50 yapar",
      "Yeni öğrenci ekler",
      "Sadece not sütununu siler"
    ],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "WHERE",
    importance: 5,
    explanation: "not < 50 koşulu, 50'nin altındaki kayıtları getirir."
  },

  {
    q: "LIKE 'A%' ifadesi ne anlama gelir?",
    t: "mcq",
    o: [
      "A ile biten kayıtlar",
      "A ile başlayan kayıtlar",
      "İçinde A olmayan kayıtlar",
      "Sadece boş kayıtlar",
      "Tüm kayıtlar"
    ],
    a: 1,
    difficulty: "easy",
    week: 10,
    topic: "LIKE",
    importance: 5,
    explanation: "'A%' ifadesinde yüzde işareti A'dan sonra geldiği için A ile başlayan değerler aranır."
  },

  {
    q: "LIKE '%e' ifadesi hangi kayıtları getirir?",
    t: "mcq",
    o: [
      "e ile başlayanları",
      "İçinde e olmayanları",
      "e ile bitenleri",
      "Sadece sayısal değerleri",
      "Tüm NULL kayıtları"
    ],
    a: 2,
    difficulty: "easy",
    week: 10,
    topic: "LIKE",
    importance: 5,
    explanation: "'%e' ifadesi e harfi ile biten metinleri getirir."
  },

  {
    q: "BETWEEN 18 AND 22 hangi amaçla kullanılır?",
    t: "mcq",
    o: [
      "Metni büyük harfe çevirmek için",
      "Kayıt silmek için",
      "Tablo oluşturmak için",
      "18 ile 22 arasındaki değerleri seçmek için",
      "View tanımını gizlemek için"
    ],
    a: 3,
    difficulty: "easy",
    week: 10,
    topic: "BETWEEN",
    importance: 5,
    explanation: "BETWEEN iki değer arasındaki aralığı sorgulamak için kullanılır."
  },

  {
    q: "IN (1, 3, 5) ifadesi neyi kontrol eder?",
    t: "mcq",
    o: [
      "Tablo adını",
      "Metin uzunluğunu",
      "Tarihin yılını",
      "Kayıt sayısını",
      "Değerin 1, 3 veya 5 içinde olup olmadığını"
    ],
    a: 4,
    difficulty: "easy",
    week: 10,
    topic: "IN",
    importance: 5,
    explanation: "IN operatörü, değerin verilen liste içinde bulunup bulunmadığını kontrol eder."
  },

  {
    q: "LEN('Anıl Kuş') fonksiyonu ne döndürür?",
    t: "mcq",
    o: [
      "Metnin karakter uzunluğunu",
      "Metni küçük harfe çevirir",
      "Metni büyük harfe çevirir",
      "Bugünün tarihini",
      "Kayıt sayısını"
    ],
    a: 0,
    difficulty: "easy",
    week: 10,
    topic: "LEN",
    importance: 4,
    explanation: "LEN fonksiyonu verilen metnin uzunluğunu döndürür."
  },

  {
    q: "LOWER('ANIL') sonucu hangisidir?",
    t: "mcq",
    o: [
      "ANIL",
      "anil",
      "Anil",
      "NULL",
      "4"
    ],
    a: 1,
    difficulty: "easy",
    week: 10,
    topic: "LOWER",
    importance: 4,
    explanation: "LOWER fonksiyonu metni küçük harfe dönüştürür."
  },

  {
    q: "UPPER('anil') sonucu hangisidir?",
    t: "mcq",
    o: [
      "anil",
      "Anil",
      "ANIL",
      "NULL",
      "4"
    ],
    a: 2,
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
      "aba",
      "erh",
      "Merhaba",
      "Mer",
      "3"
    ],
    a: 3,
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
      "Mer",
      "er",
      "ha",
      "ba"
    ],
    a: 4,
    difficulty: "medium",
    week: 10,
    topic: "RIGHT",
    importance: 4,
    explanation: "RIGHT metnin sağından belirtilen sayıda karakter alır; 'Merhaba' için son 2 karakter 'ba'dır."
  },

  {
    q: "GETDATE() fonksiyonu ne döndürür?",
    t: "mcq",
    o: [
      "Geçerli tarih ve saat bilgisini",
      "Sadece tablo adını",
      "Kayıt sayısını",
      "Metin uzunluğunu",
      "En büyük değeri"
    ],
    a: 0,
    difficulty: "easy",
    week: 10,
    topic: "GETDATE",
    importance: 5,
    explanation: "GETDATE(), sistemin o anki tarih ve saat bilgisini döndürür."
  },

  {
    q: "DATEADD(DAY, 7, GETDATE()) ne yapar?",
    t: "mcq",
    o: [
      "Bugünden 7 gün öncesini verir",
      "Bugüne 7 gün ekler",
      "Sadece yılı getirir",
      "Tüm tarihleri siler",
      "Kayıt sayısını verir"
    ],
    a: 1,
    difficulty: "medium",
    week: 10,
    topic: "DATEADD",
    importance: 4,
    explanation: "DATEADD belirtilen tarihe verilen miktarda zaman ekler."
  },

  {
    q: "COUNT(*) fonksiyonu ne işe yarar?",
    t: "mcq",
    o: [
      "Ortalama hesaplar",
      "Toplam alır",
      "Kayıt sayısını hesaplar",
      "Tabloyu siler",
      "Metni küçültür"
    ],
    a: 2,
    difficulty: "easy",
    week: 10,
    topic: "COUNT",
    importance: 5,
    explanation: "COUNT(*) sonuç kümesindeki kayıt sayısını verir."
  },

  {
    q: "AVG(StokAdedi) neyi hesaplar?",
    t: "mcq",
    o: [
      "Toplam stok",
      "En büyük stok",
      "En küçük stok",
      "Ortalama stok",
      "Kayıt silme"
    ],
    a: 3,
    difficulty: "easy",
    week: 14,
    topic: "AVG",
    importance: 5,
    explanation: "AVG sayısal değerlerin ortalamasını hesaplar."
  },

  {
    q: "GROUP BY YayinYili ne yapar?",
    t: "mcq",
    o: [
      "Yayın yılını siler",
      "Tüm kayıtları günceller",
      "Veritabanını yedekler",
      "Sadece ilk kaydı getirir",
      "Kayıtları yayın yılına göre gruplar"
    ],
    a: 4,
    difficulty: "medium",
    week: 14,
    topic: "GROUP BY",
    importance: 5,
    explanation: "GROUP BY, kayıtları belirtilen sütuna göre gruplar."
  },

  {
    q: "HAVING AVG(StokAdedi) > 2 ne yapar?",
    t: "mcq",
    o: [
      "Ortalama stok değeri 2'den büyük olan grupları getirir",
      "Tüm stokları 2 yapar",
      "Kitapları siler",
      "Yayın yılını değiştirir",
      "Yeni tablo oluşturur"
    ],
    a: 0,
    difficulty: "medium",
    week: 14,
    topic: "HAVING",
    importance: 5,
    explanation: "HAVING, GROUP BY sonrası oluşan grupları aggregate sonuca göre filtreler."
  },

  {
    q: "WHERE ile HAVING arasındaki fark nedir?",
    t: "mcq",
    o: [
      "İkisi tamamen aynıdır",
      "WHERE satırları, HAVING grupları filtreler",
      "WHERE sadece tablo siler",
      "HAVING sadece kayıt ekler",
      "WHERE sadece view oluşturur"
    ],
    a: 1,
    difficulty: "medium",
    week: 6,
    topic: "WHERE-HAVING",
    importance: 5,
    explanation: "WHERE gruplamadan önce satırları; HAVING gruplamadan sonra grupları filtreler."
  },

  {
    q: "INNER JOIN hangi kayıtları getirir?",
    t: "mcq",
    o: [
      "Sadece sol tablodaki tüm kayıtları",
      "Sadece sağ tablodaki tüm kayıtları",
      "İki tabloda eşleşen kayıtları",
      "Eşleşmeyen kayıtları",
      "Sadece NULL kayıtları"
    ],
    a: 2,
    difficulty: "medium",
    week: 6,
    topic: "INNER JOIN",
    importance: 5,
    explanation: "INNER JOIN sadece iki tabloda join koşuluna göre eşleşen kayıtları getirir."
  },

  {
    q: "LEFT JOIN neyi garanti eder?",
    t: "mcq",
    o: [
      "Sağ tablodaki tüm kayıtların gelmesini",
      "Sadece ortak kayıtların gelmesini",
      "Tüm tabloların silinmesini",
      "Sol tablodaki tüm kayıtların gelmesini",
      "Sadece en büyük değerin gelmesini"
    ],
    a: 3,
    difficulty: "medium",
    week: 6,
    topic: "LEFT JOIN",
    importance: 5,
    explanation: "LEFT JOIN sol tablodaki tüm kayıtları getirir; sağ tarafta eşleşme yoksa NULL dönebilir."
  },

  {
    q: "View en kısa tanımıyla nedir?",
    t: "mcq",
    o: [
      "Fiziksel yedek dosyası",
      "Birincil anahtar türü",
      "Trigger çeşidi",
      "Tabloyu silen komut",
      "SELECT sorgusuna dayalı sanal tablo"
    ],
    a: 4,
    difficulty: "easy",
    week: 12,
    topic: "View",
    importance: 5,
    explanation: "View, SELECT sorgusuna dayalı sanal tablodur."
  },

  {
    q: "WITH CHECK OPTION ne işe yarar?",
    t: "mcq",
    o: [
      "View koşuluna uymayan ekleme/güncellemeyi engeller",
      "View tanımını gizler",
      "Tabloyu siler",
      "Veritabanını yedekler",
      "Trigger çalıştırır"
    ],
    a: 0,
    difficulty: "medium",
    week: 12,
    topic: "WITH CHECK OPTION",
    importance: 5,
    explanation: "WITH CHECK OPTION, view koşulunu ihlal eden veri işlemlerini engeller."
  },

  {
    q: "WITH ENCRYPTION ne yapar?",
    t: "mcq",
    o: [
      "View koşulunu kontrol eder",
      "View tanımını gizler",
      "Stok artırır",
      "Kayıt sayar",
      "Foreign Key oluşturur"
    ],
    a: 1,
    difficulty: "medium",
    week: 12,
    topic: "WITH ENCRYPTION",
    importance: 5,
    explanation: "WITH ENCRYPTION, SQL Server'da view tanımının görüntülenmesini engeller."
  },

  {
    q: "Trigger'ın temel görevi nedir?",
    t: "mcq",
    o: [
      "Sadece veri listelemek",
      "Veritabanını kapatmak",
      "Belirli olayda otomatik işlem çalıştırmak",
      "Sadece alan adı değiştirmek",
      "Tabloyu manuel yedeklemek"
    ],
    a: 2,
    difficulty: "medium",
    week: 13,
    topic: "Trigger",
    importance: 5,
    explanation: "Trigger, INSERT/UPDATE/DELETE gibi olaylardan sonra veya önce otomatik çalışan yapıdır."
  },

  {
    q: "OduncAl stored procedure ne yapar?",
    t: "mcq",
    o: [
      "Tüm kitapları siler",
      "Sadece üyeleri listeler",
      "View oluşturur",
      "Ödünç kaydı ekler ve stok adedini azaltır",
      "Eposta alanını UNIQUE yapar"
    ],
    a: 3,
    difficulty: "hard",
    week: 14,
    topic: "Stored Procedure",
    importance: 5,
    explanation: "OduncAl prosedürü stok varsa ödünç işlemi ekler ve ilgili kitabın stok adedini 1 azaltır."
  },

  {
    q: "trg_IadeEdildi trigger'ı ne zaman stok artırır?",
    t: "mcq",
    o: [
      "Kitap ilk eklendiğinde",
      "Üye silindiğinde",
      "View sorgulandığında",
      "Kitap ödünç alındığında",
      "IadeTarihi NULL'dan dolu değere geçtiğinde"
    ],
    a: 4,
    difficulty: "hard",
    week: 14,
    topic: "Trigger",
    importance: 5,
    explanation: "İade tarihi dolduğunda kitap iade edilmiş kabul edilir ve stok otomatik artırılır."
  },

  {
    q: "AktifOduncIslemleriView hangi kayıtları gösterir?",
    t: "mcq",
    o: [
      "Henüz iade edilmemiş ödünç işlemlerini",
      "Tüm silinen kitapları",
      "Sadece stokta olmayan kitapları",
      "Tüm üyeleri",
      "Yedek dosyalarını"
    ],
    a: 0,
    difficulty: "medium",
    week: 14,
    topic: "View",
    importance: 5,
    explanation: "AktifOduncIslemleriView, IadeTarihi IS NULL olan yani henüz iade edilmemiş kayıtları gösterir."
  }
];
