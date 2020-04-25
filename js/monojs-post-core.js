

function pageload(pno) {
	
	//prepare post data
	pId = window["p".concat(pno)];
	setposter(pId);
	
	//prepare templates
	MUITempSet(pno, pId.AnnotType);//prepare main user interface template 
	WIListTempSet();//prepare word list template
	AttrImgsTempSet();//prepare image attribution images
	sitewidetemps();//prepare site wide templates
  
	//insert variable filled templates into page
	document.getElementById("TemplateContainer").insertAdjacentHTML("beforeend", centralcolumnhead);
		document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", HeaderTemp);
		document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", ColumnATemp);
		document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", ColumnBHead);
			document.getElementById("ColumnB").insertAdjacentHTML("beforeend", MUICont);
				document.getElementById("MUICont").insertAdjacentHTML("beforeend", MUIXtemp);
			document.getElementById("ColumnB").insertAdjacentHTML("beforeend", WIListCont);
				document.getElementById("WIListCont").insertAdjacentHTML("beforeend", WIListTemp);
		document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", ColumnBTail);
		document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", ShareBtmTemp);
		document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", AttrTemp);
			document.getElementById("imgattrblk").insertAdjacentHTML("beforeend", AttrImgsBlk);
	document.getElementById("TemplateContainer").insertAdjacentHTML("beforeend", centralcolumntail);
	
	
	var mySVG = document.getElementById("wi0objsvg");
	var svgDoc;
	mySVG.addEventListener("load",function() {
	  svgDoc = mySVG.contentDocument;
	  //alert("SVG contentDocument Loaded!");
	  //svgDoc.getElementById("anttnsblk").style.display = "none";
	  document.getElementById("wi0objsvg").contentDocument.getElementById("anttnsblk").style.display = "none";
	}, false);
	
	
	
	//set annotation positions
	if (pId.AnnotType == "Annot") {SetAnnotations(pId);}

	//set language from local storage
	L1 = localStorage.getItem("Lang1");
	L2 = localStorage.getItem("Lang2");
    
	//set first word item to 0
	CurrentBtn = 0;
	BtnIdHead = "P".concat(pId.No, "BtnImgId");
	CurrentBtnBorderId = BtnIdHead.concat(CurrentBtn, "B");
	CurrentBtnTextId = BtnIdHead.concat(CurrentBtn, "T");
	BtnHLight(pId.AnnotType);

	//auto audio settings 
	if (localStorage.getItem("AutAudSetng") === undefined || localStorage.getItem("AutAudSetng") === null) {
		localStorage.setItem("AutAudSetng", "0");//auto audio setting in local storage to 0/off if non existent
	}
	AutAudSet(0);//auto audio is off at page load
  
	//play all settings
	PlyAllStng = 0; // Set Play All Setting to 0 (off) at page load
	PlyAllMde = "Pse"; // Initial mode for play all mode is pause
	CrntPlyAllN = 0; // Initial position for Play All mode is WI0
	
	//burger setting
	AccXStat = [];
	AccXStat['x'] = 0;

	//UI graphics
	PgBtnImgs();//audio buttons and expand buttons
	SocialMBtns();//social media buttons
	
	// hover effect on background color
	if (pId.AnnotType == "Annot") { 
		//document.getElementById(P00XBtnImgId0T).addEventListener("mouseover", BckImgHver);
		//document.getElementById(P00XBtnImgId0T).addEventListener("mouseout", BckImgOut);
	} 
	
	//Set all initial Accordion statuses to 0
	for (i=0; i<8; ++i) {
		AccXStat[i] = 0;
	}
	
	//Display Img Attribution Images - Default is display:none, within sitewide template
	document.getElementById("imgattrblk").style.display = "block"; 

	// Updates UI for entire page for Language selected
	lselstr = {1: L1, 2: L2};
	LSel(1, L1, 'pgld'); //language select source is from page load
  
	//document.getElementById('wi0objsvg').style.display = "none";
  
}

function WI0ObjLd() {
	console.log("WI0ObjLd");
	//hide annotations from monop00X.svg file
	
	//document.getElementsByClassName("anttnsblk")[1].style.display = "none";
	
	//document.getElementsByClassName('anttnsblk')[1].style.display = "none";

	
}


function LSel(ln, ll, lssrc) {
	
	LDspId = "LDspL".concat(ln);
	BrgrLDspId = "BrgrLDspL".concat(ln);
	lconv = {ENG: "English", ITA: "Italiano", JPN: "日本語"};
	LNSlId = "L".concat(ln, "Sl", ll);
	BrgrLNSlId = "BrgrL".concat(ln, "Sl", ll);
	
	// dehighlight everything
	for (var i = 0; i < 6; ++i) {
		var LSelBtns = document.getElementsByClassName("langbtns");
		LSelBtns[i].className = "langbtns";
    }
	
	for (var i = 0; i < 6; ++i) {
		var LSelBtns = document.getElementsByClassName("langbtnsacc");
		LSelBtns[i].className = "langbtnsacc";
    }
	
	//highlight and update language text
	document.getElementById(LNSlId).className += " lbtnhlghtd";
	document.getElementById(LDspId).innerHTML = lconv[ll];
	
	document.getElementById(BrgrLNSlId).className += " lbtnhlghtd";

	//store selected language
	lselstr[ln] = ll;

	//highlight other language previously selected
	if (ln == 1) { 
		//L1 = ll;
		o = "2"; 
		localStorage.setItem("Lang1", ll); 
		uitext(ll);

		
	} else { 
		//L2 = ll;
		o = "1"; 
		localStorage.setItem("Lang2", ll);
	}
		
		llo = lselstr[o];
		LNSlId = "L".concat(o, "Sl", llo);
		document.getElementById(LNSlId).className += " lbtnhlghtd";
		
		BrgrLNSlId = "BrgrL".concat(o, "Sl", llo);
		document.getElementById(BrgrLNSlId).className += " lbtnhlghtd";
		
		LDspId = "LDspL".concat(o);
		document.getElementById(LDspId).innerHTML = lconv[llo];
		

	LangUpdate(lselstr[1], lselstr[2]);
}




function LangUpdate(L1, L2) {

  L1Selected = L1;
  L2Selected = L2;

  //Word Items
  WIXUpd(L1Selected, L2Selected);
  WIWordsSet(L1Selected, L2Selected);
	 
  //Dictionary links
  WIXLinksUpd(L1Selected, L2Selected);
  WIL2LinksSet(L1Selected, L2Selected);
 
  //Part of speech data
  WIXPOfSpUpd(L1Selected, L2Selected);
  WIL2POfSpSet(L1Selected, L2Selected);
  

  SemTagLoader(L1Selected);
  TatoebaExSrcs(L2Selected);

}





function WIXUpd(l1, l2) {
	
	if (CurrentBtn == 0) {
		WIx = "WIt";
		WIrx = "WItr";
	} else {
		WIx = "WI";
		WIrx = "WIr";
	}
	
	//L1
	document.getElementById(MUIL1TContP00X).innerHTML = pId[CurrentBtn][WIx][l1];
	//L2
	if (L2Selected == "JPN") {
		document.getElementById(MUIL2TContP00X).innerHTML = pId[CurrentBtn][WIrx]["JPNRu"];
	} else {
		document.getElementById(MUIL2TContP00X).innerHTML = pId[CurrentBtn][WIx][l2];
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

var WILink1Id = "Link1WI";
var WILink2Id = "Link2WI";
var WILink3Id = "Link3WI";
var WILink4Id = "Link4WI";
var WILink5Id = "Link5WI";
var WILink6Id = "Link6WI";

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
	}
}





function MUIUpdP00X(pno, n, ClkSrc) {

	//Annotation Button click interrupts Play All process
	if (PlyAllMde == "Ply" && ClkSrc == "BtnClk") {		
		PlyAllIcoOff();
		BtnSitu = "Inrpt";
		storedn = n;
		CrntPlyAllN = 0; //reset to WI0
		PlyAllMde = "Pse";		
	}
	
	//mitigates delayed running of this function upon pause event, by setting n back one position
	if (PlyAllMde == "Pse" && ClkSrc == "AlBtnClk" && BtnSitu == "Psd") {
		//prevents auto procedure to next button when Play All is paused
		n = n-1;
	}
		
	//mitigates delayed running of this function upon WI button click event, by setting n to 
	if (PlyAllMde == "Pse" && ClkSrc == "AlBtnClk" && BtnSitu == "Inrpt") {
		//prevents auto procedure to next button when Play All is paused
		n = storedn;
	}
	
	
   P00XBtnSelected = n;
   CurrentBtn = P00XBtnSelected;

   BtnHLight(pId.AnnotType);
	
   // Set variables before sending through WIXUpd Function
   // Update L1 Lang, L2 Lang variables
   L1Selected = lselstr[1];
   L2Selected = lselstr[2];

   
   WIXUpd(L1Selected, L2Selected);

   // On Button Click, Lang pair Filtering and then Meta data Update
   // Add variables for meta and links container IDs
	WIXLinksUpd(L1Selected, L2Selected);
	WIXPOfSpUpd(L1Selected, L2Selected);
		
	//Auto Audio	
	ClkSrcT = ClkSrc; //ClkSrcT used in following function
	if (AutAud == 1 && PlyAllMde == "Pse") {
		AudioCntrl(CurrentBtn, 0, ClkSrc);
	}
	
}




function BtnHLight(type) {

	if (type == "HLight") {
		//dehighlight everything
		for(var i = 1; i < 9; ++i) {
			BtnTextId = "P".concat(pno, "BtnImgId", i);
			document.getElementById(BtnTextId).className.baseVal = "btnImgoff";
		}
		document.getElementById("P".concat(pno, "BtnImgId0")).className.baseVal = "Whtbckoff";
		CurrentBtnTextId = "P".concat(pno, "BtnImgId", CurrentBtn);
		
		//highlight selected button
		document.getElementById(CurrentBtnTextId).className.baseVal = "btnImgon";
		if (CurrentBtn == 0) {
			document.getElementById(CurrentBtnTextId).className.baseVal = "Whtbckon";
			for(var i = 1; i < 9; ++i) {
				BtnTextId = BtnIdHead.concat(i);
				document.getElementById(BtnTextId).className.baseVal = "btnImgonAll";
			}
		}

	} else {
		//dehighlight Everything
		for(var i = 1; i < 9; ++i) {
			BtnTextId = BtnIdHead.concat(i, "T");
			BtnBordId = BtnIdHead.concat(i, "B");
			document.getElementById(BtnTextId).className.baseVal = "btnToff";
			document.getElementById(BtnBordId).className.baseVal = "btnCoff";
		}
		//document.getElementById(P00XBtnImgId0T).className.baseVal= "btnbckoff";

		//update button ID for newly selected button
		CurrentBtnBorderId = BtnIdHead.concat(CurrentBtn, "B");
		CurrentBtnTextId = BtnIdHead.concat(CurrentBtn, "T");

		//highlight selected button
		if (CurrentBtn == 0) {
			//document.getElementById(P00XBtnImgId0T).className.baseVal = "btnbckon";
			for(var i = 1; i < 9; ++i) {
				BtnTextId = BtnIdHead.concat(i, "T");
			} 
		} else {
			document.getElementById(CurrentBtnTextId).className.baseVal = "btnTon";
			document.getElementById(CurrentBtnBorderId).className.baseVal = "btnCon";
		}

	}

}

// hover effect for image background
function BckImgHver(n) {
	hvrhlght = {white: "#F8F8F8", black: "#383838",};
	if (n == 'x') {
		//console.log(n);
		document.getElementsByClassName("P".concat(pno, "WIImgRct0"))[0].style.fill = hvrhlght[pId[0].imgbckg];
	} else {
		if (n == 0) {
			if (pId["AnnotType"] == "HLight") {
				document.getElementsByClassName("P".concat(pno, "WIImgRct0"))[0].style.fill = hvrhlght[pId[0].imgbckg];
			} else {
			//console.log("P".concat(pno, "WIImgRct0"));
				document.getElementsByClassName("P".concat(pno, "WIImgRct0"))[1].style.fill = hvrhlght[pId[0].imgbckg];
			}
		} else {
		P00XWIImgRctx = "P".concat(pno, "WIImgRct", n);
		document.getElementById(P00XWIImgRctx).style.fill = hvrhlght[pId[n].imgbckg];
		}
	}
	
}

function BckImgOut(n) {
	if (n == 'x') {
		document.getElementsByClassName("P".concat(pno, "WIImgRct0"))[0].style.fill = pId[0].imgbckg;
	} else {
		if (n == 0) {
			if (pId["AnnotType"] == "HLight") {
				document.getElementsByClassName("P".concat(pno, "WIImgRct0"))[0].style.fill = pId[0].imgbckg;
			} else {
				document.getElementsByClassName("P".concat(pno, "WIImgRct0"))[1].style.fill = pId[0].imgbckg;
			}
		} else {
			document.getElementById(P00XWIImgRctx).style.fill = pId[n].imgbckg;
		}
	}
}







var CurrentAudFileId;
var PlayIcoId;
var PauseIcoId;
var AudStat = 0;

function AutAudSet(swtch) {
	
	if (swtch == 1) { //set auto audio button from button click
		if (localStorage.getItem("AutAudSetng") == "0") {
			localStorage.setItem("AutAudSetng", "1");
			document.getElementById("AutAudDSl1").setAttribute('d', AutAudOn1);
			document.getElementById("AutAudDSl2").setAttribute('d', AutAudOn2);
			AutAud = 1;
		} else {
			localStorage.setItem("AutAudSetng", "0");
			document.getElementById("AutAudDSl1").setAttribute('d', AutAudOff1);
			document.getElementById("AutAudDSl2").setAttribute('d', AutAudOff2);
			AutAud = 0;
		}
	} 
	
	else { //set auto audio button from st@red value
		if (localStorage.getItem("AutAudSetng") == "0") {
			document.getElementById("AutAudDSl1").setAttribute('d', AutAudOff1);
			document.getElementById("AutAudDSl2").setAttribute('d', AutAudOff2);
			AutAud = 0;
		} else {
			document.getElementById("AutAudDSl1").setAttribute('d', AutAudOn1);
			document.getElementById("AutAudDSl2").setAttribute('d', AutAudOn2);
			AutAud = 1;
		}
	}

}

function PlyAllAud() {//procedure on button click event

	ClkSrc = "AlBtnClk";
	
	if (PlyAllStng == 1) {//Pause play all process
		PlyAllMde = "Pse";
		PlyAllN = CrntPlyAllN;
		BtnSitu = "Psd";
		PlyAllIcoOff();
	} else {//Play play all process
		PlyAllMde = "Ply";
		PlyAllN = CrntPlyAllN;
		PlyAllIcoOn();
		
		MUIUpdP00X(pno, CrntPlyAllN, 'AlBtnClk');
		AudioCntrl('x', 0);
	}
		
}

function PlyAllIcoOff() {
	document.getElementById("PlyAllIcoOff").style.display = 'block';
	document.getElementById("PlyAllIcoOn").style.display = 'none';
	PlyAllStng = 0;
}

function PlyAllIcoOn() {
	document.getElementById("PlyAllIcoOff").style.display = 'none';
	document.getElementById("PlyAllIcoOn").style.display = 'block';
	PlyAllStng = 1;
}


function AudioCntrl(wi, ex, ClkSrc) {
	
	pId = window["p".concat(pno)];
	
	// If Play All mode is set to Pause, reset and stop audio
	if (PlyAllMde == "Pse" && AutAud == 1  && ClkSrc == "AlBtnClk") {
		//exit process here
	} 
	
	// Under these conditions proceed with audio play/pause functions
	if ((PlyAllMde == "Pse" && AutAud == 1 && ClkSrc == "BtnClk") || (PlyAllMde == "Ply" && AutAud == 1) || (PlyAllMde == "Ply" && AutAud == 0) || (ClkSrc == "IAudClk"))
		
	{
		
		OldPlayIcoId = PlayIcoId;
		OldPauseIcoId = PauseIcoId;
		
		AudFileId = "Ex".concat(ex, "WI", wi);
		RespVoiLng = {ENG: "UK English Male", ITA: "Italian Male", JPN: "Japanese Male",};
		PlayIcoId = "Ex".concat(ex, "PlayIco", "WI", wi);
		PauseIcoId = "Ex".concat(ex, "PauseIco", "WI", wi);
		
		if (wi == 'x') {
			wi = CurrentBtn;
		}
		
		// Set text for audio playback
		if (ex == 0) {
			SpkTxt = pId[wi]["WI"][L2Selected];
		} else {
			SpkTxt = pId[wi]["EXAud".concat(ex)][L2Selected];
		}
		
		if (AudStat == 0) {
			// Audio is off
			// determine play from pause pos or new audio file
			if (AudFileId == CurrentAudFileId) {// play from pause pos
				AudStat = 1; 
				responsiveVoice.resume();
				AudPlayIco();
			} else {// play new file from start
				if (PlyAllMde == "Ply" && AutAud == 0) {//In case auto audio option is off during play all
					AudStat = 0; 					
					responsiveVoice.speak(SpkTxt, RespVoiLng[L2Selected], {onstart: voiceStartCallback, onend: voiceEndCallback, volume: 0});
				} else {//Play audio in other cases
					AudStat = 1;
					responsiveVoice.speak(SpkTxt, RespVoiLng[L2Selected], {onstart: voiceStartCallback, onend: voiceEndCallback, volume: 0.7});
					AudPlayIco();
				}
			}
			CurrentAudFileId = AudFileId;
		
		} else {
			// Audio is on
			// determine pause or new audio file
			if (AudFileId == CurrentAudFileId) {// pause
				AudStat = 0;
				responsiveVoice.pause();
				AudPauseIco();
			} else {// Interrupt current Audio with new audio file
				AudStat = 1;
				responsiveVoice.speak(SpkTxt, RespVoiLng[L2Selected], {onstart: voiceStartCallback, onend: voiceEndCallback, volume: 0.7});
				AudPlayIco();
				// Reset play UI for previous btn
				document.getElementById(OldPlayIcoId).style.display = 'block';
				document.getElementById(OldPauseIcoId).style.display = 'none';
			}
			CurrentAudFileId = AudFileId;
		
		}
	
	}

}

function PlyAllAudReps() {
    
	if (PlyAllStng == 1) {//Play next 
	  
		//Calculate listen and repeat time
		RepWt = AudDur + 1000;
	  
		//Proceed or stop process
		if (7 >= PlyAllN) {//If WI is between 0 and-or equal to 7, proceed to next WI.
			PlyAllN = PlyAllN + 1;
			CrntPlyAllN = PlyAllN;
			setTimeout(function() { MUIUpdP00X(pno, PlyAllN, 'AlBtnClk') }, RepWt);
			ClkSrcT = 'AlBtnClk';
			setTimeout(function() { AudioCntrl(PlyAllN, 0) }, RepWt);
		} else {//If WI is WI8, reset to 0
			setTimeout(function() { MUIUpdP00X(pno, 0, 'AlBtnClk') }, RepWt);
			setTimeout(PlyAllIcoOff, RepWt);
			CrntPlyAllN = 0;
		} 
	}
  
}

var startTime, endTime;

function voiceStartCallback() {
	startTime = performance.now();
}

function voiceEndCallback() {
	endTime = performance.now();
	AudStat = 0;
	CurrentAudFileId = "AudioEnd";	
	AudPauseIco();
	
	var timeDiff = endTime - startTime;//in ms 
	timeDiff /= 1000;  
	AudDur = Math.round(timeDiff);// get seconds
  
	if (PlyAllMde == "Ply") {//Play All Rep Function
		PlyAllAudReps();
	} 
}
 
function AudPlayIco() {	
  document.getElementById(PlayIcoId).style.display = 'none';
  document.getElementById(PauseIcoId).style.display = 'block';
}

function AudPauseIco() {
  document.getElementById(PlayIcoId).style.display = 'block';
  document.getElementById(PauseIcoId).style.display = 'none';
}

// expand buttons function
function openclose(AccId) {
	if (AccXStat[AccId] == 0) {
     	document.getElementById('AccExsWI'.concat(AccId)).className = "WIExs expand";
		document.getElementById('AccBtnLnVWI'.concat(AccId)).style.display = 'none';
        AccXStat[AccId] = 1;
     } else {
    	document.getElementById('AccExsWI'.concat(AccId)).className = "WIExs";
		document.getElementById('AccBtnLnVWI'.concat(AccId)).style.display = 'block';
        AccXStat[AccId] = 0;
     }
}

// image attribution modal display process
function modaldisp(x) {
	
	modal = document.getElementById('myModal');
	modalImg = document.getElementById("modalimg");
	modalSrcImg = document.getElementById("srcimg");
	captionText = document.getElementById("caption");
	// Get the <span> element that closes the modal
	span = document.getElementsByClassName("close")[0];
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}
	
    modal.style.display = "block";

    if (pId[x].imgsrc == "original") {
		document.getElementById("imgattrLCol").style.display = "none";
		document.getElementById('CRContMine').innerHTML = UItext[L1Selected]["CRTextWIO"];
    } else {
		if (x == 0) {
		  document.getElementById("imgattrLCol").style.display = "none";
		  document.getElementById('CRContMine').innerHTML = UItext[L1Selected]["CRTextWI0"];
		} else {
		  document.getElementById("imgattrLCol").style.display = "block";
		  document.getElementById('CRContMine').innerHTML = UItext[L1Selected]["CRTextWID"];
		  modalSrcImg.src = pId[x].imgattrsrcfle;
		}
    }
    modalImg.src = pId[x].imgfile;
    modalImg.className = "modal-content ".concat(pId[x].imgbckg);

    document.getElementById("ImgAttrLnkCnt").innerHTML = pId[x].imgattrsite;
  	document.getElementById("ImgAttrLnkCnt").href = pId[x].imgattrurl;
}
