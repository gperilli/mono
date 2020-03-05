
var p008 = {

No: "008",
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
	WI: {ENG: "planets", ITA: "pianetti", JPN: "惑星",},
	WIr: {ENG: "/ˈeə.pɔːt/", ITA: "/aeroˈpɔrto/", JPN: "wakusei", JPNRu: "<ruby>惑星<rt>わくせい</rt></ruby>",},
	
	//Sematic Tags
	//3 parametrs to get 1: display/hide, 2: text content, 3: class name (from ENG)
	semtag1: {Dsp: "block", ENG: "science", ITA: "scienza", JPN: "理科",},
	semtag2: {Dsp: "block", ENG: "space", ITA: "spazio", JPN: "宇宙",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

	BtnContPosLeft: "82%",
	BtnContPosTop: "0%",
	BtnPosLeft: "5%",
	BtnPosTop: "25%",
	BtnTxtOffSet: "7%",
	BtnChar1: "digit0",
	BtnChar2: "digit0",
	BtnChar3: "digit4",

	//Examples
	EX1: {ENG: '', ITA: '', JPN: '',},
	EX2: {ENG: '', ITA: '', JPN: '',},
	EX3: {ENG: '', ITA: '', JPN: '',},
	
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
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "blk",	

	dirmode: "downleft",
	LnContPosLeft: "3.6%",
	LnContPosTop: "42%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "12%",
	LnPosX1: "50%",
	LnPosY1: "75%",
	LnPosX2: "50%",
	LnPosY2: "35%",

	WI: {ENG: "mercury", ITA: "mercurio", JPN: "水星",},
	WIr: {ENG: "/kənˈtrəʊl ˌtaʊər/", ITA: "/ˈtorre di konˈtrɔllo/", JPN: "kanseitou", JPNRu: "<ruby>管制塔<rt>かんせいとう</rt></ruby>",},

    semtag1: {Dsp: "block", ENG: "science", ITA: "scienza", JPN: "理科",},
	semtag2: {Dsp: "block", ENG: "space", ITA: "spazio", JPN: "宇宙",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: '', ITA: '', JPN: '',},
	EX2: {ENG: '', ITA: '', JPN: '',},
	EX3: {ENG: '', ITA: '', JPN: '',},

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
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "blk",	

	dirmode: "down",
	LnContPosLeft: "8%",
	LnContPosTop: "34%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "50%",
	LnPosY2: "65%",

	WI: {ENG: "venus", ITA: "venere", JPN: "金星",},
	WIr: {ENG: "/kənˈtrəʊl ˌtaʊər/", ITA: "/ˈtorre di konˈtrɔllo/", JPN: "kinsei", JPNRu: "<ruby>金星<rt>きんせい</rt></ruby>",},

    semtag1: {Dsp: "block", ENG: "science", ITA: "scienza", JPN: "理科",},
	semtag2: {Dsp: "block", ENG: "space", ITA: "spazio", JPN: "宇宙",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: '', ITA: '', JPN: '',},
	EX2: {ENG: '', ITA: '', JPN: '',},
	EX3: {ENG: '', ITA: '', JPN: '',},
	
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
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "blk",	

	dirmode: "down",
	LnContPosLeft: "13.3%",
	LnContPosTop: "42%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "12%",
	LnPosX1: "50%",
	LnPosY1: "75%",
	LnPosX2: "50%",
	LnPosY2: "35%",

	WI: {ENG: "earth", ITA: "terra", JPN: "地球",},
	WIr: {ENG: "/teɪk ɒf/", ITA: "/dekolˈlare/", JPN: "ririku", JPNRu: "<ruby>地球<rt>ちきゅう</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "science", ITA: "scienza", JPN: "理科",},
	semtag2: {Dsp: "block", ENG: "space", ITA: "spazio", JPN: "宇宙",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: '', ITA: '', JPN: '',},
	EX2: {ENG: '', ITA: '', JPN: '',},
	EX3: {ENG: '', ITA: '', JPN: '',},
	
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
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "blk",	

	dirmode: "left",
	LnContPosLeft: "18.4%",
	LnContPosTop: "34%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "50%",
	LnPosY2: "65%",

	WI: {ENG: "mars", ITA: "marte", JPN: "火星",},
	WIr: {ENG: "/kənˈtrəʊl ˌtaʊər/", ITA: "/ˈtorre di konˈtrɔllo/", JPN: "kasei", JPNRu: "<ruby>火星<rt>かせい</rt></ruby>",},


	semtag1: {Dsp: "block", ENG: "science", ITA: "scienza", JPN: "理科",},
	semtag2: {Dsp: "block", ENG: "space", ITA: "spazio", JPN: "宇宙",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: '', ITA: '', JPN: '',},
	EX2: {ENG: '', ITA: '', JPN: '',},
	EX3: {ENG: '', ITA: '', JPN: '',},
	
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
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "blk",	

	dirmode: "upright",
	LnContPosLeft: "32%",
	LnContPosTop: "53%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "12%",
	LnPosX1: "50%",
	LnPosY1: "75%",
	LnPosX2: "50%",
	LnPosY2: "35%",

	WI: {ENG: "Jupiter", ITA: "Giove", JPN: "木星",},
	WIr: {ENG: "/kənˈtrəʊl ˌtaʊər/", ITA: "/ˈtorre di konˈtrɔllo/", JPN: "mokusei", JPNRu: "<ruby>木星<rt>もくせい</rt></ruby>",},


    semtag1: {Dsp: "block", ENG: "science", ITA: "scienza", JPN: "理科",},
	semtag2: {Dsp: "block", ENG: "space", ITA: "spazio", JPN: "宇宙",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: '', ITA: '', JPN: '',},
	EX2: {ENG: '', ITA: '', JPN: '',},
	EX3: {ENG: '', ITA: '', JPN: '',},
	
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
	LnContPosLeft: "54%",
	LnContPosTop: "26%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "50%",
	LnPosY2: "65%",

	WI: {ENG: "Saturn", ITA: "Saturno", JPN: "土星",},
	WIr: {ENG: "/ˈtɪk.ɪt/", ITA: "/biʎˈʎetto/", JPN: "dosei", JPNRu: "<ruby>土星<rt>どせい</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "science", ITA: "scienza", JPN: "理科",},
	semtag2: {Dsp: "block", ENG: "space", ITA: "spazio", JPN: "宇宙",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: '', ITA: '', JPN: '',},
	EX2: {ENG: '', ITA: '', JPN: '',},
	EX3: {ENG: '', ITA: '', JPN: '',},
	
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
	LnContPosLeft: "77%",
	LnContPosTop: "46%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "12%",
	LnPosX1: "50%",
	LnPosY1: "75%",
	LnPosX2: "44%",
	LnPosY2: "33%",

	WI: {ENG: "Uranus", ITA: "Urano", JPN: "天皇制",},
	WIr: {ENG: "/ˈpæs.ən.dʒər/", ITA: "/passedˈdʒɛro/", JPN: "tennousei", JPNRu: "<ruby>天皇制<rt>てんのうせい</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "science", ITA: "scienza", JPN: "理科",},
	semtag2: {Dsp: "block", ENG: "space", ITA: "spazio", JPN: "宇宙",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: '', ITA: '', JPN: '',},
	EX2: {ENG: '', ITA: '', JPN: '',},
	EX3: {ENG: '', ITA: '', JPN: '',},
	
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
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "blk",	

	dirmode: "down",
	LnContPosLeft: "79.5%",
	LnContPosTop: "32%",
	BtnPosLeft: "9%",
	BtnPosTop: "0%",
	LnPosX1: "75%",
	LnPosY1: "25%",
	LnPosX2: "75%",
	LnPosY2: "59%",

	WI: {ENG: "Neptune", ITA: "Netturno", JPN: "海王星",},
	WIr: {ENG: "/ˈsuːt.keɪs/", ITA: "/vaˈlidʒa/", JPN: "k", JPNRu: "<ruby>海王星<rt>かいおうせい</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "science", ITA: "scienza", JPN: "理科",},
	semtag2: {Dsp: "block", ENG: "space", ITA: "spazio", JPN: "宇宙",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: '', ITA: '', JPN: '',},
	EX2: {ENG: '', ITA: '', JPN: '',},
	EX3: {ENG: '', ITA: '', JPN: '',},
	
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
