
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
	EX1: {ENG: '<span class="wihlight">Planets</span> move around a fixed star.', ITA: 'I <span class="wihlight">pianeti</span> ruotano attorno ad una stella fissa.', JPN: '<span class="wihlight">惑星</span>は恒星の周りを回る。',},
	EX2: {ENG: 'I live on this <span class="wihlight">planet</span>.', ITA: 'Vivo su questo <span class="wihlight">pianeta</span>.', JPN: '私はこの<span class="wihlight">惑星</span>に住んでいる。',},
	EX3: {ENG: 'The Earth, Mars and Jupiter are <span class="wihlight">planets</span>.', ITA: 'La Terra, Marte e Giove sono <span class="wihlight">pianeti</span>.', JPN: '地球や火星、木星は<span class="wihlight">惑星</span>である。',},
	
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
	EX1: {ENG: 'The planet closet to the sun is <span class="wihlight">Mercury</span>.', ITA: 'Il pianeta più vicino al sole è <span class="wihlight">Mercurio</span>.', JPN: '太陽に一番近い惑星は水星である。',},
	EX2: {ENG: '<span class="wihlight">Mercury</span> is a rocky planet.', ITA: '<span class="wihlight">Mercurio<span> è un pianeta roccioso.', JPN: '<span class="wihlight">水星</span>は岩だらけの惑星です。',},
	EX3: {ENG: '<span class="wihlight">Mercury</span> does not have moons.', ITA: '<span class="wihlight">Mercurio<span> non possiede satelliti.', JPN: '<span class="wihlight">水星</span>には月がありません。',},

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
	EX1: {ENG: '<span class="wihlight">Venus</span> is the second planet of the solar system.', ITA: '<span class="wihlight">Venere</span> è il secondo pianeta del Sistema solare.', JPN: '<span class="wihlight">金星</span>は、太陽系で2番目の惑星。',},
	EX2: {ENG: '<span class="wihlight">Venus</span> has much more carbon dioxide than the Earth.', ITA: '<span class="wihlight">Venere</span> è molto più ricca di anidride carbonica rispetto a la terra.', JPN: '<span class="wihlight">金星</span>は地球よりもはるかに多くの二酸化炭素を持っています。',},
	EX3: {ENG: '<span class="wihlight">Venus</span> is the most luminous planet in the sky.', ITA: '<span class="wihlight">Venere</span> è il pianeta più luminoso nel cielo.', JPN: '<span class="wihlight">金星</span>は空で最も明るい惑星です。',},
	
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
	EX1: {ENG: 'The <span class="wihlight">Earth</span> is the second planet of the solar system.', ITA: 'La <span class="wihlight">Terra</span> è il terzo pianeta del sistema solare.', JPN: '<span class="wihlight">地球</span>は、太陽系で3番目の惑星。',},
	EX2: {ENG: 'The earth is round.', ITA: 'La Terra è rotonda.', JPN: '地球は丸い。',},
	EX3: {ENG: 'The Earth formed 4.5 billion years ago.', ITA: 'la Terra si è formata 4,5 miliardi di anni fa.', JPN: '地球は45億年前に形成されました。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/277121", ITA: "https://tatoeba.org/eng/sentences/show/2157930", JPN: "https://tatoeba.org/eng/sentences/show/126969",},
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
	EX1: {ENG: '<span class="wihlight">Mars</span> is the fourth planet of the solar system.', ITA: '<span class="wihlight">Marte</span> è il quarto pianeta del Sistema solare.', JPN: '<span class="wihlight">火星</span>は、太陽系で４番目の惑星。',},
	EX2: {ENG: '<span class="wihlight">Mars</span> has two moons.', ITA: '<span class="wihlight">Marte</span> ha due lune.', JPN: '<span class="wihlight">火星</span>は二つ衛星がある。',},
	EX3: {ENG: 'Is there any life on <span class="wihlight">Mars</span>?', ITA: 'C&#39;è vita su <span class="wihlight">Marte</span>?', JPN: '<span class="wihlight">火星</span>に生命はありますか？',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/4412812", ITA: "https://tatoeba.org/eng/sentences/show/5358666", JPN: "https://tatoeba.org/eng/sentences/show/2074253",},
	TatSrcEx3: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/23793", ITA: "https://tatoeba.org/eng/sentences/show/1807211", JPN: "https://tatoeba.org/eng/sentences/show/186657",},

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
	EX1: {ENG: '<span class="wihlight">Jupiter</span> is the fifth planet of the solar system.', ITA: '<span class="wihlight">Giove</span> è il quinto pianeta del Sistema solare.', JPN: '<span class="wihlight">火星</span>は、太陽系で５番目の惑星。',},
	EX2: {ENG: 'Jupiter is the biggest planet of the solar system.', ITA: 'Giove è il pianeta più grande del Sistema solare.', JPN: '木星は太陽系の最大の惑星です。',},
	EX3: {ENG: 'Jupiter, like Saturn, Uranus, and Neptune is a gas planet.', ITA: 'Giove, come Saturno, Urano e Nettuno, è un pianeta gassoso.', JPN: '木星は、土星、天王星、海王星のようなガス惑星です。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
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
	EX1: {ENG: '<span class="wihlight">Saturn</span> is the sixth planet of the solar system.', ITA: '<span class="wihlight">Saturno</span> è il sesto pianeta del sistema solare.', JPN: '<span class="wihlight">土星</span>は、太陽系で６番目の惑星。',},
	EX2: {ENG: '<span class="wihlight">Saturn</span> is the second largest planet after Jupiter in the solar system.', ITA: '<span class="wihlight">Saturno</span> è il secondo pianeta per grandezza dopo Giove nel sistema solare.', JPN: '<span class="wihlight">土星</span>は、太陽系で木星に次いで2番目に大きい惑星です。',},
	EX3: {ENG: 'The rings of <span class="wihlight">Saturn</span> are made from billions of small objects.', ITA: 'Gli anelli di <span class="wihlight">Saturno</span> sono composti da miliardi di piccoli oggetti.', JPN: '<span class="wihlight">土星</span>の輪は、数十億の小さな物体からできています。',},
	
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
	EX1: {ENG: '<span class="wihlight">Uranus</span> is the seventh planet of the solar system.', ITA: '<span class="wihlight">Urano</span> è il settimo pianeta del sistema solare.', JPN: '<span class="wihlight">天皇制</span>は、太陽系で７番目の惑星。',},
	EX2: {ENG: '<span class="wihlight">Uranus</span> was discovered by acccident in 1781 by William Herschel.', ITA: '<span class="wihlight">Urano</span> venne scoperto casualmente al telescopio da William Herschel, nel 1781', JPN: '<span class="wihlight">天王星</span>は、ウィリアム・ハーシェルによって1781年に事故によって発見されました。',},
	EX3: {ENG: 'There are many small moons that rotate around <span class="wihlight">Uranus</span>.', ITA: 'Ci sono tante piccole lune che ruotano intorno a <span class="wihlight">Urano</span>.', JPN: '<span class="wihlight">天王星</span>の周りを回転する多くの小さな月があります。',},
	
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
