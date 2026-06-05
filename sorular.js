// Ağ Temelleri – Son 5 Hafta Ağırlıklı 100 Soruluk Final Soru Bankası
// Konular: Hafta 4 Bakır Kablolar, Hafta 6 TCP/UDP, Hafta 7 Uygulama Katmanı,
// Hafta 8 Modeller-Protokoller, Hafta 10 TCP/IP Modeli
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]
// Not: a = doğru şık index’i (0=A, 1=B, 2=C, 3=D, 4=E)

window.questionBank = [
  // =========================================================
  // ==== HAFTA 10 – TCP/IP MODELİ VE KATMANLAR (1-20) ========
  // =========================================================

  {
    q: "TCP/IP modeli en doğru şekilde neyi ifade eder?",
    t: "mcq",
    o: [
      "İnternet ve ağ iletişiminin nasıl gerçekleştiğini katmanlara ayıran temel modeldir",
      "Sadece bilgisayar kasasının içindeki donanım parçalarını açıklayan modeldir",
      "Yalnızca kablosuz ağ şifresini belirleyen güvenlik yöntemidir",
      "Sadece dosya sıkıştırmak için kullanılan bir yazılım türüdür",
      "Yalnızca televizyon yayın sinyallerini düzenleyen kablo standardıdır"
    ],
    a: 0,
    difficulty: "easy",
    week: 10,
    topic: "TCP/IP Modeli",
    importance: 5,
    explanation: "TCP/IP modeli, bilgisayarların ve ağ cihazlarının internet üzerinden nasıl haberleşeceğini açıklayan katmanlı bir yapıdır. Model, karmaşık ağ iletişimini küçük görevlere böler. Katman, belirli bir işi yapan bölüm demektir; örneğin bir katman adresleme yaparken başka bir katman verinin güvenli iletiminden sorumludur."
  },

  {
    q: "TCP/IP modeli kaç ana katmandan oluşur?",
    t: "mcq",
    o: [
      "2",
      "4",
      "5",
      "6",
      "7"
    ],
    a: 1,
    difficulty: "easy",
    week: 10,
    topic: "TCP/IP Katman Sayısı",
    importance: 5,
    explanation: "TCP/IP modeli genellikle 4 katmandan oluşur: Uygulama, Taşıma, İnternet ve Ağ Erişim katmanı. Katman, ağ iletişimindeki görevlerin ayrıldığı bölümdür. Bu ayrım sayesinde hangi protokolün hangi işi yaptığı daha kolay anlaşılır."
  },

  {
    q: "TCP/IP modelinde kullanıcıya en yakın katman hangisidir?",
    t: "mcq",
    o: [
      "Ağ Erişim Katmanı",
      "İnternet Katmanı",
      "Uygulama Katmanı",
      "Fiziksel Katman",
      "Veri Bağlantı Katmanı"
    ],
    a: 2,
    difficulty: "easy",
    week: 10,
    topic: "Uygulama Katmanı",
    importance: 5,
    explanation: "Uygulama katmanı kullanıcıya en yakın katmandır. Kullanıcı burada web tarayıcısı, e-posta programı veya dosya aktarım uygulaması gibi yazılımlarla etkileşime girer. HTTP, FTP, SMTP ve DNS gibi protokoller bu katmanda çalışır; protokol, ağdaki iletişim kuralı demektir."
  },

  {
    q: "TCP/IP modelinde port numaraları en çok hangi katmanla ilişkilidir?",
    t: "mcq",
    o: [
      "Ağ Erişim Katmanı",
      "Fiziksel Katman",
      "İnternet Katmanı",
      "Taşıma Katmanı",
      "MAC Katmanı"
    ],
    a: 3,
    difficulty: "medium",
    week: 10,
    topic: "Taşıma Katmanı",
    importance: 5,
    explanation: "Port numarası, aynı cihaz üzerindeki farklı ağ uygulamalarını ayırt etmek için kullanılır. Örneğin HTTP genellikle 80, HTTPS 443 portunu kullanır. Taşıma katmanı, TCP ve UDP gibi protokollerle uygulamadan gelen verinin doğru hizmete ulaşmasına yardım eder."
  },

  {
    q: "TCP/IP modelinde paketlerin yönlendirilmesinden en çok hangi katman sorumludur?",
    t: "mcq",
    o: [
      "Uygulama Katmanı",
      "Taşıma Katmanı",
      "Ağ Erişim Katmanı",
      "Fiziksel Katman",
      "İnternet Katmanı"
    ],
    a: 4,
    difficulty: "medium",
    week: 10,
    topic: "İnternet Katmanı",
    importance: 5,
    explanation: "İnternet katmanı, paketlerin farklı ağlar arasında doğru hedefe yönlendirilmesini sağlar. Paket, ağ üzerinden taşınan veri parçasıdır. Yönlendirme, paketin hangi yoldan gideceğine karar verme işlemidir; IP protokolü bu katmanda temel rol oynar."
  },

  {
    q: "IP protokolünün temel görevi nedir?",
    t: "mcq",
    o: [
      "Ağdaki cihazları adreslemek ve paketleri hedefe yönlendirmek",
      "E-postaları kullanıcıdan sunucuya göndermek",
      "Web sayfalarını tarayıcıda görsel hale getirmek",
      "Dosyaları sıkıştırarak depolamak",
      "Kablodaki elektrik akımını ölçmek"
    ],
    a: 0,
    difficulty: "easy",
    week: 10,
    topic: "IP Protokolü",
    importance: 5,
    explanation: "IP, Internet Protocol kelimelerinin kısaltmasıdır. IP adresi, ağdaki cihazın sayısal adresidir; örneğin bir ev adresi gibi cihazın bulunmasını sağlar. IP protokolü, verinin hangi kaynaktan hangi hedefe gideceğini belirlemede kullanılır."
  },

  {
    q: "IPv4 adresleme kaç bit kullanır?",
    t: "mcq",
    o: [
      "16 bit",
      "32 bit",
      "64 bit",
      "96 bit",
      "128 bit"
    ],
    a: 1,
    difficulty: "easy",
    week: 10,
    topic: "IPv4",
    importance: 5,
    explanation: "IPv4, 32 bit adresleme kullanır. Bit, bilgisayardaki en küçük veri birimidir ve 0 veya 1 değerini alır. IPv4 adresleri genellikle 192.168.1.1 gibi noktalı sayılarla yazılır."
  },

  {
    q: "IPv6 adresleme kaç bit kullanır?",
    t: "mcq",
    o: [
      "16 bit",
      "32 bit",
      "128 bit",
      "24 bit",
      "48 bit"
    ],
    a: 2,
    difficulty: "easy",
    week: 10,
    topic: "IPv6",
    importance: 5,
    explanation: "IPv6, 128 bit adresleme kullanır. IPv6'nın amacı, IPv4'e göre çok daha fazla IP adresi sağlamaktır. IP adresi, cihazın ağ üzerindeki kimliği olduğu için internet büyüdükçe daha fazla adrese ihtiyaç duyulmuştur."
  },

  {
    q: "ARP protokolü ne işe yarar?",
    t: "mcq",
    o: [
      "Web sayfası açar",
      "E-posta gönderir",
      "Dosya indirir",
      "IP adresini MAC adresine çevirir",
      "Video akışını hızlandırır"
    ],
    a: 3,
    difficulty: "medium",
    week: 10,
    topic: "ARP",
    importance: 5,
    explanation: "ARP, Address Resolution Protocol demektir. IP adresi ağdaki mantıksal adres, MAC adresi ise ağ kartına ait fiziksel adres gibi düşünülebilir. ARP, 'Bu IP adresine sahip cihazın MAC adresi nedir?' sorusunu cevaplar."
  },

  {
    q: "ICMP protokolü hangi işlemle yakından ilişkilidir?",
    t: "mcq",
    o: [
      "E-posta gönderme",
      "Dosya yükleme",
      "Web sayfası tasarlama",
      "Kablo bükme",
      "Ping ve hata mesajları"
    ],
    a: 4,
    difficulty: "medium",
    week: 10,
    topic: "ICMP",
    importance: 4,
    explanation: "ICMP, Internet Control Message Protocol demektir. Ping komutu, bir hedef cihaza ulaşılıp ulaşılamadığını test etmek için ICMP kullanır. Hata mesajı, ağda bir sorun olduğunda gönderilen bilgilendirme mesajıdır; örneğin hedefe ulaşılamıyor mesajı gibi."
  },

  {
    q: "TCP/IP modelinde verinin katman katman sarılarak gönderilmesine ne denir?",
    t: "mcq",
    o: [
      "Encapsulation",
      "Defragmentation",
      "Compression",
      "Authentication",
      "Broadcasting"
    ],
    a: 0,
    difficulty: "medium",
    week: 10,
    topic: "Encapsulation",
    importance: 5,
    explanation: "Encapsulation, Türkçede kapsülleme demektir. Ağ iletişiminde kapsülleme, verinin her katmanda yeni başlık bilgileriyle sarılmasıdır. Başlık bilgisi, verinin nereye gideceği veya nasıl taşınacağı gibi kontrol bilgisidir."
  },

  {
    q: "Alıcı tarafta kapsüllenmiş verinin katman katman açılmasına ne denir?",
    t: "mcq",
    o: [
      "Routing",
      "Decapsulation",
      "Broadcast",
      "Switching",
      "Subnetting"
    ],
    a: 1,
    difficulty: "medium",
    week: 10,
    topic: "Decapsulation",
    importance: 5,
    explanation: "Decapsulation, kapsül açma işlemidir. Gönderici tarafta veri katman katman sarılır; alıcı tarafta bu başlıklar sırayla çıkarılır. Böylece veri, uygulamanın anlayacağı hale geri döner."
  },

  {
    q: "TCP/IP veri akışında doğru sıralama hangisidir?",
    t: "mcq",
    o: [
      "IP ➝ HTTP ➝ MAC ➝ TCP",
      "MAC ➝ IP ➝ HTTP ➝ TCP",
      "Uygulama ➝ TCP/UDP ➝ IP ➝ MAC ➝ Fiziksel",
      "Fiziksel ➝ HTTP ➝ DNS ➝ SMTP",
      "DNS ➝ FTP ➝ SMTP ➝ HTTP"
    ],
    a: 2,
    difficulty: "hard",
    week: 10,
    topic: "Veri Akışı",
    importance: 5,
    explanation: "Gönderici tarafta veri önce uygulama katmanından çıkar, taşıma katmanında TCP veya UDP ile bölümlenir, internet katmanında IP bilgisi eklenir, ağ erişim katmanında MAC ve fiziksel iletim yapılır. MAC adresi yerel ağdaki cihazı gösteren fiziksel adres mantığındadır. Fiziksel iletim, verinin kablo veya radyo dalgası gibi ortamdan bitler halinde taşınmasıdır."
  },

  {
    q: "Ağ Erişim Katmanı'nın temel görevi nedir?",
    t: "mcq",
    o: [
      "E-posta mesajlarını oluşturmak",
      "Alan adlarını IP adresine çevirmek",
      "Web sayfası isteği göndermek",
      "Verinin fiziksel ortamda taşınmasını sağlamak",
      "Uygulama şifresini kontrol etmek"
    ],
    a: 3,
    difficulty: "medium",
    week: 10,
    topic: "Ağ Erişim Katmanı",
    importance: 5,
    explanation: "Ağ Erişim Katmanı, verinin fiziksel olarak taşınmasıyla ilgilidir. Fiziksel ortam kablo, fiber, Wi-Fi radyo dalgası gibi veri taşıyan ortamdır. Bu katman Ethernet, Wi-Fi, DSL gibi teknolojilerle ilişkilidir."
  },

  {
    q: "MAC adresi hangi katmanda daha çok anlam kazanır?",
    t: "mcq",
    o: [
      "Uygulama Katmanı",
      "Taşıma Katmanı",
      "İnternet Katmanı",
      "DNS Katmanı",
      "Ağ Erişim / Veri Bağlantı Katmanı"
    ],
    a: 4,
    difficulty: "medium",
    week: 10,
    topic: "MAC Adresi",
    importance: 5,
    explanation: "MAC adresi, ağ kartına ait fiziksel adres gibi düşünülebilir. Yerel ağda cihazların birbirini tanımasında kullanılır. Ağ Erişim veya Veri Bağlantı düzeyi, cihazların aynı fiziksel veya yerel ağ üzerinde nasıl haberleştiğiyle ilgilenir."
  },

  {
    q: "TCP/IP modelinde DNS hangi katmanda yer alır?",
    t: "mcq",
    o: [
      "Uygulama Katmanı",
      "Taşıma Katmanı",
      "İnternet Katmanı",
      "Ağ Erişim Katmanı",
      "Fiziksel Katman"
    ],
    a: 0,
    difficulty: "easy",
    week: 10,
    topic: "DNS Katmanı",
    importance: 5,
    explanation: "DNS, uygulama katmanı protokolüdür. DNS, Domain Name System demektir ve alan adlarını IP adreslerine çevirir. Alan adı, www.google.com gibi insanların kolay hatırladığı ad; IP adresi ise cihazların kullandığı sayısal adrestir."
  },

  {
    q: "TCP/IP modelinde TCP ve UDP hangi katmanda çalışır?",
    t: "mcq",
    o: [
      "Uygulama Katmanı",
      "Taşıma Katmanı",
      "İnternet Katmanı",
      "Ağ Erişim Katmanı",
      "Fiziksel Katman"
    ],
    a: 1,
    difficulty: "easy",
    week: 10,
    topic: "TCP UDP Katmanı",
    importance: 5,
    explanation: "TCP ve UDP, taşıma katmanı protokolleridir. Taşıma katmanı, uygulamadan gelen verinin karşı tarafa nasıl taşınacağını düzenler. TCP güvenilirlik sağlar; UDP ise daha hızlı ama daha az kontrollü iletim yapar."
  },

  {
    q: "TCP/IP modelinin ARPANET ile ilişkisi için en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "TCP/IP yalnızca televizyon kabloları için geliştirilmiştir",
      "TCP/IP sadece Bluetooth cihazları için kullanılır",
      "TCP/IP'nin gelişimi ARPANET projesiyle ilişkilidir",
      "TCP/IP hiçbir ağ iletişiminde kullanılmaz",
      "TCP/IP yalnızca yerel yazıcı paylaşımı içindir"
    ],
    a: 2,
    difficulty: "medium",
    week: 10,
    topic: "TCP/IP Tarihçe",
    importance: 3,
    explanation: "ARPANET, internetin gelişiminde önemli rol oynayan erken ağ projelerinden biridir. TCP/IP modeli bu tarihsel gelişim içinde ortaya çıkmış ve günümüzde internet iletişiminin temel modeli haline gelmiştir. Buradaki model kelimesi, iletişimi açıklayan katmanlı yapı anlamındadır."
  },

  {
    q: "RARP protokolü en doğru şekilde neyle ilgilidir?",
    t: "mcq",
    o: [
      "Alan adını IP adresine çevirmekle",
      "Web sayfası istemekle",
      "E-posta almakla",
      "MAC adresinden IP adresi bulmakla",
      "Dosya sıkıştırmakla"
    ],
    a: 3,
    difficulty: "hard",
    week: 10,
    topic: "RARP",
    importance: 3,
    explanation: "RARP, Reverse ARP anlamına gelir. ARP, IP'den MAC adresi bulurken; RARP bunun tersine MAC adresinden IP adresi bulma mantığıyla ilişkilidir. Günümüzde çok yaygın kullanılmaz ama TCP/IP protokol ailesi anlatılırken temel kavram olarak görülebilir."
  },

  {
    q: "TCP/IP modelinde HTTPS genellikle hangi uygulama amacıyla ilişkilidir?",
    t: "mcq",
    o: [
      "MAC adresi çözümleme",
      "Fiziksel kablo testi",
      "Yönlendirme tablosu oluşturma",
      "Video sıkıştırma",
      "Güvenli web tarama"
    ],
    a: 4,
    difficulty: "easy",
    week: 10,
    topic: "HTTPS",
    importance: 5,
    explanation: "HTTPS, güvenli web iletişimi için kullanılır. HTTP web sayfası alışverişini sağlar; HTTPS ise bu iletişimin şifreli ve daha güvenli yapılmasını sağlar. Şifreleme, verinin üçüncü kişiler tarafından kolayca okunamayacak hale getirilmesidir."
  },

  // =========================================================
  // ==== HAFTA 8 – MODELLER VE PROTOKOLLER (21-40) ===========
  // =========================================================

  {
    q: "Ağ modeli ne işe yarar?",
    t: "mcq",
    o: [
      "Ağ iletişim sürecini katmanlara ayırarak düzenli açıklamaya yarar",
      "Sadece bilgisayarın ekran çözünürlüğünü artırır",
      "Yalnızca yazıcı kartuşunu değiştirmek için kullanılır",
      "Sadece klavye dilini ayarlamaya yarar",
      "Kabloların rengini belirler"
    ],
    a: 0,
    difficulty: "easy",
    week: 8,
    topic: "Ağ Modeli",
    importance: 5,
    explanation: "Ağ modeli, ağdaki veri iletim sürecini anlamak için kullanılan açıklama yapısıdır. Model, karmaşık sistemi küçük katmanlara böler. Katman, belirli görevleri olan bölüm demektir; bu sayede hangi sorun hangi bölümde aranacak daha kolay anlaşılır."
  },

  {
    q: "Protokol en doğru şekilde nasıl tanımlanır?",
    t: "mcq",
    o: [
      "Kablo uzunluğunu ölçen cihazdır",
      "Ağ bileşenlerinin iletişim için uyması gereken kurallar bütünüdür",
      "Sadece bilgisayar kasasıdır",
      "Yalnızca monitör görüntü ayarıdır",
      "Dosyaları silen komuttur"
    ],
    a: 1,
    difficulty: "easy",
    week: 8,
    topic: "Protokol",
    importance: 5,
    explanation: "Protokol, cihazların birbiriyle anlaşmak için izlediği kurallar bütünüdür. İnsanların konuşurken aynı dili ve kuralları kullanması gibi, ağ cihazları da HTTP, TCP, IP, DNS gibi protokolleri kullanır. Bileşen, sistemin parçası demektir; örneğin bilgisayar, router veya sunucu bir ağ bileşenidir."
  },

  {
    q: "OSI modeli kaç katmandan oluşur?",
    t: "mcq",
    o: [
      "3",
      "4",
      "7",
      "9",
      "12"
    ],
    a: 2,
    difficulty: "easy",
    week: 8,
    topic: "OSI Modeli",
    importance: 5,
    explanation: "OSI modeli 7 katmandan oluşur. OSI, Open Systems Interconnection ifadesinin kısaltmasıdır. Bu model daha çok öğretici ve kavramsal bir modeldir; kavramsal demek, gerçek cihazdan çok konuyu anlamaya yardım eden açıklama yapısı demektir."
  },

  {
    q: "TCP/IP modeli ile OSI modeli arasındaki temel farklardan biri hangisidir?",
    t: "mcq",
    o: [
      "TCP/IP modeli 7, OSI modeli 4 katmandır",
      "OSI modeli hiç katman içermez",
      "TCP/IP yalnızca yazıcılar için kullanılır",
      "TCP/IP modeli daha pratik ve gerçek internet protokolleriyle ilişkilidir",
      "OSI modeli sadece kablo türlerini açıklar"
    ],
    a: 3,
    difficulty: "medium",
    week: 8,
    topic: "OSI TCP/IP Farkı",
    importance: 5,
    explanation: "OSI modeli 7 katmanlı teorik bir başvuru modelidir; TCP/IP modeli ise internetin gerçek çalışmasında kullanılan protokol ailesiyle daha doğrudan ilişkilidir. Teorik model, konuyu anlamak için kurulan açıklama yapısıdır. Gerçek dünya modeli ise uygulamada çalışan protokolleri anlatır."
  },

  {
    q: "TCP/IP modeli, OSI modelinin katmanlarını genel olarak nasıl ele alır?",
    t: "mcq",
    o: [
      "OSI modelini tamamen yok sayar",
      "OSI modelini 20 katmana çıkarır",
      "Sadece fiziksel katmanı kullanır",
      "Yalnızca uygulama katmanını siler",
      "OSI'nin 7 katmanını daha az sayıda katmanda toplar"
    ],
    a: 4,
    difficulty: "medium",
    week: 8,
    topic: "Model Karşılaştırması",
    importance: 5,
    explanation: "TCP/IP modeli genellikle 4 katmanla anlatılır ve OSI modelindeki bazı katmanları birleştirerek daha pratik bir yapı sunar. Örneğin OSI'deki oturum, sunum ve uygulama katmanı işlevleri TCP/IP'de çoğunlukla uygulama katmanı içinde değerlendirilir. İşlev, bir bölümün yaptığı görev demektir."
  },

  {
    q: "Ağ protokollerinin temel amacı nedir?",
    t: "mcq",
    o: [
      "Ağdaki veri iletimini belirli kurallara göre düzenlemek",
      "Sadece ekran parlaklığını ayarlamak",
      "Bilgisayar fan hızını artırmak",
      "Kablonun dış rengini belirlemek",
      "Monitör çözünürlüğünü düşürmek"
    ],
    a: 0,
    difficulty: "easy",
    week: 8,
    topic: "Ağ Protokolleri",
    importance: 5,
    explanation: "Ağ protokolleri, verinin nasıl gönderileceğini, alınacağını, adresleneceğini ve kontrol edileceğini belirleyen kurallardır. Veri, ağ üzerinde taşınan bilgi parçasıdır. İletim, bu bilginin bir cihazdan başka bir cihaza gönderilmesi işlemidir."
  },

  {
    q: "OSI modeli için en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Gerçek dünyada kullanılan tek kablo tipidir",
      "Ağ iletişimini 7 katmanda açıklayan teorik modeldir",
      "Sadece e-posta gönderen protokoldür",
      "Yalnızca IP adresi veren cihazdır",
      "Sadece kablosuz bağlantı standardıdır"
    ],
    a: 1,
    difficulty: "medium",
    week: 8,
    topic: "OSI Tanımı",
    importance: 5,
    explanation: "OSI modeli, ağ iletişimini 7 katmanda açıklayan teorik modeldir. Teorik burada 'konuyu açıklamak ve öğretmek için kullanılan' anlamındadır. OSI modeli, ağ sorunlarını hangi katmanda arayacağımızı anlamada çok yararlıdır."
  },

  {
    q: "TCP/IP modelindeki İnternet Katmanı'nın görevi hangisidir?",
    t: "mcq",
    o: [
      "Web arayüzü tasarlamak",
      "E-posta metni yazmak",
      "IP adresleme ve yönlendirme yapmak",
      "Kabloyu fiziksel olarak bükmek",
      "Kullanıcı şifresini saklamak"
    ],
    a: 2,
    difficulty: "easy",
    week: 8,
    topic: "İnternet Katmanı",
    importance: 5,
    explanation: "İnternet Katmanı, IP adresleme ve yönlendirme ile ilgilenir. IP adresleme, cihazlara ağ üzerinde kimlik vermektir. Yönlendirme, verinin hedefe giderken hangi ağ yolunu kullanacağını belirleme işlemidir."
  },

  {
    q: "TCP protokolü için en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Bağlantısız ve kontrolsüz iletim yapar",
      "Sadece alan adlarını IP'ye çevirir",
      "Sadece kablo ekranlamasını sağlar",
      "Güvenilir, bağlantı tabanlı veri iletimi sağlar",
      "Yalnızca MAC adresi üretir"
    ],
    a: 3,
    difficulty: "easy",
    week: 8,
    topic: "TCP",
    importance: 5,
    explanation: "TCP, Transmission Control Protocol demektir. Bağlantı tabanlı olması, veri gönderilmeden önce iki taraf arasında iletişim hazırlığı yapılması anlamına gelir. Güvenilir olması ise veri sırası, hata kontrolü ve kayıp verinin tekrar gönderilmesi gibi mekanizmalar içermesidir."
  },

  {
    q: "UDP protokolü için en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Her zaman TCP'den daha güvenilirdir",
      "Bağlantı kurmadan hızlı iletim sağlar",
      "Web sayfasını HTML'e çevirir",
      "IP adresini MAC adresine çevirir",
      "Bağlantısız ve hızlıdır, fakat güvenilirlik garantisi vermez"
    ],
    a: 4,
    difficulty: "easy",
    week: 8,
    topic: "UDP",
    importance: 5,
    explanation: "UDP, User Datagram Protocol demektir. Bağlantısız çalışır; yani veri göndermeden önce TCP gibi bağlantı kurma süreci yapmaz. Bu nedenle hızlıdır fakat veri kaybı, sıralama ve hata düzeltme garantisi vermez."
  },

  {
    q: "3-Way Handshake hangi protokolle ilişkilidir?",
    t: "mcq",
    o: [
      "TCP",
      "UDP",
      "DNS",
      "FTP",
      "ARP"
    ],
    a: 0,
    difficulty: "medium",
    week: 8,
    topic: "3-Way Handshake",
    importance: 5,
    explanation: "3-Way Handshake, TCP'nin bağlantı kurma sürecidir. Handshake, Türkçede el sıkışma demektir; ağda iki cihazın iletişime başlamadan önce anlaşması anlamına gelir. Bu süreç SYN, SYN-ACK ve ACK adımlarından oluşur."
  },

  {
    q: "3-Way Handshake sürecindeki SYN neyi ifade eder?",
    t: "mcq",
    o: [
      "Bağlantının tamamen kapandığını",
      "Bağlantı başlatma isteğini",
      "Alan adının çözümlendiğini",
      "Dosyanın indirildiğini",
      "MAC adresinin silindiğini"
    ],
    a: 1,
    difficulty: "hard",
    week: 8,
    topic: "SYN",
    importance: 4,
    explanation: "SYN, TCP bağlantısında ilk bağlantı başlatma mesajıdır. İstemci, sunucuya 'bağlantı kurmak istiyorum' anlamında SYN gönderir. İstemci, hizmet isteyen cihaz; sunucu ise hizmet veren cihaz demektir."
  },

  {
    q: "SYN-ACK adımı ne anlama gelir?",
    t: "mcq",
    o: [
      "Veri tamamen silindi",
      "Bağlantı reddedildi",
      "Bağlantı isteği alındı ve onaylandı",
      "Kablo bağlantısı koptu",
      "DNS adresi değişti"
    ],
    a: 2,
    difficulty: "hard",
    week: 8,
    topic: "SYN-ACK",
    importance: 4,
    explanation: "SYN-ACK, sunucunun istemcinin bağlantı isteğini aldığını ve kabul ettiğini bildirdiği adımdır. ACK, acknowledgement yani onay anlamına gelir. Bu adım TCP'nin güvenilir bağlantı kurma mantığının parçasıdır."
  },

  {
    q: "ACK adımı 3-Way Handshake içinde neyi tamamlar?",
    t: "mcq",
    o: [
      "Alan adını IP'ye çevirir",
      "Dosya sıkıştırır",
      "Kabloyu test eder",
      "Bağlantının kurulduğunu onaylar",
      "MAC adresini değiştirir"
    ],
    a: 3,
    difficulty: "hard",
    week: 8,
    topic: "ACK",
    importance: 4,
    explanation: "ACK, onay mesajıdır. TCP bağlantısında son ACK gönderildiğinde iki taraf bağlantının hazır olduğunu kabul eder. Bundan sonra veri iletimi başlayabilir; veri iletimi, bilginin ağ üzerinden taşınması demektir."
  },

  {
    q: "HTTP hangi amaçla kullanılır?",
    t: "mcq",
    o: [
      "E-posta almak için",
      "Cihazın MAC adresini bulmak için",
      "Paketleri fiziksel kabloya çevirmek için",
      "Sunucuya ping atmak için",
      "Web sayfalarının yüklenmesi ve web iletişimi için"
    ],
    a: 4,
    difficulty: "easy",
    week: 8,
    topic: "HTTP",
    importance: 5,
    explanation: "HTTP, HyperText Transfer Protocol demektir. Web tarayıcısı ile web sunucusu arasındaki iletişimde kullanılır. Web tarayıcısı kullanıcıya sayfa gösteren programdır; web sunucusu ise web sayfası dosyalarını sağlayan sistemdir."
  },

  {
    q: "FTP protokolünün temel görevi nedir?",
    t: "mcq",
    o: [
      "Dosya transferi yapmak",
      "Alan adını IP'ye çevirmek",
      "Bağlantı başlatma paketi göndermek",
      "Veri paketini fiziksel kabloya çevirmek",
      "Ağ kartı üretmek"
    ],
    a: 0,
    difficulty: "easy",
    week: 8,
    topic: "FTP",
    importance: 5,
    explanation: "FTP, File Transfer Protocol demektir. Dosya transferi, bir dosyanın bir cihazdan başka bir cihaza gönderilmesi veya alınmasıdır. FTP istemcisi dosya isteyen/gönderen program; FTP sunucusu dosyaları barındıran sistemdir."
  },

  {
    q: "SMTP protokolü hangi işlem için kullanılır?",
    t: "mcq",
    o: [
      "Web sayfası açmak için",
      "E-posta göndermek için",
      "Dosya sıkıştırmak için",
      "IP'yi MAC'e çevirmek için",
      "Kablo parazitini azaltmak için"
    ],
    a: 1,
    difficulty: "easy",
    week: 8,
    topic: "SMTP",
    importance: 5,
    explanation: "SMTP, Simple Mail Transfer Protocol demektir. E-posta gönderme işleminde kullanılır. E-posta istemcisi, kullanıcının mesaj yazdığı uygulamadır; e-posta sunucusu ise mesajı alıcıya ulaştıran sistemdir."
  },

  {
    q: "DNS protokolü hangi işi yapar?",
    t: "mcq",
    o: [
      "Dosya indirir",
      "Video yayınını hızlandırır",
      "Alan adlarını IP adreslerine çevirir",
      "TCP bağlantısını kapatır",
      "Kablonun dış kılıfını değiştirir"
    ],
    a: 2,
    difficulty: "easy",
    week: 8,
    topic: "DNS",
    importance: 5,
    explanation: "DNS, Domain Name System demektir. Alan adı, www.example.com gibi insanların kolay hatırladığı addır. DNS bu adı cihazların kullanabileceği IP adresine çevirir; IP adresi, hedef cihazın ağdaki sayısal adresidir."
  },

  {
    q: "Telnet ve SSH hangi amaçla kullanılır?",
    t: "mcq",
    o: [
      "Web sayfası tasarlamak için",
      "Kablo ekranlaması yapmak için",
      "E-posta almak için",
      "Uzak sunuculara komut satırı üzerinden bağlanmak için",
      "IP adresini otomatik silmek için"
    ],
    a: 3,
    difficulty: "medium",
    week: 8,
    topic: "Telnet SSH",
    importance: 4,
    explanation: "Telnet ve SSH, uzak sistemlere bağlanmak için kullanılır. Uzak sunucu, fiziksel olarak yanında olmayan ama ağ üzerinden erişilen bilgisayardır. Komut satırı, yazılı komutlarla işlem yapılan metin tabanlı yönetim ekranıdır; SSH, Telnet'e göre daha güvenli kabul edilir."
  },

  {
    q: "OSI modelinin eğitimde kullanılmasının temel nedeni hangisidir?",
    t: "mcq",
    o: [
      "Kabloları otomatik döşemesi",
      "E-posta hesaplarını silmesi",
      "Web sayfalarını renklendirmesi",
      "Modem şifresini değiştirmesi",
      "Ağ iletişimini katmanlara ayırarak anlaşılır hale getirmesi"
    ],
    a: 4,
    difficulty: "medium",
    week: 8,
    topic: "OSI Eğitim Amaçlı Kullanım",
    importance: 4,
    explanation: "OSI modeli ağ iletişimini 7 katmana ayırır ve her katmanın görevini ayrı anlatır. Bu, ağ problemlerini anlamayı kolaylaştırır. Problem çözme açısından 'sorun fiziksel bağlantıda mı, adreslemede mi, uygulamada mı?' gibi düşünmeyi sağlar."
  },

  // =========================================================
  // ==== HAFTA 7 – UYGULAMA KATMANI PROTOKOLLERİ (41-60) =====
  // =========================================================

  {
    q: "Uygulama katmanı en doğru şekilde neyi sağlar?",
    t: "mcq",
    o: [
      "Ağ hizmetlerinin kullanıcı uygulamalarına sunulmasını sağlar",
      "Kablonun metal iletkenini üretir",
      "Sadece IP paketinin yönünü belirler",
      "Elektrik prizinin voltajını ayarlar",
      "Bilgisayarın ekran kartını yönetir"
    ],
    a: 0,
    difficulty: "easy",
    week: 7,
    topic: "Uygulama Katmanı",
    importance: 5,
    explanation: "Uygulama katmanı, kullanıcının doğrudan kullandığı ağ hizmetlerine en yakın katmandır. Web tarayıcısı, e-posta istemcisi ve dosya aktarım programları bu katmanla ilişkilidir. Hizmet, kullanıcının ağ üzerinden aldığı işlev demektir; örneğin web sayfası görüntüleme bir ağ hizmetidir."
  },

  {
    q: "Bir kullanıcı tarayıcıya URL yazıp web sayfası açtığında en temel uygulama protokolü hangisidir?",
    t: "mcq",
    o: [
      "FTP",
      "HTTP",
      "SMTP",
      "ARP",
      "ICMP"
    ],
    a: 1,
    difficulty: "easy",
    week: 7,
    topic: "HTTP Senaryosu",
    importance: 5,
    explanation: "HTTP, web sayfası isteme ve alma işleminde kullanılan uygulama katmanı protokolüdür. URL, web adresidir; örneğin https://www.google.com bir URL'dir. Tarayıcı, bu URL için web sunucusuna HTTP isteği gönderir."
  },

  {
    q: "Bir web sayfası açılırken DNS hangi aşamada devreye girer?",
    t: "mcq",
    o: [
      "Kablo parazitini temizlerken",
      "Dosya sıkıştırırken",
      "Alan adını IP adresine çevirirken",
      "E-postayı alıcıya gönderirken",
      "Kabloyu dış kılıfla kaplarken"
    ],
    a: 2,
    difficulty: "medium",
    week: 7,
    topic: "DNS Senaryosu",
    importance: 5,
    explanation: "Kullanıcı www.google.com gibi bir alan adı yazar. DNS, bu alan adını sayısal IP adresine çevirir. IP adresi, ağdaki hedef cihazı bulmak için gereklidir; alan adı ise insanların kolay hatırlaması için kullanılır."
  },

  {
    q: "SMTP protokolü hangi senaryoda kullanılır?",
    t: "mcq",
    o: [
      "Alan adı IP'ye çevrilirken",
      "Web sayfası görselleştirilirken",
      "Video oyunu paketi gönderilirken",
      "Kullanıcı e-posta gönderirken",
      "MAC adresi bulunurken"
    ],
    a: 3,
    difficulty: "easy",
    week: 7,
    topic: "SMTP Senaryosu",
    importance: 5,
    explanation: "SMTP, e-posta gönderme protokolüdür. Kullanıcı bir e-posta yazıp gönderdiğinde mesaj, SMTP ile e-posta sunucusuna iletilir. Sunucu, hizmet veren bilgisayar veya sistemdir; burada e-posta aktarımını yönetir."
  },

  {
    q: "IMAP ve POP3 hangi işlemle ilgilidir?",
    t: "mcq",
    o: [
      "Web sayfası açma",
      "Dosya sıkıştırma",
      "IP adresini MAC'e çevirme",
      "Kablo test etme",
      "E-posta alma"
    ],
    a: 4,
    difficulty: "easy",
    week: 7,
    topic: "IMAP POP3",
    importance: 5,
    explanation: "IMAP ve POP3 e-posta alma protokolleridir. Protokol, iletişim kuralıdır. IMAP genellikle e-postaların sunucuda tutulmasını sağlar; POP3 ise e-postaların cihaza indirilmesi mantığıyla ilişkilidir."
  },

  {
    q: "FTP hangi gerçek hayat işlemine en uygundur?",
    t: "mcq",
    o: [
      "Bir sunucuya dosya yüklemek veya sunucudan dosya indirmek",
      "Alan adını IP adresine çevirmek",
      "E-posta göndermek",
      "Ping testi yapmak",
      "IP paketini yönlendirmek"
    ],
    a: 0,
    difficulty: "easy",
    week: 7,
    topic: "FTP Senaryosu",
    importance: 5,
    explanation: "FTP, dosya transferi için kullanılır. Transfer, verinin bir yerden başka bir yere aktarılmasıdır. Örneğin bir yazılımcının proje dosyasını uzak sunucuya yüklemesi FTP kullanımına örnektir."
  },

  {
    q: "HTTP iletişiminde istemci ve sunucu ilişkisi için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Sunucu her zaman kullanıcıdır",
      "Tarayıcı istemci, web sunucusu hizmet veren taraftır",
      "İstemci kablo türüdür",
      "Sunucu yalnızca MAC adresidir",
      "HTTP istemci-sunucu ilişkisi içermez"
    ],
    a: 1,
    difficulty: "medium",
    week: 7,
    topic: "İstemci Sunucu",
    importance: 5,
    explanation: "İstemci, hizmet isteyen taraftır; web tarayıcısı buna örnektir. Sunucu, hizmet veren taraftır; web sayfası dosyalarını tutar ve tarayıcıya gönderir. HTTP, bu iki taraf arasındaki web iletişim kuralıdır."
  },

  {
    q: "Web sunucusunun tarayıcıya HTML, CSS ve JavaScript göndermesi hangi sürecin parçasıdır?",
    t: "mcq",
    o: [
      "Kablo ekranlama",
      "MAC adresi çözme",
      "HTTP yanıtı",
      "SMTP gönderimi",
      "UDP oyun trafiği"
    ],
    a: 2,
    difficulty: "medium",
    week: 7,
    topic: "HTTP Yanıtı",
    importance: 5,
    explanation: "HTTP yanıtı, web sunucusunun tarayıcıya geri gönderdiği cevaptır. HTML sayfanın yapısını, CSS görünümünü, JavaScript ise etkileşimli işlemleri sağlayan dosya türleridir. Tarayıcı bu dosyaları alıp web sayfasını görüntüler."
  },

  {
    q: "DNS olmasaydı kullanıcılar web sitelerine çoğunlukla nasıl erişmek zorunda kalırdı?",
    t: "mcq",
    o: [
      "E-posta şifresiyle",
      "Kablo rengiyle",
      "Sunucu adı yerine port adıyla",
      "IP adresini doğrudan yazarak",
      "MAC adresini sökerek"
    ],
    a: 3,
    difficulty: "medium",
    week: 7,
    topic: "DNS Önemi",
    importance: 5,
    explanation: "DNS, alan adlarını IP adreslerine çevirdiği için kullanıcılar www.google.com gibi kolay adlar kullanabilir. DNS olmasaydı kullanıcıların 142.250.190.78 gibi sayısal IP adreslerini bilmesi gerekirdi. IP adresi, cihazların ağdaki sayısal kimliğidir."
  },

  {
    q: "Uygulama katmanındaki SQL enjeksiyonu tehdidi en doğru şekilde neyi anlatır?",
    t: "mcq",
    o: [
      "Kablonun dış kılıfının zarar görmesini",
      "Ağ kartının fiziksel yanmasını",
      "DNS'in IP bulamamasını",
      "Kablonun fazla uzun olmasını",
      "Kullanıcı girdisiyle veritabanına zararlı sorgu gönderilmesini"
    ],
    a: 4,
    difficulty: "hard",
    week: 7,
    topic: "SQL Enjeksiyonu",
    importance: 4,
    explanation: "SQL enjeksiyonu, saldırganın web uygulamasındaki giriş alanlarına zararlı SQL komutları yazmasıdır. SQL, veritabanı sorgulama dilidir; veritabanı ise bilgilerin düzenli saklandığı sistemdir. Bu saldırı, uygulama katmanı güvenlik risklerine örnektir."
  },

  {
    q: "XSS saldırısı uygulama katmanı açısından neyi ifade eder?",
    t: "mcq",
    o: [
      "Web sayfasına kötü amaçlı kod yerleştirme saldırısını",
      "Kablonun elektromanyetik parazite uğramasını",
      "IP adresinin MAC adresine çevrilmesini",
      "UDP paketinin sıralanmasını",
      "Switch portunun fiziksel kırılmasını"
    ],
    a: 0,
    difficulty: "hard",
    week: 7,
    topic: "XSS",
    importance: 4,
    explanation: "XSS, Cross-Site Scripting demektir. Web uygulamasına kötü amaçlı kod yerleştirilerek diğer kullanıcıların tarayıcılarında bu kodun çalıştırılması hedeflenir. Kötü amaçlı kod, zarar vermek veya bilgi çalmak için yazılan komuttur."
  },

  {
    q: "Phishing saldırısı hangi örnekle en iyi açıklanır?",
    t: "mcq",
    o: [
      "Switch'in MAC tablosu oluşturması",
      "Sahte e-posta ile kullanıcıdan şifre çalmaya çalışılması",
      "Koaksiyel kablonun televizyon sinyali taşıması",
      "TCP'nin veri sıralaması yapması",
      "IP'nin yönlendirme yapması"
    ],
    a: 1,
    difficulty: "medium",
    week: 7,
    topic: "Phishing",
    importance: 4,
    explanation: "Phishing, kimlik avı saldırısıdır. Saldırgan, kullanıcıyı sahte e-posta veya sahte web sayfasıyla kandırarak şifre, kart bilgisi gibi hassas bilgileri almaya çalışır. Hassas bilgi, başkalarının ele geçirmemesi gereken özel bilgidir."
  },

  {
    q: "DDoS saldırısı neyi hedefler?",
    t: "mcq",
    o: [
      "Kabloyu daha parlak hale getirmeyi",
      "DNS adını elle yazmayı",
      "Sunucuya aşırı yük bindirerek hizmeti aksatmayı",
      "MAC adresini IP'ye çevirmeyi",
      "FTP dosyasını küçültmeyi"
    ],
    a: 2,
    difficulty: "medium",
    week: 7,
    topic: "DDoS",
    importance: 4,
    explanation: "DDoS, Distributed Denial of Service demektir. Çok sayıda cihazdan hedef sunucuya yoğun istek gönderilerek hizmetin yavaşlaması veya durması amaçlanır. Hizmet, web sitesi veya e-posta gibi kullanıcının erişmek istediği ağ servisidir."
  },

  {
    q: "RESTful API hangi kullanım alanıyla ilişkilidir?",
    t: "mcq",
    o: [
      "Koaksiyel kablo iç teli",
      "Kablo büküm oranı",
      "MAC adresi yazdırma",
      "Uygulamaların web üzerinden birbiriyle veri alışverişi yapması",
      "UDP paket sıralaması"
    ],
    a: 3,
    difficulty: "hard",
    week: 7,
    topic: "RESTful API",
    importance: 3,
    explanation: "RESTful API, uygulamaların HTTP üzerinden düzenli kurallarla veri alışverişi yapmasını sağlayan web servis yaklaşımıdır. API, Application Programming Interface demektir; bir yazılımın başka yazılımla konuşması için sunduğu arayüzdür. RESTful, bu arayüzün belirli web kurallarına uygun tasarlanmasıdır."
  },

  {
    q: "RTSP ve SIP protokolleri hangi alanla daha çok ilişkilidir?",
    t: "mcq",
    o: [
      "Veritabanı tabloları",
      "Kablo dış kılıfı",
      "Alan adı çözümleme",
      "Dosya sıkıştırma",
      "Gerçek zamanlı ses ve video iletişimi"
    ],
    a: 4,
    difficulty: "hard",
    week: 7,
    topic: "Multimedya Protokolleri",
    importance: 3,
    explanation: "RTSP ve SIP, gerçek zamanlı medya iletişimiyle ilişkilidir. Gerçek zamanlı, gecikmenin düşük olması gereken anlık iletişim demektir. Sesli görüşme, video görüşme ve canlı yayın gibi hizmetlerde zamanlama önemlidir."
  },

  {
    q: "Bir kullanıcı www.amazon.com adresine gittiğinde ilk olarak hangi genel süreçlerden biri gerekir?",
    t: "mcq",
    o: [
      "Alan adının DNS ile IP adresine çevrilmesi",
      "Kablonun STP yapılması",
      "SMTP ile e-posta gönderilmesi",
      "POP3 ile dosya yüklenmesi",
      "Hub'ın MAC tablosu oluşturması"
    ],
    a: 0,
    difficulty: "medium",
    week: 7,
    topic: "Web Erişim Süreci",
    importance: 5,
    explanation: "Kullanıcı alan adı yazdığında tarayıcı önce bu adın hangi IP adresine karşılık geldiğini öğrenmelidir. Bu işlem DNS ile yapılır. Sonra tarayıcı, bulunan IP adresindeki web sunucusuna HTTP veya HTTPS isteği gönderir."
  },

  {
    q: "POP3 ile IMAP arasındaki temel fark için en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "POP3 web sayfası açar, IMAP kabloyu yönetir",
      "IMAP e-postaları sunucuda saklama mantığıyla; POP3 ise cihaza indirme mantığıyla ilişkilidir",
      "İkisi de yalnızca IP yönlendirme yapar",
      "POP3 sadece video aktarır, IMAP sadece ses aktarır",
      "IMAP sadece MAC adresi üretir"
    ],
    a: 1,
    difficulty: "medium",
    week: 7,
    topic: "IMAP POP3 Farkı",
    importance: 5,
    explanation: "IMAP ve POP3 e-posta alma protokolleridir. IMAP, e-postaların sunucuda kalmasını ve farklı cihazlardan yönetilmesini kolaylaştırır. POP3 ise e-postaları yerel cihaza indirme yaklaşımıyla bilinir; yerel cihaz, kullanıcının kendi bilgisayarı veya telefonudur."
  },

  {
    q: "Uygulama katmanında güvenlik risklerinin fazla olmasının temel nedeni hangisidir?",
    t: "mcq",
    o: [
      "Bu katmanda hiçbir kullanıcı işlemi olmaması",
      "Sadece kablo elektriğiyle çalışması",
      "Kullanıcıya açık servislerin ve uygulamaların bu katmanda bulunması",
      "Sadece MAC adresi kullanması",
      "Fiziksel kablo bükümünü yönetmesi"
    ],
    a: 2,
    difficulty: "medium",
    week: 7,
    topic: "Uygulama Katmanı Güvenliği",
    importance: 4,
    explanation: "Uygulama katmanı kullanıcıya açık servisleri barındırır. Kullanıcı girişi, web formları, e-posta ve dosya aktarımı gibi alanlar saldırganların hedefi olabilir. Servis, ağ üzerinden sağlanan işlevdir; örneğin web sitesi bir servistir."
  },

  {
    q: "HTTP, FTP, SMTP ve DNS arasındaki fark için en doğru eşleştirme hangisidir?",
    t: "mcq",
    o: [
      "HTTP e-posta alır, FTP alan adı çözer, SMTP web açar, DNS dosya gönderir",
      "HTTP dosya sıkıştırır, FTP ping atar, SMTP kablo test eder, DNS MAC üretir",
      "HTTP web, FTP dosya transferi, SMTP e-posta gönderme, DNS alan adı çözümleme yapar",
      "HTTP yalnızca fiziksel katmanda çalışır, FTP taşıma katmanıdır",
      "Hepsi sadece kablo türüdür"
    ],
    a: 2,
    difficulty: "medium",
    week: 7,
    topic: "Protokol Farkları",
    importance: 5,
    explanation: "HTTP web sayfalarıyla, FTP dosya aktarımıyla, SMTP e-posta gönderimiyle, DNS ise alan adı çözümlemeyle ilgilidir. Alan adı çözümleme, www.site.com gibi adın IP adresine çevrilmesidir. Bu protokollerin ortak noktası uygulama katmanında çalışmalarıdır."
  },

  {
    q: "Uygulama katmanı protokolü olmayan seçenek hangisidir?",
    t: "mcq",
    o: [
      "HTTP",
      "FTP",
      "DNS",
      "TCP",
      "SMTP"
    ],
    a: 3,
    difficulty: "medium",
    week: 7,
    topic: "Katman Ayırımı",
    importance: 5,
    explanation: "TCP uygulama katmanı değil, taşıma katmanı protokolüdür. HTTP, FTP, DNS ve SMTP uygulama katmanı protokolleridir. Taşıma katmanı, uygulama verisinin karşı tarafa nasıl taşınacağını belirleyen katmandır."
  },

  {
    q: "Web tarayıcısının aldığı HTML, CSS ve JavaScript dosyalarını görüntüye dönüştürmesine ne denir?",
    t: "mcq",
    o: [
      "Routing",
      "Switching",
      "Subnetting",
      "Encapsulation",
      "Render etme"
    ],
    a: 4,
    difficulty: "medium",
    week: 7,
    topic: "Render",
    importance: 3,
    explanation: "Render etme, tarayıcının aldığı kodları kullanıcıya görünen web sayfası haline getirmesidir. HTML sayfanın iskeletini, CSS görünümünü, JavaScript ise dinamik davranışları belirler. Dinamik davranış, sayfanın kullanıcı etkileşimine göre değişebilmesidir."
  },

  // =========================================================
  // ==== HAFTA 6 – TAŞIMA KATMANI, TCP VE UDP (61-80) ========
  // =========================================================

  {
    q: "Taşıma katmanının temel görevi nedir?",
    t: "mcq",
    o: [
      "Uygulamalar arasında verinin düzenli, doğru veya hızlı taşınmasını sağlamak",
      "Kablonun dış kılıfını üretmek",
      "Alan adlarını IP adresine çevirmek",
      "Bilgisayarın işletim sistemini kurmak",
      "Monitör görüntüsünü ayarlamak"
    ],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "Taşıma Katmanı",
    importance: 5,
    explanation: "Taşıma katmanı, uygulama ile ağ arasında veri iletimini düzenler. Veri iletimi, bilginin bir cihazdan diğerine taşınmasıdır. Bu katmanda TCP ve UDP protokolleri kullanılır; protokol, iletişimin kurallarını belirleyen yapıdır."
  },

  {
    q: "OSI modelinde taşıma katmanı kaçıncı katmandır?",
    t: "mcq",
    o: [
      "1. katman",
      "4. katman",
      "5. katman",
      "6. katman",
      "7. katman"
    ],
    a: 1,
    difficulty: "easy",
    week: 6,
    topic: "OSI Taşıma Katmanı",
    importance: 4,
    explanation: "OSI modelinde taşıma katmanı 4. katmandır. OSI modeli, ağ iletişimini 7 bölüme ayıran öğretici modeldir. Taşıma katmanı, iki uç cihaz arasında verinin taşınmasıyla ilgilenir; uç cihaz, iletişimin başladığı veya bittiği bilgisayar/telefon gibi cihazdır."
  },

  {
    q: "End-to-end iletişim ne demektir?",
    t: "mcq",
    o: [
      "Sadece kablo içindeki elektrik hareketidir",
      "Yalnızca modem ışığının yanmasıdır",
      "Verinin kaynak uygulamadan hedef uygulamaya kadar ulaştırılmasıdır",
      "Sadece ekran görüntüsünün değişmesidir",
      "Kablonun dış ortamdan korunmasıdır"
    ],
    a: 2,
    difficulty: "medium",
    week: 6,
    topic: "End-to-End",
    importance: 5,
    explanation: "End-to-end, uçtan uca demektir. Taşıma katmanı açısından bu, verinin gönderen taraftaki uygulamadan alıcı taraftaki uygulamaya ulaşması anlamına gelir. Uygulama, kullanıcıya hizmet veren yazılımdır; örneğin tarayıcı veya e-posta istemcisi."
  },

  {
    q: "TCP için en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Bağlantısız ve güvenilirlik kontrolü olmayan protokoldür",
      "Sadece alan adı çözümleme protokolüdür",
      "Yalnızca fiziksel kablo standardıdır",
      "Bağlantı tabanlı ve güvenilir iletişim protokolüdür",
      "Sadece kablosuz şifreleme yöntemidir"
    ],
    a: 3,
    difficulty: "easy",
    week: 6,
    topic: "TCP",
    importance: 5,
    explanation: "TCP, bağlantı tabanlı ve güvenilir bir taşıma katmanı protokolüdür. Bağlantı tabanlı, veri aktarımından önce iki tarafın bağlantı kurması demektir. Güvenilirlik ise veri sırası, hata denetimi ve gerekirse tekrar gönderim gibi kontrollerin yapılmasıdır."
  },

  {
    q: "UDP için en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Bağlantı kurarak veri sırasını garanti eder",
      "Her paketi mutlaka tekrar gönderir",
      "Dosya transferinde her zaman TCP'den güvenilirdir",
      "Alan adlarını IP'ye çevirir",
      "Bağlantısız, hızlı fakat güvenilirlik garantisi düşük protokoldür"
    ],
    a: 4,
    difficulty: "easy",
    week: 6,
    topic: "UDP",
    importance: 5,
    explanation: "UDP bağlantısız çalışır; yani veri göndermeden önce bağlantı kurma süreci yapmaz. Bu onu hızlı hale getirir. Ancak veri kaybı veya sıralama garantisi vermez; bu yüzden güvenilirlik gerektiren işler için TCP daha uygundur."
  },

  {
    q: "Veri segmentasyonu ne anlama gelir?",
    t: "mcq",
    o: [
      "Büyük verinin küçük parçalara ayrılması",
      "Alan adının IP adresine çevrilmesi",
      "Kablo dış kılıfının soyulması",
      "MAC adresinin değiştirilmesi",
      "Web sayfasının renklendirilmesi"
    ],
    a: 0,
    difficulty: "medium",
    week: 6,
    topic: "Segmentasyon",
    importance: 5,
    explanation: "Segmentasyon, büyük verinin daha küçük parçalara bölünmesidir. Taşıma katmanında bu parçalara segment denir. Segment, gönderilecek verinin yönetilebilir küçük bölümüdür; bu sayede ağ üzerinden iletim daha düzenli yapılır."
  },

  {
    q: "Akış kontrolü ne işe yarar?",
    t: "mcq",
    o: [
      "Kablo sinyalini televizyona çevirmeye yarar",
      "Göndericinin alıcıyı veriyle boğmasını engeller",
      "Alan adını IP adresine çevirir",
      "Dosya adını değiştirir",
      "MAC adresini üretir"
    ],
    a: 1,
    difficulty: "medium",
    week: 6,
    topic: "Akış Kontrolü",
    importance: 5,
    explanation: "Akış kontrolü, hızlı gönderen cihazın yavaş alıcıya fazla veri gönderip onu zorlamasını engeller. Gönderici veri yollayan taraftır, alıcı ise veriyi alan taraftır. Bu mekanizma özellikle TCP'nin düzenli iletişim sağlamasında önemlidir."
  },

  {
    q: "TCP'nin veri sıralaması yapması ne anlama gelir?",
    t: "mcq",
    o: [
      "Verileri rastgele gönderir",
      "Veriyi yalnızca kabloya göre renklendirir",
      "Alıcıda parçaların doğru sıraya konmasını sağlar",
      "Alan adlarını alfabetik sıralar",
      "Port numaralarını siler"
    ],
    a: 2,
    difficulty: "medium",
    week: 6,
    topic: "Veri Sıralaması",
    importance: 5,
    explanation: "Ağda veri parçaları hedefe farklı sırayla ulaşabilir. TCP, bu parçaların doğru sırayla birleştirilmesini sağlar. Parça, büyük verinin küçük bölümü; sıralama ise bu parçaların gönderildiği mantıklı sıraya göre dizilmesidir."
  },

  {
    q: "TCP hangi uygulama türleri için daha uygundur?",
    t: "mcq",
    o: [
      "Sadece çevrimiçi oyunlar",
      "Sadece canlı ses görüşmeleri",
      "Sadece anlık video akışı",
      "Web, dosya transferi ve e-posta gibi doğruluk gerektiren uygulamalar",
      "Sadece DNS sorguları"
    ],
    a: 3,
    difficulty: "medium",
    week: 6,
    topic: "TCP Kullanım Alanı",
    importance: 5,
    explanation: "TCP, verinin eksiksiz ve doğru ulaşmasının önemli olduğu uygulamalarda tercih edilir. Web sayfası, dosya transferi ve e-posta gibi alanlarda eksik veri ciddi sorun oluşturabilir. Doğruluk, verinin hatasız ve eksiksiz ulaşması anlamına gelir."
  },

  {
    q: "UDP hangi uygulama türleri için daha uygundur?",
    t: "mcq",
    o: [
      "Banka transfer kayıtları",
      "Dosya yedekleme",
      "E-posta arşivleme",
      "Hassas veri tabanı kopyalama",
      "VoIP, video akışı ve çevrimiçi oyunlar gibi düşük gecikmeli uygulamalar"
    ],
    a: 4,
    difficulty: "medium",
    week: 6,
    topic: "UDP Kullanım Alanı",
    importance: 5,
    explanation: "UDP, düşük gecikmenin önemli olduğu yerlerde kullanılır. Gecikme, verinin gönderilmesi ile alınması arasında geçen süredir. VoIP sesli internet görüşmesi, video akışı canlı görüntü aktarımı, çevrimiçi oyun ise anlık tepki gerektiren ağ uygulamasıdır."
  },

  {
    q: "TCP ile UDP arasındaki bağlantı türü farkı nedir?",
    t: "mcq",
    o: [
      "TCP bağlantı tabanlıdır, UDP bağlantısızdır",
      "TCP bağlantısızdır, UDP bağlantı tabanlıdır",
      "İkisi de sadece fiziksel kablo türüdür",
      "İkisi de yalnızca DNS için kullanılır",
      "İkisi de MAC adresi üretir"
    ],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "TCP UDP Farkı",
    importance: 5,
    explanation: "TCP bağlantı tabanlıdır; veri göndermeden önce bağlantı kurulmasını ister. UDP bağlantısızdır; bağlantı kurmadan veriyi gönderir. Bu yüzden TCP daha kontrollü, UDP daha hızlı ama daha az garantilidir."
  },

  {
    q: "TCP'nin UDP'ye göre daha yavaş olmasının temel nedeni nedir?",
    t: "mcq",
    o: [
      "Hiç kontrol yapmaması",
      "Bağlantı, hata kontrolü ve sıralama gibi ek işlemler yapması",
      "Kablo kullanmaması",
      "Sadece televizyon sinyali taşıması",
      "DNS sorgusu yapması"
    ],
    a: 1,
    difficulty: "medium",
    week: 6,
    topic: "TCP Performansı",
    importance: 5,
    explanation: "TCP güvenilirlik için ek kontroller yapar. Hata kontrolü, veride bozulma veya eksiklik olup olmadığını denetlemektir. Veri sıralaması ve tekrar gönderim gibi işlemler TCP'yi güvenilir yapar ama UDP'ye göre daha yavaş hale getirebilir."
  },

  {
    q: "UDP'nin hızlı olmasının temel nedeni nedir?",
    t: "mcq",
    o: [
      "Her paketi üç kez göndermesi",
      "Bağlantı kurmadan ve az kontrolle veri göndermesi",
      "DNS'i devre dışı bırakması",
      "Koaksiyel kablo kullanması",
      "MAC adresini değiştirmesi"
    ],
    a: 2,
    difficulty: "medium",
    week: 6,
    topic: "UDP Performansı",
    importance: 5,
    explanation: "UDP, TCP gibi bağlantı kurma ve ayrıntılı hata düzeltme süreci yapmaz. Bu yüzden daha az bekleme ve daha az işlem yükü oluşur. İşlem yükü, cihazın iletişimi yönetmek için harcadığı ek hesaplama ve kontrol çabasıdır."
  },

  {
    q: "Hata denetimi ne anlama gelir?",
    t: "mcq",
    o: [
      "Kablonun rengini seçmek",
      "Bilgisayarın fanını temizlemek",
      "Dosya adını değiştirmek",
      "Verinin iletim sırasında bozulup bozulmadığını kontrol etmek",
      "Tarayıcı geçmişini silmek"
    ],
    a: 3,
    difficulty: "medium",
    week: 6,
    topic: "Hata Denetimi",
    importance: 5,
    explanation: "Hata denetimi, gönderilen verinin hedefe doğru ve bozulmadan ulaşıp ulaşmadığını kontrol etmektir. Bozulma, verinin iletim sırasında değişmesi veya eksilmesi demektir. TCP hata denetimi ve düzeltme konusunda UDP'ye göre daha güçlüdür."
  },

  {
    q: "Tıkanıklık kontrolü neyi amaçlar?",
    t: "mcq",
    o: [
      "Alan adını IP'ye çevirmeyi",
      "Kabloyu elektromanyetik alandan korumayı",
      "Web sayfasını renklendirmeyi",
      "SMTP ile e-posta göndermeyi",
      "Ağ aşırı yoğunken veri gönderimini düzenlemeyi"
    ],
    a: 4,
    difficulty: "hard",
    week: 6,
    topic: "Tıkanıklık Kontrolü",
    importance: 4,
    explanation: "Tıkanıklık kontrolü, ağda fazla trafik olduğunda veri akışını ayarlamayı amaçlar. Trafik, ağda dolaşan veri miktarıdır. Ağ tıkanırsa paket kaybı, yavaşlama ve gecikme artabilir."
  },

  {
    q: "VoIP uygulamalarında UDP'nin tercih edilme nedeni nedir?",
    t: "mcq",
    o: [
      "Düşük gecikme sağlaması",
      "Her veriyi mutlaka tekrar göndermesi",
      "Dosya bütünlüğünü yüzde yüz garanti etmesi",
      "Web sayfası oluşturması",
      "Alan adlarını IP'ye çevirmesi"
    ],
    a: 0,
    difficulty: "medium",
    week: 6,
    topic: "VoIP UDP",
    importance: 5,
    explanation: "VoIP, Voice over IP demektir; internet üzerinden sesli görüşmedir. Sesli görüşmede küçük veri kayıpları bazen tolere edilebilir ama gecikme konuşmayı bozar. Bu yüzden hızlı ve düşük gecikmeli UDP tercih edilebilir."
  },

  {
    q: "Bir dosya transferinde TCP'nin tercih edilme nedeni nedir?",
    t: "mcq",
    o: [
      "Dosyanın eksiksiz ve doğru ulaşması gerektiği için",
      "Dosyanın mutlaka kaybolması gerektiği için",
      "Bağlantı kurmadan veri göndermesi için",
      "Hata kontrolü yapmaması için",
      "Sadece ses taşıdığı için"
    ],
    a: 1,
    difficulty: "medium",
    week: 6,
    topic: "FTP TCP",
    importance: 5,
    explanation: "Dosya transferinde verinin eksiksiz ulaşması gerekir. Bir dosyanın küçük kısmı bile eksik olsa dosya bozulabilir. TCP, kayıp veya bozuk parçaları kontrol edip tekrar iletim sağlayabildiği için dosya transferinde daha uygundur."
  },

  {
    q: "TCP ve UDP'nin ikisi de hangi katmanın protokolüdür?",
    t: "mcq",
    o: [
      "Uygulama Katmanı",
      "İnternet Katmanı",
      "Taşıma Katmanı",
      "Fiziksel Katman",
      "Veri Bağlantı Katmanı"
    ],
    a: 2,
    difficulty: "easy",
    week: 6,
    topic: "Katman Bilgisi",
    importance: 5,
    explanation: "TCP ve UDP taşıma katmanı protokolleridir. Taşıma katmanı, uygulamalar arasında veri taşınmasını düzenler. Protokol, bu taşıma işleminin hangi kurallarla yapılacağını belirler."
  },

  {
    q: "TCP'nin uçtan uca güvenilirlik sağlaması ne demektir?",
    t: "mcq",
    o: [
      "Verinin kablonun rengini değiştirmesi",
      "Yalnızca DNS kullanması",
      "Verinin gönderici uygulamadan alıcı uygulamaya doğru ve sıralı ulaşmasını hedeflemesi",
      "UDP'yi tamamen kapatması",
      "Ağ kartını fiziksel olarak değiştirmesi"
    ],
    a: 3,
    difficulty: "hard",
    week: 6,
    topic: "Uçtan Uca Güvenilirlik",
    importance: 5,
    explanation: "Uçtan uca güvenilirlik, verinin gönderen taraftan alıcı tarafa eksiksiz, sıralı ve kontrol edilerek ulaştırılmasıdır. Gönderici ve alıcı, iletişimin iki ucudur. TCP, segmentleri sıralayarak ve hata kontrolü yaparak bu güvenilirliği sağlamaya çalışır."
  },

  {
    q: "TCP ve UDP karşılaştırmasında 'veri sırası garanti edilmez' ifadesi hangisi için doğrudur?",
    t: "mcq",
    o: [
      "TCP",
      "HTTP",
      "SMTP",
      "ARP",
      "UDP"
    ],
    a: 4,
    difficulty: "medium",
    week: 6,
    topic: "UDP Sıralama",
    importance: 5,
    explanation: "UDP'de veri sırası garanti edilmez. Yani gönderilen paketler alıcıya farklı sırayla ulaşabilir veya bazıları kaybolabilir. Paket, ağda taşınan veri parçasıdır; UDP bu paketleri hızlı gönderir ama TCP kadar kontrol etmez."
  },

  // =========================================================
  // ==== HAFTA 4 – BAKIR KABLOLAR: KOAKSİYEL, UTP, STP (81-100)
  // =========================================================

  {
    q: "Bakır kablolar ağlarda temel olarak ne için kullanılır?",
    t: "mcq",
    o: [
      "Veri sinyallerini elektriksel olarak iletmek için",
      "Alan adını IP adresine çevirmek için",
      "E-postaları otomatik silmek için",
      "Web sayfası tasarlamak için",
      "Ağ protokolü yazmak için"
    ],
    a: 0,
    difficulty: "easy",
    week: 4,
    topic: "Bakır Kablolar",
    importance: 5,
    explanation: "Bakır kablolar, elektrik sinyalleriyle veri iletiminde kullanılır. Veri sinyali, bilgisayar bilgisinin kablo üzerinde taşınabilir hale getirilmiş biçimidir. Bakır iyi bir iletken olduğu için ağ kablolarında yaygın kullanılır."
  },

  {
    q: "Koaksiyel kablonun temel yapısında hangi bölüm sinyali taşır?",
    t: "mcq",
    o: [
      "Dış kılıf",
      "İç tel / core",
      "Kablo etiketi",
      "Konnektör kapağı",
      "Kablo rengi"
    ],
    a: 1,
    difficulty: "easy",
    week: 4,
    topic: "Koaksiyel Kablo Yapısı",
    importance: 5,
    explanation: "Koaksiyel kabloda iç tel veya core, sinyali taşıyan ana iletkendir. İletken, elektrik sinyalini taşıyabilen malzemedir. Genellikle bakır veya bakır alaşımlı tel kullanılır."
  },

  {
    q: "Koaksiyel kablodaki dış ekranın görevi nedir?",
    t: "mcq",
    o: [
      "Kabloyu renklendirmek",
      "IP adresi vermek",
      "Elektromanyetik paraziti azaltmak",
      "DNS sorgusu yapmak",
      "E-posta almak"
    ],
    a: 2,
    difficulty: "medium",
    week: 4,
    topic: "Dış Ekran",
    importance: 5,
    explanation: "Dış ekran, koaksiyel kabloda metal kalkan görevi görür. Elektromanyetik parazit, çevredeki elektrikli cihazların sinyali bozabilecek etkisidir. Dış ekran bu etkiyi azaltarak daha kararlı veri iletimi sağlar."
  },

  {
    q: "Koaksiyel kabloda dış kılıfın görevi nedir?",
    t: "mcq",
    o: [
      "IP adresi çözmek",
      "E-posta göndermek",
      "Dosya indirmek",
      "Kabloyu dış etkilerden korumak",
      "TCP bağlantısı kurmak"
    ],
    a: 3,
    difficulty: "easy",
    week: 4,
    topic: "Dış Kılıf",
    importance: 5,
    explanation: "Dış kılıf, kablonun en dışındaki koruyucu plastik veya kauçuk tabakadır. Kabloyu su, nem, darbe ve fiziksel aşınma gibi dış etkilerden korur. Fiziksel etki, kabloya dışarıdan gelen mekanik veya çevresel zorlamadır."
  },

  {
    q: "RG-6 kablo genellikle hangi alanlarda kullanılır?",
    t: "mcq",
    o: [
      "Sadece klavye bağlantısında",
      "Sadece e-posta gönderiminde",
      "Sadece Bluetooth kulaklıkta",
      "Sadece IP adresi dağıtımında",
      "Televizyon sinyali ve internet bağlantılarında"
    ],
    a: 4,
    difficulty: "medium",
    week: 4,
    topic: "RG-6",
    importance: 4,
    explanation: "RG-6, koaksiyel kablo tiplerinden biridir. Genellikle televizyon yayını ve internet bağlantılarında kullanılır. Kablo tipi, kablonun yapısal ve kullanım amacına göre sınıflandırılmış çeşididir."
  },

  {
    q: "RG-59 kablo hangi kullanım alanıyla daha çok ilişkilidir?",
    t: "mcq",
    o: [
      "CCTV güvenlik kamera sistemleri",
      "Alan adı çözümleme",
      "SMTP e-posta gönderimi",
      "TCP üçlü el sıkışma",
      "IPv6 adresleme"
    ],
    a: 0,
    difficulty: "medium",
    week: 4,
    topic: "RG-59",
    importance: 4,
    explanation: "RG-59, daha düşük frekanslı sinyaller için kullanılan koaksiyel kablo tipidir ve CCTV kameralarında yaygındır. CCTV, kapalı devre kamera sistemi demektir. Frekans, sinyalin belirli süredeki titreşim sayısıyla ilgili teknik bir kavramdır."
  },

  {
    q: "UTP açılımı nedir?",
    t: "mcq",
    o: [
      "Universal Transfer Protocol",
      "Unshielded Twisted Pair",
      "Unified TCP Packet",
      "User Terminal Port",
      "Ultra Transmission Path"
    ],
    a: 1,
    difficulty: "easy",
    week: 4,
    topic: "UTP",
    importance: 5,
    explanation: "UTP, Unshielded Twisted Pair demektir. Türkçede korumasız bükümlü çift anlamına gelir. Korumasız, kabloda dış metal ekran bulunmadığını; bükümlü çift ise tellerin çiftler halinde birbirine sarıldığını anlatır."
  },

  {
    q: "STP açılımı nedir?",
    t: "mcq",
    o: [
      "Simple Transfer Packet",
      "Secure Telnet Path",
      "Shielded Twisted Pair",
      "Static Transport Protocol",
      "Server Timing Port"
    ],
    a: 2,
    difficulty: "easy",
    week: 4,
    topic: "STP",
    importance: 5,
    explanation: "STP, Shielded Twisted Pair demektir. Türkçede ekranlı bükümlü çift anlamına gelir. Ekran, kabloyu elektromanyetik parazite karşı koruyan metal kalkan anlamında kullanılır."
  },

  {
    q: "UTP kablonun STP'ye göre en belirgin avantajı hangisidir?",
    t: "mcq",
    o: [
      "Her zaman en yüksek parazit korumasını sağlaması",
      "Metal ekranla tamamen kaplı olması",
      "Sadece veri merkezlerinde kullanılması",
      "Daha düşük maliyetli ve kurulumu kolay olması",
      "Elektromanyetik paraziti tamamen yok etmesi"
    ],
    a: 3,
    difficulty: "medium",
    week: 4,
    topic: "UTP Avantajı",
    importance: 5,
    explanation: "UTP kablo, koruyucu metal ekran içermediği için genellikle daha ucuz ve esnektir. Maliyet, kurulum için harcanan para; kurulum kolaylığı ise kablonun döşenmesinin pratik olması demektir. Ev ve küçük ofis ağlarında UTP sık kullanılır."
  },

  {
    q: "STP kablo hangi durumda UTP'ye göre daha gerekli olur?",
    t: "mcq",
    o: [
      "Hiç parazit olmayan basit ev ağında",
      "Sadece kısa ve ucuz bağlantı istenen yerde",
      "Kablonun görünmeyeceği dekoratif alanlarda",
      "Hiç ağ cihazı olmayan yerde",
      "Elektromanyetik parazitin yüksek olduğu endüstriyel ortamlarda"
    ],
    a: 4,
    difficulty: "medium",
    week: 4,
    topic: "STP Kullanım Alanı",
    importance: 5,
    explanation: "STP kablo, dış ekran sayesinde parazite karşı daha korumalıdır. Endüstriyel ortam, fabrika gibi elektrik motorları ve makinelerin fazla olduğu yerleri ifade eder. Bu ortamlarda elektromanyetik parazit daha fazla olabileceği için STP daha güvenilir olabilir."
  },

  {
    q: "Bükümlü çift yapısının temel amacı nedir?",
    t: "mcq",
    o: [
      "Sinyal bozulmasını ve paraziti azaltmaya yardım etmek",
      "IP adresi dağıtmak",
      "Web sayfasını tarayıcıda göstermek",
      "E-posta göndermek",
      "TCP bağlantısını kapatmak"
    ],
    a: 0,
    difficulty: "medium",
    week: 4,
    topic: "Twisted Pair",
    importance: 5,
    explanation: "Bükümlü çift yapısı, bakır tellerin çiftler halinde birbirine sarılmasıdır. Bu büküm, dış parazit etkisini azaltmaya yardım eder. Parazit, istenmeyen elektriksel veya elektromanyetik etkidir; sinyalin bozulmasına neden olabilir."
  },

  {
    q: "Koaksiyel kablonun uzun mesafelerde tercih edilme nedenlerinden biri nedir?",
    t: "mcq",
    o: [
      "Hiç sinyal taşımaması",
      "Düşük sinyal kaybı sağlaması",
      "Sadece e-posta göndermesi",
      "Sadece kablosuz çalışması",
      "IP adresini otomatik üretmesi"
    ],
    a: 1,
    difficulty: "medium",
    week: 4,
    topic: "Koaksiyel Avantajı",
    importance: 5,
    explanation: "Koaksiyel kabloda sinyal kaybı düşük olabilir. Sinyal kaybı, veri sinyalinin mesafe arttıkça zayıflaması demektir. Düşük sinyal kaybı, sinyalin daha uzun mesafede daha kararlı taşınmasına yardım eder."
  },

  {
    q: "Bant genişliği kavramı neyi ifade eder?",
    t: "mcq",
    o: [
      "Kablonun dış rengi",
      "Kablo ucunun şekli",
      "Belirli sürede taşınabilecek veri kapasitesi",
      "E-posta şifresi",
      "DNS sunucu adı"
    ],
    a: 2,
    difficulty: "medium",
    week: 4,
    topic: "Bant Genişliği",
    importance: 5,
    explanation: "Bant genişliği, ağın veya kablonun belirli sürede ne kadar veri taşıyabileceğini ifade eder. Kapasite, taşıyabileceği miktar demektir. Bant genişliği yüksekse aynı sürede daha fazla veri aktarılabilir."
  },

  {
    q: "Koaksiyel kablonun yapısında iç tel ile dış ekranın temas etmesini engelleyen bölüm hangisidir?",
    t: "mcq",
    o: [
      "Dış kılıf",
      "RJ45 uç",
      "DNS başlığı",
      "İzolatör / iç yalıtım",
      "Port numarası"
    ],
    a: 3,
    difficulty: "medium",
    week: 4,
    topic: "İzolatör",
    importance: 4,
    explanation: "İzolatör veya iç yalıtım, iç telin dış metal ekranla temas etmesini engeller. Yalıtkan malzeme elektrik akımını kolay geçirmeyen malzemedir. Bu bölüm olmazsa sinyal bozulabilir veya kısa devre benzeri sorunlar oluşabilir."
  },

  {
    q: "Ev veya küçük ofis ağı için genellikle en ekonomik bakır kablo seçeneği hangisidir?",
    t: "mcq",
    o: [
      "Koaksiyel RG-59",
      "Fiber optik kablo",
      "STP kablo",
      "Uydu kablosu",
      "UTP kablo"
    ],
    a: 4,
    difficulty: "easy",
    week: 4,
    topic: "UTP Kullanım Alanı",
    importance: 5,
    explanation: "UTP kablo genellikle ev ve küçük ofis ağlarında uygun maliyetli ve pratik bir çözümdür. Ekonomik, daha düşük maliyetli anlamına gelir. Kısa mesafelerde ve normal parazit ortamlarında UTP yeterli performans sağlayabilir."
  },

  {
    q: "Koaksiyel kablo hangi alanlarda yaygın kullanılır?",
    t: "mcq",
    o: [
      "TV yayıncılığı, kablolu internet ve CCTV sistemleri",
      "Sadece klavye tuş bağlantısı",
      "Yalnızca DNS sorguları",
      "Sadece SMTP e-posta gönderimi",
      "Yalnızca TCP üçlü el sıkışma"
    ],
    a: 0,
    difficulty: "easy",
    week: 4,
    topic: "Koaksiyel Kullanım Alanları",
    importance: 5,
    explanation: "Koaksiyel kablo televizyon yayıncılığı, kablolu internet ve CCTV güvenlik kamera sistemlerinde yaygındır. Yayıncılık, sinyalin alıcılara dağıtılmasıdır. CCTV ise güvenlik kamerası görüntülerinin kapalı devre sistemde taşınmasıdır."
  },

  {
    q: "UTP kablonun korumasız olması ne anlama gelir?",
    t: "mcq",
    o: [
      "Hiç bakır tel içermemesi",
      "Elektromanyetik parazite karşı metal ekranının bulunmaması",
      "Sadece fiberden yapılması",
      "IP adresi alamaması",
      "Hiç veri taşıyamaması"
    ],
    a: 1,
    difficulty: "medium",
    week: 4,
    topic: "UTP Korumasız Yapı",
    importance: 5,
    explanation: "UTP'deki 'unshielded' kelimesi ekran bulunmadığını anlatır. Ekran, kabloyu dış elektromanyetik etkilerden koruyan metal kalkan demektir. UTP yine veri taşır; sadece STP kadar parazit korumasına sahip değildir."
  },

  {
    q: "STP kablonun ekranlı olması neyi sağlar?",
    t: "mcq",
    o: [
      "Web sayfasının daha güzel görünmesini",
      "E-postanın otomatik silinmesini",
      "Elektromanyetik parazite karşı daha iyi koruma sağlamasını",
      "IP adresini DNS'e çevirmesini",
      "TCP yerine HTTP çalıştırmasını"
    ],
    a: 2,
    difficulty: "medium",
    week: 4,
    topic: "STP Koruma",
    importance: 5,
    explanation: "STP kablodaki ekran, dış parazite karşı koruma sağlar. Elektromanyetik parazit, elektrikli cihazların oluşturduğu ve sinyali bozabilen etkidir. Bu yüzden STP veri merkezi, fabrika veya güvenilirlik isteyen ortamlarda daha uygun olabilir."
  },

  {
    q: "Koaksiyel kablo ile UTP kablo karşılaştırmasında doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "UTP her zaman koaksiyelden daha dayanıklıdır",
      "Koaksiyel sadece e-posta gönderir",
      "UTP yalnızca televizyon yayını içindir",
      "Koaksiyel uzun mesafe ve parazit dayanımı açısından avantajlı olabilir; UTP daha ucuz ve esnektir",
      "İkisi de veri taşımaz"
    ],
    a: 3,
    difficulty: "hard",
    week: 4,
    topic: "Kablo Karşılaştırması",
    importance: 5,
    explanation: "Koaksiyel kablo metal ekranlı yapısıyla parazite dayanıklı ve uzun mesafede kararlı olabilir. UTP ise daha ucuz, esnek ve kurulumu kolaydır. Esneklik, kablonun kolay döşenmesi ve farklı ortamlara rahat uyum sağlamasıdır."
  },

  {
    q: "Kablo seçiminde ortamda yüksek elektromanyetik parazit varsa en uygun tercih hangisidir?",
    t: "mcq",
    o: [
      "Korumasız UTP'yi her durumda seçmek",
      "Hiç kablo kullanmamak",
      "DNS protokolünü değiştirmek",
      "SMTP portunu kapatmak",
      "STP gibi ekranlı kablo tercih etmek"
    ],
    a: 4,
    difficulty: "medium",
    week: 4,
    topic: "Kablo Seçimi",
    importance: 5,
    explanation: "Parazitin yüksek olduğu ortamlarda ekranlı kablo tercih etmek daha mantıklıdır. STP, Shielded Twisted Pair yani ekranlı bükümlü çift kablodur. Ekran, dış elektromanyetik etkileri azaltarak sinyalin daha temiz taşınmasına yardım eder."
  }
];
