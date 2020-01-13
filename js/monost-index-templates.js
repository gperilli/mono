 



// MUI Temp Head Placeholders
P00XMUIImgCont = "P00XMUIImgCont";
P00XMUIBtnsCont = "P00XMUIBtnsCont"

// MUI Btn0 Temp Placeholders
P00XBtnImgId0T = "P00XBtnImgId0T";
P00XDigitPath0D1 = "P00XDigitPath0D1";
P00XDigitPath0D2 = "P00XDigitPath0D2";
P00XDigitPath0D3 = "P00XDigitPath0D3";
P00XBtnImgId0B = "P00XBtnImgId0B";
TBtnP00XRectPos = "TBtnP00XRectPos";
BtnContainerP00XBtnIDT = "BtnContainerP00XBtnIDT";

// MUI Btn1-8 Temp Placeholder Heads
P00XId1VarHead = "BtnContainerP00XBtnID";
P00XId24VarHead = "P00XBtnImgId";
P00XId3VarHead = "P00XDigitPath";
P00XId5VarHead = "AnnotDivLn-P00X-ID";
P00XId6VarHead = "AnnotDivLnPos-P00X-ID";

// MUI Text Box Temp Placeholders
MUITContP00X = "MUITContP00X";
L2LangDisplayP00X = "L2LangDisplayP00X";
MUIL2TContP00X = "MUIL2TContP00X";
P00XL2POfSp1WIx = "P00XL2POfSp1WIx";
P00XL2POfSp2WIx = "P00XL2POfSp2WIx";
P00XL2POfSp3WIx = "P00XL2POfSp3WIx";
L1LangDisplayP00X = "L1LangDisplayP00X";
MUIL1TContP00X = "MUIL1TContP00X";
MUILink1ContP00X = "MUILink1ContP00X";
MUILink2ContP00X = "MUILink2ContP00X";
MUILink3ContP00X = "MUILink3ContP00X";
MUILink4ContP00X = "MUILink4ContP00X";
MUILink5ContP00X = "MUILink5ContP00X";
MUILink6ContP00X = "MUILink6ContP00X";

function MUITempSet(type) {

var MUIHeadTemp = `
<div class="column">
  <div class="img-overlay-wrap">
  <img id="P00XMUIImgCont" src="" class="wht" width="100%">
    <svg viewBox="0 0 1024 768" width="100%" class="btnbckon">
      <!--Buttons Loaded here-->
`;

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

<svg class="button" id=${BtnContainerP00XBtnIDX} x="0%" y="12%" width="9%" height="12%">
  <g transform="scale(1, 1)">
    <svg id=${P00XBtnImgIdXB} class="btnCoff" onClick="MUIUpdP00X(${i})">
    <circle class="circle" cx="50%" cy="50%" r="40%"/>
    Sorry, your browser does not support inline SVG.
    </svg>
    <svg viewBox="0 0 400 400">
     <g id=${P00XBtnImgIdXT} class="btnToff" onClick="MUIUpdP00X(${i})">
       <path id=${P00XDigitPathX} d="">
       </path>
      </g>
     </svg>
  </g>
</svg>
</svg>
`;

BtnTempX = "BtnTemp".concat(i);
window[BtnTempX] = BtnTemp;

}



var MUITailTemp = `
</svg>

</div>
</div>
`;

var MUITBoxTemp = `
<div id=${MUITContP00X} class="column">
  <div>
    <p class="langdisplay">(</p>
    <p class="langdisplay" id=${L2LangDisplayP00X}>L2</p>
    <p class="langdisplay">)</p>
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
	<div class="icon baseline" onClick="AudioCntrl('x', 0)">
		<svg class="Container" viewBox="0 0 300 300">
			<g transform="translate(60, 50)" id="Ex0PlayIcoWIx">
				<path class="AudBtn-PlayTri"/>
			</g>
			<g transform="translate(50, 45)" id="Ex0PauseIcoWIx" class="AudBtn-PauseBrs">
				<rect class="AudBtn-PauseRectL" />
				<rect class="AudBtn-PauseRectR" />
			</g>
		</svg>
	</div>
</h5>
  <br>
  <div align=right style="width: 100%;">
    <p class="langdisplay">(</p>
    <p class="langdisplay" id=${L1LangDisplayP00X}>L1</p>
    <p class="langdisplay">)</p>
  </div>
  <h4 align=right id=${MUIL1TContP00X}></h4>
  <br>
</div>

<div style="display: inline-block; width: 100%; float: right;">
  <a id=${MUILink1ContP00X} class="WIsLink1 dictR" href=""></a>
  <a id=${MUILink2ContP00X} class="WIsLink2 dictR" href=""></a>
  <a id=${MUILink3ContP00X} class="WIsLink3 dictR" href=""></a>
  <a id=${MUILink4ContP00X} class="WIsLink4 dictR" href=""></a>
  <a id=${MUILink5ContP00X} class="WIsLink5 dictR" href=""></a>
  <a id=${MUILink6ContP00X} class="WIsLink6 dictR" href=""></a>
</div>
`;


if (type == "HLight") {
//Highlighted annotations will load in the inline svg data held in ImgBtnTemp variable
	MUIXtemp = MUIHeadTemp.concat(ImgBtnTemp, MUITailTemp, MUITBoxTemp);

} else {
//Numbered Annotations will load in transparent box and 8 buttons
	var Btn0bTemp = `		
	<rect width="1024" height="768" fill="transparent" id="P00XBtnImgId0T" onClick="MUIUpdP00X(0)"/>
	`;

	MUIXtemp = MUIHeadTemp.concat(Btn0bTemp, BtnTemp1, BtnTemp2, BtnTemp3, BtnTemp4, BtnTemp5, BtnTemp6, BtnTemp7, BtnTemp8, MUITailTemp, MUITBoxTemp)

}


}








var WIImgContHead = "WIImgCont";
var L2WordItemHead = "L2WordItem";
var L1WordItemHead = "L1WordItem";
var L2WordItemRHead = "L2WordItemR";
var L2POfSp1WIHead = "L2POfSp1WI";
var L2POfSp2WIHead = "L2POfSp2WI";
var L2POfSp3WIHead = "L2POfSp3WI";
var L2AudBtnWIHead = "L2AudBtnWI";
var PlayIcoWIHead = "Ex0PlayIcoWI";
var PauseIcoWIHead = "Ex0PauseIcoWI";

var Link1WIHead = "Link1WI";
var Link2WIHead = "Link2WI";
var Link3WIHead = "Link3WI";
var Link4WIHead = "Link4WI";
var Link5WIHead = "Link5WI";
var Link6WIHead = "Link6WI";

var SemTag1Head = "SemTag1WI";
var SemTag2Head = "SemTag2WI";
var SemTag3Head = "SemTag3WI";

var AccExsWIHead = "AccExsWI";
var ACCWIHead = "ACCWI";
var AccBtnLnVWIHead = "AccBtnLnVWI";

var Ex1L2WIHead = "Ex1L2WI";
var L2Ex1AudBtnWIHead = "L2Ex1AudBtnWI";
var Ex1PlayIcoWIHead = "Ex1PlayIcoWI";
var Ex1PauseIcoWIHead = "Ex1PauseIcoWI";
var Ex1L1WIHead = "Ex1L1WI";

var Ex2L2WIHead = "Ex2L2WI";
var L2Ex2AudBtnWIHead = "L2Ex2AudBtnWI";
var Ex2PlayIcoWIHead = "Ex2PlayIcoWI";
var Ex2PauseIcoWIHead = "Ex2PauseIcoWI";
var Ex2L1WIHead = "Ex2L1WI";

var Ex3L2WIHead = "Ex3L2WI";
var L2Ex3AudBtnWIHead = "L2Ex3AudBtnWI";
var Ex3PlayIcoWIHead = "Ex3PlayIcoWI";
var Ex3PauseIcoWIHead = "Ex3PauseIcoWI";
var Ex3L1WIHead = "Ex3L1WI";

function WIListTempSet() {

WIListCont = `
<section id="WIListCont" class="columns" style="padding-bottom: 0px; border-top: 1px solid #808080;">
</section>
`;

for(var i = 0; i < 9; ++i) {

var WIImgContX = WIImgContHead.concat(i);
var L2WordItemX = L2WordItemHead.concat(i);
var L1WordItemX = L1WordItemHead.concat(i);
var L2WordItemRX = L2WordItemRHead.concat(i);
var L2POfSp1WIX = L2POfSp1WIHead.concat(i);
var L2POfSp2WIX = L2POfSp2WIHead.concat(i);
var L2POfSp3WIX = L2POfSp3WIHead.concat(i);
var SemTag1WIX = SemTag1Head.concat(i);
var SemTag2WIX = SemTag2Head.concat(i);
var SemTag3WIX = SemTag3Head.concat(i);
var L2AudBtnWIX = L2AudBtnWIHead.concat(i);
var PlayIcoWIX = PlayIcoWIHead.concat(i);
var PauseIcoWIX = PauseIcoWIHead.concat(i);

var WIListHeadTemp = `
<!-- Word Item X -->
<div class="WordItems">
	<div class="WIcolumn left">
		<img id=${WIImgContX} class="" src=""/>
		<p id=${SemTag1WIX} class="SemTags">tag1</p>
		<p id=${SemTag2WIX} class="SemTags">tag2</p>
		<p id=${SemTag3WIX} class="SemTags">tag3</p>
	</div>
	<div class="WIcolumn right">
	<div class="L2WICont">
		<h3 class="L2WordItem" id=${L2WordItemX} ></h3>
		<br>
		<p id=${L2WordItemRX}></p>
	</div>
	<div>
		<div class="L2WTCont">
		   <p class="L2WordType" id=${L2POfSp1WIX}></p>
		</div>
		<div class="L2WTCont">
		   <p class="L2WordType" id=${L2POfSp2WIX}></p>
		</div>
		<div class="L2WTCont">
		   <p class="L2WordType" id=${L2POfSp3WIX}></p>
		</div>
		<br>
		<h5>
			<div class="icon baseline" onClick="AudioCntrl(${i}, 0)">
				<svg viewBox="0 0 300 300">
					<g transform="translate(60, 50)" id=${PlayIcoWIX}>
						<path class="AudBtn-PlayTri"/>
					</g>
					<g transform="translate(50, 45)" id=${PauseIcoWIX} class="AudBtn-PauseBrs">
						<rect class="AudBtn-PauseRectL" />
						<rect class="AudBtn-PauseRectR" />
					</g>
				</svg>
			</div>
		</h5>
	</div>
	</div>
	<br>
	<div class="L1WICont" align="right">
		<p id=${L1WordItemX}></p>
	</div>
</div>
`;

var Link1WIX = Link1WIHead.concat(i);
var Link2WIX = Link2WIHead.concat(i);
var Link3WIX = Link3WIHead.concat(i);
var Link4WIX = Link4WIHead.concat(i);
var Link5WIX = Link5WIHead.concat(i);
var Link6WIX = Link6WIHead.concat(i);

var WIListLnksTemp = `
<div class="LinkCont">
	<a id=${Link1WIX} class="WIsLink1 dictR" href="https://www.google.com/"></a>
	<a id=${Link2WIX} class="WIsLink2 dictR" href="https://www.google.com/"></a>
	<a id=${Link3WIX} class="WIsLink3 dictR" href="https://www.google.com/"></a>
	<a id=${Link4WIX} class="WIsLink4 dictR" href="https://www.google.com/"></a>
	<a id=${Link5WIX} class="WIsLink5 dictR" href="https://www.google.com/"></a>
	<a id=${Link6WIX} class="WIsLink6 dictR" href="https://www.google.com/"></a>
</div>
`;

var AccExsWIX = AccExsWIHead.concat(i);
var ACCWIXi = ACCWIHead.concat(i);
var AccBtnLnVWIX = AccBtnLnVWIHead.concat(i);

var WIListAccHeadTemp = `
<!-- Start Acc. -->
<div class="WIExs" id=${AccExsWIX}>
	<!-- Exp. Btn -->
	<div class="AccBtnCont">
		<div class="ExpBtnContainerClass">
			<!-- Button SVG Elements -->
			<div class="ExpBtnContainer-TextImgClass" id=${ACCWIXi}>
				<svg class="StretchToContainer" viewbox="0 0 130 130">
					<rect class="AccBtn-RectH"/>
          <rect id=${AccBtnLnVWIX} class="AccBtn-RectV"/>
				</svg>
			</div>
			<div class="ExpBtn-CircleContainerClass">
				<svg class="StretchToContainer">
					<circle class="ExpBtn-CircleClass">
					 Sorry, your browser does not support inline SVG.
					</circle>
				</svg>
			</div>
		</div>
	</div>
`;

var Ex1L2WIX = Ex1L2WIHead.concat(i);
var L2Ex1AudBtnWIX = L2Ex1AudBtnWIHead.concat(i);
var Ex1PlayIcoWIX = Ex1PlayIcoWIHead.concat(i);
var Ex1PauseIcoWIX = Ex1PauseIcoWIHead.concat(i);
var Ex1L1WIX = Ex1L1WIHead.concat(i);


var Ex2L2WIX = Ex2L2WIHead.concat(i);
var L2Ex2AudBtnWIX = L2Ex2AudBtnWIHead.concat(i);
var Ex2PlayIcoWIX = Ex2PlayIcoWIHead.concat(i);
var Ex2PauseIcoWIX = Ex2PauseIcoWIHead.concat(i);
var Ex2L1WIX = Ex2L1WIHead.concat(i);


var Ex3L2WIX = Ex3L2WIHead.concat(i);
var L2Ex3AudBtnWIX = L2Ex3AudBtnWIHead.concat(i);
var Ex3PlayIcoWIX = Ex3PlayIcoWIHead.concat(i);
var Ex3PauseIcoWIX = Ex3PauseIcoWIHead.concat(i);
var Ex3L1WIX = Ex3L1WIHead.concat(i);


var WIListExsTemp = `
<h5 id=${Ex1L2WIX}></h5>
<h5>
	<div class="icon baseline" onClick="AudioCntrl(${i}, 1)">
		<svg class="Container" viewBox="0 0 300 300">
			<g transform="translate(60, 50)" id=${Ex1PlayIcoWIX}>
				<path class="AudBtn-PlayTri"/>
		   </g>
		   <g transform="translate(50, 45)" id=${Ex1PauseIcoWIX} class="AudBtn-PauseBrs">
				<rect class="AudBtn-PauseRectL" />
				<rect class="AudBtn-PauseRectR" />
		   </g>
		</svg>
	</div>
</h5>

<br>
<p class="WIL1Exs" id=${Ex1L1WIX}>-</p>
<br><br>

<h5 id=${Ex2L2WIX}></h5>
<h5>
	<div class="icon baseline" onClick="AudioCntrl(${i}, 2)">
		<svg class="Container" viewBox="0 0 300 300">
			<g transform="translate(60, 50)" id=${Ex2PlayIcoWIX}>
				<path class="AudBtn-PlayTri"/>
			</g>
			<g transform="translate(50, 45)" id=${Ex2PauseIcoWIX} class="AudBtn-PauseBrs">
				<rect class="AudBtn-PauseRectL" />
				<rect class="AudBtn-PauseRectR" />
			</g>
		</svg>
	</div>
</h5>
<br>
<p class="WIL1Exs" id=${Ex2L1WIX}>-</p>
<br><br>

<h5 id=${Ex3L2WIX}></h5>
<h5>
	<div class="icon baseline" onClick="AudioCntrl(${i}, 3)">
		<svg class="Container" viewBox="0 0 300 300">
			<g transform="translate(60, 50)" id=${Ex3PlayIcoWIX}>
				<path class="AudBtn-PlayTri"/>
			</g>
			<g transform="translate(50, 45)" id=${Ex3PauseIcoWIX} class="AudBtn-PauseBrs">
				<rect class="AudBtn-PauseRectL" />
				<rect class="AudBtn-PauseRectR" />
			</g>
		</svg>
	</div>
</h5>
<br>
<p class="WIL1Exs" id=${Ex3L1WIX}>-</p>
`;


switch (i) {
  case 1:
    WIListHeadTemp1 = WIListHeadTemp;
  WIListLnksTemp1 = WIListLnksTemp;
  WIListAccHeadTemp1 = WIListAccHeadTemp;
  WIListExsTemp1 = WIListExsTemp;
    break;
  case 2:
  WIListHeadTemp2 = WIListHeadTemp;
  WIListLnksTemp2 = WIListLnksTemp;
  WIListAccHeadTemp2 = WIListAccHeadTemp;
  WIListExsTemp2 = WIListExsTemp;
    break;
  case 3:
  WIListHeadTemp3 = WIListHeadTemp;
  WIListLnksTemp3 = WIListLnksTemp;
  WIListAccHeadTemp3 = WIListAccHeadTemp;
  WIListExsTemp3 = WIListExsTemp;
    break;
  case 4:
  WIListHeadTemp4 = WIListHeadTemp;
  WIListLnksTemp4 = WIListLnksTemp;
  WIListAccHeadTemp4 = WIListAccHeadTemp;
  WIListExsTemp4 = WIListExsTemp;
    break;
  case 5:
  WIListHeadTemp5 = WIListHeadTemp;
  WIListLnksTemp5 = WIListLnksTemp;
  WIListAccHeadTemp5 = WIListAccHeadTemp;
  WIListExsTemp5 = WIListExsTemp;
    break;
  case 6:
  WIListHeadTemp6 = WIListHeadTemp;
  WIListLnksTemp6 = WIListLnksTemp;
  WIListAccHeadTemp6 = WIListAccHeadTemp;
  WIListExsTemp6 = WIListExsTemp;
    break;
  case 7:
  WIListHeadTemp7 = WIListHeadTemp;
  WIListLnksTemp7 = WIListLnksTemp;
  WIListAccHeadTemp7 = WIListAccHeadTemp;
  WIListExsTemp7 = WIListExsTemp;
    break;
  case 8:
  WIListHeadTemp8 = WIListHeadTemp;
  WIListLnksTemp8 = WIListLnksTemp;
  WIListAccHeadTemp8 = WIListAccHeadTemp;
  WIListExsTemp8 = WIListExsTemp;
    break;
	case 0:
   WIListHeadTemp0 = WIListHeadTemp;
  WIListLnksTemp0 = WIListLnksTemp;
  WIListAccHeadTemp0 = WIListAccHeadTemp;
  WIListExsTemp0 = WIListExsTemp;
  break;
   }
   
//end for loop
}


WIListAccTailTemp = `
</div>
<!-- End Acc. -->
<div class="WIspacer"></div>
`;


WIListTemp = WIListHeadTemp0.concat(WIListLnksTemp0, WIListAccHeadTemp0, WIListExsTemp0, WIListAccTailTemp, WIListHeadTemp1, WIListLnksTemp1, WIListAccHeadTemp1, WIListExsTemp1, WIListAccTailTemp, WIListHeadTemp2, WIListLnksTemp2, WIListAccHeadTemp2, WIListExsTemp2, WIListAccTailTemp, WIListHeadTemp3, WIListLnksTemp3, WIListAccHeadTemp3, WIListExsTemp3, WIListAccTailTemp, WIListHeadTemp4, WIListLnksTemp4, WIListAccHeadTemp4, WIListExsTemp4, WIListAccTailTemp, WIListHeadTemp5, WIListLnksTemp5, WIListAccHeadTemp5, WIListExsTemp5, WIListAccTailTemp, WIListHeadTemp6, WIListLnksTemp6, WIListAccHeadTemp6, WIListExsTemp6, WIListAccTailTemp, WIListHeadTemp7, WIListLnksTemp7, WIListAccHeadTemp7, WIListExsTemp7, WIListAccTailTemp, WIListHeadTemp8, WIListLnksTemp8, WIListAccHeadTemp8, WIListExsTemp8, WIListAccTailTemp);


}






