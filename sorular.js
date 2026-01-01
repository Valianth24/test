// CSS (Final/Vize) – 50 Soruluk Soru Bankası (MCQ)
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]

window.questionBank = [
  // ==== CSS Temelleri, Yazım Yöntemleri, Seçiciler ====

  {
    q: "CSS’in temel amacı aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "HTML’in veri tabanına bağlanmasını sağlamak",
      "HTML elemanlarının görünümünü (renk, boyut, hizalama, düzen) belirlemek",
      "Sunucu tarafında kullanıcı doğrulaması yapmak",
      "Dosya sıkıştırmak",
      "Sadece bağlantı (href) vermek"
    ],
    a: "HTML elemanlarının görünümünü (renk, boyut, hizalama, düzen) belirlemek",
    difficulty: "easy",
    week: 10,
    topic: "CSS tanımı",
    importance: "high",
    explanation: "Taktik: CSS = görünüm/stil. HTML = yapı/içerik. Sınavda tanım sorusu gelirse bu ayrımı yaz."
  },

  {
    q: "“Cascading (kademeli)” mantığında aynı elemana 2 kural çakışırsa en temel belirleyiciler hangileridir?",
    t: "mcq",
    o: [
      "Sadece dosya ismi",
      "Öncelik (specificity) + yazılma sırası (en son yazılan)",
      "Sadece tarayıcı türü",
      "Sadece bilgisayarın RAM’i",
      "Sadece font ailesi"
    ],
    a: "Öncelik (specificity) + yazılma sırası (en son yazılan)",
    difficulty: "medium",
    week: 10,
    topic: "cascade",
    importance: "high",
    explanation:
      "Taktik: Ezber: Inline > #id > .class > etiket. Aynı seviyede en son yazılan kazanır."
  },

  {
    q: "CSS 3 şekilde yazılır. Aşağıdakilerden hangisi bu 3 yöntemin doğru sıralamasıdır?",
    t: "mcq",
    o: [
      "External – Inline – Database",
      "Inline – Internal (dahili) – External (harici)",
      "Internal – HTML – PHP",
      "Inline – Bootstrap – SQL",
      "CSS yazım yöntemi yoktur"
    ],
    a: "Inline – Internal (dahili) – External (harici)",
    difficulty: "easy",
    week: 10,
    topic: "CSS yazım yöntemleri",
    importance: "high",
    explanation:
      "Taktik: I-I-E diye ezberle: Inline, Internal, External. Finalde klasik sorudur."
  },

  {
    q: "Aşağıdakilerden hangisi doğru External CSS bağlama örneğidir?",
    t: "mcq",
    o: [
      "<script src=\"style.css\"></script>",
      "<link rel=\"stylesheet\" href=\"style.css\">",
      "<style href=\"style.css\"></style>",
      "<a href=\"style.css\">CSS</a>",
      "<img src=\"style.css\">"
    ],
    a: "<link rel=\"stylesheet\" href=\"style.css\">",
    difficulty: "easy",
    week: 10,
    topic: "external css",
    importance: "high",
    explanation:
      "Taktik: CSS dosyası <link rel=\"stylesheet\" ...> ile bağlanır. script CSS bağlamaz."
  },

  {
    q: "CSS’te @import kullanımına örnek hangisidir?",
    t: "mcq",
    o: [
      "@import url(\"theme.css\");",
      "import(\"theme.css\");",
      "<import href=\"theme.css\">",
      "require(\"theme.css\")",
      "theme.css @import"
    ],
    a: "@import url(\"theme.css\");",
    difficulty: "medium",
    week: 10,
    topic: "@import",
    importance: "medium",
    explanation:
      "Taktik: @import genelde CSS dosyasının en üstünde yazılır. Hoca performans sorarsa: <link> daha tercih edilir."
  },

  {
    q: "Aşağıdakilerden hangisi doğru Internal (dahili) CSS yazımıdır?",
    t: "mcq",
    o: [
      "<head> <css> p{color:red;} </css> </head>",
      "<head> <style> p{color:red;} </style> </head>",
      "<body> <style src=\"style.css\"> </style> </body>",
      "<head> <script> p{color:red;} </script> </head>",
      "<html style=\"p{color:red;}\">"
    ],
    a: "<head> <style> p{color:red;} </style> </head>",
    difficulty: "easy",
    week: 10,
    topic: "style etiketi",
    importance: "high",
    explanation:
      "Taktik: Dahili CSS = head içinde <style> ... </style>."
  },

  {
    q: "Aşağıdaki seçici “p.anil” ne anlama gelir?",
    t: "mcq",
    o: [
      "Tüm p etiketleri",
      "Sadece class=\"anil\" olan p etiketleri",
      "Sadece id=\"anil\" olan p etiketleri",
      "anil isimli etiket",
      "p etiketinin içindeki anil etiketleri"
    ],
    a: "Sadece class=\"anil\" olan p etiketleri",
    difficulty: "easy",
    week: 10,
    topic: "selector",
    importance: "high",
    explanation:
      "Kod: p.anil{ color:red; font-size:20px; }  Taktik: Nokta(.) class, diyez(#) id’dir."
  },

  {
    q: "Aşağıdakilerden hangisi doğru ID seçicisidir?",
    t: "mcq",
    o: [
      ".header { color: blue; }",
      "#header { color: blue; }",
      "header# { color: blue; }",
      "header. { color: blue; }",
      "*header { color: blue; }"
    ],
    a: "#header { color: blue; }",
    difficulty: "easy",
    week: 10,
    topic: "id selector",
    importance: "high",
    explanation:
      "Taktik: # = id, . = class. Öncelik sorusu gelirse: #id genelde .class’tan daha baskındır."
  },

  {
    q: "Aşağıdaki iki seçiciden hangisi “.box içindeki .title” anlamına gelir?\n1) .box .title\n2) .box.title",
    t: "mcq",
    o: [
      "1) .box .title",
      "2) .box.title",
      "İkisi de aynı anlamdadır",
      "İkisi de geçersizdir",
      "Hiçbiri doğru değildir"
    ],
    a: "1) .box .title",
    difficulty: "medium",
    week: 10,
    topic: "descendant selector",
    importance: "high",
    explanation:
      "Taktik: Boşluk = “içindeki”. .box.title ise aynı elemanın iki class’ı var demektir."
  },

  // ==== Renk, Arka Plan, Yazı Boyutu, Birimler ====

  {
    q: "Arka plan rengini ayarlayan doğru CSS hangisidir?",
    t: "mcq",
    o: [
      "bg-color: red;",
      "background-color: red;",
      "color-background: red;",
      "background: color(red);",
      "font-background: red;"
    ],
    a: "background-color: red;",
    difficulty: "easy",
    week: 10,
    topic: "background-color",
    importance: "high",
    explanation:
      "Taktik: color = yazı rengi, background-color = arka plan rengi. Karıştırma."
  },

  {
    q: "“Punto” web/typography bağlamında genelde hangi birimle ilişkilidir?",
    t: "mcq",
    o: [
      "pt (point)",
      "px (pixel)",
      "vw (viewport width)",
      "fr (grid fraction)",
      "deg (degree)"
    ],
    a: "pt (point)",
    difficulty: "easy",
    week: 10,
    topic: "font-size birimleri",
    importance: "medium",
    explanation:
      "Örnek: p{ font-size:12pt; }  Taktik: pt daha çok baskı/print; web’de px/em/rem sık gelir."
  },

  {
    q: "Aşağıdakilerden hangisi doğru font-size kullanım örneğidir?",
    t: "mcq",
    o: [
      "p { font-size: 20; }",
      "p { font-size: 20px; }",
      "p { font-size: px20; }",
      "p { font-size: 20%px; }",
      "p { font-size: pixel(20); }"
    ],
    a: "p { font-size: 20px; }",
    difficulty: "easy",
    week: 10,
    topic: "font-size",
    importance: "high",
    explanation:
      "Taktik: Birim unutmak sık hata. font-size gibi özelliklerde 20 tek başına genelde yanlış; 20px yaz."
  },

  {
    q: "width: 50% ifadesi çoğunlukla neye göre hesaplanır?",
    t: "mcq",
    o: [
      "Ekranın toplam pikseline göre",
      "Parent (ebeveyn) elemanın genişliğine göre",
      "CPU hızına göre",
      "HTML dosya boyutuna göre",
      "Sadece resimlerde çalışır"
    ],
    a: "Parent (ebeveyn) elemanın genişliğine göre",
    difficulty: "easy",
    week: 10,
    topic: "% birimi",
    importance: "high",
    explanation:
      "Örnek: .box{ width:50%; }  Taktik: % sorularında “parent’a göre” yaz; puan aldırır."
  },

  // ==== width/height, min/max, responsive resim ====

  {
    q: "max-width için doğru açıklama hangisidir?",
    t: "mcq",
    o: [
      "Eleman en az bu kadar geniş olur",
      "Eleman en fazla bu kadar genişleyebilir",
      "Eleman her zaman bu genişlikte olur",
      "Eleman görünmez olur",
      "Sadece height’i etkiler"
    ],
    a: "Eleman en fazla bu kadar genişleyebilir",
    difficulty: "easy",
    week: 10,
    topic: "max-width",
    importance: "high",
    explanation:
      "Örnek: .card{ max-width:600px; }  Taktik: “max = tavan” diye ezberle."
  },

  {
    q: "min-width için doğru açıklama hangisidir?",
    t: "mcq",
    o: [
      "Eleman en fazla bu kadar geniş olur",
      "Eleman en az bu kadar geniş olur (daha küçülmez)",
      "Eleman sadece telefonlarda çalışır",
      "Eleman saydam olur",
      "Eleman float yapar"
    ],
    a: "Eleman en az bu kadar geniş olur (daha küçülmez)",
    difficulty: "easy",
    week: 10,
    topic: "min-width",
    importance: "medium",
    explanation:
      "Örnek: .panel{ min-width:280px; }  Taktik: “min = taban” diye düşün."
  },

  {
    q: "Responsive görüntü için en klasik resim kuralı hangisidir?",
    t: "mcq",
    o: [
      "img { width: 1000px; height: 1000px; }",
      "img { max-width: 100%; height: auto; }",
      "img { min-width: 100%; height: 100%; }",
      "img { position: absolute; }",
      "img { display: none; }"
    ],
    a: "img { max-width: 100%; height: auto; }",
    difficulty: "easy",
    week: 10,
    topic: "responsive image",
    importance: "high",
    explanation:
      "Taktik: max-width:100% taşmayı engeller, height:auto oranı korur. Finalde direkt sorulur."
  },

  // ==== Opacity, RGBA, Görünürlük ====

  {
    q: "opacity değeri hangi aralıkta olmalıdır?",
    t: "mcq",
    o: [
      "0 ile 1 arasında",
      "0 ile 10 arasında",
      "1 ile 100 arasında",
      "-1 ile 1 arasında",
      "Sadece yüzde ile yazılır"
    ],
    a: "0 ile 1 arasında",
    difficulty: "easy",
    week: 10,
    topic: "opacity",
    importance: "high",
    explanation:
      "Örnek: img{ opacity:0.6; }  Taktik: 0 görünmez, 1 tam görünür."
  },

  {
    q: "Sadece arka plan saydam olsun, iç yazı etkilenmesin. En uygun yaklaşım hangisidir?",
    t: "mcq",
    o: [
      "opacity: 0.5; (kapsayıcıya)",
      "background: rgba(0,0,0,0.5);",
      "z-index: 999;",
      "float: left;",
      "display: none;"
    ],
    a: "background: rgba(0,0,0,0.5);",
    difficulty: "medium",
    week: 10,
    topic: "rgba vs opacity",
    importance: "high",
    explanation:
      "Taktik: opacity parent’a verilirse çocuklar da saydam olur. Sadece arka plan için rgba kullan."
  },

  {
    q: "display:none ile visibility:hidden arasındaki temel fark hangisidir?",
    t: "mcq",
    o: [
      "İkisi tamamen aynıdır",
      "display:none elemanı akıştan kaldırır; visibility:hidden yer kaplar ama görünmez",
      "visibility:hidden elemanı akıştan kaldırır; display:none yer kaplar",
      "İkisi de sadece resimlerde çalışır",
      "İkisi de z-index’i değiştirir"
    ],
    a: "display:none elemanı akıştan kaldırır; visibility:hidden yer kaplar ama görünmez",
    difficulty: "medium",
    week: 10,
    topic: "display vs visibility",
    importance: "medium",
    explanation:
      "Taktik: “none = yokmuş gibi”, “hidden = var ama görünmüyor” diye ezberle."
  },

  // ==== Margin, Padding, Box Model, Box-Sizing ====

  {
    q: "Margin ve Padding farkı için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Margin iç boşluktur, Padding dış boşluktur",
      "Margin dış boşluktur, Padding iç boşluktur",
      "İkisi de sadece yazıyı büyütür",
      "Padding sadece tabloda çalışır",
      "Margin sadece resimde çalışır"
    ],
    a: "Margin dış boşluktur, Padding iç boşluktur",
    difficulty: "easy",
    week: 10,
    topic: "margin vs padding",
    importance: "high",
    explanation:
      "Örnek:\n.box{ margin:20px; padding:10px; }\nTaktik: Margin=Mahalle(dış), Padding=Pijama(iç)."
  },

  {
    q: "Shorthand: margin: 10px 20px 30px 40px; sırası hangisidir?",
    t: "mcq",
    o: [
      "Sol, Sağ, Üst, Alt",
      "Üst, Sağ, Alt, Sol",
      "Üst, Alt, Sağ, Sol",
      "Sağ, Üst, Sol, Alt",
      "Alt, Üst, Sol, Sağ"
    ],
    a: "Üst, Sağ, Alt, Sol",
    difficulty: "medium",
    week: 10,
    topic: "margin shorthand",
    importance: "high",
    explanation:
      "Taktik: Saat yönü: Top(üst) → Right(sağ) → Bottom(alt) → Left(sol)."
  },

  {
    q: "Box Model katman sırası hangisidir?",
    t: "mcq",
    o: [
      "margin → border → padding → content",
      "content → padding → border → margin",
      "border → content → padding → margin",
      "padding → margin → content → border",
      "content → border → margin → padding"
    ],
    a: "content → padding → border → margin",
    difficulty: "easy",
    week: 10,
    topic: "box model",
    importance: "high",
    explanation:
      "Taktik: İçten dışa doğru oku: içerik, iç boşluk, çerçeve, dış boşluk."
  },

  {
    q: "Aşağıdaki kuralın etkisi nedir?\n* { box-sizing: border-box; }",
    t: "mcq",
    o: [
      "width hesaplamasına padding+border dahil olur (hesap kolaylaşır)",
      "Tüm elemanları görünmez yapar",
      "Sadece fontu değiştirir",
      "Sadece z-index’i artırır",
      "Sadece grid’i aktif eder"
    ],
    a: "width hesaplamasına padding+border dahil olur (hesap kolaylaşır)",
    difficulty: "medium",
    week: 10,
    topic: "box-sizing",
    importance: "high",
    explanation:
      "Taktik: border-box = kutu genişliği sabit kalır; padding/border dışarı taşmaz. Finalde ‘hesap’ sorusunda çok iş görür."
  },

  // ==== Display, Inline/Block, Layout Temeli ====

  {
    q: "div etiketi default olarak hangi display davranışına sahiptir?",
    t: "mcq",
    o: ["inline", "block", "none", "grid", "flex"],
    a: "block",
    difficulty: "easy",
    week: 10,
    topic: "div",
    importance: "high",
    explanation:
      "Taktik: div = block; satırı kaplar, alt satıra geçer. (CSS sorusunda “div nedir?” diye gelir.)"
  },

  {
    q: "inline-block için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Satırı tamamen kaplar ve width/height almaz",
      "Yan yana durabilir ve width/height alabilir",
      "Her zaman görünmezdir",
      "Sadece position ile çalışır",
      "Sadece tabloda kullanılır"
    ],
    a: "Yan yana durabilir ve width/height alabilir",
    difficulty: "medium",
    week: 10,
    topic: "display",
    importance: "medium",
    explanation:
      "Taktik: inline gibi yan yana + block gibi ölçü alır. Sınavda sık karışır."
  },

  // ==== Position, Z-index, Overlap ====

  {
    q: "position: relative için doğru açıklama hangisidir?",
    t: "mcq",
    o: [
      "Eleman akıştan çıkar, en yakın parent’a göre konumlanır",
      "Eleman kendi normal konumuna göre top/left ile kaydırılır, akıştaki yeri korunur",
      "Eleman ekrana sabitlenir (scroll etmez)",
      "Eleman görünmez olur",
      "Eleman her zaman en üst katmana çıkar"
    ],
    a: "Eleman kendi normal konumuna göre top/left ile kaydırılır, akıştaki yeri korunur",
    difficulty: "medium",
    week: 10,
    topic: "position relative",
    importance: "high",
    explanation:
      "Örnek:\n.box{ position:relative; top:10px; }\nTaktik: Relative = “kendi yerinden kayar”."
  },

  {
    q: "position: absolute için doğru açıklama hangisidir?",
    t: "mcq",
    o: [
      "Eleman normal akışta kalır",
      "Eleman akıştan çıkar; en yakın position verilmiş ataya göre konumlanır",
      "Eleman sadece flex içinde çalışır",
      "Eleman sadece grid içinde çalışır",
      "Eleman sadece metinlerde kullanılır"
    ],
    a: "Eleman akıştan çıkar; en yakın position verilmiş ataya göre konumlanır",
    difficulty: "medium",
    week: 10,
    topic: "position absolute",
    importance: "high",
    explanation:
      "Örnek:\n.parent{ position:relative; }\n.badge{ position:absolute; top:0; right:0; }\nTaktik: Absolute = “akıştan çıkar + referans ata”."
  },

  {
    q: "position: sticky en doğru nasıl çalışır?",
    t: "mcq",
    o: [
      "Her zaman ekrana sabitlenir (fixed gibi)",
      "Belirli bir noktaya kadar normal akar; top gibi eşik sonrası yapışır",
      "Sadece resimlerde çalışır",
      "Z-index’i otomatik 999 yapar",
      "Overflow’u otomatik hidden yapar"
    ],
    a: "Belirli bir noktaya kadar normal akar; top gibi eşik sonrası yapışır",
    difficulty: "medium",
    week: 10,
    topic: "position sticky",
    importance: "high",
    explanation:
      "Örnek: header{ position:sticky; top:0; }\nTaktik: Sticky sorularında mutlaka top/left gibi eşik değerini ararsın."
  },

  {
    q: "z-index’in temel amacı nedir?",
    t: "mcq",
    o: [
      "Yazı boyutunu büyütmek",
      "Üst üste binen elemanlarda katman sırasını belirlemek",
      "Elemanı döndürmek",
      "Saydamlık vermek",
      "Flex’i aktif etmek"
    ],
    a: "Üst üste binen elemanlarda katman sırasını belirlemek",
    difficulty: "easy",
    week: 10,
    topic: "z-index",
    importance: "high",
    explanation:
      "Taktik: z-index çalışması için genelde position gerekir. Büyük z-index öne gelir."
  },

  // ==== Overflow ====

  {
    q: "Aşağıdaki kod ne yapar?\n.box{ max-height:200px; overflow:auto; }",
    t: "mcq",
    o: [
      "Taşan içeriği keser ve asla scroll göstermez",
      "Gerekiyorsa scroll çıkarır, gerekmezse çıkarmaz",
      "Her zaman yatay scroll çıkarır",
      "Elemanı görünmez yapar",
      "Elemanı sağa kaydırır"
    ],
    a: "Gerekiyorsa scroll çıkarır, gerekmezse çıkarmaz",
    difficulty: "medium",
    week: 10,
    topic: "overflow",
    importance: "high",
    explanation:
      "Taktik: overflow:auto = akıllı scroll. overflow:hidden = keser. Sorularda bu ikisi karıştırılır."
  },

  // ==== Float ve Yanına Açıklama (klasik) ====

  {
    q: "Aşağıdaki kodun sonucu genelde nasıl olur?\nimg{ float:left; margin-right:10px; }",
    t: "mcq",
    o: [
      "Resim ortalanır",
      "Resim sola yaslanır, metin resmin sağından akmaya başlar",
      "Resim görünmez olur",
      "Resim en alta iner",
      "Resim sticky olur"
    ],
    a: "Resim sola yaslanır, metin resmin sağından akmaya başlar",
    difficulty: "medium",
    week: 10,
    topic: "float",
    importance: "high",
    explanation:
      "Taktik: Float sorusu gelirse “metin etrafına sarar” diye yaz. Modern karşılık: flexbox."
  },

  // ==== Pseudo-class (çok önemli) ====

  {
    q: "Aşağıdaki CSS ne yapar?\na:hover{ color:red; text-decoration:underline; }",
    t: "mcq",
    o: [
      "Linke tıklanınca (visited) kırmızı yapar",
      "Fare linkin üstüne gelince link rengi kırmızı olur ve altı çizilir",
      "Sayfa açılınca linkleri gizler",
      "Linki her zaman kırmızı yapar",
      "Input odaktayken çalışır"
    ],
    a: "Fare linkin üstüne gelince link rengi kırmızı olur ve altı çizilir",
    difficulty: "easy",
    week: 10,
    topic: ":hover",
    importance: "high",
    explanation:
      "Taktik: hover = mouse üstüne gelince. Finalde klasik pseudo-class sorusu."
  },

  {
    q: "Aşağıdaki CSS hangi durumda çalışır?\ninput:focus{ border:2px solid black; }",
    t: "mcq",
    o: [
      "Input’a fare değince",
      "Input’a tıklanıp yazı yazma odağı gelince",
      "Sayfa kapanınca",
      "Resim yüklenince",
      "Div hover olunca"
    ],
    a: "Input’a tıklanıp yazı yazma odağı gelince",
    difficulty: "easy",
    week: 10,
    topic: ":focus",
    importance: "high",
    explanation:
      "Taktik: focus = aktif yazma odağı. Hover ile karıştırma: hover sadece üstüne gelmek."
  },

  {
    q: "button:active pseudo-class’i genelde neyi ifade eder?",
    t: "mcq",
    o: [
      "Buton sayfada görünür",
      "Butona basılı tutulduğu an",
      "Buton disable",
      "Buton visited",
      "Buton sticky"
    ],
    a: "Butona basılı tutulduğu an",
    difficulty: "medium",
    week: 10,
    topic: ":active",
    importance: "medium",
    explanation:
      "Örnek: button:active{ transform:scale(0.98); }\nTaktik: active = basma anı (çok kısa sürer)."
  },

  {
    q: "Linklerde :visited pseudo-class’i neyi hedefler?",
    t: "mcq",
    o: [
      "Hiç ziyaret edilmemiş link",
      "Ziyaret edilmiş link",
      "Mouse üstündeki link",
      "Tıklanan buton",
      "Input odaktaki alan"
    ],
    a: "Ziyaret edilmiş link",
    difficulty: "easy",
    week: 10,
    topic: ":visited",
    importance: "medium",
    explanation:
      "Taktik: visited = geçmişte tıklanmış link. (Bazı CSS özellikleri güvenlik nedeniyle kısıtlı olabilir.)"
  },

  // ==== Dropdown (hover ile açılan) + display ====

  {
    q: "Aşağıdaki CSS mantığı dropdown’ı nasıl açar?\n.dd-content{display:none;}\n.dd:hover .dd-content{display:block;}",
    t: "mcq",
    o: [
      "Sayfa açılır açılmaz menü görünür",
      "Mouse .dd üzerine gelince .dd-content görünür olur",
      "Sadece tıklayınca görünür olur",
      "Sadece mobilde görünür olur",
      "Z-index artırır"
    ],
    a: "Mouse .dd üzerine gelince .dd-content görünür olur",
    difficulty: "medium",
    week: 10,
    topic: "dropdown",
    importance: "high",
    explanation:
      "Taktik: Dropdown sorularında 2 şey ararsın: display:none ve :hover ile display:block."
  },

  // ==== CSS Yazım Hataları (puan kırdırır) ====

  {
    q: "Aşağıdakilerden hangisi DOĞRU CSS özelliği ismidir?",
    t: "mcq",
    o: ["max widght", "max-width", "max_widght", "maxwidth", "max widht"],
    a: "max-width",
    difficulty: "easy",
    week: 10,
    topic: "yazım hataları",
    importance: "high",
    explanation:
      "Taktik: width kelimesi en çok yanlış yazılır. Finalde hoca özellikle bu tarz şık koyar."
  },

  {
    q: "Aşağıdakilerden hangisi DOĞRU CSS yazımıdır?",
    t: "mcq",
    o: [
      "p { color red }",
      "p { color: red }",
      "p { color = red; }",
      "p ( color: red; )",
      "p { color: red, }"
    ],
    a: "p { color: red }",
    difficulty: "medium",
    week: 10,
    topic: "syntax",
    importance: "high",
    explanation:
      "Taktik: CSS kuralı: seçici { özellik: değer; }  Noktalı virgül çoğu zaman gerekir; ama tek satırda tarayıcı bazen tolere etse de sınavda düzgün yaz."
  },

  // ==== Text Align, Cursor, Border ====

  {
    q: "Metni ortalamak için doğru CSS hangisidir?",
    t: "mcq",
    o: [
      ".t{ text-align:center; }",
      ".t{ align-text:center; }",
      ".t{ text:center; }",
      ".t{ center-text:true; }",
      ".t{ text-align:middle; }"
    ],
    a: ".t{ text-align:center; }",
    difficulty: "easy",
    week: 10,
    topic: "text-align",
    importance: "medium",
    explanation:
      "Taktik: text-align sadece inline içerikleri hizalar; kutunun kendisini ortalamak farklıdır (margin:auto gibi)."
  },

  {
    q: "Mouse imlecini “tıklanabilir” göstermek için doğru CSS hangisidir?",
    t: "mcq",
    o: [
      ".btn{ cursor:hand; }",
      ".btn{ cursor:pointer; }",
      ".btn{ cursor:click; }",
      ".btn{ cursor:link; }",
      ".btn{ cursor:touch; }"
    ],
    a: ".btn{ cursor:pointer; }",
    difficulty: "easy",
    week: 10,
    topic: "cursor",
    importance: "medium",
    explanation:
      "Taktik: pointer en klasik. “hand” eski/yanlış şık olarak gelir."
  },

  {
    q: "Aşağıdakilerden hangisi doğru border kullanım örneğidir?",
    t: "mcq",
    o: [
      ".box{ border: 1px solid black; }",
      ".box{ border: solid 1 black; }",
      ".box{ border: black 1px; }",
      ".box{ border: 1 solid; }",
      ".box{ border: px1 solid black; }"
    ],
    a: ".box{ border: 1px solid black; }",
    difficulty: "easy",
    week: 10,
    topic: "border",
    importance: "high",
    explanation:
      "Taktik: border sırası genelde: kalınlık (1px) + stil (solid) + renk (black)."
  },

  // ==== Shadow, Border-radius, Image Styling, Filters ====

  {
    q: "Kutu gölgesi (shadow) vermek için doğru özellik hangisidir?",
    t: "mcq",
    o: ["text-shadow", "box-shadow", "shadow-box", "border-shadow", "opacity-shadow"],
    a: "box-shadow",
    difficulty: "easy",
    week: 10,
    topic: "box-shadow",
    importance: "high",
    explanation:
      "Örnek: .card{ box-shadow: 0 4px 12px rgba(0,0,0,.2); }  Taktik: yazı gölgesi = text-shadow, kutu = box-shadow."
  },

  {
    q: "Aşağıdaki border-radius hangi sonucu verir?\n.avatar{ border-radius:50%; }",
    t: "mcq",
    o: [
      "Resmi üçgen yapar",
      "Resmi daire/yuvarlak yapar (kare ise tam daire)",
      "Resmi görünmez yapar",
      "Resmi sola yaslar",
      "Resmi sticky yapar"
    ],
    a: "Resmi daire/yuvarlak yapar (kare ise tam daire)",
    difficulty: "easy",
    week: 10,
    topic: "border-radius",
    importance: "high",
    explanation:
      "Taktik: 50% köşeleri tam yuvarlar. px verince sadece yumuşatır (örn 12px)."
  },

  {
    q: "Resmi siyah-beyaz yapmak için doğru CSS hangisidir?",
    t: "mcq",
    o: [
      "img{ filter: grayscale(100%); }",
      "img{ opacity: grayscale(100%); }",
      "img{ grayscale: 100%; }",
      "img{ color: gray; }",
      "img{ background-color: gray; }"
    ],
    a: "img{ filter: grayscale(100%); }",
    difficulty: "medium",
    week: 10,
    topic: "image filters",
    importance: "medium",
    explanation:
      "Taktik: filter sorularında anahtar kelime “filter:” ile başlar. opacity ile karıştırma."
  },

  // ==== Responsive + Media Query ====

  {
    q: "Responsive tasarım en doğru ne demektir?",
    t: "mcq",
    o: [
      "Sadece masaüstünde güzel görünmesi",
      "Ekran boyutu değişince tasarımın bozulmaması (uyum sağlaması)",
      "Sadece CSS animasyon kullanmak",
      "Sadece Bootstrap kullanmak",
      "Sadece büyük font kullanmak"
    ],
    a: "Ekran boyutu değişince tasarımın bozulmaması (uyum sağlaması)",
    difficulty: "easy",
    week: 10,
    topic: "responsive",
    importance: "high",
    explanation:
      "Taktik: Tanım sorusu gelirse “bozulmaması/uyum” kelimelerini mutlaka yaz."
  },

  {
    q: "Aşağıdakilerden hangisi doğru media query örneğidir?",
    t: "mcq",
    o: [
      "@media max-width 768px { .menu{display:none;} }",
      "@media (max-width: 768px) { .menu{display:none;} }",
      "@media { max-width:768px; .menu:none; }",
      "@media screen 768px { .menu{display:none;} }",
      "@media (width<768px) { .menu{display:none;} }"
    ],
    a: "@media (max-width: 768px) { .menu{display:none;} }",
    difficulty: "medium",
    week: 10,
    topic: "media query",
    importance: "high",
    explanation:
      "Taktik: Parantezli yazım: (max-width: 768px). En çok yazım hatası burada çıkar."
  },

  // ==== Transitions, Animation, @keyframes ====

  {
    q: "Transition’ın temel amacı nedir?",
    t: "mcq",
    o: [
      "Sayfayı yenilemek",
      "Bir durum değişiminde (örn hover) yumuşak geçiş sağlamak",
      "HTML’i doğrulamak",
      "Veri tabanı bağlamak",
      "Z-index’i otomatik ayarlamak"
    ],
    a: "Bir durum değişiminde (örn hover) yumuşak geçiş sağlamak",
    difficulty: "easy",
    week: 10,
    topic: "transition",
    importance: "high",
    explanation:
      "Örnek: .btn{ transition:0.3s; } .btn:hover{ transform:scale(1.05); }  Taktik: Transition = geçiş, Animation = sürekli/ana kareli hareket."
  },

  {
    q: "Aşağıdakilerden hangisi doğru transition yazımıdır?",
    t: "mcq",
    o: [
      ".box{ transition=0.3s; }",
      ".box{ transition: 0.3s; }",
      ".box{ transition: seconds(0.3); }",
      ".box{ transform: transition(0.3s); }",
      ".box{ transition: 0.3; }"
    ],
    a: ".box{ transition: 0.3s; }",
    difficulty: "medium",
    week: 10,
    topic: "transition syntax",
    importance: "medium",
    explanation:
      "Taktik: Birim s (saniye) unutulmaz. 0.3 tek başına hatalı şık olarak gelebilir."
  },

  {
    q: "Aşağıdaki kodun amacı nedir?\n@keyframes pulse{0%{transform:scale(1);}100%{transform:scale(1.05);}}",
    t: "mcq",
    o: [
      "CSS dosyasını import eder",
      "Animasyonun karelerini (başlangıç-bitiş) tanımlar",
      "Butona hover ekler",
      "Z-index’i artırır",
      "Grid şablonu kurar"
    ],
    a: "Animasyonun karelerini (başlangıç-bitiş) tanımlar",
    difficulty: "medium",
    week: 10,
    topic: "@keyframes",
    importance: "high",
    explanation:
      "Taktik: Animation sorularında iki parça vardır: 1) @keyframes tanımı 2) animation: ... ile elemana uygulama."
  },

  {
    q: "Aşağıdaki kullanım animasyonu elemana uygular:\n.box{ animation: pulse 1s infinite alternate; }\nBu satırdaki “infinite” ne demektir?",
    t: "mcq",
    o: [
      "Animasyon 1 kez çalışır",
      "Animasyon sonsuz tekrar eder",
      "Animasyon sadece hover’da çalışır",
      "Animasyon kapalıdır",
      "Animasyon hızını 0 yapar"
    ],
    a: "Animasyon sonsuz tekrar eder",
    difficulty: "easy",
    week: 10,
    topic: "animation",
    importance: "medium",
    explanation:
      "Taktik: infinite = sınırsız tekrar. iteration-count mantığı."
  },

  // ==== Flexbox (tek boyut) ====

  {
    q: "Flexbox için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "İki boyutlu (satır+sütun) düzen sistemidir",
      "Tek boyutlu (satır veya sütun) hizalama/düzen sistemidir",
      "Sadece font değiştirir",
      "Sadece z-index yönetir",
      "Sadece tablo oluşturur"
    ],
    a: "Tek boyutlu (satır veya sütun) hizalama/düzen sistemidir",
    difficulty: "easy",
    week: 10,
    topic: "flexbox",
    importance: "high",
    explanation:
      "Taktik: Flex = 1D. Grid = 2D. Finalde karşılaştırma sorusu gelir."
  },

  {
    q: "Flex container yapmak için doğru kod hangisidir?",
    t: "mcq",
    o: [
      ".row{ display:flex; }",
      ".row{ flex:display; }",
      ".row{ display:flexbox; }",
      ".row{ flex-on:true; }",
      ".row{ position:flex; }"
    ],
    a: ".row{ display:flex; }",
    difficulty: "easy",
    week: 10,
    topic: "display:flex",
    importance: "high",
    explanation:
      "Taktik: flex başlatmak = display:flex. Sonra justify-content ve align-items gelir."
  },

  {
    q: "Aşağıdakilerden hangisi ana eksende (main axis) hizalama yapar?",
    t: "mcq",
    o: ["align-items", "justify-content", "z-index", "overflow", "opacity"],
    a: "justify-content",
    difficulty: "medium",
    week: 10,
    topic: "flex hizalama",
    importance: "high",
    explanation:
      "Taktik: justify = ana eksen, align-items = çapraz eksen. Flex-direction değişirse eksen de değişir."
  },

  {
    q: "Aşağıdaki kod ne yapar?\n.container{ display:flex; flex-direction:column; }",
    t: "mcq",
    o: [
      "Öğeleri soldan sağa dizer",
      "Öğeleri yukarıdan aşağı (sütun) dizer",
      "Öğeleri grid yapar",
      "Öğeleri görünmez yapar",
      "Öğeleri sticky yapar"
    ],
    a: "Öğeleri yukarıdan aşağı (sütun) dizer",
    difficulty: "medium",
    week: 10,
    topic: "flex-direction",
    importance: "medium",
    explanation:
      "Taktik: column olunca main axis dikey olur; justify-content artık dikey hizalar."
  },

  // ==== Grid (iki boyut) ====

  {
    q: "CSS Grid için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Tek boyutlu sistemdir",
      "İki boyutlu (satır + sütun) düzen sistemidir",
      "Sadece animasyon yapar",
      "Sadece hover üretir",
      "Sadece border ekler"
    ],
    a: "İki boyutlu (satır + sütun) düzen sistemidir",
    difficulty: "easy",
    week: 10,
    topic: "grid",
    importance: "high",
    explanation:
      "Taktik: Grid = 2D. Flex = 1D. Bu cümle finalde birebir çıkar."
  },

  {
    q: "Aşağıdakilerden hangisi grid container yapar?",
    t: "mcq",
    o: [
      ".grid{ display:grid; }",
      ".grid{ grid:true; }",
      ".grid{ display:table; }",
      ".grid{ position:grid; }",
      ".grid{ grid-template:true; }"
    ],
    a: ".grid{ display:grid; }",
    difficulty: "easy",
    week: 10,
    topic: "display:grid",
    importance: "high",
    explanation:
      "Taktik: Grid başlatmak = display:grid. Sonra template’ler gelir."
  },

  {
    q: "Aşağıdaki kodun anlamı nedir?\n.grid{ grid-template-columns: 1fr 1fr 1fr; }",
    t: "mcq",
    o: [
      "3 sütun oluşturur, her biri eşit genişlikte",
      "3 satır oluşturur",
      "3 elemanı gizler",
      "Sadece kenarlık çizer",
      "Opacity ayarlar"
    ],
    a: "3 sütun oluşturur, her biri eşit genişlikte",
    difficulty: "medium",
    week: 10,
    topic: "grid-template-columns",
    importance: "high",
    explanation:
      "Taktik: fr = kalan alanın paylaştırılması. 1fr 1fr 1fr = eşit 3 sütun."
  },

  {
    q: "Grid/Flex düzenlerinde boşluk bırakmak için kullanılan yaygın özellik hangisidir?",
    t: "mcq",
    o: ["gap", "padding-only", "space", "border-gap", "float-gap"],
    a: "gap",
    difficulty: "easy",
    week: 10,
    topic: "gap",
    importance: "medium",
    explanation:
      "Taktik: gap hem grid hem flex’te kullanılabilir. Eski yöntem: margin ile uğraşmak."
  },

  // ==== Bootstrap (kütüphane) – CSS perspektifi ====

  {
    q: "Bootstrap için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Bir programlama dilidir",
      "Hazır tasarım bileşenleri sağlayan CSS/JS kütüphanesidir (buton, navbar, grid vb.)",
      "Bir veritabanıdır",
      "Sadece tarayıcı eklentisidir",
      "Sadece animasyon motorudur"
    ],
    a: "Hazır tasarım bileşenleri sağlayan CSS/JS kütüphanesidir (buton, navbar, grid vb.)",
    difficulty: "easy",
    week: 10,
    topic: "bootstrap",
    importance: "medium",
    explanation:
      "Taktik: “Kütüphane” kelimesini görünce: projeye ekleme gerekir (CDN link vb.)."
  },

  // ==== Kalan CSS Başlıkları: display, dropdown, buttons, optimization ====

  {
    q: "Aşağıdakilerden hangisi elemanı tamamen kaldırır (sayfada yer de kaplamaz)?",
    t: "mcq",
    o: ["visibility:hidden;", "display:none;", "opacity:0;", "z-index:-1;", "filter:blur(2px);"],
    a: "display:none;",
    difficulty: "medium",
    week: 10,
    topic: "display:none",
    importance: "high",
    explanation:
      "Taktik: opacity:0 görünmez yapar ama yer kaplar ve tıklanabilir kalabilir; display:none yok eder."
  },

  {
    q: "Aşağıdakilerden hangisi doğru CSS buton hover + transition örneğidir?",
    t: "mcq",
    o: [
      ".btn{ transition:0.3s; } .btn:hover{ transform:scale(1.05); }",
      ".btn{ hover:0.3s; } .btn:transition{ scale:1.05; }",
      ".btn{ transform:hover(1.05); }",
      ".btn:hover{ transition:scale(1.05); }",
      ".btn{ animation:hover 0.3s; }"
    ],
    a: ".btn{ transition:0.3s; } .btn:hover{ transform:scale(1.05); }",
    difficulty: "medium",
    week: 10,
    topic: "css button",
    importance: "medium",
    explanation:
      "Taktik: Transition normal durumda yazılır; hover’da değişen değer yazılır."
  },

  {
    q: "“Optimization” açısından CSS için en doğru genel yaklaşım hangisidir?",
    t: "mcq",
    o: [
      "Tüm CSS’i inline yazmak en hızlıdır",
      "Harici CSS dosyası (external) kullanıp gereksiz tekrarları azaltmak daha düzenli/ölçeklenebilir olur",
      "Her elemana !important yazmak performansı artırır",
      "Sadece @import kullanmak her zaman en iyisidir",
      "CSS yazmak yerine HTML’e style eklemek zorunludur"
    ],
    a: "Harici CSS dosyası (external) kullanıp gereksiz tekrarları azaltmak daha düzenli/ölçeklenebilir olur",
    difficulty: "medium",
    week: 10,
    topic: "optimization",
    importance: "medium",
    explanation:
      "Taktik: Sınavda 'neden external?' sorusu: tekrar azaltır, bakım kolay, dosya düzeni iyi."
  },

  // ==== 50'ye tamamlamak için ek, doğrudan nottaki başlıklara bağlı kısa klasik sorular ====

  {
    q: "Aşağıdaki kod hangi etkiyi verir?\nimg{ opacity:0.5; }",
    t: "mcq",
    o: [
      "Resmi büyütür",
      "Resmi %50 saydam yapar",
      "Resmi yuvarlak yapar",
      "Resmi sola alır",
      "Resmi gizler (yer kaplamaz)"
    ],
    a: "Resmi %50 saydam yapar",
    difficulty: "easy",
    week: 10,
    topic: "img opacity",
    importance: "high",
    explanation:
      "Taktik: opacity 0.5 = yarı saydam. display:none değildir."
  },

  {
    q: "Aşağıdaki kodda hangi ifade DOĞRUDUR?\n.text{ position:absolute; z-index:2; }\n.photo{ position:relative; z-index:1; }",
    t: "mcq",
    o: [
      ".photo üstte görünür",
      ".text üstte görünür",
      "İkisi aynı katmandadır, z-index işe yaramaz",
      "z-index sadece flex’te çalışır",
      "z-index sadece hover’da çalışır"
    ],
    a: ".text üstte görünür",
    difficulty: "easy",
    week: 10,
    topic: "z-index",
    importance: "high",
    explanation:
      "Taktik: Büyük z-index öne gelir. Üst üste gelme sorularında sayılara bak."
  },

  {
    q: "Aşağıdakilerden hangisi doğru “taşanı kes” (overflow) seçeneğidir?",
    t: "mcq",
    o: ["overflow: visible;", "overflow: hidden;", "overflow: auto;", "overflow: sticky;", "overflow: float;"],
    a: "overflow: hidden;",
    difficulty: "easy",
    week: 10,
    topic: "overflow hidden",
    importance: "medium",
    explanation:
      "Taktik: hidden = kes, auto = gerekirse kaydır, scroll = her zaman kaydır."
  },

  // Toplam 50 soru olacak şekilde (yukarıdaki seti 50’ye tamamlamak için)
  // Not: Aşağıdaki 20 soru, sadece CSS başlıklarını kapsar ve kod örnekleri içerir.

  {
    q: "Aşağıdakilerden hangisi doğru “metin rengi” ayarlamadır?",
    t: "mcq",
    o: [
      "p{ background-color: red; }",
      "p{ color: red; }",
      "p{ font-color: red; }",
      "p{ text-color: red; }",
      "p{ color-background: red; }"
    ],
    a: "p{ color: red; }",
    difficulty: "easy",
    week: 10,
    topic: "color",
    importance: "high",
    explanation: "Taktik: color = yazı rengi. background-color = arka plan."
  },

  {
    q: "Aşağıdakilerden hangisi doğru padding örneğidir?",
    t: "mcq",
    o: [
      ".box{ pedding:10px; }",
      ".box{ padding:10px; }",
      ".box{ pad:10px; }",
      ".box{ inside-margin:10px; }",
      ".box{ padding:10; }"
    ],
    a: ".box{ padding:10px; }",
    difficulty: "easy",
    week: 10,
    topic: "padding",
    importance: "high",
    explanation: "Taktik: Yazım hatası sorusu: pedding değil padding. Birimi de unutma (10px)."
  },

  {
    q: "Aşağıdakilerden hangisi doğru margin örneğidir?",
    t: "mcq",
    o: [
      ".box{ margin:20px; }",
      ".box{ margin=20px; }",
      ".box{ outside:20px; }",
      ".box{ border:20px; }",
      ".box{ margin:20; }"
    ],
    a: ".box{ margin:20px; }",
    difficulty: "easy",
    week: 10,
    topic: "margin",
    importance: "high",
    explanation: "Taktik: margin dış boşluk. 20 tek başına genelde yanlış; 20px yaz."
  },

  {
    q: "Aşağıdaki selector neyi seçer?\n.box > p",
    t: "mcq",
    o: [
      ".box içindeki tüm p’ler (torunlar dahil)",
      ".box’un direkt çocuğu olan p’ler",
      "Sadece id’si box olan p",
      "Sadece class’ı p olan box",
      "Sadece hover’daki p"
    ],
    a: ".box’un direkt çocuğu olan p’ler",
    difficulty: "hard",
    week: 10,
    topic: "child selector",
    importance: "medium",
    explanation: "Taktik: '>' = direkt çocuk. Boşluk olsaydı tüm torunlar dahil olurdu."
  },

  {
    q: "Aşağıdaki kod ne yapar?\n.hidden{ display:none; }",
    t: "mcq",
    o: [
      "Elemanı saydam yapar",
      "Elemanı yokmuş gibi kaldırır",
      "Elemanı sadece görünmez yapar ama yer kaplar",
      "Elemanı öne getirir",
      "Elemanı sola yaslar"
    ],
    a: "Elemanı yokmuş gibi kaldırır",
    difficulty: "easy",
    week: 10,
    topic: "display:none",
    importance: "high",
    explanation: "Taktik: display:none = akıştan çıkarır."
  },

  {
    q: "Aşağıdakilerden hangisi doğru “inline” açıklamasıdır?",
    t: "mcq",
    o: [
      "Satırı tamamen kaplar",
      "Sadece içerik kadar yer kaplar, width/height genelde almaz",
      "Her zaman alt satıra iner",
      "Z-index’i otomatik ayarlar",
      "Sadece grid’de çalışır"
    ],
    a: "Sadece içerik kadar yer kaplar, width/height genelde almaz",
    difficulty: "medium",
    week: 10,
    topic: "inline",
    importance: "medium",
    explanation: "Taktik: inline = span gibi; block = div gibi."
  },

  {
    q: "position: static için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Default’tur; top/left ile kaymaz",
      "Akıştan çıkar ve üst üste biner",
      "Scroll ile sabit kalır",
      "Yapışkan menü yapar",
      "Sadece z-index’i artırır"
    ],
    a: "Default’tur; top/left ile kaymaz",
    difficulty: "medium",
    week: 10,
    topic: "position static",
    importance: "medium",
    explanation: "Taktik: static = normal akış. Konumlandırma istiyorsan relative/absolute/fixed/sticky."
  },

  {
    q: "Absolute eleman, kendine referans olarak en yakın hangi atayı kullanır?",
    t: "mcq",
    o: [
      "Her zaman body",
      "En yakın position verilmiş ata (relative/absolute/fixed/sticky)",
      "En yakın float verilmiş ata",
      "En yakın z-index verilmiş ata",
      "Her zaman html"
    ],
    a: "En yakın position verilmiş ata (relative/absolute/fixed/sticky)",
    difficulty: "hard",
    week: 10,
    topic: "absolute referans",
    importance: "high",
    explanation: "Taktik: Bu soru finalde çok gelir. Parent’a position:relative verilmezse absolute bazen body’ye göre gider."
  },

  {
    q: "Aşağıdaki kodda .child nereye göre konumlanır?\n.parent{ } \n.child{ position:absolute; top:0; left:0; }",
    t: "mcq",
    o: [
      "Kesinlikle .parent’a göre",
      "En yakın position’lı ata olmadığı için sayfanın (genelde body) başlangıcına göre",
      "Her zaman ekranın ortasına",
      "Sadece grid alanına göre",
      "Z-index’e göre"
    ],
    a: "En yakın position’lı ata olmadığı için sayfanın (genelde body) başlangıcına göre",
    difficulty: "hard",
    week: 10,
    topic: "absolute without relative",
    importance: "high",
    explanation: "Taktik: Absolute kullanacaksan çoğu zaman parent’a position:relative ekle."
  },

  {
    q: "Aşağıdakilerden hangisi doğru text-shadow kullanımına örnektir?",
    t: "mcq",
    o: [
      "h1{ text-shadow: 1px 1px 2px rgba(0,0,0,.4); }",
      "h1{ shadow-text: 1px; }",
      "h1{ text-shadow: rgba(0,0,0,.4); }",
      "h1{ text-shadow: 1 1 2; }",
      "h1{ text-shadow: on; }"
    ],
    a: "h1{ text-shadow: 1px 1px 2px rgba(0,0,0,.4); }",
    difficulty: "medium",
    week: 10,
    topic: "text-shadow",
    importance: "medium",
    explanation: "Taktik: box-shadow kutuya, text-shadow yazıya."
  },

  {
    q: "Aşağıdakilerden hangisi doğru “border-radius: 12px;” etkisidir?",
    t: "mcq",
    o: [
      "Köşeleri yuvarlatır",
      "Yazıyı kalınlaştırır",
      "Resmi saydam yapar",
      "Elemanı yapışkan yapar",
      "Elemanı grid yapar"
    ],
    a: "Köşeleri yuvarlatır",
    difficulty: "easy",
    week: 10,
    topic: "border-radius px",
    importance: "medium",
    explanation: "Taktik: px = hafif yuvarlama, 50% = tam daire (karede)."
  },

  {
    q: "Aşağıdaki kod neyi sağlar?\n.modal{ position:fixed; top:0; left:0; width:100%; height:100%; }",
    t: "mcq",
    o: [
      "Elemanı sadece parent’a göre konumlandırır",
      "Elemanı ekrana sabitler ve tüm ekranı kaplatabilir (modal mantığı)",
      "Elemanı float yapar",
      "Elemanı grid yapar",
      "Elemanı görünmez yapar"
    ],
    a: "Elemanı ekrana sabitler ve tüm ekranı kaplatabilir (modal mantığı)",
    difficulty: "medium",
    week: 10,
    topic: "modal fikri (CSS)",
    importance: "medium",
    explanation: "Taktik: Modal sorularında fixed + full-screen (100%/100vh) kalıbı çıkar."
  },

  {
    q: "Aşağıdakilerden hangisi doğru “opacity resme saydamlık verir” ifadesini gösterir?",
    t: "mcq",
    o: [
      "img{ opacity: 60%; }",
      "img{ opacity: 0.6; }",
      "img{ opacity: 6; }",
      "img{ opacity: sixty; }",
      "img{ transparent:0.6; }"
    ],
    a: "img{ opacity: 0.6; }",
    difficulty: "easy",
    week: 10,
    topic: "opacity kullanım",
    importance: "high",
    explanation: "Taktik: opacity 0-1 aralığı. % ile yazmak genelde yanlış şık olur."
  },

  {
    q: "Aşağıdaki kod ne yapar?\n.nav{ position:sticky; top:0; }",
    t: "mcq",
    o: [
      "Sayfada akmaz, her zaman en alta gider",
      "Scroll’da belirli noktadan sonra üstte yapışır",
      "Elemanı saydam yapar",
      "Elemanı float yapar",
      "Elemanı kaldırır"
    ],
    a: "Scroll’da belirli noktadan sonra üstte yapışır",
    difficulty: "easy",
    week: 10,
    topic: "sticky",
    importance: "high",
    explanation: "Taktik: sticky’nin çalışması için top gibi eşik şarttır."
  },

  {
    q: "Aşağıdaki CSS ile hangisi hedeflenir?\n.dd{ position:relative; }\n.dd-content{ position:absolute; top:100%; left:0; }",
    t: "mcq",
    o: [
      "Dropdown içeriğini parent’ın altına açmak",
      "Resmi büyütmek",
      "Metni ortalamak",
      "Sayfayı responsive yapmak",
      "Grid kolon sayısını artırmak"
    ],
    a: "Dropdown içeriğini parent’ın altına açmak",
    difficulty: "hard",
    week: 10,
    topic: "dropdown konum",
    importance: "high",
    explanation: "Taktik: Dropdown’da parent relative, içerik absolute olur. top:100% → altına getirir."
  },

  {
    q: "Aşağıdakilerden hangisi CSS3 ile daha sık ilişkilidir (modern özellik)?",
    t: "mcq",
    o: ["transition", "table", "td", "href", "src"],
    a: "transition",
    difficulty: "easy",
    week: 10,
    topic: "CSS3",
    importance: "medium",
    explanation: "Taktik: CSS3 deyince transition/animation/flexbox/grid gibi modernler akla gelir."
  },

  {
    q: "Aşağıdaki kod ne yapar?\n.box{ width:300px; max-width:100%; }",
    t: "mcq",
    o: [
      "Her zaman 300px olur, ekrana sığmazsa taşar",
      "Normalde 300px; küçük ekranda 100%’e kadar küçülerek taşmayı engeller",
      "Her zaman 100% olur",
      "Elemanı gizler",
      "Elemanı absolute yapar"
    ],
    a: "Normalde 300px; küçük ekranda 100%’e kadar küçülerek taşmayı engeller",
    difficulty: "hard",
    week: 10,
    topic: "max-width pratik",
    importance: "high",
    explanation: "Taktik: max-width responsive kurtarıcıdır. Taşma sorularında bu kalıp çıkar."
  },

  {
    q: "Aşağıdakilerden hangisi doğru “overflow: scroll” açıklamasıdır?",
    t: "mcq",
    o: [
      "Gerekiyorsa scroll gösterir",
      "Her durumda scroll çubuğu gösterir",
      "Taşanı keser",
      "Taşanı görünür yapar",
      "Elemanı yapışkan yapar"
    ],
    a: "Her durumda scroll çubuğu gösterir",
    difficulty: "medium",
    week: 10,
    topic: "overflow scroll",
    importance: "medium",
    explanation: "Taktik: scroll = zorla çubuk, auto = gerekirse çubuk."
  },

  {
    q: "Aşağıdakilerden hangisi doğru “@import” kullanım notudur?",
    t: "mcq",
    o: [
      "@import sadece HTML içinde kullanılır",
      "@import genelde CSS dosyasının üstünde kullanılır",
      "@import z-index’i artırır",
      "@import sadece resimlerde çalışır",
      "@import yalnızca margin ayarlar"
    ],
    a: "@import genelde CSS dosyasının üstünde kullanılır",
    difficulty: "medium",
    week: 10,
    topic: "@import kuralı",
    importance: "medium",
    explanation: "Taktik: @import kuralını ortada yazmak bazı durumlarda sorun çıkarabilir; sınavda “en üstte” diye geçer."
  },

  {
    q: "Aşağıdaki kodda hangisi doğrudur?\n.box{ margin:10px; padding:10px; border:2px solid black; }\nBu elemanın “kutu” katmanları hangi sıradadır?",
    t: "mcq",
    o: [
      "padding → content → margin → border",
      "content → padding → border → margin",
      "margin → border → padding → content",
      "border → margin → padding → content",
      "content → border → padding → margin"
    ],
    a: "content → padding → border → margin",
    difficulty: "easy",
    week: 10,
    topic: "box model tekrar",
    importance: "high",
    explanation: "Taktik: İçten dışa: content, padding, border, margin."
  },

  {
    q: "Aşağıdakilerden hangisi “div” gibi block davranışını değiştirip yan yana dizmeye yardımcı olur?",
    t: "mcq",
    o: [
      "display:none",
      "display:inline-block",
      "position:sticky",
      "overflow:hidden",
      "filter:blur(2px)"
    ],
    a: "display:inline-block",
    difficulty: "medium",
    week: 10,
    topic: "inline-block",
    importance: "medium",
    explanation: "Taktik: inline-block yan yana getirir ve ölçü aldırır."
  },

  {
    q: "Aşağıdakilerden hangisi doğru “CSS dropdown text” (hover’da başka yazı gösterme) mantığıdır?",
    t: "mcq",
    o: [
      ".tip{display:none;} .wrap:hover .tip{display:block;}",
      ".tip{position:static;} .wrap:focus .tip{display:none;}",
      ".tip{z-index:0;} .wrap:hover .tip{opacity:0;}",
      ".tip{float:left;} .wrap:hover .tip{float:right;}",
      ".tip{grid:1;} .wrap:hover .tip{grid:2;}"
    ],
    a: ".tip{display:none;} .wrap:hover .tip{display:block;}",
    difficulty: "medium",
    week: 10,
    topic: "hover ile tooltip/dropdown",
    importance: "high",
    explanation: "Taktik: Hover ile gizliyi açma = display none → hover’da block."
  },

  {
    q: "Aşağıdakilerden hangisi doğru “Flexbox tek boyut / Grid iki boyut” cümlesini kodla başlatır?",
    t: "mcq",
    o: [
      "Flex: .c{display:flex;}  Grid: .g{display:grid;}",
      "Flex: .c{display:grid;}  Grid: .g{display:flex;}",
      "Flex: .c{position:flex;} Grid: .g{position:grid;}",
      "Flex: .c{flex:true;}     Grid: .g{grid:true;}",
      "Flex: .c{float:flex;}   Grid: .g{float:grid;}"
    ],
    a: "Flex: .c{display:flex;}  Grid: .g{display:grid;}",
    difficulty: "easy",
    week: 10,
    topic: "flex vs grid",
    importance: "high",
    explanation: "Taktik: display:flex ve display:grid kalıplarını ezberle; finalde direkt çıkar."
  }
];
