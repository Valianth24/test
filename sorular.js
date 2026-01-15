// Photoshop Metin (Type) + Tipografi + Adjustment Layers + Blending Modes
// + Adobe Illustrator Giriş + Workspace + Bleed + Raster Effects + Araçlar
// 50 Soruluk Öğretici Soru Bankası (MCQ)
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]

window.questionBank = [
  // =========================================================
  // ============ WEEK 1: PHOTOSHOP METİN & TİPOGRAFİ (18) ====
  // =========================================================
  {
    q: "Bu dersin (Photoshop metin araçları) temel amacı aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Sadece fotoğraf kırpmayı öğretmek",
      "Metin (text) araçlarını etkili kullanmak ve yazıyı kompozisyona doğru yerleştirmek",
      "Sadece 3D modelleme yapmak",
      "Sadece dosya formatlarını ezberlemek",
      "Sadece renk modlarını değiştirmek"
    ],
    a: "Metin (text) araçlarını etkili kullanmak ve yazıyı kompozisyona doğru yerleştirmek",
    difficulty: "easy",
    week: 1,
    topic: "Ders amacı - metin",
    importance: "high",
    explanation:
      "Amaç; Photoshop’ta metni profesyonel biçimde ekleyip düzenlemek, tipografi ilkelerini uygulamak ve metnin mesaj iletimindeki rolünü kavramaktır."
  },
  {
    q: "Photoshop’ta metin eklemek için kullanılan temel araç hangisidir?",
    t: "mcq",
    o: ["Type Tool (T)", "Move Tool (V)", "Brush Tool (B)", "Crop Tool (C)", "Lasso Tool (L)"],
    a: "Type Tool (T)",
    difficulty: "easy",
    week: 1,
    topic: "Type Tool - giriş",
    importance: "high",
    explanation:
      "Metin ekleme aracı Type Tool’dur ve kısayolu T’dir."
  },
  {
    q: "Type Tool ile hangi iki yönlü metin aracı kullanılabilir?",
    t: "mcq",
    o: [
      "Horizontal Type Tool ve Vertical Type Tool",
      "Move Tool ve Rotate Tool",
      "Brush Tool ve Eraser Tool",
      "Curves ve Levels",
      "Pen Tool ve Shape Tool"
    ],
    a: "Horizontal Type Tool ve Vertical Type Tool",
    difficulty: "easy",
    week: 1,
    topic: "Type Tool - türler",
    importance: "medium",
    explanation:
      "Photoshop’ta metin yatay (Horizontal) veya dikey (Vertical) olarak yazılabilir."
  },
  {
    q: "Ekrana tek bir tıklama ile oluşturulan metin türü hangisidir?",
    t: "mcq",
    o: ["Nokta Metin (Point Text)", "Paragraf Metni (Paragraph Text)", "Vektör Metin", "Maskeli Metin", "Raster Metin"],
    a: "Nokta Metin (Point Text)",
    difficulty: "easy",
    week: 1,
    topic: "Point Text",
    importance: "high",
    explanation:
      "Type Tool ile ekrana tıklarsan Point Text oluşur; genellikle kısa başlıklar/logotip benzeri metinlerde kullanılır."
  },
  {
    q: "Sürükleyerek kutu çizip oluşturulan metin türü hangisidir?",
    t: "mcq",
    o: ["Nokta Metin (Point Text)", "Paragraf Metni (Paragraph Text)", "Serif Metin", "Vektör Maske Metni", "Clipping Text"],
    a: "Paragraf Metni (Paragraph Text)",
    difficulty: "easy",
    week: 1,
    topic: "Paragraph Text",
    importance: "high",
    explanation:
      "Sürükleyerek bir metin kutusu oluşturursan Paragraph Text olur; uzun metin blokları için idealdir."
  },
  {
    q: "Kısa başlıklar ve logotip benzeri metinler için hangisi daha uygundur?",
    t: "mcq",
    o: ["Paragraf Metni", "Nokta Metin", "Gradient Map", "Curves", "Blend Mode: Difference"],
    a: "Nokta Metin",
    difficulty: "easy",
    week: 1,
    topic: "Metin seçimi - kullanım",
    importance: "high",
    explanation:
      "Kısa metinlerde Point Text pratik ve kontrolü kolaydır. Paragraf metni ise uzun içerik için tasarlanmıştır."
  },
  {
    q: "Character Panel’in temel görevi aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Katmanları gruplayıp sıraya dizmek",
      "Metin biçimlendirmesi (font, size, leading, tracking, renk) yapmak",
      "Görseli kırpmak",
      "Dosyayı PDF’e dönüştürmek",
      "Renk modunu CMYK’a çevirmek"
    ],
    a: "Metin biçimlendirmesi (font, size, leading, tracking, renk) yapmak",
    difficulty: "easy",
    week: 1,
    topic: "Character Panel",
    importance: "high",
    explanation:
      "Character Panel; yazı tipi, boyut, satır aralığı (leading), harf aralığı (tracking), ölçek ve renk gibi tipografi ayarlarının merkezidir."
  },
  {
    q: "Satır aralığına (leading) karşılık gelen kavram hangisidir?",
    t: "mcq",
    o: ["Harf aralığı", "Satır aralığı", "Girinti", "İki yana yaslama", "Kontrast"],
    a: "Satır aralığı",
    difficulty: "easy",
    week: 1,
    topic: "Leading",
    importance: "high",
    explanation:
      "Leading; satırların birbirine olan dikey mesafesidir. Okunabilirliği doğrudan etkiler."
  },
  {
    q: "Harf aralığına (tracking) karşılık gelen ifade hangisidir?",
    t: "mcq",
    o: ["Satır aralığı", "Harflerin birbirine uzaklığı", "Paragraf aralığı", "Kenar boşluğu", "Renk doygunluğu"],
    a: "Harflerin birbirine uzaklığı",
    difficulty: "easy",
    week: 1,
    topic: "Tracking",
    importance: "medium",
    explanation:
      "Tracking; metindeki harfler arası genel aralığı ifade eder. Aşırı artırmak/azaltmak okunabilirliği bozar."
  },
  {
    q: "Ders notuna göre 12 pt yazı boyutunda yaygın tercih edilen leading değeri hangisidir?",
    t: "mcq",
    o: ["12 pt", "13 pt", "14 pt", "18 pt", "24 pt"],
    a: "14 pt",
    difficulty: "medium",
    week: 1,
    topic: "Leading oranı",
    importance: "medium",
    explanation:
      "Örnek olarak 12 pt yazıda 14 pt leading, satırların nefes almasını ve okunabilirliği artırmayı hedefler."
  },
  {
    q: "Paragraph Panel en çok hangi iş için kullanılır?",
    t: "mcq",
    o: [
      "Metni hizalama, girinti ve paragraf düzenlerini yönetmek",
      "Renk uzayını Lab’a çevirmek",
      "Katmanı rasterize etmek",
      "Görseli keskinleştirmek",
      "Blend mode gruplarını değiştirmek"
    ],
    a: "Metni hizalama, girinti ve paragraf düzenlerini yönetmek",
    difficulty: "easy",
    week: 1,
    topic: "Paragraph Panel",
    importance: "high",
    explanation:
      "Sola/sağa/ortaya hizalama, iki yana yaslama, girinti (indent) ve paragraf aralıkları Paragraph Panel’den kontrol edilir."
  },
  {
    q: "Dergi, katalog veya broşür gibi çok metinli tasarımlarda özellikle hangi panel büyük kolaylık sağlar?",
    t: "mcq",
    o: ["Histogram", "Paragraph Panel", "Swatches", "Navigator", "History"],
    a: "Paragraph Panel",
    difficulty: "easy",
    week: 1,
    topic: "Çok metinli tasarım",
    importance: "medium",
    explanation:
      "Çok metinli işlerde paragraf akışı, hizalama ve girinti yönetimi kritiktir; Paragraph Panel bunun için tasarlanmıştır."
  },
  {
    q: "Tipografi en doğru hangi cümleyle özetlenir?",
    t: "mcq",
    o: [
      "Sadece güzel font seçmektir",
      "Okunabilirlik, hiyerarşi ve estetik düzenin birlikte yönetilmesidir",
      "Sadece metni büyük yazmaktır",
      "Sadece efekt eklemektir",
      "Sadece yazıyı eğmektir"
    ],
    a: "Okunabilirlik, hiyerarşi ve estetik düzenin birlikte yönetilmesidir",
    difficulty: "medium",
    week: 1,
    topic: "Tipografi ilkeleri",
    importance: "high",
    explanation:
      "Tipografi; metnin okunur olması, başlık-alt başlık-gövde düzeni (hiyerarşi) ve görsel bütünlük hedeflerini birlikte taşır."
  },
  {
    q: "Serif yazı tipleri (ör. Times New Roman) ders notuna göre hangi ortamda okunabilirliği artırma eğilimindedir?",
    t: "mcq",
    o: ["Dijital ekranlar", "Basılı materyaller", "Sadece logo tasarımı", "Sadece ikon", "Sadece animasyon"],
    a: "Basılı materyaller",
    difficulty: "easy",
    week: 1,
    topic: "Serif vs Sans-serif",
    importance: "medium",
    explanation:
      "Serif fontlar geleneksel olarak basılı materyallerde okunabilirliği destekleyebilir; sans-serif ise dijitalde sıklıkla tercih edilir."
  },
  {
    q: "Sans-serif yazı tipleri (ör. Helvetica, Arial) ders notuna göre daha çok hangi ortam için uygundur?",
    t: "mcq",
    o: ["Basılı materyaller", "Dijital ortamlar", "Sadece gravür", "Sadece serigrafi", "Sadece 3D baskı"],
    a: "Dijital ortamlar",
    difficulty: "easy",
    week: 1,
    topic: "Sans-serif",
    importance: "medium",
    explanation:
      "Sans-serif fontlar ekranlarda daha temiz ve net algılanabildiği için dijital tasarımda çok kullanılır."
  },
  {
    q: "Aynı tasarımda çok fazla farklı font kullanmanın en olası sonucu hangisidir?",
    t: "mcq",
    o: [
      "Görsel karmaşa ve profesyonellik kaybı",
      "Dosya boyutunun her zaman küçülmesi",
      "Metnin otomatik hizalanması",
      "Renklerin otomatik düzelmesi",
      "Vektör kalite artışı"
    ],
    a: "Görsel karmaşa ve profesyonellik kaybı",
    difficulty: "easy",
    week: 1,
    topic: "Font sayısı",
    importance: "high",
    explanation:
      "Notlara göre genellikle 2–3 fonttan fazlası önerilmez; fazla font, mesajı dağıtır ve tasarımı “dağınık” gösterir."
  },
  {
    q: "Photoshop’ta eklenen her metin varsayılan olarak hangi katman türünde oluşur?",
    t: "mcq",
    o: ["Text Layer (Yazı katmanı)", "Adjustment Layer", "Background Layer", "Smart Object", "Mask Layer"],
    a: "Text Layer (Yazı katmanı)",
    difficulty: "easy",
    week: 1,
    topic: "Text Layer",
    importance: "high",
    explanation:
      "Her metin ayrı bir Text Layer olarak gelir; bu sayede taşınabilir, dönüştürülebilir ve efekt uygulanabilir."
  },
  {
    q: "Metnin düzenlenebilir kalması için hangi davranıştan kaçınmak gerekir?",
    t: "mcq",
    o: [
      "Katmanı rasterize etmek",
      "Metin katmanına çift tıklamak",
      "Ctrl+T ile ölçeklemek",
      "Layer Styles eklemek",
      "Renk değiştirmek"
    ],
    a: "Katmanı rasterize etmek",
    difficulty: "medium",
    week: 1,
    topic: "Rasterize riski",
    importance: "high",
    explanation:
      "Rasterize edersen metin artık piksele dönüşür; font/harf/satır ayarlarını metin gibi düzenlemek zorlaşır. Profesyonel işlerde metni mümkün olduğunca canlı tut."
  },

  // =========================================================
  // ====== WEEK 1 DEVAMI: METİN EFEKTLERİ, MASKE, KOMPOZİSYON (8)
  // =========================================================
  {
    q: "Metni büyütmek, döndürmek ve serbest dönüştürmek için kullanılan komut hangisidir?",
    t: "mcq",
    o: ["Free Transform (Ctrl+T)", "Select All (Ctrl+A)", "Save As (Ctrl+Shift+S)", "Levels (Ctrl+L)", "Curves (Ctrl+M)"],
    a: "Free Transform (Ctrl+T)",
    difficulty: "easy",
    week: 1,
    topic: "Free Transform",
    importance: "high",
    explanation:
      "Ctrl+T ile metni ölçekleyebilir, döndürebilir, konumunu ve yönünü kontrol edebilirsin."
  },
  {
    q: "Metni görselde öne çıkarmak için en sık kullanılan yöntemlerden biri hangisidir?",
    t: "mcq",
    o: [
      "Layer Styles (Katman stilleri) uygulamak",
      "Dosyayı GIF yapmak",
      "Renk modunu Lab’a çevirmek",
      "Artboard eklemek",
      "Mesh Tool kullanmak"
    ],
    a: "Layer Styles (Katman stilleri) uygulamak",
    difficulty: "easy",
    week: 1,
    topic: "Metin efektleri",
    importance: "high",
    explanation:
      "Drop Shadow, Stroke, Bevel & Emboss, Gradient Overlay gibi Layer Styles metne vurgu, derinlik ve kontrast kazandırır."
  },
  {
    q: "Drop Shadow (Gölge) efekti metinde genellikle ne sağlar?",
    t: "mcq",
    o: ["Çözünürlük artırır", "Derinlik ve ayrışma (arka plandan ayırma)", "Fontu değiştirir", "Metni rasterize eder", "Renk uzayı değiştirir"],
    a: "Derinlik ve ayrışma (arka plandan ayırma)",
    difficulty: "easy",
    week: 1,
    topic: "Layer Style - Drop Shadow",
    importance: "medium",
    explanation:
      "Gölge, metni arka plandan ayırır ve görsel hiyerarşi sağlar. Özellikle yoğun arka planlarda okunabilirliği artırabilir."
  },
  {
    q: "Stroke (Çizgi) efekti metinde ne yapar?",
    t: "mcq",
    o: ["Metnin etrafına kenarlık ekler", "Metni bulanıklaştırır", "Metni seçime çevirir", "Metni paragraf yapar", "Renkleri ters çevirir"],
    a: "Metnin etrafına kenarlık ekler",
    difficulty: "easy",
    week: 1,
    topic: "Layer Style - Stroke",
    importance: "medium",
    explanation:
      "Stroke; metnin dışına (veya içine) çizgi ekleyerek arka planla kontrast oluşturur, okunabilirliği destekler."
  },
  {
    q: "Text Mask Tool (Metin maskesi) kullanıldığında metin en temel olarak nasıl davranır?",
    t: "mcq",
    o: [
      "Bir seçim (selection) alanı gibi davranır",
      "Vektör çizgiye dönüşür",
      "Sadece paragraf olur",
      "Renk uzayı otomatik değişir",
      "Katmanları tekleştirir"
    ],
    a: "Bir seçim (selection) alanı gibi davranır",
    difficulty: "medium",
    week: 1,
    topic: "Text Mask",
    importance: "high",
    explanation:
      "Type Mask araçları metni doğrudan seçili alan (selection) haline getirir. Bu seçim, fotoğraf/desen ile doldurularak yaratıcı efekt yapılır."
  },
  {
    q: "Warp Text aracıyla aşağıdakilerden hangisi yapılabilir?",
    t: "mcq",
    o: [
      "Metni dalga/yay/balon gibi şekillerde eğriltmek",
      "Metni CMYK’a çevirmek",
      "Metnin çözünürlüğünü 300 dpi yapmak",
      "Metni otomatik hizalamak",
      "Metni vektöre dönüştürmek"
    ],
    a: "Metni dalga/yay/balon gibi şekillerde eğriltmek",
    difficulty: "easy",
    week: 1,
    topic: "Warp Text",
    importance: "medium",
    explanation:
      "Warp Text; reklam/afiş tasarımlarında dikkat çekmek için metni eğip bükerek form kazandırır."
  },
  {
    q: "Kompozisyon içinde metnin doğru yerleştirilmesi en çok hangi sonucu etkiler?",
    t: "mcq",
    o: [
      "İzleyicinin bakış yönünü ve mesajın algılanma hızını",
      "Dosyanın uzantısını",
      "Ekranın parlaklığını",
      "Vektör noktalarını",
      "PPI değerini otomatik artırmayı"
    ],
    a: "İzleyicinin bakış yönünü ve mesajın algılanma hızını",
    difficulty: "medium",
    week: 1,
    topic: "Metin-kompozisyon ilişkisi",
    importance: "high",
    explanation:
      "Metin, kompozisyonun yönlendirici unsurudur. Başlığın yeri, boşluk kullanımı ve hiyerarşi izleyicinin nereye bakacağını belirler."
  },
  {
    q: "Negative space (boşluk) kullanımı metin için en çok ne sağlar?",
    t: "mcq",
    o: ["Okunabilirliği artırır ve metni nefeslendirir", "Metni rasterize eder", "Renkleri tersine çevirir", "Dosyayı küçültür", "Sadece dekoratif olur"],
    a: "Okunabilirliği artırır ve metni nefeslendirir",
    difficulty: "easy",
    week: 1,
    topic: "Negative space",
    importance: "high",
    explanation:
      "Boşluk; metnin çevresinde “gürültüyü” azaltır, gözün metni kolay okumasını sağlar ve tasarıma profesyonel denge katar."
  },

  // =========================================================
  // ============ WEEK 2: ADJUSTMENT LAYERS & BLENDING (16) ===
  // =========================================================
  {
    q: "Adjustment Layer’ların temel mantığı aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Orijinal pikselleri kalıcı olarak değiştirir",
      "Orijinal piksele dokunmadan ton/renk ayarı yapar (yıkıcı olmayan)",
      "Sadece metin yazmak içindir",
      "Sadece vektör oluşturur",
      "Sadece dosya kaydetmeyi sağlar"
    ],
    a: "Orijinal piksele dokunmadan ton/renk ayarı yapar (yıkıcı olmayan)",
    difficulty: "easy",
    week: 2,
    topic: "Adjustment Layer mantığı",
    importance: "high",
    explanation:
      "Adjustment Layer; düzenlemeyi ayrı bir katman gibi tutar. İstediğin an kapatabilir, maskeyle sınırlayabilir veya ayarı değiştirebilirsin."
  },
  {
    q: "Non-Destructive Editing (Yıkıcı olmayan düzenleme) neden profesyonel işlerde standart kabul edilir?",
    t: "mcq",
    o: [
      "Çünkü dosyayı otomatik küçültür",
      "Çünkü geri alınabilirlik ve esnek kontrol sağlar, orijinali korur",
      "Çünkü renk uzayını otomatik düzeltir",
      "Çünkü tüm katmanları birleştirir",
      "Çünkü sadece hızlıdır"
    ],
    a: "Çünkü geri alınabilirlik ve esnek kontrol sağlar, orijinali korur",
    difficulty: "medium",
    week: 2,
    topic: "Non-destructive",
    importance: "high",
    explanation:
      "Direkt piksele müdahale risklidir. Adjustment Layer ile her şey geri döndürülebilir ve proje boyunca kontrollü ilerlersin."
  },
  {
    q: "Aşağıdakilerden hangisi yaygın bir Adjustment Layer türüdür?",
    t: "mcq",
    o: ["Curves", "Pen Tool", "Artboard Tool", "Knife Tool", "Mesh Tool"],
    a: "Curves",
    difficulty: "easy",
    week: 2,
    topic: "Adjustment Layer türleri",
    importance: "high",
    explanation:
      "Notta geçen örnekler: Brightness/Contrast, Levels, Curves, Exposure, Vibrance, Hue/Saturation, Color Balance, Selective Color, Gradient Map, Black & White vb."
  },
  {
    q: "Adjustment Layer maskesinde beyaz alan neyi ifade eder?",
    t: "mcq",
    o: ["Efektin etkisiz olduğu alan", "Efektin etkili olduğu alan", "Alan tamamen silinir", "Alan vektöre dönüşür", "Renk uzayı değişir"],
    a: "Efektin etkili olduğu alan",
    difficulty: "easy",
    week: 2,
    topic: "Adjustment maskesi",
    importance: "high",
    explanation:
      "Maske mantığı: Beyaz = etki var, Siyah = etki yok, Gri = kısmi etki."
  },
  {
    q: "Adjustment Layer maskesinde siyah alan neyi ifade eder?",
    t: "mcq",
    o: ["Efektin etkili olduğu alan", "Efektin etkisiz olduğu alan", "Alan daha parlak olur", "Alan rasterize olur", "Alan seçime dönüşür"],
    a: "Efektin etkisiz olduğu alan",
    difficulty: "easy",
    week: 2,
    topic: "Maske - siyah",
    importance: "high",
    explanation:
      "Siyah boyadığın bölgede o ayarlama katmanı çalışmaz; böylece düzenlemeyi sadece istediğin bölgeye uygularsın."
  },
  {
    q: "Blending (Harmanlama) kavramı en doğru nasıl tanımlanır?",
    t: "mcq",
    o: [
      "Sadece yazı tipini değiştirmek",
      "Katmanların matematiksel olarak karışıp yeni görsel sonuç üretmesi",
      "Dosyayı PDF yapmak",
      "Sadece kırpma yapmak",
      "Sadece renk uzayını seçmek"
    ],
    a: "Katmanların matematiksel olarak karışıp yeni görsel sonuç üretmesi",
    difficulty: "medium",
    week: 2,
    topic: "Blending kavramı",
    importance: "high",
    explanation:
      "Blending Modes; üst katmanın piksellerinin alt katmanla hangi matematikle etkileşeceğini belirler (karartma, aydınlatma, kontrast vb.)."
  },
  {
    q: "Multiply blending modu genellikle nasıl bir etki verir?",
    t: "mcq",
    o: ["Görseli aydınlatır", "Görseli karartır, koyu tonları güçlendirir", "Renkleri ters çevirir", "Sadece doygunluğu artırır", "Sadece keskinleştirir"],
    a: "Görseli karartır, koyu tonları güçlendirir",
    difficulty: "easy",
    week: 2,
    topic: "Blending - Multiply",
    importance: "high",
    explanation:
      "Multiply ‘Darken group’ mantığına uygundur: üst üste çarpma gibi çalışır ve görüntüyü karartır (gölge güçlendirme vb.)."
  },
  {
    q: "Screen blending modu genellikle nasıl bir etki verir?",
    t: "mcq",
    o: ["Görseli karartır", "Görseli aydınlatır, ışık etkilerini güçlendirir", "Renkleri tamamen kaldırır", "Sadece kesim yapar", "Sadece metni seçer"],
    a: "Görseli aydınlatır, ışık etkilerini güçlendirir",
    difficulty: "easy",
    week: 2,
    topic: "Blending - Screen",
    importance: "high",
    explanation:
      "Screen ‘Lighten group’ gibi çalışır: görüntüyü açar. Işık parlaması/aydınlatma efektlerinde sık kullanılır."
  },
  {
    q: "Overlay, Soft Light, Hard Light gibi modlar hangi grupta düşünülür?",
    t: "mcq",
    o: ["Darken Group", "Lighten Group", "Contrast Group", "Inversion Group", "Color Group"],
    a: "Contrast Group",
    difficulty: "medium",
    week: 2,
    topic: "Blending grupları",
    importance: "medium",
    explanation:
      "Bu modlar kontrastı artırma eğilimindedir. Overlay daha güçlü, Soft Light daha yumuşak etki verir."
  },
  {
    q: "Difference ve Exclusion modları genellikle ne tür sonuçlar üretir?",
    t: "mcq",
    o: [
      "Sadece aydınlatma",
      "Renkleri tersine çevirme/soyut ve deneysel efektler",
      "Sadece keskinlik",
      "Sadece metin hizalama",
      "Sadece doygunluk artırma"
    ],
    a: "Renkleri tersine çevirme/soyut ve deneysel efektler",
    difficulty: "medium",
    week: 2,
    topic: "Inversion Group",
    importance: "medium",
    explanation:
      "Difference/Exclusion; katmanlar arası farkı vurgular ve tersleme benzeri soyut sonuçlar çıkarabilir."
  },
  {
    q: "Hue / Saturation / Color / Luminosity modlarının ortak özelliği nedir?",
    t: "mcq",
    o: [
      "Sadece karartma yaparlar",
      "Renk bilgisini (ton/doygunluk/parlaklık) ayrı bileşenler olarak manipüle ederler",
      "Sadece blur eklerler",
      "Sadece kesim yaparlar",
      "Sadece dosya kaydederler"
    ],
    a: "Renk bilgisini (ton/doygunluk/parlaklık) ayrı bileşenler olarak manipüle ederler",
    difficulty: "hard",
    week: 2,
    topic: "Color Group",
    importance: "high",
    explanation:
      "Bu grup, renk ve parlaklık bileşenlerini ayrı kontrol etmeyi sağlar. Örn: Luminosity sadece parlaklığı etkiler."
  },
  {
    q: "Curves Adjustment Layer’ı “Luminosity” blending moduna almak ne amaçla yapılır?",
    t: "mcq",
    o: [
      "Sadece renkleri değiştirmek için",
      "Sadece parlaklık/ton değerlerini değiştirip renk kaymasını azaltmak için",
      "Dosyayı küçültmek için",
      "Metni paragraf yapmak için",
      "Katmanı rasterize etmek için"
    ],
    a: "Sadece parlaklık/ton değerlerini değiştirip renk kaymasını azaltmak için",
    difficulty: "hard",
    week: 2,
    topic: "Curves + Luminosity",
    importance: "high",
    explanation:
      "Luminosity modu, ton/parlaklık bileşenine odaklanır. Böylece Curves ile ışığı düzeltirken renklerin bozulmasını azaltabilirsin."
  },
  {
    q: "Gradient Map’i “Soft Light” ile harmanlamak ders notuna göre genellikle hangi sonucu hedefler?",
    t: "mcq",
    o: [
      "Metin katmanı üretmek",
      "Yumuşak tonlama / sinematik renk atmosferi oluşturmak",
      "Sadece pikselleştirme yapmak",
      "Sadece hizalama yapmak",
      "Sadece kırpma yapmak"
    ],
    a: "Yumuşak tonlama / sinematik renk atmosferi oluşturmak",
    difficulty: "medium",
    week: 2,
    topic: "Gradient Map + Soft Light",
    importance: "medium",
    explanation:
      "Gradient Map tonları farklı renklere eşler; Soft Light ile birleşince genelde yumuşak, kontrollü bir color grading etkisi verir."
  },
  {
    q: "Kolaj/afiş gibi çoklu fotoğraf birleşimlerinde “Color” blending modu en çok neye yardımcı olur?",
    t: "mcq",
    o: [
      "Fotoğrafların renk bütünlüğünü (renk uyumunu) daha doğal yapmak",
      "Sadece keskinlik artırmak",
      "Sadece gölge eklemek",
      "Sadece vektör yapmak",
      "Sadece metin yazmak"
    ],
    a: "Fotoğrafların renk bütünlüğünü (renk uyumunu) daha doğal yapmak",
    difficulty: "medium",
    week: 2,
    topic: "Renk uyumu - Color mode",
    importance: "high",
    explanation:
      "Color modu, renk bilgisini taşır. Farklı fotoğrafların bir araya geldiği kompozisyonlarda renkleri tutarlı hale getirmede işe yarar."
  },
  {
    q: "Bir portrede ışık çok sertse ve yüz çok aydınlıksa, nottaki örneğe göre hangi yaklaşım mantıklıdır?",
    t: "mcq",
    o: [
      "Multiply ile (maskeli) ton kontrolü yaparak belirli bölgeleri karartmak",
      "Difference kullanıp renkleri ters çevirmek",
      "Metni rasterize etmek",
      "Artboard eklemek",
      "Sadece JPEG kaydetmek"
    ],
    a: "Multiply ile (maskeli) ton kontrolü yaparak belirli bölgeleri karartmak",
    difficulty: "medium",
    week: 2,
    topic: "Işık-gölge dengeleme",
    importance: "medium",
    explanation:
      "Multiply karartır. Curves/Levels gibi ayarlama katmanlarını Multiply/Luminosity ile birleştirip maske ile sadece gerekli yere uygularsan kontrol artar."
  },

  // =========================================================
  // ============ WEEK 3: ILLUSTRATOR TEMELLERİ + BLEED + RASTER (16)
  // =========================================================
  {
    q: "Adobe Illustrator’ı Photoshop’tan temel olarak ayıran özellik hangisidir?",
    t: "mcq",
    o: [
      "Raster (piksel) tabanlı olması",
      "Vektör tabanlı olması (matematiksel noktalar/eğriler) ve ölçeklenince bozulmaması",
      "Sadece video düzenlemesi yapması",
      "Sadece metin yazması",
      "Sadece animasyon yapması"
    ],
    a: "Vektör tabanlı olması (matematiksel noktalar/eğriler) ve ölçeklenince bozulmaması",
    difficulty: "easy",
    week: 3,
    topic: "Illustrator nedir",
    importance: "high",
    explanation:
      "Illustrator vektör mantıkla çalışır. Bu yüzden logo/ikon gibi işler her boyutta keskin kalır."
  },
  {
    q: "Illustrator’ın yaygın kullanım alanlarından hangisi doğrudur?",
    t: "mcq",
    o: [
      "Logo ve kurumsal kimlik tasarımı",
      "Sadece işletim sistemi kurulumu",
      "Sadece veri tabanı yönetimi",
      "Sadece oyun motoru derleme",
      "Sadece ses miksajı"
    ],
    a: "Logo ve kurumsal kimlik tasarımı",
    difficulty: "easy",
    week: 3,
    topic: "Illustrator kullanım alanları",
    importance: "high",
    explanation:
      "Notlara göre: logo, kurumsal kimlik, illüstrasyon, tipografi, broşür/afiş/kartvizit, web/mobil ikonları."
  },
  {
    q: "Illustrator çalışma alanında sol tarafta bulunan ve seçim/çizim/metin araçlarını barındıran bölüm hangisidir?",
    t: "mcq",
    o: ["Tools Panel", "Menu Bar", "Panels Area", "Artboard", "Status Bar"],
    a: "Tools Panel",
    difficulty: "easy",
    week: 3,
    topic: "Workspace - Tools Panel",
    importance: "high",
    explanation:
      "Tools Panel sol taraftadır. Birçok aracın altında küçük okla açılan gizli araçlar bulunabilir."
  },
  {
    q: "Illustrator’da çizimin yapıldığı ana sayfa/alanın adı hangisidir?",
    t: "mcq",
    o: ["Artboard", "Histogram", "Layer Mask", "Canvas (Photoshop)", "Options Bar"],
    a: "Artboard",
    difficulty: "easy",
    week: 3,
    topic: "Artboard",
    importance: "high",
    explanation:
      "Artboard; çıktı alınan tasarım sayfası gibi düşünülür. Bir dosyada birden fazla artboard olabilir."
  },
  {
    q: "Yeni belge oluşturma kısayolu notlara göre hangisidir?",
    t: "mcq",
    o: ["Ctrl+N", "Ctrl+T", "Ctrl+Shift+S", "Ctrl+M", "Ctrl+L"],
    a: "Ctrl+N",
    difficulty: "easy",
    week: 3,
    topic: "New Document",
    importance: "medium",
    explanation:
      "File > New (Ctrl+N) ile yeni doküman oluşturulur; profil, boyut, birim, color mode, bleed gibi ayarlar burada yapılır."
  },
  {
    q: "Baskı işi için Illustrator belge Color Mode seçimi hangisi olmalıdır?",
    t: "mcq",
    o: ["RGB", "CMYK", "Lab", "Grayscale", "Indexed Color"],
    a: "CMYK",
    difficulty: "easy",
    week: 3,
    topic: "Belge ayarı - Color Mode",
    importance: "high",
    explanation:
      "Baskı işleri pigment/mürekkep temellidir. Bu yüzden CMYK seçimi standart yaklaşımdır; dijital işlerde RGB."
  },
  {
    q: "Bleed (taşma payı) en doğru neyi ifade eder?",
    t: "mcq",
    o: [
      "Metnin harf aralığı",
      "Kesim çizgisinin dışına taşan, kesim hatalarında beyaz boşluk bırakmamak için eklenen alan",
      "Dosya boyutunu küçültme yöntemi",
      "Renkleri ters çevirme modu",
      "Vektör noktalarının sayısı"
    ],
    a: "Kesim çizgisinin dışına taşan, kesim hatalarında beyaz boşluk bırakmamak için eklenen alan",
    difficulty: "medium",
    week: 3,
    topic: "Bleed nedir",
    importance: "high",
    explanation:
      "Matbaada kesim milim şaşabilir. Arka plan/görselleri bleed’e taşırırsan kenarda istenmeyen beyaz çizgi oluşma riski düşer."
  },
  {
    q: "Notlara göre baskı için tipik bleed değeri genellikle kaçtır?",
    t: "mcq",
    o: ["1 mm", "3 mm", "10 mm", "0 mm", "25 mm"],
    a: "3 mm",
    difficulty: "easy",
    week: 3,
    topic: "Bleed ölçüsü",
    importance: "medium",
    explanation:
      "Yaygın uygulama 3 mm bleed’dir. Kurum/matbaa standartları değişebilse de temel eğitimde 3 mm sık öğretilir."
  },
  {
    q: "Bleed ile çalışırken en doğru güvenlik kuralı hangisidir?",
    t: "mcq",
    o: [
      "Önemli metin ve logoları trim line’a çok yakın koymak",
      "Önemli metin ve logoları kesim çizgisinden güvenli içeride tutmak",
      "Arka planı bleed’e taşırmamak",
      "Bleed dışına taşan her şeyin basılacağını varsaymak",
      "Sadece PNG ile çalışmak"
    ],
    a: "Önemli metin ve logoları kesim çizgisinden güvenli içeride tutmak",
    difficulty: "medium",
    week: 3,
    topic: "Bleed - dikkat",
    importance: "high",
    explanation:
      "Arka plan bleed’e taşmalıdır ama kritik öğeler (logo, yazı) kesimde kırpılmasın diye güvenli alanda kalmalıdır."
  },
  {
    q: "PDF çıktısı alırken bleed’in dahil edilmesi için en doğru yaklaşım hangisidir?",
    t: "mcq",
    o: [
      "PDF kaydında Marks and Bleeds bölümünde belge bleed ayarlarını kullanmak",
      "Sadece JPG kaydetmek",
      "Renk modunu RGB yapmak",
      "Tüm katmanları silmek",
      "Mesh Tool eklemek"
    ],
    a: "PDF kaydında Marks and Bleeds bölümünde belge bleed ayarlarını kullanmak",
    difficulty: "medium",
    week: 3,
    topic: "Bleed’li PDF",
    importance: "high",
    explanation:
      "Notlarda: PDF ayarlarında Marks and Bleeds sekmesinde ‘Use Document Bleed Settings’ işaretlenerek bleed dahil edilir."
  },
  {
    q: "Raster Effects (Raster Efektleri) için en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Vektör efektlerdir ve çözünürlükten bağımsızdır",
      "Vektör objeye uygulanır ama piksel tabanlı işlendiği için çözünürlüğe bağlıdır",
      "Sadece metin hizalar",
      "Sadece artboard sayısını artırır",
      "Sadece dosya adını değiştirir"
    ],
    a: "Vektör objeye uygulanır ama piksel tabanlı işlendiği için çözünürlüğe bağlıdır",
    difficulty: "hard",
    week: 3,
    topic: "Raster Effects nedir",
    importance: "high",
    explanation:
      "Gölge, blur, glow gibi efektler çoğu zaman raster hesaplanır. Bu yüzden Document Raster Effects Settings’teki PPI kaliteyi etkiler."
  },
  {
    q: "Raster Effects ayarlarında baskı için daha uygun PPI değeri hangisidir?",
    t: "mcq",
    o: ["72 PPI", "150 PPI", "300 PPI", "10 PPI", "1 PPI"],
    a: "300 PPI",
    difficulty: "easy",
    week: 3,
    topic: "Raster Effects - çözünürlük",
    importance: "high",
    explanation:
      "Baskıda pikselleşme istemeyiz. Raster efektler çözünürlüğe bağlı olduğundan baskıda 300 PPI tercih edilir."
  },
  {
    q: "Belge genelindeki raster efekt çözünürlüğü Illustrator’da nereden ayarlanır?",
    t: "mcq",
    o: [
      "Effect > Document Raster Effects Settings",
      "File > Package",
      "View > Outline",
      "Window > Pathfinder",
      "Object > Expand"
    ],
    a: "Effect > Document Raster Effects Settings",
    difficulty: "medium",
    week: 3,
    topic: "Document Raster Effects Settings",
    importance: "high",
    explanation:
      "Raster efektlerin pikselleşmemesi için belge genel ayarından PPI belirlenir (Low/Medium/High gibi seçeneklerle)."
  },
  {
    q: "Raster efektlerin dezavantajı aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Her zaman dosyayı küçültür",
      "Düşük çözünürlükte kalite kaybı yapabilir ve dosya boyutunu artırabilir",
      "Sadece vektörle çalışır ve asla bozulmaz",
      "Sadece metin ekler",
      "Sadece renk modunu değiştirir"
    ],
    a: "Düşük çözünürlükte kalite kaybı yapabilir ve dosya boyutunu artırabilir",
    difficulty: "medium",
    week: 3,
    topic: "Raster Effects - artı/eksi",
    importance: "medium",
    explanation:
      "Raster işlem, piksel üretir: PPI düşükse pikselleşme olur; ayrıca efektler dosyayı ağırlaştırabilir."
  },

  // =========================================================
  // ============ WEEK 3: ILLUSTRATOR ARAÇLAR (8) ============
  // =========================================================
  {
    q: "Selection Tool (V) en doğru hangi iş için kullanılır?",
    t: "mcq",
    o: [
      "Nesnenin anchor point’lerini tek tek düzenlemek",
      "Nesneyi bütün olarak seçmek, taşımak ve boyutlandırmak",
      "Mesh noktası eklemek",
      "İki nesne arasında geçiş oluşturmak",
      "Vektör çizgiyi kesmek"
    ],
    a: "Nesneyi bütün olarak seçmek, taşımak ve boyutlandırmak",
    difficulty: "easy",
    week: 3,
    topic: "Selection Tool (V)",
    importance: "high",
    explanation:
      "Selection Tool; nesneyi komple seçer. Genel taşıma/ölçekleme işlerinde temel araçtır."
  },
  {
    q: "Direct Selection Tool (A) en doğru hangi iş için kullanılır?",
    t: "mcq",
    o: [
      "Bir nesnenin parçalarını/anchor point’lerini seçip şekli detaylı düzenlemek",
      "Belgeyi CMYK’a çevirmek",
      "Artboard eklemek",
      "Sembol püskürtmek",
      "Yazıyı paragraf yapmak"
    ],
    a: "Bir nesnenin parçalarını/anchor point’lerini seçip şekli detaylı düzenlemek",
    difficulty: "easy",
    week: 3,
    topic: "Direct Selection (A)",
    importance: "high",
    explanation:
      "Anchor point ve handle’ları düzenleyerek şeklin formunu değiştirirsin. İnce ayar için kullanılır."
  },
  {
    q: "Group Selection Tool’un temel farkı aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Gruplanmış nesnelerde seçim seviyeleri arasında geçiş yaparak alt öğe/üst grup seçebilmesi",
      "Sadece metin yazması",
      "Sadece renk seçmesi",
      "Sadece blur eklemesi",
      "Sadece dosya kaydetmesi"
    ],
    a: "Gruplanmış nesnelerde seçim seviyeleri arasında geçiş yaparak alt öğe/üst grup seçebilmesi",
    difficulty: "medium",
    week: 3,
    topic: "Group Selection",
    importance: "medium",
    explanation:
      "Grupların içinde tek öğeyi seçmek ve tıklayarak daha üst seviye gruba çıkmak için kullanılır; karmaşık illüstrasyonlarda hayat kurtarır."
  },
  {
    q: "Shape Builder Tool’un (Shift+M) en temel işlevi hangisidir?",
    t: "mcq",
    o: [
      "Şekilleri birleştirip/çıkarıp yeni şekil oluşturmak",
      "Metin hizalamak",
      "Renk uzayı dönüştürmek",
      "PDF’e bleed eklemek",
      "Raster efekt çözünürlüğü ayarlamak"
    ],
    a: "Şekilleri birleştirip/çıkarıp yeni şekil oluşturmak",
    difficulty: "easy",
    week: 3,
    topic: "Shape Builder (Shift+M)",
    importance: "high",
    explanation:
      "Birden fazla şeklin kesişim alanlarını sürükleyerek birleştirirsin; Alt/Option ile alan çıkarma yapılabilir."
  },
  {
    q: "Blend Tool (W) ne için kullanılır?",
    t: "mcq",
    o: [
      "İki veya daha fazla nesne arasında renk/şekil/boyut geçişi (ara adımlar) oluşturmak",
      "Nesneyi kesmek",
      "Anchor point silmek",
      "Metni maske yapmak",
      "Artboard eklemek"
    ],
    a: "İki veya daha fazla nesne arasında renk/şekil/boyut geçişi (ara adımlar) oluşturmak",
    difficulty: "medium",
    week: 3,
    topic: "Blend Tool (W)",
    importance: "medium",
    explanation:
      "Blend; iki form arasında kademeli geçiş üretir. Blend Options ile adım sayısı (Specified Steps) veya mesafe ayarlanabilir."
  },
  {
    q: "Blob Brush Tool (Shift+B) ile ilgili en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Çizgiyi sadece stroke olarak bırakır, dolgu oluşturmaz",
      "Serbest çizimi dolgu (fill) yapan vektör şekle çevirir; aynı renkte çizimler birleşebilir",
      "Sadece raster çizim yapar",
      "Sadece metin yazdırır",
      "Sadece gradient ekler"
    ],
    a: "Serbest çizimi dolgu (fill) yapan vektör şekle çevirir; aynı renkte çizimler birleşebilir",
    difficulty: "medium",
    week: 3,
    topic: "Blob Brush",
    importance: "medium",
    explanation:
      "Blob Brush ile çizdiğin şey ‘dolgu’ olarak şekle dönüşür. Aynı renkte boyadığında otomatik birleşmesi hızlı illüstrasyon üretir."
  },
  {
    q: "Width Tool (Shift+W) en doğru hangi problem için kullanılır?",
    t: "mcq",
    o: [
      "Bir stroke’un farklı noktalarında kalınlığı artırıp azaltmak",
      "Yeni artboard eklemek",
      "Renkleri ters çevirmek",
      "Metni paragraf yapmak",
      "Raster efekti 300 PPI yapmak"
    ],
    a: "Bir stroke’un farklı noktalarında kalınlığı artırıp azaltmak",
    difficulty: "medium",
    week: 3,
    topic: "Width Tool (Shift+W)",
    importance: "medium",
    explanation:
      "Kaligrafik/organik çizgi etkisi için çizgi kalınlığını segment segment yönetirsin. Bu vektör tabanlı olduğundan sonradan düzenlenebilir."
  },
  {
    q: "Mesh Tool (U) hangi amaçla öne çıkar?",
    t: "mcq",
    o: [
      "Nesneye kafes (mesh) ekleyip noktalara renk atayarak gerçekçi, yumuşak geçişli tonlama yapmak",
      "Nesneyi makasla kesmek",
      "Metni seçim haline getirmek",
      "İki şekli blend etmek",
      "Sembol püskürtmek"
    ],
    a: "Nesneye kafes (mesh) ekleyip noktalara renk atayarak gerçekçi, yumuşak geçişli tonlama yapmak",
    difficulty: "hard",
    week: 3,
    topic: "Mesh Tool (U)",
    importance: "medium",
    explanation:
      "Mesh; tek gradyandan daha detaylı kontrol verir. Gölge/ışık yansımalarıyla 3D benzeri gerçekçi illüstrasyonlarda kullanılır; fazla mesh karmaşıklık yaratabilir."
  }
];
