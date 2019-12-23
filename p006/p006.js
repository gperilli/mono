// 009 data
var p006 = {
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
No: "006",
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
	BtnContPosTop: "76%",
	BtnPosLeft: "-5%",
	BtnPosTop: "25%",
	BtnTxtOffSet: "0%",
	BtnChar1: "digit0",
	BtnChar2: "digit0",
	BtnChar3: "digit9",

	//Word Item
	WI: {ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	WIr: {ENG: "/ˈeə.pɔːt/", ITA: "/aeroˈpɔrto/", JPN: "daidokoro", JPNRu: "<ruby>台所<rt>だいどころ</rt></ruby>",},
	
	//Sematic Tags
	//3 parametrs to get 1: display/hide, 2: text content, 3: class name (from ENG)
	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},


	//Examples
	EX1: {ENG: "I'm going to go to the airport.", ITA: "Andrò all'aeroporto.", JPN: "私は空港に行くつもりです。",},
	EX2: {ENG: "The airport is over there.", ITA: "L'aeroporto è laggiù.", JPN: "空港はそこにあります。",},
	EX3: {ENG: "How far is it to the airport?", ITA: "Quanto dista l'aeroporto?", JPN: "空港まではどれぐらい遠いですか？",},
    
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


1: {imgfile: "p009/monop009-wi1.svg",
	imgsrc: "original",
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",	

	dirmode: "right",
	LnContPosLeft: "3%",
	LnContPosTop: "7%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "50%",
	LnPosY2: "65%",

	WI: {ENG: "towel", ITA: "asciugamano", JPN: "タオル",},
	WIr: {ENG: "/kənˈtrəʊl ˌtaʊər/", ITA: "/ˈtorre di konˈtrɔllo/", JPN: "taoru", JPNRu: "<ruby>タオル<rt>たおる</rt></ruby>",},

    semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
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

2: {imgfile: "p009/monop009-wi2.svg",
	imgsrc: "original",
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",

	dirmode: "right",
	LnContPosLeft: "19%",
	LnContPosTop: "8%",
	BtnPosLeft: "9%",
	BtnPosTop: "0%",
	LnPosX1: "75%",
	LnPosY1: "25%",
	LnPosX2: "45%",
	LnPosY2: "55%",

	WI: {ENG: "tap knob", ITA: "manico del rubinetto", JPN: "蛇口の取っ手",},
	WIr: {ENG: "/lænd/", ITA: "/atterˈrare/", JPN: "jaguchi", JPNRu: "<ruby>蛇口の取っ手<rt>じゃぐちのとって</rt></ruby>",},



	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
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

3: {imgfile: "p009/monop009-wi3.svg",
	imgsrc: "original",
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",

	dirmode: "down",
	LnContPosLeft: "14%",
	LnContPosTop: "43%",
	BtnPosLeft: "9%",
	BtnPosTop: "0%",
	LnPosX1: "75%",
	LnPosY1: "25%",
	LnPosX2: "45%",
	LnPosY2: "55%",

	WI: {ENG: "drain", ITA: "scolo", JPN: "流しの穴",},
	WIr: {ENG: "/teɪk ɒf/", ITA: "/dekolˈlare/", JPN: "ririku", JPNRu: "<ruby>流しの穴<rt>ながしのあな</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
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

4: {imgfile: "p009/monop009-wi4.svg",
	imgsrc: "original",
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",	

	dirmode: "up",
	LnContPosLeft: "36%",
	LnContPosTop: "21%",
	BtnPosLeft: "0%",
	BtnPosTop: "12%",
	LnPosX1: "25%",
	LnPosY1: "75%",
	LnPosX2: "55%",
	LnPosY2: "45%",

	WI: {ENG: "tap", ITA: "rubinetto", JPN: "蛇口",},
	WIr: {ENG: "/lænd/", ITA: "/atterˈrare/", JPN: "jaguchi", JPNRu: "<ruby>蛇口<rt>じゃぐち</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
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

5: {imgfile: "p009/monop009-wi5.svg",
	imgsrc: "original",
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",

	dirmode: "downleft",
	LnContPosLeft: "53%",
	LnContPosTop: "3%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "50%",
	LnPosY2: "65%",

	WI: {ENG: "dish washing liquid", ITA: "detersivo per i piatti", JPN: "洗剤",},
	WIr: {ENG: "/ˈsiː.t/", ITA: "/seˈdile/", JPN: "seki", JPNRu: "<ruby>洗剤<rt>せんざい</rt></ruby>",},


	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
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

6: {imgfile: "p009/monop009-wi6.svg",
	imgsrc: "deriv",
	imgsrccr: "CC BY 4.0",
	imgattrsrcfle: "p009/imgsrcs/p009-wi6-src.png",
	imgattrsite: "svgrepo.com",
	imgattrurl: "https://www.svgrepo.com/show/183800/sponge.svg",
	
	imgbckg: "wht",

	dirmode: "up",
	LnContPosLeft: "57%",
	LnContPosTop: "37%",
	BtnPosLeft: "0%",
	BtnPosTop: "6%",
	LnPosX1: "25%",
	LnPosY1: "50%",
	LnPosX2: "65%",
	LnPosY2: "50%",

	WI: {ENG: "sponge", ITA: "spugna", JPN: "スポンジ",},
	WIr: {ENG: "/ˈtɪk.ɪt/", ITA: "/biʎˈʎetto/", JPN: "chiketto", JPNRu: "<ruby>スポンジ<rt>すぽんじ</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
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


7: {imgfile: "p009/monop009-wi7.svg",
	imgsrc: "original",
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",

	dirmode: "down",
	LnContPosLeft: "40%",
	LnContPosTop: "44%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "50%",
	LnPosY2: "54%",

	 WI: {ENG: "sink", ITA: "lavandino della cucina", JPN: "流し",},
	WIr: {ENG: "/ˈpæs.ən.dʒər/", ITA: "/passedˈdʒɛro/", JPN: "joukyaku", JPNRu: "<ruby>流し<rt>ながし</rt></ruby>",},



	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
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

8: {imgfile: "p009/monop009-wi8.svg",
	imgsrc: "original",
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",

	dirmode: "up",
	LnContPosLeft: "72%",
	LnContPosTop: "5%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "50%",
	LnPosY2: "65%",

	WI: {ENG: "microwave", ITA: "forno a microonde", JPN: "電子レンジ",},
	WIr: {ENG: "/ˈsuːt.keɪs/", ITA: "/vaˈlidʒa/", JPN: "denshirenji", JPNRu: "<ruby>電子レンジ<rt>でんしれんじ</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
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

//var p00X = 008;