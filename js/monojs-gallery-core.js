
function indexpage() {

	//Set L1 in local storage to ENG if non existent
	if (localStorage.getItem("Lang1") === undefined || localStorage.getItem("Lang1") === null) {
		localStorage.setItem("Lang1", "ENG");
	}

	//Set L2 in local storage to JPN if non existent
	if (localStorage.getItem("Lang2") === undefined || localStorage.getItem("Lang2") === null) {
		localStorage.setItem("Lang2", "JPN");
	}

	//Set GlType in local storage to BW if non existent
	if (localStorage.getItem("GlType") === undefined || localStorage.getItem("GlType") === null) {
		localStorage.setItem("GlType", "ALL");
	}

	//Set IndxMde in local storage to LST if non existent
	if (localStorage.getItem("IndxMde") === undefined || localStorage.getItem("IndxMde") === null) {
		localStorage.setItem("IndxMde", "LST");	
	}

	//ShareAdr = 'https://www.google.com';
	//Prepare template strings
	sitewidetemps();
	GallTemps();
  
	//Load templates from strings
	document.getElementById("TemplateContainer").insertAdjacentHTML("beforeend", centralcolumnhead);
	document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", HeaderTemp);
	document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", ColumnATemp);
	document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", ColumnBHead);

	document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", ColumnBTail);
	document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", ShareBtmTemp);
	document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", AttrTemp);
	document.getElementById("TemplateContainer").insertAdjacentHTML("beforeend", centralcolumntail);

	document.getElementById("ColumnB").insertAdjacentHTML("beforeend", PgntionCnt);
	document.getElementById("ColumnB").insertAdjacentHTML("afterbegin", GalCnt);

	//Language data
	L1 = localStorage.getItem("Lang1");
	L2 = localStorage.getItem("Lang2");
	lselstr = {1: L1, 2: L2};
	LSel(1, L1, 'pgld'); //language select source is from page load

	//Variables to determine pagination and items per page
	if (localStorage.getItem("IndxMde") == "LST") {
		PstsPerPg = 6;
	} else {
		PstsPerPg = 15; //Input by me
	}

	pindex = {
	BW: {1: "001", 2: "002", 3: "004", 4: "005", 5: "006", 6: "007", 7: "008", 8: "009", 9: "010", 10: "012", 11: "015",},
	CLR: {1: "003", 2: "011", 3: "013", 4: "014",},
	}

	if (localStorage.getItem("GlType") == "BW") {PstTotl = 11;} //Input by me - BW total cards
	if (localStorage.getItem("GlType") == "CLR") {PstTotl = 4;} //Input by me - CLR total cards
	if (localStorage.getItem("GlType") == "ALL") {PstTotl = 15;} //Input by me - CLR and BW total cards

	PgMx = Math.ceil(PstTotl/PstsPerPg);

	//testing for rogue/non existent local storage item
	var storeditm = localStorage.getItem("PageId");
	if (storeditm === undefined || storeditm === null || storeditm > PgMx) {
		CrntPgN = 1;
		localStorage.setItem("PageId", 1);
	} else {
		CrntPgN = localStorage.getItem("PageId"); //Comes from local storage (user)
	}
	
	//Gallery Type Selection className update
	if (localStorage.getItem("GlType") == "BW") {document.getElementById("GlBWOptn").className += " GlOpSlct";}
	if (localStorage.getItem("GlType") == "CLR") {document.getElementById("GlCLROptn").className += " GlOpSlct";}
	if (localStorage.getItem("GlType") == "ALL") {document.getElementById("GlALLOptn").className += " GlOpSlct";}
	if (localStorage.getItem("IndxMde") == "GAL") {document.getElementById("GlGALOptn").className += " GlOpSlct";}
	if (localStorage.getItem("IndxMde") == "LST") {document.getElementById("GlLSTOptn").className += " GlOpSlct";}
	
	//Set IndxMde before updating language text. Gallery mode will trigger the gallery text lagnuage updater
	IndxMde = localStorage.getItem("IndxMde");
	

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

	StrtPstN = PstTotl-(PstsPerPg*(CrntPgN-1));
	EndPstN = StrtPstN-(PstsPerPg-1);

	//In case of last page, display posts until final in existence
	if (CrntPgN == PgMx) {
	EndPstN = 1;
	}
	
	PstsThisPg = StrtPstN-(EndPstN-1);
 
	//Pagination highlighting
	for (var i=1; i<(PgMx+1); ++i) {
		if (i == CrntPgN) {
			document.getElementById("Pg".concat(i)).className = "active";
		} else {
			document.getElementById("Pg".concat(i)).className = "";
		}
	}
	
	LoadInPstScrpts();
	GallSeq(1);
}

function GallSeq(step) {
	
	if (step == 1) {
		itimes = ((StrtPstN + 1) - EndPstN);
		loadincre = 50;
		//Stagger image load and page header+footer
		SocialMBtns();
		PstN = StrtPstN;
		//alert(PstN);
		if (localStorage.getItem("IndxMde") == "LST") {
			setTimeout(PMuis, ((itimes*loadincre)));
		} else {
			setTimeout(PImgs, ((itimes*loadincre)));
		}
	}
	
	if (step == 2) {
		
	}
}

function GallTemps() {
	
	//Pagination Container
	PgntionCnt = `
	<div class="pagination" id="PgntionCnt" style="border: 0px solid #000; background-color: #fff; ">
			<!-- Pagination Buttons Go Here -->
	</div>
	`;
	
	GalCnt = `

	<div id="GalCnt" style="padding-top: 5px; position: relative; z-index: 99; background-color: #fff;">

		<div style="border: 0px solid red; display: inline-block; float: left; position: relative; width: 100%; height: 100%;">
			<div style="float: left; border: 0px solid blue; position: relative; height: 100%; display: inline-block; margin-right: 5px;">
			
			<!-- contains card type elements -->
				<p style="margin-left: 5px; border: 0px solid #000; float: left;">
					<span id="GlCrdTypeTxtId" style="margin-right: 5px; border: 0px solid #000; text-decoration: none;"></span>
				</p>
				
				<a href="index.html" onClick="SetGlType('BW')" style="text-decoration: none; float: left; margin-top: 3px;">
					<div id="GlBWOptn" class="ClrBtnCnt" style="">
						<div style="position: relative; height: 100%; width: 100%; display: inline-block; float: left;">
							<svg class="StretchToContainer" viewbox="0 0 130 130">
								<rect id="" width="65" height="65" x="0" y="0" fill="#000"/>
								<rect id="" width="65" height="65" x="65" y="0" fill="#808080"/>
								<rect id="" width="65" height="65" x="0" y="65" fill="#ccc"/>
								<rect id="" width="65" height="65" x="65" y="65" fill="#ddd"/>
							</svg>
						</div>
					</div>
				</a>

				<span id="FwdSlshId" style="margin-left: 5px; margin-right: 5px; float: left;"> / </span>

				<a href="index.html" onClick="SetGlType('CLR')"  style="text-decoration: none; float: left; margin-top: 3px;">
					<div id="GlCLROptn" class="ClrBtnCnt" style="">
						<div style="position: relative; height: 100%; width: 100%; display: inline-block; float: left;">
							<svg class="StretchToContainer" viewbox="0 0 130 130">
								<rect id="" width="65" height="65" x="0" y="0" fill="blue"/>
								<rect id="" width="65" height="65" x="65" y="0" fill="red"/>
								<rect id="" width="65" height="65" x="0" y="65" fill="yellow"/>
								<rect id="" width="65" height="65" x="65" y="65" fill="green"/>
							</svg>
						</div>
					</div>
				</a>

				<span id="FwdSlshId" style="margin-left: 5px; margin-right: 5px; float: left;"> / </span>

				<a href="index.html" onClick="SetGlType('ALL')" style="text-decoration: none; float: left; border: 0px solid #000; margin-top: 3px;">

					<div id="GlALLOptn" class="" style="position:relative; display: flex; margin: 0px; padding: 2px; height: 18px; z-index: 10; cursor: pointer;">

							<div id="GlALLOptnCnpnt1" style="position: relative; height: 100%; display: flex; float: left;">
								<svg class="" style="height: 100%; position: relative;" viewbox="0 0 130 130">
									<rect id="" width="65" height="65" x="0" y="0" fill="#000"/>
									<rect id="" width="65" height="65" x="65" y="0" fill="#808080"/>
									<rect id="" width="65" height="65" x="0" y="65" fill="#ccc"/>
									<rect id="" width="65" height="65" x="65" y="65" fill="#ddd"/>
								</svg>
							</div>

							<div id="" style="position: relative; height: 100%; display: flex; float: left; border: 0px solid #000;">
								<svg class="" style="height: 100%; position: relative;" viewbox="0 0 130 130">
									<rect id="" width="65" height="20" x="32.5" y="55" fill="#808080"/>
									<rect id="" width="20" height="65" x="55" y="32.5" fill="#808080"/>
								</svg>
							</div>

							<div id="GlALLOptnCnpnt2" style="position: relative; height: 100%; display: flex; float: left;">
								<svg class="" style="height: 100%; position: relative;" viewbox="0 0 130 130">
									<rect id="" width="65" height="65" x="0" y="0" fill="blue"/>
									<rect id="" width="65" height="65" x="65" y="0" fill="red"/>
									<rect id="" width="65" height="65" x="0" y="65" fill="yellow"/>
									<rect id="" width="65" height="65" x="65" y="65" fill="green"/>
								</svg>
							</div>


					</div>
				</a>

			</div>

			<div style="float: left; border: 0px solid #000;">
				
				<span id="IndxMdeTxtId" style="margin-left: 5px; margin-right: 5px; border: 0px solid #000; text-decoration: none; float: left;"></span>
				<a href="index.html" onClick="SetIndxMde('LST')" style="text-decoration: none; float: left; margin-top: 3px; ">
					<div id="GlLSTOptn" class="GlMdeBtnCnt" style="">
						<div id="" style="position: relative; height: 100%; display: flex; float: left;">
								<svg class="" style="height: 100%; position: relative;" viewbox="0 0 225 145">
									<rect id="" width="65" height="65" x="0" y="0" fill="#808080"/>
									<rect id="" width="65" height="65" x="0" y="80" fill="#808080"/>
									
									<rect id="" width="145" height="20" x="80" y="0" fill="#ccc"/>
									<rect id="" width="145" height="20" x="80" y="40" fill="#ccc"/>
									
									<rect id="" width="145" height="20" x="80" y="80" fill="#ccc"/>
									<rect id="" width="145" height="20" x="80" y="120" fill="#ccc"/>
								</svg>
							</div>
					</div>
				</a>
				
				<span id="FwdSlshId" style="margin-left: 5px; margin-right: 5px; float: left;"> / </span>
				
				<a href="index.html" onClick="SetIndxMde('GAL')" style="text-decoration: none; float: left; margin-top: 3px;">
					<div id="GlGALOptn" class="GlMdeBtnCnt" style="">
						<div id="" style="position: relative; height: 100%; display: flex; float: left;">
							<svg class="" style="height: 100%; position: relative; display: inline-block;" viewbox="0 0 225 145">
								<rect id="" width="65" height="65" x="0" y="0" fill="#808080"/>
								<rect id="" width="65" height="65" x="0" y="80" fill="#808080"/>
								<rect id="" width="65" height="65" x="80" y="0" fill="#808080"/>
								<rect id="" width="65" height="65" x="80" y="80" fill="#808080"/>
								<rect id="" width="65" height="65" x="160" y="0" fill="#808080"/>
								<rect id="" width="65" height="65" x="160" y="80" fill="#808080"/>
							</svg>
						</div>
					</div>
				</a>
			
			</div>

		</div>

	<!-- Gallery Items Go Here -->
	</div>

	`;
}

function SetPgId(PgNoStr) {
  //Send item to local storage before reloading index page
  localStorage.setItem("PageId", PgNoStr);
}

function SetGlType(GlTypeStr) {
  //Send item to local storage before reloading index page
  localStorage.setItem("GlType", GlTypeStr);
}

function SetIndxMde(IndxMde) {
	localStorage.setItem("IndxMde", IndxMde);
}

var PstArr = [];
function LoadInPstScrpts() {

	//JS Object data from external scripts
	for (i = StrtPstN; i > (EndPstN - 1); --i) {

		flprfx = localStorage.getItem("GlType");

		if (flprfx == "ALL") {
			if (i < 10) {
				pno = "00".concat(i);
			} else {
				pno = "0".concat(i);
			}

		} else {
			pno = pindex[flprfx][i];
		}

		PstArr[i] = pno;
		//alert(PstArr[i])

		var pnosrc = "posts/p".concat(pno, "/", "p", pno, ".js");

		//Eg: p00x/p00x.js
		var scriptX = window.document.createElement("script");
		window.document.body.appendChild(scriptX);

		scriptX.src = pnosrc;

	}

	

}



var PnoPlyAllPos = [];

function PMuis() {
	
	if (PstN == StrtPstN) {
		document.getElementById("GalCnt").insertAdjacentHTML("beforeend", MUICont);
	}
	
	PnoPlyAllPos[PstN] = 0;
	
    if (flprfx == "ALL") {
			if (PstN < 10) {
				pno = "00".concat(PstN);
			} else {
				pno = "0".concat(PstN);
			}
			
		} else {
			pno = pindex[flprfx][PstN];
			
	}
	
	pId = window["p".concat(pno)];
	
	if (typeof pId !== "undefined") {//testing for undefined object
		//alert("End post number:".concat(EndPstN, ", Current post number:", PstN));
		setposter(pId);
		PMuisStge2(pno);
	} else {//if undefined
		console.log("undefined pId");
		//setTimeout(function() { PMuis() }, 500);
		//location.reload(true);
	}
	
}

function PMuisStge2(pno) {
	//Prepare Main User Interface Template
	MUITempPrp(pno);
	MUITempSet(pno, pId.AnnotType);
		
	//Load in MUI
	document.getElementById("MUICont").insertAdjacentHTML("beforeend", MUIXtemp);
	
	//Load Annotations
	if (pId.AnnotType == "Annot") {
		SetAnnotations(pId);
	}
	
	L1 = localStorage.getItem("Lang1");
	L2 = localStorage.getItem("Lang2");
  
	// Initial Settings for annotation highlighting
	MUIL1TCont = "MUIL1TContP".concat(pno);
	MUIL2TCont = "MUIL2TContP".concat(pno);
  
	CurrentBtn = 0;
	CurrentBtnBorderId = BtnIdHead.concat(CurrentBtn, "B");
	CurrentBtnTextId = BtnIdHead.concat(CurrentBtn, "T");
  
	//Set Auto Audio Setting in local storage to 0/off if non existent
	if (localStorage.getItem("AutAudSetng") === undefined || localStorage.getItem("AutAudSetng") === null) {
		localStorage.setItem("AutAudSetng", "0");
	}
	
	// Play All Settings
	PlyAllStng = 0; // Set Play All Setting to 0 (off) at page load
	PlyAllMde = "Pse"; // Initial mode for play all mode is pause
	CrntPlyAllN = 0; // Initial position for Play All mode is WI0
	
	//Image and UI graphics	
	AutAudSet(pno, 0);
	 
	if (PstN == EndPstN) {
		BtnImgs();
	}
	
	pTtl = pId["0"]["WI"][L1];
	PDte = pId["Date"];
	PstLnkTxtId = pId["No"];
	//alert(pTtl);
	spacer = `
	<div class="" style="background-color: #fff; width: 100%; height: 100px; border-top: 1px solid #808080; margin-top: 10px;">
		<p align="left" style="float: left; font-size: 11px; display: inline-block;">${PDte}</p>
		<a class="GlLink" href="post.html" onClick="SetPstId('${pno}')" id="${PstLnkTxtId}" style="float: right; padding-top: 0px; margin-top: 0px;">
			${pTtl}
		</a>
	</div>
	`;
	
	document.getElementById("MUICont").insertAdjacentHTML("beforeend", spacer);
	
	SetImgData(pId);
	
	MUIUpdP00X(pno, CurrentBtn, "LoadClk");
	
	LSel(1, L1, 'pgld');

	//Loop process
	
	PstN--;
	
	if( PstN >= EndPstN) {
		
	  setTimeout( PMuis, 125 );
	}
}

function PImgs() {
	//Image gallery/post index loading with delay
	//alert("b");
	if (flprfx == "ALL") {
		if (PstN < 10) {
			pno = "00".concat(PstN);
		} else {
			pno = "0".concat(PstN);
		}

	} else {
		pno = pindex[flprfx][PstN];
	}
	
	var PNavImg = "posts/p".concat(pno, "/monop", pno, "-wi0.svg");
	//var PNavImgA = "p".concat(pno, "/monop", pno, "-wi0a.svg");
	var pId = window["p".concat(pno)];
	if (pId === undefined) {
		//Check for this load problem, then retry
		setTimeout(PImgs, 50);	 
	}
	
	//alert(pId["0"]["WIt"][L1]);
	pTtl = pId["0"]["WIt"][L1];
	PDte = pId["Date"];

	PstLnkTxtId = pId["No"];

	//Determine the backgrund color for index Nav Imgs
	if (pId["0"]["imgbckg"] == "blk") {
		PImgNvBck = "black";
	} else {
		PImgNvBck = "white";
	}
	
	if (pId.AnnotType == "Annot") {
		
		var IndxPstImgHd = `

		<div class="responsive" style="margin-bottom: 20px;">
		 <div style="border: 1px solid #808080; border-radius: 3px; position: relative: width: 100%; height: 100%; margin-left: 5px; margin-right: 5px;">
		  <div class="gallery" style="text-align: right;">
			<a href="post.html" onClick="SetPstId('${pno}')">

			  <div class="fade-in" width="100%" style="position: relative; background-color: ${PImgNvBck}; z-index: 10;">
			  <img src=${PNavImg} class="PImgNav" width="100%">
			  <svg viewBox="0 0 1024 768" width="100%" style="float: left; position: absolute; left: 0%; top: 0%;">
				<!-- Buttons Loaded here -->
			  
		`;
	
		var IndxPstImgTl = `
		
			  </svg>
			  </div>
			</a>

			<p align="left" style="float: left; font-size: 11px; width: 100%; display: inline-block;">${PDte}</p>

			<a class="GlLink" href="post.html" onClick="SetPstId('${pno}')" id="${PstLnkTxtId}" style="padding-top: 0px; margin-top: 0px;">
				 ${pTtl}
			</a>

		  </div>
		 </div>
		</div>
		`;
	
		P00XId1VarHead = "BtnContainer".concat("P", pno, "BtnID");
		P00XId5VarHead = "AnnotDivLn-p".concat(pno, "-ID");
		P00XId6VarHead = "AnnotDivLnPos-P".concat(pno, "-ID");
	
		AnnotBtnGen(P00XId1VarHead, P00XId5VarHead, P00XId6VarHead);
	
		pnavexp = IndxPstImgHd.concat(AnottBtns, IndxPstImgTl);
			
	} else {
	var pnavexp = `

		<div class="responsive" style="margin-bottom: 20px;">
		 <div style="border: 1px solid #808080; border-radius: 3px; position: relative: width: 100%; height: 100%; margin-left: 5px; margin-right: 5px;">
		  <div class="gallery" style="text-align: right;">
			<a href="post.html" onClick="SetPstId('${pno}')">
			  <img src=${PNavImg} class="PImgNav" width="600" height="400">
			</a>
			<p align="left" style="float: left; font-size: 11px; width: 100%; display: inline-block;">${PDte}</p>

			<a class="GlLink" href="post.html" onClick="SetPstId('${pno}')" id="${PstLnkTxtId}" style="padding-top: 0px; margin-top: 0px;">
				 ${pTtl}
			</a>
		  </div>
		 </div>
		</div>
	`;
	}

	var PNavItmX = [];
    PNavItmX[PstN] = pnavexp;
	document.getElementById("GalCnt").insertAdjacentHTML("beforeend", PNavItmX[PstN]);
	
	if (pId.AnnotType == "Annot") {
		SetAnnotations(pId, pno);	
		}
	
	//Loop process
	PstN--;

	if( PstN >= EndPstN ) {	
	  setTimeout( PImgs, 125 );
	}

}


//Send post number to local storage before going to post.html
function SetPstId(PstNoStr) {
  localStorage.setItem("PostId", PstNoStr);
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
		o = "2";
		localStorage.setItem("Lang1", ll);

		HdrFtrTxt(ll);
		MnuCntnt(ll, "glr");
		GalTypeLoader(ll);
		
		if (lssrc == "usr" && IndxMde == "GAL") {	
			IndxNms(ll);
		}

	} else {
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
	
	if (lssrc == "usr" && IndxMde == "LST") {
		LangUpdate(lselstr[1], lselstr[2]);
	}
}




function LangUpdate(L1, L2) {
  
    for (i = StrtPstN; i > (EndPstN - 1); --i) {
		
		
		L1Selected = L1;
		L2Selected = L2;
		
		MUIL1TCont = "MUIL1TContP".concat(PstArr[i]);
		MUIL2TCont = "MUIL2TContP".concat(PstArr[i]);
		//alert(MUIL1TCont);
		//alert(MUIL2TCont);
		//alert(L2);
		pId = window["p".concat(PstArr[i])];
		
		//Word Items
		WIXUpd(L1Selected, L2Selected);

		//Dictionary links
		WIXLinksUpd(L1Selected, L2Selected);

		//Part of speech data
		WIXPOfSpUpd(L1Selected, L2Selected);
    }
}

function GalTypeLoader(L1) {

	//Card Type Text

	document.getElementById("GlCrdTypeTxtId").innerHTML = UItext[L1]["GlCrdTTxt"];
	document.getElementById("IndxMdeTxtId").innerHTML = UItext[L1]["GlMdeTTxt"];
	
	//Highlight selected gallery type　- after text has been inserted
	GlType = localStorage.getItem("GlType")
	GlTypeId = "GlTypeId".concat(GlType);
	
}

function IndxNms(L1) {
//Cycle through all index items and update post titles in selected L1

	//Calculate number of post names to update
	NTmes = StrtPstN - (EndPstN-1);
	//alert("b");
	for (i = EndPstN; i < (StrtPstN + 1); ++i) {
		//Adjust 0 prefix
		if (flprfx == "ALL") {
			if (i < 10) {
				PstLnkTxtId = "00".concat(i);
			} else {
				PstLnkTxtId = "0".concat(i);
			}
		} else {
			PstLnkTxtId = pindex[flprfx][i];
		}

	//Get post title from JS file
	var pId = window["p".concat(PstLnkTxtId)];
	pTtl = pId["0"]["WIt"][L1];
	document.getElementById(PstLnkTxtId).innerHTML = pTtl;

	}

}


