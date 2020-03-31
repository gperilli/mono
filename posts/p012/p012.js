
var p012 = {

No: "012",
Date: "30/03/2020",
AnnotType: "Annot",

0: {imgfile: "",
	imgsrc: "deriv", imgattrsrcfle: "", 
	imgattrsite: "", imgattrurl: "", 
		
	imgbckg: "wht",

	//Word Item
	WI: {ENG: "indoors", ITA: "in casa", JPN: "家に",},
	WIr: {ENG: "/ˌɪnˈdɔːz/", ITA: "/in ˈkasa/", JPN: "shitsunaini", JPNRu: "<ruby>屋内に<rt>しつないに</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "2", ItaCmp1: "in", ItaCmp2: "casa",
			JPN: "1", JpnCmp1: "",},
	WIt: {ENG: "indoors", ITA: "in casa", JPN: "屋内に",},
	WItr: {ENG: "/ˌɪnˈdɔːz/", ITA: "/in ˈkasa/", JPN: "shitsunaini", JPNRu: "<ruby>屋内に<rt>しつないに</rt></ruby>",},
	
	//Sematic Tags
	//3 parametrs to get 1: display/hide, 2: text content, 3: class name (from ENG)
	semtag1: {Dsp: "block", ENG: "home", ITA: "casa", JPN: "家",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'Somebody was <span class="wihlight">indoors</span>.', ITA: 'Qualcuno era <span class="wihlight">in casa</span>.', JPN: '誰かが<span class="wihlight">家に</span>いた。',},
	EX2: {ENG: 'All citizens shall remain <span class="wihlight">indoors</span> until further notice.', ITA: 'Tutti i cittadini devono rimanere <span class="wihlight">in casa</span> fino a nuovo avviso.', JPN: 'すべての市民は、追って通知があるまで<span class="wihlight">家に</span>留まるものとします。',},
	EX3: {ENG: 'She stayed <span class="wihlight">indoors</span> all day.', ITA: 'Lei rimase <span class="wihlight">in casa</span> tutto il giorno.', JPN: '彼女は１日じゅう<span class="wihlight">家に</span>いました。',},
    
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/310110", ITA: "https://tatoeba.org/eng/sentences/show/1426740", JPN: "https://tatoeba.org/eng/sentences/show/93597",},
	
	// Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",

    // Part of Speech Data
	PoSp1: {ENG: {ENG: "adverb", ITA: "adverb", JPN: "adverb",}, 
			ITA: {ENG: "avverbio", ITA: "avverbio", JPN: "avverbio",},
			JPN: {ENG: "副詞", ITA: "副詞", JPN: "副詞",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "", JPN: "",}, 
			ITA: {ENG: "", ITA: "", JPN: "",},
			JPN: {ENG: "", ITA: "", JPN: "",},
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

1: {imgfile: "",
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",

	LnContPosLeft: "11%", LnContPosTop: "21%",
	BtnPosLeft: "9%", BtnPosTop: "12%",
	LnPosX1: "75%", LnPosY1: "75%",
	LnPosX2: "45%", LnPosY2: "45%",

	WI: {ENG: "curtain", ITA: "tenda", JPN: "カーテン",},
	WIr: {ENG: "/ˈkɜːtn/", ITA: "/ˈtɛnda/", JPN: "kaaten", JPNRu: "<ruby>カーテン<rt>かーてん</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
    semtag1: {Dsp: "block", ENG: "home", ITA: "casa", JPN: "家",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'The <span class="wihlight">curtains</span> and the carpet are a good match.', ITA: 'Le <span class="wihlight">tende</span> e il tappeto vanno bene insieme.', JPN: '<span class="wihlight">カーテン</span>とじゅうたんはよくあっている。',},
	EX2: {ENG: 'Close the <span class="wihlight">curtains</span>!', ITA: 'Tira le <span class="wihlight">tende</span>!', JPN: '<span class="wihlight">カーテン</span>を閉めて！',},
	EX3: {ENG: 'She drew up the <span class="wihlight">curtain</span>.', ITA: 'Tirò su la <span class="wihlight">tenda</span>.', JPN: '彼女は<span class="wihlight">カーテン</span>を引き上げた。',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/63833", ITA: "https://tatoeba.org/eng/sentences/show/1614819", JPN: "https://tatoeba.org/eng/sentences/show/226488",},
	TatSrcEx2: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/2609566", ITA: "https://tatoeba.org/eng/sentences/show/3511521", JPN: "https://tatoeba.org/eng/sentences/show/1509088",},
	TatSrcEx3: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/310649", ITA: "https://tatoeba.org/eng/sentences/show/1108902", JPN: "https://tatoeba.org/eng/sentences/show/93060",},
	
    //Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "", itaLpercen: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	// Part of Speech Data
	PoSp1: {ENG: {ENG: "noun", ITA: "noun", JPN: "noun",}, 
			ITA: {ENG: "sostantivo", ITA: "sostantivo", JPN: "sostantivo",},
			JPN: {ENG: "可算", ITA: "可算", JPN: "名詞",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "fem.", JPN: "",}, 
			ITA: {ENG: "", ITA: "femm.", JPN: "",},
			JPN: {ENG: "名詞", ITA: "名詞", JPN: "",},
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
2: {imgfile: "",
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
		
	imgbckg: "wht",

	LnContPosLeft: "33%", LnContPosTop: "54%",
	BtnPosLeft: "4.5%", BtnPosTop: "0%",
	LnPosX1: "50%", LnPosY1: "25%",
	LnPosX2: "50%", LnPosY2: "65%",

	WI: {ENG: "window", ITA: "finestra", JPN: "窓",},
	WIr: {ENG: "/ˈwɪndəʊ/", ITA: "/fiˈnɛstra/", JPN: "mado", JPNRu: "<ruby>窓<rt>まど</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},

	semtag1: {Dsp: "block", ENG: "home", ITA: "casa", JPN: "家",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'Open the <span class="wihlight">window</span>.', ITA: 'Apri la <span class="wihlight">finestra</span>.', JPN: '<span class="wihlight">窓</span>を開けて。',},
	EX2: {ENG: 'Would you close the <span class="wihlight">window</span>?', ITA: 'Chiuderesti la <span class="wihlight">finestra</span>?', JPN: '<span class="wihlight">窓</span>を閉めていただけませんか？',},
	EX3: {ENG: 'Who broke the <span class="wihlight">window</span>?', ITA: 'Chi ha rotto la <span class="wihlight">finestra</span>?', JPN: '誰が<span class="wihlight">窓</span>を壊しましたか。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/274210", ITA: "https://tatoeba.org/eng/sentences/show/377280", JPN: "https://tatoeba.org/eng/sentences/show/226488",},
	TatSrcEx2: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/274198", ITA: "https://tatoeba.org/eng/sentences/show/3151843", JPN: "https://tatoeba.org/eng/sentences/show/993933",},
	TatSrcEx3: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/274231", ITA: "https://tatoeba.org/eng/sentences/show/377288", JPN: "https://tatoeba.org/eng/sentences/show/136880",},
	
    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	// Part of Speech Data
	PoSp1: {ENG: {ENG: "noun", ITA: "noun", JPN: "noun",}, 
			ITA: {ENG: "sostantivo", ITA: "sostantivo", JPN: "sostantivo",},
			JPN: {ENG: "可算", ITA: "可算", JPN: "名詞",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "fem.", JPN: "",}, 
			ITA: {ENG: "", ITA: "femm.", JPN: "",},
			JPN: {ENG: "名詞", ITA: "名詞", JPN: "",},
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
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
		
	imgbckg: "wht",

	LnContPosLeft: "13%", LnContPosTop: "70%",
	BtnPosLeft: "4.5%", BtnPosTop: "12%",
	LnPosX1: "50%", LnPosY1: "75%",
	LnPosX2: "50%", LnPosY2: "35%",

	WI: {ENG: "pot", ITA: "vaso", JPN: "植木鉢",},
	WIr: {ENG: "/pɒt/", ITA: "/ˈvazo/", JPN: "uekibachi", JPNRu: "<ruby>植木鉢<rt>うえきばち</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "home", ITA: "casa", JPN: "家",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: '<span class="wihlight">Pots</span> for cultivating vegetables on the balcony shouldn&#39;t be too small.', ITA: 'I <span class="wihlight">vasi</span> per coltivare l&#39;orto sul balcone non dovrebbero essere troppo piccoli.', JPN: 'バルコニーで野菜を栽培するための<span class="wihlight">植木鉢</span>は小さすぎてはいけません。',},
	EX2: {ENG: 'He dropped a <span class="wihlight">pot</span>.', ITA: 'Ha fatto cadere un <span class="wihlight">vaso</span>.', JPN: '彼は<span class="wihlight">植木鉢</span>を落とした。',},
	EX3: {ENG: 'She changed the soil in the flower <span class="wihlight">pot</span>.', ITA: 'Ha cambiato la terra nel <span class="wihlight">vaso</span> dei fiori.', JPN: '彼女は<span class="wihlight">植木鉢</span>の土を新しくした。',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/294506", ITA: "https://tatoeba.org/eng/sentences/show/3961660", JPN: "https://tatoeba.org/eng/sentences/show/109184",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "。",},

    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	// Part of Speech Data
	PoSp1: {ENG: {ENG: "noun", ITA: "noun", JPN: "noun",}, 
			ITA: {ENG: "sostantivo", ITA: "sostantivo", JPN: "sostantivo",},
			JPN: {ENG: "可算", ITA: "可算", JPN: "名詞",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "masc.", JPN: "",}, 
			ITA: {ENG: "", ITA: "masc.", JPN: "",},
			JPN: {ENG: "名詞", ITA: "名詞", JPN: "",},
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
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
		
	imgbckg: "wht",

	LnContPosLeft: "7%", LnContPosTop: "49%",
	BtnPosLeft: "0%", BtnPosTop: "6%",
	LnPosX1: "25%", LnPosY1: "50%",
	LnPosX2: "65%", LnPosY2: "50%",

	WI: {ENG: "cactus", ITA: "cactus", JPN: "サボテン",},
	WIr: {ENG: "/ˈkæktəs/", ITA: "/ˈkaktus/", JPN: "saboten", JPNRu: "<ruby>サボテン<rt>さぼてん</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			

	semtag1: {Dsp: "block", ENG: "home", ITA: "casa", JPN: "家",},
	semtag2: {Dsp: "block", ENG: "plants", ITA: "piante", JPN: "植物",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'Be careful of the <span class="wihlight">cactus</span> spines.', ITA: 'Stai attento alle spine del <span class="wihlight">cactus</span>.', JPN: '<span class="wihlight">サボテン</span>の棘に注意してください。',},
	EX2: {ENG: 'The <span class="wihlight">cactus</span> is one the easiest plants to cultivate in pots.', ITA: 'Il <span class="wihlight">cactus</span> è una delle piante più facili da coltivare nei vasi.', JPN: '<span class="wihlight">サボテン</span>は鉢で栽培するのが最も簡単な植物の一つです。',},
	EX3: {ENG: 'Plant your <span class="wihlight">cactus</span> in a terracotta pot.', ITA: 'Pianta il tuo <span class="wihlight">cactus</span> in un vaso di terracotta', JPN: '<span class="wihlight">サボテン</span>をテラコッタの花瓶に植えます。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "。",},

    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	// Part of Speech Data
	PoSp1: {ENG: {ENG: "noun", ITA: "noun", JPN: "noun",}, 
			ITA: {ENG: "sostantivo", ITA: "sostantivo", JPN: "sostantivo",},
			JPN: {ENG: "可算", ITA: "可算", JPN: "名詞",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "masc.", JPN: "",}, 
			ITA: {ENG: "", ITA: "masc.", JPN: "",},
			JPN: {ENG: "名詞", ITA: "名詞", JPN: "",},
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
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
		
	imgbckg: "wht",

	LnContPosLeft: "63%", LnContPosTop: "44%",
	BtnPosLeft: "4.5%", BtnPosTop: "12%",
	LnPosX1: "50%", LnPosY1: "75%",
	LnPosX2: "50%", LnPosY2: "35%",

	WI: {ENG: "shelf", ITA: "mensola", JPN: "棚",},
	WIr: {ENG: "/ʃɛlf/", ITA: "/ˈmɛnsola/", JPN: "tana", JPNRu: "<ruby>棚<rt>たな</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},

	semtag1: {Dsp: "block", ENG: "home", ITA: "casa", JPN: "家",},
	semtag2: {Dsp: "block", ENG: "furniture", ITA: "mobili", JPN: "家具",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'What are the measurements of the <span class="wihlight">shelf</span>?', ITA: 'Quali sono le dimensioni della <span class="wihlight">mensola</span>?', JPN: '<span class="wihlight">棚</span>の寸法はいくらあるか。',},
	EX2: {ENG: 'These <span class="wihlight">shelves</span> cannot support so many books.', ITA: 'Queste <span class="wihlight">mensole</span> non possono sopportare così tanti libri.', JPN: 'この<span class="wihlight">棚</span>はそんなにたくさんの本は支えられません。',},
	EX3: {ENG: 'Can you reach the top <span class="wihlight">shelf</span>?', ITA: 'Riesci a raggiungere la <span class="wihlight">mensola</span> più in alto?', JPN: '<span class="wihlight">棚</span>の一番上に手が届きますか。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "https://tatoeba.org/eng/sentences/show/276085", ITA: "https://tatoeba.org/eng/sentences/show/1203146", JPN: "https://tatoeba.org/eng/sentences/show/137151",},
	TatSrcEx2: {Dsp: "none", ENG: "https://tatoeba.org/eng/sentences/show/57978", ITA: "https://tatoeba.org/eng/sentences/show/440287", JPN: "https://tatoeba.org/eng/sentences/show/220656",},
	TatSrcEx3: {Dsp: "none", ENG: "https://tatoeba.org/eng/sentences/show/276083", ITA: "https://tatoeba.org/eng/sentences/show/3010826", JPN: "https://tatoeba.org/eng/sentences/show/137153",},

    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	// Part of Speech Data
	PoSp1: {ENG: {ENG: "noun", ITA: "noun", JPN: "noun",}, 
			ITA: {ENG: "sostantivo", ITA: "sostantivo", JPN: "sostantivo",},
			JPN: {ENG: "可算", ITA: "可算", JPN: "名詞",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "fem.", JPN: "",}, 
			ITA: {ENG: "", ITA: "femm.", JPN: "",},
			JPN: {ENG: "名詞", ITA: "名詞", JPN: "",},
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
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",

	imgbckg: "wht",

	LnContPosLeft: "62%", LnContPosTop: "24%",
	BtnPosLeft: "4.5%", BtnPosTop: "0%",
	LnPosX1: "50%", LnPosY1: "25%",
	LnPosX2: "50%", LnPosY2: "65%",

	WI: {ENG: "book", ITA: "libro", JPN: "本",},
	WIr: {ENG: "/bʊk/", ITA: "/ˈlibro/", JPN: "hon", JPNRu: "<ruby>本<rt>ほん</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "home", ITA: "casa", JPN: "家",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'This <span class="wihlight">book</span> looks interesting.', ITA: 'Questo <span class="wihlight">libro</span> sembra interessante.', JPN: 'この<span class="wihlight">本</span>は面白そうだ。',},
	EX2: {ENG: 'Where is the <span class="wihlight">book</span>?', ITA: 'Dov&#39;è il <span class="wihlight">libro</span>?', JPN: 'その<span class="wihlight">本</span>はどこにありますか。',},
	EX3: {ENG: 'Give me the <span class="wihlight">book</span>.', ITA: 'Datemi il <span class="wihlight">libro</span>.', JPN: 'その<span class="wihlight">本</span>をとってくれ。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "https://tatoeba.org/eng/sentences/show/56855", ITA: "https://tatoeba.org/eng/sentences/show/350390", JPN: "https://tatoeba.org/eng/sentences/show/219534",},
	TatSrcEx2: {Dsp: "none", ENG: "https://tatoeba.org/eng/sentences/show/43928", ITA: "https://tatoeba.org/eng/sentences/show/373931", JPN: "https://tatoeba.org/eng/sentences/show/206680",},
	TatSrcEx3: {Dsp: "none", ENG: "https://tatoeba.org/eng/sentences/show/43899", ITA: "https://tatoeba.org/eng/sentences/show/4901257", JPN: "https://tatoeba.org/eng/sentences/show/206652",},

    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	// Part of Speech Data
	PoSp1: {ENG: {ENG: "noun", ITA: "noun", JPN: "noun",}, 
			ITA: {ENG: "sostantivo", ITA: "sostantivo", JPN: "sostantivo",},
			JPN: {ENG: "可算", ITA: "可算", JPN: "名詞",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "masc.", JPN: "",}, 
			ITA: {ENG: "", ITA: "masc.", JPN: "",},
			JPN: {ENG: "名詞", ITA: "名詞", JPN: "",},
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
	imgsrc: "deriv", imgattrsrcfle: "p012/imgsrcs/p012-wi7-src.png",
	imgattrsite: "openclipart.org", imgattrurl: "https://openclipart.org/download/262174/Nuclear-Family-Silhouette.svg",
	
	imgbckg: "wht",

	LnContPosLeft: "82%", LnContPosTop: "24%",
	BtnPosLeft: "9%", BtnPosTop: "0%",
	LnPosX1: "75%", LnPosY1: "25%",
	LnPosX2: "45%", LnPosY2: "55%",

	WI: {ENG: "photo", ITA: "foto", JPN: "写真",},
	WIr: {ENG: "/ˈfəʊtəʊ/", ITA: "/ˈfɔto/", JPN: "shashin", JPNRu: "<ruby>写真<rt>しゃしん</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},


	semtag1: {Dsp: "block", ENG: "home", ITA: "casa", JPN: "家",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'Let&#39;s take a <span class="wihlight">photo</span>.', ITA: 'Facciamo una <span class="wihlight">foto</span>.', JPN: '<span class="wihlight">写真</span>を撮ろう。',},
	EX2: {ENG: 'This a recent <span class="wihlight">photo</span>?', ITA: 'Questa è una <span class="wihlight">foto</span> recente?', JPN: 'これは、最近の<span class="wihlight">写真</span>？',},
	EX3: {ENG: 'What a beautiful <span class="wihlight">photo</span>!', ITA: 'Che bella <span class="wihlight">foto</span>!', JPN: 'なんてキレイな<span class="wihlight">写真</span>なんでしょう。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/265313", ITA: "https://tatoeba.org/eng/sentences/show/3115296", JPN: "https://tatoeba.org/eng/sentences/show/149245",},
	TatSrcEx2: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/328544", ITA: "https://tatoeba.org/eng/sentences/show/374254", JPN: "https://tatoeba.org/eng/sentences/show/75175",},
	TatSrcEx3: {Dsp: "none", ENG: "https://tatoeba.org/eng/sentences/show/36136", ITA: "https://tatoeba.org/eng/sentences/show/4195563", JPN: "https://tatoeba.org/eng/sentences/show/198939",},

    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	// Part of Speech Data
	PoSp1: {ENG: {ENG: "noun", ITA: "noun", JPN: "noun",}, 
			ITA: {ENG: "sostantivo", ITA: "sostantivo", JPN: "sostantivo",},
			JPN: {ENG: "可算", ITA: "可算", JPN: "名詞",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "fem.", JPN: "",}, 
			ITA: {ENG: "", ITA: "femm.", JPN: "",},
			JPN: {ENG: "名詞", ITA: "名詞", JPN: "",},
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
	imgsrc: "deriv", imgattrsrcfle: "p012/imgsrcs/p012-wi8-src.png",
	imgattrsite: "openclipart.org", imgattrurl: "https://openclipart.org/download/262174/Nuclear-Family-Silhouette.svg",
		
	imgbckg: "wht",

	LnContPosLeft: "75%", LnContPosTop: "17%",
	BtnPosLeft: "4.5%", BtnPosTop: "0%",
	LnPosX1: "50%", LnPosY1: "25%",
	LnPosX2: "50%", LnPosY2: "65%",

	WI: {ENG: "frame", ITA: "cornice", JPN: "フレーム",},
	WIr: {ENG: "/freɪm/", ITA: "/korˈnitʃe/", JPN: "fureemu", JPNRu: "<ruby>フレーム<rt>すーつけーす</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "home", ITA: "casa", JPN: "家",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'We could put the photo in a nice <span class="wihlight">frame</span>.', ITA: 'Potremmo mettere questa foto in una bella <span class="wihlight">cornice</span>.', JPN: 'そして素敵な<span class="wihlight">フレーム</span>に写真を入れることができます。',},
	EX2: {ENG: 'The <span class="wihlight">frame</span> is too big.', ITA: 'La <span class="wihlight">cornice</span> è troppo grande.', JPN: '<span class="wihlight">フレーム</span>が大きすぎます。',},
	EX3: {ENG: 'The <span class="wihlight">frame</span> is very ornate.', ITA: 'La <span class="wihlight">cornice</span> è molto ornata.', JPN: '<span class="wihlight">フレーム</span>はとても華やかです。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/328544", ITA: "https://tatoeba.org/eng/sentences/show/374254", JPN: "https://tatoeba.org/eng/sentences/show/75175",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",

	// Part of Speech Data
	PoSp1: {ENG: {ENG: "noun", ITA: "noun", JPN: "noun",}, 
			ITA: {ENG: "sostantivo", ITA: "sostantivo", JPN: "sostantivo",},
			JPN: {ENG: "可算", ITA: "可算", JPN: "名詞",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "fem.", JPN: "",}, 
			ITA: {ENG: "", ITA: "femm.", JPN: "",},
			JPN: {ENG: "名詞", ITA: "名詞", JPN: "",},
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
