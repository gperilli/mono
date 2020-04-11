


function WIXUpd(l1, l2) {
	//alert(CurrentBtn);
	if (CurrentBtn == 0) {
		WIx = "WIt";
		WIrx = "WItr";
	} else {
		WIx = "WI";
		WIrx = "WIr";
	}
	
	//L1
	document.getElementById(MUIL1TCont).innerHTML = pId[CurrentBtn][WIx][l1];
	//L2
	if (L2Selected == "JPN") {
		document.getElementById(MUIL2TCont).innerHTML = pId[CurrentBtn][WIrx]["JPNRu"];
	} else {
		document.getElementById(MUIL2TCont).innerHTML = pId[CurrentBtn][WIx][l2];
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

