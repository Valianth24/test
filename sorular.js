// MVC / MVP / MVVM + API + Yazılım Kavramları
// Mevcut questionBank'e ekleme:
window.questionBank = (window.questionBank || []).concat([
  // =========================
  // WEEK 4: MVC / MVP / MVVM (10)
  // =========================
  {
    q: "MVC mimarisinin temel amacı nedir?",
    t: "mcq",
    o: [
      "Sadece arayüz tasarlamak",
      "Bileşenleri sorumluluklarına göre ayırarak bakım ve geliştirmeyi kolaylaştırmak",
      "Sadece veritabanı hızını artırmak",
      "Sadece güvenlik duvarı eklemek",
      "Sadece dosya formatlarını yönetmek"
    ],
    a: "Bileşenleri sorumluluklarına göre ayırarak bakım ve geliştirmeyi kolaylaştırmak",
    difficulty: "easy",
    week: 4,
    topic: "MVC - amaç",
    importance: "high",
    explanation: "MVC; Model, View, Controller rollerini ayırarak kodun temiz, modüler ve test edilebilir olmasını hedefler."
  },
  {
    q: "MVC’de Model katmanı en çok hangi sorumlulukları üstlenir?",
    t: "mcq",
    o: [
      "UI elemanlarını çizmek",
      "Kullanıcı tıklamalarını yakalamak",
      "Veri ve iş mantığını yönetmek (veritabanı işlemleri dahil)",
      "Sadece sayfa yönlendirmesi yapmak",
      "Sadece CSS üretmek"
    ],
    a: "Veri ve iş mantığını yönetmek (veritabanı işlemleri dahil)",
    difficulty: "easy",
    week: 4,
    topic: "MVC - Model",
    importance: "high",
    explanation: "Model; veri, kurallar ve veriye ilişkin işlemlerden sorumludur."
  },
  {
    q: "MVC’de View katmanı neyi temsil eder?",
    t: "mcq",
    o: [
      "Veritabanı tablolarını",
      "Kullanıcı arayüzünü ve verinin sunumunu",
      "Sadece loglama sistemini",
      "Derleyiciyi",
      "Cache mekanizmasını"
    ],
    a: "Kullanıcı arayüzünü ve verinin sunumunu",
    difficulty: "easy",
    week: 4,
    topic: "MVC - View",
    importance: "high",
    explanation: "View; kullanıcıya gösterilen arayüzdür (web’de template, masaüstünde UI bileşenleri)."
  },
  {
    q: "MVC’de Controller’ın görevi aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Sadece görsel tasarım yapmak",
      "Kullanıcı isteklerini işlemek, Model’i kullanmak ve sonucu View’a iletmek",
      "Sadece veritabanını yedeklemek",
      "Sadece kodu derlemek",
      "Sadece CSS yazmak"
    ],
    a: "Kullanıcı isteklerini işlemek, Model’i kullanmak ve sonucu View’a iletmek",
    difficulty: "easy",
    week: 4,
    topic: "MVC - Controller",
    importance: "high",
    explanation: "Controller; girişleri/istekleri alır, iş akışını yönetir ve sunumu günceller."
  },
  {
    q: "MVP mimarisinde 'Presenter' hangi rolü üstlenir?",
    t: "mcq",
    o: [
      "Veri tabanını fiziksel kurar",
      "Model ile View arasındaki iletişimi kurar ve View’ı arayüz üzerinden günceller",
      "Sadece UI çizimini yapar",
      "Sadece route tanımlar",
      "Sadece dosya kaydeder"
    ],
    a: "Model ile View arasındaki iletişimi kurar ve View’ı arayüz üzerinden günceller",
    difficulty: "medium",
    week: 4,
    topic: "MVP - Presenter",
    importance: "high",
    explanation: "Presenter; View’dan olayı alır, Model’e iş yaptırır, sonucu View’a 'ne gösterileceğini' söyleyerek yansıtır."
  },
  {
    q: "MVVM’de ViewModel’in ana görevi nedir?",
    t: "mcq",
    o: [
      "Veriyi View için uygun forma sokmak ve View ile Model arasında köprü olmak",
      "Sadece veritabanı indekslemek",
      "Sadece CSS üretmek",
      "Sadece API gateway olmak",
      "Sadece dosya sıkıştırmak"
    ],
    a: "Veriyi View için uygun forma sokmak ve View ile Model arasında köprü olmak",
    difficulty: "medium",
    week: 4,
    topic: "MVVM - ViewModel",
    importance: "high",
    explanation: "ViewModel; UI’nin ihtiyaç duyduğu verileri/komutları sunar, Model’e erişir ve View’a bağlanmaya uygun hale getirir."
  },
  {
    q: "MVVM’de en kritik prensiplerden biri hangisidir?",
    t: "mcq",
    o: ["Data Binding (Veri Bağlama)", "Bleed", "Rasterize", "FTP", "CRC"],
    a: "Data Binding (Veri Bağlama)",
    difficulty: "easy",
    week: 4,
    topic: "MVVM - Data Binding",
    importance: "high",
    explanation: "Data Binding ile ViewModel’deki veri otomatik View’a yansır; View girdileri de otomatik ViewModel’e akar."
  },
  {
    q: "MVC ile MVP arasındaki temel farkı en iyi anlatan ifade hangisidir?",
    t: "mcq",
    o: [
      "MVC sadece mobilde kullanılır, MVP sadece web’de",
      "MVP’de Presenter, View’ı daha doğrudan yönetir; MVC’de Controller istek akışını yönetir",
      "MVC’de Model yoktur",
      "MVP’de View yoktur",
      "İkisi tamamen aynıdır"
    ],
    a: "MVP’de Presenter, View’ı daha doğrudan yönetir; MVC’de Controller istek akışını yönetir",
    difficulty: "hard",
    week: 4,
    topic: "MVC vs MVP",
    importance: "high",
    explanation: "MVP’de Presenter genelde View arayüzü ile sık iletişim kurar; MVC’de Controller daha çok istek/aksiyon odaklıdır."
  },
  {
    q: "MVVM’in büyük UI projelerinde avantajı hangisidir?",
    t: "mcq",
    o: [
      "Tüm kodu tek dosyada toplar",
      "ViewModel’in View olmadan test edilebilmesi ve data binding ile UI güncellemelerinin otomatikleşmesi",
      "Veritabanını otomatik kurması",
      "Her zaman daha az dosya üretmesi",
      "Sadece oyunlar için uygun olması"
    ],
    a: "ViewModel’in View olmadan test edilebilmesi ve data binding ile UI güncellemelerinin otomatikleşmesi",
    difficulty: "medium",
    week: 4,
    topic: "MVVM - avantaj",
    importance: "high",
    explanation: "Test edilebilirlik + otomatik UI güncellemeleri MVVM’in güçlü yönleridir."
  },
  {
    q: "MVC/MVP/MVVM gibi yapılar hangi kavram sınıfına girer?",
    t: "mcq",
    o: ["Tasarım deseni / mimari desen", "Veri tipi", "Dosya formatı", "İşletim sistemi", "Derleyici"],
    a: "Tasarım deseni / mimari desen",
    difficulty: "easy",
    week: 4,
    topic: "Mimari desen",
    importance: "medium",
    explanation: "Bu yapılar, uygulamayı organize eden mimari yaklaşımlardır."
  },

  // =========================
  // WEEK 5: API (10)
  // =========================
  {
    q: "API en doğru hangi tanıma uyar?",
    t: "mcq",
    o: [
      "Sadece bir veritabanı türü",
      "Bir yazılımın dış dünya ile iletişim kurması için tanımladığı kurallar ve arayüzler bütünü",
      "Sadece bir UI tasarım tekniği",
      "Sadece bir programlama dili",
      "Sadece bir dosya uzantısı"
    ],
    a: "Bir yazılımın dış dünya ile iletişim kurması için tanımladığı kurallar ve arayüzler bütünü",
    difficulty: "easy",
    week: 5,
    topic: "API - tanım",
    importance: "high",
    explanation: "API; başka sistemlerin senin sisteminin fonksiyonlarına/verilerine erişmesini sağlayan arayüzdür."
  },
  {
    q: "Web API’ler genellikle hangi protokol üzerinden çalışır?",
    t: "mcq",
    o: ["HTTP", "HDMI", "PCIe", "VGA", "NTFS"],
    a: "HTTP",
    difficulty: "easy",
    week: 5,
    topic: "Web API",
    importance: "high",
    explanation: "Web API’ler çoğunlukla HTTP üzerinden REST veya SOAP yaklaşımıyla sunulur."
  },
  {
    q: "REST ve SOAP en çok hangi API tipinin örneğidir?",
    t: "mcq",
    o: ["HTTP API (Web API)", "Donanım API", "Veritabanı API", "GUI API", "Shell API"],
    a: "HTTP API (Web API)",
    difficulty: "medium",
    week: 5,
    topic: "REST/SOAP",
    importance: "high",
    explanation: "REST ve SOAP, web servisleri için kullanılan mimari/standart yaklaşımlardır."
  },
  {
    q: "API’ların en önemli katkılarından biri hangisidir?",
    t: "mcq",
    o: [
      "Uygulamaları birbirinden tamamen izole etmek",
      "Farklı uygulamaların/sistemlerin entegrasyonunu ve yeniden kullanılabilirliği kolaylaştırmak",
      "Her zaman interneti hızlandırmak",
      "Sadece tasarım güzelliğini artırmak",
      "Sadece donanımı büyütmek"
    ],
    a: "Farklı uygulamaların/sistemlerin entegrasyonunu ve yeniden kullanılabilirliği kolaylaştırmak",
    difficulty: "easy",
    week: 5,
    topic: "API - neden önemli",
    importance: "high",
    explanation: "API entegrasyon ve işbirliğini sağlar: mobil-app ↔ sunucu, servis ↔ servis gibi."
  },
  {
    q: "Yetkisiz erişimi engellemek API tasarımında hangi başlık altındadır?",
    t: "mcq",
    o: ["Güvenlik", "Bleed", "Raster effects", "Typography", "Mesh"],
    a: "Güvenlik",
    difficulty: "easy",
    week: 5,
    topic: "API - güvenlik",
    importance: "high",
    explanation: "Authentication/authorization, rate limit, token kullanımı gibi konular API güvenliğidir."
  },
  {
    q: "Veritabanı işlemleri için kullanılan API’lara örnek hangisidir?",
    t: "mcq",
    o: ["JDBC", "CSS", "HTML", "OCR", "GUI"],
    a: "JDBC",
    difficulty: "easy",
    week: 5,
    topic: "DB API",
    importance: "medium",
    explanation: "JDBC, Java uygulamalarının veritabanlarıyla iletişimini sağlayan API’dir."
  },
  {
    q: "API tasarımında 'sürdürülebilirlik' en çok neyi ifade eder?",
    t: "mcq",
    o: [
      "Gelecekteki değişikliklere uyum (versiyonlama, geriye dönük uyumluluk) sağlamak",
      "Her şeyi tek fonksiyona toplamak",
      "Sadece renk seçmek",
      "Sadece RAM artırmak",
      "Sadece UI çizmek"
    ],
    a: "Gelecekteki değişikliklere uyum (versiyonlama, geriye dönük uyumluluk) sağlamak",
    difficulty: "medium",
    week: 5,
    topic: "API - sürdürülebilirlik",
    importance: "high",
    explanation: "API'lar büyür; versiyonlama ve kırılma yönetimi sürdürülebilirliktir."
  },
  {
    q: "HTTP 404 kodu neyi anlatır?",
    t: "mcq",
    o: [
      "Sunucu hiç yok",
      "Kaynak bulunamadı (Not Found)",
      "Şifre yanlış",
      "Sunucu aşırı yüklü",
      "İşlem başarılı"
    ],
    a: "Kaynak bulunamadı (Not Found)",
    difficulty: "easy",
    week: 5,
    topic: "HTTP 404",
    importance: "high",
    explanation: "404; istenen URL/endpoint sunucuda yok demektir. Sunucu bulunamadı ile karıştırılmaz."
  },
  {
    q: "Kütüphane API’larına en iyi örnek hangisidir?",
    t: "mcq",
    o: ["Python Standard Library", "FTP", "Bleed", "Artboard", "Drop Shadow"],
    a: "Python Standard Library",
    difficulty: "easy",
    week: 5,
    topic: "Library API",
    importance: "medium",
    explanation: "Kütüphane API’ları; fonksiyon/sınıf koleksiyonlarıdır."
  },
  {
    q: "API’larda hızlı prototipleme ne sağlar?",
    t: "mcq",
    o: [
      "Hazır servisleri kullanarak kısa sürede çalışan bir demo/test sistemi kurmayı",
      "Her zaman daha pahalı altyapı kurmayı",
      "Derleyiciyi kaldırmayı",
      "Sadece UI’yı güzelleştirmeyi",
      "Sadece metin yazmayı"
    ],
    a: "Hazır servisleri kullanarak kısa sürede çalışan bir demo/test sistemi kurmayı",
    difficulty: "medium",
    week: 5,
    topic: "API - prototip",
    importance: "medium",
    explanation: "Harita/ödeme/hava durumu gibi hazır API’lar ile hızlıca prototip çıkarırsın."
  },

  // =========================
  // WEEK 6: KAVRAMLAR (30) - Karışık sınav tarzı
  // =========================
  {
    q: "Active Directory nedir?",
    t: "mcq",
    o: [
      "Bir web tarayıcısı",
      "Microsoft ağlarında kullanılan dizin hizmeti (kullanıcı/bilgisayar bilgilerini tutar)",
      "Bir grafik API",
      "Bir veritabanı dili",
      "Bir işletim sistemi çekirdeği"
    ],
    a: "Microsoft ağlarında kullanılan dizin hizmeti (kullanıcı/bilgisayar bilgilerini tutar)",
    difficulty: "easy",
    week: 6,
    topic: "Active Directory",
    importance: "medium",
    explanation: "AD; kurum içi kullanıcı, cihaz, yazıcı gibi nesneleri merkezî yönetir."
  },
  {
    q: "Assembly Language ile Machine Language arasındaki ilişki en doğru hangisidir?",
    t: "mcq",
    o: [
      "Assembly, makine dilinden daha yüksek soyutlama sunan düşük seviye bir dildir",
      "Machine Language, Assembly’nin yorumlanmış halidir",
      "Assembly, sadece web içindir",
      "Machine Language, insan diliyle yazılır",
      "İkisi tamamen alakasızdır"
    ],
    a: "Assembly, makine dilinden daha yüksek soyutlama sunan düşük seviye bir dildir",
    difficulty: "medium",
    week: 6,
    topic: "Assembly vs Machine",
    importance: "medium",
    explanation: "Makine dili CPU’nun 0/1 komutlarıdır; assembly bu komutların sembolik yazımıdır."
  },
  {
    q: "Cache (Önbellek) ne işe yarar?",
    t: "mcq",
    o: [
      "Veriyi kalıcı olarak siler",
      "Sık kullanılan veriyi hızlı erişim için saklar",
      "Sadece UI çizer",
      "Sadece derleme yapar",
      "Sadece şifre üretir"
    ],
    a: "Sık kullanılan veriyi hızlı erişim için saklar",
    difficulty: "easy",
    week: 6,
    topic: "Cache",
    importance: "high",
    explanation: "Önbellek; tekrar istenen veriyi hızlı döndürmek için kullanılır."
  },
  {
    q: "DBMS neyi ifade eder?",
    t: "mcq",
    o: ["Veritabanı yönetim sistemi", "Web sunucusu", "Programlama dili", "İşletim sistemi", "Tarayıcı eklentisi"],
    a: "Veritabanı yönetim sistemi",
    difficulty: "easy",
    week: 6,
    topic: "DBMS",
    importance: "high",
    explanation: "DBMS; veritabanını tanımlar, kullanır, değiştirir, yönetir."
  },
  {
    q: "RDBMS’in temel özelliği hangisidir?",
    t: "mcq",
    o: ["Verileri tablolarda satır/sütun olarak tutması", "Sadece dosyada saklaması", "Sadece grafikleri çizmesi", "Sadece oyun motoru olması", "Sadece shell olması"],
    a: "Verileri tablolarda satır/sütun olarak tutması",
    difficulty: "easy",
    week: 6,
    topic: "RDBMS",
    importance: "high",
    explanation: "İlişkisel veritabanları tablo yapısına dayanır; SQL ile yönetilir."
  },
  {
    q: "Deadlock nedir?",
    t: "mcq",
    o: [
      "Bir görsel efekt",
      "İki veya daha fazla işlemin birbirini bekleyip kilitlenmesi",
      "Tarayıcı çerezi",
      "Dosya uzantısı",
      "Bir programlama dili"
    ],
    a: "İki veya daha fazla işlemin birbirini bekleyip kilitlenmesi",
    difficulty: "medium",
    week: 6,
    topic: "Deadlock",
    importance: "high",
    explanation: "Kaynak kilitleri yanlış yönetilince süreçler birbirini bekler ve sistem ilerleyemez."
  },
  {
    q: "Memory Leak ne anlama gelir?",
    t: "mcq",
    o: [
      "RAM’in fiziksel bozulması",
      "Programın ayırdığı belleği geri verememesi",
      "Dosyanın sıkışması",
      "Tarayıcı geçmişi",
      "Ağ kablosu kopması"
    ],
    a: "Programın ayırdığı belleği geri verememesi",
    difficulty: "medium",
    week: 6,
    topic: "Memory Leak",
    importance: "high",
    explanation: "Uzun süre çalışınca RAM şişer, performans düşer, çökme riski artar."
  },
  {
    q: "Garbage Collection ne yapar?",
    t: "mcq",
    o: [
      "Ağa paket gönderir",
      "Kullanılmayan bellek alanlarını otomatik temizler",
      "Sadece veri tabanı şeması kurar",
      "Sadece UI render eder",
      "Sadece hash üretir"
    ],
    a: "Kullanılmayan bellek alanlarını otomatik temizler",
    difficulty: "easy",
    week: 6,
    topic: "Garbage Collection",
    importance: "medium",
    explanation: "Özellikle Java gibi dillerde, kullanılmayan nesnelerin belleğini otomatik geri toplar."
  },
  {
    q: "Compiler (Derleyici) ne yapar?",
    t: "mcq",
    o: [
      "Kaynak kodu başka dile/çalıştırılabilir koda çevirir",
      "Kodun sadece renklerini değiştirir",
      "Sadece interneti hızlandırır",
      "Sadece ikon üretir",
      "Sadece UI testi yapar"
    ],
    a: "Kaynak kodu başka dile/çalıştırılabilir koda çevirir",
    difficulty: "easy",
    week: 6,
    topic: "Compile",
    importance: "high",
    explanation: "Amaç genellikle çalıştırılabilir bir çıktı üretmektir (exe, bytecode vb.)."
  },
  {
    q: "Interpreter (Yorumlayıcı) ile compiler arasındaki fark için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Interpreter kodu satır satır çalıştırır; compiler genellikle çalıştırılabilir çıktı üretir",
      "Compiler satır satır çalıştırır; interpreter dosyayı siler",
      "İkisi tamamen aynıdır",
      "Interpreter sadece C++ içindir",
      "Compiler sadece HTML içindir"
    ],
    a: "Interpreter kodu satır satır çalıştırır; compiler genellikle çalıştırılabilir çıktı üretir",
    difficulty: "medium",
    week: 6,
    topic: "Interpreter vs Compiler",
    importance: "high",
    explanation: "Yorumlayıcı çoğu zaman anında çalıştırır; derleyici dönüştürüp çıktı üretir."
  },
  {
    q: "CLI ne demektir?",
    t: "mcq",
    o: ["Komut satırı arayüzü", "Grafik kartı sürücüsü", "Veritabanı türü", "Web API standardı", "Dosya uzantısı"],
    a: "Komut satırı arayüzü",
    difficulty: "easy",
    week: 6,
    topic: "CLI",
    importance: "medium",
    explanation: "Konsol/terminal üzerinden komut girerek sistemle iletişim kurmaktır."
  },
  {
    q: "CRON ne için kullanılır?",
    t: "mcq",
    o: [
      "Zaman tabanlı işleri periyodik çalıştırmak için",
      "Dosya sıkıştırmak için",
      "UI çizmek için",
      "Veritabanı tablosu oluşturmak için",
      "Makine diline çevirmek için"
    ],
    a: "Zaman tabanlı işleri periyodik çalıştırmak için",
    difficulty: "easy",
    week: 6,
    topic: "CRON",
    importance: "medium",
    explanation: "Belirli saat/tarih/aralıkta otomatik görev çalıştırma."
  },
  {
    q: "Hash fonksiyonunun temel amacı hangisidir?",
    t: "mcq",
    o: [
      "Değişken uzunluklu veriyi sabit uzunluklu özete dönüştürmek",
      "Veriyi her zaman büyütmek",
      "Sadece UI hizalamak",
      "Sadece dosyayı PDF yapmak",
      "Sadece interneti kapatmak"
    ],
    a: "Değişken uzunluklu veriyi sabit uzunluklu özete dönüştürmek",
    difficulty: "medium",
    week: 6,
    topic: "Hash",
    importance: "medium",
    explanation: "Parola saklama, bütünlük kontrolü gibi alanlarda kullanılır."
  },
  {
    q: "GUID/UUID nedir?",
    t: "mcq",
    o: [
      "Evrensel olarak benzersiz tanımlayıcı",
      "Bir CSS sınıfı",
      "Bir veritabanı dili",
      "Bir tarayıcı eklentisi",
      "Bir işletim sistemi"
    ],
    a: "Evrensel olarak benzersiz tanımlayıcı",
    difficulty: "easy",
    week: 6,
    topic: "GUID",
    importance: "medium",
    explanation: "Sistemlerde kayıtları/nesneleri benzersiz kimlikle tanımlamak için kullanılır."
  },
  {
    q: "OOP nedir?",
    t: "mcq",
    o: ["Nesne yönelimli programlama yaklaşımı", "Bir HTTP kodu", "Bir veritabanı türü", "Bir UI stili", "Bir komut satırı aracı"],
    a: "Nesne yönelimli programlama yaklaşımı",
    difficulty: "easy",
    week: 6,
    topic: "OOP",
    importance: "high",
    explanation: "Programı nesneler/sınıflar üzerinden modelleme yaklaşımıdır."
  },
  {
    q: "Repository neyi ifade eder?",
    t: "mcq",
    o: ["Kod deposu", "Sadece resim galerisi", "CPU register alanı", "Ağ kablosu", "Metin fontu"],
    a: "Kod deposu",
    difficulty: "easy",
    week: 6,
    topic: "Repository",
    importance: "medium",
    explanation: "Git repo gibi; kaynak kodu ve tarihçesini tutar."
  },
  {
    q: "Version Control (Sürüm kontrol) neden önemlidir?",
    t: "mcq",
    o: [
      "Değişiklik geçmişini yönetir ve ekip çalışmasını kolaylaştırır",
      "Her zaman interneti hızlandırır",
      "RAM’i otomatik artırır",
      "Dosyaları rasterize eder",
      "Sadece UI boyar"
    ],
    a: "Değişiklik geçmişini yönetir ve ekip çalışmasını kolaylaştırır",
    difficulty: "medium",
    week: 6,
    topic: "Version Control",
    importance: "high",
    explanation: "Branch/merge, geri dönüş, denetim, işbirliği sağlar."
  },
  {
    q: "Virtual Machine nedir?",
    t: "mcq",
    o: [
      "Gerçek sistem gibi çalışan sanal bilgisayar ortamı",
      "Sadece tarayıcı eklentisi",
      "Bir CSS standardı",
      "Bir tür dosya uzantısı",
      "Bir yazı tipi"
    ],
    a: "Gerçek sistem gibi çalışan sanal bilgisayar ortamı",
    difficulty: "easy",
    week: 6,
    topic: "Virtual Machine",
    importance: "medium",
    explanation: "Farklı OS’leri aynı fiziksel makinede izole çalıştırmana yarar."
  },
  {
    q: "Hypervisor’ın görevi hangisidir?",
    t: "mcq",
    o: [
      "VM’leri oluşturmak ve çalıştırmak",
      "Sadece HTML yazmak",
      "Sadece SQL çalıştırmak",
      "Sadece görsel düzenlemek",
      "Sadece cron job eklemek"
    ],
    a: "VM’leri oluşturmak ve çalıştırmak",
    difficulty: "medium",
    week: 6,
    topic: "Hypervisor",
    importance: "medium",
    explanation: "VirtualBox/VMware/Hyper-V gibi sistemlerin temelinde hypervisor mantığı vardır."
  },
  {
    q: "Sandbox neyi amaçlar?",
    t: "mcq",
    o: [
      "Riskli/test edilmemiş kodu izole ortamda çalıştırarak ana sistemi korumak",
      "Dosyaları her zaman büyütmek",
      "UI’ı her zaman küçültmek",
      "Sadece renkleri ters çevirmek",
      "Veritabanını otomatik kurmak"
    ],
    a: "Riskli/test edilmemiş kodu izole ortamda çalıştırarak ana sistemi korumak",
    difficulty: "medium",
    week: 6,
    topic: "Sandbox",
    importance: "high",
    explanation: "Güvenlik ve test amaçlı izolasyon sağlar."
  },
  {
    q: "WYSIWYG ne demektir?",
    t: "mcq",
    o: [
      "Ne görüyorsan onu alırsın (ekranda görülen çıktıya benzer)",
      "Sadece komut satırı demektir",
      "Bir veritabanı protokolüdür",
      "Bir işletim sistemi çekirdeğidir",
      "Bir hash algoritmasıdır"
    ],
    a: "Ne görüyorsan onu alırsın (ekranda görülen çıktıya benzer)",
    difficulty: "easy",
    week: 6,
    topic: "WYSIWYG",
    importance: "medium",
    explanation: "Editörde gördüğün düzenin çıktıya çok benzer olmasını ifade eder."
  },
  {
    q: "XML ne için yaygın kullanılır?",
    t: "mcq",
    o: [
      "Veri saklama ve sistemler arası veri alışverişi",
      "Sadece oyun geliştirme",
      "Sadece fotoğraf düzenleme",
      "Sadece komut satırı",
      "Sadece RAM yönetimi"
    ],
    a: "Veri saklama ve sistemler arası veri alışverişi",
    difficulty: "easy",
    week: 6,
    topic: "XML",
    importance: "medium",
    explanation: "XML; yapılandırılmış veriyi taşımak için standart bir formattır."
  },
  {
    q: "SQL neyi ifade eder?",
    t: "mcq",
    o: ["Veritabanı sorgulama dili", "Bir UI framework", "Bir donanım portu", "Bir tarayıcı", "Bir resim formatı"],
    a: "Veritabanı sorgulama dili",
    difficulty: "easy",
    week: 6,
    topic: "SQL",
    importance: "high",
    explanation: "Tablolardan veri çekme/güncelleme/silme/oluşturma gibi işlemler SQL ile yapılır."
  },
  {
    q: "CMS nedir?",
    t: "mcq",
    o: [
      "İçerik yönetim sistemi",
      "Sadece bir programlama dili",
      "Bir işletim sistemi türü",
      "Bir ekran kartı modeli",
      "Bir derleyici"
    ],
    a: "İçerik yönetim sistemi",
    difficulty: "easy",
    week: 6,
    topic: "CMS",
    importance: "low",
    explanation: "Web içeriklerini kolay üretme/düzenleme/yayınlama sistemidir."
  },
  {
    q: "CRM neyi ifade eder?",
    t: "mcq",
    o: [
      "Müşteri ilişkileri yönetimi yaklaşımı/sistemi",
      "Sadece dosya kopyalama",
      "Sadece hash üretme",
      "Sadece UI renklendirme",
      "Sadece sanallaştırma"
    ],
    a: "Müşteri ilişkileri yönetimi yaklaşımı/sistemi",
    difficulty: "easy",
    week: 6,
    topic: "CRM",
    importance: "low",
    explanation: "Müşteri etkileşimlerini yönetmek için süreç ve yazılım yaklaşımıdır."
  },
  {
    q: "Plug-in (Eklenti) ne yapar?",
    t: "mcq",
    o: [
      "Ana programa bağımsız bir yazılım olarak çalışır ve ana programdan tamamen kopuktur",
      "Ana programa yeni özellik ekler; çoğu zaman ana program olmadan çalışamaz",
      "Sadece veritabanı kurar",
      "Sadece işletim sistemi günceller",
      "Sadece ağ kablosu yönetir"
    ],
    a: "Ana programa yeni özellik ekler; çoğu zaman ana program olmadan çalışamaz",
    difficulty: "medium",
    week: 6,
    topic: "Plug-in",
    importance: "medium",
    explanation: "Eklenti; host uygulamaya yeni yetenek kazandırır."
  },
  {
    q: "Open Source yazılımın en doğru özelliği hangisidir?",
    t: "mcq",
    o: [
      "Kaynak kodu kapalıdır",
      "Kaynak kodu açık lisansla kullanma/değiştirme/dağıtma imkânı sunar",
      "Sadece ücretlidir",
      "Sadece Windows’ta çalışır",
      "Sadece oyun içindir"
    ],
    a: "Kaynak kodu açık lisansla kullanma/değiştirme/dağıtma imkânı sunar",
    difficulty: "easy",
    week: 6,
    topic: "Open Source",
    importance: "medium",
    explanation: "Açık kaynakta haklar lisansla belirlenir; genel mantık şeffaflık ve yeniden kullanım kolaylığıdır."
  },
  {
    q: "Proprietary Software ne demektir?",
    t: "mcq",
    o: [
      "Kaynak kodu açık yazılım",
      "Sahipli/kapalı kaynak yazılım",
      "Sadece ücretsiz yazılım",
      "Sadece eğitim amaçlı yazılım",
      "Sadece web standardı"
    ],
    a: "Sahipli/kapalı kaynak yazılım",
    difficulty: "easy",
    week: 6,
    topic: "Proprietary",
    importance: "medium",
    explanation: "Kaynak kodu ve fikrî haklar üreticide kalır; kullanım lisans şartlarına bağlıdır."
  },
  {
    q: "OCR ne işe yarar?",
    t: "mcq",
    o: [
      "Görüntü içindeki yazıyı metne dönüştürmeye çalışır",
      "Sadece ses dosyası üretir",
      "Sadece veritabanı tablo kurar",
      "Sadece firewall yönetir",
      "Sadece VM oluşturur"
    ],
    a: "Görüntü içindeki yazıyı metne dönüştürmeye çalışır",
    difficulty: "easy",
    week: 6,
    topic: "OCR",
    importance: "medium",
    explanation: "Optik karakter tanıma; taranmış dokümanları düzenlenebilir metne çevirmeye yarar."
  },
  {
    q: "FTP hangi amaçla kullanılır?",
    t: "mcq",
    o: ["Dosya aktarımı", "Renk düzenleme", "Tipografi ayarı", "Sanallaştırma", "Makine dili çevirisi"],
    a: "Dosya aktarımı",
    difficulty: "easy",
    week: 6,
    topic: "FTP",
    importance: "low",
    explanation: "FTP; dosyaları ağ üzerinden sunucu/istemci arasında taşımak için kullanılan protokoldür."
  },
  {
    q: "Firewall’ın temel görevi hangisidir?",
    t: "mcq",
    o: [
      "Dosyaları sıkıştırmak",
      "Ağ trafiğini kurallarla kontrol etmek (gelen/giden paketleri filtrelemek)",
      "UI çizmek",
      "Veritabanı sorgulamak",
      "Yazı tipini değiştirmek"
    ],
    a: "Ağ trafiğini kurallarla kontrol etmek (gelen/giden paketleri filtrelemek)",
    difficulty: "easy",
    week: 6,
    topic: "Firewall",
    importance: "medium",
    explanation: "Güvenlik duvarı; izin verilen/engellenen trafik kuralları uygular."
  },
  {
    q: "Cookies (çerezler) web’de en çok ne için kullanılır?",
    t: "mcq",
    o: ["Oturum ve tercih bilgisi saklamak", "Makine dili üretmek", "Derleme yapmak", "VM kurmak", "DNS değiştirmek"],
    a: "Oturum ve tercih bilgisi saklamak",
    difficulty: "easy",
    week: 6,
    topic: "Cookies",
    importance: "low",
    explanation: "Login oturumu, sepet bilgisi, dil tercihi gibi veriler çerezlerde tutulabilir."
  },
  {
    q: "Crawl (arama robotu) ne yapar?",
    t: "mcq",
    o: ["Web’i otomatik gezer ve yeni adresleri indeks listesine ekler", "Sadece video oynatır", "Sadece SQL derler", "Sadece UI render eder", "Sadece şifre kırar"],
    a: "Web’i otomatik gezer ve yeni adresleri indeks listesine ekler",
    difficulty: "medium",
    week: 6,
    topic: "Crawl",
    importance: "low",
    explanation: "Arama motorları sayfaları bulmak için crawler kullanır."
  }
]);
