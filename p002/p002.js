
var p002 = {
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
No: "002",
Date: "21/09/2019",

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
	WI: {ENG: "body", ITA: "corpo", JPN: "体",},
	WIr: {ENG: "/ˈbɒd·i/", ITA: "/ˈkɔrpo/", JPN: "karada", JPNRu: "<ruby>体<rt>からだ</rt></ruby>",},
	
	//Sematic Tags
	//3 parametrs to get 1: display/hide, 2: text content, 3: class name (from ENG)
	semtag1: {Dsp: "block", ENG: "body", ITA: "corpo", JPN: "体",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	

	BtnContPosLeft: "82%",
	BtnContPosTop: "0%",
	BtnPosLeft: "5%",
	BtnPosTop: "25%",
	BtnTxtOffSet: "7%",
	BtnChar1: "digit0",
	BtnChar2: "digit0",
	BtnChar3: "digit7",

	//Examples
	EX1: {ENG: 'My <span class="wihlight">body</span> aches all over.', ITA: 'Ho dolori in tutto il <span class="wihlight">corpo</span>.', JPN: '<span class="wihlight">体</span>中が痛い。',},
	EX2: {ENG: 'He has red spots all over his <span class="wihlight">body</span>. ', ITA: 'Ha dei punti rossi su tutto il <span class="wihlight">corpo</span>. ', JPN: '赤いぶつぶつが<span class="wihlight">体</span>中にできています。',},
	EX3: {ENG: 'Blood circulates around the <span class="wihlight">body</span>. ', ITA: 'Il sangue circola attraverso il <span class="wihlight">corpo</span>.', JPN: '血液は<span class="wihlight">体</span>内を循環する。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/562053", ITA: "https://tatoeba.org/eng/sentences/show/4745138", JPN: "https://tatoeba.org/eng/sentences/show/226181",},
	TatSrcEx2: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/272287", ITA: "https://tatoeba.org/eng/sentences/show/3034528", JPN: "https://tatoeba.org/eng/sentences/show/142283",},
	TatSrcEx3: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/238769", ITA: "https://tatoeba.org/eng/sentences/show/1005812", JPN: "https://tatoeba.org/eng/sentences/show/175696",},
    
	// Dictionary search suffixes
    engLhyph: "body", engLperc: "body", engLplus: "body", engForv: "body/#en",
    itaLhyph: "corpo", itaLplus: "corpo", itaForv: "corpo/#it",
    jpnLpercen: "%E4%BD%93", jpnLgoo: "45827/meaning/m1u/", jpnForv: "体/#ja",

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
	imgattrsrcfle: "p002/imgsrcs/p002-wi1-src.png",
	imgattrsite: "openclipart.org",
	imgattrurl: "https://openclipart.org/image/2400px/svg_to_png/314198/1548372886.png",
	
	imgbckg: "wht",


	dirmode: "right",
	LnContPosLeft: "0%",
	LnContPosTop: "3%",
	BtnPosLeft: "0%",
	BtnPosTop: "0%",
	LnPosX1: "25%",
	LnPosY1: "25%",
	LnPosX2: "55%",
	LnPosY2: "55%",

	WI: {ENG: "man", ITA: "uomo", JPN: "男",},
	WIr: {ENG: "/mæn/", ITA: "/ˈwɔmo/", JPN: "otoko", JPNRu: "<ruby>男<rt>おとこ</rt></ruby>",},

    semtag1: {Dsp: "block", ENG: "body", ITA: "corpo", JPN: "体",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'She married a rich <span class="wihlight">man</span>.', ITA: 'Sposò un <span class="wihlight">uomo</span> ricco.', JPN: '彼女は金持ちの<span class="wihlight">男</span>と結婚した。',},
	EX2: {ENG: 'He was a tall <span class="wihlight">man</span>.', ITA: 'Era un <span class="wihlight">uomo</span> alto.', JPN: '彼は長身の<span class="wihlight">男</span>であった。',},
	EX3: {ENG: 'There were three <span class="wihlight">men</span>.', ITA: 'C&#39;erano tre <span class="wihlight">uomini</span>.', JPN: '<span class="wihlight">男</span>が三人いた。',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/310617", ITA: "https://tatoeba.org/eng/sentences/show/383179", JPN: "https://tatoeba.org/eng/sentences/show/90397",},
	TatSrcEx2: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/301645", ITA: "https://tatoeba.org/eng/sentences/show/1258300", JPN: "https://tatoeba.org/eng/sentences/show/102048",},
	TatSrcEx3: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/72664", ITA: "https://tatoeba.org/eng/sentences/show/1266623", JPN: "https://tatoeba.org/eng/sentences/show/3468493",},

    engLhyph: "man", engLperc: "man", engLplus: "man", engForv: "man/#en",
    itaLhyph: "uomo", itaLplus: "uomo", itaForv: "uomo/#it",
    jpnLpercen: "%e7%94%b7", jpnLgoo: "27046/meaning/m1u/", jpnForv: "男/#ja",
	
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
	imgsrc: "deriv",
	imgsrccr: "public domain",
	imgattrsrcfle: "p002/imgsrcs/p002-wi2-src.png",
	imgattrsite: "openclipart.org",
	imgattrurl: "https://openclipart.org/image/2400px/svg_to_png/279283/Female-Body-Silhouette.png",
	
	imgbckg: "wht",

	dirmode: "right",
	LnContPosLeft: "13%",
	LnContPosTop: "3%",
	BtnPosLeft: "9%",
	BtnPosTop: "0%",
	LnPosX1: "75%",
	LnPosY1: "25%",
	LnPosX2: "45%",
	LnPosY2: "55%",

	WI: {ENG: "woman", ITA: "donna", JPN: "女",},
	WIr: {ENG: "/ˈwʊm·ən/", ITA: "/ˈdɔnna/", JPN: "onna", JPNRu: "<ruby>女<rt>おんな</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "body", ITA: "corpo", JPN: "体",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'Who is that <span class="wihlight">woman</span>?', ITA: 'Chi è quella <span class="wihlight">donna</span>?', JPN: 'あの<span class="wihlight">女</span>の人はだれですか。',},
	EX2: {ENG: 'Where did you see the <span class="wihlight">woman</span>?', ITA: 'Dove hai visto la <span class="wihlight">donna</span>?', JPN: 'あなたはどこでその<span class="wihlight">女</span>の人を見ましたか。',},
	EX3: {ENG: 'I saw a <span class="wihlight">woman</span> cross the street.', ITA: 'Vidi una <span class="wihlight">donna</span> attraversare la strada.', JPN: '私は、一人の<span class="wihlight">女</span>の人が通りを横切るのを見た。',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/68238", ITA: "https://tatoeba.org/eng/sentences/show/359419", JPN: "https://tatoeba.org/eng/sentences/show/230871",},
	TatSrcEx2: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/69862", ITA: "https://tatoeba.org/eng/sentences/show/3636666", JPN: "https://tatoeba.org/eng/sentences/show/232492",},
	TatSrcEx3: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/252218", ITA: "https://tatoeba.org/eng/sentences/show/1134004", JPN: "https://tatoeba.org/eng/sentences/show/162296",},

    engLhyph: "woman", engLperc: "woman", engLplus: "woman", engForv: "woman/#en",
    itaLhyph: "donna", itaLplus: "donna", itaForv: "donna/#it",
    jpnLpercen: "%e5%a5%b3", jpnLgoo: "34574/meaning/m1u/", jpnForv: "女/#ja",
	
	// Part of Speech Data
	PoSp1: {ENG: {ENG: "noun", ITA: "noun", JPN: "noun",}, 
			ITA: {ENG: "sostantivo", ITA: "sostantivo", JPN: "sostantivo",},
			JPN: {ENG: "可算", ITA: "可算", JPN: "可算",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "femm.", JPN: "",}, 
			ITA: {ENG: "", ITA: "femm.", JPN: "",},
			JPN: {ENG: "名詞", ITA: "名詞", JPN: "名詞",},
			},
	PoSp3: {ENG: {ENG: "", ITA: "", JPN: "",}, 
			ITA: {ENG: "", ITA: "", JPN: "",},
			JPN: {ENG: "", ITA: "女性形", JPN: "",},
			},	

    //Audio
	AudENGWI: "", AudENGEx1: "", AudENGEx2: "", AudENGEx3: "",
    AudITAWI: "", AudITAEx1: "", AudITAEx2: "", AudITAEx3: "",
    AudJPNWI: "", AudJPNEx1: "", AudJPNEx2: "", AudJPNEx3: "",
	},

3: {imgfile: "",
	imgsrc: "deriv",
	imgsrccr: "public domain",
	imgattrsrcfle: "p002/imgsrcs/p002-wi1-src.png",
	imgattrsite: "openclipart.org",
	imgattrurl: "https://openclipart.org/image/2400px/svg_to_png/314198/1548372886.png",
		
	imgbckg: "wht",

	dirmode: "down",
	LnContPosLeft: "64%",
	LnContPosTop: "76%",
	BtnPosLeft: "9%",
	BtnPosTop: "6%",
	LnPosX1: "75%",
	LnPosY1: "50%",
	LnPosX2: "35%",
	LnPosY2: "50%",

	WI: {ENG: "foot", ITA: "piede", JPN: "足",},
	WIr: {ENG: "/fʊt/", ITA: "/ˈpjɛde/", JPN: "ashi", JPNRu: "<ruby>足<rt>あし</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "body", ITA: "corpo", JPN: "体",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'She has small <span class="wihlight">feet</span>.', ITA: 'Lei ha i <span class="wihlight">piedi</span> piccoli.', JPN: '彼女は<span class="wihlight">足</span>が小さい。',},
	EX2: {ENG: 'My <span class="wihlight">feet</span> are cold.', ITA: 'Ho freddo ai <span class="wihlight">piedi</span>.', JPN: '<span class="wihlight">足</span>が冷えます。',},
	EX3: {ENG: 'He put his <span class="wihlight">foot</span> on the ladder.', ITA: 'Ha messo il <span class="wihlight">piede</span> sulla scala.', JPN: '彼ははしごに片<span class="wihlight">足</span>を掛けた。',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/315604", ITA: "https://tatoeba.org/eng/sentences/show/708351", JPN: "https://tatoeba.org/eng/sentences/show/88102",},
	TatSrcEx2: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/274468", ITA: "https://tatoeba.org/eng/sentences/show/2576245", JPN: "https://tatoeba.org/eng/sentences/show/139873",},
	TatSrcEx3: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/292381", ITA: "https://tatoeba.org/eng/sentences/show/1067371", JPN: "https://tatoeba.org/eng/sentences/show/111302",},

    engLhyph: "foot", engLperc: "foot", engLplus: "foot", engForv: "foot/#en",
    itaLhyph: "piede", itaLplus: "piede", itaForv: "piede/#it",
    jpnLpercen: "%e8%b6%b3", jpnLgoo: "3635/meaning/m1u/", jpnForv: "足/#ja",
	
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
	imgsrc: "deriv",
	imgsrccr: "public domain",
	imgattrsrcfle: "p002/imgsrcs/p002-wi1-src.png",
	imgattrsite: "openclipart.org",
	imgattrurl: "https://openclipart.org/image/2400px/svg_to_png/314198/1548372886.png",
		
	imgbckg: "wht",

	dirmode: "up",
	LnContPosLeft: "64%",
	LnContPosTop: "51%",
	BtnPosLeft: "9%",
	BtnPosTop: "6%",
	LnPosX1: "75%",
	LnPosY1: "50%",
	LnPosX2: "35%",
	LnPosY2: "50%",

	WI: {ENG: "leg", ITA: "gamba", JPN: "脚",},
	WIr: {ENG: "/leɡ/", ITA: "/ˈɡamba/", JPN: "ashi", JPNRu: "<ruby>脚<rt>あし</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "body", ITA: "corpo", JPN: "体",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'I broke my <span class="wihlight">leg</span>.', ITA: 'Mi sono rotta la <span class="wihlight">gamba</span>.', JPN: '私は<span class="wihlight">足</span>を骨折した。',},
	EX2: {ENG: 'His <span class="wihlight">leg</span> was bitten by a crocodile.', ITA: 'La sua <span class="wihlight">gamba</span> è stata morsa da un coccodrillo.', JPN: '出彼の<span class="wihlight">足</span>はワニにかまれた。',},
	EX3: {ENG: 'Which <span class="wihlight">leg</span> hurts?', ITA: 'Quale <span class="wihlight">gamba</span> fa male?', JPN: 'どっちの<span class="wihlight">脚</span>が痛むの？',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/259242", ITA: "https://tatoeba.org/eng/sentences/show/390628", JPN: "https://tatoeba.org/eng/sentences/show/155297",},
	TatSrcEx2: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/287066", ITA: "https://tatoeba.org/eng/sentences/show/6596753", JPN: "https://tatoeba.org/eng/sentences/show/116603",},
	TatSrcEx3: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/3326794", ITA: "https://tatoeba.org/eng/sentences/show/3326814", JPN: "https://tatoeba.org/eng/sentences/show/3366828",},

    engLhyph: "leg", engLperc: "leg", engLplus: "leg", engForv: "leg/#en",
    itaLhyph: "gamba", itaLplus: "gamba", itaForv: "gamba/#it",
    jpnLpercen: "%e8%84%9a", jpnLgoo: "3635/meaning/m1u/", jpnForv: "脚/#ja",
	
	
	// Part of Speech Data
	PoSp1: {ENG: {ENG: "noun", ITA: "noun", JPN: "noun",}, 
			ITA: {ENG: "sostantivo", ITA: "sostantivo", JPN: "sostantivo",},
			JPN: {ENG: "可算", ITA: "可算", JPN: "可算",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "femm.", JPN: "",}, 
			ITA: {ENG: "", ITA: "femm.", JPN: "",},
			JPN: {ENG: "名詞", ITA: "名詞", JPN: "名詞",},
			},
	PoSp3: {ENG: {ENG: "", ITA: "", JPN: "",}, 
			ITA: {ENG: "", ITA: "", JPN: "",},
			JPN: {ENG: "", ITA: "女性形", JPN: "",},
			},

    //Audio
	AudENGWI: "", AudENGEx1: "", AudENGEx2: "", AudENGEx3: "",
    AudITAWI: "", AudITAEx1: "", AudITAEx2: "", AudITAEx3: "",
    AudJPNWI: "", AudJPNEx1: "", AudJPNEx2: "", AudJPNEx3: "",
	},

5: {imgfile: "",
	imgsrc: "deriv",
	imgsrccr: "public domain",
	imgattrsrcfle: "p002/imgsrcs/p002-wi1-src.png",
	imgattrsite: "openclipart.org",
	imgattrurl: "https://openclipart.org/image/2400px/svg_to_png/314198/1548372886.png",
	
	imgbckg: "wht",

	dirmode: "downleft",
	LnContPosLeft: "45%",
	LnContPosTop: "39%",
	BtnPosLeft: "0%",
	BtnPosTop: "6%",
	LnPosX1: "25%",
	LnPosY1: "50%",
	LnPosX2: "65%",
	LnPosY2: "50%",

	WI: {ENG: "hand", ITA: "mano", JPN: "手",},
	WIr: {ENG: "/hænd/", ITA: "/ˈmano/", JPN: "te", JPNRu: "<ruby>手<rt>て</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "body", ITA: "corpo", JPN: "体",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'Wash your <span class="wihlight">hands</span>.', ITA: 'Lavati le <span class="wihlight">mani</span>.', JPN: '<span class="wihlight">手</span>を洗いなさい。',},
	EX2: {ENG: 'What&#39;s in your <span class="wihlight">hand</span?', ITA: 'Cosa hai in <span class="wihlight">mano</span>?', JPN: '<span class="wihlight">手</span>に何をもっていますか。',},
	EX3: {ENG: 'She raised her <span class="wihlight">hand</span>.', ITA: 'Ha alzato la <span class="wihlight">mano</span>.', JPN: '彼女は<span class="wihlight">手</span>を上げた。',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/464330", ITA: "https://tatoeba.org/eng/sentences/show/3756273", JPN: "https://tatoeba.org/eng/sentences/show/148622",},
	TatSrcEx2: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/69234", ITA: "https://tatoeba.org/eng/sentences/show/717902", JPN: "https://tatoeba.org/eng/sentences/show/148654",},
	TatSrcEx3: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/314875", ITA: "https://tatoeba.org/eng/sentences/show/962170", JPN: "https://tatoeba.org/eng/sentences/show/88832",},


    engLhyph: "hand", engLperc: "hand", engLplus: "hand", engForv: "hand/#en",
    itaLhyph: "mano", itaLplus: "mano", itaForv: "mano/#it",
    jpnLpercen: "%e6%89%8b", jpnLgoo: "148831/meaning/m1u/", jpnForv: "手/#ja",
	
	PoSp1: {ENG: {ENG: "noun", ITA: "noun", JPN: "noun",}, 
			ITA: {ENG: "sostantivo", ITA: "sostantivo", JPN: "sostantivo",},
			JPN: {ENG: "可算", ITA: "可算", JPN: "可算",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "femm.", JPN: "",}, 
			ITA: {ENG: "", ITA: "femm.", JPN: "",},
			JPN: {ENG: "名詞", ITA: "名詞", JPN: "名詞",},
			},
	PoSp3: {ENG: {ENG: "", ITA: "", JPN: "",}, 
			ITA: {ENG: "", ITA: "", JPN: "",},
			JPN: {ENG: "", ITA: "女性形", JPN: "",},
			},

   //Audio
	AudENGWI: "", AudENGEx1: "", AudENGEx2: "", AudENGEx3: "",
    AudITAWI: "", AudITAEx1: "", AudITAEx2: "", AudITAEx3: "",
    AudJPNWI: "", AudJPNEx1: "", AudJPNEx2: "", AudJPNEx3: "",
	},

6: {imgfile: "",
	imgsrc: "deriv",
	imgsrccr: "public domain",
	imgattrsrcfle: "p002/imgsrcs/p002-wi1-src.png",
	imgattrsite: "openclipart.org",
	imgattrurl: "https://openclipart.org/image/2400px/svg_to_png/314198/1548372886.png",
	
	imgbckg: "wht",

	dirmode: "up",
	LnContPosLeft: "47%",
	LnContPosTop: "24%",
	BtnPosLeft: "0%",
	BtnPosTop: "6%",
	LnPosX1: "25%",
	LnPosY1: "50%",
	LnPosX2: "65%",
	LnPosY2: "50%",

	WI: {ENG: "arm", ITA: "braccio", JPN: "腕",},
	WIr: {ENG: "/ɑːm/", ITA: "/ˈbrattʃo/", JPN: "ude", JPNRu: "<ruby>腕<rt>うで</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "body", ITA: "corpo", JPN: "体",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'The policeman caught the man by the <span class="wihlight">arm</span>.', ITA: 'Il poliziotto prese l&#39;uomo per il <span class="wihlight">braccio</span>.', JPN: '警官はその男の<span class="wihlight">腕</span>をつかまえた。',},
	EX2: {ENG: 'He watched the Sumo wrestling with folded <span class="wihlight">arms</span>.', ITA: 'Lui guardava il sumo con le <span class="wihlight">braccia</span> incrociate.', JPN: '彼は相撲を、<span class="wihlight">腕</span>組をしてみつめていた。',},
	EX3: {ENG: 'Let go of my <span class="wihlight">arm</span>!', ITA: 'Mi lasci andare il <span class="wihlight">braccio</span!', JPN: '<span class="wihlight">腕</span>を放して。',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/238101", ITA: "https://tatoeba.org/eng/sentences/show/1317057", JPN: "https://tatoeba.org/eng/sentences/show/176363",},
	TatSrcEx2: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/300870", ITA: "https://tatoeba.org/eng/sentences/show/2449877", JPN: "https://tatoeba.org/eng/sentences/show/102824",},
	TatSrcEx3: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/326609", ITA: "https://tatoeba.org/eng/sentences/show/2716252", JPN: "https://tatoeba.org/eng/sentences/show/77111",},

    engLhyph: "arm", engLperc: "arm", engLplus: "arm", engForv: "arm/#en",
    itaLhyph: "braccio", itaLplus: "braccio", itaForv: "braccio/#it",
    jpnLpercen: "%e8%85%95", jpnLgoo: "19888/meaning/m1u/", jpnForv: "腕/#ja",
	
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
	imgsrccr: "public domain",
	imgattrsrcfle: "p002/imgsrcs/p002-wi1-src.png",
	imgattrsite: "openclipart.org",
	imgattrurl: "https://openclipart.org/image/2400px/svg_to_png/314198/1548372886.png",
	
	imgbckg: "wht",

	dirmode: "down",
	LnContPosLeft: "59%",
	LnContPosTop: "20%",
	BtnPosLeft: "9%",
	BtnPosTop: "0%",
	LnPosX1: "75%",
	LnPosY1: "25%",
	LnPosX2: "45%",
	LnPosY2: "55%",

	WI: {ENG: "chest", ITA: "petto", JPN: "胸",},
	WIr: {ENG: "/tʃest/", ITA: "/ˈpɛtto/", JPN: "mune", JPNRu: "<ruby>胸<rt>むね</rt></ruby>",},


	semtag1: {Dsp: "block", ENG: "body", ITA: "corpo", JPN: "体",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'Tom has a tattoo on his <span class="wihlight">chest</span>.', ITA: 'Tom ha un tatuaggio sul <span class="wihlight">petto</span>.', JPN: 'トムは<span class="wihlight">胸</span>にタツーがある。',},
	EX2: {ENG: 'I have pain in my <span class="wihlight">chest</span>.', ITA: 'Ho un dolore nel <span class="wihlight">petto</span>.', JPN: '<span class="wihlight">胸</span>がいたい。',},
	EX3: {ENG: 'He grabbed his <span class="wihlight">chest</span> and collapsed.', ITA: 'Si è stretto il <span class="wihlight">petto</span> ed è crollato.', JPN: '彼は<span class="wihlight">胸</span>を握りしめて倒れた。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
    engLhyph: "chest", engLperc: "chest", engLplus: "chest", engForv: "chest/#en",
    itaLhyph: "petto", itaLplus: "petto", itaForv: "petto/#it",
    jpnLpercen: "%e8%83%b8", jpnLgoo: "215770/meaning/m1u/", jpnForv: "胸/#ja",
	
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
	imgsrc: "deriv",
	imgsrccr: "public domain",
	imgattrsrcfle: "p002/imgsrcs/p002-wi1-src.png",
	imgattrsite: "openclipart.org",
	imgattrurl: "https://openclipart.org/image/2400px/svg_to_png/314198/1548372886.png",
	
	imgbckg: "wht",

	dirmode: "up",
	LnContPosLeft: "56%",
	LnContPosTop: "0%",
	BtnPosLeft: "0%",
	BtnPosTop: "0%",
	LnPosX1: "25%",
	LnPosY1: "25%",
	LnPosX2: "55%",
	LnPosY2: "55%",
	
	WI: {ENG: "head", ITA: "testa", JPN: "頭",},
	WIr: {ENG: "/hed/", ITA: "/ˈtɛsta/", JPN: "atama", JPNRu: "<ruby>頭<rt>あたま</rt></ruby>",},
	
	
	semtag1: {Dsp: "block", ENG: "body", ITA: "corpo", JPN: "体",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'Watch your <span class="wihlight">head</span>!', ITA: 'Occhio alla <span class="wihlight">testa</span>!', JPN: '<span class="wihlight">頭</span>上に気をつけて！',},
	EX2: {ENG: 'He hit me on the <span class="wihlight">head</span>.', ITA: 'Mi ha colpito sulla <span class="wihlight">testa</span>.', JPN: '彼は僕の<span class="wihlight">頭</span>を殴った。',},
	EX3: {ENG: 'He scratched his <span class="wihlight">head</span>.', ITA: 'Si è grattato la <span class="wihlight">testa</span>.', JPN: '彼は<span class="wihlight">頭</span>をかいた',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/280135", ITA: "https://tatoeba.org/eng/sentences/show/2158008", JPN: "https://tatoeba.org/eng/sentences/show/2158008",},
	TatSrcEx2: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/303763", ITA: "https://tatoeba.org/eng/sentences/show/937783", JPN: "https://tatoeba.org/eng/sentences/show/99934",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},


    engLhyph: "head", engLperc: "head", engLplus: "head", engForv: "head/#en",
    itaLhyph: "testa", itaLplus: "testa", itaForv: "testa/#it",
    jpnLpercen: "%e9%a0%ad", jpnLgoo: "4583/meaning/m1u/", jpnForv: "頭/#ja",

	PoSp1: {ENG: {ENG: "noun", ITA: "noun", JPN: "noun",}, 
			ITA: {ENG: "sostantivo", ITA: "sostantivo", JPN: "sostantivo",},
			JPN: {ENG: "可算", ITA: "可算", JPN: "可算",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "femm.", JPN: "",}, 
			ITA: {ENG: "", ITA: "femm.", JPN: "",},
			JPN: {ENG: "名詞", ITA: "名詞", JPN: "名詞",},
			},
	PoSp3: {ENG: {ENG: "", ITA: "", JPN: "",}, 
			ITA: {ENG: "", ITA: "", JPN: "",},
			JPN: {ENG: "", ITA: "女性形", JPN: "",},
			},

    //Audio
	AudENGWI: "", AudENGEx1: "", AudENGEx2: "", AudENGEx3: "",
    AudITAWI: "", AudITAEx1: "", AudITAEx2: "", AudITAEx3: "",
    AudJPNWI: "", AudJPNEx1: "", AudJPNEx2: "", AudJPNEx3: "",
	},
};

//var p00X = 007;