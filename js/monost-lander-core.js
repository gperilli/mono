
LndrPstTtl = 5; //Input by me //Should be 5 or greater in order to fill DSP function
LndrStrtPst = 3; //Input by me
	
LndrPstN = LndrStrtPst;
var LndrPstX = [];
for(var i = 1; i < (LndrPstTtl + 1); ++i) {
	LndrPstX[i] = LndrPstN;
	LndrPstN = LndrPstN + 1;
}

function landerpage() {
	
	//WIx = 0;
	
    //Set L1 in local storage to ENG if non existent
    if (localStorage.getItem("Lang1") === undefined || localStorage.getItem("Lang1") === null) {
		localStorage.setItem("Lang1", "ENG");
	}
	//Set L2 in local storage to JPN if non existent
    if (localStorage.getItem("Lang2") === undefined || localStorage.getItem("Lang2") === null) {
		localStorage.setItem("Lang2", "JPN");
	}
	
	//Prepare Main User Interface Template		
	sitewidetemps();
		
	LanderTemp = `
		<div id="LndrCnt" style="width: 100%; position: relative; z-index: 50;">
		</div>					 
	`;
	
	MonoExplnr = `
		<div id="MnoExplnrCnt">
			<p id="MonoTxtId" style="width: 100%; margin-bottom: 10px; float: left;" align="center">Mono</p>
			<div id="MnoExplnr" style="width: 100%; overflow: hidden; background-color: #fff;">
		
			</div>
		</div>
	`;
	
	ClToActBx = `
		<div style="width: 100%; background-color: #fff; display: inline-block; position: relative; box-sizing: border-box; padding-bottom: 5px; padding-top: 20px;" align="center">
			
			<div id="CTABxDsp" style="width: 50%; position: relative; display: inline-block;" >
				<!-- Blank box gives absolute pos div some height -->	
				<svg viewBox="0 0 1024 768" style="width: 100%; position: relative; z-index: 50;">	
					<rect width="100%" height="100%" fill="transparent" />
				</svg>
			</div>
		</div>	
		
		<!-- Call To Action -->	
		<div style="width: 100%; float: left; display: inline-block; position: relative; padding-top: 20px; padding-bottom: 20px;">
			<div class="CTACnt">		
				<div align="center">
					<a id="CTATxt" href="gallery.html" class="ClTAct">
						See The Gallery
					</a>
				</div>
			</div>
		</div>
	`;
	
	PstImgCltn = `
		<!-- Post Image Collection -->
		<div id="WIImgsCnt" style="width: 100%; float: left; display: inline-block; ">				
		</div>
	`;
	
	PstLnk = `
		<!-- Post Link -->
		<a href="post.html" onclick="SetPstId()" class="pstlnk">
			<span id="PstNme">Post Name</span><span>&#8250;&#8250;</span>
		</a>
	`;
	
	LSelnCTA = `
	<div class="LSelnCTA" id="LSelnCTA">
	
	</div>
	`;
	
	LSlCol = `
		<div class="">
				
			<div class="colL2In">
			 
				<div class="colL2In2" id="LSlctBlk">
					<p id="LSelectTxt" style="width: 100%; float: left; margin-bottom: 10px;" align="center">Language Select</p>
					
					<div style="width: 100%; float: left; position: relative;">
					
						<div style="margin-left: 2%; width: 45%; float: left; margin-right: 5%; padding-bottom: 10px;" align="center">	
							<p style="font-weight: bold; border-bottom: 1px solid #808080; width: 70%; margin-bottom: 10px;" align="center">L1</p>
							<div class="lngbtnscnt"><p id="L1SlENG" class="langbtns" style="width: 40%;" onclick="LSel(1, 'ENG', 'usr')">English</p></div>
							<div class="lngbtnscnt"><p id="L1SlITA" class="langbtns" style="width: 40%;" onclick="LSel(1, 'ITA', 'usr')">italiano</p></div>
							<div class="lngbtnscnt"><p id="L1SlJPN" class="langbtns" style="width: 40%;" onclick="LSel(1, 'JPN', 'usr')">日本語</p></div>
						</div>
							
						<div style="margin-right: 2%; width: 45%; float: right; padding-bottom: 10px;" align="center">
							<p style="font-weight: bold; border-bottom: 1px solid #808080; width: 70%; margin-bottom: 10px;">L2</p>
							<div class="lngbtnscnt"><p id="L2SlENG" class="langbtns" style="width: 40%;" onclick="LSel(2, 'ENG', 'usr')">English</p></div>
							<div class="lngbtnscnt"><p id="L2SlITA" class="langbtns" style="width: 40%;" onclick="LSel(2, 'ITA', 'usr')">italiano</p></div>
							<div class="lngbtnscnt"><p id="L2SlJPN" class="langbtns" style="width: 40%;" onclick="LSel(2, 'JPN', 'usr')">日本語</p></div>
						</div>
						
					</div>
					
				</div>
				
				<div class="colR2In2" style="">
					<div style="display: inline-block; float: left; position: relative; width: 100%;">
					
						<div style="position: relative; width:64%; margin-bottom: 10px; margin-left: 18%; margin-right: 18%; margin-top: 5px; float: left;">
						
							<div style="width: 50px; position: relative; display: inline-block; float: left;">
						
								<div  style="width: 100%; height: 100%; position: absolute; display: inline-block; float: left; z-index: 89;">
									<svg viewBox="0 0 100 100" class="CarPstImgCvrCntX">	
										<rect id="L1ImgCvr" class="LImgCvr transi" />
									</svg>
								</div>
						
								<img id="L1Img" style="width: 100%; position: relative;" class="" src=""/>
								
							</div>
						
							<div style="position: relative: width: 100%; margin-left: 50px; margin-right: 50px;">
								<div id="FlPthLCnt" style="position: relative; display: inline-block; float: left; width: 100%; height: 50px; background-color: #fff" align="center">
									
								</div>
							</div>
		
					  
							<div style="width: 50px; position: relative; display: inline-block; float: right;">
								
								<div  style="width: 100%; height: 100%; position: absolute; display: inline-block; float: left; z-index: 89;">
									<svg viewBox="0 0 100 100" class="CarPstImgCvrCntX">	
										<rect id="L2ImgCvr" class="LImgCvr transi" />
									</svg>
								</div>
								
								<img id="L2Img" style="width: 100%; position: relative;" class="" src=""/>
							</div>
					  
						</div>
				
					</div>
				</div>
							
			</div>	
		</div>
		`;
	
	//Load templates from strings
	document.getElementById("TemplateContainer").insertAdjacentHTML("beforeend", centralcolumnhead);
		document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", HeaderTemp);
		document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", LanderTemp);
			document.getElementById("LndrCnt").insertAdjacentHTML("afterbegin", MonoExplnr);
			document.getElementById("LndrCnt").insertAdjacentHTML("afterbegin", LSelnCTA);
				document.getElementById("LSelnCTA").insertAdjacentHTML("afterbegin", LSlCol);
					document.getElementById("FlPthLCnt").insertAdjacentHTML("beforeend", FlPthL);
				document.getElementById("LSelnCTA").insertAdjacentHTML("afterbegin", ClToActBx);
		document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", AttrTemp);
	document.getElementById("TemplateContainer").insertAdjacentHTML("beforeend", centralcolumntail);

	//Language data
	L1 = localStorage.getItem("Lang1");
	L2 = localStorage.getItem("Lang2");
	
	//Header and footer text
	HdrFtrTxt(L1);
	
	//burger setting
	AccXStat = [];
	AccXStat['x'] = 0;
	document.getElementById("ACCWIx").addEventListener("click", function() {brgrfunc('x');}, false);
	
	//Language Settings
	//Set array data for L1 and L2
	lselstr = {1: L1, 2: L2};
	
	//Delay for L2 to allow for fade in time
	setTimeout(function() { LSel(2, L2) }, 50);
	
	//Load in post scripts. Calculated from initial variables set by me
	LoadInPstScrpts(LndrPstTtl, LndrStrtPst);
	loadincre = 50;
	LdN = 0;
	
	//load in post data to carousel after all post scripts have been appended to HTML file
	setTimeout(CTADspPsts, ((LndrPstTtl*loadincre)));
	setTimeout(MnoExplnr, ((LndrPstTtl*loadincre)));
	setTimeout(function() { LSel(1, L1) }, (LndrPstTtl*loadincre));
	
	//LSel(1, L1);
}




var PstArr = [];
function LoadInPstScrpts(LndrPstTtl, LndrStrtPst) {

	//JS Object data from external scripts
	for(var i = LndrStrtPst; i < (LndrPstTtl + LndrStrtPst); ++i) {
		if (i < 10) {
			pno = "00".concat(i);
		} else {
			pno = "0".concat(i);
		}

		var pnosrc = "p".concat(pno, "/", "p", pno, ".js"); //Eg: p00x/p00x.js
		var scriptX = window.document.createElement("script");
		window.document.body.appendChild(scriptX);
		scriptX.src = pnosrc;
	}
	
	j = 0;
	//load in all available post names to array
	for(var i = LndrStrtPst; i < (LndrPstTtl + LndrStrtPst); ++i) {
		if (i < 10) {
			Dsppno = "00".concat(i);
		} else {
			Dsppno = "0".concat(i);
		}
			
		PstArr[j] = Dsppno;
		j = j + 1;
	}
	
	//Load in Script for P003 for Explainer Visual 1
	if (LndrStrtPst > 3) {
		var pnosrc = "p".concat("003", "/", "p", pno, ".js"); //Eg: p00x/p00x.js
		var scriptX = window.document.createElement("script");
		window.document.body.appendChild(scriptX);
		scriptX.src = pnosrc;
	}
	
}
	

function ExplnrAnnotPnoEx() {
	//Generate random post from those the scripts loaded into the page 
	RndPst = Math.floor(Math.random() * LndrPstTtl);
	ExplnrAnotExpId = window["p".concat(PstArr[RndPst])]; 
	ExplnrAnotExpId.SetPost();
	
	//Determine whether post is "Annot" type
	if (ExplnrAnotExpId.AnnotType == "Annot") {
		Vsl2ImgSrcPno = ExplnrAnotExpId.No;
	} else {
		ExplnrAnnotPnoEx();
	}
}




function MnoExplnr() {
	//Generate Random post for visual 2 and 3
	ExplnrAnnotPnoEx();
	
	var Vsl1ImgSrc = "p".concat("003", "/monop", "003", "-wi0.svg");
	var Vsl2ImgSrc = "p".concat(Vsl2ImgSrcPno, "/monop", Vsl2ImgSrcPno, "-wi0.svg");
	var Vsl3ImgSrc = Vsl2ImgSrc;
	var Vsl3ImgSrcPno = Vsl2ImgSrcPno;
	
	var Vsl1 = `
		
		<div style="position: relative; float: left; width: 100%; display: inline-block; background-color: #fff;">
				
				
				<div style="position: relative; float: left; width: 100%;">
					
					<svg viewBox="0 0 1024 768" style="position: relative; float: left; width: 40%; z-index: 25; border: 0px solid #808080; margin-top: 20px;">	
							<rect width="100%" height="100%" fill="transparent"/>
					</svg>
				
					<div style="position: relative; float: left; width: 40%; margin-top: 20px; margin-right: 0px; z-index: 50; opacity: 0.6;">
						<svg viewBox="0 0 1024 768" style="position: absolute; opacity: 0.5; width: 100%; z-index: 50; border: 0px solid #808080; left: -100%;">	
							<rect width="100%" height="100%" fill="transparent" />
						</svg>
						<img src=${Vsl1ImgSrc} class="Rt04 Shdw" style="border: 1px solid #808080; position: absolute; width: 100%; float: left; left: -100%; margin-right: 10px;">
					</div>
					
					<p id="Vsl1Txt" style="margin-bottom: 10px; margin-left: 3%; float: left; width: 57%; z-index: 80; display: inline-block;">- 15 SVG image sets and counting</p>
					
					
				</div>	
					
		</div>
		
	`;
	
	var Vsl2 = `
		
		<div style="border: 0px solid #808080; position: relative; float: right; width: 100%; display: inline-block; background-color: #fff; margin-top: 15px;">
			
			<div style="position: relative; float: left; width: 100%;">
			
				<svg viewBox="0 0 1024 768" style="position: relative; float: right; width: 40%; z-index: 25; border: 0px solid #808080; margin-top: 20px;">	
					<rect width="100%" height="100%" fill="transparent"/>
				</svg>
				
				<div style="position: relative; float: right; width: 40%; margin-top: 20px; z-index: 50; display: inline-block opacity: 0.7;">
				
					<div style="position: relative; width: 100%; border: 0px solid #808080; float: left; opacity: 0.6;">
						<svg viewBox="0 0 1024 768" style="position: absolute; float: right; width: 100%; z-index: 25; border: 0px solid #808080; left: 40%;">	
								<rect width="100%" height="100%" fill="transparent"/>
						</svg>
						
						
						<div class="Rtn04 Shdw" style="position: absolute; float: right; right: 0%; left: 100%; width: 100%; border: 0px solid #808080;">
							<img class="Shdw" src=${Vsl2ImgSrc} style="position: absolute; width: 100%; float: right; right: 0%; z-index: 50; left: 0%;">
							<svg id="ExplnrVsl2BtnCnt" viewBox="0 0 1024 768" width="100%" style="border: 1px solid #808080; float: right; position: absolute; right: 0%; top: 0%; z-index: 99;">
								<!-- Buttons Loaded here -->
							</svg>
						</div>
						
					</div>
				
				</div>
				
				<p id="Vsl2Txt" style="margin-top: 10px; margin-right: 3%; float: right; border: 0px solid #808080; width: 57%; z-index: 60;" align="right">- simple clickable annotations</p>
				
			</div>
					
		</div>
		
	`;
	
		WItmsExplnr = `
		<div class="WordItemsCnt1" id="ExplnrWItmsCnt1" style="opacity: 0.7;">
			
			<!-- Word Item X -->
			<div class="WordItemsCnt2">
				<div class="WIcolumn left">
					<div style="width: 100%; position: relative; border: 0px solid #808080;">
						<div style="position: relative; width: 100%;">	
							<div style="position: relative; width: 100%;">
								<img id="ExplnrWIImgContX" class="" src=""/>
							</div>		
						</div>
					</div>
					
					<div style="position: relative;">				
						<p id="ExplnrSemTag1WIX" class="SemTags" style="z-index: 10;"></p>
					</div>
					
					<div style="position: relative;">
						<p id="ExplnrSemTag2WIX" class="SemTags" style="z-index: 10;"></p>
					</div>
						
					<div style="position: relative;">
						<p id="ExplnrSemTag3WIX" class="SemTags" style="z-index: 10;"></p>
					</div>	
						
				</div>
				
				<div class="WIcolumn right">
					<div class="L2WICont" style="width: 100%;">
						<div style="float: left; position: relative;">	
							<div style="position: relative;">
								<div style="position: relative;">
									<h3 class="L2WordItem" id="ExplnrL2WordItemX" style="z-index: 50;"></h3>
								</div>
							</div>
							
							<div align="center" style="position: relative;">
								<div style="position: relative;">
									<p id="ExplnrL2WordItemRX" align="center"></p>
								</div>
							</div>	
						</div>
						<br>	
					</div>
				<div>
			
				<div class="ExplnrPOfSpCnt">
					  <p class="L2WordType" id="ExplnrL2POfSp1WIX"></p>
				</div>
				
				<div class="ExplnrPOfSpCnt">
					  <p class="L2WordType" id="ExplnrL2POfSp2WIX"></p>
				</div>

				<div class="ExplnrPOfSpCnt">
					  <p class="L2WordType" id="ExplnrL2POfSp3WIX"></p>
				</div>
						
				<br>
				
				<h5 style="float: left;">
					<div class="PlTriIc baseline">
						<svg viewBox="0 0 300 300">
							<g x="20%" y="15%" id="PlayIcoWIX">
								<path class="AudBtn-PlayTri" style="fill: #bbb; stroke:#ccc;" d="m 95.514374,224.65227 c -0.05649,-49.76848 -0.112973,-99.53696 -0.16946,-149.30544 43.129016,24.83532 86.258026,49.67064 129.387036,74.50596 -43.07252,24.93316 -86.14505,49.86632 -129.217576,74.79948 z"/>
							</g>
						</svg>
					</div>
				</h5>
				
				<br>
			
				<div class="L1WICont" align="right">
					<div style="position: relative; display: inline-block;">
						<p id="ExplnrL1WordItemX"></p>
					</div>
				</div>
				
				<div style="display: inline-block; width: 100%; float: left;">
				  <a id="ExplnrMUILink1ContP00X" class="WIsLink1 dictR" href="" target="_blank"></a>
				  <a id="ExplnrMUILink2ContP00X" class="WIsLink2 dictR" href="" target="_blank"></a>
				  <a id="ExplnrMUILink3ContP00X" class="WIsLink3 dictR" href="" target="_blank"></a>
				  <a id="ExplnrMUILink4ContP00X" class="WIsLink4 dictR" href="" target="_blank"></a>
				  <a id="ExplnrMUILink5ContP00X" class="WIsLink5 dictR" href="" target="_blank"></a>
				  <a id="ExplnrMUILink6ContP00X" class="WIsLink6 dictR" href="" target="_blank"></a>
				</div>
				
			</div>
			
		</div>
	`;
	
	var Vsl3 = `
		
		<div style="border: 0px solid #808080; position: relative; float: left; width: 100%; display: inline-block; background-color: #fff; margin-top: 40px; overflow: hidden; ">
				
				
				<div style="position: relative; float: left; width: 100%; height: 200px; border: 0px solid #808080; overflow: hidden;" align="center">
					
					<div style="position: absolute; float: left; border: 0px solid #808080; width: 80%; top: -35px;" align="center">
						<div id="Vsl3ImgCntId" class="Rt06 Shdw" style="position: relative; float: left; width: 100%; height: 300px; margin-top: 20px; z-index: 50; border: 1px solid #808080;">
							
						</div>
					</div>
					
				</div>	
				
				<p id="Vsl3Txt" style="margin-top: 0px; float: right; border: 0px solid #808080; width: 80%; padding-left: 5px;">- parts of speech, audio playback, dictionary links, and word categories for all word items</p>
					
		</div>
		
	`;
	
	//Insert Visuals HTML
	document.getElementById("MnoExplnr").insertAdjacentHTML("beforeend", Vsl1);
	document.getElementById("MnoExplnr").insertAdjacentHTML("beforeend", Vsl2);
	document.getElementById("MnoExplnr").insertAdjacentHTML("beforeend", Vsl3);
	document.getElementById("Vsl3ImgCntId").insertAdjacentHTML("beforeend", WItmsExplnr);
	
	//Visual 3 - Generate Buttons
	P00XId1VarHead = "ExplnrVsl2BtnContainer".concat("P", Vsl2ImgSrcPno, "BtnID");
	P00XId5VarHead = "ExplnrVsl2AnnotDivLn-p".concat(Vsl2ImgSrcPno, "-ID");
	P00XId6VarHead = "ExplnrVsl2AnnotDivLnPos-P".concat(Vsl2ImgSrcPno, "-ID");
	AnnotBtnGen(P00XId1VarHead, P00XId5VarHead, P00XId6VarHead);
	document.getElementById("ExplnrVsl2BtnCnt").insertAdjacentHTML("beforeend", AnottBtns);
	
	//Visual 3 - Annotation Button Positioning
	ExplnrpId = window["p".concat(Vsl3ImgSrcPno)]; 
	ExplnrpId.SetPost();
	SetAnnotations(Vsl3ImgSrcPno);
	
	l1 = localStorage.getItem("Lang1");
	l2 = localStorage.getItem("Lang2");
	Vsl3WIN = 2;
	
	//Visual 3 - Word Item Data Filler
	//Image file
	document.getElementById("ExplnrWIImgContX").src = ExplnrpId[Vsl3WIN].imgfile;
	//Word Item Text Data
	document.getElementById("ExplnrL2WordItemX").innerHTML = ExplnrpId[Vsl3WIN]["WI"][l2];
	document.getElementById("ExplnrL2WordItemRX").innerHTML = ExplnrpId[Vsl3WIN]["WIr"][l2];
	document.getElementById("ExplnrL1WordItemX").innerHTML = ExplnrpId[Vsl3WIN]["WI"][l1];
	//Part of Speech Data
	document.getElementById("ExplnrL2POfSp1WIX").innerHTML = ExplnrpId[Vsl3WIN]["PoSp1"][l1][l2];
	document.getElementById("ExplnrL2POfSp2WIX").innerHTML = ExplnrpId[Vsl3WIN]["PoSp2"][l1][l2];
	document.getElementById("ExplnrL2POfSp3WIX").innerHTML = ExplnrpId[Vsl3WIN]["PoSp3"][l1][l2];
	//Sem Tags Data
	document.getElementById("ExplnrSemTag1WIX").style.display = ExplnrpId[Vsl3WIN]["semtag1"]["Dsp"];
	document.getElementById("ExplnrSemTag1WIX").className = "SemTags tag_".concat(ExplnrpId[Vsl3WIN]["semtag1"]["ENG"]);
	document.getElementById("ExplnrSemTag1WIX").innerHTML = ExplnrpId[Vsl3WIN]["semtag1"][l1];
	document.getElementById("ExplnrSemTag2WIX").style.display = ExplnrpId[Vsl3WIN]["semtag2"]["Dsp"];
	document.getElementById("ExplnrSemTag2WIX").className = "SemTags tag_".concat(ExplnrpId[Vsl3WIN]["semtag2"]["ENG"]);
	document.getElementById("ExplnrSemTag2WIX").innerHTML = ExplnrpId[Vsl3WIN]["semtag2"][l1];
	document.getElementById("ExplnrSemTag3WIX").style.display = ExplnrpId[Vsl3WIN]["semtag3"]["Dsp"];
	document.getElementById("ExplnrSemTag3WIX").className = "SemTags tag_".concat(ExplnrpId[Vsl3WIN]["semtag3"]["ENG"]);
	document.getElementById("ExplnrSemTag3WIX").innerHTML = ExplnrpId[Vsl3WIN]["semtag3"][l1];
	//Dict Link Data
	document.getElementById("ExplnrMUILink1ContP00X").style.display = linkdata[l1][l2].WIxLink1Dsp;
	document.getElementById("ExplnrMUILink1ContP00X").innerHTML = linkdata[l1][l2].WIxLink1Label;
	document.getElementById("ExplnrMUILink2ContP00X").style.display = linkdata[l1][l2].WIxLink2Dsp;
	document.getElementById("ExplnrMUILink2ContP00X").innerHTML = linkdata[l1][l2].WIxLink2Label;
	document.getElementById("ExplnrMUILink3ContP00X").style.display = linkdata[l1][l2].WIxLink3Dsp;
	document.getElementById("ExplnrMUILink3ContP00X").innerHTML = linkdata[l1][l2].WIxLink3Label;
	document.getElementById("ExplnrMUILink4ContP00X").style.display = linkdata[l1][l2].WIxLink4Dsp;
	document.getElementById("ExplnrMUILink4ContP00X").innerHTML = linkdata[l1][l2].WIxLink4Label;
	document.getElementById("ExplnrMUILink5ContP00X").style.display = linkdata[l1][l2].WIxLink5Dsp;
	document.getElementById("ExplnrMUILink5ContP00X").innerHTML = linkdata[l1][l2].WIxLink5Label;
	document.getElementById("ExplnrMUILink6ContP00X").style.display = linkdata[l1][l2].WIxLink6Dsp;
	document.getElementById("ExplnrMUILink6ContP00X").innerHTML = linkdata[l1][l2].WIxLink6Label;
	
}





function RndPstArrGen() {
	RndPst = Math.floor(Math.random() * LndrPstTtl);
	
	//Generates 5 random post numbers in array
	if (PstArr[RndPst] != RndPstArr[0] && PstArr[RndPst] != RndPstArr[1] && PstArr[RndPst] != RndPstArr[2] && PstArr[RndPst] != RndPstArr[3] && PstArr[RndPst] != RndPstArr[4]) {
		RndPstArr[LdN] = PstArr[RndPst];
	} else {
		RndPstArrGen();
	}
	
}

var PstN = 0;
var DspGrZi = 10;
var RndPstArr = [0, 0, 0, 0, 0];
function CTADspPsts(j) {
	
	RndPstArrGen();
	
	DsppId = window["p".concat(RndPstArr[LdN])]; 
	DsppId.SetPost(); //Load in repetetive object values
	Dsppno = DsppId.No;
	
	var DspPstImgSrcX = "p".concat(RndPstArr[LdN], "/monop", RndPstArr[LdN], "-wi0.svg");
	
	if (DsppId["0"]["imgbckg"] == "blk") {
		PImgNvBck = "black";
	} else {
		PImgNvBck = "white";
	}
	
	//
	CTADspItmBlkX = "CTADspItmBlk".concat(LdN);
	
	//DspPstBtnBxpX = "DspPstBtnBxp".concat(PstArr[PstN]);
	DspImgBlkX = "DspImgBlk".concat(PstArr[RndPst]);
	DspGrZi = DspGrZi + 10;
	
	if (LdN == 4) {
		CrdAgleCls = "";
	} 
	
	var CTADspPrt1 = `
		<div style="position: absolute; width: 100%; top: 0%; z-index: ${DspGrZi};" id="${CTADspItmBlkX}" class="CTADspItmHde">
			<div style="background-color: ${PImgNvBck}; border: 1px solid #ccc; line-height:0;">
				<div style="position: relative; width: 100%;" id=${DspImgBlkX}>
				
					<div style="position: relative; width: 100%;">
						<img src=${DspPstImgSrcX}>
	`;
	
	if (DsppId.AnnotType == "Annot") {
		var CTAPstImgHd = `
			<svg viewBox="0 0 1024 768" width="100%" style="float: left; position: absolute; left: 0%; top: 0%;">
				<!-- Buttons Loaded here -->
		`;
		
		P00XId1VarHead = "BtnContainer".concat("P", Dsppno, "BtnID");
		P00XId5VarHead = "AnnotDivLn-p".concat(Dsppno, "-ID");
		P00XId6VarHead = "AnnotDivLnPos-P".concat(Dsppno, "-ID");
	
		AnnotBtnGen(P00XId1VarHead, P00XId5VarHead, P00XId6VarHead);
		
		var CTAPstImgTl = `
			  </svg>
		`;
		
		CTADspPrt2 = CTAPstImgHd.concat(AnottBtns, CTAPstImgTl);
		
	} else {
		var CTADspPrt2 = `
		`;
	}
	
	var CTADspPrt3 = `
					</div>
				</div>
			</div>
		</div>
	`;
	

	CTADspItmX = CTADspPrt1.concat(CTADspPrt2, CTADspPrt3);

	document.getElementById("CTABxDsp").insertAdjacentHTML("beforeend", CTADspItmX);
	
	//Annotation Button Positioning
	if (DsppId.AnnotType == "Annot") {
		SetAnnotations(Dsppno);
	}
	
	//Loop process
	LdN++;
	PstN = PstN + 1;
	if( LdN <= 4 ) {
		CTADspPsts();
	} else {

		ItmN = 0;
		CTAItmDsp();
	}
		
}

function CTAItmDsp() {
	
	RndAngle = Math.floor(Math.random() * 8);
	CrdDspAgle = {0: "Rt03", 1: "Rtn03", 2: "Rt04", 3: "Rtn04", 4: "Rt05", 5: "Rtn05", 6: "Rt06", 7: "Rtn06", 8: ""};	
	CrdAgleCls = CrdDspAgle[RndAngle];
	
	CTADspItmBlkX = "CTADspItmBlk".concat(ItmN);
	document.getElementById(CTADspItmBlkX).className = "CTADspItmShw ".concat(CrdAgleCls, " Shdw");
	
	ItmN++;
	//PstN = PstN + 1;
	if( ItmN <= 4 ) {
		setTimeout(CTAItmDsp, 400 );
	} else {
		//ItmN = 4;
		//setTimeout(CTAItmHde, 10000 );
	}
}

function CTAItmHde() {
	
	CTADspItmBlkX = "CTADspItmBlk".concat(ItmN);
	document.getElementById(CTADspItmBlkX).className = "CTADspItmHde";
	
	ItmN--;
	if( ItmN >= 0 ) {
		setTimeout(CTAItmHde, 400 );
	} else {
		ItmN = 0;
		setTimeout(CTAItmDsp, 400 );
	}
	
}





function revealer(LXImgCvr) {
	document.getElementById(LXImgCvr).classList.add("transi");
}


function LSel(ln, ll, lssrc) {
	
	//Language Select
	//Variables Update
	BrgrLDspId = "BrgrLDspL".concat(ln);
	lconv = {ENG: "English", ITA: "Italiano", JPN: "日本語"};
	LNSlId = "L".concat(ln, "Sl", ll);
	BrgrLNSlId = "BrgrL".concat(ln, "Sl", ll);
	
	//Lang Country Images
	LSlImgId = "L".concat(ln, "Img");
	LXImgCvr = "L".concat(ln,"ImgCvr");
	
	//Remove opacity 0
	document.getElementById(LXImgCvr).classList.remove("transi");
	document.getElementById(LSlImgId).src = "graphics/mp-".concat(ll, ".svg");
	setTimeout(function() { revealer(LXImgCvr) }, 50);
	
	
	
	// Dehighlight everything
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
	document.getElementById(BrgrLNSlId).className += " lbtnhlghtd";

	//store selected language
	lselstr[ln] = ll;
	
	//highlight other language previously selected
	if (ln == 1) {
		o = "2";
		localStorage.setItem("Lang1", ll);
		
		HdrFtrTxt(ll);
		MnuCntnt(ll, "lndr");
	} else {
		o = "1";
		localStorage.setItem("Lang2", ll);
	}

	llo = lselstr[o];

	LNSlId = "L".concat(o, "Sl", llo);
	document.getElementById(LNSlId).className += " lbtnhlghtd";

	BrgrLNSlId = "BrgrL".concat(o, "Sl", llo);
	document.getElementById(BrgrLNSlId).className += " lbtnhlghtd";
	
	if (lssrc == "usr") {
		LangUpdate(lselstr[1], lselstr[2]);
	}
	
}

function SetPstId() {
	PstNoStr = pno;
	localStorage.setItem("PostId", PstNoStr);
}


var FlPthL = `
<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 318 159" style="height: 100%; width: 100%;">

<path class="MpPathL" id="" d="m 3.8776716,46.586191 c -0.4035891,-1.00867 -0.7337991,-2.02784 -0.7337991,-2.26481 0,-0.40239 8.2152225,-3.2001 9.3967925,-3.2001 0.295676,0 0.675114,0.73306 0.843197,1.62902 0.168084,0.89596 0.410368,1.90202 0.538409,2.23569 0.165172,0.43043 -1.089147,1.01738 -4.3177004,2.02041 -2.502776,0.77755 -4.650086,1.41373 -4.771801,1.41373 -0.121714,0 -0.551509,-0.82527 -0.955098,-1.83394 0,0 0,0 0,0" />
    
<path class="MpPathL" id="" d="m 19.389817,43.345111 c -0.122349,-0.59586 -0.33781,-1.63163 -0.47879,-2.30171 -0.22055,-1.0483 -0.0813,-1.2554 0.99778,-1.48397 2.02818,-0.42959 9.721549,-1.15875 12.316421,-1.16731 0,0 2.39494,-0.008 2.39494,-0.008 0,0 0,2.43965 0,2.43965 0,0 0,2.43965 0,2.43965 0,0 -5.588181,0.29454 -5.588181,0.29454 -3.0735,0.162 -6.45028,0.42412 -7.50395,0.58249 -1.75549,0.26386 -1.93437,0.19731 -2.13822,-0.79544 0,0 0,1e-5 0,1e-5" />

<path class="MpPathL" d="m 51.954938,45.201351 c -0.878139,-0.21358 -3.23886,-0.61223 -5.24605,-0.88589 -7.33194,-0.99962 -6.614581,-0.65097 -6.614581,-3.21485 0,0 0,-2.26022 0,-2.26022 0,0 1.599621,0 1.599621,0 1.921499,0 10.283589,1.22209 12.59033,1.84003 0,0 1.645039,0.44069 1.645039,0.44069 0,0 -0.450998,2.28098 -0.450998,2.28098 -0.484662,2.45114 -0.6003,2.51019 -3.523361,1.79926 0,0 0,0 0,0" />
    
<path class="MpPathL" d="m 71.818177,51.155131 c -0.99287,-0.46232 -3.918109,-1.52087 -6.50053,-2.35234 -3.391209,-1.09187 -4.695319,-1.71616 -4.695319,-2.24767 0,-0.62931 0.853789,-3.58423 1.14554,-3.96466 0.0538,-0.0701 3.051159,0.92166 6.660901,2.20391 3.60974,1.28224 6.90317,2.43622 7.31873,2.5644 0.688739,0.21245 0.673279,0.43107 -0.174861,2.47192 -0.511741,1.23138 -1.159661,2.22225 -1.439831,2.20194 -0.28018,-0.0203 -1.32176,-0.41518 -2.31463,-0.8775 0,0 0,0 0,0" />

<path class="MpPathL" d="m 86.624477,57.840701 c -3.638018,-1.79419 -6.680218,-3.29359 -6.760448,-3.332 -0.129162,-0.0618 1.646338,-3.79964 1.989828,-4.18901 0.18782,-0.21292 7.57097,3.27633 11.05313,5.22367 0,0 2.875841,1.60826 2.875841,1.60826 0,0 -1.00275,1.67862 -1.00275,1.67862 -0.551521,0.92324 -1.12386,1.81227 -1.271881,1.97562 -0.148029,0.16335 -3.245699,-1.17097 -6.88372,-2.96516 0,0 0,0 0,0" />

<path class="MpPathL" d="m 105.09969,68.029191 c -3.26168,-1.9889 -6.116671,-3.6843 -6.344443,-3.76755 -0.227769,-0.0832 0.144431,-1.10448 0.827122,-2.26941 0,0 1.241251,-2.11804 1.241251,-2.11804 0,0 3.27849,1.93908 3.27849,1.93908 8.37053,4.95082 9.89306,5.88275 9.89306,6.05549 0,0.45354 -2.32708,3.8144 -2.62875,3.79654 -0.18502,-0.0109 -3.00505,-1.6472 -6.26673,-3.63611 0,0 0,0 0,0" />
    
<path class="MpPathL" d="m 123.12303,79.375001 c -3.38475,-2.20802 -6.21934,-4.21027 -6.29906,-4.44944 -0.1839,-0.55168 1.82436,-3.68333 2.36687,-3.69087 0.31608,-0.004 11.77943,7.32306 12.54391,8.01816 0.0972,0.0884 -0.41601,1.05529 -1.14045,2.1487 0,0 -1.31716,1.98802 -1.31716,1.98802 0,0 -6.15411,-4.01457 -6.15411,-4.01457" />

<path class="MpPathL" d="m 140.34288,90.766141 c 0,0 -6.26902,-4.12597 -6.26902,-4.12597 0,0 0.71454,-1.20502 0.71454,-1.20502 1.95202,-3.29201 1.32676,-3.38889 8.39813,1.30127 6.09786,4.04446 6.37445,4.29338 5.78281,5.20435 -0.34175,0.5262 -0.9074,1.41861 -1.25699,1.98313 -0.3496,0.56452 -0.74022,1.01331 -0.86804,0.99731 -0.12782,-0.016 -3.05345,-1.88578 -6.50143,-4.15507 0,0 0,0 0,0" />

<path class="MpPathL" d="m 158.24446,102.41475 c -3.38713,-2.15693 -6.23793,-3.994319 -6.33513,-4.083089 -0.0972,-0.0888 0.416,-1.06 1.14044,-2.1583 0,0 1.31717,-1.99691 1.31717,-1.99691 0,0 6.46892,4.13273 6.46892,4.13273 0,0 6.46892,4.132729 6.46892,4.132729 0,0 -1.09614,1.83815 -1.09614,1.83815 -0.60288,1.01098 -1.25581,1.88725 -1.45095,1.94726 -0.19516,0.06 -3.12612,-1.65564 -6.51323,-3.81257 0,0 0,0 0,0" />

<path class="MpPathL" d="m 177.10007,113.97764 c -8.10525,-4.80364 -7.61332,-4.27809 -6.15029,-6.57054 0,0 1.22075,-1.91282 1.22075,-1.91282 0,0 6.15209,3.62106 6.15209,3.62106 3.38364,1.99158 6.35735,3.69715 6.60826,3.79016 0.46053,0.17073 -1.47909,4.41339 -2.00215,4.37944 -0.15331,-0.01 -2.77621,-1.49824 -5.82866,-3.3073 0,0 0,0 0,0" />

<path class="MpPathL" d="m 194.97096,123.72434 c -3.43475,-1.73713 -6.33848,-3.25191 -6.45274,-3.36616 -0.11426,-0.11427 0.24561,-1.1409 0.7997,-2.2814 0,0 1.00746,-2.07364 1.00746,-2.07364 0,0 6.8002,3.40578 6.8002,3.40578 3.74012,1.87317 6.73357,3.55129 6.65214,3.72915 -0.0814,0.17785 -0.4449,1.09317 -0.80767,2.03404 -0.36279,0.94086 -0.90586,1.71066 -1.20685,1.71066 -0.30098,0 -3.35748,-1.42129 -6.79224,-3.15843 0,0 0,0 0,0" />

<path class="MpPathL" d="m 220.28469,134.77263 c -3.46498,-1.26254 -12.16524,-4.8334 -12.44689,-5.10859 -0.19699,-0.19248 0.0418,-1.2831 0.53071,-2.42361 0,0 0.88887,-2.07366 0.88887,-2.07366 0,0 6.99624,2.7849 6.99624,2.7849 3.84792,1.53168 7.04963,2.80941 7.11489,2.83939 0.0653,0.03 -0.23561,1.01041 -0.66863,2.17872 -0.77462,2.09004 -1.05421,2.29875 -2.41519,1.80285 0,0 0,0 0,0" />

<path class="MpPathL" d="m 239.90035,140.70191 c -6.09049,-1.50961 -12.31682,-3.48286 -12.31682,-3.90345 0,-0.92924 1.06761,-3.98537 1.39222,-3.98537 0.33934,0 14.27155,3.69588 14.43365,3.8289 0.0482,0.0396 -0.15704,1.10919 -0.45619,2.37689 0,0 -0.54389,2.30491 -0.54389,2.30491 0,0 -2.50897,-0.62188 -2.50897,-0.62188" />
    
<path class="MpPathL" d="m 258.14748,143.9026 c -2.88534,-0.32335 -6.32402,-0.80994 -7.64154,-1.0813 -2.2748,-0.46852 -2.38252,-0.55494 -2.13823,-1.7154 0.14151,-0.67213 0.35712,-1.70855 0.47915,-2.30317 0.19829,-0.96608 0.40154,-1.05275 1.91015,-0.81454 0.92853,0.14662 4.25423,0.5989 7.39043,1.00507 3.13622,0.40617 5.78317,0.81946 5.88213,0.91841 0.099,0.099 -0.004,1.16967 -0.22806,2.37938 0,0 -0.40799,2.19946 -0.40799,2.19946 0,0 -5.24604,-0.58791 -5.24604,-0.58791" />

<path class="MpPathL" d="m 270.80641,144.80316 c -1.17335,-0.17774 -1.2545,-0.33563 -1.2545,-2.44063 0,0 0,-2.25059 0,-2.25059 0,0 6.32947,0 6.32947,0 3.48123,0 6.97098,-0.1283 7.75504,-0.28511 0,0 1.42555,-0.28511 1.42555,-0.28511 0,0 0,2.49668 0,2.49668 0,0 0,2.49668 0,2.49668 0,0 -4.86082,0.29741 -4.86082,0.29741 -5.0098,0.30652 -7.22331,0.29961 -9.39474,-0.0293 0,0 0,0 0,0" />
       
<path class="MpPathL" d="m 300.51525,153.06195 c 0.0348,-0.11393 0.63782,-2.0826 1.34012,-4.37484 0,0 1.2769,-4.16771 1.2769,-4.16771 0,0 0.11437,-1.87948 0.11437,-1.87948 0.0629,-1.03372 0.10113,-1.88858 0.0849,-1.89969 -0.0162,-0.0111 -1.44783,0.25714 -3.18141,0.59613 0,0 -3.15196,0.61634 -3.15196,0.61634 0,0 -1.52925,-0.0441 -1.52925,-0.0441 -0.84109,-0.0243 -1.56019,-0.0392 -1.598,-0.0331 -0.0532,0.009 -0.29085,0.47763 -1.05028,2.07293 -0.53984,1.13401 -1.00785,2.10241 -1.04003,2.152 -0.0434,0.067 -0.20837,0.12054 -0.6411,0.20822 0,0 -0.58261,0.11805 -0.58261,0.11805 0,0 0.003,-0.55268 0.003,-0.55268 0.002,-0.30398 0.009,-1.30499 0.0167,-2.22448 0,0 0.0134,-1.67179 0.0134,-1.67179 0,0 -0.88243,-2.02693 -0.88243,-2.02693 -0.48533,-1.11481 -0.87754,-2.04516 -0.87157,-2.06743 0.006,-0.0223 0.26846,-0.0903 0.5833,-0.15122 0,0 0.57244,-0.11071 0.57244,-0.11071 0,0 1.79287,1.58244 1.79287,1.58244 0.98607,0.87035 1.81103,1.57857 1.83323,1.57383 0.0222,-0.005 0.67904,-0.30256 1.45964,-0.66182 0,0 1.41927,-0.6532 1.41927,-0.6532 0,0 3.14411,-0.67682 3.14411,-0.67682 1.72925,-0.37225 3.14985,-0.68581 3.15688,-0.69679 0.007,-0.011 -0.36789,-0.78099 -0.83316,-1.71112 0,0 -0.84595,-1.69116 -0.84595,-1.69116 0,0 -2.93467,-3.48164 -2.93467,-3.48164 -1.61407,-1.9149 -2.93618,-3.48832 -2.93801,-3.4965 -0.002,-0.008 0.33311,-0.0102 0.74433,-0.004 0,0 0.74767,0.0104 0.74767,0.0104 0,0 1.90851,1.48132 1.90851,1.48132 0,0 1.90852,1.48131 1.90852,1.48131 0,0 0.83078,-0.16919 0.83078,-0.16919 0,0 0.83078,-0.16919 0.83078,-0.16919 0,0 0.0872,0.43351 0.0872,0.43351 0,0 0.0872,0.43351 0.0872,0.43351 0,0 -0.47034,0.0783 -0.47034,0.0783 -0.42977,0.0716 -0.4641,0.0847 -0.39807,0.152 0.0398,0.0405 0.72839,0.59118 1.53031,1.22369 0,0 1.45805,1.15001 1.45805,1.15001 0,0 0.95377,-0.19444 0.95377,-0.19444 0,0 0.95378,-0.19445 0.95378,-0.19445 0,0 0.0935,0.45729 0.0935,0.45729 0,0 0.0935,0.45728 0.0935,0.45728 0,0 -0.54438,0.11255 -0.54438,0.11255 -0.29941,0.0619 -0.54162,0.12401 -0.53825,0.138 0.003,0.014 0.655,0.55856 1.44807,1.21013 0,0 1.44195,1.18468 1.44195,1.18468 0,0 1.51436,-0.31881 1.51436,-0.31881 3.91241,-0.82366 5.72128,-0.89582 7.33471,-0.29259 0,0 0.253,0.0946 0.253,0.0946 0,0 -0.10519,0.1168 -0.10519,0.1168 -0.36746,0.40799 -1.11786,0.89099 -1.91916,1.23525 -1.10658,0.47543 -1.76622,0.65545 -4.43091,1.2092 0,0 -2.13042,0.44272 -2.13042,0.44272 0,0 -0.79256,1.56429 -0.79256,1.56429 -0.43591,0.86035 -0.82386,1.63194 -0.86212,1.71463 0,0 -0.0696,0.15036 -0.0696,0.15036 0,0 0.5522,-0.11178 0.5522,-0.11178 0,0 0.5522,-0.11177 0.5522,-0.11177 0,0 0.098,0.47175 0.098,0.47175 0,0 0.098,0.47175 0.098,0.47175 0,0 -0.95815,0.19671 -0.95815,0.19671 0,0 -0.95815,0.19671 -0.95815,0.19671 0,0 -0.56196,1.02462 -0.56196,1.02462 -0.30909,0.56354 -0.73496,1.34312 -0.94638,1.73241 0,0 -0.38441,0.7078 -0.38441,0.7078 0,0 0.49119,-0.0992 0.49119,-0.0992 0,0 0.49118,-0.0992 0.49118,-0.0992 0,0 0.086,0.41248 0.086,0.41248 0,0 0.086,0.41247 0.086,0.41247 0,0 -0.83625,0.17187 -0.83625,0.17187 0,0 -0.83625,0.17186 -0.83625,0.17186 0,0 -1.17499,2.11014 -1.17499,2.11014 0,0 -1.17498,2.11014 -1.17498,2.11014 0,0 -0.59854,0.26517 -0.59854,0.26517 -0.3292,0.14585 -0.63894,0.28148 -0.6883,0.30139 -0.0814,0.0328 -0.0839,0.017 -0.0265,-0.17091 0,0 0,0 0,0" />

</svg>
`;
