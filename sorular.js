// FINAL – 15 HTML + 35 CSS = 50 Soru (MCQ)
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]

window.questionBank = [
  // =========================
  // ==== 1-15: HTML (15) ====
  // =========================

  {
    q: "Internet ve Web (WWW) arasındaki fark için en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Internet, web sayfalarının yazıldığı dildir; Web ise kabloların adıdır.",
      "Internet, ağ altyapısıdır (ağlar ağı); Web ise internet üzerinde çalışan bir hizmettir (HTTP/URL ile sayfa sunumu).",
      "Internet sadece tarayıcıdır; Web sadece modemdir.",
      "Web, donanımdır; Internet, HTML etiketidir.",
      "İkisi aynı kavramdır; sınavda ayırt etmeye gerek yoktur."
    ],
    a: "Internet, ağ altyapısıdır (ağlar ağı); Web ise internet üzerinde çalışan bir hizmettir (HTTP/URL ile sayfa sunumu).",
    difficulty: "easy",
    week: 1,
    topic: "Internet vs Web",
    importance: "high",
    explanation:
      "Kavram: Internet = altyapı (ağlar ağı). Web = bu altyapı üstünde çalışan servis (web sayfaları).\nÇözüm: Şıklarda “altyapı vs servis” ayrımını ararsın.\nTuzak: “Internet=web” diyen şıklar.\nEzber: Internet = yol, Web = o yoldaki web sayfası/servis."
  },

  {
    q:
      "Aşağıdaki HTML iskeletinde <head> ve <body> görevleri için doğru eşleştirme hangisidir?\n\n(1) <head> ... </head>\n(2) <body> ... </body>",
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
      "Kavram: head = sayfa ayarları/bağlantılar (CSS/JS, meta, title). body = ekranda görünen içerik.\nÇözüm: “CSS linki nerede olur?” → head.\nTuzak: body’ye style/link koydurmaya çalışan şık.\nEzber: head=ayar, body=görüntü."
  },

  {
    q:
      "Aşağıdaki HTML çalıştırıldığında ekranda ne görünür?\n\n<body>\n  <h1>Başlık</h1>\n  <p>Merhaba</p>\n</body>",
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
    topic: "temel etiketler çıktı",
    importance: "medium",
    explanation:
      "Kavram: h1 başlıktır, p paragraftır; ikisi de body içinde görünür.\nÇözüm: “Çıktı sorusu”nda etiketlerin görünür olup olmadığına bak.\nTuzak: head ile body karıştırmak.\nEzber: body içinde yazılan metin görünür."
  },

  {
    q: "Bağlantı (köprü) oluşturmak için hangi etiket ve hangi attribute kullanılır?",
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
    topic: "hyperlink",
    importance: "high",
    explanation:
      "Kavram: <a> link oluşturur, hedefi href ile alır.\nÇözüm: “href=hedef” anahtar kelime.\nTuzak: img ile href’i eşleştiren şık.\nEzber: href = “nereye gidecek?”"
  },

  {
    q:
      "Aşağıdaki iki kullanımın doğru açıklaması hangisidir?\n\n1) <img src='foto.jpg'>\n2) <a href='sayfa.html'>Git</a>",
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
      "Kavram: src = kaynak dosya (resim/script/video). href = link hedefi (a/link).\nÇözüm: “source=src” aklına getir.\nTuzak: src-href yer değiştiren şık.\nEzber: src=source, href=hedef."
  },

  {
    q:
      "Aşağıdaki HTML çalıştırıldığında çıktı nasıl olur?\n\n<p>Merhaba<br>Dünya</p>",
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
      "Kavram: <br> satır kırar (line break), kendisi görünmez.\nÇözüm: Metni iki satıra böl.\nTuzak: “br yazısı görünür” diyen şık.\nEzber: br = ‘satır atla’."
  },

  {
    q: "Aşağıdakilerden hangisi doğru tablo (table) yapısıdır?",
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
    topic: "table yapı",
    importance: "high",
    explanation:
      "Kavram: table → tr(satır) → td(hücre). Bu sıra temel kural.\nÇözüm: Şıkta bu hiyerarşi doğru mu kontrol et.\nTuzak: td’yi tr’nin dışına koyan şıklar.\nEzber: T-R-D (Table-Row-Data)."
  },

  {
    q:
      "Aşağıdaki HTML’de 1. satırda kaç hücre oluşur?\n\n<table>\n  <tr><td>A</td><td>B</td></tr>\n</table>",
    t: "mcq",
    o: ["0", "1", "2", "3", "4"],
    a: "2",
    difficulty: "easy",
    week: 4,
    topic: "table çıktı",
    importance: "medium",
    explanation:
      "Kavram: tr = satır, td sayısı = hücre sayısı.\nÇözüm: td say: A,B → 2.\nTuzak: tr’yi hücre zannetmek.\nEzber: ‘Kaç td varsa o kadar hücre’."
  },

  {
    q: "Form oluşturmak için temel kapsayıcı etiket hangisidir?",
    t: "mcq",
    o: ["<input>", "<form>", "<button>", "<label>", "<table>"],
    a: "<form>",
    difficulty: "easy",
    week: 5,
    topic: "forms",
    importance: "high",
    explanation:
      "Kavram: <form> formun kabıdır; input/button içeride olur.\nÇözüm: ‘Kapsayıcı’ kelimesini görünce form.\nTuzak: input’u kapsayıcı sanmak.\nEzber: form = çerçeve, input = eleman."
  },

  {
    q:
      "Aşağıdaki HTML’de kullanıcı yazısını hangi eleman alır?\n\n<form>\n  <input type='text'>\n  <input type='submit' value='Gönder'>\n</form>",
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
    week: 5,
    topic: "input türleri",
    importance: "high",
    explanation:
      "Kavram: text input yazı alır; submit gönder butonudur.\nÇözüm: ‘Kullanıcı yazısı’ → text.\nTuzak: submit’i yazı alanı sanmak.\nEzber: text=yazı, submit=gönder."
  },

  {
    q:
      "Çerçeveler (frames) mantığında sayfa içine başka bir sayfa gömmek için en yaygın etiket hangisidir?",
    t: "mcq",
    o: ["<frame>", "<iframe>", "<div>", "<span>", "<embed-css>"],
    a: "<iframe>",
    difficulty: "medium",
    week: 7,
    topic: "frames/iframe",
    importance: "medium",
    explanation:
      "Kavram: iframe = sayfa içinde sayfa (gömülü pencere).\nÇözüm: ‘frame’ konusu → iframe.\nTuzak: frame etiketi (eski) ile karıştırmak.\nEzber: iFrame = ‘inside frame’."
  },

  {
    q: "Aşağıdakilerden hangisi çoklu ortam (multimedia) örneğidir?",
    t: "mcq",
    o: ["<p>", "<table>", "<img>", "<tr>", "<th>"],
    a: "<img>",
    difficulty: "easy",
    week: 8,
    topic: "multimedia",
    importance: "medium",
    explanation:
      "Kavram: Multimedia = resim/ses/video.\nÇözüm: Şıklarda medya olanı seç.\nTuzak: table/tr gibi yapısal etiketler.\nEzber: img = medya başlangıcı."
  },

  {
    q:
      "Aşağıdaki HTML çalıştırıldığında kullanıcı resme tıklayınca ne olur?\n\n<a href='sayfa.html'>\n  <img src='foto.jpg'>\n</a>",
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
    topic: "link içinde img çıktı",
    importance: "high",
    explanation:
      "Kavram: a etiketi içine ne koyarsan tıklanabilir olur.\nÇözüm: tıklanınca href çalışır → sayfa.html.\nTuzak: src’yi hedef sanmak.\nEzber: ‘Tıklama = href’."
  },

  {
    q: "Footer (sayfanın alt bölümü) için doğru HTML etiketi hangisidir?",
    t: "mcq",
    o: ["<foot>", "<footer>", "<bottom>", "<end>", "<tail>"],
    a: "<footer>",
    difficulty: "easy",
    week: 2,
    topic: "footer etiketi",
    importance: "medium",
    explanation:
      "Kavram: Semantik etiket: footer.\nÇözüm: ‘foot değil footer’.\nTuzak: <foot> diye kandırma.\nEzber: footer = alt kısım."
  },

  {
    q: "Aşağıdaki seçeneklerden hangisi HTML yorum (comment) yazımıdır?",
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
      "Kavram: HTML comment = <!-- -->.\nÇözüm: CSS comment (/* */) ile karıştırma.\nTuzak: /* */ şıkkı.\nEzber: HTML’de ok işareti gibi: <!-- -->."
  },

  // ========================
  // ==== 16-50: CSS (35) ===
  // ========================

  {
    q: "CSS (Cascading Style Sheets) en doğru ne yapar?",
    t: "mcq",
    o: [
      "HTML’in linklerini çalıştırır (href yönetir)",
      "HTML’in görünümünü/stilini belirler (renk, boyut, hizalama, düzen, animasyon)",
      "Veritabanı bağlantısını kurar",
      "Sadece internet bağlantısını yönetir",
      "Tabloya yeni satır ekler"
    ],
    a: "HTML’in görünümünü/stilini belirler (renk, boyut, hizalama, düzen, animasyon)",
    difficulty: "easy",
    week: 10,
    topic: "CSS tanım",
    importance: "high",
    explanation:
      "Kavram: CSS = görünüm katmanı (style).\nÇözüm: ‘görünüm/renk/düzen’ geçen şık doğruya yakındır.\nTuzak: CSS’yi HTML fonksiyonu sanmak.\nEzber: HTML=iskelet, CSS=makyaj."
  },

  {
    q:
      "Specificity (öncelik) sorusu: Aşağıdaki kodda “Merhaba” hangi renkte görünür?\n\nHTML:\n<p id='x' class='y' style='color: green;'>Merhaba</p>\n\nCSS:\n#x{ color:red; }\n.y{ color:blue; }\np{ color:black; }",
    t: "mcq",
    o: [
      "Siyah (etiket seçici en güçlüdür)",
      "Mavi (.class, id’den güçlüdür)",
      "Kırmızı (#id en güçlüdür ve inline’ı ezer)",
      "Yeşil (inline style en güçlüdür)",
      "Karışık çıkar; tarayıcı rastgele seçer"
    ],
    a: "Yeşil (inline style en güçlüdür)",
    difficulty: "hard",
    week: 10,
    topic: "Specificity / cascade çıktı",
    importance: "high",
    explanation:
      "Kavram: Öncelik sırası: Inline > #id > .class > etiket.\nÇözüm: Aynı özelliği (color) kim daha güçlü söylüyor? Inline.\nTuzak: ‘id en güçlü’ deyip inline’ı unutmak.\nEzber: I > # > . > tag."
  },

  {
    q: "CSS 3 yazım yöntemi aşağıdakilerden hangisinde doğru verilmiştir?",
    t: "mcq",
    o: [
      "Inline (style=''), Internal (<style>), External (<link rel='stylesheet'>)",
      "Inline (<link>), Internal (src=''), External (<style>)",
      "Sadece External vardır; diğerleri geçersizdir",
      "Sadece Internal vardır; external çalışmaz",
      "CSS sadece body içinde yazılır"
    ],
    a: "Inline (style=''), Internal (<style>), External (<link rel='stylesheet'>)",
    difficulty: "easy",
    week: 10,
    topic: "CSS yazım yöntemleri",
    importance: "high",
    explanation:
      "Kavram: 3 yol = Inline / Internal / External.\nÇözüm: Şıkta hem doğru isim hem doğru yer/etiket var mı bak.\nTuzak: External’ı <script> ile bağlatmaya çalışan şık.\nEzber: I-I-E."
  },

  {
    q: "External CSS dosyasını doğru bağlayan kod hangisidir?",
    t: "mcq",
    o: [
      "<link href='style.css'>",
      "<link rel='stylesheet' href='style.css'>",
      "<style src='style.css'></style>",
      "<script rel='stylesheet' href='style.css'></script>",
      "<a rel='stylesheet' href='style.css'>CSS</a>"
    ],
    a: "<link rel='stylesheet' href='style.css'>",
    difficulty: "easy",
    week: 10,
    topic: "External bağlama",
    importance: "high",
    explanation:
      "Kavram: CSS ekleme = link + rel='stylesheet' + href.\nÇözüm: rel şart, yoksa bağlantı ‘stylesheet’ olarak anlaşılmaz.\nTuzak: src ile bağlama.\nEzber: CSS linki = <link rel='stylesheet' href='...'>."
  },

  {
    q:
      "@import ile ilgili doğru ifade hangisidir? (Optimization konusu da dahil)\n\nCSS:\n@import url('theme.css');",
    t: "mcq",
    o: [
      "@import HTML içinde yazılır, CSS içinde yazılamaz",
      "@import başka CSS dosyasını CSS içinden çağırır; genelde <link> performans açısından daha tercih edilir",
      "@import sadece JavaScript dosyası çağırır",
      "@import, inline CSS’in tek şeklidir",
      "@import, sadece hover çalıştırır"
    ],
    a: "@import başka CSS dosyasını CSS içinden çağırır; genelde <link> performans açısından daha tercih edilir",
    difficulty: "medium",
    week: 12,
    topic: "@import + optimization",
    importance: "medium",
    explanation:
      "Kavram: @import CSS’in içinde CSS çağırır.\nÇözüm: ‘Başka CSS’i içeri alır’ diyen şık doğru.\nTuzak: @import’ı HTML attribute sanmak.\nEzber: Import = CSS içinde CSS çağırma (ama link daha klasik/tercih)."
  },

  {
    q:
      "CSS yazım hatası (finalde puan kırdırır): Aşağıdakilerden hangisi HATALI yazımdır?",
    t: "mcq",
    o: [
      "max-width",
      "min-width",
      "opacity",
      "padding",
      "max widght"
    ],
    a: "max widght",
    difficulty: "easy",
    week: 10,
    topic: "CSS yazım hataları",
    importance: "high",
    explanation:
      "Kavram: width kelimesi doğru yazılmalı; max-width tire ile.\nÇözüm: Şıklar arasında ‘widght’ gibi hatalı yazımı bul.\nTuzak: ‘maxwidth’ gibi tireyi unutturan şıklar.\nEzber: width doğru; max-width tireli."
  },

  {
    q:
      "Çıktı sorusu: Aşağıdaki CSS, metni mi yoksa arka planı mı değiştirir?\n\np{ color:red; background-color: yellow; }",
    t: "mcq",
    o: [
      "color arka planı, background-color yazıyı değiştirir",
      "color yazıyı kırmızı yapar; background-color arka planı sarı yapar",
      "İkisi de sadece border’ı değiştirir",
      "İkisi de sadece saydamlık verir",
      "Sadece h1’de çalışır, p’de çalışmaz"
    ],
    a: "color yazıyı kırmızı yapar; background-color arka planı sarı yapar",
    difficulty: "easy",
    week: 10,
    topic: "color vs background-color",
    importance: "high",
    explanation:
      "Kavram: color = yazı rengi. background-color = arka plan.\nÇözüm: ‘metin mi zemin mi?’ ayrımını yap.\nTuzak: bu ikisini ters yazan şık.\nEzber: color=metin, background=zemin."
  },

  {
    q:
      "“Punto” sorusu: Aşağıdaki font-size birimlerinden hangisi ‘punto/point’ ile ilişkilidir?",
    t: "mcq",
    o: ["px", "pt", "%", "vh", "fr"],
    a: "pt",
    difficulty: "easy",
    week: 10,
    topic: "font-size birimleri",
    importance: "medium",
    explanation:
      "Kavram: pt = point (punto). px = piksel.\nÇözüm: ‘punto’ kelimesi geçiyorsa pt’yi seç.\nTuzak: px’i ‘boyut birimi’ diye atlamak.\nEzber: Punto = PT."
  },

  {
    q:
      "% (yüzde) ile ilgili: Aşağıdaki CSS’de .box genişliği neye göre %50 olur?\n\n.parent{ width: 400px; }\n.box{ width: 50%; }",
    t: "mcq",
    o: [
      "Ekran genişliğine göre",
      "Parent (.parent) genişliğine göre",
      "HTML dosyasının boyutuna göre",
      "Sadece resimlerde çalışır",
      "Rastgele hesaplanır"
    ],
    a: "Parent (.parent) genişliğine göre",
    difficulty: "medium",
    week: 10,
    topic: "% mantığı",
    importance: "high",
    explanation:
      "Kavram: % çoğu zaman parent’a göre hesaplanır.\nÇözüm: width:% gördün mü ‘parent genişliği’ düşün.\nTuzak: viewport ile parent’ı karıştırmak.\nEzber: % = parent oranı."
  },

  {
    q:
      "width/height/min-width/max-width için en doğru eşleştirme hangisidir?",
    t: "mcq",
    o: [
      "min-width = en fazla büyüsün, max-width = en az küçülsün",
      "width = hedef genişlik, max-width = tavan, min-width = taban, height = yükseklik",
      "height sadece yazı boyutudur",
      "max-width saydamlık verir",
      "min-width elemanı sabitler (sticky)"
    ],
    a: "width = hedef genişlik, max-width = tavan, min-width = taban, height = yükseklik",
    difficulty: "easy",
    week: 10,
    topic: "width/height/min/max",
    importance: "high",
    explanation:
      "Kavram: width/heigth temel ölçü; min=taban, max=tavan.\nÇözüm: Tanım sorularında ‘en fazla/en az’ kelimesini yakala.\nTuzak: min ile max’ı terslemek.\nEzber: min=minimum taban, max=maximum tavan."
  },

  {
    q:
      "Responsive çıktı sorusu: Aşağıdaki kural ne sağlar?\n\nimg{ max-width:100%; height:auto; }",
    t: "mcq",
    o: [
      "Resim her zaman 1000px olur",
      "Resim parent’ı aşarsa küçülür; oran bozulmaz",
      "Resim sadece büyür, küçülmez",
      "Resim görünmez olur (display:none)",
      "Resim grid’e dönüşür"
    ],
    a: "Resim parent’ı aşarsa küçülür; oran bozulmaz",
    difficulty: "easy",
    week: 10,
    topic: "responsive image",
    importance: "high",
    explanation:
      "Kavram: max-width=100% taşmayı engeller; height:auto oranı korur.\nÇözüm: ‘bozulmasın’ denince max-width+auto kalıbı.\nTuzak: width:100% ile max-width farkı.\nEzber: Responsive resim = max-width:100% + height:auto."
  },

  {
    q:
      "Opacity çıktı sorusu: .box{ opacity:0; } ise aşağıdakilerden hangisi doğrudur?",
    t: "mcq",
    o: [
      "Eleman görünmez ve sayfada yer kaplamaz",
      "Eleman görünmez ama sayfada yer kaplar",
      "Eleman daha opak olur",
      "Sadece yazı görünmez, arka plan görünür",
      "Sadece hover olunca görünmez"
    ],
    a: "Eleman görünmez ama sayfada yer kaplar",
    difficulty: "medium",
    week: 10,
    topic: "opacity",
    importance: "high",
    explanation:
      "Kavram: opacity=0 görünmez yapar ama layout’ta yer durur.\nÇözüm: Yer kaplamasın istiyorsan display:none.\nTuzak: opacity ile display’i aynı sanmak.\nEzber: opacity görünümü etkiler, display yerleşimi."
  },

  {
    q:
      "Sadece arka planı saydam yapıp içindeki yazıyı etkilememek için hangisi daha uygundur?",
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
    topic: "rgba vs opacity",
    importance: "high",
    explanation:
      "Kavram: opacity tüm çocukları da saydamlaştırır; rgba sadece arka planı saydam yapar.\nÇözüm: ‘Yazı etkilenmesin’ kelimesi → rgba.\nTuzak: opacity seçip yazıyı da soldurmak.\nEzber: Yazı sabit kalsın = rgba."
  },

  {
    q: "Margin ve padding için en doğru tanım hangisidir?",
    t: "mcq",
    o: [
      "Margin iç boşluk, padding dış boşluktur",
      "Margin dış boşluk, padding iç boşluktur",
      "İkisi de sadece yazı rengini değiştirir",
      "Padding sadece tabloda çalışır",
      "Margin sadece resimde çalışır"
    ],
    a: "Margin dış boşluk, padding iç boşluktur",
    difficulty: "easy",
    week: 10,
    topic: "margin vs padding",
    importance: "high",
    explanation:
      "Kavram: Margin = dış mesafe; Padding = içerikle border arası iç mesafe.\nÇözüm: ‘Dış/İç’ kelimesini yakala.\nTuzak: İkisini terslemek.\nEzber: Margin=Mahalle(dış), Padding=Pijama(iç)."
  },

  {
    q:
      "Shorthand sorusu: margin: 10px 20px 30px 40px; sırası hangisidir?",
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
    topic: "margin shorthand",
    importance: "high",
    explanation:
      "Kavram: 4 değer = TRBL (Top Right Bottom Left).\nÇözüm: Saat yönü gibi oku.\nTuzak: Sol-sağ karıştırmak.\nEzber: TRBL = üst-sağ-alt-sol."
  },

  {
    q:
      "Box Model hesap sorusu (border-box YOK):\n\n.box{ width:200px; padding:20px; border:5px solid black; }\n\nToplam görünen kutu genişliği (content+padding+border) kaç px olur?",
    t: "mcq",
    o: ["200px", "220px", "230px", "250px", "260px"],
    a: "250px",
    difficulty: "hard",
    week: 10,
    topic: "box model hesap",
    importance: "high",
    explanation:
      "Kavram: Toplam = width + (padding*2) + (border*2).\nÇözüm: 200 + 40 + 10 = 250.\nTuzak: Sadece width’ü toplam sanmak.\nEzber: ‘2 taraf var’ → padding ve border 2 ile çarpılır."
  },

  {
    q:
      "Aynı kutu için border-box açılırsa ne olur?\n\n*{ box-sizing:border-box; }\n.box{ width:200px; padding:20px; border:5px solid black; }\n\nToplam görünen kutu genişliği kaç px olur?",
    t: "mcq",
    o: ["200px", "210px", "240px", "250px", "260px"],
    a: "200px",
    difficulty: "hard",
    week: 10,
    topic: "box-sizing",
    importance: "high",
    explanation:
      "Kavram: border-box = width’in içine padding+border dahil.\nÇözüm: width=200 ise toplam da 200 kalır.\nTuzak: Yine 250 hesaplamak.\nEzber: border-box = ‘hesap kolay, width=tam kutu’."
  },

  {
    q:
      "Yer kaplama farkı sorusu: Hangisi elemanı görünmez yapar ama YER KAPLATMAYA devam eder?",
    t: "mcq",
    o: [
      "display:none;",
      "opacity:0;",
      "remove(); (HTML’de)",
      "width:0; height:0; (her zaman aynı etki)",
      "link rel='stylesheet';"
    ],
    a: "opacity:0;",
    difficulty: "medium",
    week: 10,
    topic: "opacity vs display",
    importance: "high",
    explanation:
      "Kavram: opacity/visibility yer tutabilir; display:none yer tutmaz.\nÇözüm: ‘yer kaplasın’ ifadesi → opacity/visibility.\nTuzak: display:none seçmek.\nEzber: display:none = yok, opacity=hayalet (yer var)."
  },

  {
    q:
      "Display çıktı sorusu:\n\nHTML:\n<span class='a'>A</span><span class='b'>B</span>\n\nCSS:\n.a{ display:block; }\n\nÇıktı nasıl olur?",
    t: "mcq",
    o: [
      "A ve B yan yana kalır",
      "A alt satıra iner, B üstte kalır",
      "A tek başına satırı kaplar, B alt satıra geçer",
      "A görünmez olur",
      "B görünmez olur"
    ],
    a: "A tek başına satırı kaplar, B alt satıra geçer",
    difficulty: "hard",
    week: 10,
    topic: "display block çıktı",
    importance: "high",
    explanation:
      "Kavram: block = satırı kaplar, alt satıra iter.\nÇözüm: span normalde inline, ama block olunca davranış değişir.\nTuzak: span hep inline sanmak.\nEzber: block = ‘satır kapatır’."
  },

  {
    q:
      "Selector (p.anil) çıktı sorusu:\n\nCSS:\np.anil{ color:red; font-size:20px; }\n\nHTML:\n<p class='anil'>A</p>\n<div class='anil'>B</div>",
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
    topic: "selector p.class",
    importance: "high",
    explanation:
      "Kavram: p.anil = ‘class’ı anil olan p etiketleri.\nÇözüm: div değil p seçildi.\nTuzak: .anil ile p.anil’i aynı sanmak.\nEzber: Etiket yazdıysan sadece o etiket."
  },

  {
    q:
      "position: relative için en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Eleman normal akıştan çıkar ve yer kaplamaz",
      "Eleman kendi normal konumuna göre kaydırılır; sayfadaki yeri korunur",
      "Eleman ekrana sabitlenir (scroll etmez)",
      "Eleman otomatik en üste çıkar",
      "Eleman sadece grid içinde çalışır"
    ],
    a: "Eleman kendi normal konumuna göre kaydırılır; sayfadaki yeri korunur",
    difficulty: "medium",
    week: 10,
    topic: "position relative",
    importance: "high",
    explanation:
      "Kavram: relative = ‘kendi yerinden kay’ (top/left ile).\nÇözüm: ‘Yer korunur’ ifadesi relative’in imzasıdır.\nTuzak: absolute ile karıştırmak.\nEzber: relative = kayar ama izi kalır."
  },

  {
    q:
      "position: absolute referans sorusu:\n\n.parent{ position:relative; }\n.badge{ position:absolute; top:10px; right:10px; }\n\n.badge konumu neye göre hesaplanır?",
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
    topic: "absolute referans",
    importance: "high",
    explanation:
      "Kavram: absolute = normal akıştan çıkar; en yakın ‘position’lı ata referans olur.\nÇözüm: parent’a relative verilmiş → referans parent.\nTuzak: ‘her zaman ekran’ sanmak (o fixed’e daha yakın).\nEzber: absolute = ‘en yakın position’lı ata."
  },

  {
    q:
      "position: sticky ile ilgili doğru ifade hangisidir?\n\nheader{ position:sticky; top:0; }",
    t: "mcq",
    o: [
      "Her zaman fixed gibi yapışır, hiç normal akışta olmaz",
      "Normal akar; belirli noktaya gelince top:0 çizgisinde yapışır",
      "Sadece resimlerde çalışır",
      "Sadece z-index ile çalışır",
      "Overflow’u otomatik hidden yapar"
    ],
    a: "Normal akar; belirli noktaya gelince top:0 çizgisinde yapışır",
    difficulty: "medium",
    week: 10,
    topic: "sticky",
    importance: "high",
    explanation:
      "Kavram: sticky = ‘yaklaşınca yapış’.\nÇözüm: top:0 eşiği gelince sabitlenir.\nTuzak: sticky’yi fixed sanmak.\nEzber: sticky = yarı normal, yarı sabit."
  },

  {
    q:
      "z-index çıktı sorusu:\n\nHTML:\n<div class='a'>A</div>\n<div class='b'>B</div>\n\nCSS:\n.a{ position:absolute; z-index:1; }\n.b{ position:absolute; z-index:2; }\n\nÜstte hangisi görünür?",
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
    topic: "z-index çıktı",
    importance: "high",
    explanation:
      "Kavram: z-index büyük olan öne gelir (katman).\nÇözüm: 2 > 1 → B önde.\nTuzak: ‘önce yazılan üstte’ sanmak.\nEzber: z-index = katman numarası; büyük numara önde."
  },

  {
    q:
      "Overflow sorusu: Aşağıdaki CSS’in etkisi nedir?\n\n.box{ max-height:100px; overflow:auto; }",
    t: "mcq",
    o: [
      "Her durumda scroll çubuğu çıkar (içerik az olsa bile)",
      "İçerik taşarsa scroll çıkar; taşmazsa çıkmaz",
      "Taşan kısım kesilir, scroll olmaz",
      "Kutu görünmez olur",
      "Kutu yapışkan olur"
    ],
    a: "İçerik taşarsa scroll çıkar; taşmazsa çıkmaz",
    difficulty: "medium",
    week: 10,
    topic: "overflow auto",
    importance: "high",
    explanation:
      "Kavram: auto = gerekiyorsa kaydır.\nÇözüm: ‘taşarsa’ kelimesi → auto.\nTuzak: scroll ile auto’yu karıştırmak.\nEzber: auto = akıllı scroll."
  },

  {
    q:
      "Float çıktı sorusu:\n\nCSS:\nimg{ float:left; margin-right:10px; }\n\nBu kullanım genelde ne amaçla yapılır?",
    t: "mcq",
    o: [
      "Resmi ortalamak için",
      "Resmi sola alıp metni resmin sağına sardırmak (ürün görseli + açıklama)",
      "Resmi görünmez yapmak için",
      "Resmi sabitlemek için (sticky/fixed)",
      "Sadece grid sütun sayısını artırmak için"
    ],
    a: "Resmi sola alıp metni resmin sağına sardırmak (ürün görseli + açıklama)",
    difficulty: "medium",
    week: 10,
    topic: "float",
    importance: "high",
    explanation:
      "Kavram: float = elemanı yana alır; metin etrafına sarar.\nÇözüm: ‘ürünün yanına açıklama’ ifadesi float’ın tipik kullanımıdır.\nTuzak: float’ı flex sanmak.\nEzber: Float = ‘yana al + metni sar’."
  },

  {
    q:
      "Border + border-radius çıktı sorusu:\n\n.box{ border: 2px solid black; border-radius: 10px; }\n\nBu CSS ne üretir?",
    t: "mcq",
    o: [
      "Kutu tamamen daire olur",
      "Kutunun kenarlığı olur ve köşeleri hafif yuvarlanır",
      "Kutu görünmez olur",
      "Kutu sadece yazıyı kalınlaştırır",
      "Kutu otomatik responsive olur"
    ],
    a: "Kutunun kenarlığı olur ve köşeleri hafif yuvarlanır",
    difficulty: "easy",
    week: 11,
    topic: "border + radius",
    importance: "high",
    explanation:
      "Kavram: border = çerçeve; border-radius = köşe yuvarlama.\nÇözüm: 10px yuvarlama = hafif yumuşak köşe.\nTuzak: 50% ile 10px’i karıştırmak.\nEzber: 50% daire, px yuvarlama."
  },

  {
    q:
      "Gölge sorusu: Aşağıdakilerden hangisi kutuya gölge verir?",
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
      "Kavram: box-shadow = kutu; text-shadow = yazı.\nÇözüm: ‘kutunun gölgesi’ → box-shadow.\nTuzak: text-shadow seçmek.\nEzber: box=kutunun gölgesi."
  },

  {
    q:
      "Çıktı sorusu (text-align + cursor):\n\n.btn{ text-align:center; cursor:pointer; }\n\nBu iki özellik ne sağlar?",
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
      "Kavram: text-align=center metni ortalar. cursor=pointer tıklanabilir hissi verir.\nÇözüm: İki özelliği ayrı ayrı okuyup etkisini birleştir.\nTuzak: cursor’ın sadece linkte çalıştığını sanmak.\nEzber: pointer = ‘elin işareti’."
  },

  {
    q:
      "Pseudo-class çıktı sorusu:\n\na:hover{ color:red; }\n\nBu kural ne zaman çalışır?",
    t: "mcq",
    o: [
      "Link ziyaret edilince (visited)",
      "Mouse linkin üstüne gelince",
      "Linke tıklayıp basılı tutunca (active)",
      "Input’a tıklayınca (focus)",
      "Sayfa ilk açılınca"
    ],
    a: "Mouse linkin üstüne gelince",
    difficulty: "easy",
    week: 10,
    topic: "hover",
    importance: "high",
    explanation:
      "Kavram: :hover = üstüne gelince.\nÇözüm: ‘mouse üzerine gelince’ ifadesi hover’dır.\nTuzak: active/focus ile karıştırmak.\nEzber: hover = ‘üzerindeyken’."
  },

  {
    q:
      "Pseudo-class çıktı sorusu:\n\ninput:focus{ border:2px solid black; }\n\nKullanıcı input’a tıklayıp yazmaya başladığında ne olur?",
    t: "mcq",
    o: [
      "Hiçbir şey olmaz",
      "Input odak alınca border kalınlaşıp siyah olur",
      "Sadece mouse üstüne gelince border siyah olur",
      "Sadece form gönderilince border siyah olur",
      "Input görünmez olur"
    ],
    a: "Input odak alınca border kalınlaşıp siyah olur",
    difficulty: "easy",
    week: 10,
    topic: "focus",
    importance: "high",
    explanation:
      "Kavram: :focus = eleman aktif/odakta (tıklanıp yazı girilen an).\nÇözüm: ‘tıkla-yaz’ = focus.\nTuzak: hover ile karıştırmak.\nEzber: focus = odak."
  },

  {
    q:
      "Pseudo-class karışık soru: Aşağıdaki eşleştirmelerden hangisi doğrudur?",
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
      "Kavram: visited=geçmişte tıklanmış link, active=basılı tutma anı.\nÇözüm: Eşleştirmede ‘anlık’ (active/hover) vs ‘geçmiş’ (visited) ayrımı yap.\nTuzak: visited-hover yer değiştiren şıklar.\nEzber: visited=geçmiş, active=basılı."
  },

  {
    q:
      "Dropdown çıktı sorusu:\n\nCSS:\n.dd-content{ display:none; }\n.dd:hover .dd-content{ display:block; }\n\nBu kuralın etkisi hangisidir?",
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
    topic: "dropdown + display",
    importance: "high",
    explanation:
      "Kavram: display:none gizler, hover ile display:block gösterir.\nÇözüm: ‘hover geldi mi görünür’ kalıbını tanı.\nTuzak: ‘tıklayınca’ (JS gibi) sanmak.\nEzber: Dropdown = none → hover → block."
  },

  {
    q:
      "Responsive tanımı + media query çıktı:\n\n@media (max-width:768px){ .menu{ display:none; } }\n\nEkran genişliği 600px iken ne olur?",
    t: "mcq",
    o: [
      "Menu görünür kalır, çünkü 600 < 768 çalışmaz",
      "Menu gizlenir, çünkü 600px 768px ve altı aralığındadır",
      "Menu büyür",
      "Menu sticky olur",
      "Menu z-index 999 olur"
    ],
    a: "Menu gizlenir, çünkü 600px 768px ve altı aralığındadır",
    difficulty: "hard",
    week: 14,
    topic: "responsive + media query",
    importance: "high",
    explanation:
      "Kavram: responsive = ekran değişse de tasarım bozulmaması.\nÇözüm: max-width:768 → 768 ve ALTINDA çalışır. 600 bu aralıkta.\nTuzak: max-width’i ‘768 üstü’ sanmak.\nEzber: max = ‘en fazla’ (küçük ekranlar)."
  },

  {
    q:
      "Flexbox sorusu (tek boyut):\n\n.container{ display:flex; justify-content:center; align-items:center; height:200px; }\n\nBu ne sağlar?",
    t: "mcq",
    o: [
      "Elemanları yalnızca dikey hizalar",
      "Elemanları yalnızca yatay hizalar",
      "Elemanları hem ana eksende hem çapraz eksende ortalar (tipik olarak tam ortalama)",
      "Elemanları grid’e çevirir",
      "Elemanları görünmez yapar"
    ],
    a: "Elemanları hem ana eksende hem çapraz eksende ortalar (tipik olarak tam ortalama)",
    difficulty: "medium",
    week: 14,
    topic: "flexbox",
    importance: "high",
    explanation:
      "Kavram: Flexbox = tek boyutlu düzen (satır ya da sütun).\nÇözüm: justify-content=ana eksen; align-items=çapraz eksen. İkisi center → ortalama.\nTuzak: justify ile align’i terslemek.\nEzber: justify=ana, align=yan."
  },

  {
    q:
      "Grid sorusu (iki boyut):\n\n.grid{ display:grid; grid-template-columns: 1fr 1fr 1fr; gap:10px; }\n\nBu CSS ne kurar?",
    t: "mcq",
    o: [
      "3 eşit sütunlu bir yerleşim ve aralarında 10px boşluk",
      "3 eşit satırlı bir yerleşim ve aralarında 10px boşluk",
      "Tek satırda hizalama (flex) oluşturur",
      "Sadece yazıyı ortalar",
      "Sadece linkleri renklendirir"
    ],
    a: "3 eşit sütunlu bir yerleşim ve aralarında 10px boşluk",
    difficulty: "medium",
    week: 14,
    topic: "grid",
    importance: "high",
    explanation:
      "Kavram: Grid = 2D (satır+sütun). grid-template-columns sütunları kurar.\nÇözüm: 1fr 1fr 1fr = eşit 3 sütun. gap=aralık.\nTuzak: rows ile columns karıştırmak.\nEzber: columns = sütun."
  },

  {
    q:
      "Transition vs Animation farkı hangisidir? (Finalde @keyframes sorusu gelebilir)",
    t: "mcq",
    o: [
      "Transition sonsuz döngü yapar; animation sadece hover’da çalışır",
      "Transition bir durumdan diğerine yumuşak geçiştir; Animation @keyframes ile zaman çizelgesi/akış tanımlar",
      "Transition sadece grid’de çalışır; animation sadece flex’te çalışır",
      "Animation için @keyframes gerekmez",
      "Transition görünürlüğü (display) değiştirir"
    ],
    a: "Transition bir durumdan diğerine yumuşak geçiştir; Animation @keyframes ile zaman çizelgesi/akış tanımlar",
    difficulty: "hard",
    week: 14,
    topic: "transition vs animation",
    importance: "high",
    explanation:
      "Kavram: transition = ‘değişim olunca yumuşat’. animation = ‘kare kare hareket’ (@keyframes şart).\nÇözüm: @keyframes kelimesi animation’a işaret eder.\nTuzak: transition’ı animasyon sanmak.\nEzber: Transition=geçiş, Animation=senaryo (@keyframes)."
  },

  {
    q:
      "Bootstrap sorusu: Bootstrap nedir ve CSS olarak projeye eklemek için hangi yaklaşım kullanılır?",
    t: "mcq",
    o: [
      "Bootstrap bir veritabanıdır; <img src='...'> ile eklenir",
      "Bootstrap hazır UI bileşenleri sunan kütüphanedir; <link rel='stylesheet' href='CDN'> ile eklenir",
      "Bootstrap HTML’in yerine geçen dildir; <script> ile zorunlu eklenir",
      "Bootstrap sadece hover efektidir; style='' içinde yazılır",
      "Bootstrap bir tarayıcıdır; kurulmadan çalışmaz"
    ],
    a: "Bootstrap hazır UI bileşenleri sunan kütüphanedir; <link rel='stylesheet' href='CDN'> ile eklenir",
    difficulty: "medium",
    week: 14,
    topic: "bootstrap",
    importance: "medium",
    explanation:
      "Kavram: Bootstrap = hazır buton/navbar/form/grid gibi tasarımlar (kütüphane).\nÇözüm: CSS kütüphanesi ekleme = <link rel='stylesheet' href='...'>.\nTuzak: CSS’i script ile ekleme sanmak.\nEzber: Kütüphane=link ile CSS eklenir."
  }
];
