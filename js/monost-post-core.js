function pageload() {

  //p00X = window[pnovar];
  p00X.SetPost();//Load in repetetive object values

  pId = p00X; //(not necessary?)
  pno = pId.No;
  //alert(pno);
  //Prepare Main User Interface Template
  
  MUITempPrp(pno);
  MUITempSet(pId.AnnotType);
  //Prepare Word List Template
  WIListTempSet();
  //Prepare Site Wide Templates
  sitewidetemps();
  //Load template from strings
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
document.getElementById("TemplateContainer").insertAdjacentHTML("beforeend", centralcolumntail);

  //Load Annotations
  if (pId.AnnotType == "Annot") {
	SetAnnotations(pno);
  }
  
  L1 = localStorage.getItem("Lang1");
  L2 = localStorage.getItem("Lang2");
  
  
  // Initial Settings for annotation highlighting
  //MUIL1TCont = "MUIL1TContP00X";
  //MUIL2TCont = "MUIL2TContP00X";
  
  MUIL1TCont = "MUIL1TContP".concat(pno);
	MUIL2TCont = "MUIL2TContP".concat(pno);
  
  CurrentBtn = 0;
  BtnIdHead = "P".concat(pId.No, "BtnImgId");
  CurrentBtnBorderId = BtnIdHead.concat(CurrentBtn, "B");
  CurrentBtnTextId = BtnIdHead.concat(CurrentBtn, "T");
  
  BtnHLight(pId.AnnotType);


  //Set Auto Audio Setting in local storage to 0/off if non existent
  if (localStorage.getItem("AutAudSetng") === undefined || localStorage.getItem("AutAudSetng") === null) {
		localStorage.setItem("AutAudSetng", "0");
  }
  
  // Play All Settings
  PlyAllStng = 0; // Set Play All Setting to 0 (off) at page load
  PlyAllMde = "Pse"; // Initial mode for play all mode is pause
  CrntPlyAllN = 0; // Initial position for Play All mode is WI0
	
  
	
  //burger setting
  AccXStat = [];
  AccXStat['x'] = 0;
  document.getElementById("ACCWIx").addEventListener("click", function() {brgrfunc('x');}, false);
  
  //Apply event listeners for page accordions
  AccListeners();
	
	
  //Image and UI graphics
  AutAudSet(0);
  
  BtnImgs();
  
  SocialMBtns();
  
  SetImgData();
  
  
  

  // Image Attribution
  ImgAttrSet(); //Apply event listeners to img Attribution Images
  document.getElementById("imgattrblk").style.display = "block"; //Display Img Attribution Images - Default is display:none, within sitewide template

  // Updates UI for entire page for Language selected
  //LangUpdate();
  
  lselstr = {1: L1, 2: L2};
	LSel(1, L1, 'pgld'); //language select source is from page load
  
  //L1 = "ENG";
  
  
  
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
	//document.getElementById(BrgrLDspId).innerHTML = lconv[ll];
		
	//store selected language
	lselstr[ln] = ll;

	//highlight other language previously selected
	if (ln == 1) { 
		//L1 = ll;
		o = "2"; 
		localStorage.setItem("Lang1", ll); 
		HdrFtrTxt(ll);
		MnuCntnt(ll, "glrorpst");
		
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
		
		//BrgrLDspId = "BrgrLDspL".concat(o);
		//document.getElementById(BrgrLDspId).innerHTML = lconv[llo];
	
	//alert(lselstr[1]);
	LangUpdate(lselstr[1], lselstr[2]);
}




function LangUpdate(L1, L2) {
  // Main App UI Update on Lang. Select,
  // Set variables before sending through WIXUpd Function
//alert(L1);
  // set L1 Lang, L2 Lang
  //L1 = localStorage.getItem("Lang1");
  //L2 = localStorage.getItem("Lang2");
  L1Selected = L1;
  L2Selected = L2;
	//alert(L1Selected);

  //Word Items
  WIXUpd(L1Selected, L2Selected);
  WIWordsSet(L1Selected, L2Selected);
	 
  //Dictionary links
  WIXLinksUpd(L1Selected, L2Selected);
  WIL2LinksSet(L1Selected, L2Selected);
 
  //Part of speech data
  WIXPOfSpUpd(L1Selected, L2Selected);
  WIL2POfSpSet(L1Selected, L2Selected);
  
  //MnuCntnt(L1Selected);
  //HdrFtrTxt(L1Selected);
  
  SemTagLoader(L1Selected);
  TatoebaExSrcs(L2Selected);

}




function MUIUpdP00X(pno, n, ClkSrc) {
	//alert(n);
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
//alert(CurrentBtn);
   BtnHLight(pId.AnnotType);
	
   // Set variables before sending through WIXUpd Function
   // Update L1 Lang, L2 Lang variables
   L1Selected = lselstr[1];
   L2Selected = lselstr[2];
   //L1Selected = document.getElementById("L1SelectID").value;
   //L2Selected = document.getElementById("L2SelectID").value;
   
   WIXUpd(L1Selected, L2Selected);

   // On Button Click, Lang pair Filtering and then Meta data Update
   // Add variables for meta and links container IDs
   //WordMetaUpd();
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
	// Dehighlight previously selected button
	
	for(var i = 1; i < 9; ++i) {
		BtnTextId = "P".concat(pno, "BtnImgId", i);
		document.getElementById(BtnTextId).className.baseVal = "btnImgoff";
	}
	
	document.getElementById("P".concat(pno, "BtnImgId0")).className.baseVal = "Whtbckoff";
	
	CurrentBtnTextId = "P".concat(pno, "BtnImgId", CurrentBtn);
	
	// Highlight selected button
	document.getElementById(CurrentBtnTextId).className.baseVal = "btnImgon";
	
	if (CurrentBtn == 0) {
		document.getElementById(CurrentBtnTextId).className.baseVal = "Whtbckon";
		for(var i = 1; i < 9; ++i) {
			BtnTextId = BtnIdHead.concat(i);
			document.getElementById(BtnTextId).className.baseVal = "btnImgonAll";
		}
	}

} else {
	
	// Dehighlight Everything
	for(var i = 1; i < 9; ++i) {
		BtnTextId = BtnIdHead.concat(i, "T");
		BtnBordId = BtnIdHead.concat(i, "B");
		document.getElementById(BtnTextId).className.baseVal = "btnToff";
		document.getElementById(BtnBordId).className.baseVal = "btnCoff";
	}
	document.getElementById(P00XBtnImgId0T).className.baseVal= "btnbckoff";


	// UPdate Button ID for newly selected button
	CurrentBtnBorderId = BtnIdHead.concat(CurrentBtn, "B");
	CurrentBtnTextId = BtnIdHead.concat(CurrentBtn, "T");

	// Highlight selected button
	if (CurrentBtn == 0) {
		
		document.getElementById(P00XBtnImgId0T).className.baseVal = "btnbckon";
		for(var i = 1; i < 9; ++i) {
			BtnTextId = BtnIdHead.concat(i, "T");
			//document.getElementById(BtnTextId).className.baseVal = "btnTonAll";
		} 
			
	} else {
		//alert(CurrentBtn);
		//alert(CurrentBtn);	
		document.getElementById(CurrentBtnTextId).className.baseVal = "btnTon";
		
		document.getElementById(CurrentBtnBorderId).className.baseVal = "btnCon";
		
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

function PlyAllAud() {
//procedure on button click event

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
		//alert(CrntPlyAllN)
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
		PlayIcoId = "Ex".concat(ex, "PlayIco", "WI", wi);
		PauseIcoId = "Ex".concat(ex, "PauseIco", "WI", wi);
		
		if (wi == 'x') {
			wi = CurrentBtn;
			
		}
		
		// AudEngEx1
		if (ex == 0) {
		  AudFleCnt = "Aud".concat(L2Selected + "WI");
		} else {
		  AudFleCnt = "Aud".concat(L2Selected + "Ex" + ex);
		}

	//alert(pId[wi]["ENG"]);

		AudioFile = pId[wi][AudFleCnt];
		
		
		
		if (AudStat == 0) {

			// Audio is off
			// determine play from pause pos or new audio file
			if (AudFileId == CurrentAudFileId) {
				// play from pause pos
				AudPlay();
				AudStat = 1; 
				CurrentAudFileId = AudFileId;
			} else {
				// load audio file
				AudLoad();
				// play new file from start
				if (PlyAllMde == "Ply" && AutAud == 0) {//In case auto audio option is off
					AudStat = 0; 					
					AudDur = document.getElementById("AudObjX").duration;
					CurrentAudFileId = AudFileId;
					setTimeout(PlyAllAudReps, 100);//delay gives time for audio file to load
				} else {
					AudPlay();
					AudStat = 1; 
					AudDur = document.getElementById("AudObjX").duration;
					}
				
				CurrentAudFileId = AudFileId;
			}
		
		
		
		} else {
			// Audio is on
			// determine pause or new audio file
			if (AudFileId == CurrentAudFileId) {
		  // pause
		  AudPause();
		  AudStat = 0;
				CurrentAudFileId = AudFileId;

			} else {
		  // Interrupt current Audio with new audio file
		  // load audio file
				AudLoad();
				// play new file from start
				AudPlay();
		  AudStat = 1;
				CurrentAudFileId = AudFileId;
		  // Reset play UI for previous btn
		  document.getElementById(OldPlayIcoId).style.display = 'block';
				document.getElementById(OldPauseIcoId).style.display = 'none';
			}
		
		}
	
	}

}

function PlyAllAudReps() {
    
	//Play next 
	if (PlyAllStng == 1) {
	  
		//Calculate listen and repeat time
		AudDur = document.getElementById("AudObjX").duration;
		RepWt = (AudDur*1000) + 1000;
	  
		//If auto audio is off double silence interval
		if (PlyAllMde == "Ply" && AutAud == 0) {
			RepWt = ((AudDur*2)*1000) + 1000;
		}
	   
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


function AudLoad() {
  document.getElementById("AudObjX").src = AudioFile;
}

function AudPlay() {	
  document.getElementById("AudObjX").play();
  document.getElementById(PlayIcoId).style.display = 'none';
  document.getElementById(PauseIcoId).style.display = 'block';
}

function AudPause() {
  document.getElementById("AudObjX").pause();
  document.getElementById(PlayIcoId).style.display = 'block';
  document.getElementById(PauseIcoId).style.display = 'none';
}

function resetAudObjX() {
  AudStat = 0;
  CurrentAudFileId = "AudioEnd";
  document.getElementById(PlayIcoId).style.display = 'block';
  document.getElementById(PauseIcoId).style.display = 'none';
  
  //Play All Rep Function
  if (PlyAllMde == "Ply") {
	PlyAllAudReps();
  } 
   
}
	
