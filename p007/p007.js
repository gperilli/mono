
var p007 = {
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
No: "007",
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
	
	//Word Item
	WI: {ENG: "internal organs", ITA: "organi interni", JPN: "内臓",},
	WIr: {ENG: "/ɪnˈtɜːnl ˈɔːgənz/", ITA: "/aeroˈpɔrto/", JPN: "naizou", JPNRu: "<ruby>内臓<rt>ないぞう</rt></ruby>",},
	
	//Sematic Tags
	semtag1: {Dsp: "block", ENG: "body", ITA: "corpo", JPN: "体",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	BtnContPosLeft: "0%",
	BtnContPosTop: "0%",
	BtnPosLeft: "-5%",
	BtnPosTop: "25%",
	BtnTxtOffSet: "0%",
	BtnChar1: "digit0",
	BtnChar2: "digit0",
	BtnChar3: "digit3",

	//Examples
	EX1: {ENG: '', ITA: '', JPN: '',},
	EX2: {ENG: '', ITA: '', JPN: '',},
	EX3: {ENG: '', ITA: '', JPN: '',},

    //Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/403055", ITA: "https://tatoeba.org/ita/sentences/show/638552", JPN: "https://tatoeba.org/jpn/sentences/show/642385",},
	TatSrcEx3: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/18189", ITA: "https://tatoeba.org/ita/sentences/show/702836", JPN: "https://tatoeba.org/jpn/sentences/show/179332",},

    // Dictionary search suffixes
    engLhyph: "internal-organs", engLperc: "internal%20organs", engLplus: "internal+organs", engForv: "airport/#en",
    itaLhyph: "organi-interni", itaLplus: "organi+interni", itaForv: "aeroporto/#it",
    jpnLpercen: "%E7%A9%BA%E6%B8%AF", jpnLgoo: "55838/meaning/m1u/", jpnForv: "内臓"/#ja",

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
	
	imgbckg: "wht",	

	dirmode: "downleft",
	LnContPosLeft: "4%",
	LnContPosTop: "19%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "50%",
	LnPosY2: "65%",

	WI: {ENG: "intestine", ITA: "intestino", JPN: "腸",},
	WIr: {ENG: "/ɪnˈtɛstɪn/", ITA: "/intesˈtino/", JPN: "chou", JPNRu: "<ruby>腸<rt>ちょう</rt></ruby>",},
	
    	semtag1: {Dsp: "block", ENG: "body", ITA: "corpo", JPN: "体",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: '', ITA: '', JPN: '',},
	EX2: {ENG: '', ITA: '', JPN: '',},
	EX3: {ENG: '', ITA: '', JPN: '',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "",},

    engLhyph: "intestine", engLperc: "intestine", engLplus: "intestine", engForv: "intestine/#en",
    itaLhyph: "intestino", itaLplus: "intestino", itaForv: "intestino/#it",
    jpnLpercen: "%E7%AE%A1%E5%88%B6%E5%A1%94", jpnLgoo: "48697/meaning/m1u/", jpnForv: "管制塔/#ja",
	
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

2: {imgfile: "",
	imgsrc: "original",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",

	dirmode: "down",
	LnContPosLeft: "29%",
	LnContPosTop: "18%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "12%",
	LnPosX1: "50%",
	LnPosY1: "75%",
	LnPosX2: "50%",
	LnPosY2: "35%",

	WI: {ENG: "heart", ITA: "cuore", JPN: "心臓",},
	WIr: {ENG: "/hɑːt/", ITA: "/ˈkwɔre/", JPN: "shinzou", JPNRu: "<ruby心臓<rt>しんぞう</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "body", ITA: "corpo", JPN: "体",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
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

3: {imgfile: "",
	imgsrc: "original",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",	

	dirmode: "down",
	LnContPosLeft: "53%",
	LnContPosTop: "22%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "63%",
	LnPosY2: "59%",

	WI: {ENG: "kidney", ITA: "rene", JPN: "離陸",},
	WIr: {ENG: "/ˈkɪdni/", ITA: "/ˈrɛne/", JPN: "jinzou", JPNRu: "<ruby>腎臓<rt>じんぞう</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "body", ITA: "corpo", JPN: "体",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: '', ITA: '', JPN: '',},
	EX2: {ENG: '', ITA: '', JPN: '',},
	EX3: {ENG: '', ITA: '', JPN: '',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "kidney", engLperc: "kidney", engLplus: "kidney", engForv: "kidney/#en",
    itaLhyph: "rene", itaLplus: "rene", itaForv: "rene/#it",
    jpnLpercen: "%E9%9B%A2%E9%99%B8", jpnLgoo: "233036/meaning/m1u/", jpnForv: "離陸/#ja",
	
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

4: {imgfile: "",
	imgsrc: "original",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",	

	dirmode: "left",
	LnContPosLeft: "77%",
	LnContPosTop: "17%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "50%",
	LnPosY2: "65%",

	WI: {ENG: "liver", ITA: "fegato", JPN: "肝臓",},
	WIr: {ENG: "/ˈlɪvə/", ITA: "/ˈfeɡato/", JPN: "kanzou", JPNRu: "<ruby>肝臓<rt>かんぞう</rt></ruby>",},


	semtag1: {Dsp: "block", ENG: "body", ITA: "corpo", JPN: "体",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: '', ITA: '', JPN: '',},
	EX2: {ENG: '', ITA: '', JPN: '',},
	EX3: {ENG: '', ITA: '', JPN: '',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "liver", engLperc: "liver", engLplus: "liver", engForv: "liver/#en",
    itaLhyph: "fegato", itaLplus: "fegato", itaForv: "fegato/#it",
    jpnLpercen: "%E6%8E%B2%E7%A4%BA%E6%9D%BF", jpnLgoo: "66523/meaning/m1u/", jpnForv: "表示板/#ja",
	
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

5: {imgfile: "",
	imgsrc: "original",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",	

	dirmode: "upright",
	LnContPosLeft: "5%",
	LnContPosTop: "62%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "12%",
	LnPosX1: "50%",
	LnPosY1: "75%",
	LnPosX2: "50%",
	LnPosY2: "35%",

	WI: {ENG: "lung", ITA: "polmone", JPN: "肺",},
	WIr: {ENG: "/lʌŋ/", ITA: "/polˈmone/", JPN: "hai", JPNRu: "<ruby>肺<rt>はい</rt></ruby>",},


	semtag1: {Dsp: "block", ENG: "body", ITA: "corpo", JPN: "体",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: '', ITA: '', JPN: '',},
	EX2: {ENG: '', ITA: '', JPN: '',},
	EX3: {ENG: '', ITA: '', JPN: '',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/251304", ITA: "https://tatoeba.org/ita/sentences/show/836253", JPN: "https://tatoeba.org/jpn/sentences/show/163208",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "lung", engLperc: "lung", engLplus: "lung", engForv: "lung/#en",
    itaLhyph: "polmone", itaLplus: "polmone", itaForv: "polmone/#it",
    jpnLpercen: "%E5%B8%AD", jpnLgoo: "123323/meaning/m1u/", jpnForv: "肺/#ja",
	
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

6: {imgfile: "",
	imgsrc: "deriv",
	imgsrccr: "CC BY 4.0",
	imgattrsrcfle: "p001/imgsrcs/p001-wi6-src.png",
	imgattrsite: "commons.wikimedia.org",
	imgattrurl: "https://commons.wikimedia.org/wiki/File:Ic_flight_48px.svg",
	
	imgbckg: "wht",	

	dirmode: "downright",
	LnContPosLeft: "28%",
	LnContPosTop: "59%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "59%",
	LnPosY2: "56%",

	WI: {ENG: "stomach", ITA: "stomaco", JPN: "胃",},
	WIr: {ENG: "/ˈstʌmək/", ITA: "/ˈstɔmako/", JPN: "i", JPNRu: "<ruby>胃<rt>い</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "body", ITA: "corpo", JPN: "体",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: '', ITA: '', JPN: '',},
	EX2: {ENG: '', ITA: '', JPN: '',},
	EX3: {ENG: '', ITA: '', JPN: '',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "stomach", engLperc: "stomach", engLplus: "stomach", engForv: "stomach/#en",
    itaLhyph: "stomaco", itaLplus: "stomaco", itaForv: "stomaco/#it",
    jpnLpercen: "%E3%83%81%E3%82%B1%E3%83%83%E3%83%88", jpnLgoo: "141577/meaning/m1u/", jpnForv: "チケット/#ja",
	
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

7: {imgfile: "",
	imgsrc: "deriv",
	imgsrccr: "CC BY 4.0",
	imgattrsrcfle: "p001/imgsrcs/p001-wi7-src.png",
	imgattrsite: "commons.wikimedia.org",
	imgattrurl: "https://commons.wikimedia.org/wiki/File:Ic_flight_48px.svg",
	
	imgbckg: "wht",	

	dirmode: "downleft",
	LnContPosLeft: "51%",
	LnContPosTop: "67%",
	BtnPosLeft: "0%",
	BtnPosTop: "12%",
	LnPosX1: "25%",
	LnPosY1: "75%",
	LnPosX2: "49%",
	LnPosY2: "56%",

	WI: {ENG: "neuron", ITA: "neurone", JPN: "神経細胞",},
	WIr: {ENG: "/ˈnjʊərɒn/", ITA: "/neuˈrone/", JPN: "shinkeisaibou", JPNRu: "<ruby>神経<rt>しんけい</rt>細胞<rt>さいぼう</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "body", ITA: "corpo", JPN: "体",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: '', ITA: '', JPN: '',},
	EX2: {ENG: '', ITA: '', JPN: '',},
	EX3: {ENG: '', ITA: '', JPN: '',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "neuron", engLperc: "neuron", engLplus: "neuron", engForv: "neuron/#en",
    itaLhyph: "neurone", itaLplus: "neurone", itaForv: "neurone/#it",
    jpnLpercen: "%E4%B9%97%E5%AE%A2", jpnLgoo: "107916/meaning/m1u/", jpnForv: "神経細胞/#ja",
	
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

8: {imgfile: "",
	imgsrc: "original",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",	

	dirmode: "down",
	LnContPosLeft: "82%",
	LnContPosTop: "59%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "12%",
	LnPosX1: "50%",
	LnPosY1: "75%",
	LnPosX2: "43%",
	LnPosY2: "40%",

	WI: {ENG: "brain", ITA: "cervello", JPN: "脳",},
	WIr: {ENG: "/breɪn/", ITA: "/tʃerˈvɛllo/", JPN: "nou", JPNRu: "<ruby>脳<rt>のう</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "body", ITA: "corpo", JPN: "体",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: '', ITA: '', JPN: '',},
	EX2: {ENG: '', ITA: '', JPN: '',},
	EX3: {ENG: '', ITA: '', JPN: '',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "brain", engLperc: "brain", engLplus: "brain", engForv: "brain/#en",
    itaLhyph: "cervello", itaLplus: "cervello", itaForv: "cervello/#it",
    jpnLpercen: "%E3%82%B9%E3%83%BC%E3%83%84%E3%82%B1%E3%83%BC%E3%82%B9", jpnLgoo: "117095/meaning/m1u/", jpnForv: "脳/#ja",

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
};

//var p00X = p003;
