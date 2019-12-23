

var ShareHeadB = `
<!-- Social Buttons -->
<section class="columns" id="ShareBtmCont" style="background-color: white; border-top: 0px solid #808080; position: relative; z-index: 10; padding-top: 0px;">
<div class="sharelikeB" align=center>
<p id="sharetextB"></p>
<br>
`;


var ShareBtmTailTemp = `
</section>
`;



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

function MUITempSet() {
  MUIHeadTemp = `
  <div class="column">
    <div class="img-overlay-wrap">
    <img id="P00XMUIImgCont" src="" width="100%">
      <svg viewBox="0 0 1024 768">
        <!--Buttons Loaded here-->
  `;


  var Btn0Temp = `
  <!--Title-->
  <svg id="AnnotDivLn-P00X-ID0" x="0%" y="76%">
  <svg width="18%" height="24%">

  <svg class="button" id="BtnContainerP00XBtnID0">
    <rect id="P00XBtnImgId0B" class="btnCoff" x="-5%" y="25%" width="100%" height="43%" fill="white" stroke-width="6%" stroke="blue" rx="15" ry="15"/>

  <svg id="P00XBtnImgId0T" class="btnToff">
    <svg viewBox="0 0 400 400">
    <g transform="scale(0.365, 0.365)">
    <g transform="translate(-60, 300)">
        <path id="P00XDigitPath0DH" d=""/>
    </g>
    </g>
    </svg>

    <svg viewBox="0 0 400 400">
    <g transform="scale(0.37, 0.37)">
    <g transform="translate(175, 300)">
        <path id="P00XDigitPath0D1" d=""/>
    </g>
    </g>
    </svg>

    <svg viewBox="0 0 400 400">
    <g transform="scale(0.37, 0.37)">
    <g transform="translate(400, 300)">
        <path id="P00XDigitPath0D2" d="" />
    </g>
    </g>
    </svg>

    <svg viewBox="0 0 400 400">
    <g transform="scale(0.37, 0.37)">
    <g transform="translate(625, 300)">
        <path id="P00XDigitPath0D3" d=""/>
    </g>
    </g>
    </svg>
  </svg>

  </svg>

  </svg>
  </svg>
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
    <svg id=${P00XBtnImgIdXB} class="btnCoff">
    <circle class="circle" cx="50%" cy="50%" r="40%"/>
    Sorry, your browser does not support inline SVG.
    </svg>
    <svg viewBox="0 0 400 400">
     <g id=${P00XBtnImgIdXT} class="btnToff">
       <path id=${P00XDigitPathX} d="">
       </path>
      </g>
     </svg>
  </g>
</svg>
</svg>
`;

switch (i) {
  case 1:
    var BtnTemp1 = BtnTemp;
    break;
  case 2:
  var BtnTemp2 = BtnTemp;
    break;
  case 3:
  var BtnTemp3 = BtnTemp;
    break;
  case 4:
  var BtnTemp4 = BtnTemp;
    break;
  case 5:
    var BtnTemp5= BtnTemp;
    break;
  case 6:
  var BtnTemp6 = BtnTemp;
    break;
  case 7:
  var BtnTemp7 = BtnTemp;
    break;
  case 8:
  var BtnTemp8 = BtnTemp;
    break;
   }
}

MUITailTemp = `
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
  <div align=right style="width: 100%;">
    <p class="langdisplay">(</p>
    <p class="langdisplay" id=${L1LangDisplayP00X}>L1</p>
    <p class="langdisplay">)</p>
  </div>
  <h4 align=right id=${MUIL1TContP00X}></h4>
  <br>
</div>
`;

MUIXtemp = Btn0Temp.concat(BtnTemp1, BtnTemp2, BtnTemp3, BtnTemp4, BtnTemp5, BtnTemp6, BtnTemp7, BtnTemp8)
MUItemp = MUIHeadTemp.concat(MUIXtemp, MUITailTemp);
}


var WIImgContHead = "WIImgCont";
var L2WordItemHead = "L2WordItem";
var L1WordItemHead = "L1WordItem";
var L2WordItemRHead = "L2WordItemR";
var L2POfSp1WIHead = "L2POfSp1WI";
var L2POfSp2WIHead = "L2POfSp2WI";
var L2POfSp3WIHead = "L2POfSp3WI";
var L2AudBtnWIHead = "L2AudBtnWI";
var PlayIcoWIHead = "PlayIcoWI";
var PauseIcoWIHead = "PauseIcoWI";

var Link1WIHead = "Link1WI";
var Link2WIHead = "Link2WI";
var Link3WIHead = "Link3WI";
var Link4WIHead = "Link4WI";
var Link5WIHead = "Link5WI";

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

function MonoTempLoad() {

document.getElementById("centralcolumncont").insertAdjacentHTML("afterbegin", ColumnATemp);
document.getElementById("centralcolumncont").insertAdjacentHTML("afterbegin", HeaderTemp);
document.getElementById("MUIContX").insertAdjacentHTML("afterbegin", MUItemp);
document.getElementById("centralcolumncont").insertAdjacentHTML("beforeend", ShareBtmTemp);
document.getElementById("centralcolumncont").insertAdjacentHTML("beforeend", AttrTemp);

}
