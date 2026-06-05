

window.questionBank = [
  // =========================================================
  // ==== 3. HAFTA – KOŞUL YAPILARI (8) ======================
  // =========================================================

  {
    q: "Sadece bir koşul doğruysa çalışacak en temel yapı hangisidir?",
    t: "mcq",
    o: ["if", "else", "switch", "for", "while"],
    a: 0,
    difficulty: "easy",
    week: 3,
    topic: "If Yapısı",
    importance: 5,
    explanation: "if yapısı, bir koşulu kontrol eder. Koşul doğruysa ilgili kod çalışır. Koşul, programın karar vermesi için kontrol edilen ifadedir."
  },
  {
    q: "Bir koşul doğruysa bir işlem, yanlışsa başka işlem yaptıran yapı hangisidir?",
    t: "mcq",
    o: ["if", "if-else", "switch-case", "foreach", "do-while"],
    a: 1,
    difficulty: "easy",
    week: 3,
    topic: "If-Else",
    importance: 5,
    explanation: "if-else yapısı iki yönlü karar vermeyi sağlar. Şart doğruysa ilk blok, yanlışsa else bloğu çalışır. Bu yapı program akışını kontrol etmek için çok kullanılır."
  },
  {
    q: "Birden fazla koşulu sıralı biçimde kontrol etmek için en uygun yapı hangisidir?",
    t: "mcq",
    o: ["if", "else", "if-elseif-else", "switch", "while"],
    a: 2,
    difficulty: "easy",
    week: 3,
    topic: "If-Elseif-Else",
    importance: 5,
    explanation: "if-elseif-else yapısı birden fazla olasılığı sırayla kontrol eder. İlk doğru koşul bulunduğunda onun kodu çalışır. Böylece çoklu karar mekanizması kurulmuş olur."
  },
  {
    q: "Aynı değişkenin farklı sabit değerlerini kontrol etmek için en uygun yapı hangisidir?",
    t: "mcq",
    o: ["if", "elseif", "while", "switch-case", "for"],
    a: 3,
    difficulty: "easy",
    week: 3,
    topic: "Switch-Case",
    importance: 5,
    explanation: "switch-case yapısı, bir değişkenin farklı değerlerine göre işlem yapmak için kullanılır. Özellikle çok sayıda if-elseif yazmak yerine daha düzenli bir çözüm sunar."
  },
  {
    q: "Koşul yapılarında kontrol edilen ifade genellikle hangi tür sonuç üretir?",
    t: "mcq",
    o: ["Metin", "Dizi", "Nesne", "Dosya", "true / false"],
    a: 4,
    difficulty: "easy",
    week: 3,
    topic: "Boolean Mantığı",
    importance: 5,
    explanation: "Koşullar çoğunlukla true ya da false üretir. Boolean, iki değerli mantıksal veri türüdür. Program bu sonuca göre hangi kodun çalışacağına karar verir."
  },
  {
    q: "Tek yönlü karar mekanizması olarak bilinen yapı hangisidir?",
    t: "mcq",
    o: ["if", "if-else", "switch", "for", "foreach"],
    a: 0,
    difficulty: "medium",
    week: 3,
    topic: "Karar Mekanizması",
    importance: 4,
    explanation: "if yapısı tek yönlüdür. Yani koşul doğruysa işlem yapılır, yanlışsa genelde hiçbir şey yapılmaz. Bu yüzden en basit karar yapısıdır."
  },
  {
    q: "switch-case yapısında bir case bloğunun sonunda genellikle hangi ifade kullanılır?",
    t: "mcq",
    o: ["return", "break", "exit", "die", "echo"],
    a: 1,
    difficulty: "medium",
    week: 3,
    topic: "Switch-Case",
    importance: 5,
    explanation: "break, switch yapısında eşleşen case çalıştıktan sonra diğer case'lere geçilmesini engeller. Kullanılmazsa istenmeyen biçimde alttaki case'ler de çalışabilir."
  },
  {
    q: "Hiçbir case eşleşmezse switch yapısında hangi bölüm çalışır?",
    t: "mcq",
    o: ["if", "break", "default", "else", "return"],
    a: 2,
    difficulty: "easy",
    week: 3,
    topic: "Switch Default",
    importance: 4,
    explanation: "default bölümü, hiçbir case değeri uyuşmadığında çalışan yedek kısımdır. Bu, else mantığına benzer ama switch yapısı içinde kullanılır."
  },

  // =========================================================
  // ==== 4. HAFTA – DÖNGÜLER (8) =============================
  // =========================================================

  {
    q: "Belirli sayıda tekrar yapacak işlemler için en uygun döngü hangisidir?",
    t: "mcq",
    o: ["while", "foreach", "do-while", "for", "switch"],
    a: 3,
    difficulty: "easy",
    week: 4,
    topic: "For Döngüsü",
    importance: 5,
    explanation: "for döngüsü, başlangıç, koşul ve artış/azalış bölümleriyle belirli sayıda tekrar yapar. Sayaç mantığıyla çalışan işlemlerde çok kullanılır."
  },
  {
    q: "Koşul doğru olduğu sürece çalışan döngü hangisidir?",
    t: "mcq",
    o: ["for", "foreach", "if", "switch", "while"],
    a: 4,
    difficulty: "easy",
    week: 4,
    topic: "While Döngüsü",
    importance: 5,
    explanation: "while döngüsü, verilen şart doğru olduğu sürece çalışır. Koşul her turda tekrar kontrol edilir. Bu yüzden koşul yanlış olduğunda döngü sona erer."
  },
  {
    q: "Koşul yanlış olsa bile en az bir kez çalışan döngü hangisidir?",
    t: "mcq",
    o: ["do-while", "for", "while", "switch", "if"],
    a: 0,
    difficulty: "medium",
    week: 4,
    topic: "Do-While",
    importance: 5,
    explanation: "do-while döngüsünde önce kod çalışır, sonra koşul kontrol edilir. Bu nedenle en az bir kez çalışması garanti edilir."
  },
  {
    q: "Diziler üzerinde sırayla dolaşmak için en uygun döngü hangisidir?",
    t: "mcq",
    o: ["if", "foreach", "switch", "do", "case"],
    a: 1,
    difficulty: "easy",
    week: 4,
    topic: "Foreach",
    importance: 5,
    explanation: "foreach, dizi elemanlarını tek tek dolaşmak için kullanılır. Dizi, birden fazla veriyi tek değişken altında tutan yapıdır. Bu yüzden foreach özellikle dizi işlemlerinde çok pratiktir."
  },
  {
    q: "Bir döngünün içinde başka bir döngü kullanmaya ne denir?",
    t: "mcq",
    o: ["Çift koşul", "Dallanma", "İç içe döngü", "Sabit döngü", "Mantıksal blok"],
    a: 2,
    difficulty: "medium",
    week: 4,
    topic: "İç İçe Döngü",
    importance: 4,
    explanation: "İç içe döngü, bir döngünün içinde başka bir döngü bulunmasıdır. Tablo oluşturma, matris gezme ve çok boyutlu veri işlemlerinde sık kullanılır."
  },
  {
    q: "Döngüyü tamamen sonlandıran ifade hangisidir?",
    t: "mcq",
    o: ["continue", "pass", "next", "break", "stop"],
    a: 3,
    difficulty: "easy",
    week: 4,
    topic: "Break",
    importance: 5,
    explanation: "break, bulunduğu döngüyü tamamen bitirir. Yani döngü kalan turlara devam etmez. Özellikle bir koşul sağlandığında döngüden çıkmak için kullanılır."
  },
  {
    q: "Döngüde mevcut turu atlayıp bir sonraki tura geçiren ifade hangisidir?",
    t: "mcq",
    o: ["break", "return", "skip", "pass", "continue"],
    a: 4,
    difficulty: "easy",
    week: 4,
    topic: "Continue",
    importance: 5,
    explanation: "continue, döngüyü bitirmez; yalnızca o anki turu atlar. Sonraki tekrar adımına geçer. Bu, bazı değerleri işlem dışı bırakmak için kullanışlıdır."
  },
  {
    q: "Yanlış koşul yazımı nedeniyle hiç bitmeyen döngüye ne denir?",
    t: "mcq",
    o: ["Sonsuz döngü", "Dış döngü", "İç döngü", "Statik döngü", "Mantık bloğu"],
    a: 0,
    difficulty: "medium",
    week: 4,
    topic: "Sonsuz Döngü",
    importance: 4,
    explanation: "Sonsuz döngü, çıkış şartı olmadığı için sürekli çalışan döngüdür. Bu durum programın kilitlenmesine veya gereksiz kaynak tüketimine yol açabilir."
  },

  // =========================================================
  // ==== 5. HAFTA – STRING FONKSİYONLARI (8) ================
  // =========================================================

  {
    q: "Bir metnin karakter sayısını bulmak için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["substr()", "strlen()", "strpos()", "trim()", "explode()"],
    a: 1,
    difficulty: "easy",
    week: 5,
    topic: "strlen",
    importance: 5,
    explanation: "strlen(), bir string içindeki karakter sayısını döndürür. String, metin veri türüdür. Boşluklar da karakter olarak sayılır."
  },
  {
    q: "Türkçe gibi çok baytlı karakterlerde daha doğru uzunluk hesabı için hangi fonksiyon tercih edilir?",
    t: "mcq",
    o: ["strlen()", "str_word_count()", "mb_strlen()", "substr()", "ucfirst()"],
    a: 2,
    difficulty: "medium",
    week: 5,
    topic: "mb_strlen",
    importance: 5,
    explanation: "mb_strlen(), çok baytlı karakterlerle doğru çalışır. Çok baytlı karakter, bellekte birden fazla byte yer kaplayan karakterdir. Türkçe karakterlerde bu önemlidir."
  },
  {
    q: "Bir metni tamamen büyük harfe çevirmek için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["strtolower()", "ucfirst()", "trim()", "strtoupper()", "substr()"],
    a: 3,
    difficulty: "easy",
    week: 5,
    topic: "strtoupper",
    importance: 4,
    explanation: "strtoupper(), metindeki harfleri büyük harfe çevirir. Metin dönüştürme işlemleri form verisi düzenleme ve kullanıcı çıktıları hazırlamada sık kullanılır."
  },
  {
    q: "Bir metni tamamen küçük harfe çevirmek için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["ucfirst()", "str_replace()", "explode()", "implode()", "strtolower()"],
    a: 4,
    difficulty: "easy",
    week: 5,
    topic: "strtolower",
    importance: 4,
    explanation: "strtolower(), metindeki harfleri küçük harfe dönüştürür. Bu işlem özellikle karşılaştırmalarda veya standartlaştırma gerektiğinde yararlıdır."
  },
  {
    q: "Bir metnin başındaki ve sonundaki boşlukları temizlemek için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["trim()", "strlen()", "substr()", "strpos()", "strcmp()"],
    a: 0,
    difficulty: "easy",
    week: 5,
    topic: "trim",
    importance: 5,
    explanation: "trim(), metnin başındaki ve sonundaki gereksiz boşlukları siler. Kullanıcıdan gelen verileri temizlemek için çok önemlidir."
  },
  {
    q: "Bir metnin belirli bölümünü almak için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["strpos()", "substr()", "trim()", "explode()", "strrev()"],
    a: 1,
    difficulty: "easy",
    week: 5,
    topic: "substr",
    importance: 5,
    explanation: "substr(), string içinden belirli konumdan başlayarak parça alır. Bu işleme alt metin çıkarma denir."
  },
  {
    q: "Bir metin içinde aranan ifadenin konumunu bulmak için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["substr()", "strlen()", "strpos()", "trim()", "explode()"],
    a: 2,
    difficulty: "easy",
    week: 5,
    topic: "strpos",
    importance: 5,
    explanation: "strpos(), aranan ifadenin metin içinde ilk geçtiği konumu verir. Konum, karakter dizisi içindeki başlangıç indeksidir."
  },
  {
    q: "Bir metindeki ifadeyi başka bir ifadeyle değiştirmek için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["strpos()", "substr()", "trim()", "str_replace()", "explode()"],
    a: 3,
    difficulty: "easy",
    week: 5,
    topic: "str_replace",
    importance: 5,
    explanation: "str_replace(), belirli metinleri başka metinlerle değiştirir. Örneğin bir isimdeki hatalı karakterleri düzeltmek için kullanılabilir."
  },

  // =========================================================
  // ==== 6. HAFTA – GET, POST, SUPERGLOBALS (8) ==============
  // =========================================================

  {
    q: "Verileri URL üzerinden gönderen HTTP yöntemi hangisidir?",
    t: "mcq",
    o: ["PUT", "PATCH", "DELETE", "REQUEST", "GET"],
    a: 4,
    difficulty: "easy",
    week: 6,
    topic: "GET",
    importance: 5,
    explanation: "GET yöntemi verileri URL üzerinden taşır. Bu nedenle adres çubuğunda görülebilir. Küçük ve hassas olmayan verilerde kullanılması daha uygundur."
  },
  {
    q: "Verileri HTTP isteğinin gövdesi ile gönderen yöntem hangisidir?",
    t: "mcq",
    o: ["POST", "GET", "LINK", "HEAD", "TRACE"],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "POST",
    importance: 5,
    explanation: "POST yöntemi veriyi URL yerine body kısmında gönderir. Body, HTTP isteğinin veri taşıyan bölümüdür. Daha büyük ve daha hassas veriler için uygundur."
  },
  {
    q: "GET yöntemi ile gelen verilere PHP'de hangi süper global dizi ile erişilir?",
    t: "mcq",
    o: ["$_POST", "$_GET", "$_SERVER", "$_FILES", "$_SESSION"],
    a: 1,
    difficulty: "easy",
    week: 6,
    topic: "$_GET",
    importance: 5,
    explanation: "$_GET, URL üzerinden gelen verileri tutan süper global dizidir. Süper global, PHP'nin her yerinden erişilebilen özel değişken yapısıdır."
  },
  {
    q: "POST yöntemi ile gelen verilere PHP'de hangi süper global dizi ile erişilir?",
    t: "mcq",
    o: ["$_GET", "$_COOKIE", "$_POST", "$_SESSION", "$_FILES"],
    a: 2,
    difficulty: "easy",
    week: 6,
    topic: "$_POST",
    importance: 5,
    explanation: "$_POST, form gibi kaynaklardan POST ile gelen verileri alır. Özellikle kullanıcı girişi ve kayıt formlarında sık kullanılır."
  },
  {
    q: "Hem $_GET hem $_POST hem de $_COOKIE verilerini birlikte içerebilen yapı hangisidir?",
    t: "mcq",
    o: ["$_SERVER", "$_SESSION", "$_FILES", "$_REQUEST", "$_ENV"],
    a: 3,
    difficulty: "medium",
    week: 6,
    topic: "$_REQUEST",
    importance: 4,
    explanation: "$_REQUEST, farklı kaynaklardan gelen verileri tek yapı altında sunabilir. Ancak hangi yöntemle geldiğini ayırt etmek zorlaşabileceği için dikkatli kullanılmalıdır."
  },
  {
    q: "Şifre gibi hassas veriler için hangi yöntem tercih edilmelidir?",
    t: "mcq",
    o: ["GET", "REQUEST", "COOKIE", "LINK", "POST"],
    a: 4,
    difficulty: "easy",
    week: 6,
    topic: "Güvenlik",
    importance: 5,
    explanation: "POST, hassas veriler için GET'e göre daha uygundur çünkü veri URL'de görünmez. Yine de bu tek başına tam güvenlik anlamına gelmez; ek güvenlik önlemleri de gerekir."
  },
  {
    q: "Bir bağlantıya soru işareti ve parametrelerle veri eklenmesi genellikle hangi yöntemle ilişkilidir?",
    t: "mcq",
    o: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "URL Parametreleri",
    importance: 4,
    explanation: "GET verileri query string denen URL parametre yapısı ile taşır. Query string, adresin sonuna eklenen anahtar=değer çiftlerinden oluşur."
  },
  {
    q: "GET yönteminde çok uzun veri gönderilirse yaşanabilecek temel sorun hangisidir?",
    t: "mcq",
    o: ["Sunucu kapanır", "URL uzunluk sınırı aşılabilir", "MySQL silinir", "PHP durur", "Tarayıcı kapanır"],
    a: 1,
    difficulty: "medium",
    week: 6,
    topic: "GET Sınırları",
    importance: 4,
    explanation: "GET ile veri URL'de taşındığı için uzunluk sınırı problemi olabilir. Uzun verilerde veri kaybı veya isteğin hatalı çalışması yaşanabilir."
  },

  // =========================================================
  // ==== 7. HAFTA – DOSYA YÜKLEME (8) ========================
  // =========================================================

  {
    q: "PHP'de yüklenen dosya bilgilerine hangi süper global dizi ile erişilir?",
    t: "mcq",
    o: ["$_POST", "$_GET", "$_FILES", "$_REQUEST", "$_SESSION"],
    a: 2,
    difficulty: "easy",
    week: 7,
    topic: "$_FILES",
    importance: 5,
    explanation: "$_FILES, kullanıcı tarafından yüklenen dosyaların bilgilerini tutar. Dosya adı, geçici yol, boyut ve hata kodu gibi alanlar içerir."
  },
  {
    q: "HTML formunda dosya yükleme yapılabilmesi için enctype değeri ne olmalıdır?",
    t: "mcq",
    o: ["text/plain", "application/json", "urlencoded", "multipart/form-data", "file/data"],
    a: 3,
    difficulty: "easy",
    week: 7,
    topic: "enctype",
    importance: 5,
    explanation: "multipart/form-data, formda dosya gönderimi için gerekli kodlamadır. Bu değer olmazsa dosya içeriği sunucuya doğru iletilmez."
  },
  {
    q: "Geçici dizine alınan dosyayı kalıcı konuma taşımak için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["move_file()", "upload_file()", "file_put_contents()", "copy()", "move_uploaded_file()"],
    a: 4,
    difficulty: "easy",
    week: 7,
    topic: "move_uploaded_file",
    importance: 5,
    explanation: "move_uploaded_file(), yüklenen dosyayı geçici konumdan geliştiricinin belirlediği klasöre taşır. Kalıcı konum, dosyanın daha sonra da kullanılabileceği hedef klasördür."
  },
  {
    q: "$_FILES dizisindeki error alanında 0 değeri ne anlama gelir?",
    t: "mcq",
    o: ["Dosya bozuk", "Sunucu kapalı", "Dosya silinmiş", "Yükleme başarılı", "Dosya okunamadı"],
    a: 3,
    difficulty: "medium",
    week: 7,
    topic: "Hata Kodları",
    importance: 5,
    explanation: "error alanında 0 olması, yani UPLOAD_ERR_OK, yükleme işleminin başarılı olduğu anlamına gelir. Hata kodları, dosya yükleme sürecinde ne olduğunu anlamak için kullanılır."
  },
  {
    q: "$_FILES['file']['tmp_name'] alanı neyi ifade eder?",
    t: "mcq",
    o: ["Son kaydedilen klasör", "Kalıcı dosya adı", "Tarayıcı türü", "Boyut bilgisi", "Geçici dosya yolu"],
    a: 4,
    difficulty: "medium",
    week: 7,
    topic: "tmp_name",
    importance: 4,
    explanation: "tmp_name, yüklenen dosyanın sunucuda geçici olarak tutulduğu yolu gösterir. Dosya kalıcı hale getirilecekse bu yoldan alınarak taşınır."
  },
  {
    q: "Bir klasörün var olup olmadığını kontrol etmek için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["is_dir()", "mkdir()", "file()", "fopen()", "chmod()"],
    a: 0,
    difficulty: "easy",
    week: 7,
    topic: "is_dir",
    importance: 4,
    explanation: "is_dir(), verilen yolun bir klasör olup olmadığını kontrol eder. Dosya yüklemeden önce hedef klasörün varlığı bu şekilde test edilir."
  },
  {
    q: "Yeni bir klasör oluşturmak için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["is_dir()", "mkdir()", "rename()", "unlink()", "copy()"],
    a: 1,
    difficulty: "easy",
    week: 7,
    topic: "mkdir",
    importance: 4,
    explanation: "mkdir(), yeni klasör oluşturur. Klasör, dosyaların tutulduğu dizin yapısıdır. Dosya yükleme sistemlerinde uploads klasörü oluşturmak için kullanılır."
  },
  {
    q: "Dosya yükleme işleminde güvenlik için en önemli kontrollerden biri hangisidir?",
    t: "mcq",
    o: ["Monitör çözünürlüğünü kontrol etmek", "IP adresini yazdırmak", "Dosya türü ve boyutunu doğrulamak", "URL kısaltmak", "Cookie temizlemek"],
    a: 2,
    difficulty: "medium",
    week: 7,
    topic: "Upload Güvenliği",
    importance: 5,
    explanation: "Dosya türü ve boyut kontrolü, zararlı veya aşırı büyük dosyaların sunucuya yüklenmesini engeller. Doğrulama, gelen verinin beklenen kurallara uygun olup olmadığını test etme işlemidir."
  },

  // =========================================================
  // ==== 8. HAFTA – SESSION YÖNETİMİ (8) =====================
  // =========================================================

  {
    q: "HTTP protokolünün durumsuz (stateless) olması ne anlama gelir?",
    t: "mcq",
    o: ["Her isteğin birbirinden bağımsız kabul edilmesi", "Her isteğin dosya indirmesi", "Her isteğin şifrelenmesi", "Her isteğin saklanması", "Her isteğin yönlendirilmesi"],
    a: 0,
    difficulty: "medium",
    week: 8,
    topic: "HTTP Stateless",
    importance: 5,
    explanation: "Stateless, yani durumsuz, her HTTP isteğinin bağımsız değerlendirilmesi demektir. Sunucu önceki isteği doğal olarak hatırlamaz. Bu yüzden oturum mekanizmalarına ihtiyaç duyulur."
  },
  {
    q: "PHP'de oturum başlatmak için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["session_destroy()", "session_start()", "session_id()", "setcookie()", "start_session()"],
    a: 1,
    difficulty: "easy",
    week: 8,
    topic: "session_start",
    importance: 5,
    explanation: "session_start(), PHP oturumunu başlatır. Oturum başlamadan $_SESSION verilerine sağlıklı biçimde erişilemez."
  },
  {
    q: "Oturum verilerine erişmek için hangi süper global kullanılır?",
    t: "mcq",
    o: ["$_POST", "$_GET", "$_SESSION", "$_COOKIE", "$_FILES"],
    a: 2,
    difficulty: "easy",
    week: 8,
    topic: "$_SESSION",
    importance: 5,
    explanation: "$_SESSION, oturum boyunca saklanan verileri tutar. Örneğin kullanıcının giriş yapıp yapmadığı bilgisi burada tutulabilir."
  },
  {
    q: "Session ID en doğru şekilde neyi ifade eder?",
    t: "mcq",
    o: ["Veritabanı tablosu", "Form adı", "Sunucu adı", "Kullanıcı oturumuna ait benzersiz kimlik", "Dosya uzantısı"],
    a: 3,
    difficulty: "medium",
    week: 8,
    topic: "Session ID",
    importance: 4,
    explanation: "Session ID, her kullanıcı oturumu için üretilen benzersiz kimliktir. Benzersiz, başka bir oturumla karışmayan tekil değer demektir."
  },
  {
    q: "Bir oturumu tamamen sonlandırmak için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["session_start()", "session_id()", "unset()", "destroy()", "session_destroy()"],
    a: 4,
    difficulty: "easy",
    week: 8,
    topic: "session_destroy",
    importance: 5,
    explanation: "session_destroy(), aktif oturumu sonlandırır. Kullanıcı çıkış yaparken sık kullanılır. Böylece sunucudaki oturum bilgileri temizlenir."
  },
  {
    q: "Session ile cookie arasındaki temel fark hangisidir?",
    t: "mcq",
    o: ["Session sunucuda, cookie istemci tarafında tutulur", "İkisi de sadece sunucuda tutulur", "İkisi de sadece veritabanında tutulur", "Session sadece resim saklar", "Cookie sadece şifre saklar"],
    a: 0,
    difficulty: "medium",
    week: 8,
    topic: "Session ve Cookie",
    importance: 5,
    explanation: "Session verileri sunucu tarafında, cookie verileri ise tarayıcıda tutulur. İstemci, hizmet alan taraf yani kullanıcının tarayıcısıdır."
  },
  {
    q: "Kullanıcının giriş yapıp yapmadığını sayfalar arasında takip etmek için en uygun yapı hangisidir?",
    t: "mcq",
    o: ["$_FILES", "$_SESSION", "$_SERVER", "$_ENV", "$_GLOBALS"],
    a: 1,
    difficulty: "easy",
    week: 8,
    topic: "Oturum Kullanımı",
    importance: 5,
    explanation: "Giriş bilgisini takip etmek için session kullanılır. Çünkü oturum verisi sayfalar arası taşınabilir ve sunucu tarafında tutulduğu için daha güvenlidir."
  },
  {
    q: "Alışveriş sepeti gibi geçici kullanıcı verilerini tutmak için en uygun yaklaşım hangisidir?",
    t: "mcq",
    o: ["URL içine yazmak", "Dosya adına eklemek", "Session kullanmak", "Tablo adını değiştirmek", "PHP dosyasını silmek"],
    a: 2,
    difficulty: "easy",
    week: 8,
    topic: "Session Kullanım Alanı",
    importance: 4,
    explanation: "Alışveriş sepeti gibi geçici veriler session içinde tutulabilir. Geçici veri, oturum süresince gerekli olan ama kalıcı veritabanına her an yazılması gerekmeyen bilgidir."
  },

  // =========================================================
  // ==== 9. HAFTA – ADMİN PANELİ (8) =========================
  // =========================================================

  {
    q: "Admin paneli en doğru şekilde neyi ifade eder?",
    t: "mcq",
    o: ["Sadece resim galerisi", "Sadece kullanıcı profili", "Dosya klasörü", "Yönetici işlemlerinin yapıldığı kontrol arayüzü", "Yalnızca stil dosyası"],
    a: 3,
    difficulty: "easy",
    week: 9,
    topic: "Admin Paneli",
    importance: 5,
    explanation: "Admin paneli, yetkili kullanıcıların sistemi yönetmek için kullandığı arayüzdür. Arayüz, kullanıcı ile sistem arasında etkileşim sağlayan ekran yapısıdır."
  },
  {
    q: "Admin kullanıcı şifrelerinin güvenli saklanması için en doğru yöntem hangisidir?",
    t: "mcq",
    o: ["Düz metin olarak saklamak", "Excel dosyasına yazmak", "HTML içine gömmek", "Cookie içinde tutmak", "Hash'lenmiş olarak saklamak"],
    a: 4,
    difficulty: "easy",
    week: 9,
    topic: "Şifre Güvenliği",
    importance: 5,
    explanation: "Hash, verinin tek yönlü matematiksel dönüşümüdür. Şifreler hash'lenmiş tutulursa doğrudan okunamaz. Bu, güvenliği artırır."
  },
  {
    q: "PHP'de MySQL bağlantısı için derste tercih edilen yapı hangisidir?",
    t: "mcq",
    o: ["mysqli", "session", "cookie", "fopen", "strlen"],
    a: 0,
    difficulty: "easy",
    week: 9,
    topic: "mysqli",
    importance: 5,
    explanation: "mysqli, PHP ile MySQL veritabanı arasında bağlantı ve sorgu işlemleri yapmak için kullanılan bir kütüphanedir. Kütüphane, hazır fonksiyonlar sunan kod paketidir."
  },
  {
    q: "Hash'lenmiş parolayı doğrulamak için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["password_hash()", "password_verify()", "md5()", "check_pass()", "verify_hash()"],
    a: 1,
    difficulty: "medium",
    week: 9,
    topic: "password_verify",
    importance: 5,
    explanation: "password_verify(), düz metin parolayı kayıtlı hash ile karşılaştırır. Doğruysa true döndürür. Böylece şifre çözülmeden güvenli kontrol yapılmış olur."
  },
  {
    q: "Kullanıcı giriş yaptıktan sonra durum bilgisini saklamak için en uygun yapı hangisidir?",
    t: "mcq",
    o: ["$_POST", "$_GET", "$_SESSION", "$_FILES", "$_REQUEST"],
    a: 2,
    difficulty: "easy",
    week: 9,
    topic: "Login Durumu",
    importance: 5,
    explanation: "Giriş yapan kullanıcının bilgisi genellikle $_SESSION içinde tutulur. Böylece başka sayfalarda kullanıcının yetkili olup olmadığı anlaşılabilir."
  },
  {
    q: "db.php dosyasının temel amacı genellikle nedir?",
    t: "mcq",
    o: ["Resim çizmek", "CSS yazmak", "Form tasarlamak", "Ortak veritabanı bağlantısını merkezi hale getirmek", "Tarayıcı geçmişi silmek"],
    a: 3,
    difficulty: "medium",
    week: 9,
    topic: "db.php",
    importance: 4,
    explanation: "db.php gibi dosyalar ortak bağlantı kodlarını tek yerde toplar. Merkezi yapı, aynı kodu tekrar tekrar yazmamak ve bakım kolaylığı sağlamak için kullanılır."
  },
  {
    q: "Kullanıcı çıkış yaptığında yapılması gereken temel işlem hangisidir?",
    t: "mcq",
    o: ["Veritabanını silmek", "Sunucuyu kapatmak", "Tüm tabloları boşaltmak", "Şifreyi ekrana yazdırmak", "Oturumu sonlandırmak"],
    a: 4,
    difficulty: "easy",
    week: 9,
    topic: "Logout",
    importance: 5,
    explanation: "Çıkış işleminde oturum sonlandırılır. Böylece kullanıcıya ait yetki bilgileri temizlenir ve başka biri aynı tarayıcıdan sisteme yetkisiz erişemez."
  },
  {
    q: "SQL Injection riskini azaltmada en doğru yaklaşım hangisidir?",
    t: "mcq",
    o: ["Prepared statement kullanmak", "Şifreyi büyük yazmak", "URL kısaltmak", "Formu gizlemek", "Tarayıcıyı yenilemek"],
    a: 0,
    difficulty: "medium",
    week: 9,
    topic: "Prepared Statements",
    importance: 5,
    explanation: "Prepared statement, SQL sorgusu ile kullanıcı verisini ayrı işler. Böylece kötü niyetli girişlerin sorgu yapısını bozması zorlaşır."
  },

  // =========================================================
  // ==== 10. HAFTA – VERİTABANI TEMELLERİ (8) ================
  // =========================================================

  {
    q: "Veritabanı en doğru şekilde nasıl tanımlanır?",
    t: "mcq",
    o: ["Geçici RAM alanı", "Verilerin düzenli şekilde saklandığı ve yönetildiği sistem", "Sadece resim klasörü", "Metin editörü", "Tarayıcı geçmişi"],
    a: 1,
    difficulty: "easy",
    week: 10,
    topic: "Veritabanı",
    importance: 5,
    explanation: "Veritabanı, bilgilerin düzenli şekilde tutulduğu sistemdir. Düzenli yapı sayesinde veri ekleme, arama, güncelleme ve silme işlemleri kolaylaşır."
  },
  {
    q: "DBMS kısaltmasının açılımı nedir?",
    t: "mcq",
    o: ["Data Backup Management System", "Dynamic Base Model Script", "Database Management System", "Digital Binary Main Server", "Data Branch Mapping Service"],
    a: 2,
    difficulty: "easy",
    week: 10,
    topic: "DBMS",
    importance: 5,
    explanation: "DBMS, Database Management System yani Veritabanı Yönetim Sistemi demektir. Bu yazılımlar veritabanı ile kullanıcı ya da uygulama arasındaki işlemleri yönetir."
  },
  {
    q: "PHP'de veritabanı bağlantısı için derste belirtilen iki temel yöntem hangileridir?",
    t: "mcq",
    o: ["HTTP ve FTP", "Session ve Cookie", "GET ve POST", "mysqli ve PDO", "HTML ve CSS"],
    a: 3,
    difficulty: "easy",
    week: 10,
    topic: "Bağlantı Yöntemleri",
    importance: 5,
    explanation: "mysqli ve PDO, PHP'de veritabanı bağlantısı kurmak için yaygın kullanılan iki yöntemdir. PDO farklı veritabanı türleriyle daha esnek çalışma imkânı sunabilir."
  },
  {
    q: "SQL'de yeni bir tablo oluşturmak için hangi komut kullanılır?",
    t: "mcq",
    o: ["ADD TABLE", "MAKE TABLE", "NEW TABLE", "INSERT TABLE", "CREATE TABLE"],
    a: 4,
    difficulty: "easy",
    week: 10,
    topic: "CREATE TABLE",
    importance: 5,
    explanation: "CREATE TABLE, veritabanında yeni tablo oluşturur. Tablo, satır ve sütunlardan oluşan veri yapısıdır."
  },
  {
    q: "PRIMARY KEY neyi ifade eder?",
    t: "mcq",
    o: ["Tablodaki her kayıt için benzersiz ve boş olamayan ana alan", "Sadece metin alanı", "Geçici değişken", "Yedek anahtar", "Dosya adı"],
    a: 0,
    difficulty: "easy",
    week: 10,
    topic: "Primary Key",
    importance: 5,
    explanation: "PRIMARY KEY, her kaydı benzersiz tanımlayan alandır. Benzersiz demek aynı değerin tekrar etmemesi demektir."
  },
  {
    q: "AUTO_INCREMENT özelliği ne işe yarar?",
    t: "mcq",
    o: ["Metni küçültür", "Her yeni kayıt için değeri otomatik artırır", "Tabloyu siler", "Şifreyi çözer", "Kayıtları sıralar"],
    a: 1,
    difficulty: "easy",
    week: 10,
    topic: "AUTO_INCREMENT",
    importance: 5,
    explanation: "AUTO_INCREMENT, genellikle id alanında kullanılır ve her yeni kayıt eklendiğinde değeri otomatik artırır. Böylece geliştirici elle numara vermek zorunda kalmaz."
  },
  {
    q: "VARCHAR veri tipi en uygun olarak ne için kullanılır?",
    t: "mcq",
    o: ["Kesirli sayı", "Tarih", "Değişken uzunlukta metin", "Resim", "Boolean"],
    a: 2,
    difficulty: "easy",
    week: 10,
    topic: "VARCHAR",
    importance: 5,
    explanation: "VARCHAR, değişken uzunlukta metin saklamak için kullanılır. Örneğin ad veya soyad gibi veriler için uygundur."
  },
  {
    q: "INT veri tipi ne tür veri saklar?",
    t: "mcq",
    o: ["Yalnızca harf", "Yalnızca tarih", "Yalnızca resim", "Tam sayı", "Yalnızca URL"],
    a: 3,
    difficulty: "easy",
    week: 10,
    topic: "INT",
    importance: 5,
    explanation: "INT veri tipi tam sayı saklar. Yaş, adet veya id gibi sayısal ama ondalıksız veriler için uygundur."
  },

  // =========================================================
  // ==== 11. HAFTA – VERİTABANI OLUŞTURMA / INSERT (8) =======
  // =========================================================

  {
    q: "Yeni veritabanı oluşturmak için kullanılan SQL komutu hangisidir?",
    t: "mcq",
    o: ["MAKE DATABASE", "NEW DATABASE", "INSERT DATABASE", "BUILD DATABASE", "CREATE DATABASE"],
    a: 4,
    difficulty: "easy",
    week: 11,
    topic: "CREATE DATABASE",
    importance: 5,
    explanation: "CREATE DATABASE komutu yeni bir veritabanı oluşturur. Veritabanı, tabloların tutulduğu ana yapıdır."
  },
  {
    q: "Yeni kayıt eklemek için kullanılan SQL komutu hangisidir?",
    t: "mcq",
    o: ["INSERT INTO", "ADD ROW", "CREATE ROW", "PUT DATA", "NEW RECORD"],
    a: 0,
    difficulty: "easy",
    week: 11,
    topic: "INSERT INTO",
    importance: 5,
    explanation: "INSERT INTO, tabloya yeni kayıt eklemek için kullanılır. Kayıt, tablodaki bir satır anlamına gelir."
  },
  {
    q: "Prepared statement mantığında SQL sorgusunu hazırlayan fonksiyon hangisidir?",
    t: "mcq",
    o: ["execute()", "prepare()", "query()", "connect()", "select()"],
    a: 1,
    difficulty: "medium",
    week: 11,
    topic: "prepare",
    importance: 5,
    explanation: "prepare(), sorgu yapısını önceden hazırlar. Sonra kullanıcı verileri güvenli şekilde bu sorguya bağlanır."
  },
  {
    q: "Prepared statement içindeki ? işaretleri neyi ifade eder?",
    t: "mcq",
    o: ["Hata kodu", "Sabit değer", "Yer tutucu", "Veritabanı adı", "Tablo başlığı"],
    a: 2,
    difficulty: "medium",
    week: 11,
    topic: "Placeholder",
    importance: 5,
    explanation: "Yer tutucu, sorguda daha sonra gerçek değerle doldurulacak boş alan demektir. Bu yapı SQL injection riskini azaltır."
  },
  {
    q: "PHP'de prepared statement içinde değişkenleri sorguya bağlamak için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["prepare()", "query()", "fetch()", "bind_param()", "close()"],
    a: 3,
    difficulty: "medium",
    week: 11,
    topic: "bind_param",
    importance: 5,
    explanation: "bind_param(), değişkenleri prepared statement içindeki yer tutuculara bağlar. Böylece veri ve sorgu ayrı işlenmiş olur."
  },
  {
    q: "\"ssi\" tür dizilimi genelde neyi ifade eder?",
    t: "mcq",
    o: ["string, string, string", "integer, integer, integer", "string, integer, string", "double, string, integer", "string, string, integer"],
    a: 4,
    difficulty: "hard",
    week: 11,
    topic: "Parametre Türleri",
    importance: 4,
    explanation: "bind_param içinde s string, i integer anlamına gelir. Bu yüzden ssi ifadesi iki metin ve bir tam sayı verisi bağlanacağını gösterir."
  },
  {
    q: "Prepared statement hazırlandıktan sonra sorguyu çalıştırmak için hangi işlem yapılır?",
    t: "mcq",
    o: ["execute()", "bind_result()", "store_result()", "fetch()", "close()"],
    a: 0,
    difficulty: "medium",
    week: 11,
    topic: "execute",
    importance: 5,
    explanation: "execute(), hazırlanmış sorgunun veritabanında çalıştırılmasını sağlar. Hazırlama ve çalıştırma adımlarının ayrılması güvenlik ve düzen sağlar."
  },
  {
    q: "Tablodaki kayıtları listelemek için en temel SQL komutu hangisidir?",
    t: "mcq",
    o: ["INSERT", "SELECT", "DELETE", "DROP", "ALTER"],
    a: 1,
    difficulty: "easy",
    week: 11,
    topic: "SELECT",
    importance: 5,
    explanation: "SELECT, veritabanından veri çekmek için kullanılır. Listeleme, arama ve raporlama gibi birçok işlem bu komutla yapılır."
  },

  // =========================================================
  // ==== 12. HAFTA – KAYIT/LİSTELEME/ARAMA (9) ===============
  // =========================================================

  {
    q: "HTML formunda verilerin gönderileceği PHP dosyasını belirleyen özellik hangisidir?",
    t: "mcq",
    o: ["name", "method", "action", "type", "value"],
    a: 2,
    difficulty: "easy",
    week: 12,
    topic: "Form Action",
    importance: 5,
    explanation: "action özelliği, form gönderildiğinde isteğin hangi dosyaya gideceğini belirler. Örneğin kaydet.php gibi bir dosya burada yazılır."
  },
  {
    q: "Form verilerini kayıt amacıyla gönderirken genellikle hangi method kullanılır?",
    t: "mcq",
    o: ["GET", "REQUEST", "PUT", "POST", "TRACE"],
    a: 3,
    difficulty: "easy",
    week: 12,
    topic: "Form Method",
    importance: 5,
    explanation: "POST yöntemi form verilerini body kısmında gönderir. Bu yüzden kayıt işlemlerinde çok tercih edilir."
  },
  {
    q: "Formdan gelen verileri PHP tarafında almak için en uygun süper global hangisidir?",
    t: "mcq",
    o: ["$_GET", "$_FILES", "$_REQUEST", "$_SERVER", "$_POST"],
    a: 4,
    difficulty: "easy",
    week: 12,
    topic: "Form Verisi Alma",
    importance: 5,
    explanation: "Form POST ile gönderildiyse veriler $_POST içinde yer alır. Her form alanının name değeri anahtar olarak kullanılır."
  },
  {
    q: "Formdan alınan verileri veritabanına eklemek için en temel SQL komutu hangisidir?",
    t: "mcq",
    o: ["INSERT INTO", "UPDATE", "DELETE", "SELECT", "ALTER"],
    a: 0,
    difficulty: "easy",
    week: 12,
    topic: "Kayıt İşlemi",
    importance: 5,
    explanation: "INSERT INTO, yeni verileri tabloya ekler. Kullanıcı formu doldurduğunda bu komutla kayıt yapılır."
  },
  {
    q: "prepare() kullanımının temel amacı hangisidir?",
    t: "mcq",
    o: ["Sayfayı renklendirmek", "Sorguyu daha güvenli hale getirmek", "Dosya yüklemek", "Session açmak", "Cookie silmek"],
    a: 1,
    difficulty: "easy",
    week: 12,
    topic: "prepare Güvenliği",
    importance: 5,
    explanation: "prepare(), kullanıcı verisini sorgudan ayırır. Böylece sorgunun zararlı girişlerle bozulma ihtimali azalır."
  },
  {
    q: "Kötü niyetli kullanıcının sorguya zararlı veri ekleyerek SQL yapısını bozmasına ne denir?",
    t: "mcq",
    o: ["XSS", "CSRF", "SQL Injection", "Session Hijacking", "Flood"],
    a: 2,
    difficulty: "medium",
    week: 12,
    topic: "SQL Injection",
    importance: 5,
    explanation: "SQL Injection, kullanıcı girdisinin sorguya zararlı biçimde karışmasıdır. Bu ciddi bir güvenlik açığıdır."
  },
  {
    q: "Form elemanlarında veriyi temsil eden anahtar değer hangi özellik ile verilir?",
    t: "mcq",
    o: ["id", "class", "style", "name", "src"],
    a: 3,
    difficulty: "easy",
    week: 12,
    topic: "name Özelliği",
    importance: 5,
    explanation: "name özelliği, form verisinin PHP tarafında hangi anahtar adıyla geleceğini belirler. Örneğin <input name='ad'> gönderildiğinde $_POST['ad'] ile erişilir."
  },
  {
    q: "Kayıtları ekrana getirmek için en temel SQL komutu hangisidir?",
    t: "mcq",
    o: ["UPDATE", "DELETE", "ALTER", "DROP", "SELECT"],
    a: 4,
    difficulty: "easy",
    week: 12,
    topic: "Listeleme",
    importance: 5,
    explanation: "SELECT komutu verileri çekmek için kullanılır. Listeleme işlemi, tablodaki kayıtların kullanıcıya gösterilmesidir."
  },
  {
    q: "Arama işlemlerinde sonuçları sınırlamak için genellikle hangi SQL bölümü kullanılır?",
    t: "mcq",
    o: ["WHERE", "TABLE", "ORDER", "GROUP", "INDEX"],
    a: 0,
    difficulty: "medium",
    week: 12,
    topic: "Arama",
    importance: 5,
    explanation: "WHERE, sorguda hangi kayıtların seçileceğini belirleyen koşul bölümüdür. Arama, filtreleme ve belirli kayıtları bulmada temel rol oynar."
  },

  // =========================================================
  // ==== 13. HAFTA – GÜNCELLEME / SİLME (9) ==================
  // =========================================================

  {
    q: "Var olan bir kaydı değiştirmek için kullanılan SQL komutu hangisidir?",
    t: "mcq",
    o: ["INSERT", "UPDATE", "DELETE", "SELECT", "ALTER"],
    a: 1,
    difficulty: "easy",
    week: 13,
    topic: "UPDATE",
    importance: 5,
    explanation: "UPDATE komutu, mevcut kaydın alanlarını değiştirmek için kullanılır. Güncelleme, var olan verinin yeni değerlerle değiştirilmesidir."
  },
  {
    q: "Var olan bir kaydı tamamen kaldırmak için kullanılan SQL komutu hangisidir?",
    t: "mcq",
    o: ["UPDATE", "INSERT", "DELETE", "DROP", "ALTER"],
    a: 2,
    difficulty: "easy",
    week: 13,
    topic: "DELETE",
    importance: 5,
    explanation: "DELETE komutu seçilen kayıtları siler. Silme işlemi geri alınamayabileceği için dikkatli yapılmalıdır."
  },
  {
    q: "Güncellenecek kaydın URL'den gelen id ile seçilmesi hangi amaçla yapılır?",
    t: "mcq",
    o: ["Sayfa rengini ayarlamak", "Sunucuyu kapatmak", "Hangi kaydın düzenleneceğini belirlemek", "Cookie silmek", "Dosya yüklemek"],
    a: 2,
    difficulty: "medium",
    week: 13,
    topic: "ID ile Seçim",
    importance: 5,
    explanation: "id değeri, hangi kaydın düzenleneceğini veya silineceğini ayırt etmek için kullanılır. id genellikle benzersiz anahtar alanıdır."
  },
  {
    q: "Güncelleme ve silme işlemlerinde prepared statement kullanılmasının temel nedeni nedir?",
    t: "mcq",
    o: ["Formu kısaltmak", "Resim yüklemek", "Session açmak", "SQL Injection riskini azaltmak", "Tabloyu büyütmek"],
    a: 3,
    difficulty: "medium",
    week: 13,
    topic: "Güvenlik",
    importance: 5,
    explanation: "Prepared statement, kullanıcı girdisinin sorgu yapısını bozmasını engeller. Bu, özellikle update ve delete gibi kritik işlemlerde çok önemlidir."
  },
  {
    q: "DELETE komutunun WHERE olmadan kullanılması ne gibi bir risk doğurur?",
    t: "mcq",
    o: ["Sadece bir kaydı siler", "Bağlantıyı keser", "Sorguyu hızlandırır", "Dosya oluşturur", "Tüm kayıtları silebilir"],
    a: 4,
    difficulty: "hard",
    week: 13,
    topic: "DELETE Riski",
    importance: 5,
    explanation: "WHERE olmadan DELETE kullanılırsa tablo içindeki tüm kayıtlar silinebilir. WHERE bölümü hedef kayıtları sınırlamak için kullanılır."
  },
  {
    q: "Kullanıcının mevcut bilgileri düzenleyebilmesi için form alanlarının eski verilerle doldurulmasına ne denir?",
    t: "mcq",
    o: ["Ön doldurma", "Bağlama", "Temizleme", "Hashleme", "Şifreleme"],
    a: 0,
    difficulty: "medium",
    week: 13,
    topic: "Form Ön Doldurma",
    importance: 4,
    explanation: "Ön doldurma, düzenleme ekranında mevcut verilerin form içine yerleştirilmesidir. Böylece kullanıcı tüm verileri baştan girmek zorunda kalmaz."
  },
  {
    q: "UPDATE sorgusunda hangi kayıtların değişeceğini belirlemek için genellikle hangi bölüm kullanılır?",
    t: "mcq",
    o: ["ORDER BY", "WHERE", "GROUP BY", "HAVING", "LIMIT"],
    a: 1,
    difficulty: "easy",
    week: 13,
    topic: "WHERE",
    importance: 5,
    explanation: "WHERE, hangi kayıtların etkileneceğini belirler. Güncellemede yanlış kayıtların değişmesini önlemek için kritik öneme sahiptir."
  },
  {
    q: "Silme işleminden önce kullanıcıdan onay almak neden faydalıdır?",
    t: "mcq",
    o: ["Kodları yavaşlatır", "Renkleri düzeltir", "Yanlışlıkla veri silinmesini azaltır", "Tablo adını değiştirir", "Sunucuyu yeniden başlatır"],
    a: 2,
    difficulty: "medium",
    week: 13,
    topic: "Silme Onayı",
    importance: 4,
    explanation: "Silme işlemleri geri dönüşü zor olabileceği için kullanıcıdan onay almak veri kaybını azaltır. Bu, kullanılabilirlik ve güvenlik açısından iyi bir uygulamadır."
  },
  {
    q: "Güncelleme veya silme sonrası kullanıcıyı başka sayfaya yönlendirme işlemi niçin yapılır?",
    t: "mcq",
    o: ["RAM temizlemek için", "Şifre üretmek için", "Dosya yüklemek için", "İşlem sonucunu daha düzenli göstermek için", "MAC adresi almak için"],
    a: 3,
    difficulty: "medium",
    week: 13,
    topic: "Yönlendirme",
    importance: 3,
    explanation: "İşlem sonrası yönlendirme, kullanıcı deneyimini düzenler ve sayfanın yeniden gönderilmesi gibi sorunları azaltabilir. Kullanıcı deneyimi, kullanıcının sistemi rahat kullanabilmesidir."
  },

  // =========================================================
  // ==== 14. HAFTA – DOSYA / KLASÖR İŞLEMLERİ (10) ===========
  // =========================================================

  {
    q: "PHP'de dosya açmak için en temel fonksiyon hangisidir?",
    t: "mcq",
    o: ["fopen()", "fread()", "fwrite()", "file()", "unlink()"],
    a: 0,
    difficulty: "easy",
    week: 14,
    topic: "fopen",
    importance: 5,
    explanation: "fopen(), dosyayı belirtilen modda açar. Mod, dosyanın okunacağı mı yazılacağı mı gibi çalışma biçimini belirler."
  },
  {
    q: "'r' modu ne için kullanılır?",
    t: "mcq",
    o: ["Dosyaya ekleme yapmak", "Dosyayı okuma modunda açmak", "Dosyayı silmek", "Yeni klasör açmak", "Dosya adını değiştirmek"],
    a: 1,
    difficulty: "easy",
    week: 14,
    topic: "Dosya Modları",
    importance: 5,
    explanation: "'r' modu, dosyayı yalnızca okumak için açar. Dosya yoksa işlem başarısız olur."
  },
  {
    q: "'w' modu ile dosya açılırsa ne olur?",
    t: "mcq",
    o: ["Dosya sadece okunur", "Dosya olduğu gibi kalır", "Dosya yazmak için açılır ve varsa içeriği sıfırlanır", "Dosya şifrelenir", "Dosya kopyalanır"],
    a: 2,
    difficulty: "easy",
    week: 14,
    topic: "w Modu",
    importance: 5,
    explanation: "'w' modu yazma içindir. Dosya varsa içeriği silinir, yoksa yeni dosya oluşturulur. Bu yüzden dikkatli kullanılmalıdır."
  },
  {
    q: "'a' modu ne işe yarar?",
    t: "mcq",
    o: ["Dosyayı siler", "Sadece okur", "İçeriği sıfırlar", "Dosyanın sonuna ekleme yapar", "Klasör oluşturur"],
    a: 3,
    difficulty: "easy",
    week: 14,
    topic: "a Modu",
    importance: 5,
    explanation: "'a' modu append yani ekleme modudur. Dosyanın mevcut içeriğini silmeden sonuna yeni veri ekler."
  },
  {
    q: "Dosyadan veri okumak için kullanılan fonksiyon hangisidir?",
    t: "mcq",
    o: ["fopen()", "fclose()", "file_put_contents()", "mkdir()", "fread()"],
    a: 4,
    difficulty: "easy",
    week: 14,
    topic: "fread",
    importance: 5,
    explanation: "fread(), açık bir dosyadan belirli miktarda veri okur. Okuma işlemi için dosyanın önce fopen ile açılmış olması gerekir."
  },
  {
    q: "Dosyaya veri yazmak için kullanılan fonksiyon hangisidir?",
    t: "mcq",
    o: ["fwrite()", "fread()", "fclose()", "unlink()", "file()"],
    a: 0,
    difficulty: "easy",
    week: 14,
    topic: "fwrite",
    importance: 5,
    explanation: "fwrite(), açık dosyaya veri yazar. Yazılan veri byte cinsinden değerlendirilebilir; byte, veri depolamada temel ölçü birimidir."
  },
  {
    q: "Dosya sonuna gelinip gelinmediğini kontrol etmek için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["eof()", "feof()", "fend()", "endfile()", "is_end()"],
    a: 1,
    difficulty: "medium",
    week: 14,
    topic: "feof",
    importance: 4,
    explanation: "feof(), file end of file kontrolü yapar. Özellikle while döngüsü ile dosya okurken son satıra gelinip gelinmediğini anlamada kullanılır."
  },
  {
    q: "Tüm dosya içeriğini tek seferde string olarak okumak için hangi fonksiyon kullanılır?",
    t: "mcq",
    o: ["file()", "fread()", "file_get_contents()", "fopen()", "fclose()"],
    a: 2,
    difficulty: "easy",
    week: 14,
    topic: "file_get_contents",
    importance: 5,
    explanation: "file_get_contents(), tüm dosya içeriğini tek seferde alır. Küçük ve orta boy dosyalarda pratik bir çözümdür."
  },
  {
    q: "Tek fonksiyonla dosyaya veri yazmak için hangi yapı kullanılır?",
    t: "mcq",
    o: ["fwrite()", "fopen()", "fread()", "file_put_contents()", "print_r()"],
    a: 3,
    difficulty: "easy",
    week: 14,
    topic: "file_put_contents",
    importance: 5,
    explanation: "file_put_contents(), dosya açma-kapama işlemlerini tek adımda kolaylaştırarak veri yazar. Basit yazma işlemlerinde çok kullanışlıdır."
  },
  {
    q: "file_put_contents içinde dosyanın sonuna ekleme yapmak için hangi sabit kullanılır?",
    t: "mcq",
    o: ["FILE_END", "APPEND_FILE", "PUT_APPEND", "ADD_MODE", "FILE_APPEND"],
    a: 4,
    difficulty: "medium",
    week: 14,
    topic: "FILE_APPEND",
    importance: 5,
    explanation: "FILE_APPEND sabiti, mevcut içeriği silmeden dosyanın sonuna veri eklenmesini sağlar. Sabit, programda anlamı önceden tanımlanmış özel değerdir."
  }
];
