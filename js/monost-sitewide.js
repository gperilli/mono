
// Set Button Positions etc.
function SetAnnotations() {

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

//Header Template
function sitewidetemps() {

centralcolumnhead = `
<div id="CentralColumn" class="centralcolumn" align=left style="border: 0px solid blue;">
<audio id="AudObjX" onended="resetAudObjX()"></audio>
`;

centralcolumntail = `
<!-- End central column -->
</div>
`;

HeaderTemp = `

<div class="row" style="background-color: #fff;">
	 <div class="headercontainer" style="background-color: #fff; z-index: 99; position: relative;">
			<a href="index.html"><img border="0" src="graphics/monostttle.png" height="100%"/></a>
	 </div>

		<a class="topnav" style="float: right; margin-right: 20px;" id="menu-home" href="index.html">Home</a>
		<a class="topnav" style="float: right; margin-right: 20px;" id="menu-gallery" href="gallery.html">Gallery</a>
		 
	 
	 <div class="headercnt" style="border: 0px solid #000">
			<p id="Header"></p>
	 </div>
	 
	 

	<!-- Start Acc. -->
	<div class="BrgrExpdr" id="AccExsWIx" style="border: 0px solid #000; background-color: transparent;">
		<!-- Exp. Btn -->
		<div class="AccBtnCont" style="border: 0px solid #000; z-index: 10;" align=right>
			<div class="BrgrBtnCnt" style="border: 0px solid #000; cursor: pointer;" align=left>
				<!-- Button SVG Elements -->
				<div class="" id="ACCWIx" style="z-index: 0;">
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
		<a style="" id="menu-home" href="index.html">home</a><br>
		</div>
		
		<div style="border-top: 1px solid #ddd; border-bottom: 0px solid #ccc; padding-top: 5px; padding-bottom: 5px; margin-left: 5px;">
		<a id="menu-gallery" href="gallery.html">about</a><br>
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
		
		<p style="width: 100%; margin-bottom: 10px;">Language Select</p>
		
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
   <div class="SocialBtnContainer-TextImgClass"  onclick="window.open('https://twitter.com/home?status='+encodeURIComponent('${ShareAdr}'),'twitter-share-dialog','width=626,height=436'); return false;">
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
    <br><br>
  <div id="CCCont" style="display: inline;">
    <p id="CCContp" style="display: inline;"></p>
    <a id="CCContTa" rel="license" style="display: inline;"><p id="CCContTap" style="display: inline; color: blue;"></p></a>
    <p id="CCContp2" style="display: inline;"></p>
    <br/>
    <div>
      <a rel="license" id="CCContIa">
        <img id="CCConti">
      </a>
    </div>
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
			<p style="display: inline;">Source image. This work is <span id="imgsrccr"></span>:</p>
			<a id="ImgAttrLnkCnt" target="_blank" class="ImgAttrLnk" href="" style="display: inline;"></a>
		</div>

      </div>

      <div class="column" style="width: 100%;">

        <img class="modal-content wht" id="modalimg">
        <div id="caption" style="background-color: #fff; margin-top: 10px; border-radius: 5px; padding: 3px;">
          <p style="display: inline;">By G. Perilli.</p>
          <p id="CCContpModal" style="display: inline;"></p>
          <a id="CCContTaModal" target="_blank"  rel="license" style="display: inline;"><p id="CCContTapModal" style="display: inline; color: blue;"></p></a>
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

digit9 = "m 166.46731,358.09605 c -21.53318,-6.0256 -36.57465,-16.62247 -47.22363,-33.26952 -6.25405,-9.77664 -13.69582,-29.20004 -13.69582,-35.74676 0,-3.95652 2.16222,-4.56708 23.30153,-6.57993 l 11.30225,-1.07618 2.17062,8.62032 c 7.0379,27.94998 28.1759,43.34153 56.05173,40.81384 14.35931,-1.30205 32.32345,-10.16224 41.17163,-20.30646 14.51487,-16.64088 24.73939,-48.59744 26.11117,-81.60992 l 0.84382,-20.30648 -8.44758,9.49028 c -10.15757,11.41134 -23.97699,20.80467 -38.97345,26.49108 -14.89452,5.64774 -39.03459,5.71993 -56.58958,0.16928 -13.57826,-4.29338 -30.76782,-15.93315 -40.05148,-27.1206 -8.33458,-10.04375 -18.05892,-30.10157 -20.65392,-42.60168 -3.375737,-16.2608 -1.38088,-54.20347 3.57306,-67.96079 14.0809,-39.103315 49.05206,-63.688524 90.59357,-63.688524 53.01277,0 90.77749,33.587639 102.74344,91.379184 3.80913,18.39674 5.35569,75.21758 2.72988,100.29547 -6.8786,65.69445 -31.40581,105.02992 -75.10832,120.45485 -14.7507,5.2063 -45.65512,6.52437 -59.84892,2.55254 z m 52.89813,-143.90476 c 25.00002,-7.4242 40.18714,-29.27272 42.60926,-61.2985 1.84613,-24.41026 -4.58351,-45.81833 -18.19643,-60.586614 -26.4267,-28.669583 -69.89435,-24.552854 -92.71598,8.780944 -8.85131,12.92842 -12.27726,23.32136 -13.54506,41.09025 -2.54611,35.68511 14.94409,63.72928 45.55253,73.03995 7.85968,2.39081 26.57109,1.86186 36.29568,-1.02603 z";

digit8 = "m 173.4216,357.85439 c -27.63349,-5.99601 -54.31184,-25.96967 -65.53331,-49.06377 -16.39434,-33.73997 -11.85335,-74.95142 10.94425,-99.32391 7.88321,-8.42778 27.42723,-20.39198 33.31117,-20.39198 5.9722,0 3.5309,-3.69646 -5.29228,-8.01324 -12.81432,-6.26945 -24.7581,-18.24441 -30.66046,-30.74043 -6.58446,-13.94015 -6.75386,-39.73309 -0.36777,-55.996616 8.07932,-20.57572 25.26277,-37.015714 47.69133,-45.627939 13.08974,-5.026254 44.20637,-6.92879 59.93125,-3.66432 25.11933,5.21475 47.56127,22.510469 58.74514,45.274139 5.9894,12.190856 6.32754,13.916606 6.32754,32.294726 0,17.49562 -0.50732,20.44867 -5.12985,29.86168 -5.90103,12.01641 -15.6452,21.53503 -28.94404,28.27407 -5.11134,2.59011 -9.29333,4.99651 -9.29333,5.34757 0,0.35106 5.26669,3.23107 11.70374,6.40001 29.55607,14.55042 45.50407,40.72397 45.50407,74.6804 0,44.39145 -30.60028,81.3791 -75.13257,90.81538 -15.53004,3.29077 -38.30456,3.23755 -53.80488,-0.12586 z m 55.88163,-32.86153 c 12.53903,-5.78235 24.37317,-17.69279 30.24784,-30.44282 4.02209,-8.72933 4.82246,-13.15937 4.89285,-27.08193 0.0766,-15.14942 -0.45648,-17.74381 -5.93131,-28.86667 -7.02578,-14.27385 -17.07083,-24.04705 -31.59403,-30.73898 -8.66934,-3.99461 -13.09671,-4.78931 -26.97996,-4.84284 -14.14303,-0.0545 -18.14843,0.65493 -26.97997,4.77881 -14.04218,6.55699 -24.47622,16.42104 -30.63424,28.96079 -4.57113,9.3083 -5.12985,12.45597 -5.12985,28.90016 0,16.01305 0.63228,19.79674 4.77992,28.60391 8.847,18.78589 20.27127,28.40134 40.47745,34.06862 13.76846,3.86167 34.42967,2.38917 46.8513,-3.33905 z M 215.95183,170.5606 c 11.65129,-3.23609 23.78493,-12.90241 29.86709,-23.79377 4.62031,-8.2736 5.59929,-12.12077 5.6352,-22.14495 0.0562,-15.67283 -3.16532,-24.653049 -12.46166,-34.738376 -11.99014,-13.00777 -19.53135,-16.12063 -39.05384,-16.12063 -19.01967,0 -26.5436,2.96248 -38.20223,15.04182 -8.89597,9.216987 -12.72887,18.768996 -12.79158,31.877916 -0.0774,16.18537 2.99158,24.66731 12.75305,35.24632 13.17907,14.28285 34.65599,20.07493 54.25397,14.63167 z";

digit7 = "m 140.98091,351.34224 c 0.0168,-13.58986 4.97377,-43.867 11.57509,-70.70154 15.97709,-64.94729 46.39458,-128.96012 86.18299,-181.369964 L 253.59895,79.69701 H 174.36871 95.138484 V 61.555505 43.413996 H 199.21345 303.28843 v 14.364911 c 0,13.999171 -0.18734,14.570462 -7.36051,22.438187 -21.44234,23.518736 -48.59975,66.365736 -68.98288,108.836196 -27.15358,56.57743 -38.83097,96.98804 -46.89641,162.28895 l -1.12034,9.07076 h -18.97931 -18.97932 l 0.0112,-9.07076 z";

digit6 = "M 175.74827,357.67012 C 142.20336,349.55065 114.73048,321.82093 103.73678,284.98535 94.986776,255.66754 92.383876,195.43915 98.168426,156.13951 108.93161,83.015553 146.47661,43.413998 205.03996,43.413998 c 28.92539,0 48.94394,7.634731 65.26368,24.890453 10.66124,11.272692 17.65882,24.334472 21.224,39.616999 2.36744,10.14833 2.3268,11.11238 -0.47419,11.24645 -1.68497,0.0806 -9.90685,0.71581 -18.27085,1.41148 l -15.20727,1.26484 -3.75124,-11.2725 c -8.23361,-24.741997 -25.69318,-37.615031 -51.05373,-37.642165 -29.2521,-0.03132 -54.43881,24.307968 -64.93809,62.753175 -3.79722,13.90426 -8.51143,56.71617 -6.47006,58.75755 0.60746,0.60746 2.28845,-0.55389 3.73553,-2.58077 6.76774,-9.47946 21.10372,-22.05107 30.70913,-26.92968 26.85579,-13.64012 54.21117,-14.30462 80.69121,-1.9601 14.61323,6.81243 35.33077,27.93071 42.5636,43.3869 24.0215,51.33277 3.65329,120.67674 -42.28341,143.95462 -19.53429,9.89877 -48.24689,12.87347 -71.03,7.35887 z m 49.00532,-32.22828 c 16.55359,-8.27804 28.82455,-23.88085 33.99036,-43.21955 3.35354,-12.55426 3.1571,-38.56899 -0.3839,-50.8385 -3.88745,-13.46998 -14.09248,-28.06589 -24.39327,-34.88884 -23.64225,-15.65998 -57.87381,-12.14364 -77.46254,7.95711 -12.72781,13.0605 -17.5936,25.10471 -18.46538,45.70711 -1.7053,40.29993 17.66026,70.86044 50.26078,79.31587 9.11219,2.3634 27.79648,0.2962 36.45395,-4.0332 z";

digit5 = "m 168.94319,357.50038 c -36.2159,-7.8427 -64.36078,-35.59431 -71.68144,-70.67989 -1.42482,-6.82864 -1.59203,-11.38468 -0.45645,-12.43693 0.98565,-0.91329 9.8143,-2.21966 19.61924,-2.90303 l 17.82716,-1.24248 2.32857,9.80273 c 4.89951,20.62576 18.05941,37.54708 34.99137,44.99271 12.37523,5.44186 33.42823,5.8781 47.57322,0.98575 20.31323,-7.02576 38.98274,-30.76157 43.58285,-55.40981 7.21847,-38.67801 -7.21922,-72.1779 -37.13926,-86.17451 -9.34397,-4.37112 -13.05416,-5.00017 -29.54284,-5.00896 -17.75081,-0.009 -19.59598,0.36511 -31.45832,6.38612 -6.93081,3.51789 -16.04953,10.13686 -20.26382,14.70884 l -7.66235,8.31267 -13.1038,-1.31597 c -7.20709,-0.72378 -14.97323,-1.85579 -17.25809,-2.51556 l -4.15428,-1.1996 15.07987,-80.19424 15.07988,-80.194223 h 78.34767 78.34768 v 17.82094 17.820939 h -63.50637 -63.50637 l -8.54021,42.676464 c -4.69711,23.47205 -8.29803,42.92708 -8.00205,43.23343 0.29599,0.30632 5.9152,-2.37331 12.48713,-5.95476 19.0005,-10.35454 30.96785,-13.01726 54.01241,-12.01769 27.57288,1.19598 44.85965,8.85699 64.09288,28.40418 30.29589,30.79042 36.80496,83.52891 15.62201,126.57444 -22.03333,44.77354 -70.69674,66.79346 -122.71629,55.52844 z";

digit4 = "M 225.63619,322.89833 V 285.38365 H 157.1719 88.707623 l 0.0428,-18.2884 0.0428,-18.28841 L 161.153,146.11042 233.51278,43.414 h 14.81901 14.81901 v 103.16535 103.16536 h 21.57094 21.57094 v 17.81947 17.81947 H 284.72174 263.1508 v 37.51468 37.51467 h -18.75734 -18.75733 z m 0,-145.74451 c 0,-40.17103 -0.71425,-71.79506 -1.59928,-70.80895 -0.8796,0.98006 -20.84734,29.63659 -44.37274,63.68115 -23.52541,34.04458 -45.6678,65.9086 -49.20529,70.80896 l -6.43183,8.90973 h 50.80457 50.80457 z";

digit3 = "m 173.83716,359.45692 c -18.66018,-2.9667 -40.72659,-15.27459 -54.14712,-30.20144 -12.54222,-13.94997 -23.357256,-37.46217 -23.357256,-50.77931 0,-4.35004 1.69981,-4.85216 24.912116,-7.35898 l 11.07205,-1.19575 4.20831,13.47979 c 9.9409,31.84202 28.45628,46.88499 57.61067,46.80621 18.87657,-0.0509 30.75866,-4.4471 43.50372,-16.09538 12.13935,-11.09468 18.27787,-22.34007 21.12761,-38.70447 5.15035,-29.57556 -10.10458,-57.9459 -36.54341,-67.96155 -9.19277,-3.48242 -13.13951,-3.88251 -30.53819,-3.09563 l -19.981,0.90367 1.1639,-9.47298 c 2.47018,-20.10455 1.22861,-18.63983 17.85405,-21.06302 24.52854,-3.57506 42.00178,-13.6186 50.067,-28.77829 5.8138,-10.92782 5.80462,-35.68077 -0.0173,-46.625834 -9.49327,-17.847159 -29.24664,-27.706407 -52.21785,-26.062824 -25.94334,1.856235 -45.58888,20.568374 -50.80921,48.395168 -0.67414,3.59344 -2.17129,6.53523 -3.327,6.53729 -5.47229,0.009 -34.39481,-6.07992 -34.39481,-7.24191 0,-4.29405 6.71947,-22.935104 11.56967,-32.096404 11.06272,-20.895821 33.65768,-38.236081 56.75931,-43.559326 12.11645,-2.791958 38.2133,-2.39756 50.33891,0.760762 39.4862,10.284847 64.13386,39.653402 64.21488,76.514248 0.0551,25.09015 -12.34555,46.7623 -33.75292,58.98855 l -9.00459,5.14273 11.10661,4.04967 c 28.16696,10.2702 45.00697,33.86408 47.4156,66.43221 3.46337,46.82958 -29.08593,89.37712 -77.01763,100.67534 -10.80422,2.54672 -36.47932,3.40987 -47.81614,1.60746 z";

digit2 = "m 89.58885,354.9505 c 0,-9.08544 6.69,-27.66163 14.99891,-41.64758 10.46314,-17.61208 34.70133,-42.26454 77.8164,-79.14641 56.76554,-48.55888 74.07604,-71.84823 75.69209,-101.83532 0.68123,-12.64079 0.13245,-16.68621 -3.36721,-24.82137 -8.17409,-19.001199 -28.08368,-32.149009 -51.18595,-33.801968 -35.32602,-2.527564 -61.4689,17.237938 -67.12098,50.747268 l -2.17961,12.92219 -6.8452,-0.99309 c -3.76485,-0.5462 -12.12302,-1.53321 -18.57371,-2.19334 -13.38172,-1.36943 -13.19184,-0.9572 -8.8754,-19.26663 7.64833,-32.442768 27.80077,-55.331672 58.28661,-66.201255 15.8151,-5.638798 53.26342,-7.118703 70.21955,-2.774978 19.81582,5.076306 31.22816,11.324708 43.8938,24.032434 24.5068,24.58821 31.59249,58.249839 19.35698,91.958319 -9.63325,26.53929 -30.89598,50.38432 -93.27576,104.60387 -34.31549,29.82651 -56.29682,52.07913 -56.29682,56.99163 0,0.67875 35.04478,1.23408 77.87727,1.23408 h 77.87727 V 342.58568 360.413 H 193.73797 89.58885 Z";

digit1 = "m 212.51385,236.61457 c 0,-68.08913 -0.49101,-123.79842 -1.09113,-123.79842 -0.60011,0 -4.60949,2.85695 -8.90973,6.34877 -15.76274,12.79946 -51.27108,33.48609 -64.55957,37.61144 -4.16868,1.29415 -4.22034,1.09606 -4.21593,-16.16673 l 0.004,-17.47694 10.15495,-5.30595 c 29.94812,-15.64787 65.50005,-45.926729 76.91039,-65.503008 L 226,43.413996 h 12.01405 12.01403 V 201.91351 360.413 h -18.75714 -18.75733 z";

digit0 = "m 176.29871,358.09364 c -20.50105,-4.98061 -40.58042,-19.4385 -52.24756,-37.62016 -16.78007,-26.14946 -24.3114,-62.90261 -24.32214,-118.69282 -0.0129,-66.9279 9.87082,-104.020609 34.95564,-131.185517 11.48468,-12.437011 21.5433,-18.838934 37.30911,-23.745809 13.8716,-4.317323 38.89165,-4.60793 54.26264,-0.630255 35.36819,9.152511 59.62952,40.96431 70.28468,92.158211 3.74795,18.0075 5.36057,80.44329 2.72153,105.36883 -6.88364,65.01493 -31.83287,102.85216 -75.28112,114.16897 -12.50815,3.25796 -34.66589,3.34093 -47.68278,0.17858 z M 216,328.04735 c 19.90951,-6.43005 35.6255,-27.23126 41.55812,-55.00504 5.14304,-24.07729 7.2635,-67.9449 4.89102,-101.18417 -3.40139,-47.65466 -10.47467,-69.05748 -28.04226,-84.852257 -21.47364,-19.306642 -50.85858,-18.763028 -70.93387,1.312258 -10.9745,10.974495 -15.80865,21.895169 -21.75097,49.136779 -3.28055,15.03916 -3.83468,24.06633 -3.9067,63.64306 -0.12617,69.32152 5.0892,92.28608 25.62658,112.84038 16.39075,16.40427 32.26041,20.66441 52.55808,14.10899 z";

}


var UItext = {
ENG: {lang: "ENG", 
	//Menu text
	share: "Share", gallery: "Gallery", home: "Home", 
	//Card Type
	GlCrdTTxt: "card type: ", CrdTCLRTxt: "color", CrdTBWTxt: "back and white",
	//Header
	HeadN: "An SVG based visual dictionary, and language learning tool. Currently in English, Japanese, and Italian.", 
	//Footer	
	FootN1: "Designed and coded by G.Perilli. Image data is either original or derived from public domain sources - in both cases the image files have been created or adapted by the author. Where possible all files have been attributed to their source:", 
	FootN2: "Example sentnces are where stated from the Tatoeba corpus licenced under Creative Commons CC-BY.",
	//Site Copyright
	CCText1: "This work is licensed under a", 
	CCText2: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License", 
	CCImagesrc: "https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png", 
	CChref: "http://creativecommons.org/licenses/by-nc-sa/4.0/",
	CCImagealt: "Creative Commons License", 
	//Text for image source attribution in modal
	CCText1b: "This work is licensed under a", 
	CCText1c: "This is a derivative work. Attribution is provided for each individual component. This work is licensed under a", 
	CCText1d: "This is an original work licensed under a", 
	CCText1e: "This is a derivative work licensed under a",  
	},

ITA: {lang: "ITA", 
	//Menu text
	share: "Condividi", gallery: "Galleria", home: "Home", 
	//Card Type
	GlCrdTTxt: "tipo di carta: ", CrdTCLRTxt: "colore", CrdTBWTxt: "bianco e nero",
	//Header
	HeadN: "[ITA]An SVG based visual dictionary, and language learning tool. Currently in English, Japanese, and Italian.", 
	//Footer
	FootN1: "[ITA]Designed and coded by G.Perilli. Image data is either original or derived from public domain sources - in both cases the image files have been created or adapted by the author. Where possible all files have been attributed to their source:", 
	FootN2: "[ITA]Example sentnces are where stated from the Tatoeba corpus licenced under Creative Commons CC-BY.",
	//Site Copyright
	CCText1: "Quest'opera è distribuita con Licenza", 
	CCText2: "Creative Commons Attribuzione - Non commerciale - Condividi allo stesso modo 3.0 Italia",
	CCImagesrc: "https://i.creativecommons.org/l/by-nc-sa/3.0/it/88x31.png", 
	CChref: "http://creativecommons.org/licenses/by-nc-sa/3.0/it/", 
	CCImagealt: "Licenza Creative Commons", 
	//Text for image source attribution in modal
	CCText1b: "[ITA]This work is licensed under a", 
	CCText1c: "[ITA]This is a derivative work. Attribution is provided for each individual component. This work is licensed under a", 
	CCText1d: "[ITA]This is an original work licensed under a", 
	CCText1e: "[ITA]This is a derivative work licensed under a", 
	},

JPN: {lang: "JPN", 
	//Menu text
	share: "シェア", gallery: "ギャラリー", home: "ホーム",
	//Card Type
	GlCrdTTxt: "カードの種類： ", CrdTCLRTxt: "カラー", CrdTBWTxt: "モノクロ",
	//Header
	HeadN: "SVGに基づいた図解辞典・語学学習ツールです。", 
	//Footer
	FootN1: "デザイン・コーディングはG.ペリーリによる。画像データはオリジナルかパブリック・ドメインのもので、どちらの場合も著者が作成または編集したものである。 すべてのファイルは可能なかざり資料元を記して	いる。", 
	FootN2: "例文はCC-BYのクリエイティブ・コモンズ・ライセンスを得た「たとえばコーパス」による。",
	//Site Copyright
	CCText1: "この作品は", 
	CCText2: "クリエイティブ・コモンズ 表示 - 非営利 - 継承 4.0 国際 ライセンス",  
	CCText3: "の下に提供されています。", 
	CCImagesrc: "https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png", 
	CChref: "http://creativecommons.org/licenses/by-nc-sa/4.0/", 
	CCImagealt: "Creative Commons License",
	//Text for image source attribution in modal
	CCText1b: "[JPN]This work is licensed under a", 
	CCText1c: "[JPN]This is a derivative work. Attribution is provided for each individual component. This work is licensed under a", 
	CCText1d: "[JPN]This is an original work licensed under a", 
	CCText1e: "[JPN]This is a derivative work licensed under a", 
	},
};


function MnuCntnt(L1, src) {

	//Gallery index
	//document.getElementById("menu-index").innerHTML = UItext[L1]["index"];
	//Share Section
	if (src == "glr") {
	document.getElementById("menu-shareA").innerHTML = UItext[L1]["share"];
	document.getElementById("menu-shareB").innerHTML = UItext[L1]["share"];
	} 
	
	
	document.getElementById("menu-gallery").innerHTML = UItext[L1]["gallery"];
	document.getElementById("menu-home").innerHTML = UItext[L1]["home"];

}

function HdrFtrTxt(L1) {
	
	document.getElementById('Header').innerHTML = UItext[L1]["HeadN"];
	document.getElementById('Footer1').innerHTML = UItext[L1]["FootN1"];
	document.getElementById('Footer2').innerHTML = UItext[L1]["FootN2"];

	document.getElementById('CCContp').innerHTML = UItext[L1]["CCText1"];
	document.getElementById('CCContTap').innerHTML = UItext[L1]["CCText2"];
	if (L1 == "JPN") {
		document.getElementById('CCContp2').innerHTML = UItext.JPN.CCText3;
		document.getElementById('CCContp2').style.display = "inline-block";
	} else {
		document.getElementById('CCContp2').style.display = "none";
	}
	document.getElementById('CCContTa').href = UItext[L1]["CChref"];
	 //Modal text
	document.getElementById('CCContpModal').innerHTML = UItext[L1]["CCText1b"];
	document.getElementById('CCContTapModal').innerHTML = UItext[L1]["CCText2"];
	document.getElementById('CCContTaModal').href = UItext[L1]["CChref"];
	document.getElementById('CCContIa').href = UItext[L1]["CChref"];
	document.getElementById('CCConti').src = UItext[L1]["CCImagesrc"];
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
	//alert("Social button load");
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


