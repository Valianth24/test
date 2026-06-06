window.questionBank = [
  {
    q: "Dizi veri yapısında rastgele erişim ne anlama gelir?",
    t: "mcq",
    o: [
      "Elemanlara indeks numarasıyla doğrudan ulaşılabilmesi",
      "Elemanların sadece sırayla silinebilmesi",
      "Her elemanın sonraki elemanın adresini tutması",
      "Son eklenen elemanın ilk çıkarılması",
      "İlk eklenen elemanın ilk çıkarılması"
    ],
    a: 0,
    difficulty: "easy",
    week: 2,
    topic: "Dizilerde Rastgele Erişim",
    importance: 5,
    explanation: "Rastgele erişim, dizideki bir elemana indeks kullanarak doğrudan ulaşmak demektir. Örneğin dizi[4] denildiğinde bilgisayar baştan tek tek saymak zorunda kalmadan 4. indeksteki elemana gider. Bu yüzden dizilerde erişim genellikle O(1) kabul edilir."
  },
  {
    q: "Aşağıdakilerden hangisi dizilerin bağlı listelere göre avantajıdır?",
    t: "mcq",
    o: [
      "Sık ekleme ve silmede her zaman daha iyi olması",
      "İndeksle elemana hızlı erişim sağlaması",
      "Her elemanın pointer tutması",
      "Bellekte dağınık şekilde saklanması",
      "Boyutunun her zaman otomatik büyümesi"
    ],
    a: 1,
    difficulty: "easy",
    week: 2,
    topic: "Dizi Avantajları",
    importance: 5,
    explanation: "Dizilerin en önemli avantajı indeksle hızlı erişim sağlamasıdır. Eğer hangi sıradaki elemana gideceğini biliyorsan dizi çok hızlıdır. Bağlı listede ise istenen elemana ulaşmak için baştan başlayıp düğümler arasında ilerlemek gerekir."
  },
  {
    q: "Bağlı listedeki bir düğüm genellikle hangi iki bilgiyi içerir?",
    t: "mcq",
    o: [
      "Sadece renk ve boyut",
      "Sadece indeks ve uzunluk",
      "Veri ve sonraki düğümün adresi",
      "Kök ve yaprak bilgisi",
      "Sadece FIFO bilgisi"
    ],
    a: 2,
    difficulty: "easy",
    week: 3,
    topic: "Bağlı Liste Düğümü",
    importance: 5,
    explanation: "Bağlı listedeki her eleman düğüm olarak adlandırılır. Bir düğüm genellikle saklanan veriyi ve bir sonraki düğümün adresini tutar. Bu yüzden bağlı listedeki elemanlar bellekte yan yana olmak zorunda değildir."
  },
  {
    q: "Tek yönlü bağlı listede her düğüm hangi düğümü gösterir?",
    t: "mcq",
    o: [
      "Kendisinden önceki düğümü",
      "Kök düğümü",
      "En büyük düğümü",
      "Kendisinden sonraki düğümü",
      "Rastgele seçilen düğümü"
    ],
    a: 3,
    difficulty: "medium",
    week: 3,
    topic: "Tek Yönlü Bağlı Liste",
    importance: 5,
    explanation: "Tek yönlü bağlı listede her düğüm yalnızca kendisinden sonraki düğümün adresini tutar. Bu yüzden liste baştan sona doğru gezilir. Geriye doğru gitmek için ayrıca önceki düğüm bilgisi yoktur."
  },
  {
    q: "Çift yönlü bağlı listenin tek yönlü bağlı listeden farkı nedir?",
    t: "mcq",
    o: [
      "Hiç veri tutmaması",
      "Sadece bir eleman tutabilmesi",
      "Dizi gibi bellekte yan yana durması",
      "Sadece stack olarak çalışması",
      "Her düğümün hem önceki hem sonraki düğümü gösterebilmesi"
    ],
    a: 4,
    difficulty: "medium",
    week: 3,
    topic: "Çift Yönlü Bağlı Liste",
    importance: 4,
    explanation: "Çift yönlü bağlı listede her düğüm hem önceki hem de sonraki düğümün adresini tutar. Bu sayede listede ileri ve geri yönde dolaşmak mümkündür. Tek yönlü listede ise genellikle sadece sonraki düğüme gidilir."
  },
  {
    q: "Dairesel bağlı listeyi diğer bağlı listelerden ayıran temel özellik hangisidir?",
    t: "mcq",
    o: [
      "Son düğümün tekrar ilk düğümü göstermesi",
      "Her düğümün en fazla iki çocuk alması",
      "İlk giren elemanın ilk çıkması",
      "Son giren elemanın ilk çıkması",
      "Verilerin mutlaka sıralı olması"
    ],
    a: 0,
    difficulty: "medium",
    week: 3,
    topic: "Dairesel Bağlı Liste",
    importance: 4,
    explanation: "Dairesel bağlı listede son düğümün bağlantısı NULL yerine tekrar ilk düğümü gösterir. Böylece liste halka gibi olur. Bu yapı bazı döngüsel işlemlerde avantaj sağlayabilir."
  },
  {
    q: "Stack veri yapısında underflow durumu ne zaman oluşur?",
    t: "mcq",
    o: [
      "Stack doluyken eleman eklenirse",
      "Stack boşken eleman çıkarılmaya çalışılırsa",
      "Stack içinde iki eleman varsa",
      "Stack sadece sayı tutarsa",
      "Stack queue'ya çevrilirse"
    ],
    a: 1,
    difficulty: "medium",
    week: 4,
    topic: "Stack Underflow",
    importance: 4,
    explanation: "Underflow, boş bir stack'ten eleman çıkarılmaya çalışıldığında oluşur. Yani stack zaten boşsa pop işlemi yapılamaz. Bu kavram stack'in güvenli kullanılmasında önemlidir."
  },
  {
    q: "Stack veri yapısında overflow durumu ne zaman oluşabilir?",
    t: "mcq",
    o: [
      "Stack boşken pop yapılırsa",
      "Stack içinde tek eleman varsa",
      "Sabit kapasiteli stack doluyken yeni eleman eklenirse",
      "Stack'in en üst elemanına bakılırsa",
      "Stack'te LIFO mantığı kullanılırsa"
    ],
    a: 2,
    difficulty: "medium",
    week: 4,
    topic: "Stack Overflow",
    importance: 4,
    explanation: "Overflow, sabit boyutlu bir stack tamamen doluyken yeni eleman eklenmeye çalışılırsa oluşabilir. Yani kapasite doludur ama push yapılmak istenir. Bu yüzden stack kapasitesi kontrol edilmelidir."
  },
  {
    q: "Fonksiyon çağrılarında stack kullanılmasının temel nedeni nedir?",
    t: "mcq",
    o: [
      "Fonksiyonların alfabetik sıralanması",
      "Her fonksiyonun veritabanına kaydedilmesi",
      "Fonksiyonların sadece bir kez çalışması",
      "Son çağrılan fonksiyonun önce tamamlanması",
      "Fonksiyonların queue ile bekletilmesi"
    ],
    a: 3,
    difficulty: "medium",
    week: 4,
    topic: "Call Stack",
    importance: 5,
    explanation: "Programda bir fonksiyon başka bir fonksiyonu çağırabilir. En son çağrılan fonksiyon önce biter ve kontrol önceki fonksiyona döner. Bu davranış LIFO mantığına uyar, bu yüzden fonksiyon çağrıları stack ile yönetilir."
  },
  {
    q: "Parantez dengesi kontrolünde neden stack kullanılır?",
    t: "mcq",
    o: [
      "Çünkü ilk açılan parantez mutlaka ilk kapanır",
      "Çünkü parantezler rastgele silinir",
      "Çünkü stack sadece sayıları sıralar",
      "Çünkü queue son gireni ilk çıkarır",
      "Çünkü en son açılan parantezin önce kapanması gerekir"
    ],
    a: 4,
    difficulty: "hard",
    week: 4,
    topic: "Stack ile Parantez Kontrolü",
    importance: 4,
    explanation: "Parantez kontrolünde en son açılan parantezin önce kapanması gerekir. Örneğin ( [ ] ) yapısında önce [ kapanır, sonra ( kapanır. Bu durum son giren ilk çıkar mantığına uygundur. Bu yüzden stack kullanılır."
  },
  {
    q: "Queue veri yapısında front neyi ifade eder?",
    t: "mcq",
    o: [
      "Kuyruğun başındaki, ilk çıkacak elemanı",
      "Kuyruğun sonundaki, en son eklenen elemanı",
      "Stack'in en üst elemanını",
      "Ağacın kök düğümünü",
      "Grafın en uzak düğümünü"
    ],
    a: 0,
    difficulty: "easy",
    week: 5,
    topic: "Queue Front",
    importance: 5,
    explanation: "Front, kuyruğun baş tarafını ifade eder. Queue FIFO çalıştığı için ilk çıkacak eleman front tarafındadır. Banka sırasında en öndeki kişi nasıl önce işlem yaparsa queue'da da front elemanı önce çıkar."
  },
  {
    q: "Queue veri yapısında rear neyi ifade eder?",
    t: "mcq",
    o: [
      "Kuyruğun başındaki elemanı",
      "Kuyruğun sonunu, yeni elemanın eklendiği yeri",
      "Stack'in en üst noktasını",
      "Ağacın yaprak düğümünü",
      "Dizinin ilk indeksini"
    ],
    a: 1,
    difficulty: "easy",
    week: 5,
    topic: "Queue Rear",
    importance: 5,
    explanation: "Rear, kuyruğun son tarafıdır. Queue'ya yeni eleman eklendiğinde bu eleman rear tarafına eklenir. Yani enqueue işlemi rear tarafında gerçekleşir."
  },
  {
    q: "Dairesel kuyruk hangi problemi azaltmak için kullanılır?",
    t: "mcq",
    o: [
      "Stack'in LIFO çalışmasını",
      "Ağaçta kök bulunmasını",
      "Basit kuyrukta boşalan alanların boşa gitmesini",
      "BST'de sol tarafın küçük olmasını",
      "Grafın kenar içermesini"
    ],
    a: 2,
    difficulty: "medium",
    week: 5,
    topic: "Dairesel Kuyruk",
    importance: 4,
    explanation: "Basit kuyruk sabit diziyle yapıldığında baştan elemanlar çıkarıldıkça boş alanlar oluşabilir. Dairesel kuyrukta son ile baş mantıksal olarak bağlanır ve boşalan alanlar tekrar kullanılabilir. Bu bellek kullanımını daha verimli hale getirir."
  },
  {
    q: "Öncelikli kuyrukta elemanlar hangi mantığa göre işlenir?",
    t: "mcq",
    o: [
      "Her zaman alfabetik sıraya göre",
      "Her zaman en son girene göre",
      "Her zaman rastgele seçilerek",
      "Öncelik değerine göre",
      "Sadece eklenme saatine göre"
    ],
    a: 3,
    difficulty: "medium",
    week: 5,
    topic: "Öncelikli Kuyruk",
    importance: 4,
    explanation: "Öncelikli kuyrukta elemanlar sadece geliş sırasına göre değil, öncelik değerine göre işlenir. Örneğin acil serviste durumu ağır olan hasta daha önce alınabilir. Bu yapı genellikle heap ile ilişkilidir."
  },
  {
    q: "Deque yani çift uçlu kuyrukta hangi işlem mümkündür?",
    t: "mcq",
    o: [
      "Sadece baştan çıkarma",
      "Sadece sondan ekleme",
      "Sadece stack gibi pop yapma",
      "Sadece kök düğüm silme",
      "Hem baştan hem sondan ekleme ve çıkarma"
    ],
    a: 4,
    difficulty: "medium",
    week: 5,
    topic: "Deque",
    importance: 3,
    explanation: "Deque, double ended queue demektir. Yani iki uçlu kuyruktur. Hem baştan hem sondan eleman eklenebilir ve çıkarılabilir. Bu yüzden basit queue'ya göre daha esnektir."
  },
  {
    q: "Ağaç veri yapısında çocuk düğüm ne anlama gelir?",
    t: "mcq",
    o: [
      "Bir düğümün doğrudan altında bulunan düğüm",
      "Her zaman ağacın kökü",
      "Hiç bağlantısı olmayan düğüm",
      "Stack'in en üst elemanı",
      "Queue'nun son elemanı"
    ],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "Ağaç Terimleri",
    importance: 5,
    explanation: "Ağaçta bir düğümün doğrudan altında bulunan düğümlere çocuk denir. Örneğin A düğümünün altında B ve C varsa B ve C, A'nın çocuklarıdır. A ise onların ebeveynidir."
  },
  {
    q: "Ağaç veri yapısında ebeveyn düğüm ne anlama gelir?",
    t: "mcq",
    o: [
      "Hiç çocuğu olmayan düğüm",
      "Bir düğümün üstündeki ve ona doğrudan bağlı olan düğüm",
      "Her zaman en küçük değer",
      "Her zaman son eklenen düğüm",
      "Dizinin son elemanı"
    ],
    a: 1,
    difficulty: "easy",
    week: 6,
    topic: "Ağaç Terimleri",
    importance: 5,
    explanation: "Ebeveyn düğüm, bir düğümün doğrudan üstündeki düğümdür. A düğümünün altında B varsa A, B'nin ebeveynidir. Bu kavram aile ağacı mantığıyla çok kolay anlaşılır."
  },
  {
    q: "Ağaçta derinlik kavramı neyi ifade eder?",
    t: "mcq",
    o: [
      "Düğümün kaç çocuğu olduğunu",
      "Ağacın kaç yaprağı olduğunu",
      "Bir düğümün kökten olan uzaklığını",
      "Dizinin toplam uzunluğunu",
      "Queue'nun doluluk oranını"
    ],
    a: 2,
    difficulty: "medium",
    week: 6,
    topic: "Derinlik",
    importance: 4,
    explanation: "Derinlik, bir düğümün kök düğümden ne kadar uzakta olduğunu gösterir. Kökün derinliği genellikle 0 kabul edilir. Kökün çocukları 1 derinliktedir. Bu kavram ağaç seviyelerini anlamak için önemlidir."
  },
  {
    q: "Ağaçta yükseklik kavramı en doğru nasıl açıklanır?",
    t: "mcq",
    o: [
      "Düğümün veri tipidir",
      "Dizinin eleman sayısıdır",
      "Stack'in kapasitesidir",
      "Bir düğümden en uzak yaprağa kadar olan yol uzunluğudur",
      "Queue'nun ilk elemanıdır"
    ],
    a: 3,
    difficulty: "medium",
    week: 6,
    topic: "Yükseklik",
    importance: 4,
    explanation: "Yükseklik, bir düğümden aşağıya doğru en uzak yaprağa kadar olan yolun uzunluğudur. Ağacın yüksekliği, kökten en uzak yaprağa kadar olan mesafedir. Dengeli ağaçlarda yükseklik küçük tutulmaya çalışılır."
  },
  {
    q: "Tam ikili ağaç yani Full Binary Tree için doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "Her düğümün mutlaka üç çocuğu vardır",
      "Her düğümün ya iki çocuğu vardır ya da hiç çocuğu yoktur",
      "Her düğüm yalnızca bir çocuk taşır",
      "Tüm değerler rastgele yerleşir",
      "Sadece queue ile çalışır"
    ],
    a: 1,
    difficulty: "medium",
    week: 7,
    topic: "Tam İkili Ağaç",
    importance: 4,
    explanation: "Full Binary Tree yapısında her düğüm ya iki çocuğa sahiptir ya da hiç çocuğu yoktur. Yani tek çocuklu düğüm bulunmaz. Bu özellik sınavlarda tanım sorusu olarak gelebilir."
  },
  {
    q: "BST'ye 50 kökünden sonra 30 değeri eklenirse 30 nereye gider?",
    t: "mcq",
    o: [
      "50'nin sağına",
      "50'nin üstüne",
      "50'nin soluna",
      "Queue'nun sonuna",
      "Stack'in altına"
    ],
    a: 2,
    difficulty: "easy",
    week: 8,
    topic: "BST Ekleme",
    importance: 5,
    explanation: "BST'de küçük değerler sola, büyük değerler sağa gider. 30, 50'den küçük olduğu için 50'nin soluna yerleşir. Bu soru BST'nin temel kuralını ölçer."
  },
  {
    q: "BST'ye 50 kökünden sonra 70 değeri eklenirse 70 nereye gider?",
    t: "mcq",
    o: [
      "50'nin soluna",
      "Kökün üstüne",
      "Dizinin ilk indeksine",
      "50'nin sağına",
      "Stack'in en üstüne"
    ],
    a: 3,
    difficulty: "easy",
    week: 8,
    topic: "BST Ekleme",
    importance: 5,
    explanation: "70, 50'den büyük olduğu için BST kuralına göre sağ alt ağaca gider. BST'de sol taraf küçük, sağ taraf büyük değerleri tutar. Bu kural tüm alt ağaçlarda da geçerlidir."
  },
  {
    q: "BST'de yaprak düğüm silinirken ne yapılır?",
    t: "mcq",
    o: [
      "Tüm ağaç silinir",
      "Kök mutlaka değiştirilir",
      "AVL rotasyonu zorunludur",
      "Queue oluşturulur",
      "Düğüm doğrudan silinebilir"
    ],
    a: 4,
    difficulty: "medium",
    week: 8,
    topic: "BST Silme",
    importance: 4,
    explanation: "Yaprak düğümün çocuğu yoktur. Bu yüzden BST'de silinmesi en kolay durumdur. Yaprak düğüm doğrudan silinebilir; yerine çocuk bağlama gibi ek bir işlem gerekmez."
  },
  {
    q: "BST'de tek çocuklu bir düğüm silinirse genel olarak ne yapılır?",
    t: "mcq",
    o: [
      "Silinen düğümün yerine tek çocuğu bağlanır",
      "Tüm sağ alt ağaç silinir",
      "Kök her zaman NULL yapılır",
      "Dizi sıralanır",
      "Queue boşaltılır"
    ],
    a: 0,
    difficulty: "medium",
    week: 8,
    topic: "BST Silme",
    importance: 4,
    explanation: "BST'de silinecek düğümün tek çocuğu varsa, o çocuk silinen düğümün yerine bağlanır. Böylece ağaç yapısı korunur. Bu, yaprak silmeden biraz daha dikkat isteyen bir durumdur."
  },
  {
    q: "BST'de iki çocuklu düğüm silinirken neden daha dikkatli davranılır?",
    t: "mcq",
    o: [
      "Çünkü düğümün hiçbir bağlantısı yoktur",
      "Çünkü yerine uygun bir değer getirilerek BST düzeni korunmalıdır",
      "Çünkü stack boşalır",
      "Çünkü queue doludur",
      "Çünkü dizi boyutu sabittir"
    ],
    a: 1,
    difficulty: "hard",
    week: 8,
    topic: "BST Silme",
    importance: 4,
    explanation: "İki çocuklu düğüm silinirken ağacın sol küçük sağ büyük kuralı bozulmamalıdır. Bu yüzden genellikle silinen düğümün yerine inorder successor veya predecessor getirilir. Amaç BST düzenini korumaktır."
  },
  {
    q: "BST'de inorder traversal sonucu hangi özellik ortaya çıkar?",
    t: "mcq",
    o: [
      "Elemanlar rastgele gelir",
      "Kök en son silinir",
      "Değerler küçükten büyüğe sıralı gelir",
      "Queue FIFO çalışır",
      "Stack LIFO çalışır"
    ],
    a: 2,
    difficulty: "medium",
    week: 8,
    topic: "Inorder Traversal",
    importance: 5,
    explanation: "BST'de inorder dolaşma Sol-Kök-Sağ şeklindedir. Çünkü sol küçük, kök orta, sağ büyük değerleri tutar. Bu yüzden inorder traversal sonucu değerler küçükten büyüğe sıralı olarak elde edilir."
  },
  {
    q: "Aşağıdaki ağaçta kök 40, sol çocuk 20, sağ çocuk 60 ise preorder sırası nedir?",
    t: "mcq",
    o: [
      "20, 40, 60",
      "20, 60, 40",
      "60, 40, 20",
      "40, 20, 60",
      "40, 60, 20"
    ],
    a: 3,
    difficulty: "medium",
    week: 8,
    topic: "Preorder Traversal",
    importance: 4,
    explanation: "Preorder sırası Kök-Sol-Sağ şeklindedir. Kök 40 olduğu için önce 40 yazılır. Sonra sol çocuk 20, sonra sağ çocuk 60 gelir. Bu yüzden doğru sıra 40, 20, 60 olur."
  },
  {
    q: "Aşağıdaki ağaçta kök 40, sol çocuk 20, sağ çocuk 60 ise postorder sırası nedir?",
    t: "mcq",
    o: [
      "20, 60, 40",
      "40, 20, 60",
      "20, 40, 60",
      "60, 40, 20",
      "40, 60, 20"
    ],
    a: 0,
    difficulty: "medium",
    week: 8,
    topic: "Postorder Traversal",
    importance: 4,
    explanation: "Postorder sırası Sol-Sağ-Kök şeklindedir. Önce sol çocuk 20, sonra sağ çocuk 60, en son kök 40 gezilir. Bu yüzden doğru sıra 20, 60, 40 olur."
  },
  {
    q: "AVL ağacında balance factor yani denge faktörü nasıl düşünülür?",
    t: "mcq",
    o: [
      "Düğümün veri tipi olarak",
      "Sol alt ağacın yüksekliği ile sağ alt ağacın yüksekliği arasındaki fark olarak",
      "Queue'daki eleman sayısı olarak",
      "Dizinin indeks değeri olarak",
      "Stack'in en üst değeri olarak"
    ],
    a: 1,
    difficulty: "hard",
    week: 9,
    topic: "AVL Denge Faktörü",
    importance: 4,
    explanation: "AVL ağacında denge faktörü genellikle sol alt ağacın yüksekliği eksi sağ alt ağacın yüksekliği şeklinde düşünülür. Değer -1, 0 veya 1 ise düğüm dengeli kabul edilir. Bunun dışına çıkarsa rotasyon gerekebilir."
  },
  {
    q: "AVL ağacında LL dengesizliği için genellikle hangi işlem uygulanır?",
    t: "mcq",
    o: [
      "Sol rotasyon",
      "Queue temizleme",
      "Sağ rotasyon",
      "Bubble Sort",
      "Linear Search"
    ],
    a: 2,
    difficulty: "hard",
    week: 9,
    topic: "AVL Rotasyonları",
    importance: 3,
    explanation: "LL durumu, sol tarafın soluna ekleme yapılarak ağacın sol-heavy hale gelmesiyle oluşur. Bu durumda genellikle sağ rotasyon uygulanır. Rotasyonun amacı ağacın yüksekliğini dengelemektir."
  },
  {
    q: "AVL ağacında RR dengesizliği için genellikle hangi işlem uygulanır?",
    t: "mcq",
    o: [
      "Sağ rotasyon",
      "BFS",
      "DFS",
      "Sol rotasyon",
      "Selection Sort"
    ],
    a: 3,
    difficulty: "hard",
    week: 9,
    topic: "AVL Rotasyonları",
    importance: 3,
    explanation: "RR durumu, sağ tarafın sağına ekleme yapılınca oluşur. Ağaç sağ tarafa doğru ağırlaşır. Bu durumda genellikle sol rotasyon yapılır ve ağaç tekrar dengelenir."
  },
  {
    q: "B ağacının veritabanlarında kullanılmasının temel nedeni hangisidir?",
    t: "mcq",
    o: [
      "Düğüm derecesini sıfırlaması",
      "Disk erişimini azaltarak büyük verilerde hızlı arama sağlaması",
      "Stack'i FIFO yapması",
      "Queue'yu LIFO yapması",
      "Dizileri tamamen silmesi"
    ],
    a: 1,
    difficulty: "medium",
    week: 9,
    topic: "B Ağacı Kullanımı",
    importance: 4,
    explanation: "B ağaçları çok dallı ve dengeli yapılardır. Büyük veri kümelerinde, özellikle veritabanı ve dosya sistemlerinde daha az disk erişimiyle arama yapılmasına yardım eder. Bu yüzden indeksleme sistemlerinde önemlidir."
  },
  {
    q: "Red-Black Tree için aşağıdakilerden hangisi doğru bir özelliktir?",
    t: "mcq",
    o: [
      "Her düğümün mutlaka üç çocuğu vardır",
      "Her zaman queue mantığıyla çalışır",
      "Düğümler kırmızı veya siyah renklidir",
      "Tüm düğümler yapraktır",
      "Sadece dizi sıralar"
    ],
    a: 2,
    difficulty: "hard",
    week: 9,
    topic: "Red-Black Tree",
    importance: 3,
    explanation: "Red-Black Tree dengeli ağaç türlerinden biridir. Her düğüm kırmızı veya siyah renklidir. Belirli renk kuralları sayesinde ağaç dengeli kalır ve işlemler verimli yapılabilir."
  },
  {
    q: "Heap veri yapısında en büyük veya en küçük elemana hızlı erişilmesinin nedeni nedir?",
    t: "mcq",
    o: [
      "Tüm elemanların rastgele tutulması",
      "Elemanların graf düğümü olması",
      "Kök düğümde öncelikli değerin tutulması",
      "Stack'in boş olması",
      "Queue'nun dolu olması"
    ],
    a: 2,
    difficulty: "medium",
    week: 7,
    topic: "Heap",
    importance: 4,
    explanation: "Heap yapısında Max Heap ise en büyük eleman, Min Heap ise en küçük eleman kökte tutulur. Bu yüzden en öncelikli elemana erişmek hızlıdır. Heap, öncelikli kuyruk ve Heap Sort için önemlidir."
  },
  {
    q: "Linear Search hangi durumda özellikle tercih edilebilir?",
    t: "mcq",
    o: [
      "Veri mutlaka sıralıysa ve çok büyükse",
      "Veri sıralı değilse ve basit arama gerekiyorsa",
      "Sadece BST içinde arama yapılacaksa",
      "Sadece heap kökünü bulmak için",
      "Sadece AVL rotasyonu yapmak için"
    ],
    a: 1,
    difficulty: "easy",
    week: 12,
    topic: "Linear Search",
    importance: 5,
    explanation: "Linear Search, verinin sıralı olmasını gerektirmez. Elemanları baştan sona tek tek kontrol eder. Basit ama büyük veri için yavaş olabilir. En kötü durumda tüm elemanlara bakar ve O(n) çalışır."
  },
  {
    q: "Binary Search işleminde aranan değer ortadaki değerden küçükse ne yapılır?",
    t: "mcq",
    o: [
      "Sağ yarıya gidilir",
      "Arama tamamen durdurulur",
      "Sol yarıda aramaya devam edilir",
      "Dizi rastgele karıştırılır",
      "Stack'e push yapılır"
    ],
    a: 2,
    difficulty: "medium",
    week: 12,
    topic: "Binary Search",
    importance: 5,
    explanation: "Binary Search sıralı dizide çalışır. Ortadaki değer kontrol edilir. Aranan değer ortadaki değerden küçükse sağ taraf elenir ve sol yarıda aramaya devam edilir. Bu yüzden her adımda arama alanı küçülür."
  },
  {
    q: "Binary Search işleminde aranan değer ortadaki değerden büyükse ne yapılır?",
    t: "mcq",
    o: [
      "Sol yarıya gidilir",
      "Queue boşaltılır",
      "Arama hatalı kabul edilir",
      "Sağ yarıda aramaya devam edilir",
      "Dizi tamamen silinir"
    ],
    a: 3,
    difficulty: "medium",
    week: 12,
    topic: "Binary Search",
    importance: 5,
    explanation: "Sıralı dizide ortadaki değer aranan değerden küçükse, aranan değer sağ tarafta olabilir. Bu yüzden sol taraf elenir ve sağ yarıda aramaya devam edilir. Binary Search bu mantıkla hızlı çalışır."
  },
  {
    q: "Sıralı olmayan bir dizide Binary Search uygulamak neden doğru değildir?",
    t: "mcq",
    o: [
      "Çünkü Binary Search sadece stack ile çalışır",
      "Çünkü hangi yarının eleneceğine doğru karar verilemez",
      "Çünkü Binary Search hiç karşılaştırma yapmaz",
      "Çünkü Binary Search sadece graf üzerinde çalışır",
      "Çünkü Binary Search sadece ağaç siler"
    ],
    a: 1,
    difficulty: "medium",
    week: 12,
    topic: "Binary Search Şartı",
    importance: 5,
    explanation: "Binary Search, ortadaki değere bakarak aranan değerin solda mı sağda mı olduğunu anlamaya çalışır. Bu karar ancak veri sıralıysa doğru verilebilir. Veri sıralı değilse yanlış taraf elenebilir."
  },
  {
    q: "Bubble Sort'ta bir tur sonunda genellikle hangi eleman doğru yerine yaklaşır?",
    t: "mcq",
    o: [
      "En küçük eleman her zaman başa gelir",
      "Ortadaki eleman silinir",
      "En büyük eleman sona doğru gider",
      "Kök düğüm değişir",
      "Queue'nun front elemanı değişmez"
    ],
    a: 2,
    difficulty: "medium",
    week: 10,
    topic: "Bubble Sort",
    importance: 5,
    explanation: "Bubble Sort yan yana elemanları karşılaştırır. Büyük olan eleman sağa doğru ilerler. Bu yüzden her tur sonunda büyük elemanlardan biri dizinin sonuna yerleşir. Bu mantık kabarcık gibi sona çıkma benzetmesiyle anlatılır."
  },
  {
    q: "Selection Sort'ta her turda yapılan ana işlem nedir?",
    t: "mcq",
    o: [
      "Ortadaki elemanı pivot seçmek",
      "En küçük elemanı bulup doğru konuma koymak",
      "Son giren elemanı çıkarmak",
      "İlk giren elemanı çıkarmak",
      "Düğüm derecesi hesaplamak"
    ],
    a: 1,
    difficulty: "easy",
    week: 11,
    topic: "Selection Sort",
    importance: 5,
    explanation: "Selection Sort'ta sıralanmamış bölümdeki en küçük eleman bulunur ve sıralı bölümün sonuna yerleştirilir. Yani algoritma her turda seçim yapar. Bu yüzden adı seçmeli sıralamadır."
  },
  {
    q: "Insertion Sort özellikle hangi durumda daha iyi performans gösterebilir?",
    t: "mcq",
    o: [
      "Veri tamamen rastgele ve çok büyükse",
      "Veri neredeyse sıralıysa",
      "Veri sadece graf düğümlerinden oluşuyorsa",
      "Veri stack içinde saklanıyorsa",
      "Veri mutlaka B ağacıysa"
    ],
    a: 1,
    difficulty: "medium",
    week: 13,
    topic: "Insertion Sort",
    importance: 4,
    explanation: "Insertion Sort, yeni elemanı sıralı bölümde doğru yere yerleştirir. Eğer veri zaten büyük ölçüde sıralıysa az sayıda kaydırma yapılır. Bu nedenle küçük veya neredeyse sıralı verilerde iyi olabilir."
  },
  {
    q: "Merge Sort'un temel avantajı hangisidir?",
    t: "mcq",
    o: [
      "Her durumda rastgele çalışması",
      "Büyük verilerde temel O(n²) sıralamalara göre daha verimli olabilmesi",
      "Sadece stack'te çalışması",
      "Verinin sıralı olmasını şart koşmaması ve hiç bellek kullanmaması",
      "Sadece queue elemanlarını silmesi"
    ],
    a: 1,
    difficulty: "medium",
    week: 13,
    topic: "Merge Sort",
    importance: 4,
    explanation: "Merge Sort böl ve fethet mantığıyla çalışır. Dizi parçalara bölünür ve parçalar sıralı olarak birleştirilir. Karmaşıklığı genellikle O(n log n) kabul edildiği için büyük veri kümelerinde Bubble veya Selection Sort'a göre daha iyi olabilir."
  },
  {
    q: "Quick Sort'ta pivot ne işe yarar?",
    t: "mcq",
    o: [
      "Queue'nun başını gösterir",
      "Diziyi küçükler ve büyükler olarak ayırmak için referans eleman olur",
      "Stack'teki en üst elemanı siler",
      "Ağacın yapraklarını sayar",
      "Grafın komşuluk matrisini oluşturur"
    ],
    a: 1,
    difficulty: "medium",
    week: 13,
    topic: "Quick Sort",
    importance: 4,
    explanation: "Quick Sort'ta pivot bir referans elemandır. Diğer elemanlar pivotun küçükleri ve büyükleri olarak ayrılır. Sonra aynı işlem alt parçalar için devam eder. Pivot seçimi performansı etkileyebilir."
  },
  {
    q: "Graf teorisinde izole yani ayrık düğüm ne demektir?",
    t: "mcq",
    o: [
      "Hiçbir kenarla başka düğüme bağlı olmayan düğüm",
      "Her düğüme bağlı olan düğüm",
      "Grafın en yüksek dereceli düğümü",
      "Queue'nun başındaki düğüm",
      "Stack'in en üstündeki düğüm"
    ],
    a: 0,
    difficulty: "medium",
    week: 14,
    topic: "Graf Terimleri",
    importance: 4,
    explanation: "Ayrık veya izole düğüm, başka hiçbir düğüme bağlı olmayan düğümdür. Yani derecesi 0'dır. Graf sorularında bağlantısı olmayan tek başına duran düğüm olarak görülebilir."
  },
  {
    q: "Graf teorisinde paralel kenar ne demektir?",
    t: "mcq",
    o: [
      "Bir düğümün kendisine dönmesi",
      "İki düğüm arasında birden fazla kenar bulunması",
      "Hiç bağlantısı olmayan düğüm",
      "Ağacın kök düğümü",
      "Dizinin ilk elemanı"
    ],
    a: 1,
    difficulty: "medium",
    week: 14,
    topic: "Paralel Kenar",
    importance: 4,
    explanation: "Paralel kenar, aynı iki düğüm arasında birden fazla bağlantı olmasıdır. Basit graf yapısında paralel kenar bulunmaz. Çoklu graf ise paralel kenar içerebilir."
  },
  {
    q: "Graf teorisinde döngü yani loop ne demektir?",
    t: "mcq",
    o: [
      "İki farklı düğüm arasında bağlantı olması",
      "Grafın tamamen bağlantısız olması",
      "Bir kenarın başladığı ve bittiği düğümün aynı olması",
      "Stack'in boş olması",
      "Queue'nun dolu olması"
    ],
    a: 2,
    difficulty: "medium",
    week: 14,
    topic: "Graf Döngüsü",
    importance: 4,
    explanation: "Döngü, bir kenarın aynı düğümden başlayıp aynı düğüme dönmesidir. Yani düğüm kendisine bağlıdır. Pseudograf gibi bazı graf türlerinde döngü bulunabilir."
  },
  {
    q: "Yönlü graf ile yönsüz graf arasındaki fark hangisidir?",
    t: "mcq",
    o: [
      "Yönsüz graf hiç kenar içermez",
      "Yönlü grafta kenarların gidiş yönü vardır",
      "Yönlü graf sadece dizilerde kullanılır",
      "Yönsüz graf sadece stack mantığıyla çalışır",
      "İkisinde de bağlantı kavramı yoktur"
    ],
    a: 1,
    difficulty: "medium",
    week: 14,
    topic: "Graf Türleri",
    importance: 5,
    explanation: "Yönlü grafta bağlantıların yönü vardır. A'dan B'ye bağlantı olması B'den A'ya bağlantı olduğu anlamına gelmeyebilir. Yönsüz grafta ise bağlantı iki yönlü kabul edilir."
  },
  {
    q: "Ağırlıklı graf ne demektir?",
    t: "mcq",
    o: [
      "Tüm düğümlerin aynı renkte olması",
      "Her düğümün çocuk sayısının iki olması",
      "Kenarların üzerinde maliyet, mesafe veya ağırlık değeri bulunması",
      "Grafın hiç kenar içermemesi",
      "Grafın sadece stack ile gezilmesi"
    ],
    a: 2,
    difficulty: "medium",
    week: 14,
    topic: "Ağırlıklı Graf",
    importance: 4,
    explanation: "Ağırlıklı grafta kenarların üzerinde mesafe, maliyet, süre gibi değerler bulunur. Örneğin şehirler arası yolları gösteren grafta kenar ağırlığı kilometre olabilir. En kısa yol problemlerinde bu değerler önemlidir."
  },
  {
    q: "Komşuluk matrisinde iki düğüm arasında bağlantı varsa genellikle hangi değer yazılır?",
    t: "mcq",
    o: ["0", "NULL", "1", "-1", "FIFO"],
    a: 2,
    difficulty: "easy",
    week: 14,
    topic: "Komşuluk Matrisi",
    importance: 5,
    explanation: "Komşuluk matrisinde bağlantı varsa genellikle 1 yazılır. Bağlantı yoksa 0 yazılır. Bu tablo, hangi düğümün hangi düğüme bağlı olduğunu görmeyi kolaylaştırır."
  },
  {
    q: "Komşuluk matrisinde iki düğüm arasında bağlantı yoksa genellikle hangi değer yazılır?",
    t: "mcq",
    o: ["1", "LIFO", "FIFO", "0", "Root"],
    a: 3,
    difficulty: "easy",
    week: 14,
    topic: "Komşuluk Matrisi",
    importance: 5,
    explanation: "Komşuluk matrisinde bağlantı yoksa 0 yazılır. Örneğin A ile C arasında kenar yoksa A satırı C sütununda 0 görülebilir. Bağlantı varsa 1 yazılır."
  },
  {
    q: "BFS algoritması hangi mantıkla çalışır?",
    t: "mcq",
    o: [
      "Bir yoldan sonuna kadar gidip geri dönerek",
      "Yakındaki düğümleri önce kontrol ederek",
      "Her zaman en büyük elemanı sona taşıyarak",
      "Sadece kök düğümü silerek",
      "Diziyi pivotla bölerek"
    ],
    a: 1,
    difficulty: "medium",
    week: 14,
    topic: "BFS Mantığı",
    importance: 5,
    explanation: "BFS, başlangıç noktasına yakın düğümleri önce kontrol eder. Önce doğrudan bağlı olanlara, sonra onların bağlı olduklarına geçer. Bu yüzden genişlik öncelikli arama denir ve Queue kullanır."
  },
  {
    q: "DFS algoritması hangi mantıkla çalışır?",
    t: "mcq",
    o: [
      "Yakındaki tüm düğümleri aynı anda yazdırarak",
      "Queue'ya göre ilk geleni çıkararak",
      "Bir yoldan gidebildiği kadar derine gidip sonra geri dönerek",
      "Diziyi küçükten büyüğe sıralayarak",
      "Kenar ağırlıklarını sıfırlayarak"
    ],
    a: 2,
    difficulty: "medium",
    week: 14,
    topic: "DFS Mantığı",
    importance: 5,
    explanation: "DFS, bir yol seçer ve o yolda gidebildiği kadar derine gider. Yol biterse geri dönüp başka yolu dener. Bu yüzden derinlik öncelikli arama denir ve Stack mantığıyla ilişkilidir."
  },
  {
    q: "BFS algoritmasının Queue kullanmasının nedeni hangisidir?",
    t: "mcq",
    o: [
      "En son görülen düğümü önce işlemek istemesi",
      "İlk görülen düğümleri önce işlemek istemesi",
      "Küçük değerleri sola koyması",
      "Büyük değerleri sağa koyması",
      "Pivot seçmesi"
    ],
    a: 1,
    difficulty: "hard",
    week: 14,
    topic: "BFS Queue İlişkisi",
    importance: 5,
    explanation: "BFS, önce görülen düğümleri önce işler. Bu FIFO mantığıdır. Queue da FIFO çalışır. Bu yüzden BFS algoritması kuyruk veri yapısıyla anlatılır."
  },
  {
    q: "DFS algoritmasının Stack kullanmasının nedeni hangisidir?",
    t: "mcq",
    o: [
      "İlk görülen düğümü önce işlemek istemesi",
      "Veriyi küçükten büyüğe sıralaması",
      "Son gidilen noktadan geri dönme mantığına ihtiyaç duyması",
      "Her düğümü iki çocukla sınırlaması",
      "Komşuluk matrisinde 0 yazması"
    ],
    a: 2,
    difficulty: "hard",
    week: 14,
    topic: "DFS Stack İlişkisi",
    importance: 5,
    explanation: "DFS bir yoldan derine gider. Yol bitince en son geldiği yere geri dönmesi gerekir. Bu davranış LIFO mantığına uygundur. Stack de LIFO çalışır. Bu yüzden DFS stack ile ilişkilidir."
  },
  {
    q: "Hash tablo hangi mantığa dayalı bir veri yapısıdır?",
    t: "mcq",
    o: [
      "Anahtar-değer eşleşmesi",
      "Son giren ilk çıkar",
      "İlk giren ilk çıkar",
      "Sol küçük sağ büyük",
      "Yan yana karşılaştırma"
    ],
    a: 0,
    difficulty: "medium",
    week: 1,
    topic: "Hash Tablosu",
    importance: 4,
    explanation: "Hash tablo, anahtar-değer mantığına dayanır. Örneğin öğrenci numarası anahtar, öğrencinin adı değer olabilir. Amaç doğru hash fonksiyonu ile veriye hızlı erişmektir."
  },
  {
    q: "Hash tabloların temel avantajı hangisidir?",
    t: "mcq",
    o: [
      "Her zaman sıralı çıktı vermesi",
      "Veriye hızlı erişim sağlayabilmesi",
      "Sadece ağaç olarak çalışması",
      "Her düğümün iki çocuk alması",
      "Sadece queue kullanması"
    ],
    a: 1,
    difficulty: "medium",
    week: 1,
    topic: "Hash Tablosu",
    importance: 4,
    explanation: "Hash tablolar doğru kullanıldığında anahtar üzerinden veriye hızlı erişim sağlar. Bu yüzden önbellekleme, indeksleme ve hızlı arama gereken alanlarda kullanılabilir."
  },
  {
    q: "Veri yapısı seçerken en önemli ölçütlerden biri hangisidir?",
    t: "mcq",
    o: [
      "Sadece değişken adının uzunluğu",
      "Sadece ekran rengi",
      "Yapılacak işlemlerin türü ve performans ihtiyacı",
      "Klavye markası",
      "Monitör çözünürlüğü"
    ],
    a: 2,
    difficulty: "medium",
    week: 1,
    topic: "Veri Yapısı Seçimi",
    importance: 5,
    explanation: "Veri yapısı seçerken ne yapmak istediğine bakılır. Hızlı indeks erişimi gerekiyorsa dizi, sık ekleme-silme gerekiyorsa bağlı liste, son yapılanı geri almak gerekiyorsa stack, sıra mantığı gerekiyorsa queue tercih edilebilir."
  },
  {
    q: "Arama işlemini hızlandırmak için verinin önceden sıralı olması hangi algoritma için özellikle gereklidir?",
    t: "mcq",
    o: [
      "Linear Search",
      "Binary Search",
      "Pop",
      "Enqueue",
      "DFS"
    ],
    a: 1,
    difficulty: "easy",
    week: 12,
    topic: "Binary Search",
    importance: 5,
    explanation: "Binary Search için veri sıralı olmalıdır. Çünkü algoritma ortadaki elemana bakarak sağ mı sol mu devam edeceğine karar verir. Sıralama yoksa bu karar güvenilir olmaz."
  },
  {
    q: "O(n) karmaşıklık sıfır bilen biri için en doğru nasıl açıklanır?",
    t: "mcq",
    o: [
      "Eleman sayısı arttıkça işlem sayısının da yaklaşık aynı oranda artması",
      "İşlemin her zaman tek adımda bitmesi",
      "İşlemin hiçbir zaman yapılmaması",
      "Her adımda verinin yarısının elenmesi",
      "İşlemin sadece iki elemanda çalışması"
    ],
    a: 0,
    difficulty: "medium",
    week: 12,
    topic: "Zaman Karmaşıklığı",
    importance: 5,
    explanation: "O(n), eleman sayısı arttıkça işlem süresinin de eleman sayısıyla birlikte artması demektir. Linear Search buna örnektir. 100 eleman varsa en kötü 100 elemana bakmak gerekebilir."
  },
  {
    q: "O(log n) karmaşıklık hangi mantığa daha yakındır?",
    t: "mcq",
    o: [
      "Her zaman tüm elemanlara bakma",
      "Her adımda arama alanını küçültme, genellikle yarıya indirme",
      "Sadece ilk elemana bakma",
      "Veriyi hiç kontrol etmeme",
      "Elemanları rastgele silme"
    ],
    a: 1,
    difficulty: "medium",
    week: 12,
    topic: "Zaman Karmaşıklığı",
    importance: 5,
    explanation: "O(log n), her adımda problem alanının ciddi şekilde küçüldüğü durumlarda görülür. Binary Search her adımda dizinin yarısını eler. Dengeli BST'de arama da benzer şekilde O(log n) olabilir."
  },
  {
    q: "O(n²) karmaşıklık neden büyük veriler için genellikle kötü kabul edilir?",
    t: "mcq",
    o: [
      "Çünkü işlem sayısı eleman sayısının karesi gibi hızlı büyüyebilir",
      "Çünkü işlem her zaman tek adımda biter",
      "Çünkü hiç karşılaştırma yapılmaz",
      "Çünkü sadece queue kullanılır",
      "Çünkü sadece kök düğüm bulunur"
    ],
    a: 0,
    difficulty: "medium",
    week: 13,
    topic: "Zaman Karmaşıklığı",
    importance: 5,
    explanation: "O(n²), eleman sayısı arttıkça işlem sayısının çok hızlı artabileceğini gösterir. Örneğin 10 elemanda 100'e yakın işlem, 100 elemanda 10000'e yakın işlem gerekebilir. Bubble Sort ve Selection Sort gibi algoritmalarda sık görülür."
  },
  {
    q: "Dizi, bağlı liste, stack ve queue hangi sınıfa girer?",
    t: "mcq",
    o: [
      "Lineer veri yapıları",
      "Lineer olmayan veri yapıları",
      "Sadece graf yapıları",
      "Sadece ağaç yapıları",
      "Sadece hash yapıları"
    ],
    a: 0,
    difficulty: "easy",
    week: 1,
    topic: "Lineer Veri Yapıları",
    importance: 5,
    explanation: "Dizi, bağlı liste, stack ve queue elemanları sıra halinde düşünülen yapılardır. Bu yüzden lineer veri yapılarıdır. Ağaç ve graf ise dallanma veya çoklu bağlantı içerdiği için lineer olmayan yapılardır."
  },
  {
    q: "Ağaç, graf ve hash tablo hangi veri yapısı grubunda değerlendirilir?",
    t: "mcq",
    o: [
      "Sadece stack yapıları",
      "Lineer olmayan veri yapıları",
      "Sadece queue yapıları",
      "Sadece dizi türleri",
      "Sadece bağlı liste türleri"
    ],
    a: 1,
    difficulty: "medium",
    week: 1,
    topic: "Lineer Olmayan Veri Yapıları",
    importance: 5,
    explanation: "Ağaç, graf ve hash tablo lineer olmayan veri yapıları arasında sayılır. Çünkü bu yapılarda veriler basit bir sıra halinde ilerlemez. Ağaçta hiyerarşi, grafta bağlantı ağı, hash tabloda anahtar-değer mantığı vardır."
  },
  {
    q: "Sık sık 'son yapılan işlemi geri al' özelliği gereken bir uygulamada hangi veri yapısı uygundur?",
    t: "mcq",
    o: ["Queue", "Graph", "Tree", "Stack", "Hash table"],
    a: 3,
    difficulty: "easy",
    week: 4,
    topic: "Stack Kullanım Alanı",
    importance: 5,
    explanation: "Geri alma işleminde en son yapılan işlem ilk geri alınır. Bu son giren ilk çıkar mantığıdır. Bu yüzden Undo/Redo gibi özelliklerde stack kullanılır."
  },
  {
    q: "Yazıcıya gönderilen belgelerin sırayla yazdırılması hangi veri yapısına benzer?",
    t: "mcq",
    o: ["Stack", "Tree", "Graph", "BST", "Queue"],
    a: 4,
    difficulty: "easy",
    week: 5,
    topic: "Queue Kullanım Alanı",
    importance: 5,
    explanation: "Yazıcı kuyruğunda ilk gönderilen belge genellikle önce yazdırılır. Bu ilk giren ilk çıkar mantığıdır. Bu yüzden yazıcı sırası queue veri yapısına benzer."
  },
  {
    q: "Bir dosya sistemi klasör-alt klasör ilişkisiyle düşünülürse hangi veri yapısına benzer?",
    t: "mcq",
    o: [
      "Ağaç",
      "Stack",
      "Queue",
      "Bubble Sort",
      "Linear Search"
    ],
    a: 0,
    difficulty: "easy",
    week: 6,
    topic: "Ağaç Kullanım Alanı",
    importance: 5,
    explanation: "Dosya sisteminde klasörlerin içinde alt klasörler bulunur. Bu üst-alt ilişki ağaç yapısına benzer. En üst klasör kök gibi, alt klasörler çocuk düğümler gibi düşünülebilir."
  },
  {
    q: "Şehirler ve şehirler arasındaki yollar hangi veri yapısıyla modellenebilir?",
    t: "mcq",
    o: [
      "Sadece stack",
      "Sadece queue",
      "Graf",
      "Sadece dizi",
      "Sadece bubble sort"
    ],
    a: 2,
    difficulty: "easy",
    week: 14,
    topic: "Graf Kullanım Alanı",
    importance: 5,
    explanation: "Şehirler düğüm, şehirler arasındaki yollar kenar olarak düşünülebilir. Bu yüzden şehir-yol ilişkileri graf veri yapısıyla modellenebilir. Harita ve yol bulma algoritmaları graf mantığını kullanır."
  }
];
