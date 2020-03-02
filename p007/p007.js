
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
	WIr: {ENG: "/ɪnˈtɜːnl ˈɔːgənz/", ITA: "/ˈɔrɡani inˈtɛrni/", JPN: "naizou", JPNRu: "<ruby>内臓<rt>ないぞう</rt></ruby>",},
	
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
	EX1: {ENG: 'The stomach is one of the internal organs.', ITA: 'Lo stomaco è uno degli organi interni.', JPN: '胃は内臓の一つである。',},
	EX2: {ENG: 'The internal organs are the organs of the human body  not visible from outside.', ITA: 'Gli organi interni sono gli organi del corpo umano non visibili dall&#39;esterno', JPN: '内臓とは、外部からは見えない人体の臓器です。',},
	EX3: {ENG: 'The liver is the biggest internal organ of the human body.', ITA: 'Il fegato è l&#39;organo interno più grande del corpo umano', JPN: '肝臓は人体の最大の内臓です。',},

    //Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/28152", ITA: "https://tatoeba.org/eng/sentences/show/5707988", JPN: "https://tatoeba.org/eng/sentences/show/190992",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    // Dictionary search suffixes
    engLhyph: "internal-organs", engLperc: "internal%20organs", engLplus: "internal+organs", engForv: "internal_organs/#en",
    itaLhyph: "organi-interni", itaLplus: "organi+interni", itaForv: "organi_interni/#it",
    jpnLpercen: "%E5%86%85%E8%87%93", jpnLgoo: "55838/meaning/m1u/", jpnForv: "内臓/#ja",

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
	EX1: {ENG: 'The small intestine is about seven meters long.', ITA: 'Il piccolo intestino è lungo circa sette metri.', JPN: '小腸は７メートルくらいだ。',},
	EX2: {ENG: 'The intestine is the final part of the digestive system.', ITA: 'L&#39;intestino è la parte finale dell&#39;apparato digerente.', JPN: '腸は消化器系の最後の部分です。',},
	EX3: {ENG: 'The intestine is an organ always in movement.', ITA: 'L&#39;intestino è un organo sempre in movimento.', JPN: '腸は常に動いている器官です。',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/2275312", ITA: "https://tatoeba.org/eng/sentences/show/3942977", JPN: "https://tatoeba.org/eng/sentences/show/2279526",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "",},

    engLhyph: "intestine", engLperc: "intestine", engLplus: "intestine", engForv: "intestine/#en",
    itaLhyph: "intestino", itaLplus: "intestino", itaForv: "intestino/#it",
    jpnLpercen: "%E8%85%B8", jpnLgoo: "48649/meaning/m1u/", jpnForv: "腸/#ja",
	
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
	EX1: {ENG: 'He put his hand on his heart.', ITA: 'Mise la mano sul suo cuore.', JPN: '彼は胸に手を当てた。',},
	EX2: {ENG: 'My heart stopped beating.', ITA: 'Il mio cuore ha smesso di battere.', JPN: '私の心臓が止まるような気がした。',},
	EX3: {ENG: 'The heart is like a pump.', ITA: 'Il cuore è come un pompa.', JPN: '心臓はポンプのようなものです。',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/313264", ITA: "https://tatoeba.org/eng/sentences/show/602483", JPN: "https://tatoeba.org/eng/sentences/show/375957",},
	TatSrcEx2: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/251243", ITA: "https://tatoeba.org/eng/sentences/show/602491", JPN: "https://tatoeba.org/eng/sentences/show/163269",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "heart", engLperc: "heart", engLplus: "heart", engForv: "heart/#en",
    itaLhyph: "cuore", itaLplus: "cuore", itaForv: "cuore/#it",
    jpnLpercen: "%E5%BF%83%E8%87%93", jpnLgoo: "37826/meaning/m1u/", jpnForv: "心臓/#ja",
	
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

	WI: {ENG: "kidney", ITA: "rene", JPN: "腎臓",},
	WIr: {ENG: "/ˈkɪdni/", ITA: "/ˈrɛne/", JPN: "jinzou", JPNRu: "<ruby>腎臓<rt>じんぞう</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "body", ITA: "corpo", JPN: "体",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'I have kidney trouble.', ITA: 'Ho dei problemi ai reni.', JPN: '腎臓が悪いのです。',},
	EX2: {ENG: 'The kidney has the form of an American bean.', ITA: 'Il rene ha la forma di un fagiolo americano.', JPN: '腎臓はアメリカ豆の形をしています。',},
	EX3: {ENG: 'The primary function of the kidneys is to filter the blood.', ITA: 'La funzione principale dei reni è quella di filtrare il sangue.', JPN: '腎臓の主な機能は、血液をろ過することです。',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/270666", ITA: "https://tatoeba.org/eng/sentences/show/5387384", JPN: "https://tatoeba.org/eng/sentences/show/143900",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "kidney", engLperc: "kidney", engLplus: "kidney", engForv: "kidney/#en",
    itaLhyph: "rene", itaLplus: "rene", itaForv: "rene/#it",
    jpnLpercen: "%E8%85%8E%E8%87%93", jpnLgoo: "37854/meaning/m1u/", jpnForv: "腎臓/#ja",
	
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
	EX1: {ENG: 'The liver is the most complex organ of the human body.', ITA: 'Il fegato è l&#39;organo più complesso del corpo umano.', JPN: '肝臓は人体の最も複雑な器官です。',},
	EX2: {ENG: 'The liver weighs about 1000-1500 grams.', ITA: 'Il fegato pesa circa 1000-1500 grammi.', JPN: '肝臓の重量は約1000〜1500グラムです。',},
	EX3: {ENG: 'Some symptoms can indicate a problem with the liver.', ITA: 'Alcuni sintomi possono indicare un problema al fegato.', JPN: '一部の症状は、肝臓の問題を示している可能性があります。',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "liver", engLperc: "liver", engLplus: "liver", engForv: "liver/#en",
    itaLhyph: "fegato", itaLplus: "fegato", itaForv: "fegato/#it",
    jpnLpercen: "%E8%82%9D%E8%87%93", jpnLgoo: "14828/meaning/m1u/", jpnForv: "肝臓/#ja",
	
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
	EX1: {ENG: 'He died of lung cancer.', ITA: 'Morì di cancro ai polmoni.', JPN: '彼は肺がんで死んだ。',},
	EX2: {ENG: 'The human body contains two lungs.', ITA: ' Il corpo umano contiene due polmoni.', JPN: '人体には2つの肺があります。',},
	EX3: {ENG: 'The lungs have the task of providing oxygen to the body.', ITA: 'I polmoni hanno il compito di fornire ossigeno al corpo.', JPN: '肺には、身体に酸素を供給する役割があります。',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/302426", ITA: "https://tatoeba.org/eng/sentences/show/1299366", JPN: "https://tatoeba.org/eng/sentences/show/101271",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "lung", engLperc: "lung", engLplus: "lung", engForv: "lung/#en",
    itaLhyph: "polmone", itaLplus: "polmone", itaForv: "polmone/#it",
    jpnLpercen: "%E8%82%BA", jpnLgoo: "59475/meaning/m1u/", jpnForv: "肺/#ja",
	
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
	EX1: {ENG: 'Do you have a stomachache?', ITA: 'Hai il mal di stomaco?', JPN: 'お腹痛いの？',},
	EX2: {ENG: 'My stomach is full.', ITA: 'Ho lo stomaco pieno.', JPN: 'お腹がいっぱいです。',},
	EX3: {ENG: 'When you eat, the food goes quickly down into the stomach.', ITA: 'Quando mangi, il cibo scende rapidamente nello stomaco.', JPN: '食べると、食べ物はすぐに胃に落ちます。',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "https://tatoeba.org/eng/sentences/show/2786926", ITA: "https://tatoeba.org/eng/sentences/show/2715737", JPN: "https://tatoeba.org/eng/sentences/show/2771616",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "stomach", engLperc: "stomach", engLplus: "stomach", engForv: "stomach/#en",
    itaLhyph: "stomaco", itaLplus: "stomaco", itaForv: "stomaco/#it",
    jpnLpercen: "%E8%83%83", jpnLgoo: "2447/meaning/m1u/", jpnForv: "胃/#ja",
	
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
	EX1: {ENG: 'The neuron is a cell of the nervous system.', ITA: 'Il neurone è una cellula del sistema nervoso.', JPN: '神経細胞は神経系の細胞です。',},
	EX2: {ENG: 'There are over 86 billion neurons in the brain.', ITA: 'Ci sono oltre 86 miliardi di neuroni nel cervello', JPN: '脳には860億以上のニューロンがあります。',},
	EX3: {ENG: 'Neurons put into motion other organs.', ITA: 'I neuroni mettono in moto altri organi,', JPN: '神経細胞は他の器官を動かします。',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "neuron", engLperc: "neuron", engLplus: "neuron", engForv: "neuron/#en",
    itaLhyph: "neurone", itaLplus: "neurone", itaForv: "neurone/#it",
    jpnLpercen: "%E7%A5%9E%E7%B5%8C%E7%B4%B0%E8%83%9E", jpnLgoo: "37463/meaning/m1u/", jpnForv: "神経細胞/#ja",
	
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
	EX1: {ENG: 'The brain is found inside the skull.', ITA: 'Il cervello si trova all&#39;interno del cranio.', JPN: '脳は頭蓋骨の中にあります。',},
	EX2: {ENG: 'The brain is a complex organ that is part of the central nervous system.', ITA: 'Il cervello é un organo complesso che è parte del sistema nervoso centrale.', JPN: '脳は中枢神経系の一部である複雑な器官です。',},
	EX3: {ENG: 'He died after an operation to the brain.', ITA: 'É morto dopo un intervento al cervello', JPN: '彼は脳への手術後に死亡した。',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "brain", engLperc: "brain", engLplus: "brain", engForv: "brain/#en",
    itaLhyph: "cervello", itaLplus: "cervello", itaForv: "cervello/#it",
    jpnLpercen: "%E8%84%B3", jpnLgoo: "58764/meaning/m1u/", jpnForv: "脳/#ja",

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
