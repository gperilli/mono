
var p015 = {

No: "015",
Date: "18/08/2018",

ShareImg: "graphics/shareimg.png",
AnnotType: "Annot",
0: {imgfile: "",
	imgattrurl: "", //unused
	imgsrc: "deriv",
	imgattrsrcfle: "", //non existent
	imgattrsite: "", //unused
	imgattrurl: "", //unused
	
	imgbckg: "blk",	
	
	//Word Item
	WI: {ENG: "under the sea", ITA: "sotto il mare", JPN: "海の中",},
	WIr: {ENG: "/ˈeə.pɔːt/", ITA: "/aeroˈpɔrto/", JPN: "kuukou", JPNRu: "<ruby>空港<rt>くうこう</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	//Sematic Tags
	//3 parametrs to get 1: display/hide, 2: text content, 3: class name (from ENG)
	semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "block", ENG: "places", ITA: "posti", JPN: "場所",},
	
	
	
	BtnContPosLeft: "0%",
	BtnContPosTop: "76%",
	BtnPosLeft: "-5%",
	BtnPosTop: "25%",
	BtnTxtOffSet: "0%",
	BtnChar1: "digit0",
	BtnChar2: "digit0",
	BtnChar3: "digit1",

	//Examples
	EX1: {ENG: "I'm going to go to the airport.", ITA: "Andrò all'aeroporto.", JPN: "私は空港に行くつもりです。",},
	EX2: {ENG: "The airport is over there.", ITA: "L'aeroporto è laggiù.", JPN: "空港はそこにあります。",},
	EX3: {ENG: "How far is it to the airport?", ITA: "Quanto dista l'aeroporto?", JPN: "空港まではどれぐらい遠いですか？",},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/403055", ITA: "https://tatoeba.org/ita/sentences/show/638552", JPN: "https://tatoeba.org/jpn/sentences/show/642385",},
	TatSrcEx3: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/18189", ITA: "https://tatoeba.org/ita/sentences/show/702836", JPN: "https://tatoeba.org/jpn/sentences/show/179332",},
    
	// Dictionary search suffixes
    engLhyph: "airport", engLperc: "airport", engLplus: "airport", engForv: "airport/#en",
    itaLhyph: "aeroporto", itaLplus: "aeroporto", itaForv: "aeroporto/#it",
    jpnLpercen: "%E7%A9%BA%E6%B8%AF", jpnLgoo: "60382/meaning/m1u/", jpnForv: "くうこう_%28空港%29/#ja",

    // Part of Speech Data
	PoSp1: {ENG: {ENG: "noun", ITA: "noun", JPN: "noun",}, 
			ITA: {ENG: "sostantivo", ITA: "sostantivo", JPN: "sostantivo",},
			JPN: {ENG: "可算", ITA: "可算", JPN: "可算",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "masc.", JPN: "",}, 
			ITA: {ENG: "", ITA: "masc.", JPN: "",},
			JPN: {ENG: "名詞", ITA: "名詞", JPN: "名詞",},
			},
	PoSp3: {ENG: {ENG: "", ITA: "", JPN: "",}, 
			ITA: {ENG: "", ITA: "", JPN: "",},
			JPN: {ENG: "", ITA: "男性形", JPN: "",},
			},	
	
	//Audio
	AudENGWI: "", AudENGEx1: "", AudENGEx2: "", AudENGEx3: "",
    AudITAWI: "", AudITAEx1: "", AudITAEx2: "", AudITAEx3: "",
    AudJPNWI: "", AudJPNEx1: "", AudJPNEx2: "", AudJPNEx3: "",
	},

1: {imgfile: "",
	imgsrc: "original",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "blk",	

	dirmode: "downleft",
	LnContPosLeft: "2%",
	LnContPosTop: "17%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "50%",
	LnPosY2: "65%",

	WI: {ENG: "control tower", ITA: "torre di controllo", JPN: "管制塔",},
	WIr: {ENG: "/kənˈtrəʊl ˌtaʊər/", ITA: "/ˈtorre di konˈtrɔllo/", JPN: "kanseitou", JPNRu: "<ruby>管制塔<rt>かんせいとう</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
    semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "block", ENG: "buildings", ITA: "edifici", JPN: "建物",},
	
	EX1: {ENG: "Send a message to the control tower.", ITA: "Invii un messaggio alla torre di controllo.", JPN: "管制塔にメッセージを送信します。",},
	EX2: {ENG: "The pilot asks permission to depart from the control tower.", ITA: "Il pilota chiede alla torre di controllo il permesso per partire.", JPN: "パイロットは管制塔に出発する許可を求めます。",},
	EX3: {ENG: "The pilots asked the control tower to go back to the airport.", ITA: "I piloti hanno chiesto alla torre di controllo di poter tornare all’aeroporto.", JPN: "パイロットは、管制塔に空港に戻るように頼んだ。",},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "",},

    engLhyph: "control-tower", engLperc: "control%20tower", engLplus: "control+tower", engForv: "tower_control/#en",
    itaLhyph: "torre-di-controllo", itaLplus: "torre+di+controllo", itaForv: "torre_di_controllo/#it",
    jpnLpercen: "%E7%AE%A1%E5%88%B6%E5%A1%94", jpnLgoo: "48697/meaning/m1u/", jpnForv: "管制塔/#ja",
	
	PoSp1: {ENG: {ENG: "adjective", ITA: "adjective", JPN: "adjective",}, 
			ITA: {ENG: "aggetivo", ITA: "aggetivo", JPN: "aggetivo",},
			JPN: {ENG: "形容詞", ITA: "形容詞", JPN: "形容詞",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "(invar)", JPN: "i/na",}, 
			ITA: {ENG: "", ITA: "()", JPN: "i/na",},
			JPN: {ENG: "", ITA: "()", JPN: "i/na",},
			},
	PoSp3: {ENG: {ENG: "", ITA: "", JPN: "",}, 
			ITA: {ENG: "", ITA: "", JPN: "",},
			JPN: {ENG: "", ITA: "", JPN: "",},
			},

    //Audio
	AudENGWI: "", AudENGEx1: "", AudENGEx2: "", AudENGEx3: "",
    AudITAWI: "", AudITAEx1: "", AudITAEx2: "", AudITAEx3: "",
    AudJPNWI: "", AudJPNEx1: "", AudJPNEx2: "", AudJPNEx3: "",
	},

2: {imgfile: "",
	imgsrc: "original",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "blk",	


	dirmode: "down",
	LnContPosLeft: "8%",
	LnContPosTop: "47%",
	BtnPosLeft: "0%",
	BtnPosTop: "0%",
	LnPosX1: "25%",
	LnPosY1: "25%",
	LnPosX2: "55%",
	LnPosY2: "55%",

	WI: {ENG: "land", ITA: "atterrare", JPN: "着陸",},
	WIr: {ENG: "/lænd/", ITA: "/atterˈrare/", JPN: "chakuriku", JPNRu: "<ruby>着陸<rt>ちゃくりく</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},

	semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "block", ENG: "verbs", ITA: "verbi", JPN: "動詞",},
	
	EX1: {ENG: "Looks like we have to make an emergency landing.", ITA: "Dovremo tentare un atterraggio di emergenza.", JPN: "緊急着陸する必要があるようです。",},
	EX2: {ENG: "The plane made a perfect landing.", ITA: "L'aereo effettuò un atterraggio perfetto.", JPN: "飛行機は完璧な着陸をした。",},
	EX3: {ENG: "They say most airplane accidents occur at landing or takeoff stages.", ITA: "Si dice che la maggior parte degli incidenti aerei avviene nelle fasi di atterraggio o di decollo.", JPN: "ほとんどの飛行機事故は着陸または離陸の時に発生すると言います。",},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "land", engLperc: "land", engLplus: "land", engForv: "land/#en",
    itaLhyph: "atterraggio", itaLplus: "atterraggio", itaForv: "atterraggio/#it",
    jpnLpercen: "%E7%9D%80%E9%99%B8", jpnLgoo: "142609/meaning/m1u/", jpnForv: "着陸/#ja",
	
	PoSp1: {ENG: {ENG: "adjective", ITA: "adjective", JPN: "adjective",}, 
			ITA: {ENG: "aggetivo", ITA: "aggetivo", JPN: "aggetivo",},
			JPN: {ENG: "形容詞", ITA: "形容詞", JPN: "形容詞",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "(invar)", JPN: "i/na",}, 
			ITA: {ENG: "", ITA: "()", JPN: "i/na",},
			JPN: {ENG: "", ITA: "()", JPN: "i/na",},
			},
	PoSp3: {ENG: {ENG: "", ITA: "", JPN: "",}, 
			ITA: {ENG: "", ITA: "", JPN: "",},
			JPN: {ENG: "", ITA: "", JPN: "",},
			},

    //Audio
	AudENGWI: "", AudENGEx1: "", AudENGEx2: "", AudENGEx3: "",
    AudITAWI: "", AudITAEx1: "", AudITAEx2: "", AudITAEx3: "",
    AudJPNWI: "", AudJPNEx1: "", AudJPNEx2: "", AudJPNEx3: "",
	},

3: {imgfile: "",
	imgsrc: "original",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "blk",	
	
	dirmode: "down",
	LnContPosLeft: "25%",
	LnContPosTop: "33%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "50%",
	LnPosY2: "55%",

	WI: {ENG: "take off", ITA: "decollare", JPN: "離陸",},
	WIr: {ENG: "/teɪk ɒf/", ITA: "/dekolˈlare/", JPN: "ririku", JPNRu: "<ruby>離陸<rt>りりく</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "block", ENG: "verbs", ITA: "verbi", JPN: "動詞",},
	
	EX1: {ENG: "Gold squadron, begin take-off procedure.", ITA: "Squadra Oro, iniziare procedura di decollo.", JPN: "ゴールド飛行隊、離陸手続きを開始する。",},
	EX2: {ENG: "The crew prepares for take off.", ITA: "L'equipaggio si prepara al decollo.", JPN: "乗組員は離陸を準備する。",},
	EX3: {ENG: "We may not serve beverages during take-off or landing.", ITA: "Non possiamo servire da bere durante il decollo o l'atterraggio.", JPN: "離陸または着陸中に飲み物を提供することはできません。",},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "take-off", engLperc: "take%20off", engLplus: "take+off", engForv: "take_off/#en",
    itaLhyph: "decollo", itaLplus: "decollo", itaForv: "decollo/#it",
    jpnLpercen: "%E9%9B%A2%E9%99%B8", jpnLgoo: "233036/meaning/m1u/", jpnForv: "離陸/#ja",
	
	PoSp1: {ENG: {ENG: "adjective", ITA: "adjective", JPN: "adjective",}, 
			ITA: {ENG: "aggetivo", ITA: "aggetivo", JPN: "aggetivo",},
			JPN: {ENG: "形容詞", ITA: "形容詞", JPN: "形容詞",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "(invar)", JPN: "i/na",}, 
			ITA: {ENG: "", ITA: "()", JPN: "i/na",},
			JPN: {ENG: "", ITA: "()", JPN: "i/na",},
			},
	PoSp3: {ENG: {ENG: "", ITA: "", JPN: "",}, 
			ITA: {ENG: "", ITA: "", JPN: "",},
			JPN: {ENG: "", ITA: "", JPN: "",},
			},

    //Audio
	AudENGWI: "", AudENGEx1: "", AudENGEx2: "", AudENGEx3: "",
    AudITAWI: "", AudITAEx1: "", AudITAEx2: "", AudITAEx3: "",
    AudJPNWI: "", AudJPNEx1: "", AudJPNEx2: "", AudJPNEx3: "",
	},

4: {imgfile: "",
	imgsrc: "original",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "blk",	

	dirmode: "left",
	LnContPosLeft: "37%",
	LnContPosTop: "76%",
	BtnPosLeft: "9%",
	BtnPosTop: "6%",
	LnPosX1: "75%",
	LnPosY1: "50%",
	LnPosX2: "27%",
	LnPosY2: "67%",

	WI: {ENG: "departure board", ITA: "tabellone delle partenze", JPN: "出発案内表示板",},
	WIr: {ENG: "/dɪˈpɑː.tʃər bɔːd/", ITA: "/tabelˈlone ˈdelle parˈtɛntsa/", JPN: "shuppatsuannaihyoujiban", JPNRu: "<ruby>出発<rt>しゅっぱつ</rt></ruby><ruby>案内<rt>あんない</rt></ruby><ruby>表示板<rt>ひょうじばん</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},

	semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: "I looked at the departure board.", ITA: "Ho guardato il tabellone delle partenze.", JPN: "私は出発案内表示板を見た。",},
	EX2: {ENG: "The departure board is full of cancelled flights.", ITA: "Il tabellone delle partenze e degli arrivi è denso di voli cancellati.", JPN: "出発案内表示板にはキャンセルされたフライトがいっぱいです。",},
	EX3: {ENG: "There are 27 flights in arrival that have been cancelled, while 24 are those disappeared from the departure board.", ITA: "Sono al momento 27 i voli in arrivo che sono stati cancellati mentre 24 sono quelli scomparsi dal tabellone delle partenze.", JPN: "27便の到着がはキャンセルされ、24便は出発案内表示板から消えています。",},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "departure-board", engLperc: "departure%20board", engLplus: "departure+board", engForv: "departure_board/#en",
    itaLhyph: "tabellone-delle-partenze", itaLplus: "tabellone+delle+partenze", itaForv: "tabellone/#it",
    jpnLpercen: "%E6%8E%B2%E7%A4%BA%E6%9D%BF", jpnLgoo: "66523/meaning/m1u/", jpnForv: "表示板/#ja",
	
	PoSp1: {ENG: {ENG: "adjective", ITA: "adjective", JPN: "adjective",}, 
			ITA: {ENG: "aggetivo", ITA: "aggetivo", JPN: "aggetivo",},
			JPN: {ENG: "形容詞", ITA: "形容詞", JPN: "形容詞",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "(invar)", JPN: "i/na",}, 
			ITA: {ENG: "", ITA: "()", JPN: "i/na",},
			JPN: {ENG: "", ITA: "()", JPN: "i/na",},
			},
	PoSp3: {ENG: {ENG: "", ITA: "", JPN: "",}, 
			ITA: {ENG: "", ITA: "", JPN: "",},
			JPN: {ENG: "", ITA: "", JPN: "",},
			},

    //Audio
	AudENGWI: "", AudENGEx1: "", AudENGEx2: "", AudENGEx3: "",
    AudITAWI: "", AudITAEx1: "", AudITAEx2: "", AudITAEx3: "",
    AudJPNWI: "", AudJPNEx1: "", AudJPNEx2: "", AudJPNEx3: "",
	},

5: {imgfile: "",
	imgsrc: "original",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "blk",	

	dirmode: "upright",
	LnContPosLeft: "60%",
	LnContPosTop: "75%",
	BtnPosLeft: "0%",
	BtnPosTop: "0%",
	LnPosX1: "25%",
	LnPosY1: "25%",
	LnPosX2: "55%",
	LnPosY2: "55%",

	WI: {ENG: "seat", ITA: "sedile", JPN: "席",},
	WIr: {ENG: "/ˈsiː.t/", ITA: "/seˈdile/", JPN: "seki", JPNRu: "<ruby>席<rt>せき</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},

	semtag1: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag2: {Dsp: "block", ENG: "furniture", ITA: "mobili", JPN: "家具",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'Where is my <span class="wihlight">seat</span>?', ITA: 'Dov&#39;è il mio <span class="wihlight">sedile</span>?', JPN: '私の<span class="wihlight">席</span>はどこですか？',},
	EX2: {ENG: 'I was in the front <span class="wihlight">seat</span>.', ITA: 'Ero sul <span class="wihlight">sedile</span> anteriore.', JPN: '私は前方座<span class="wihlight">席</span>にいた。',},
	EX3: {ENG: 'It was under the <span class="wihlight">seat<span> in my vehicle.', ITA: 'Era sotto il <span class="wihlight">sedile</span> della mia auto.', JPN: 'それは私の車の座<span class="wihlight">席</span>の下にあった。',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/251304", ITA: "https://tatoeba.org/ita/sentences/show/836253", JPN: "https://tatoeba.org/jpn/sentences/show/163208",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "seat", engLperc: "seat", engLplus: "seat", engForv: "seat/#en",
    itaLhyph: "sedile", itaLplus: "sedile", itaForv: "sedile/#it",
    jpnLpercen: "%E5%B8%AD", jpnLgoo: "123323/meaning/m1u/", jpnForv: "席/#ja",
	
	PoSp1: {ENG: {ENG: "adjective", ITA: "adjective", JPN: "adjective",}, 
			ITA: {ENG: "aggetivo", ITA: "aggetivo", JPN: "aggetivo",},
			JPN: {ENG: "形容詞", ITA: "形容詞", JPN: "形容詞",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "(invar)", JPN: "i/na",}, 
			ITA: {ENG: "", ITA: "()", JPN: "i/na",},
			JPN: {ENG: "", ITA: "()", JPN: "i/na",},
			},
	PoSp3: {ENG: {ENG: "", ITA: "", JPN: "",}, 
			ITA: {ENG: "", ITA: "", JPN: "",},
			JPN: {ENG: "", ITA: "", JPN: "",},
			},

   //Audio
	AudENGWI: "", AudENGEx1: "", AudENGEx2: "", AudENGEx3: "",
    AudITAWI: "", AudITAEx1: "", AudITAEx2: "", AudITAEx3: "",
    AudJPNWI: "", AudJPNEx1: "", AudJPNEx2: "", AudJPNEx3: "",
	},

6: {imgfile: "",
	imgsrc: "deriv",
	imgsrccr: "CC BY 4.0",
	imgattrsrcfle: "p001/imgsrcs/p001-wi6-src.png",
	imgattrsite: "commons.wikimedia.org",
	imgattrurl: "https://commons.wikimedia.org/wiki/File:Ic_flight_48px.svg",
	
	imgbckg: "blk",	

	dirmode: "downright",
	LnContPosLeft: "52%",
	LnContPosTop: "35%",
	BtnPosLeft: "0%",
	BtnPosTop: "6%",
	LnPosX1: "25%",
	LnPosY1: "50%",
	LnPosX2: "65%",
	LnPosY2: "50%",

	WI: {ENG: "ticket", ITA: "biglietto", JPN: "チケット",},
	WIr: {ENG: "/ˈtɪk.ɪt/", ITA: "/biʎˈʎetto/", JPN: "chiketto", JPNRu: "<ruby>チケット<rt>ちけっと</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'I will buy the <span class="wihlight">tickets</span>.', ITA: 'Comprerò i <span class="wihlight">biglietti</span>.', JPN: '私が<span class="wihlight">チケット</span>を買うよ。',},
	EX2: {ENG: 'Do you have the <span class="wihlight">tickets</span>?', ITA: 'Avete i <span class="wihlight">biglietti</span>?', JPN: '<span class="wihlight">チケット</span>を持っていますか？',},
	EX3: {ENG: 'He was checking a <span class="wihlight">ticket</span>.', ITA: 'Controllava un <span class="wihlight">biglietto</span>.', JPN: '彼は<span class="wihlight">チケット</span>を確認していた。',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "ticket", engLperc: "ticket", engLplus: "ticket", engForv: "ticket/#en",
    itaLhyph: "biglietto", itaLplus: "biglietto", itaForv: "biglietto/#it",
    jpnLpercen: "%E3%83%81%E3%82%B1%E3%83%83%E3%83%88", jpnLgoo: "141577/meaning/m1u/", jpnForv: "チケット/#ja",
	
	PoSp1: {ENG: {ENG: "adjective", ITA: "adjective", JPN: "adjective",}, 
			ITA: {ENG: "aggetivo", ITA: "aggetivo", JPN: "aggetivo",},
			JPN: {ENG: "形容詞", ITA: "形容詞", JPN: "形容詞",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "(invar)", JPN: "i/na",}, 
			ITA: {ENG: "", ITA: "()", JPN: "i/na",},
			JPN: {ENG: "", ITA: "()", JPN: "i/na",},
			},
	PoSp3: {ENG: {ENG: "", ITA: "", JPN: "",}, 
			ITA: {ENG: "", ITA: "", JPN: "",},
			JPN: {ENG: "", ITA: "", JPN: "",},
			},

    //Audio
	AudENGWI: "", AudENGEx1: "", AudENGEx2: "", AudENGEx3: "",
    AudITAWI: "", AudITAEx1: "", AudITAEx2: "", AudITAEx3: "",
    AudJPNWI: "", AudJPNEx1: "", AudJPNEx2: "", AudJPNEx3: "",
	},

7: {imgfile: "",
	imgsrc: "deriv",
	imgsrccr: "CC BY 4.0",
	imgattrsrcfle: "p001/imgsrcs/p001-wi7-src.png",
	imgattrsite: "commons.wikimedia.org",
	imgattrurl: "https://commons.wikimedia.org/wiki/File:Ic_flight_48px.svg",
	
	imgbckg: "blk",	

	dirmode: "downleft",
	LnContPosLeft: "67%",
	LnContPosTop: "50%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "50%",
	LnPosY2: "65%",

	WI: {ENG: "passenger", ITA: "passeggero", JPN: "乗客",},
	WIr: {ENG: "/ˈpæs.ən.dʒər/", ITA: "/passedˈdʒɛro/", JPN: "joukyaku", JPNRu: "<ruby>乗客<rt>じょうきゃく</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'There were fifty <span class="wihlight">passengers</span> on the plane.', ITA: 'C&#39;erano cinquanta <span class="wihlight">passeggeri</span> sull&#39;aereo.', JPN: '飛行機には50人の<span class="wihlight">乗客がいた。',},
	EX2: {ENG: 'The train was full of <span class="wihlight">passengers</span>.', ITA: 'Il treno era pieno di <span class="wihlight">passeggeri</span>.', JPN: '列車には<span class="wihlight">乗客</span>がいっぱいだった。',},
	EX3: {ENG: 'He was a <span class="wihlight">passenger</span> on the Flight 627.', ITA: 'Era un <span class="wihlight">passeggero</span> del volo 627.', JPN: '彼は627便の<span class="wihlight">乗客</span>だった。',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "passenger", engLperc: "passenger", engLplus: "passenger", engForv: "passenger/#en",
    itaLhyph: "passeggero", itaLplus: "passeggero", itaForv: "passeggero/#it",
    jpnLpercen: "%E4%B9%97%E5%AE%A2", jpnLgoo: "107916/meaning/m1u/", jpnForv: "乗客/#ja",
	
	PoSp1: {ENG: {ENG: "adjective", ITA: "adjective", JPN: "adjective",}, 
			ITA: {ENG: "aggetivo", ITA: "aggetivo", JPN: "aggetivo",},
			JPN: {ENG: "形容詞", ITA: "形容詞", JPN: "形容詞",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "(invar)", JPN: "i/na",}, 
			ITA: {ENG: "", ITA: "()", JPN: "i/na",},
			JPN: {ENG: "", ITA: "()", JPN: "i/na",},
			},
	PoSp3: {ENG: {ENG: "", ITA: "", JPN: "",}, 
			ITA: {ENG: "", ITA: "", JPN: "",},
			JPN: {ENG: "", ITA: "", JPN: "",},
			},

    //Audio
	AudENGWI: "", AudENGEx1: "", AudENGEx2: "", AudENGEx3: "",
    AudITAWI: "", AudITAEx1: "", AudITAEx2: "", AudITAEx3: "",
    AudJPNWI: "", AudJPNEx1: "", AudJPNEx2: "", AudJPNEx3: "",
	},

8: {imgfile: "",
	imgsrc: "original",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "blk",	

	dirmode: "down",
	LnContPosLeft: "78%",
	LnContPosTop: "75%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "81%",
	LnPosY2: "79%",

	WI: {ENG: "suitcase", ITA: "valigia", JPN: "スーツケース",},
	WIr: {ENG: "/ˈsuːt.keɪs/", ITA: "/vaˈlidʒa/", JPN: "suutsukeesu", JPNRu: "<ruby>スーツケース<rt>すーつけーす</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'Take this <span class="wihlight">suitcase</span> and put it on the bed.', ITA: 'Prendi questa <span class="wihlight">valigia</span> e mettila sul letto.', JPN: 'この<span class="wihlight">スーツケース</span>を持ってベッドの上に置いてください。',},
	EX2: {ENG: 'Open your <span class="wihlight">suitcase</span>.', ITA: 'Apri la tua <span class="wihlight">valigia</span>.', JPN: '<span class="wihlight">スーツケース</span>を開けてください。',},
	EX3: {ENG: 'Which is your <span class="wihlight">suitcase</span>?', ITA: 'Qual è la tua <span class="wihlight">valigia</span>?', JPN: 'どれがあなたの<span class="wihlight">スーツケース</span>ですか？',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "suitcase", engLperc: "suitcase", engLplus: "suitcase", engForv: "suitcase/#en",
    itaLhyph: "valigia", itaLplus: "valigia", itaForv: "valigia/#it",
    jpnLpercen: "%E3%82%B9%E3%83%BC%E3%83%84%E3%82%B1%E3%83%BC%E3%82%B9", jpnLgoo: "117095/meaning/m1u/", jpnForv: "スーツケース/#ja",

	PoSp1: {ENG: {ENG: "adjective", ITA: "adjective", JPN: "adjective",}, 
			ITA: {ENG: "aggetivo", ITA: "aggetivo", JPN: "aggetivo",},
			JPN: {ENG: "形容詞", ITA: "形容詞", JPN: "形容詞",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "(invar)", JPN: "i/na",}, 
			ITA: {ENG: "", ITA: "()", JPN: "i/na",},
			JPN: {ENG: "", ITA: "()", JPN: "i/na",},
			},
	PoSp3: {ENG: {ENG: "", ITA: "", JPN: "",}, 
			ITA: {ENG: "", ITA: "", JPN: "",},
			JPN: {ENG: "", ITA: "", JPN: "",},
			},

    //Audio
	AudENGWI: "", AudENGEx1: "", AudENGEx2: "", AudENGEx3: "",
    AudITAWI: "", AudITAEx1: "", AudITAEx2: "", AudITAEx3: "",
    AudJPNWI: "", AudJPNEx1: "", AudJPNEx2: "", AudJPNEx3: "",
	},
};
