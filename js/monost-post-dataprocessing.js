


function WIXUpd(l1, l2) {
	//alert("testing");
	document.getElementById(MUIL1TCont).innerHTML = pId[CurrentBtn]["WI"][l1]
	//L2
	if (L2Selected == "JPN") {
		document.getElementById(MUIL2TCont).innerHTML = pId[CurrentBtn]["WIr"][l2.concat("Ru")]
	} else {
		document.getElementById(MUIL2TCont).innerHTML = pId[CurrentBtn]["WI"][l2]
	}
}

function WIWordsSet(l1, l2) {

	//Word Items
	for(var i = 0; i < 9; ++i) {
	   document.getElementById('L1WordItem'.concat(i)).innerHTML = pId[i]["WI"][l1];
	   document.getElementById('L2WordItem'.concat(i)).innerHTML = pId[i]["WI"][l2];
	   document.getElementById('L2WordItemR'.concat(i)).innerHTML = pId[i]["WIr"][l2]; 
	}
		 
	//Examples Sentences
	for(var i = 0; i < 9; ++i) {
		//L1
		document.getElementById('Ex1L1WI'.concat(i)).innerHTML = pId[i]["EX1"][l1];
		document.getElementById('Ex2L1WI'.concat(i)).innerHTML = pId[i]["EX2"][l1];
		document.getElementById('Ex3L1WI'.concat(i)).innerHTML = pId[i]["EX3"][l1];
		//L2
		
		document.getElementById('Ex1L2WI'.concat(i)).innerHTML = pId[i]["EX1"][l2];
		document.getElementById('Ex2L2WI'.concat(i)).innerHTML = pId[i]["EX2"][l2];
		document.getElementById('Ex3L2WI'.concat(i)).innerHTML = pId[i]["EX3"][l2];
		
	}
 
}


// Word dictinoary link data - 6 slots
var linkdata = {
		
	ENG: {
		ENG: {WIxLink1UrlHd: "https://dictionary.cambridge.org/dictionary/english/", Link1PDatalkUp: "engLhyph", WIxLink1Dsp: "block", WIxLink1Label: "cambridge.org",
			  WIxLink2UrlHd: "https://forvo.com/word/", Link2PDatalkUp: "engForv", WIxLink2Dsp: "block", WIxLink2Label: "forvo.com",
			  WIxLink3UrlHd: "https://www.merriam-webster.com/dictionary/", Link3PDatalkUp: "engLperc", WIxLink3Dsp: "none", WIxLink3Label: "mwebster.com",
			  WIxLink4UrlHd: "", Link4PDatalkUp: "", WIxLink4Dsp: "none", WIxLink4Label: "",
			  WIxLink5UrlHd: "", Link5PDatalkUp: "", WIxLink5Dsp: "none", WIxLink5Label: "",
			  WIxLink6UrlHd: "", Link6PDatalkUp: "", WIxLink6Dsp: "none", WIxLink6Label: "",},
		ITA: {WIxLink1UrlHd: "https://en.bab.la/dictionary/italian-english/", Link1PDatalkUp: "itaLhyph", WIxLink1Dsp: "block", WIxLink1Label: "bab.la",
			  WIxLink2UrlHd: "https://www.collinsdictionary.com/dictionary/italian-english/", Link2PDatalkUp: "itaLhyph", WIxLink2Dsp: "block", WIxLink2Label: "collinsdictionary.com",
			  WIxLink3UrlHd: "https://forvo.com/word/", Link3PDatalkUp: "itaForv", WIxLink3Dsp: "block", WIxLink3Label: "forvo.com",
			  WIxLink4UrlHd: "http://context.reverso.net/translation/italian-english/", Link4PDatalkUp: "itaLplus", WIxLink4Dsp: "block", WIxLink4Label: "reverso.net",
			  WIxLink5UrlHd: "http://www.treccani.it/vocabolario/tag/", Link5PDatalkUp: "itaLhyph", WIxLink5Dsp: "block", WIxLink5Label: "trecani.it",
			  WIxLink6UrlHd: "", Link6PDatalkUp: "", WIxLink6Dsp: "none", WIxLink6Label: "",}, 
		JPN: {WIxLink1UrlHd: "https://jisho.org/search/", Link1PDatalkUp: "jpnLpercen", WIxLink1Dsp: "block", WIxLink1Label: "jisho.org",
			  WIxLink2UrlHd: "https://dictionary.goo.ne.jp/word/en/", Link2PDatalkUp: "jpnLpercen", WIxLink2Dsp: "block", WIxLink2Label: "goo.ne.jp",
			  WIxLink3UrlHd: "https://forvo.com/word/", Link3PDatalkUp: "jpnForv", WIxLink3Dsp: "block", WIxLink3Label: "forvo.com",
			  WIxLink4UrlHd: "http://context.reverso.net/translation/japanese-english/", Link4PDatalkUp: "jpnLpercen", WIxLink4Dsp: "block", WIxLink4Label: "reverso.net",
			  WIxLink5UrlHd: "https://tangorin.com/words?search=", Link5PDatalkUp: "jpnLpercen", WIxLink5Dsp: "block", WIxLink5Label: "tangorin.com",
			  WIxLink6UrlHd: "https://ejje.weblio.jp/content/", Link6PDatalkUp: "jpnLpercen", WIxLink6Dsp: "block", WIxLink6Label: "weblio.jp",},
	},
	
	ITA: {
		ENG: {WIxLink1UrlHd: "https://it.bab.la/dizionario/inglese-italiano/", Link1PDatalkUp: "engLhyph", WIxLink1Dsp: "block", WIxLink1Label: "bab.la",
			  WIxLink2UrlHd: "https://dictionary.cambridge.org/dictionary/english/", Link2PDatalkUp: "engLhyph", WIxLink2Dsp: "block", WIxLink2Label: "cambridge.org",
			  WIxLink3UrlHd: "https://www.collinsdictionary.com/dictionary/english-italian/", Link3PDatalkUp: "engLhyph", WIxLink3Dsp: "block", WIxLink3Label: "collinsdictionary.com",
			  WIxLink4UrlHd: "https://it.forvo.com/word/", Link4PDatalkUp: "engForv", WIxLink4Dsp: "block", WIxLink4Label: "forvo.com",
			  WIxLink5UrlHd: "https://www.merriam-webster.com/dictionary/", Link5PDatalkUp: "engLperc", WIxLink5Dsp: "block", WIxLink5Label: "mwebster.com",
			  WIxLink6UrlHd: "http://context.reverso.net/translation/english-italian/", Link6PDatalkUp: "engLplus", WIxLink6Dsp: "block", WIxLink6Label: "reverso.net",},
		ITA: {WIxLink1UrlHd: "https://it.forvo.com/word/", Link1PDatalkUp: "itaForv", WIxLink1Dsp: "block", WIxLink1Label: "forvo.com",
			  WIxLink2UrlHd: "http://www.treccani.it/vocabolario/tag/", Link2PDatalkUp: "itaLhyph", WIxLink2Dsp: "block", WIxLink2Label: "trecani.it",
			  WIxLink3UrlHd: "", Link3PDatalkUp: "", WIxLink3Dsp: "none", WIxLink3Label: "",
			  WIxLink4UrlHd: "", Link4PDatalkUp: "", WIxLink4Dsp: "none", WIxLink4Label: "",
			  WIxLink5UrlHd: "", Link5PDatalkUp: "", WIxLink5Dsp: "none", WIxLink5Label: "",
			  WIxLink6UrlHd: "", Link6PDatalkUp: "", WIxLink6Dsp: "none", WIxLink6Label: "",}, 
		JPN: {WIxLink1UrlHd: "https://www.dict.com/giapponese-italiano/", Link1PDatalkUp: "jpnLpercen", WIxLink1Dsp: "block", WIxLink1Label: "dict.com",
			  WIxLink2UrlHd: "https://it.forvo.com/word/", Link2PDatalkUp: "jpnForv", WIxLink2Dsp: "block", WIxLink2Label: "forvo.com",
			  WIxLink3UrlHd: "http://context.reverso.net/translation/japanese-italian/", Link3PDatalkUp: "jpnLpercen", WIxLink3Dsp: "block", WIxLink3Label: "reverso.net",
			  WIxLink3UrlHd: "", Link3PDatalkUp: "", WIxLink3Dsp: "none", WIxLink3Label: "",
			  WIxLink4UrlHd: "", Link4PDatalkUp: "", WIxLink4Dsp: "none", WIxLink4Label: "",
			  WIxLink5UrlHd: "", Link5PDatalkUp: "", WIxLink5Dsp: "none", WIxLink5Label: "",
			  WIxLink6UrlHd: "", Link6PDatalkUp: "", WIxLink6Dsp: "none", WIxLink6Label: "",},
	},
		
	JPN: {
		ENG: {WIxLink1UrlHd: "https://dictionary.cambridge.org/dictionary/english/", Link1PDatalkUp: "engLhyph", WIxLink1Dsp: "block", WIxLink1Label: "cambridge.org",
			  WIxLink2UrlHd: "https://dictionary.goo.ne.jp/word/en/", Link2PDatalkUp: "engLplus", WIxLink2Dsp: "block", WIxLink2Label: "goo.ne.jp",
			  WIxLink3UrlHd: "https://ja.forvo.com/word/", Link3PDatalkUp: "engForv", WIxLink3Dsp: "block", WIxLink3Label: "forvo.com",
			  WIxLink4UrlHd: "https://www.merriam-webster.com/dictionary/", Link4PDatalkUp: "engLperc", WIxLink4Dsp: "block", WIxLink4Label: "mwebster.com",
			  WIxLink5UrlHd: "http://context.reverso.net/translation/english-japanese/", Link5PDatalkUp: "engLplus", WIxLink5Dsp: "block", WIxLink5Label: "reverso.net",
			  WIxLink6UrlHd: "https://ejje.weblio.jp/content/", Link6PDatalkUp: "engLplus", WIxLink6Dsp: "block", WIxLink6Label: "weblio.jp",},
		ITA: {WIxLink1UrlHd: "https://www.dict.com/%E3%82%A4%E3%82%BF%E3%83%AA%E3%82%A2%E8%AA%9E-%E6%97%A5%E6%9C%AC%E8%AA%9E/", Link1PDatalkUp: "ita", WIxLink1Dsp: "block", WIxLink1Label: "dict.com",
			  WIxLink2UrlHd: "https://ja.forvo.com/word/", Link2PDatalkUp: "itaForv", WIxLink2Dsp: "block", WIxLink2Label: "forvo.com",
			  WIxLink3UrlHd: "http://context.reverso.net/translation/italian-japanese/", Link3PDatalkUp: "itaLplus", WIxLink3Dsp: "block", WIxLink3Label: "reverso.net",
			  WIxLink4UrlHd: "", Link4PDatalkUp: "", WIxLink4Dsp: "none", WIxLink4Label: "",
			  WIxLink5UrlHd: "", Link5PDatalkUp: "", WIxLink5Dsp: "none", WIxLink5Label: "",
			  WIxLink6UrlHd: "", Link6PDatalkUp: "", WIxLink6Dsp: "none", WIxLink6Label: "",}, 
		JPN: {WIxLink1UrlHd: "https://ja.forvo.com/word/", Link1PDatalkUp: "jpnForv", WIxLink1Dsp: "block", WIxLink1Label: "forvo.com",
			  WIxLink2UrlHd: "https://dictionary.goo.ne.jp/jn/", Link2PDatalkUp: "jpnLgoo", WIxLink2Dsp: "block", WIxLink2Label: "goo.ne.jp",
			  WIxLink3UrlHd: "https://www.weblio.jp/content/", Link3PDatalkUp: "jpnLpercen", WIxLink3Dsp: "block", WIxLink3Label: "weblio.jp",
			  WIxLink4UrlHd: "", Link4PDatalkUp: "", WIxLink4Dsp: "none", WIxLink4Label: "",
			  WIxLink5UrlHd: "", Link5PDatalkUp: "", WIxLink5Dsp: "none", WIxLink5Label: "",
			  WIxLink6UrlHd: "", Link6PDatalkUp: "", WIxLink6Dsp: "none", WIxLink6Label: "",},
	},
};



var WILink1Id = "Link1WI";
var WILink2Id = "Link2WI";
var WILink3Id = "Link3WI";
var WILink4Id = "Link4WI";
var WILink5Id = "Link5WI";
var WILink6Id = "Link6WI";

function WIXLinksUpd(l1, l2) {
	
	document.getElementById(MUILink1ContP00X).style.display = linkdata[l1][l2].WIxLink1Dsp;
	document.getElementById(MUILink1ContP00X).innerHTML = linkdata[l1][l2].WIxLink1Label;
	document.getElementById(MUILink1ContP00X).href = (linkdata[l1][l2].WIxLink1UrlHd).concat(pId[CurrentBtn][linkdata[l1][l2].Link1PDatalkUp]);

	document.getElementById(MUILink2ContP00X).style.display = linkdata[l1][l2].WIxLink2Dsp;
	document.getElementById(MUILink2ContP00X).innerHTML = linkdata[l1][l2].WIxLink2Label;
	document.getElementById(MUILink2ContP00X).href = (linkdata[l1][l2].WIxLink2UrlHd).concat(pId[CurrentBtn][linkdata[l1][l2].Link2PDatalkUp]);

	document.getElementById(MUILink3ContP00X).style.display = linkdata[l1][l2].WIxLink3Dsp;
	document.getElementById(MUILink3ContP00X).innerHTML = linkdata[l1][l2].WIxLink3Label;
	document.getElementById(MUILink3ContP00X).href = (linkdata[l1][l2].WIxLink3UrlHd).concat(pId[CurrentBtn][linkdata[l1][l2].Link3PDatalkUp]);

	document.getElementById(MUILink4ContP00X).style.display = linkdata[l1][l2].WIxLink4Dsp;
	document.getElementById(MUILink4ContP00X).innerHTML = linkdata[l1][l2].WIxLink4Label;
	document.getElementById(MUILink4ContP00X).href = (linkdata[l1][l2].WIxLink4UrlHd).concat(pId[CurrentBtn][linkdata[l1][l2].Link4PDatalkUp]);

	document.getElementById(MUILink5ContP00X).style.display = linkdata[l1][l2].WIxLink5Dsp;
	document.getElementById(MUILink5ContP00X).innerHTML = linkdata[l1][l2].WIxLink5Label;
	document.getElementById(MUILink5ContP00X).href = (linkdata[l1][l2].WIxLink5UrlHd).concat(pId[CurrentBtn][linkdata[l1][l2].Link5PDatalkUp]);
	
	document.getElementById(MUILink6ContP00X).style.display = linkdata[l1][l2].WIxLink6Dsp;
	document.getElementById(MUILink6ContP00X).innerHTML = linkdata[l1][l2].WIxLink6Label;
	document.getElementById(MUILink6ContP00X).href = (linkdata[l1][l2].WIxLink6UrlHd).concat(pId[CurrentBtn][linkdata[l1][l2].Link6PDatalkUp]);

}

function WIL2LinksSet(l1, l2) {
	for(var i = 0; i < 9; ++i) {
		
		document.getElementById(WILink1Id + i).style.display = linkdata[l1][l2].WIxLink1Dsp;
		document.getElementById(WILink1Id + i).innerHTML = linkdata[l1][l2].WIxLink1Label;
		document.getElementById(WILink1Id + i).href = (linkdata[l1][l2].WIxLink1UrlHd).concat(pId[i][linkdata[l1][l2].Link1PDatalkUp]);

		document.getElementById(WILink2Id + i).style.display = linkdata[l1][l2].WIxLink2Dsp;
		document.getElementById(WILink2Id + i).innerHTML = linkdata[l1][l2].WIxLink2Label;
		document.getElementById(WILink2Id + i).href = (linkdata[l1][l2].WIxLink2UrlHd).concat(pId[i][linkdata[l1][l2].Link2PDatalkUp]);

		document.getElementById(WILink3Id + i).style.display = linkdata[l1][l2].WIxLink3Dsp;
		document.getElementById(WILink3Id + i).innerHTML = linkdata[l1][l2].WIxLink3Label;
		document.getElementById(WILink3Id + i).href = (linkdata[l1][l2].WIxLink3UrlHd).concat(pId[i][linkdata[l1][l2].Link3PDatalkUp]);

		document.getElementById(WILink4Id + i).style.display = linkdata[l1][l2].WIxLink4Dsp;
		document.getElementById(WILink4Id + i).innerHTML = linkdata[l1][l2].WIxLink4Label;
		document.getElementById(WILink4Id + i).href = (linkdata[l1][l2].WIxLink4UrlHd).concat(pId[i][linkdata[l1][l2].Link4PDatalkUp]);

		document.getElementById(WILink5Id + i).style.display = linkdata[l1][l2].WIxLink5Dsp;
		document.getElementById(WILink5Id + i).innerHTML = linkdata[l1][l2].WIxLink5Label;
		document.getElementById(WILink5Id + i).href = (linkdata[l1][l2].WIxLink5UrlHd).concat(pId[i][linkdata[l1][l2].Link5PDatalkUp]);
		
		document.getElementById(WILink6Id + i).style.display = linkdata[l1][l2].WIxLink6Dsp;
		document.getElementById(WILink6Id + i).innerHTML = linkdata[l1][l2].WIxLink6Label;
		document.getElementById(WILink6Id + i).href = (linkdata[l1][l2].WIxLink6UrlHd).concat(pId[i][linkdata[l1][l2].Link6PDatalkUp]);

	}

}


// Part of speech data - 3 slots
function WIXPOfSpUpd(l1, l2) {
	document.getElementById(P00XL2POfSp1WIx).innerHTML = pId[CurrentBtn]["PoSp1"][l1][l2];
	document.getElementById(P00XL2POfSp2WIx).innerHTML = pId[CurrentBtn]["PoSp2"][l1][l2];
	document.getElementById(P00XL2POfSp3WIx).innerHTML = pId[CurrentBtn]["PoSp3"][l1][l2];
}

function WIL2POfSpSet(l1, l2) {

	var WIPOfSp1Id = 'L2POfSp1WI';
     for(i = 0; i < 9; ++i) {	
       var WIPOfSpConts = document.getElementById(WIPOfSp1Id + i);
		WIPOfSpConts.innerHTML = pId[i]["PoSp1"][l1][l2];
	 }

	var WIPOfSp2Id = 'L2POfSp2WI';
     for(var i = 0; i < 9; ++i) {
       var WIPOfSpConts = document.getElementById(WIPOfSp2Id + i);
       WIPOfSpConts.innerHTML = pId[i]["PoSp2"][l1][l2];
     }

	  var WIPOfSp3Id = 'L2POfSp3WI';
     for(var i = 0; i < 9; ++i) {
       var WIPOfSpConts = document.getElementById(WIPOfSp3Id + i);
       WIPOfSpConts.innerHTML = pId[i]["PoSp3"][l1][l2];
     }

}

// Semantic tags
function SemTagLoader(lang) {
  //"tag_" concatenated to tag name in English generates class name which applies background color
  for(var i = 0; i < 9; ++i) {
	//tag1
	var SemtagId = "SemTag1WI".concat(i);
	document.getElementById(SemtagId).style.display = pId[i]["semtag1"]["Dsp"];
	document.getElementById(SemtagId).className = "SemTags tag_".concat(pId[i]["semtag1"]["ENG"]);
	document.getElementById(SemtagId).innerHTML = pId[i]["semtag1"][lang];
	//tag2
	var SemtagId = "SemTag2WI".concat(i);
	document.getElementById(SemtagId).style.display = pId[i]["semtag2"]["Dsp"];
	document.getElementById(SemtagId).className = "SemTags tag_".concat(pId[i]["semtag2"]["ENG"]);
	document.getElementById(SemtagId).innerHTML = pId[i]["semtag2"][lang];
	//tag3
	var SemtagId = "SemTag3WI".concat(i);
	document.getElementById(SemtagId).style.display = pId[i]["semtag3"]["Dsp"];
	document.getElementById(SemtagId).className = "SemTags tag_".concat(pId[i]["semtag3"]["ENG"]);
	document.getElementById(SemtagId).innerHTML = pId[i]["semtag3"][lang];
  }
  
}

//Tatoeba sentence links
function TatoebaExSrcs(lang) {
//alert("test");
	for(var i = 0; i < 9; ++i) {
		var TatSrcId1 = "Ex1L1TatSrcWI".concat(i);
		document.getElementById(TatSrcId1).style.display = pId[i]["TatSrcEx1"]["Dsp"];
		document.getElementById(TatSrcId1).href = pId[i]["TatSrcEx1"][lang];

		
		var TatSrcId2 = "Ex2L1TatSrcWI".concat(i);
		document.getElementById(TatSrcId2).style.display = pId[i]["TatSrcEx2"]["Dsp"];
		document.getElementById(TatSrcId2).href = pId[i]["TatSrcEx2"][lang];

		
		var TatSrcId3 = "Ex3L1TatSrcWI".concat(i);
		document.getElementById(TatSrcId3).style.display = pId[i]["TatSrcEx3"]["Dsp"];
		document.getElementById(TatSrcId3).href = pId[i]["TatSrcEx3"][lang];
		//document.getElementById(TatSrcId1).style.display = "inline";
	}
}

