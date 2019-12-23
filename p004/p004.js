
var p004 = {
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
No: "004",
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


	BtnContPosLeft: "82%",
	BtnContPosTop: "76%",
	BtnPosLeft: "5%",
	BtnPosTop: "25%",
	BtnTxtOffSet: "7%",
	BtnChar1: "digit0",
	BtnChar2: "digit0",
	BtnChar3: "digit2",

	//Word Item
	WI: {ENG: "countryside", ITA: "campagna", JPN: "田舎",},
	WIr: {ENG: "/ˈeə.pɔːt/", ITA: "/aeroˈpɔrto/", JPN: "inaka", JPNRu: "<ruby>田舎<rt>いなか</rt></ruby>",},
	
	//Sematic Tags
	//3 parametrs to get 1: display/hide, 2: text content, 3: class name (from ENG)
	semtag1: {Dsp: "block", ENG: "country", ITA: "campagna", JPN: "田舎",},
	semtag2: {Dsp: "block", ENG: "scenery", ITA: "paesaggio", JPN: "景色",},
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
	EX1: {ENG: "I live in the country.", ITA: "Abito in campagna.", JPN: "田舎に住んでいます。",},
	EX2: {ENG: "He prefers the country to the town.", ITA: "Preferisce la campagna alla città.", JPN: "彼は都会よりいなかの方が好きだ。",},
	EX3: {ENG: "I go to the country every summer.", ITA: "Io vado in campagna ogni estate.", JPN: "私は毎年夏は田舎へ帰る。",},
    
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/279086", ITA: "https://tatoeba.org/eng/sentences/show/975789", JPN: "https://tatoeba.org/eng/sentences/show/124907",},
	TatSrcEx2: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/301834", ITA: "https://tatoeba.org/eng/sentences/show/350608", JPN: "https://tatoeba.org/eng/sentences/show/101861",},
	TatSrcEx3: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/253129", ITA: "https://tatoeba.org/eng/sentences/show/6638082", JPN: "https://tatoeba.org/eng/sentences/show/152686",},
	
	// Dictionary search suffixes
    engLhyph: "countryside", engLperc: "countryside", engLplus: "countryside", engForv: "countryside/#en",
    itaLhyph: "campagna", itaLplus: "campagna", itaForv: "campagna/#it",
    jpnLpercen: "%E7%A9%BA%E6%B8%AF", jpnLgoo: "60382/meaning/m1u/", jpnForv: "田舎/#ja",

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
	imgsrccr: "public domain",
	imgattrsrcfle: "p004/imgsrcs/p004-wi1-src.png",
	imgattrsite: "commons.wikimedia.org",
	imgattrurl: "https://commons.wikimedia.org/wiki/File:Airplane_silhouette_S.png",
	
	imgbckg: "wht",	

	dirmode: "downleft",
	LnContPosLeft: "0%",
	LnContPosTop: "3%",
	BtnPosLeft: "9%",
	BtnPosTop: "0%",
	LnPosX1: "75%",
	LnPosY1: "25%",
	LnPosX2: "46%",
	LnPosY2: "53%",

	WI: {ENG: "airplane", ITA: "aeroplano", JPN: "飛行機",},
	WIr: {ENG: "/kənˈtrəʊl ˌtaʊər/", ITA: "/ˈtorre di konˈtrɔllo/", JPN: "hikouki", JPNRu: "<ruby>飛行機<rt>ひこうき</rt></ruby>",},

    semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "vehicles", ITA: "veicolo", JPN: "乗り物",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: "I saw a plane.", ITA: "Ho visto un aeroplano.", JPN: "飛行機が見えた。",},
	EX2: {ENG: "He went aboard the plane.", ITA: "È salito sull'aeroplano.", JPN: "彼はその飛行機に乗り込んだ。",},
	EX3: {ENG: "The plane took off at seven.", ITA: "L'aeroplano è decollato alle sette.", JPN: "飛行機は７時に離陸した。",},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/317979", ITA: "https://tatoeba.org/eng/sentences/show/1646183", JPN: "https://tatoeba.org/eng/sentences/show/85733",},
	TatSrcEx2: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/291244", ITA: "https://tatoeba.org/eng/sentences/show/2395274", JPN: "https://tatoeba.org/eng/sentences/show/112433",},
	TatSrcEx3: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/318038", ITA: "https://tatoeba.org/eng/sentences/show/947448", JPN: "https://tatoeba.org/eng/sentences/show/85675",},

    engLhyph: "airplane", engLperc: "airplane", engLplus: "airplane", engForv: "airplane/#en",
    itaLhyph: "aeroplano", itaLplus: "aeroplano", itaForv: "aeroplano/#it",
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
	
	imgbckg: "wht",


	dirmode: "downright",
	LnContPosLeft: "17%",
	LnContPosTop: "27%",
	BtnPosLeft: "0%",
	BtnPosTop: "0%",
	LnPosX1: "25%",
	LnPosY1: "25%",
	LnPosX2: "55%",
	LnPosY2: "55%",

	WI: {ENG: "mountain", ITA: "montagna", JPN: "山",},
	WIr: {ENG: "/lænd/", ITA: "/atterˈrare/", JPN: "yama", JPNRu: "<ruby>山<rt>やま</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "country", ITA: "campagna", JPN: "田舎",},
	semtag2: {Dsp: "block", ENG: "scenery", ITA: "paesaggio", JPN: "景色",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: "I was in the mountains.", ITA: "Ero in montagna.", JPN: "私は山にいました。",},
	EX2: {ENG: "How high is the mountain?", ITA: "Quanto è alta la montagna?", JPN: "その山はどれくらいの高さですか。",},
	EX3: {ENG: "I like climbing mountains.", ITA: "Mi piace scalare le montagne.", JPN: "私は山登りが好きです。",},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/1290", ITA: "https://tatoeba.org/eng/sentences/show/380464", JPN: "https://tatoeba.org/eng/sentences/show/4715",},
	TatSrcEx2: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/47719", ITA: "https://tatoeba.org/eng/sentences/show/1687435", JPN: "https://tatoeba.org/eng/sentences/show/210451",},
	TatSrcEx3: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/257880", ITA: "https://tatoeba.org/eng/sentences/show/35455408", JPN: "https://tatoeba.org/eng/sentences/show/156654",},

    engLhyph: "mountain", engLperc: "mountain", engLplus: "mountain", engForv: "mountain/#en",
    itaLhyph: "montagna", itaLplus: "montagna", itaForv: "montagna/#it",
    jpnLpercen: "%E5%B1%B1", jpnLgoo: "142609/meaning/m1u/", jpnForv: "山/#ja",
	
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
	
	imgbckg: "wht",


	dirmode: "down",
	LnContPosLeft: "2%",
	LnContPosTop: "56%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "41%",
	LnPosY2: "62%",

	WI: {ENG: "house", ITA: "casa", JPN: "家",},
	WIr: {ENG: "/teɪk ɒf/", ITA: "/dekolˈlare/", JPN: "ie", JPNRu: "<ruby>家<rt>いえ</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "buildings", ITA: "edifici", JPN: "建物",},
	semtag2: {Dsp: "block", ENG: "home", ITA: "casa", JPN: "家",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: "Welcome home.", ITA: "Benvenuto a casa.", JPN: "お帰りなさい。",},
	EX2: {ENG: "Let's go home!", ITA: "Andiamo a casa!", JPN: "家へ帰りましょう。",},
	EX3: {ENG: "I will stay at home.", ITA: "Starò a casa.", JPN: "私は家にいます。",},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/64693", ITA: "https://tatoeba.org/eng/sentences/show/378125", JPN: "https://tatoeba.org/eng/sentences/show/227342",},
	TatSrcEx2: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/576660", ITA: "https://tatoeba.org/eng/sentences/show/637635", JPN: "https://tatoeba.org/eng/sentences/show/187001",},
	TatSrcEx3: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/256483", ITA: "https://tatoeba.org/eng/sentences/show/1389704", JPN: "https://tatoeba.org/eng/sentences/show/158047",},

    engLhyph: "house", engLperc: "house", engLplus: "house", engForv: "house/#en",
    itaLhyph: "casa", itaLplus: "casa", itaForv: "casa/#it",
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
	LnContPosLeft: "28%",
	LnContPosTop: "43%",
	BtnPosLeft: "9%",
	BtnPosTop: "0%",
	LnPosX1: "75%",
	LnPosY1: "25%",
	LnPosX2: "45%",
	LnPosY2: "55%",

	WI: {ENG: "forest", ITA: "foresta", JPN: "森",},
	WIr: {ENG: "/dɪˈpɑː.tʃər bɔːd/", ITA: "/tabelˈlone ˈdelle parˈtɛntsa/", JPN: "mori", JPNRu: "<ruby>出発<rt>しゅっぱつ</rt></ruby><ruby>案内<rt>あんない</rt></ruby><ruby>表示板<rt>ひょうじばん</rt></ruby>",},


	semtag1: {Dsp: "block", ENG: "country", ITA: "campagna", JPN: "田舎",},
	semtag2: {Dsp: "block", ENG: "scenery", ITA: "paesaggio", JPN: "景色景",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: "I walk in the forest every day.", ITA: "Cammino nella foresta ogni giorno.", JPN: "私は毎日森の中を歩く。",},
	EX2: {ENG: "I got lost in the forest.", ITA: "Mi sono persa nella foresta.", JPN: "私は森林の中で道に迷った。",},
	EX3: {ENG: "The church is surrounded by woods and lakes.", ITA: "La chiesa è circondata dalla foresta e da laghi.", JPN: "教会は森と湖に囲まれている。",},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/261845", ITA: "https://tatoeba.org/eng/sentences/show/1316562", JPN: "https://tatoeba.org/eng/sentences/show/152704",},
	TatSrcEx2: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/255821", ITA: "https://tatoeba.org/eng/sentences/show/1512723", JPN: "https://tatoeba.org/eng/sentences/show/155699",},
	TatSrcEx3: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/19082", ITA: "https://tatoeba.org/eng/sentences/show/384832", JPN: "https://tatoeba.org/eng/sentences/show/180220",},

    engLhyph: "forest", engLperc: "forest", engLplus: "forest", engForv: "forest/#en",
    itaLhyph: "foresta", itaLplus: "foresta", itaForv: "foresta/#it",
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
	imgsrc: "deriv",
	imgsrccr: "public domain",
	imgattrsrcfle: "p004/imgsrcs/p004-wi5-src.png",
	imgattrsite: "openclipart.org",
	imgattrurl: "https://openclipart.org/detail/194019/tractor",
	
	imgbckg: "wht",

	dirmode: "upright",
	LnContPosLeft: "33%",
	LnContPosTop: "62%",
	BtnPosLeft: "0%",
	BtnPosTop: "12%",
	LnPosX1: "25%",
	LnPosY1: "75%",
	LnPosX2: "55%",
	LnPosY2: "45%",

	WI: {ENG: "tracor", ITA: "trattore", JPN: "トラクター",},
	WIr: {ENG: "/ˈsiː.t/", ITA: "/seˈdile/", JPN: "seki", JPNRu: "<ruby>トラクター<rt>とらくたー</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "country", ITA: "campagna", JPN: "田舎",},
	semtag2: {Dsp: "block", ENG: "vehicle", ITA: "veicolo", JPN: "乗り物",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: "I can't get my tractor started.", ITA: "Non riesco a mettere in moto il mio trattore.", JPN: "私はエンジンがかけられない。",},
	EX2: {ENG: "The tractor plows the land.", ITA: "Il trattore ara il terreno.", JPN: "トラクターは土地を耕します。",},
	EX3: {ENG: "You have to load the tractor.", ITA: "Devi caricare il trattore.", JPN: "あなたはトラクターを積まなければなりません。",},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
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
	imgsrccr: "public domain",
	imgattrsrcfle: "p004/imgsrcs/p004-wi6-src.png",
	imgattrsite: "openclipart.org",
	imgattrurl: "https://openclipart.org/image/2400px/svg_to_png/282339/OldifluffWindTurbine.png",
	
	imgbckg: "blk",


	dirmode: "down",
	LnContPosLeft: "55%",
	LnContPosTop: "45%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "49%",
	LnPosY2: "59%",

	WI: {ENG: "wind turbine", ITA: "turbina eolica", JPN: "風力原動機",},
	WIr: {ENG: "/ˈtɪk.ɪt/", ITA: "/biʎˈʎetto/", JPN: "fuuryokugendouki", JPNRu: "<ruby>風力原動機<rt>ふうりょくげんどうき</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "country", ITA: "campagna", JPN: "田舎",},
	semtag2: {Dsp: "block", ENG: "electricity", ITA: "elettricità", JPN: "電気",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: "Wind turbines transform wind into energy.", ITA: "Le turbine eoliche trasformano il vento in energia.", JPN: "風力原動機は風をエネルギーに変える",},
	EX2: {ENG: "Wind turbines are preferably installed in places that guarantee adequate wind conditions.", ITA: "Le turbine eoliche vengono installate di preferenza in luoghi che garantiscono adeguate condizioni di vento.", JPN: "風力原動機は、適切な風の状態を保証する場所に設置することが好ましい。",},
	EX3: {ENG: "Producing electricity from a wind turbine does not involve the emission of greenhouse gases.", ITA: "Produrre elettricitá da una turbina eolica non comporta l´emissione di gas serra.", JPN: "風力原動機から電力を生産することは温室効果ガスの排出を含みません。",},
	
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
	imgsrccr: "public domain",
	imgattrsrcfle: "p004/imgsrcs/p004-wi7-src.png",
	imgattrsite: "openclipart.org",
	imgattrurl: "https://openclipart.org/image/2400px/svg_to_png/264659/Hot-Air-Balloon-Silhouette.png",
	
	imgbckg: "wht",

	dirmode: "downleft",
	LnContPosLeft: "69%",
	LnContPosTop: "9%",
	BtnPosLeft: "0%",
	BtnPosTop: "6%",
	LnPosX1: "25%",
	LnPosY1: "50%",
	LnPosX2: "65%",
	LnPosY2: "50%",

	WI: {ENG: "hot air balloon", ITA: "mongolfiera", JPN: "熱気球",},
	WIr: {ENG: "/ˈpæs.ən.dʒər/", ITA: "/passedˈdʒɛro/", JPN: "netsukikyuu", JPNRu: "<ruby>熱気球<rt>ねつききゅう</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "vehicles", ITA: "veicolo", JPN: "空港",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: "Have you ever ridden in a hot air balloon?", ITA: "Sei mai salito in mongolfiera?", JPN: "熱気球に乗ったことありますか。",},
	EX2: {ENG: "The basket of a hot air balloon can contain from four to ten people.", ITA: "La casa era circondata da campi.", JPN: "熱気球のバスケットには4人から10人まで収容できます。",},
	EX3: {ENG: "The hot air balloon flies high in the sky.", ITA: "La mongolfiera vola in alto nel cielo.", JPN: "家は畑に囲まれていた。",},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/282121", ITA: "https://tatoeba.org/eng/sentences/show/1837946", JPN: "https://tatoeba.org/eng/sentences/show/121883",},
	TatSrcEx2: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/967723", ITA: "", JPN: "https://tatoeba.org/eng/sentences/show/2242463",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},


    engLhyph: "hot-air-balloon", engLperc: "hot%20air%20balloon", engLplus: "hot+air+balloon", engForv: "hot_air_balloon/#en",
    itaLhyph: "mongolfiera", itaLplus: "mongolfiera", itaForv: "mongolfiera/#it",
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
	imgsrc: "deriv",
	imgsrccr: "public domain",
	imgattrsrcfle: "p004/imgsrcs/p004-wi8-src.png",
	imgattrsite: "openclipart.org",
	imgattrurl: "https://openclipart.org/detail/194019/tractor",
		
	imgbckg: "wht",

	dirmode: "down",
	LnContPosLeft: "46%",
	LnContPosTop: "71%",
	BtnPosLeft: "0%",
	BtnPosTop: "12%",
	LnPosX1: "25%",
	LnPosY1: "75%",
	LnPosX2: "55%",
	LnPosY2: "45%",

	WI: {ENG: "field", ITA: "campo", JPN: "畑",},
	WIr: {ENG: "/ˈsuːt.keɪs/", ITA: "/vaˈlidʒa/", JPN: "hatake", JPNRu: "<ruby>畑<rt>はたけ</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "field", ITA: "campo", JPN: "畑",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'His family works in the fields.', ITA: 'La sua famiglia lavora nei campi.', JPN: '彼の家族は畑で働いている。',},
	EX2: {ENG: 'The house was surrounded by fields.', ITA: 'La casa era circondata da campi.', JPN: '家は畑に囲まれていた。',},
	EX3: {ENG: "There is a path through the fields.", ITA: "C'è un sentiero tra i campi.", JPN: "野原の間に１本の小道があります。",},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/285733", ITA: "https://tatoeba.org/eng/sentences/show/375301", JPN: "https://tatoeba.org/eng/sentences/show/117932",},
	TatSrcEx2: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/967723", ITA: "https://tatoeba.org/eng/sentences/show/967725", JPN: "https://tatoeba.org/eng/sentences/show/2242463",},
	TatSrcEx3: {Dsp: "none", ENG: "https://tatoeba.org/eng/sentences/show/324108", ITA: "https://tatoeba.org/eng/sentences/show/351075", JPN: "https://tatoeba.org/eng/sentences/show/79610",},

    engLhyph: "field", engLperc: "field", engLplus: "field", engForv: "field/#en",
    itaLhyph: "campo", itaLplus: "campo", itaForv: "campo/#it",
    jpnLpercen: "%E3%82%B9%E3%83%BC%E3%83%84%E3%82%B1%E3%83%BC%E3%82%B9", jpnLgoo: "117095/meaning/m1u/", jpnForv: "スーツケース/#ja",
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/285733", ITA: "https://tatoeba.org/eng/sentences/show/375301", JPN: "https://tatoeba.org/eng/sentences/show/117932",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

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

//var p00X = p002;