// 009 data
var p006 = {
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
No: "006",
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
	BtnContPosTop: "76%",
	BtnPosLeft: "-5%",
	BtnPosTop: "25%",
	BtnTxtOffSet: "0%",

	//Word Item
	WI: {ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	WIr: {ENG: "/ˈeə.pɔːt/", ITA: "/kuˈtʃina/", JPN: "daidokoro", JPNRu: "<ruby>台所<rt>だいどころ</rt></ruby>",},
	
	//Sematic Tags
	//3 parametrs to get 1: display/hide, 2: text content, 3: class name (from ENG)
	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},


	//Examples
	EX1: {ENG: 'Mother is cooking in the <span class="wihlight">kitchen</span>.', ITA: 'La mamma sta cucinando in <span class="wihlight">cucina</span>.', JPN: '母は現在<span class="wihlight">台所</span>で料理をしています。',},
	EX2: {ENG: 'At the end of the corridor there is the bathroom and the <span class="wihlight">kitchen</span>.', ITA: 'In fondo al corridoio c&#39;è il bagno e la <span class="wihlight">cucina</span>.', JPN: '廊下の突き当りにお手洗いと<span class="wihlight">台所</span>があります。',},
	EX3: {ENG: 'The <span class="wihlight">kitchen</span> was very big.', ITA: 'La <span class="wihlight">cucina</span> era molto grande.', JPN: '<span class="wihlight">台所</span>はとても大きかった。',},
    	
    	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/1232200", ITA: "https://tatoeba.org/eng/sentences/show/1309984", JPN: "https://tatoeba.org/eng/sentences/show/3069743",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

	// Dictionary search suffixes
    engLhyph: "kitchen", engLperc: "kitchen", engLplus: "kitchen", engForv: "kitchen/#en",
    itaLhyph: "cucina", itaLplus: "cucina", itaForv: "cucina/#it",
    jpnLpercen: "%E5%8F%B0%E6%89%80", jpnLgoo: "45226/meaning/m1u/", jpnForv: "くうこう_%28空港%29/#ja",

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


1: {imgfile: "p009/monop009-wi1.svg",
	imgsrc: "original",
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",	

	dirmode: "right",
	LnContPosLeft: "3%",
	LnContPosTop: "17%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "50%",
	LnPosY2: "65%",

	WI: {ENG: "towel", ITA: "asciugamano", JPN: "タオル",},
	WIr: {ENG: "/ˈtaʊəl/", ITA: "/aʃʃuɡaˈmano/", JPN: "taoru", JPNRu: "<ruby>タオル<rt>たおる</rt></ruby>",},

    semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'Dry your face with a <span class="wihlight">towel</span>.', ITA: 'Asciugati la faccia con un <span class="wihlight">asciugamano</span>.', JPN: '<span class="wihlight">タオル</span>で顔をふきなさい。',},
	EX2: {ENG: 'Could you bring me a <span class="wihlight">towel</span>?', ITA: 'Mi potresti portare un <span class="wihlight">asciugamano</span>?', JPN: '<span class="wihlight">タオル</span>を持て来てくれますか。',},
	EX3: {ENG: 'This <span class="wihlight">towel</span> is too small.', ITA: 'Questo <span class="wihlight">asciugamano</span> è troppo piccolo.', JPN: 'この<span class="wihlight">タオル</span>は小さすぎます。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},


    engLhyph: "towel", engLperc: "towel", engLplus: "towel", engForv: "towel/#en",
    itaLhyph: "asciugamano", itaLplus: "asciugamano", itaForv: "asciugamano/#it",
    jpnLpercen: "%E3%82%BF%E3%82%AA%E3%83%AB", jpnLgoo: "45596/meaning/m1u/", jpnForv: "タオル/#ja",
	
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

2: {imgfile: "p009/monop009-wi2.svg",
	imgsrc: "original",
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",

	dirmode: "right",
	LnContPosLeft: "42%",
	LnContPosTop: "0%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "89%",
	LnPosY2: "26%",

	WI: {ENG: "cupboard", ITA: "credenza", JPN: "戸棚",},
	WIr: {ENG: "/ˈkʌbəd/", ITA: "/kreˈdɛntsa/", JPN: "todana", JPNRu: "<ruby>戸棚<rt>とだな</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'Put the dishes in the <span class="wihlight">cupboard</span>.', ITA: 'Metti i piatti nella <span class="wihlight">credenza</span>.', JPN: 'お皿を<span class="wihlight">戸棚</span>に',},
	EX2: { ENG: 'The <span class="wihlight">cupboard</span> is next to the refridgerator.', ITA: 'La <span class="wihlight">credenza</span> è accanto al frigorifero.', JPN: '<span class="wihlight">戸棚</span>は冷蔵庫の隣です。',},
	EX3: {ENG: 'The <span class="wihlight">cupboard</span> is full of dishes.', ITA: 'La <span class="wihlight">credenza</span> è piena di stoviglie.', JPN: '<span class="wihlight">戸棚</span>はお皿でいっぱい',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: '', ITA: '', JPN: '',},
	TatSrcEx2: {Dsp: "none", ENG: '', ITA: '', JPN: '',},
	TatSrcEx3: {Dsp: "none", ENG: '', ITA: '', JPN: '',},

    engLhyph: "cupboard", engLperc: "cupboard", engLplus: "cupboard", engForv: "cupboard/#en",
    itaLhyph: "credenza", itaLplus: "credenza", itaForv: "credenza/#it",
    jpnLpercen: "%E6%88%B8%E6%A3%9A", jpnLgoo: "159121/meaning/m1u/", jpnForv: "戸棚/#ja",
	
	// Part of Speech Data
	PoSp1: {ENG: {ENG: "noun", ITA: "noun", JPN: "noun",}, 
			ITA: {ENG: "sostantivo", ITA: "sostantivo", JPN: "sostantivo",},
			JPN: {ENG: "可算", ITA: "可算", JPN: "可算",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "masc.", JPN: "",}, 
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

3: {imgfile: "p009/monop009-wi3.svg",
	imgsrc: "original",
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",

	dirmode: "down",
	LnContPosLeft: "13%",
	LnContPosTop: "54%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "50%",
	LnPosY2: "55%",

	WI: {ENG: "drain", ITA: "scarico", JPN: "排水口",},
	WIr: {ENG: "/dreɪn/", ITA: "/ˈskariko/", JPN: "haisuikou", JPNRu: "<ruby>排水口<rt>はいすいこう</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'How can I unblock the kitchen <span class="wihlight">drain</span>?', ITA: 'Come posso sbloccare lo <span class="wihlight">scarico</span> della cucina?', JPN: '台所の<span class="wihlight">排水口</span>のブロックを解除するにはどうすればよいですか？',},
	EX2: {ENG: 'The ring went inside the basin <span class="wihlight">drain</span>.', ITA: 'l&#39;anello è andato dentro lo <span class="wihlight">scarico<span> del lavandino.', JPN: 'リングは、流域の<span class="wihlight">排水口</span>の内に入りました。',},
	EX3: {ENG: 'We have to wash the basin <span class="wihlight">drain</span>.', ITA: 'Dobbiamo pulire lo <span class="wihlight">scarico</span> del lavandino.', JPN: '<span class="wihlight">排水口</span>洗わないとだめです。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "drain", engLperc: "drain", engLplus: "drain", engForv: "drain/#en",
    itaLhyph: "scarico", itaLplus: "scarico", itaForv: "scarico/#it",
    jpnLpercen: "%E6%8E%92%E6%B0%B4%E5%8F%A3", jpnLgoo: "59712/meaning/m1u/", jpnForv: "排水口/#ja",
	
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

4: {imgfile: "p009/monop009-wi4.svg",
	imgsrc: "original",
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",	

	dirmode: "up",
	LnContPosLeft: "27%",
	LnContPosTop: "17%",
	BtnPosLeft: "4.5%",
	BtnPosTop: "0%",
	LnPosX1: "50%",
	LnPosY1: "25%",
	LnPosX2: "50%",
	LnPosY2: "65%",

	WI: {ENG: "tap", ITA: "rubinetto", JPN: "蛇口",},
	WIr: {ENG: "/tæp/", ITA: "/rubiˈnetto/", JPN: "jaguchi", JPNRu: "<ruby>蛇口<rt>じゃぐち</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'You can&#39;t use this <span class="wihlight">tap</span>. It&#39;s out of order.', ITA: 'Non puoi usare questo <span class="wihlight">rubinetto</span>; è fuori uso.', JPN: 'この<span class="wihlight">蛇口</span>は使えません。故障しています。',},
	EX2: {ENG: 'We don&#39;t drink the water from the <span class="wihlight">tap</span>', ITA: 'Non beviamo acqua dal <span class="wihlight">rubinetto</span>.', JPN: '私たちは<span class="wihlight">蛇口</span>からの水を飲みません。',},
	EX3: {ENG: 'Don&#39;t forget to close the <span class="wihlight">tap</span>.', ITA: 'Non dimenticare di chiudere il <span class="wihlight">rubinetto</span>.', JPN: '<span class="wihlight">蛇口</span>を閉めることを忘れないでください。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "display-block", ENG: "https://tatoeba.org/eng/sentences/show/58692", ITA: "https://tatoeba.org/eng/sentences/show/1021335", JPN: "https://tatoeba.org/eng/sentences/show/221367",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
    engLhyph: "tap", engLperc: "tap", engLplus: "tap", engForv: "tap/#en",
    itaLhyph: "rubinetto", itaLplus: "rubinetto", itaForv: "rubinetto/#it",
    jpnLpercen: "%E8%9B%87%E5%8F%A3", jpnLgoo: "33020/meaning/m1u/", jpnForv: "蛇口/#ja",
	
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

5: {imgfile: "p009/monop009-wi5.svg",
	imgsrc: "original",
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",

	dirmode: "downleft",
	LnContPosLeft: "51%",
	LnContPosTop: "22%",
	BtnPosLeft: "0%",
	BtnPosTop: "0%",
	LnPosX1: "25%",
	LnPosY1: "25%",
	LnPosX2: "55%",
	LnPosY2: "55%",

	WI: {ENG: "dish washing liquid", ITA: "detersivo per i piatti", JPN: "洗剤",},
	WIr: {ENG: "/dɪʃ ˈwɒʃɪŋ ˈlɪkwɪd/", ITA: "/deterˈsivo per i ˈpjatti/", JPN: "senzai", JPNRu: "<ruby>洗剤<rt>せんざい</rt></ruby>",},


	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'I&#39;m going to buy the <span class="wihlight">dish washing liquid</span>.', ITA: 'Vado a comprare il <span class="wihlight">detersivo per i piatti</span>.', JPN: '<span class="wihlight">洗剤</span>を買いに行く。',},
	EX2: {ENG: 'Use the new <span class="wihlight">dish washing liquid</span> and clean the wine glasses.', ITA: 'Usa il nuovo　<span class="wihlight">detersivo</span> e　lava i bicchieri da vino.', JPN: '新しい<span class="wihlight">洗剤</span>を使ってワイングラスを洗って。',},
	EX3: {ENG: 'The <span class="wihlight">dish washing liquid</span> is about to run out.', ITA: 'Il <span class="wihlight">detersivo per piatti</span> sta per finire.', JPN: '<span class="wihlight">洗剤</span>がなくなりそうです。',},

	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
    
    engLhyph: "dish-washing-liquid", engLperc: "dish%20washing%20liquid", engLplus: "dish+washing+liquid", engForv: "dish_washing_liquid/#en",
    itaLhyph: "detersivo", itaLplus: "detersivo", itaForv: "detersivo/#it",
    jpnLpercen: "%E6%B4%97%E5%89%A4", jpnLgoo: "42031/meaning/m1u/", jpnForv: "洗剤/#ja",
	
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

6: {imgfile: "p009/monop009-wi6.svg",
	imgsrc: "deriv",
	imgsrccr: "CC BY 4.0",
	imgattrsrcfle: "p009/imgsrcs/p009-wi6-src.png",
	imgattrsite: "svgrepo.com",
	imgattrurl: "https://www.svgrepo.com/show/183800/sponge.svg",
	
	imgbckg: "wht",

	dirmode: "up",
	LnContPosLeft: "70%",
	LnContPosTop: "48%",
	BtnPosLeft: "9%",
	BtnPosTop: "6%",
	LnPosX1: "75%",
	LnPosY1: "50%",
	LnPosX2: "35%",
	LnPosY2: "50%",

	WI: {ENG: "sponge", ITA: "spugna", JPN: "スポンジ",},
	WIr: {ENG: "/spʌnʤ/", ITA: "/ˈspuɲɲa/", JPN: "suponji", JPNRu: "<ruby>スポンジ<rt>すぽんじ</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'I saw the <span class="wihlight">sponge</span> in the sink.', ITA: 'Ho visto la <span class="wihlight">spugna</span> nel lavandino.', JPN: '<span class="wihlight">スポンジ</span>は流しに見た。',},
	EX2: {ENG: 'The <span class="wihlight">sponge</span> for washing the dishes is dirty.', ITA: 'La <span class="wihlight">spugna</span> per lavare i piatti　è　sporca. ', JPN: 'お皿を洗うための<span class="wihlight">スポンジ</span>は汚い。',},
	EX3: {ENG: 'Don&#39;t use that <span class="wihlight">sponge</span> to wash the car.', ITA: 'Non usare quella <span class="wihlight">spugna</span> per lavare la macchina.', JPN: 'あの<span class="wihlight">スポンジ</span>を車を洗うために使わないで。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "sponge", engLperc: "sponge", engLplus: "sponge", engForv: "sponge/#en",
    itaLhyph: "spugna", itaLplus: "spugna", itaForv: "spugna/#it",
    jpnLpercen: "%E3%82%B9%E3%83%9D%E3%83%B3%E3%82%B8", jpnLgoo: "39544/meaning/m1u/", jpnForv: "スポンジ/#ja",
	
	// Part of Speech Data
	PoSp1: {ENG: {ENG: "noun", ITA: "noun", JPN: "noun",}, 
			ITA: {ENG: "sostantivo", ITA: "sostantivo", JPN: "sostantivo",},
			JPN: {ENG: "可算", ITA: "可算", JPN: "可算",},
			},
	PoSp2: {ENG: {ENG: "", ITA: "masc.", JPN: "",}, 
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


7: {imgfile: "p009/monop009-wi7.svg",
	imgsrc: "original",
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",

	dirmode: "down",
	LnContPosLeft: "70%",
	LnContPosTop: "48%",
	BtnPosLeft: "9%",
	BtnPosTop: "6%",
	LnPosX1: "75%",
	LnPosY1: "50%",
	LnPosX2: "35%",
	LnPosY2: "50%",

	 WI: {ENG: "sink", ITA: "lavandino della cucina", JPN: "流し",},
	WIr: {ENG: "/sɪŋk/", ITA: "/lavanˈdino/", JPN: "nagashi", JPNRu: "<ruby>流し<rt>ながし</rt></ruby>",},

	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'Put the plate in the <span class="wihlight">sink</span>.', ITA: 'Metti il piatto nel <span class="wihlight">lavandino</span>.', JPN: 'お皿を<span class="wihlight">流し</span>に入れて。',},
	EX2: {ENG: 'The toilet paper is under the <span class="wihlight">sink</span>.', ITA: 'La carta igienica è sotto il <span class="wihlight">lavandino</span>.', JPN: 'トイレットペーパーは、<span class="wihlight">流し</span>の下にあります。',},
	EX3: {ENG: 'Can you fix my <span class="wihlight">sink</span>?', ITA: 'Puoi aggiustarmi il <span class="wihlight">lavandino</span>?', JPN: '<span class="wihlight">流し</span>を直してくれえる？',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "sink", engLperc: "sink", engLplus: "sink", engForv: "sink/#en",
    itaLhyph: "lavandino", itaLplus: "lavandino", itaForv: "lavandino/#it",
    jpnLpercen: "%E6%B5%81%E3%81%97", jpnLgoo: "55992/meaning/m1u/", jpnForv: "流し/#ja",

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

8: {imgfile: "p009/monop009-wi8.svg",
	imgsrc: "original",
	imgsrccr: "",
	imgattrsrcfle: "",
	imgattrsite: "",
	imgattrurl: "",
	
	imgbckg: "wht",

	dirmode: "up",
	LnContPosLeft: "77%",
	LnContPosTop: "17%",
	BtnPosLeft: "9%",
	BtnPosTop: "0%",
	LnPosX1: "75%",
	LnPosY1: "25%",
	LnPosX2: "45%",
	LnPosY2: "55%",

	WI: {ENG: "microwave", ITA: "forno a microonde", JPN: "電子レンジ",},
	WIr: {ENG: "/ˈmaɪkrəʊweɪv/", ITA: "/ˈforno a mikroˈonda/", JPN: "denshirenji", JPNRu: "<ruby>電子レンジ<rt>でんしれんじ</rt></ruby>",},
    
	semtag1: {Dsp: "block", ENG: "kitchen", ITA: "cucina", JPN: "台所",},
	semtag2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'The <span class="wihlight">microwave</span> is there.', ITA: 'Il <span class="wihlight">forno a microonde</span> è lì.', JPN: '<span class="wihlight">電子レンジ</span>はあっちだ。',},
	EX2: {ENG: 'Reheat the tea in the <span class="wihlight">microwave</span>.', ITA: 'Riscalda il tè nel forno a <span class="wihlight">microonde</span>.', JPN: '<span class="wihlight">電子レンジ</span>でお茶を温める。',},
	EX3: {ENG: 'Don&#39;t put metal in the <span class="wihlight">microwave</span>.', ITA: 'Non mettere metallo nel <span class="wihlight">forno a microonde</span>.', JPN: '<span class="wihlight">電子レンジ</span>の中に金属を入れないで。',},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    engLhyph: "microwave", engLperc: "microwave", engLplus: "microwave", engForv: "microwave/#en",
	itaLhyph: "forno-a-microonde", itaLplus: "forno+a+microonde", itaForv: "forno_a_microonde/#it",
    jpnLpercen: "%E9%9B%BB%E5%AD%90%E3%83%AC%E3%83%B3%E3%82%B8", jpnLgoo: "52267/meaning/m1u/", jpnForv: "電子レンジ/#ja",

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

//var p00X = 008;
