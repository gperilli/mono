
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
	WIr: {ENG: "/pɑːk/", ITA: "/ˈparko/", JPN: "kouen", JPNRu: "<ruby>公園<rt>こうえん</rt></ruby>",},
	
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

	//Examples
	EX1: {ENG: 'There&#39;s a pond in the center of the <span class="wihlight">park</span>.', ITA: 'C&#39;è uno stagno in mezzo al <span class="wihlight">parco</span>.', JPN: '<span class="wihlight">公園</span>の中央に池がある。',},
	EX2: {ENG: 'Dad is taking a walk in the <span class="wihlight">park</span>.', ITA: 'Papà sta facendo una passeggiata nel <span class="wihlight">parco</span>.', JPN: '父は<span class="wihlight">公園</span>を散歩している。',},
	EX3: {ENG: 'The children were playing in the <span class="wihlight">park</span>.', ITA: 'I bambini stavano giocando nel <span class="wihlight">parco</span>.', JPN: '子供たちが<span class="wihlight">公園</span>で遊んでいた。',},
    
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/240441", ITA: "https://tatoeba.org/eng/sentences/show/1545855", JPN: "https://tatoeba.org/eng/sentences/show/174029",},
	TatSrcEx2: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/1556543", ITA: "https://tatoeba.org/eng/sentences/show/2142995", JPN: "https://tatoeba.org/eng/sentences/show/1522699",},
	TatSrcEx3: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/245691", ITA: "https://tatoeba.org/eng/sentences/show/3488782", JPN: "https://tatoeba.org/eng/sentences/show/168800",},
	
	// Dictionary search suffixes
    engLhyph: "park", engLperc: "park", engLplus: "park", engForv: "park/#en",
    itaLhyph: "parco", itaLplus: "parco", itaForv: "parco/#it",
    jpnLpercen: "%E5%85%AC%E5%9C%92", jpnLgoo: "71817/meaning/m1u/", jpnForv: "公園/#ja",

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
	WIr: {ENG: "/triː/", ITA: "/ˈalbero/", JPN: "ki", JPNRu: "<ruby>木<rt>き</rt></ruby>",},

    semtag1: {Dsp: "block", ENG: "plants", ITA: "piante", JPN: "植物",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'The <span class="wihlight">tree</span> fell down.', ITA: 'L&#39;<span class="wihlight">albero</span> è caduto.', JPN: '<span class="wihlight">木</span>が倒れた。',},
	EX2: {ENG: 'Monkeys climb <span class="wihlight">trees</span>.', ITA: 'Le scimmie si arrampicano sugli <span class="wihlight">alberi</span>.', JPN: '猿は<span class="wihlight">木</span>に登る。',},
	EX3: {ENG: 'This is a very tall <span class="wihlight">tree</span>.', ITA: 'Questo è un <span class="wihlight">albero</span> molto alto.', JPN: 'これはとても高い<span class="wihlight">木</span>です。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/323574", ITA: "https://tatoeba.org/eng/sentences/show/6555484", JPN: "https://tatoeba.org/eng/sentences/show/80143",},
	TatSrcEx2: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/25868", ITA: "https://tatoeba.org/eng/sentences/show/1980357", JPN: "https://tatoeba.org/eng/sentences/show/188723",},
	TatSrcEx3: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/55879", ITA: "https://tatoeba.org/eng/sentences/show/2601465", JPN: "https://tatoeba.org/eng/sentences/show/218565",},

    engLhyph: "tree", engLperc: "tree", engLplus: "tree", engForv: "tree/#en",
    itaLhyph: "albero", itaLplus: "albero", itaForv: "albero/#it",
    jpnLpercen: "%E6%9C%A8", jpnLgoo: "50048/meaning/m1u/", jpnForv: "木/#ja",
	
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

	WI: {ENG: "branch", ITA: "ramo", JPN: "枝",},
	WIr: {ENG: "/brɑːnʧ/", ITA: "/ˈramo/", JPN: "eda", JPNRu: "<ruby>枝<rt>えだ</rt></ruby>",},

	semtag1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'I cut a <span class="wihlight">branch</span> from the tree.', ITA: 'Ho tagliato un <span class="wihlight">ramo</span> dall&#39;albero.', JPN: 'その木の<span class="wihlight">枝</span>を切った。',},
	EX2: {ENG: 'Carl sat on a <span class="wihlight">branch</span> of the tree.', ITA: 'Carlo stava seduto su un <span class="wihlight">ramo</span> dell&#39;albero.', JPN: 'カールは木の<span class="wihlight">枝</span>の上に座っていた。',},
	EX3: {ENG: 'The cat hid between the <span class="wihlight">branches</span>.', ITA: 'Il gatto si è nascosto tra i <span class="wihlight">rami</span>.', JPN: '猫は<span class="wihlight">枝</span>の間に隠れた。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/282055", ITA: "https://tatoeba.org/eng/sentences/show/3377481", JPN: "https://tatoeba.org/eng/sentences/show/121948",},

    engLhyph: "branch", engLperc: "branch", engLplus: "branch", engForv: "branch/#en",
    itaLhyph: "ramo", itaLplus: "ramo", itaForv: "ramo/#it",
    jpnLpercen: "%E6%9E%9D", jpnLgoo: "23896/meaning/m1u/", jpnForv: "枝/#ja",
	
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

	WI: {ENG: "leaf", ITA: "foglia", JPN: "葉っぱ",},
	WIr: {ENG: "/liːf/", ITA: "/ˈfɔʎʎa/", JPN: "happa", JPNRu: "<ruby>葉っぱ<rt>はっぱ</rt></ruby>",},

	semtag1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'In autumn the <span class="wihlight">leaves</span> fall from the branches', ITA: 'In autunno le <span class="wihlight">foglie</span> cadono dai rami.', JPN: '秋には、木から<span class="wihlight">葉</span>が落ちる。',},
	EX2: {ENG: 'The <span class="wihlight">leaves</span> turn red in the fall.', ITA: 'Le <span class="wihlight">foglie</span> diventano rosse d&#39;autunno.', JPN: 'その<span class="wihlight">葉</span>は秋に赤くなる。',},
	EX3: {ENG: 'From waht tree is this <span class="wihlight">leaf</span>?', ITA: 'Di che albero è questa <span class="wihlight">foglia</span>?', JPN: 'この<span class="wihlight">葉っぱ</span>はどこの木からですか。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/43510", ITA: "https://tatoeba.org/eng/sentences/show/3519742", JPN: "https://tatoeba.org/eng/sentences/show/206264",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
    engLhyph: "leaf", engLperc: "leaf", engLplus: "leaf", engForv: "leaf/#en",
    itaLhyph: "foglio", itaLplus: "foglio", itaForv: "foglio/#it",
    jpnLpercen: "%E8%91%89%E3%81%A3%E3%81%B1", jpnLgoo: "172797/meaning/m1u/", jpnForv: "葉っぱ/#ja",
	
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
	WIr: {ENG: "/bɛnʧ/", ITA: "/panˈkina/", JPN: "benchi", JPNRu: "<ruby>ベンチ<rt>べんち</rt></ruby>",},


	semtag1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'Sit on the <span class="wihlight">bench</span>.', ITA: 'Siediti sulla <span class="wihlight">panchina</span>.', JPN: '<span class="wihlight">ベンチ</span>に座りなさい。',},
	EX2: {ENG: 'Someone has left a bag on the <span class="wihlight">bench</span>.', ITA: 'Qualcuno lasciò una borsa sulla <span class="wihlight">panchina</span>.', JPN: 'だれかが<span class="wihlight">ベンチ</span>にかばんを置き忘れました。',},
	EX3: {ENG: 'Why did you paint the <span class="wihlight">benches</span> red?', ITA: 'Perché hai dipinto le <span class="wihlight">panchine</span> di rosso?', JPN: 'どうして<span class="wihlight">ベンチ</span>を赤く塗ったのですか。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/33808", ITA: "https://tatoeba.org/eng/sentences/show/836249", JPN: "https://tatoeba.org/eng/sentences/show/196629",},
	TatSrcEx2: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/40473", ITA: "https://tatoeba.org/eng/sentences/show/1004008", JPN: "https://tatoeba.org/eng/sentences/show/203237",},
	TatSrcEx3: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/282055", ITA: "https://tatoeba.org/eng/sentences/show/3377481", JPN: "https://tatoeba.org/eng/sentences/show/121948",},
	
    engLhyph: "bench", engLperc: "bench", engLplus: "bench", engForv: "bench/#en",
    itaLhyph: "panchina", itaLplus: "panchina", itaForv: "panchina/#it",
    jpnLpercen: "%E3%83%99%E3%83%B3%E3%83%81", jpnLgoo: "200500/meaning/m1u/", jpnForv: "ベンチ/#ja",
	
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
		JPN: {ENG: "", ITA: "女性形", JPN: "",},
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
	WIr: {ENG: "/weɪst bɪn/", ITA: "/tʃesˈtino 'dei riˈfjuti/", JPN: "gomibako", JPNRu: "<ruby>ゴミ箱<rt>ごみばこ</rt></ruby>",},


	semtag1: {Dsp: "block", ENG: "furniture", ITA: "mobili", JPN: "家具",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: "Tom threw the apple in the <span class="wihlight">waste bin</span>.", ITA: "Tom ha buttato la mela nel <span class="wihlight">cestino dei rifiuti</span>.", JPN: "トムはりんごを<span class="wihlight">ゴミ箱</span>に捨てた。",},
	EX2: {ENG: "I saw him throw away his clothes in the <span class="wihlight">waste bin</span>.", ITA: "l'ho visto gettare i suoi vestiti nel <span class="wihlight">cestino dei rifiuti</span>.", JPN: "彼が服を<span class="wihlight">ゴミ箱</span>に捨てるのを見た。",},
	EX3: {ENG: "Where is the <span class="wihlight">waste bin</span>?.", ITA: "Dov'è il <span class="wihlight">cestino dei rifiuti</span>?", JPN: "<span class="wihlight">ゴミ箱</span>はどこですか。",},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "waste-bin", engLperc: "waste%20bin", engLplus: "waste+bin", engForv: "waste_bin/#en",
    itaLhyph: "cestino", itaLplus: "cestino", itaForv: "cestino/#it",
    jpnLpercen: "%E3%82%B4%E3%83%9F%E7%AE%B1", jpnLgoo: "82043/meaning/m1u/", jpnForv: "ゴミ箱/#ja",
	
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
	WIr: {ENG: "/klaʊd/", ITA: "/ˈnuvolo/", JPN: "kumo", JPNRu: "<ruby>雲<rt>くも</rt></ruby>",},

	semtag1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: "I will buy the tickets.", ITA: "Comprerò i biglietti.", JPN: "私がチケットを買うよ。",},
	EX2: {ENG: "Do you have the tickets?", ITA: "Avete i biglietti?", JPN: "チケットを持っていますか？",},
	EX3: {ENG: "He was checking a ticket.", ITA: "Controllava un biglietto.", JPN: "彼はチケットを確認していた。",},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/282055", ITA: "https://tatoeba.org/eng/sentences/show/3377481", JPN: "https://tatoeba.org/eng/sentences/show/121948",},
	
    engLhyph: "cloud", engLperc: "cloud", engLplus: "cloud", engForv: "cloud/#en",
    itaLhyph: "nuvolo", itaLplus: "nuvolo", itaForv: "nuvolo/#it",
    jpnLpercen: "%E9%9B%B2", jpnLgoo: "63094/meaning/m1u/", jpnForv: "雲/#ja",
	
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

	WI: {ENG: "bird", ITA: "uccello", JPN: "鳥",},
	WIr: {ENG: "/bɜːd/", ITA: "/utˈtʃɛllo/", JPN: "tori", JPNRu: "<ruby>鳥<rt>とり</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "animals", ITA: "animali", JPN: "動物",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: "There were fifty passengers on the plane.", ITA: "C'erano cinquanta passeggeri sull'aereo.", JPN: "飛行機には50人の乗客がいた。",},
	EX2: {ENG: "The train was full of passengers.", ITA: "Il treno era pieno di passeggeri.", JPN: "列車には乗客がいっぱいだった。",},
	EX3: {ENG: "He was a passenger on the Flight 627.", ITA: "Era un passeggero del volo 627.", JPN: "彼は627便の乗客だった。",},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/282055", ITA: "https://tatoeba.org/eng/sentences/show/3377481", JPN: "https://tatoeba.org/eng/sentences/show/121948",},

    engLhyph: "bird", engLperc: "bird", engLplus: "bird", engForv: "bird/#en",
    itaLhyph: "uccello", itaLplus: "uccello", itaForv: "uccello/#it",
    jpnLpercen: "%E9%B3%A5", jpnLgoo: "160952/meaning/m1u/", jpnForv: "鳥/#ja",
	
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
	WIr: {ENG: "/sʌn/", ITA: "/ˈsole/", JPN: "taiyou", JPNRu: "<ruby>太陽<rt>たいよう</rt></ruby>",},

	semtag1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'Take this <span class="wihlight">suitcase</span> and put it on the bed.', ITA: 'Prendi questa <span class="wihlight">valigia</span> e mettila sul letto.', JPN: 'この<span class="wihlight">スーツケース</span>を持ってベッドの上に置いてください。',},
	EX2: {ENG: 'Open your <span class="wihlight">suitcase</span>.', ITA: 'Apri la tua <span class="wihlight">valigia</span>.', JPN: '<span class="wihlight">スーツケース</span>を開けてください。',},
	EX3: {ENG: 'Which is your <span class="wihlight">suitcase</span>?', ITA: 'Qual è la tua <span class="wihlight">valigia</span>?', JPN: 'どれがあなたの<span class="wihlight">スーツケース</span>ですか？',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/282055", ITA: "https://tatoeba.org/eng/sentences/show/3377481", JPN: "https://tatoeba.org/eng/sentences/show/121948",},
	
    engLhyph: "sun", engLperc: "sun", engLplus: "sun", engForv: "sun/#en",
    itaLhyph: "sole", itaLplus: "sole", itaForv: "sole/#it",
    jpnLpercen: "%E5%A4%AA%E9%99%BD", jpnLgoo: "134682/meaning/m1u/", jpnForv: "太陽/#ja",

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

//var p00X = 007;
