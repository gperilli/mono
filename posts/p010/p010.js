
var p010 = {

No: "010",
Date: "28/03/2020",
AnnotType: "Annot",

0: {imgfile: "",
	imgsrc: "deriv", imgattrsrcfle: "", 
	imgattrsite: "", imgattrurl: "", 
	
	imgbckg: "wht",	
	
	//Word Item
	WI: {ENG: "weather", ITA: "tempo", JPN: "天気",},
	WIr: {ENG: "/ˈwɛðə/", ITA: "/ˈtɛmpo/", JPN: "tenki", JPNRu: "<ruby>天気<rt>てんき</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
	WIt: {ENG: "the weather", ITA: "tempo", JPN: "天気",},
	WItr: {ENG: "/ˈeə.pɔːt/", ITA: "/ˈtɛmpo/", JPN: "tenki", JPNRu: "<ruby>天気<rt>てんき</rt></ruby>",},
			
	//Sematic Tags
	semtag1: {Dsp: "block", ENG: "weather", ITA: "tempo", JPN: "天気",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'How&#39;s the <span class="wihlight">weather</span>?', ITA: 'Che <span class="wihlight">tempo</span> fa?', JPN: 'どんな<span class="wihlight">天気</span>ですか。',},
	EX2: {ENG: 'The <span class="wihlight">weather</span> got worse.', ITA: 'Il <span class="wihlight">tempo</span> è peggiorato.', JPN: '<span class="wihlight">天気</span>が悪くなった。',},
	EX3: {ENG: 'What nice <span class="wihlight">weather</span>.', ITA: 'Che bel <span class="wihlight">tempo</span>.', JPN: '何ていい<span class="wihlight">天気</span>だろう。',},
	
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

1: {imgfile: "",
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",	

	LnContPosLeft: "6%", LnContPosTop: "6%",
	BtnPosLeft: "4.5%", BtnPosTop: "0%",
	LnPosX1: "50%", LnPosY1: "25%",
	LnPosX2: "50%", LnPosY2: "88%",

	WI: {ENG: "sunny", ITA: "soleggiato", JPN: "晴れ",},
	WIr: {ENG: "/ˈsʌni/", ITA: "/soledˈdʒato/", JPN: "hare", JPNRu: "<ruby>晴れ<rt>はれ</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
    //Sematic Tags
	semtag1: {Dsp: "block", ENG: "weather", ITA: "tempo", JPN: "天気",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'It&#39;s a <span class="wihlight">sunny</span> day.', ITA: 'È un giorno <span class="wihlight">soleggiato</span>.', JPN: '<span class="wihlight">晴</span>の日です。',},
	EX2: {ENG: 'We&#39;ve had few <span class="wihlight">sunny</span> days this summer.', ITA: 'Abbiamo avuto pochi giorni <span class="wihlight">soleggiati</span> questa estate.', JPN: 'この夏は<span class="wihlight">晴れ</span>た日が少なかった。',},
	EX3: {ENG: 'It&#39;s always <span class="wihlight">sunny</span> here.', ITA: 'È sempre <span class="wihlight">soleggiato</span> qui.', JPN: 'ここはいつも<span class="wihlight">晴れ</span>です。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	// Part of Speech Data
	PoSp1: {ENG: {ENG: "adjective", ITA: "adjective", JPN: "no",}, 
			ITA: {ENG: "aggettivo", ITA: "aggettivo", JPN: "aggettivo",},
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

2: {imgfile: "",
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",	

	LnContPosLeft: "29%", LnContPosTop: "23%",
	BtnPosLeft: "4.5%", BtnPosTop: "12%",
	LnPosX1: "50%", LnPosY1: "75%",
	LnPosX2: "50%", LnPosY2: "35%",

	WI: {ENG: "cloudy", ITA: "nuvoloso", JPN: "曇り",},
	WIr: {ENG: "/ˈklaʊdi/", ITA: "/nuvoˈloso/", JPN: "kumori", JPNRu: "<ruby>曇り<rt>くもり</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},

	//Sematic Tags
	semtag1: {Dsp: "block", ENG: "weather", ITA: "tempo", JPN: "天気",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'It&#39;s going to be <span class="wihlight">cloudy</span> tomorrow.', ITA: 'Sarà <span class="wihlight">nuvoloso</span> domani.', JPN: '明日は<span class="wihlight">曇り</span>です。',},
	EX2: {ENG: 'It&#39;s <span class="wihlight">cloudy</span>, but it doesn&#39;t rain.', ITA: 'È <span class="wihlight">nuvoloso</span>, ma non piove.', JPN: '<span class="wihlight">曇り</span>ですが、雨は降りません。',},
	EX3: {ENG: 'It was <span class="wihlight">cloudy</span> that night.', ITA: 'Era <span class="wihlight">nuvoloso</span> quella notte.', JPN: 'その夜は<span class="wihlight">曇り</span>だった。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	// Part of Speech Data
	PoSp1: {ENG: {ENG: "adjective", ITA: "adjective", JPN: "noun",}, 
			ITA: {ENG: "aggettivo", ITA: "aggettivo", JPN: "sostantivo",},
			JPN: {ENG: "形容詞", ITA: "形容詞", JPN: "名詞",},
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

3: {imgfile: "",
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",	
	
	LnContPosLeft: "51%", LnContPosTop: "15%",
	BtnPosLeft: "0%", BtnPosTop: "0%",
	LnPosX1: "25%", LnPosY1: "25%",
	LnPosX2: "55%", LnPosY2: "55%",

	WI: {ENG: "rain", ITA: "pioggia", JPN: "雨",},
	WIr: {ENG: "/ˈreɪn/", ITA: "/ˈpjɔddʒa/", JPN: "ame", JPNRu: "<ruby>雨<rt>あめ</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	//Sematic Tags
	semtag1: {Dsp: "block", ENG: "weather", ITA: "tempo", JPN: "天気",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'Is it <span class="wihlight">rainy</span>?', ITA: 'C&#39;è <span class="wihlight">pioggia</span>?', JPN: '<span class="wihlight">雨</span>ですか？',},
	EX2: {ENG: 'When will the <span class="wihlight">rain</span> stop?', ITA: 'Quando smetterà la <span class="wihlight">pioggia</span>?', JPN: '<span class="wihlight">雨</span>はいつ止まるの？',},
	EX3: {ENG: 'We don&#39;t have much <span class="wihlight">rainy</span>.', ITA: 'Non abbiamo molta <span class="wihlight">pioggia</span>.', JPN: '<span class="wihlight">雨</span>はあまり降っていません。',},
	
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
			JPN: {ENG: "不可算", ITA: "不可算", JPN: "不可算",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "fem.", JPN: "",}, 
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


	LnContPosLeft: "78%", LnContPosTop: "14%",
	BtnPosLeft: "9%", BtnPosTop: "0%",
	LnPosX1: "75%", LnPosY1: "25%",
	LnPosX2: "45%", LnPosY2: "55%",
	
	WI: {ENG: "snow", ITA: "neve", JPN: "雪",},
	WIr: {ENG: "/ˈsnəʊ/", ITA: "/ˈneve/", JPN: "yuki", JPNRu: "<ruby>雪<rt>ゆき</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
	
	//Sematic Tags
	semtag1: {Dsp: "block", ENG: "weather", ITA: "tempo", JPN: "天気",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'Do you have much <span class="wihlight">snow</span> here?', ITA: 'Avete molta <span class="wihlight">neve</span> qui?', JPN: 'ここには<span class="wihlight">雪</span>がたくさんありますか？',},
	EX2: {ENG: 'A lot of <span class="wihlight">snow</span> fell.', ITA: 'È caduta molta <span class="wihlight">neve</span>.', JPN: '<span class="wihlight">雪</span>がたくさん降った。',},
	EX3: {ENG: 'The <span class="wihlight">snow</span> melted.', ITA: 'La <span class="wihlight">neve</span> è sciolta.', JPN: '<span class="wihlight">雪</span>が溶けた。',},
	
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
			JPN: {ENG: "不可算", ITA: "不可算", JPN: "名詞",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "", JPN: "",}, 
			ITA: {ENG: "", ITA: "", JPN: "",},
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
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",	

	LnContPosLeft: "2%", LnContPosTop: "59%",
	BtnPosLeft: "0%", BtnPosTop: "0%",
	LnPosX1: "25%", LnPosY1: "25%",
	LnPosX2: "55%", LnPosY2: "55%",

	WI: {ENG: "storm", ITA: "tempesta", JPN: "嵐",},
	WIr: {ENG: "/ˈstɔːm/", ITA: "/temˈpɛsta/", JPN: "arashi", JPNRu: "<ruby>嵐<rt>あらし</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},

	//Sematic Tags
	semtag1: {Dsp: "block", ENG: "weather", ITA: "tempo", JPN: "天気",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'A <span class="wihlight">storm</span> is coming.', ITA: 'Sta arrivando una <span class="wihlight">tempesta</span>.', JPN: '<span class="wihlight">嵐</span>が来ています。',},
	EX2: {ENG: 'We had a <span class="wihlight">storm</span> yesterday.', ITA: 'Abbiamo avuto una <span class="wihlight">tempesta</span> ieri.', JPN: '昨日<span class="wihlight">嵐</span>がありました。',},
	EX3: {ENG: 'The <span class="wihlight">storm</span> has died down.', ITA: 'La <span class="wihlight">tempesta</span> si è calmata.', JPN: '<span class="wihlight">嵐</span>は沈んだ。',},
	
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
	imgsrc: "deriv", imgattrsrcfle: "p001/imgsrcs/p001-wi6-src.png",
	imgattrsite: "commons.wikimedia.org", imgattrurl: "https://commons.wikimedia.org/wiki/File:Ic_flight_48px.svg",
	
	imgbckg: "wht",	

	LnContPosLeft: "30%", LnContPosTop: "54%",
	BtnPosLeft: "4.5%", BtnPosTop: "0%",
	LnPosX1: "50%", LnPosY1: "25%",
	LnPosX2: "50%", LnPosY2: "65%",

	WI: {ENG: "cold", ITA: "freddo", JPN: "寒い",},
	WIr: {ENG: "/kəʊld/", ITA: "/ˈfreddo/", JPN: "samui", JPNRu: "<ruby>寒い<rt>さむい</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	//Sematic Tags
	semtag1: {Dsp: "block", ENG: "weather", ITA: "tempo", JPN: "天気",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'It&#39;s <span class="wihlight">cold</span>.', ITA: 'Fa <span class="wihlight">freddo</span>.', JPN: '<span class="wihlight">寒</span>いです。',},
	EX2: {ENG: 'Was it <span class="wihlight">cold</span>?', ITA: 'Era <span class="wihlight">freddo</span>?', JPN: '<span class="wihlight">寒</span>かった？',},
	EX3: {ENG: 'It will be <span class="wihlight">cold</span> tonight.', ITA: 'Farà <span class="wihlight">freddo</span> stanotte.', JPN: '今夜は<span class="wihlight">寒</span>くなるでしょう。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	// Part of Speech Data
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

7: {imgfile: "",
	imgsrc: "deriv", imgattrsrcfle: "p001/imgsrcs/p001-wi7-src.png",
	imgattrsite: "commons.wikimedia.org", imgattrurl: "https://commons.wikimedia.org/wiki/File:Ic_flight_48px.svg",
	
	imgbckg: "wht",	

	LnContPosLeft: "52%", LnContPosTop: "54%",
	BtnPosLeft: "4.5%", BtnPosTop: "0%",
	LnPosX1: "50%", LnPosY1: "25%",
	LnPosX2: "50%", LnPosY2: "65%",

	WI: {ENG: "hot", ITA: "caldo", JPN: "暑い",},
	WIr: {ENG: "/ˈhɒt/", ITA: "/ˈkaldo/", JPN: "atsui", JPNRu: "<ruby>暑い<rt>あつい</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	//Sematic Tags
	semtag1: {Dsp: "block", ENG: "weather", ITA: "tempo", JPN: "天気",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'Is it <span class="wihlight">hot</span>?', ITA: 'Fa <span class="wihlight">caldo</span>?', JPN: '<span class="wihlight">暑</span>いですか？',},
	EX2: {ENG: 'It was <span class="wihlight">hot</span> yesterday.', ITA: 'Faceva <span class="wihlight">caldo</span> ieri.', JPN: '昨日は<span class="wihlight">暑</span>かった。',},
	EX3: {ENG: 'It will be <span class="wihlight">hot</span> tomorrow.', ITA: 'Domani farà <span class="wihlight">caldo</span>.', JPN: '明日は<span class="wihlight">暑</span>くなるでしょう。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	// Part of Speech Data
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

8: {imgfile: "",
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "wht",	

	LnContPosLeft: "78%", LnContPosTop: "57%",
	BtnPosLeft: "9%", BtnPosTop: "0%",
	LnPosX1: "75%", LnPosY1: "25%",
	LnPosX2: "45%", LnPosY2: "55%",

	WI: {ENG: "wind", ITA: "vento", JPN: "風",},
	WIr: {ENG: "/ˈwɪnd/", ITA: "/ˈvɛnto/", JPN: "kaze", JPNRu: "<ruby>風<rt>かぜ</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
			
	//Sematic Tags
	semtag1: {Dsp: "block", ENG: "weather", ITA: "tempo", JPN: "天気",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	//Examples
	EX1: {ENG: 'It is <span class="wihlight">windy</span> today.', ITA: 'C&#39;è <span class="wihlight">vento</span> oggi.', JPN: '日は<span class="wihlight">風</span>が強いです。',},
	EX2: {ENG: 'The <span class="wihlight">wind</span> calmed down.', ITA: 'Il <span class="wihlight">vento</span> si è calmato.', JPN: '<span class="wihlight">風</span>が落ち着いた。',},
	EX3: {ENG: 'There was a lot of <span class="wihlight">wind</span>.', ITA: 'C&#39;era molto <span class="wihlight">vento</span>.', JPN: '<span class="wihlight">風</span>が強かった。',},
	
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
			JPN: {ENG: "不可算 / 可算", ITA: "不可算 / 可算", JPN: "名詞",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "", JPN: "",}, 
			ITA: {ENG: "", ITA: "", JPN: "",},
			JPN: {ENG: "名詞", ITA: "名詞", JPN: "",},
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
};
