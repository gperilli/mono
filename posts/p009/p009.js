
var p009 = {

No: "009",
Date: "21/03/2020",
AnnotType: "Annot",
	
0: {imgfile: "",
	imgsrc: "deriv", imgattrsrcfle: "", 
	imgattrsite: "", imgattrurl: "", 
	
	imgbckg: "wht",	
	
	//Word Item
	WI: {ENG: "drinks", ITA: "bevande", JPN: "飲み物",},
	WIr: {ENG: "/drɪŋks/", ITA: "/beˈvande/", JPN: "nomimono", JPNRu: "<ruby>飲み物<rt>のみもの</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	//Sematic Tags
	//3 parametrs to get 1: display/hide, 2: text content, 3: class name (from ENG)
	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

	//Examples
	EX1: {ENG: 'Which <span class="wihlight">drinks</span> do you like?', ITA: 'Quali <span class="wihlight">bevande</span> ti piacciono?', JPN: '好きな<span class="wihlight">飲み物</span>は何ですか。',},
	EX2: {ENG: 'Do you have any <span class="wihlight">drinks</ without alcohol.', ITA: 'Hai delle <span class="wihlight">bevande</span> analcoliche?', JPN: 'アルコール分の入っていない<span class="wihlight">飲み物</span>はありますか。',},
	EX3: {ENG: 'Cocacola is a popular <span class="wihlight">drink</span>.', ITA: 'Cocacola è una <span class="wihlight">bevanda</span> popolare', JPN: 'コカコーラは人気の<span class="wihlight">飲み物</span>です。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
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
	PoSp2: {ENG: {ENG: "", ITA: "femm..", JPN: "",}, 
			ITA: {ENG: "", ITA: "femm..", JPN: "",},
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

1: {imgfile: "",
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
		
	imgbckg: "wht",	

	LnContPosLeft: "4%", LnContPosTop: "38%",
	BtnPosLeft: "0%", BtnPosTop: "6%",
	LnPosX1: "25%", LnPosY1: "50%",
	LnPosX2: "65%", LnPosY2: "50%",

	WI: {ENG: "glass", ITA: "bicchiere", JPN: "コップ",},
	WIr: {ENG: "/glɑːs/", ITA: "/bikˈkjɛre/", JPN: "koppu", JPNRu: "<ruby>コップ<rt>こっぷ</rt></ruby>",},

    semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
    
	//Examples
	EX1: {ENG: 'I broke a <span class="wihlight">glass</span>.', ITA: 'Ho rotto un <span class="wihlight">bicchiere</span>.', JPN: 'コップを割った。',},
	EX2: {ENG: 'Don&#39;t drop that <span class="wihlight">glass</span>.', ITA: 'Non fare cadere quel <span class="wihlight">bicchiere</span>.', JPN: 'その<span class="wihlight">コップ</span>を落すな。',},
	EX3: {ENG: 'I want a few empty <span class="wihlight">glasses</span>.', ITA: 'Io voglio qualche <span class="wihlight">bicchiere</span> vuoto.', JPN: '空の<span class="wihlight">コップ</span>がいくつか欲しい。',},
    
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/62898", ITA: "https://tatoeba.org/eng/sentences/show/4477511", JPN: "https://tatoeba.org/eng/sentences/show/225562",},
	TatSrcEx2: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/675419", ITA: "https://tatoeba.org/eng/sentences/show/677384", JPN: "https://tatoeba.org/eng/sentences/show/213202",},
    TatSrcEx3: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/18302", ITA: "https://tatoeba.org/eng/sentences/show/2565448", JPN: "https://tatoeba.org/eng/sentences/show/179445",},

    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
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
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",	

	LnContPosLeft: "25%", LnContPosTop: "39%",
	BtnPosLeft: "0%", BtnPosTop: "6%",
	LnPosX1: "25%", LnPosY1: "50%",
	LnPosX2: "65%", LnPosY2: "50%",

	WI: {ENG: "bottle", ITA: "bottiglia", JPN: "瓶",},
	WIr: {ENG: "/ˈbɒtl/", ITA: "/botˈtiʎʎa/", JPN: "bin", JPNRu: "<ruby>瓶<rt>びん</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'Open the <span class="wihlight">bottle</span>.', ITA: 'Apri la <span class="wihlight">bottiglia</span>.', JPN: 'その<span class="wihlight">ビン</span>をあけてくれ。',},
	EX2: {ENG: 'Fill the <span class="wihlight">bottle</span> with water.', ITA: 'Riempi la <span class="wihlight">bottiglia</span> d&#39;acqua.', JPN: 'その<span class="wihlight">瓶</span>を水でいっぱいにしなさい。',},
	EX3: {ENG: 'The <span class="wihlight">bottle</span> is made of glass.', ITA: 'La <span class="wihlight">bottiglia</span> è fatta di vetro.', JPN: 'この<span class="wihlight">ビン</span>はガラス製です。',},
	
    //Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/49963", ITA: "https://tatoeba.org/eng/sentences/show/995492", JPN: "https://tatoeba.org/eng/sentences/show/212680",},
	TatSrcEx2: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/44290", ITA: "https://tatoeba.org/eng/sentences/show/3373590", JPN: "https://tatoeba.org/eng/sentences/show/207041",},
	TatSrcEx3: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/60596", ITA: "https://tatoeba.org/eng/sentences/show/992407", JPN: "https://tatoeba.org/eng/sentences/show/223264",},

    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
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
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",	

	LnContPosLeft: "45%", LnContPosTop: "43%",
	BtnPosLeft: "4.5%", BtnPosTop: "0%",
	LnPosX1: "50%", LnPosY1: "25%",
	LnPosX2: "50%", LnPosY2: "65%",

	WI: {ENG: "cup", ITA: "tazza", JPN: "カップ",},
	WIr: {ENG: "/kʌp/", ITA: "/ˈtattsa/", JPN: "kappu", JPNRu: "<ruby>カップ<rt>かっぷ</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
	
	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'Hand me my <span class="wihlight">cup</span>.', ITA: 'Passami la mia <span class="wihlight">tazza</span>.', JPN: '私のマグ<span class="wihlight">カップ</span>取って。',},
	EX2: {ENG: 'Whose <span class="wihlight">cup</span> is this?', ITA: 'Di chi è questa <span class="wihlight">tazza</span>?', JPN: 'これ誰の<span class="wihlight">カップ</span>？',},
	EX3: {ENG: 'The handle of the <span class="wihlight">cup</span> is broken.', ITA: 'La <span class="wihlight">tazza</span> ha il manico rotto.', JPN: '<span class="wihlight">カップ</span>の取っ手がこわれている。',},
    
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/3327120", ITA: "https://tatoeba.org/eng/sentences/show/3565207", JPN: "https://tatoeba.org/eng/sentences/show/3565420",},
	TatSrcEx2: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/3416475", ITA: "https://tatoeba.org/eng/sentences/show/4393691", JPN: "https://tatoeba.org/eng/sentences/show/3416307",},
	TatSrcEx3: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/63658", ITA: "https://tatoeba.org/eng/sentences/show/843111", JPN: "https://tatoeba.org/eng/sentences/show/226318",},

    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	  
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

4: {imgfile: "",
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",	

	LnContPosLeft: "68%", LnContPosTop: "57%",
	BtnPosLeft: "4.5%", BtnPosTop: "12%",
	LnPosX1: "50%", LnPosY1: "75%",
	LnPosX2: "50%", LnPosY2: "35%",

	WI: {ENG: "teapot", ITA: "teiera", JPN: "ティーポット",},
	WIr: {ENG: "/ˈtiːˌpɒt/", ITA: "/teˈjɛra/", JPN: "tiipotto", JPNRu: "<ruby>ティーポット<rt>てぃーぽっと</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'That <span class="wihlight">teapot</span> is dirty.', ITA: 'Quella <span class="wihlight">teiera</span> è sporca.', JPN: 'その<span class="wihlight">ポット</span>は汚れている。',},
	EX2: {ENG: 'The <span class="wihlight">teapot</span> is on the table.', ITA: 'La <span class="wihlight">teiera</span> è sul tavolo.', JPN: '<span class="wihlight">ポット</span>をテーブルの上に置いてある。',},
	EX3: {ENG: 'Bring me the <span class="wihlight">teapot<s/apn> please.', ITA: 'Portami la <span class="wihlight">teiera</span>, per favore.', JPN: '<span class="wihlight">ポット</span>を持ってきて下さい。',},
    
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
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
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",	

	LnContPosLeft: "10%", LnContPosTop: "30%",
	BtnPosLeft: "9%", BtnPosTop: "0%",
	LnPosX1: "75%", LnPosY1: "25%",
	LnPosX2: "45%", LnPosY2: "55%",

	WI: {ENG: "straw", ITA: "cannuccia", JPN: "ストロー",},
	WIr: {ENG: "/strɔː/", ITA: "/kanˈnuttʃa/", JPN: "sutoro", JPNRu: "<ruby>ストロー<rt>すとろー</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'May I have a <span class="wihlight">straw</span>, please?', ITA: 'Posso avere una <span class="wihlight">cannuccia</span>, per favore?', JPN: '<span class="wihlight">ストロー</span>をもらっていいですか。',},
	EX2: {ENG: 'Where are the <span class="wihlight">straws</span>?', ITA: 'Dove sono le <span class="wihlight">cannucce</span>?', JPN: '<span class="wihlight">ストロー</span>はどこですか。',},
	EX3: {ENG: 'Plastic <span class="wihlight">straws</span> take a long time to decompose.', ITA: 'Le <span class="wihlight">cannucce</span> di plastica richiedono molto tempo per decomporsi.', JPN: 'プラスチック<span class="wihlight">ストロー</span>は分解に時間がかかります。',},
    
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
    TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
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

6: {imgfile: "",
	imgsrc: "deriv", imgattrsrcfle: "p001/imgsrcs/p001-wi6-src.png",
	imgattrsite: "commons.wikimedia.org", imgattrurl: "https://commons.wikimedia.org/wiki/File:Ic_flight_48px.svg",
	
	imgbckg: "wht",	

	LnContPosLeft: "11%", LnContPosTop: "57%",
	BtnPosLeft: "4.5%", BtnPosTop: "12%",
	LnPosX1: "50%", LnPosY1: "75%",
	LnPosX2: "50%", LnPosY2: "35%",

	WI: {ENG: "ice", ITA: "ghiaccio", JPN: "氷",},
	WIr: {ENG: "/aɪs/", ITA: "/ˈɡjattʃo/", JPN: "koori", JPNRu: "<ruby>氷<rt>こおり</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'Would you like <span class="wihlight">ice</span>?', ITA: 'Vuoi del <span class="wihlight">ghiaccio</soan>?', JPN: '<span class="wihlight">氷</span>は入れますか',},
	EX2: {ENG: 'You don&#39;t have <span class="wihlight">ice</span> anymore in the glass.', ITA: 'Non hai più <span class="wihlight">ghiaccio</span> nel bicchiere.', JPN: 'もうグラスに<span class="wihlight">氷</span>は入っていません。',},
	EX3: {ENG: 'Is there some ice in the fridge?', ITA: 'C&#39;è del <span class="wihlight">ghiaccio</span> nel frigorifero?', JPN: '冷蔵庫に<span class="wihlight">氷</span>が入っていますか？',},
    
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/318331", ITA: "https://tatoeba.org/eng/sentences/show/379731", JPN: "https://tatoeba.org/eng/sentences/show/85382",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

	// Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
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
	imgsrc: "deriv", imgattrsrcfle: "p001/imgsrcs/p001-wi7-src.png",
	imgattrsite: "commons.wikimedia.org", imgattrurl: "https://commons.wikimedia.org/wiki/File:Ic_flight_48px.svg",
	
	imgbckg: "wht",	

	LnContPosLeft: "30%", LnContPosTop: "8%",
	BtnPosLeft: "4.5%", BtnPosTop: "0%",
	LnPosX1: "50%", LnPosY1: "25%",
	LnPosX2: "50%", LnPosY2: "65%",

	WI: {ENG: "bottle opener", ITA: "apribottiglie", JPN: "栓抜き",},
	WIr: {ENG: "/ˈbɒtl ˈəʊpnə/", ITA: "/passedˈdʒɛro/", JPN: "sennuki", JPNRu: "<ruby>栓抜き<rt>せんぬき</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'I need a <span class="wihlight">bottle opener</span.', ITA: 'Mi serve un <span class="wihlight">apribottiglie</span>.', JPN: '<span class="wihlight">栓抜き</span>が必要です。。',},
	EX2: {ENG: 'Where do you keep your <span class="wihlight">bottle opener<span?', ITA: 'Dove tieni il tuo <span class="wihlight">apribottiglie?</span>', JPN: '<span class="wihlight">栓抜き</span>はどこに保管しますか？',},
	EX3: {ENG: 'How do you use the <span class="wihlight">bottle opener</span>?', ITA: 'Come si usa l&#39;<span class="wihlight">apribottiglie?', JPN: '<span class="wihlight">栓抜</span>はどうやって使うの？',},
    
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
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
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",	
		
	LnContPosLeft: "40%", LnContPosTop: "71%",
	BtnPosLeft: "4.5%", BtnPosTop: "12%",
	LnPosX1: "50%", LnPosY1: "75%",
	LnPosX2: "50%", LnPosY2: "35%",

	WI: {ENG: "table", ITA: "tavola", JPN: "テーブル",},
	WIr: {ENG: "/ˈteɪbl/", ITA: "/ˈtavola/", JPN: "teeburu", JPNRu: "<ruby>テーブル<rt>てーぶる</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
	
	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'Put the glass on the <span class="wihlight">table</span>.', ITA: 'Metti il bicchiere sulla <span class="wihlight">tavola</span>.', JPN: 'コップを<span class="wihlight">テーブル</span>の上に置いて。',},
	EX2: {ENG: 'This <span class="wihlight">table</span> is made from wood.', ITA: 'Questa <span class="wihlight">tavola</span> è di legno.', JPN: 'この<span class="wihlight">テーブル</span>は木製である。',},
	EX3: {ENG: 'A fork fell from the <span class="wihlight">table</span>', ITA: 'Una forchetta è caduta dal <span class="wihlight">tavolo</span>.', JPN: 'フォークは<span class="wihlight">テーブル</span>から落ちた。',},
    
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",

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
};
