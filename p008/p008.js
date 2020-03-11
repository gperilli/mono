
var p008 = {

No: "008",
Date: "21/03/2018",
AnnotType: "Annot",

0: {imgfile: "",
	imgsrc: "deriv", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "", 
	
	imgbckg: "blk",	
	
	//Word Item
	WI: {ENG: "planets", ITA: "pianeti", JPN: "惑星",},
	WIr: {ENG: "/ˈplænɪts/", ITA: "/pjaˈneti/", JPN: "wakusei", JPNRu: "<ruby>惑星<rt>わくせい</rt></ruby>",},
	
	//Sematic Tags
	//3 parametrs to get 1: display/hide, 2: text content, 3: class name (from ENG)
	semtag1: {Dsp: "block", ENG: "science", ITA: "scienza", JPN: "理科",},
	semtag2: {Dsp: "block", ENG: "space", ITA: "spazio", JPN: "宇宙",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

	//Examples
	EX1: {ENG: 'Planets move around a fixed star.', ITA: 'I pianeti ruotano attorno ad una stella fissa.', JPN: '惑星は恒星の周りを回る。',},
	EX2: {ENG: 'I live on this planet.', ITA: 'Vivo su questo pianeta.', JPN: '私はこの惑星に住んでいる。',},
	EX3: {ENG: 'The Earth, Mars and Jupiter are planets.', ITA: 'La Terra, Marte e Giove sono pianeti.', JPN: '地球や火星、木星は惑星である。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/326588", ITA: "https://tatoeba.org/eng/sentences/show/1616478", JPN: "https://tatoeba.org/eng/sentences/show/77131",},
	TatSrcEx2: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/2693531", ITA: "https://tatoeba.org/eng/sentences/show/3008221", JPN: "https://tatoeba.org/eng/sentences/show/2684280",},	
	TatSrcEx3: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/277147", ITA: "https://tatoeba.org/eng/sentences/show/2211771", JPN: "https://tatoeba.org/eng/sentences/show/126943",},
	
	// Dictionary search suffixes
    engLhyph: "planet", engLperc: "planet", engLplus: "planet", engForv: "planet/#en",
    itaLhyph: "pianeta", itaLplus: "pianeta", itaForv: "pianeta/#it",
    jpnLpercen: "%E6%83%91%E6%98%9F", jpnLgoo: "237937/meaning/m1u/", jpnForv: "惑星/#ja",

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
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "blk",	

	LnContPosLeft: "3.6%", LnContPosTop: "42%",
	BtnPosLeft: "4.5%", BtnPosTop: "12%",
	LnPosX1: "50%", LnPosY1: "75%",
	LnPosX2: "50%", LnPosY2: "35%",

	WI: {ENG: "Mercury", ITA: "Mercurio", JPN: "水星",},
	WIr: {ENG: "/ˈmɜːkjʊri/", ITA: "/merˈkurjo/", JPN: "suisei", JPNRu: "<ruby>水星<rt>すいせい</rt></ruby>",},

    	semtag1: {Dsp: "block", ENG: "science", ITA: "scienza", JPN: "理科",},
	semtag2: {Dsp: "block", ENG: "space", ITA: "spazio", JPN: "宇宙",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'The planet closet to the sun is Mercury.', ITA: 'Il pianeta più vicino al sole è mercurio.', JPN: '太陽に一番近い惑星は水星である。',},
	EX2: {ENG: 'Mercury is a rocky planet.', ITA: 'Mercurio è un pianeta roccioso.', JPN: '水星は岩だらけの惑星です。',},
	EX3: {ENG: 'Mercury does not have moons.', ITA: 'Mercurio non possiede satelliti.', JPN: '水銀には月がありません。',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "",},

    engLhyph: "mercury", engLperc: "mercury", engLplus: "mercury", engForv: "mercury/#en",
    itaLhyph: "mercurio", itaLplus: "mercurio", itaForv: "mercurio/#it",
    jpnLpercen: "%E6%B0%B4%E6%98%9F", jpnLgoo: "48697/meaning/m1u/", jpnForv: "水星/#ja",
	
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
	
	imgbckg: "blk",	

	LnContPosLeft: "8%", LnContPosTop: "34%",
	BtnPosLeft: "4.5%", BtnPosTop: "0%",
	LnPosX1: "50%", LnPosY1: "25%",
	LnPosX2: "50%", LnPosY2: "65%",

	WI: {ENG: "Venus", ITA: "Venere", JPN: "金星",},
	WIr: {ENG: "/ˈviːnəs/", ITA: "/ˈvɛnere/", JPN: "kinsei", JPNRu: "<ruby>金星<rt>きんせい</rt></ruby>",},

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

    engLhyph: "Venus", engLperc: "Venus", engLplus: "Venus", engForv: "Venus/#en",
    itaLhyph: "Venere", itaLplus: "Venere", itaForv: "Venere/#it",
    jpnLpercen: "%E9%87%91%E6%98%9F", jpnLgoo: "142609/meaning/m1u/", jpnForv: "金星/#ja",
	
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
	
	imgbckg: "blk",	

	LnContPosLeft: "13.3%", LnContPosTop: "42%",
	BtnPosLeft: "4.5%", BtnPosTop: "12%",
	LnPosX1: "50%", LnPosY1: "75%",
	LnPosX2: "50%", LnPosY2: "35%",

	WI: {ENG: "Earth", ITA: "Terra", JPN: "地球",},
	WIr: {ENG: "/ɜːθ/", ITA: "/ˈtɛrra/", JPN: "ririku", JPNRu: "<ruby>地球<rt>ちきゅう</rt></ruby>",},

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

    engLhyph: "Earth", engLperc: "Earth", engLplus: "Earth", engForv: "earth/#en",
    itaLhyph: "Terra", itaLplus: "Terra", itaForv: "Terra/#it",
    jpnLpercen: "%E5%9C%B0%E7%90%83", jpnLgoo: "233036/meaning/m1u/", jpnForv: "地球/#ja",
	
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
	
	imgbckg: "blk",	

	LnContPosLeft: "18.4%", LnContPosTop: "34%",
	BtnPosLeft: "4.5%", BtnPosTop: "0%",
	LnPosX1: "50%", LnPosY1: "25%",
	LnPosX2: "50%", LnPosY2: "65%",

	WI: {ENG: "Mars", ITA: "Marte", JPN: "火星",},
	WIr: {ENG: "/mɑːz/", ITA: "/ˈmarte/", JPN: "kasei", JPNRu: "<ruby>火星<rt>かせい</rt></ruby>",},

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

    engLhyph: "Mars", engLperc: "Mars", engLplus: "Mars", engForv: "Mars/#en",
    itaLhyph: "Marte", itaLplus: "Marte", itaForv: "Marte/#it",
    jpnLpercen: "%E7%81%AB%E6%98%9F", jpnLgoo: "66523/meaning/m1u/", jpnForv: "火星/#ja",
	
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
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "blk",	

	LnContPosLeft: "32%", LnContPosTop: "53%",
	BtnPosLeft: "4.5%", BtnPosTop: "12%",
	LnPosX1: "50%", LnPosY1: "75%",
	LnPosX2: "50%", LnPosY2: "35%",

	WI: {ENG: "Jupiter", ITA: "Giove", JPN: "木星",},
	WIr: {ENG: "/ˈʤuːpɪtə/", ITA: "/ˈdʒɔve/", JPN: "mokusei", JPNRu: "<ruby>木星<rt>もくせい</rt></ruby>",},

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

    engLhyph: "Jupiter", engLperc: "Jupiter", engLplus: "Jupiter", engForv: "Jupiter/#en",
    itaLhyph: "Giove", itaLplus: "Giove", itaForv: "Giove/#it",
    jpnLpercen: "%E6%9C%A8%E6%98%9F", jpnLgoo: "123323/meaning/m1u/", jpnForv: "木星/#ja",
	
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
	imgsrc: "deriv", imgattrsrcfle: "p001/imgsrcs/p001-wi6-src.png",
	imgattrsite: "commons.wikimedia.org", imgattrurl: "https://commons.wikimedia.org/wiki/File:Ic_flight_48px.svg",
	
	imgbckg: "blk",	

	LnContPosLeft: "54%", LnContPosTop: "26%",
	BtnPosLeft: "4.5%", BtnPosTop: "0%",
	LnPosX1: "50%", LnPosY1: "25%",
	LnPosX2: "50%", LnPosY2: "65%",

	WI: {ENG: "Saturn", ITA: "Saturno", JPN: "土星",},
	WIr: {ENG: "/ˈsætən/", ITA: "/saˈturno/", JPN: "dosei", JPNRu: "<ruby>土星<rt>どせい</rt></ruby>",},

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

    engLhyph: "Saturn", engLperc: "Saturn", engLplus: "Saturn", engForv: "Saturn/#en",
    itaLhyph: "Saturno", itaLplus: "Saturno", itaForv: "Saturno/#it",
    jpnLpercen: "%E5%9C%9F%E6%98%9F", jpnLgoo: "141577/meaning/m1u/", jpnForv: "土星/#ja",
	
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
	
	imgbckg: "blk",	

	LnContPosLeft: "77%", LnContPosTop: "46%",
	BtnPosLeft: "4.5%", BtnPosTop: "12%",
	LnPosX1: "50%", LnPosY1: "75%",
	LnPosX2: "44%", LnPosY2: "33%",

	WI: {ENG: "Uranus", ITA: "Urano", JPN: "天皇制",},
	WIr: {ENG: "/ˈjʊərənəs/", ITA: "/uˈrano/", JPN: "tennousei", JPNRu: "<ruby>天皇制<rt>てんのうせい</rt></ruby>",},

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

    engLhyph: "Uranus", engLperc: "Uranus", engLplus: "Uranus", engForv: "Uranus/#en",
    itaLhyph: "Urano", itaLplus: "Urano", itaForv: "Urano/#it",
    jpnLpercen: "%E5%A4%A9%E7%9A%87%E5%88%B6", jpnLgoo: "107916/meaning/m1u/", jpnForv: "天皇制/#ja",
	
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
	
	imgbckg: "blk",	

	LnContPosLeft: "79.5%", LnContPosTop: "32%",
	BtnPosLeft: "9%", BtnPosTop: "0%",
	LnPosX1: "75%", LnPosY1: "25%",
	LnPosX2: "75%", LnPosY2: "59%",

	WI: {ENG: "Neptune", ITA: "Nettuno", JPN: "海王星",},
	WIr: {ENG: "/ˈnɛptjuːn/", ITA: "/netˈtuno/", JPN: "kaiousei", JPNRu: "<ruby>海王星<rt>かいおうせい</rt></ruby>",},

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

    engLhyph: "Neptune", engLperc: "Neptune", engLplus: "Neptune", engForv: "Neptune/#en",
    itaLhyph: "Netturno", itaLplus: "Netturno", itaForv: "Netturno/#it",
    jpnLpercen: "%E6%B5%B7%E7%8E%8B%E6%98%9F", jpnLgoo: "117095/meaning/m1u/", jpnForv: "海王星/#ja",

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
