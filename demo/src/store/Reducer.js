const initialValue = {
  books: [
    {
      id: 1,
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781538728628_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      name: "The Wish",
      author: "Nicholas Sparks",
      price: 14,
      star: 3.5,
      dicscount: 9.99,
      date: "Noyabr 16, 2020",
      language: "İngilis",
      pages: 182,
      largep: 25.49,
      audiop: 35.99,
      type: "Ənənəvi",
      about1:
        "“Ən uzun gəzinti” və “Qayıdış” kitabının müəllifindən ilk məhəbbətin əbədi mirası və bizi əbədi olaraq təqib edən qərarlar haqqında bir roman gəlir.",
      about2:
        "1996-cı il Maggie Dawes üçün hər şeyi dəyişdirən il oldu. On altı yaşında Şimali Karolinanın Outer Banksındakı ucqar bir kənd olan Ocracoke-də çətinliklə tanıdığı xalasının yanına göndərildi, o, yalnız geridə qoyub getdiyi dostları və ailəsi haqqında düşünə bildi. . . adadakı bir neçə yeniyetmədən biri olan Bryce Trickett ilə tanış olana qədər. Yaraşıqlı, orijinal və West Point-ə yeni qəbul edilmiş Bryce ona küləkli çimərlik şəhərciyini sevməyin nə qədər çox olduğunu göstərdi və onu həyatının qalan hissəsini müəyyən edəcək bir ehtiras olan fotoqrafiya ilə tanış etdi.",
      about3:
        "2019-cu ilə qədər Maggie məşhur səyahət fotoqrafıdır. O, vaxtını Nyu-Yorkda uğurlu bir qalereya idarə etmək və dünyanın ucqar yerlərini fotoşəkil çəkmək arasında bölür. Lakin bu il o, gözlənilmədən Milad bayramı ilə əlaqədar əsaslandırılıb, ayıq tibbi diaqnozla barışmaqda çətinlik çəkir. Gənc köməkçidən getdikcə daha çox asılı olaraq, özünü ona yaxınlaşdırır.",
    },
    {
      id: 2,
      name: "The Sweetness of Water",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780316362481_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: " Nathan Harris",
      price: 19,
      star: 5,
      dicscount: 11.5,
      date: "Oktyabr 9, 2021",
      language: "İngilis",
      pages: 221,
      largep: 30.0,
      audiop: 36.5,
      type: "Ənənəvi",
      about1:
        "NYU YORK TIMES BESTSELLERİ / OPRAHIN KİTAB KLUBU, PREZİDENT OBAMA-NIN 2021'ci ildə SEVDİYİ KİTABLARINDAN BİRİNİ SEÇİN",
      about2:
        "The Known World və The Underground Railroad ruhunda, qardaş olan iki azad edilmiş adamla Corciya fermeri arasında mümkün olmayan əlaqə haqqında möcüzəli debüt (Vaşinqton Post) və təxəyyülün yüksək nailiyyəti (CBS This Morning) ittifaq onların həyatlarını və onun həyatını əbədi olaraq dəyişəcək - böyük fikir və əminliyə malik hekayəçi (Kirkus)",
      about3:
        "Onların hekayəsinə paralel olaraq iki Konfederasiya əsgəri arasında qadağan olunmuş romantika baş verir. Müharibədən bu yaxınlarda Köhnə Öküz şəhərinə qayıdan gənclər meşədə məclislərini keçirirlər. Lakin onların sirri aşkar edildikdə, qətl də daxil olmaqla, yaranan xaos bütün cəmiyyətə sarsıdıcı təsirlər qoyur. Bu qədər qarışıqlıqdan sonra, torpaq və Köhnə Öküzün yeni azad vətəndaşları üçün şəfalı bir vizyon təqdim edən, gözlənilməz bir lider kimi ortaya çıxan İzabelledir.",
    },
    {
      id: 3,
      name: "The Last Thing He Told Me",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781501171345_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "Laura Dave",
      price: 13.5,
      star: 4.5,
      dicscount: 11,
      date: "May 20, 2009",
      language: "İngilis",
      pages: 152,
      largep: 25.0,
      audiop: 24.99,
      type: "Ənənəvi",
      about1:
        "* VOGUE * ABŞ BUGÜN TƏRƏFINDAN SEÇİLƏN , YÜKSƏK SATIŞ GÖZLƏNİLƏN, İLİN ƏN YAXŞI KİTABI *",
      about2:
        "Owen Michaels yoxa çıxmazdan əvvəl, o, bir illik sevimli həyat yoldaşına bir qeyd göndərir: Onu qoruyun. Çaşqınlığına və qorxusuna baxmayaraq, Hannah Hall qeydin kimə aid olduğunu dəqiq bilir - Owenin on altı yaşlı qızı Beyli. Uşaq ikən anasını faciəvi şəkildə itirən Beyli. Yeni ögey anası ilə heç bir əlaqəsi olmayan Beyli.",
      about3:
        "Hannahın Owen-ə getdikcə çarəsizləşən zəngləri cavabsız qaldıqda, FTB Owenin müdirini həbs etdikcə, ABŞ marşalı və federal agentləri onun Sausalitodakı evinə xəbərsiz gəldikcə Hanna ərinin onun dediyi adam olmadığını tez anlayır. Və bu Beyli Owenin əsl şəxsiyyətini və nə üçün həqiqətən yoxa çıxdığını anlamaq üçün açarı saxlaya bilər.",
    },
    {
      id: 4,
      name: "Empire of the Vampire",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250245281_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: " Jay Kristoff",
      price: 20,
      star: 3.5,
      dicscount: "Bu məhsula endirim yoxdur",
      date: "Fevral 3, 2014",
      language: "İngilis",
      pages: 195,
      largep: 29.0,
      audiop: 25.5,
      type: "Ənənəvi",
      about1:
        "New York Times-ın ən çox satılan müəllifi Cey Kristoffdan heyrətamiz yeni qaranlıq fantaziya dastanının ilk illüstrasiyalı cildi olan Vampir İmperiyası gəlir.",
      about2:
        "Sonuncu günəşin doğmasından iyirmi yeddi uzun il keçdi. Təxminən otuz ildir ki, vampirlər bəşəriyyətə qarşı müharibə aparırlar; öz əbədi imperiyamızı qururlar, hətta bizim imperiyamızı yıxırlar. İndi qaranlıq dənizində yalnız bir neçə kiçik işıq qığılcımları dayanır.",
      about3:
        "Gabriel de León bir gümüş müqəddəsdir: səltənəti və kilsəni gecənin canlılarından müdafiə etməyə həsr olunmuş müqəddəs qardaşlığın üzvü. Ancaq bir dəfə Gümüş Orden belə dalğanın qarşısını ala bilmədi və indi yalnız Qabriel qaldı. ",
    },
    {
      id: 5,
      name: "A Marvellous Light",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250788870_p0_v8%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "Freya Marske",
      price: 24,
      star: 4,
      dicscount: 20,
      date: "İyun 22, 2011",
      language: "İngilis",
      pages: 198,
      largep: 26.99,
      audiop: 33,
      type: "Ənənəvi",
      about1:
        "Qırmızı, Ağ və Kral Mavisi debüt müəllifi Freya Marskenin sehrli, müqavilələr və sui-qəsdlərlə dolu Edvard İngiltərəsini əks etdirən 'Möcüzəli İşıq' əsərində Jonathan Strange və Mr Norrell ilə görüşür.",
      about2:
        "Robin Blyth həyatında kifayət qədər əziyyət çəkir. O, yaxşı bir böyük qardaş, məsuliyyətli bir işəgötürən və mərhum valideynlərinin həddi aşması ilə qeybə çəkilmiş kreslonun hirsli baroneti olmaq üçün mübarizə aparır. İnzibati xəta onu gizli sehrli cəmiyyətlə dövlət qulluğu əlaqəsi adlandırdığını görəndə, o, həmişə bildiyi qeyri-adi reallığın altında nəyin işlədiyini kəşf edir.",
      about3:
        "İndi Robin sehrin gözəlliyi və təhlükəsi, dözülməz ölümcül lənət və onunla gələn gələcəyə dair həyəcan verici görüntülərlə mübarizə aparmalıdır. Hər kəsdən fərqli şəkildə və uzaq bir yerdə",
    },
    {
      id: 6,
      name: "The Dictionary of Obscure Sorrows",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781501153648_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: " John Koenig",
      price: 9.99,
      star: 4,
      dicscount: "Bu məhsula endirim yoxdur",
      date: "Yanvar 10, 2019",
      language: "İngilis",
      pages: 79,
      largep: 15.0,
      audiop: 19.99,
      type: "Ənənəvi",
      about1:
        "Sözün hər mənasında əsl orijinal kitab olan “Qeyri-müəyyən Kədərlər Lüğəti” hamımızın hiss etdiyi, lakin indiyə qədər ifadə etməyə sözümüz olmayan duyğuları poetik şəkildə müəyyən edir.",
      about2:
        "Hər kəsin öz hekayəsinin baş qəhrəmanı olduğunu, hər birinin öz hekayəsi kimi canlı və mürəkkəb bir həyat yaşadığını anlayaraq, küçədə keçdiyiniz hər bir insanın həyatı haqqında heç düşünmüsünüzmü? Bu hissin bir adı var: “sonder”. Və ya bəlkə siz fırtınanın fırlandığını seyr etdiniz və həyatınızı sarsıdacağını ümid edərək fəlakət üçün ilkin aclıq hiss etdiniz. Buna “lachesizm” deyirlər. Yoxsa köhnə fotolara baxırdın və heç vaxt yaşamadığın bir müddət üçün nostalji əzabı hiss edirdin.",
      about3:
        "Qaranlıq Kədərlər Lüğəti həyatımızı təşkil edən izaholunmaz hisslər üzərində düşünərək, perspektiv dəyişikliyindən zövq alan hər kəs üçündür. Möhtəşəm paketi və gözəl təsvirləri ilə bu, hər yerdə kreativlər, söz həvəskarları və insanlar üçün mükəmməl hədiyyədir.",
    },
    {
      id: 7,
      name: "The Woman They Could Not Silence",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781492696728_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "Kate Moore",
      price: 13.99,
      star: 5,
      dicscount: 10,
      date: "Sentyabr 30,2019",
      language: "İngilis",
      pages: 129,
      largep: 15.0,
      audiop: 18.99,
      type: "Ənənəvi",
      about1:
        "New York Times, USA Today və Wall Street Journal-ın ən çox satılan müəllifi The Radium Girls-dən unudulmuş qadın qəhrəmanın daha bir qaranlıq və dramatik, lakin nəticədə ruhlandırıcı nağılı gəlir, onun ruhlandırıcı səyahəti qadın hüquqları üçün uzunmüddətli dəyişikliklərə səbəb olmuş və bu gün də rezonans doğuran ədalətsizlikləri ifşa etmişdir.",
      about2:
        "1860: Ştatlar arasında qarşıdurma yavaş-yavaş qaynamağa başlayanda evdar qadın və altı uşaq anası Elizabeth Packard öz döyüşü ilə üzləşir. Düşmən masanın üstündə oturur və qonşu otaqda yatır. Onun iyirmi bir illik əri ona qarşı sui-qəsd hazırlayır, çünki özünü getdikcə daha çox təhlükə altında hiss edir – Elizabethin intellekti, müstəqilliyi və öz fikirlərini boğmaq istəməməsi. Buna görə də arvadını yerinə qaytarmaq üçün plan qurur. Bir yay səhəri onu dəlixanaya təhvil verdi.",
      about3:
        "Ən çox satılan yazıçı Kate Moore parıldayan povest səsini öz azadlığı uğrunda cəsarətlə mübarizə aparan və bununla da milyonlarla insanı azad edən unudulmuş qadının unudulmuş hekayəsi olan “Susduqları bilməzdilər” romanına gətirir. Elizabetin susdurulmaqdan imtina etməsi və onun fasiləsiz ədalət axtarışı nəinki o dövrün tibb elminə meydan oxudu, həm də insan hüquqları sahəsində nəhəng bir sıçrayışa səbəb oldu, həm də ən faydalı dərsi nümayiş etdirdi: bəzən bizim ən böyük qəhrəmanlarımız içəridəkilərdir. özümüz.",
    },
    {
      id: 8,
      name: "The Dark Hours",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780316485647_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "Michael Connelly",
      price: 14.5,
      star: 4.5,
      dicscount: 12,
      date: "Mart 1, 2005",
      language: "İngilis",
      pages: 102,
      largep: 18,
      audiop: 20.5,
      type: "Ənənəvi",
      about1:
        "Şedevr — LAPD-nin detektivi Rene Ballard, Yeni il ərəfəsində metodik qatilin hücumundan sonra qorxu və sosial iğtişaşlarla yaralanmış şəhərdə ədaləti tapmaq üçün Harri Boşla qüvvələri birləşdirməlidir (Publishers Weekly).",
      about2:
        "Yeni il ərəfəsində geri sayımın sonunda Hollivudda xaos hökm sürür. Qəbiristanlıq növbəsində işləyən LAPD detektivi Renée Ballard, yüzlərlə şən adam silahlarını havaya atarkən ənənəvi qurğuşun yağışını gözləyir. Gecə yarısından cəmi bir neçə dəqiqə sonra Ballard, zəhmətkeş avtomobil mağazası sahibinin izdihamlı küçə şənliyinin ortasında güllə ilə vurulduğu səhnəyə çağırılır.",
      about3:
        "Hər iki işi həll etmək əzmində olan Ballard, pandemiya və son sosial iğtişaşlar tərəfindən silinməz şəkildə dəyişdirilən bir polis şöbəsində daim yoxuşa qaçdığını hiss edir. Bu, ətalət və aşağı əhval-ruhiyyə ilə o qədər mane olan bir şöbədir ki, Ballard arxalana biləcəyi bir detektivin yanına getməlidir: Harri Boş. Ancaq iki amansız detektiv köhnə və yeni işlərin harada kəsişdiyini tapmaq üçün birlikdə işlədikcə, onlar daim çiyinlərinə baxmalıdırlar. Onların izlədikləri qəddar yırtıcılar sirlərini gizlətmək üçün öldürməyə hazırdırlar.",
    },
    {
      id: 9,
      name: "Crossroads",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780374181178_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "Dean Winchester",
      price: 20.5,
      star: 2,
      dicscount: 15.5,
      date: "Avqust 19, 2018",
      language: "İngilis, Rus",
      pages: 117,
      largep: "Mövcud deyil",
      audiop: 29.5,
      type: "Ənənəvi",
      about1:
        "Conatan Franzenin toy dərinliyi və xarakterin canlılığı ilə sosial baxış genişliyi hədiyyəsi heç vaxt “Kəsişmə” filmindəki qədər göz qamaşdıran dərəcədə aydın olmamışdır.",
      about2:
        "23 dekabr 1971-ci ildir və Çikaqoda ağır hava proqnozlaşdırılır. Liberal şəhərətrafı kilsənin köməkçi pastoru Russ Hildebrandt, öz gizli həyatı olan arvadı Marion onu döyməsə, sevincsiz hesab etdiyi nikahdan azad olmaq ərəfəsindədir. Onların böyük övladı Klem, atasını parçalayacaq bir hərəkət edərək, kollecdən mənəvi mütləqiyyətlə yanaraq evə gəlir. Uzun müddətdir orta məktəb sinifinin sosial kraliçası olan Klemin bacısı Bekki kəskin şəkildə əks mədəniyyətə keçdi, onların yeddinci sinif şagirdlərinə narkotik satan parlaq kiçik qardaşı Perri isə daha yaxşı insan olmağa qərar verdi.",
      about3:
        "Bir-birinə qarışmış perspektivlər və davamlı gərginlik turu, onun hərəkəti əsasən bir qış günündə baş verir, Crossroads mənəvi böhranın əsas anında Midwestern ailəsinin hekayəsidir. Conatan Franzenin kiçik və böyük mənzərəni birləşdirən hədiyyəsi heç vaxt bu qədər göz qamaşdıran dərəcədə aydın olmamışdı.",
    },
    {
      id: 10,
      name: "The Island of Missing Trees",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781635578591_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "Elif Shafak",
      price: 19.5,
      star: 5,
      dicscount: "Bu məhsulda endirim mövcud deyil",
      date: "Aprel 25, 2017",
      language: "İngilis, Rus, Türk",
      pages: 203,
      largep: 21.99,
      audiop: 30.0,
      type: "Ənənəvi",
      about1:
        "Eşq və qəm, kök və budaq, köçkünlük və yurd, iman və inancın müdrik romanı. Zərərli vaxtlarımız üçün balzam -David Mitchell, Utopia Avenue müəllifi",
      about2:
        "Kiprli Rum və Kiprli Türk olan iki yeniyetmə hər ikisinin vətən adlandırdıqları adadakı meyxanada görüşür. Sarımsaq, çili bibəri və sürünən hanımeli çələngləri altında gizlənmiş meyxanada Kostas və Defnenin bir-birlərinə qadağan olunmuş sevgiləri böyüyür. Damdakı boşluqdan bir əncir ağacı uzanır və bu ağac onların sakit, xoşbəxt görüşlərinə, nəhayət, onların səssiz, gizli gedişlərinə şahidlik edir. Müharibə başlayanda, paytaxt külə və xarabalığa çevriləndə, yeniyetmələr yoxa çıxanda ağac oradadır. Onilliklər sonra Kostas qayıdır. O, yerli növlər axtaran botanikdir, amma əslində itirilmiş sevgini axtarır.",
      about3:
        "İllər sonra Londonda Ada Kazantzakisin yaşadığı evin arxa bağçasında ficus carica böyüyür. Bu ağac onun heç vaxt ziyarət etmədiyi bir ada ilə yeganə əlaqəsidir - onun ailəsinin problemli tarixi və dünyada öz yerini tapmaq üçün illərin sirlərini açmağa çalışarkən onun mürəkkəb şəxsiyyəti ilə yeganə əlaqəsi.",
    },
    {
      id: 11,
      name: "The Judge's List",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780593168486_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: " John Grisham, Mary-Louise Parker ",
      price: 39.99,
      star: 5,
      dicscount: "Bu məhsulda endirim mövcud deyil",
      date: "May 3, 2020",
      language: "İngilis,Türk",
      pages: 85,
      largep: 20.5,
      audiop: 39.99,
      type: "Audio",
      about1:
        "№1 NEW YORK TIMES BEST SELLER • Müstəntiq Leysi Stoltz seriyalı qatilin izinə düşür və “ilin ən yaxşı cinayət oxunuşlarından birində” şok edici şübhəli - oturan hakimə yaxınlaşır.... Yüksək texnologiyalı detallarla dolu. və şübhədən titrəyir... Bitirmək üçün bütün gecəni oyaq saxlamağa dəyər” (Wall Street Journal).",
      about2:
        "“The Whistler”də Leysi Stoltz cinayət sindikatından milyonlarla rüşvət alan korrupsioner hakimi araşdırdı. O, cinayətkarları uzaqlaşdırdı, ancaq hücuma məruz qaldıqdan və az qala öldürüldükdən sonra. Üç ildən sonra və qırx yaşına yaxınlaşan o, Floridanın Məhkəmə Davranışı Şurasında işindən yorulub və dəyişikliyə hazırdır.",
      about3:
        "Sonra o, bir sıra ləqəblərdən istifadə etdiyi üçün qorxduğu sirli bir qadınla tanış olur. Jeri Crosby'nin atası iyirmi il əvvəl hələ də həll edilməmiş və daş soyuqlaşan bir işdə öldürüldü. Ancaq Jeri'nin iyirmi ildir ki, təqib etdiyi bir şübhəli var. Yolda o, başqa qurbanlar da tapdı.",
    },
    {
      id: 12,
      name: "Game On: Tempting Twenty-Eight",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781797128443_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "Janet Evanovich, Lorelei King (Read by)",
      price: 26.99,
      star: 4,
      dicscount: 24.0,
      date: "Oktyabr 9, 2021",
      language: "İngilis",
      pages: 59,
      largep: "Mövcud deyil",
      audiop: 26.99,
      type: "Audio",
      about1:
        "Stefani Plum №1 New York Times bestseller müəllifi Janet Evanoviçin vəhşicəsinə məşhur seriyasının 28-ci kitabında Trentonda fəaliyyət göstərən yeni növ cinayətkarı ovlamaq üçün qayıdır. ",
      about2:
        "Stefani Plum gecə yarısı mənzilində ayaq səsləri ilə oyandıqda, o, silahını mətbəxindəki peçenye qabında saxlamamağı arzulayır. Təcavüzkarın həbs agenti Dizel, altı fut əzələsi və iki ildən artıqdır görmədiyi pis rəftar olduğunu biləndə, o, hələ də silahın lazımlı ola biləcəyini düşünür.",
      about3:
        "Dizel çıxır və Stephanie eyni qaçqınların cığırındadır: Oswald Çərşənbə, beynəlxalq kompüter hakerinə amansız olduğu qədər parlaqdır. Stefani texnoloji cəhətdən ən fərasətli dələduz olmaya bilər, lakin o, inadkar qətiyyəti, insan təbiətini başa düşməsi və bir qaçağı ədalətə çatdırmaq üçün demək olar ki, hər şeyi etməyə hazır olması ilə bunu yerinə yetirir. Dizelin bu halda onun partnyoru və ya rəqibi olub-olmadığına əmin deyil, çərşənbə günü kompüterinin arxasından real dünyaya çəkmək üçün səhnəni hazırlayarkən, o, hər addımda onu arxadan izləməli olacaq.",
    },
    {
      id: 13,
      name: "The Judge's List",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780593168486_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: " John Grisham, Mary-Louise Parker ",
      price: 39.99,
      star: 5,
      dicscount: "Bu məhsulda endirim mövcud deyil",
      date: "May 3, 2020",
      language: "İngilis,Türk",
      pages: 85,
      largep: 20.5,
      audiop: 39.99,
      type: "Audio",
      about1:
        "№1 NEW YORK TIMES BEST SELLER • Müstəntiq Leysi Stoltz seriyalı qatilin izinə düşür və “ilin ən yaxşı cinayət oxunuşlarından birində” şok edici şübhəli - oturan hakimə yaxınlaşır.... Yüksək texnologiyalı detallarla dolu. və şübhədən titrəyir... Bitirmək üçün bütün gecəni oyaq saxlamağa dəyər” (Wall Street Journal).",
      about2:
        "“The Whistler”də Leysi Stoltz cinayət sindikatından milyonlarla rüşvət alan korrupsioner hakimi araşdırdı. O, cinayətkarları uzaqlaşdırdı, ancaq hücuma məruz qaldıqdan və az qala öldürüldükdən sonra. Üç ildən sonra və qırx yaşına yaxınlaşan o, Floridanın Məhkəmə Davranışı Şurasında işindən yorulub və dəyişikliyə hazırdır.",
      about3:
        "Sonra o, bir sıra ləqəblərdən istifadə etdiyi üçün qorxduğu sirli bir qadınla tanış olur. Jeri Crosby'nin atası iyirmi il əvvəl hələ də həll edilməmiş və daş soyuqlaşan bir işdə öldürüldü. Ancaq Jeri'nin iyirmi ildir ki, təqib etdiyi bir şübhəli var. Yolda o, başqa qurbanlar da tapdı.",
    },
    {
      id: 14,
      name: "The Dark Hours",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781549107696_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "Renée Ballard",
      price: 35.99,
      star: 5,
      dicscount: "Bu məhsulda endirim mövcud deyil",
      date: "İyul 28, 2016",
      language: "İngilis, Rus, Türk, İspan",
      pages: 101,
      largep: 32.5,
      audiop: 35.99,
      type: "Audio",
      about1:
        "Şedevr”—LAPD detektivi Renée Ballard Yeni il ərəfəsində metodik qatilin tətilindən sonra qorxu və sosial iğtişaşlarla yaralanmış şəhərdə ədaləti tapmaq üçün Harri Boşla qüvvələri birləşdirməlidir (Publishers Weekly)",
      about2:
        "Yeni il ərəfəsində geri sayımın sonunda Hollivudda xaos hökm sürür. Qəbiristanlıq növbəsində işləyən LAPD detektivi Renée Ballard, yüzlərlə şən adam silahlarını havaya atarkən ənənəvi qurğuşun yağışını gözləyir. Gecə yarısından cəmi bir neçə dəqiqə sonra Ballard, zəhmətkeş avtomobil mağazası sahibinin izdihamlı küçə şənliyinin ortasında güllə ilə vurulduğu səhnəyə çağırılır.",
      about3:
        "Hər iki işi həll etmək əzmində olan Ballard, pandemiya və son sosial iğtişaşlar tərəfindən silinməz şəkildə dəyişdirilən bir polis şöbəsində daim yoxuşa qaçdığını hiss edir. Bu, ətalət və aşağı əhval-ruhiyyə ilə o qədər mane olan bir şöbədir ki, Ballard arxalana biləcəyi bir detektivin yanına getməlidir: Harri Boş. Ancaq iki amansız detektiv köhnə və yeni işlərin harada kəsişdiyini tapmaq üçün birlikdə işlədikcə, onlar daim çiyinlərinə baxmalıdırlar. İzlədikləri qəddar yırtıcılar sirlərini gizlətmək üçün öldürməyə hazırdırlar.",
    },
    {
      id: 15,
      name: "Better Off Dead (Jack Reacher Series #26)",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780593452738_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: " Lee Child, Andrew Child, Scott Brick (Read by)",
      price: 50.99,
      star: 4,
      dicscount: 44.99,
      date: "İyun 5, 2016",
      language: "İngilis, Rus, Türk, İspan",
      pages: 199,
      largep: 40.5,
      audiop: 50.99,
      type: "Audio",
      about1:
        "№1 NEW YORK TIMES BESTSELLER • Cek Riçer məşhur №1 ən çox satılan müəlliflər Li Çayld və Endryu Çayldın tamamilə yeni 'page-turner' trillerindədir.",
      about2:
        "Reacher istədiyi vaxt, istədiyi yerə gedir. Həmin səhər o, qərbə doğru gedirdi, amansız səhra günəşi altında gəzirdi - ta ki maraqlı bir mənzərə ilə qarşılaşana qədər. Cip kilometrlərlə məsafədəki yeganə ağaca çırpılıb. Bir qadın sükan üzərində yıxılıb.",
      about3:
        "Reacher tapılmaq istəməyən insanları tapmağı bacarır, ona görə də Fentonun özünəməxsus sirlərini saxladığını hiss etməsinə baxmayaraq, kömək etməyi təklif edir. Ancaq bir həyat tarazlıqda qalır. Bəlkə birdən çox. Lakin Dendonkeri aşağı salmaq Reacherin həyatının ən riskli işi olacaq. Uğursuzluq bir seçim deyil, çünki bu cür oyunda uduzan həmişə ölməkdən daha yaxşıdır.",
    },
    {
      id: 16,
      name: "Mercy (Atlee Pine Series #4)",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781549160592_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author:
        " David Baldacci, Brittany Pressley (Read by), Kyf Brewer (Read by)",
      price: 35.99,
      star: 3,
      dicscount: "Endirim mövcud deyil",
      date: "May 26, 2006",
      language: "İngilis",
      pages: 129,
      largep: 30.25,
      audiop: 35.99,
      type: "Audio",
      about1:
        "FTB agenti Atlee Pine-nin çoxdan itmiş bacısı Mersi üçün ürkütücü axtarışı №1 New York Times-ın ən çox satılan müəllifi David Baldacci-nin bu dəhşətli trillerində qaynama nöqtəsinə çatır.",
      about2:
        "FTB agenti Atlee Pine bütün həyatı boyu altı yaşında qaçırılan və bir daha görmədiyi əkiz bacısı Mersi-ni axtarır. Mersinin yoxa çıxması, daha sonra Atlee'nin valideynlərinin onu açıq-aşkar tərk etməsi ilə dağılan zədələnmiş bir ailəni geridə qoydu.",
      about3:
        "Atli nəhayət ailəsinə cəzbedici bir şəkildə yaxın olsa da, onun Mərhəmətə aparan uzun yolunun son mərhələsi hələ də ən xəyanətkar olacaq. Mercy illər əvvəl onu əsir götürənlərdən qaçmazdan əvvəl ən azı bir cəsədi geridə qoydu. Atlee bacısının hələ də sağ olub-olmadığını və belədirsə, bütün bu müddət ərzində necə sağ qaldığını bilmir. Həqiqət nəhayət üzə çıxanda Atlee Pine ən böyük təhlükə ilə üzləşəcək və bu, ona hər şeyin bahasına başa gələ bilər.",
    },
    {
      id: 17,
      name: "Go Tell the Bees That I Am Gone (Outlander Series #9)",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781705024935_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "Diana Gabaldon, Davina Porter (Narrated by)",
      price: 80.99,
      star: 5,
      dicscount: "Endirim mövcud deyil",
      date: "Noyabr 29, 2019",
      language: "İngilis, Rus, Azərbaycan",
      pages: 251,
      largep: 59.99,
      audiop: 80.99,
      type: "Audio",
      about1:
        "#1 NEW YORK TIMES BESTSELLERİ • Diana Qabaldon Outlander epik seriyasındakı ən yeni romanı ilə qayıdır. ",
      about2:
        "Jamie Fraser və Claire Randall 1746-cı ildə Jacobite Rising tərəfindən parçalandı və bir-birlərini yenidən tapmaq üçün iyirmi il çəkdi. İndi Amerika İnqilabı da eyni şeyi edəcəyi ilə hədələyir.1779-cu ildir və Claire və Jamie nəhayət qızları Brianna, əri Rocer və uşaqları ilə Freyzer silsiləsində yenidən qovuşdular. Ailənin bir yerdə olması Freyzerlərin mümkünsüz düşündüyü bir xəyaldır.",
      about3:
        "Brianna və Rocerin öz narahatlığı var: XX əsrdən qaçmağa səbəb olan təhlükələr onlara çata bilər. Bəzən onlar 1700-cü illərin təhlükələrini, o cümlədən xəstəlik, aclıq və yaxınlaşan müharibəni riskə atmağın onların ailələri üçün daha təhlükəsiz seçim olub-olmadığını soruşurlar.O qədər də uzaqda deyil, gənc William Ransom hələ də gəlir. Əsl atasının şəxsiyyətinin - və beləliklə, özünün - kəşfi ilə şərtlənir və Lord Con Qreyin barışması və qarşılaşacağı təhlükələr var. . . oğlunun və öz adından.",
    },
    {
      id: 18,
      name: "The Stranger in the Lifeboat CD: A Novel",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780063137585_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "Mitch Albom",
      price: 19.99,
      star: 3,
      dicscount: 15.5,
      date: "Dekabr 2, 2014",
      language: "İngilis, Türk",
      pages: 100,
      largep: 25.99,
      audiop: 19.99,
      type: "Audio",
      about1:
        "Əgər biz Allahı kömək üçün çağırsaq və Allah həqiqətən zühur etsə nə baş verərdi? ",
      about2:
        "Cənnət və Cənnətdən İlk Telefon Zəngi. İndi o, öz bədii əsərində ilk dəfə olaraq düşünür ki, əgər ilahi yardım üçün fəryad etdikdən sonra Allah həqiqətən qarşımızda görünsəydi, biz nə edərdik? İlahi necə görünür, səslənir və hərəkət edə bilər? Xilasedici qayıqdakı qəribdə, Albom bizi sona qədər təxmin etməyə davam edir: Bu qəribə və sakit adam həqiqətən özünün iddia etdiyi adamdırmı? Əslində partlayışa səbəb nə oldu? Sağ qalanlar artıq cənnətdədirlər, yoxsa cəhənnəmdədirlər?",
      about3:
        "Hekayə sərnişinlərdən biri olan Benji tərəfindən nəql edilir. O, sonradan bir il sonra boş xilasedici sal Montserrat adasını yuyanda aşkar edilən dəftərdə baş verənləri danışır.<br><br>Bu. Adanın baş müfəttişi Jarty LeFleur, həqiqətən baş verənlərin sirrini açmaq üçün öz cinləri ilə mübarizə aparan bir adama düşür. <br><br>Sizi ən dərin inanclarınız barədə düşünməyə vadar edən sürətli templi, cəlbedici roman, 'Xilasedici qayıqdakı qərib' dualarımıza cavabların onları heç gözləmədiyimiz yerdə tapa biləcəyini təklif edir.",
    },
    {
      id: 19,
      name: "The Storyteller: Tales of Life and Music",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780063137578_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "Dave Grohl",
      price: 29.99,
      star: 5,
      dicscount: 20.5,
      date: "Avqust 19, 2020",
      language: "İngilis, Türk, Rus",
      pages: 155,
      largep: 33,
      audiop: 29.99,
      type: "Audio",
      about1:
        "Pandemiya hamını bir neçə ay ərzində evdə və təcrid vəziyyətində saxlamasaydı, bu kitab heç vaxt baş verməzdi.",
      about2:
        "İllərdir bu ideyanı əyləndirərək və hətta bir neçə şübhəli fürsət təklif edərək (Bu, bir parça tortdur! Sadəcə dörd saatlıq müsahibələr edin, onu yazacaq başqa birini tapın, üzünüzü üz qabığına qoyun və voila!) bu hekayələri həmişə etdiyim kimi öz səsimlə danışmağa qərar verdim. Bu nağılları yazmaqdan duyduğum sevinc, qeyd etdiyim və dünya ilə bölüşmək üçün səbirsizləndiyim mahnıya yenidən qulaq asmaqdan, ləkələnmiş dəftərdən ibtidai jurnal yazısını oxumaqdan, hətta səsimi eşitməkdən fərqli deyil. uşaq vaxtı divarımdakı Kiss posterləri arasında sıçrayırdım.",
      about3:
        "Bu, əlbəttə ki, gündəlik işimi tərk etdiyim anlamına gəlmir, lakin bu, mənə Virciniya ştatının Springfield şəhərindən olan, çılğın xəyalları həyata keçirərkən həyatda gəzən bir uşaq olmağın necə bir şey olduğuna bir az işıq salmaq üçün yer verir. gənc musiqiçi idi. 18 yaşımda Scream ilə yola çıxmaqdan, Nirvana və Foo Fighters-da keçirdiyim vaxta, İggy Pop ilə tıxaclara və ya Akademiya Mükafatlarında oynamağa və ya AC/DC və Preservation Hall Jazz Band ilə rəqs etməyə, Tom Petty üçün nağara çalmağa və ya görüşə qədər Royal Albert Hall-da ser Paul McCartney, Joan Jett ilə yatmazdan əvvəl hekayələr və ya Balaca Riçardla təsadüfi görüş, qızlarımla bir epik gecə üçün dünyanın yarısını uçmaq... siyahı davam edir. Bu xatirələri sizin üçün bir az daha kəskin şəkildə gördüyüm obyektivə fokuslanmağı çox həyəcanla gözləyirəm.",
    },
    {
      id: 20,
      name: "Autopsy (Kay Scarpetta Series #25)",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780063137622_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "Patricia Cornwell, Susan Ericksen (Read by)",
      price: 39.99,
      star: 5,
      dicscount: 30.99,
      date: "Fevral 22, 2005",
      language: "İngilis",
      pages: 187,
      largep: 35.5,
      audiop: 39.99,
      type: "Audio",
      about1:
        "Ehtiyatlı, əlamətdar №1 ən çox satılan triller seriyasının bu yenidən buraxılışında baş həkim Dr. Kay Scarpetta iki vəhşicəsinə bir-birindən fərqli və dəhşətli qətllərə görə məsuliyyət daşıyanları ovlayır. ",
      about2:
        "Məhkəmə patoloqu Kay Scarpetta, demək olar ki, tam dövrə vurdu, Virciniyaya baş tibbi ekspert kimi qayıtdı, ştatlı karyerasına başladığı əyalət. Uzun illər uzaqda qaldıqdan sonra yenidən şəhərdə özünə yeni qız tapmaq, o, nəinki hədsiz bir katibə, həm də laqeydlik və potensial korrupsiya mirası ilə miras qalmışdır.",
      about3:
        "Eyni zamanda kosmosda çox məxfi laboratoriyada fəlakət baş verir və gəmidə olan ən azı iki alimin həyatını təhlükə altına alır. Həssas milli təhlükəsizlik işlərində ixtisaslaşan yüksək məxfi Qiyamət Komissiyasına təyin edilən Scarpetta Ağ Evə çağırılır və baş verənləri dəqiq öyrənmək tapşırılır. Ancaq o, kosmosda ilk potensial cinayət səhnəsini uzaqdan işləyərkən belə, görünən bir serial qatil yenidən evə çox yaxındır.",
    },
    {
      id: 21,
      name: "Harry Potter and the Sorcerer's Stone (Harry Potter Series #1)",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781524721251_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "J. K. Rowling, Jim Dale (Read by)",
      price: 29.99,
      star: 5,
      dicscount: 20.99,
      date: "Avqust 20,2012",
      language: "İngilis, Rus, Türk",
      pages: 165,
      largep: 60.5,
      audiop: 29.99,
      type: "Audio",
      about1: "Harri Potterin nə qədər məşhur olması barədə heç bir fikri yoxdur.  ",
      about2:
        "Bunun səbəbi o, yazıq bibisi və əmisi tərəfindən böyüdülür və dəhşətə gələn Harri onun valideynləri kimi həqiqətən sehrbaz olduğunu öyrənəcək. Lakin Harrini sehrbazlar üçün məşhur bir məktəbə dəvət etdikdə hər şey dəyişir və o, öz məşhur ilk doğuş hüququ haqqında bəzi ipuçlarını kəşf etməyə başlayır.",
      about3:
        "Sevimli bir nəhəng tərəfindən qarşılanmasının təəccüblü tərzindən tutmuş, qeyri-adi məktəbindəki unikal tədris proqramına və rəngarəng fakültəsinə qədər Harri özünü heç vaxt varlığını bilmədiyi mistik dünyanın dərinliklərinə çəkilmiş və öz nəcib taleyinə daha yaxın hiss edir.",
    },
    {
      id: 22,
      name: "Harry Potter and the Chamber of Secrets (Harry Potter Series #2)",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780807281949_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "J. K. Rowling, Jim Dale (Read by)",
      price: 49.95,
      star: 4,
      dicscount: "Endirim mövcud deyil",
      date: "Sentyabr 15, 2012",
      language: "İngilis, Rus, Türk",
      pages: 193,
      largep: 60.5,
      audiop: 49.95,
      type: "Audio",
      about1:
        "Durslilər o yay o qədər iyrənc idilər ki, Harri Potterin istədiyi şey Hoqvarts Cadu və Sehrbazlıq Məktəbinə qayıtmaq idi.",
      about2:
        "Lakin o, çantalarını yığarkən, Harri Dobbi adlı qəribə, iyrənc məxluqdan xəbərdarlıq alır ki, Harri Potter Hoqvartsa qayıtsa, fəlakət baş verəcək.Və onu vur. Harrinin Hoqvartsdakı ikinci ilində yeni işgəncələr və dəhşətlər baş qaldırır, o cümlədən, çılğıncasına ilişib qalmış yeni professor Gilderoy Lockheart, qızların hamamını təqib edən Nala Mirtl adlı ruh və Ron Uizlinin kiçik bacısı Cinninin arzuolunmaz diqqətləri.",
      about3:
        "Ancaq bunların hər biri əsl problem başlayanda və kimsə - və ya bir şey - Hogwarts tələbələrini daşa çevirməyə başlayanda kiçik əsəbi görünür. Bu, həmişəkindən daha zəhərli rəqib olan Drako Malfoy ola bilərmi? Bu, nəhayət sirli keçmişi danışılan Haqrid ola bilərmi? Yoxsa Hoqvartsdakı hər kəsin ən çox şübhələndiyi şəxs ola bilərmi... Harri Potterin özü?",
    },
    {
      id: 23,
      name: "Harry Potter and the Prisoner of Azkaban (Harry Potter Series #3)",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780807282328_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "J. K. Rowling, Jim Dale (Read by)",
      price: 55.0,
      star: 4,
      dicscount: 50.99,
      date: "Noyabr 25, 2012",
      language: "İngilis, Rus, Türk",
      pages: 113,
      largep: 50.0,
      audiop: 55.0,
      type: "Audio",
      about1:
        "Harri Potter və Azkaban Məhbusu rekord qıran seriyanın üçüncü kitabıdır. Azkabandan bu yaxınlarda qaçan bir qatilin xəbərləri hər kəsin üstünə gəlir və gənc Harri Potterə xəbərdarlıq edilir ki, Sirius Blek onu axtarmağa gələ bilər, lakin o, Hoqvartsa getdikcə yaxınlaşdıqca Sirius Blek və Harrinin valideynləri arasındakı tarix açılır. Güvən, dostluq və həmişə eşitdiyiniz ilk şeyin doğru olduğuna inanmamağın sehrli hekayəsi.",
      about2:
        "Uzun on iki il ərzində qorxulu Azkaban qalasında Sirius Blek adlı bir məhbus saxlanılırdı. Bir lənətlə on üç adamı öldürməkdə günahlandırılan onun Qaranlıq Lord Voldemortun varisi olduğu deyilirdi.",
      about3:
        "İndi o, qaçıb, hara gedəcəyi ilə bağlı yalnız iki ipucu buraxdı: Harri Potterin Sən Kim olduğunu Bilirsən məğlubiyyəti Blekin də süqutu. Azkban mühafizəçiləri Blekin yuxuda mızıldandığını eşitdilər: 'O, Hoqvartsdadır... o, Hoqvartsdadır.' Harri Potter təhlükəsiz deyil, hətta sehrli məktəbinin divarları arasında belə, ətrafı ilə əhatə olunmuşdu. onun dostları. Çünki hər şeyin üstündə, onların arasında bir xain də ola bilər.",
    },
    {
      id: 24,
      name: "Harry Potter and the Goblet of Fire (Harry Potter Series #4)",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780807282595_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "J. K. Rowling, Jim Dale (Read by)",
      price: 100.0,
      star: 5,
      dicscount: 80.99,
      date: "Yanvar 5, 2013",
      language: "İngilis, Rus, Türk",
      pages: 199,
      largep: 120.0,
      audiop: 100.0,
      type: "Audio",
      about1:
        "Harri Potter və Od Qədəhi seriyanın dördüncü kitabıdır. Harri Hoqvartsa qayıdır ki, onun beynində Voldemortla bağlı kabuslar görünür. Bu il Hogwartsda maraqlı bir hadisə var, amma bu əyləncədən daha təhlükəli olacaqmı?",
      about2:
        "Harrinin gördüyü qəribə yuxular, yara izləri və Qaranlıq Lordun qayıdışı ilə bağlı şayiələr arasında Harrinin xaç atası Sirius Blek Harrinin təhlükəsizliyini təmin etməyə çalışarkən getdikcə daha çox narahat olur. Harrinin kabusları gerçəkləşəcəkmi? Harri Potter və Od Qədəhi, gözləmədiyiniz sürprizlərlə yaxa qurtarmaq istəməyəcəyiniz maraqlı bir hekayədir.",
      about3:
        "Harri Potter “Harri Potter və Od Qədəhi” filmindəki sehrli macəralarının dördüncü ili üçün Hoqvartsa qayıdır. Bu il Harrinin 14 yaşı tamam olur və qızlarla maraqlanır, xüsusən də biri. Dark Magic ilə Harriyə yaxın birinin ölməsi ilə təhlükə gəlir. Daha çox öyrənmək üçün dinləməli olacaqsınız! Audionu 5 Yanvarda əldə etmək olar.",
    },
    {
      id: 25,
      name: "Harry Potter and the Order of the Phoenix (Harry Potter Series #5)",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780807220290_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "J. K. Rowling, Jim Dale (Read by)",
      price: 90.0,
      star: 3.5,
      dicscount: 70.99,
      date: "Yanvar 30, 2013",
      language: "İngilis, Rus, Türk",
      pages: 182,
      largep: 99.99,
      audiop: 90.0,
      type: "Audio",
      about1:
        "Səssiz bir dəhlizin sonunda bir qapı var. Və bu, Harri Potterin xəyallarını təqib edir. Başqa nə üçün o, gecənin bir yarısı oyanıb qorxu içində qışqıra bilərdi?",
      about2:
        "Və təbii ki, adı çəkilməməli olanların artan təhlükəsi. JK Rowling-in yeddi hissəli hekayəsinin indiyədək ən zəngin hissəsində Harri Potter sehirli dünyanın özünün hökumətinin etibarsızlığı və Hoqvartsdakı səlahiyyətlilərin iktidarsızlığı ilə üzləşir.",
      about3:
        "Buna baxmayaraq (və ya bəlkə də ona görə) dostlarında dərinlik və güc tapır, hətta bildiyindən də kənarda, sonsuz sədaqət; və dözülməz fədakarlıq.Süjeti qalın olsa da, dinləyicilər bu lentlər arasında yarışacaq və Harri kimi Hoqvartsı tərk edərək yalnız növbəti qatarın geri qayıtmasını arzulayacaqlar.",
    },
    {
      id: 26,
      name: "Harry Potter and the Half-Blood Prince (Harry Potter Series #6)",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780307283658_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "J. K. Rowling, Jim Dale (Read by)",
      price: 95.0,
      star: 5,
      dicscount: "Endirim mövcud deyil",
      date: "Fevral 27, 2013",
      language: "İngilis, Rus, Türk",
      pages: 174,
      largep: 99.99,
      audiop: 95.0,
      type: "Audio",
      about1:
        "Voldemorta qarşı müharibə yaxşı getmir: hətta Muggle hökumətləri bunu fərq edirlər. Ron tanış adlar axtarır The Daily Peyğəmbərin nekroloq səhifələrini skan edir. Dambldor uzun müddətdir ki, Hoqvartsda yoxdur və Feniks ordeni artıq itkilərə məruz qalıb.",
      about2:
        "Bütün müharibələrdə olduğu kimi, həyat davam edir. Altıncı kurs tələbələri Apparate etməyi öyrənirlər və bu prosesdə bir neçə qaşlarını itirirlər. Uizli əkizləri bizneslərini genişləndirirlər. Yeniyetmələr flört edir, dava edir və aşiq olurlar. Dərslər heç vaxt sadə olmur, baxmayaraq ki, Harri sirli melez Şahzadədən qeyri-adi yardım alır.",
      about3:
        "Beləliklə, Harri Potter hekayəsinin çoxqatlı altıncı hissəsində mərkəzi yer tutan daxili cəbhədir. Burada, Hoqvartsda Harri Lord Voldemort olan oğlanın tam və mürəkkəb hekayəsini axtaracaq və bununla da onun yeganə zəif tərəfini tapacaq.",
    },
    {
      id: 27,
      name: "Harry Potter and the Deathly Hallows (Harry Potter Series #7)",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780739360385_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "J. K. Rowling, Jim Dale (Read by)",
      price: 119.9,
      star: 4.5,
      dicscount: 100.99,
      date: "Mart 19, 2013",
      language: "İngilis, Rus, Türk",
      pages: 229,
      largep: 135.5,
      audiop: 119.9,
      type: "Audio",
      about1: "Hamısı bundan irəli gəlir - yaxşı və şərin son qarşılaşması.",
      about2:
        "Siz bütün dayanacaqları çəkməyi planlaşdırırsınız, lakin hər dəfə bir sirri həll edəndə daha üçü inkişaf edir. Siz irəliləyiş olmamasına baxmayaraq başladığınız yolda qalırsınızmı? Yolunuzu döndərir və kömək etməyən yeni liderə əməl edirsiniz? Siz öz instinktlərinizi dinləyirsiniz, yoxsa dostlarınız?",
      about3:
        "Lord Voldemort döyüşə hazırlaşır və Harri də buna hazırlaşır. Yanında Ron və Hermiona ilə o, Voldemortun Hortkuluqlarını ovlamağa, hər addımda təhlükədən qaçmağa və pisliyi birdəfəlik məğlub etməyin yolunu tapmağa çalışır. Bütün bunların sonu necə olur? Harri Potter və Ölüm Yadigarlarında tapın.",
    },
    {
      id: 28,
      name: "American Marxism",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781797122076_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: " Mark R. Levin, Jeremy Lowell (Read by)",
      price: 26.99,
      star: 4,
      dicscount: "Endirim  mövcud deyil",
      date: "Mart 2, 2020",
      language: "İngilis",
      pages: 126,
      largep: 20.5,
      audiop: 26.99,
      type: "Audio",
      about1:
        "Mübahisəli və təxribatçı Mark R. Levin – hüquqşünas, New York Times-ın bestselleri müəllifi və məşhur Fox News televiziya və radio şəxsiyyəti – müasir siyasi müzakirələrdə marksist düşüncənin təhlükələri kimi qiymətləndirdiyi və Amerikada açıq-aşkar tapdığı bir yayım xəbərdarlığı ilə geri döndü. sosial, mədəni və siyasi institutlar.",
      about2:
        "2009-cu ildə Mark R. Levin Konstitusiyaya əsaslanan dəyərlərə liberal hücumu dayandırmaq üçün fəlsəfi, tarixi və praktiki çərçivə təqdim edərək, unudulmaz 'Azadlıq və Tiranlıq' manifestində mühafizəkarları gücləndirdi. Bu kitab proqressivizmin azadlığımız üçün təhdidinin uçurumunda dayanmaq haqqında idi və indi, on ildən çox vaxt keçdikdən sonra, biz bu uçurumdan tamamilə keçdik və bunun əvəzini ödədik.",
      about3:
        "Amerika Marksizmində Levin, marksist ideologiyanın əsas elementlərinin indi Amerika cəmiyyətində və mədəniyyətində - məktəblərimizdən, mətbuatımızdan və korporasiyalarımızdan tutmuş Hollivud, Demokratik Partiya və Bayden prezidentliyinə qədər - necə geniş yayıldığını və onun tez-tez necə gizləndiyini izah edir. “proqressivizm”, “demokratik sosializm”, “sosial fəallıq” və s. kimi aldadıcı etiketlərdə. Levin özünün xarakterik kəskin təhlili ilə bu hərəkatların psixologiyasını və taktikasını, tələbələrin beyninin yuyulmasını, Tənqidi Yarış Nəzəriyyəsinin və Yaşıl Yeni Sövdələşmənin anti-Amerika məqsədlərini, əks səsləri susdurmaq üçün repressiya və senzuranın güclənməsini araşdırır. uyğunluğu təmin etmək.",
    },
    {
      id: 29,
      name: "Peril",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781797137964_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "Bob Woodward, Robert Costa, Robert Petkoff (Read by)",
      price: 35.99,
      star: 3,
      dicscount: 30.5,
      date: "Oktyabr 26, 2013",
      language: "İngilis,Rus",
      pages: 166,
      largep: 30.99,
      audiop: 30.5,
      type: "Audio",
      about1:
        "Prezident Donald Trampdan prezident Cozef R. Baydenə keçid Amerika tarixinin ən təhlükəli dövrlərindən biridir.",
      about2:
        "Vudvord və Kosta iğtişaşların mərkəzində 200-dən çox insanla müsahibə apardılar, nəticədə 6000 səhifədən çox stenoqram və uçurumun astanasında olan millətin heyranedici və qəti portreti yarandı.Vaşinqtonun bu klassik araşdırması. Həqiqətən baş verənlərin canlı, şahid ifadələri ilə oxucuları Trampın Ağ Evinin, Baydenin Ağ Evinin, 2020-ci il kampaniyasının və Pentaqonun və Konqresin içinə aparır. -gizli sifarişlərdən, məxfi zənglərin stenoqramlarından, gündəliklərdən, e-poçtlardan, görüş qeydlərindən və digər şəxsi və hökumət qeydlərindən görünən material.",
      about3:
        "Təhlükə bir prezidentliyin sonu və digərinin başlanğıcının fövqəladə hekayəsidir və Qorxu və Qəzəb ilə birlikdə Bob Vudvordun Trump prezidentliyi haqqında xəbər hazırlama trilogiyasının kulminasiya nöqtəsini təmsil edir. Və bu, Vaşinqton Post qəzetinin həmkarı Robert Kosta ilə əməkdaşlığın başlanğıcıdır ki, bu da oxuculara Vudvordun, Karl Bernşteyn ilə prezident Riçard M. Niksonun son günlərini işıqlandırdığını xatırladacaq.",
    },
    {
      id: 30,
      name: "Greenlights",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780593416952_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: " Matthew McConaughey",
      price: 29.99,
      star: 4,
      dicscount: 30.5,
      date: "Oktyabr 7, 2013",
      language: "İngilis,Rus",
      pages: 106,
      largep: 30.99,
      audiop: 29.99,
      type: "Audio",
      about1:
        "№1 NEW YORK TIMES BESTSELLERİ • Akademiya Mükafatı® qazanan aktyorun sarsılmaz dürüstlüyü, qeyri-ənənəvi müdrikliyi və daha böyük məmnuniyyətlə yaşamağın çətin yolu öyrəndiyi dərslər vasitəsilə milyonlarla oxucunu ruhlandıran həyatı dəyişdirən xatirəni kəşf edin.",
      about2:
        "Mən əlli ildir bu həyatda olmuşam, qırx iki ildir onun tapmacasını açmağa çalışıram və son otuz beş ildə o tapmacanın ipuçlarını ehtiva edən gündəliklər saxlayıram. Uğurlar və uğursuzluqlar, sevinclər və kədərlər, məni heyrətləndirən və məni yüksək səslə güldürən şeylər haqqında qeydlər. Necə ədalətli olmaq. Stressi necə azaltmaq olar. Necə əylənmək olar. İnsanları necə daha az incitmək olar. Necə daha az incitmək olar. Necə yaxşı insan olmaq olar. Həyatda necə məna kəsb etmək olar. Necə daha çox mən ola bilərəm.",
      about3:
        "Bu yaxınlarda cəsarət tapdım və o gündəliklərlə oturdum. Yaşadığım hekayələr, öyrəndiyim və unutduğum dərslər, şeirlər, dualar, reseptlər, vacib olanlara dair inanclar, bəzi gözəl fotoşəkillər və bir çox bamper stikerləri tapdım. Etibarlı bir mövzu tapdım, o vaxt və hələ də mənə daha çox məmnunluq verən bir yanaşma tapdım: Əgər həyatın çətinlikləri ilə necə və nə vaxt məşğul olmağı - qaçılmaz olanla necə münasibət qurmağı bilirsinizsə, bir vəziyyətdən zövq ala bilərsiniz. Mən yaşıl işıqları tutmağı uğur adlandırıram.",
    },
    {
      id: 31,
      name: "My Hero Academia, Vol. 1",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781421585956_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "Kohei Horikoshi",
      price: 6.49,
      star: 5,
      dicscount: 6.0,
      date: "Dekabr 21, 2021",
      language: "İngilis, Yapon, Rus",
      pages: 64,
      largep: 10.99,
      audiop: 15.5,
      type: "Ənənəvi",
      about1:
        "Orta məktəb şagirdi İzuku Midoriya hər şeydən çox qəhrəman olmaq istəyir",
      about2:
        "Orta məktəb şagirdi İzuku Midoriya hər şeydən çox qəhrəman olmaq istəyir, lakin onda zərrə qədər güc yoxdur. Qönçələnməkdə olan qəhrəmanlar üçün prestijli UA Liseyinə daxil olmaq şansı olmadığı üçün onun həyatı getdikcə daha çox çıxılmaz bir sona bənzəyir.",
      about3:
        "Sonra onların ən böyük qəhrəmanı olan All Might ilə qarşılaşma ona taleyini dəyişmək şansı verir...",
    },
    {
      id: 32,
      name: "Demon Slayer: Kimetsu no Yaiba, Vol. 1",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781974704552_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: " Koyoharu Gotouge",
      price: 8.99,
      star: 4,
      dicscount: "Endirim mövcud deyil",
      date: "İyul 1,2019",
      language: "İngilis, Türk, Yapon",
      pages: 39,
      largep: 12.0,
      audiop: "Mövcud deyil",
      type: "Ənənəvi",
      about1:
        "Tanjiro bacısını xilas etmək və ailəsinin qisasını almaq üçün Demon Slayer-in yoluna çıxır!",
      about2:
        "Tayşo dövründə Yaponiyada mehriban Tanjiro Kamado kömür satmaqla dolanır. Lakin onun dinc həyatı cin bütün ailəsini öldürəndə alt-üst olur. Onun kiçik bacısı Nezuko sağ qalan yeganə şəxsdir, lakin o, özü iblisə çevrilib! Tanjiro bacısını normal vəziyyətə qaytarmağın və həyatını məhv edən cini məhv etməyin yolunu tapmaq üçün təhlükəli səyahətə çıxır.",
      about3:
        "Bəzi komik anlaşılmazlıqlara rəğmən, Tanjiro, Inosuke və Zenitsu illərdir əyləncə bölgəsinin sakinlərini yeyən Daki adlı cinni siqaretdən çıxardılar. Hashira Tengen Uzui və onun ninja yoldaşları Daki ilə məşğul olurlar, lakin onun öhdəsindən gələ bilmirlərsə, Tanjiro və dostlarının Kibutsujinin Yuxarı Rütbəli cinlərindən birini təkbaşına ələ keçirmək şansı nə qədərdir?",
    },
    {
      id: 33,
      name: "Jujutsu Kaisen, Vol. 1",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781974710027_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: " Gege Akutami (Created by)",
      price: 9.99,
      star: 5,
      dicscount: "Endirim mövcud deyil",
      date: "Noyabr 21, 2019",
      language: "İngilis",
      pages: 48,
      largep: 16.99,
      audiop: 12.5,
      type: "Ənənəvi",
      about1:
        "Dostunu lənətlənmiş ruhdan xilas etmək üçün lazım olan gücə sahib olmaq üçün Yuji İtadori bir cin parçasını udur, ancaq özünü fövqəltəbiilərin dəhşətli müharibəsinin ortasında tapır!",
      about2:
        "Lənətlənmiş ruhların şübhəsiz insanlarla qidalandığı bir dünyada əfsanəvi və qorxulu cin Ryomen Sukuna fraqmentləri itdi və ətrafa səpələnib. Hər hansı bir cin Sukunanın bədən hissələrini yeyərsə, onların əldə etdiyi güc bizim bildiyimiz dünyanı məhv edə bilər. Xoşbəxtlikdən, canlıların təhlükəli varlığını fövqəltəbii hadisələrdən qorumaq üçün mövcud olan sirli Jujutsu Sehrbazları məktəbi mövcuddur!",
      about3:
        "Yuji Itadori sizin adi bir yeniyetmə kimi görünsə də, onun hədsiz fiziki gücü diqqətəlayiq bir şeydir! Hər bir idman klubu onun qoşulmasını istəyir, lakin Itadori Gizli Tədqiqat Klubunda məktəbdən kənarda qalanlarla vaxt keçirməyi üstün tutur. Bir gün klub möhürlənmiş lənətlənmiş əşyanı əllərinə almağı bacarır. Möhürü sındırdıqları zaman ortaya çıxaracaqları dəhşəti bilmirlər...",
    },
    {
      id: 34,
      name: "The Promised Neverland, Vol. 1",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781421597126_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: " Kaiu Shirai, Posuka Demizu (Illustrator)",
      price: 9.99,
      star: 3,
      dicscount: 8.99,
      date: "Avqust 17,2021",
      language: "İngilis, Yapon",
      pages: 35,
      largep: "Mövcud deyil",
      audiop: 13.99,
      type: "Ənənəvi",
      about1:
        "Grace Field House uşaq evinin uşaqları çox gec olmadan qorxunc taledən qaçmalıdırlar.",
      about2:
        "Grace Field House-da həyat Emma və onun yetim yoldaşları üçün yaxşıdır. Gündəlik dərsləri və imtahanları çətin olsa da, onların sevimli baxıcısı onları dadlı yeməklər və bol oyun vaxtı ilə təmin edir. Amma bəlkə də hər şey göründüyü kimi deyil...<br>",
      about3:
        "Emma, ​​Norman və Rey Grace Field House uşaq evinin ən parlaq uşaqlarıdır. “Ana” dedikləri qadının himayəsi altında bütün uşaqlar rahat həyat sürdülər. Yaxşı yemək, təmiz paltar və öyrənmək üçün mükəmməl mühit - bir yetim daha nə istəyə bilər? Ancaq bir gün Emma və Norman onlara görmələri qadağan edilən xarici dünyanın qaranlıq həqiqətini açır.",
    },
    {
      id: 35,
      name: "Haikyu!!, Vol. 1: Hinata and Kageyama",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781421591421_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "Haruichi Furudate",
      price: 6.49,
      star: 3,
      dicscount: 6.0,
      date: "Fevral 8,2018",
      language: "İngilis, Yapon, Türk",
      pages: 37,
      largep: 8.59,
      audiop: 12.5,
      type: "Ənənəvi",
      about1: "Məhkəmənin kralı",
      about2:
        "“Məhkəmə kralı” Tobio Kageyamaya qarşı ilk və son voleybol matçında uduzduqdan sonra Şyoyo Hinata orta məktəbi bitirdikdən sonra onun rəqibi olacağına and içir.",
      about3:
        "Bəs məğlub etmək istədiyi oğlan onun komanda yoldaşı olanda nə baş verir?!",
    },
    {
      id: 36,
      name: "Toilet-bound Hanako-kun, Vol. 1",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781975332877_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: " AidaIro",
      price: 13.0,
      star: 5,
      dicscount: 10.99,
      date: "May 17, 2016",
      language: "İngilis",
      pages: 102,
      largep: 19.99,
      audiop: 19.99,
      type: "Ənənəvi",
      about1: "Hanako-san, Hanako-san... ordasan?",
      about2:
        "Kamome Akademiyasında məktəbin Yeddi Sirri haqqında şayiələr dolaşır, onlardan biri də Hanako-sandır. Köhnə məktəb binasındakı üçüncü mərtəbədəki qız hamamının üçüncü tövləsini tutduğunu deyən Hanako-san çağırılanda istənilən istəyi yerinə yetirir.",
      about3:
        "Romantika xəyalları quran, okkultizmi sevən orta məktəbli qızı Nene Yaşiro bu perili vanna otağına girir... lakin onun görüşdüyü Hanako-san onun təsəvvür etdiyi kimi deyil! Kamome Akademiyasının Hanako-san... oğlandır!",
    },
    {
      id: 37,
      name: "Attack on Titan, Volume 34 (B&N Exclusive Edition)",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781646514595_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "Hajime Isayama",
      price: 10.99,
      star: 5,
      dicscount: "Endirim mövcud deyil",
      date: "Sentyabr 15, 2018",
      language: "İngilis, Rus, Yapon",
      pages: 84,
      largep: 13.99,
      audiop: 15.5,
      type: "Ənənəvi",
      about1:
        "Bu Barnes &amp; Noble Eksklüziv Buraxılışına bonus poster daxildir.Epik animeni ilhamlandıran blokbaster aksiya manqası həyəcanlandıran nəticəyə doğru möhürləyir!",
      about2:
        "Erenin titanik Rumbling əsəri Paradis divarlarının o tayında minlərlə insanın həyatına son qoyur və bir vaxtlar Titanların qorxusu ilə yaşayan oğlan dünyanın ən qorxulu adamına çevrilir.",
      about3:
        "Uşaqlıq dostları Armin, Mikasa və sağ qalan yoldaşları tərəfindən törədilən dağıntıları dayandırmağa qərarlı olan Attack Titan-a çatır və son döyüşdə onunla üz-üzə gəlməyə qərar verirlər. Bəşəriyyət nəhayət qorxu, zülm və məhvetmə dövründən azad olacaq, yoxsa Titanlar qurbanlarından çox yaşayacaqlar?",
    },
    {
      id: 38,
      name: "Chainsaw Man, Vol. 1",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781974709939_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: " Tatsuki Fujimoto",
      price: 9.99,
      star: 4,
      dicscount: 7.99,
      date: "Yanvar 27, 2009",
      language: "İngilis, Rus, Ispan,Yapon",
      pages: 62,
      largep: 12.99,
      audiop: 15.5,
      type: "Ənənəvi",
      about1: "Qırılan gənc + zəncirli it iblisi = Chainsaw Man!",
      about2:
        "Denji çətin bir dünyada sağ qalmağa çalışan kiçik bir şeytan ovçusu idi. Bir iş yerində öldürüldükdən sonra, o, ev heyvanı şeytan iti Pochita tərəfindən dirildilib və yeni və təhlükəli bir şeyə çevrilir - Chainsaw Adam!",
      about3:
        "Denji, pul üçün hər şeyi edən, hətta ev heyvanı şeytan iti Pochita ilə şeytanları ovlayan kasıb bir gəncdir. O, sadə xəyalları olan, borc dağı altında boğulan sadə bir insandır. Lakin onun kədərli həyatı bir gün etibar etdiyi biri tərəfindən xəyanət edildikdə alt-üst olur. İndi içindəki şeytanın gücü ilə Denji tamamilə yeni bir insana çevrildi - Chainsaw Adam!",
    },
    {
      id: 39,
      name: "Tokyo Ghoul, Vol. 1",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781421580364_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: " Sui Ishida",
      price: 12.99,
      star: 5,
      dicscount: 10.99,
      date: "Mart 8, 2020",
      language: "İngilis",
      pages: 93,
      largep: 16.5,
      audiop: 15.99,
      type: "Ənənəvi",
      about1:
        "Ghouls bizim aramızda yaşayır, hər mənada normal insanlar kimi - insan ətinə can atmaqdan başqa.",
      about2:
        "Ken Kaneki adi bir kollec tələbəsidir, ta ki şiddətli qarşılaşma onu ilk yarı insan yarı-ghoul hibridinə çevirənə qədər. İki dünya arasında qapalı qalan o, Ghoul çəmən müharibələrindən sağ çıxmalı, Ghoul cəmiyyəti haqqında daha çox məlumat əldə etməli və yeni güclərini mənimsəməlidir.",
      about3:
        "Utancaq Ken Kaneki gözəl Rize ilə görüşə getməkdən həyəcanlanır. Ancaq məlum oldu ki, o, yalnız onun bədəni ilə maraqlanır - onu yemək, yəni. Mənəvi cəhətdən şübhəli bir xilasetmə onu ilk yarı insan yarı Ghoul hibridinə çevirəndə, Ken bizimlə birlikdə mövcud olan Ghouls'un qaranlıq və şiddətli dünyasına çəkilir.",
    },
    {
      id: 40,
      name: "Berserk Deluxe, Volume 1",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781506711980_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: " Kentaro Miura, Jason DeAngelis",
      price: 59.99,
      star: 5,
      dicscount: 51.99,
      date: "May 22, 2021",
      language: "İngilis, Rus, Yapon",
      pages: 129,
      largep: 65.99,
      audiop: 50.99,
      type: "Ənənəvi",
      about1: "Have you got the Guts?",
      about2:
        "Kentaro Miuranın Çılgınlığı 1989-cu ildən bəri manqa və anime fanatiklərini qəzəbləndirdi, dəhşətə gətirdi və sevindirdi, sərt fədailərdən ibarət beynəlxalq legion yaratdı və çoxlu sayda televiziya seriyası, bədii film və video oyunlarına ilham verdi.",
      about3:
        "İndi isə böyüklər üçün fantaziya manqasının qəddar çempionu böyük ölçülü 7 'x 10' lüks sərt üzlü nəşrdə təqdim olunur, ilk üç Berserk cildini toplamış təxminən 700 səhifə, gözəl kitab rəfləri kolleksiyalarında bütün seriyaya xidmət etmək üçün gələcək cildlərlə birlikdə. Nə cəsarət, nə şöhrət!",
    },
    {
      id:74,
      name:"A Gentleman in Moscow",
      image:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780143110439_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author:" Amor Towles",
      price:74.99,
      star:5,
      dicscount:70,
      date:"Sentyabr 2, 2020",
      language:"Ingilis ,Rus",
      pages:201,
      largep:85.50,
      audiop:70.50,
      type:"Ənənəvi",
      about1:"№1 New York Times-ın ən çox satılan müəllifi olan Linkoln Şossesi və Vətəndaşlıq Qaydaları, həyatının qalan hissəsini dəbdəbəli bir oteldə keçirməyi əmr edən bir insan haqqında gözəl nəqledici əsər.",
      about2:"1922-ci ildə qraf Aleksandr Rostov bolşevik tribunalı tərəfindən peşman olmayan aristokrat hesab edilir və Kremllə üzbəüz yerləşən möhtəşəm otel olan Metropolda ev dustaqlığına məhkum edilir. Dözülməz erudisiyalı və zəkalı Rostov ömründə bir gün də işləməyib və indi Rusiya tarixinin ən keşməkeşli onilliklərinin bəziləri otelin qapıları qarşısında cərəyan etdiyi bir vaxtda çardaq otağında yaşamalıdır. Gözlənilmədən, onun azaldılmış şərtləri ona daha böyük emosional kəşflər dünyasına girməyi təmin edir.",
      about3:"Yumorla, parıldayan personajlardan ibarət heyət və bir-birinin ardınca gözəl təsvir olunmuş səhnələrlə zəngin olan bu tək roman, qrafın məqsədli insan olmağın nə demək olduğunu daha dərindən dərk etmək cəhdini izah edərkən sehr verir.",
    },
    {
      id:75,
      name:"Mülkiyyət qaydaları",
      image:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780735222359_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author:" Amor Towles",
      price:60.50,
      star:5,
      dicscount:55.99,
      date:"Yanvar 18, 2021",
      language:"Igilis,Rus",
      pages:255,
      largep:68,
      audiop:65.50,
      type:"Ənənəvi",
      about1:"“Moskvada bir centlmen” və “Mülkiyyət qaydaları” kitabının bestseller müəllifi və hopdurucu, mürəkkəb fantastika ustası 1950-ci illərdə Amerikada qurulmuş qəşəng və həyəcanverici bir əsərlə qayıdır.",
      about2:"1954-cü ilin iyun ayında, on səkkiz yaşlı Emmett Watson, qeyri-ixtiyari adam öldürməyə görə on beş ay xidmət etdiyi yetkinlik yaşına çatmayanlar üçün iş fermasının nəzarətçisi tərəfindən Nebraskaya evə aparılır. Anası çoxdan getdi, atası bu yaxınlarda vəfat etdi və bank tərəfindən girov qoyulan ailə ferması Emmettin niyyəti səkkiz yaşlı qardaşı Billini götürmək və həyatlarına yenidən başlaya biləcəkləri Kaliforniyaya getməkdir. Lakin nəzarətçi avtomobili tərk edəndə Emmet iş fermasından iki dostun nəzarətçinin avtomobilinin baqajında ​​gizləndiyini görür.",
      about3:"Cəmi on günü əhatə edən və müxtəlif nöqteyi-nəzərdən izah edilən Towles-in üçüncü romanı onun çox qatlı ədəbi üslubunun pərəstişkarlarını qane edəcək, eyni zamanda onlara bir sıra yeni və zəngin təsəvvür edilən parametrlər, personajlar və mövzular təqdim edəcək."
    },
    {
      id:76,
      name:"Böyük sıfırlama: Co Bayden və iyirmi birinci əsr faşizminin yüksəlişi",
      image:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781637630594_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author:" Glenn Beck, Justin Trask Haskins",
      price:50.99,
      star:4.5,
      dicscount:45.50,
      date:"2 Oktyabr,2021",
      language:"Ingilis,Rus, Alman",
      pages:185,
      largep:65,
      audiop:45.50,
      type:"Ənənəvi",
      about1:"Böyük Yenidənqurma: Co Bayden və İyirmi Birinci Əsr Faşizminin Yüksəlişi kitabında, New York Times bestseller müəllifi və milli sindikatlaşdırılmış radio aparıcısı Glenn Beck Amerika həyat tərzinin Böyük Sıfırlamadan sağ çıxa bilməyəcəyini iddia edir və bizə xəbərdarlıq edir ki, Böyük Sıfırlamadan əvvəl onu dayandıraq. kursu geri çevirmək üçün çox gecdir.",
      about2:"Güclü bankirlər, biznes liderləri və hökumət rəsmiləri arasında beynəlxalq sui-qəsd; İsveçrə Alplarında qapalı görüşlər; və yer üzündəki hər bir cəmiyyətin köklü transformasiyasına çağırır - Böyük Sıfırlama, növbəti James Bond filminin süjeti olmaqdan bir göz yarpağı olan bir adam kimi səslənir.",
      about3:"Böyük Sıfırlama: Co Bayden və İyirmi Birinci Əsr Faşizminin Yüksəlişi kitabında Glenn Beck özünün ticarət markası olan yumor, hekayə və təfərrüatlı təhlil qarışığından istifadə edərək Böyük Sıfırlama haqqında ağlasığmaz həqiqəti ilk dəfə ortaya qoyur, təxminən iki nəfəri birləşdirir. avtoritar hərəkatlar və onların Birləşmiş Ştatları kökündən dəyişdirmək səyləri haqqında onilliklər boyu əsaslı tədqiqat."
    },
    {
      id:77,
      name:"Comedy Comedy Comedy Drama: A Memoir",
      image:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780399180521_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author:"Bob Odenkirk",
      price:40.99,
      star:3.5,
      dicscount:40.50,
      date:"14 Oktyabr,2020",
      language:"Ingilis,Rus",
      pages:205,
      largep:65,
      audiop:45.99,
      type:"Ənənəvi",
      about1:"Bu vacib (Əyləncə Həftəsi), Şən (AV Club) memuarında Mr. Show, Breaking Bad və Better Call seriallarının ulduzu Saul şou-biznesin ən yüksək və enişləri, komediya yazıçısı kimi kult statusu haqqında danışır. , və əlli yaşında bir hərəkət filmi kimi özünü yenidən kəşf etmək nəyə bənzəyir.",
      about2:"Bob, Second City-nin əfsanəvi Del Klozu ilə təsadüfi görüşdən sonra komediya həyatını qəbul etdi. O, birtəhər Saturday Night Live-da yazıçı kimi işə getdi. Bu əfsanəvi əlcəkdən qıcırtılan dişlərinin dərisi ilə sağ qalaraq, o, komediya yazmağın sirlərini gizlətdi - nəhayət, onları Chris Farley üçün ölməz Motivasion Speaker eskizində istifadə etdi, The Ben Stiller Show-da onları yaxşılaşdırdı və onları cənab Mr. Bob və David ilə nümayiş etdirin.",
      about3:"Hollivudda Bob Sizifin özünü utandıracaq bir başıboşluq nümayiş etdirdi və bütün ümidlər on dəfə kəsildikdə telefon zəng çaldı və Breaking Bad verilişində görünmək təklif edildi - bu, orta məktəbdə kimya müəllimi olmağın nə qədər darıxdırıcı olduğunu göstərən bir şou idi. ."

    },
    {
      id:78,
      name:"My Body",
      image:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250817860_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author:" Emily Ratajkowski",
      price:30.99,
      star:5,
      dicscount:20.50,
      date:"4 Noyabr,2020",
      language:"Ingilis,Rus",
      pages:145,
      largep:190,
      audiop:45.50,
      type:"Ənənəvi",
      about1:"* VOGUE * ZAMAN * ESQUIRE * PEOPLE * USA BUGÜN * CHICAGO TRIBUNE * LOS ANGELES TIMES * ŞONDALAND * ALMA * TRILLEST FOR TUNES * ÜÇÜN ƏN GÖZLƏNİLƏN VƏ ƏN YAXŞI PAYIZ 2021 KİTABI",
      about2:"Emily Ratajkowski məşhur model və aktrisa, məşğul siyasi mütərəqqi, nəhəng sahibkar, qlobal sosial media fenomeni, indi isə yazıçıdır. İyirmi bir yaşında dünya şöhrəti qazanan Ratajkowski, feminist güclənmənin üzr istəməyən bir ifadəsi olaraq bədəninin təxribatçı nümayişi ilə həm təriflər, həm də qəzəb doğurdu. Mədəniyyətimizin qadınları əmtəələşdirməsi haqqında onun düşüncəsindəki sonrakı təkamül bu kitabın mövzusudur.",
      about3:"Mənim Bədənim feminizm, cinsəllik və gücün, kişilərin qadınlara münasibətinin və qadınların bu müalicəni qəbul etməsi üçün rasionalizasiyasının dərin şəxsi araşdırmasıdır. Bu esselər mədəniyyətin qızların və qadın gözəlliyinin fetişləşdirilməsini, qadınların seksuallığına vəsvəsəsini və ona nifrətini araşdırarkən Ratajkovskinin həyatından anları əks etdirir."

    },
    {
      id:79,
      name:"The Betrayal of Anne Frank: A Cold Case Investigation",
      image:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780062892379_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author:"Rosemary Sullivan",
      price:35.99,
      star:4.5,
      dicscount:20.50,
      date:"25 Dekabr,2021",
      language:"Ingilis, Alman",
      pages:89,
      largep:126,
      audiop:40.50,
      type:"Ənənəvi",
      about1:"yeni texnologiya, bu yaxınlarda aşkar edilmiş sənədlər və mürəkkəb istintaq üsullarını oxuyarkən, təqaüdə çıxmış FTB agentinin rəhbərlik etdiyi beynəlxalq komanda İkinci Dünya Müharibəsindən bəri nəsilləri narahat edən sirri nəhayət həll etdi: Anne Frank və onun ailəsinə kim xəyanət etdi? Bəs niyə?",
      about2:"Otuz milyondan çox insan Gənc qızın gündəliyi adlı jurnalı oxumuşdur, yeniyetmə Anne Frank İkinci Dünya Müharibəsi zamanı ailəsi və Amsterdamda daha dörd nəfərlə birlikdə çardaqda yaşayarkən nasistlər onları həbs edib bir yerə göndərənə qədər saxlamışdır. konsentrasiya düşərgəsi. Annanın hekayəsinə həsr olunmuş bir çox əsərə - jurnalistikaya, kitablara, pyeslərə və romanlara baxmayaraq, heç biri bu səkkiz adamın iki ildən çox müddət ərzində aşkar edilmədən gizlənərək necə yaşamağa müvəffəq olduğunu qəti şəkildə izah etməyib.",
      about3:"Təqaüdə çıxmış FTB agenti Vincent Pankoke və yorulmaz müstəntiqlərdən ibarət bir qrup ciddi qayğı ilə on minlərlə səhifədən çox sənədləri - bəziləri əvvəllər heç vaxt görülməmiş - gözdən keçirdi və Franklarla tanış olan insanların çoxlu nəslindən müsahibə aldı. FTB tərəfindən hazırlanmış üsullardan istifadə edərək, Cold Case Team, məşum həbsə aparan ayları əziyyətlə birləşdirdi və şok edici bir nəticəyə gəldi."

    },
    {
      id:80,
      name:"Educated: A Memoir",
      image:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780399590528_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author:"Tara Westover",
      price:120.99,
      star:4.5,
      dicscount:100.90,
      date:"10 May,2021",
      language:"Ingilis,Azərbaycan",
      pages:190,
      largep:224,
      audiop:99.50,
      type:"Ənənəvi",
      about1:"№1 NEW YORK TIMES, WALL STREET JOURNAL VƏ BOSTON GLOBE BESTSELLERİ • Dövrümüzün ən məşhur kitablarından biri: məktəbdən kənarda qalan ailəsini tərk edərək fəlsəfə doktoru elmi dərəcəsi alan gənc qadın haqqında unudulmaz xatirə. Kembric Universitetindən",
      about2:"Aydaho dağlarında sağ qalanlar üçün anadan olan Tara Westover ilk dəfə sinif otağına ayaq basanda on yeddi yaşında idi. Ailəsi əsas cəmiyyətdən o qədər təcrid olunmuşdu ki, uşaqların təhsil almasını təmin edəcək heç kim yox idi və Taranın böyük qardaşlarından biri zorakılıq edəndə müdaxilə edəcək heç kim yox idi. Başqa bir qardaş kollecə daxil olanda Tara yeni həyat tərzini sınamaq qərarına gəldi.",
      about3:"Gözəl və təhrikedici. . . [Vestoverin] uşaqlığının unikallığına baxmayaraq, kitabında verdiyi suallar universaldır: Sevdiklərimizə özümüzdən nə qədər verməliyik? Böyümək üçün onlara nə qədər xəyanət etməliyik?” (“Vogue”)."

    },
    {
      id:81,
      name:"Ağrı İmperiyası: Sackler sülaləsinin gizli tarixi",
      image:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780385545686_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author:"Patrick Radden Keefe",
      price:96.99,
      star:5,
      dicscount:80.50,
      date:"24 May,2021",
      language:"Ingilis,Rus",
      pages:95,
      largep:121,
      audiop:75.50,
      type:"Ənənəvi",
      about1:"NEW YORK TIMES BEST SELLER • Var-dövləti Valium tərəfindən qurulan və nüfuzu OxyContin tərəfindən məhv edilən Sackler ailəsinin üç nəslinin möhtəşəm, dağıdıcı portreti, xeyriyyəçilikləri ilə məşhurdur. HBO-nun Əsrin cinayəti sənədli filmində nümayiş olunan Heç bir şey demə kitabının mükafatlı və bestseller müəllifindən.",
      about2:"Sackler adı bir çox mərtəbəli qurumların divarlarını bəzəyir - Harvard, Metropolitan İncəsənət Muzeyi, Oksford, Luvr. Onlar incəsənət və elm sahəsinə dəbdəbəli ianələri ilə tanınan dünyanın ən zəngin ailələrindən biridir. Ailənin sərvətinin mənbəyi qeyri-müəyyən idi, lakin Sacklers-in opioid böhranının katalizatoru olan blokbaster ağrıkəsici hazırlamaq və satmaqdan məsul olduğu ortaya çıxana qədər.",
      about3:"Artur Valium üçün marketinq hazırladı və ilk böyük Sackler sərvətini qurdu. O, Raymond və Mortimer tərəfindən idarə olunacaq dərman istehsalçısı Purdue Frederick-i satın aldı. Qardaşlar sənət, arvadlar və ekzotik yerlərdə möhtəşəm iqamətgahlar toplamağa başladılar. Övladları, nəvələri dəbdəbə içində böyüyüblər."

    }
  ],
  sitat: [
    {
      id: 41,
      sitatm:
        "Kitablar sivilizasiyanın nümunəsidir. Kitabsız ədəbiyyat, tarix itər. Həyati incəliklər olan lirika, psixoloji və elmi biliklər mənasız olar.",
      name: "Henri Devid Toro ",
      image:
        "https://edebiyyat.az/uploads/posts/2019-06/medium/1560158284_immanuel-kant.jpg",
    },
    {
      id: 42,
      sitatm:
        "Bir mədəniyyəti yox eləmək üçün kitabları yandırmağa gərək yoxdur. Oxumağın qarşısını alın, yetər.",
      name: "R.Bredberi",
      image:
        "https://cdni.rt.com/russian/images/2020.06/article/5ed9f3cc02e8bd64fd6e77ef.jpg",
    },
    {
      id: 43,
      sitatm:
        "Kitablar özünüzə və başqalarına hörmət etməyi öyrədəcək,ürəyi və ağlı, dünya və insanlıq sevgisiylə dolduracaq. ",
      name: "Maksim Qorki",
      image:
        "http://yarpaq.az/file/pic/xeber/2020-08/1596955123_dshbbbfzen0.jpg",
    },
    {
      id: 44,
      sitatm:
        "Kitab həyatın ən uzaq və qaranlıq yollarında insana işıq bəxş edən əfsanəvi çıraqdır ",
      name: "Lev Tolstoy",
      image:
        "https://edebiyyat.az/uploads/posts/2021-09/1632343033_tolstoy_leo_port.jpg",
    },
  ],
  news: [
    {
      id: 45,
      image:
        "https://melumatlar.az/uploadedimages/blog/2020/7/9/5ff7986e-617c-4d4a-bdf7-35fad3a1d9d6.jpg",
      title: "Dünyanın ən uzun cümləsi",
      author: "Viktor Hüqo",
      date: "1862-ci il",
      about:
        "Fransız yazıçı Viktor Hüqonun 1862-ci ildə qələmə aldığı “Səfillər” romanı dünya klassikasının şedevrlərindəndir . Romantik cərəyanın öncülərindən olan yazıçının eyni adlı əsəri bir çox film və tamaşaya çevrilmişdir.",
      about1:"VİKTOR HÜQONUN 'Məfillər' ROMANINDAKİ 800 SÖZLÜK CÜMLƏ NƏDİR?Bir çox sosial media kanallarında və internet saytında 'dünyanın ən uzun cümləsi' olaraq xatırlansa da, 'Les Miserables'dəki bu cümlə yalnız ən uzun cümlədir. fransız ədəbiyyatında. Dünyanın ən uzun cümləsi Ginnesin Rekordlar Kitabına düşən 4391 sözlə Ceyms Coysun “Ullises” əsərindəki cümlə olub. Bununla belə, bu rekord Conatan Coe-nin The Rotters Club kitabında 13.955 sözlə geridə qaldı.",
      about2:"Bu gün Les Misérables tez-tez ingilis dilli ölkələrdə uğursuz tərcümələrə görə orijinal fransız adı olan Les Misérables adlanır. Hekayə 1815-ci ildə başlayır və 1832-ci il Paris İyun üsyanı ilə bitir. Bir neçə personajın həyatından və onların bir-biri ilə münasibətindən bəhs edən romanda daha çox keçmiş məhkum Jan Valjanın həyat mübarizəsinə kəffarə vermək cəhdinə diqqət yetirilir.Bədbəxtlər romanı. hüquq və mərhəmətin təbiəti, həmçinin Fransanın tarixinə, Parisin memarlığına və şəhər dizaynına diqqət yetirir.Siyasət, əxlaq fəlsəfəsi, antimonarxizm, ədalət, din, ailəvi və romantik sevginin növləri və təbiəti kimi mövzular üzərində işlənir. "
    },
    {
      id: 46,
      image:
        "https://avatars.mds.yandex.net/get-pdb/49816/72d25b09-bf5c-44a3-98d9-64407000f57c/s1200?webp=false",
      title: "Ən kiçik kitab",
      author: "Toppan nəşriyyat",
      date: "1995 ci il 24 May",
      about:
        "Dünyada ən kiçik kitab olaraq qəbul edilən “Dörd fəslin çiçəkləri”, 22 səhifədən ibarətdir. 0.75 x 0.75 millimetrlik ölçüyə malik olan kitab Ginnesin Rekordlar Kitabına daxil edilmişdir. Yaponiyadakı “Toppan nəşriyyat” evi tərəfindən nəşr olunan kitab hazırda ölkəmizdə qorunmaqdadır.",
      about1:"Dünyada ən kiçik kitab olaraq qəbul edilən “Dörd fəslin çiçəkləri”, 22 səhifədən ibarətdir. 0.75 x 0.75 millimetrlik ölçüyə malik olan kitab Ginnesin Rekordlar Kitabına daxil edilmişdir. Yaponiyadakı “Toppan nəşriyyat” evi tərəfindən nəşr olunan kitab hazırda ölkəmizdə qorunmaqdadır. Əlbəttə ki, bu kitabı oxumaq üçün xüsusi mikroskop və ya lens tələb olunur.",
      about2:"«Bütün bitki və çiçəkləri almanaxı» kitabın ölçüsü cəmi 75 mm-dir. Kitabı həm də “Dörd fəslin çiçəkləri” adlandırırlar. O, Yaponiyanın bitki və çiçək aləmi haqqında sorğu kitabçasıdır. Kitab səkkiz ay ərzində yaradılıb."
    },
    {
      id: 47,
      image: "https://i2.milimaj.com/i/milliyet/75/750x0/6175fc3345d2a0a10419ff23.jpg",
      title: "Ən uzun roman",
      author: "Scudéry və Georges de Scudéry",
      date: "1649 və 1653-cü illər",
      about:
        "İndiyə qədər yazılmış ən uzun roman 13.095 səhifədən ibarətdir. 1649 və 1653-cü illər arasında çap edilən “Artamène ou le Grand Cyrus” adlı kitab 10 cilddən ibarət olub, ümumilikdə 2 milyona yaxın sözdən ibarətdir. ",
      about1:"Artamene və ya Böyük Kir fransız ədəbiyyatında ən uzun romandır və şübhəsiz ki, ən iddialı romanlardan biridir: 1649-1653-cü illər arasında nəşr olunan orijinal nəşr on üç min səhifədən ibarətdir və otuz fərqli hekayə daxilində dörd yüzdən çox personajdan ibarətdir. Çekmeceli və açarlarla hekayəsi o zaman çox uğurlu idi; onun hədsizliyi və qeyri-mümkünlüyü, lakin tezliklə ona oxunmazlığı ilə bağlı şöhrət qazandırdı və unudulmuşdu. Bu cild sizi çıxarışlar vasitəsilə bu romantik məbləği yenidən kəşf etməyə dəvət edir: fars fateh Kirin sevimli Mandanın axtarışında macəralarından bəhs edən həm qəhrəmanlıq, həm də cəsarətli əsas süjet, həm də iki ikinci dərəcəli hekayə. “Bədbəxt aşiqlərin hekayəsi”ndə qəhrəmanlar L'Astrée-nin sevgi məhkəmələri və ya orta əsrlər sevgi sualları modeli üzrə ən bədbəxt sevgilisi adı uğrunda yarışırlar; Yunan şairəsinin həyatının yenidən işlənmiş və korrektə edilmiş variantı olan “Safonun tarixi”nə gəlincə, bu, Mlle de Skuderinin qadın yazıçı vəziyyəti haqqında apardığı düşüncənin kəskinliyinə dəlalət edir.",
      about2:"Roman sözü Fransiz, ISPAN, Italyan və s. Dillərinin daxil olduğu roman dil sənədin Adı ilə bağlıdır. Bu dillərdə təhkiyə üsulu ilə qələmə alınmış hər Hansi bədii əsər XII-XIII əsrlərdə roman adlandırılsa da sonralar roman xüsusi janr kimi formalaşdırılıb. Roman epik növün istehsalı. Hekayə və povestdə YAZICI,, Romanda YAZICI qəhrəmanı dinamik inkişafda, onun bütün Ömür yoluna nəzər salmaq imkanı qazanır. iştirak edən iki hissəli roman dilogiya, silsilə təşkil edən üç hissəli roman trilogiya adlanır.Döyüşən şəhər və Dünya dəyişir romanları trilogiya hesablanır.",
    },
    {
      id: 48,
      image:
        "http://issf.space-safety.org/wp-content/uploads/sites/25/2015/05/Antoine-de-Saint-Exup%C3%A9ry-12.png",
      title: "Xarici dillərə ən çox tərcümə edilən kitab",
      author: "Antoine de Saint-Exupéry",
      date: "1943-cü il",
      about:
        "Antoine de Saint-Exupéry-in 1943-cü ildə nəşr etdirdiyi “Balaca şahzadə”ni yəqin ki, aramızda oxumayan yoxdur. Bütün zamanların ən çox oxunan və ən yaxşıları arasında özünə yer edən kitab, həmçinin Le Monde-un 1000 kitabı siyahısında da yer almaqdadır.",
      about1:"Balaca şahzadə (fr. Le Petit Prince) — Antuan de Sent-Ekzüperinin ən məşhur əsəri, alleqorik hekayə. İlk dəfə 6 aprel 1943-cü ildə Nyu-Yorkda çap olunub.Kitabda şəkilləri Ekzüperi özü çəkib. Bu illüstrasiyalar kitabın özü qədər məşhurdurlar, müəllifin özü və baş qəhrəmanlar tez-tez şəkillərə müraciət edir və hətta mübahisə edirlər. Unikal şəkillər hamıya aydın olan universal vizual leksikonun bir hissəsi olur və dil baryerini aradan qaldırırlar. ",
      about2:"Dünyanın ən çox satılan və oxunan kitablarından biri olan “Balaca şahzadə” romanı uzaq bir planetdən gələn kiçik şahzadənin gözü ilə böyüklərin dünyasına baxır. İnsanların hamısı nə zamansa uşaq olublar, lakin indi onların heç biri o günləri xatırlamır. Balaca şahzadə isə oxucuları, bəşəriyyəti II Dünya Müharibəsinin baş verdiyi illərdə uşaqlıq dünyasına aparır. Ona görə də bu roman uşaqlar üçün olduğu qədər həm də böyüklər də üçündür."
    },
    {
      id: 49,
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/LEONARDO.JPG",
      title: "Dünyanın ən bahalı kitabı",
      author: "Leonardo Da Vinçi",
      date: "1501 ci il",
      about:
        "İndiyə qədər ən baha qiymətə satılan kitab Leonardo Da Vinçiyə məxsusdur. Da Vinçinin əlyazma kitabı olan “Codex Leicester” Bill Gates tərəfindən 48,4 milyon dollara alınıb. ",
      about1:"1994-cü ildə Bill Qeyts Leonardo da Vinçinin 16-cı əsrə aid olan Kodex Leicester əlyazmasını satın alır. O, hərracda jurnal üçün 30,8 milyon dollar ödəyib və bu qiymətlə onu indiyə qədər satılan ən bahalı kitab edib.Qeyts bu yay dəftəri bəzi muzeylərə icarəyə verib. Hazırda Minneapolis İncəsənət İnstitutunda olan Codex Leicester oktyabrın 31-də Raleighdəki Şimali Karolina İncəsənət Muzeyinə gedəcək.",
      about2:"Minneapolisdən əvvəl əlyazma Feniks İncəsənət Muzeyində sərgilənirdi. 1506 və 1510-cu illər arasında yazılmış 72 səhifəlik dəftər eskizlər, diaqramlar və ideyaların ilk təkrarlanması ilə tamamlanan da Vinçinin zehnində nadir bir görünüş təqdim edir."
    },
    {
      id: 50,
      image:
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX27736992.jpg",
      title: "Ən böyük kitab oğurluğu",
      author: "Stephen Blumberg",
      date: "1990",
      about:
        "İndiyə qədər bilinən ən böyük kitab oğurluğu Stephen Blumberg tərəfindən edilmişdir. Təbabətdə bibliomaniya kimi bilənən “Kitab yığmaq xəstəliyi”nə yoluxan bu adam 268 kitabxanadan 23.000 kitab oğurlamışdır.",
      about1:"20 mart 1990-cı ildə səhər saat 2:00-da Stiven Blumberq 45 ştatda, Kanadanın iki əyalətində və Vaşinqtonda, 268 və ya daha çox universitet və muzeydən 23,600-dən çox nadir, qiymətli və müxtəlif çeşidli kitabları oğurladığı üçün həbs edildi. təxminən 20 milyon ABŞ dolları idi, lakin sonradan 5,3 milyon dollara dəyişdirildi, bu ABŞ tarixindəki ən böyük kitab oğurluğudur. 1991-ci ildə Blumberq günahkar bilinərək 200.000 dollar cərimə ilə 71 ay həbs cəzasına məhkum edildi. 1995-ci il dekabrın 29-da həbsdən azad edilib. Kolleksiyaya Blumberg Kolleksiyası deyilir. Kollec və Tədqiqat Kitabxanaları Assosiasiyasının Nadir Kitablar və Əlyazmalar bölməsi, həmçinin kitabxana təhlükəsizliyi üzrə ekspert Uilyam Endryu Moffet Federal Təhqiqat Bürosuna Stiven Blumberqin tutulmasına və məhkum edilməsinə və oğurladığı əşyaların müəyyən edilməsinə kömək etdi.",
      about2:"Duke Universitetinin kitabxanasından III Con L. Şarp həbs edildikdən sonra FTB-nin yığıncağında Blumberqlə görüşən Blumberqlə qısa söhbətini şərh edərək dedi ki,-- “Mən hiss etdiyim şey o idi ki, biz kitabxanalarda hər dəfə kiminsə masasına kitab gətirdiyimiz zaman güvən sistemi üzərində işləmək.Məncə, hər şey haqqında çox pis olan budur. Bu adam açıq şəkildə məlumat toplamaq üçün çox vacib olan əmtəəni alçaltmağı seçdi. İnstitut. Və məncə o, məlumatı mümkün qədər sərbəst və maneəsiz olaraq təqdim etmək üçün təmsil etməyə çalışdığımız hər şeyə xəyanət etdi. Və məncə, bu adamın bu cür girişdən istifadə etdiyini düşünmək məni həqiqətən qəzəbləndirdi."
    },
  ],
  design: [
    {
      id: 51,
      title: "Seçim çoxluğu",
      about:
        "İstənilən janrda kitablar Azərbaycan,Rus,Türk,İngilis və İspan dili olmaqla 5 dildə mövcuddur. ",
    },
    {
      id: 52,
      title: "Online sifariş",
      about:
        "Saytımızdan kitablar haqqında ətraflı məlumat alıb kartınızla sifariş etdikdən sonra ünvana qədər çatdırılma şansından yararlan",
    },
    {
      id: 53,
      title: "Xüsusi endirimlər",
      about:
        "İstinasız hər həftə bir hissə kitabları 50% dək endirimlə əldə edə bilərsiniz.",
    },
  ],
  promo: [
    {
      id: 54,
      title: "Cavallini & Co - National Parks 1,000 Piece Jigsaw Puzzle",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781635447200_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "Cavallini & Co.",
      price: 35.99,
      star: 4,
      discount: 30.99,
      about1:
        "Bu gözəl 1000 ədəd Yapboz tapmacasında Cavallini-nin Milli Parklar Dekorativ örtüyü, Milli Parkların köhnə loqoları və dizaynlarının kollajı var. Puzzle 10 düym uzunluğunda karton boruya qablaşdırılır, tapmaca parçaları içərisində muslin çantasında etibarlı şəkildə saxlanılır. Bitmiş tapmacanın ölçüsü 22x28 düymdür.",
      about2:
        "10 boruya qablaşdırılıb, içərisində əl ilə işlənmiş muslin çantasıKavallini arxivindən şəkillər təqdim olunur<br>Yaşlar üçün: 9+XƏBƏRDARLIQ: Boğulma təhlükəsi; Kiçik hissələr. 3 yaşından kiçik uşaqlar üçün deyil.",
    },
    {
      id: 55,
      title: "Rig Views 1000 pc puzzle",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/4005556803651_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "Ravensburger",
      price: 32.99,
      star: 5,
      discount: 30,
      about1:
        "1891-ci ildən bəri Ravensburger Almaniyanın Ravensburq şəhərində ən gözəl bulmacalar hazırlayır. Ravensburger-i dünyanın ən böyük puzzle markasına çevirən onların təfərrüata olan diqqətidir! Onlar eksklüziv olaraq işlənmiş, çox qalın kartondan istifadə edir və bunu öz incə, kətan strukturlu kağızları ilə birləşdirərək, hiss edə biləcəyiniz keyfiyyət üçün parıltısız tapmaca şəklini yaradırlar. Onların polad kəsici alətləri əl ilə hazırlanmış və hazırlanmışdır. Bu, heç bir iki parçanın bir-birinə bənzəməməsini təmin edir və mükəmməl bir-birinə bağlanan parçaları təmin edir.",
      about2:
        "10 boruya qablaşdırılıb, içərisində əl ilə işlənmiş muslin çantasıKavallini arxivindən şəkillər təqdim olunur<br>Yaşlar üçün: 9+XƏBƏRDARLIQ: Boğulma təhlükəsi; Kiçik hissələr. 3 yaşından kiçik uşaqlar üçün deyil.",
    },
    {
      id: 56,
      title: "Mushrooms 1,000 piece puzzle",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781635449099_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "Cavallini & Co.",
      price: 22,
      star: 4.5,
      discount: 20,
      about1:
        "22 x 28 (55 sm x 70 sm) 1000 ədəd tapmaca ilə bu 1000 parça tapmaca ilə göbələklərin ecazkar və sehrli dünyasından həzz alın",
      about2:
        "10 boruya qablaşdırılıb, içərisində əl ilə işlənmiş muslin çantasıKavallini arxivindən şəkillər təqdim olunur<br>Yaşlar üçün: 9+XƏBƏRDARLIQ: Boğulma təhlükəsi; Kiçik hissələr. 3 yaşından kiçik uşaqlar üçün deyil.",
    },
    {
      id: 57,
      title: "Cavallini & Co - Bees & Honey 1000 Piece Jigsaw Puzzle",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781635448696_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: " Cavallini & Co.",
      price: 46,
      star: 5,
      discount: "Mövcud deyil",
      about1:
        "1000 parçadan ibarət bu gözəl tapmacada Cavallini-nin köhnə Arıçının Bal Bitkilərinin Tozlanmasına dair Bələdçisi təsvir edilmişdir. Puzzle 10 düym uzunluğunda karton boruya qablaşdırılır, tapmaca parçaları içərisində muslin çantasında etibarlı şəkildə saxlanılır. Bitmiş tapmacanın ölçüsü 22x28 düymdür.",
      about2:
        "1000 Parça Yapboz Puzzle Tamamlanmış tapmaca 22x28 düym ölçüdədir Yaşlar üçün: 9+ XƏBƏRDARLIQ: Boğulma Təhlükəsi; Kiçik hissələr. 3 yaşdan kiçik uşaqlar üçün deyil.",
    },
    {
      id: 58,
      title: "Cavallini & Co - Wildflowers 1,000 Piece Jigsaw Puzzle",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781635446616_p0_v6%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: "Cavallini & Co.",
      price: 18.99,
      star: 3.5,
      discount: "Endirim mövcud deyil",
      about1:
        "Bu 1000 ədəd Yapboz tapmacasında hər biri öz elmi adı ilə birlikdə gözəl çöl çiçəklərinin üzüm sənətini təqdim edir.",
      about2:
        "1000 Parça Yapboz Puzzle Tamamlanmış tapmaca 22x28 düym ölçüdədir Yaşlar üçün: 9+ XƏBƏRDARLIQ: Boğulma Təhlükəsi; Kiçik hissələr. 3 yaşdan kiçik uşaqlar üçün deyil.",
    },
    {
      id: 59,
      title: "The Gardeners Palette No.1 1000pc puzzle",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/4005556803668_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: " Ravensburger",
      price: 120.99,
      star: 5,
      discount: 110.5,
      about1:
        "1891-ci ildən bəri Ravensburger Almaniyanın Ravensburq şəhərində ən gözəl bulmacalar hazırlayır. Ravensburger-i dünyanın ən böyük puzzle markasına çevirən onların təfərrüata olan diqqətidir! Onlar eksklüziv olaraq işlənmiş, çox qalın kartondan istifadə edir və bunu öz incə, kətan strukturlu kağızları ilə birləşdirərək, hiss edə biləcəyiniz keyfiyyət üçün parıltısız tapmaca şəklini yaradırlar. Onların polad kəsici alətləri əl ilə hazırlanmış və hazırlanmışdır. Bu, heç bir iki parçanın bir-birinə bənzəməməsini təmin edir və mükəmməl bir-birinə bağlanan parçaları təmin edir.",
      about2:
        "1000 Parça Yapboz Puzzle Tamamlanmış tapmaca 22x28 düym ölçüdədir Yaşlar üçün: 9+ XƏBƏRDARLIQ: Boğulma Təhlükəsi; Kiçik hissələr. 3 yaşdan kiçik uşaqlar üçün deyil.",
    },
    {
      id: 60,
      title: "Vintage Games 1000 pc puzzle",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/4005556803705_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: " Ravensburger",
      price: 17.99,
      star: 4.5,
      discount: "15",
      about1:
        "1891-ci ildən bəri Ravensburger Almaniyanın Ravensburq şəhərində ən gözəl bulmacalar hazırlayır. Ravensburger-i dünyanın ən böyük puzzle markasına çevirən onların təfərrüata olan diqqətidir! Onlar eksklüziv olaraq işlənmiş, çox qalın kartondan istifadə edir və bunu öz incə, kətan strukturlu kağızları ilə birləşdirərək, hiss edə biləcəyiniz keyfiyyət üçün parıltısız tapmaca şəklini yaradırlar. Onların polad kəsici alətləri əl ilə hazırlanmış və hazırlanmışdır. Bu, heç bir iki parçanın bir-birinə bənzəməməsini təmin edir və mükəmməl bir-birinə bağlanan parçaları təmin edir.",
      about2:
        "1000 Parça Yapboz Puzzle Tamamlanmış tapmaca 22x28 düym ölçüdədir Yaşlar üçün: 9+ XƏBƏRDARLIQ: Boğulma Təhlükəsi; Kiçik hissələr. 3 yaşdan kiçik uşaqlar üçün deyil.",
    },
    {
      id: 61,
      title: "Cavallini & Co - Celestial 1,000 Piece Jigsaw Puzzle",
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781635447170_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      author: " Cavallini & Co.",
      price: 27.5,
      star: 3.5,
      discount: "22.99",
      about1:
        "Bu gözəl 1000 ədəd Yapboz tapmacasında Cavallini'nin üzüm Göy Cədvəli var. Tapmaca 10 düym uzunluğunda karton boruya yığılır və tapmaca parçaları içərisində muslin çantasında təhlükəsiz şəkildə saxlanılır. Bitmiş tapmacanın ölçüləri 22x28 düymdür.",
      about2:
        "1000 Parça Yapboz Puzzle Tamamlanmış tapmaca 22x28 düym ölçüdədir Yaşlar üçün: 9+ XƏBƏRDARLIQ: Boğulma Təhlükəsi; Kiçik hissələr. 3 yaşdan kiçik uşaqlar üçün deyil.",
    },
  ],
  ebook: [
    {
      id: 62,
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781476738031_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      name: "A Man Called Ove",
      author: " Fredrik Backman",
      price: 7.99,
      star: 3.5,
      dicscount: "Endirim mövcud deyil",
      date: "27 May, 2020",
      language: "Ingilis , Rus , Azərbaycan",
      pages: 74,
      largep:"Mövcud deyil",
      audiop: 18.99,
      type: "elektron",
      about1:
        "'Güləcəksən, ağlayacaqsan, həyatınızdakı qısqanclara qarşı yeni simpatiya hiss edəcəksiniz.' -Xalq",
      about2:
        "Ove ilə tanış olun. Yataq otağının pəncərəsindən kənarda tutulan oğrular kimi sevmədiyi insanlara işarə edən bir adamdır. Onun möhkəm prinsipləri, ciddi qaydaları və qısa qoruyucusu var. İnsanlar onu “cəhənnəmdən gələn acı qonşu” adlandırırlar.",
      about3:
        "Bəs Ove hər zaman üzündə təbəssümlə gəzmədiyi üçün acı olmalıdır? Çılğın xarici görünüşün arxasında bir hekayə və bir kədər var. Beləliklə, bir noyabr səhəri iki danışıq gənc qızı ilə danışıqlı gənc cütlük qonşuya köçəndə və təsadüfən Ovenin poçt qutusunu düzəldəndə, bu, səliqəsiz pişiklər, gözlənilməz dostluq və qədim dəstək sənəti haqqında komik və ürəkaçan nağılın başlanğıcıdır. U-Haul. Bütün bunlar bir huysuz qocanı və yerli sakinlər birliyini öz təməllərinə çevirəcək.",
    },
    {
      id: 63,
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250278227_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      name: "Abandoned in Death (In Death Series #54)",
      author: " J. D. Robb",
      price: 160.99,
      star: 5,
      dicscount: 140.5,
      date: "3 Fevral, 2019",
      language: "İngilis, Azərbaycan",
      pages: 143,
      audiop: 180.99,
      type: "elektron",
      largep:"Mövcud deyil",
      about1:
        "Qətl detektivi Eve Dallas, girovun həyatı tarazlıqda ikən bükülmüş ailə tarixini açmalıdır - New York Times bestseller müəllifi JD Robb tərəfindən 'Ölümdə tərk edilmişlər' əsərində.",
      about2:

        "Qadının cəsədi səhər tezdən Nyu-Yorkun uşaq meydançasında skamyada tapılıb. Təmiz idi, saçları səliqəli düzülmüş, makiyajı diqqətlə çəkilmişdi. Ancaq başqa şeylər çox səhv idi - tatu və pirsinq kimi, açıq şəkildə yeni. Paltarlar, onilliklər köhnəlmişdir. Boynundakı lentin altında gizlənmiş ölümcül yara. Və qeyd: Pis ana, sanki uşaq tərəfindən karandaşla yazılmışdır.",
      about3:
        "Eve Dallas departamentin ən yaxşı mütəxəssisinə müraciət edir və o, Həvvaya açıq görünən şeyi təsdiqləyir: Onlar uşaqlığı bir növ travma ilə müşayiət olunan bir qatillə məşğul olurlar - bu, Həvvanın özünə çox tanış olduğu bir vəziyyətdir. Bununla belə, ipuçları təxminən altmış yaşında olan bir cinayətkarı təklif edir və oxşar MO ilə köhnə cinayətlərin qeydləri yoxdur. Belə köhnə yaranın yenidən açılmasına səbəb olan və kimisə kənara çıxaran tətik nə idi?",
    },
    {
      id: 64,
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/2940148177449_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      name: "Rhythm (updated 2/6/22): How to Achieve Breakthrough Execution and Accelerate Growth",
      author: " Patrick Thean",
      price: 25,
      star: 4.5,
      dicscount: 23,
      largep:"Mövcud deyil",
      date: "2 Iyul 2016",
      language: "Azərbaycan,Ingilis, Rus",
      pages: 89,
      audiop: "Mövcud deyil",
      type: "elektron",
      about1: "Komandanızın daha yaxşı və daha sürətli işləməsinə kömək edəcək sadə sistem",
      about2:
        "Bütün böyüyən şirkətlər, adətən müəyyən işçi və ya gəlir mərhələlərini vurduqda, mürəkkəblik tavanları ilə qarşılaşırlar. Tavandan tavanı aşmaq və böyümə ilə innovasiya etmək üçün şirkət liderləri zərurət yarandıqda fəal olmağa və döndərməyə sövq edən etibarlı sistem inkişaf etdirməlidir.",
      about3:
        "Müəllif Patrick Thean uğurlu seriyalı sahibkar və natiq kimi təcrübəsinə əsaslanaraq, uğursuzluqların əlamətlərini onlar baş verməzdən əvvəl necə müəyyənləşdirməyi, bu əlamətləri izləməyi və planınızı yolda saxlamaq və böyüməni sürətləndirmək üçün düzəlişlər etməyi nümayiş etdirir. Thean, şirkətinizdəki hər kəsin diqqətini cəmləməsi, uyğunlaşması və hesabatlı olması üçün sadə bir sistem təqdim edir. Effektiv icra üçün üç ritmli proses:",
    },
    {
      id: 65,
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/2940163180585_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      name: "Bachelors of Shotgun Ridge--Books 1-3",
      author: " Mindy Neff",
      price: 0.99,
      star: 4.5,
      dicscount: "Mövcud deyil",
      date: "15 Dekabr, 2021",
      language: "Ingilis",
      pages: 79,
      largep:"Mövcud deyil",
      audiop: 5,
      type: "elektron",
      about1:
        "USA Today və Wall Street Journal-dan 30-dan çox sevgi romanının bestseller müəllifi kovboylar, icma ruhu və xoş hisslər haqqında bir sıra gəlir. Mindy Neff kitabı ilə oxucular nə əldə edir? Gülüş və emosiya ilə dolu kiçik şəhər romantikası, mülayim və mehriban olan sərt oğlan qəhrəmanları və hər kəsi həyəcanlandırmağa kömək edən ikinci dərəcəli personajlar - həm insan, həm də heyvan! Qəlbinizə toxunan kitablar.",
      about2:
        "Bu şəhərin tamamilə xoşbəxt, öhdəsindən utancaq bakalavr kovboylarını 'Mən edirəm' deməyə inandırmaq bir az iş görəcək. Lakin Montana ştatının Shotgun Ridge-in dörd yaxşı niyyətli köhnə oyunbazları çətinliyə hazırdırlar - bəzi gülməli və emosional nəticələrlə.",
      about3:
        "Wyatt Malone pusquya düşdü! Ciddi şəkildə ona baxan kiçik oğlan Wyattın onun yeni atası olduğunu düşünürdü və oğlanın hamilə anası onun gələcək gəlini olduğunu iddia etdi. Köhnə ovçular bu dəfə çox irəli getmişdilər və indi Hanna Richmond və onun sevimli oğluna dörd yaxşı niyyətli köhnə inək vurduqlarını söyləmək Wyatt-ın öhdəsində idi. Yalnız Hannah ona dilimlənmiş çörəkdən sonra ən yaxşısı kimi baxanda və özünü tam insan kimi hiss etdirəndə, Wyatt düşünməyə başladı ki, bəlkə də qocalar haqlıdır və bu, bütün şəhər üçün təhlükəli ola bilər!<br>",
    },
    {
      id: 66,
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781460387917_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      name: "Operation Homecoming (Harlequin Romantic Suspense Series #1861)",
      author: " Justine Davis",
      price: 5.99,
      star: 4.5,
      dicscount: 0.99,
      date: "30 Avqust, 2018",
      language: "Azərbaycan,Rus,Ingilis",
      pages: 66,
      audiop: 9.5,
      largep:"Mövcud deyil",
      type: "elektron",
      about1:
        "Növbəti Cutter's Code romantikasında sirri olan qəhrəman evə qayıdır...və xilasedici rejiminə keçir...",
      about2:
        "Ailə faciəsi zamanı AWOL, Walker Cole evdə isti qarşılanmasını gözləmir. O, Amy Clark-ı - bacısının ona dəli bir yeniyetmə aşiq olan rəfiqəsini - indi ağıllı, seksual bir qadın görəcəyini gözləmir.",
      about3:
        "Uolker Amy ağrısını və nifrətini ona səbəb olduğunu bilsə də, öz ağrısı daha pisdir. O, heç vaxt cəhənnəm illəri ilə bağlı həqiqəti deyə bilməz. Amma Amy-nin hüquqşünas işi onu təhlükə altına saldıqda, Uoker onun qarşısıalınmaz bədənini qorumaq və özünü etibar və bağışlanmağa layiq olduğunu sübut etmək şansından qaçır. Narahatlıq üçün burnu olan Foksvort iti hətta Cutter də problem partlayanda arxasını tutur!",
    },
    {
      id: 67,
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781416565604_p0_v6%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      name: "Change of Heart",
      author: " Jodi Picoult",
      price: 1.99,
      star: 4,
      dicscount: 1,
      date: "12 Yanvar, 2021",
      language: "Ingilis, Rus",
      largep:"Mövcud deyil",
      pages: 92,
      audiop: "Mövcud deyil",
      type: "elektron",
      about1:
        "Məşhur №1 New York Times bestseller müəllifi ananın faciəvi itkisi və bir kişinin xilas olmaq üçün son şansı haqqında heyranedici nağıl təqdim edir.",
      about2:
        "Bir an İyun Nealon xoşbəxtliklə ailəsi ilə birlikdə gülüş və macəra dolu illəri səbirsizliklə gözləyirdi, digər an isə ürəyi kimi boş olan gələcəyə baxırdı. İndi onun həyatı gözləmə oyunudur. Yaralarını sağaltmaq üçün zaman gözləyir, ədalət gözləyir. Bir sözlə, möcüzənin baş verəcəyini gözləmək.",
      about3:
        "Shay Bourne üçün həyat daha çox sürpriz etmir. Dünya ona heç nə vermədi və onun dünyaya təklif edəcəyi heç nə yoxdur. Ürək döyüntüsündə isə onun üçün hər şeyi dəyişən bir şey baş verir. İndi onun xilas olmaq üçün son şansı var və bu, İyunun on bir yaşlı qızı Claire ilə bağlıdır. Lakin Şey və Kler arasında acı təəssüflər, keçmiş cinayətlər və uşağını itirmiş ananın qəzəbi okeanı uzanır.",
    },
    {
      id: 68,
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780385541701_p0_v7%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      name: "I Was Anastasia",
      author: " Ariel Lawhon",
      price: 4.99,
      star: 4,
      largep:"Mövcud deyil",
      dicscount: 1.99,
      date: "5 Iyul, 2015",
      language: "Ingilis,Azərbaycan",
      pages: 52,
      audiop: 6.5,
      type: "elektron",
      about1:
        "NEW YORK TIMES BESTSELLERİ • Anna Andersonun Anastasiya Romanov kimi tanınmaq üçün əlli illik döyüşündəki qeyri-adi döngələri və dönüşləri açan heyranedici tarixi gerilim. O, Rusiyanın Böyük Düşesidir, yoxsa başqa bir qadının mirasının oğrusu?",
      about2:
        "Rusiya, 17 iyul 1918-ci il: Vladimir Leninin birbaşa göstərişi ilə bolşevik gizli polis qüvvələri Anastasiya Romanovu bütün imperator ailəsi ilə birlikdə Sibirdəki rütubətli zirzəmiyə saldılar və burada amansız bir atəş dəstəsi ilə qarşılaşdılar. Heç biri sağ qalmaz. Ən azından cəlladlar həmişə bunu iddia ediblər.",
      about3:
        "Almaniya, 17 fevral 1920-ci il: Anastasiya Romanova qeyri-adi dərəcədə bənzəyən gənc qadın titrəyərək kanaldan çıxarılır. Donmuş suda olduğunu izah etməkdən və ya hətta xilasedicilərini etiraf etməkdən imtina edərək, o, xəstəxanaya aparılır və müayinə bədəninin saysız-hesabsız dəhşətli yaralarla dolu olduğunu göstərir. Nəhayət danışanda bu qorxmuş, sirli gənc qadın özünü Rusiyanın böyük hersoginyası adlandırır.",
    },
    {
      id: 69,
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780307776204_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      name: "The Diary of a Young Girl",
      author: " Anne Frank",
      price: 6.5,
      star: 5,
      dicscount: "Mövcud deyil",
      date: "25 Mart, 2014",
      largep:"Mövcud deyil",
      language: "Inglis,Türk,Azərbaycan,Rus",
      pages: 79,
      audiop: 10.99,
      type: "elektron",
      about1:
        "QEYDİ NƏŞR • Ömrünün son illərini keçirdiyi çardaqda kəşf edilən Anna Frankın diqqətəlayiq gündəliyi o vaxtdan dünya klassikasına çevrildi - müharibənin dəhşətlərini xatırladan və insan ruhuna bəlağətli vəsiyyət edən.",
      about2:
        "1942-ci ildə nasistlərin Hollandiyanı işğal etməsi ilə on üç yaşlı yəhudi qız ailəsi ilə birlikdə Amsterdamdakı evlərini tərk edərək gizləndilər. Sonrakı iki il ərzində, harada olduqları Gestapoya xəyanət edilənə qədər, onlar və başqa bir ailə köhnə ofis binasının 'Gizli Əlavədə' monastırda yaşadılar. Xarici dünya ilə əlaqəsi kəsilmiş, onlar aclıq, cansıxıcılıq, qapalı məhəllələrdə yaşamanın daimi qəddarlığı və daim mövcud olan kəşf və ölüm təhlükəsi ilə üzləşdilər.",
      about3:
        "Anna Frank öz gündəliyində bu dövrdə yaşadıqlarının canlı təəssüratlarını qeyd etdi. Növbə ilə düşüncəli, hərəkətli və əyləncəli, onun hesabı insan cəsarəti və zəifliyi haqqında heyrətamiz şərhlər təqdim edir və vədi faciəvi şəkildə yarımçıq qalan həssas və ruhlu gənc qadının cəlbedici avtoportretini təqdim edir.",
    },
    {
      id: 70,
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781538703533_p0_v7%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      name: "Steal",
      author: " James Patterson, Howard Roughan",
      price: 29.5,
      star: 5,
      dicscount: 22.99,
      date: "18 Sentyabr, 2019",
      largep:"Mövcud deyil",
      language: "Azərbaycan, Rus, Ingilis",
      pages: 125,
      audiop: 35.99,
      type: "elektron",
      about1:
        "İncəsənət qalereyaları və kazinolar, malikanələr və fahişəxanalar, milyarderlər və oğrular - yalnız Ceyms Patterson bu çöküşlü və şübhəli üçlü xaç yarada bilər.",
      about2:
        "Təsəvvür edin ki, Dr.Dylan Reinhart-ın Anormal Psixologiya dərsinin ikinci kurs tələbəsi Karter von Oehson özünü öldürməyi planlaşdırdığını İnstaqramda yazır. 24 saat keçdi və hələ də heç kim onu ​​görməyib.",
      about3:
        "Onun hələ də sağ olduğuna əmin olan şəxs atası Mathias von Oehson, dünyanın ən böyük hedcinq fondunun qurucusu və baş direktorudur. Lakin Matiasın bildiyi və necə bildiyi sonda o qədər zərərli bir sirri açacaq ki, sanki özü intihar edir. Onun polisə müraciət etmək imkanı yoxdur. Amma hələ də onun müraciət edə biləcəyi biri var.",
    },
    {
      id: 71,
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780061753862_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      name: "They Came to Baghdad",
      author: "Agatha Christie",
      price: 9.99,
      star: 4,
      dicscount: 1.5,
      date: "5 Oktyabr, 2021",
      language: "Ingilis, Rus",
      largep:"Mövcud deyil",
      pages: 85,
      audiop: "Mövcud deyil",
      type: "elektron",
      about1:
        "Agatha Christie-nin klassik kriminal macəra romanında, Onlar Bağdada gəldilər, Yaxın Şərqdə parlaq, gənc bir macəra axtaran yaralı bir casusun otel otağında müddəti başa çatdıqda, gözlədiyindən daha çox həyəcan tapır.",
      about2:
        "Bağdadda gizli fövqəldövlət sammiti keçirilir, lakin söz ortadadır və Yaxın Şərqdəki gizli bir təşkilat danışıqları sabotaj etmək niyyətindədir.Bu partlayıcı vəziyyətdə gənc qadın Viktoriya Cons görünür. Otel otağında yaralı bir casus öldüyü zaman sövdələşdiyindən daha çox qazanan macəra həsrəti ilə.",
      about3:
        "Zirvəni xilas edə biləcək yeganə insan öldü. Viktoriya ölməkdə olan sözlərini başa düşə bilərmi: Lüsifer...Bəsrə...Lefarq. . . .",
    },
    {
      id: 72,
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780786041510_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      name: "Before It's Too Late",
      author: " Sara Driscoll",
      price: 8.99,
      star: 5,
      largep:"Mövcud deyil",
      dicscount: 2.99,
      date: "23 Noyabr, 2019",
      language: "Ingilis, Azərbaycan, Rus",
      pages: 58,
      audiop: 15.99,
      type: "elektron",
      about1:
        "Serial qatil FTB ilə oyunlar oynayarkən, xüsusi agent və onun K-9 ortağı bu Vaşinqton, DC trillerindəki qaydalara riayət etməkdən imtina edir.",
      about2:
        "Vaşinqtonda, DC bölgəsində bir qadın qutuda köməksiz vəziyyətdə yatır - çətinliklə nəfəs alır və diri-diri basdırılır. Quantico'da FTB qadını qaçıran şəxsdən kodlu mesaj alır. O, bir oyun oynamaq istəyir: ipuçlarını deşifrə et, qızı xilas et. Lakin FTB kriptoanalitikləri kodu sındırdıqda, Xüsusi Agent Meg Jennings və onun K-9 tərəfdaşı Hawk çox gec olur. Günahsız bir həyat itirildi... və qatilin oyunu bitmək üzrə deyil.",
      about3:
        "Daha çox kodlaşdırılmış mesajlarla ölümcül nümunə təkrarlanır - təkrar-təkrar. Cəsədlərin sayı artdıqca, Meq protokolu pozmaq və qaçırıcının əyri ipuçlarını deşifrə etmək üçün parlaq bacısı Cara ilə məsləhətləşmək qərarına gəlir. İşini təhlükə altına alan Meq, onun və Hawk-ın nəzarəti altında daha bir insanın ölməsinə icazə verməməkdə qərarlıdır. Plan uğursuz olarsa, sonda onları dişləyə bilər. Və əgər bu, qatilə apararsa, onları əbədi olaraq basdıra bilər. . .",
    },
    {
      id: 73,
      image:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781488077135_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      name: "Danger in Numbers",
      author: "Heather Graham",
      price: 10.99,
      star: 4.5,
      dicscount: 1.99,
      date: "9 Aprel, 2018",
      largep:"Mövcud deyil",
      language: "Ingilis, Rus",
      pages: 89,
      audiop: 15.5,
      type: "elektron",
      about1:
        "Everqleydlərin kənarında, qorxunc bir cinayət səhnəsi iki agenti pozulmuş inanc, tamah və ölümcül sirlər dünyasına göndərən bir araşdırmaya başlayır.",
      about2:
        "Uzaq bir yolun kənarında ritualistik qətl Florida əyalət polisini gətirir. Xüsusi agent Amy Larson heç vaxt bundan pisini görməmişdi və bu qətlin yalnız başlanğıc ola biləcəyinə dair əlamətlər var. Cinayət FTB-nin diqqətini Xüsusi Agent Hunter Forrest, zorakılıq kultlarının necə işlədiyi barədə daxili məlumatı olan və öz keçmişindən heç vaxt qaça bilməyəcək bir adam şəklində çəkir.",
      about3:
        "Kənd camaatı onların içindəki ölümdən pərişandır, lakin insanlar dediklərindən daha çox şey bilirlər. Amy və Hunter güclərini birləşdirdikcə, hər bir aparıcı onları iradələrinin yerinə yetirildiyini görmək üçün heç bir şey dayandırmayacaqları təhlükəli bir qrupun təhrif edilmiş inanclarına daha da aparır.Qiyamət günü hazırlayanlar və kiçik şəhərlərin sirləri bu qızğınlıqda toqquşur. , burulğan səhifə çevirən triller.",
    },
  ],
  basket:[],
  favs:[],

};
export default function Reducer(state = initialValue,action) {
  switch (action.type){
    case "ADDTOBASKET":
      return {...state,basket:[...state.basket,action.value]};
    case "REMOVEFROMBASKET":
      return {...state, basket:[...state.basket.filter((a)=>a.id!==action.value.id)]}
    case "ADDTOFAVS":
      return {...state,favs:[...state.favs,action.value]};
    case "REMOVEFROMFAVS":
      return {...state, favs:[...state.favs.filter((a)=>a.id!==action.value.id)]}
  }
  return state;
}
