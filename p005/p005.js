
var p005 = {
	SetPost: function() {
	for(var i = 0; i < 9; ++i) {
	this[i]["imgfile"] = "p".concat(this["No"], "/monop", this["No"], "-wi", i, ".svg");
	this[i]["AudENGWI"] = "p".concat(this["No"], "/p", this["No"], "wi", i, "ENG.wav");
	this[i]["AudENGEx1"] = "p".concat(this["No"], "/p", this["No"], "wi", i, "ENGex1.wav");
	this[i]["AudENGEx2"] = "p".concat(this["No"], "/p", this["No"], "wi", i, "ENGex2.wav");
	this[i]["AudENGEx3"] = "p".concat(this["No"], "/p", this["No"], "wi", i, "ENGex3.wav");
	this[i]["AudITAWI"] = "p".concat(this["No"], "/p", this["No"], "wi", i, "ITA.wav");
	this[i]["AudITAEx1"] = "p".concat(this["No"], "/p", this["No"], "wi", i, "ITAex1.wav");
	this[i]["AudITAEx2"] = "p".concat(this["No"], "/p", this["No"], "wi", i, "ITAex2.wav");
	this[i]["AudITAEx3"] = "p".concat(this["No"], "/p", this["No"], "wi", i, "ITAex3.wav");
	this[i]["AudJPNWI"] = "p".concat(this["No"], "/p", this["No"], "wi", i, "JPN.wav");
	this[i]["AudJPNEx1"] = "p".concat(this["No"], "/p", this["No"], "wi", i, "JPNex1.wav");
	this[i]["AudJPNEx2"] = "p".concat(this["No"], "/p", this["No"], "wi", i, "JPNex2.wav");
	this[i]["AudJPNEx3"] = "p".concat(this["No"], "/p", this["No"], "wi", i, "JPNex3.wav");}
	},
No: "005",
Date: "18/08/2018",

ShareImg: "graphics/shareimg.png",
AnnotType: "Annot",
0: {imgfile: "",
	imgattrurl: "", //unused
	imgsrc: "deriv",
	imgattrsrcfle: "", //non existent
	imgattrsite: "", //unused
	imgattrurl: "", //unused
	
	imgbckg: "wht",	

	BtnContPosLeft: "0%",
	BtnContPosTop: "0%",
	BtnPosLeft: "-5%",
	BtnPosTop: "25%",
	BtnTxtOffSet: "0%",
	BtnChar1: "digit0",
	BtnChar2: "digit0",
	BtnChar3: "digit8",

	//Word Item
	WI: {ENG: "park", ITA: "parco", JPN: "公園",},
	WIr: {ENG: "/ˈeə.pɔːt/", ITA: "/aeroˈpɔrto/", JPN: "kouen", JPNRu: "<ruby>公園<rt>こうえん</rt></ruby>",},
	
	//Sematic Tags
	//3 parametrs to get 1: display/hide, 2: text content, 3: class name (from ENG)
	semtag1: {Dsp: "block", ENG: "places", ITA: "posti", JPN: "場所",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
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
    
	// Dictionary search suffixes
    engLhyph: "park", engLperc: "park", engLplus: "park", engForv: "park/#en",
    itaLhyph: "parco", itaLplus: "parco", itaForv: "parco/#it",
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
	imgsrc: "deriv",
	imgsrccr: "CC BY-SA 4.0",
	imgattrsrcfle: "p005/imgsrcs/p005-wi1-src.png",
	imgattrsite: "commons.wikimedia.org",
	imgattrurl: "https://commons.wikimedia.org/wiki/File:Fraxinus_excelsior_tree_illustration.jpg",
	
	imgbckg: "wht",		

	dirmode: "right",
	LnContPosLeft: "7%",
	LnContPosTop: "70%",
	BtnPosLeft: "0%",
	BtnPosTop: "6%",
	LnPosX1: "25%",
	LnPosY1: "50%",
	LnPosX2: "65%",
	LnPosY2: "50%",

	WI: {ENG: "tree", ITA: "albero", JPN: "木",},
	WIr: {ENG: "/kənˈtrəʊl ˌtaʊər/", ITA: "/ˈtorre di konˈtrɔllo/", JPN: "ki", JPNRu: "<ruby>木<rt>き</rt></ruby>",},

    semtag1: {Dsp: "block", ENG: "plants", ITA: "piante", JPN: "植物",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: "Send a message to the control tower.", ITA: "Invii un messaggio alla torre di controllo.", JPN: "管制塔にメッセージを送信します。",},
	EX2: {ENG: "The pilot asks permission to depart from the control tower.", ITA: "Il pilota chiede alla torre di controllo il permesso per partire.", JPN: "パイロットは管制塔に出発する許可を求めます。",},
	EX3: {ENG: "The pilots asked the control tower to go back to the airport.", ITA: "I piloti hanno chiesto alla torre di controllo di poter tornare all’aeroporto.", JPN: "パイロットは、管制塔に空港に戻るように頼んだ。",},


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

2: {imgfile: "p005/monop005-wi2.svg",
	imgsrc: "deriv",
	imgsrccr: "CC BY-SA 4.0",
	imgattrsrcfle: "p008/imgsrcs/p008-wi2-src.png",
	imgattrsite: "commons.wikimedia.org",
	imgattrurl: "https://commons.wikimedia.org/wiki/File:Fraxinus_excelsior_tree_illustration.jpg",
	
	imgbckg: "wht",	

	dirmode: "right",
	LnContPosLeft: "14%",
	LnContPosTop: "52%",
	BtnPosLeft: "9%",
	BtnPosTop: "12%",
	LnPosX1: "75%",
	LnPosY1: "75%",
	LnPosX2: "45%",
	LnPosY2: "45%",

	WI: {ENG: "branch", ITA: "branch", JPN: "枝",},
	WIr: {ENG: "/lænd/", ITA: "/atterˈrare/", JPN: "eda", JPNRu: "<ruby>枝<rt>えだ</rt></ruby>",},

	semtag1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: "Looks like we have to make an emergency landing.", ITA: "Dovremo tentare un atterraggio di emergenza.", JPN: "緊急着陸する必要があるようです。",},
	EX2: {ENG: "The plane made a perfect landing.", ITA: "L'aereo effettuò un atterraggio perfetto.", JPN: "飛行機は完璧な着陸をした。",},
	EX3: {ENG: "They say most airplane accidents occur at landing or takeoff stages.", ITA: "Si dice che la maggior parte degli incidenti aerei avviene nelle fasi di atterraggio o di decollo.", JPN: "ほとんどの飛行機事故は着陸または離陸の時に発生すると言います。",},

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

3: {imgfile: "p005/monop005-wi3.svg",
	imgsrc: "original",
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",
	
	dirmode: "down",
	LnContPosLeft: "31%",
	LnContPosTop: "36%",
	BtnPosLeft: "9%",
	BtnPosTop: "0%",
	LnPosX1: "75%",
	LnPosY1: "25%",
	LnPosX2: "45%",
	LnPosY2: "55%",

	WI: {ENG: "leaf", ITA: "foglio", JPN: "葉っぱ",},
	WIr: {ENG: "/teɪk ɒf/", ITA: "/dekolˈlare/", JPN: "happa", JPNRu: "<ruby>葉っぱ<rt>はっぱ</rt></ruby>",},

	semtag1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: "Gold squadron, begin take-off procedure.", ITA: "Squadra Oro, iniziare procedura di decollo.", JPN: "ゴールド飛行隊、離陸手続きを開始する。",},
	EX2: {ENG: "The crew prepares for take off.", ITA: "L'equipaggio si prepara al decollo.", JPN: "乗組員は離陸を準備する。",},
	EX3: {ENG: "We may not serve beverages during take-off or landing.", ITA: "Non possiamo servire da bere durante il decollo o l'atterraggio.", JPN: "離陸または着陸中に飲み物を提供することはできません。",},

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

4: {imgfile: "p005/monop005-wi4.svg",
	imgsrc: "original",
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",

	dirmode: "up",
	LnContPosLeft: "38%",
	LnContPosTop: "59%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "50%",
	LnPosY2: "65%",

	WI: {ENG: "bench", ITA: "panchina", JPN: "ベンチ",},
	WIr: {ENG: "/dɪˈpɑː.tʃər bɔːd/", ITA: "/tabelˈlone ˈdelle parˈtɛntsa/", JPN: "benchi", JPNRu: "<ruby>ベンチ<rt>べんち</rt></ruby>",},


	semtag1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: "I looked at the departure board.", ITA: "Ho guardato il tabellone delle partenze.", JPN: "私は出発案内表示板を見た。",},
	EX2: {ENG: "The departure board is full of cancelled flights.", ITA: "Il tabellone delle partenze e degli arrivi è denso di voli cancellati.", JPN: "出発案内表示板にはキャンセルされたフライトがいっぱいです。",},
	EX3: {ENG: "There are 27 flights in arrival that have been cancelled, while 24 are those disappeared from the departure board.", ITA: "Sono al momento 27 i voli in arrivo che sono stati cancellati mentre 24 sono quelli scomparsi dal tabellone delle partenze.", JPN: "27便の到着がはキャンセルされ、24便は出発案内表示板から消えています。",},

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

5: {imgfile: "p005/monop005-wi5.svg",
	imgsrc: "original",
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",

	dirmode: "downleft",
	LnContPosLeft: "60%",
	LnContPosTop: "71%",
	BtnPosLeft: "9%",
	BtnPosTop: "6%",
	LnPosX1: "75%",
	LnPosY1: "50%",
	LnPosX2: "35%",
	LnPosY2: "50%",

	WI: {ENG: "waste bin", ITA: "cestino dei rifiuti", JPN: "ゴミ箱",},
	WIr: {ENG: "/ˈsiː.t/", ITA: "/seˈdile/", JPN: "gomibako", JPNRu: "<ruby>ゴミ箱<rt>ごみばこ</rt></ruby>",},


	semtag1: {Dsp: "block", ENG: "furniture", ITA: "mobili", JPN: "家具",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: "Where is my seat?", ITA: "Dov'è il mio sedile?", JPN: "私の席はどこですか？",},
	EX2: {ENG: "I was in the front seat.", ITA: "Ero sul sedile anteriore.", JPN: "私は前方座席にいた。",},
	EX3: {ENG: "It was under the seat in my vehicle.", ITA: "Era sotto il sedile della mia auto.", JPN: "それは私の車の座席の下にあった。",},


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
	imgsrc: "original",
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",

	dirmode: "up",
	LnContPosLeft: "54%",
	LnContPosTop: "10%",
	BtnPosLeft: "0%",
	BtnPosTop: "12%",
	LnPosX1: "25%",
	LnPosY1: "75%",
	LnPosX2: "55%",
	LnPosY2: "45%",

	WI: {ENG: "cloud", ITA: "nuvolo", JPN: "雲",},
	WIr: {ENG: "/ˈtɪk.ɪt/", ITA: "/biʎˈʎetto/", JPN: "kumo", JPNRu: "<ruby>雲<rt>くも</rt></ruby>",},

	semtag1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: "I will buy the tickets.", ITA: "Comprerò i biglietti.", JPN: "私がチケットを買うよ。",},
	EX2: {ENG: "Do you have the tickets?", ITA: "Avete i biglietti?", JPN: "チケットを持っていますか？",},
	EX3: {ENG: "He was checking a ticket.", ITA: "Controllava un biglietto.", JPN: "彼はチケットを確認していた。",},

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
	imgsrc: "original",
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",

	dirmode: "down",
	LnContPosLeft: "71%",
	LnContPosTop: "27%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "12%",
	LnPosX1: "50%",
	LnPosY1: "75%",
	LnPosX2: "50%",
	LnPosY2: "35%",

	WI: {ENG: "bird", ITA: "ucello", JPN: "鳥",},
	WIr: {ENG: "/ˈpæs.ən.dʒər/", ITA: "/passedˈdʒɛro/", JPN: "tori", JPNRu: "<ruby>鳥<rt>とり</rt></ruby>",},



	semtag1: {Dsp: "block", ENG: "animals", ITA: "animali", JPN: "動物",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: "There were fifty passengers on the plane.", ITA: "C'erano cinquanta passeggeri sull'aereo.", JPN: "飛行機には50人の乗客がいた。",},
	EX2: {ENG: "The train was full of passengers.", ITA: "Il treno era pieno di passeggeri.", JPN: "列車には乗客がいっぱいだった。",},
	EX3: {ENG: "He was a passenger on the Flight 627.", ITA: "Era un passeggero del volo 627.", JPN: "彼は627便の乗客だった。",},


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
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",

	dirmode: "up",
	LnContPosLeft: "73%",
	LnContPosTop: "1%",
	BtnPosLeft: "0%",
	BtnPosTop: "0%",
	LnPosX1: "25%",
	LnPosY1: "25%",
	LnPosX2: "58%",
	LnPosY2: "27%",

	WI: {ENG: "sun", ITA: "sole", JPN: "太陽",},
	WIr: {ENG: "/ˈsuːt.keɪs/", ITA: "/vaˈlidʒa/", JPN: "taiyou", JPNRu: "<ruby>太陽<rt>たいよう</rt></ruby>",},

	semtag1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'Take this <span class="wihlight">suitcase</span> and put it on the bed.', ITA: 'Prendi questa <span class="wihlight">valigia</span> e mettila sul letto.', JPN: 'この<span class="wihlight">スーツケース</span>を持ってベッドの上に置いてください。',},
	EX2: {ENG: 'Open your <span class="wihlight">suitcase</span>.', ITA: 'Apri la tua <span class="wihlight">valigia</span>.', JPN: '<span class="wihlight">スーツケース</span>を開けてください。',},
	EX3: {ENG: 'Which is your <span class="wihlight">suitcase</span>?', ITA: 'Qual è la tua <span class="wihlight">valigia</span>?', JPN: 'どれがあなたの<span class="wihlight">スーツケース</span>ですか？',},

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

//var p00X = 007;