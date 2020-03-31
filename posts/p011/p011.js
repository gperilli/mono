
var p011 = {

No: "011",
Date: "29/03/2018",
AnnotType: "HLight",

0: {imgfile: "",
	imgsrc: "original", imgattrsrcfle: "", 
	imgattrsite: "", imgattrurl: "", 
	
	imgbckg: "wht",
	
	//Word Item
	WI: {ENG: "color", ITA: "colore", JPN: "色",},
	WIr: {ENG: "/ˈkʌlə/", ITA: "/koˈlore/", JPN: "iro", JPNRu: "<ruby>色<rt>いろ</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
	WIt: {ENG: "colors", ITA: "colori", JPN: "色",},
	WItr: {ENG: "/ˈkʌləz/", ITA: "/koˈlori/", JPN: "iro", JPNRu: "<ruby>色<rt>いろ</rt></ruby>",},
			
	//Sematic Tags
	//3 parametrs to get 1: display/hide, 2: text content, 3: class name (from ENG)
	semtag1: {Dsp: "block", ENG: "colors", ITA: "colori", JPN: "色",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'What <span class="wihlight">colour</span> is it?', ITA: 'Che <span class="wihlight">colore</span> è?', JPN: '何<span class="wihlight">色</span>ですか？',},
	EX2: {ENG: 'Which <span class="wihlight">colour</span> do you prefer?', ITA: 'Che <span class="wihlight">colore</span> preferisci?', JPN: 'あなたはどの<span class="wihlight">色</span>が好きですか？',},
	EX3: {ENG: 'I like this <span class="wihlight">colour</span>.', ITA: 'Mi piace questo <span class="wihlight">colore</span>.', JPN: 'この<span class="wihlight">色</span>が好きです。',},
	
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

1: {imgfile: "",
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",
	
	WI: {ENG: "red", ITA: "rosso", JPN: "赤い",},
	WIr: {ENG: "/rɛd/", ITA: "/ˈrosso/", JPN: "akai", JPNRu: "<ruby>赤いrt>あかい</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "adjectives", ITA: "aggetivi", JPN: "形容詞",},
	semtag2: {Dsp: "block", ENG: "colors", ITA: "colori", JPN: "色",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'I prefer <span class="wihlight">red</span>.', ITA: 'Preferisco il <span class="wihlight">rosso</span>.', JPN: '私は<span class="wihlight">赤</span>が好きです。',},
	EX2: {ENG: 'Apples are <span class="wihlight">red</span>.', ITA: 'Le mele sono <span class="wihlight">rosse</span>.', JPN: 'リンゴは<span class="wihlight">赤</span>です。',},
	EX3: {ENG: '<span class="wihlight">Red</span> wine, please.', ITA: 'Vino <span class="wihlight">rosso</span>, per favore.', JPN: '<span class="wihlight">赤</span>ワインをお願いします。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/1038951", ITA: "https://tatoeba.org/eng/sentences/show/1064287", JPN: "https://tatoeba.org/eng/sentences/show/1037903",},
    
	
    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	PoSp1: {ENG: {ENG: "adjective", ITA: "adjective", JPN: "i",}, 
			ITA: {ENG: "aggettivo", ITA: "aggettivo", JPN: "aggettivo",},
			JPN: {ENG: "形容詞", ITA: "形容詞", JPN: "い",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "", JPN: "adjective",}, 
			ITA: {ENG: "", ITA: "", JPN: "i",},
			JPN: {ENG: "", ITA: "", JPN: "形容詞",},
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
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",
	
	WI: {ENG: "brown", ITA: "marrone", JPN: "茶色",},
	WIr: {ENG: "/braʊn/", ITA: "/marˈrone/", JPN: "chairo", JPNRu: "<ruby>茶色<rt>ちゃいろ</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "adjectives", ITA: "aggetivi", JPN: "形容詞",},
	semtag2: {Dsp: "block", ENG: "colors", ITA: "colori", JPN: "色",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'I would take this <span class="wihlight">brown</span> tie.', ITA: 'Vorrei questa cravatta <span class="wihlight">marrone</span>.', JPN: 'この<span class="wihlight">茶色</span>のネクタイをいただきたいのですが。',},
	EX2: {ENG: 'The bread is <span class="wihlight">brown</span>.', ITA: 'Il pane è <span class="wihlight">marrone</span>.', JPN: 'パンは<span class="wihlight">茶色</span>です。',},
	EX3: {ENG: 'I have <span class="wihlight">brown</span> eyes.', ITA: 'Ho gli occhi <span class="wihlight">marroni</span>.', JPN: '私の目は<span class="wihlight">茶色</span>です。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "https://tatoeba.org/eng/sentences/show/57887", ITA: "https://tatoeba.org/eng/sentences/show/1316977", JPN: "https://tatoeba.org/eng/sentences/show/220566",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
    
    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	PoSp1: {ENG: {ENG: "adjective", ITA: "adjective", JPN: "no",}, 
			ITA: {ENG: "aggetivo", ITA: "aggetivo", JPN: "aggettivo",},
			JPN: {ENG: "形容詞", ITA: "形容詞", JPN: "の",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "", JPN: "adjective",}, 
			ITA: {ENG: "", ITA: "", JPN: "no",},
			JPN: {ENG: "", ITA: "", JPN: "形容詞",},
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
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",
	
	WI: {ENG: "yellow", ITA: "giallo", JPN: "黄色い",},
	WIr: {ENG: "/ˈjɛləʊ/", ITA: "/ˈdʒallo/", JPN: "kiiro", JPNRu: "<ruby>黄色<rt>きいろ</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "adjectives", ITA: "aggetivi", JPN: "形容詞",},
	semtag2: {Dsp: "block", ENG: "colors", ITA: "colori", JPN: "色",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'Bananas are <span class="wihlight">yellow</span>.', ITA: 'Le banane sono <span class="wihlight">gialle</span>.', JPN: 'バナナは<span class="wihlight">黄色</span>です。',},
	EX2: {ENG: 'He lives in the <span class="wihlight">yellow</span> house.', ITA: 'Abita nella casa <span class="wihlight">gialla</span>.', JPN: '彼は<span class="wihlight">黄色い</span>あの家に住んでいる。',},
	EX3: {ENG: 'She is wearing a <span class="wihlight">yellow</span> dress.', ITA: 'Lei sta indossando un vestito <span class="wihlight">giallo</span>.', JPN: '彼女は<span class="wihlight">黄色</span>のドレスを着ています。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/559000", ITA: "https://tatoeba.org/eng/sentences/show/691467", JPN: "https://tatoeba.org/eng/sentences/show/553870",},
	TatSrcEx2: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/1343185", ITA: "https://tatoeba.org/eng/sentences/show/4955591", JPN: "https://tatoeba.org/eng/sentences/show/109521",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	// Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	PoSp1: {ENG: {ENG: "adjective", ITA: "adjective", JPN: "i",}, 
			ITA: {ENG: "aggettivo", ITA: "aggettivo", JPN: "aggettivo",},
			JPN: {ENG: "形容詞", ITA: "形容詞", JPN: "い",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "", JPN: "adjective",}, 
			ITA: {ENG: "", ITA: "", JPN: "i",},
			JPN: {ENG: "", ITA: "", JPN: "形容詞",},
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
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",
	
	WI: {ENG: "purple", ITA: "viola", JPN: "紫",},
	WIr: {ENG: "/ˈpɜːpl/", ITA: "/viˈɔla/", JPN: "murasaki", JPNRu: "<ruby>紫<rt>むらさき</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},

	semtag1: {Dsp: "block", ENG: "adjectives", ITA: "aggetivi", JPN: "形容詞",},
	semtag2: {Dsp: "block", ENG: "colors", ITA: "colori", JPN: "色",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'Her sweater is <span class="wihlight">purple</span>.', ITA: 'Il suo maglione è <span class="wihlight">viola</span>.', JPN: '彼女のセーターは<span class="wihlight">紫</span>色です。',},
	EX2: {ENG: 'My favourite colour is <span class="wihlight">purple</span>.', ITA: 'Il mio colore preferito è il <span class="wihlight">viola</span>.', JPN: '私の好きな色は<span class="wihlight">紫</span>です。',},
	EX3: {ENG: 'I liked the <span class="wihlight">purple</span> bag.', ITA: 'Mi è piaciuta la borsa <span class="wihlight">viola</span>.', JPN: '<span class="wihlight">紫</span>色のバッグが気に入りました。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	PoSp1: {ENG: {ENG: "adjective", ITA: "adjective", JPN: "no",}, 
			ITA: {ENG: "aggetivo", ITA: "aggetivo", JPN: "aggettivo",},
			JPN: {ENG: "形容詞", ITA: "形容詞", JPN: "の",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "", JPN: "adjective",}, 
			ITA: {ENG: "", ITA: "", JPN: "no",},
			JPN: {ENG: "", ITA: "", JPN: "形容詞",},
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
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",
	
	WI: {ENG: "blue", ITA: "azzurro", JPN: "青い",},
	WIr: {ENG: "/bluː/", ITA: "/adˈdzurro/", JPN: "aoi", JPNRu: "<ruby>青い<rt>あおい</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "adjectives", ITA: "aggetivi", JPN: "形容詞",},
	semtag2: {Dsp: "block", ENG: "colors", ITA: "colori", JPN: "色",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'The sky is <span class="wihlight">blue</span>.', ITA: 'Il cielo è <span class="wihlight">azzurro</span>.', JPN: '空は<span class="wihlight">青い</span>。',},
	EX2: {ENG: 'He has <span class="wihlight">blue</span> eyes.', ITA: 'Lui ha gli occhi <span class="wihlight">azzurri</span>.', JPN: '彼は<span class="wihlight">青い</span>目をしています。',},
	EX3: {ENG: 'We have some <span class="wihlight">blue</span> boots.', ITA: 'Abbiamo degli stivali <span class="wihlight">azzurri</span>.', JPN: '<span class="wihlight">青い</span>ブーツがいくつかあります。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	PoSp1: {ENG: {ENG: "adjective", ITA: "adjective", JPN: "i",}, 
			ITA: {ENG: "aggettivo", ITA: "aggettivo", JPN: "aggettivo",},
			JPN: {ENG: "形容詞", ITA: "形容詞", JPN: "い",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "", JPN: "adjective",}, 
			ITA: {ENG: "", ITA: "", JPN: "i",},
			JPN: {ENG: "", ITA: "", JPN: "形容詞",},
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
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",

	WI: {ENG: "green", ITA: "verde", JPN: "緑",},
	WIr: {ENG: "/griːn/", ITA: "/ˈverde/", JPN: "midori", JPNRu: "<ruby>緑<rt>みどり</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "adjectives", ITA: "aggetivi", JPN: "形容詞",},
	semtag2: {Dsp: "block", ENG: "colors", ITA: "colori", JPN: "色",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'Courgettes are <span class="wihlight">green</span>.', ITA: 'Gli zucchini sono <span class="wihlight">verdi</span>.', JPN: 'ズッキーニは<span class="wihlight">緑</span>色です。',},
	EX2: {ENG: 'I prefer <span class="wihlight">green</span> socks.', ITA: 'Preferisco le calze <span class="wihlight">verdi</span>.', JPN: '<span class="wihlight">緑</span>の靴下が好きです。',},
	EX3: {ENG: 'My car is <span class="wihlight">green</span>.', ITA: 'La mia macchina è <span class="wihlight">verde</span>.', JPN: '私の車は<span class="wihlight">緑</span>です。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/851834", ITA: "https://tatoeba.org/eng/sentences/show/853758", JPN: "https://tatoeba.org/eng/sentences/show/982227",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	PoSp1: {ENG: {ENG: "adjective", ITA: "adjective", JPN: "no",}, 
			ITA: {ENG: "aggetivo", ITA: "aggetivo", JPN: "aggettivo",},
			JPN: {ENG: "形容詞", ITA: "形容詞", JPN: "の",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "", JPN: "adjective",}, 
			ITA: {ENG: "", ITA: "", JPN: "no",},
			JPN: {ENG: "", ITA: "", JPN: "形容詞",},
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
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",
	
	WI: {ENG: "pink", ITA: "rosa", JPN: "ピンク",},
	WIr: {ENG: "/pɪŋk/", ITA: "/ˈrɔza/", JPN: "pinku", JPNRu: "<ruby>ピンク<rt>ぴんく</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "adjectives", ITA: "aggetivi", JPN: "形容詞",},
	semtag2: {Dsp: "block", ENG: "colors", ITA: "colori", JPN: "色",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'He has a <span class="wihlight">pink</span> cap.', ITA: 'Lui ha un cappello <span class="wihlight">rosa</span>.', JPN: '彼は<span class="wihlight">ピンク</span>の帽子を持っています。',},
	EX2: {ENG: 'The skirt is <span class="wihlight">pink</span>.', ITA: 'La gonna è <span class="wihlight">rosa</span>.', JPN: 'スカートは<span class="wihlight">ピンク</span>です。',},
	EX3: {ENG: 'She wore a <span class="wihlight">pink</span> blouse.', ITA: 'lei indossava una camicetta <span class="wihlight">rosa</span>.', JPN: '彼女は<span class="wihlight">ピンク</span>のブラウスを着ていた。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	PoSp1: {ENG: {ENG: "adjective", ITA: "adjective", JPN: "no",}, 
			ITA: {ENG: "aggetivo", ITA: "aggetivo", JPN: "aggettivo",},
			JPN: {ENG: "形容詞", ITA: "形容詞", JPN: "の",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "", JPN: "adjective",}, 
			ITA: {ENG: "", ITA: "", JPN: "no",},
			JPN: {ENG: "", ITA: "", JPN: "形容詞",},
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
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",
	
	WI: {ENG: "orange", ITA: "arancione", JPN: "オレンジ色",},
	WIr: {ENG: "/ˈɒrɪnʤ/", ITA: "/aranˈtʃone/", JPN: "orenjiiro", JPNRu: "<ruby>オレンジ色<rt>おれんじいろ</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "adjectives", ITA: "aggetivi", JPN: "形容詞",},
	semtag2: {Dsp: "block", ENG: "colors", ITA: "colori", JPN: "色",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'My tie is <span class="wihlight">orange</span>.', ITA: 'La mia cravatta è <span class="wihlight">arancione</span>.', JPN: '私のネクタイは<span class="wihlight">オレンジ色</span>です。',},
	EX2: {ENG: 'I like <span class="wihlight">orange</span>.', ITA: 'A me piace l&#39;<span class="wihlight">arancione</span>.', JPN: '<span class="wihlight">オレンジ色</span>が好きです。',},
	EX3: {ENG: 'The evening sun is <span class="wihlight">orange</span>.', ITA: 'Il sole di sera non è <span class="wihlight">arancione</span>.', JPN: '夕日は<span class="wihlight">オレンジ色</span>です。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	PoSp1: {ENG: {ENG: "adjective", ITA: "adjective", JPN: "no",}, 
			ITA: {ENG: "aggetivo", ITA: "aggetivo", JPN: "aggettivo",},
			JPN: {ENG: "形容詞", ITA: "形容詞", JPN: "の",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "", JPN: "adjective",}, 
			ITA: {ENG: "", ITA: "", JPN: "no",},
			JPN: {ENG: "", ITA: "", JPN: "形容詞",},
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
	
	ImgBtnTemp: `
<g class="btnbckon">
<rect width="1024" height="768" id="P011BtnImgId0" class="011" onClick="MUIUpdP00X('011', 0, 'BtnClk')"/>
</g>
  
<path id="P011BtnImgId1" onClick="MUIUpdP00X('011', 1, 'BtnClk')" class="011 btnToff" style="fill:#ff0000;" d="M 224,192 A 96.00003,95.999985 0 0 1 128,287.99989 96.00003,95.999985 0 0 1 32,192 96.00003,95.999985 0 0 1 128,95.99989 96.00003,95.999985 0 0 1 224,192 Z" />
  
<path id="P011BtnImgId2" onClick="MUIUpdP00X('011', 2, 'BtnClk')" class="011 btnToff" style="fill:#ff0066;" d="M 736,576 A 96.000006,96.000016 0 0 1 640.00001,671.99996 96.000006,96.000016 0 0 1 544,576 96.000006,96.000016 0 0 1 640.00001,479.99996 96.000006,96.000016 0 0 1 736,576 Z" />
  
<path id="P011BtnImgId3" onClick="MUIUpdP00X('011', 3, 'BtnClk')" class="011 btnToff" style="fill:#ffff00;" d="m 736,192 a 96.000013,96.000013 0 0 1 -96,96 96.000013,96.000013 0 0 1 -96,-96 96.000013,96.000013 0 0 1 96,-96 96.000013,96.000013 0 0 1 96,96 z" />
  
<path id="P011BtnImgId4" onClick="MUIUpdP00X('011', 4, 'BtnClk')" class="011 btnToff" style="fill:#ff6600;" d="M 992.00001,576 A 95.999994,96.000002 0 0 1 896.00008,672 95.999994,96.000002 0 0 1 800,576 a 95.999994,96.000002 0 0 1 96.00008,-96 95.999994,96.000002 0 0 1 95.99993,96 z" />

<path id="P011BtnImgId5" onClick="MUIUpdP00X('011', 5, 'BtnClk')" class="011 btnToff" style="fill:#0000ff;" d="M 224,576 A 96.00003,95.999985 0 0 1 128,671.99989 96.00003,95.999985 0 0 1 32,576 96.00003,95.999985 0 0 1 128,479.99989 96.00003,95.999985 0 0 1 224,576 Z" />

<path id="P011BtnImgId6" onClick="MUIUpdP00X('011', 6, 'BtnClk')" class="011 btnToff" style="fill:#008000;" d="M 480,576 A 96.00003,95.999985 0 0 1 384,671.99989 96.00003,95.999985 0 0 1 288,576 96.00003,95.999985 0 0 1 384,479.99989 96.00003,95.999985 0 0 1 480,576 Z" />

<path id="P011BtnImgId7" onClick="MUIUpdP00X('011', 7, 'BtnClk')" class="011 btnToff" style="fill:#aa4400;" d="M 480,192 A 96.00003,95.999985 0 0 1 384,287.99988 96.00003,95.999985 0 0 1 288,192 96.00003,95.999985 0 0 1 384,95.99988 96.00003,95.999985 0 0 1 480,192 Z" />

<path id="P011BtnImgId8" onClick="MUIUpdP00X('011', 8, 'BtnClk')" class="011 btnToff" style="fill:#800080;" d="m 992.00005,192 a 96.000013,96.000013 0 0 1 -96,96 A 96.000013,96.000013 0 0 1 800,192 a 96.000013,96.000013 0 0 1 96.00005,-96 96.000013,96.000013 0 0 1 96,96 z" />

`,
	
};
//var p00X = p001;

