


function indexpage() {
	
	
  ShareAdr = 'https://www.google.com';
  //Prepare template strings
  sitewidetemps();

  //Load templates from strings
  document.getElementById("TemplateContainer").insertAdjacentHTML("beforeend", centralcolumnhead);
	document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", HeaderTemp);
	document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", ColumnATemp);
	document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", ColumnBHead);
	
	document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", ColumnBTail);
	document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", ShareBtmTemp);
	document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", AttrTemp);
  document.getElementById("TemplateContainer").insertAdjacentHTML("beforeend", centralcolumntail);
	
	//Load in Menu Content before everything else
	//Share Image
    document.getElementById("ShareImgCont").src = "graphics/shareimg.png";
	L1 = document.getElementById("L1SelectID").value;
    L2 = document.getElementById("L2SelectID").value;
	MnuCntnt(L1);
	document.getElementById("menu-index").className = "linkmenu sel";

	
	//Variables to determine pagination and items per page 
	var PstsPerPg = 8; //Input by me
	var PstTotl = 9; //Input by me
	var PgMx = Math.ceil(PstTotl/PstsPerPg);

	//testing for rogue/non existent local storage item
	var storeditm = localStorage.getItem("PageId");
	if (storeditm === undefined || storeditm === null || storeditm > PgMx) {
		CrntPgN = 1;
		localStorage.setItem("PageId", 1);
	} else {
	var CrntPgN = localStorage.getItem("PageId"); //Comes from local storage (user)
	}
	
	//Pagination Container
	var PgntionCnt = `
	<div class="pagination" id="PgntionCnt">
			<!-- Pagination Buttons Go Here -->
	</div>
	`;
	document.getElementById("ColumnB").insertAdjacentHTML("beforeend", PgntionCnt);
	
	//Gallery Item Container - separates gallery from pagination
	var GalCnt = `	
	<div id="GalCnt" >
	<!-- Gallery Items Go Here -->
	</div>
	`;
	document.getElementById("ColumnB").insertAdjacentHTML("afterbegin", GalCnt);
	
	//Generate pagination content from initial variables
	for (i=1; i<(PgMx+1); ++i) {
	  var PgId = "Pg".concat(i);
	  var PgionItm = `		
	  <a id=${PgId} href="index.html" onClick="SetPgId('${i}')">${i}</a>
	  `;
	  var PgionItmX = [];
	  PgionItmX[i] = PgionItm;
	
	  document.getElementById("PgntionCnt").insertAdjacentHTML("beforeend", PgionItmX[i]);
	}
	
	StrtPstN = ((CrntPgN-1)*PstsPerPg)+1;
	EndPstN = StrtPstN+(PstsPerPg-1)

	//In case of last page, display posts until final in existence
	if (CrntPgN == PgMx) {
	EndPstN = PstTotl;
	}

	//Pagination highlighting
	for (var i=1; i<(PgMx+1); ++i) {
		if (i == CrntPgN) {
			document.getElementById("Pg".concat(i)).className = "active";
		} else {
			document.getElementById("Pg".concat(i)).className = "";
		}
	}
	
	LoadInGlItms();
}

function SetPgId(PgNoStr) {
	//Send item to local storage before reloading index page
  localStorage.setItem("PageId", PgNoStr);
}


function LoadInGlItms() {
	
	//JS Object data from external scripts
	for (i = StrtPstN; i < (EndPstN + 1); ++i) {
		
		var pno = "00".concat(i);
		var pnosrc = "p".concat(pno, "/", "p", pno, ".js");
		
		//Eg: p00x/p00x.js
		var scriptX = window.document.createElement("script");
		window.document.body.appendChild(scriptX);
		
		scriptX.src = pnosrc;
		
	}
	
	//Stagger image load and page header+footer
	itimes = ((EndPstN + 2) - StrtPstN);
	loadincre = 125;
	
	//var pno = "00".concat(StrtPstN);
	//pId2 = window["p".concat(pno)];
	SocialMBtns();
	setTimeout(PImgs, ((itimes*loadincre)+500));
	setTimeout(LangUpdate, ((itimes*loadincre)+300));
		
}

function PImgs() {
	//Image gallery/post index loading with delay
	var pno = "00".concat(StrtPstN);

	var PNavImg = "p00".concat(StrtPstN, "/monop00", StrtPstN, "-wi0.svg");
	var PNavImgA = "p00".concat(StrtPstN, "/monop00", StrtPstN, "-wi0a.svg");
	var pId = window["p".concat(pno)];

	//alert(StrtPstN);
	//var pIdx = "p".concat("00", StrtPstN)
	//alert(pIdx);
	pTtl = pId["0"]["WI"]["ENG"];
	//alert(pTtl);
	
	
	
	if (pId.AnnotType == "Annot") {
		var pnavexp = `	
	
		<div class="responsive">
		  <div class="gallery" style="text-align: right;">
			<a href="post.html" onClick="SetPstId('${pno}')">
			  
			  <div width="100%" style="position: relative;">
			  <img src=${PNavImg} class="PImgNav">
			  <img src=${PNavImgA} class="PImgNavOver">
			  </div>
				${pno} - ${pTtl}
			</a>
			
		  </div>
		</div>
	`;
	} else {
	var pnavexp = `	
	
		<div class="responsive">
		  <div class="gallery" style="text-align: right;">
			<a href="post.html" onClick="SetPstId('${pno}')">
			  <img src=${PNavImg} class="PImgNav" width="600" height="400">
			${pno} - ${pTtl}
			</a>
			
		  </div>
		</div>
	`;
	}
	
	var PNavItmX = [];
    PNavItmX[StrtPstN] = pnavexp;
	document.getElementById("GalCnt").insertAdjacentHTML("beforeend", PNavItmX[StrtPstN]);
	
	//Loop process
	StrtPstN++;
	//alert("testing");
	if( StrtPstN < itimes ) {
	  setTimeout( PImgs, 125 );
	} 


}
  

//Send post number to local storage before going to post.html
function SetPstId(PstNoStr) {
  localStorage.setItem("PostId", PstNoStr);
  
}









var BtnIdBorderSuffix = "B";
var BtnIdTextSuffix = "T";
var ButtonIdHead = "P00XBtnImgId";
var CurrentBtn = P00XBtnSelected;

var CurrentBtnBorderId = ButtonIdHead.concat(CurrentBtn, BtnIdBorderSuffix);
var CurrentBtnTextId = ButtonIdHead.concat(CurrentBtn, BtnIdTextSuffix);

function BtnHLight(type) {

if (type == "HLight") {
	// Dehighlight previously selected button
	for(var i = 1; i < 9; ++i) {
		BtnTextId = ButtonIdHead.concat(i);
		document.getElementById(BtnTextId).className.baseVal = "btnImgoff";
	}
	document.getElementById(ButtonIdHead.concat(0)).className.baseVal = "Whtbckoff";

	CurrentBtnTextId = ButtonIdHead.concat(CurrentBtn);

	// Highlight selected button
	document.getElementById(CurrentBtnTextId).className.baseVal = "btnImgon";
	if (CurrentBtn == 0) {
		document.getElementById(CurrentBtnTextId).className.baseVal = "Whtbckon";
		for(var i = 1; i < 9; ++i) {
			BtnTextId = ButtonIdHead.concat(i);
			document.getElementById(BtnTextId).className.baseVal = "btnImgonAll";
		}
	}

} else {
	
	// Dehighlight Everything
	for(var i = 1; i < 9; ++i) {
		BtnTextId = ButtonIdHead.concat(i, BtnIdTextSuffix);
		BtnBordId = ButtonIdHead.concat(i, BtnIdBorderSuffix);
		document.getElementById(BtnTextId).className.baseVal = "btnToff";
		document.getElementById(BtnBordId).className.baseVal = "btnCoff";
	}
	document.getElementById("P00XBtnImgId0T").className.baseVal= "btnbckoff";


	// UPdate Button ID for newly selected button
	CurrentBtnBorderId = ButtonIdHead.concat(CurrentBtn, BtnIdBorderSuffix);
	CurrentBtnTextId = ButtonIdHead.concat(CurrentBtn, BtnIdTextSuffix);

	// Highlight selected button
	if (CurrentBtn == 0) {
		document.getElementById("P00XBtnImgId0T").className.baseVal = "btnbckon";
		for(var i = 1; i < 9; ++i) {
			BtnTextId = ButtonIdHead.concat(i, BtnIdTextSuffix);
			//document.getElementById(BtnTextId).className.baseVal = "btnTonAll";
		} 
			
	} else {
		document.getElementById(CurrentBtnTextId).className.baseVal = "btnTon";
		document.getElementById(CurrentBtnBorderId).className.baseVal = "btnCon";
	}
	
}

}

function LangUpdate() {
  // Main App UI Update on Lang. Select,
  
  L1 = document.getElementById("L1SelectID").value;
  L2 = document.getElementById("L2SelectID").value;
  MnuCntnt(L1);
  HdrFtrTxt(L1);
  


  

}

var ButtonIdHead = "P00XBtnImgId";
var MUIL1TCont = "MUIL1TContP00X";
var MUIL2TCont = "MUIL2TContP00X";
var CurrentBtn = P00XBtnSelected;

function MUIUpdP00X(n) {
   // Set variables before sending through BtnHLight Function

   P00XBtnSelected = n;
   CurrentBtn = P00XBtnSelected;
   ButtonIdHead = "P00XBtnImgId";
   BtnHLight(pId.AnnotType);

   // Set variables before sending through WIXUpd Function
   // Update L1 Lang, L2 Lang variables
   L1Selected = document.getElementById("L1SelectID").value;
   L2Selected = document.getElementById("L2SelectID").value;
   // ID of word container
   MUIL1TCont = "MUIL1TContP00X";
   MUIL2TCont = "MUIL2TContP00X";

   WIXUpd(L1Selected, L2Selected);

   // On Button Click, Lang pair Filtering and then Meta data Update
   // Add variables for meta and links container IDs
   //WordMetaUpd();
	WIXLinksUpd(L1Selected, L2Selected);
	WIXPOfSpUpd(L1Selected, L2Selected);
}

var CurrentAudFileId;
var PlayIcoId;
var PauseIcoId;
var AudStat = 0;

function AudioCntrl(wi, ex) {

    OldPlayIcoId = PlayIcoId;
    OldPauseIcoId = PauseIcoId;
	
	AudFileId = "Ex".concat(ex, "WI", wi);
    PlayIcoId = "Ex".concat(ex, "PlayIco", "WI", wi);
    PauseIcoId = "Ex".concat(ex, "PauseIco", "WI", wi);
	
	if (wi == 'x') {
		wi = CurrentBtn;
	}
	//alert(wi);
    // New Variable Lookup Method
    // AudEngEx1
    if (ex == 0) {
      AudFleCnt = "Aud".concat(L2Selected + "WI");
    } else {
      AudFleCnt = "Aud".concat(L2Selected + "Ex" + ex);
    }

    AudioFile = p001[wi][AudFleCnt];

    
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
			AudPlay();
      AudStat = 1;
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
}
