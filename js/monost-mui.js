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

linkdata = {
		
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

var MUIHeadTemp = `
<div class="column" style="z-index: 99; background-color: #fff;">
  <div class="img-overlay-wrap">
  <img id=${P00XMUIImgCont} src="" class="wht" width="100%")">
    <svg viewBox="0 0 1024 768" width="100%">
      <!-- Buttons Loaded here -->
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
    <svg id=${P00XBtnImgIdXB} class="btnCoff" onClick="MUIUpdP00X('${pno}', ${i}, 'BtnClk')">
    <circle class="circle" cx="50%" cy="50%" r="40%"/>
    Sorry, your browser does not support inline SVG.
    </svg>
    <svg id=${P00XBtnImgIdXT} class="btnToff" viewBox="0 0 600 600">
     <g onClick="MUIUpdP00X('${pno}', ${i}, 'BtnClk')" >
       <path id=${P00XDigitPathX} d="" >
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


// Set Button Positions etc.
function SetAnnotP00X() {

	for(var i = 1; i < 9; ++i) {

		var BtnContainerP00XBtnIDX = P00XId1VarHead.concat(i);
		var P00XBtnImgIdXT = P00XId24VarHead.concat(i, "T");
		var P00XDigitPathX = P00XId3VarHead.concat(i);
		var AnnotDivLnP00XIDX = P00XId5VarHead.concat(i);
		var AnnotDivLnPosP00XIDX = P00XId6VarHead.concat(i);

		document.getElementById(AnnotDivLnP00XIDX).setAttribute('x', pId[i].LnContPosLeft);
		document.getElementById(AnnotDivLnP00XIDX).setAttribute('y', pId[i].LnContPosTop);
		document.getElementById(BtnContainerP00XBtnIDX).setAttribute('x', pId[i].BtnPosLeft);
		document.getElementById(BtnContainerP00XBtnIDX).setAttribute('y', pId[i].BtnPosTop);
		document.getElementById(AnnotDivLnPosP00XIDX).setAttribute('x1', pId[i].LnPosX1);
		document.getElementById(AnnotDivLnPosP00XIDX).setAttribute('y1', pId[i].LnPosY1);
		document.getElementById(AnnotDivLnPosP00XIDX).setAttribute('x2', pId[i].LnPosX2);
		document.getElementById(AnnotDivLnPosP00XIDX).setAttribute('y2', pId[i].LnPosY2);
		document.getElementById(P00XDigitPathX).setAttribute('d', window["digit".concat(i)]);
		document.getElementById(P00XBtnImgIdXT).setAttribute('x', "15%");
		document.getElementById(P00XBtnImgIdXT).setAttribute('y', "15%");
		
	}

}



var digit9 = "m 166.46731,358.09605 c -21.53318,-6.0256 -36.57465,-16.62247 -47.22363,-33.26952 -6.25405,-9.77664 -13.69582,-29.20004 -13.69582,-35.74676 0,-3.95652 2.16222,-4.56708 23.30153,-6.57993 l 11.30225,-1.07618 2.17062,8.62032 c 7.0379,27.94998 28.1759,43.34153 56.05173,40.81384 14.35931,-1.30205 32.32345,-10.16224 41.17163,-20.30646 14.51487,-16.64088 24.73939,-48.59744 26.11117,-81.60992 l 0.84382,-20.30648 -8.44758,9.49028 c -10.15757,11.41134 -23.97699,20.80467 -38.97345,26.49108 -14.89452,5.64774 -39.03459,5.71993 -56.58958,0.16928 -13.57826,-4.29338 -30.76782,-15.93315 -40.05148,-27.1206 -8.33458,-10.04375 -18.05892,-30.10157 -20.65392,-42.60168 -3.375737,-16.2608 -1.38088,-54.20347 3.57306,-67.96079 14.0809,-39.103315 49.05206,-63.688524 90.59357,-63.688524 53.01277,0 90.77749,33.587639 102.74344,91.379184 3.80913,18.39674 5.35569,75.21758 2.72988,100.29547 -6.8786,65.69445 -31.40581,105.02992 -75.10832,120.45485 -14.7507,5.2063 -45.65512,6.52437 -59.84892,2.55254 z m 52.89813,-143.90476 c 25.00002,-7.4242 40.18714,-29.27272 42.60926,-61.2985 1.84613,-24.41026 -4.58351,-45.81833 -18.19643,-60.586614 -26.4267,-28.669583 -69.89435,-24.552854 -92.71598,8.780944 -8.85131,12.92842 -12.27726,23.32136 -13.54506,41.09025 -2.54611,35.68511 14.94409,63.72928 45.55253,73.03995 7.85968,2.39081 26.57109,1.86186 36.29568,-1.02603 z";

var digit8 = "m 173.4216,357.85439 c -27.63349,-5.99601 -54.31184,-25.96967 -65.53331,-49.06377 -16.39434,-33.73997 -11.85335,-74.95142 10.94425,-99.32391 7.88321,-8.42778 27.42723,-20.39198 33.31117,-20.39198 5.9722,0 3.5309,-3.69646 -5.29228,-8.01324 -12.81432,-6.26945 -24.7581,-18.24441 -30.66046,-30.74043 -6.58446,-13.94015 -6.75386,-39.73309 -0.36777,-55.996616 8.07932,-20.57572 25.26277,-37.015714 47.69133,-45.627939 13.08974,-5.026254 44.20637,-6.92879 59.93125,-3.66432 25.11933,5.21475 47.56127,22.510469 58.74514,45.274139 5.9894,12.190856 6.32754,13.916606 6.32754,32.294726 0,17.49562 -0.50732,20.44867 -5.12985,29.86168 -5.90103,12.01641 -15.6452,21.53503 -28.94404,28.27407 -5.11134,2.59011 -9.29333,4.99651 -9.29333,5.34757 0,0.35106 5.26669,3.23107 11.70374,6.40001 29.55607,14.55042 45.50407,40.72397 45.50407,74.6804 0,44.39145 -30.60028,81.3791 -75.13257,90.81538 -15.53004,3.29077 -38.30456,3.23755 -53.80488,-0.12586 z m 55.88163,-32.86153 c 12.53903,-5.78235 24.37317,-17.69279 30.24784,-30.44282 4.02209,-8.72933 4.82246,-13.15937 4.89285,-27.08193 0.0766,-15.14942 -0.45648,-17.74381 -5.93131,-28.86667 -7.02578,-14.27385 -17.07083,-24.04705 -31.59403,-30.73898 -8.66934,-3.99461 -13.09671,-4.78931 -26.97996,-4.84284 -14.14303,-0.0545 -18.14843,0.65493 -26.97997,4.77881 -14.04218,6.55699 -24.47622,16.42104 -30.63424,28.96079 -4.57113,9.3083 -5.12985,12.45597 -5.12985,28.90016 0,16.01305 0.63228,19.79674 4.77992,28.60391 8.847,18.78589 20.27127,28.40134 40.47745,34.06862 13.76846,3.86167 34.42967,2.38917 46.8513,-3.33905 z M 215.95183,170.5606 c 11.65129,-3.23609 23.78493,-12.90241 29.86709,-23.79377 4.62031,-8.2736 5.59929,-12.12077 5.6352,-22.14495 0.0562,-15.67283 -3.16532,-24.653049 -12.46166,-34.738376 -11.99014,-13.00777 -19.53135,-16.12063 -39.05384,-16.12063 -19.01967,0 -26.5436,2.96248 -38.20223,15.04182 -8.89597,9.216987 -12.72887,18.768996 -12.79158,31.877916 -0.0774,16.18537 2.99158,24.66731 12.75305,35.24632 13.17907,14.28285 34.65599,20.07493 54.25397,14.63167 z";

var digit7 = "m 140.98091,351.34224 c 0.0168,-13.58986 4.97377,-43.867 11.57509,-70.70154 15.97709,-64.94729 46.39458,-128.96012 86.18299,-181.369964 L 253.59895,79.69701 H 174.36871 95.138484 V 61.555505 43.413996 H 199.21345 303.28843 v 14.364911 c 0,13.999171 -0.18734,14.570462 -7.36051,22.438187 -21.44234,23.518736 -48.59975,66.365736 -68.98288,108.836196 -27.15358,56.57743 -38.83097,96.98804 -46.89641,162.28895 l -1.12034,9.07076 h -18.97931 -18.97932 l 0.0112,-9.07076 z";

var digit6 = "M 175.74827,357.67012 C 142.20336,349.55065 114.73048,321.82093 103.73678,284.98535 94.986776,255.66754 92.383876,195.43915 98.168426,156.13951 108.93161,83.015553 146.47661,43.413998 205.03996,43.413998 c 28.92539,0 48.94394,7.634731 65.26368,24.890453 10.66124,11.272692 17.65882,24.334472 21.224,39.616999 2.36744,10.14833 2.3268,11.11238 -0.47419,11.24645 -1.68497,0.0806 -9.90685,0.71581 -18.27085,1.41148 l -15.20727,1.26484 -3.75124,-11.2725 c -8.23361,-24.741997 -25.69318,-37.615031 -51.05373,-37.642165 -29.2521,-0.03132 -54.43881,24.307968 -64.93809,62.753175 -3.79722,13.90426 -8.51143,56.71617 -6.47006,58.75755 0.60746,0.60746 2.28845,-0.55389 3.73553,-2.58077 6.76774,-9.47946 21.10372,-22.05107 30.70913,-26.92968 26.85579,-13.64012 54.21117,-14.30462 80.69121,-1.9601 14.61323,6.81243 35.33077,27.93071 42.5636,43.3869 24.0215,51.33277 3.65329,120.67674 -42.28341,143.95462 -19.53429,9.89877 -48.24689,12.87347 -71.03,7.35887 z m 49.00532,-32.22828 c 16.55359,-8.27804 28.82455,-23.88085 33.99036,-43.21955 3.35354,-12.55426 3.1571,-38.56899 -0.3839,-50.8385 -3.88745,-13.46998 -14.09248,-28.06589 -24.39327,-34.88884 -23.64225,-15.65998 -57.87381,-12.14364 -77.46254,7.95711 -12.72781,13.0605 -17.5936,25.10471 -18.46538,45.70711 -1.7053,40.29993 17.66026,70.86044 50.26078,79.31587 9.11219,2.3634 27.79648,0.2962 36.45395,-4.0332 z";

var digit5 = "m 168.94319,357.50038 c -36.2159,-7.8427 -64.36078,-35.59431 -71.68144,-70.67989 -1.42482,-6.82864 -1.59203,-11.38468 -0.45645,-12.43693 0.98565,-0.91329 9.8143,-2.21966 19.61924,-2.90303 l 17.82716,-1.24248 2.32857,9.80273 c 4.89951,20.62576 18.05941,37.54708 34.99137,44.99271 12.37523,5.44186 33.42823,5.8781 47.57322,0.98575 20.31323,-7.02576 38.98274,-30.76157 43.58285,-55.40981 7.21847,-38.67801 -7.21922,-72.1779 -37.13926,-86.17451 -9.34397,-4.37112 -13.05416,-5.00017 -29.54284,-5.00896 -17.75081,-0.009 -19.59598,0.36511 -31.45832,6.38612 -6.93081,3.51789 -16.04953,10.13686 -20.26382,14.70884 l -7.66235,8.31267 -13.1038,-1.31597 c -7.20709,-0.72378 -14.97323,-1.85579 -17.25809,-2.51556 l -4.15428,-1.1996 15.07987,-80.19424 15.07988,-80.194223 h 78.34767 78.34768 v 17.82094 17.820939 h -63.50637 -63.50637 l -8.54021,42.676464 c -4.69711,23.47205 -8.29803,42.92708 -8.00205,43.23343 0.29599,0.30632 5.9152,-2.37331 12.48713,-5.95476 19.0005,-10.35454 30.96785,-13.01726 54.01241,-12.01769 27.57288,1.19598 44.85965,8.85699 64.09288,28.40418 30.29589,30.79042 36.80496,83.52891 15.62201,126.57444 -22.03333,44.77354 -70.69674,66.79346 -122.71629,55.52844 z";

var digit4 = "M 225.63619,322.89833 V 285.38365 H 157.1719 88.707623 l 0.0428,-18.2884 0.0428,-18.28841 L 161.153,146.11042 233.51278,43.414 h 14.81901 14.81901 v 103.16535 103.16536 h 21.57094 21.57094 v 17.81947 17.81947 H 284.72174 263.1508 v 37.51468 37.51467 h -18.75734 -18.75733 z m 0,-145.74451 c 0,-40.17103 -0.71425,-71.79506 -1.59928,-70.80895 -0.8796,0.98006 -20.84734,29.63659 -44.37274,63.68115 -23.52541,34.04458 -45.6678,65.9086 -49.20529,70.80896 l -6.43183,8.90973 h 50.80457 50.80457 z";

var digit3 = "m 173.83716,359.45692 c -18.66018,-2.9667 -40.72659,-15.27459 -54.14712,-30.20144 -12.54222,-13.94997 -23.357256,-37.46217 -23.357256,-50.77931 0,-4.35004 1.69981,-4.85216 24.912116,-7.35898 l 11.07205,-1.19575 4.20831,13.47979 c 9.9409,31.84202 28.45628,46.88499 57.61067,46.80621 18.87657,-0.0509 30.75866,-4.4471 43.50372,-16.09538 12.13935,-11.09468 18.27787,-22.34007 21.12761,-38.70447 5.15035,-29.57556 -10.10458,-57.9459 -36.54341,-67.96155 -9.19277,-3.48242 -13.13951,-3.88251 -30.53819,-3.09563 l -19.981,0.90367 1.1639,-9.47298 c 2.47018,-20.10455 1.22861,-18.63983 17.85405,-21.06302 24.52854,-3.57506 42.00178,-13.6186 50.067,-28.77829 5.8138,-10.92782 5.80462,-35.68077 -0.0173,-46.625834 -9.49327,-17.847159 -29.24664,-27.706407 -52.21785,-26.062824 -25.94334,1.856235 -45.58888,20.568374 -50.80921,48.395168 -0.67414,3.59344 -2.17129,6.53523 -3.327,6.53729 -5.47229,0.009 -34.39481,-6.07992 -34.39481,-7.24191 0,-4.29405 6.71947,-22.935104 11.56967,-32.096404 11.06272,-20.895821 33.65768,-38.236081 56.75931,-43.559326 12.11645,-2.791958 38.2133,-2.39756 50.33891,0.760762 39.4862,10.284847 64.13386,39.653402 64.21488,76.514248 0.0551,25.09015 -12.34555,46.7623 -33.75292,58.98855 l -9.00459,5.14273 11.10661,4.04967 c 28.16696,10.2702 45.00697,33.86408 47.4156,66.43221 3.46337,46.82958 -29.08593,89.37712 -77.01763,100.67534 -10.80422,2.54672 -36.47932,3.40987 -47.81614,1.60746 z";

var digit2 = "m 89.58885,354.9505 c 0,-9.08544 6.69,-27.66163 14.99891,-41.64758 10.46314,-17.61208 34.70133,-42.26454 77.8164,-79.14641 56.76554,-48.55888 74.07604,-71.84823 75.69209,-101.83532 0.68123,-12.64079 0.13245,-16.68621 -3.36721,-24.82137 -8.17409,-19.001199 -28.08368,-32.149009 -51.18595,-33.801968 -35.32602,-2.527564 -61.4689,17.237938 -67.12098,50.747268 l -2.17961,12.92219 -6.8452,-0.99309 c -3.76485,-0.5462 -12.12302,-1.53321 -18.57371,-2.19334 -13.38172,-1.36943 -13.19184,-0.9572 -8.8754,-19.26663 7.64833,-32.442768 27.80077,-55.331672 58.28661,-66.201255 15.8151,-5.638798 53.26342,-7.118703 70.21955,-2.774978 19.81582,5.076306 31.22816,11.324708 43.8938,24.032434 24.5068,24.58821 31.59249,58.249839 19.35698,91.958319 -9.63325,26.53929 -30.89598,50.38432 -93.27576,104.60387 -34.31549,29.82651 -56.29682,52.07913 -56.29682,56.99163 0,0.67875 35.04478,1.23408 77.87727,1.23408 h 77.87727 V 342.58568 360.413 H 193.73797 89.58885 Z";

var digit1 = "m 212.51385,236.61457 c 0,-68.08913 -0.49101,-123.79842 -1.09113,-123.79842 -0.60011,0 -4.60949,2.85695 -8.90973,6.34877 -15.76274,12.79946 -51.27108,33.48609 -64.55957,37.61144 -4.16868,1.29415 -4.22034,1.09606 -4.21593,-16.16673 l 0.004,-17.47694 10.15495,-5.30595 c 29.94812,-15.64787 65.50005,-45.926729 76.91039,-65.503008 L 226,43.413996 h 12.01405 12.01403 V 201.91351 360.413 h -18.75714 -18.75733 z";

var digit0 = "m 176.29871,358.09364 c -20.50105,-4.98061 -40.58042,-19.4385 -52.24756,-37.62016 -16.78007,-26.14946 -24.3114,-62.90261 -24.32214,-118.69282 -0.0129,-66.9279 9.87082,-104.020609 34.95564,-131.185517 11.48468,-12.437011 21.5433,-18.838934 37.30911,-23.745809 13.8716,-4.317323 38.89165,-4.60793 54.26264,-0.630255 35.36819,9.152511 59.62952,40.96431 70.28468,92.158211 3.74795,18.0075 5.36057,80.44329 2.72153,105.36883 -6.88364,65.01493 -31.83287,102.85216 -75.28112,114.16897 -12.50815,3.25796 -34.66589,3.34093 -47.68278,0.17858 z M 216,328.04735 c 19.90951,-6.43005 35.6255,-27.23126 41.55812,-55.00504 5.14304,-24.07729 7.2635,-67.9449 4.89102,-101.18417 -3.40139,-47.65466 -10.47467,-69.05748 -28.04226,-84.852257 -21.47364,-19.306642 -50.85858,-18.763028 -70.93387,1.312258 -10.9745,10.974495 -15.80865,21.895169 -21.75097,49.136779 -3.28055,15.03916 -3.83468,24.06633 -3.9067,63.64306 -0.12617,69.32152 5.0892,92.28608 25.62658,112.84038 16.39075,16.40427 32.26041,20.66441 52.55808,14.10899 z";

var digitH = "m 106.53335,354.43 c 0.0327,-1.22648 3.95043,-20.89477 8.70605,-43.70731 l 8.64657,-41.47736 H 106.26006 88.63415 v -15.16376 -15.16376 h 20.48169 c 19.77057,0 20.51455,-0.13933 21.42801,-4.01394 4.93098,-20.91544 14.54246,-70.95318 13.7762,-71.71944 -0.53758,-0.53758 -13.28683,-0.97742 -28.33166,-0.97742 H 88.63415 v -14.27178 -14.27178 h 31.09929 c 28.09308,0 31.18455,-0.30178 31.98126,-3.12195 0.48508,-1.71707 4.68591,-21.78676 9.33518,-44.599302 l 8.45322,-41.477352 h 14.65485 14.65485 l -8.64657,41.477352 c -4.75562,22.812542 -8.67334,42.882232 -8.70606,44.599302 -0.0545,2.86293 2.67878,3.12195 32.94401,3.12195 18.15192,0 33.00349,-0.28689 33.00349,-0.63753 0,-0.35065 3.13928,-15.80431 6.97617,-34.341471 3.8369,-18.537156 7.90775,-38.319951 9.04634,-43.961763 l 2.07018,-10.25784 h 14.71459 14.7146 l -8.53918,41.477352 c -4.69654,22.812542 -8.56526,42.882232 -8.59718,44.599302 -0.0514,2.76903 1.95873,3.12195 17.78172,3.12195 h 17.83973 v 14.27178 14.27178 h -20.41039 c -11.61869,0 -20.88311,0.76485 -21.5078,1.77563 -1.26052,2.03957 -15.16892,68.33931 -15.16892,72.3085 0,2.20346 4.59889,2.62667 28.54355,2.62667 h 28.54356 v 15.16376 15.16376 h -32.07752 c -31.79897,0 -32.08563,0.0348 -33.01331,4.01394 -0.51469,2.20767 -4.18379,20.06969 -8.15355,39.69338 -3.96976,19.6237 -7.66491,37.48572 -8.21144,39.69338 -0.92577,3.73956 -1.95602,4.01394 -15.07208,4.01394 -11.14262,0 -14.07838,-0.54222 -14.07838,-2.60025 0,-1.43014 3.61255,-19.97231 8.02788,-41.20483 4.41533,-21.23251 8.02787,-39.7307 8.02787,-41.10707 0,-2.05715 -5.87315,-2.50249 -33.00348,-2.50249 -18.15192,0 -33.00349,0.38179 -33.00349,0.84843 0,0.96898 -15.4987,76.4409 -16.95271,82.55227 -0.8916,3.74754 -1.89993,4.01394 -15.19277,4.01394 -10.23264,0 -14.22106,-0.6273 -14.17831,-2.22997 z M 226,238.1287 c 0,-0.434 3.21115,-16.13465 7.13589,-34.89033 3.92474,-18.75568 7.13589,-35.66052 7.13589,-37.5663 0,-3.30201 -1.50609,-3.46506 -32.00621,-3.46506 -17.60342,0 -32.43574,0.69498 -32.96072,1.54441 -1.12738,1.82415 -15.31182,69.21293 -15.31182,72.74488 0,1.95211 6.39768,2.42151 33.00349,2.42151 18.15191,0 33.00348,-0.3551 33.00348,-0.78911 z";

// Auto Audio speaker
var AutAudSpkr = "M52.546307 96.563052C50.574302 94.844602 45.153635 89.605852 40.500381 84.921382C40.500381 84.921382 32.039916 76.404164 32.039916 76.404164C32.039916 76.404164 22.733247 76.404164 22.733247 76.404164C10.032796 76.404164 11.125427 77.955252 11.125427 59.925843C11.125427 42.0607 10.031272 43.595831 22.764529 43.595831C22.764529 43.595831 31.954168 43.595831 31.954168 43.595831C31.954168 43.595831 42.838755 32.836325 42.838755 32.836325C48.825279 26.918594 54.379592 21.651537 55.181676 21.131753C56.42993 20.322827 56.869207 20.281627 58.231113 20.845747C59.193979 21.244579 59.97627 22.052941 60.212366 22.893028C60.71812 24.692615 60.72379 95.288012 60.218366 97.083232C59.876336 98.297992 57.957761 99.687493 56.622491 99.687493C56.352616 99.687493 54.518352 98.281492 52.546349 96.563052C52.546349 96.563052 52.546307 96.563052 52.546307 96.563052";

// Auto Audio on waves
var AutAudOn1 = "M73.08867635 74.5106609363C71.8965220734 73.3185066596 71.6956953884 70.8791224404 72.691801355 69.6899394345C73.0556034338 69.2556206067 74.4780854367 68.008676414 75.8528710027 66.9189529278C78.7182396749 64.6477193522 79.744129787 62.0096806771 79.1438113779 58.4564218052C78.7791943825 56.2982790824 77.7649353536 55.0285092859 73.7245468212 51.671949599C71.7071994716 49.9960338076 71.4398750583 47.5844652338 73.08867635 45.9356612963C74.5657683523 44.4585719399 76.7021252837 44.6156127296 79.5302803105 46.4091754987C84.3041467504 49.4366702522 86.8237685103 54.2088777546 86.8237685103 60.2231611163C86.8237685103 66.2374471238 84.3041467504 71.0096519804 79.5302803105 74.0371493797C76.7021252837 75.8307121488 74.5657683523 75.9877529385 73.08867635 74.5106609363C73.08867635 74.5106609363 73.08867635 74.5106609363 73.08867635 74.5106609363";

var AutAudOn2 = "M79.5309179564 89.69009762C77.2187745063 87.2289329011 77.9946174966 85.7330581282 83.4448409487 82.1438053401C88.7394788195 78.6570177382 91.1574450182 75.9962222509 93.5070614053 71.0710776463C99.366150769 58.7895507385 94.8467155967 44.7067511034 82.8786511434 37.9523937719C78.3733711793 35.4097717831 77.2616634641 33.0484846253 79.4592926031 30.6896104675C80.9783819173 29.0590574881 83.211393785 29.2248427568 87.0247301328 31.2512864813C94.1326131266 35.0284886837 101.040420852 44.1682129019 102.968130015 52.346010028C103.987651607 56.6710611194 103.987651607 63.775263759 102.968130015 68.1003148504C101.026292102 76.3380586216 94.1918295217 85.377944966 87.0198088829 89.1950357513C83.168364598 91.2448474755 81.1188174572 91.3803353071 79.5309179564 89.69009762C79.5309179564 89.69009762 79.5309179564 89.69009762 79.5309179564 89.69009762";

// Auto Audio off cross
var AutAudOff1 = "M 88.893387,62.509705 C 72.877577,46.493899 71.818667,45.318212 71.818667,43.551946 c 0,-2.446633 1.76836,-4.184194 4.25835,-4.184194 1.66892,0 3.13007,1.321183 18.8836,17.074713 15.468933,15.468922 17.074723,17.23786 17.074723,18.80947 0,1.136284 -0.4481,2.182849 -1.29887,3.033619 -0.85077,0.850771 -1.89733,1.298864 -3.03362,1.298864 -1.57161,0 -3.34054,-1.605791 -18.809463,-17.074713 z";

var AutAudOff2 = "m 73.071277,78.285554 c -1.47634,-1.476335 -1.63229,-2.880738 -0.54912,-4.945123 0.41237,-0.78591 8.25041,-8.751273 17.41789,-17.700805 16.967563,-16.564186 17.486373,-16.974211 20.173243,-15.943167 1.24389,0.477327 2.4779,3.165147 2.11571,4.608256 -0.17144,0.683059 -7.98357,8.900427 -17.360283,18.260817 -15.3988,15.371982 -17.2155,17.018886 -18.77358,17.018886 -1.12593,0 -2.17608,-0.45108 -3.02386,-1.298864 z";

var ButtonIdHead = "P".concat(pno, "BtnImgId");
var MUIL1TCont = "MUIL1TContP".concat(pno);
var	MUIL2TCont = "MUIL2TContP".concat(pno);
var CurrentBtn = P00XBtnSelected;

function MUIUpdP00X(pno, n, ClkSrc) {
	
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
		P00XBtnSelected = n;
		CurrentBtn = P00XBtnSelected;
		
		pnoint = parseInt(pno, 10);
		CrntBtnP00X[pnoint] = n;
	    
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


function SetImgData() {
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







function AudioCntrl(pno, wi, ex, ClkSrc) {
		
	if (PlyAllAudKll == 1 && pno != CrntPlyAllPno) {//exit process here	
		PlyAllAudKll = 0; //reset
	} else {
		// Under these conditions proceed with audio play/pause functions
		if ((PlyAllMde == "Pse" && AutAud == 1 && ClkSrc == "BtnClk") || (PlyAllMde == "Ply" && AutAud == 1) || (PlyAllMde == "Ply" && AutAud == 0) || (ClkSrc == "IAudClk")) {	
			
			// Change Audio file name depending on Ex value
			if (ex == 0) {
			  AudFleCnt = "Aud".concat(L2Selected + "WI");
			} else {
			  AudFleCnt = "Aud".concat(L2Selected + "Ex" + ex);
			}	
		
			OldPlayIcoId = PlayIcoId;
			OldPauseIcoId = PauseIcoId;
		
			if (wi == 'x') {
			//'x' indicates that the user is triggering the play WI button on the MUI
			//Otherwise audio is being triggered from the MUI annotation btns or autoplay
				pnoint = parseInt(pno, 10);
				wi = CrntBtnP00X[pnoint];
			}
		
			pId = window["p".concat(pno)];
			AudioFile = pId[wi][AudFleCnt];
		
			AudFileId = "Ex".concat(ex, "WI", wi);
			PlayIcoId = "P".concat(pno, "Ex", ex, "PlayIco", "WIx");
			PauseIcoId = "P".concat(pno, "Ex", ex, "PauseIco", "WIx");
			
			if (AudStat == 0) {// Audio is off
			// determine play from pause pos or new audio file
				
				if (AudFileId == CurrentAudFileId) {//Same audio requested and audio is off, so play from pause
					AudPlay();
					AudStat = 1; 
					CurrentAudFileId = AudFileId;
				} else {//Different audio requested, so play new file procedure
					AudLoad();// load audio file
					// play new file from start
					if (PlyAllMde == "Ply" && AutAud == 0) {//In case auto audio option is off for play all procedure
						AudStat = 0; 					
						AudDur = document.getElementById("AudObjX").duration;
						CurrentAudFileId = AudFileId;
						setTimeout(function() { PlyAllAudReps(pno) },100);
					} else {
						AudPlay();
						AudStat = 1; 
						AudDur = document.getElementById("AudObjX").duration;
					}
					
					CurrentAudFileId = AudFileId;//Set new current audio file variable for comparison on next click
				}

			} else {// Audio is on
			// determine pause or new audio file
				if (AudFileId == CurrentAudFileId) {// pause
					AudPause();
					AudStat = 0;
					CurrentAudFileId = AudFileId;
				} else {// Interrupt current Audio with new audio file
				AudLoad();// load audio file
				AudPlay();// play new file from start
				AudStat = 1;
				CurrentAudFileId = AudFileId;
				// Reset play UI for previous btn
				document.getElementById(OldPlayIcoId).style.display = 'block';
				document.getElementById(OldPauseIcoId).style.display = 'none';
				}
		
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
				if (i < 10) {
					ipnostr = "00".concat(i);
				} else {
					ipnostr = "0".concat(i);
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
				if (i < 10) {
					ipnostr = "00".concat(i);
				} else {
					ipnostr = "0".concat(i);
				}
				AutAudDSl1P00X = "AutAudDSl1P".concat(ipnostr);
				AutAudDSl2P00X = "AutAudDSl2P".concat(ipnostr);
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

function PlyAllAudReps(pno) {
 
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
	pno = PlyAllPno;
	PlyAllAudReps(pno);
  } 
   
}
	
