//Set post object data
function setposter(pId) {
	
	pIdX = pId;
	
	for(var i = 0; i < 9; ++i) {
		//image file names
		pIdX[i]["imgfile"] = "posts/p".concat(pIdX["No"], "/monop", pIdX["No"], "-wi", i, ".svg");
		
		//percent encode Japanese words
		pIdX[i]["jpnLpercen"] = encodeURIComponent(pIdX[i]["WI"]["JPN"]);
		
		//word data for dictionary search
		if (pIdX[i]["WIcmp"]["ENG"] == 1) {
			pIdX[i]["engLhyph"] = pIdX[i]["WI"]["ENG"];
			pIdX[i]["engLperc"] = pIdX[i]["WI"]["ENG"];
			pIdX[i]["engLplus"] = pIdX[i]["WI"]["ENG"];
			pIdX[i]["engForv"] = pIdX[i]["WI"]["ENG"].concat("/#en");
		}
		if (pIdX[i]["WIcmp"]["ITA"] == 1) {
			pIdX[i]["itaLhyph"] = pIdX[i]["WI"]["ITA"];
			pIdX[i]["itaLplus"] = pIdX[i]["WI"]["ITA"];
			pIdX[i]["itaLpercen"] = pIdX[i]["WI"]["ITA"];
			pIdX[i]["itaForv"] = pIdX[i]["WI"]["ITA"].concat("/#it");
		}
		if (pIdX[i]["WIcmp"]["JPN"] == 1) {
			pIdX[i]["jpnLpercen"] = pIdX[i]["WI"]["JPN"];
			pIdX[i]["jpnLgoo"] = pIdX[i]["WI"]["JPN"];
			pIdX[i]["jpnForv"] = pIdX[i]["WI"]["JPN"].concat("/#ja");
		}
		
		//word data for dictionary search compound words
		if (pIdX[i]["WIcmp"]["ENG"] == 2) {
			pIdX[i]["engLhyph"] = pIdX[i]["WIcmp"]["EngCmp1"].concat("-", pIdX[i]["WIcmp"]["EngCmp2"]);
			pIdX[i]["engLperc"] = pIdX[i]["WIcmp"]["EngCmp1"].concat("%20", pIdX[i]["WIcmp"]["EngCmp2"]);
			pIdX[i]["engLplus"] = pIdX[i]["WIcmp"]["EngCmp1"].concat("+", pIdX[i]["WIcmp"]["EngCmp2"]);
			pIdX[i]["engForv"] = pIdX[i]["WIcmp"]["EngCmp1"].concat("_", pIdX[i]["WIcmp"]["EngCmp2"], "/#en");
		}
		
		if (pIdX[i]["WIcmp"]["ITA"] == 2) {
			pIdX[i]["itaLhyph"] = pIdX[i]["WIcmp"]["ItaCmp1"].concat("-", pIdX[i]["WIcmp"]["ItaCmp2"]);
			pIdX[i]["itaLplus"] = pIdX[i]["WIcmp"]["ItaCmp1"].concat("+", pIdX[i]["WIcmp"]["ItaCmp2"]);
			pIdX[i]["itaLpercen"] = pIdX[i]["WIcmp"]["ItaCmp1"].concat("%20", pIdX[i]["WIcmp"]["ItaCmp2"]);
			pIdX[i]["itaForv"] = pIdX[i]["WIcmp"]["ItaCmp1"].concat("_", pIdX[i]["WIcmp"]["ItaCmp2"], "/#it");
		}
		
		//word data for dictionary search compound words
		if (pIdX[i]["WIcmp"]["ENG"] == 3) {
			pIdX[i]["engLhyph"] = pIdX[i]["WIcmp"]["EngCmp1"].concat("-", pIdX[i]["WIcmp"]["EngCmp2"], "-", pIdX[i]["WIcmp"]["EngCmp3"]);
			pIdX[i]["engLperc"] = pIdX[i]["WIcmp"]["EngCmp1"].concat("%20", pIdX[i]["WIcmp"]["EngCmp2"], "%20", pIdX[i]["WIcmp"]["EngCmp3"]);
			pIdX[i]["engLplus"] = pIdX[i]["WIcmp"]["EngCmp1"].concat("+", pIdX[i]["WIcmp"]["EngCmp2"], "+", pIdX[i]["WIcmp"]["EngCmp3"]);
			pIdX[i]["engForv"] = pIdX[i]["WIcmp"]["EngCmp1"].concat("_", pIdX[i]["WIcmp"]["EngCmp2"], "_", pIdX[i]["WIcmp"]["EngCmp3"], "/#it");
		}
		
		if (pIdX[i]["WIcmp"]["ITA"] == 3) {
			pIdX[i]["itaLhyph"] = pIdX[i]["WIcmp"]["ItaCmp1"].concat("-", pIdX[i]["WIcmp"]["ItaCmp2"], "-", pIdX[i]["WIcmp"]["ItaCmp3"]);
			pIdX[i]["itaLplus"] = pIdX[i]["WIcmp"]["ItaCmp1"].concat("+", pIdX[i]["WIcmp"]["ItaCmp2"], "+", pIdX[i]["WIcmp"]["ItaCmp3"]);
			
			pIdX[i]["itaLpercen"] = pIdX[i]["WIcmp"]["ItaCmp1"].concat("%20", pIdX[i]["WIcmp"]["ItaCmp2"], "%20", pIdX[i]["WIcmp"]["ItaCmp3"]);
			//alert(pIdX[i]["itaLpercen"]);
			pIdX[i]["itaForv"] = pIdX[i]["WIcmp"]["ItaCmp1"].concat("_", pIdX[i]["WIcmp"]["ItaCmp2"], "_", pIdX[i]["WIcmp"]["ItaCmp3"], "/#it");
		}
		
	}
	
}

//Generate 8 Btns
function AnnotBtnGen(P00XId1VarHead, P00XId5VarHead, P00XId6VarHead) {
	
	//P015BtnImgId1T
	for(var i = 1; i < 9; ++i) {
	
		var BtnContainerP00XBtnIDX = P00XId1VarHead.concat(i);
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
		  
			<svg class="btnCoff">
				<circle class="" cx="50%" cy="50%" r="40%"/>
				Sorry, your browser does not support inline SVG.
			</svg>
			
			<svg class="btnToff">
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
	
	AnottBtns = BtnTemp1.concat(BtnTemp2, BtnTemp3, BtnTemp4, BtnTemp5, BtnTemp6, BtnTemp7, BtnTemp8);
}

// Set Button Positions etc.
function SetAnnotations(pId) {

    for(var i = 1; i < 9; ++i) {

		var BtnContainerP00XBtnIDX = P00XId1VarHead.concat(i);
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

	}
}


//Header Template
function sitewidetemps() {

centralcolumnhead = `
<div id="CentralColumn" class="centralcolumn" align=left style="border: 0px solid blue;">

`;

centralcolumntail = `
<!-- End central column -->
</div>
`;

//Burger Menu Settings
AccXStat = [];
AccXStat['x'] = 0;

HeaderTemp = `

<div class="row" style="background-color: #fff;">
	 <div class="headercontainer" style="background-color: #fff; z-index: 99; position: relative;">
			<a href="index"><img border="0" src="graphics/monostttle.png" height="100%"/></a>
	 </div>

		<a class="topnav" style="float: right; margin-right: 20px;" id="menu-home" href="index">Home</a>
		
	 <div class="headercnt" style="border: 0px solid #000">
			<p id="Header"></p>
	 </div>
	 
	 

	<!-- Start Acc. -->
	<div class="BrgrExpdr" id="AccExsWIx" style="border: 0px solid #000; background-color: transparent;">
		<!-- Exp. Btn -->
		<div class="AccBtnCont" style="border: 0px solid #000; z-index: 10;" align=right>
			<div class="BrgrBtnCnt" style="border: 0px solid #000; cursor: pointer;" align=left>
				<!-- Button SVG Elements -->
				<div class="" id="ACCWIx" style="z-index: 0;" onclick="brgrfunc('x')">
					<svg class="StretchToContainer" viewbox="0 0 130 130">
						<rect id="BrgrBtn-RectH1" width="80" height="20" x="23" y="22.5" fill="blue"/>
						<rect id="BrgrBtn-RectH2" width="80" height="20" x="23" y="52.5" fill="blue"/>
						<rect id="BrgrBtn-RectH3" width="80" height="20" x="23" y="82.5" fill="blue"/>
						
					</svg>
				</div>
				
			</div>
		</div>
		
		<div align="right" style="z-index: 1; padding-right: 5px;">
		
		<div style="border-top: 0px solid #ccc; border-bottom: 0px solid #ccc; padding-top: 5px; padding-bottom: 5px; margin-left: 5px;">
		<a id="Brgrmenu-home" href="index">Home</a><br>
		</div>
		
		<div style="border-top: 1px solid #ddd; border-bottom: 1px solid #ddd; padding-top: 5px; padding-bottom: 5px; margin-left: 5px;">
				
			<div style="display: inline-block; margin-right: 20px;">
			<p style="display: inline-block; font-weight: bold;">L1:</p>
			</div>
			
			<div class="lngbtnsacccnt" style="width: 58px;">
			<p id="BrgrL1SlENG" class="langbtnsacc" onclick="LSel(1, 'ENG', 'usr')">English</p>
			</div>
				
			<div class="lngbtnsacccnt" style="width: 58px;">
			<p id="BrgrL1SlITA" class="langbtnsacc" onclick="LSel(1, 'ITA', 'usr')">italiano</p>
			</div>
			
			<div class="lngbtnsacccnt" style="margin-right: 0px; width: 50px;">
			<p id="BrgrL1SlJPN" class="langbtnsacc" onclick="LSel(1, 'JPN', 'usr')">日本語</p>
			</div>
				
		</div>	
		
		<div style="border-top: 0px solid #ccc; border-bottom: 1px solid #ddd; padding-top: 5px; padding-bottom: 5px; margin-left: 5px;">
				
			<div style="display: inline-block; margin-right: 20px;">
			<p style="display: inline-block; margin-right: 0px; font-weight: bold;">L2:</p>
			</div>
			
			<div class="lngbtnsacccnt" style="width: 58px;">
			<p id="BrgrL2SlENG" class="langbtnsacc" onclick="LSel(2, 'ENG', 'usr')">English</p>
			</div>
				
			<div class="lngbtnsacccnt" style="width: 58px;">
			<p id="BrgrL2SlITA" class="langbtnsacc" onclick="LSel(2, 'ITA', 'usr')">italiano</p>
			</div>
			
			<div class="lngbtnsacccnt" style="margin-right: 0px; width: 50px;">
			<p id="BrgrL2SlJPN" class="langbtnsacc" onclick="LSel(2, 'JPN', 'usr')">日本語</p>
			</div>
				
		</div>		
	
		</div>
			
	</div>
	<!-- End Acc. -->
	 
</div>
`;

//Column A

ColumnAHead = `
<!--Start columnA-->
<div class="columnA" style="color: #818181;" >

	<div class="sharelikeA">
		
		<p id="LSelectTxt" style="width: 100%; margin-bottom: 10px;">Language Select</p>
		
		<div style="width: 100%; border: 0px solid #808080; position: relative; float: left; height: 130px;">
		
			<div style="width: 47.5%; border-right: 0px solid #808080; border-left: 0px solid #808080; float: left; border-radius: 0px; margin-right: 5%; padding-bottom: 10px;">
						
				<p style="font-weight: bold; border-bottom: 1px solid #808080; width: 70%; margin-bottom: 10px;">L1</p>
				
				<div class="lngbtnscnt"><p id="L1SlENG" class="langbtns" onclick="LSel(1, 'ENG', 'usr')">English</p></div>
				<div class="lngbtnscnt"><p id="L1SlITA" class="langbtns" onclick="LSel(1, 'ITA', 'usr')">italiano</p></div>
				<div class="lngbtnscnt"><p id="L1SlJPN" class="langbtns" onclick="LSel(1, 'JPN', 'usr')">日本語</p></div>
			
			</div>
			
			<div style="width: 47.5%; border-right: 0px solid #808080; border-left: 0px solid #808080; float: right; border-radius: 0px; padding-bottom: 10px;">
			
				<p style="font-weight: bold; border-bottom: 1px solid #808080; width: 70%; margin-bottom: 10px;">L2</p>

				<div class="lngbtnscnt"><p id="L2SlENG" class="langbtns" onclick="LSel(2, 'ENG', 'usr')">English</p></div>
				<div class="lngbtnscnt"><p id="L2SlITA" class="langbtns" onclick="LSel(2, 'ITA', 'usr')">italiano</p></div>
				<div class="lngbtnscnt"><p id="L2SlJPN" class="langbtns" onclick="LSel(2, 'JPN', 'usr')">日本語</p></div>
			
			</div>
		
		</div>
		
		<p id="LDspL1" style="" class="langdsp">Language 1</p>
		<p class="langdsp">-</p>
		<p id="LDspL2" class="langdsp">Language 2</p>

	</div>
	
`;

ShareAdr = 'https://gperilli.github.io/mono/';

ShareHeadA = `
<div class="sharelikeA">
<p id="menu-shareA"></p>
<br>
<img border="0" id="ShareImgCont" src="" style="display: block;" width="100%" data-original-width="1200" data-original-height="630" />

`;



ShareFb = `
<!-- Facebook Share Btn -->
<div class="SocialBtnContainerClass" align=left>
   <!-- Button SVG Elements -->
   <div class="SocialBtnContainer-TextImgClass" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent('${ShareAdr}'),'facebook-share-dialog','width=626,height=436'); return false;">
	  <svg class="StretchToContainer" viewbox="0 0 115 115">
		 <g transform="translate(1,1)">
			<path class="FbBtn-logo" id="BtnTextID-Facebook">
			</path>
		 </g>
	  </svg>
   </div>
   <div class="SocialBtn-CircleContainerClass">
	  <svg class="StretchToContainer">
		 <circle class="SocialBtn-CircleClass" cx="49%" cy="49%" id="BtnCircleID-Facebook" r="40%">
			Sorry, your browser does not support inline SVG.
		 </circle>
	  </svg>
   </div>
</div>
`;


ShareTw = `
<!-- Twitter Share Btn -->
<div class="SocialBtnContainerClass" align=left>
   <!-- Button SVG Elements -->
   <div class="SocialBtnContainer-TextImgClass"  onclick="window.open('http://www.twitter.com/share?url=https://gperilli.github.io/mono/','twitter-share-dialog','width=626,height=436'); return false;">
	  <svg class="StretchToContainer" viewbox="0 0 115 115">
		 <g transform="translate(1,1)">
			<path class="TwBtn-logo" id="BtnTextID-Twitter">
			</path>
		 </g>
	  </svg>
   </div>
   <div class="SocialBtn-CircleContainerClass">
	  <svg class="StretchToContainer">
		 <circle class="SocialBtn-CircleClass" cx="49%" cy="49%" id="BtnCircleID-Twitter" r="40%">
			Sorry, your browser does not support inline SVG.
		 </circle>
	  </svg>
   </div>
</div>
`;


// Auto Audio speaker
AutAudSpkr = "M52.546307 96.563052C50.574302 94.844602 45.153635 89.605852 40.500381 84.921382C40.500381 84.921382 32.039916 76.404164 32.039916 76.404164C32.039916 76.404164 22.733247 76.404164 22.733247 76.404164C10.032796 76.404164 11.125427 77.955252 11.125427 59.925843C11.125427 42.0607 10.031272 43.595831 22.764529 43.595831C22.764529 43.595831 31.954168 43.595831 31.954168 43.595831C31.954168 43.595831 42.838755 32.836325 42.838755 32.836325C48.825279 26.918594 54.379592 21.651537 55.181676 21.131753C56.42993 20.322827 56.869207 20.281627 58.231113 20.845747C59.193979 21.244579 59.97627 22.052941 60.212366 22.893028C60.71812 24.692615 60.72379 95.288012 60.218366 97.083232C59.876336 98.297992 57.957761 99.687493 56.622491 99.687493C56.352616 99.687493 54.518352 98.281492 52.546349 96.563052C52.546349 96.563052 52.546307 96.563052 52.546307 96.563052";

// Auto Audio on waves
AutAudOn1 = "M73.08867635 74.5106609363C71.8965220734 73.3185066596 71.6956953884 70.8791224404 72.691801355 69.6899394345C73.0556034338 69.2556206067 74.4780854367 68.008676414 75.8528710027 66.9189529278C78.7182396749 64.6477193522 79.744129787 62.0096806771 79.1438113779 58.4564218052C78.7791943825 56.2982790824 77.7649353536 55.0285092859 73.7245468212 51.671949599C71.7071994716 49.9960338076 71.4398750583 47.5844652338 73.08867635 45.9356612963C74.5657683523 44.4585719399 76.7021252837 44.6156127296 79.5302803105 46.4091754987C84.3041467504 49.4366702522 86.8237685103 54.2088777546 86.8237685103 60.2231611163C86.8237685103 66.2374471238 84.3041467504 71.0096519804 79.5302803105 74.0371493797C76.7021252837 75.8307121488 74.5657683523 75.9877529385 73.08867635 74.5106609363C73.08867635 74.5106609363 73.08867635 74.5106609363 73.08867635 74.5106609363";

AutAudOn2 = "M79.5309179564 89.69009762C77.2187745063 87.2289329011 77.9946174966 85.7330581282 83.4448409487 82.1438053401C88.7394788195 78.6570177382 91.1574450182 75.9962222509 93.5070614053 71.0710776463C99.366150769 58.7895507385 94.8467155967 44.7067511034 82.8786511434 37.9523937719C78.3733711793 35.4097717831 77.2616634641 33.0484846253 79.4592926031 30.6896104675C80.9783819173 29.0590574881 83.211393785 29.2248427568 87.0247301328 31.2512864813C94.1326131266 35.0284886837 101.040420852 44.1682129019 102.968130015 52.346010028C103.987651607 56.6710611194 103.987651607 63.775263759 102.968130015 68.1003148504C101.026292102 76.3380586216 94.1918295217 85.377944966 87.0198088829 89.1950357513C83.168364598 91.2448474755 81.1188174572 91.3803353071 79.5309179564 89.69009762C79.5309179564 89.69009762 79.5309179564 89.69009762 79.5309179564 89.69009762";

// Auto Audio off cross
AutAudOff1 = "M 88.893387,62.509705 C 72.877577,46.493899 71.818667,45.318212 71.818667,43.551946 c 0,-2.446633 1.76836,-4.184194 4.25835,-4.184194 1.66892,0 3.13007,1.321183 18.8836,17.074713 15.468933,15.468922 17.074723,17.23786 17.074723,18.80947 0,1.136284 -0.4481,2.182849 -1.29887,3.033619 -0.85077,0.850771 -1.89733,1.298864 -3.03362,1.298864 -1.57161,0 -3.34054,-1.605791 -18.809463,-17.074713 z";

AutAudOff2 = "m 73.071277,78.285554 c -1.47634,-1.476335 -1.63229,-2.880738 -0.54912,-4.945123 0.41237,-0.78591 8.25041,-8.751273 17.41789,-17.700805 16.967563,-16.564186 17.486373,-16.974211 20.173243,-15.943167 1.24389,0.477327 2.4779,3.165147 2.11571,4.608256 -0.17144,0.683059 -7.98357,8.900427 -17.360283,18.260817 -15.3988,15.371982 -17.2155,17.018886 -18.77358,17.018886 -1.12593,0 -2.17608,-0.45108 -3.02386,-1.298864 z";


ColumnATail = `
</div>

<!--End columnA-->

`;

ColumnATemp = ColumnAHead.concat(ShareHeadA, ShareFb, ShareTw, ColumnATail);

//Column B elements
ColumnBHead = `
<!--Start columnB-->
<div class="columnB" id="ColumnB">
`;

ColumnBTail = `
<!--End column B-->
</div>
`;

MUICont = `
<section id="MUICont" class="columns">
</section>
`;

//Share Buttons at bottom of Narrow Screen page
ShareHeadB = `
<!-- Social Buttons -->

<section class="columns" id="ShareBtmCont" style="padding-bottom:0px; padding-top:0px;">

<div class="sharelikeB">
<p id="menu-shareB">bla</p>
<br>
`;

ShareBtmTailTemp = `
</section>
`;

ShareBtmTemp = ShareHeadB.concat(ShareFb, ShareTw, ShareBtmTailTemp);

//Footer
AttrTemp = `
<!-- Attributio etc -->
<section class="columns" id="attrchunk" style="border: 0px solid #808080; background-color: #fff; width: 100%; position: relative; z-index: 60; display: inline-block; padding-top: 30px;">
<div class="CopyRight">
    <p id="Footer1"></p>
		<div id="imgattrblk" style="padding-left: 10%; display: none;">
		  <div class="imgattrcol"><img class="" id="attrimg0" src=""></div>
		  <div class="imgattrcol"><img class="" id="attrimg1" src=""></div>
		  <div class="imgattrcol"><img class="" id="attrimg2" src=""></div>
		  <div class="imgattrcol"><img class="" id="attrimg3" src=""></div>
		  <div class="imgattrcol"><img class="" id="attrimg4" src=""></div>
		  <div class="imgattrcol"><img class="" id="attrimg5" src=""></div>
		  <div class="imgattrcol"><img class="" id="attrimg6" src=""></div>
		  <div class="imgattrcol"><img class="" id="attrimg7" src=""></div>
		  <div class="imgattrcol"><img class="" id="attrimg8" src=""></div>
		</div>
		<br><br>
    <p id="Footer2"></p>
    <br>
	<br>
  <div id="CCCont" style="display: inline;">
    <p id="CRCont" style="display: inline;"></p>
  </div>
  
  <div style="width:300px;vertical-align:top;font-family: Arial;font-size:9pt;line-height: normal">
	<a rel="license" href="//responsivevoice.org/">
		
			<img class="lazy" title="ResponsiveVoice Text To Speech" src="https://www.responsivevoice.org/wp-content/uploads/2014/08/120x31.png" style="float:left;padding-right:2px">
		
	</a>
	<span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">
		<a href="//responsivevoice.org/" target="_blank" title="ResponsiveVoice Text To Speech" rel="noopener noreferrer">ResponsiveVoice</a>
	</span> used under 
	<a rel="license nofollow" href="https://creativecommons.org/licenses/by-nc-nd/4.0/" title="Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License">Non-Commercial License</a>
</div>
  
</div>
</section>

<!-- Image Attr. Modal -->

<div id="myModal" class="modal" align="left">

	<span class="close">&times;</span>

<div align="center" style="width: 100%;">
  <div class="modalccolumn" align="left">
    <section class="columns">

      <div class="column" id="imgattrLCol" style="display:block;">

        <img class="modal-content" id="srcimg" style="" src="">
		<div id="caption" style="background-color: #fff; margin-top: 10px; border-radius: 5px; padding: 3px;">
			<p style="display: inline;">Source image. This work is public domain.</p>
			<a id="ImgAttrLnkCnt" target="_blank" class="ImgAttrLnk" href="" style="display: inline;"></a>
		</div>

      </div>

      <div class="column" style="width: 100%;">

        <img class="modal-content wht" id="modalimg">
        <div id="caption" style="background-color: #fff; margin-top: 10px; border-radius: 5px; padding: 3px;">
          <p style="display: inline;">By G. Perilli.</p>
          
		  <p id="CRContMine" style="display: inline;"></p>
        
        </div>

      </div>
    </section>
  </div>
</div>
<!-- End Modal -->
</div>


</div>
</div>

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
		ITA: {WIxLink1UrlHd: "https://www.dict.com/%E3%82%A4%E3%82%BF%E3%83%AA%E3%82%A2%E8%AA%9E-%E6%97%A5%E6%9C%AC%E8%AA%9E/", Link1PDatalkUp: "itaLpercen", WIxLink1Dsp: "block", WIxLink1Label: "dict.com",
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
}

UItext = {
ENG: {lang: "ENG", 
	//Lander text
	LSel: "Language Select", MonoTxt: "Features", LndrVsl1Txt: "- 15 SVG image sets and counting", LndrVsl2Txt: "- simple clickable annotations", LndrVsl3Txt: "- parts of speech, audio playback, dictionary links, and word categories for all word items", CTA: "START STUDYING",
	//Menu text
	share: "Share", home: "Home", 
	//Card Type
	GlCrdTTxt: "card type: ", CrdTCLRTxt: "color", CrdTBWTxt: "back and white", GlMdeTTxt: "mode: ",
	//Header
	HeadN: "An SVG based visual dictionary, and language learning tool. Currently in English, Japanese, and Italian.", 
	//Footer	
	FootN1: "Designed and coded by G.Perilli. Image data is either original or derived from public domain sources - in both cases the image files have been created or adapted by the author. Where possible all files have been attributed to their source.", 
	FootN2: "Example sentnces are where stated from the Tatoeba corpus licenced under Creative Commons CC-BY. Audio is provided by the ResponsiveVoice API.",
	//Site Copyright
	CRText1: '&copy; G. Perilli', 

	//Text for image source attribution in modal
	
	CRTextWI0: 'This is a derivative work. Attribution is provided for each individual component. &copy; G. Perilli', 
	CRTextWIO: 'This is an original work. &copy; G. Perilli', 
	CRTextWID: 'This is a derivative work. &copy; G. Perilli',  
	},

ITA: {lang: "ITA", 
	//Lander text
	LSel: "Selezione Lingua", MonoTxt: "Caratteristiche", LndrVsl1Txt: "- 15 gruppi di imagini SVG", LndrVsl2Txt: "- annotazione semplice cliccabile", LndrVsl3Txt: "- parte del discorso, riproduzione audio, collegamenti ai dizionari, categorie di parole", CTA: "Comincia a Studiare",
	//Menu text
	share: "Condividi", home: "Home", 
	//Card Type
	GlCrdTTxt: "tipo di carta: ", CrdTCLRTxt: "colore", CrdTBWTxt: "bianco e nero", GlMdeTTxt: "modalità : ",
	//Header
	HeadN: "Un dizionario visuale basato su SVG e uno strumento di apprendimento delle lingue. Attualmente in inglese, giapponese e italiano.", 
	//Footer
	FootN1: "Progettato e codificato da G.Perilli. I dati di immagine sono originali o derivati ​​da fonti di dominio pubblico - in entrambi i casi i file di immagine sono stati creati o adattati dall'autore. Ove possibile, tutti i file sono stati attribuiti alla loro fonte.", 
	FootN2: "Le frasi di esempio sono quelle indicate dal corpus Tatoeba concesso in licenza in base alla licenza Creative Commons CC-BY. L&#39;audio è fornito dall&#39;API ResponsiveVoice.",
	//Site Copyright
	CRText1: "&copy; G. Perilli", 
	 
	//Text for image source attribution in modal
	 
	CRTextWI0: "Questo è un opera derivata. L&#39;attribuzione è fornita per ogni singolo componente. &copy; G. Perilli", 
	CRTextWIO: "Questa è un&#39;opera originale. &copy; G. Perilli", 
	CRTextWID: "This is a derivative work. &copy; G. Perilli", 
	},

JPN: {lang: "JPN", 
	//Lander text
	LSel: "言語選択", MonoTxt: "機能", LndrVsl1Txt: "- 15の画像セット", LndrVsl2Txt: "- シンプルな注釈、クリック可能", LndrVsl3Txt: "- 品詞, オーディオ再生, 辞書リンク, 言葉のカテゴリー", CTA: "勉強を始める",
	//Menu text
	share: "シェア", home: "ホーム",
	//Card Type
	GlCrdTTxt: "カードの種類： ", CrdTCLRTxt: "カラー", CrdTBWTxt: "モノクロ", GlMdeTTxt: "モード : ",
	//Header
	HeadN: "SVGに基づいた図解辞典・語学学習ツールです。", 
	//Footer
	FootN1: "デザイン・コーディングはG.ペリーリによる。画像データはオリジナルかパブリック・ドメインのもので、どちらの場合も著者が作成または編集したものである。 すべてのファイルは可能なかざり資料元を記している。", 
	FootN2: "例文はCC-BYのクリエイティブ・コモンズ・ライセンスを得た「たとえばコーパス」による。 オーディオは、ResponsiveVoice APIによって提供されます。",
	//Site Copyright
	CRText1: '&copy; G. Perilli', 
	
	//Text for image source attribution in modal
	
	CRTextWI0: 'これは派生作品です。属性は、個々のコンポーネントごとに提供されます。 &copy; G. Perilli', 
	CRTextWIO: 'Tこれはオリジナル作品です。 &copy; G. Perilli', 
	CRTextWID: 'これは派生作品です。 &copy; G. Perilli', 
	},
}

}



function uitext(L1) {
	//uitext
	document.getElementById("menu-home").innerHTML = UItext[L1]["home"];
	document.getElementById("Brgrmenu-home").innerHTML = UItext[L1]["home"];
	document.getElementById("menu-shareA").innerHTML = UItext[L1]["share"];
	document.getElementById("menu-shareB").innerHTML = UItext[L1]["share"];
	document.getElementById("LSelectTxt").innerHTML = UItext[L1]["LSel"];
	//header and footer
	document.getElementById('Header').innerHTML = UItext[L1]["HeadN"];
	document.getElementById('Footer1').innerHTML = UItext[L1]["FootN1"];
	document.getElementById('Footer2').innerHTML = UItext[L1]["FootN2"];
	document.getElementById('CRCont').innerHTML = UItext[L1]["CRText1"];

}




function brgrfunc(AccId) {
	
	if (AccXStat[AccId] == 0) {
     	document.getElementById('AccExsWIx').className = "BrgrExpdr expand";
		document.getElementById('BrgrBtn-RectH1').style.display = 'none';
        document.getElementById('BrgrBtn-RectH3').style.display = 'none';
		AccXStat[AccId] = 1;
     } else {
    	document.getElementById('AccExsWIx').className = "BrgrExpdr";
		document.getElementById('BrgrBtn-RectH1').style.display = 'block';
        document.getElementById('BrgrBtn-RectH3').style.display = 'block';
        AccXStat[AccId] = 0;
     }
}


function SocialMBtns() {
	
	//Facebook Button Icon Loader
   for(var i = 0; i < 2; ++i) {
      var FbBtnIcon = document.getElementsByClassName("FbBtn-logo");
      FbBtnIcon[i].setAttribute('d', 'M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34 c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z');
    }

    //Twitter Button Icon Loader
    for(var i = 0; i < 2; ++i) {
       var TwBtnIcon = document.getElementsByClassName("TwBtn-logo");
       TwBtnIcon[i].setAttribute('d', 'M90.461,40.316c-2.404,1.066-4.99,1.787-7.702,2.109c2.769-1.659,4.894-4.284,5.897-7.417 c-2.591,1.537-5.462,2.652-8.515,3.253c-2.446-2.605-5.931-4.233-9.79-4.233c-7.404,0-13.409,6.005-13.409,13.409 c0,1.051,0.119,2.074,0.349,3.056c-11.144-0.559-21.025-5.897-27.639-14.012c-1.154,1.98-1.816,4.285-1.816,6.742 c0,4.651,2.369,8.757,5.965,11.161c-2.197-0.069-4.266-0.672-6.073-1.679c-0.001,0.057-0.001,0.114-0.001,0.17 c0,6.497,4.624,11.916,10.757,13.147c-1.124,0.308-2.311,0.471-3.532,0.471c-0.866,0-1.705-0.083-2.523-0.239 c1.706,5.326,6.657,9.203,12.526,9.312c-4.59,3.597-10.371,5.74-16.655,5.74c-1.08,0-2.15-0.063-3.197-0.188 c5.931,3.806,12.981,6.025,20.553,6.025c24.664,0,38.152-20.432,38.152-38.153c0-0.581-0.013-1.16-0.039-1.734 C86.391,45.366,88.664,43.005,90.461,40.316L90.461,40.316z');
     }
}


