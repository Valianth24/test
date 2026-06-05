// Görsel Programlama – Final Tipi 100 Soruluk Kapsamlı Soru Bankası
// Dağılım: 40 soru yeni PDF'lerden + 60 soru önceki haftalardan
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]
// Not: a = doğru şık index’i (0=A, 1=B, 2=C, 3=D, 4=E)

window.questionBank = [
  // =========================================================
  // ==== YENİ PDFLER – HAFTA 11: DİZİLER / WINDOWS FORMS (14)
  // =========================================================

  {
    q: "Kullanıcıdan 10,20,30,40,50 şeklinde alınan veriyi sayılara ayırmak için en uygun ilk işlem hangisidir?",
    t: "mcq",
    o: [
      "Metni virgüle göre parçalara ayırmak",
      "Formu kapatmak",
      "Label'ı temizlemek",
      "Button rengini değiştirmek",
      "MessageBox'ı gizlemek"
    ],
    a: 0,
    difficulty: "medium",
    week: 11,
    topic: "Diziler ve Split",
    importance: 5,
    explanation: "TextBox'tan gelen veri başlangıçta tek bir string metindir. 10,20,30 gibi değerleri ayrı ayrı işlemek için önce virgül karakterine göre parçalamak gerekir. C#'ta bunun için genellikle Split(',') kullanılır; sonra her parça sayıya dönüştürülür."
  },

  {
    q: "Dizilerle ortalama hesaplama uygulamasında txtSayilar kontrolünün görevi nedir?",
    t: "mcq",
    o: [
      "Sonucu göstermek",
      "Kullanıcıdan virgülle ayrılmış sayıları almak",
      "Programı kapatmak",
      "Diziyi otomatik sıralamak",
      "Hata mesajı göstermek"
    ],
    a: 1,
    difficulty: "easy",
    week: 11,
    topic: "TextBox ile Veri Alma",
    importance: 5,
    explanation: "txtSayilar bir TextBox'tır. TextBox'ın temel görevi kullanıcıdan veri almaktır. Bu uygulamada kullanıcı 10,20,30,40,50 gibi sayıları txtSayilar içine yazar; program da bu metni okuyup diziye aktarır."
  },

  {
    q: "Dizinin ortalamasını hesaplamak için hangi işlem mantığı doğrudur?",
    t: "mcq",
    o: [
      "Sadece ilk elemanı almak",
      "Sadece son elemanı almak",
      "Elemanları toplayıp eleman sayısına bölmek",
      "Tüm elemanları silmek",
      "Sayıları metin olarak birleştirmek"
    ],
    a: 2,
    difficulty: "easy",
    week: 11,
    topic: "Ortalama Hesaplama",
    importance: 5,
    explanation: "Ortalama, toplam / eleman sayısı formülüyle bulunur. Örneğin 10,20,30,40,50 sayılarının toplamı 150'dir; 5 eleman olduğu için 150 / 5 = 30 olur. Bu yüzden beklenen çıktı Ortalama: 30.00 şeklindedir."
  },

  {
    q: "Dizilerle ortalama hesaplama uygulamasında lblSonuc ne için kullanılır?",
    t: "mcq",
    o: [
      "Kullanıcıdan sayı almak için",
      "Virgülleri silmek için",
      "Diziyi oluşturmak için",
      "Hesaplanan ortalamayı göstermek için",
      "Uygulamayı derlemek için"
    ],
    a: 3,
    difficulty: "easy",
    week: 11,
    topic: "Label ile Sonuç Gösterme",
    importance: 5,
    explanation: "Label, kullanıcıya bilgi veya sonuç göstermek için kullanılır. Bu uygulamada ortalama hesaplandıktan sonra lblSonuc.Text değerine Ortalama: 30.00 gibi bir metin atanır. TextBox veri almak için, Label sonuç göstermek için kullanılır."
  },

  {
    q: "Kullanıcı 12,45,7,33,89,2,67,10 girerse en büyük sayı kaçtır?",
    t: "mcq",
    o: [
      "2",
      "7",
      "45",
      "67",
      "89"
    ],
    a: 4,
    difficulty: "easy",
    week: 11,
    topic: "En Büyük Sayıyı Bulma",
    importance: 5,
    explanation: "Dizideki her sayı tek tek karşılaştırılır. 89, verilen listedeki tüm sayılardan büyüktür. Bu nedenle lblEnBuyuk üzerinde 'En Büyük: 89' yazmalıdır."
  },

  {
    q: "Kullanıcı 12,45,7,33,89,2,67,10 girerse en küçük sayı kaçtır?",
    t: "mcq",
    o: [
      "2",
      "7",
      "10",
      "12",
      "33"
    ],
    a: 0,
    difficulty: "easy",
    week: 11,
    topic: "En Küçük Sayıyı Bulma",
    importance: 5,
    explanation: "En küçük değeri bulmak için dizideki her eleman karşılaştırılır. Bu listedeki en küçük sayı 2'dir. Program bunu lblEnKucuk üzerinde göstermelidir."
  },

  {
    q: "En büyük ve en küçük sayıyı bulma uygulamasında kullanıcı verisi nasıl alınır?",
    t: "mcq",
    o: [
      "Label üzerinden",
      "Virgülle ayrılmış metin olarak TextBox üzerinden",
      "Sadece MessageBox başlığından",
      "Program dosya adından",
      "Button'ın renginden"
    ],
    a: 1,
    difficulty: "medium",
    week: 11,
    topic: "TextBox Girdisi",
    importance: 5,
    explanation: "Kullanıcı sayıları tek tek farklı kutulara değil, virgülle ayrılmış şekilde tek TextBox'a yazar. Program bu metni parçalara ayırır, her parçayı sayıya çevirir ve dizi içinde işler."
  },

  {
    q: "Tek ve çift sayıları ayırma uygulamasında çift sayıyı belirleyen temel koşul hangisidir?",
    t: "mcq",
    o: [
      "sayi > 0",
      "sayi < 0",
      "sayi % 2 == 0",
      "sayi == 1",
      "sayi.ToString() == \"çift\""
    ],
    a: 2,
    difficulty: "medium",
    week: 11,
    topic: "Mod Alma",
    importance: 5,
    explanation: "% operatörü bölümden kalanı verir. Bir sayı 2'ye bölündüğünde kalan 0 ise sayı çifttir. Bu nedenle sayi % 2 == 0 koşulu çift sayıları bulmak için kullanılır."
  },

  {
    q: "Tek sayıyı belirlemek için hangi koşul kullanılabilir?",
    t: "mcq",
    o: [
      "sayi == 0",
      "sayi > 100",
      "sayi < 10",
      "sayi % 2 != 0",
      "sayi / 2 == 0"
    ],
    a: 3,
    difficulty: "medium",
    week: 11,
    topic: "Tek Sayı Kontrolü",
    importance: 5,
    explanation: "Bir sayı 2'ye bölündüğünde kalan 0 değilse o sayı tektir. Örneğin 5 % 2 sonucu 1'dir; bu yüzden 5 tek sayıdır. Bu mantık tek-çift ayırma sorularının temelidir."
  },

  {
    q: "Tek ve çift ayırma uygulamasında çift sayılar hangi kontrol üzerinde listelenmelidir?",
    t: "mcq",
    o: [
      "lblSonuc",
      "txtSayilar",
      "btnAyir",
      "Form1",
      "lstCiftSayilar"
    ],
    a: 4,
    difficulty: "easy",
    week: 11,
    topic: "ListBox Kullanımı",
    importance: 5,
    explanation: "PDF'deki form tasarımında çift sayıların gösterileceği ListBox'ın adı lstCiftSayilar olarak verilmiştir. ListBox, birden fazla değeri liste halinde göstermek için kullanılır."
  },

  {
    q: "1,2,3,4,5,6,7,8,9,10 girdisi için lstTekSayilar içinde hangi değerler yer almalıdır?",
    t: "mcq",
    o: [
      "1, 3, 5, 7, 9",
      "2, 4, 6, 8, 10",
      "1, 2, 3, 4, 5",
      "6, 7, 8, 9, 10",
      "Sadece 10"
    ],
    a: 0,
    difficulty: "easy",
    week: 11,
    topic: "Tek Sayılar",
    importance: 5,
    explanation: "Tek sayılar 2'ye tam bölünmeyen sayılardır. 1, 3, 5, 7 ve 9 sayılarında 2'ye bölümden kalan 1 olduğu için bunlar tek sayılardır."
  },

  {
    q: "1,2,3,4,5,6,7,8,9,10 girdisi için lstCiftSayilar içinde hangi değerler yer almalıdır?",
    t: "mcq",
    o: [
      "1, 3, 5, 7, 9",
      "2, 4, 6, 8, 10",
      "1, 2, 3, 4, 5",
      "Sadece 1",
      "Sadece 9"
    ],
    a: 1,
    difficulty: "easy",
    week: 11,
    topic: "Çift Sayılar",
    importance: 5,
    explanation: "Çift sayılar 2'ye tam bölünen sayılardır. 2, 4, 6, 8 ve 10 sayılarında 2'ye bölümden kalan 0 olduğu için bu değerler çift sayı listesine eklenir."
  },

  {
    q: "Bir TextBox'a girilen 5 sayıyı diziye aktarmanın temel nedeni nedir?",
    t: "mcq",
    o: [
      "Formu renklendirmek",
      "Button'ı gizlemek",
      "Birden fazla sayıyı düzenli biçimde işleyebilmek",
      "Programı kapatmak",
      "MessageBox başlığını değiştirmek"
    ],
    a: 2,
    difficulty: "medium",
    week: 11,
    topic: "Dizi Mantığı",
    importance: 5,
    explanation: "Dizi, birden fazla değeri tek yapı altında saklar. Ortalama, en büyük/en küçük bulma ve tek-çift ayırma gibi işlemler için sayıları tek tek bağımsız değişkenlerde tutmak yerine diziye almak daha düzenlidir."
  },

  {
    q: "btnHesapla kontrolünün temel görevi nedir?",
    t: "mcq",
    o: [
      "Sayıları elle sıralamak",
      "Label'ı kalıcı olarak silmek",
      "TextBox'a otomatik rastgele yazı yazmak",
      "Kullanıcı tıklayınca hesaplama işlemini başlatmak",
      "Formun kod dosyasını silmek"
    ],
    a: 3,
    difficulty: "easy",
    week: 11,
    topic: "Button Click",
    importance: 5,
    explanation: "Button, kullanıcı etkileşimini başlatan kontroldür. Kullanıcı btnHesapla'ya tıkladığında Click olayı çalışır ve içine yazılan ortalama, en büyük/en küçük veya tek-çift ayırma kodları yürütülür."
  },

  // =========================================================
  // ==== YENİ PDFLER – HAFTA 12: WINDOWS FORMS HATA YAKALAMA (13)
  // =========================================================

  {
    q: "try bloğunun temel görevi nedir?",
    t: "mcq",
    o: [
      "Hata oluşabilecek kodları kontrollü şekilde çalıştırmak",
      "Programı kesinlikle kapatmak",
      "Sadece Label rengini değiştirmek",
      "Sadece Button oluşturmak",
      "Diziyi sıralamak"
    ],
    a: 0,
    difficulty: "easy",
    week: 12,
    topic: "try Bloğu",
    importance: 5,
    explanation: "try bloğu hata oluşma ihtimali olan kodların yazıldığı bölümdür. Örneğin TextBox'tan sayı dönüştürme veya bir sayıyı başka sayıya bölme işlemleri hata üretebilir. Bu işlemler try içine alınırsa hata oluştuğunda program doğrudan çökmez, ilgili catch bloğuna geçer."
  },

  {
    q: "catch bloğunun temel görevi nedir?",
    t: "mcq",
    o: [
      "Hata üretmek",
      "Oluşan hatayı yakalayıp uygun işlem yapmak",
      "Programı derlemek",
      "TextBox'a veri girmek",
      "ProgressBar'ı artırmak"
    ],
    a: 1,
    difficulty: "easy",
    week: 12,
    topic: "catch Bloğu",
    importance: 5,
    explanation: "catch bloğu, try içinde oluşan hatayı yakalar. Örneğin kullanıcı sıfıra bölme yaparsa DivideByZeroException catch bloğu çalışır. Böylece kullanıcıya anlaşılır bir hata mesajı gösterilir ve program kontrolsüz şekilde kapanmaz."
  },

  {
    q: "finally bloğunun en doğru tanımı hangisidir?",
    t: "mcq",
    o: [
      "Sadece hata olursa çalışan blok",
      "Sadece hata olmazsa çalışan blok",
      "Hata olsa da olmasa da çalışan blok",
      "Sadece TextBox içeriğini okuyan blok",
      "Sadece dizileri sıralayan blok"
    ],
    a: 2,
    difficulty: "easy",
    week: 12,
    topic: "finally Bloğu",
    importance: 5,
    explanation: "finally bloğu hata oluşsa da oluşmasa da en sonda çalışır. Bu yüzden temizlik, kapanış mesajı veya işlem tamamlandı bildirimi için uygundur. PDF örneğinde finally içinde 'Bölme işlemi tamamlandı.' mantığı verilmiştir."
  },

  {
    q: "Convert.ToInt32(txtSayi1.Text) kodu ne yapar?",
    t: "mcq",
    o: [
      "TextBox'ı siler",
      "Label'a renk verir",
      "Button'ı tıklar",
      "txtSayi1 içindeki metni tam sayıya çevirmeye çalışır",
      "Formu kapatır"
    ],
    a: 3,
    difficulty: "medium",
    week: 12,
    topic: "Tip Dönüşümü",
    importance: 5,
    explanation: "TextBox içeriği her zaman metin olarak gelir. Bölme işlemi yapabilmek için bu metnin tam sayıya çevrilmesi gerekir. Convert.ToInt32 dönüşüm yapar; kullanıcı abc gibi geçersiz bir şey girerse FormatException oluşabilir."
  },

  {
    q: "txtSayi2.Text değeri 0 ise sayi1 / sayi2 işleminde hangi hata beklenir?",
    t: "mcq",
    o: [
      "FormatException",
      "NullReferenceException",
      "IndexOutOfRangeException",
      "StackOverflowException",
      "DivideByZeroException"
    ],
    a: 4,
    difficulty: "medium",
    week: 12,
    topic: "DivideByZeroException",
    importance: 5,
    explanation: "Bir sayı sıfıra bölünemez. sayi2 değeri 0 olduğunda sayi1 / sayi2 işlemi DivideByZeroException üretir. Bu hata özel olarak yakalanırsa kullanıcıya 'Bir sayı sıfıra bölünemez!' gibi anlaşılır mesaj verilir."
  },

  {
    q: "Kullanıcı txtSayi1 alanına abc yazarsa en olası hata hangisidir?",
    t: "mcq",
    o: [
      "FormatException",
      "DivideByZeroException",
      "OverflowException",
      "FileNotFoundException",
      "ArgumentNullException"
    ],
    a: 0,
    difficulty: "medium",
    week: 12,
    topic: "FormatException",
    importance: 5,
    explanation: "abc bir tam sayı biçiminde değildir. Convert.ToInt32 veya int.Parse bu değeri sayıya çeviremez. Bu durumda FormatException oluşur ve kullanıcıya 'Lütfen geçerli bir sayı giriniz!' mesajı göstermek doğru olur."
  },

  {
    q: "Windows Forms hata yakalama örneğinde lblSonuc.Text = 'Sonuç: ' + sonuc.ToString(); satırı ne yapar?",
    t: "mcq",
    o: [
      "Sonucu dosyaya kaydeder",
      "Bölme sonucunu Label üzerinde gösterir",
      "txtSayi1'i siler",
      "Programı kapatır",
      "Sıfıra bölme hatası üretir"
    ],
    a: 1,
    difficulty: "easy",
    week: 12,
    topic: "Label ile Sonuç",
    importance: 5,
    explanation: "lblSonuc bir Label'dır. sonuc değişkenindeki bölme sonucu ToString ile metne çevrilir ve Label'ın Text özelliğine atanır. Böylece kullanıcı sonucu form üzerinde görür."
  },

  {
    q: "MessageBoxIcon.Error hangi amaçla kullanılır?",
    t: "mcq",
    o: [
      "Başarılı işlem simgesi göstermek için",
      "Bilgi simgesi göstermek için",
      "Hata simgesi göstermek için",
      "Listeye eleman eklemek için",
      "Sayıları bölmek için"
    ],
    a: 2,
    difficulty: "medium",
    week: 12,
    topic: "MessageBoxIcon",
    importance: 4,
    explanation: "MessageBoxIcon.Error, MessageBox penceresinde hata simgesi gösterir. Kullanıcı sıfıra bölme veya beklenmeyen hata yaptığında bu simge daha ciddi bir hata olduğunu belirtmek için kullanılır."
  },

  {
    q: "MessageBoxIcon.Warning hangi durumda daha uygundur?",
    t: "mcq",
    o: [
      "Program başarıyla bittiğinde",
      "Kullanıcı geçersiz veri girdiğinde",
      "Sonuç doğru hesaplandığında",
      "Dizi sıralandığında",
      "Button oluşturulduğunda"
    ],
    a: 3,
    difficulty: "medium",
    week: 12,
    topic: "Uyarı Mesajı",
    importance: 4,
    explanation: "Warning, kullanıcıya uyarı vermek için uygundur. PDF örneğinde FormatException için 'Lütfen geçerli bir sayı giriniz!' mesajında MessageBoxIcon.Warning kullanılmıştır. Bu, kullanıcının girişini düzeltmesi gerektiğini anlatır."
  },

  {
    q: "catch (Exception ex) bloğu neden kullanılır?",
    t: "mcq",
    o: [
      "Sadece sıfıra bölmeyi yakalamak için",
      "Sadece format hatasını yakalamak için",
      "Sadece sonucu hesaplamak için",
      "Sadece Label'a yazı yazmak için",
      "Özel catch blokları dışında kalan beklenmeyen hataları yakalamak için"
    ],
    a: 4,
    difficulty: "hard",
    week: 12,
    topic: "Genel Exception",
    importance: 5,
    explanation: "Exception genel hata sınıfıdır. DivideByZeroException ve FormatException gibi özel hatalar ayrı yakalandıktan sonra, beklenmeyen diğer hataları yakalamak için catch (Exception ex) kullanılır. ex.Message ile hatanın açıklaması alınabilir."
  },

  {
    q: "Hata yakalama kodlarında özel catch blokları genel Exception catch bloğundan önce neden yazılır?",
    t: "mcq",
    o: [
      "Özel hataları kendi mesajlarıyla yakalayabilmek için",
      "Programı yavaşlatmak için",
      "Label'ı otomatik gizlemek için",
      "Button Click olayını silmek için",
      "finally bloğunu iptal etmek için"
    ],
    a: 0,
    difficulty: "hard",
    week: 12,
    topic: "Catch Sırası",
    importance: 5,
    explanation: "Genel Exception bütün hataları kapsayabilir. Eğer en başa yazılırsa özel hatalar ona takılır ve DivideByZeroException veya FormatException için özel mesaj gösterilemez. Bu yüzden önce özel catch, en sona genel catch yazılır."
  },

  {
    q: "btnBol_Click metodu ne zaman çalışır?",
    t: "mcq",
    o: [
      "Form tasarımda açılınca",
      "Kullanıcı Böl butonuna tıklayınca",
      "Bilgisayar kapanınca",
      "TextBox boşken otomatik",
      "Label görünmez olunca"
    ],
    a: 1,
    difficulty: "easy",
    week: 12,
    topic: "Button Click Olayı",
    importance: 5,
    explanation: "btnBol_Click, btnBol adlı butonun Click olay metodudur. Kullanıcı butona tıkladığında bu metot çalışır; sayılar TextBox'lardan alınır, bölme yapılır ve hata varsa catch blokları devreye girer."
  },

  {
    q: "Bölme uygulamasında iki adet TextBox kullanılmasının nedeni nedir?",
    t: "mcq",
    o: [
      "Sonucu iki kez göstermek",
      "İki ayrı Label oluşturmak",
      "Bölünecek iki sayıyı kullanıcıdan almak",
      "Hata mesajını renklendirmek",
      "finally bloğunu çalıştırmak"
    ],
    a: 2,
    difficulty: "easy",
    week: 12,
    topic: "Form Tasarımı",
    importance: 5,
    explanation: "Bölme işlemi için iki sayıya ihtiyaç vardır: sayi1 ve sayi2. Bu nedenle formda txtSayi1 ve txtSayi2 olmak üzere iki TextBox bulunur. Kullanıcı bu kutulara değer girer."
  },

  // =========================================================
  // ==== YENİ PDFLER – HAFTA 13-14: CONSOLE TRY/CATCH (13) ===
  // =========================================================

  {
    q: "Konsol uygulamasında kullanıcı ikinci sayıya 0 girerse hangi mesaj beklenir?",
    t: "mcq",
    o: [
      "Geçersiz giriş!",
      "İşlem tamamlandı.",
      "Sonuç: 0",
      "Sıfıra bölme hatası!",
      "Program başlamadı."
    ],
    a: 3,
    difficulty: "easy",
    week: 13,
    topic: "Sıfıra Bölme Hatası",
    importance: 5,
    explanation: "İkinci sayı bölen durumundadır. Bölen 0 olduğunda bölme işlemi matematiksel olarak yapılamaz. Bu yüzden program DivideByZeroException yakalamalı ve kullanıcıya 'Sıfıra bölme hatası!' mesajı vermelidir."
  },

  {
    q: "Her durumda en son 'Program sona erdi.' mesajının gösterilmesi için hangi blok kullanılmalıdır?",
    t: "mcq",
    o: [
      "try",
      "catch",
      "if",
      "else",
      "finally"
    ],
    a: 4,
    difficulty: "easy",
    week: 13,
    topic: "finally",
    importance: 5,
    explanation: "finally bloğu hata olsa da olmasa da çalışır. Bu nedenle programın sonunda mutlaka gösterilmesi istenen mesajlar finally içine yazılabilir. PDF'deki örnekte 'Program sona erdi.' mesajı bu mantığa uygundur."
  },

  {
    q: "Kullanıcıdan alınan metni int'e dönüştürmeye çalışırken abc girilirse hangi hata yakalanmalıdır?",
    t: "mcq",
    o: [
      "FormatException",
      "DivideByZeroException",
      "IndexOutOfRangeException",
      "NullReferenceException",
      "ArithmeticException"
    ],
    a: 0,
    difficulty: "medium",
    week: 14,
    topic: "FormatException",
    importance: 5,
    explanation: "abc sayısal biçimde değildir. int.Parse veya Convert.ToInt32 bu değeri tam sayıya dönüştüremez. Bu durumda FormatException yakalanmalı ve 'Geçersiz giriş! Lütfen bir sayı girin.' mesajı gösterilmelidir."
  },

  {
    q: "Convert.ToInt32() veya int.Parse() hangi amaçla kullanılır?",
    t: "mcq",
    o: [
      "Sayıyı metne çevirmek için",
      "Metinsel girdiyi tam sayıya çevirmek için",
      "Ekrana resim çizmek için",
      "Programı kapatmak için",
      "Diziyi temizlemek için"
    ],
    a: 1,
    difficulty: "easy",
    week: 14,
    topic: "Dönüştürme",
    importance: 5,
    explanation: "Kullanıcıdan gelen veri çoğu zaman string biçimindedir. Matematiksel işlem yapabilmek için bu metin int gibi sayısal tipe dönüştürülmelidir. Convert.ToInt32 ve int.Parse bu dönüşüm için kullanılabilir."
  },

  {
    q: "Bir sayı girin: 42 girdisi için doğru çıktı mantığı hangisidir?",
    t: "mcq",
    o: [
      "Geçersiz giriş mesajı verilir",
      "Sıfıra bölme hatası verilir",
      "Girdiğiniz sayı: 42 ve ardından İşlem tamamlandı gösterilir",
      "Program sona erdi yazılmaz",
      "catch bloğu mutlaka çalışır"
    ],
    a: 2,
    difficulty: "medium",
    week: 14,
    topic: "Geçerli Girdi",
    importance: 5,
    explanation: "42 geçerli bir tam sayıdır. Dönüştürme başarılı olur, program 'Girdiğiniz sayı: 42' mesajını verir. Hata olmasa bile finally çalışacağı için en son 'İşlem tamamlandı.' mesajı gösterilir."
  },

  {
    q: "Bir sayı girin: abc girdisi için doğru çıktı mantığı hangisidir?",
    t: "mcq",
    o: [
      "Girdiğiniz sayı: abc yazılır",
      "Sonuç: 0 yazılır",
      "Sıfıra bölme hatası verilir",
      "Geçersiz giriş mesajı ve ardından İşlem tamamlandı gösterilir",
      "Program hiçbir şey yazmaz"
    ],
    a: 3,
    difficulty: "medium",
    week: 14,
    topic: "Geçersiz Girdi",
    importance: 5,
    explanation: "abc tam sayıya çevrilemez, bu yüzden FormatException oluşur. catch (FormatException) bloğu 'Geçersiz giriş! Lütfen bir sayı girin.' mesajını verir. finally bloğu da her durumda çalışarak 'İşlem tamamlandı.' mesajını gösterir."
  },

  {
    q: "try-catch-finally yapısında genel hata mesajında ex.Message kullanımı ne sağlar?",
    t: "mcq",
    o: [
      "Programı hızlandırır",
      "Label rengini değiştirir",
      "Diziyi sıralar",
      "Button'ı gizler",
      "Yakalanan hatanın açıklamasını kullanıcıya veya geliştiriciye gösterir"
    ],
    a: 4,
    difficulty: "hard",
    week: 13,
    topic: "Exception Mesajı",
    importance: 5,
    explanation: "ex.Message, oluşan hataya ait açıklama metnini verir. Genel catch bloğunda 'Bir hata oluştu: ' + ex.Message gibi kullanım, hatanın nedenini daha anlaşılır hale getirir. Bu özellikle beklenmeyen hataları takip etmekte kullanışlıdır."
  },

  {
    q: "Sıfıra bölme hatasını özel olarak yakalamak neden önemlidir?",
    t: "mcq",
    o: [
      "Kullanıcıya daha anlaşılır ve özel hata mesajı verebilmek için",
      "Programın daha çok hata üretmesi için",
      "TextBox'ı silmek için",
      "Diziyi ters çevirmek için",
      "Formun başlığını değiştirmek için"
    ],
    a: 0,
    difficulty: "medium",
    week: 13,
    topic: "Özel Hata Yakalama",
    importance: 5,
    explanation: "Sıfıra bölme çok özel ve sık karşılaşılan bir hatadır. Genel 'Bir hata oluştu' mesajı yerine 'Sıfıra bölme hatası!' demek kullanıcı için daha açıklayıcıdır. Bu yüzden DivideByZeroException ayrı catch bloğunda yakalanır."
  },

  {
    q: "FormatException hangi durumda oluşur?",
    t: "mcq",
    o: [
      "Bir sayı sıfıra bölününce",
      "Beklenen biçime uymayan veri dönüştürülmeye çalışılınca",
      "finally bloğu çalışınca",
      "Label'a sonuç yazılınca",
      "Button'a tıklanınca"
    ],
    a: 1,
    difficulty: "medium",
    week: 14,
    topic: "FormatException",
    importance: 5,
    explanation: "FormatException, veri beklenen biçimde olmadığında oluşur. Örneğin int.Parse('abc') çalıştırılırsa abc sayı olmadığı için dönüşüm yapılamaz. Bu hata, kullanıcı giriş kontrollerinde çok sık karşımıza çıkar."
  },

  {
    q: "finally bloğu için aşağıdakilerden hangisi doğrudur?",
    t: "mcq",
    o: [
      "Sadece FormatException olursa çalışır",
      "Sadece DivideByZeroException olursa çalışır",
      "Hata olsa da olmasa da çalışır",
      "Sadece try başarısızsa çalışmaz",
      "Sadece Button içinde kullanılır"
    ],
    a: 2,
    difficulty: "easy",
    week: 13,
    topic: "finally Mantığı",
    importance: 5,
    explanation: "finally bloğunun ana özelliği her durumda çalışmasıdır. Hata oluşursa catch çalışır, sonra finally çalışır. Hata oluşmazsa try tamamlanır, yine finally çalışır. Bu yüzden kapanış mesajları için uygundur."
  },

  {
    q: "Bir C# programında kullanıcıdan iki tam sayı alıp bölme işlemi yapılacaksa hangi durum mutlaka kontrol edilmelidir?",
    t: "mcq",
    o: [
      "Label rengi",
      "Form boyutu",
      "Button adı",
      "İkinci sayının sıfır olup olmadığı",
      "Toolbox konumu"
    ],
    a: 3,
    difficulty: "easy",
    week: 13,
    topic: "Bölme Güvenliği",
    importance: 5,
    explanation: "Bölme işleminde ikinci sayı bölen olduğu için sıfır olamaz. Eğer sıfır olursa DivideByZeroException oluşur. Bu yüzden bölme uygulamalarında sıfıra bölme kontrolü finalde çok çıkabilecek bir mantıktır."
  },

  {
    q: "try-catch yapısı kullanılmazsa hatalı kullanıcı girişi programda neye yol açabilir?",
    t: "mcq",
    o: [
      "Programın daha güzel görünmesine",
      "Formun otomatik büyümesine",
      "Dizinin otomatik dolmasına",
      "Button'ın otomatik tıklanmasına",
      "Programın kontrolsüz şekilde hata verip durmasına"
    ],
    a: 4,
    difficulty: "medium",
    week: 14,
    topic: "Hata Yönetimi Önemi",
    importance: 5,
    explanation: "Kullanıcı her zaman doğru veri girmeyebilir. try-catch yoksa abc gibi geçersiz giriş veya sıfıra bölme gibi durumlarda program hata verip durabilir. try-catch, bu hataları kontrollü şekilde yönetmek için kullanılır."
  },

  {
    q: "Genel catch bloğu hangi durumda devreye girer?",
    t: "mcq",
    o: [
      "Özel catch bloklarının yakalamadığı farklı bir hata oluşursa",
      "Hiç hata oluşmazsa",
      "finally çalışmadan önce her zaman",
      "Sadece kullanıcı doğru sayı girerse",
      "Program tasarım ekranındayken"
    ],
    a: 0,
    difficulty: "hard",
    week: 13,
    topic: "Genel catch",
    importance: 5,
    explanation: "catch (Exception ex) genel hata yakalama bloğudur. Özel olarak yakalanmayan beklenmeyen hataları yakalar. Bu blok genellikle en sona yazılır; çünkü Exception en genel hata sınıfıdır."
  },

  // =========================================================
  // ==== ÖNCEKİ HAFTALAR – TEMEL GÖRSEL PROGRAMLAMA (12) =====
  // =========================================================

  {
    q: "Görsel programlama nedir?",
    t: "mcq",
    o: [
      "Sadece komut satırından işlem yapmak",
      "Grafiksel öğeler ve arayüzler kullanarak program geliştirmek",
      "Sadece veritabanı sorgusu yazmak",
      "Sadece donanım tasarlamak",
      "Sadece dosya sıkıştırmak"
    ],
    a: 1,
    difficulty: "easy",
    week: 1,
    topic: "Görsel Programlama Tanımı",
    importance: 5,
    explanation: "Görsel programlama, programı yalnızca yazılı komutlarla değil, form, buton, metin kutusu, blok veya grafiksel bileşenlerle geliştirme yaklaşımıdır. Kullanıcı arayüzü daha anlaşılır ve etkileşimli hale gelir."
  },

  {
    q: "Visual Studio hangi amaçla kullanılır?",
    t: "mcq",
    o: [
      "Sadece resim düzenlemek",
      "Sadece müzik çalmak",
      "Yazılım geliştirmek",
      "Sadece internet hızını ölçmek",
      "Sadece dosya silmek"
    ],
    a: 2,
    difficulty: "easy",
    week: 1,
    topic: "Visual Studio",
    importance: 5,
    explanation: "Visual Studio, Microsoft tarafından geliştirilen bir yazılım geliştirme ortamıdır. Windows Forms, konsol uygulaması, web uygulaması gibi farklı proje türlerinde kod yazmayı ve arayüz tasarlamayı sağlar."
  },

  {
    q: "Windows Forms'ta pencere yapısına ne ad verilir?",
    t: "mcq",
    o: [
      "Toolbox",
      "Label",
      "Button",
      "Form",
      "Class Library"
    ],
    a: 3,
    difficulty: "easy",
    week: 1,
    topic: "Form",
    importance: 5,
    explanation: "Windows Forms uygulamasında kullanıcıya görünen ana pencere Form olarak adlandırılır. Kontroller bu Form üzerine eklenir. Form, görsel programlamada arayüzün temel taşıdır."
  },

  {
    q: "Toolbox'ın görevi nedir?",
    t: "mcq",
    o: [
      "Programı çalıştırmak",
      "Hataları otomatik düzeltmek",
      "Kodları silmek",
      "Veritabanı yedeği almak",
      "Forma eklenecek hazır kontrol nesnelerini sunmak"
    ],
    a: 4,
    difficulty: "easy",
    week: 1,
    topic: "Toolbox",
    importance: 5,
    explanation: "Toolbox, Button, TextBox, Label, ComboBox gibi hazır kontrollerin bulunduğu bölümdür. Programcı bu kontrolleri forma sürükleyip bırakarak arayüz oluşturur."
  },

  {
    q: "Label kontrolünün temel görevi nedir?",
    t: "mcq",
    o: [
      "Kullanıcıya bilgi göstermek",
      "Dosya seçtirmek",
      "Kullanıcıdan uzun metin almak",
      "Döngü oluşturmak",
      "Programı kapatmak"
    ],
    a: 0,
    difficulty: "easy",
    week: 1,
    topic: "Label",
    importance: 5,
    explanation: "Label, form üzerinde kullanıcıya sabit bilgi veya hesaplama sonucu göstermek için kullanılır. Kullanıcı Label içeriğini doğrudan yazıp değiştirmez; programcı Text özelliğiyle değeri ayarlar."
  },

  {
    q: "TextBox kontrolü ne için kullanılır?",
    t: "mcq",
    o: [
      "Sadece sonuç göstermek",
      "Kullanıcıdan veri almak",
      "Sadece resim göstermek",
      "Sadece ilerleme çubuğu oluşturmak",
      "Sadece formu kapatmak"
    ],
    a: 1,
    difficulty: "easy",
    week: 1,
    topic: "TextBox",
    importance: 5,
    explanation: "TextBox, kullanıcıdan veri almak için kullanılır. Ad, soyad, şifre, vize notu, final notu gibi değerler TextBox içine yazılır. Program bu değeri TextBox.Text özelliğiyle okur."
  },

  {
    q: "Button kontrolünün en sık kullanılan olayı hangisidir?",
    t: "mcq",
    o: [
      "Load",
      "Visible",
      "Click",
      "ForeColor",
      "Maximum"
    ],
    a: 2,
    difficulty: "easy",
    week: 1,
    topic: "Button",
    importance: 5,
    explanation: "Button'ın en sık kullanılan olayı Click'tir. Kullanıcı butona tıkladığında Click olayına yazılmış kodlar çalışır. Hesapla, Kaydet, Sil gibi işlemler genellikle Button Click içinde yapılır."
  },

  {
    q: "Label1.Text = 'Sonuç'; kodu ne yapar?",
    t: "mcq",
    o: [
      "Label'ı siler",
      "Label rengini değiştirir",
      "Programı kapatır",
      "Label üzerinde Sonuç yazısını gösterir",
      "Yeni form oluşturur"
    ],
    a: 3,
    difficulty: "easy",
    week: 1,
    topic: "Text Özelliği",
    importance: 5,
    explanation: "Text özelliği, kontrol üzerinde görünen yazıyı belirler. Label1.Text = 'Sonuç' ifadesi Label üzerinde Sonuç metninin görünmesini sağlar."
  },

  {
    q: "TextBox1.Text = 'Deneme'; ifadesinde çift tırnak neden kullanılır?",
    t: "mcq",
    o: [
      "Sayısal işlem yapılacağını göstermek için",
      "Button oluşturmak için",
      "Döngü başlatmak için",
      "Formu kapatmak için",
      "Metin/string değer belirtmek için"
    ],
    a: 4,
    difficulty: "medium",
    week: 1,
    topic: "String Kullanımı",
    importance: 4,
    explanation: "C# dilinde metinsel değerler çift tırnak içinde yazılır. 'Deneme' bir metindir, yani string değerdir. TextBox'ın Text özelliği de metin tuttuğu için çift tırnak kullanılır."
  },

  {
    q: "MessageBox.Show('Merhaba'); komutu ne yapar?",
    t: "mcq",
    o: [
      "Kullanıcıya mesaj kutusu gösterir",
      "TextBox'ı temizler",
      "Button'ı gizler",
      "Dizi oluşturur",
      "Formu otomatik siler"
    ],
    a: 0,
    difficulty: "easy",
    week: 1,
    topic: "MessageBox",
    importance: 5,
    explanation: "MessageBox.Show kullanıcıya küçük bir mesaj penceresi gösterir. Hata, bilgi, uyarı veya işlem sonucu göstermek için kullanılır. Örneğin hatalı girişlerde kullanıcıyı uyarmak için uygundur."
  },

  {
    q: "Form üzerine kontrol eklemek için genellikle hangi yöntem kullanılır?",
    t: "mcq",
    o: [
      "Sadece bilgisayarı yeniden başlatmak",
      "Toolbox'tan sürükle-bırak yapmak",
      "Veritabanı silmek",
      "Programı kapatmak",
      "Ekran kartını değiştirmek"
    ],
    a: 1,
    difficulty: "easy",
    week: 1,
    topic: "Arayüz Tasarımı",
    importance: 5,
    explanation: "Windows Forms'ta arayüz tasarlarken Toolbox açılır, istenen kontrol seçilir ve forma sürüklenip bırakılır. Bu, görsel programlamanın temel pratiklerinden biridir."
  },

  {
    q: "Bir görsel program genel olarak hangi iki ana parçadan oluşur?",
    t: "mcq",
    o: [
      "Klavye ve fare",
      "RAM ve disk",
      "Arayüz kısmı ve kod kısmı",
      "Internet ve modem",
      "Ses ve video"
    ],
    a: 2,
    difficulty: "easy",
    week: 1,
    topic: "Program Yapısı",
    importance: 5,
    explanation: "Arayüz kısmı kullanıcının gördüğü Form ve kontrollerden oluşur. Kod kısmı ise bu kontrollerin ne yapacağını belirler. Örneğin Button arayüzdür, Button_Click içine yazılan hesaplama kod kısmıdır."
  },

  // =========================================================
  // ==== ÖNCEKİ HAFTALAR – VERİ TİPLERİ / OPERATÖRLER (10) ===
  // =========================================================

  {
    q: "Veri tipi neyi belirler?",
    t: "mcq",
    o: [
      "Formun rengini",
      "Button'ın konumunu",
      "Programın klasörünü",
      "Bir değişkenin tutacağı veri türünü",
      "MessageBox başlığını"
    ],
    a: 3,
    difficulty: "easy",
    week: 2,
    topic: "Veri Tipleri",
    importance: 5,
    explanation: "Veri tipi, bir değişkenin hangi tür değer saklayacağını belirtir. int tam sayı, double ondalıklı sayı, string metin, bool doğru/yanlış değeri tutar. Yanlış veri tipi seçimi hatalara neden olabilir."
  },

  {
    q: "Boolean veri tipi hangi değerleri tutar?",
    t: "mcq",
    o: [
      "Sadece metin",
      "Sadece ondalıklı sayı",
      "Sadece resim",
      "Sadece tarih",
      "True veya False"
    ],
    a: 4,
    difficulty: "easy",
    week: 2,
    topic: "Boolean",
    importance: 5,
    explanation: "Boolean mantıksal veri tipidir. Yalnızca true veya false değerlerini tutar. If koşullarında ve seçim kontrollerinde sık kullanılır."
  },

  {
    q: "String veri tipi hangi tür veriyi tutar?",
    t: "mcq",
    o: [
      "Metin",
      "Sadece tam sayı",
      "Sadece doğru/yanlış",
      "Sadece görsel",
      "Sadece döngü"
    ],
    a: 0,
    difficulty: "easy",
    week: 2,
    topic: "String",
    importance: 5,
    explanation: "String metin veri tipidir. Kullanıcı adı, soyad, açıklama, adres gibi yazılar string olarak saklanır. Çift tırnak içindeki değerler string kabul edilir."
  },

  {
    q: "Integer veri tipi ne için kullanılır?",
    t: "mcq",
    o: [
      "Metin tutmak için",
      "Tam sayı tutmak için",
      "Resim göstermek için",
      "Form oluşturmak için",
      "Dosya seçmek için"
    ],
    a: 1,
    difficulty: "easy",
    week: 2,
    topic: "Integer",
    importance: 5,
    explanation: "Integer yani int tam sayı tutar. 5, 10, 42 gibi ondalıksız sayılar int olabilir. Vize ve final notları tam sayı alınacaksa int kullanılabilir."
  },

  {
    q: "Aritmetik operatörlerden hangisi çarpma işlemini yapar?",
    t: "mcq",
    o: [
      "+",
      "-",
      "*",
      "==",
      "&&"
    ],
    a: 2,
    difficulty: "easy",
    week: 2,
    topic: "Aritmetik Operatörler",
    importance: 5,
    explanation: "* operatörü çarpma işlemi yapar. Aritmetik operatörler sayısal işlemler içindir: + toplama, - çıkarma, * çarpma, / bölme."
  },

  {
    q: "== operatörü ne için kullanılır?",
    t: "mcq",
    o: [
      "Değer atamak için",
      "Metin birleştirmek için",
      "Döngü başlatmak için",
      "Eşitlik karşılaştırması yapmak için",
      "Formu kapatmak için"
    ],
    a: 3,
    difficulty: "medium",
    week: 2,
    topic: "Karşılaştırma Operatörü",
    importance: 5,
    explanation: "== iki değerin eşit olup olmadığını kontrol eder. = atama operatörüdür, == karşılaştırma operatörüdür. Bu fark sınavda çok karıştırılır."
  },

  {
    q: "&& operatörü hangi mantığı temsil eder?",
    t: "mcq",
    o: [
      "VEYA",
      "DEĞİL",
      "Toplama",
      "Bölme",
      "VE"
    ],
    a: 4,
    difficulty: "medium",
    week: 2,
    topic: "Mantıksal Operatör",
    importance: 5,
    explanation: "&& mantıksal VE anlamına gelir. Sonucun true olması için iki koşulun da doğru olması gerekir. Örneğin not >= 50 && devamsizlik < 5 gibi."
  },

  {
    q: "|| operatörü hangi mantığı temsil eder?",
    t: "mcq",
    o: [
      "VEYA",
      "VE",
      "Eşittir",
      "Çarpma",
      "Bölme"
    ],
    a: 0,
    difficulty: "medium",
    week: 2,
    topic: "OR Operatörü",
    importance: 5,
    explanation: "|| mantıksal VEYA anlamına gelir. Koşullardan en az biri doğruysa sonuç true olur. Örneğin kullanıcı admin veya öğretmen ise giriş izni verilebilir."
  },

  {
    q: "TextBox'tan alınan sayı ile işlem yapmadan önce ne yapılmalıdır?",
    t: "mcq",
    o: [
      "Form kapatılmalıdır",
      "TextBox.Text sayısal tipe dönüştürülmelidir",
      "Button silinmelidir",
      "Label gizlenmelidir",
      "Döngü sonsuz yapılmalıdır"
    ],
    a: 1,
    difficulty: "medium",
    week: 2,
    topic: "Tip Dönüşümü",
    importance: 5,
    explanation: "TextBox.Text string döndürür. Matematiksel işlem yapmak için int.Parse, Convert.ToInt32 veya double.Parse gibi yöntemlerle sayısal tipe çevrilmelidir. Aksi halde doğru hesaplama yapılamaz."
  },

  {
    q: "Liste veya Array yapısı ne işe yarar?",
    t: "mcq",
    o: [
      "Sadece formu renklendirir",
      "Sadece programı kapatır",
      "Birden fazla değeri saklar",
      "Sadece hata mesajı verir",
      "Sadece Button oluşturur"
    ],
    a: 2,
    difficulty: "easy",
    week: 2,
    topic: "Liste / Array",
    importance: 5,
    explanation: "Array veya liste birden fazla veriyi tek yapı altında saklamayı sağlar. Örneğin 5 notu veya 10 sayıyı ayrı ayrı değişkenlerde tutmak yerine dizi içinde tutmak daha düzenlidir."
  },

  // =========================================================
  // ==== ÖNCEKİ HAFTALAR – GİRİŞ/ÇIKIŞ VE SEÇİM KONTROLLERİ (10)
  // =========================================================

  {
    q: "Input yani giriş işlemi ne demektir?",
    t: "mcq",
    o: [
      "Programın kullanıcıya sonuç göstermesi",
      "Programın kapanması",
      "Kullanıcıdan programa veri alınması",
      "Formun silinmesi",
      "Label renginin değişmesi"
    ],
    a: 2,
    difficulty: "easy",
    week: 3,
    topic: "Input",
    importance: 5,
    explanation: "Input, kullanıcının programa veri vermesidir. Örneğin TextBox'a sayı yazmak, ComboBox'tan şehir seçmek, RadioButton seçmek giriş işlemidir."
  },

  {
    q: "Output yani çıkış işlemi ne demektir?",
    t: "mcq",
    o: [
      "Kullanıcıdan veri almak",
      "Programın kullanıcıya bilgi veya sonuç göstermesi",
      "Programın dosya yolunu silmesi",
      "Sadece Button oluşturması",
      "Veri tipini değiştirmesi"
    ],
    a: 1,
    difficulty: "easy",
    week: 3,
    topic: "Output",
    importance: 5,
    explanation: "Output, programın kullanıcıya bilgi sunmasıdır. Label üzerinde sonuç göstermek veya MessageBox ile uyarı vermek çıkış işlemidir."
  },

  {
    q: "CheckBox kontrolü ne zaman uygundur?",
    t: "mcq",
    o: [
      "Sadece tek seçenek seçilecekse",
      "Bir veya birden fazla seçenek işaretlenebilecekse",
      "Sadece sayı girilecekse",
      "Sadece sonuç gösterilecekse",
      "Program kapatılacaksa"
    ],
    a: 1,
    difficulty: "medium",
    week: 3,
    topic: "CheckBox",
    importance: 5,
    explanation: "CheckBox, kullanıcının birden fazla seçeneği aynı anda seçebilmesine uygundur. Örneğin ilgi alanları spor, müzik, kitap gibi seçeneklerden birkaçı seçilebilir."
  },

  {
    q: "RadioButton kontrolünün temel özelliği nedir?",
    t: "mcq",
    o: [
      "Metin girişi almak",
      "Sadece resim göstermek",
      "Bir seçenek grubundan yalnızca birini seçtirmek",
      "Dizi oluşturmak",
      "Dosya kaydetmek"
    ],
    a: 2,
    difficulty: "medium",
    week: 3,
    topic: "RadioButton",
    importance: 5,
    explanation: "RadioButton, bir grup seçenekten yalnızca birinin seçilmesi gereken durumlarda kullanılır. Örneğin cinsiyet, ödeme yöntemi veya sınıf seçimi gibi tek seçimli alanlarda uygundur."
  },

  {
    q: "ComboBox hangi amaçla kullanılır?",
    t: "mcq",
    o: [
      "Hata yakalamak",
      "Kod derlemek",
      "Form kapatmak",
      "Açılır listeden seçim yaptırmak",
      "MessageBox göstermek"
    ],
    a: 3,
    difficulty: "easy",
    week: 3,
    topic: "ComboBox",
    importance: 5,
    explanation: "ComboBox, açılır liste şeklinde seçenek sunar. Kullanıcı listeden bir seçenek seçer. Örneğin ülke, şehir, bölüm veya sınıf seçimi için kullanılabilir."
  },

  {
    q: "FileDialog ne için kullanılır?",
    t: "mcq",
    o: [
      "Button'a renk vermek",
      "TextBox'ı silmek",
      "Döngü oluşturmak",
      "Label'a sonuç yazmak",
      "Kullanıcıya dosya seçtirmek veya kaydettirmek"
    ],
    a: 4,
    difficulty: "medium",
    week: 3,
    topic: "FileDialog",
    importance: 4,
    explanation: "FileDialog, kullanıcının bilgisayardan dosya seçmesini veya dosya kaydetmesini sağlar. Dosya açma ve kaydetme işlemlerinde kullanılır."
  },

  {
    q: "Hatalı girişte kullanıcıya uyarı vermek için en uygun yapı hangisidir?",
    t: "mcq",
    o: [
      "MessageBox.Show",
      "int[]",
      "for",
      "ProgressBar.Maximum",
      "Toolbox"
    ],
    a: 0,
    difficulty: "easy",
    week: 3,
    topic: "Uyarı Mesajı",
    importance: 5,
    explanation: "MessageBox.Show kullanıcıya uyarı, hata veya bilgi mesajı göstermek için kullanılır. Hatalı girişlerde kullanıcıyı bilgilendirmek için çok uygundur."
  },

  {
    q: "Kullanıcıdan metin almak için en uygun kontrol hangisidir?",
    t: "mcq",
    o: [
      "Label",
      "TextBox",
      "ProgressBar",
      "PictureBox",
      "Timer"
    ],
    a: 1,
    difficulty: "easy",
    week: 3,
    topic: "Veri Girişi",
    importance: 5,
    explanation: "TextBox kullanıcıdan metin veya sayı girişi almak için kullanılan temel kontroldür. Label bilgi göstermek için kullanılır; TextBox veri almak için kullanılır."
  },

  {
    q: "Bir hesaplama sonucunu ekranda kalıcı biçimde göstermek için hangi kontrol uygundur?",
    t: "mcq",
    o: [
      "FileDialog",
      "Timer",
      "Label",
      "RadioButton",
      "CheckBox"
    ],
    a: 2,
    difficulty: "easy",
    week: 3,
    topic: "Sonuç Gösterme",
    importance: 5,
    explanation: "Label hesaplanan sonucu form üzerinde göstermek için uygundur. Örneğin lblSonuc.Text = 'Ortalama: 75' şeklinde sonuç yazdırılabilir."
  },

  {
    q: "Kullanıcının sadece bir ödeme yöntemi seçmesi gerekiyorsa hangi kontrol daha uygundur?",
    t: "mcq",
    o: [
      "CheckBox",
      "TextBox",
      "ListBox",
      "RadioButton",
      "ProgressBar"
    ],
    a: 3,
    difficulty: "medium",
    week: 3,
    topic: "Tek Seçim",
    importance: 4,
    explanation: "RadioButton, birden fazla seçenekten yalnızca birini seçtirmek için uygundur. Bir ödeme yöntemi seçilecekse aynı grup içinde RadioButton kullanılabilir."
  },

  // =========================================================
  // ==== ÖNCEKİ HAFTALAR – KARAR YAPILARI VE BLOK ARAÇLAR (10)
  // =========================================================

  {
    q: "If-Else yapısı ne için kullanılır?",
    t: "mcq",
    o: [
      "Sadece metin yazmak için",
      "Sadece dizi oluşturmak için",
      "Sadece form çizmek için",
      "Sadece dosya seçmek için",
      "Koşula göre farklı işlemler yaptırmak için"
    ],
    a: 4,
    difficulty: "easy",
    week: 4,
    topic: "If-Else",
    importance: 5,
    explanation: "If-Else karar yapısıdır. Koşul doğruysa if bloğu, yanlışsa else bloğu çalışır. Örneğin ortalama >= 50 ise geçti, değilse kaldı yazdırılır."
  },

  {
    q: "if (ortalama >= 50) koşulu neyi kontrol eder?",
    t: "mcq",
    o: [
      "Ortalamanın 50 veya daha büyük olup olmadığını",
      "Ortalamanın metin olup olmadığını",
      "Formun açık olup olmadığını",
      "Button'ın rengini",
      "Dizinin boş olup olmadığını"
    ],
    a: 0,
    difficulty: "easy",
    week: 4,
    topic: "Koşul Kontrolü",
    importance: 5,
    explanation: ">= operatörü büyük eşittir anlamına gelir. Bu koşul, ortalama 50 veya üzerindeyse true olur. Öğrencinin geçip kalma durumunu belirlemek için kullanılır."
  },

  {
    q: "Else bloğu ne zaman çalışır?",
    t: "mcq",
    o: [
      "Her zaman",
      "If koşulu yanlış olduğunda",
      "Sadece program açılırken",
      "Sadece dizi doluyken",
      "Sadece MessageBox kapanınca"
    ],
    a: 1,
    difficulty: "easy",
    week: 4,
    topic: "Else",
    importance: 5,
    explanation: "Else bloğu, if koşulu false olduğunda çalışır. Yani koşul sağlanmazsa alternatif işlem yapılır. Geçti/kaldı örneğinde ortalama 50'den küçükse else kısmı çalışabilir."
  },

  {
    q: "Görsel programlama araçlarından Scratch'in temel özelliği nedir?",
    t: "mcq",
    o: [
      "Sadece veritabanı yönetmek",
      "Sadece kodu makine diline çevirmek",
      "Sürükle-bırak bloklarla programlama yapmak",
      "Sadece Windows kurmak",
      "Sadece dosya sıkıştırmak"
    ],
    a: 2,
    difficulty: "easy",
    week: 4,
    topic: "Scratch",
    importance: 4,
    explanation: "Scratch, sürükle-bırak bloklarla programlama öğretir. Kod yazmayı yeni öğrenenler için algoritma mantığını görsel hale getirir."
  },

  {
    q: "Blockly nasıl bir araçtır?",
    t: "mcq",
    o: [
      "Sadece resim editörü",
      "Sadece işletim sistemi",
      "Sadece klavye uygulaması",
      "Blokları birleştirerek program yazmayı sağlayan araç",
      "Sadece veritabanı sunucusu"
    ],
    a: 3,
    difficulty: "medium",
    week: 4,
    topic: "Blockly",
    importance: 4,
    explanation: "Blockly, blok tabanlı açık kaynaklı bir görsel programlama aracıdır. Kullanıcı blokları birleştirerek program akışı oluşturur. Kod yazmayı kolaylaştırır."
  },

  {
    q: "App Inventor hangi tür uygulamalar için kullanılır?",
    t: "mcq",
    o: [
      "Sadece masaüstü BIOS ayarı",
      "Sadece SQL sorgusu",
      "Sadece ses düzenleme",
      "Sadece ekran kartı testi",
      "Mobil uygulama geliştirme"
    ],
    a: 4,
    difficulty: "easy",
    week: 4,
    topic: "App Inventor",
    importance: 4,
    explanation: "App Inventor, blok tabanlı olarak mobil uygulama geliştirmeyi sağlayan bir araçtır. Özellikle yeni başlayanlar için mobil programlama mantığını görsel hale getirir."
  },

  {
    q: "Değişkenler ne için kullanılır?",
    t: "mcq",
    o: [
      "Değerleri saklamak için",
      "Sadece programı silmek için",
      "Sadece form rengini değiştirmek için",
      "Sadece dosya seçmek için",
      "Sadece MessageBox başlığı yapmak için"
    ],
    a: 0,
    difficulty: "easy",
    week: 4,
    topic: "Değişken",
    importance: 5,
    explanation: "Değişken, program içinde bir değeri saklamak için kullanılır. Örneğin vize, final, ortalama gibi değerler değişkenlerde tutulabilir."
  },

  {
    q: "Görsel programlamada 'bağlantı kurma' neyi ifade eder?",
    t: "mcq",
    o: [
      "Sadece internet bağlanmasını",
      "Blokların program akışına göre birbirine bağlanmasını",
      "Formun kapatılmasını",
      "Dizinin silinmesini",
      "Label'ın kırmızı yapılmasını"
    ],
    a: 1,
    difficulty: "medium",
    week: 4,
    topic: "Program Akışı",
    importance: 4,
    explanation: "Görsel programlamada bloklar doğru sırayla birbirine bağlanır. Bu bağlantılar programın hangi adımda ne yapacağını belirler. Yani program akışı oluşturulur."
  },

  {
    q: "Koşul ifadeleri programda ne sağlar?",
    t: "mcq",
    o: [
      "Programın hiç karar vermemesini",
      "Sadece tüm işlemlerin tekrar etmesini",
      "Belirli koşullara göre işlem seçmeyi",
      "Sadece arka plan resmi eklemeyi",
      "Sadece programı derlemeyi"
    ],
    a: 2,
    difficulty: "medium",
    week: 4,
    topic: "Conditionals",
    importance: 5,
    explanation: "Koşul ifadeleri belirli bir durum doğruysa bir işlemi, yanlışsa başka bir işlemi yaptırır. If-Else bunun en temel örneğidir."
  },

  {
    q: "Atama blokları veya atama işlemleri ne için kullanılır?",
    t: "mcq",
    o: [
      "Formu kapatmak için",
      "Button'a tıklamak için",
      "Döngüyü tamamen yasaklamak için",
      "Bir değişkene değer vermek veya değerini değiştirmek için",
      "MessageBox simgesini değiştirmek için"
    ],
    a: 3,
    difficulty: "medium",
    week: 4,
    topic: "Atama",
    importance: 5,
    explanation: "Atama işlemi bir değişkene değer vermektir. Örneğin ortalama = 70; ifadesi ortalama değişkenine 70 değerini atar. Program içinde veriler bu şekilde güncellenir."
  },

  // =========================================================
  // ==== ÖNCEKİ HAFTALAR – DÖNGÜLER (10) =====================
  // =========================================================

  {
    q: "Döngü nedir?",
    t: "mcq",
    o: [
      "Sadece mesaj kutusu",
      "Sadece veri tipi",
      "Sadece arayüz rengi",
      "Sadece kullanıcı girişi",
      "Bir kod bloğunu belirli şart veya sayı boyunca tekrar çalıştıran yapı"
    ],
    a: 4,
    difficulty: "easy",
    week: 6,
    topic: "Döngü Tanımı",
    importance: 5,
    explanation: "Döngüler tekrar eden işlemleri kolaylaştırır. Aynı kodu birçok kez yazmak yerine for, while veya do-while ile tekrar ettirilir. Bu hem kodu kısaltır hem de daha düzenli hale getirir."
  },

  {
    q: "For döngüsü hangi durumda daha uygundur?",
    t: "mcq",
    o: [
      "Tekrar sayısı belli olduğunda",
      "Hata yakalamak gerektiğinde",
      "Dosya seçmek gerektiğinde",
      "Sadece Label göstermek gerektiğinde",
      "Program kapatılacağında"
    ],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "For Döngüsü",
    importance: 5,
    explanation: "For döngüsü, tekrar sayısı baştan biliniyorsa uygundur. Örneğin 1'den 10'a kadar yazdırmak veya 5 sayı üzerinde işlem yapmak için for kullanılabilir."
  },

  {
    q: "While döngüsü hangi mantıkla çalışır?",
    t: "mcq",
    o: [
      "Hiç koşul kontrol etmez",
      "Şart doğru olduğu sürece çalışır",
      "Sadece bir kez çalışır",
      "Sadece form tasarlar",
      "Sadece hata yakalar"
    ],
    a: 1,
    difficulty: "easy",
    week: 6,
    topic: "While Döngüsü",
    importance: 5,
    explanation: "While döngüsü önce koşulu kontrol eder. Koşul true olduğu sürece döngü bloğu çalışmaya devam eder. Koşul false olduğunda döngü biter."
  },

  {
    q: "Do-While döngüsünün ayırt edici özelliği nedir?",
    t: "mcq",
    o: [
      "Hiç çalışmaması",
      "Sadece hata vermesi",
      "En az bir kez çalışması",
      "Sadece Label oluşturması",
      "Sadece dosya açması"
    ],
    a: 2,
    difficulty: "medium",
    week: 6,
    topic: "Do-While",
    importance: 5,
    explanation: "Do-While döngüsünde kod bloğu önce çalışır, koşul sonra kontrol edilir. Bu yüzden koşul yanlış olsa bile döngü en az bir kez çalışır."
  },

  {
    q: "while(true) yapısında çıkış şartı yazılmazsa ne olur?",
    t: "mcq",
    o: [
      "Program otomatik kapanır",
      "Dizi otomatik dolar",
      "Button otomatik silinir",
      "Sonsuz döngü oluşabilir",
      "Label otomatik temizlenir"
    ],
    a: 3,
    difficulty: "medium",
    week: 6,
    topic: "Sonsuz Döngü",
    importance: 5,
    explanation: "while(true) koşulu her zaman doğru olduğu için döngü kendiliğinden bitmez. İçeride break veya başka çıkış şartı yoksa sonsuz döngü oluşur ve program donabilir."
  },

  {
    q: "for (int i = 0; i < 10; i++) döngüsünde i++ ne yapar?",
    t: "mcq",
    o: [
      "i değerini sıfırlar",
      "Döngüyü siler",
      "Formu kapatır",
      "TextBox'a yazı yazar",
      "Her turdan sonra i değerini 1 artırır"
    ],
    a: 4,
    difficulty: "medium",
    week: 6,
    topic: "Sayaç Artışı",
    importance: 5,
    explanation: "i++ sayaç değişkenini her turdan sonra 1 artırır. Böylece i değeri 0,1,2... şeklinde ilerler. i < 10 koşulu false olduğunda döngü biter."
  },

  {
    q: "ListBox'a 1'den 10'a kadar eleman eklemek için en uygun yapı hangisidir?",
    t: "mcq",
    o: [
      "for döngüsü",
      "Sadece if",
      "Sadece MessageBox",
      "Sadece FileDialog",
      "Sadece Label"
    ],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "ListBox Döngü",
    importance: 5,
    explanation: "1'den 10'a kadar tekrar sayısı belli olduğu için for döngüsü uygundur. Her turda listBox1.Items.Add(...) ile listeye yeni eleman eklenebilir."
  },

  {
    q: "ProgressBar.Value neyi temsil eder?",
    t: "mcq",
    o: [
      "TextBox içeriğini",
      "ProgressBar'ın mevcut ilerleme değerini",
      "Button adını",
      "Form başlığını",
      "Döngü türünü"
    ],
    a: 1,
    difficulty: "medium",
    week: 6,
    topic: "ProgressBar",
    importance: 4,
    explanation: "ProgressBar.Value ilerlemenin mevcut seviyesini temsil eder. Maximum ise ulaşılabilecek en yüksek değerdir. Value artırıldıkça ilerleme çubuğu dolar."
  },

  {
    q: "Thread.Sleep(100) genel olarak ne yapar?",
    t: "mcq",
    o: [
      "Programı derler",
      "Diziyi sıralar",
      "Çalışan işlemi kısa süre bekletir",
      "TextBox'ı siler",
      "MessageBox başlığını değiştirir"
    ],
    a: 2,
    difficulty: "medium",
    week: 6,
    topic: "Thread.Sleep",
    importance: 3,
    explanation: "Thread.Sleep(100), çalışan iş parçacığını 100 milisaniye bekletir. ProgressBar örneğinde ilerlemenin gözle görülmesi için kullanılabilir. Ancak yanlış kullanılırsa arayüz geçici olarak donabilir."
  },

  {
    q: "Döngülerin programlamadaki en önemli faydası nedir?",
    t: "mcq",
    o: [
      "Programı bozması",
      "Kod tekrarını artırması",
      "Hata yakalamayı engellemesi",
      "Tekrar eden işleri kısa ve düzenli yazmayı sağlaması",
      "Her zaman sonsuz çalışması"
    ],
    a: 3,
    difficulty: "easy",
    week: 6,
    topic: "Döngü Avantajı",
    importance: 5,
    explanation: "Döngüler tekrar eden işlemleri tek bir yapı içinde yönetir. Örneğin 100 kez aynı işlemi yapmak için 100 satır yazmak yerine bir döngü kullanılır. Bu kodun okunabilirliğini artırır."
  },

  // =========================================================
  // ==== ÖNCEKİ HAFTALAR – FONKSİYONLAR (10) ================
  // =========================================================

  {
    q: "Fonksiyon veya metot nedir?",
    t: "mcq",
    o: [
      "Sadece form rengi",
      "Sadece TextBox adı",
      "Sadece dizi elemanı",
      "Sadece hata mesajı",
      "Belirli bir işi yapan tekrar kullanılabilir kod bloğu"
    ],
    a: 4,
    difficulty: "easy",
    week: 8,
    topic: "Fonksiyon Tanımı",
    importance: 5,
    explanation: "Fonksiyon, belirli bir görevi yerine getiren kod bloğudur. Aynı işi tekrar tekrar yazmak yerine fonksiyon olarak tanımlanır ve gerektiğinde çağrılır. Kod tekrarını azaltır."
  },

  {
    q: "void anahtar kelimesi ne anlama gelir?",
    t: "mcq",
    o: [
      "Fonksiyonun geriye değer döndürmediğini",
      "Fonksiyonun mutlaka sayı döndürdüğünü",
      "Fonksiyonun sadece dizi olduğunu",
      "Fonksiyonun hata olduğunu",
      "Fonksiyonun form olduğunu"
    ],
    a: 0,
    difficulty: "easy",
    week: 8,
    topic: "void",
    importance: 5,
    explanation: "void, fonksiyonun geriye değer döndürmediğini belirtir. Örneğin ekrana mesaj yazdıran veya Label değerini değiştiren fonksiyonlar void olabilir."
  },

  {
    q: "return ifadesinin görevi nedir?",
    t: "mcq",
    o: [
      "Programı kapatmak",
      "Fonksiyondan değer döndürmek",
      "TextBox silmek",
      "Döngüyü sonsuz yapmak",
      "Formu küçültmek"
    ],
    a: 1,
    difficulty: "medium",
    week: 8,
    topic: "return",
    importance: 5,
    explanation: "return, fonksiyonun ürettiği sonucu çağıran yere geri gönderir. Örneğin KareAl fonksiyonu sayının karesini hesaplayıp return ile sonucu döndürür."
  },

  {
    q: "int KareAl(int sayi) fonksiyonunda sayi nedir?",
    t: "mcq",
    o: [
      "Form adı",
      "Button olayı",
      "Parametre",
      "MessageBox",
      "Döngü türü"
    ],
    a: 2,
    difficulty: "medium",
    week: 8,
    topic: "Parametre",
    importance: 5,
    explanation: "sayi, fonksiyona dışarıdan gönderilen parametredir. Fonksiyon bu değeri kullanarak işlem yapar. Örneğin KareAl(5) çağrılırsa sayi parametresi 5 olur."
  },

  {
    q: "Parametresiz fonksiyon için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Mutlaka dışarıdan değer alır",
      "Asla çalışmaz",
      "Sadece hata üretir",
      "Dışarıdan değer almadan çalışabilir",
      "Sadece Button olabilir"
    ],
    a: 3,
    difficulty: "easy",
    week: 8,
    topic: "Parametresiz Fonksiyon",
    importance: 5,
    explanation: "Parametresiz fonksiyonun parantez içinde aldığı değer yoktur. Örneğin RastgeleSayi() dışarıdan değer almadan kendi içinde sayı üretebilir."
  },

  {
    q: "Fonksiyonların avantajlarından biri hangisidir?",
    t: "mcq",
    o: [
      "Kod tekrarını artırır",
      "Programı anlaşılmaz yapar",
      "Döngüleri yok eder",
      "Butonları siler",
      "Kod tekrarını azaltır"
    ],
    a: 4,
    difficulty: "easy",
    week: 8,
    topic: "Fonksiyon Avantajı",
    importance: 5,
    explanation: "Fonksiyonlar aynı işlemi tek bir yerde tanımlamayı sağlar. Bu sayede kod tekrarı azalır, bakım kolaylaşır ve program daha okunabilir olur."
  },

  {
    q: "Fonksiyonlar çağrıldığında parametreler bellekte genellikle nerede tutulur?",
    t: "mcq",
    o: [
      "Stack üzerinde",
      "Toolbox içinde",
      "Form başlığında",
      "MessageBox içinde",
      "Label renginde"
    ],
    a: 0,
    difficulty: "hard",
    week: 8,
    topic: "Stack",
    importance: 4,
    explanation: "PDF'de fonksiyon çağrıldığında parametrelerin stack yani yığın üzerinde tutulduğu belirtilir. Stack, fonksiyon çağrıları ve yerel değişkenlerin yönetildiği bellek alanıdır."
  },

  {
    q: "void Degistir(int x) { x = 10; } örneğinde ana değişken neden etkilenmez?",
    t: "mcq",
    o: [
      "Fonksiyon hiç çalışmadığı için",
      "Değer tipli parametre kopya olarak gönderildiği için",
      "x string olduğu için",
      "return olmadığı için program kapanır",
      "Label kullanılmadığı için"
    ],
    a: 1,
    difficulty: "hard",
    week: 8,
    topic: "Değer Tipli Parametre",
    importance: 5,
    explanation: "int değer tipidir. Fonksiyona gönderildiğinde değerin kopyası gider. Fonksiyon içinde x değişse bile ana fonksiyondaki asıl değişken değişmez. Bu, değer tipli parametrelerin temel mantığıdır."
  },

  {
    q: "OrtalamaHesapla fonksiyonu ne için kullanılır?",
    t: "mcq",
    o: [
      "Formu kapatmak için",
      "TextBox silmek için",
      "Vize ve final notlarından ortalama hesaplamak için",
      "Döngü oluşturmak için",
      "Dosya seçmek için"
    ],
    a: 2,
    difficulty: "medium",
    week: 8,
    topic: "Not Hesaplama Fonksiyonu",
    importance: 5,
    explanation: "OrtalamaHesapla fonksiyonu, vize ve final gibi notları alıp ortalama sonucunu hesaplamak için yazılır. Böylece hesaplama kodu tek yerde toplanır ve buton tıklama olayında sadece fonksiyon çağrılır."
  },

  {
    q: "Fonksiyonlar Windows Forms'ta genellikle nasıl tetiklenir?",
    t: "mcq",
    o: [
      "Sadece bilgisayar açılınca",
      "Sadece dosya silinince",
      "Sadece ekran kapanınca",
      "Buton tıklama gibi olaylarla",
      "Sadece internet bağlanınca"
    ],
    a: 3,
    difficulty: "medium",
    week: 8,
    topic: "Fonksiyon Çağırma",
    importance: 5,
    explanation: "Windows Forms'ta kullanıcı bir butona tıkladığında Click olayı çalışır. Bu olay içinde fonksiyon çağrılabilir. Örneğin btnHesapla_Click içinde OrtalamaHesapla fonksiyonu çağrılır."
  },

  // =========================================================
  // ==== ÖNCEKİ HAFTALAR – FİNAL TİPİ SENARYO/KOD (8) ========
  // =========================================================

  {
    q: "Vize ve final notu TextBox'tan alınıp sonuç Label'da gösterilecekse en doğru kontrol eşleşmesi hangisidir?",
    t: "mcq",
    o: [
      "TextBox veri alır, Label sonuç gösterir",
      "Label veri alır, TextBox sonuç gösterir",
      "Button veri saklar, Form sonuç hesaplar",
      "ProgressBar sayı girer, Toolbox sonuç gösterir",
      "FileDialog ortalama hesaplar"
    ],
    a: 0,
    difficulty: "medium",
    week: 8,
    topic: "Windows Forms Senaryosu",
    importance: 5,
    explanation: "TextBox kullanıcıdan veri almak için, Label kullanıcıya sonuç göstermek için kullanılır. Button ise hesaplama işlemini başlatır. Bu üçlü Windows Forms sınavlarında çok sık çıkar."
  },

  {
    q: "DurumBelirle fonksiyonu 'Geçti' veya 'Kaldı' döndürecekse en uygun dönüş tipi hangisidir?",
    t: "mcq",
    o: [
      "int",
      "string",
      "Button",
      "Form",
      "ProgressBar"
    ],
    a: 1,
    difficulty: "medium",
    week: 8,
    topic: "Fonksiyon Dönüş Tipi",
    importance: 5,
    explanation: "Geçti ve Kaldı metinsel ifadelerdir. Metin döndüren fonksiyonun dönüş tipi string olmalıdır. int sayı, void değer döndürmeme anlamına gelir."
  },

  {
    q: "Bir ortalama hesaplama uygulamasında hatalı giriş yapılırsa ne yapılmalıdır?",
    t: "mcq",
    o: [
      "Program sessizce kapanmalıdır",
      "Yanlış veri doğru kabul edilmelidir",
      "Kullanıcı MessageBox ile uyarılmalıdır",
      "Label kalıcı olarak silinmelidir",
      "Button yok edilmelidir"
    ],
    a: 2,
    difficulty: "medium",
    week: 8,
    topic: "Hatalı Giriş",
    importance: 5,
    explanation: "Kullanıcı sayı yerine harf girebilir veya boş bırakabilir. Böyle durumlarda programın çökmesi yerine kullanıcıya anlaşılır uyarı verilmelidir. MessageBox bu iş için uygundur."
  },

  {
    q: "btnHesapla_Click bloğunun temel görevi nedir?",
    t: "mcq",
    o: [
      "Formu tasarım moduna almak",
      "Toolbox açmak",
      "Programı kurmak",
      "Hesapla butonuna basıldığında çalışacak kodları barındırmak",
      "Sadece dosya seçmek"
    ],
    a: 3,
    difficulty: "medium",
    week: 8,
    topic: "Button Click",
    importance: 5,
    explanation: "btnHesapla_Click bir olay metodudur. Kullanıcı Hesapla butonuna tıkladığında bu blok çalışır. TextBox'tan veriler burada okunabilir, fonksiyon çağrılabilir ve sonuç Label'a yazılabilir."
  },

  {
    q: "double OrtalamaHesapla(double vize, double final) yapısında double dönüş tipi neden uygundur?",
    t: "mcq",
    o: [
      "Çünkü fonksiyon hiç değer döndürmez",
      "Çünkü sonuç sadece metin olmalıdır",
      "Çünkü fonksiyon Button döndürür",
      "Çünkü vize ve final silinir",
      "Çünkü ortalama ondalıklı çıkabilir"
    ],
    a: 4,
    difficulty: "hard",
    week: 8,
    topic: "Ortalama Fonksiyonu",
    importance: 5,
    explanation: "Ortalama hesabında sonuç 74.5 gibi ondalıklı olabilir. Bu nedenle double uygun bir sayısal dönüş tipidir. int kullanılırsa ondalıklı kısım kaybedilebilir."
  },

  {
    q: "BMI hesabında boy ve kilo TextBox'tan geliyorsa neden double.Parse kullanılabilir?",
    t: "mcq",
    o: [
      "Ondalıklı sayı dönüşümü gerektiği için",
      "Label'ı gizlemek için",
      "Button'ı silmek için",
      "Formu kapatmak için",
      "Diziyi sıralamak için"
    ],
    a: 0,
    difficulty: "medium",
    week: 8,
    topic: "BMI Hesaplama",
    importance: 4,
    explanation: "Boy ve kilo ondalıklı olabilir. Örneğin boy 1.75 olarak girilebilir. Bu yüzden TextBox.Text değerini double'a çevirmek BMI gibi hesaplamalarda daha uygundur."
  },

  {
    q: "if (bmi < 18.5) sonuc = 'Zayıf'; satırı ne yapar?",
    t: "mcq",
    o: [
      "BMI değerini siler",
      "BMI 18.5'ten küçükse sonucu Zayıf yapar",
      "Formu kapatır",
      "Diziyi oluşturur",
      "Button'a tıklar"
    ],
    a: 1,
    difficulty: "medium",
    week: 8,
    topic: "BMI If",
    importance: 4,
    explanation: "Bu satır bir koşul kontrolüdür. bmi değeri 18.5'ten küçükse sonuc değişkenine Zayıf metni atanır. Bu, if yapısının karar verme amacıyla kullanımına örnektir."
  },

  {
    q: "Kodun okunabilirliğini artırmak için ortalama ve durum belirleme işlemlerini ayrı fonksiyonlara bölmek hangi avantajı sağlar?",
    t: "mcq",
    o: [
      "Programı daha karışık yapar",
      "Kod tekrarını artırır",
      "Modülerlik ve bakım kolaylığı sağlar",
      "Hataları gizler",
      "Butonları çalışmaz hale getirir"
    ],
    a: 2,
    difficulty: "hard",
    week: 8,
    topic: "Modülerlik",
    importance: 5,
    explanation: "Her işi ayrı fonksiyona bölmek programı daha anlaşılır yapar. OrtalamaHesapla sadece ortalama hesaplar, DurumBelirle sadece geçti/kaldı durumunu verir. Bu yaklaşım kod tekrarını azaltır ve bakım kolaylığı sağlar."
  }
];
