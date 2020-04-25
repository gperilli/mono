
var p001 = {

No: "001",
Date: "18/08/2018",
AnnotType: "Annot",

0: {imgfile: "", 
	imgsrc: "deriv", imgattrsrcfle: "", 
	imgattrsite: "", imgattrurl: "", 	
	
	imgbckg: "white",	
	
	//Word Item
	WI: {ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	WIr: {ENG: "/ˈeə.pɔːt/", ITA: "/aeroˈpɔrto/", JPN: "kuukou", JPNRu: "<ruby>空港<rt>くうこう</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},
	WIt: {ENG: "the airport", ITA: "l'aeroporto", JPN: "空港",},
	WItr: {ENG: "/ðə ˈeə.pɔːt/", ITA: "/laeroˈpɔrto/", JPN: "kuukou", JPNRu: "<ruby>空港<rt>くうこう</rt></ruby>",},
	
	//Sematic Tags
	//3 parametrs to get 1: display/hide, 2: text content, 3: class name (from ENG)
	semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "block", ENG: "places", ITA: "posti", JPN: "場所",},
	
	//Examples
	EX1: {ENG: 'I&#39;m going to go to the <span class="wihlight">airport</span>.', ITA: 'Andrò all&#39;<span class="wihlight">aeroporto</span>.',   JPN: '私は<span class="wihlight">空港</span>に行くつもりです。',},
	EX2: {ENG: 'The <span class="wihlight">airport</span> is over there.', ITA: 'L&#39;<span class="wihlight">aeroporto</span> è laggiù.', JPN: '<span class="wihlight">空港</span>はそこにあります。',},
	EX3: {ENG: 'How far is it to the <span class="wihlight">airport</span>?', ITA: 'Quanto dista l&#39;<span class="wihlight">aeroporto</span>?', JPN: '<span class="wihlight">空港</span>まではどれぐらい遠いですか',},
	
	//Examples
	EXAud1: {ENG: "I'm going to go to the airport.", ITA: "Andrò all'aeroporto.",   JPN: "私は空港に行くつもりです。",},
	EXAud2: {ENG: "The airport is over there.", ITA: "L'aeroporto è laggiù.", JPN: "空港はそこにあります。",},
	EXAud3: {ENG: "How far is it to the airport?", ITA: "Quanto dista l'aeroporto?", JPN: "空港まではどれぐらい遠いですか",},
	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/403055", ITA: "https://tatoeba.org/ita/sentences/show/638552", JPN: "https://tatoeba.org/jpn/sentences/show/642385",},
	TatSrcEx3: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/18189", ITA: "https://tatoeba.org/ita/sentences/show/702836", JPN: "https://tatoeba.org/jpn/sentences/show/179332",},
    
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
	
	imgstrng: `
	
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 768" width="100%" onmouseover="BckImgHver(0)" onmouseout="BckImgOut(0)">
<rect width="1024" height="768" class="P001WIImgRct0" style="fill: #fff;"/>
<path d="M0 671.6 1024 680.2Z" style="stroke-width:2px;stroke:#000"/>
<path d="M0.5 92.9 1024.5 66.9l0-87.7-1024 0z"/>
<rect width="257.8" height="147.8" x="284" y="130.3" style="fill:#808080;stroke-width:10;stroke:#020202"/>
<rect width="267.9" height="20.7" x="278.8" y="106.7"/>
<rect width="45" height="12" x="302.5" y="161.7"/>
<rect width="77.9" height="12" x="302.5" y="182.9"/>
<rect width="45" height="12" x="302.5" y="226.2"/>
<rect width="77.9" height="12" x="302.5" y="204.3"/>
<rect width="45" height="12" x="432" y="161.7"/>
<rect width="77.9" height="12" x="432" y="182.9"/>
<rect width="45" height="12" x="432" y="226.2"/>
<rect width="77.9" height="12" x="432" y="204.3"/>
<rect width="20.7" height="60.7" x="479.3" y="52.5"/>
<rect width="20.7" height="60.7" x="317" y="52.5"/>
<circle cx="1028.2" cy="655.6" r="18.1"/>
<path d="m942.8 593.6c2.1 3.9 7 11.9 10.9 17.9 3.9 5.9 6.5 12.5 5.7 14.5-0.8 2.1 1.3 6.7 4.5 10.3 5.7 6.3 5.8 6.7 0.6 12.4-2.9 3.2-7.6 5.8-10.4 5.8-2.8 0-10.8 3.3-17.7 7.2-12.4 7.1-33.7 10.2-30.1 4.4 1-1.6 5.4-2.9 9.9-2.9 4.5 0 10.1-2.3 12.6-5.1 4.1-4.7 2.9-8.7-14.2-48.1-10.3-23.6-24.5-50.8-31.5-60.5-7.1-9.6-18.4-27.9-25.2-40.6-6.8-12.7-13.2-23.1-14.4-23.1-1.2 0-6.7 6.2-12.3 13.9-5.6 7.6-12.8 16.2-16 19.1-3.2 2.9-8.8 13.3-12.4 23.2-6.3 17-30 57.5-50.6 86.3-5.2 7.2-10.2 17.9-11.3 23.7-1.1 5.8-3.8 11.3-6 12.2-3.8 1.5-17.6 0.3-32.6-2.7-6.8-1.4-24.2-14.8-24.2-18.7 0-1.3 8.4-2.2 18.7-1.9 24.2 0.6 29.1-3.5 18-15.1l-8-8.3 15.7-10.8c8.6-6 18.3-14.4 21.5-18.7 8.9-12 18.2-31.5 18.2-38 0-8.7 8.8-30 14.5-35.1 2.7-2.4 8-12.9 11.7-23.3 3.7-10.4 11.2-25.8 16.5-34.3 9.6-15.2 10.2-20.9 2.3-20.9-6.3 0-16.7-16.6-14.6-23.2 2.5-7.8 0.3-7.4-16.7 3-11.3 7-15.3 8.1-18.5 5.5-3.1-2.6-5.6-2.4-10.9 1.1-3.8 2.5-12 5.4-18.2 6.6l-11.3 2.1 8.7-7.3c4.8-4 12-8.5 16-9.9 4-1.4 18.1-8.3 31.2-15.3 22.4-11.9 24-13.3 24-22 0-10.1 20.9-55.1 33.1-71.2 4.2-5.5 7.6-11.5 7.6-13.3 0-6.4-11.3-15.5-17.3-13.9-4.5 1.2-5.9 0.2-5.9-4.2 0-3.2-1.9-7.4-4.3-9.4-3.1-2.6-3.5-5-1.5-8.9 1.6-2.9 2.8-9.8 2.8-15.2 0-14.3 7.6-20.1 25-19 12 0.8 14.9 2.2 20.2 10 3.4 5 8.4 16.8 11.2 26.2 2.8 9.4 8.2 26.8 12.1 38.9 7 21.7 8.7 35.9 5.3 44.8-2.8 7.3-6.9 5.4-7.3-3.4-0.4-10.8-8.1 23.9-8.3 37.1 0 5.6 3.2 20.6 7.3 33.4 4.7 14.7 6.3 23.6 4.3 24.2-1.7 0.6-2.3 4.1-1.3 8.1 1 3.9 0.2 9-1.7 11.3-5 6-1 20.7 7.4 27.3 4.5 3.5 8.1 10.7 10.1 20.1 2.7 12.6 18.3 43.2 25.9 51 12.2 10 13.1 28.8 20.5 42.7z"/>
<rect width="76.5" height="35" x="138.2" y="790.7" transform="matrix(0.71188194 -0.70229915 0.70229915 0.71188194 0 0)" style="fill: #808080"/>
<circle cx="155.8" cy="807.9" transform="matrix(0.71188194 -0.70229915 0.70229915 0.71188194 0 0)" r="14"/>
<rect width="34.4" height="2.6" x="175.3" y="794.5" transform="matrix(0.71188194 -0.70229915 0.70229915 0.71188194 0 0)"/>
<rect width="34.4" height="2.6" x="175.3" y="799.3" transform="matrix(0.71188194 -0.70229915 0.70229915 0.71188194 0 0)"/>
<rect width="34.4" height="2.6" x="175.3" y="804.1" transform="matrix(0.71188194 -0.70229915 0.70229915 0.71188194 0 0)"/>
<rect width="20.4" height="2.6" x="175.3" y="809.4" transform="matrix(0.71188194 -0.70229915 0.70229915 0.71188194 0 0)"/>
<path d="m 673.67465,476.1618 c 0,-0.84478 0.11927,-1.02671 1.20412,-1.83662 l 1.20413,-0.89896 v -3.24647 c 0,-2.3008 -0.0813,-3.24647 -0.27913,-3.24647 -0.23789,0 -7.99268,2.41909 -9.02637,2.81575 -0.29023,0.11138 -0.34138,-0.0957 -0.28096,-1.13728 l 0.0739,-1.27344 4.69609,-2.9344 4.69609,-2.93439 0.12041,-3.79238 c 0.11508,-3.62443 0.14559,-3.81273 0.68895,-4.25204 0.7233,-0.58481 1.51117,-0.58481 2.23448,0 0.54336,0.43931 0.57386,0.62761 0.68895,4.25204 l 0.12041,3.79238 4.69609,2.93439 4.69608,2.9344 0.0739,1.27344 c 0.0563,0.97064 -10e-4,1.24483 -0.24082,1.15309 -0.99193,-0.37936 -8.8529,-2.83156 -9.07709,-2.83156 -0.18423,0 -0.26854,1.01928 -0.26854,3.24647 v 3.24647 l 1.20412,0.89896 c 1.08485,0.80991 1.20413,0.99184 1.20413,1.83662 0,0.79413 -0.0645,0.91288 -0.42145,0.77579 -0.23179,-0.089 -1.17739,-0.37143 -2.10132,-0.62754 -1.66008,-0.46017 -1.69983,-0.46018 -3.37155,-7.7e-4 -0.93042,0.25571 -1.88133,0.5381 -2.11312,0.62754 -0.35705,0.13776 -0.42144,0.0193 -0.42144,-0.77506 z" style="fill: #808080"/>
<path d="m67.6 335.5c-8.9-0.7-14.8-3.2-14.3-6.1 0.1-0.6 7.3-90.4 7.3-91.1 0-0.4 0.6-0.4 13.5-0.5 7.4-0.1 13.6-0.1 13.6-0.1 0 0 1.8 20.3 4 45 2.2 24.7 4 45.2 4.1 45.5 0.4 2-3.1 4.4-8.5 5.8-5.5 1.4-13.7 2.1-19.7 1.6z" class="b"/>
<path  d="m58.5 230.5c-4.5-8.6-7-12.7-10.1-16.4-2.7-3.3-3-4.2-3-10.9 0-6.1 0.2-6.9 2-7.8 1.8-0.9 2.3-1.6 2.7-3.9 0.4-2.6 0.6-2.6 4.9-2.6l3.1 0 0-7.6 0-7.6 1.3 0 1.3 0 0 7.6 0 7.6 1 0 1 0 0-3.6 0-3.6 0.9 0 0.9 0 0 3.6 0 3.6 3.4 0c5.1 0 8.3-0.4 9-1.2 0.3-0.4 0.5-0.9 0.5-1.2 0-0.3 0.7-1.4 1.6-2.4 0.9-1 1.6-2.1 1.6-2.4 0-0.8-1.2-1.4-4.2-1.9-1.6-0.3-3-0.6-3.1-0.7-0.1-0.1 0.5-0.5 1.3-0.8 1.3-0.5 2.5-0.6 7.3-0.5 5.6 0 7.7 0.3 8 1.2 0 0.2-1.3 0.6-2.9 0.9-1.6 0.3-3.2 0.7-3.5 0.8-1 0.4-0.6 1.6 1 3.4 0.8 1 1.6 2.1 1.7 2.5 0.3 1.7 0.9 1.8 6.8 2.2 3 0.2 5.7 0.5 5.8 0.6 0.2 0.2 0.4 1.2 0.6 2.2 0.3 2.2 0.5 2.5 2.4 3.5 1.1 0.6 1.5 1 1.8 1.8 0.5 1.5 0.5 11.7 0 13.5-0.2 0.9-0.9 1.9-2.4 3.5-2.4 2.6-3.7 4.7-8.9 13.9l-3.9 7-13.9 0.1-13.9 0.1-2.3-4.4 0 0zm42.6-26.5 0-4.9-26.3 0-26.3 0 0 4.9 0 4.9 26.3 0 26.3 0 0-4.9z"/>
<path  d="m4.7 386c0-15.8 0.3-28.7 0.6-28.7 0.4 0 3-0.4 5.8-0.8 6.8-1.1 29.7-2.4 70.7-3.9 44.9-1.7 50.8-1.7 60.6 0.5 25.6 5.7 69.6 13.8 75.6 13.8 0.6 0 1.5 1.5 2 3.4 1.9 7.2 10.4 10.2 17.1 6.1 3.5-2.1 6.2-2.1 25.5-0.3l14.8 1.4 1.5-2 1.5-2 14.1 1.1c21.7 1.7 24.1 2 25.6 3.5 5.2 5.3 10 5.8 14.7 1.5 1.9-1.7 4.6-3.2 6.7-3.5 4.6-0.8 10.7-3.6 13.2-5.9 3.4-3.2 2.6-5.5-4.4-12.6l-6.4-6.5-22.4-2.3-22.4-2.3 14.7-0.6c8.1-0.3 52.6-1.6 99-2.7 46.4-1.2 89.9-2.3 96.6-2.5l12.3-0.4 0 27 0 27-193.5 8.1c-106.4 4.4-210.1 8.8-230.3 9.7-20.2 0.9-49.5 1.9-65.1 2.2l-28.3 0.6 0-28.7z" style="fill:none;stroke-width:2"/>
<path d="m534.7 367.1c-0.3-14.7-0.4-26.8-0.2-26.9 0.2-0.3 21.7-0.9 112.4-3.2 28.5-0.7 65.3-1.7 81.7-2.1 62.1-1.7 77-2 77-1.4 0 0.3-2.2 5.5-4.8 11.5-5.7 12.9-9.9 25-9.9 28.7 0 3.8-1.3 6.6-3.7 8.2-1.7 1.1-6.4 1.6-23.6 2.3-41 1.7-85 3.5-148.2 6.1-35 1.4-67.3 2.8-71.9 3.1l-8.3 0.5-0.5-26.7z" style="fill: #808080"/><path d="m879.4 374c0-5.2 1-13.7 2.2-18.9 0.3-1.2 1.3-2 2.9-2.3 6-1.2 11.4-9.9 11.4-18.3l0-3.8 10.6-0.5c5.8-0.3 18.2-0.7 27.5-1 34.2-0.9 72.4-2.2 79.8-2.6l7.6-0.5 0 23.7 0 23.7-11.5 0.6c-36.6 1.8-48.4 2.3-78.9 3.5-18.6 0.7-37.7 1.5-42.6 1.8l-8.9 0.5 0-5.9z" style="fill: #808080"/>
<path d="m526.9 480.1c0-6.4-0.1-11.7-0.1-11.7 0 0 0.9 0.1 2 0.1l1.9 0.2 0 11.5 0 11.5-1.9 0-1.9 0-0.1-11.7z" />
<path d="m525.6 88.6 0-13.3 0.9 0c0.5 0 1.3-0.1 1.8-0.2l1-0.2 0 13.6 0 13.6-1.8 0-1.8 0 0-13.3z" />
<path d="m892.7 307.1-1.3-5.2 4.3-0.3c2.4-0.2 22.4-0.8 44.4-1.3 22-0.5 48.2-1.2 58.1-1.5 9.9-0.3 19.2-0.6 20.6-0.6l2.6 0 0 4.9c0 4.1-0.2 4.9-1.1 5.2-1.6 0.5-28.2 1.5-68 2.5-19.3 0.5-40.4 1.1-46.8 1.3l-11.6 0.4-1.3-5.2z" style="fill: #808080"/>
<path d="m882.8 275.1c-0.4-1.2-0.6-2.2-0.6-2.3 0.1-0.1 19.1-0.7 84.2-2.4 9.4-0.3 21.7-0.6 27.2-0.8 5.5-0.2 14-0.4 18.9-0.5l8.8-0.2 0 2.2 0 2.2-2.5 0.2c-1.4 0.1-7.3 0.3-13.2 0.5-5.9 0.2-15.6 0.5-21.6 0.6-6 0.2-26 0.7-44.5 1.2-18.5 0.5-38.4 1-44.3 1.2-5.9 0.2-10.9 0.3-11.2 0.3-0.4 0-0.7-0.5-1.2-2.2z" style="fill: #808080"/><path d="m3.9 330.6 0-5.7 9.9-0.4c5.5-0.2 16.3-0.6 24-0.8l14.1-0.4-0.3 3.7c-0.3 4.4 0.3 5.8 3.5 7.3l2.4 1.2-14.7 0.4c-8.1 0.2-20.2 0.4-26.9 0.4l-12.1 0 0-5.7z" style="fill: #808080"/>
<path d="m798.6 569.6c0.6-1 1.9-3.4 2.9-5.4l1.9-3.6 26.1 0 26.1 0 0-21.5 0-21.5 1.7 3 1.7 3 0 6.6c0 3.6 0.1 12 0.3 18.6l0.3 12 11.7 0 11.7 0 2.8 5c1.5 2.8 2.9 5.2 3 5.4 0.1 0.2-20.4 0.4-45.6 0.4l-45.7 0 1.1-1.8z" class="b"/>
<path d="m536.2 570.9c-0.4-1.4-1.1-6.5-1.1-8.5l0-2.3 74.3 0.3c40.8 0.2 89.6 0.3 108.4 0.3l34.1 0-2.8 5.3-2.8 5.3-105 0.1c-83.8 0.1-105 0-105.1-0.4z" class="b"/>
<path d="m106.6 568.7c-0.3-1.3-0.8-3.7-1-5.5l-0.4-3.2 154 0c84.7 0 174.9 0.2 200.4 0.4l46.3 0.4 0 2.8c0 1.5-0.2 3.8-0.4 5.1l-0.4 2.3-199 0-199 0-0.6-2.3z" class="b"/>
<rect width="7.3" height="477" y="84.9" class="b"/>
<path d="m0 565.4 0-5.5 40.1 0 40.1 0 0 1.6c0 0.9-0.3 3.4-0.7 5.5l-0.7 3.9-39.4 0-39.4 0 0-5.5z" class="b"/>
<path d="m979.9 616.4c-32.9-30.7-29.5-26.4-35.5-44.2-5.2-15.5-7.5-19.6-15-27.8-3.3-3.6-10-13.8-10-15.1 0-1.5 20.5-22.5 23.4-24 3-1.6 8.7-1.6 11.2-0.1 3.1 1.9 19.5 16.9 76.7 70.1 32.4 30.1 32.5 30.2 32.5 36.2 0 4.5-1.6 7-11.6 18-8.4 9.2-8.9 9.7-10.1 8.8-8.7-6.4-20.8-5.5-28.6 2.3-1.6 1.6-3.1 2.9-3.4 2.9-0.2 0-13.5-12.2-29.5-27.1z" style="fill: #808080"/>
<path d="m856.2 217.5-1.8-1.2 0-30.5c0-16.8-0.1-48.4-0.3-70.4l-0.3-39.9 1.8 0c1 0 1.8 0 1.9 0.1 0.1 0.1 0.6 142.7 0.6 142.9 0 0-0.8-0.4-1.8-1.1z" class="b"/>
<path  d="m82.5 593.2c-5.2-0.5-5.1 1.1-0.6-16.8 4.4-17.5 3.2-29-3.8-35.3l-2.5-2.3 4-2c3.3-1.6 4-2.8 4.3-6.7 0.7-8.2-1.9-9.9-23.4-15.6-18.8-5-30.2-11.1-30.2-16.2 0-1 16.4-1.4 61.8-1.4 56.5 0 61.8 0.2 61.8 2 0 3.1-7.6 9.1-15.5 12-3.9 1.5-12.7 4-19.5 5.5-14.6 3.3-17.1 4.5-18.1 8.4-1 3.9 0.1 6.6 3.4 8.3 3 1.6 47 3.2 93.4 3.3 33.2 0.1 31 0.8 28.4-8.8-1.7-6.1-5.4-8.3-21.7-12.5-15.5-4-24.8-7.9-29-12.1-6.4-6.4-7.9-6.2 58.7-6.2 50.2 0 61.8 0.3 61.8 1.6 0 7.3-10.9 12.8-37.1 18.6-7.3 1.6-13 3.6-14.4 5-3.4 3.4-3 8 1 10.5 3.1 2 7.8 2.2 60.8 2.2 44.6 0 58.2-0.4 60.3-1.6 3.4-2 3.8-8.7 0.6-11.6-1.2-1-8.7-3.6-16.8-5.7-16.6-4.3-31.5-11-34.5-15.6-2.8-4.3-0.5-5.5 8.2-4.4 3.7 0.5 31.4 0.9 61.5 0.9 48.8 0 54.7 0.2 54.7 1.9 0 1.1-1.5 3.4-3.4 5.1-5.4 5.2-16.4 9.2-37.3 13.7-6.8 1.5-10 2.8-11.3 4.7-2.5 3.6-2.3 7.4 0.6 10.1 2.2 2 6.1 2.4 36.4 3.3 18.7 0.6 45.4 0.7 59.4 0.2 22.7-0.7 25.8-1.1 27.8-3.1 3.1-3.1 2.9-6.2-0.5-9.3-4.2-3.8-6.6-4.8-20.5-8.2-20.3-5-37.6-14.9-33.4-19.2 0.8-0.8 8-0.7 20.1 0.2 12 0.9 34.8 1.2 62.6 0.7 48.2-0.7 47.8-0.8 40 6.5-4.5 4.2-15.9 8.6-33.6 12.9-7.4 1.8-14.4 4.1-15.6 5.1-3.2 2.7-2.7 9.2 0.9 13.5l3.1 3.7-2.7 4.5c-4.3 7.4-4.5 19.5-0.4 35.3 1.8 7.2 3 13.5 2.6 13.9-1.1 1.1-27.2 1.1-28.2 0.1-0.5-0.5 0-3.8 1.1-7.3 3.3-11.6 4.6-23.2 3.8-33.8l-0.8-10.1-201.4 0.3c-214.2 0.4-205 0.1-208.2 6.1-2.4 4.4-1.5 17.8 1.7 28.5 4.7 15.3 4.7 15.3 1.3 16.6-3 1.1-12.2 1.2-21.5 0.3z"/>
<path d="m464.8 480.8c-1.8-4.7 2.8-42.1 5.5-44.7 3.3-3.3 84.7-4.3 98.1-1.3 4.1 0.9 4.4 1.4 5.8 8.3 0.8 4 1.7 14.2 1.8 22.5 0.4 18.5 0.2 18.7-12.9 9.8-5-3.4-12.3-7.3-16.1-8.6-14.1-4.9-38.1-5.2-52.1-0.5-3.2 1.1-9.8 4.7-14.8 8.1-11.2 7.7-14.3 9-15.3 6.4z" class="b"/>
<path d="m320.6 479.7c-1-3.8 1.5-25.6 4-35.8 1.3-5.3 2.7-8.1 4.5-9.1 1.8-1 15.9-1.4 47.2-1.5 50.2-0.1 50.8 0 53.4 8.1 1.9 5.9 3.5 36.7 2 39.4-1 1.8-2.4 1.3-11.2-4.6-12-8-20.4-11.3-33-13.1-19.1-2.7-34.8 1-52.7 12.4-6.4 4-12 7.3-12.5 7.3-0.5 0-1.3-1.4-1.7-3z" class="b"/>
<path d="m178.9 478.1c-1-4.6 1.3-28.5 3.6-37.3 1-3.9 1.8-7.3 1.8-7.6 0-1.6 99.2 0.4 100.8 2 1.7 1.7 4.6 16.7 5.2 27.5 0.8 13.2 0.1 18.8-2.4 18.8-0.8 0-5.6-2.5-10.6-5.7-12-7.4-17.6-9.8-29.6-12.2-19.3-3.9-36.7-0.4-54.7 11-5.9 3.8-11.3 6.8-12 6.8-0.7 0-1.6-1.5-2-3.4z" class="b"/>
<path d="m36.5 478.4c-2-4.3-1.8-8.8 1-25 2.8-16.4 4.2-18.4 13.7-19.8 15.5-2.2 86.2-0.7 89.6 1.8 3.3 2.5 9.4 32.9 8.2 41-0.8 5.6-3.2 5.9-10.4 1-15.6-10.6-29.1-14.6-49.8-14.6-16.9-0.1-26.2 2.5-35.8 9.8-13.5 10.2-14.4 10.5-16.6 5.7z" class="b"/>
<path d="m179.3 481.3c-2-3.3 0.8-35.6 3.9-43.8l1.5-4 46.2 0c25.4 0 48.1 0.3 50.3 0.7 3.8 0.6 4.2 1 5.4 4.3 3.3 8.9 5.8 34.3 4 39.9-1 3-1.3 3.2-3.7 2.7-1.5-0.3-5.8-2.5-9.6-5-16.2-10.4-25.3-13.1-43.4-13.2-18.6-0.1-25.7 2.1-43.7 13.7-4.9 3.2-9.2 5.7-9.6 5.7-0.4 0-1-0.5-1.3-1z" class="b"/>
<path d="m320.4 479.2c-0.6-3.8 0.7-18.9 2.6-28.7 1.8-9.4 3.7-14.6 5.9-15.9 1.4-0.8 12.7-1.1 47.3-1.1 50.2 0 50.3 0 53.1 5.5 2.4 4.7 4.3 39.3 2.3 42.4-1.1 1.7-3.4 0.7-10.6-4.6-8.7-6.4-12.9-8.6-21.9-11.3-7-2.1-9.2-2.4-21.6-2.4-19.5-0.1-26.3 1.9-42.9 12.9-4.7 3.1-9.7 5.9-11 6.1-2.4 0.5-2.6 0.3-3.1-2.9z" class="b"/>
<path d="m464.9 481c-1.7-4.5 1.1-33 4.3-43.8 0.7-2.2 7-3.2 27.8-4.3 29.7-1.5 72.4 0.2 75.3 3 1.8 1.8 3.7 15.3 4.2 30.1 0.7 19 0.6 19.1-14.4 8.9-11.5-7.8-19.1-10.5-34-11.8-12.3-1.1-22.4-0.2-31.9 2.8-5.6 1.8-9.8 4.1-22.3 12.6-5.8 3.9-8.1 4.5-9 2.3z" class="b"/>
<path  d="m81.9 593.3c-3-0.3-3.2-0.6-3.2-3 0-1.4 1.2-7.3 2.7-13.1 2.1-8.1 2.8-12.4 2.8-18.7 0.1-9.3-0.8-11.7-6.1-16.7l-3.2-3 3-1.3c5.5-2.3 7.6-6.5 6-11.4-1.7-5.1-4.4-6.3-28.5-13-15.7-4.3-25.1-10.2-25.1-15.7 0-2.1 0.1-2.2 4.1-1.7 8.9 1.1 88.9 1.6 103.9 0.6 12.1-0.8 15.2-0.8 15.8 0.1 1.2 1.9 0.8 3.1-2 6.3-5.1 5.8-18.5 11.2-36.8 14.6-10.8 2.1-15 5-15 10.4 0 2.9 3.9 5.7 9.2 6.5 4.2 0.7 117.2 2.9 117.7 2.3 0.1-0.1-0.2-2.5-0.7-5.3-1.5-9.2-4-11.2-18.4-14.8-10.4-2.6-22.5-6.5-27.5-9.1-4.8-2.5-8.5-6.6-8.5-9.5l0-2.5 9.7 0.6c11 0.7 88.4 0.9 103.6 0.2l9.9-0.4 0.3 2.6c0.4 3.9-2.4 6.8-10.5 10.7-6.9 3.4-11.3 4.7-29.5 8.7-6.8 1.5-9.1 2.4-11 4.3-4.6 4.6-2.5 10.4 4.2 11.8 1.8 0.4 28 0.7 58.2 0.7 49.6 0 55.2-0.1 58.1-1.5 5.5-2.5 5.5-8.8 0-12.5-1.6-1.1-6.6-2.7-11.2-3.8-22.5-4.9-40.9-14.1-39.8-19.8 0.3-1.7 5.4-1.7 26.2-0.3 17.7 1.3 41.6 1.3 70.5 0.1 12.6-0.5 24.3-1 25.9-1.1 2.7-0.1 3.1 0.2 3.3 2.1 0.4 3.4-3.4 7.3-10.5 10.7-6.7 3.2-18.5 6.8-26.9 8.3-8 1.4-13.3 3.4-14.8 5.4-1.8 2.6-1.7 7.8 0.2 9.5 2.9 2.6 12.5 3.2 57.7 3.7 49.8 0.5 64.8-0.1 66.8-2.8 2.2-3 2.3-5.5 0.5-8-2.7-3.7-7.8-6-18.4-8.5-22.3-5.2-37.2-12.7-37.2-18.9l0-2.3 13.2 0.7c16.4 0.9 90.2 1 103.3 0.1 9.3-0.6 9.7-0.6 10.2 1.1 0.8 2.4-1.3 5.3-6 8.5-5.6 3.8-11.2 5.8-29.5 10.5-17.7 4.5-19.5 5.5-19.5 10.5 0 3.4 2.3 8.1 4.9 10.2l2.1 1.7-2.6 3.6c-5.3 7.4-5.7 20.9-1 37.2 1.4 5 2.6 10.1 2.6 11.4 0 2.2-0.2 2.3-6.6 2.9-6.5 0.6-21.6 0.1-22.5-0.8-0.2-0.2 0.9-5.4 2.4-11.5 2.7-10.4 2.9-11.8 2.8-24.7-0.1-7.5-0.3-13.8-0.4-14-0.2-0.2-77.9-0.6-172.8-0.9-168.9-0.5-227.4 0-232.8 2.1-4.1 1.6-5.5 5.5-5.4 15.3 0.1 7.4 0.5 10.1 3.1 18.2 4.6 14.5 4.7 15 2 16-2.2 0.8-16.2 1-23.1 0.2z" class="b"/>
<path d="m526.8 399.5c-0.2-14.8-0.3-46.1-0.3-69.6l0-42.7 1.5 0 1.5 0 0.3 26.1c0.1 14.3 0.3 45.7 0.4 69.6l0.2 43.6-1.6 0-1.6 0-0.3-26.9z" class="b"/>
<path d="m7.4 299.1 0-2.4 3.1-0.2c1.7-0.1 10.4-0.4 19.2-0.6 8.8-0.2 18-0.5 20.3-0.6l4.2-0.2-0.2 2.5c-0.1 1.4-0.3 2.6-0.3 2.6-0.1 0.1-8.4 0.3-18.6 0.5-10.2 0.2-20.6 0.5-23.1 0.6l-4.7 0.1 0-2.4z" style="fill: #808080"/>
<path  d="m334.7 371.7c-1.1-0.5-2.2-1.7-2.7-2.8l-0.9-1.9-18.4-1.1c-10.1-0.6-22.7-1.3-28-1.7-8-0.5-20-1.8-39.6-4.3l-2.9-0.4-1.1 2.2c-1.4 3-3.9 4.6-7 4.6-4.3 0-7.8-3.4-7.8-7.5 0-1.1-0.3-2.1-0.6-2.2-0.4-0.1-4.5-1-9.2-1.9-8.8-1.8-30.9-6.8-42.9-9.8-3.7-0.9-15.2-3.6-25.5-6-18.3-4.2-28.8-6.9-31.6-8-2.2-0.9-2.5-1.9-1.9-6.8 0.3-2.4 0.7-4.6 0.9-4.9 0.3-0.5 7.1-0.2 12.5 0.6l2.4 0.4-0.3-3.1c-0.4-3.9-1.1-36.3-0.8-36.6 0.1-0.1 2.1 0 4.4 0.2l4.2 0.4 5 6.1c2.8 3.4 8.4 10.1 12.5 15.1 5.6 6.7 17.8 21.8 18.3 22.7 0.1 0.1 18.2 2.2 64.9 7.6 21.6 2.5 47 5.4 56.3 6.5 9.3 1.1 22.3 2.6 28.9 3.4 6.6 0.8 15.7 1.9 20.2 2.4l8.2 1 3.6 3.3c4 3.7 7.8 8.3 7.8 9.6 0 2-6.8 4.8-15.1 6.2-4.1 0.7-4.8 1-4.8 1.9 0 1.7-1.7 4-3.5 4.8-2.2 1-3.2 1-5.4-0.2z" />
<path d="m7.5 386 0-28.1 3.7-0.5c2-0.3 42-1.8 88.8-3.3l85.1-2.9 12.2 2.8c6.7 1.5 15.2 3.4 18.9 4.2 5.4 1.2 6.7 1.8 6.7 3 0 2.4 4 6.7 7.4 7.8 4.3 1.4 8.5 0.4 11.8-3l2.8-2.8 16.4 2c9 1.1 27.7 2.6 41.5 3.4l25.1 1.5 2.9 2.7c2.3 2.2 3.6 2.7 6.7 2.7 3.4 0 4.3-0.4 7.4-3.7 1.9-2 4.3-3.7 5.2-3.7 0.9 0 4.1-0.8 7.1-1.8 5.7-1.9 10.1-5.3 10.1-7.8 0-1.7-3.5-7.1-7-10.8l-2.5-2.7 18-0.6c24.2-0.8 136.3-4 141.4-4l4.1 0 0 26.4c0 20.4-0.2 26.5-1.1 26.7-0.6 0.2-46.2 2.1-101.4 4.4-55.2 2.2-108.7 4.4-118.9 4.9-159 6.9-267.5 11.2-283.9 11.2l-8.4 0 0-28.1z" style="fill: #808080"/>
<path d="m216.2 324.8c-20.6-2.5-37.3-4.5-37.2-4.6 0.1-0.1 17.5-0.6 38.7-1.1 21.2-0.5 52.9-1.3 70.5-1.8 31.5-0.8 50.9-1.3 152.2-3.9 28.1-0.7 57.7-1.5 65.9-1.8l14.9-0.6 0 5.7 0 5.7-6.8 0c-3.7 0-26 0.6-49.5 1.3-66.7 2-165.9 4.7-189.7 5.2l-21.6 0.4-37.4-4.5z" style="fill: #808080"/>
<path d="m155.6 295.1c-1.2-1.4-1.6-2.3-1.3-2.4 0.3 0 8.4-0.3 17.9-0.5 17.1-0.5 26.4-0.7 73.7-2 43.7-1.2 57.9-1.6 71.8-2 15.7-0.5 166.9-1.1 166.4-0.6-0.2 0.2-9.8 0.6-21.4 0.9-26.4 0.7-46.8 1.3-75.4 2.1-33.2 1-80.2 2.3-106.8 3-13 0.4-30.6 0.8-39.1 1.1-18.3 0.5-40.8 1.1-63.1 1.7-8.8 0.2-17.1 0.5-18.4 0.7l-2.4 0.2-1.9-2.3z" style="fill: #808080"/>
<path d="m94.9 297.8c-0.1-0.6-0.1-1.7-0.1-2.4l0-1.2 1.4-0.1c0.7-0.1 6.7-0.2 13.1-0.3 6.5-0.1 12.5-0.3 13.4-0.3l1.7-0.1 0.2 2.4c0.1 1.3 0.1 2.5 0.1 2.5-0.2 0.2-11.5 0.6-20.4 0.7l-9.1 0.1-0.1-1.2z" style="fill: #808080"/>
<path d="m92.2 334.3c0-0.1 0.6-0.5 1.3-0.9 1.9-1.2 3-2.2 3.5-3.3 0.4-0.8 0.4-1.4 0.4-4.3 0-3.1 0-3.3 0.4-3.5 0.4-0.2 7.2-0.6 10.5-0.7l1.7 0-0.1 0.9c-0.1 0.5-0.2 2-0.3 3.4-0.2 3.3 0.3 5 1.9 6.7l1.1 1.2-2.9 0.1c-4.2 0.2-17.5 0.4-17.5 0.3z" style="fill: #808080"/>
<path  d="m775.8 278.4c-0.8 0-1.7-0.4-2.3-0.9l-1-0.9-11 4.2c-6.1 2.3-13.7 5.2-16.8 6.4-4.8 1.8-12.2 4.2-24.3 8l-1.8 0.5 0 1.6c-0.1 2.1-1.1 3.7-2.9 4.5-2.5 1.1-5.5 0.1-6.6-2.3-0.3-0.7-0.7-1.1-0.9-1.1-0.2 0-2.9 0.6-5.9 1.3-5.6 1.3-19.9 4.2-27.7 5.6-2.4 0.4-9.9 1.9-16.5 3.2-11.8 2.4-18.6 3.6-20.6 3.7-1.5 0.1-2-0.5-2.9-3.5-0.5-1.5-0.8-2.9-0.8-3.1 0.1-0.4 4.1-2 7.5-2.9l1.5-0.4-1-1.7c-1.3-2.2-10.2-21-10.1-21.2 0-0.1 1.2-0.6 2.6-1.1l2.6-0.9 4.6 2.3c2.5 1.2 7.6 3.7 11.3 5.5 5 2.4 16.2 8.1 16.7 8.4 0.1 0 11.3-3.5 40-12.7 13.3-4.3 28.9-9.2 34.7-11.1 5.7-1.8 13.8-4.4 17.8-5.7 4.1-1.3 9.7-3 12.4-3.9l5.1-1.5 3 1c3.3 1.1 6.8 2.8 7.1 3.6 0.5 1.2-2.7 4.6-7.2 7.6-2.2 1.5-2.6 1.8-2.3 2.4 0.4 1 0.1 2.8-0.8 3.7-1 1.2-1.6 1.4-3.2 1.3z" />
<path d="m551.6 284 0-2.2 3.4 0c3 0 30.1-0.7 59.8-1.6l10.2-0.3 0.8 1.8c0.6 1.4 0.7 1.9 0.3 2.2-0.3 0.2-5.4 0.5-11.2 0.6-5.9 0.2-16.8 0.5-24.3 0.7-7.5 0.2-19.3 0.5-26.3 0.7l-12.6 0.3 0-2.2z" style="fill: #808080"/>
<path style="fill: #808080" d="m657.6 281.3-4.1-2.1 1.4-0.2c0.8-0.1 7.4-0.3 14.8-0.5 7.4-0.2 15.4-0.4 17.7-0.5 2.4-0.1 4.2-0.1 4.1 0-0.1 0.1-3.5 1.2-7.6 2.5-8.2 2.6-6.5 2.3-18.4 2.7l-3.8 0.1-4.1-2.1z" />
<path d="m780.5 279.6c1.2-0.6 2.6-1.8 3.5-3.2 0.5-0.8 1.3-0.9 13.2-1.2 14.1-0.4 13.1-0.5 13.3 2.5l0.1 1.4-11.6 0.3c-6.4 0.2-13.4 0.4-15.6 0.5-3.4 0.2-3.8 0.1-2.8-0.3z" style="fill: #808080"/>
<path style="fill: #808080" d="m534.8 318.5 0.1-5.5 33.5-0.3c18.4-0.2 39.3-0.5 46.3-0.7 11.6-0.4 12.8-0.3 13.2 0.3 1 1.7 3.4 3.5 4.8 3.8 1.9 0.4 4.6-0.1 21.6-3.3l13.4-2.6 18.6-0.7c10.2-0.4 23.3-0.9 29-1.1 11.5-0.4 45.6-1.5 70.7-2.2 18.6-0.5 35.9-0.6 35.9-0.2 0 0.2-4.9 8.5-5.4 9.2-0.3 0.4-11.9 1-33.3 1.6-13.3 0.4-34.5 1-47.1 1.3-12.6 0.3-26.4 0.7-30.7 0.9-14.7 0.4-52.8 1.5-106.8 3-29.7 0.8-56.2 1.6-58.9 1.7l-4.9 0.2 0.1-5.5z"/>
</svg>
`,
	
	},

1: {imgfile: "", 
	imgsrc: "original", imgattrsrcfle: "", 
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "white",	

	LnContPosLeft: "0%", LnContPosTop: "12%",
	BtnPosLeft: "9%", BtnPosTop: "0%",
	LnPosX1: "75%", LnPosY1: "25%", LnPosX2: "46%", LnPosY2: "53%",
		
	WI: {ENG: "control tower", ITA: "torre di controllo", JPN: "管制塔",},
	WIr: {ENG: "/kənˈtrəʊl ˌtaʊər/", ITA: "/ˈtorre di konˈtrɔllo/", JPN: "kanseitou", JPNRu: "<ruby>管制塔<rt>かんせいとう</rt></ruby>",},
	WIcmp: {ENG: "2", EngCmp1: "control", EngCmp2: "tower",
			ITA: "3", ItaCmp1: "torre", ItaCmp2: "di", ItaCmp3: "controllo",
			JPN: "1", JpnCmp1: "管制塔",},

    semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "block", ENG: "buildings", ITA: "edifici", JPN: "建物",},
	
	EX1: {ENG: 'Send a message to the <span class="wihlight">control tower</span>.', ITA: 'Invii un messaggio alla <span class="wihlight">torre di controllo</span>.', JPN: '<span class="wihlight">管制塔</span>にメッセージを送信します。',},
	EX2: {ENG: 'The pilot asks permission to depart from the <span class="wihlight">control tower</span>.', ITA: 'Il pilota chiede alla <span class="wihlight">torre di controllo</span> il permesso per partire.', JPN: 'パイロットは<span class="wihlight">管制塔</span>に出発する許可を求めます。',},
	EX3: {ENG: 'The pilots asked the <span class="wihlight">control tower</span> to go back to the airport.', ITA: 'I piloti hanno chiesto alla <span class="wihlight">torre di controllo</span> di poter tornare all’aeroporto.', JPN: 'パイロットは、<span class="wihlight">管制塔</span>に空港に戻るように頼んだ。',},
	
	EXAud1: {ENG: "Send a message to the control tower.", ITA: "Invii un messaggio alla torre di controllo.", JPN: "管制塔にメッセージを送信します。",},
	EXAud2: {ENG: "The pilot asks permission to depart from the control tower.", ITA: "Il pilota chiede alla torre di controllo il permesso per partire.", JPN: "パイロットは管制塔に出発する許可を求めます。",},
	EXAud3: {ENG: "The pilots asked the control tower to go back to the airport.", ITA: "I piloti hanno chiesto alla torre di controllo di poter tornare all’aeroporto.", JPN: "パイロットは、管制塔に空港に戻るように頼んだ。",},
	
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
	
	imgstrng: `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 384" onmouseover="BckImgHver(1)" onmouseout="BckImgOut(1)">
<rect width="512" height="384" style="fill: #fff;" id="P001WIImgRct1"/>
<path d="m250 294.6c-12.8-1-21.4-4.7-20.6-8.9 0.2-0.9 10.5-130.8 10.5-131.9 0-0.5 0.9-0.6 19.6-0.8 10.8-0.1 19.6-0.2 19.7-0.1 0.1 0.1 2.7 29.3 5.8 65.1 3.1 35.7 5.8 65.4 5.9 65.8 0.6 2.9-4.5 6.3-12.3 8.3-7.9 2.1-19.9 3.1-28.6 2.4z"/>
<path d="m236.9 142.8c-6.5-12.5-10.2-18.4-14.6-23.7-4-4.7-4.3-6.1-4.4-15.8 0-8.8 0.3-10 2.8-11.3 2.6-1.3 3.3-2.4 3.9-5.7 0.6-3.7 0.9-3.8 7.2-3.8l4.5 0 0-11 0-11 1.9 0 1.9 0 0 11 0 11 1.5 0 1.5 0 0-5.2 0-5.2 1.3 0 1.3 0 0 5.2 0 5.2 4.9 0c7.4 0 12-0.6 13-1.8 0.4-0.5 0.8-1.3 0.8-1.7 0-0.4 1.1-2 2.4-3.5 1.3-1.5 2.4-3.1 2.4-3.5 0-1.2-1.7-2-6.1-2.7-2.3-0.4-4.3-0.9-4.5-1.1-0.2-0.2 0.7-0.7 1.9-1.2 2-0.7 3.6-0.8 10.5-0.8 8.1 0 11.2 0.5 11.5 1.7 0.1 0.2-1.8 0.8-4.2 1.3-2.4 0.5-4.7 1-5.1 1.2-1.4 0.5-0.9 2.3 1.4 4.9 1.2 1.4 2.3 3 2.4 3.7 0.5 2.4 1.2 2.7 9.9 3.2 4.4 0.3 8.2 0.7 8.4 0.9 0.3 0.3 0.6 1.7 0.8 3.1 0.4 3.2 0.8 3.7 3.5 5 1.6 0.8 2.2 1.4 2.6 2.6 0.7 2.1 0.7 17 0 19.5-0.4 1.3-1.4 2.8-3.4 5-3.5 3.8-5.4 6.8-12.8 20.1l-5.7 10.2-20.1 0.1-20.1 0.1-3.3-6.4 0 0zm61.6-38.4 0-7.1-38.1 0-38.1 0 0 7.1 0 7.1 38.1 0 38.1 0 0-7.1z" />
<path d="m-1 359.7 0-26.3 2.6-0.3C3.1 332.8 117 326.6 254.8 319.2 392.6 311.8 507 305.5 509.2 305.3l3.8-0.4 0 40.5 0 40.5-257 0L-1 386-1 359.7Z" style="fill:#808080;"/>
<path d="m293.1 289.8 2-1.6-0.2-5.6-0.2-5.6 105.2-5c57.9-2.8 107-5 109.1-5.1l3.8 0 0 7c0 6.8 0 7-1.4 7.3-1.5 0.3-213.9 10.2-217.9 10.2l-2.4 0 2-1.6z" style="fill:#808080;"/>
<path d="m-1 298.3 0-7.4 2.7 0c2.7 0 202.9-9.4 215.6-10.1l6.6-0.4-0.4 4.8-0.4 4.8 2.6 2.2 2.6 2.2-2.1 0.3c-1.1 0.2-50 2.5-108.7 5.3-58.6 2.7-109.3 5.1-112.6 5.3L-1 305.8l0-7.4z" style="fill:#808080;"/>
<path d="m-1 278c0-1.6 0.2-1.9 1.4-1.9 0.8 0 51.6-2.3 112.9-5.2 61.3-2.9 111.6-5.1 111.7-4.9 0.2 0.2 0.1 1-0.1 1.8-0.3 1.2-0.8 1.6-2.1 1.6-0.9 0-40 1.8-86.8 4-46.8 2.2-94.1 4.4-105.1 4.9-11 0.5-22.7 1.1-26 1.3L-1 280l0-1.9z" style="fill:#808080;"/>
<path d="m293 264.4c-0.1-1-0.2-1.9-0.1-1.9 0.1-0.1 43.6-2.1 96.8-4.6 53.2-2.5 102.2-4.8 109-5.1 6.8-0.3 12.7-0.6 13.3-0.6l1 0 0 1.8 0 1.8-2.2 0.2c-1.2 0.1-49.8 2.4-108 5.1-58.2 2.7-106.6 5-107.7 5l-1.9 0.1-0.2-1.8z" style="fill:#808080;"/>
</svg>
	`,

	},

2: {imgfile: "", 
	imgsrc: "original", imgattrsrcfle: "", 
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "white",	

	
	LnContPosLeft: "15%", LnContPosTop: "31%",
	BtnPosLeft: "4.5%", BtnPosTop: "0%",
	LnPosX1: "50%", LnPosY1: "25%", LnPosX2: "50%", LnPosY2: "57%",

	WI: {ENG: "land", ITA: "atterrare", JPN: "着陸",},
	WIr: {ENG: "/lænd/", ITA: "/atterˈrare/", JPN: "chakuriku", JPNRu: "<ruby>着陸<rt>ちゃくりく</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", EngCmp1: "",},

	semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "block", ENG: "verbs", ITA: "verbi", JPN: "動詞",},
	
	EX1: {ENG: 'Looks like we have to make an emergency <span class="wihlight">land</span>ing.', ITA: 'Dovremo tentare un <span class="wihlight">atterraggio</span> di emergenza.', JPN: '緊急<span class="wihlight">着陸</span>する必要があるようです。',},
	EX2: {ENG: 'The plane made a perfect <span class="wihlight">land</span>ing.', ITA: 'L&#39;aereo effettuò un <span class="wihlight">atterraggio</span> perfetto.', JPN: '飛行機は完璧な<span class="wihlight">着陸</span>をした。',},
	EX3: {ENG: 'They say most airplane accidents occur at <span class="wihlight">land</span>ing or takeoff stages.', ITA: 'Si dice che la maggior parte degli incidenti aerei avviene nelle fasi di <span class="wihlight">atterraggio</span> o di decollo.', JPN: 'ほとんどの飛行機事故は<span class="wihlight">着陸</span>または離陸の時に発生すると言います。',},

		EXAud1: {ENG: "Looks like we have to make an emergency landing.", ITA: "Dovremo tentare un atterraggio di emergenza.", JPN: "緊急着陸する必要があるようです。",},
	EXAud2: {ENG: "The plane made a perfect landing.", ITA: "L&#39;aereo effettuò un atterraggio perfetto.", JPN: "飛行機は完璧な着陸をした。",},
	EXAud3: {ENG: "They say most airplane accidents occur at landing or takeoff stages.", ITA: "Si dice che la maggior parte degli incidenti aerei avviene nelle fasi di atterraggio o di decollo.", JPN: "ほとんどの飛行機事故は着陸または離陸の時に発生すると言います。",},


	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	// Part of Speech Data
	PoSp1: {ENG: {ENG: "verb", ITA: "verb", JPN: "verb",}, 
			ITA: {ENG: "verbo", ITA: "verbo", JPN: "verbo",},
			JPN: {ENG: "動詞", ITA: "動詞", JPN: "動詞",},
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
	
	imgstrng: `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 384" onmouseover="BckImgHver(2)" onmouseout="BckImgOut(2)">
<rect width="512" height="384" style="fill: #fff;" id="P001WIImgRct2"/>
<path d="m0 328.9 0-55.1 14.2-0.7c12.2-0.6 30.7-1.6 92.5-4.9 14.3-0.8 43.2-2.3 58.7-3 61.9-3.1 70.1-3.3 74.2-2.1 4.1 1.2 9.2 0.9 14.2-0.8 11-3.8 44.4-4.8 81.7-2.6 10.8 0.6 30.4 1.7 43.7 2.2l24.2 1.1 3.5 3.2c4.8 4.4 7.9 5.8 12.8 5.8 5.4 0 9.7-2.2 13.1-6.6 3-4 4.3-4.7 11.9-6.5 7.1-1.7 14.6-4.6 18.2-7 3.6-2.4 4.8-2.6 43.2-5.2L512 246l0 69 0 69-256 0-256 0 0-55.1z" style="fill:#808080;stroke-width:2"/>
<path d="m415.1 264.4c-1.8-0.9-3.7-2.8-4.5-4.6l-1.5-3.1-30.5-1.5c-16.8-0.8-37.7-1.9-46.5-2.3-13.3-0.7-33.1-2.6-65.7-6.5l-4.8-0.6-1.8 3.7c-2.3 5-6.4 7.7-11.5 7.7-7.2 0-13.1-5.6-13.1-12.3 0-1.9-0.5-3.4-1.1-3.6-0.6-0.2-7.5-1.5-15.4-3.1-14.6-2.8-51.4-10.8-71.4-15.6-6.2-1.5-25.3-5.8-42.4-9.6-30.4-6.7-47.8-11-52.5-12.8-3.6-1.4-4.1-3.2-3.2-11.3 0.4-4 1.1-7.6 1.3-8.1 0.5-0.9 11.8-0.4 20.7 0.8l4 0.5-0.6-5.1c-0.7-6.4-2.3-60.2-1.8-60.7 0.2-0.2 3.5-0.1 7.3 0.3l7 0.6 8.4 10.1c4.6 5.5 14.1 16.7 21 24.8 9.4 10.9 29.9 35.9 30.6 37.3 0.1 0.2 30.2 3.4 107.7 11.6 35.9 3.8 77.9 8.3 93.4 9.9 15.5 1.7 37.1 4 48 5.2 10.9 1.2 26 2.9 33.4 3.7l13.6 1.6 6.1 5.4c6.7 6 13.1 13.7 13.1 15.9 0 3.3-11.2 8.1-24.9 10.6-6.8 1.3-8 1.7-8 3.2 0 2.8-2.7 6.6-5.7 8-3.6 1.7-5.3 1.7-9-0.2z" stroke-width="2"/>
</svg>
	`,
	},

3: {imgfile: "",
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "white",	
	
	dirmode: "down",
	LnContPosLeft: "62%", LnContPosTop: "23%",
	BtnPosLeft: "4.5%", BtnPosTop: "0%",
	LnPosX1: "50%", LnPosY1: "25%",
	LnPosX2: "50%", LnPosY2: "55%",
	
	
	WI: {ENG: "take off", ITA: "decollare", JPN: "離陸",},
	WIr: {ENG: "/teɪk ɒf/", ITA: "/dekolˈlare/", JPN: "ririku", JPNRu: "<ruby>離陸<rt>りりく</rt></ruby>",},
	WIcmp: {ENG: "2", EngCmp1: "take", EngCmp2: "off",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},

	semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "block", ENG: "verbs", ITA: "verbi", JPN: "動詞",},
	
	EX1: {ENG: 'Gold squadron, begin <span class="wihlight">take-off</span> procedure.', ITA: 'Squadra Oro, iniziare procedura di <span class="wihlight">decollo</span>.', JPN: 'ゴールド飛行隊、<span class="wihlight">離陸</span>手続きを開始する。',},
	EX2: {ENG: 'The crew prepares for <span class="wihlight">take off</span>.', ITA: 'L&#39;equipaggio si prepara al <span class="wihlight">decollo</span>.', JPN: '乗組員は<span class="wihlight">離陸</span>を準備する。',},
	EX3: {ENG: 'We may not serve beverages during <span class="wihlight">take-off</span> or <span class="wihlight">land</span>ing.', ITA: 'Non possiamo servire da bere durante il <span class="wihlight">decollo</span> o l&#39;<span class="wihlight">atterraggio</span>.', JPN: '<span class="wihlight">離陸</span>または着陸中に飲み物を提供することはできません。',},
	
	
EXAud1: {ENG: "Gold squadron, begin take-off procedure.", ITA: "Squadra Oro, iniziare procedura di decollo.", JPN: "ゴールド飛行隊離陸手続きを開始する。",},
	EXAud2: {ENG: "The crew prepares for take off.", ITA: "L'equipaggio si prepara al decollo.", JPN: "乗組員は離陸を準備する。",},
	EXAud3: {ENG: "We may not serve beverages during take-off or landing.", ITA: "Non possiamo servire da bere durante il decollo o l'atterraggio.", JPN: "離陸または着陸中に飲み物を提供することはできません。",},

	
	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx2: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	TatSrcEx3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},

    // Dictionary search suffixes
    engLhyph: "", engLperc: "", engLplus: "", engForv: "",
    itaLhyph: "", itaLplus: "", itaForv: "",
    jpnLpercen: "", jpnLgoo: "", jpnForv: "",
	
	// Part of Speech Data
	PoSp1: {ENG: {ENG: "verb", ITA: "verb", JPN: "verb",}, 
			ITA: {ENG: "verbo", ITA: "verbo", JPN: "verbo",},
			JPN: {ENG: "動詞", ITA: "動詞", JPN: "動詞",},
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
	
	imgstrng: `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 384" onmouseover="BckImgHver(3)" onmouseout="BckImgOut(3)">
<rect width="512" height="384" style="fill: #fff;" id="P001WIImgRct3"/>
<rect width="539.7" height="162.6" x="-16.2" y="332.9" transform="matrix(0.99964106 -0.02679095 0.02679095 0.99964106 0 0)" style="fill:#808080;"/>
<path d="m427.6 193.9c-2-0.2-4.4-1.3-5.9-2.6l-2.5-2.3-29 9.6c-15.9 5.3-35.8 11.9-44.2 14.7-12.6 4.2-31.8 9.6-63.6 17.8l-4.6 1.2-0.3 4.1c-0.4 5.5-3.2 9.5-8 11.3-6.7 2.6-14.2-0.5-16.6-6.8-0.7-1.7-1.7-3-2.3-2.9-0.6 0.1-7.6 1.3-15.4 2.7-14.7 2.7-51.8 8.5-72.2 11.3-6.3 0.9-25.6 3.8-43 6.4-30.7 4.7-48.5 7.1-53.6 7.1-3.9 0-5-1.5-7.1-9.3-1-3.9-1.8-7.5-1.7-8 0.2-1 10.9-4.7 19.6-6.8l3.9-0.9-2.4-4.6c-3-5.7-24-55.3-23.7-55.9 0.1-0.3 3.2-1.3 6.9-2.4l6.7-1.9 11.5 6.3c6.3 3.5 19.2 10.4 28.6 15.5 12.7 6.8 40.9 22.6 42.1 23.7 0.1 0.1 29.4-7.8 104.6-28.3 34.8-9.5 75.6-20.6 90.7-24.6 15-4 36-9.7 46.6-12.6 10.6-2.9 25.3-6.8 32.5-8.6l13.2-3.4 7.6 2.8c8.5 3.1 17.1 8 17.9 10.1 1.2 3.1-7.5 11.6-19.4 18.9-5.9 3.6-6.8 4.5-6.3 5.8 1 2.6-0.2 7.1-2.4 9.5-2.7 2.9-4.3 3.5-8.5 3.1z"/>
<circle cx="264.2" cy="238.6" r="13.6"/>
<circle cx="430.3" cy="186.6" r="10.8"/>
<path d="m394.8 202.6 10-3.4 7.5-0.1 7.5-0.1 2.1 1.2c5.7 3.4 12.1 3.2 17.4-0.3l2.2-1.5 32.4-0.7c17.8-0.4 34.8-0.8 37.7-0.9l5.3-0.3 0 3.5 0 3.5-5.9 0c-3.3 0-30.8 0.6-61.1 1.3-30.3 0.7-57.4 1.3-60.1 1.3l-5 0 10-3.4z" style="fill:#808080;"/>
<path d="m139.6 208.7c-3.8-2.2-4.7-2.9-4.1-3.2 0.4-0.2 12.8-0.5 27.4-0.8 14.6-0.3 27.9-0.6 29.4-0.7 2.3-0.2 0.2 0.5-10.4 3.4l-13.2 3.6-12.1 0.2-12.1 0.2-4.9-2.9z" style="fill:#808080;"/>
<path d="m-3.1 211.9 0-3.3 1.2 0c0.7 0 12.1-0.3 25.4-0.6 13.3-0.3 27.1-0.6 30.7-0.6l6.5 0 1.3 3.2 1.3 3.2-24.7 0.5c-13.6 0.3-28.5 0.6-33.2 0.8l-8.5 0.3 0-3.3z" style="fill:#808080;"/>
<path d="M-0.9 285C-1.1 283.3-1.4 274.5-1.6 265.5l-0.4-16.3 14.6-0.4c8-0.2 20.2-0.6 27.1-0.8l12.5-0.4 0.8 4.2c1.8 9.5 4.1 15.1 7.1 17.1 4.5 3 8.5 2.6 72.2-7 13.1-2 28-4.2 33-4.9 20.8-3 69.3-10.7 78.9-12.6 1.7-0.3 1.9-0.2 3.6 3.1 5.5 10.7 19.8 13 29.3 4.7 2.2-2 5.4-7.4 5.4-9.3 0-0.9 1.3-1.1 10.2-1.4 19.2-0.7 230.1-6.1 230.4-5.8 0.1 0.1 0.4 8.9 0.7 19.6l0.4 19.3-12.5 0.4C493.2 275.6 8 288.2 3.4 288.2l-4 0-0.3-3.2z" style="fill:#808080;"/></svg>
	`,
	},

4: {imgfile: "",
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "white",	

	dirmode: "left",
	LnContPosLeft: "46%", LnContPosTop: "4%",
	BtnPosLeft: "9%", BtnPosTop: "6%",
	LnPosX1: "75%", LnPosY1: "50%",
	LnPosX2: "35%", LnPosY2: "50%",

	WI: {ENG: "departure board", ITA: "tabellone delle partenze", JPN: "出発案内表示板",},
	WIr: {ENG: "/dɪˈpɑː.tʃər bɔːd/", ITA: "/tabelˈlone ˈdelle parˈtɛntsa/", JPN: "shuppatsuannaihyoujiban", JPNRu: "<ruby>出発<rt>しゅっぱつ</rt></ruby><ruby>案内<rt>あんない</rt></ruby><ruby>表示板<rt>ひょうじばん</rt></ruby>",},
	WIcmp: {ENG: "2", EngCmp1: "departure", EngCmp2: "board",
			ITA: "3", ItaCmp1: "tabellone", ItaCmp2: "delle", ItaCmp3: "partenze",
			JPN: "1", JpnCmp1: "出発案内表示板",},

	semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'I looked at the <span class="wihlight">departure board</span>.', ITA: 'Ho guardato il <span class="wihlight">tabellone delle partenze</span>.', JPN: '私は<span class="wihlight">出発案内表示板</span>を見た。',},
	EX2: {ENG: 'The <span class="wihlight">departure board</span> is full of cancelled flights.', ITA: 'Il <span class="wihlight">tabellone delle partenze</span> e degli arrivi è denso di voli cancellati.', JPN: '<span class="wihlight">出発案内表示板</span>にはキャンセルされたフライトがいっぱいです。',},
	EX3: {ENG: 'There are 27 flights in arrival that have been cancelled, while 24 are those disappeared from the <span class="wihlight">departure board</span>.', ITA: 'Sono al momento 27 i voli in arrivo che sono stati cancellati mentre 24 sono quelli scomparsi dal <span class="wihlight">tabellone delle partenze</span>.', JPN: '27便の到着がはキャンセルされ、24便は<span class="wihlight">出発案内表示板</span>から消えています。',},


EXAud1: {ENG: "I looked at the departure board .", ITA: "Ho guardato il tabellone delle partenze .", JPNAud: "私は 出発案内表示板 を見た。",},
	EX2Aud: {ENG: "The departure board is full of cancelled flights.", ITA: "Il tabellone delle partenze e degli arrivi è denso di voli cancellati.", JPN: " 出発案内表示板 にはキャンセルされたフライトがいっぱいです。",},
	EX3Aud: {ENG: "There are 27 flights in arrival that have been cancelled, while 24 are those disappeared from the departure board .", ITA: "Sono al momento 27 i voli in arrivo che sono stati cancellati mentre 24 sono quelli scomparsi dal tabellone delle partenze .", JPN: "27便の到着がはキャンセルされ、24便は 出発案内表示板 から消えています。",},


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
	
	imgstrng: `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 384" onmouseover="BckImgHver(4)" onmouseout="BckImgOut(4)">
<rect width="512" height="384" style="fill: #fff;" id="P001WIImgRct4"/>
<rect width="420" height="241.1" x="46" y="89.6" style="fill:#808080;stroke-width:20;stroke:#000"/>
<rect width="440" height="33.8" x="36" y="51.1"/>
<rect width="73.4" height="19.6" x="77.1" y="140.8"/>
<rect width="127" height="19.6" x="77.1" y="175.3"/>
<rect width="73.4" height="19.6" x="77.1" y="245.9"/>
<rect width="127" height="19.6" x="77.1" y="210.2"/>
<rect width="73.4" height="19.6" x="288.4" y="140.8"/>
<rect width="127" height="19.6" x="288.4" y="175.3"/>
<rect width="73.4" height="19.6" x="288.4" y="245.9"/>
<rect width="127" height="19.6" x="288.4" y="210.2"/>
<rect width="33.8" height="99" x="365.5" y="-37.4"/>
<rect width="33.8" height="99" x="100.8" y="-37.4"/>
</svg>
	`,
	},

5: {imgfile: "",
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "white",	

	dirmode: "upright",
	LnContPosLeft: "40%", LnContPosTop: "56%",
	BtnPosLeft: "0%", BtnPosTop: "12%",
	LnPosX1: "25%", LnPosY1: "75%",
	LnPosX2: "55%", LnPosY2: "45%",

	WI: {ENG: "seat", ITA: "sedile", JPN: "席",},
	WIr: {ENG: "/ˈsiː.t/", ITA: "/seˈdile/", JPN: "seki", JPNRu: "<ruby>席<rt>せき</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},

	semtag1: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag2: {Dsp: "block", ENG: "furniture", ITA: "mobili", JPN: "家具",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'Where is my <span class="wihlight">seat</span>?', ITA: 'Dov&#39;è il mio <span class="wihlight">sedile</span>?', JPN: '私の<span class="wihlight">席</span>はどこですか？',},
	EX2: {ENG: 'I was in the front <span class="wihlight">seat</span>.', ITA: 'Ero sul <span class="wihlight">sedile</span> anteriore.', JPN: '私は前方座<span class="wihlight">席</span>にいた。',},
	EX3: {ENG: 'It was under the <span class="wihlight">seat<span> in my vehicle.', ITA: 'Era sotto il <span class="wihlight">sedile</span> della mia auto.', JPN: 'それは私の車の座<span class="wihlight">席</span>の下にあった。',},

	
	EXAud1: {ENG: "Where is my seat ?", ITA: "Dov'è il mio sedile ?", JPN: "私の 席 はどこですか？",},
	EXAud2: {ENG: "I was in the front seat .", ITA: "Ero sul sedile anteriore.", JPN: "私は前方座 席 にいた。",},
	EXAud3: {ENG: "It was under the seat in my vehicle.", ITA: "Era sotto il sedile della mia auto.", JPN: "それは私の車の座 席 の下にあった。",},


	//Tatoeba Srcs
	TatSrcEx1: {Dsp: "inline-block", ENG: "https://tatoeba.org/eng/sentences/show/251304", ITA: "https://tatoeba.org/ita/sentences/show/836253", JPN: "https://tatoeba.org/jpn/sentences/show/163208",},
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
	
	imgstrng: `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 384" onmouseover="BckImgHver(5)" onmouseout="BckImgOut(5)">
<rect width="512" height="384" style="fill: #fff;" id="P001WIImgRct5"/>
<path d="m-1.3 248.3 0-7.3 109.2 0c76.8 0 109.2 0.2 109.2 0.7 0 0.4-0.8 1.3-1.8 2.2-2.9 2.4-3.8 7.1-2.2 10.8 0.4 1-4.9 1.1-106.9 1.1l-107.4 0 0-7.3z" fill="#808080"/>
<path d="m147 136.2c-1.5-1.7-1.6-3.2-1.6-17.1 0.2-29.5 7.4-74.3 12.3-75.7 25.3-7.2 156.5-8.4 196.1-1.8 4.3 0.7 8 1.6 8.4 1.9 1.7 1.8 4.9 19.4 6.7 36.9 1.5 15 2.8 42.9 2.2 48.3-0.8 6.6-2.7 8.8-7.2 8-4.5-0.8-7.3-2.4-17.5-10-22.4-16.6-37.8-23-63.5-26.5-15.5-2.1-42.9-1.9-55.9 0.4-22.3 4-34.5 9.7-57.2 26.6-8.5 6.3-16.5 10.7-19.6 10.7-0.9 0-2.4-0.8-3.3-1.8z"/>
<path d="m242.8 359.3c-5.8-0.3-13.9-1.4-15.1-2.1-1.5-0.8-1.6-0.4 4.5-27.1 6.2-27.5 7-32.8 6.5-44.6-0.5-14.8-2.5-19.7-11.9-29.7-3.2-3.4-5.6-6.3-5.4-6.6 0.2-0.3 2.2-1.2 4.6-2.2 8.6-3.4 12.5-8.9 12.4-17.6 0-4-0.3-5.2-1.7-7.9-4-7.3-10.9-10.6-39.7-18.6-36.6-10.2-50.6-15.8-59.6-23.9-3.9-3.5-5.5-6.8-5.9-11.9l-0.4-4.4 4.8 0.4c11 0.9 44.6 2.2 89.5 3.4 12.6 0.4 39 0.4 68.8 0 46.2-0.5 54.2-0.8 77.4-2.5 9.3-0.7 10.3-0.7 11.8 0.3 1.3 0.9 1.6 1.5 1.6 3.8 0 5.4-3.1 9.8-10.7 15.2-10.8 7.7-23.3 12.2-62.4 22.3-29.7 7.7-31.1 8.1-33 10.7-2.2 2.9-3.4 6.7-3.4 11.1 0 6.5 2.2 10.9 9.6 18.7l3.9 4.1-3.9 5.1c-7.3 9.7-9.3 17.4-9.3 35.7 0 16 0.5 18.4 9.7 53.2 2.1 8 2.7 12.8 1.6 13.4-2.6 1.6-27.4 2.6-44.3 1.7z"/>
</svg>
	`,
	},

6: {imgfile: "",
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "white",	

	dirmode: "downright",
	LnContPosLeft: "57%", LnContPosTop: "45%",
	BtnPosLeft: "0%", BtnPosTop: "0%",
	LnPosX1: "25%", LnPosY1: "25%", LnPosX2: "55%", LnPosY2: "55%",

	WI: {ENG: "ticket", ITA: "biglietto", JPN: "チケット",},
	WIr: {ENG: "/ˈtɪk.ɪt/", ITA: "/biʎˈʎetto/", JPN: "chiketto", JPNRu: "<ruby>チケット<rt>ちけっと</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},

	semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'I will buy the <span class="wihlight">tickets</span>.', ITA: 'Comprerò i <span class="wihlight">biglietti</span>.', JPN: '私が<span class="wihlight">チケット</span>を買うよ。',},
	EX2: {ENG: 'Do you have the <span class="wihlight">tickets</span>?', ITA: 'Avete i <span class="wihlight">biglietti</span>?', JPN: '<span class="wihlight">チケット</span>を持っていますか？',},
	EX3: {ENG: 'He was checking a <span class="wihlight">ticket</span>.', ITA: 'Controllava un <span class="wihlight">biglietto</span>.', JPN: '彼は<span class="wihlight">チケット</span>を確認していた。',},


EXAud1: {ENG: "I will buy the tickets.", ITA: "Comprerò i biglietti.", JPN: "私がチケットを買うよ。",},
	EXAud2: {ENG: "Do you have the tickets?", ITA: "Avete i biglietti?", JPN: "チケットを持っていますか？",},
	EXAud3: {ENG: "He was checking a ticket.", ITA: "Controllava un biglietto.", JPN: "彼はチケットを確認していた。",},


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
	
	imgstrng: `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 384" onmouseover="BckImgHver(6)" onmouseout="BckImgOut(6)">
<rect width="512" height="384" style="fill: #fff;" id="P001WIImgRct6"/>
<rect width="336.3" height="153.7" fill="#808080" x="-129.4" y="229.3" transform="matrix(0.71188194 -0.70229915 0.70229915 0.71188194 0 0)"/>
<circle fill="#000" cx="-52.1" cy="305.1" r="61.4" transform="matrix(0.71188194 -0.70229915 0.70229915 0.71188194 0 0)"/>
<rect width="151" height="11.4" x="33.8" y="246" transform="matrix(0.71188194 -0.70229915 0.70229915 0.71188194 0 0)" />
<rect width="151" height="11.4" x="33.7" y="267.3" transform="matrix(0.71188194 -0.70229915 0.70229915 0.71188194 0 0)" />
<rect width="151" height="11.4" x="33.7" y="288.4" transform="matrix(0.71188194 -0.70229915 0.70229915 0.71188194 0 0)" />
<rect width="89.6" height="11.4" x="33.8" y="311.4" transform="matrix(0.71188194 -0.70229915 0.70229915 0.71188194 0 0)" />
<path fill="#808080" d="m 161.62147,294.23796 c 0,-3.27352 0.46218,-3.97849 4.66598,-7.11691 l 4.66599,-3.48348 V 271.0575 c 0,-8.91558 -0.31508,-12.58006 -1.08164,-12.58006 -0.92179,0 -30.97163,9.37399 -34.97715,10.91104 -1.12465,0.43158 -1.32286,-0.37074 -1.08873,-4.40696 l 0.28623,-4.93459 18.19734,-11.37079 18.19735,-11.37079 0.4666,-14.69545 c 0.44594,-14.04469 0.56415,-14.77432 2.66967,-16.47667 2.8028,-2.26612 5.85581,-2.26612 8.65861,0 2.10552,1.70235 2.22374,2.43198 2.66968,16.47667 l 0.46659,14.69545 18.19735,11.37079 18.19734,11.37079 0.28623,4.93459 c 0.21819,3.76123 -0.004,4.8237 -0.93319,4.46822 -3.84373,-1.47003 -34.30497,-10.9723 -35.17371,-10.9723 -0.71389,0 -1.04061,3.94972 -1.04061,12.58006 v 12.58007 l 4.66598,3.48348 c 4.2038,3.13842 4.66599,3.84339 4.66599,7.11691 0,3.07725 -0.24999,3.53742 -1.6331,3.00618 -0.8982,-0.345 -4.56238,-1.43927 -8.14263,-2.43171 -6.43279,-1.78315 -6.58682,-1.78319 -13.06476,-0.003 -3.60537,0.99089 -7.29012,2.08514 -8.18832,2.43171 -1.38359,0.53382 -1.63309,0.0749 -1.63309,-3.00335 z"/>
</svg>
	`,
	},

7: {imgfile: "",
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "white",	

	dirmode: "downleft",
	LnContPosLeft: "77%", LnContPosTop: "27%",
	BtnPosLeft: "9%", BtnPosTop: "0%",
	LnPosX1: "75%", LnPosY1: "25%",
	LnPosX2: "45%", LnPosY2: "55%",

	WI: {ENG: "passenger", ITA: "passeggero", JPN: "乗客",},
	WIr: {ENG: "/ˈpæs.ən.dʒər/", ITA: "/passedˈdʒɛro/", JPN: "joukyaku", JPNRu: "<ruby>乗客<rt>じょうきゃく</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},

	semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "none", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'There were fifty <span class="wihlight">passengers</span> on the plane.', ITA: 'C&#39;erano cinquanta <span class="wihlight">passeggeri</span> sull&#39;aereo.', JPN: '飛行機には50人の<span class="wihlight">乗客がいた。',},
	EX2: {ENG: 'The train was full of <span class="wihlight">passengers</span>.', ITA: 'Il treno era pieno di <span class="wihlight">passeggeri</span>.', JPN: '列車には<span class="wihlight">乗客</span>がいっぱいだった。',},
	EX3: {ENG: 'He was a <span class="wihlight">passenger</span> on the Flight 627.', ITA: 'Era un <span class="wihlight">passeggero</span> del volo 627.', JPN: '彼は627便の<span class="wihlight">乗客</span>だった。',},


EXAud1: {ENG: "There were fifty passengers on the plane.", ITA: "C'erano cinquanta passeggeri sull'aereo.", JPN: "飛行機には50人の乗客がいた。",},
	EXAud2: {ENG: "The train was full of passengers .", ITA: "Il treno era pieno di passeggeri .", JPN: "列車には 乗客 がいっぱいだった。",},
	EXAud3: {ENG: "He was a passenger on the Flight 627.", ITA: "Era un passeggero del volo 627.", JPN: "彼は627便の 乗客 だった。",},


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
	
	imgstrng: `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 384" onmouseover="BckImgHver(7)" onmouseout="BckImgOut(7)">
<rect width="512" height="384" style="fill: #fff;" id="P001WIImgRct7"/>
<path d="m-1900.4-988.8c-2.5-2.5-3.7-5.3-4.3-9.8l-0.9-6.3-13.2-0.9c-17.7-1.2-41.5-1.2-64 0-12.6 0.7-22.1 0.5-29.4-0.4l-10.8-1.4-4 4.6c-4.9 5.6-10.2 7.9-17.9 7.9-10.2 0-16.7-5.6-18.3-15.8-0.5-2.9-1.3-5.3-1.8-5.3-0.5 0-9.5-1.1-19.8-2.5-44.8-6-71.9-12.9-134.5-34.5-57.9-19.9-62.6-22.2-62.6-30.5 0-5.8 3-8.9 11.2-11.9 5.6-2 7.3-3.2 6.8-4.7-9.8-32.3-14.6-50.1-14.8-54.2-0.4-11.6 14-18.5 28-13.5 6.9 2.5 15.1 9.3 40.6 33.6 33.2 31.8 34.5 32.8 43.8 34.7 9.3 2 54.5 7 132.1 14.8 74.8 7.5 142.7 15.1 153.9 17.2 23.1 4.4 44.6 17.8 50.8 31.5 2.3 5.1 2.3 5.7 0.4 10.8-2.3 6-5.8 8.7-19.9 14.9-22.7 10.1-28.8 13.5-30.9 17.3-4.6 8.3-14.5 10.4-20.5 4.5zm12.6-11.8c2-4.2 6.2-6.6 33.2-18.9 17.9-8.2 18.9-9.6 12.1-17.3-8.6-9.8-24.7-17.9-41.8-20.9-12.6-2.2-62.8-7.8-144.4-16-117.3-11.8-143.7-15.1-149.8-18.2-4-2.1-16.3-13.1-39.5-35.5-27.6-26.5-33.8-31.2-41.7-31.2-10.3 0-10.3 0.2-1.3 30.8 4.3 14.8 8.1 28.5 8.4 30.6 0.7 4.7-2 7.3-10.6 10.2-3.5 1.2-6.5 2.7-6.6 3.4-0.3 1.8 14.8 7.4 64.6 24.2 61 20.5 75.9 24.1 130 31.6 19.9 2.8 22.4 4.3 22.4 14.3 0 3.8 0.7 5.3 3.1 6.9 5.1 3.3 10.8 1.4 16.3-5.3l4.7-5.7 13.7 1.1c15.6 1.2 30.5 1.2 57-0.1 20.6-1 56.8 0.9 59.5 3.1 0.9 0.8 2.3 4.6 3.1 8.4 0.8 3.9 1.6 7.7 1.9 8.6 0.8 2.5 3.8 0.5 5.8-3.8l0 0z"/><circle cx="389" cy="347.2" r="13.5"/>
<path d="m325.4 301.1c1.5 2.9 5.2 8.9 8.1 13.3 2.9 4.4 4.8 9.3 4.3 10.8-0.6 1.5 1 5 3.4 7.6 4.3 4.7 4.3 5 0.5 9.2-2.2 2.4-5.6 4.3-7.7 4.3-2.1 0-8 2.4-13.2 5.4-9.2 5.3-25 7.6-22.4 3.3 0.7-1.2 4-2.2 7.4-2.2 3.3 0 7.5-1.7 9.4-3.8 3.1-3.5 2.2-6.5-10.5-35.7-7.6-17.6-18.2-37.8-23.5-45-5.3-7.2-13.7-20.7-18.7-30.2-5-9.4-9.9-17.2-10.7-17.2-0.9 0-5 4.6-9.1 10.3-4.2 5.7-9.5 12.1-11.9 14.2-2.4 2.1-6.5 9.9-9.2 17.2-4.7 12.6-22.3 42.8-37.7 64.1-3.8 5.3-7.6 13.3-8.4 17.6-0.8 4.3-2.8 8.4-4.5 9.1-2.8 1.1-13.1 0.3-24.2-2-5.1-1-18-11-18-13.9 0-1 6.3-1.6 13.9-1.4 18 0.4 21.7-2.6 13.4-11.2l-5.9-6.2 11.7-8.1c6.4-4.4 13.6-10.7 16-13.9 6.6-8.9 13.5-23.4 13.5-28.3 0-6.5 6.6-22.3 10.8-26.1 2-1.8 5.9-9.6 8.7-17.3 2.8-7.7 8.3-19.2 12.3-25.5 7.1-11.3 7.6-15.5 1.7-15.5-4.7 0-12.4-12.3-10.8-17.3 1.8-5.8 0.2-5.5-12.4 2.3-8.4 5.2-11.3 6-13.7 4.1-2.3-1.9-4.2-1.8-8.1 0.8-2.8 1.8-8.9 4-13.5 4.9l-8.4 1.6 6.5-5.4c3.6-3 8.9-6.3 11.9-7.4 3-1.1 13.4-6.2 23.2-11.4 16.7-8.8 17.8-9.9 17.8-16.4 0-7.5 15.5-40.9 24.6-53 3.1-4.1 5.6-8.5 5.6-9.9 0-4.8-8.4-11.5-12.9-10.4-3.3 0.9-4.4 0.1-4.4-3.2 0-2.4-1.4-5.5-3.2-7-2.3-1.9-2.6-3.7-1.1-6.6 1.2-2.2 2.1-7.3 2.1-11.3 0-10.6 5.7-14.9 18.6-14.1 8.9 0.6 11.1 1.6 15 7.5 2.5 3.7 6.2 12.5 8.3 19.4 2.1 7 6.1 20 9 28.9 5.2 16.1 6.5 26.7 4 33.3-2.1 5.4-5.2 4-5.4-2.5-0.3-8.1-6.1 17.8-6.1 27.6 0 4.2 2.4 15.3 5.4 24.8 3.5 10.9 4.7 17.5 3.2 18-1.3 0.4-1.7 3.1-1 6 0.7 2.9 0.2 6.7-1.3 8.4-3.7 4.5-0.7 15.4 5.5 20.3 3.4 2.6 6 8 7.5 15 2 9.3 13.6 32.1 19.3 37.9 9.1 7.4 9.7 21.4 15.2 31.8z"/>
<rect width="56.9" height="26" x="-66.1" y="224.3" transform="matrix(0.71188194 -0.70229916 0.70229916 0.71188194 0 0)" style="fill:#808080;"/>
<circle cx="-53" cy="237.2" transform="matrix(0.71188194 -0.70229916 0.70229916 0.71188194 0 0)" r="10.4"/>
<rect width="25.6" height="1.9" x="-38.5" y="227.1" transform="matrix(0.71188194 -0.70229916 0.70229916 0.71188194 0 0)"/>
<rect width="25.6" height="1.9" x="-38.5" y="230.7" transform="matrix(0.71188194 -0.70229916 0.70229916 0.71188194 0 0)"/>
<rect width="25.6" height="1.9" x="-38.5" y="234.3" transform="matrix(0.71188194 -0.70229916 0.70229916 0.71188194 0 0)"/>
<rect width="15.2" height="1.9" x="-38.5" y="238.2" transform="matrix(0.71188194 -0.70229916 0.70229916 0.71188194 0 0)"/>
<path d="m 125.66229,214.19229 c 0,-0.63358 0.0894,-0.77003 0.90309,-1.37746 l 0.90309,-0.67422 v -2.43485 c 0,-1.7256 -0.061,-2.43486 -0.20934,-2.43486 -0.17842,0 -5.99451,1.81432 -6.76978,2.11182 -0.21767,0.0835 -0.25604,-0.0718 -0.21072,-0.85296 l 0.0554,-0.95508 3.52207,-2.2008 3.52206,-2.2008 0.0903,-2.84428 c 0.0863,-2.71832 0.1092,-2.85955 0.51672,-3.18903 0.54247,-0.43861 1.13338,-0.43861 1.67586,0 0.40752,0.32948 0.43039,0.47071 0.51671,3.18903 l 0.0903,2.84428 3.52207,2.2008 3.52206,2.2008 0.0554,0.95508 c 0.0422,0.72798 -7.5e-4,0.93362 -0.18062,0.86481 -0.74394,-0.28452 -6.63967,-2.12367 -6.80781,-2.12367 -0.13818,0 -0.20141,0.76446 -0.20141,2.43486 v 2.43485 l 0.90309,0.67422 c 0.81364,0.60743 0.9031,0.74388 0.9031,1.37746 0,0.5956 -0.0484,0.68466 -0.31609,0.58185 -0.17384,-0.0667 -0.88304,-0.27858 -1.57599,-0.47066 -1.24506,-0.34513 -1.27487,-0.34513 -2.52866,-5.8e-4 -0.69782,0.19179 -1.411,0.40358 -1.58484,0.47066 -0.26779,0.10332 -0.31608,0.0145 -0.31608,-0.5813 z" style="fill:#808080;"/>
<path d="m353.7 319.2-21.6-20.1-1.5-3.4c-0.8-1.9-2.5-6.2-3.6-9.6-3.8-11.5-5.9-15.5-10.8-20.8-2.6-2.8-5.3-6.5-7.6-10.7l-1-1.8 1.9-2.1c8.1-9 14.2-15 15.9-15.8 2.3-1 5.8-1.1 7.9-0.2 2.2 0.9 6.9 5.2 53.4 48.4 18 16.7 26.7 25.1 27.4 26.4 1.3 2.3 1.5 7.1 0.3 9.3-0.7 1.4-5.4 6.7-11.5 13.1-3.3 3.5-3.5 3.6-4.3 2.9-1.5-1.4-5.8-3-8.4-3.3-5-0.5-10.4 1.9-13.6 5.9l-1.4 1.7-21.6-20.1z" style="fill:#808080;"/>
</svg>
	`,
	},

8: {imgfile: "",
	imgsrc: "original", imgattrsrcfle: "",
	imgattrsite: "", imgattrurl: "",
	
	imgbckg: "white",	

	dirmode: "down",
	LnContPosLeft: "82%", LnContPosTop: "54%",
	BtnPosLeft: "4.5%", BtnPosTop: "0%",
	LnPosX1: "50%", LnPosY1: "25%",
	LnPosX2: "58%", LnPosY2: "62%",

	WI: {ENG: "suitcase", ITA: "valigia", JPN: "スーツケース",},
	WIr: {ENG: "/ˈsuːt.keɪs/", ITA: "/vaˈlidʒa/", JPN: "suutsukeesu", JPNRu: "<ruby>スーツケース<rt>すーつけーす</rt></ruby>",},
	WIcmp: {ENG: "1", EngCmp1: "",
			ITA: "1", ItaCmp1: "",
			JPN: "1", JpnCmp1: "",},

	semtag1: {Dsp: "block", ENG: "travel", ITA: "viaggi", JPN: "旅行",},
	semtag2: {Dsp: "block", ENG: "airport", ITA: "aeroporto", JPN: "空港",},
	semtag3: {Dsp: "", ENG: "", ITA: "", JPN: "",},
	
	EX1: {ENG: 'Take this <span class="wihlight">suitcase</span> and put it on the bed.', ITA: 'Prendi questa <span class="wihlight">valigia</span> e mettila sul letto.', JPN: 'この<span class="wihlight">スーツケース</span>を持ってベッドの上に置いてください。',},
	EX2: {ENG: 'Open your <span class="wihlight">suitcase</span>.', ITA: 'Apri la tua <span class="wihlight">valigia</span>.', JPN: '<span class="wihlight">スーツケース</span>を開けてください。',},
	EX3: {ENG: 'Which is your <span class="wihlight">suitcase</span>?', ITA: 'Qual è la tua <span class="wihlight">valigia</span>?', JPN: 'どれがあなたの<span class="wihlight">スーツケース</span>ですか？',},

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
	
	imgstrng: `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 384" onmouseover="BckImgHver(8)" onmouseout="BckImgOut(8)">
<rect width="512" height="384" style="fill: #fff;" id="P001WIImgRct8"/>
<circle r="35" cy="327.6" cx="329.9"/>
<path d="m238.3 255-56.1-52.1-4-8.8c-2.2-4.8-6.4-16.1-9.3-25-9.9-29.9-15.3-40.3-28.1-53.9-6.8-7.3-13.7-17-19.6-27.7l-2.6-4.7 4.8-5.4C144.4 54.1 160.3 38.3 164.8 36.4c5.9-2.6 15.1-2.9 20.4-0.6 5.7 2.5 17.9 13.5 138.6 125.6 46.8 43.4 69.4 65.1 71.2 68.5 3.4 6.1 3.9 18.5 0.9 24.1-1.9 3.6-13.9 17.4-29.7 34.1-8.6 9.2-9.1 9.5-11.1 7.6-3.9-3.5-15.1-7.8-21.8-8.5-13-1.2-27.1 4.9-35.3 15.3l-3.5 4.5-56.1-52.1z" style="fill:#808080;"/>
<path d="m95.5 352c-1.6-1.6-1.2-3 1.2-5 3-2.3 7.1-3.4 16.9-4.3 9-0.9 16.1-3.2 21.4-7 11.6-8.4 10-16.7-14.1-73.1C106.2 227.9 99.2 212.7 84.9 184.4 70.5 155.8 62.5 141.3 53.9 128.6 50.8 123.8 44.2 114.1 39.5 107 28 90 16.2 70.6 6.4 53l-7.9-14.2 0-20.2 0-20.2 32.9 0 32.9 0 2.9 5.9c2.8 5.6 4.9 11.8 9.1 27.4 2.8 10.2 8.8 24.8 17.4 42.4 13 26.6 22.6 42.1 32.7 52.7 12.2 12.8 16.4 21 26.4 50.9 7.7 23.2 11.6 31.4 26.1 54.5 15.3 24.4 17.7 29.7 17.7 38.9 0 6.8 2.6 12.2 10.4 21.4 3.3 4 6.3 8.2 6.6 9.3 0.7 3-1 5.9-7.5 12.5-6.5 6.6-12.3 9.9-19.6 11-7.2 1.2-15.2 4.3-30.9 12.3-14.3 7.2-26.6 11.8-38 14.1-8 1.6-20.6 1.8-22.1 0.3z"/>
</svg>
	`,
	},
	
	
};


