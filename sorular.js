// Web Tasarım (HTML-CSS-JS) – 50 Soruluk Sınav Soru Bankası (MCQ)
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]

window.questionBank = [
  // =========================================================
  // ==== 1. HAFTA – HTML Temelleri (17 Soru) =================
  // =========================================================

  {
    q: "Web sayfasını oluşturan 3 temel teknoloji (çok temel düzeyde) en doğru hangisidir?",
    t: "mcq",
    o: [
      "HTML = stil, CSS = veri tabanı, JS = sunucu",
      "HTML = yapı (iskelet), CSS = görünüm (stil), JavaScript = davranış (etkileşim)",
      "HTML = internet, CSS = RAM, JS = ekran kartı",
      "HTML = sadece resim, CSS = sadece yazı, JS = sadece link",
      "HTML = programlama dili, CSS = işletim sistemi, JS = donanım"
    ],
    a: "HTML = yapı (iskelet), CSS = görünüm (stil), JavaScript = davranış (etkileşim)",
    difficulty: "easy",
    week: 1,
    topic: "HTML-CSS-JS rol ayrımı",
    importance: "high",
    explanation: `En basit ezber:
- HTML: Sayfada “ne var?” (başlık, paragraf, buton, resim, form)
- CSS: “Nasıl görünsün?” (renk, hizalama, boşluk, boyut)
- JS: “Ne yapsın?” (butona basınca değişsin, veri çeksin, doğrulama yapsın)

Mini örnek mantığı:
- HTML ile <button>Buton</button> koyarsın.
- CSS ile butonu mavi yaparsın.
- JS ile tıklanınca yazıyı değiştirirsin.

Sınavlarda en çok bu rol ayrımı sorulur.`
  },

  {
    q: "HTML etiket yapısı (tag anatomy) en doğru hangisidir?",
    t: "mcq",
    o: [
      "Sadece { } süslü parantezle yazılır",
      "<etiket>içerik</etiket> şeklinde açılıp kapanır (bazıları tek başına olabilir)",
      "Sadece // yorum satırıyla yazılır",
      "Sadece 'import' yazarak çalışır",
      "HTML’de hiç kapanış etiketi yoktur"
    ],
    a: "<etiket>içerik</etiket> şeklinde açılıp kapanır (bazıları tek başına olabilir)",
    difficulty: "easy",
    week: 1,
    topic: "Etiket yapısı",
    importance: "high",
    explanation: `HTML’de çoğu etiket “açılış + kapanış” şeklindedir:
- <p>Merhaba</p>
- <h1>Başlık</h1>

Bazı etiketler “tek başına” kullanılır (self-closing gibi düşün):
- <img ... />
- <br />

Örnek:
<p>Yusuf</p>
Tarayıcıda “Yusuf” metni paragraf olarak görünür.`
  },

  {
    q: "<!doctype html> satırının görevi en doğru hangisidir?",
    t: "mcq",
    o: [
      "CSS dosyasını çağırır",
      "Tarayıcıya belgenin HTML5 olduğunu söyler (standart mod)",
      "JavaScript’i kapatır",
      "Veritabanı bağlantısını açar",
      "Sayfayı otomatik responsive yapar"
    ],
    a: "Tarayıcıya belgenin HTML5 olduğunu söyler (standart mod)",
    difficulty: "easy",
    week: 1,
    topic: "DOCTYPE",
    importance: "high",
    explanation: `<!doctype html> tarayıcıya “Bu sayfa HTML5’tir” der.
Bu satır yoksa tarayıcı bazen “eski uyumluluk modu” gibi davranabilir ve CSS/HTML beklenmedik sonuçlar verebilir.

Örnek:
<!doctype html>
<html> ... </html>
Bu şekilde modern standartlar devreye girer.`
  },

  {
    q: "HTML’de <head> ile <body> arasındaki fark en doğru hangisidir?",
    t: "mcq",
    o: [
      "<head> sayfada görünen içeriktir; <body> ayarlardır",
      "<head> ayarlar/metadata/linkler; <body> ekranda görünen içerik",
      "<head> sadece resimler; <body> sadece yazılar",
      "İkisi aynı şeydir",
      "<head> JS yazılır; <body> CSS yazılır"
    ],
    a: "<head> ayarlar/metadata/linkler; <body> ekranda görünen içerik",
    difficulty: "easy",
    week: 1,
    topic: "Head vs Body",
    importance: "high",
    explanation: `<head> sayfanın ayar bölümü gibidir:
- <title>, <meta>, CSS linkleri, bazı script ayarları

<body> ise kullanıcıya görünen her şeydir:
- başlık, paragraf, buton, resim, form...

Mini örnek:
<head><title>Eylül</title></head>
<body><h1>Merhaba</h1></body>
Tarayıcı sekmesinde “Eylül” yazar; sayfada “Merhaba” görünür.`
  },

  {
    q: "<meta charset='utf-8'> satırı en doğru ne içindir?",
    t: "mcq",
    o: [
      "Sayfayı hızlandırmak için",
      "Türkçe karakterler gibi doğru metin gösterimi için karakter kodlamasını ayarlamak",
      "CSS’i etkinleştirmek için",
      "JavaScript’i devre dışı bırakmak için",
      "Ekran genişliğini otomatik büyütmek için"
    ],
    a: "Türkçe karakterler gibi doğru metin gösterimi için karakter kodlamasını ayarlamak",
    difficulty: "easy",
    week: 1,
    topic: "Charset",
    importance: "high",
    explanation: `UTF-8, Türkçe karakterlerin (ş,ğ,ı,ö,ü,ç) bozulmamasını sağlar.
Bu satır olmazsa “Eylül” gibi kelimeler bazen hatalı görünebilir.

Örnek:
<meta charset="utf-8">
Sonuç: Yazılar doğru çıkar.`
  },

  {
    q: "<title> etiketinin etkisi en doğru hangisidir?",
    t: "mcq",
    o: [
      "Sayfanın içindeki ana başlığı değiştirir",
      "Tarayıcı sekmesinde görünen sayfa başlığını belirler",
      "Butonların rengini değiştirir",
      "Resmin alt yazısını belirler",
      "Formu doğrular"
    ],
    a: "Tarayıcı sekmesinde görünen sayfa başlığını belirler",
    difficulty: "easy",
    week: 1,
    topic: "Title",
    importance: "medium",
    explanation: `<title> sayfada görünmez; tarayıcı sekmesinde ve arama motoru başlıklarında etkisi olur.

Örnek:
<title>Yusuf - Web</title>
Sekmede “Yusuf - Web” yazar.`
  },

  {
    q: "Başlık etiketleri (h1-h6) için en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "h1 en küçük, h6 en büyüktür",
      "h1 en büyük başlık, h6 en küçüktür",
      "h etiketleri sadece CSS içindir",
      "h etiketleri sadece link oluşturur",
      "h etiketleri form doğrular"
    ],
    a: "h1 en büyük başlık, h6 en küçüktür",
    difficulty: "easy",
    week: 1,
    topic: "Başlıklar",
    importance: "high",
    explanation: `h1-h6 “önem sırası” gibi düşün:
- h1: ana başlık
- h2: alt başlık
- ...
- h6: en küçük

Örnek:
<h1>Yusuf</h1>
<h2>Eylül</h2>
Tarayıcıda Yusuf daha büyük görünür; Eylül alt başlık gibi durur.`
  },

  {
    q: "<p> ile <br> arasındaki fark en doğru hangisidir?",
    t: "mcq",
    o: [
      "<p> satır kırar, <br> paragraf oluşturur",
      "<p> paragraf (blok) oluşturur; <br> sadece satır sonu ekler",
      "İkisi aynı şeydir",
      "<br> başlık yapar",
      "<p> resim ekler"
    ],
    a: "<p> paragraf (blok) oluşturur; <br> sadece satır sonu ekler",
    difficulty: "medium",
    week: 1,
    topic: "Paragraf vs Satır sonu",
    importance: "medium",
    explanation: `<p> yeni bir paragraf kutusu oluşturur (üst-alt boşluk da olur).
<br> sadece aynı paragraf içinde alt satıra indirir.

Örnek:
<p>Yusuf<br>Eylül</p>
Sonuç: Aynı paragraf içinde iki satır görünür.`
  },

  {
    q: "Link (bağlantı) vermek için hangi etiket kullanılır?",
    t: "mcq",
    o: ["<img>", "<a>", "<p>", "<div>", "<span>"],
    a: "<a>",
    difficulty: "easy",
    week: 1,
    topic: "Link",
    importance: "high",
    explanation: `<a> etiketi link verir, href hedefi gösterir.

Örnek:
<a href="https://example.com">Siteye Git</a>

Sonuç:
“Siteye Git” tıklanınca o adrese gider.`
  },

  {
    q: "Bir linki yeni sekmede açmak için hangi özellik kullanılır?",
    t: "mcq",
    o: [
      "download='true'",
      "target='_blank'",
      "rel='css'",
      "type='button'",
      "name='newtab'"
    ],
    a: "target='_blank'",
    difficulty: "medium",
    week: 1,
    topic: "Link hedefi",
    importance: "medium",
    explanation: `target="_blank" linki yeni sekmede açar.
Genelde güvenlik için rel="noopener noreferrer" da eklenir (ileri seviye ama bilmek artı puan).

Örnek:
<a href="https://example.com" target="_blank">Aç</a>
Sonuç: Yeni sekme açılır.`
  },

  {
    q: "<img> etiketinde alt özelliği (alt) en doğru ne için kullanılır?",
    t: "mcq",
    o: [
      "Resmi büyütmek için",
      "Resim yüklenmezse görünen açıklama ve ekran okuyucu (erişilebilirlik) için",
      "Resmi link yapmak için",
      "CSS’i iptal etmek için",
      "JavaScript’i çalıştırmak için"
    ],
    a: "Resim yüklenmezse görünen açıklama ve ekran okuyucu (erişilebilirlik) için",
    difficulty: "medium",
    week: 1,
    topic: "img alt",
    importance: "high",
    explanation: `alt metni:
- Resim açılmazsa kullanıcıya ne olduğunu söyler
- Ekran okuyucu kullananlar için resmin anlamını okur

Örnek:
<img src="logo.png" alt="EYSTUDIO logosu" />
Resim yoksa “EYSTUDIO logosu” metni/okuması devreye girer.`
  },

  {
    q: "Liste oluşturmak için doğru kombinasyon hangisidir?",
    t: "mcq",
    o: [
      "<ul> + <li>",
      "<div> + <p>",
      "<h1> + <h2>",
      "<img> + <a>",
      "<table> + <span>"
    ],
    a: "<ul> + <li>",
    difficulty: "easy",
    week: 1,
    topic: "Listeler",
    importance: "high",
    explanation: `Sırasız liste: <ul> (unordered list)
Eleman: <li>

Örnek:
<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>

Sonuç: Madde işaretli bir liste oluşur.`
  },

  {
    q: "Semantic (anlamlı) HTML etiketlerinin temel faydası hangisidir?",
    t: "mcq",
    o: [
      "Sayfayı otomatik hızlandırır",
      "Kodun anlamını güçlendirir: okunabilirlik + SEO + erişilebilirlik",
      "JavaScript’i devre dışı bırakır",
      "Veritabanı oluşturur",
      "CSS’i siler"
    ],
    a: "Kodun anlamını güçlendirir: okunabilirlik + SEO + erişilebilirlik",
    difficulty: "medium",
    week: 1,
    topic: "Semantic HTML",
    importance: "high",
    explanation: `Semantic etiketler (header, nav, main, section, footer) “bu bölüm ne?” sorusuna cevap verir.
- Geliştirici daha kolay anlar
- Arama motoru sayfayı daha iyi yorumlar (SEO)
- Erişilebilirlik araçları sayfayı daha doğru okur

Örnek: <nav> menü alanıdır, <footer> sayfa altıdır.`
  },

  {
    q: "<div> ile <span> arasındaki en temel fark hangisidir?",
    t: "mcq",
    o: [
      "<div> inline, <span> block’tur",
      "<div> block (satırı kaplar), <span> inline (metin içinde) davranır",
      "İkisi aynı şeydir",
      "<span> sadece resim için",
      "<div> sadece link için"
    ],
    a: "<div> block (satırı kaplar), <span> inline (metin içinde) davranır",
    difficulty: "medium",
    week: 1,
    topic: "div vs span",
    importance: "medium",
    explanation: `<div> büyük kutu gibi davranır (blok).
<span> metin içi küçük işaretleme gibidir (inline).

Örnek:
<p>Yusuf <span>ve</span> Eylül</p>
“ve” kelimesini ayrı stil vermek için span ile sararsın.`
  },

  {
    q: "id ile class farkı en doğru hangisidir?",
    t: "mcq",
    o: [
      "id aynı sayfada birden çok kez kullanılabilir, class sadece bir kez",
      "id genelde tekil (unique), class tekrar kullanılabilir (çoklu elemanda)",
      "id sadece CSS içindir, class sadece HTML içindir",
      "id resim ekler, class link ekler",
      "id JavaScript’i kapatır"
    ],
    a: "id genelde tekil (unique), class tekrar kullanılabilir (çoklu elemanda)",
    difficulty: "easy",
    week: 1,
    topic: "id vs class",
    importance: "high",
    explanation: `id: tek bir elemanı hedeflemek için (aynı sayfada 1 kez olması beklenir).
class: aynı stili birçok elemanda kullanmak için.

Örnek:
<h1 id="baslik">Yusuf</h1>
<p class="aciklama">...</p>
Birden çok <p class="aciklama"> olabilir.`
  },

  {
    q: "Form göndermek için en temel HTML etiketi hangisidir?",
    t: "mcq",
    o: ["<form>", "<table>", "<img>", "<section>", "<header>"],
    a: "<form>",
    difficulty: "easy",
    week: 1,
    topic: "Form temeli",
    importance: "high",
    explanation: `<form> kullanıcıdan veri almak içindir (giriş, kayıt, arama).
İçinde input, textarea, button gibi alanlar olur.

Örnek:
<form>
  <input type="text" />
  <button>Gönder</button>
</form>

Sonuç: Kullanıcı veri girer ve gönder butonuna basar.`
  },

  {
    q: "Aşağıdakilerden hangisi <input> için doğru bir type örneğidir?",
    t: "mcq",
    o: ["type='photo'", "type='mailbox'", "type='email'", "type='screen'", "type='bold'"],
    a: "type='email'",
    difficulty: "easy",
    week: 1,
    topic: "Input type",
    importance: "high",
    explanation: `input type, tarayıcıya “bu alan ne tür veri?” der.
type="email" e-posta formatına uygunluk için yardımcı olur.

Örnek:
<input type="email" placeholder="yusuf@example.com" />
Sonuç: Mobilde e-posta klavyesi gibi yardımcı seçimler gelir.`
  },

  {
    q: "Erişilebilirlik (accessibility) için form alanına en doğru eşleşme hangisidir?",
    t: "mcq",
    o: [
      "<label> ile input’u ilişkilendirmek (for/id)",
      "Input’u div içine koymak",
      "Sadece renk kullanarak zorunlu alan göstermek",
      "placeholder yeterlidir, label gereksizdir",
      "label yerine sadece <br> kullanmak"
    ],
    a: "<label> ile input’u ilişkilendirmek (for/id)",
    difficulty: "hard",
    week: 1,
    topic: "Accessibility - label",
    importance: "high",
    explanation: `Erişilebilirlikte en kritik şey: alanın adı net olmalı.
<label for="eposta">E-posta</label>
<input id="eposta" type="email" />

Sonuç:
- Ekran okuyucu “E-posta alanı” diye okur.
- Label’a tıklayınca input odaklanır.
Sınavda “label/alt/semantic” çok değerli puandır.`
  },

  // =========================================================
  // ==== 2. HAFTA – CSS Temelleri (16 Soru) ==================
  // =========================================================

  {
    q: "CSS’in görevi en doğru hangisidir?",
    t: "mcq",
    o: [
      "Veritabanı sorgusu çalıştırmak",
      "Sayfanın görünümünü/stilini belirlemek (renk, düzen, boşluk, font)",
      "Sunucu kurmak",
      "HTML’i otomatik yazmak",
      "Tarayıcıyı güncellemek"
    ],
    a: "Sayfanın görünümünü/stilini belirlemek (renk, düzen, boşluk, font)",
    difficulty: "easy",
    week: 2,
    topic: "CSS rolü",
    importance: "high",
    explanation: `CSS: “Nasıl görünsün?” sorusunu cevaplar.
HTML’de <h1>Başlık</h1> vardır; CSS ile başlık:
- mavi olsun
- ortalansın
- büyük olsun
dersin.

Örnek:
h1 { color: blue; }
Sonuç: Başlık mavi görünür.`
  },

  {
    q: "CSS eklemenin 3 temel yolu hangisidir?",
    t: "mcq",
    o: [
      "only-inline / only-external / only-server",
      "inline style / <style> (internal) / .css dosyası (external)",
      "HTML içine gömme / RAM’e gömme / CPU’ya gömme",
      "script / meta / title",
      "img / a / p"
    ],
    a: "inline style / <style> (internal) / .css dosyası (external)",
    difficulty: "easy",
    week: 2,
    topic: "CSS ekleme yöntemleri",
    importance: "high",
    explanation: `3 yöntem:
1) Inline: <p style="color:red">
2) Internal: <style> p { ... } </style>
3) External: <link rel="stylesheet" href="style.css">

En temiz ve yaygın: External (ayrı dosya).
Çünkü kod düzenli olur ve tekrar kullanım artar.`
  },

  {
    q: "Aşağıdakilerden hangisi class seçicisine örnektir?",
    t: "mcq",
    o: ["#kutu", ".kutu", "kutu()", "<kutu>", "@kutu"],
    a: ".kutu",
    difficulty: "easy",
    week: 2,
    topic: "Selector - class",
    importance: "high",
    explanation: `CSS seçicileri:
- .class => class
- #id => id
- p, h1 => etiket

Örnek:
<p class="aciklama">...</p>
.aciklama { color: #333; }

Sonuç: O class’a sahip paragraflar renklendirilir.`
  },

  {
    q: "CSS’te id seçicisi hangi sembolle yazılır?",
    t: "mcq",
    o: [".", "#", "$", "&", "%"],
    a: "#",
    difficulty: "easy",
    week: 2,
    topic: "Selector - id",
    importance: "high",
    explanation: `id seçicisi # ile başlar.

Örnek:
<h1 id="baslik">Yusuf</h1>
#baslik { font-size: 40px; }

Sonuç: Sadece id’si baslik olan eleman büyür.`
  },

  {
    q: "CSS specificity (öncelik) mantığı için en doğru genelleme hangisidir?",
    t: "mcq",
    o: [
      "Etiket her zaman class’tan güçlüdür",
      "id genelde class’tan, class da etiketten daha güçlüdür",
      "Hepsi eşittir",
      "Inline style en zayıftır",
      "CSS’te öncelik yoktur"
    ],
    a: "id genelde class’tan, class da etiketten daha güçlüdür",
    difficulty: "hard",
    week: 2,
    topic: "Specificity",
    importance: "high",
    explanation: `Genel öncelik sırası (basit anlatım):
inline style > #id > .class > etiket (p, div...)

Örnek:
p { color: blue; }
.aciklama { color: red; }
#ozel { color: green; }

Aynı elemana hepsi uygularsa, id daha baskın olur.`
  },

  {
    q: "Box Model’de doğru sıra hangisidir?",
    t: "mcq",
    o: [
      "margin -> border -> padding -> content",
      "content -> padding -> border -> margin",
      "padding -> content -> margin -> border",
      "content -> margin -> border -> padding",
      "border -> margin -> content -> padding"
    ],
    a: "content -> padding -> border -> margin",
    difficulty: "medium",
    week: 2,
    topic: "Box Model",
    importance: "high",
    explanation: `Box Model:
- Content: içerik alanı
- Padding: iç boşluk
- Border: çerçeve
- Margin: dış boşluk

Örnek:
.card { padding:16px; border:1px solid #ddd; margin:12px; }
Sonuç: Kartın içi nefes alır (padding), etrafında çerçeve olur, dışarıdan da boşluk bırakır (margin).`
  },

  {
    q: "display: block ile display: inline arasındaki temel fark hangisidir?",
    t: "mcq",
    o: [
      "block yan yana dizilir, inline alt alta dizilir",
      "block satırı kaplar (alt satıra iter), inline metin gibi akar (yan yana gelebilir)",
      "inline genişlik/yükseklik alır, block almaz",
      "ikisi aynı şeydir",
      "block sadece resim içindir"
    ],
    a: "block satırı kaplar (alt satıra iter), inline metin gibi akar (yan yana gelebilir)",
    difficulty: "medium",
    week: 2,
    topic: "Display türleri",
    importance: "medium",
    explanation: `block eleman: yeni satırdan başlar, satırı kaplar (div, p).
inline eleman: metin içinde akar, yan yana olabilir (span, a).

Örnek:
<a>Link1</a><a>Link2</a> genelde yan yana durur.
<div>1</div><div>2</div> alt alta durur.`
  },

  {
    q: "Bir elemanı sayfada ortalamak için modern ve pratik yöntemlerden biri hangisidir?",
    t: "mcq",
    o: [
      "Her zaman <center> etiketi kullanmak",
      "Flexbox kullanıp justify-content ve align-items ile ortalamak",
      "Sadece <br> ile boşluk atmak",
      "Sadece tab tuşu ile hizalamak",
      "Sadece border artırmak"
    ],
    a: "Flexbox kullanıp justify-content ve align-items ile ortalamak",
    difficulty: "medium",
    week: 2,
    topic: "Flexbox - merkezleme",
    importance: "high",
    explanation: `Flexbox ile çok kolay ortalanır:
.kutu {
  display: flex;
  justify-content: center; // yatay
  align-items: center;     // dikey
}

Sonuç: İçerik hem yatay hem dikey ortalanır.
Sınavda flex sık çıkar çünkü güncel pratik yöntemdir.`
  },

  {
    q: "position: relative ile position: absolute arasındaki ilişki en doğru hangisidir?",
    t: "mcq",
    o: [
      "absolute eleman her zaman ekranın sol üstüne göre konumlanır",
      "absolute eleman, en yakın “position: relative” ebeveyne göre konumlanır",
      "relative eleman görünmez olur",
      "absolute sadece metin içindir",
      "relative, CSS’i devre dışı bırakır"
    ],
    a: "absolute eleman, en yakın “position: relative” ebeveyne göre konumlanır",
    difficulty: "hard",
    week: 2,
    topic: "Positioning",
    importance: "medium",
    explanation: `Kural:
- Parent: position: relative
- Child: position: absolute; top/right/bottom/left

Örnek:
.parent { position: relative; }
.child  { position: absolute; top: 10px; right: 10px; }

Sonuç: child, parent kutusunun içinde sağ üstte durur.`
  },

  {
    q: "Flexbox’ta justify-content neyi kontrol eder?",
    t: "mcq",
    o: [
      "Dikey hizalamayı",
      "Yatay (ana eksen) hizalamayı",
      "Yazı tipini",
      "Renk paletini",
      "Sadece border kalınlığını"
    ],
    a: "Yatay (ana eksen) hizalamayı",
    difficulty: "medium",
    week: 2,
    topic: "Flexbox eksenleri",
    importance: "high",
    explanation: `Flex’te iki eksen vardır:
- justify-content: ana eksen (default yatay)
- align-items: çapraz eksen (default dikey)

Örnek:
.row { display:flex; justify-content: space-between; }
Sonuç: Elemanlar araya boşluk koyarak sağa-sola yayılır.`
  },

  {
    q: "Grid ile 3 eşit sütun oluşturmanın doğru yolu hangisidir?",
    t: "mcq",
    o: [
      "display: grid; grid-template-columns: 1fr 1fr 1fr;",
      "display: flex; grid-columns: 3;",
      "position: grid; columns: 3;",
      "display: block; column-count: 3fr;",
      "grid: on; columns: equal;"
    ],
    a: "display: grid; grid-template-columns: 1fr 1fr 1fr;",
    difficulty: "medium",
    week: 2,
    topic: "CSS Grid",
    importance: "medium",
    explanation: `Grid ile sütunları net tanımlarsın:
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
}

Sonuç: 3 eşit sütun, aralarında boşluk (gap) olur.`
  },

  {
    q: "Responsive tasarımda @media sorgusunun amacı en doğru hangisidir?",
    t: "mcq",
    o: [
      "Sayfayı veritabanına bağlamak",
      "Ekran boyutuna göre CSS kurallarını değiştirmek",
      "JavaScript’i hızlandırmak",
      "HTML’i şifrelemek",
      "Tarayıcıyı güncellemek"
    ],
    a: "Ekran boyutuna göre CSS kurallarını değiştirmek",
    difficulty: "easy",
    week: 2,
    topic: "Responsive - media query",
    importance: "high",
    explanation: `@media ile “ekran şu kadar küçükse şöyle yap” dersin.

Örnek:
@media (max-width: 768px) {
  .grid { grid-template-columns: 1fr; }
}

Sonuç: Masaüstünde 3 sütun olan grid, mobilde 1 sütuna düşer.`
  },

  {
    q: "CSS birimleriyle ilgili doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "px her zaman ekrana göre değişir, sabit değildir",
      "rem genelde root font-size’a göre ölçeklenir, responsive için daha kontrollü olabilir",
      "vw sadece yükseklik birimidir",
      "% sadece renkle ilgilidir",
      "em ve rem aynı şey değildir, ikisi de asla kullanılmaz"
    ],
    a: "rem genelde root font-size’a göre ölçeklenir, responsive için daha kontrollü olabilir",
    difficulty: "hard",
    week: 2,
    topic: "CSS units",
    importance: "medium",
    explanation: `px: sabite yakın ölçü (temel anlatım).
em: bulunduğu elemanın font-size’ına göre değişir.
rem: html (root) font-size’ına göre değişir.

Örn:
html { font-size: 16px; }
h1 { font-size: 2rem; } => 32px

Sonuç: rem ile genel ölçek kontrolü daha düzenli olur.`
  },

  {
    q: ":hover pseudo-class en doğru ne yapar?",
    t: "mcq",
    o: [
      "Kullanıcı elemanın üstüne gelince (mouse over) stil uygular",
      "Sayfayı otomatik kaydeder",
      "JavaScript’i devre dışı bırakır",
      "Veritabanını yedekler",
      "Sadece mobilde çalışır"
    ],
    a: "Kullanıcı elemanın üstüne gelince (mouse over) stil uygular",
    difficulty: "easy",
    week: 2,
    topic: "Pseudo-class",
    importance: "medium",
    explanation: `:hover, fareyle üstüne gelince tetiklenen durumdur.

Örnek:
.btn:hover { opacity: 0.8; }

Sonuç: Kullanıcı butonun üstüne gelince buton biraz soluk görünür.`
  },

  {
    q: "CSS transition ne işe yarar?",
    t: "mcq",
    o: [
      "Sayfayı sunucuya taşır",
      "Stil değişimlerini yumuşatır (animasyon gibi geçiş)",
      "HTML’i şifreler",
      "Formu doğrular",
      "JS’i siler"
    ],
    a: "Stil değişimlerini yumuşatır (animasyon gibi geçiş)",
    difficulty: "medium",
    week: 2,
    topic: "Transition",
    importance: "medium",
    explanation: `transition, bir özellik değişince “bir anda” değil “yavaşça” değişmesini sağlar.

Örnek:
.btn { transition: 0.2s; }
.btn:hover { transform: scale(1.03); }

Sonuç: Hover olunca buton bir anda zıplamaz, yumuşak büyür.`
  },

  {
    q: "z-index hangi durumda anlamlıdır?",
    t: "mcq",
    o: [
      "Sadece yazı rengini değiştirirken",
      "Örtüşen elemanlarda hangisi üstte görünsün diye (position’lı elemanlarda)",
      "Sadece font seçerken",
      "Sadece liste oluştururken",
      "Sadece tablo yaparken"
    ],
    a: "Örtüşen elemanlarda hangisi üstte görünsün diye (position’lı elemanlarda)",
    difficulty: "hard",
    week: 2,
    topic: "Layering",
    importance: "low",
    explanation: `z-index, elemanlar üst üste biniyorsa katman sırasını belirler.
Genelde position (relative/absolute/fixed) olan elemanlarda anlam kazanır.

Örnek:
.modal { position: fixed; z-index: 999; }
Sonuç: Modal çoğu şeyin üstünde görünür.`
  },

  // =========================================================
  // ==== 3. HAFTA – JavaScript, DOM, Kütüphane Mantığı (17) ===
  // =========================================================

  {
    q: "JavaScript’in web sayfasındaki temel rolü en doğru hangisidir?",
    t: "mcq",
    o: [
      "Sadece renkleri belirlemek",
      "Sayfaya davranış/etkileşim kazandırmak (tıklama, veri çekme, doğrulama)",
      "Sadece başlık eklemek",
      "Sadece resim göstermek",
      "Sadece link vermek"
    ],
    a: "Sayfaya davranış/etkileşim kazandırmak (tıklama, veri çekme, doğrulama)",
    difficulty: "easy",
    week: 3,
    topic: "JS rolü",
    importance: "high",
    explanation: `HTML sayfada “buton var” der, CSS “mavi olsun” der, JS “basılınca bir şey olsun” der.

Mini örnek:
button’a tıklanınca yazıyı değiştir.
Sonuç: sayfa kullanıcıyla etkileşir.`
  },

  {
    q: "let ile const arasındaki en doğru fark hangisidir?",
    t: "mcq",
    o: [
      "let sabittir, const değişkendir",
      "const yeniden atama (reassign) kabul etmez; let eder",
      "let sadece sayı tutar, const sadece yazı tutar",
      "const sadece HTML’de çalışır",
      "Fark yoktur"
    ],
    a: "const yeniden atama (reassign) kabul etmez; let eder",
    difficulty: "easy",
    week: 3,
    topic: "Değişkenler",
    importance: "high",
    explanation: `let: değeri sonradan değişebilir.
const: aynı değişkene tekrar değer atayamazsın.

Örnek:
let sayac = 0;
sayac = 1; // olur

const isim = "Eylül";
isim = "Yusuf"; // hata (yeniden atama)

Sonuç: const sabit referans gibi davranır.`
  },

  {
    q: "console.log ne işe yarar?",
    t: "mcq",
    o: [
      "Ekrana HTML basar",
      "Tarayıcı geliştirici konsoluna bilgi yazdırır (debug için)",
      "CSS’i çalıştırır",
      "Sunucuya dosya yükler",
      "Kullanıcının şifresini değiştirir"
    ],
    a: "Tarayıcı geliştirici konsoluna bilgi yazdırır (debug için)",
    difficulty: "easy",
    week: 3,
    topic: "Debug",
    importance: "high",
    explanation: `console.log, kodun ne yaptığını anlamanın en basit yoludur.

Örnek:
let yas = 28;
console.log(yas);

Sonuç:
Console’da 28 görürsün. Bu, “kod çalıştı mı?” kontrolüdür.`
  },

  {
    q: "Aşağıdakilerden hangisi JavaScript’te doğru bir koşul (if) kullanımına örnektir?",
    t: "mcq",
    o: [
      "if yas = 18 then",
      "if (yas >= 18) { ... }",
      "if [yas] >= 18 =>",
      "if yas >= 18 :",
      "if (yas) >= 18 ) {"
    ],
    a: "if (yas >= 18) { ... }",
    difficulty: "medium",
    week: 3,
    topic: "Koşul yapıları",
    importance: "medium",
    explanation: `if, “şart doğruysa çalış” demektir.

Örnek:
let yas = 28;
if (yas >= 18) {
  console.log("Yetişkin");
}

Sonuç:
Console’da “Yetişkin” yazar (çünkü 28 >= 18).`
  },

  {
    q: "for döngüsünün temel amacı en doğru hangisidir?",
    t: "mcq",
    o: [
      "Tek bir satırı bir kez çalıştırmak",
      "Bir işlemi belirli sayıda tekrar etmek",
      "CSS’i derlemek",
      "HTML’i şifrelemek",
      "Tarayıcıyı kapatmak"
    ],
    a: "Bir işlemi belirli sayıda tekrar etmek",
    difficulty: "easy",
    week: 3,
    topic: "Döngüler",
    importance: "medium",
    explanation: `Döngü = tekrar.
Örnek:
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

Sonuç:
Console:
1
2
3

Yani kod 3 kez çalıştı.`
  },

  {
    q: "Fonksiyon (function) kullanmanın en temel faydası hangisidir?",
    t: "mcq",
    o: [
      "Kod tekrarını azaltmak ve işi parçalara bölmek",
      "HTML’i otomatik yazmak",
      "CSS’i silmek",
      "Sunucu satın almak",
      "Resimleri sıkıştırmak"
    ],
    a: "Kod tekrarını azaltmak ve işi parçalara bölmek",
    difficulty: "easy",
    week: 3,
    topic: "Fonksiyonlar",
    importance: "high",
    explanation: `Fonksiyon = “bir işi yapan paket”.
Aynı işi tekrar yazmak yerine çağırırsın.

Örnek:
function selamla(ad) {
  console.log("Merhaba " + ad);
}
selamla("Yusuf");
selamla("Eylül");

Sonuç:
Merhaba Yusuf
Merhaba Eylül`
  },

  {
    q: "Array (dizi) en doğru neyi temsil eder?",
    t: "mcq",
    o: [
      "Tek bir değeri",
      "Birden çok değeri sıralı şekilde tutan yapı",
      "Sadece resim formatını",
      "Sadece CSS sınıfını",
      "Sadece HTML etiketini"
    ],
    a: "Birden çok değeri sıralı şekilde tutan yapı",
    difficulty: "easy",
    week: 3,
    topic: "Array",
    importance: "medium",
    explanation: `Array = liste.
Örnek:
const dersler = ["HTML", "CSS", "JS"];
console.log(dersler[0]);

Sonuç:
“HTML” yazar (0. indeks ilk elemandır).`
  },

  {
    q: "Object (nesne) yapısı için en doğru tanım hangisidir?",
    t: "mcq",
    o: [
      "Sadece sayı tutar",
      "Anahtar-değer (key-value) ile bilgi tutar",
      "Sadece CSS dosyasıdır",
      "Sadece HTML yorumudur",
      "Sadece döngüdür"
    ],
    a: "Anahtar-değer (key-value) ile bilgi tutar",
    difficulty: "medium",
    week: 3,
    topic: "Object",
    importance: "medium",
    explanation: `Object = etiketli bilgi kutusu.
Örnek:
const kisi = { isim: "Yusuf", yas: 28 };
console.log(kisi.isim);

Sonuç:
“Yusuf” yazar.`
  },

  {
    q: "DOM (Document Object Model) en doğru neyi ifade eder?",
    t: "mcq",
    o: [
      "Sunucudaki veritabanı",
      "Tarayıcının HTML’i bir ağaç yapı olarak temsil etmesi ve JS ile erişilebilmesi",
      "CSS renk paleti",
      "Sadece resim galerisi",
      "Sadece internet protokolü"
    ],
    a: "Tarayıcının HTML’i bir ağaç yapı olarak temsil etmesi ve JS ile erişilebilmesi",
    difficulty: "hard",
    week: 3,
    topic: "DOM kavramı",
    importance: "high",
    explanation: `DOM: Tarayıcının sayfayı “nesneler” gibi görmesi.
JS ile HTML elemanlarını seçip değiştirebilirsin.

Örnek:
<h1 id="baslik">Merhaba</h1>
JS:
document.getElementById("baslik").textContent = "Yusuf";

Sonuç:
Sayfadaki başlık “Yusuf” olur.`
  },

  {
    q: "Bir HTML elemanını id ile seçmek için doğru yöntem hangisidir?",
    t: "mcq",
    o: [
      "document.pick('#id')",
      "document.getElementById('id')",
      "window.getCss('id')",
      "console.get('id')",
      "html.find('id')"
    ],
    a: "document.getElementById('id')",
    difficulty: "easy",
    week: 3,
    topic: "DOM seçiciler",
    importance: "high",
    explanation: `ID seçimi:
const el = document.getElementById("baslik");

Örnek:
<h1 id="baslik">Eylül</h1>

JS:
const baslik = document.getElementById("baslik");
console.log(baslik.textContent);

Sonuç:
Console’da “Eylül” yazar.`
  },

  {
    q: "Butona tıklamayı yakalamak için en yaygın yöntem hangisidir?",
    t: "mcq",
    o: [
      "addEventListener('click', ...)",
      "addColor('click', ...)",
      "setHTML('click', ...)",
      "install('click', ...)",
      "import click from 'dom'"
    ],
    a: "addEventListener('click', ...)",
    difficulty: "easy",
    week: 3,
    topic: "Event",
    importance: "high",
    explanation: `Event = olay. Tıklama bir olaydır.

Örnek:
<button id="btn">Tıkla</button>

JS:
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log("Tıklandı");
});

Sonuç:
Butona basınca Console’da “Tıklandı” yazar.`
  },

  {
    q: "textContent ile innerHTML arasındaki temel fark hangisidir?",
    t: "mcq",
    o: [
      "textContent HTML’i yorumlar, innerHTML düz metindir",
      "textContent düz metin yazar; innerHTML HTML etiketlerini de yorumlayabilir",
      "İkisi tamamen aynıdır",
      "innerHTML sadece CSS içindir",
      "textContent sadece resim içindir"
    ],
    a: "textContent düz metin yazar; innerHTML HTML etiketlerini de yorumlayabilir",
    difficulty: "hard",
    week: 3,
    topic: "DOM içerik",
    importance: "high",
    explanation: `textContent güvenli düz metindir.
innerHTML içine HTML koyarsan tarayıcı onu etiket gibi işler.

Örnek:
div.textContent = "<b>Yusuf</b>";
Sonuç: ekranda <b>Yusuf</b> yazısı (etiket gibi değil, metin gibi) görünür.

div.innerHTML = "<b>Yusuf</b>";
Sonuç: Yusuf kalın (bold) görünür.

Not: innerHTML yanlış kullanılırsa XSS riski doğurabilir (güvenlik).`
  },

  {
    q: "Bir formu JavaScript ile “boş geçme” kontrolü yapmak için en temel yaklaşım hangisidir?",
    t: "mcq",
    o: [
      "CSS ile kontrol edilir",
      "Input value okunur, boşsa uyarı verilir",
      "HTML’e hiç gerek yoktur",
      "Sadece resim ekleyerek çözülür",
      "Sunucu satın alınır"
    ],
    a: "Input value okunur, boşsa uyarı verilir",
    difficulty: "medium",
    week: 3,
    topic: "Form doğrulama",
    importance: "medium",
    explanation: `Mantık:
1) input’u seç
2) value değerine bak
3) boşsa kullanıcıyı uyar

Örnek:
if (emailInput.value.trim() === "") {
  alert("E-posta boş olamaz");
}

Sonuç:
Kullanıcı boş gönderirse uyarı görür.`
  },

  {
    q: "fetch ile veri çekmekte en temel doğru mantık hangisidir?",
    t: "mcq",
    o: [
      "fetch sadece CSS çeker",
      "fetch bir istek atar, genelde Promise döner; then/await ile sonuç alınır",
      "fetch sayfayı kapatır",
      "fetch sadece resim büyütür",
      "fetch veritabanı oluşturur"
    ],
    a: "fetch bir istek atar, genelde Promise döner; then/await ile sonuç alınır",
    difficulty: "hard",
    week: 3,
    topic: "Fetch/Async",
    importance: "medium",
    explanation: `fetch, tarayıcıdan bir URL’ye istek atar.
Sonuç hemen gelmeyebilir; bu yüzden async mantığı vardır.

Örnek (mantık):
fetch("https://example.com/data")
  .then(r => r.json())
  .then(data => console.log(data));

Sonuç:
Veri gelince console’da görünür.`
  },

  {
    q: "JSON nedir? En doğru tanım hangisidir?",
    t: "mcq",
    o: [
      "Bir resim formatı",
      "Veri taşımak için kullanılan metin tabanlı format (anahtar-değer, dizi vb.)",
      "CSS dosyası",
      "HTML etiketi",
      "Bir donanım türü"
    ],
    a: "Veri taşımak için kullanılan metin tabanlı format (anahtar-değer, dizi vb.)",
    difficulty: "medium",
    week: 3,
    topic: "JSON",
    importance: "medium",
    explanation: `JSON, veriyi metinle taşır.
Örnek JSON:
{ "isim": "Yusuf", "yas": 28 }

JS’te:
const obj = JSON.parse(jsonMetni);
Sonuç:
obj.isim => "Yusuf" olur.`
  },

  {
    q: "“Kütüphane ekleme” mantığında CDN ile npm arasındaki en doğru fark hangisidir?",
    t: "mcq",
    o: [
      "CDN sadece offline çalışır; npm sadece resim indirir",
      "CDN: link/script ile internetten çağırma; npm: projeye paket kurma (node_modules) ve build sürecinde kullanma",
      "İkisi aynı şeydir",
      "npm tarayıcıyı günceller",
      "CDN veritabanı oluşturur"
    ],
    a: "CDN: link/script ile internetten çağırma; npm: projeye paket kurma (node_modules) ve build sürecinde kullanma",
    difficulty: "hard",
    week: 3,
    topic: "Kütüphane mantığı (import/install)",
    importance: "high",
    explanation: `Senin “pip install” benzetmesinin web karşılığı:
- CDN: “hazır linki ekle, kullan” (derslerde en kolay)
  <script src="..."></script>
- npm: “projeye kur, import et, build ile paketle”
  npm install paketAdi

Örnek CDN:
<script src="https://cdn.../axios.min.js"></script>

Örnek npm (mantık):
npm install axios
import axios from "axios";

Sonuç:
İkisi de kütüphane kullanmanı sağlar ama çalışma şekli farklıdır.`
  },

  {
    q: "Tarayıcı DevTools (F12) içinde Network sekmesi en çok neyi görmek için kullanılır?",
    t: "mcq",
    o: [
      "Bilgisayarın RAM’ini artırmak için",
      "Sayfanın yaptığı istekleri (HTTP), dosya yüklenme sürelerini ve hataları görmek için",
      "CSS dosyasını silmek için",
      "HTML’i şifrelemek için",
      "Klavye ayarlarını değiştirmek için"
    ],
    a: "Sayfanın yaptığı istekleri (HTTP), dosya yüklenme sürelerini ve hataları görmek için",
    difficulty: "medium",
    week: 3,
    topic: "DevTools",
    importance: "medium",
    explanation: `DevTools:
- Console: log/hata
- Elements: HTML/CSS inceleme
- Network: hangi dosyalar yüklendi, kaç ms sürdü, hata var mı?

Örnek:
Resim yüklenmiyorsa Network’te 404 görürsün.
Sonuç: “Neden gelmiyor?” sorusunu somut görerek çözersin.`
  },

  {
    q: "XSS riskinin en temel kaynağı web’de çoğunlukla hangi hatalı yaklaşımla büyür?",
    t: "mcq",
    o: [
      "textContent kullanmak",
      "Kullanıcıdan gelen metni direkt innerHTML ile sayfaya basmak",
      "CSS ile renk vermek",
      "HTML’de <title> yazmak",
      "Responsive yapmak"
    ],
    a: "Kullanıcıdan gelen metni direkt innerHTML ile sayfaya basmak",
    difficulty: "hard",
    week: 3,
    topic: "Güvenlik - XSS temel",
    importance: "high",
    explanation: `XSS (Cross-Site Scripting) basitçe: “kullanıcı metni gibi görünen şeyin içine script sokup çalıştırma” riskidir.
Bu yüzden kullanıcıdan gelen içeriği:
- mümkünse textContent ile basmak (düz metin)
- ya da sanitize etmek gerekir.

Örnek risk:
innerHTML = kullanıcıMesaji; // tehlikeli olabilir
Sonuç: Eğer kötü niyetli kod gelirse tarayıcı çalıştırabilir.`
  }
];
