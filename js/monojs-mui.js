CrntBtnP00X = [];


//this needs to be filled for the number if posts on the page
PlyAllKll = 0;
PlyAllAudKll = 0;

function MUITempPrp(pno) {

BtnIdHead = "P".concat(pno, "BtnImgId");
MUIL1TCont = "MUIL1TContP".concat(pno);
MUIL2TCont = "MUIL2TContP".concat(pno);

P00XMUIImgCont = "P".concat(pno, "MUIImgCont");
P00XMUIBtnsCont = "P".concat(pno, "MUIBtnsCont");
P00XBtnImgId0T = "P".concat(pno, "BtnImgId0T");

// MUI Btn1-8 Temp Placeholder Heads
P00XId1VarHead = "BtnContainer".concat("P", pno, "BtnID");
P00XId24VarHead = "P".concat(pno, "BtnImgId");
P00XId3VarHead = "P".concat(pno, "DigitPath");
P00XId5VarHead = "AnnotDivLn-p".concat(pno, "-ID");
P00XId6VarHead = "AnnotDivLnPos-P".concat(pno, "-ID");

// MUI Text Box Temp Placeholders
MUITContP00X = "MUITContP".concat(pno);

MUIL2TContP00X = "MUIL2TContP".concat(pno);
P00XL2POfSp1WIx = "P".concat(pno, "L2POfSp1WIx");
P00XL2POfSp2WIx = "P".concat(pno, "L2POfSp2WIx");
P00XL2POfSp3WIx = "P".concat(pno, "L2POfSp3WIx");

P00XEx0PlayIcoWIx = "P".concat(pno, "Ex0PlayIcoWIx");
P00XEx0PauseIcoWIx = "P".concat(pno, "Ex0PauseIcoWIx");

MUIL1TContP00X = "MUIL1TContP".concat(pno);
MUILink1ContP00X = "MUILink1ContP".concat(pno);
MUILink2ContP00X = "MUILink2ContP".concat(pno);
MUILink3ContP00X = "MUILink3ContP".concat(pno);
MUILink4ContP00X = "MUILink4ContP".concat(pno);
MUILink5ContP00X = "MUILink5ContP".concat(pno);
MUILink6ContP00X = "MUILink6ContP".concat(pno);

AutAudDSl1P00X = "AutAudDSl1P".concat(pno);
AutAudDSl2P00X = "AutAudDSl2P".concat(pno);

PlyAllIcoOnP00X = "PlyAllIcoOnP".concat(pno);
PlyAllIcoOffP00X = "PlyAllIcoOffP".concat(pno);

CrntPlyAllPno = pno;
}


function MUITempSet(pno, type) {

AudBtnTemp = `
<svg id="AudBtnPos" x="1%" y="86%">

<svg class="AAbutton" width="9%" height="12%" onClick="AutAudSet('${pno}', 1)">
  
	<rect class="AAbuttonR"  x="0" y="0" height="100%" width="100%" rx="10" ry="10" style="fill: #ccc; opacity: 0.5;"/>

    <svg x="0%" y="0%" width="100%" height="100%" viewBox="0 0 120 120" style="">
     
	<path
	   style="fill:blue;"
       d="M52.546307 96.563052C50.574302 94.844602 45.153635 89.605852 40.500381 84.921382C40.500381 84.921382 32.039916 76.404164 32.039916 76.404164C32.039916 76.404164 22.733247 76.404164 22.733247 76.404164C10.032796 76.404164 11.125427 77.955252 11.125427 59.925843C11.125427 42.0607 10.031272 43.595831 22.764529 43.595831C22.764529 43.595831 31.954168 43.595831 31.954168 43.595831C31.954168 43.595831 42.838755 32.836325 42.838755 32.836325C48.825279 26.918594 54.379592 21.651537 55.181676 21.131753C56.42993 20.322827 56.869207 20.281627 58.231113 20.845747C59.193979 21.244579 59.97627 22.052941 60.212366 22.893028C60.71812 24.692615 60.72379 95.288012 60.218366 97.083232C59.876336 98.297992 57.957761 99.687493 56.622491 99.687493C56.352616 99.687493 54.518352 98.281492 52.546349 96.563052C52.546349 96.563052 52.546307 96.563052 52.546307 96.563052" />
	   
    <path id=${AutAudDSl1P00X} style="fill:blue;" d="" />
	   
    <path id=${AutAudDSl2P00X} style="fill:blue;" d="" />

    </svg>

</svg>

</svg>
`;



var MUIHeadTemp = `
<div class="column" style="z-index: 99; background-color: #fff;">
  <div class="img-overlay-wrap">
  <img id=${P00XMUIImgCont} src="" class="wht" width="100%")">
    <svg viewBox="0 0 1024 768" width="100%">
      <!-- Buttons Loaded here -->
`;

AnnotBtnGen(P00XId1VarHead, P00XId5VarHead, P00XId6VarHead);

for(var i = 1; i < 9; ++i) {

var BtnContainerP00XBtnIDX = P00XId1VarHead.concat(i);
var P00XBtnImgIdXT = P00XId24VarHead.concat(i, "T");
var P00XDigitPathX = P00XId3VarHead.concat(i);
var P00XBtnImgIdXB = P00XId24VarHead.concat(i, "B");
var AnnotDivLnP00XIDX = P00XId5VarHead.concat(i);
var AnnotDivLnPosP00XIDX = P00XId6VarHead.concat(i);

var BtnTemp = `
<svg id=${AnnotDivLnP00XIDX} x="0%" y="76%">
<svg width="18%" height="24%">
  <rect class="box"/>
</svg>

<svg width="18%" height="24%">
  <g transform="scale(1, 1)">
    <svg>
      <line class="line" id=${AnnotDivLnPosP00XIDX} x1="25%" y1="75%" x2="75%" y2="25%"/>
      Sorry, your browser does not support inline SVG.
    </svg>
  </g>
</svg>

<svg class="AnBtn" id=${BtnContainerP00XBtnIDX} x="0%" y="12%" width="9%" height="12%">
  <g transform="scale(1, 1)">
  
    <svg id=${P00XBtnImgIdXB} class="btnCoff" onClick="MUIUpdP00X('${pno}', ${i}, 'BtnClk')">
		<circle class="" cx="50%" cy="50%" r="40%"/>
		Sorry, your browser does not support inline SVG.
    </svg>
	
	<svg class="btnToff" id=${P00XBtnImgIdXT} onClick="MUIUpdP00X('${pno}', ${i}, 'BtnClk')">
		<g>
			<circle cx="51%" cy="50%" r="20%"/>
			Sorry, your browser does not support inline SVG.
		</g>
	</svg>
	
  </g>
</svg>

</svg>
`;

BtnTempX = "BtnTemp".concat(i);
window[BtnTempX] = BtnTemp;

}



var PlyAlBtnTemp = `
<svg id="AudBtnPos" x="11%" y="86%">

  <svg class="AAbutton" width="9%" height="12%" onClick="PlyAllAud('${pno}')">
	<rect class="AAbuttonR"  x="0" y="0" height="100%" width="100%" rx="10" ry="10" style="fill: #ccc; opacity: 0.5;"/>
    <svg id=${PlyAllIcoOffP00X} x="20%" y="15%" width="100%" height="100%" viewBox="0 0 300 300" style="">
		<path style="fill:blue;" d="m 35.514374,174.65227 -0.08473,-74.652722 -0.08473,-74.652718 64.693518,37.252981 64.69352,37.25298 -64.60879,37.399739 z" />
	</svg>
	
	<g id=${PlyAllIcoOnP00X} style="display: none;">
		<rect x="20%" y="25%" width="20%" height="50%" style="fill:blue;" />
		<rect x="55%" y="25%" width="20%" height="50%" style="fill:blue;" />
	</g>
  </svg>

</svg>
`;


var MUITailTemp = `
</svg>

</div>
</div>
`;

var MUITBoxTemp = `
<div id=${MUITContP00X} class="column" style="background-color: #fff; z-index: 99;">
  <div>
    
  </div>
  <h3 id=${MUIL2TContP00X}>-</h3>
  <br>
  <div class="L2WTCont">
     <p class="L2WordType L2WT1" id=${P00XL2POfSp1WIx}></p>
  </div>
  <div class="L2WTCont">
     <p class="L2WordType L2WT2" id=${P00XL2POfSp2WIx}></p>
  </div>
  <div class="L2WTCont">
     <p class="L2WordType L2WT3" id=${P00XL2POfSp3WIx}></p>
  </div>
  <br>
  <h5>
	<div class="icon baseline" onClick="AudioCntrl('${pno}', 'x', 0, 'IAudClk')">
		<svg class="Container" viewBox="0 0 300 300">
			<g x="20%" y="15%" id=${P00XEx0PlayIcoWIx}>
				<path class="AudBtn-PlayTri"/>
			</g>
			<g transform="translate(50, 45)" id=${P00XEx0PauseIcoWIx} class="AudBtn-PauseBrs">
				<rect class="AudBtn-PauseRectL" />
				<rect class="AudBtn-PauseRectR" />
			</g>
		</svg>
	</div>
</h5>
  <br>
  <div align=right style="width: 100%;">
    
  </div>
  <h4 align=right id=${MUIL1TContP00X}></h4>
  <br>
</div>

<div style="display: inline-block; width: 100%; float: right;">
  <a id=${MUILink1ContP00X} class="WIsLink1 dictR" href="" target="_blank"></a>
  <a id=${MUILink2ContP00X} class="WIsLink2 dictR" href="" target="_blank"></a>
  <a id=${MUILink3ContP00X} class="WIsLink3 dictR" href="" target="_blank"></a>
  <a id=${MUILink4ContP00X} class="WIsLink4 dictR" href="" target="_blank"></a>
  <a id=${MUILink5ContP00X} class="WIsLink5 dictR" href="" target="_blank"></a>
  <a id=${MUILink6ContP00X} class="WIsLink6 dictR" href="" target="_blank"></a>
</div>
`;



if (type == "HLight") {
	
	//Highlighted annotations will load in the inline svg data held in ImgBtnTemp variable
	MUIXtemp = MUIHeadTemp.concat(pId.ImgBtnTemp, AudBtnTemp, PlyAlBtnTemp, MUITailTemp, MUITBoxTemp);
	
	} else {
	//Numbered Annotations will sload in transparent box and 8 buttons
	var Btn0bTemp = `		
	<rect width="1024" height="768" fill="transparent" id=${P00XBtnImgId0T} onClick="MUIUpdP00X('${pno}', 0, 'BtnClk')" onmouseover="BckImgHver('${P00XMUIImgCont}', '${pno}')" onmouseout="BckImgOut('${P00XMUIImgCont}', '${pno}')"/>
	`;
	
	
	
	MUIXtemp = MUIHeadTemp.concat(Btn0bTemp, AudBtnTemp, PlyAlBtnTemp, BtnTemp1, BtnTemp2, BtnTemp3, BtnTemp4, BtnTemp5, BtnTemp6, BtnTemp7, BtnTemp8, MUITailTemp, MUITBoxTemp)
	
	}

}







// Auto Audio speaker
var AutAudSpkr = "M52.546307 96.563052C50.574302 94.844602 45.153635 89.605852 40.500381 84.921382C40.500381 84.921382 32.039916 76.404164 32.039916 76.404164C32.039916 76.404164 22.733247 76.404164 22.733247 76.404164C10.032796 76.404164 11.125427 77.955252 11.125427 59.925843C11.125427 42.0607 10.031272 43.595831 22.764529 43.595831C22.764529 43.595831 31.954168 43.595831 31.954168 43.595831C31.954168 43.595831 42.838755 32.836325 42.838755 32.836325C48.825279 26.918594 54.379592 21.651537 55.181676 21.131753C56.42993 20.322827 56.869207 20.281627 58.231113 20.845747C59.193979 21.244579 59.97627 22.052941 60.212366 22.893028C60.71812 24.692615 60.72379 95.288012 60.218366 97.083232C59.876336 98.297992 57.957761 99.687493 56.622491 99.687493C56.352616 99.687493 54.518352 98.281492 52.546349 96.563052C52.546349 96.563052 52.546307 96.563052 52.546307 96.563052";

// Auto Audio on waves
var AutAudOn1 = "M73.08867635 74.5106609363C71.8965220734 73.3185066596 71.6956953884 70.8791224404 72.691801355 69.6899394345C73.0556034338 69.2556206067 74.4780854367 68.008676414 75.8528710027 66.9189529278C78.7182396749 64.6477193522 79.744129787 62.0096806771 79.1438113779 58.4564218052C78.7791943825 56.2982790824 77.7649353536 55.0285092859 73.7245468212 51.671949599C71.7071994716 49.9960338076 71.4398750583 47.5844652338 73.08867635 45.9356612963C74.5657683523 44.4585719399 76.7021252837 44.6156127296 79.5302803105 46.4091754987C84.3041467504 49.4366702522 86.8237685103 54.2088777546 86.8237685103 60.2231611163C86.8237685103 66.2374471238 84.3041467504 71.0096519804 79.5302803105 74.0371493797C76.7021252837 75.8307121488 74.5657683523 75.9877529385 73.08867635 74.5106609363C73.08867635 74.5106609363 73.08867635 74.5106609363 73.08867635 74.5106609363";

var AutAudOn2 = "M79.5309179564 89.69009762C77.2187745063 87.2289329011 77.9946174966 85.7330581282 83.4448409487 82.1438053401C88.7394788195 78.6570177382 91.1574450182 75.9962222509 93.5070614053 71.0710776463C99.366150769 58.7895507385 94.8467155967 44.7067511034 82.8786511434 37.9523937719C78.3733711793 35.4097717831 77.2616634641 33.0484846253 79.4592926031 30.6896104675C80.9783819173 29.0590574881 83.211393785 29.2248427568 87.0247301328 31.2512864813C94.1326131266 35.0284886837 101.040420852 44.1682129019 102.968130015 52.346010028C103.987651607 56.6710611194 103.987651607 63.775263759 102.968130015 68.1003148504C101.026292102 76.3380586216 94.1918295217 85.377944966 87.0198088829 89.1950357513C83.168364598 91.2448474755 81.1188174572 91.3803353071 79.5309179564 89.69009762C79.5309179564 89.69009762 79.5309179564 89.69009762 79.5309179564 89.69009762";

// Auto Audio off cross
var AutAudOff1 = "M 88.893387,62.509705 C 72.877577,46.493899 71.818667,45.318212 71.818667,43.551946 c 0,-2.446633 1.76836,-4.184194 4.25835,-4.184194 1.66892,0 3.13007,1.321183 18.8836,17.074713 15.468933,15.468922 17.074723,17.23786 17.074723,18.80947 0,1.136284 -0.4481,2.182849 -1.29887,3.033619 -0.85077,0.850771 -1.89733,1.298864 -3.03362,1.298864 -1.57161,0 -3.34054,-1.605791 -18.809463,-17.074713 z";

var AutAudOff2 = "m 73.071277,78.285554 c -1.47634,-1.476335 -1.63229,-2.880738 -0.54912,-4.945123 0.41237,-0.78591 8.25041,-8.751273 17.41789,-17.700805 16.967563,-16.564186 17.486373,-16.974211 20.173243,-15.943167 1.24389,0.477327 2.4779,3.165147 2.11571,4.608256 -0.17144,0.683059 -7.98357,8.900427 -17.360283,18.260817 -15.3988,15.371982 -17.2155,17.018886 -18.77358,17.018886 -1.12593,0 -2.17608,-0.45108 -3.02386,-1.298864 z";



function MUIUpdP00X(pno, n, ClkSrc) {
	
	ButtonIdHead = "P".concat(pno, "BtnImgId");
	MUIL1TCont = "MUIL1TContP".concat(pno);
	MUIL2TCont = "MUIL2TContP".concat(pno);
	CurrentBtn = n;
	
	pId = window["p".concat(pno)];
	
	
	if (PlyAllKll == 1 && pno != CrntPlyAllPno) {//Kill play-all process
		PlyAllKll = 0; //reset
		PlyAllAudKll = 1; //In case MUIUpdP00X function is triggered from play-all process audio function will be killed before outputting audio
	} else { 
	
		//Annotation Button click interrupts Play All process
		if (PlyAllMde == "Ply" && ClkSrc == "BtnClk") {
		
			PlyAllIcoOff(CrntPlyAllPno);
			
			CrntPlyAllN = 0; //reset to WI0
			PlyAllMde = "Pse";		
			PlyAllN = CrntPlyAllN;
			PlyAllKll = 1;
			
			for (i = StrtPstN; i > (EndPstN - 1); --i) {
				PnoPlyAllPos[i] = 0;
			}
		} 

		//mitigates delayed running of this function upon pause event, by setting n back one position
		if (PlyAllMde == "Pse" && ClkSrc == "AlBtnClk") {
			//prevents auto procedure to next button when Play All is paused
			n = n-1;
		}
				
		MUITempPrp(pno);
		//P00XBtnSelected = n;
		CurrentBtn = n;
		
		pnoint = parseInt(pno, 10);
		CrntBtnP00X[pnoint] = n;
	    //alert(pno);
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
		if (AutAud == 1 && PlyAllMde == "Pse") {
			AudioCntrl(pno, CurrentBtn, 0, ClkSrc);
		}
	
	}
	console.log(pId.No);
}

function BtnHLight(type) {
	
	//alert(BtnIdHead);
	
	if (type == "HLight") {
	// Dehighlight previously selected button
		for(var i = 1; i < 9; ++i) {
			BtnTextId = BtnIdHead.concat(i);
			document.getElementById(BtnTextId).className.baseVal = "btnImgoff";
		}
		document.getElementById(BtnIdHead.concat(0)).className.baseVal = "Whtbckoff";

		CurrentBtnTextId = BtnIdHead.concat(CurrentBtn);
		
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
			}
		
		} else {
			//alert(CurrentBtnTextId);
			document.getElementById(CurrentBtnTextId).className.baseVal = "btnTon";
			document.getElementById(CurrentBtnBorderId).className.baseVal = "btnCon";
		}
	
	}
	
}


function SetImgData(pId) {
  //Word Item Images
  
  if (pId.AnnotType == "HLight") {
	//Load in blank 1024x768 box MUI Image
	document.getElementById(P00XMUIImgCont).src = "graphics/HlightBox.svg";
	//Highlighted annotations will load in imgfile to Word Item 0 slot 
  } else {
	//Load in MUI Image
	document.getElementById(P00XMUIImgCont).src = pId[0].imgfile; 
  }
  //Set class for background color
  document.getElementById(P00XMUIImgCont).className = "WIPic ".concat(pId[0].imgbckg, "bckhv");
  
}

function BtnImgs() {
  //Audio Button Play Icon Loader
  for(var i = 0; i < PstsThisPg; ++i) {
     var AudBtnPlayTriCl = document.getElementsByClassName("AudBtn-PlayTri");
     AudBtnPlayTriCl[i].setAttribute('d', 'm 95.514374,224.65227 c -0.05649,-49.76848 -0.112973,-99.53696 -0.16946,-149.30544 43.129016,24.83532 86.258026,49.67064 129.387036,74.50596 -43.07252,24.93316 -86.14505,49.86632 -129.217576,74.79948 z');
   }
   
   //Audio Button Pause Icon Loader
   for (var i = 0; i < PstsThisPg; ++i) {
     var AudBtnPauseRectCl = document.getElementsByClassName("AudBtn-PauseRectL");
     AudBtnPauseRectCl[i].setAttribute('width', '47');
     AudBtnPauseRectCl[i].setAttribute('height', '150');
     AudBtnPauseRectCl[i].setAttribute('x', '115');
     AudBtnPauseRectCl[i].setAttribute('y', '26');
     AudBtnPauseRectCl[i].setAttribute('ry', '8');
	 
	 var AudBtnPauseRectCl = document.getElementsByClassName("AudBtn-PauseRectR");
     AudBtnPauseRectCl[i].setAttribute('width', '47');
     AudBtnPauseRectCl[i].setAttribute('height', '150');
     AudBtnPauseRectCl[i].setAttribute('x', '35');
     AudBtnPauseRectCl[i].setAttribute('y', '26');
     AudBtnPauseRectCl[i].setAttribute('ry', '8');
   }
   
}

function BckImgHver(P00XMUIImgCont, pno) {
	pId = window["p".concat(pno)];
	document.getElementById(P00XMUIImgCont).className = pId[0].imgbckg.concat("hvr");
}

function BckImgOut(P00XMUIImgCont, pno) {
	pId = window["p".concat(pno)];
	document.getElementById(P00XMUIImgCont).className = pId[0].imgbckg;
}

function WIXUpd(l1, l2) {
	//alert(MUIL1TCont);
	document.getElementById(MUIL1TCont).innerHTML = pId[CurrentBtn]["WI"][l1]; //L1
	if (L2Selected == "JPN") {
		document.getElementById(MUIL2TCont).innerHTML = pId[CurrentBtn]["WIr"][l2.concat("Ru")];//L2
	} else {
		document.getElementById(MUIL2TCont).innerHTML = pId[CurrentBtn]["WI"][l2];
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

// Part of speech data - 3 slots
function WIXPOfSpUpd(l1, l2) {
	document.getElementById(P00XL2POfSp1WIx).innerHTML = pId[CurrentBtn]["PoSp1"][l1][l2];
	document.getElementById(P00XL2POfSp2WIx).innerHTML = pId[CurrentBtn]["PoSp2"][l1][l2];
	document.getElementById(P00XL2POfSp3WIx).innerHTML = pId[CurrentBtn]["PoSp3"][l1][l2];
}


function PlyAllIcoOff(pno) {
	
	PlyAllIcoOnP00X = "PlyAllIcoOnP".concat(pno);
	PlyAllIcoOffP00X = "PlyAllIcoOffP".concat(pno);
	document.getElementById(PlyAllIcoOffP00X).style.display = 'block';
	document.getElementById(PlyAllIcoOnP00X).style.display = 'none';
	PlyAllStng = 0;
}

function PlyAllIcoOn(pno) {
	
	PlyAllIcoOnP00X = "PlyAllIcoOnP".concat(pno);
	PlyAllIcoOffP00X = "PlyAllIcoOffP".concat(pno);
	document.getElementById(PlyAllIcoOffP00X).style.display = 'none';
	document.getElementById(PlyAllIcoOnP00X).style.display = 'block';
	PlyAllStng = 1;
}




function AudioCntrl(pno, wi, ex, ClkSrc) {
	//alert(pno);	
	if (PlyAllAudKll == 1 && pno != CrntPlyAllPno) {//exit process here	
		PlyAllAudKll = 0; //reset
	} else {
		// Under these conditions proceed with audio play/pause functions
		if ((PlyAllMde == "Pse" && AutAud == 1 && ClkSrc == "BtnClk") || (PlyAllMde == "Ply" && AutAud == 1) || (PlyAllMde == "Ply" && AutAud == 0) || (ClkSrc == "IAudClk")) {	
			
			OldPlayIcoId = PlayIcoId;
			OldPauseIcoId = PauseIcoId;
			
			AudFileId = "Ex".concat(ex, "WI", wi);
			RespVoiLng = {ENG: "UK English Male", ITA: "Italian Male", JPN: "Japanese Male",};
			PlayIcoId = "P".concat(pno, "Ex", ex, "PlayIco", "WIx");
			PauseIcoId = "P".concat(pno, "Ex", ex, "PauseIco", "WIx");
			
			if (wi == 'x') {
			//'x' indicates that the user is triggering the play WI button on the MUI
			//Otherwise audio is being triggered from the MUI annotation btns or autoplay
				pnoint = parseInt(pno, 10);
				wi = CrntBtnP00X[pnoint];
			}
			
			pId = window["p".concat(pno)];
			// Set text for audio playback
			if (ex == 0) {
				SpkTxt = pId[wi]["WI"][L2Selected];
			} else {
				SpkTxt = pId[wi]["EX".concat(ex)][L2Selected];
			}
		
			if (AudStat == 0) {
				// Audio is off
				// determine play from pause pos or new audio file
				if (AudFileId == CurrentAudFileId) {// play from pause
					AudStat = 1;
					responsiveVoice.resume();
					AudPlayIco();
				} else {//play new file from start
					if (PlyAllMde == "Ply" && AutAud == 0) {//In case auto audio option is off for play all procedure
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
					responsiveVoice.speak(SpkTxt, RespVoiLng[L2Selected], parameters);
					AudPlayIco();
					// Reset play UI for previous btn
					document.getElementById(OldPlayIcoId).style.display = 'block';
					document.getElementById(OldPauseIcoId).style.display = 'none';
				}
				CurrentAudFileId = AudFileId;
				
			}
	
		}
	
	}

}



var CurrentAudFileId;
var PlayIcoId;
var PauseIcoId;
var AudStat = 0;

function AutAudSet(pno, swtch) {
	
	AutAudDSl1P00X = "AutAudDSl1P".concat(pno);
	AutAudDSl2P00X = "AutAudDSl2P".concat(pno);
	
	if (swtch == 1) { //set auto audio button from button click
		if (localStorage.getItem("AutAudSetng") == "0") {
			localStorage.setItem("AutAudSetng", "1");
			for (i = StrtPstN; i > (EndPstN - 1); --i) {
				if (flprfx == "ALL") {
					if (i < 10) {
						ipnostr = "00".concat(i);
					} else {
						ipnostr = "0".concat(i);
					}
				} else {
					ipnostr = pindex[flprfx][i];
				}
				
				AutAudDSl1P00X = "AutAudDSl1P".concat(ipnostr);
				AutAudDSl2P00X = "AutAudDSl2P".concat(ipnostr);
				
				document.getElementById(AutAudDSl1P00X).setAttribute('d', AutAudOn1);
				document.getElementById(AutAudDSl2P00X).setAttribute('d', AutAudOn2);
			}
			
		AutAud = 1;
			
		} else {
			localStorage.setItem("AutAudSetng", "0");
			for (i = StrtPstN; i > (EndPstN - 1); --i) {
				if (flprfx == "ALL") {
					if (i < 10) {
						ipnostr = "00".concat(i);
					} else {
						ipnostr = "0".concat(i);
					}
				} else {
					ipnostr = pindex[flprfx][i];
				}
				
				AutAudDSl1P00X = "AutAudDSl1P".concat(ipnostr);
				AutAudDSl2P00X = "AutAudDSl2P".concat(ipnostr);
				console.log(AutAudDSl1P00X);
				document.getElementById(AutAudDSl1P00X).setAttribute('d', AutAudOff1);
				document.getElementById(AutAudDSl2P00X).setAttribute('d', AutAudOff2);
			}
		AutAud = 0;	
		}
		
	} else { //set auto audio button from st@red value
		if (localStorage.getItem("AutAudSetng") == "0") {
			document.getElementById(AutAudDSl1P00X).setAttribute('d', AutAudOff1);
			document.getElementById(AutAudDSl2P00X).setAttribute('d', AutAudOff2);
			AutAud = 0;
		} else {
			document.getElementById(AutAudDSl1P00X).setAttribute('d', AutAudOn1);
			document.getElementById(AutAudDSl2P00X).setAttribute('d', AutAudOn2);
			AutAud = 1;
		}
	}

}


function PlyAllAud(pno) {
	//alert(pno);
	PlyAllPno = pno;
	pnoint = parseInt(pno, 10);
	ClkSrc = "AlBtnClk";
	
	//play all audio is off and the current MUI for the click source is in off position for play-all mode 
	if (PlyAllStng == 0 && PnoPlyAllPos[pnoint] == 0) {//Play play-all process
		PlyAllIcoOff(CrntPlyAllPno);//set previous PlyAll icon to off
		for (i = StrtPstN; i > (EndPstN - 1); --i) {//set PnoPlyAllPos to off for all other MUIs
			PnoPlyAllPos[i] = 0;
		}
		
		CrntPlyAllPno = pno; //set new CrntPlyAllPno
		PlyAllMde = "Ply";
		PlyAllN = 0;
		PlyAllIcoOn(pno);
		
		MUIUpdP00X(pno, CrntPlyAllN, 'AlBtnClk');	
		AudioCntrl(pno, 'x', 0);
	}
	
	if (PlyAllStng == 1 && pno != CrntPlyAllPno) {//Start different interupting play-all process
		PlyAllIcoOff(CrntPlyAllPno);
		
		PlyAllKll = 1;
		PlyAllAudKll = 1;
	
		for (i = StrtPstN; i > (EndPstN - 1); --i) {//set PnoPlyAllPos to off for all other MUIs
			PnoPlyAllPos[i] = 0;
		}
	
		CrntPlyAllPno = pno; //set new CrntPlyAllPno
		PlyAllMde = "Ply";
		PlyAllN = 0;
		PlyAllIcoOn(pno);
		
		MUIUpdP00X(pno, PlyAllN, 'AlBtnClk');	
		setTimeout(function() { AudioCntrl(pno, 'x', 0) },100);
		
	} else {//Or pause Current play-all process
	
		if (PlyAllStng == 1 && PnoPlyAllPos[pnoint] == 1) {//Pause play-all process
			
			PlyAllMde = "Pse";
			PlyAllN = CrntPlyAllN;
			PlyAllIcoOff(pno);	
	
		} else {
	
			if (PlyAllStng == 0 && pno == CrntPlyAllPno) {//Play play-all process from paused 
			
				PlyAllMde = "Ply";
				PlyAllN = CrntPlyAllN;
				PlyAllIcoOn(pno);
				
				MUIUpdP00X(pno, CrntPlyAllN, 'AlBtnClk');	
				AudioCntrl(pno, 'x', 0);
			
			}
		
		}

	}
	
}
	
	
	
	

function PlyAllAudReps(pno) {
	
	if (PlyAllStng == 1) {//Play next
	  
		//Calculate listen and repeat time
		RepWt = AudDur + 1000;
	   
		//Proceed or stop process
		if (7 >= PlyAllN) {//If WI is between 0 and-or equal to 7, proceed to next WI.
			PlyAllN = PlyAllN + 1;
			CrntPlyAllN = PlyAllN;
			setTimeout(function() { MUIUpdP00X(pno, PlyAllN, 'AlBtnClk') }, RepWt);
			ClkSrc = 'AlBtnClk';
			setTimeout(function() { AudioCntrl(pno, PlyAllN, 0) }, RepWt);
			PnoPlyAllPos[pnoint] = 1;
		} else {//If WI is WI8, reset to 0
			setTimeout(function() { MUIUpdP00X(pno, 0, 'AlBtnClk') }, RepWt);
			setTimeout(function() { PlyAllIcoOff(pno) }, RepWt);
			CrntPlyAllN = 0;
			pnoint = parseInt(pno, 10);
			PnoPlyAllPos[pnoint] = 0;
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
	//alert(PlyAllPno);
	var timeDiff = endTime - startTime;//in ms 
	timeDiff /= 1000;  
	AudDur = Math.round(timeDiff);// get seconds
	
	if (PlyAllMde == "Ply") {//Play All Rep Function
		PlyAllAudReps(PlyAllPno);
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
