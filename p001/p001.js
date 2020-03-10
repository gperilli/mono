
var p001 = {

No: "001",
Date: "18/08/2018",
AnnotType: "Annot",

0: {imgfile: "", imgsrc: "deriv", imgattrsrcfle: "", imgattrsite: "", imgattrurl: "", 	
	
	imgbckg: "wht",	
	
	//Word Item
	WI: {ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	WIr: {ENG: "/ˈeə.pɔːt/", ITA: "/aeroˈpɔrto/", JPN: "kuukou", JPNRu: "<ruby>空港<rt>くうこう</rt></ruby>",},
	
	//Sematic Tags
	//3 parametrs to get 1: display/hide, 2: text content, 3: class name (from ENG)
	semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "block", ENG: "places", ITA: "posti", JPN: "場所",},
	
	//Examples
	EX1: {ENG: 'I&#39;m going to go to the <span class="wihlight">airport</span>.', ITA: 'Andrò all&#39;<span class="wihlight">aeroporto</span>.',   JPN: '私は<span class="wihlight">空港</span>に行くつもりです。',},
	EX2: {ENG: 'The <span class="wihlight">airport</span> is over there.', ITA: 'L&#39;<span class="wihlight">aeroporto</span> è laggiù.', JPN: '<span class="wihlight">空港</span>はそこにあります。',},
	EX3: {ENG: 'How far is it to the <span class="wihlight">airport</span>?', ITA: 'Quanto dista l&#39;<span class="wihlight">aeroporto</span>?', JPN: '<span class="wihlight">空港</span>まではどれぐらい遠いですか',},
	
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

1: {imgfile: "", imgsrc: "original", imgattrsrcfle: "", imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",	

	dirmode: "downleft",
	LnContPosLeft: "0%", LnContPosTop: "12%",
	BtnPosLeft: "9%", BtnPosTop: "0%",
	LnPosX1: "75%", LnPosY1: "25%", LnPosX2: "46%", LnPosY2: "53%",

	WI: {ENG: "control tower", ITA: "torre di controllo", JPN: "管制塔",},
	WIr: {ENG: "/kənˈtrəʊl ˌtaʊər/", ITA: "/ˈtorre di konˈtrɔllo/", JPN: "kanseitou", JPNRu: "<ruby>管制塔<rt>かんせいとう</rt></ruby>",},

    semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "block", ENG: "buildings", ITA: "edifici", JPN: "建物",},
	
	EX1: {ENG: 'Send a message to the <span class="wihlight">control tower</span>.', ITA: 'Invii un messaggio alla <span class="wihlight">torre di controllo</span>.', JPN: '<span class="wihlight">管制塔</span>にメッセージを送信します。',},
	EX2: {ENG: 'The pilot asks permission to depart from the <span class="wihlight">control tower</span>.', ITA: 'Il pilota chiede alla <span class="wihlight">torre di controllo</span> il permesso per partire.', JPN: 'パイロットは<span class="wihlight">管制塔</span>に出発する許可を求めます。',},
	EX3: {ENG: 'The pilots asked the <span class="wihlight">control tower</span> to go back to the airport.', ITA: 'I piloti hanno chiesto alla <span class="wihlight">torre di controllo</span> di poter tornare all’aeroporto.', JPN: 'パイロットは、<span class="wihlight">管制塔</span>に空港に戻るように頼んだ。',},

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
	imgsrc: "original", imgattrsrcfle: "", 
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",	

	dirmode: "down",
	LnContPosLeft: "15%", LnContPosTop: "31%",
	BtnPosLeft: "4.5%", BtnPosTop: "0%",
	LnPosX1: "50%", LnPosY1: "25%", LnPosX2: "50%", LnPosY2: "57%",

	WI: {ENG: "land", ITA: "atterrare", JPN: "着陸",},
	WIr: {ENG: "/lænd/", ITA: "/atterˈrare/", JPN: "chakuriku", JPNRu: "<ruby>着陸<rt>ちゃくりく</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "block", ENG: "verbs", ITA: "verbi", JPN: "動詞",},
	
	EX1: {ENG: 'Looks like we have to make an emergency <span class="wihlight">land</span>ing.', ITA: 'Dovremo tentare un <span class="wihlight">atterraggio</span> di emergenza.', JPN: '緊急<span class="wihlight">着陸</span>する必要があるようです。',},
	EX2: {ENG: 'The plane made a perfect <span class="wihlight">land</span>ing.', ITA: 'L&#39;aereo effettuò un <span class="wihlight">atterraggio</span> perfetto.', JPN: '飛行機は完璧な<span class="wihlight">着陸</span>をした。',},
	EX3: {ENG: 'They say most airplane accidents occur at <span class="wihlight">land</span>ing or takeoff stages.', ITA: 'Si dice che la maggior parte degli incidenti aerei avviene nelle fasi di <span class="wihlight">atterraggio</span> o di decollo.', JPN: 'ほとんどの飛行機事故は<span class="wihlight">着陸</span>または離陸の時に発生すると言います。',},

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

	AudENGWI: "", AudENGEx1: "", AudENGEx2: "", AudENGEx3: "",
    AudITAWI: "", AudITAEx1: "", AudITAEx2: "", AudITAEx3: "",
    AudJPNWI: "", AudJPNEx1: "", AudJPNEx2: "", AudJPNEx3: "",
	},

3: {imgfile: "",
	imgsrc: "original",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",	
	
	dirmode: "down",
	LnContPosLeft: "62%",
	LnContPosTop: "23%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "50%",
	LnPosY2: "55%",

	WI: {ENG: "take off", ITA: "decollare", JPN: "離陸",},
	WIr: {ENG: "/teɪk ɒf/", ITA: "/dekolˈlare/", JPN: "ririku", JPNRu: "<ruby>離陸<rt>りりく</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "block", ENG: "verbs", ITA: "verbi", JPN: "動詞",},
	
	EX1: {ENG: 'Gold squadron, begin <span class="wihlight">take-off</span> procedure.', ITA: 'Squadra Oro, iniziare procedura di <span class="wihlight">decollo</span>.', JPN: 'ゴールド飛行隊、<span class="wihlight">離陸</span>手続きを開始する。',},
	EX2: {ENG: 'The crew prepares for <span class="wihlight">take off</span>.', ITA: 'L&#39;equipaggio si prepara al <span class="wihlight">decollo</span>.', JPN: '乗組員は<span class="wihlight">離陸</span>を準備する。',},
	EX3: {ENG: 'We may not serve beverages during <span class="wihlight">take-off</span> or <span class="wihlight">land</span>ing.', ITA: 'Non possiamo servire da bere durante il <span class="wihlight">decollo</span> o l&#39;<span class="wihlight">atterraggio</span>.', JPN: '<span class="wihlight">離陸</span>または着陸中に飲み物を提供することはできません。',},

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
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",	

	dirmode: "left",
	LnContPosLeft: "46%",
	LnContPosTop: "4%",
	BtnPosLeft: "9%",
	BtnPosTop: "6%",
	LnPosX1: "75%",
	LnPosY1: "50%",
	LnPosX2: "35%",
	LnPosY2: "50%",

	WI: {ENG: "departure board", ITA: "tabellone delle partenze", JPN: "出発案内表示板",},
	WIr: {ENG: "/dɪˈpɑː.tʃər bɔːd/", ITA: "/tabelˈlone ˈdelle parˈtɛntsa/", JPN: "shuppatsuannaihyoujiban", JPNRu: "<ruby>出発<rt>しゅっぱつ</rt></ruby><ruby>案内<rt>あんない</rt></ruby><ruby>表示板<rt>ひょうじばん</rt></ruby>",},


	semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'I looked at the <span class="wihlight">departure board</span>.', ITA: 'Ho guardato il <span class="wihlight">tabellone delle partenze</span>.', JPN: '私は<span class="wihlight">出発案内表示板</span>を見た。',},
	EX2: {ENG: 'The <span class="wihlight">departure board</span> is full of cancelled flights.', ITA: 'Il <span class="wihlight">tabellone delle partenze</span> e degli arrivi è denso di voli cancellati.', JPN: '<span class="wihlight">出発案内表示板</span>にはキャンセルされたフライトがいっぱいです。',},
	EX3: {ENG: 'There are 27 flights in arrival that have been cancelled, while 24 are those disappeared from the <span class="wihlight">departure board</span>.', ITA: 'Sono al momento 27 i voli in arrivo che sono stati cancellati mentre 24 sono quelli scomparsi dal <span class="wihlight">tabellone delle partenze</span>.', JPN: '27便の到着がはキャンセルされ、24便は<span class="wihlight">出発案内表示板</span>から消えています。',},

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
	
	imgbckg: "wht",	

	dirmode: "upright",
	LnContPosLeft: "40%",
	LnContPosTop: "56%",
	BtnPosLeft: "0%",
	BtnPosTop: "12%",
	LnPosX1: "25%",
	LnPosY1: "75%",
	LnPosX2: "55%",
	LnPosY2: "45%",

	WI: {ENG: "seat", ITA: "sedile", JPN: "席",},
	WIr: {ENG: "/ˈsiː.t/", ITA: "/seˈdile/", JPN: "seki", JPNRu: "<ruby>席<rt>せき</rt></ruby>",},


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
	imgattrsrcfle: "p001/monop001wi6src.png",
	imgattrsite: "commons.wikimedia.org",
	imgattrurl: "https://commons.wikimedia.org/wiki/File:Ic_flight_48px.svg",
	
	imgbckg: "wht",	

	dirmode: "downright",
	LnContPosLeft: "57%", LnContPosTop: "45%",
	BtnPosLeft: "0%", BtnPosTop: "0%",
	LnPosX1: "25%", LnPosY1: "25%", LnPosX2: "55%", LnPosY2: "55%",

	WI: {ENG: "ticket", ITA: "biglietto", JPN: "チケット",},
	WIr: {ENG: "/ˈtɪk.ɪt/", ITA: "/biʎˈʎetto/", JPN: "chiketto", JPNRu: "<ruby>チケット<rt>ちけっと</rt></ruby>",},

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
	imgattrsrcfle: "p001/monop001wi7src.png",
	imgattrsite: "commons.wikimedia.org",
	imgattrurl: "https://commons.wikimedia.org/wiki/File:Ic_flight_48px.svg",
	
	imgbckg: "wht",	

	dirmode: "downleft",
	LnContPosLeft: "77%",
	LnContPosTop: "27%",
	BtnPosLeft: "9%",
	BtnPosTop: "0%",
	LnPosX1: "75%",
	LnPosY1: "25%",
	LnPosX2: "45%",
	LnPosY2: "55%",

	WI: {ENG: "passenger", ITA: "passeggero", JPN: "乗客",},
	WIr: {ENG: "/ˈpæs.ən.dʒər/", ITA: "/passedˈdʒɛro/", JPN: "joukyaku", JPNRu: "<ruby>乗客<rt>じょうきゃく</rt></ruby>",},

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
	
	imgbckg: "wht",	

	dirmode: "down",
	LnContPosLeft: "82%",
	LnContPosTop: "54%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "58%",
	LnPosY2: "62%",

	WI: {ENG: "suitcase", ITA: "valigia", JPN: "スーツケース",},
	WIr: {ENG: "/ˈsuːt.keɪs/", ITA: "/vaˈlidʒa/", JPN: "suutsukeesu", JPNRu: "<ruby>スーツケース<rt>すーつけーす</rt></ruby>",},

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
