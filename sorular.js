// FINAL – 15 HTML + 35 CSS = 50 Soru (MCQ)
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]

window.questionBank = [
  // =========================
  // ==== 1-15: HTML (15) ====
  // =========================

  {
    q: "Internet ve Web (WWW) arasındaki fark için en doğru ifade hangisidir? (PÇ2,4,10 / ÖÇ1)",
    t: "mcq",
    o: [
      "Internet, web sayfalarının yazıldığı dildir; Web ise kabloların adıdır.",
      "Internet, ağ altyapısıdır (ağlar ağı); Web ise internet üzerinde çalışan bir hizmettir (HTTP/URL ile sayfa sunumu).",
      "Internet sadece tarayıcıdır; Web sadece modemdir.",
      "Web donanımdır; Internet HTML etiketidir.",
      "İkisi aynı kavramdır; ayırt etmeye gerek yoktur."
    ],
    a: "Internet, ağ altyapısıdır (ağlar ağı); Web ise internet üzerinde çalışan bir hizmettir (HTTP/URL ile sayfa sunumu).",
    difficulty: "easy",
    week: 1,
    topic: "Internet vs Web",
    importance: "high",
    explanation:
      "Kavram: Internet = altyapı (ağlar ağı). Web = bu altyapı üzerinde çalışan servis (WWW, HTTP).\nNasıl çözersin: Şıklarda “altyapı” ve “servis” ayrımını ararsın.\nTuzak: “Internet=Web” diyen şıklar.\nTaktik: Internet=yol, Web=yoldaki hizmet (web sayfası)."
  },

  {
    q: "Aşağıdaki HTML iskeletinde <head> ve <body> görevleri için doğru eşleştirme hangisidir? (PÇ2,4,10 / ÖÇ2)\n\n(1) <head> ... </head>\n(2) <body> ... </body>",
    t: "mcq",
    o: [
      "(1) Görünen içerik, (2) Sayfa ayarları",
      "(1) Sayfa ayarları (title, meta, css link), (2) Görünen içerik",
      "(1) Sadece tablolar, (2) Sadece formlar",
      "(1) Footer bölümü, (2) Frame bölümü",
      "(1) Görseller, (2) Sadece metin"
    ],
    a: "(1) Sayfa ayarları (title, meta, css link), (2) Görünen içerik",
    difficulty: "easy",
    week: 1,
    topic: "head vs body",
    importance: "high",
    explanation:
      "Kavram: head = sayfa ayarları/bağlantılar (title, meta, CSS/JS link). body = ekranda görünen içerik.\nNasıl çözersin: “CSS linki nerede olur?” → head.\nTuzak: head ile body’yi tersleyen şık.\nTaktik: head=ayar, body=görünen."
  },

  {
    q: "Aşağıdaki HTML çalıştırıldığında ekranda ne görünür? (PÇ2,4,10 / ÖÇ2)\n\n<body>\n  <h1>Başlık</h1>\n  <p>Merhaba</p>\n</body>",
    t: "mcq",
    o: [
      "Sadece “Başlık” görünür",
      "Sadece “Merhaba” görünür",
      "“Başlık” ve altında “Merhaba” görünür",
      "Hiçbir şey görünmez",
      "h1 görünmez, p görünür"
    ],
    a: "“Başlık” ve altında “Merhaba” görünür",
    difficulty: "easy",
    week: 2,
    topic: "Temel etiketler çıktı",
    importance: "medium",
    explanation:
      "Kavram: h1 başlık, p paragraf; body içinde yazılan görünür.\nNasıl çözersin: “Body içinde mi?” → Evetse görünür.\nTuzak: head-body karıştırmak.\nTaktik: Body=ekran."
  },

  {
    q: "Bağlantı (köprü) oluşturmak için hangi etiket ve hangi attribute kullanılır? (PÇ2,4,10 / ÖÇ3)",
    t: "mcq",
    o: [
      "<img> — href",
      "<a> — href",
      "<a> — src",
      "<link> — src",
      "<p> — href"
    ],
    a: "<a> — href",
    difficulty: "easy",
    week: 3,
    topic: "Hyperlink",
    importance: "high",
    explanation:
      "Kavram: <a> link üretir; hedef adres href’te olur.\nNasıl çözersin: href=hedef, src=kaynak.\nTuzak: <img> ile href’i eşleştiren şık.\nTaktik: href = “nereye gidecek?”."
  },

  {
    q: "Aşağıdaki iki kullanımın doğru açıklaması hangisidir? (PÇ2,4,10 / ÖÇ3)\n\n1) <img src='foto.jpg'>\n2) <a href='sayfa.html'>Git</a>",
    t: "mcq",
    o: [
      "1) href dosya kaynağıdır, 2) src link hedefidir",
      "1) src dosya kaynağıdır, 2) href link hedefidir",
      "İkisi de link hedefidir",
      "src sadece tabloda kullanılır",
      "href sadece formda kullanılır"
    ],
    a: "1) src dosya kaynağıdır, 2) href link hedefidir",
    difficulty: "easy",
    week: 3,
    topic: "href vs src",
    importance: "high",
    explanation:
      "Kavram: src = source/kaynak (img, script, video). href = link hedefi (a, link).\nNasıl çözersin: Kaynak mı hedef mi? diye ayır.\nTuzak: src-href yer değiştiren şık.\nTaktik: src=source, href=hedef."
  },

  {
    q: "Aşağıdaki HTML çalıştırıldığında çıktı nasıl olur? (PÇ2,4,10 / ÖÇ2)\n\n<p>Merhaba<br>Dünya</p>",
    t: "mcq",
    o: [
      "Tek satır: “MerhabaDünya”",
      "İki satır: üstte “Merhaba”, altta “Dünya”",
      "Sadece “Merhaba” görünür",
      "Sadece “Dünya” görünür",
      "<br> yazısı ekranda görünür"
    ],
    a: "İki satır: üstte “Merhaba”, altta “Dünya”",
    difficulty: "medium",
    week: 2,
    topic: "br çıktı",
    importance: "medium",
    explanation:
      "Kavram: <br> satır kırar, kendisi yazı gibi görünmez.\nNasıl çözersin: <br> gördün mü alt satıra geçir.\nTuzak: “<br> görünür” diyen şık.\nTaktik: br = break line."
  },

  {
    q: "Aşağıdakilerden hangisi doğru tablo (table) yapısıdır? (PÇ2,4,10 / ÖÇ2)",
    t: "mcq",
    o: [
      "<table><td>1</td><tr>2</tr></table>",
      "<table><tr><td>1</td><td>2</td></tr></table>",
      "<table><td><tr>1</tr></td></table>",
      "<tr><table><td>1</td></table></tr>",
      "<table><th>1</th><p>2</p></table>"
    ],
    a: "<table><tr><td>1</td><td>2</td></tr></table>",
    difficulty: "medium",
    week: 4,
    topic: "Table yapı",
    importance: "high",
    explanation:
      "Kural: table → tr(satır) → td(hücre).\nNasıl çözersin: Hiyerarşi doğru mu kontrol et.\nTuzak: td’yi tr dışına koymak.\nTaktik: T-R-D (Table-Row-Data)."
  },

  {
    q: "Aşağıdaki HTML’de 1. satırda kaç hücre oluşur? (PÇ2,4,10 / ÖÇ2)\n\n<table>\n  <tr><td>A</td><td>B</td></tr>\n</table>",
    t: "mcq",
    o: ["0", "1", "2", "3", "4"],
    a: "2",
    difficulty: "easy",
    week: 4,
    topic: "Table çıktı",
    importance: "medium",
    explanation:
      "Kural: Bir tr içindeki td sayısı = hücre sayısı.\nNasıl çözersin: td’leri say (A,B → 2).\nTuzak: tr’yi hücre sanmak.\nTaktik: “Kaç td varsa o kadar hücre”."
  },

  {
    q: "Form oluşturmak için temel kapsayıcı etiket hangisidir? (PÇ2,4,10 / ÖÇ2)",
    t: "mcq",
    o: ["<input>", "<form>", "<button>", "<label>", "<table>"],
    a: "<form>",
    difficulty: "easy",
    week: 5,
    topic: "Forms",
    importance: "high",
    explanation:
      "Kavram: <form> formun kabıdır; input/button/select içeride olur.\nNasıl çözersin: ‘kapsayıcı’ kelimesi görünce form.\nTuzak: input’u kapsayıcı sanmak.\nTaktik: form=kap, input=parça."
  },

  {
    q: "Aşağıdaki HTML’de kullanıcı yazısını hangi eleman alır? (PÇ2,4,10 / ÖÇ2)\n\n<form>\n  <input type='text'>\n  <input type='submit' value='Gönder'>\n</form>",
    t: "mcq",
    o: [
      "type='submit' input",
      "type='text' input",
      "form etiketi",
      "value attribute",
      "body etiketi"
    ],
    a: "type='text' input",
    difficulty: "easy",
    week: 6,
    topic: "Input türleri",
    importance: "high",
    explanation:
      "Kural: type='text' yazı alır; submit gönder butonudur.\nNasıl çözersin: ‘Yazı girilecek alan’ → text.\nTuzak: submit’i yazı alanı sanmak.\nTaktik: text=yazı, submit=gönder."
  },

  {
    q: "Çerçeveler (frames) mantığında sayfa içine başka bir sayfa gömmek için en yaygın etiket hangisidir? (PÇ2,4,11 / ÖÇ5)",
    t: "mcq",
    o: ["<frame>", "<iframe>", "<div>", "<span>", "<embed-css>"],
    a: "<iframe>",
    difficulty: "medium",
    week: 7,
    topic: "Frames / iframe",
    importance: "medium",
    explanation:
      "Kavram: iframe = sayfa içinde sayfa (gömülü içerik).\nNasıl çözersin: Harita/YouTube gömme denince iframe.\nTuzak: eski <frame> ile karıştırmak.\nTaktik: iFrame = inside frame."
  },

  {
    q: "Aşağıdakilerden hangisi çoklu ortam (multimedia) örneğidir? (PÇ2,4,11 / ÖÇ5)",
    t: "mcq",
    o: ["<p>", "<table>", "<img>", "<tr>", "<th>"],
    a: "<img>",
    difficulty: "easy",
    week: 8,
    topic: "Multimedia",
    importance: "medium",
    explanation:
      "Kavram: Multimedia = resim/ses/video.\nNasıl çözersin: Medya etiketi hangisi? → img.\nTuzak: Yapısal etiketleri medya sanmak.\nTaktik: img = medya başlangıcı."
  },

  {
    q: "Aşağıdaki HTML çalıştırıldığında kullanıcı resme tıklayınca ne olur? (PÇ2,4,10 / ÖÇ3)\n\n<a href='sayfa.html'>\n  <img src='foto.jpg'>\n</a>",
    t: "mcq",
    o: [
      "Resim görünmez",
      "Resme tıklayınca sayfa.html açılır",
      "Resme tıklayınca sadece foto.jpg büyür",
      "href img ile çalışmaz",
      "src link hedefi olur"
    ],
    a: "Resme tıklayınca sayfa.html açılır",
    difficulty: "medium",
    week: 4,
    topic: "Link içinde img",
    importance: "high",
    explanation:
      "Kural: <a> içine koyduğun her şey tıklanabilir olur; tıklanınca href çalışır.\nNasıl çözersin: “tıklama = href”.\nTuzak: src’yi hedef sanmak.\nTaktik: href=hedef, src=kaynak."
  },

  {
    q: "Footer (sayfanın alt bölümü) için doğru HTML etiketi hangisidir? (PÇ2,4,10 / ÖÇ2)",
    t: "mcq",
    o: ["<foot>", "<footer>", "<bottom>", "<end>", "<tail>"],
    a: "<footer>",
    difficulty: "easy",
    week: 2,
    topic: "Footer etiketi",
    importance: "medium",
    explanation:
      "Kural: Semantik etiket footer’dır; <foot> diye bir etiket beklenmez.\nTuzak: <foot> şıkkı.\nTaktik: footer = sayfanın altı."
  },

  {
    q: "Aşağıdaki seçeneklerden hangisi HTML yorum (comment) yazımıdır? (PÇ2,4,10 / ÖÇ2)",
    t: "mcq",
    o: [
      "// yorum",
      "/* yorum */",
      "<!-- yorum -->",
      "<comment>yorum</comment>",
      "# yorum"
    ],
    a: "<!-- yorum -->",
    difficulty: "easy",
    week: 2,
    topic: "HTML comment",
    importance: "medium",
    explanation:
      "Kural: HTML yorum = <!-- ... -->.\nTuzak: CSS yorumunu (/* */) seçmek.\nTaktik: HTML’de ok gibi: <!-- -->."
  },

  // ========================
  // ==== 16-50: CSS (35) ===
  // ========================

  {
    q: "CSS en doğru ne yapar? (PÇ2,4,10 / ÖÇ4)",
    t: "mcq",
    o: [
      "HTML’in linklerini çalıştırır (href yönetir).",
      "HTML’in görünümünü/stilini belirler (renk, boyut, hizalama, düzen, animasyon).",
      "Veritabanı bağlantısını kurar.",
      "Sadece internet bağlantısını yönetir.",
      "Tabloya yeni satır ekler."
    ],
    a: "HTML’in görünümünü/stilini belirler (renk, boyut, hizalama, düzen, animasyon).",
    difficulty: "easy",
    week: 10,
    topic: "CSS tanım",
    importance: "high",
    explanation:
      "Kavram: HTML = iskelet/içerik, CSS = görünüm.\nNasıl çözersin: “renk, boyut, düzen” geçen şık doğruya gider.\nTuzak: CSS’yi programlama/DB sanmak.\nTaktik: HTML=iskelet, CSS=makyaj."
  },

  {
    q: "CSS’de resme filtre uygulamak için hangi özellik kullanılır? (PÇ2,4,11 / ÖÇ5)\n\nÖrnek: img{ filter: grayscale(100%); }",
    t: "mcq",
    o: ["transform", "filter", "opacity", "overflow", "position"],
    a: "filter",
    difficulty: "easy",
    week: 11,
    topic: "Image filters",
    importance: "medium",
    explanation:
      "Kavram: filter = görüntü efektleri (grayscale, blur, brightness vb.).\nNasıl çözersin: ‘filtre/efekt’ denince filter.\nTuzak: opacity (saydamlık) ile karıştırmak.\nTaktik: filter=efekt, opacity=saydamlık."
  },

  {
    q: "CSS 3 yazım yöntemi aşağıdakilerden hangisinde doğru verilmiştir? (PÇ2,4,10 / ÖÇ4)",
    t: "mcq",
    o: [
      "Inline (style=''), Internal (<style>), External (<link rel='stylesheet' href='...'>)",
      "Inline (<link>), Internal (src=''), External (<style>)",
      "Sadece External vardır; diğerleri geçersizdir.",
      "Sadece Internal vardır; External çalışmaz.",
      "CSS sadece body içinde yazılır."
    ],
    a: "Inline (style=''), Internal (<style>), External (<link rel='stylesheet' href='...'>)",
    difficulty: "easy",
    week: 10,
    topic: "CSS yazım yöntemleri",
    importance: "high",
    explanation:
      "Kural: 3 yol = Inline / Internal / External.\nNasıl çözersin: External için doğru kalıp <link rel='stylesheet' href='...'> olmalı.\nTuzak: CSS’yi script gibi bağlatan şık.\nTaktik: I-I-E (Inline-Internal-External)."
  },

  {
    q: "@import ile ilgili doğru ifade hangisidir? (PÇ2,4,11 / ÖÇ4)\n\nCSS:\n@import url('theme.css');",
    t: "mcq",
    o: [
      "@import HTML içinde yazılır, CSS içinde yazılamaz.",
      "@import başka CSS dosyasını CSS içinden çağırır; genelde <link> daha tercih edilir.",
      "@import sadece JavaScript dosyası çağırır.",
      "@import, inline CSS’in tek şeklidir.",
      "@import, sadece hover çalıştırır."
    ],
    a: "@import başka CSS dosyasını CSS içinden çağırır; genelde <link> daha tercih edilir.",
    difficulty: "medium",
    week: 12,
    topic: "@import + optimization",
    importance: "medium",
    explanation:
      "Kavram: @import CSS’in içinden başka CSS’i çağırır.\nNasıl çözersin: ‘CSS içinden CSS alır’ cümlesini ararsın.\nTuzak: @import’ı HTML attribute sanmak.\nTaktik: Import=‘içeri al’, Link=klasik bağlantı."
  },

  {
    q: "CSS yazım hatası (puan kırdırır): Aşağıdakilerden hangisi HATALI yazımdır? (PÇ2,4,10 / ÖÇ4)",
    t: "mcq",
    o: ["max-width", "min-width", "opacity", "padding", "max widght"],
    a: "max widght",
    difficulty: "easy",
    week: 10,
    topic: "CSS yazım hataları",
    importance: "high",
    explanation:
      "Kural: width doğru yazılır; max-width tire ile yazılır.\nTuzak: widght gibi ‘harf kaydırma’ hataları.\nTaktik: width = W I D T H."
  },

  {
    q: "Çıktı sorusu: Aşağıdaki CSS’te color ve background-color neyi değiştirir? (PÇ2,4,10 / ÖÇ4)\n\np{ color:red; background-color: yellow; }",
    t: "mcq",
    o: [
      "color arka planı, background-color yazıyı değiştirir.",
      "color yazıyı kırmızı yapar; background-color arka planı sarı yapar.",
      "İkisi de sadece border’ı değiştirir.",
      "İkisi de sadece saydamlık verir.",
      "Sadece h1’de çalışır, p’de çalışmaz."
    ],
    a: "color yazıyı kırmızı yapar; background-color arka planı sarı yapar.",
    difficulty: "easy",
    week: 10,
    topic: "color vs background-color",
    importance: "high",
    explanation:
      "Kural: color=metin rengi, background-color=zemin.\nTuzak: İkisini tersleyen şık.\nTaktik: background=arka plan."
  },

  {
    q: "“Punto” (yazı boyutu) genelde hangi birimle ifade edilir? (PÇ2,4,10 / ÖÇ4)",
    t: "mcq",
    o: ["px", "pt", "%", "vh", "fr"],
    a: "pt",
    difficulty: "easy",
    week: 10,
    topic: "font-size birimleri",
    importance: "high",
    explanation:
      "Kavram: pt = point (punto). px = piksel.\nTuzak: px’i ‘en çok kullanılan’ diye otomatik seçmek.\nTaktik: Punto = PT."
  },

  {
    q: "Çıktı sorusu: .parent genişliği 400px ise, .box kaç px olur? (PÇ2,4,10 / ÖÇ4)\n\n.parent{ width:400px; }\n.box{ width:50%; }",
    t: "mcq",
    o: ["50px", "100px", "150px", "200px", "400px"],
    a: "200px",
    difficulty: "medium",
    week: 10,
    topic: "% mantığı",
    importance: "high",
    explanation:
      "Kural: width:% çoğu zaman parent genişliğine göre hesaplanır.\nHesap: 400’ün %50’si = 200.\nTuzak: %’yi ekran genişliğine göre sanmak.\nTaktik: % = parent oranı."
  },

  {
    q: "min-width / max-width için en doğru ifade hangisidir? (PÇ2,4,11 / ÖÇ4)",
    t: "mcq",
    o: [
      "min-width en fazla büyüsün demektir; max-width en az küçülsün demektir.",
      "max-width elemanın en fazla büyüyebileceği genişliği sınırlar; min-width en fazla küçülebileceği sınırı belirler.",
      "max-width yazıyı kalınlaştırır.",
      "min-width sadece img’de çalışır.",
      "İkisi de sadece margin’i etkiler."
    ],
    a: "max-width elemanın en fazla büyüyebileceği genişliği sınırlar; min-width en fazla küçülebileceği sınırı belirler.",
    difficulty: "medium",
    week: 10,
    topic: "min/max width",
    importance: "high",
    explanation:
      "Kural: max=tavan (daha büyümesin), min=taban (daha küçülmesin).\nTuzak: min ile max’ı terslemek.\nTaktik: min=minimum taban, max=maximum tavan."
  },

  {
    q: "Responsive çıktı sorusu: Aşağıdaki kural ne sağlar? (PÇ2,4,11 / ÖÇ5)\n\nimg{ max-width:100%; height:auto; }",
    t: "mcq",
    o: [
      "Resim her zaman 1000px olur.",
      "Resim parent’ı aşarsa küçülür; oran bozulmaz.",
      "Resim sadece büyür, küçülmez.",
      "Resim görünmez olur (display:none).",
      "Resim grid’e dönüşür."
    ],
    a: "Resim parent’ı aşarsa küçülür; oran bozulmaz.",
    difficulty: "easy",
    week: 10,
    topic: "Responsive image",
    importance: "high",
    explanation:
      "Kural: max-width:100% taşmayı engeller; height:auto oranı korur.\nTuzak: width:100% ile karıştırmak (her zaman gerer).\nTaktik: Responsive resim = max-width + height:auto."
  },

  {
    q: "Opacity ile ilgili doğru ifade hangisidir? (PÇ2,4,10 / ÖÇ4)\n\nimg{ opacity:0.6; }",
    t: "mcq",
    o: [
      "Resmi 0.6px yapar.",
      "Resmi %60 saydam yapar (kısmen şeffaf).",
      "Resmi tamamen kaldırır ve yer kaplatmaz.",
      "Sadece border’ı saydam yapar.",
      "Sadece hover olunca çalışır."
    ],
    a: "Resmi %60 saydam yapar (kısmen şeffaf).",
    difficulty: "easy",
    week: 10,
    topic: "Opacity",
    importance: "high",
    explanation:
      "Kural: opacity 0–1 arasıdır. 1=tam görünür, 0=görünmez.\nTuzak: opacity’yi ‘px’ sanmak.\nTaktik: 0 yok, 1 tam."
  },

  {
    q: "opacity:0 ile display:none farkı hangisidir? (PÇ2,4,11 / ÖÇ4)",
    t: "mcq",
    o: [
      "İkisi de elemanı görünmez yapar ve yer kaplatmaz.",
      "opacity görünmez yapar ama yer kaplar; display:none yer de kaplatmaz.",
      "display:none görünmez yapar ama yer kaplar.",
      "opacity sadece resimde çalışır.",
      "Fark yoktur."
    ],
    a: "opacity görünmez yapar ama yer kaplar; display:none yer de kaplatmaz.",
    difficulty: "medium",
    week: 10,
    topic: "Opacity vs display",
    importance: "high",
    explanation:
      "Kural: display yerleşimi değiştirir; opacity sadece görünümü.\nTuzak: ‘görünmez’ deyip ikisini aynı sanmak.\nTaktik: display:none = yok; opacity=hayalet (yer var)."
  },

  {
    q: "Sadece arka planı saydam yapıp içindeki yazıyı etkilememek için hangisi daha uygundur? (PÇ2,4,11 / ÖÇ4)",
    t: "mcq",
    o: [
      ".box{ opacity:0.5; }",
      ".box{ background: rgba(0,0,0,0.5); }",
      ".box{ display:none; }",
      ".box{ z-index:0.5; }",
      ".box{ max-width:0.5; }"
    ],
    a: ".box{ background: rgba(0,0,0,0.5); }",
    difficulty: "hard",
    week: 10,
    topic: "RGBA",
    importance: "high",
    explanation:
      "Kural: opacity tüm çocukları da soldurur; rgba sadece arka planı saydam yapar.\nTuzak: opacity seçip yazıyı da saydam yapmak.\nTaktik: Yazı etkilenmesin = rgba."
  },

  {
    q: "Margin ve Padding için en doğru tanım hangisidir? (PÇ2,4,10 / ÖÇ4)",
    t: "mcq",
    o: [
      "Margin iç boşluk, padding dış boşluktur.",
      "Margin dış boşluk, padding iç boşluktur.",
      "İkisi de aynı şeydir.",
      "Padding sadece tabloda çalışır.",
      "Margin sadece resimde çalışır."
    ],
    a: "Margin dış boşluk, padding iç boşluktur.",
    difficulty: "easy",
    week: 10,
    topic: "Margin vs Padding",
    importance: "high",
    explanation:
      "Kural: Margin=dış mesafe, Padding=iç dolgu.\nTuzak: İkisini terslemek.\nTaktik: Margin=Mahalle(dış), Padding=Pijama(iç)."
  },

  {
    q: "Shorthand sorusu: margin: 10px 20px 30px 40px; sırası hangisidir? (PÇ2,4,11 / ÖÇ4)",
    t: "mcq",
    o: [
      "Sol-Sağ-Üst-Alt",
      "Üst-Sağ-Alt-Sol",
      "Üst-Alt-Sağ-Sol",
      "Sağ-Üst-Sol-Alt",
      "Alt-Üst-Sol-Sağ"
    ],
    a: "Üst-Sağ-Alt-Sol",
    difficulty: "medium",
    week: 10,
    topic: "Shorthand TRBL",
    importance: "high",
    explanation:
      "Kural: 4 değer = TRBL (Top Right Bottom Left).\nTuzak: sol-sağ karıştırmak.\nTaktik: Saat yönü: üst → sağ → alt → sol."
  },

  {
    q: "Box Model hesap sorusu (border-box YOK): Toplam görünen kutu genişliği kaç px olur? (PÇ2,4,11 / ÖÇ4)\n\n.box{ width:200px; padding:20px; border:5px solid black; }",
    t: "mcq",
    o: ["200px", "220px", "230px", "250px", "260px"],
    a: "250px",
    difficulty: "hard",
    week: 10,
    topic: "Box Model hesap",
    importance: "high",
    explanation:
      "Kural: Toplam genişlik = width + 2*padding + 2*border.\nHesap: 200 + 40 + 10 = 250.\nTuzak: Sadece width’ü toplam sanmak.\nTaktik: ‘İki taraf var’ → padding ve border 2 ile çarpılır."
  },

  {
    q: "Display değerleri ile ilgili doğru eşleştirme hangisidir? (PÇ2,4,10 / ÖÇ3)",
    t: "mcq",
    o: [
      "block: yan yana dizer, none: görünür bırakır",
      "inline: satırı kaplar, block: sadece içerik kadar",
      "inline-block: yan yana durabilir ve width/height alır",
      "none: elemanı saydam yapar ama yer bırakır",
      "block: sadece img’de çalışır"
    ],
    a: "inline-block: yan yana durabilir ve width/height alır",
    difficulty: "medium",
    week: 10,
    topic: "Display",
    importance: "high",
    explanation:
      "Kural: block=satırı kaplar, inline=içerik kadar, inline-block=yan yana + ölçü alır, none=hiç yok.\nTuzak: none ile opacity karıştırmak.\nTaktik: inline-block = ‘yan yana + boyut’. "
  },

  {
    q: "Çıktı sorusu: Aşağıdaki kodda çıktı nasıl olur? (PÇ2,4,11 / ÖÇ3)\n\nHTML:\n<span>A</span><span class='x'>B</span>\n\nCSS:\n.x{ display:block; }",
    t: "mcq",
    o: [
      "A ve B yan yana",
      "A alt satıra iner, B üstte kalır",
      "A üstte kalır, B alt satıra geçer (B satırı kaplar)",
      "B görünmez olur",
      "A görünmez olur"
    ],
    a: "A üstte kalır, B alt satıra geçer (B satırı kaplar)",
    difficulty: "hard",
    week: 10,
    topic: "Display çıktı",
    importance: "high",
    explanation:
      "Kural: block = satırı kaplar ve alt satıra iter.\nNasıl çözersin: .x block oldu → B alt satıra düşer.\nTuzak: span hep inline sanmak.\nTaktik: display değişirse davranış değişir."
  },

  {
    q: "Selector (p.anil) çıktı sorusu: Hangisi doğrudur? (PÇ2,4,10 / ÖÇ4)\n\nCSS:\np.anil{ color:red; font-size:20px; }\n\nHTML:\n<p class='anil'>A</p>\n<div class='anil'>B</div>",
    t: "mcq",
    o: [
      "A ve B kırmızı olur",
      "Sadece A kırmızı ve 20px olur; B etkilenmez",
      "Sadece B kırmızı olur",
      "A 20px olur ama kırmızı olmaz",
      "Hiçbiri etkilenmez"
    ],
    a: "Sadece A kırmızı ve 20px olur; B etkilenmez",
    difficulty: "hard",
    week: 10,
    topic: "Selector p.class",
    importance: "high",
    explanation:
      "Kural: p.anil = class’ı anil olan p etiketleri.\nNasıl çözersin: Seçici ‘p’ dediği için div etkilenmez.\nTuzak: .anil ile p.anil’i aynı sanmak.\nTaktik: Etiket yazdıysan sadece o etiket."
  },

  {
    q: "Float ile ilgili doğru ifade hangisidir? (PÇ2,4,11 / ÖÇ5)\n\nimg{ float:left; margin-right:10px; }",
    t: "mcq",
    o: [
      "Resmi ortalamak için kullanılır.",
      "Resmi sola alır, metni resmin yanına sardırır (ürün görseli + açıklama).",
      "Elemanı görünmez yapar.",
      "Elemanı sticky yapar.",
      "Elemanı grid’e çevirir."
    ],
    a: "Resmi sola alır, metni resmin yanına sardırır (ürün görseli + açıklama).",
    difficulty: "medium",
    week: 10,
    topic: "Float",
    importance: "medium",
    explanation:
      "Kavram: float = elemanı yana alır; metin etrafına sarabilir.\nTuzak: float’ı flex sanmak.\nTaktik: ‘Ürün görseli solda, yazı sağda’ = float klasik."
  },

  {
    q: "position: relative için en doğru ifade hangisidir? (PÇ2,4,11 / ÖÇ5)",
    t: "mcq",
    o: [
      "Eleman normal akıştan çıkar ve yer kaplamaz.",
      "Eleman kendi normal konumuna göre kaydırılır; sayfadaki yeri korunur.",
      "Eleman ekrana sabitlenir (scroll etmez).",
      "Eleman otomatik en üste çıkar.",
      "Eleman sadece grid içinde çalışır."
    ],
    a: "Eleman kendi normal konumuna göre kaydırılır; sayfadaki yeri korunur.",
    difficulty: "medium",
    week: 10,
    topic: "Position relative",
    importance: "high",
    explanation:
      "Kural: relative = yerini korur, top/left ile görsel olarak kayar.\nTuzak: absolute ile karıştırmak.\nTaktik: relative = ‘kayar ama izi kalır’."
  },

  {
    q: "position:absolute referans sorusu: .badge konumu neye göre hesaplanır? (PÇ2,4,11 / ÖÇ5)\n\n.parent{ position:relative; }\n.badge{ position:absolute; top:10px; right:10px; }",
    t: "mcq",
    o: [
      "Her zaman ekranın sağ üstüne göre",
      "En yakın position verilmiş ata (.parent) kutusuna göre",
      "Sadece kendi eski yerine göre",
      "Sadece z-index’e göre",
      "Sadece body’nin ortasına göre"
    ],
    a: "En yakın position verilmiş ata (.parent) kutusuna göre",
    difficulty: "hard",
    week: 10,
    topic: "Absolute referans",
    importance: "high",
    explanation:
      "Kural: absolute = en yakın ‘position’lı ata referans olur.\nNasıl çözersin: parent’ta position:relative var → referans parent.\nTuzak: absolute’ı ‘her zaman ekran’ sanmak.\nTaktik: Absolute = ‘en yakın konumlu ebeveyn’."
  },

  {
    q: "position:sticky ile ilgili doğru ifade hangisidir? (PÇ2,4,11 / ÖÇ5)\n\nheader{ position:sticky; top:0; }",
    t: "mcq",
    o: [
      "Her zaman fixed gibi yapışır, hiç normal akışta olmaz.",
      "Normal akar; belirli noktaya gelince top:0 çizgisinde yapışır.",
      "Sadece resimlerde çalışır.",
      "Sadece z-index ile çalışır.",
      "Overflow’u otomatik hidden yapar."
    ],
    a: "Normal akar; belirli noktaya gelince top:0 çizgisinde yapışır.",
    difficulty: "medium",
    week: 10,
    topic: "Sticky",
    importance: "high",
    explanation:
      "Kavram: sticky = normal + yapışma karışımı.\nTuzak: sticky’yi fixed sanmak.\nTaktik: ‘Yaklaşınca yapış’."
  },

  {
    q: "z-index çıktı sorusu: Üstte hangisi görünür? (PÇ2,4,11 / ÖÇ5)\n\n.a{ position:absolute; z-index:1; }\n.b{ position:absolute; z-index:2; }",
    t: "mcq",
    o: [
      "A üstte görünür (çünkü önce yazıldı)",
      "B üstte görünür (z-index daha büyük)",
      "İkisi de görünmez",
      "z-index sadece relative’de çalışır, burada çalışmaz",
      "Tarayıcıya göre değişir"
    ],
    a: "B üstte görünür (z-index daha büyük)",
    difficulty: "hard",
    week: 10,
    topic: "z-index",
    importance: "high",
    explanation:
      "Kural: z-index büyük olan öne gelir.\nTuzak: “önce yazılan üstte” zannetmek.\nTaktik: Katman numarası büyükse önde."
  },

  {
    q: "Overflow sorusu: Aşağıdaki senaryoda hangisi doğru seçilir? (PÇ2,4,11 / ÖÇ5)\n\nSenaryo: Kutu küçük, içerik taşıyor. Taşarsa kaydırma çıksın; taşmazsa çıkmasın.",
    t: "mcq",
    o: ["overflow:hidden", "overflow:scroll", "overflow:auto", "overflow:sticky", "overflow:absolute"],
    a: "overflow:auto",
    difficulty: "medium",
    week: 10,
    topic: "Overflow",
    importance: "high",
    explanation:
      "Kural: auto = gerekiyorsa scroll çıkar.\nTuzak: scroll’u seçmek (her zaman çubuk çıkar).\nTaktik: Auto = akıllı scroll."
  },

  {
    q: "Pseudo-class hangisidir? (PÇ2,4,11 / ÖÇ5)",
    t: "mcq",
    o: [".menu", "#menu", "a:hover", "div.box", "p.anil"],
    a: "a:hover",
    difficulty: "easy",
    week: 10,
    topic: "Pseudo-class",
    importance: "high",
    explanation:
      "Kural: Pseudo-class ‘:’ ile gelir (hover, focus, active, visited).\nTuzak: .class ve #id ile karıştırmak.\nTaktik: ‘:’ gördün mü pseudo."
  },

  {
    q: "Çıktı sorusu: a:hover kuralı ne zaman çalışır? (PÇ2,4,11 / ÖÇ5)\n\na:hover{ color:red; }",
    t: "mcq",
    o: [
      "Link ziyaret edilince (visited)",
      "Mouse linkin üstüne gelince",
      "Linke basılı tutunca (active)",
      "Input’a tıklayınca (focus)",
      "Sayfa ilk açılınca"
    ],
    a: "Mouse linkin üstüne gelince",
    difficulty: "easy",
    week: 10,
    topic: "hover",
    importance: "high",
    explanation:
      "Kural: hover = üstüne gelince.\nTuzak: active/focus ile karıştırmak.\nTaktik: hover = ‘üzerindeyken’."
  },

  {
    q: "Çıktı sorusu: input:focus kuralı ne zaman çalışır? (PÇ2,4,11 / ÖÇ5)\n\ninput:focus{ border:2px solid black; }",
    t: "mcq",
    o: [
      "Mouse input üstüne gelince",
      "Input tıklanıp odak alınca/yazı girerken",
      "Form gönderilince",
      "Sayfa yenilenince",
      "Sadece visited olunca"
    ],
    a: "Input tıklanıp odak alınca/yazı girerken",
    difficulty: "easy",
    week: 10,
    topic: "focus",
    importance: "high",
    explanation:
      "Kural: focus = klavye odağı/aktif giriş.\nTuzak: hover ile karıştırmak.\nTaktik: Tıkla + yaz = focus."
  },

  {
    q: "Pseudo-class eşleştirmelerinden hangisi doğrudur? (PÇ2,4,11 / ÖÇ5)",
    t: "mcq",
    o: [
      "visited: mouse üstüne gelince, hover: ziyaret edilmiş link",
      "active: tıklama basılıyken, visited: daha önce ziyaret edilmiş link",
      "focus: ziyaret edilmiş link, active: input yazma hali",
      "hover: sadece klavye ile olur, focus: sadece mouse ile olur",
      "visited: saydamlık verir, active: gölge verir"
    ],
    a: "active: tıklama basılıyken, visited: daha önce ziyaret edilmiş link",
    difficulty: "hard",
    week: 10,
    topic: "hover/focus/active/visited",
    importance: "high",
    explanation:
      "Kural: visited=geçmişte tıklanmış link, active=basılı tutma anı.\nTuzak: visited-hover yer değiştiren şık.\nTaktik: visited=geçmiş, active=basılı."
  },

  {
    q: "Dropdown mantığı: Aşağıdaki CSS’in etkisi hangisidir? (PÇ2,4,11 / ÖÇ5)\n\n.dd-content{ display:none; }\n.dd:hover .dd-content{ display:block; }",
    t: "mcq",
    o: [
      ".dd-content sayfa açılır açılmaz görünür",
      ".dd-content sadece tıklayınca görünür",
      ".dd üzerine mouse gelince .dd-content görünür olur",
      ".dd-content sadece mobilde çalışır",
      ".dd-content hover olunca kaybolur"
    ],
    a: ".dd üzerine mouse gelince .dd-content görünür olur",
    difficulty: "medium",
    week: 12,
    topic: "Dropdown",
    importance: "high",
    explanation:
      "Kural: display:none gizler; hover gelince display:block gösterir.\nTuzak: ‘tıklayınca açılır’ sanmak (JS gibi).\nTaktik: Dropdown = none → hover → block."
  },

  {
    q: "text-align ve cursor için doğru yorum hangisidir? (PÇ2,4,11 / ÖÇ4)\n\n.btn{ text-align:center; cursor:pointer; }",
    t: "mcq",
    o: [
      "Metni sola alır; mouse işaretçisi değişmez",
      "Metni ortalar; üzerine gelince mouse eli (tıklanabilir) olur",
      "Metni büyütür; resme filtre ekler",
      "Elemanı yapışkan yapar",
      "Elemanı görünmez yapar"
    ],
    a: "Metni ortalar; üzerine gelince mouse eli (tıklanabilir) olur",
    difficulty: "medium",
    week: 11,
    topic: "text-align + cursor",
    importance: "medium",
    explanation:
      "Kural: text-align=center metni ortalar. cursor:pointer tıklanabilir hissi verir.\nTuzak: cursor’ın sadece linkte çalıştığını sanmak.\nTaktik: pointer=elin işareti."
  },

  {
    q: "Border ve border-radius için doğru ifade hangisidir? (PÇ2,4,11 / ÖÇ4)\n\n.avatar{ border:2px solid black; border-radius:50%; }",
    t: "mcq",
    o: [
      "Border resmi siler, radius yazıyı büyütür.",
      "Border kenarlık çizer; border-radius:50% elemanı daire yapar (kare kutuda).",
      "Border sadece tabloda çalışır.",
      "border-radius sadece px olur, % olmaz.",
      "border-radius:50% köşeleri 10px yapar."
    ],
    a: "Border kenarlık çizer; border-radius:50% elemanı daire yapar (kare kutuda).",
    difficulty: "medium",
    week: 11,
    topic: "border + border-radius",
    importance: "high",
    explanation:
      "Kural: border=çerçeve; border-radius köşe yuvarlar.\nBilgi: 50% (kare kutuysa) daire görünümü verir.\nTuzak: % olmaz sanmak.\nTaktik: 50% = daire, px = yumuşak köşe."
  },

  {
    q: "Kutunun gölgesi için hangi özellik kullanılır? (PÇ2,4,11 / ÖÇ5)",
    t: "mcq",
    o: [
      "text-shadow: 0 4px 12px rgba(0,0,0,0.2);",
      "box-shadow: 0 4px 12px rgba(0,0,0,0.2);",
      "shadow-box: 0 4px 12px;",
      "box-radius: 12px;",
      "opacity-shadow: 0.2;"
    ],
    a: "box-shadow: 0 4px 12px rgba(0,0,0,0.2);",
    difficulty: "easy",
    week: 11,
    topic: "box-shadow",
    importance: "medium",
    explanation:
      "Kural: box-shadow kutuya, text-shadow yazıya gölge verir.\nTuzak: text-shadow seçmek.\nTaktik: box=kutunun gölgesi."
  },

  {
    q: "Transition (geçiş) ile ilgili doğru ifade hangisidir? (PÇ2,4,11 / ÖÇ5)\n\n.btn{ transition:0.3s; }\n.btn:hover{ transform:scale(1.05); }",
    t: "mcq",
    o: [
      "Hover olunca aniden büyür, yumuşak geçiş olmaz.",
      "Hover olunca büyüme yumuşak (0.3 saniyede) gerçekleşir.",
      "transition sadece border’a etki eder.",
      "transition sadece grid’de çalışır.",
      "transition elemanı görünmez yapar."
    ],
    a: "Hover olunca büyüme yumuşak (0.3 saniyede) gerçekleşir.",
    difficulty: "medium",
    week: 14,
    topic: "Transitions",
    importance: "high",
    explanation:
      "Kural: transition durum değişimini yumuşatır (hover gibi).\nTuzak: transition’ı animation sanmak.\nTaktik: Transition=geçiş (yumuşatma)."
  },

  {
    q: "@keyframes ile ilgili doğru ifade hangisidir? (PÇ2,4,11 / ÖÇ5)\n\n@keyframes pulse{\n  0%{ transform:scale(1); }\n  100%{ transform:scale(1.05); }\n}\n.box{ animation:pulse 1s infinite alternate; }",
    t: "mcq",
    o: [
      "@keyframes başka CSS dosyası çağırır.",
      "@keyframes animasyonun zaman içindeki adımlarını tanımlar; animation ile uygulanır.",
      "@keyframes sadece hover’da çalışır, animation ile ilgisi yoktur.",
      "@keyframes sadece tabloda kullanılır.",
      "@keyframes display değerini değiştirir."
    ],
    a: "@keyframes animasyonun zaman içindeki adımlarını tanımlar; animation ile uygulanır.",
    difficulty: "hard",
    week: 14,
    topic: "Animation + keyframes",
    importance: "high",
    explanation:
      "Kural: animation = çalıştırma, keyframes = senaryo/adımlar.\nTuzak: transition ile karıştırmak.\nTaktik: Keyframes = ‘kare kare hareket planı’."
  },

  {
    q: "Responsive + media query çıktı: Ekran 600px iken ne olur? (PÇ2,4,11 / ÖÇ5)\n\n@media (max-width:768px){ .menu{ display:none; } }",
    t: "mcq",
    o: [
      "Menu görünür kalır, çünkü 600 < 768 çalışmaz.",
      "Menu gizlenir, çünkü 600px 768px ve altı aralığındadır.",
      "Menu büyür.",
      "Menu sticky olur.",
      "Menu z-index 999 olur."
    ],
    a: "Menu gizlenir, çünkü 600px 768px ve altı aralığındadır.",
    difficulty: "hard",
    week: 14,
    topic: "Responsive",
    importance: "high",
    explanation:
      "Kural: max-width:768 → 768 ve ALTINDA çalışır.\nTuzak: max-width’i ‘768 üstü’ sanmak.\nTaktik: max=‘en fazla’ (küçük ekran)."
  },

  {
    q: "Flexbox ve Grid farkı için en doğru ifade hangisidir? (PÇ2,4,11 / ÖÇ5)",
    t: "mcq",
    o: [
      "Flexbox iki boyut, Grid tek boyuttur.",
      "Flexbox tek boyut (satır veya sütun), Grid iki boyut (satır+sütun) düzen kurar.",
      "İkisi tamamen aynı şeydir.",
      "Grid sadece hover yapar; Flexbox sadece renk değiştirir.",
      "Flexbox sadece tabloda çalışır; Grid sadece formda çalışır."
    ],
    a: "Flexbox tek boyut (satır veya sütun), Grid iki boyut (satır+sütun) düzen kurar.",
    difficulty: "medium",
    week: 14,
    topic: "Flexbox vs Grid",
    importance: "high",
    explanation:
      "Kavram: Flex=tek eksen (1D), Grid=iki eksen (2D).\nTuzak: İkisini terslemek.\nTaktik: Flex=tek çizgi, Grid=ızgara."
  },

  {
    q: "Bootstrap nedir ve projeye eklemek için en doğru yaklaşım hangisidir? (PÇ2,4,11 / ÖÇ5)",
    t: "mcq",
    o: [
      "Bootstrap veritabanıdır; <img src='...'> ile eklenir.",
      "Bootstrap hazır UI bileşenleri sunan kütüphanedir; genelde <link rel='stylesheet' href='CDN'> ile eklenir.",
      "Bootstrap HTML’in yerine geçen dildir; sadece <script> ile eklenir.",
      "Bootstrap sadece hover efektidir; style='' içinde yazılır.",
      "Bootstrap tarayıcıdır; kurulmadan çalışmaz."
    ],
    a: "Bootstrap hazır UI bileşenleri sunan kütüphanedir; genelde <link rel='stylesheet' href='CDN'> ile eklenir.",
    difficulty: "medium",
    week: 14,
    topic: "Bootstrap",
    importance: "medium",
    explanation:
      "Kavram: Bootstrap = hazır buton, navbar, form, grid gibi tasarımlar.\nNasıl çözersin: CSS kütüphanesi ekleme → <link rel='stylesheet' ...>.\nTuzak: CSS’i script ile ekleme sanmak.\nTaktik: ‘Kütüphane = hazır tasarım parçaları’."
  }
];
