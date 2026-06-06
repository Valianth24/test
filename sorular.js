window.questionBank = [
  {
    q: "Veri yapısı en doğru şekilde nasıl tanımlanır?",
    t: "mcq",
    o: [
      "Verileri bilgisayarda düzenli saklama ve yönetme yöntemi",
      "Sadece ekrana yazı yazdıran komut",
      "Sadece internet bağlantısı sağlayan cihaz",
      "Programın renk ve tema ayarları",
      "Sadece klavyeden veri girme işlemi"
    ],
    a: 0,
    difficulty: "easy",
    week: 1,
    topic: "Veri Yapılarına Giriş",
    importance: 5,
    explanation: "Veri yapısı, verilerin bilgisayarda nasıl saklanacağını ve nasıl yönetileceğini belirleyen yapıdır. Örneğin dizi, bağlı liste, stack, queue, ağaç ve graf birer veri yapısıdır. Amaç veriye daha hızlı ulaşmak, ekleme-silme işlemlerini düzenli yapmak ve belleği verimli kullanmaktır."
  },
  {
    q: "Algoritma kavramı aşağıdakilerden hangisini ifade eder?",
    t: "mcq",
    o: [
      "Bilgisayardaki fiziksel bellek yuvasını",
      "Bir problemi çözmek için izlenen adım adım işlem yolunu",
      "Sadece verileri saklayan tabloyu",
      "Sadece grafik çizen programı",
      "Bilgisayarın ekran kartını"
    ],
    a: 1,
    difficulty: "easy",
    week: 1,
    topic: "Algoritma Mantığı",
    importance: 5,
    explanation: "Algoritma, bir problemi çözmek için takip edilen adım adım yoldur. Mesela bir dizide sayı aramak için ilk elemandan başla, kontrol et, değilse sıradakine geç şeklinde ilerlemek bir algoritmadır. Veri yapısı veriyi nasıl sakladığımızı, algoritma ise o veriyle ne yaptığımızı anlatır."
  },
  {
    q: "Aşağıdakilerden hangisi lineer veri yapısına örnektir?",
    t: "mcq",
    o: ["Graf", "Ağaç", "Dizi", "B ağacı", "İkili arama ağacı"],
    a: 2,
    difficulty: "easy",
    week: 1,
    topic: "Lineer Veri Yapıları",
    importance: 5,
    explanation: "Lineer veri yapılarında elemanlar sıra halinde düşünülür. Dizi, bağlı liste, stack ve queue lineer veri yapılarıdır. Ağaç ve graf ise dallanma veya bağlantı yapısı içerdiği için lineer olmayan veri yapılarıdır."
  },
  {
    q: "Aşağıdakilerden hangisi lineer olmayan veri yapısına örnektir?",
    t: "mcq",
    o: ["Dizi", "Stack", "Queue", "Ağaç", "Bağlı liste"],
    a: 3,
    difficulty: "easy",
    week: 1,
    topic: "Lineer Olmayan Veri Yapıları",
    importance: 5,
    explanation: "Ağaç, verileri üst-alt ilişkiyle saklayan hiyerarşik bir yapıdır. Bu yüzden lineer değildir. Lineer yapılarda elemanlar bir sıra gibi ilerlerken, ağaçta dallanma vardır. Graf da lineer olmayan veri yapısına örnektir."
  },
  {
    q: "Dizi veri yapısının en temel özelliği hangisidir?",
    t: "mcq",
    o: [
      "Elemanların düğümler halinde dağınık tutulması",
      "Her elemanın sonraki elemanın adresini tutması",
      "Aynı türden verilerin bellekte ardışık saklanması",
      "Son giren elemanın ilk çıkması",
      "İlk giren elemanın ilk çıkması"
    ],
    a: 2,
    difficulty: "easy",
    week: 2,
    topic: "Diziler",
    importance: 5,
    explanation: "Dizi, aynı türden verilerin bellekte yan yana tutulduğu veri yapısıdır. Örneğin [10, 20, 30] bir sayı dizisidir. Dizide elemanlara indeks ile ulaşılır. Bu yüzden indeks biliniyorsa istenen elemana hızlı erişilir."
  },
  {
    q: "Dizilerde bir elemana indeks ile erişmek neden hızlıdır?",
    t: "mcq",
    o: [
      "Çünkü dizi elemanları bellekte ardışık tutulur",
      "Çünkü dizilerde sadece bir eleman bulunur",
      "Çünkü dizilerde hiç silme yapılamaz",
      "Çünkü diziler sadece metin saklar",
      "Çünkü diziler kuyruk mantığıyla çalışır"
    ],
    a: 0,
    difficulty: "easy",
    week: 2,
    topic: "Dizilerde Erişim",
    importance: 5,
    explanation: "Dizide elemanlar bellekte yan yana tutulur. Bu yüzden bilgisayar, indeks numarasını kullanarak doğrudan ilgili elemana gidebilir. Örneğin dizi[3] denildiğinde üçüncü indeksteki elemana direkt erişilir. Bu erişim genellikle O(1) kabul edilir."
  },
  {
    q: "Dizilerde ortaya eleman ekleme veya ortadan eleman silme işlemi neden maliyetlidir?",
    t: "mcq",
    o: [
      "Çünkü elemanların kaydırılması gerekebilir",
      "Çünkü diziler veri tutamaz",
      "Çünkü dizilerde indeks yoktur",
      "Çünkü diziler sadece stack olarak çalışır",
      "Çünkü diziler graf bağlantısı ister"
    ],
    a: 0,
    difficulty: "medium",
    week: 2,
    topic: "Dizi Dezavantajları",
    importance: 5,
    explanation: "Dizide elemanlar yan yana durduğu için ortaya yeni eleman eklenirse arkadaki elemanların sağa kaydırılması gerekir. Ortadan eleman silinirse boşluğu kapatmak için elemanlar sola kaydırılır. Bu yüzden ekleme ve silme işlemleri dizide her zaman çok kolay değildir."
  },
  {
    q: "Bağlı liste veri yapısı en doğru şekilde nasıl açıklanır?",
    t: "mcq",
    o: [
      "Elemanların düğümler halinde tutulduğu ve her düğümün sonraki düğümü gösterdiği yapı",
      "Elemanların bellekte kesinlikle yan yana tutulduğu yapı",
      "Sadece son giren ilk çıkar mantığıyla çalışan yapı",
      "Sadece ilk giren ilk çıkar mantığıyla çalışan yapı",
      "Sadece sayıları küçükten büyüğe sıralayan yapı"
    ],
    a: 0,
    difficulty: "easy",
    week: 3,
    topic: "Bağlı Liste",
    importance: 5,
    explanation: "Bağlı liste, düğümlerden oluşur. Her düğümün içinde veri ve bir sonraki düğümün adresi bulunur. Bu yüzden elemanların bellekte yan yana olması gerekmez. Bir elemandan diğerine bağlantı adresi sayesinde gidilir."
  },
  {
    q: "Bağlı listede belirli bir elemana ulaşmak neden diziye göre daha yavaş olabilir?",
    t: "mcq",
    o: [
      "Çünkü bağlı listede baştan başlayıp düğümler arasında sırayla ilerlemek gerekir",
      "Çünkü bağlı listede hiç veri bulunmaz",
      "Çünkü bağlı liste sadece tek eleman saklar",
      "Çünkü bağlı liste sadece sıralı verilerle çalışır",
      "Çünkü bağlı liste otomatik olarak silinir"
    ],
    a: 0,
    difficulty: "medium",
    week: 3,
    topic: "Bağlı Listede Erişim",
    importance: 5,
    explanation: "Dizide indeks ile doğrudan elemana gidilebilir. Bağlı listede ise 5. elemana ulaşmak için 1. düğümden başlanır, sonra 2., sonra 3. düğüm diye ilerlenir. Çünkü her düğüm sadece bir sonraki düğümün adresini bilir. Bu yüzden erişim genellikle O(n) olur."
  },
  {
    q: "Sürekli ekleme ve silme yapılacak bir yapıda bağlı listenin diziye göre avantajı nedir?",
    t: "mcq",
    o: [
      "Bağlı liste dinamik büyüyebilir ve bağlantılar değiştirilerek ekleme-silme yapılabilir",
      "Bağlı liste her zaman tek eleman tutar",
      "Bağlı liste indeksle O(1) erişim sağlar",
      "Bağlı liste hiçbir zaman bellek kullanmaz",
      "Bağlı liste sadece sabit boyutludur"
    ],
    a: 0,
    difficulty: "medium",
    week: 3,
    topic: "Dizi ve Bağlı Liste Farkı",
    importance: 5,
    explanation: "Bağlı liste dinamik bir yapıdır. Eleman eklemek veya silmek için çoğu zaman bağlantı adreslerini güncellemek yeterlidir. Dizide ise özellikle ortada ekleme-silme yapılırken elemanların kaydırılması gerekebilir. Bu yüzden ekleme-silme ağırlıklı durumlarda bağlı liste avantajlı olabilir."
  },
  {
    q: "Stack veri yapısı hangi mantıkla çalışır?",
    t: "mcq",
    o: [
      "FIFO yani ilk giren ilk çıkar",
      "LIFO yani son giren ilk çıkar",
      "Her zaman küçük değer sola gider",
      "Her zaman büyük değer sona gider",
      "Her düğüm en fazla iki çocuk alır"
    ],
    a: 1,
    difficulty: "easy",
    week: 4,
    topic: "Stack",
    importance: 5,
    explanation: "Stack, tabak yığını gibi çalışır. En son koyduğun tabak en üsttedir ve ilk onu alırsın. Bu yüzden stack LIFO yani Last In First Out mantığıyla çalışır. Türkçesi son giren ilk çıkar demektir."
  },
  {
    q: "Stack veri yapısında eleman ekleme işlemi hangisidir?",
    t: "mcq",
    o: ["Push", "Pop", "Dequeue", "Enqueue", "Search"],
    a: 0,
    difficulty: "easy",
    week: 4,
    topic: "Stack İşlemleri",
    importance: 5,
    explanation: "Stack'e eleman ekleme işlemine push denir. Mesela stack içine önce 10, sonra 20 eklenirse 20 en üstte olur. Stack'ten eleman çıkarma işlemine ise pop denir."
  },
  {
    q: "Stack veri yapısında eleman çıkarma işlemi hangisidir?",
    t: "mcq",
    o: ["Enqueue", "Dequeue", "Pop", "Front", "Rear"],
    a: 2,
    difficulty: "easy",
    week: 4,
    topic: "Stack İşlemleri",
    importance: 5,
    explanation: "Stack'te eleman çıkarma işlemine pop denir. Stack son giren ilk çıkar mantığıyla çalışır. Örneğin stack [10, 20, 30] şeklindeyse pop yapıldığında çıkan eleman 30 olur."
  },
  {
    q: "Stack veri yapısında en üstteki elemana bakıp onu çıkarmayan işlem hangisidir?",
    t: "mcq",
    o: ["Push", "Pop", "Peek", "Dequeue", "Enqueue"],
    a: 2,
    difficulty: "medium",
    week: 4,
    topic: "Peek İşlemi",
    importance: 4,
    explanation: "Peek veya Top işlemi, stack'in en üstündeki elemana bakmayı sağlar ama o elemanı çıkarmaz. Pop ise en üstteki elemanı çıkarır. Bu fark sınavlarda karıştırılabilir."
  },
  {
    q: "Aşağıdakilerden hangisi stack kullanımına en uygun örnektir?",
    t: "mcq",
    o: [
      "Geri al yani Undo işlemi",
      "Banka müşteri sırası",
      "Yazıcı kuyruğu",
      "Market kasa sırası",
      "Otobüs durağı sırası"
    ],
    a: 0,
    difficulty: "easy",
    week: 4,
    topic: "Stack Kullanım Alanları",
    importance: 5,
    explanation: "Undo işleminde en son yapılan işlem ilk geri alınır. Bu tam olarak stack mantığıdır. Çünkü stack son giren ilk çıkar mantığıyla çalışır. Fonksiyon çağrıları ve parantez kontrolü de stack kullanımına örnektir."
  },
  {
    q: "Queue veri yapısı hangi mantıkla çalışır?",
    t: "mcq",
    o: [
      "LIFO yani son giren ilk çıkar",
      "FIFO yani ilk giren ilk çıkar",
      "Sol küçük sağ büyük",
      "Yan yana karşılaştırma",
      "Pivot seçme"
    ],
    a: 1,
    difficulty: "easy",
    week: 5,
    topic: "Queue",
    importance: 5,
    explanation: "Queue yani kuyruk, banka sırası gibi çalışır. İlk gelen kişi önce işlem yapar. Bu yüzden queue FIFO yani First In First Out mantığıyla çalışır. Türkçesi ilk giren ilk çıkar demektir."
  },
  {
    q: "Queue veri yapısında eleman ekleme işlemi hangisidir?",
    t: "mcq",
    o: ["Push", "Pop", "Peek", "Enqueue", "DFS"],
    a: 3,
    difficulty: "easy",
    week: 5,
    topic: "Queue İşlemleri",
    importance: 5,
    explanation: "Queue'ya eleman ekleme işlemine enqueue denir. Eleman kuyruğun sonuna eklenir. Kuyruktan eleman çıkarma işlemine ise dequeue denir."
  },
  {
    q: "Queue veri yapısında eleman çıkarma işlemi hangisidir?",
    t: "mcq",
    o: ["Dequeue", "Push", "Pop", "Peek", "Insert"],
    a: 0,
    difficulty: "easy",
    week: 5,
    topic: "Queue İşlemleri",
    importance: 5,
    explanation: "Queue'da eleman çıkarma işlemine dequeue denir. Queue ilk giren ilk çıkar mantığıyla çalıştığı için en önce eklenen eleman önce çıkarılır. Örneğin queue [10, 20, 30] ise dequeue sonucu çıkan eleman 10 olur."
  },
  {
    q: "Stack ve Queue arasındaki temel fark hangisidir?",
    t: "mcq",
    o: [
      "Stack son gireni önce çıkarır, Queue ilk gireni önce çıkarır",
      "Stack ilk gireni önce çıkarır, Queue son gireni önce çıkarır",
      "Stack ve Queue tamamen aynıdır",
      "Stack sadece ağaçlarda, Queue sadece dizilerde kullanılır",
      "Stack'te ekleme yoktur, Queue'da çıkarma yoktur"
    ],
    a: 0,
    difficulty: "easy",
    week: 5,
    topic: "Stack Queue Farkı",
    importance: 5,
    explanation: "Stack LIFO çalışır: son giren ilk çıkar. Queue FIFO çalışır: ilk giren ilk çıkar. Bunu tabak yığını ve banka sırası gibi düşünebilirsin. Tabak yığında son koyulan önce alınır, banka sırasında ilk gelen önce işlem yapar."
  },
  {
    q: "Ağaç veri yapısı hangi tür ilişkiyi temsil etmek için uygundur?",
    t: "mcq",
    o: [
      "Hiyerarşik yani üst-alt ilişkileri",
      "Sadece yan yana duran verileri",
      "Sadece son giren ilk çıkar ilişkisini",
      "Sadece ilk giren ilk çıkar ilişkisini",
      "Sadece rastgele sayıları"
    ],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "Ağaç Veri Yapısı",
    importance: 5,
    explanation: "Ağaç veri yapısı üst-alt ilişkisini göstermek için kullanılır. Örneğin klasör yapısı, aile ağacı, şirket organizasyon şeması ve karar ağaçları buna örnektir. En üstte kök bulunur, aşağı doğru dallar oluşur."
  },
  {
    q: "Ağaç veri yapısında kök yani root ne anlama gelir?",
    t: "mcq",
    o: [
      "Ağacın en üstteki başlangıç düğümü",
      "Ağacın en alttaki son düğümü",
      "Hiç çocuğu olmayan düğüm",
      "Her zaman en küçük sayı",
      "İki düğüm arasındaki bağlantı"
    ],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "Kök Düğüm",
    importance: 5,
    explanation: "Kök, ağacın en üstündeki başlangıç düğümüdür. Ağaçtaki diğer düğümlere kökten ulaşılır. Kök her zaman en küçük veya en büyük değer olmak zorunda değildir; sadece başlangıç noktasıdır."
  },
  {
    q: "Ağaç veri yapısında yaprak yani leaf ne anlama gelir?",
    t: "mcq",
    o: [
      "Ağacın başlangıç düğümü",
      "Altında çocuğu olmayan düğüm",
      "Her zaman en büyük değer",
      "İki düğüm arasındaki çizgi",
      "Ağacı dengeleyen işlem"
    ],
    a: 1,
    difficulty: "easy",
    week: 6,
    topic: "Yaprak Düğüm",
    importance: 5,
    explanation: "Yaprak düğüm, altında başka düğüm bulunmayan düğümdür. Gerçek ağaçta yapraklar dalların ucundadır. Veri yapısında da yaprak düğümler ağacın uç noktalarıdır."
  },
  {
    q: "Ağaç veri yapısında edge yani kenar neyi ifade eder?",
    t: "mcq",
    o: [
      "Düğümün içinde saklanan veriyi",
      "İki düğüm arasındaki bağlantıyı",
      "Ağacın en üst düğümünü",
      "Hiç çocuğu olmayan düğümü",
      "Stack'ten eleman çıkarmayı"
    ],
    a: 1,
    difficulty: "medium",
    week: 6,
    topic: "Kenar Kavramı",
    importance: 4,
    explanation: "Kenar, iki düğüm arasındaki bağlantıdır. Ağaçta kök ile çocuk düğüm arasındaki çizgi bir kenardır. Graf konusunda da kenar iki düğüm arasındaki bağlantı anlamına gelir."
  },
  {
    q: "İkili ağaç yani Binary Tree en doğru şekilde nasıl tanımlanır?",
    t: "mcq",
    o: [
      "Her düğümün en fazla iki çocuğu olduğu ağaç",
      "Her düğümün en az üç çocuğu olduğu ağaç",
      "Sadece tek eleman tutan dizi",
      "İlk giren ilk çıkar mantığıyla çalışan yapı",
      "Son giren ilk çıkar mantığıyla çalışan yapı"
    ],
    a: 0,
    difficulty: "easy",
    week: 7,
    topic: "İkili Ağaç",
    importance: 5,
    explanation: "İkili ağaçta her düğümün en fazla iki çocuğu olabilir. Bu çocuklar genellikle sol çocuk ve sağ çocuk olarak adlandırılır. Bir düğümün 0, 1 veya 2 çocuğu olabilir; 3 çocuğu olamaz."
  },
  {
    q: "İkili arama ağacında yani BST'de küçük değerler nereye yerleştirilir?",
    t: "mcq",
    o: [
      "Sol alt ağaca",
      "Sağ alt ağaca",
      "Kökün üstüne",
      "Queue'nun sonuna",
      "Stack'in en altına"
    ],
    a: 0,
    difficulty: "easy",
    week: 8,
    topic: "BST Kuralı",
    importance: 5,
    explanation: "BST yani ikili arama ağacında temel kural şudur: küçük değerler sol tarafa, büyük değerler sağ tarafa gider. Örneğin kök 50 ise 30 sola yerleşir çünkü 30, 50'den küçüktür."
  },
  {
    q: "İkili arama ağacında yani BST'de büyük değerler nereye yerleştirilir?",
    t: "mcq",
    o: [
      "Sol alt ağaca",
      "Kökün üstüne",
      "Queue'nun başına",
      "Sağ alt ağaca",
      "Stack'in altına"
    ],
    a: 3,
    difficulty: "easy",
    week: 8,
    topic: "BST Kuralı",
    importance: 5,
    explanation: "BST'de büyük değerler sağ alt ağaca yerleştirilir. Örneğin kök 50 ise 70 sağ tarafa gider çünkü 70, 50'den büyüktür. Bu kural arama işlemini hızlandırır."
  },
  {
    q: "BST'de arama işlemi neden hızlı olabilir?",
    t: "mcq",
    o: [
      "Çünkü her adımda yanlış taraf elenebilir",
      "Çünkü hiç karşılaştırma yapılmaz",
      "Çünkü tüm düğümler rastgele silinir",
      "Çünkü sadece son eklenen elemana bakılır",
      "Çünkü veriler bellekte mutlaka yan yana tutulur"
    ],
    a: 0,
    difficulty: "medium",
    week: 8,
    topic: "BST Arama Mantığı",
    importance: 5,
    explanation: "BST'de aranan değer kökle karşılaştırılır. Aranan değer küçükse sola, büyükse sağa gidilir. Böylece her adımda ağacın bir tarafı elenir. Ağaç dengeliyse arama ortalama O(log n) olabilir."
  },
  {
    q: "BST'de inorder dolaşma sırası hangisidir?",
    t: "mcq",
    o: [
      "Kök - Sol - Sağ",
      "Sol - Kök - Sağ",
      "Sol - Sağ - Kök",
      "Sağ - Kök - Sol",
      "Kök - Sağ - Sol"
    ],
    a: 1,
    difficulty: "medium",
    week: 8,
    topic: "Inorder Traversal",
    importance: 5,
    explanation: "Inorder dolaşma sırası Sol - Kök - Sağ şeklindedir. BST üzerinde inorder dolaşma yapılırsa değerler küçükten büyüğe sıralı şekilde elde edilir. Bu yüzden inorder traversal finalde çok sorulabilir."
  },
  {
    q: "BST'de preorder dolaşma sırası hangisidir?",
    t: "mcq",
    o: [
      "Kök - Sol - Sağ",
      "Sol - Kök - Sağ",
      "Sol - Sağ - Kök",
      "Sağ - Sol - Kök",
      "Sol - Kök - Sağ - Kök"
    ],
    a: 0,
    difficulty: "medium",
    week: 8,
    topic: "Preorder Traversal",
    importance: 4,
    explanation: "Preorder dolaşma sırası Kök - Sol - Sağ şeklindedir. Yani önce düğümün kendisi gezilir, sonra sol alt ağaç, sonra sağ alt ağaç gezilir."
  },
  {
    q: "BST'de postorder dolaşma sırası hangisidir?",
    t: "mcq",
    o: [
      "Kök - Sol - Sağ",
      "Sol - Kök - Sağ",
      "Sol - Sağ - Kök",
      "Kök - Sağ - Sol",
      "Sağ - Kök - Sol"
    ],
    a: 2,
    difficulty: "medium",
    week: 8,
    topic: "Postorder Traversal",
    importance: 4,
    explanation: "Postorder dolaşma sırası Sol - Sağ - Kök şeklindedir. Yani kök en son gezilir. Ağaç silme gibi işlemlerde önce çocukları işlemek gerektiği için postorder mantığı önemlidir."
  },
  {
    q: "AVL ağacı ne işe yarar?",
    t: "mcq",
    o: [
      "BST'yi dengede tutarak arama, ekleme ve silmeyi verimli hale getirir",
      "Stack'i FIFO yapar",
      "Queue'yu LIFO yapar",
      "Dizideki indeksleri siler",
      "Grafı tamamen rastgele hale getirir"
    ],
    a: 0,
    difficulty: "medium",
    week: 9,
    topic: "AVL Ağacı",
    importance: 5,
    explanation: "AVL ağacı, kendini dengede tutan bir ikili arama ağacıdır. Normal BST tek tarafa uzarsa arama yavaşlayabilir. AVL ağacı rotasyonlarla dengeyi korur ve işlemlerin O(log n) seviyesinde kalmasını hedefler."
  },
  {
    q: "AVL ağacında denge bozulursa hangi işlem yapılır?",
    t: "mcq",
    o: [
      "Rotasyon",
      "Dequeue",
      "Pop",
      "Enqueue",
      "Linear Search"
    ],
    a: 0,
    difficulty: "medium",
    week: 9,
    topic: "AVL Rotasyon",
    importance: 5,
    explanation: "AVL ağacında sol ve sağ alt ağaçların yükseklik farkı fazla olursa denge bozulur. Bu durumda rotasyon yapılır. Rotasyon, ağacı yeniden dengeli hale getiren döndürme işlemidir."
  },
  {
    q: "AVL ağacında denge faktörü genellikle hangi değerler arasında olmalıdır?",
    t: "mcq",
    o: [
      "-1, 0, 1",
      "5, 6, 7",
      "10, 20, 30",
      "Sadece 100",
      "Sadece -10"
    ],
    a: 0,
    difficulty: "hard",
    week: 9,
    topic: "AVL Denge Faktörü",
    importance: 4,
    explanation: "AVL ağacında her düğüm için sol ve sağ alt ağaçların yükseklik farkı kontrol edilir. Denge faktörü genellikle -1, 0 veya 1 olmalıdır. Bu aralık dışına çıkarsa ağaç dengesiz kabul edilir ve rotasyon gerekebilir."
  },
  {
    q: "B ağacı genellikle hangi amaçla kullanılır?",
    t: "mcq",
    o: [
      "Büyük verilerde ve disk tabanlı sistemlerde hızlı arama yapmak için",
      "Stack'ten eleman çıkarmak için",
      "Sadece küçük dizileri yazdırmak için",
      "Sadece kuyruktaki ilk elemanı silmek için",
      "Sadece grafın düğüm derecesini bulmak için"
    ],
    a: 0,
    difficulty: "medium",
    week: 9,
    topic: "B Ağacı",
    importance: 4,
    explanation: "B ağacı, büyük veri kümelerinde ve disk tabanlı sistemlerde kullanılan dengeli, çok dallı bir ağaç yapısıdır. Veritabanı indeksleme ve dosya sistemlerinde tercih edilir çünkü daha az disk erişimiyle hızlı arama yapılmasına yardım eder."
  },
  {
    q: "Max Heap yapısında kökte hangi eleman bulunur?",
    t: "mcq",
    o: [
      "En büyük eleman",
      "En küçük eleman",
      "En son eklenen eleman",
      "İlk eklenen eleman",
      "Rastgele bir eleman"
    ],
    a: 0,
    difficulty: "medium",
    week: 7,
    topic: "Heap",
    importance: 4,
    explanation: "Max Heap yapısında her düğüm çocuklarından büyük veya eşit kabul edilir. Bu yüzden en büyük eleman her zaman kökte bulunur. Min Heap'te ise en küçük eleman köktedir."
  },
  {
    q: "Min Heap yapısında kökte hangi eleman bulunur?",
    t: "mcq",
    o: [
      "En büyük eleman",
      "En küçük eleman",
      "Her zaman son eklenen eleman",
      "Her zaman ilk silinen eleman",
      "Her zaman ortadaki eleman"
    ],
    a: 1,
    difficulty: "medium",
    week: 7,
    topic: "Heap",
    importance: 4,
    explanation: "Min Heap yapısında her düğüm çocuklarından küçük veya eşit kabul edilir. Bu yüzden en küçük eleman kökte yer alır. Öncelikli kuyruklarda heap mantığı sık kullanılır."
  },
  {
    q: "Linear Search yani doğrusal arama nasıl çalışır?",
    t: "mcq",
    o: [
      "Elemanları baştan sona tek tek kontrol eder",
      "Veriyi her adımda ikiye böler",
      "Her zaman en küçük elemanı seçer",
      "Yan yana elemanları yer değiştirir",
      "Önce kökü sonra sol tarafı gezer"
    ],
    a: 0,
    difficulty: "easy",
    week: 12,
    topic: "Linear Search",
    importance: 5,
    explanation: "Linear Search en basit arama yöntemidir. Aranan değer bulunana kadar elemanlar baştan sona tek tek kontrol edilir. Veri sıralı olmak zorunda değildir. En kötü durumda tüm elemanlara bakılması gerekir, bu yüzden karmaşıklığı O(n)'dir."
  },
  {
    q: "Binary Search yani ikili arama için en önemli şart hangisidir?",
    t: "mcq",
    o: [
      "Verinin sıralı olması",
      "Verinin mutlaka stack içinde olması",
      "Verinin mutlaka graf olması",
      "Verinin tamamen rastgele olması",
      "Verinin sadece metinlerden oluşması"
    ],
    a: 0,
    difficulty: "easy",
    week: 12,
    topic: "Binary Search",
    importance: 5,
    explanation: "Binary Search sıralı veride çalışır. Ortadaki elemana bakar, aranan değer küçükse sol yarıya, büyükse sağ yarıya geçer. Veri sıralı değilse hangi tarafa gidileceği bilinemeyeceği için binary search doğru çalışmaz."
  },
  {
    q: "Binary Search neden Linear Search'e göre daha hızlıdır?",
    t: "mcq",
    o: [
      "Çünkü her adımda arama alanını yaklaşık yarıya indirir",
      "Çünkü hiç karşılaştırma yapmaz",
      "Çünkü sadece ilk elemana bakar",
      "Çünkü verileri rastgele siler",
      "Çünkü sadece bağlı listede çalışır"
    ],
    a: 0,
    difficulty: "medium",
    week: 12,
    topic: "Binary Search Mantığı",
    importance: 5,
    explanation: "Binary Search her adımda arama alanını ikiye böler. Örneğin 100 elemanda arama yaparken tek tek 100 elemana bakmak yerine her adımda yarısını eler. Bu yüzden karmaşıklığı O(log n)'dir. Ancak veri sıralı olmalıdır."
  },
  {
    q: "Jump Search hangi veri türünde daha anlamlıdır?",
    t: "mcq",
    o: [
      "Sıralı dizilerde",
      "Sırasız stack yapısında",
      "Rastgele graf yapısında",
      "Sadece ağaç kökünde",
      "Sadece tek elemanlı listede"
    ],
    a: 0,
    difficulty: "medium",
    week: 12,
    topic: "Jump Search",
    importance: 3,
    explanation: "Jump Search sıralı dizilerde belirli bloklar halinde sıçrayarak arama yapar. Örneğin belirli aralıklarla ileri atlar, aranan değerin bulunabileceği bloğu tespit edince o blok içinde doğrusal arama yapar."
  },
  {
    q: "Bubble Sort algoritmasının temel mantığı hangisidir?",
    t: "mcq",
    o: [
      "Yan yana elemanları karşılaştırıp büyük olanı sona doğru taşımak",
      "Her zaman ortadaki elemanı seçmek",
      "Kökten başlayıp sola gitmek",
      "İlk giren elemanı ilk çıkarmak",
      "Son giren elemanı ilk çıkarmak"
    ],
    a: 0,
    difficulty: "easy",
    week: 10,
    topic: "Bubble Sort",
    importance: 5,
    explanation: "Bubble Sort yan yana duran iki elemanı karşılaştırır. Eğer soldaki eleman sağdakinden büyükse yer değiştirir. Böylece büyük elemanlar her turda dizinin sonuna doğru gider. Basittir ama büyük veri için yavaştır."
  },
  {
    q: "Selection Sort algoritmasının temel mantığı hangisidir?",
    t: "mcq",
    o: [
      "Her turda en küçük elemanı seçip doğru konuma yerleştirmek",
      "Yan yana elemanları sadece bir kez karşılaştırmak",
      "Veriyi her adımda ikiye bölmek",
      "Queue'dan eleman çıkarmak",
      "Stack'e eleman eklemek"
    ],
    a: 0,
    difficulty: "easy",
    week: 11,
    topic: "Selection Sort",
    importance: 5,
    explanation: "Selection Sort, sıralanmamış bölümdeki en küçük elemanı bulur ve dizinin başındaki doğru konuma yerleştirir. Adı seçmeli sıralamadır çünkü her turda uygun eleman seçilir. Tüm durumlarda genellikle O(n²) çalışır."
  },
  {
    q: "Insertion Sort algoritması hangi günlük örneğe benzetilebilir?",
    t: "mcq",
    o: [
      "Eldeki kartları sırayla doğru yere yerleştirmeye",
      "Banka sırasına",
      "Tabak yığınına",
      "Şehir haritasına",
      "Telefon kablosuna"
    ],
    a: 0,
    difficulty: "easy",
    week: 13,
    topic: "Insertion Sort",
    importance: 5,
    explanation: "Insertion Sort, eldeki iskambil kartlarını sıralamaya benzer. Her yeni eleman, daha önce sıralanmış bölüm içinde doğru yere yerleştirilir. Küçük veya neredeyse sıralı verilerde kullanışlı olabilir."
  },
  {
    q: "Bubble Sort, Selection Sort ve Insertion Sort için genel olarak hangi karmaşıklık sık görülür?",
    t: "mcq",
    o: ["O(1)", "O(log n)", "O(n)", "O(n²)", "O(0)"],
    a: 3,
    difficulty: "medium",
    week: 13,
    topic: "Sıralama Karmaşıklığı",
    importance: 5,
    explanation: "Bubble Sort, Selection Sort ve Insertion Sort temel sıralama algoritmalarıdır. Genellikle iç içe karşılaştırma veya tekrar eden geçişler yaptıkları için ortalama veya kötü durumda O(n²) karmaşıklığa sahiptirler. Bu yüzden büyük veri kümelerinde verimsiz olabilirler."
  },
  {
    q: "Merge Sort hangi temel yaklaşımla çalışır?",
    t: "mcq",
    o: [
      "Böl ve fethet",
      "Son giren ilk çıkar",
      "İlk giren ilk çıkar",
      "Sol küçük sağ büyük",
      "Yan yana tek karşılaştırma"
    ],
    a: 0,
    difficulty: "medium",
    week: 13,
    topic: "Merge Sort",
    importance: 4,
    explanation: "Merge Sort, böl ve fethet mantığıyla çalışır. Dizi küçük parçalara bölünür, sonra bu parçalar sıralı şekilde birleştirilir. Temel sıralamalara göre büyük verilerde daha verimli olabilir."
  },
  {
    q: "Quick Sort algoritmasında kullanılan temel kavram hangisidir?",
    t: "mcq",
    o: ["Pivot", "Front", "Rear", "Root only", "Leaf only"],
    a: 0,
    difficulty: "medium",
    week: 13,
    topic: "Quick Sort",
    importance: 4,
    explanation: "Quick Sort, pivot adı verilen bir eleman seçer. Elemanları pivotun küçükleri ve büyükleri olarak ayırır. Sonra bu parçaları tekrar sıralar. Ortalama durumda oldukça hızlı bir sıralama algoritmasıdır."
  },
  {
    q: "Graf veri yapısı en doğru şekilde nasıl tanımlanır?",
    t: "mcq",
    o: [
      "Düğümlerden ve bu düğümler arasındaki kenarlardan oluşan yapı",
      "Sadece yan yana duran sayı dizisi",
      "Son girenin ilk çıktığı yapı",
      "İlk girenin ilk çıktığı yapı",
      "Sadece kökü olan ama bağlantısı olmayan yapı"
    ],
    a: 0,
    difficulty: "easy",
    week: 14,
    topic: "Graf",
    importance: 5,
    explanation: "Graf, düğümlerden ve bu düğümleri birbirine bağlayan kenarlardan oluşur. Şehirler düğüm, şehirler arasındaki yollar kenar olarak düşünülebilir. Sosyal ağlarda kişiler düğüm, arkadaşlık ilişkileri kenar olabilir."
  },
  {
    q: "Graf yapısında düğüm yani vertex neyi ifade eder?",
    t: "mcq",
    o: [
      "Graf üzerindeki nokta veya varlık",
      "İki nokta arasındaki bağlantı",
      "Stack'ten eleman çıkarma işlemi",
      "Queue'ya eleman ekleme işlemi",
      "Dizinin indeks numarası"
    ],
    a: 0,
    difficulty: "easy",
    week: 14,
    topic: "Graf Düğümü",
    importance: 5,
    explanation: "Düğüm, graf üzerindeki nokta veya varlıktır. Örneğin şehir haritasında şehirler düğümdür. Sosyal ağda kişiler düğümdür. Düğümleri birbirine bağlayan çizgilere ise kenar denir."
  },
  {
    q: "Graf yapısında kenar yani edge neyi ifade eder?",
    t: "mcq",
    o: [
      "İki düğüm arasındaki bağlantı",
      "Grafın en üst düğümü",
      "Hiç çocuğu olmayan düğüm",
      "Dizinin ilk elemanı",
      "Stack'in en üst elemanı"
    ],
    a: 0,
    difficulty: "easy",
    week: 14,
    topic: "Graf Kenarı",
    importance: 5,
    explanation: "Kenar, iki düğüm arasındaki bağlantıdır. Şehir örneğinde şehirler arasındaki yol kenardır. Sosyal ağ örneğinde iki kişi arasındaki arkadaşlık ilişkisi kenar gibi düşünülebilir."
  },
  {
    q: "Graf yapısında komşu düğüm ne demektir?",
    t: "mcq",
    o: [
      "Bir düğüme doğrudan kenarla bağlı olan düğüm",
      "Her zaman grafın en uzak düğümü",
      "Hiç bağlantısı olmayan düğüm",
      "Stack'te en üstteki düğüm",
      "Dizideki son eleman"
    ],
    a: 0,
    difficulty: "medium",
    week: 14,
    topic: "Komşu Düğüm",
    importance: 5,
    explanation: "Komşu düğüm, bir düğüme doğrudan bağlı olan düğümdür. Örneğin A ile B arasında çizgi varsa B, A'nın komşusudur. BFS ve DFS anlatılırken komşu kavramı çok önemlidir."
  },
  {
    q: "Graf yapısında düğüm derecesi neyi ifade eder?",
    t: "mcq",
    o: [
      "Bir düğümün bağlantı veya komşu sayısını",
      "Grafın toplam renk sayısını",
      "Dizinin uzunluğunu",
      "Stack'teki son elemanı",
      "Queue'daki ilk elemanı"
    ],
    a: 0,
    difficulty: "medium",
    week: 14,
    topic: "Düğüm Derecesi",
    importance: 5,
    explanation: "Düğüm derecesi, bir düğümün kaç bağlantısı olduğunu gösterir. Eğer A düğümü B ve C düğümlerine bağlıysa A'nın derecesi 2'dir. Yani derece, düğümün komşu sayısı gibi düşünülebilir."
  },
  {
    q: "Komşuluk matrisi neyi gösterir?",
    t: "mcq",
    o: [
      "Graf düğümleri arasında bağlantı olup olmadığını 0 ve 1 ile gösterir",
      "Stack'teki elemanların en üstten alta sırasını gösterir",
      "Queue'daki elemanların bekleme süresini gösterir",
      "Dizinin sadece ilk elemanını gösterir",
      "BST'deki sadece kök düğümü gösterir"
    ],
    a: 0,
    difficulty: "medium",
    week: 14,
    topic: "Komşuluk Matrisi",
    importance: 5,
    explanation: "Komşuluk matrisi, graf bağlantılarını tablo şeklinde gösterir. İki düğüm arasında bağlantı varsa 1, bağlantı yoksa 0 yazılır. Bu yöntem özellikle küçük graflarda bağlantıları düzenli göstermek için kullanılır."
  },
  {
    q: "Basit graf hangi özelliğe sahiptir?",
    t: "mcq",
    o: [
      "Paralel kenarı ve döngüsü olmayan yönsüz graf olması",
      "Her düğümün kendisine bağlı olması",
      "Her iki düğüm arasında birden fazla kenar bulunması",
      "Sadece stack ile çalışması",
      "Sadece queue ile çalışması"
    ],
    a: 0,
    difficulty: "medium",
    week: 14,
    topic: "Graf Türleri",
    importance: 4,
    explanation: "Basit graf, paralel kenarı ve döngüsü olmayan graf türüdür. Paralel kenar, aynı iki düğüm arasında birden fazla bağlantı olmasıdır. Döngü ise bir kenarın başladığı ve bittiği düğümün aynı olmasıdır."
  },
  {
    q: "Graf üzerinde BFS algoritması hangi veri yapısını kullanır?",
    t: "mcq",
    o: ["Stack", "Queue", "Dizi indeksini", "AVL rotasyonunu", "Selection Sort'u"],
    a: 1,
    difficulty: "medium",
    week: 14,
    topic: "BFS",
    importance: 5,
    explanation: "BFS, Queue yani kuyruk kullanır. Çünkü BFS yakından uzağa doğru arama yapar. Önce başlangıç noktasına doğrudan bağlı olan düğümler ele alınır, sonra onların bağlı olduğu düğümlere geçilir. Bu sıra mantığı FIFO yani kuyruk mantığına uygundur."
  },
  {
    q: "Graf üzerinde DFS algoritması hangi veri yapısını kullanır?",
    t: "mcq",
    o: ["Stack", "Queue", "Bubble Sort", "B ağacı", "Komşuluk matrisi"],
    a: 0,
    difficulty: "medium",
    week: 14,
    topic: "DFS",
    importance: 5,
    explanation: "DFS, Stack yani yığın mantığını kullanır. DFS bir yoldan gidebildiği kadar derine gider, yol bitince geri döner. Bu geri dönme mantığı stack yapısına uygundur. Stack son gidilen yerden geri dönmeyi kolaylaştırır."
  },
  {
    q: "BFS algoritmasının sıfırdan en anlaşılır açıklaması hangisidir?",
    t: "mcq",
    o: [
      "Başlangıç noktasına yakın olanları önce kontrol edip sonra daha uzaklara geçer",
      "Her zaman en büyük elemanı köke taşır",
      "Son giren elemanı ilk çıkarır",
      "Diziyi yan yana karşılaştırarak sıralar",
      "Küçük değerleri sola büyük değerleri sağa koyar"
    ],
    a: 0,
    difficulty: "medium",
    week: 14,
    topic: "BFS Mantığı",
    importance: 5,
    explanation: "BFS'yi yakından uzağa arama gibi düşünebilirsin. Bir noktadan başlar, önce o noktaya doğrudan bağlı olanları kontrol eder, sonra onların bağlı olduklarına geçer. Bu yüzden genişlik öncelikli arama denir ve Queue kullanır."
  },
  {
    q: "DFS algoritmasının sıfırdan en anlaşılır açıklaması hangisidir?",
    t: "mcq",
    o: [
      "Bir yoldan gidebildiği kadar derine gidip yol bitince geri döner",
      "İlk gelen elemanı ilk çıkarır",
      "Her zaman yan yana iki elemanı karşılaştırır",
      "Her zaman en küçük elemanı seçer",
      "Sadece dizide indeksle arama yapar"
    ],
    a: 0,
    difficulty: "medium",
    week: 14,
    topic: "DFS Mantığı",
    importance: 5,
    explanation: "DFS'yi labirentte bir yola girip sonuna kadar gitmek gibi düşünebilirsin. Yol bitince geri döner ve başka yola girer. Bu yüzden derinlik öncelikli arama denir. Geri dönme mantığı nedeniyle Stack kullanır."
  },
  {
    q: "BFS ve DFS arasındaki temel fark hangisidir?",
    t: "mcq",
    o: [
      "BFS yakından uzağa gider ve Queue kullanır; DFS bir yoldan derine gider ve Stack kullanır",
      "BFS Stack kullanır, DFS Queue kullanır",
      "BFS sadece dizileri sıralar, DFS sadece sayıları toplar",
      "BFS sadece AVL'de, DFS sadece B ağacında kullanılır",
      "BFS ve DFS arasında hiçbir fark yoktur"
    ],
    a: 0,
    difficulty: "hard",
    week: 14,
    topic: "BFS DFS Farkı",
    importance: 5,
    explanation: "BFS genişlik öncelikli aramadır; yakın düğümlerden başlayarak ilerler ve Queue kullanır. DFS derinlik öncelikli aramadır; bir yoldan sonuna kadar gider ve geri döner, bu yüzden Stack kullanır. Finalde en sık sorulabilecek farklardan biridir."
  }
];
