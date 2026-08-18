/* ---------------------------------------------------------------
   SLV Wake Songs — song data

   This mirrors the SongsData.kt list from the Android app:
   each song has an id, a title (number included, per current
   convention), an optional language tag, and lyrics.

   To add a song: copy one of the objects below, give it the next
   id, and fill in title / lyrics. No other file needs to change.
------------------------------------------------------------------ */
const SONGS = [
  {
    id: 1,
    title: "01 Kon Magkatigum Ta",
    lang: "Cebuano",
    lyrics:
`[KORO:] 
Kon magkatigum ta sa Iyang 
ngalan, Siya natong tanan 
makig-uban. Kon maghi-usa
ta sa Iyang gugma,kalinaw 
maangkon ta.

Ug sa atong panginahanglan,
ang Ginoo ang atong dangpan,
kay Siya ra man ang tuburan
sa tanang mga kaayohan.
[(Koro)]


`
  },
  {
    id: 2,
    title: "02 Ang Buhat Tang Maayo",
    lang: "Cebuano",
    lyrics: 
    "^1.^  Ang buhat tang maayo ngadtos mga katawhan, mao kini gisugo, sa atong kasulatan. Pinaagi kanato, kini ilang makita,nga ang kamanduan gugma diay'ng langitnon alang sa tanan.\n\n[KORO]\nPagka-anindot sa maayong buhat ngadto sa atong mga igsoon. Kon mag-ambahan sa katam-is grasya nga giandam na sa Ginoong Dios Amahan.\n\n^2.^  Itudlo, O Ginoo, unsa'y among buhaton nga ilang kahimut-an ang akong binuhatan. Hatagi ko'g kahait, sa ako nga pangisip, aron matuman ko ang gipabuhat nga alang gyud sa tanan. [(Koro)]"
  },
  {
    id: 3,
    title: "03 Kay Kita Usa Ra",
    lang: "Cebuano",
    lyrics: `[KORO:] 
Kay kita usa ra sa gugma ni Kristo. Kon mamatay kita uban Kaniya, mabanhaw kita sa kinabuhing dayon.

^1.^  	Kon sa imong kinabuhi gugma ang gadasig, ayaw na pangita ug lain pang butang, kay ang Ginoo anaa kanimo. [(KORO)]

^2.^    Kon aduna kay igsoon nag-antos sa kasakit, lig-ona ang pagtuo sa langitnong gahum kay ang Ginoo mao ang paglaum. [(Koro)]
`
  },
  {
    id: 4,
    title: "04 Sino Ako",
    lang: "Tagalog",
    lyrics: `
    Hiram sa Diyos ang aking
    buhay. Ikaw at ako tanging
    handog lamang. Di ko ninais
    na ako’y isilang. Ngunit 
    salamat dahil may buhay.

    Ligaya ko na ako’y isilang
    Pagkat tao ay mayroong
    dangal. Sino’ng may 
    pag-ibig, sino’ng 
    nagmamahal kundi ang tao 
    Diyos ang pinagmulan.
    Kundi ako umibig, kundi
    ko man bigyang halaga 
    ang buhay ko’y handog, 
    ang buhay ko’y hiram sa 
    Dios, kung di ako
    nagmamahal, sino ako? [(repeat Ligaya ko . .)]

    `
  },
  {
    id: 5,
    title: "05 Diosnong Magtutudlo",
    lang: "Cebuano",
    lyrics: `
    Diosnong Magtutudlo, ania
    kami karon, binuksan ang 
    kasing-kasing sa Imong 
    Pulong. Dinhi niining tigom,
    Imo kaming gitawag aron 
    lamang mabuhi sa Imong mga
    hatag, aron lamang mabuhi sa
    Imong mga hatag. 
    [(Repeat once)]
    `
  },
  {
    id: 6,
    title: "06 Ang Kinabuhi Sa Tawo",
    lang: "Cebuano",
    lyrics:`
    Ang kinabuhi sa tawo sama sa
    usa ka binhi. Kon alimahan 
    pag-ayo moturok kini'g 
    molambo. Ug unya abto'g 
    kahamtog sama sa atong 
    tanom kay inumol man sa 
    gugma, gugma sa isigkaingon.

    Kay ki'ng atong kinabuhi,
    kinabuhi'ng usa ra. Ug sama 
    sa usa ka binhi, sa gugma 
    kita gipili. Kay kinabuhing
    bililhon, bulawan ang 
    panahon. Ato g'yung pani-
    nguhaon ang pagpuyo nga 
    sulondon, ato g'yung pani-
    nguhaon ang pagpuyo nga 
    sulondon. 

    `
  },
  {
    id: 7,
    title: "07 Laum, Kalag Ko",
    lang: "Cebuano",
    lyrics:`
    ^1.^  Kon adunay kahayag human sa kangitngit; kon adunay kalipay human sa kasakit; kon adunay katam-is human sa kapa-it, laum kalag ko, adunay langit.

    [KORO:]
    Ginoo, milaum ako Kanimo, mitoo ako sa kagahuman Mo. Misalig ako sa Imong gugma; sa Imong pagpangga ug pag-amoma.

    ^2.^  Kon adunay kalinaw human sa kasamok; kon adunay pasaylo human sa kaligotgot; kon adunay pagbati human sa kayugot; laum kalag ko, ayaw kahadlok. [(Koro)]
    `
  },
  {
    id: 8,
    title: "08 Gugma'g Paglaum",
    lang: "Cebuano",
    lyrics: `
    ^1.)^   Ayaw'g wad-a ang paglaum, bisan tuod sa mga kadag-um; kay luyo sa mga panganod, nagasidlak ang adlaw. Huptan ta ang kalig-on, ang kalig-on sa pagtuo. O gugma'ng way kahadlokan, O gugma'ng hilabihan.

    [KORO:]
      Kon atong palandongon, ang mga nangaging panahon, kaguol man kon kalipay, ang tanan ay lumalabay. Pagkanindot nga mabuhi, nga adunay ginamithi. Kinabuhing hinalad, gugma'ng way paglubad.

    ^2.)^   Ayaw'g wad-a ang kadasig bisan tuod sa mga kasakit; kon aduna may kangitngit, may bitoon ang langit. Huptan ta ang kalig-on, ang kalig-on sa pagtuo. O gugma'ng way kahadlokan, O gugma'ng hilabihan. [(Koro)]

    ^Coda: ^  Kinabuhi'ng hinalad, gugma'ng way paglubad.
    `
  },
  {
    id: 9,
    title: "09 Tana Kamo, Kaigsoonan",
    lang: "Cebuano",
    lyrics: `
    Tana kamo, kaigsoonan; adto ta sa Ginoo. Ang hustong dalan, kamatuoran, kinabuhing wa'y utlanan.

    Tana kamo, atong simbahon, awitan ta ang Ginoo; kay angayan gayud Siya sa pagdayeg ug gugma ta.

    Ikaw ang kadasig; Ikaw ang kalig-on; Ikaw ang paglaum karon. Sa among kalibog, sa among pag-antus, tabangi kami, O Jesus.
    `
  },
  {
    id: 10,
    title: "10 Gugma",
    lang: "Cebuano",
    lyrics: `
    Gugma ang naghagit kanamo sa paghalad sa among kinabuhi. Gugma ang nagdasig kanamo sa pagsilbi Kanimo, O Ginoo.

    Ikaw ra ang bugtong paglaum; kahayag sa takna'ng madulom. Ug kami magpadayon, Ginoo, sa pagsilbi Kanimo sa pagtoo. Kay kami modangop Kanimo sa kasakit ug kalipay hangtud sa ikamatay.
    
    `
  },
  {
    id: 11,
    title: "11 Dios Lang Igo Na",
    lang: "Cebuano",
    lyrics: `
    Ang kabalaka ayaw pasudla ug ang tanan mong kahadlok wad-a. Kay ang tanang butang lumalabay, Dios lang ang magpabiling kanunay.

    [KORO:]
    Ang pailub mao ra'y sinugdan sa tanan mo'ng mga kaayohan. Ang Diosnon, sa tanan wa na'y gana; Dios lang igo na alang kaniya.

    ^Coda:^  Dios lang igo na alang kaniya.

    `
  },
  {
    id: 12,
    title: "12 Ang Tao",
    lang: "Tagalog",
    lyrics: `
    ^1.)^  Bawat tao'y nabuhay sa hapis; bawat patak ng luha'y pagdama. Bawat pintig ng puso'y tamis; bawat buhay mayroong simula.

    [KORO:]
    Ang buhay mo ay di sa iyo. Napag-isip-isip mo na ba? Ilang taon ang lumipas na, lumipas na, lumipas na? Bawat tao'y simula, bawat simula'y hangganan. Magpasya ka saan ka pupunta.

    ^2.)^  Bawat simula'y s'yang hangganan; bawat hakbang ng tao'y may baitang. Bawat baitang panahon ng buhay; bawat buhay mayroon'g simula. [(Koro)]

    `
  },
  {
    id: 13,
    title: "13 Pag-aalay Ng Puso",
    lang: "Tagalog",
    lyrics: `
    Minsan lamang ako daraan sa daigdig na ito. Kaya ano man ang mabuting maari'ng gawin ko ngayon. O anumang kabutihan ang maari kong ipadama. Itulot ninyong magawa ko ngayon ang mga bagay na 'to.

    [Refrain:]  Nawa'y 'wag ko 'tong ipagpaliban o ipagwalang bahala. Sapagkat 'di na 'ko muling daraan sa ganito'ng mga landas. [(Repeat refrain once)]

    `
  },
  {
    id: 14,
    title: "14 Sa Imong Mga Kamot, Amahan",
    lang: "Cebuano",
    lyrics: `
    Sa Imong mga kamot, Amahan, ang amo karon'g igsoon itugyan. Dawata siya sa paraiso, malaumon kami, O Ginoo.

    Salamat sa Imo'ng kaayo'g gugma nga Imong gipakita sa buhi pa siya. Lig-ona kami ssa pagtoo; hiusaha kami, O Ginoo. [(Balikon ... sa Imong mga kamot..)]
    `
  },
  {
    id: 15,
    title: "15 Mao Kini Ang Paghinigugmaay",
    lang: "Cebuano",
    lyrics: `
    ^1.)^  Ani-a kita aron mag-inambitay sa mga tuig, mga luha'g kalipay. Gugma'ng naghiusa kanato karon, mag-inunungay ta sa tanang panahon.

    [KORO]
    Mao kini ang kinabuhi. Mao kini ang kagawasan. Mao kini ang kalipay. Mao kini ang paghinigugmaay.

    ^2.)^  Ania kita aron magbinayloay, sa mga buhat ug kasinatian. Gugma'ng naghiusa kanatong tanan. Magtinamdanay ta kay kini gugma man. [(Koro)]

    `
  },
  {
    id: 16,
    title: "16 Tanging Yaman",
    lang: "Tagalog",
    lyrics: `
    [KORO:]
    Ikaw ang aking tanging yaman, na di lubosan'g masumpongan. Ang nilikha Mo'ng kariktan, sulyap ng 'Yong kagandahan.

    ^1.)^  Ika'y hanap sa t'wina, nito'ng pusong ikaw lamang ang saya. Sa ganda ng umaga, nangungulila sa 'yo sinta. [(Koro)]

    ^2.)^  Ika'y hanap sa t'wina, sa kapwa ko kita laging nadarama. Sa Iyong mga likha, hangad pa rin'g masdan ang 'Yong mukha. [(Koro)]

    `
  },
  {
    id: 17,
    title: "17 Hindi Kita Malilimutan",
    lang: "Tagalog",
    lyrics: `
    Hindi kita malilimutan. Hindi kita pababayaan. Nakaukit magpakailanman sa 'King palad ang 'yong pangalan.

    Malilimutan ba ng ina ang anak na galing sa kanya? Sanggol sa kangyang sinapupunan, paano niya matatalikdan?

    Ngunit kahit na malimutan ng ina ang anak niyang tangan.

    Hindi kita malilimutan; kailanma'y di pababayaan. Hindi kita malilimutan; kailanma'y di pababayaan.

    `
  },
  {
    id: 18,
    title: "18 Sa 'Yo Lamang",
    lang: "Tagalog",
    lyrics: `
    Puso ko'y binihag mo sa tamis ng pagsuyo. Tanggapin yaring alay; ako'y iyo habambuhay.

    Aanhin pa ang kayamanan, luha at karangalan. Kung ika'y mapasa'kin, lahat na nga ay kakamtin.

    [KORO:]
    Sa 'yo lamang ang puso ko. Sa 'yo lamang ang buhay ko. Kalinisan, pagdaralita, pagtalima aking sumpa.

    Tangan ko'ng kalooban sa iyo'y nilalaan. Dahil atas ng pagsuyo, tumalima lamang sa 'yo. [(Koro)].

    `
  },
  {
    id: 19, 
    title: "19 Sa Diyos Lamang Mapapanatag",
    lang: "Tagalog",
    lyrics: `
    [KORO:]
    Sa Diyos lamang mapapanatag ang aking kaluluwa; sa Kanya nagmumula ang aking pag-asa at kaligtasan.

    ^1.)^  O Diyos, Ikaw ang aking kaligtasan, nasa 'Yo aking kalwalhatian. Ikaw lamang aking inaasahan, ang aking moog at tanggulan. [(Koro)]

    ^2.)^  Paniniil di ko pananaligan; puso'y 'di ihihilig sa yaman. Kundi sa Diyos na makapangyarihan na aking lakas at takbuhan. [(Koro)]

    ^3.)^  Poon, Ika'y puno ng kabutihan; pastol 'Kang nagmamahal sa kawan. Ina-akay sa luntiang pastulan, tupa'y hanap Mo kung mawaglit man. [(Koro)]

    `
  },
  {
    id: 20,
    title: "20 Manalig Ka",
    lang: "Tagalog",
    lyrics: `
    Iluom lahat ng takot sa iyong damdamin. Ang pangalan N'ya lagi ang tawagin at S'ya'y nakikinig sa bawat hinaing.

    Magmasid at mamulat sa Kanyang kapangyarihan. Nabatid mo ba na S'yay naglalaan at patuloy na naghahatid ng tunay na kalayaan. 

    Manalig ka, tuyuin ang luha sa mga mata. Hindi S'ya panaginip, hindi S'ya isang pangarap. S'yay buhay, manalig ka.

    At ngayo'y tila walang mararating na bukas. Ngunit kung S'ya'y hahayaang maglandas, pag-asa ay muling mabibigkas.

    Manalig ka, tuyuin ang luha sa mga mata. Hindi S'ya panaginip, hindi S'ya isang pangarap. S'ya'y buhay, manalig ka.

    Manalig ka, tuyuin ang luha sa mga mata. Hindi S'ya natutulog, hindi S'ya nakakalimot. Kay Hesus, manalig ka.
    
    `
  },
  {
    id: 21,
    title: "21 In Moments Like This",
    lang: "English",
    lyrics: `
    In moments like this, I sing out a song, I sing out a love song to Jesus. 

    In moments like this, I lift up my hands, I lift up my hands to the Lord.

    Singing I love You, Lord.
    Singing I love You, Lord.
    Singing I love you, Lord.
    I love you. 
    [(Repeat song once)]
    `
  },
  {
    id: 22,
    title: "22 He Will Carry You",
    lang: "English",
    lyrics: `
    There is no problem too big
    God cannot solve it
    There is no mountain too tall
    God cannot move it

    There is no storm too dark
    God cannot calm it
    There is no sorrow too deep
    He cannot soothe it

    If He carried the weight of the world upon His shoulders; I know, my brother, that He will carry you.

    If He carried the weight of the world upon His shoulders; I know, my sister, that He will carry you.

    ^(Bridge)^  He said, "Come on to me all who are weary and I will give you rest.
    `
  },
  {
    id: 23,
    title: "23 In His Time",
    lang: "English",
    lyrics: `
    In His time 
    In His time
    He makes all things beautiful
    In His time

    Lord please show me 
    Every day, as you're teaching
    Me Your way, that You do just
    What You say
    In Your time

    In Your time
    In Your time
    You make all things beautiful
    In Your time

    Lord my life
    To You I bring
    May each song I have to sing
    Be to You a lovely thing
    In Your time

    In Your time (in Your time)
    In Your time (in Your time)
    You make all things beautiful
    In Your time 

    Lord my life 
    To You I bring
    May each song I have to sing
    Be to You a lovely thing
    In Your time

    Be to You a lovely thing
    In Your time

    `
  },
  {
    id: 24,
    title: "24 Lift Up Your Hands",
    lang: "English",
    lyrics: `
    Life is not at all that my friend, hmmm. If you believe in yourself, if you believe there's Someone who walks through life with you. You'll never be alone, just learn to reach out and open your heart. Lift up your hands to God and He'll show you the way.

    [REFRAIN:]
    And He said, "Cast your burdens upon Me those who are heavily laden. Come to Me, all of you who are tired of carrying heavy loads. For the yoke I will give you is easy and My burden is light. Come to Me and I will give you rest." 

    When you feel the world is tumblin' down on you and you have no one that you can hold on to. Just face the rising sun and you'll see hope and there's no need to run. Lift up your hands to God and He'll make you feel alright. [(Refrain)]

    `
  },
  {
    id: 25,
    title: "25 I May Never Pass This Way Again",
    lang: "English",
    lyrics: `
    I'll give my hands to those who cannot see, the sunshine or the fallin' rain.

    I'll sing my song to cheer the weary along for I may never pass this way again.

    I'll share my faith with every troubled heart, so I shall not have lived in vain.

    I'll give my hand, I'll sing my song, I'll share my faith, because I know. That the time is now to fulfill each vow for I may never pass this way again!
    [(Repeat ... I'll share my faith ..)]

    `
  },
  {
    id: 26,
    title: "26 I Am The Bread Of Life",
    lang: "English",
    lyrics: `
    I am the Bread of Life
    He who comes to me 
    Shall not hunger
    He who believes in me
    Shall not thirst
    No one can come to me
    Unless the Father draws him

    [CHORUS:]
    And I will raise him up
    And I will raise him up
    And I will raise him up
    On the last day

    The bread that I will give
    Is my flesh for 
    The life of the world
    And he who eats of this bread
    He shall live forever
    He shall live forever
    [(Chorus)]

    `
  },
  {
    id: 27,
    title: "27 Power Of Your Love",
    lang: "English",
    lyrics: `
    Lord, I come to You
    Let my heart be changed, renewed
    Flowing from the grace
    That I've found in You

    Lord I've come to know
    The weaknesses I see in me
    Will be stripped away
    By the power of Your love

    [REFRAIN:]
    Hold me close
    Let Your love surround me
    Bring me near 
    Draw me to Your side
    And as I wait
    I'll rise up like the eagle
    And I will soar wit You
    Your Spirit leads me on
    In the power of Your love

    Lord unveil my eyes
    Let me see You face to face
    The knowledge of Your love
    As You live in me

    Lord renew my mind
    As Your will unfolds
    In my life
    In living every day
    By the power of Your love
    [(Refrain)]

    `
  },
  {
    id: 28,
    title: "28 You Are My Hiding Place",
    lang: "English",
    lyrics: `
    You are my hiding place
    You always fill my heart
    With songs of deliverance
    Whenever I am afraid
    I will trust in You

    I will trust in You
    Let the weak say
    I am strong
    In the strength of the Lord
    [(Repeat from the top)]

    `
  },
  {
    id: 29,
    title: "29 Saints Of God",
    lang: "English",
    lyrics: `
    Saints of God,
    Come to his(her) aid!
    Come to meet him(her),
    Angels of the Lord!
    Receive his(her) soul
    And present him(her) to God
    Present this soul
    To God Most High

    May Christ who called you
    Take you home;
    May angels lead you
    To our parent's side!
    Receive his(her) soul
    And present him(her) to God
    Present this soul
    To God Most High

    Give eternal rest, O Lord;
    And may Your light
    Shine on him(her) forever
    Receive his(her) soul
    And present him(her) to God
    Present this soul
    To God Most High

    `
  },
  {
    id: 30,
    title: "30 Salve Regina",
    lang: "Latin",
    lyrics: `
    Salve, Regina,
    Mater misericonrdiae;
    Vita, dulcedo 
    Et spes nostra, salve.
    Ad te clamamus,
    Exules filii Hevae.
    Ad te suspiramus,
    Gementes et flentes
    In hac lacrimarum valle.

    Eia ergo, 
    Advocata nostra,
    Illos tuos
    Misericordes oculos
    Ad nos coverte.

    Et Iesum, benedictum
    Fructum ventris tui,
    Nobis post hoc exilium
    Ostende

    O clemens, O pia,
    O dulcis Virgo Maria

    `
  },
  {
    id: 31,
    title: "31 Pananagutan",
    lang: "Tagalog",
    lyrics: `
    ^1.)^   Walang sinuman ang nabubuhay para sa sarili lamang. Walang sinuman ang namamatay para sa sarili lamang.

    [KORO:]
    Tayong lahat ay may pananagutan sa isa't isa. Tayong lahat ay tinipon ng Diyos na kapiling N'ya.

    ^2.)^  Sa ating pagmamahalan at paglilingkod sa kanimo man, tayo ay nagdadala ng balita ng kaligtasan.[(Koro)]

    ^3.)^  Sabay-sabay nang nag-aawitan ang mga bansa. Tayo'y tinuring ng Panginoon bilang mga anak. [(Koro)]

    `
  },
  {
    id: 32,
    title: "Ang Kaakuhan",
    lang: "Cebuano",
    lyrics: `
    [KORO:]
    Ang kaakuhan angayang pagahuptan, bililhon kini labaw sa bulawan. Ang timaan sa tawhanong kahamtungan, ug ang kalambuan alang sa tanan.

    ^1. ^  Ang tawong maakuhon sa isigka-ingon, garbo man gayud sa yutang Pilipinhon, maamgohon, matinabangon; sa kaugalingon malimtanon. [(Koro)]

    ^2. ^  Ang tawong maakuhon sa isigka-ingon, andam man gayud sa pagsilbi'g pag-antus, madamguhon sa kaugmaon; sa kaugalingon madasigon. [(Koro)]
    
    `
  },
  {
    id: 33,
    title: "33 Ania Kami",
    lang: "Cebuano",
    lyrics: `
    Ania kami, O Ginoong Dios. Ania ang Imong lungsod, nanag-awit sa gugma'ng bug-os sa kahiusang tingog! Nalipay kami'g nag-ambahan. Nagdayeg kami sa Imong ngalan. Kini tungod sa Imong gugma, O gamhanang Amahan. [(Repeat once)]

    `
  },
  {
    id: 34,
    title: "34 Ang Panginoon Ang Aking Pastol",
    lang: "Tagalog",
    lyrics: `
    [KORO:]
    Ang Panginoon ang aking Pastol, pinagiginhawa akong lubos.

    ^1. ^   Handog N'yang himlaya'y sariwang pastulan, ang pahingahan ko'y payapang batisan. Hatid sa kalul'wa ay kaginhawahan. Sa tumpak na landas Siya ang patnubay. [(Koro)]

    ^2. ^   Madilim na lambak man ang tatahakin ko, wala akong sindak, Siya'y kasama ko. Ang hawak N'yang tungkod ang siyang gabay ko, tangan N'yang pamalo, sigla't tanggulan ko. [(Koro)]

    `
  },
  {
    id: 35,
    title: "35 Maghimaya Ka, Maria",
    lang: "Cebuano",
    lyrics: `
    Maghimaya ka, Maria!
    Napuno ka sa grasya.
    Ang Ginoong Dios ana-a 
    kanimo.
    Bulahan ikaw sa mga
    babay'ng tanan; ug 
    bulahan usab ang bunga
    sa tiyan mo nga si 
    Hesus.

    Santa Maria, Inahan sa Dios.
    Ig-ampo mo kaming makasasala,
    karo'g sa oras sa among
    kamatayon. 

    A--men.
    `
  },
  {
    id: 36,
    title: "36 Bililhong Gasa",
    lang: "Cebuano",
    lyrics: `
    Dinhi ning dughan ko nasayran ang tanan, ako bulahan man, O Ginoo ko. Kinabuhi ko uban Kanimo, Ginoo, mao'y unang bililhong gasa Mo. [(Repeat once . . Dinhi ning dughan ..)]

    Salamat Ginoo, mahigugmaong Ginoo, ihalad ko pagbalik Kanimo. 
    `
  },
  {
    id: 37,
    title: "37 Diyos Ay Pag-ibig",
    lang: "Tagalog",
    lyrics: `
    ^1.  ^  Pag-ibig ang s'yang pumukaw sa ating puso't kaluluwa. Ang s'yang nagdulot sa ating buhay ng gintong aral at pag-asa.

    ^2.  ^  Pag-ibig ang s'yang buklod nating di mapapawi kailan pa man. Sa puso't diwa tayo'y isa lamang, kahit na tayo'y magkahiwalay.

    [KORO:]
    Pagkat ang Diyos nati'y Diyos ng pag-ibig. Magmamahalan tayo't magtutulungan. At kung tayo'y bigo ay h'wag limutin na may D'yos tayo't may nagmamahal.

    ^3.  ^  Sikapin sa'ting pagsuyo ating ikalat sa buong mundo, pag-ibig ni Hesus ang s'yang sumakop sa bawat pusong uhaw sa pagsuyo. [(Koro)]

    ^Koda:  ^  D'yos ay pag-ibig. D'yos ay pag-ibig. D'yos ay pag-ibig.

    `
  },
  {
    id: 38,
    title: "38 When The Roll Is Called Up Yonder",
    lang: "English",
    lyrics: `
    ^1.  ^  When the trumpet of the Lord shall sound and time shall be no more and the morning breaks eternal bright and fair; When the saved of earth shall gather over on the other shore and the roll is called up yonder, I'll be there.

    [CHORUS:]
    When the roll is called up yonder,
    When the roll is called up yonder, 
    When the roll is called up yonder,
    When the roll is called up yonder
    I'll be there.

    ^2.  ^  On that bright and cloudless morning, when the dead in Christ shall rise and the glory of His resurrection share; When His chosen ones shall gather to their home beyond the skies and the roll is called up yonder, I'll be there. [(Chorus)]

    ^3.  ^  Let us labor for the Master from the dawn 'til setting sun. Let us talk of all His wondrous love and care. Then when all of life is over and our work on earth is done and the roll is called up yonder, I'll be there. [(Chorus)]

    `
  },
  {
    id: 39,
    title: "39 When We All Get To Heaven",
    lang: "English",
    lyrics: `
    ^1.  ^   Sing the wondrous love of Jesus; sing His mercy and His grace. In the mansions bright and blessed He'll prepare for us a place.

    [REFRAIN:]
    When we all get to heaven,
    What a day of rejoicing 
    that will be!
    When we all see Jesus,
    we'll sing and shout the victory.

    ^2.  ^   While we walk the pilgrim pathway, clouds will overspread the sky; but when travelling days are over, not a shadow, not a sigh. [(Refrain)]

    ^3.  ^   Let us then be true and faithful, trusting, serving every day; just one glimpse of Him in glory will the toils of life repay. [(Refrain)]

    ^4.  ^   Onward to the prize before us! Soon His beauty we'll behold; soon the pearly gates will open; we shall tread the streets of gold. [(Refrain)]

    `
  },
  {
    id: 40,
    title: "40 Because He Lives",
    lang: "English",
    lyrics: `
    ^1.   ^   God sent His son, they called Him Jesus; He came to love, heal and forgive; He lived and died to buy my pardon, an empty grave is there to prove my Savior lives!

    [REFRAIN:]   Because He lives, I can face tomorrow. Because He lives, all fear is gone. Because I know He holds the future. And life is worth the living, just because He lives!

    ^2.   ^   How sweet to hold a newborn baby and feel the pride and joy he brings; but greater still the calm assurance: this child can face uncertain days because He lives! [(Refrain)]

    ^3.   ^   And then one day, I'll cross the river, I'll fight life's final war with pain; and then, as death gives way to victory, I'll see the lights of glory and I'll know He lives! [(Refrain)]

    `
  },
  {
    id: 41,
    title: "41 How Great Thou Art",
    lang: "English",
    lyrics: `
    ^1.   ^   Oh Lord, my God
    When I, in awesome wonder
    Consider all the worlds
    Thy hands have made
    I see the stars
    I hear the rolling thunder
    Thy power throughout
    The universe displayed

    [REFRAIN:]
    Then sings my soul
    My Savior God to Thee
    How great Thou art
    How great Thou art
    Then sings my soul
    My Savior God to Thee
    How great Thou art
    How great Thou art

    ^2.   ^   And when I think 
    That God His Son not sparing
    Sent Him to die
    I scarce can take it in
    That on the cross
    My burden gladly bearing
    He bled and died
    To take away my sin
    [(Refrain)]

    ^3.   ^   When Christ shall come
    With shout of acclamation
    And take me home
    What joy shall fill my heart
    Then I shall bow
    In humble adoration
    And then proclaim
    My God, how great Thou art
    [(Refrain)]

    `
  },
  {
    id: 42,
    title: "42 I've Got A Mansion",
    lang: "English",
    lyrics: `
    ^1.   ^   I'm satisfied with just a cottage below
    A little silver and a little gold
    But in that city where the ransomed will shine
    I want a gold one that's silver lined

    [CHORUS:]
    I've got a mansion 
    Just over the hilltop
    In that bright land where
    We'll never grow old
    And some day yonder
    We will never more wander
    But walk on streets
    That are purest gold

    ^2.   ^   Don't think me poor 
    Or deserted or lonely
    I'm not discouraged
    I'm heaven bound
    I'm but a pilgrim
    In search of the city
    I want a mansion,
    A harp and a crown
    [(Chorus)]

    `
  },
  {
    id: 43,
    title: "43 What A Friend We Have With Jesus",
    lang: "English",
    lyrics: ` 
    What a friend we have in Jesus
    All our sins and griefs to bear
    What a privilege to carry
    Everything to God in prayer!
 
    O what peace we often forfeit
    O what needless pain we bear
    All because we do not carry
    Everything to God in prayer!

    Have we trials and temptations?
    Is there trouble anywhere?
    We should never be discouraged
    Take it to the Lord in prayer

    Can we find a friend so faithful
    Who will all our sorrows share?
    Jesus knows our every weakness
    Take it to the Lord in prayer

    `
  },
  {
    id: 44,
    title: "44 In The Sweet By And By",
    lang: "English",
    lyrics: `
    There's a land that
    Is fairer than day
    And by faith we can see it afar
    For the Father waits
    Over the way
    To prepare us a
    Dwelling place there

    [CHORUS:]
    In the sweet by and by
    We shall meet 
    On that beautiful shore
    In the sweet by and by
    We shall meet
    On that beautiful shore

    We shall sing
    On that beautiful shore
    The melodious songs
    Of the blessed
    And our spirit shall
    Sorrow no more
    Not a sign for
    The blessing of rest
    [(Chorus)]

    `
  },
  {
    id: 45,
    title: "45 Standing On The Promises",
    lang: "English",
    lyrics: `
    ^1^ Standing on the promises
    Of Christ my King
    Through eternal ages
    Let His praises ring
    Glory in the highest
    I will shout and sing
    Standing on the 
    Promises of God.

    [REFRAIN:]
    Standing, standing, standing 
    On the promises of 
    God my Savior;
    Standing, standing, I'm
    Standing on the 
    Promises of God

    ^2^ Standing on the promises
    That cannot fail
    When the howling storms
    Of doubt and fear assail
    By the living Word of God
    I shall prevail
    Standing on the 
    Promises of God [(Ref)]

    ^3^ Standing on the promises
    That cannot fail
    List'ning every moment
    To the Spirit's call
    Resting in my Savior
    As my all in all
    Standing on the 
    Promises of God [(Ref)]

    `
  },
  {
    id: 46,
    title: "46 As The Deer",
    lang: "English",
    lyrics: `
    ^1^ As the deer panteth for 
    The water so my soul
    Longeth after Thee
    You alone are my heart's
    Desire and I long
    To worship Thee

    [CHORUS:]
    You alone are my strenght
    My shield
    To You alone may my
    Spirit yield
    You alone are my heart's
    Desire and I long
    To worship Thee

    ^2^ You're my friend and
    You are my brother,
    Even though You are a King
    I love You more than 
    Any other so much 
    More than anything. [(Chorus)]

    ^3^ I want You more than gold
    Or silver, only You can satisfy
    You alone are the real joy 
    Giver and the apple of me eye [(Chorus)]

    `
  },
  {
    id: 47,
    title: "47 Eye Has Not Seen",
    lang: "English",
    lyrics: `
    [REFRAIN:]
    Eye has not seen
    Ear has not heard
    What God has ready
    For those who love Him
    Spirit of love, come
    Give us the mind of Jesus.
    Teach us the wisdom of God.

    ^1^ When pain and sorrow
    Weigh us down
    Be near to us, O Lord;
    Forgive the weakness
    Of our faith,
    And bear us up within
    You peaceful word. [(Ref)]

    ^2^ Our lives are but
    A single breath,
    We flower and we fade;
    Yet all our days 
    Are in Your hands
    So we return in love
    What love has made. [(Ref)]

    `
  },
  {
    id: 48,
    title: "48 On Eagle's Wings",
    lang: "English",
    lyrics: `
    ^1^ You who dwell
    In the shelter of the Lord
    Who abide in 
    The shadow for life
    Say to the Lord: "My refuge,
    My rock in whom I trust!"

    [REFRAIN:]
    And He will raise you up
    On eagle's wings
    Bear you on
    The breath of dawn
    Make you to shine
    Like the sun
    And hold you in 
    The palm of His hands.

    ^2^ The snare of the fowler
    Will never capture you
    And famine will bring you
    No fear
    Under His wings my refuge
    His faithfulness your shield
    [(Refrain)]

    `
  },
  {
    id: 49,
    title: "49 Be Not Afraid",
    lang: "English",
    lyrics: `
    ^1^ You shall cross the barren desert, but you shall not die of thirst. You shall wander far in safety though you do not know the way. You shall speak your words to foreign men and they will understand. You shall see the face of God and live.

    [ANTIPHON:]
    Be not afraid.
    I'll go before you always
    Come, follow Me
    And I will give you rest.

    ^2^ If you pass through raging waters in the sea, you shall not drown. If you walk amid the burning flames, you shall not be harmed. If you stand before the pow'r of hell and death is at your side, know that I am with you through it all. [(Ant.)]

    `
  },
  {
    id: 50,
    title: "50 Mapapalad",
    lang: "Tagalog",
    lyrics: `
    [Verse 1]
    Mapapalad kayong mahihirap
    Ang kaharian ng Dios sa inyo
    Mapapalad kayong nagugutom
    Sapagkat bubusugin kayo
    Mapapalad kayong nahahapis
    Sapagkat aaliwin kayo
    Mapapalad Panginoon
    Ang mga katulad Mo

    [Verse 2]
    Mapapalad kayong maawain
    Kaaawaan kayo ng Diyos
    Mapapalad kayong tumatangis
    Sapagkat liligaya kayo
    Mapapalad kayong inuusig
    Maghahari ang Diyos sa inyo
    Mapapalad Panginoon
    Ang mga katulad Mo
    Mapapalad Panginoon
    Ang mga katulad Mo

    `
  },
  {
    id: 51,
    title: "51 Mahiwaga(Ang Buhay Ng Tao)",
    lang: "Tagalog",
    lyrics: `
    [Verse 1]
    Mahiwaga ang buhay ng tao
    Ang bukas ay di natin piho
    At manalig lagi sana tayo
    Ang Diyos ang pag-asa ng mundo

    [Verse 2]
    Pag-ibig sa ating kapwa tao
    At laging magmahalan tayo
    Yan ang lunas at ligaya at
    Pag-asa ng bawat kaluluwa
    [Repeat from the top]

    ^Coda^ Yan ang hiwaga ng
    buhay ng tao.

    `
  },
  {
    id: 52,
    title: "52 Amazing Grace",
    lang: "English",
    lyrics: `
    [Verse 1]
    Amazing grace
    How sweet the sound
    That save a wretch
    Like me
    I once was lost
    But now I'm found
    Was blind, but now I see

    [Verse 2]
    'Twas grace that taught
    My heart to fear
    And grace my fears relieved
    How precious did
    That grace appear
    The hour I first believed

    [Verse 3]
    Through many dangers
    Toils and snares
    We have already come
    'Twas grace that brought
    Us safe thus far
    And grace will lead
    Us home
    
    `
  }
];
/* ---------------------------------------------------------------
   Elements
------------------------------------------------------------------ */
const homeView = document.getElementById("view-home");
const listView = document.getElementById("view-list");
const songView = document.getElementById("view-song");
const barEl = document.getElementById("bar-list-song");
const songListEl = document.getElementById("song-list");
const emptyStateEl = document.getElementById("empty-state");
const searchInput = document.getElementById("search-input");
const langFilterEl = document.getElementById("lang-filter");
const backButton = document.getElementById("back-button");
const openSongbookButton = document.getElementById("open-songbook");
const qrCodeEl = document.getElementById("qr-code");

const songNumberEl = document.getElementById("song-number");
const songTitleEl = document.getElementById("song-title");
const songLangEl = document.getElementById("song-lang");
const songLyricsEl = document.getElementById("song-lyrics");
const songRibbonEl = document.getElementById("song-ribbon");

/* ---------------------------------------------------------------
   Render: language filter chips — built automatically from
   whatever `lang` values actually appear in SONGS. Add a song with
   a new language and its chip shows up on its own; no HTML edit
   needed.
------------------------------------------------------------------ */
function renderLangChips() {
  const languages = [...new Set(SONGS.map(song => song.lang).filter(Boolean))].sort();
  const allLabels = ["All", ...languages];

  langFilterEl.innerHTML = "";

  allLabels.forEach(label => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip" + (label === currentLangFilter ? " is-active" : "");
    chip.dataset.lang = label;
    chip.textContent = label;
    langFilterEl.appendChild(chip);
  });
}

/* ---------------------------------------------------------------
   Render: song list (search text + language filter combined)
------------------------------------------------------------------ */
let currentSearch = "";
let currentLangFilter = "All";

function renderList() {
  const query = currentSearch.trim().toLowerCase();

  const filtered = SONGS.filter(song => {
    const matchesSearch = !query || song.title.toLowerCase().includes(query);
    const matchesLang = currentLangFilter === "All" || song.lang === currentLangFilter;
    return matchesSearch && matchesLang;
  });

  songListEl.innerHTML = "";

  filtered.forEach(song => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    button.type = "button";
    button.className = "song-row";
    button.addEventListener("click", () => {
      window.location.hash = `song-${song.id}`;
    });

    const num = document.createElement("span");
    num.className = "num";
    num.textContent = String(song.id).padStart(2, "0");

    const title = document.createElement("span");
    title.className = "title";
    // strip a leading "NN " from the title so it isn't shown twice
    title.textContent = song.title.replace(/^\d+\s+/, "");

    button.appendChild(num);
    button.appendChild(title);

    // Only show the language tag on each row when viewing "All" —
    // once a specific language is picked via the chips above, the
    // tag would just repeat what the user already filtered by.
    if (song.lang && currentLangFilter === "All") {
      const lang = document.createElement("span");
      lang.className = "lang";
      lang.textContent = song.lang;
      button.appendChild(lang);
    }

    li.appendChild(button);
    songListEl.appendChild(li);
  });

  emptyStateEl.hidden = filtered.length !== 0;
}

/* ---------------------------------------------------------------
  // Render lyrics text into a container, styling bracketed advisory
// lines (e.g. "[Chorus]", "[Koro]", "[Repeat to Verse 1]") as
// labels distinct from the sung lyrics themselves, and ^caret^
// segments (e.g. "^1^") as superscript verse numbers.
------------------------------------------------------------------ */
function renderLyrics(container, lyricsText) {
  container.innerHTML = "";

  const lines = lyricsText.split("\n");

  lines.forEach((line, index) => {
    // Split the line on any [bracketed] advisory label or any
    // ^caret-wrapped^ superscript segment, keeping the markers in
    // the result so we know which pieces to style.
    const parts = line.split(/(\[[^\]]+\]|\^[^^]+\^)/);

    parts.forEach(part => {
      if (/^\[[^\]]+\]$/.test(part)) {
        const label = document.createElement("span");
        label.className = "lyric-label";
        label.textContent = part.slice(1, -1);
        container.appendChild(label);
      } else if (/^\^[^^]+\^$/.test(part)) {
        const sup = document.createElement("sup");
        sup.textContent = part.slice(1, -1);
        container.appendChild(sup);
      } else if (part.length > 0) {
        container.appendChild(document.createTextNode(part));
      }
    });

    if (index < lines.length - 1) {
      container.appendChild(document.createElement("br"));
    }
  });
}

/* ---------------------------------------------------------------
   Render: single song page
------------------------------------------------------------------ */
function renderSong(song) {
  songNumberEl.textContent = `No. ${String(song.id).padStart(2, "0")}`;
  songTitleEl.textContent = song.title.replace(/^\d+\s+/, "");
  songLangEl.textContent = song.lang || "";
  renderLyrics(songLyricsEl, song.lyrics);
  songRibbonEl.textContent = String(song.id).padStart(2, "0");
}

/* ---------------------------------------------------------------
   QR code — generated from the page's own root URL, so it always
   points wherever this site is actually hosted (no hardcoded link
   to keep in sync). Scanning it lands on the home view.
------------------------------------------------------------------ */
function renderQrCode() {
  if (typeof QRCode === "undefined" || !qrCodeEl) return;

  const rootUrl = window.location.origin + window.location.pathname;

  new QRCode(qrCodeEl, {
    text: rootUrl,
    width: 160,
    height: 160,
    colorDark: "#16242B",
    colorLight: "#F6EFDC"
  });
}

/* ---------------------------------------------------------------
   View switching, driven by the URL hash:
     (empty) or #home  -> home view
     #songs             -> song list
     #song-<id>         -> single song
   so the browser back button and shareable links both work.
------------------------------------------------------------------ */
function showHome() {
  homeView.hidden = false;
  listView.hidden = true;
  songView.hidden = true;
  barEl.hidden = true;
}

function showList() {
  homeView.hidden = true;
  listView.hidden = false;
  songView.hidden = true;
  barEl.hidden = false;
}

function showSong(id) {
  const song = SONGS.find(s => s.id === id);
  if (!song) {
    showList();
    return;
  }
  renderSong(song);
  homeView.hidden = true;
  listView.hidden = true;
  songView.hidden = false;
  barEl.hidden = false;
  window.scrollTo(0, 0);
}

function handleRoute() {
  const hash = window.location.hash; // e.g. "#song-2", "#songs", "#home", or ""
  const songMatch = hash.match(/^#song-(\d+)$/);

  if (songMatch) {
    showSong(Number(songMatch[1]));
  } else if (hash === "#songs") {
    showList();
  } else {
    showHome();
  }
}

/* ---------------------------------------------------------------
   Wire up events
------------------------------------------------------------------ */
window.addEventListener("hashchange", handleRoute);

openSongbookButton.addEventListener("click", () => {
  window.location.hash = "songs";
});

backButton.addEventListener("click", () => {
  window.location.hash = "songs";
});

searchInput.addEventListener("input", event => {
  currentSearch = event.target.value;
  renderList();
});

langFilterEl.addEventListener("click", event => {
  const chip = event.target.closest(".chip");
  if (!chip) return;

  currentLangFilter = chip.dataset.lang;

  langFilterEl.querySelectorAll(".chip").forEach(c => {
    c.classList.toggle("is-active", c.dataset.lang === currentLangFilter);
  });

  renderList();
});

/* ---------------------------------------------------------------
   Register the service worker — this is what makes the app work
   offline and installable. Safe to skip silently on browsers that
   don't support it, or when not served over https/localhost.
------------------------------------------------------------------ */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(err => {
      console.log("Service worker registration failed:", err);
    });
  });
}
/* ---------------------------------------------------------------
   Initial render
------------------------------------------------------------------ */
renderLangChips();
renderList();
renderQrCode();
handleRoute();