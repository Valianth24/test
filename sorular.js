// Programlama Temelleri (1. Sınıf 1. Dönem) – 50 Soruluk Vize Soru Bankası (MCQ)
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]

window.questionBank = [
  // ==== 1. HAFTA – Programlama, Problem Çözme, Algoritma Temeli ====

  // 1
  {
    q: "Programlama en doğru tanımıyla aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Bilgisayara sadece oyun kurma işlemidir",
      "Bir problemi çözmek için bilgisayara adım adım komutlar yazma sürecidir",
      "Sadece internet bağlantısı kurmaktır",
      "Sadece tasarım (UI) yapmaktır",
      "Sadece donanım parçalarını birleştirmektir"
    ],
    a: "Bir problemi çözmek için bilgisayara adım adım komutlar yazma sürecidir",
    difficulty: "easy",
    week: 1,
    topic: "programlama tanımı",
    importance: "high",
    explanation:
      "Programlama = problem çözme + algoritma + kod. Taktik: Şıklarda 'sadece' geçenler genelde tuzaktır; programlama tek bir şeye indirgenmez."
  },

  // 2
  {
    q: "Algoritma aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Bir programlama dilinde yazılmış kod",
      "Sonlu adımlarla problemi çözen, sıralı çözüm planı",
      "Bilgisayarın işlemcisi",
      "İnternet tarayıcısı",
      "Sadece akış diyagramı çizimidir"
    ],
    a: "Sonlu adımlarla problemi çözen, sıralı çözüm planı",
    difficulty: "easy",
    week: 1,
    topic: "algoritma",
    importance: "high",
    explanation:
      "Algoritma = adım adım çözüm planı. Taktik: 'Sonlu' kelimesini ara; iyi algoritma mutlaka biter."
  },

  // 3
  {
    q: "Problem çözmede doğru sıra hangisidir?",
    t: "mcq",
    o: [
      "Kod yaz → problemi anla → test et",
      "Problemi anla → girdi/çıktı belirle → algoritma kur → kodla → test et",
      "Test et → kod yaz → problemi anla",
      "Algoritma çiz → internetten kopyala → çalıştır",
      "Sadece kod yazmak yeter"
    ],
    a: "Problemi anla → girdi/çıktı belirle → algoritma kur → kodla → test et",
    difficulty: "easy",
    week: 1,
    topic: "problem çözme adımları",
    importance: "high",
    explanation:
      "Önce problem netleşir, sonra çözüm adımları çıkar. Taktik: Vize sorularında 'girdi/çıktı' sorulursa önce bunları yaz; puan garanti."
  },

  // 4
  {
    q: "Program (program) ile algoritma ilişkisi için hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Algoritma, programın çalıştırılmış halidir",
      "Program, algoritmanın bir dilde kodlanmış halidir",
      "Program ve algoritma aynı şeydir",
      "Algoritma sadece bilgisayarda çalışır, program kağıtta yazılır",
      "Program sadece görseldir"
    ],
    a: "Program, algoritmanın bir dilde kodlanmış halidir",
    difficulty: "easy",
    week: 1,
    topic: "program vs algoritma",
    importance: "high",
    explanation:
      "Algoritma = plan, program = kod. Taktik: 'Plan mı kod mu?' diye sor: Plan = algoritma, Kod = program."
  },

  // 5
  {
    q: "Bir programlama dilinde yazım kuralları (syntax) bozulursa genelde ne olur?",
    t: "mcq",
    o: [
      "Program daha hızlı çalışır",
      "Program çalışmaz/derlenmez, yazım hatası oluşur",
      "Program sadece daha yavaş çalışır",
      "Ekran rengi değişir",
      "İnternet kesilir"
    ],
    a: "Program çalışmaz/derlenmez, yazım hatası oluşur",
    difficulty: "easy",
    week: 1,
    topic: "syntax",
    importance: "high",
    explanation:
      "Syntax error = dil kuralları bozuk → program başlamaz. Taktik: 'Çalışmıyor' = çoğu zaman syntax; 'çalışıyor ama yanlış' = logic."
  },

  // ==== 2. HAFTA – Algoritma Özellikleri, Pseudocode, Dry-Run ====

  // 6
  {
    q: "İyi bir algoritmanın temel özelliklerinden hangisi YANLIŞTIR?",
    t: "mcq",
    o: [
      "Sonlu adımda bitmelidir",
      "Adımlar net ve anlaşılır olmalıdır",
      "Her zaman rastgele sonuç üretmelidir",
      "Girdi alıp çıktı üretmelidir",
      "Adımlar sıralı olmalıdır"
    ],
    a: "Her zaman rastgele sonuç üretmelidir",
    difficulty: "medium",
    week: 2,
    topic: "algoritma özellikleri",
    importance: "high",
    explanation:
      "Algoritma deterministiktir: aynı girdi → aynı çıktı. Taktik: 'rastgele' gördün mü çoğu zaman yanlış şık."
  },

  // 7
  {
    q: "Pseudocode (sözde kod) nedir?",
    t: "mcq",
    o: [
      "Sadece makine dilidir",
      "Dil bağımsız, algoritmayı insan diline yakın anlatımdır",
      "Sadece HTML yazmaktır",
      "Sadece akış diyagramıdır",
      "Sadece yorum satırıdır"
    ],
    a: "Dil bağımsız, algoritmayı insan diline yakın anlatımdır",
    difficulty: "easy",
    week: 2,
    topic: "pseudocode",
    importance: "high",
    explanation:
      "Pseudocode, kod değil mantık anlatımıdır. Taktik: Sınavda pseudocode sorusu gelirse anahtar kelimeler: Oku, Yaz, Eğer, Döngü, Bitir."
  },

  // 8
  {
    q: "Girdi (input) ve çıktı (output) için doğru eşleştirme hangisidir?",
    t: "mcq",
    o: [
      "Girdi: sonuç, Çıktı: veri alma",
      "Girdi: dışarıdan alınan veri, Çıktı: üretilen sonuç",
      "Girdi: sadece sayı, Çıktı: sadece metin",
      "Girdi: RAM, Çıktı: CPU",
      "Girdi/çıktı aynı kavramdır"
    ],
    a: "Girdi: dışarıdan alınan veri, Çıktı: üretilen sonuç",
    difficulty: "easy",
    week: 2,
    topic: "input/output",
    importance: "high",
    explanation:
      "Input al, işlem yap, output ver. Taktik: Her algoritmada önce input satırlarını, en sona output satırlarını koy; düzen puan getirir."
  },

  // 9
  {
    q: "Dry-run (sağlama) tekniğinin amacı nedir?",
    t: "mcq",
    o: [
      "Kodu renklendirmek",
      "Değişkenlerin adım adım değerini takip ederek sonucu doğrulamak",
      "İnternetten kod indirmek",
      "CSS yazmak",
      "Bilgisayarı hızlandırmak"
    ],
    a: "Değişkenlerin adım adım değerini takip ederek sonucu doğrulamak",
    difficulty: "medium",
    week: 2,
    topic: "dry-run",
    importance: "high",
    explanation:
      "Dry-run = izleme tablosu. Taktik: Çıktı sorularında 3 sütun aç: 'adım', 'değişen değişken', 'yeni değer' — hata yapmazsın."
  },

  // 10
  {
    q: "Aşağıdakilerden hangisi karar (decision) adımına örnektir?",
    t: "mcq",
    o: [
      "x = x + 1",
      "Yazdır(x)",
      "Eğer x > 10 ise ... değilse ...",
      "Başla",
      "Bitir"
    ],
    a: "Eğer x > 10 ise ... değilse ...",
    difficulty: "easy",
    week: 2,
    topic: "decision",
    importance: "high",
    explanation:
      "Decision = koşul kontrolü. Taktik: 'Eğer / Eğer değilse' görürsen bu kesin karar yapısıdır."
  },

  // ==== 3. HAFTA – Akış Diyagramı Sembolleri ====

  // 11
  {
    q: "Akış diyagramında Başla/Bitir sembolü genellikle hangisidir?",
    t: "mcq",
    o: ["Dikdörtgen", "Elmas", "Paralelkenar", "Oval/Elips", "Üçgen"],
    a: "Oval/Elips",
    difficulty: "easy",
    week: 3,
    topic: "flowchart sembolleri",
    importance: "high",
    explanation:
      "Başla/Bitir = terminatör = oval. Taktik: 'O'val = 'O' başlangıç-bitiş diye kodla."
  },

  // 12
  {
    q: "Akış diyagramında işlem (process) adımı hangisiyle gösterilir?",
    t: "mcq",
    o: ["Dikdörtgen", "Elmas", "Paralelkenar", "Oval", "Daire"],
    a: "Dikdörtgen",
    difficulty: "easy",
    week: 3,
    topic: "process",
    importance: "high",
    explanation:
      "Atama/hesap = process = rectangle. Taktik: 'Kutunun içinde işlem' diye düşün."
  },

  // 13
  {
    q: "Akış diyagramında giriş/çıkış (input/output) sembolü hangisidir?",
    t: "mcq",
    o: ["Oval", "Elmas", "Paralelkenar", "Dikdörtgen", "Beşgen"],
    a: "Paralelkenar",
    difficulty: "easy",
    week: 3,
    topic: "I/O sembolü",
    importance: "high",
    explanation:
      "Oku/Yaz = paralelkenar. Taktik: Paralelkenar 'eğimli' → dışarıyla (kullanıcıyla) iletişim gibi düşün."
  },

  // 14
  {
    q: "Akış diyagramında karar (decision) sembolü hangisidir?",
    t: "mcq",
    o: ["Dikdörtgen", "Oval", "Paralelkenar", "Elmas", "Daire"],
    a: "Elmas",
    difficulty: "easy",
    week: 3,
    topic: "decision sembolü",
    importance: "high",
    explanation:
      "Koşul = elmas. Taktik: Elmasın iki ucu var → iki yol (Evet/Hayır)."
  },

  // 15
  {
    q: "Akış diyagramında adımlar arası yönü göstermek için ne kullanılır?",
    t: "mcq",
    o: ["Ok (flow line)", "Tablo", "Başlık", "Yorum", "Renk paleti"],
    a: "Ok (flow line)",
    difficulty: "easy",
    week: 3,
    topic: "flow line",
    importance: "medium",
    explanation:
      "Ok = akış yönü. Taktik: Sınavda çizim sorusu gelirse okları unutma; çoğu hoca ok yoksa puan kırar."
  },

  // 16
  {
    q: "Karar sembolünden çıkan iki tipik dal hangisidir?",
    t: "mcq",
    o: ["Sağ/Sol", "Evet/Hayır (True/False)", "Başla/Bitir", "Oku/Yaz", "Topla/Çıkar"],
    a: "Evet/Hayır (True/False)",
    difficulty: "easy",
    week: 3,
    topic: "decision dalları",
    importance: "high",
    explanation:
      "Decision dalları = True/False. Taktik: True dalını genelde sağa, False dalını aşağı koyarsan çizim daha okunur."
  },

  // ==== 4. HAFTA – Değişken, Sabit, Veri Tipleri, Atama ====

  // 17
  {
    q: "Değişken (variable) nedir?",
    t: "mcq",
    o: [
      "Değeri değişmeyen sabit sayı",
      "Program çalışırken farklı değerler alabilen isimlendirilmiş bellek alanı",
      "Sadece metin tutan alan",
      "Sadece ekrana yazdırma komutu",
      "Sadece akış diyagramı sembolü"
    ],
    a: "Program çalışırken farklı değerler alabilen isimlendirilmiş bellek alanı",
    difficulty: "easy",
    week: 4,
    topic: "değişken",
    importance: "high",
    explanation:
      "Değişken = isim + değer. Taktik: Vize sorusu: 'i sayaçtır' → i değişir; sabitler değişmez."
  },

  // 18
  {
    q: "Sabit (constant) için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Program çalışırken sürekli değişir",
      "Değeri değişmeyen sabit bir değeri temsil eder",
      "Sadece döngüde kullanılır",
      "Sadece if içinde kullanılır",
      "Sadece string olabilir"
    ],
    a: "Değeri değişmeyen sabit bir değeri temsil eder",
    difficulty: "easy",
    week: 4,
    topic: "sabit",
    importance: "medium",
    explanation:
      "Sabit = değişmez. Taktik: PI gibi örnekleri aklında tut; hoca örnek isterse hemen yaz."
  },

  // 19
  {
    q: "Aşağıdakilerden hangisi sayısal veri tipine örnektir?",
    t: "mcq",
    o: ["String", "Integer (tamsayı)", "Boolean", "Character", "None"],
    a: "Integer (tamsayı)",
    difficulty: "easy",
    week: 4,
    topic: "veri tipleri",
    importance: "high",
    explanation:
      "Integer = tamsayı. Taktik: Tip sorularında ana ayrım: sayısal (int/float) – metin (string) – mantıksal (bool)."
  },

  // 20
  {
    q: "Boolean (mantıksal) veri tipi neyi ifade eder?",
    t: "mcq",
    o: ["Sadece 0-9", "True/False", "Sadece metin", "Resim", "Tarih"],
    a: "True/False",
    difficulty: "easy",
    week: 4,
    topic: "boolean",
    importance: "high",
    explanation:
      "Boolean = doğru/yanlış. Taktik: if koşulları daima boolean değerlendirir; bunu yazarsan tanım sorusunda tam puan."
  },

  // 21
  {
    q: "Atama (assignment) ne yapar?",
    t: "mcq",
    o: [
      "İki değeri kıyaslar",
      "Değişkene değer aktarır (değeri günceller)",
      "Döngüyü bitirir",
      "Ekrana yazar",
      "Dosya açar"
    ],
    a: "Değişkene değer aktarır (değeri günceller)",
    difficulty: "easy",
    week: 4,
    topic: "atama",
    importance: "high",
    explanation:
      "Atama: x = 5 gibi. Taktik: 'x = x + 1' ifadesini ezberle; hem atama hem artırma sorularında çıkar."
  },

  // 22
  {
    q: "Değişken isimlendirmede hangisi genelde YANLIŞTIR?",
    t: "mcq",
    o: [
      "Rakamla başlayabilir",
      "Boşluk içeremez",
      "Anlamlı seçilmelidir",
      "Büyük/küçük harf farkı olabilir",
      "Bazı özel karakterler sorun çıkarabilir"
    ],
    a: "Rakamla başlayabilir",
    difficulty: "medium",
    week: 4,
    topic: "isimlendirme kuralları",
    importance: "high",
    explanation:
      "Genel kural: isim rakamla başlamaz. Taktik: Sınavda dil bağımsız sorulursa 'genel kuralları' yaz: harfle başlar, boşluk yok, anlamlı."
  },

  // ==== 5. HAFTA – Giriş/Çıkış, Tür Dönüşümü ====

  // 23
  {
    q: "Giriş (input) komutlarının temel amacı nedir?",
    t: "mcq",
    o: [
      "Ekrana yazmak",
      "Kullanıcıdan/dış kaynaktan veri almak",
      "Değişken tanımlamak",
      "Algoritmayı çizmek",
      "Programı kapatmak"
    ],
    a: "Kullanıcıdan/dış kaynaktan veri almak",
    difficulty: "easy",
    week: 5,
    topic: "input",
    importance: "high",
    explanation:
      "Input = veri alma. Taktik: Algoritmada input yoksa, girdi isteyen problem eksik çözülür."
  },

  // 24
  {
    q: "Çıkış (output) komutlarının amacı nedir?",
    t: "mcq",
    o: [
      "Veri almak",
      "Sonucu kullanıcıya göstermek (ekran/dosya vb.)",
      "Döngüyü başlatmak",
      "Koşul kurmak",
      "Sabit tanımlamak"
    ],
    a: "Sonucu kullanıcıya göstermek (ekran/dosya vb.)",
    difficulty: "easy",
    week: 5,
    topic: "output",
    importance: "high",
    explanation:
      "Output = sonuç gösterme. Taktik: Output satırı yoksa, 'sonuç' görünmez; hoca 'çıktı nerede?' diye puan kırar."
  },

  // 25
  {
    q: "İki sayının toplamını hesaplayan algoritmada doğru sıra hangisidir?",
    t: "mcq",
    o: [
      "Yazdır → Oku → Topla",
      "Oku → Topla → Yazdır",
      "Topla → Oku → Yazdır",
      "Oku → Yazdır → Topla",
      "Bitir → Oku → Başla"
    ],
    a: "Oku → Topla → Yazdır",
    difficulty: "easy",
    week: 5,
    topic: "I/O sırası",
    importance: "high",
    explanation:
      "Input→Process→Output. Taktik: IPO şemasını ezberle: Input (Oku), Process (Hesapla), Output (Yazdır)."
  },

  // 26
  {
    q: "Kullanıcıdan alınan veri metin (string) olarak geliyorsa sayısal işlem için genelde ne gerekir?",
    t: "mcq",
    o: [
      "CSS eklemek",
      "Tür dönüşümü (type conversion)",
      "Z-index ayarlamak",
      "Akış diyagramı çizmek",
      "Dosya sıkıştırmak"
    ],
    a: "Tür dönüşümü (type conversion)",
    difficulty: "medium",
    week: 5,
    topic: "type conversion",
    importance: "high",
    explanation:
      "String → int/float çevrilir. Taktik: Sınavda 'girdi toplama yapmıyor' sorusu gelirse cevap: 'string geldi, sayıya çevrilmeli'."
  },

  // 27
  {
    q: "Formatlı çıktı neye örnektir?",
    t: "mcq",
    o: [
      "Sadece Merhaba yazdırmak",
      "Ondalık basamak sayısını kontrol ederek yazdırmak (örn. 2 basamak)",
      "Değişken tanımlamak",
      "Sadece if kullanmak",
      "Sadece döngü kurmak"
    ],
    a: "Ondalık basamak sayısını kontrol ederek yazdırmak (örn. 2 basamak)",
    difficulty: "medium",
    week: 5,
    topic: "formatlı çıktı",
    importance: "medium",
    explanation:
      "Formatlı çıktı = çıktı düzeni. Taktik: Çıktı sorularında birim/başlık istenirse (TL, cm) yazmayı unutma."
  },

  // ==== 6. HAFTA – Operatörler, Mod, Öncelik ====

  // 28
  {
    q: "Aşağıdakilerden hangisi aritmetik operatördür?",
    t: "mcq",
    o: ["&&", ">=", "+", "==", "!"],
    a: "+",
    difficulty: "easy",
    week: 6,
    topic: "aritmetik operatör",
    importance: "high",
    explanation:
      "+, -, *, / aritmetiktir. Taktik: Şıklarda '&&, ||, !' görürsen mantıksal; '>, ==' görürsen karşılaştırma."
  },

  // 29
  {
    q: "Mod (kalan) operatörü hangisidir?",
    t: "mcq",
    o: ["//", "%", "**", "==", "!="],
    a: "%",
    difficulty: "easy",
    week: 6,
    topic: "mod",
    importance: "high",
    explanation:
      "% = kalan. Taktik: Tek/çift sorusu %2 ile çözülür; en klasik vize sorusu."
  },

  // 30
  {
    q: "x=17 için x%5 sonucu kaçtır?",
    t: "mcq",
    o: ["0", "1", "2", "3", "4"],
    a: "2",
    difficulty: "medium",
    week: 6,
    topic: "mod hesap",
    importance: "high",
    explanation:
      "17 = 5*3 + 2 → kalan 2. Taktik: Mod sorusunda bölme yerine 'bölüm*kalan' formunu yaz: a=b*q+r."
  },

  // 31
  {
    q: "Aşağıdakilerden hangisi karşılaştırma operatörüne örnektir?",
    t: "mcq",
    o: ["+", "*", ">", "%", "/"],
    a: ">",
    difficulty: "easy",
    week: 6,
    topic: "karşılaştırma",
    importance: "high",
    explanation:
      "Karşılaştırma sonucu boolean üretir. Taktik: 'true/false döndürür' dersen tanım sorusunda puan gelir."
  },

  // 32
  {
    q: "Mantıksal AND (ve) için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "En az biri doğruysa sonuç doğrudur",
      "İkisi de doğruysa sonuç doğrudur",
      "İkisi de yanlışsa sonuç doğrudur",
      "Sadece sayılarla çalışır",
      "Sadece metinle çalışır"
    ],
    a: "İkisi de doğruysa sonuç doğrudur",
    difficulty: "medium",
    week: 6,
    topic: "AND",
    importance: "high",
    explanation:
      "AND: T&T= T, diğerleri F. Taktik: Küçük tablo çiz: (T,T)->T; (T,F)->F; (F,T)->F; (F,F)->F."
  },

  // 33
  {
    q: "Operatör önceliğinde genelde hangisi önce değerlendirilir?",
    t: "mcq",
    o: ["Toplama (+)", "Çarpma (*)", "Karşılaştırma (>)", "Mantıksal AND", "Atama (=)"],
    a: "Çarpma (*)",
    difficulty: "medium",
    week: 6,
    topic: "öncelik",
    importance: "high",
    explanation:
      "Genelde: Parantez > Çarpma/Bölme > Toplama/Çıkarma > Karşılaştırma > Mantıksal > Atama. Taktik: Emin değilsen parantezle netleştir."
  },

  // ==== 7. HAFTA – if / else / else-if ve Koşul Kurma ====

  // 34
  {
    q: "if yapısının temel amacı nedir?",
    t: "mcq",
    o: [
      "Her zaman aynı kodu çalıştırmak",
      "Koşula göre farklı komutların çalışmasını sağlamak",
      "Sadece çıktı üretmek",
      "Sadece değişken tanımlamak",
      "Sadece döngü kurmak"
    ],
    a: "Koşula göre farklı komutların çalışmasını sağlamak",
    difficulty: "easy",
    week: 7,
    topic: "if amacı",
    importance: "high",
    explanation:
      "if = koşullu çalışma. Taktik: Koşul cümlesini önce Türkçe yaz: 'Eğer ... ise ...' sonra operatöre çevir."
  },

  // 35
  {
    q: "if-else yapısında koşul false ise hangisi çalışır?",
    t: "mcq",
    o: ["if bloğu", "else bloğu", "ikisi de", "hiçbiri", "for bloğu"],
    a: "else bloğu",
    difficulty: "easy",
    week: 7,
    topic: "if-else",
    importance: "high",
    explanation:
      "Koşul false → else. Taktik: Çıktı sorularında önce koşulu değerlendir (T/F), sonra hangi bloğun çalışacağını seç."
  },

  // 36
  {
    q: "x 10 ile 20 arasında (dahil) mı? doğru koşul hangisidir?",
    t: "mcq",
    o: [
      "x > 10 || x < 20",
      "x >= 10 && x <= 20",
      "x == 10 && x == 20",
      "x < 10 && x > 20",
      "x != 10 || x != 20"
    ],
    a: "x >= 10 && x <= 20",
    difficulty: "medium",
    week: 7,
    topic: "aralık koşulu",
    importance: "high",
    explanation:
      "Aralık = AND. Taktik: 'Arada' kelimesi → iki şart aynı anda gerekir. OR yazanlar genelde tuzaktır."
  },

  // 37
  {
    q: "Tek/çift kontrolünde doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "n / 2 == 0",
      "n % 2 == 0",
      "n * 2 == 0",
      "n + 2 == 0",
      "n - 2 == 0"
    ],
    a: "n % 2 == 0",
    difficulty: "easy",
    week: 7,
    topic: "tek/çift",
    importance: "high",
    explanation:
      "Çift: kalan 0. Taktik: Ezber: 'Çiftte kalan sıfır' (mod 2)."
  },

  // 38
  {
    q: "İç içe if (nested if) hangi durumlarda kullanılır?",
    t: "mcq",
    o: [
      "Koşulların birbirine bağlı olduğu ve ikinci kontrolün birinciye göre yapılması gerektiğinde",
      "Sadece döngü yazmak için",
      "Sadece çıktı formatlamak için",
      "Değişken tanımlamak için",
      "Yorum yazmak için"
    ],
    a: "Koşulların birbirine bağlı olduğu ve ikinci kontrolün birinciye göre yapılması gerektiğinde",
    difficulty: "medium",
    week: 7,
    topic: "nested if",
    importance: "medium",
    explanation:
      "Nested if: önce genel şart, sonra alt şart. Taktik: 'Kapı 1 açılırsa Kapı 2 kontrol edilir' diye düşün."
  },

  // 39
  {
    q: "Çoklu durum (ör. not harfi: A/B/C/D/F) için if-else zincirine alternatif yapı hangisidir?",
    t: "mcq",
    o: ["switch-case", "while", "break", "input", "comment"],
    a: "switch-case",
    difficulty: "medium",
    week: 7,
    topic: "çoklu seçim",
    importance: "medium",
    explanation:
      "switch-case çoklu eşitlik durumlarını düzenler. Taktik: Eğer koşullar hep '== sabit' ise switch düşün."
  },

  // ==== 8. HAFTA – Döngüler (for/while), range, break/continue ====

  // 40
  {
    q: "Döngünün temel amacı nedir?",
    t: "mcq",
    o: [
      "Tek sefer çalışmak",
      "Bir işlemi tekrar etmek (belirli sayıda veya koşulla)",
      "Sadece karar vermek",
      "Sadece veri tipi belirlemek",
      "Sadece çıktı almak"
    ],
    a: "Bir işlemi tekrar etmek (belirli sayıda veya koşulla)",
    difficulty: "easy",
    week: 8,
    topic: "döngü amacı",
    importance: "high",
    explanation:
      "Döngü = tekrar. Taktik: Soru 'kaç kez' diyorsa for; 'ne zamana kadar' diyorsa while genelde daha uygundur."
  },

  // 41
  {
    q: "Koşul doğru kaldığı sürece çalışan döngü hangisidir?",
    t: "mcq",
    o: ["for", "while", "if", "switch", "print"],
    a: "while",
    difficulty: "easy",
    week: 8,
    topic: "while",
    importance: "high",
    explanation:
      "while = koşul tabanlı. Taktik: while sorularında 'güncelleme adımı' (i=i+1) var mı diye kontrol et; yoksa sonsuz döngü riski."
  },

  // 42
  {
    q: "Belirli sayıda tekrar için genelde daha uygun döngü hangisidir?",
    t: "mcq",
    o: ["for", "while", "if", "break", "return"],
    a: "for",
    difficulty: "easy",
    week: 8,
    topic: "for",
    importance: "high",
    explanation:
      "for = sayma. Taktik: for döngüsünde 'başlangıç–bitiş–artış' üçlüsünü mutlaka düşün."
  },

  // 43
  {
    q: "range(5) kaç değer üretir? (genel Colab/Python mantığı)",
    t: "mcq",
    o: ["4", "5", "6", "0", "Sonsuz"],
    a: "5",
    difficulty: "medium",
    week: 8,
    topic: "range",
    importance: "high",
    explanation:
      "range(5) → 0,1,2,3,4 (5 adet). Taktik: 'Bitiş hariç' kuralını ezberle: stop dahil değil."
  },

  // 44
  {
    q: "break komutu ne yapar?",
    t: "mcq",
    o: [
      "Döngüyü başa sarar",
      "Döngüyü tamamen bitirip dışarı çıkar",
      "Sadece o turu atlar",
      "Değişkeni sıfırlar",
      "Koşulu tersine çevirir"
    ],
    a: "Döngüyü tamamen bitirip dışarı çıkar",
    difficulty: "easy",
    week: 8,
    topic: "break",
    importance: "high",
    explanation:
      "break = döngüyü bitirir. Taktik: Çıktı sorusunda break varsa, o satıra gelince döngü biter; sonraki turlar yok."
  },

  // ==== 9. HAFTA – Kod Okuma / Çıktı (Dry-run) Klasikleri ====

  // 45
  {
    q: "x=0, her turda x=x+3 ve koşul x<9. Döngü bittiğinde x kaç olur?",
    t: "mcq",
    o: ["6", "9", "12", "3", "0"],
    a: "9",
    difficulty: "hard",
    week: 9,
    topic: "dry-run",
    importance: "high",
    explanation:
      "x: 0→3→6→9. x<9 false olunca durur. Taktik: while sorularında 'koşul kontrolü güncellemeden sonra mı?' diye düşün; çoğu zaman tur sonunda kontrol edilir."
  },

  // 46
  {
    q: "Çıktı sorularında en güvenli yöntem hangisidir?",
    t: "mcq",
    o: [
      "Şıkları tahmin etmek",
      "Değişkenleri adım adım tabloyla takip etmek (dry-run)",
      "Sadece ilk satırı okumak",
      "Sadece print satırına bakmak",
      "Koşulları görmezden gelmek"
    ],
    a: "Değişkenleri adım adım tabloyla takip etmek (dry-run)",
    difficulty: "easy",
    week: 9,
    topic: "çıktı çözme tekniği",
    importance: "high",
    explanation:
      "Dry-run en net yöntemdir. Taktik: Her iterasyonda (turda) sadece değişen değişkenleri yaz; gereksiz yazı hata riskini artırır."
  },

  // 47
  {
    q: "Sonsuz döngünün en sık sebebi hangisidir?",
    t: "mcq",
    o: [
      "Yorum satırı yazmak",
      "Koşulu etkileyen güncelleme adımını (i=i+1 gibi) unutmak",
      "Değişken adı seçmek",
      "Ekrana yazdırmak",
      "Sabit kullanmak"
    ],
    a: "Koşulu etkileyen güncelleme adımını (i=i+1 gibi) unutmak",
    difficulty: "medium",
    week: 9,
    topic: "sonsuz döngü",
    importance: "high",
    explanation:
      "Koşul hiç değişmiyorsa döngü bitmez. Taktik: while sorusunda 3 şey ararsın: başlangıç, koşul, güncelleme (BKG)."
  },

  // ==== 10. HAFTA – Hata Türleri (Syntax/Runtime/Logic) ====

  // 48
  {
    q: "Syntax error (yazım hatası) hangisidir?",
    t: "mcq",
    o: [
      "Kod çalışır ama yanlış sonuç verir",
      "Kod çalışırken 0’a bölme olur",
      "Parantez/anahtar kelime eksikliği nedeniyle kodun derlenememesi/çalışmaması",
      "Kodun yavaş çalışması",
      "Ekran boyutunun değişmesi"
    ],
    a: "Parantez/anahtar kelime eksikliği nedeniyle kodun derlenememesi/çalışmaması",
    difficulty: "easy",
    week: 10,
    topic: "syntax error",
    importance: "high",
    explanation:
      "Syntax = yazım kuralı. Taktik: Program hiç başlamıyorsa çoğu zaman syntax. Hoca 'hata türü' sorarsa bu net puandır."
  },

  // 49
  {
    q: "Runtime error (çalışma zamanı hatası) için en uygun örnek hangisidir?",
    t: "mcq",
    o: [
      "Koşulda AND yerine OR kullanmak",
      "0’a bölme gibi, program çalışırken oluşan hata",
      "Değişken ismini anlamlı seçmek",
      "Yorum satırı eklemek",
      "Akış diyagramı çizmek"
    ],
    a: "0’a bölme gibi, program çalışırken oluşan hata",
    difficulty: "medium",
    week: 10,
    topic: "runtime error",
    importance: "high",
    explanation:
      "Runtime = çalışırken patlar. Taktik: 'Çalıştı ama sonra hata verdi' → runtime. Örnek vererek yazarsan hocadan tam puan alırsın."
  },

  // 50
  {
    q: "Logic error (mantık hatası) hangisidir?",
    t: "mcq",
    o: [
      "Program hiç çalışmaz",
      "Program çalışır ama beklenen doğru sonucu vermez",
      "Derleyici bulunamadı",
      "Bilgisayar kapanır",
      "İnternet yavaşlar"
    ],
    a: "Program çalışır ama beklenen doğru sonucu vermez",
    difficulty: "easy",
    week: 10,
    topic: "logic error",
    importance: "high",
    explanation:
      "Logic = yanlış düşünme/yanlış koşul. Taktik: Mantık hatasını yakalamanın yolu test + dry-run. Çıktı sorularının mantığı da budur."
  }
];
