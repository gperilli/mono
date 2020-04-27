
var p015 = {

No: "015",
Date: "11/04/2020",
AnnotType: "Annot",

0: {imgfile: "",
	imgsrc: "deriv", imgattrsrcfle: "", 
	imgattrsite: "", imgattrurl: "", 
	
	imgbckg: "black",	
	
	//Word Item
	WI: {ENG: "under the sea", ITA: "sotto il mare", JPN: "海の中",},
	WIr: {ENG: "/ˈʌndə ðə siː/", ITA: "/'sotto il ˈmare/", JPN: "uminonaka", JPNRu: "<ruby>海の中<rt>うみのなか</rt></ruby>",},
	WIcmp: {ENG: "3", EngCmp1: "under", EngCmp2: "the", EngCmp3: "sea",
			ITA: "3", ItaCmp1: "sotto", ItaCmp2: "il", ItaCmp3: "mare",
			JPN: "1", JpnCmp1: "",},
	WIt: {ENG: "under the sea", ITA: "sotto il mare", JPN: "海の中",},
	WItr: {ENG: "/ˈʌndə ðə siː/", ITA: "/'sotto il ˈmare/", JPN: "uminonaka", JPNRu: "<ruby>海の中<rt>うみのなか</rt></ruby>",},
	
	//Sematic Tags
	//3 parametrs to get 1: display/hide, 2: text content, 3: class name (from ENG)
	semtag1: {Dsp: "block", ENG: "sea", ITA: "mare", JPN: "`海",},
	semtag2: {Dsp: "block", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "block", ENG: "", ITA: "", JPN: "",},
	

	//Examples
	EX1: {ENG: 'They were found <span class="wihlight">under the sea</span>.', ITA: 'Sono state trovate <span class="wihlight">sotto il mare</span>.', JPN: 'それらは<span class="wihlight">海の中</span>で発見されました。',},
	EX2: {ENG: 'There&#39;s a volcano <span class="wihlight">under the sea</span>.', ITA: 'C&#39;è un vulcano <span class="wihlight">sotto il mare</span>.', JPN: '<span class="wihlight">海の中</span>に火山があります。',},
	EX3: {ENG: 'It&#39;s found forty metres <span class="wihlight">under the sea</span>.', ITA: 'Si trova quaranta metri <span class="wihlight">sotto il mare</span>.', JPN: '<span class="wihlight">海の中</span>に40メートルにあります。',},
	
	//Examples
	EXAud1: {ENG: "They were found under the sea.", ITA: "Sono state trovate sotto il mare.", JPN: "",},
	EXAud2: {ENG: "There's a volcano under the sea.", ITA: "C'è un vulcano sotto il mare.", JPN: "",},
	EXAud3: {ENG: "It's found forty metres under the sea.", ITA: "Si trova quaranta metri sotto il mare.", JPN: "",},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
    
	// Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",

    // Part of Speech Data
	PoSp1: {ENG: {ENG: "adverb phrase", ITA: "adverb phrase", JPN: "",}, 
			ITA: {ENG: "locuzione avverbiale", ITA: "locuzione avverbiale", JPN: "",},
			JPN: {ENG: "副詞句", ITA: "副詞句", JPN: "",},
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
	
	imgbckg: "black",	

	LnContPosLeft: "2%", LnContPosTop: "17%",
	BtnPosLeft: "4.5%", BtnPosTop: "0%",
	LnPosX1: "50%", LnPosY1: "25%",
	LnPosX2: "50%", LnPosY2: "65%",

	WI: {ENG: "sea", ITA: "mare", JPN: "海",},
	WIr: {ENG: "/siː/", ITA: "/ˈmare/", JPN: "umi", JPNRu: "<ruby>海<rt>うみ</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
    semtag1: {Dsp: "block", ENG: "sea", ITA: "mare", JPN: "`海",},
	semtag2: {Dsp: "block", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "block", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'The <span class="wihlight">sea</span> was calm.', ITA: 'Il <span class="wihlight">mare</span> era calmo.', JPN: '<span class="wihlight">海</span>は静かだった。',},
	EX2: {ENG: 'I went swimming in the <span class="wihlight">sea</span>.', ITA: 'Sono andato a nuotare al <span class="wihlight">mare</span>.', JPN: '私は<span class="wihlight">海</span>に泳ぎにいった。',},
	EX3: {ENG: 'How far away is the <span class="wihlight">sea</span>?', ITA: 'Quanto dista il <span class="wihlight">mare</span>?', JPN: '<span class="wihlight">海</span>はどれくらい離れていますか？',},
	
	//Examples
	EXAud1: {ENG: "The sea was calm.", ITA: "Il mare era calmo.", JPN: "海は静かだった。",},
	EX2Aud: {ENG: "I went swimming in the sea.", ITA: "Sono andato a nuotare al mare.", JPN: "私は海に泳ぎにいった。",},
	EXAud3: {ENG: "How far away is the sea?", ITA: "Quanto dista il mare?", JPN: "海はどれくらい離れていますか？",},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/2769830", ITA: "https://tatoeba.org/eng/sentences/show/2769832", JPN: "https://tatoeba.org/eng/sentences/show/185090",},
	TatSrcEx2: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/256584", ITA: "https://tatoeba.org/eng/sentences/show/999998", JPN: "https://tatoeba.org/eng/sentences/show/157946",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "",},

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

2: {imgfile: "",
	imgsrc: "deriv", imgattrsrcfle: "", 
	imgattrsite: "", imgattrurl: "", 
	
	imgbckg: "black",	

	LnContPosLeft: "8%", LnContPosTop: "47%",
	BtnPosLeft: "0%", BtnPosTop: "0%",
	LnPosX1: "25%", LnPosY1: "25%",
	LnPosX2: "55%", LnPosY2: "55%",

	WI: {ENG: "shipwreck", ITA: "naufragio", JPN: "難破船",},
	WIr: {ENG: "/ʃɪp rɛk/", ITA: "/nauˈfradʒo/", JPN: "nanpasen", JPNRu: "<ruby>難破船<rt>なんぱせん</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},

	semtag1: {Dsp: "block", ENG: "sea", ITA: "mare", JPN: "`海",},
	semtag2: {Dsp: "block", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "block", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'The <span class="wihlight">shipwreck</span> was discovered in 2015.', ITA: 'Il <span class="wihlight">naufragio</span> è stato scoperto nel 2015', JPN: '<span class="wihlight">難破船</span>は2015年に発見されました',},
	EX2: {ENG: 'At least 12 migrants died in the <span class="wihlight">shipwreck</span>.', ITA: 'Almeno 12 migranti sono morti nel <span class="wihlight">naufragio</span>.', JPN: '<span class="wihlight">難破船</span>で少なくとも12人の移民が死亡した。',},
	EX3: {ENG: 'They found gold on the <span class="wihlight">shipwreck</span>.', ITA: 'Hanno trovato dell&#39;oro in un <span class="wihlight">naufragio</span>.', JPN: '彼らは<span class="wihlight">難破船</span>で金を見つけた。',},
	
	EXAud1: {ENG: "The shipwreck was discovered in 2015.", ITA: "Il naufragio è stato scoperto nel 2015", JPN: "難破船は2015年に発見されました",},
	EXAud2: {ENG: "At least 12 migrants died in the shipwreck.", ITA: "Almeno 12 migranti sono morti nel naufragio.", JPN: "難破船で少なくとも12人の移民が死亡した。",},
	EXAud3: {ENG: "They found gold on the shipwreck.", ITA: "Hanno trovato dell&#39;oro in un naufragio.", JPN: "彼らは難破船で金を見つけた。",},
	
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
	imgsrc: "deriv", imgattrsrcfle: "", 
	imgattrsite: "", imgattrurl: "", 
	
	imgbckg: "black",	
	
	LnContPosLeft: "25%", LnContPosTop: "33%",
	BtnPosLeft: "4.5%", BtnPosTop: "0%",
	LnPosX1: "50%", LnPosY1: "25%",
	LnPosX2: "50%", LnPosY2: "55%",

	WI: {ENG: "fish", ITA: "pesce", JPN: "魚",},
	WIr: {ENG: "/fɪʃ/", ITA: "/ˈpeʃʃe/", JPN: "sakana", JPNRu: "<ruby>魚<rt>さかな</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "sea", ITA: "mare", JPN: "`海",},
	semtag2: {Dsp: "block", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "block", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'He caught three <span class="wihlight">fish</span>.', ITA: 'Lui ha pescato tre <span class="wihlight">pesci</span>.', JPN: '彼は<span class="wihlight">魚</span>を３匹釣った。',},
	EX2: {ENG: 'The <span class="wihlight">fish</span> wants to escape.', ITA: 'Il <span class="wihlight">pesce</span> vuole scappare.', JPN: '<span class="wihlight">魚</span>は逃げ出したい。',},
	EX3: {ENG: 'That <span class="wihlight">fish</span> lives in fresh water.', ITA: 'Quel <span class="wihlight">pesce</span> vive nell&#39;acqua fresca.', JPN: 'その<span class="wihlight">魚</span>は真水に住む。',},
	
	EXAud1: {ENG: "He caught three fish.", ITA: "Lui ha pescato tre pesci.", JPN: "彼は魚を３匹釣った。",},
	EXAud2: {ENG: "The fish wants to escape.", ITA: "Il pesce vuole scappare.", JPN: "魚は逃げ出したい。",},
	EXAud3: {ENG: "That fish lives in fresh water.", ITA: "Quel pesce vive nell&#39;acqua fresca.", JPN: "その魚は真水に住む。",},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/295272", ITA: "https://tatoeba.org/eng/sentences/show/412094", JPN: "https://tatoeba.org/eng/sentences/show/108413",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/48710", ITA: "https://tatoeba.org/eng/sentences/show/3367824", JPN: "https://tatoeba.org/eng/sentences/show/211434",},

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

4: {imgfile: "",
	imgsrc: "deriv", imgattrsrcfle: "", 
	imgattrsite: "", imgattrurl: "", 
	
	imgbckg: "black",	

	LnContPosLeft: "37%", LnContPosTop: "76%",
	BtnPosLeft: "9%", BtnPosTop: "6%",
	LnPosX1: "75%", LnPosY1: "50%",
	LnPosX2: "27%", LnPosY2: "67%",

	WI: {ENG: "treasure", ITA: "tesoro", JPN: "宝",},
	WIr: {ENG: "/ˈtrɛʒə/", ITA: "/teˈzɔro/", JPN: "takara", JPNRu: "<ruby>宝<rt>たから</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},

	semtag1: {Dsp: "block", ENG: "sea", ITA: "mare", JPN: "`海",},
	semtag2: {Dsp: "block", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "block", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'Where is the <span class="wihlight">traesure</span> buried?', ITA: 'Dov&#39;è sepolto il <span class="wihlight">tesoro</span>?', JPN: '<span class="wihlight">宝</span>物はどこに埋葬されていますか？',},
	EX2: {ENG: 'He found a buried <span class="wihlight">traesure</span>.', ITA: 'Lui ha trovato un <span class="wihlight">tesoro</span> sepolto.', JPN: '彼は埋められた<span class="wihlight">宝</span>物を見つけました。',},
	EX3: {ENG: 'I have a <span class="wihlight">traesure</span> map.', ITA: 'Ho una mappa del <span class="wihlight">tesoro</span>.', JPN: '<span class="wihlight">宝</span>の地図を持っています。',},
	
	EXAud1: {ENG: "Where is the traesure buried?", ITA: "Dov'è sepolto il tesoro?", JPN: "宝物はどこに埋葬されていますか？",},
	EXAud2: {ENG: "He found a buried treasure.", ITA: "Lui ha trovato un tesoro sepolto.", JPN: "彼は埋められた宝物を見つけました。",},
	EXAud3: {ENG: "I have a treasure map.", ITA: "Ho una mappa del tesoro.", JPN: "宝の地図を持っています。",},
	
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

5: {imgfile: "",
	imgsrc: "deriv", imgattrsrcfle: "", 
	imgattrsite: "", imgattrurl: "", 
	
	imgbckg: "black",	

	LnContPosLeft: "68%", LnContPosTop: "75%",
	BtnPosLeft: "0%", BtnPosTop: "0%",
	LnPosX1: "25%", LnPosY1: "25%",
	LnPosX2: "55%", LnPosY2: "55%",

	WI: {ENG: "crab", ITA: "granchio", JPN: "かに",},
	WIr: {ENG: "/kræb/", ITA: "/ˈɡrankjo/", JPN: "kani", JPNRu: "<ruby>かに<rt>かに</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},

	semtag1: {Dsp: "block", ENG: "sea", ITA: "mare", JPN: "`海",},
	semtag2: {Dsp: "block", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "block", ENG: "", ITA: "", JPN: "",},
	
	
	
	//Examples
	EX1: {ENG: '<span class="wihlight">Crabs</span> usually live in groups.', ITA: 'I <span class="wihlight">granchi</span> vivono solitamente in gruppo.', JPN: '<span class="wihlight">カニ</span>は通常、グループで住んでいます。',},
	EX2: {ENG: 'The <span class="wihlight">crab</span> is an aquatic animal.', ITA: 'Il <span class="wihlight">granchio</span> è un animale aquatico.', JPN: '<span class="wihlight">カニ</span>は水生動物です',},
	EX3: {ENG: 'It&#39;s difficult to catch a <span class="wihlight">crab</span>.', ITA: 'È difficile catturare un <span class="wihlight">granchio</span>.', JPN: '<span class="wihlight">カニ</span>を捕まえるのは難しい。',},
	
	EXAud1: {ENG: "Crabs usually live in groups.", ITA: "I granchi vivono solitamente in gruppo.", JPN: "カニは通常、グループで住んでいます。",},
	EXAud2: {ENG: "The crab is an aquatic animal.", ITA: "Il granchio è un animale aquatico.", JPN: "カニは水生動物です",},
	EXAud3: {ENG: "It's difficult to catch a crab.", ITA: "È difficile catturare un granchio.", JPN: "カニを捕まえるのは難しい。",},
	
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
	
	imgbckg: "black",	

	LnContPosLeft: "52%", LnContPosTop: "35%",
	BtnPosLeft: "0%", BtnPosTop: "6%",
	LnPosX1: "25%", LnPosY1: "50%",
	LnPosX2: "65%", LnPosY2: "50%",

	WI: {ENG: "bubbles", ITA: "bollicina", JPN: "泡",},
	WIr: {ENG: "/ˈbʌblz/", ITA: "/bolliˈtʃina/", JPN: "awa", JPNRu: "<ruby>泡<rt>あわ</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "sea", ITA: "mare", JPN: "`海",},
	semtag2: {Dsp: "block", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "block", ENG: "", ITA: "", JPN: "",},
	
	
	
	//Examples
	EX1: {ENG: 'Air <span class="wihlight">bubbles</span> form in the glass.', ITA: '<span class="wihlight">Bolle</span> d&#39;aria si formano nella bicchiere.', JPN: 'ガラスに気<span class="wihlight">泡</span>が発生する。',},
	EX2: {ENG: 'Why do soap <span class="wihlight">bubbles</span> fly?', ITA: 'Perché volano le <span class="wihlight">bolle</span> di sapone?', JPN: 'なぜ石鹸の<span class="wihlight">泡</span>が飛ぶのですか？',},
	EX3: {ENG: 'The <span class="wihlight">bubbles</span> rise up in the glass.', ITA: 'Le <span class="wihlight">bolle</span> salgono verso l’alto nel bicchiere.', JPN: '<span class="wihlight">泡</span>がグラスの中を上昇します。',},
	
	EXAud1: {ENG: "Air bubbles form in the glass.", ITA: "Bolle d'aria si formano nella bicchiere.", JPN: "ガラスに気泡が発生する。",},
	EXAud2: {ENG: "Why do soap bubbles fly?", ITA: "Perché volano le bolle di sapone?", JPN: "なぜ石鹸の泡が飛ぶのですか？",},
	EXAud3: {ENG: "The bubbles rise up in the glass.", ITA: "Le bolle salgono verso l’alto nel bicchiere.", JPN: "泡がグラスの中を上昇します。",},
	
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

7: {imgfile: "",
	imgsrc: "deriv", imgattrsrcfle: "", 
	imgattrsite: "", imgattrurl: "", 
	
	imgbckg: "black",	

	LnContPosLeft: "67%", LnContPosTop: "50%",
	BtnPosLeft: "4.5%", BtnPosTop: "0%",
	LnPosX1: "50%", LnPosY1: "25%",
	LnPosX2: "50%", LnPosY2: "65%",

	WI: {ENG: "diver", ITA: "palombaro", JPN: "ダイバー",},
	WIr: {ENG: "/ˈdaɪvə/", ITA: "/palomˈbaro/", JPN: "だいばー", JPNRu: "<ruby>ダイバー<rt>だいばー</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "sea", ITA: "mare", JPN: "`海",},
	semtag2: {Dsp: "block", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "block", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'The <span class="wihlight">diver</span> goes under water.', ITA: 'Il <span class="wihlight">palombaro</span> scendere sotto acqua.', JPN: '<span class="wihlight">ダイバー</span>は水に沈む。',},
	EX2: {ENG: 'He is the best <span class="wihlight">diver</span> in the navy.', ITA: 'Lui è il miglior <span class="wihlight">palombaro</span> della marina.', JPN: '彼は海軍で最高の<span class="wihlight">ダイバー</span>です。',},
	EX3: {ENG: 'Being a <span class="wihlight">diver</span> is a dangerous activity.', ITA: 'Fare il <span class="wihlight">palombaro</span> è una attività più pericolosa.', JPN: '<span class="wihlight">ダイバー</span>であることは危険な活動です',},
	
	EXAud1: {ENG: "The diver goes under water.", ITA: "Il palombaro scendere sotto acqua.", JPN: "ダイバーは水に沈む。",},
	EXAud2: {ENG: "He is the best diver in the navy.", ITA: "Lui è il miglior palombaro della marina.", JPN: "彼は海軍で最高のダイバーです。",},
	EXAud3: {ENG: "Being a diver is a dangerous activity.", ITA: "Fare il palombaro è una attività più pericolosa.", JPN: "ダイバーであることは危険な活動です",},
	
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

8: {imgfile: "",
	imgsrc: "original", imgattrsrcfle: "", 
	imgattrsite: "", imgattrurl: "", 
	
	imgbckg: "black",	

	LnContPosLeft: "78%", LnContPosTop: "75%",
	BtnPosLeft: "4.5%", BtnPosTop: "0%",
	LnPosX1: "50%", LnPosY1: "25%",
	LnPosX2: "81%", LnPosY2: "79%",

	WI: {ENG: "sea bed", ITA: "fondale marino", JPN: "海底",},
	WIr: {ENG: "/ˈsiːbɛd/", ITA: "/fonˈdale maˈrino/", JPN: "kaitei", JPNRu: "<ruby>海底<rt>かいてい</rt></ruby>",},
	WIcmp: {ENG: "2", EngCmp1: "sea", EngCmp2: "bed",
			ITA: "2", ItaCmp1: "fondale", ItaCmp2: "marino",
			JPN: "1", JpnCmp1: "",},
			
	semtag1: {Dsp: "block", ENG: "sea", ITA: "mare", JPN: "`海",},
	semtag2: {Dsp: "block", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "block", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'You can see the <span class="wihlight">seabed</span>.', ITA: 'Ci si può vedere il <span class="wihlight">fondale marino</span>.', JPN: '<span class="wihlight">海底</span>が見える。',},
	EX2: {ENG: 'The airplane was found on the <span class="wihlight">seabed</span>.', ITA: 'L&#39;aereoplano è stato trovato sul <span class="wihlight">fondale marino</span>.', JPN: '飛行機は<span class="wihlight">海底</span>で発見されました。',},
	EX3: {ENG: 'What is the distance between the <span class="wihlight">seabed</span> and the surface of the water?', ITA: 'Qual&#39;è la distanza tra il <span class="wihlight">fondale marino</span> e la superficie dell&#39;acqua?', JPN: '<span class="wihlight">海底</span>と水面の距離はどれくらいですか？',},
	
	EXAud1: {ENG: "You can see the seabed.", ITA: "Ci si può vedere il fondale marino.", JPN: "海底が見える。",},
	EXAud2: {ENG: "The airplane was found on the seabed.", ITA: "L'aereoplano è stato trovato sul fondale marino.", JPN: '飛行機は海底で発見されました。',},
	EXAud3: {ENG: "What is the distance between the seabed and the surface of the water?", ITA: "Qual'è la distanza tra il fondale marino e la superficie dell'acqua?", JPN: "海底と水面の距離はどれくらいですか？",},
	
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
};
