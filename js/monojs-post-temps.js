 
function MUITempPrp(pno) {
	// set variables based on pno; post number
	// MUI img ids
	P00XMUIImgCont = "P".concat(pno, "MUIImgCont");
	P00XMUIBtnsCont = "P".concat(pno, "MUIBtnsCont");

	// MUI Btn0 Temp Placeholders
	P00XBtnImgId0T = "P".concat(pno, "BtnImgId0T");
	// MUI Btn1-8 Temp Placeholder Heads
	P00XId1VarHead = "BtnContainer".concat("P", pno, "BtnID");
	P00XId24VarHead = "P".concat(pno, "BtnImgId");
	P00XId3VarHead = "P".concat(pno, "DigitPath");
	P00XId5VarHead = "AnnotDivLn-p".concat(pno, "-ID");
	P00XId6VarHead = "AnnotDivLnPos-P".concat(pno, "-ID");

	// MUI Text Box Temp Placeholders
	MUITContP00X = "MUITContP".concat(pno);
	// MUI L2 word item text id
	MUIL2TContP00X = "MUIL2TContP".concat(pno);
	// MUI L2 word parts of speech text ids
	P00XL2POfSp1WIx = "P".concat(pno, "L2POfSp1WIx");
	P00XL2POfSp2WIx = "P".concat(pno, "L2POfSp2WIx");
	P00XL2POfSp3WIx = "P".concat(pno, "L2POfSp3WIx");
	// MUI L1 word item text id
	MUIL1TContP00X = "MUIL1TContP".concat(pno);
	// MUI external dictionary link ids
	MUILink1ContP00X = "MUILink1ContP".concat(pno);
	MUILink2ContP00X = "MUILink2ContP".concat(pno);
	MUILink3ContP00X = "MUILink3ContP".concat(pno);
	MUILink4ContP00X = "MUILink4ContP".concat(pno);
	MUILink5ContP00X = "MUILink5ContP".concat(pno);
	MUILink6ContP00X = "MUILink6ContP".concat(pno);
}

function MUITempSet(pno, type) {
	
	MUITempPrp(pno);
	
	//Word Item Images
	if (type == "HLight") {
		//Load in blank 1024x768 box MUI Image
		P00XMUIImgSrc = "graphics/HlightBox.svg";
	} else {
		//Load in MUI Image
		P00XMUIImgSrc = pId[0].imgfile;
	}
	
	P00XMUIImgCls = "WIPic ".concat(pId[0].imgbckg, "bckhv");
	
	var MUIHeadTemp = `
	<div class="column" style="z-index: 99; background-color: #fff;">
	  <div class="img-overlay-wrap">
	  <img id=${P00XMUIImgCont} src=${P00XMUIImgSrc} class="${P00XMUIImgCls}" width="100%">
		<svg viewBox="0 0 1024 768" width="100%">
		  <!-- Buttons Loaded here -->
	`;

	for(var i = 1; i < 9; ++i) {//generate 8 buttons
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
	
	// Auto Audio Button
	var AudBtnTemp = `
	<svg id="AudBtnPos" x="1%" y="86%">
		<svg class="AAbutton" width="9%" height="12%" onClick="AutAudSet(1)">
			<rect class="AAbuttonR"  x="0" y="0" height="100%" width="100%" rx="10" ry="10" style="fill: #ccc; opacity: 0.5;"/>
			<svg x="0%" y="0%" width="100%" height="100%" viewBox="0 0 120 120" style="">
				<path style="fill:blue;" d="M52.546307 96.563052C50.574302 94.844602 45.153635 89.605852 40.500381 84.921382C40.500381 84.921382 32.039916 76.404164 32.039916 76.404164C32.039916 76.404164 22.733247 76.404164 22.733247 76.404164C10.032796 76.404164 11.125427 77.955252 11.125427 59.925843C11.125427 42.0607 10.031272 43.595831 22.764529 43.595831C22.764529 43.595831 31.954168 43.595831 31.954168 43.595831C31.954168 43.595831 42.838755 32.836325 42.838755 32.836325C48.825279 26.918594 54.379592 21.651537 55.181676 21.131753C56.42993 20.322827 56.869207 20.281627 58.231113 20.845747C59.193979 21.244579 59.97627 22.052941 60.212366 22.893028C60.71812 24.692615 60.72379 95.288012 60.218366 97.083232C59.876336 98.297992 57.957761 99.687493 56.622491 99.687493C56.352616 99.687493 54.518352 98.281492 52.546349 96.563052C52.546349 96.563052 52.546307 96.563052 52.546307 96.563052" />
				<path id="AutAudDSl1" style="fill:blue;" d="" />			   
				<path id="AutAudDSl2" style="fill:blue;" d="" />
			</svg>
		</svg>
	</svg>
	`;
	
	// PLay All Button
	var PlyAlBtnTemp = `
	<svg id="AudBtnPos" x="11%" y="86%">
	  <svg class="AAbutton" width="9%" height="12%" onClick="PlyAllAud()">
		<rect class="AAbuttonR"  x="0" y="0" height="100%" width="100%" rx="10" ry="10" style="fill: #ccc; opacity: 0.5;"/>
		<svg id="PlyAllIcoOff" x="20%" y="15%" width="100%" height="100%" viewBox="0 0 300 300" style="">
			<path style="fill:blue;" d="m 35.514374,174.65227 -0.08473,-74.652722 -0.08473,-74.652718 64.693518,37.252981 64.69352,37.25298 -64.60879,37.399739 z" />
		</svg>
		<g id="PlyAllIcoOn" style="display: none;">
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
	
	// MUI box
	var MUITBoxTemp = `
	<div id=${MUITContP00X} class="column" style="background-color: #fff; z-index: 99;">
		
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
			<div class="icon baseline" onClick="AudioCntrl('x', 0, 'IAudClk')">
				<svg class="Container" viewBox="0 0 300 300">
					<g x="20%" y="15%" id="Ex0PlayIcoWIx">
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
		//Annotated images will load in transparent box with 8 buttons
		var Btn0bTemp = `		
			<rect width="1024" height="768" fill="transparent" id=${P00XBtnImgId0T} onClick="MUIUpdP00X('${pno}', 0, 'BtnClk')"/>
		`;
		MUIXtemp = MUIHeadTemp.concat(Btn0bTemp, AudBtnTemp, PlyAlBtnTemp, BtnTemp1, BtnTemp2, BtnTemp3, BtnTemp4, BtnTemp5, BtnTemp6, BtnTemp7, BtnTemp8, MUITailTemp, MUITBoxTemp)
	}
}

function WILstTempPrp() {
	// word item section id heads
	WIImgContHead = "WIImgCont";
	L2WordItemHead = "L2WordItem";
	L1WordItemHead = "L1WordItem";
	L2WordItemRHead = "L2WordItemR";
	L2POfSp1WIHead = "L2POfSp1WI";
	L2POfSp2WIHead = "L2POfSp2WI";
	L2POfSp3WIHead = "L2POfSp3WI";
	L2AudBtnWIHead = "L2AudBtnWI";
	PlayIcoWIHead = "Ex0PlayIcoWI";
	PauseIcoWIHead = "Ex0PauseIcoWI";
	// external link id heads
	Link1WIHead = "Link1WI";
	Link2WIHead = "Link2WI";
	Link3WIHead = "Link3WI";
	Link4WIHead = "Link4WI";
	Link5WIHead = "Link5WI";
	Link6WIHead = "Link6WI";
	// "semantic" tag id heads
	SemTag1Head = "SemTag1WI";
	SemTag2Head = "SemTag2WI";
	SemTag3Head = "SemTag3WI";
	// accordion id heads
	AccExsWIHead = "AccExsWI";
	ACCWIHead = "ACCWI";
	AccBtnLnVWIHead = "AccBtnLnVWI";
	// example sentences id heads
	Ex1L2WIHead = "Ex1L2WI";
	L2Ex1AudBtnWIHead = "L2Ex1AudBtnWI";
	Ex1PlayIcoWIHead = "Ex1PlayIcoWI";
	Ex1PauseIcoWIHead = "Ex1PauseIcoWI";
	Ex1L1WIHead = "Ex1L1WI";
	Ex1L1TatSrcWIHead = "Ex1L1TatSrcWI";

	Ex2L2WIHead = "Ex2L2WI";
	L2Ex2AudBtnWIHead = "L2Ex2AudBtnWI";
	Ex2PlayIcoWIHead = "Ex2PlayIcoWI";
	Ex2PauseIcoWIHead = "Ex2PauseIcoWI";
	Ex2L1WIHead = "Ex2L1WI";
	Ex2L1TatSrcWIHead = "Ex2L1TatSrcWI";

	Ex3L2WIHead = "Ex3L2WI";
	L2Ex3AudBtnWIHead = "L2Ex3AudBtnWI";
	Ex3PlayIcoWIHead = "Ex3PlayIcoWI";
	Ex3PauseIcoWIHead = "Ex3PauseIcoWI";
	Ex3L1WIHead = "Ex3L1WI";
	Ex3L1TatSrcWIHead = "Ex3L1TatSrcWI";
}

function WIListTempSet() {
	WILstTempPrp();

	WIListCont = `
	<section id="WIListCont" class="columns" style="padding-bottom: 0px; border-top: 1px solid #808080;">
	</section>
	`;

	for(var i = 0; i < 9; ++i) {//generate 8 word item sections
		var WIImgContX = WIImgContHead.concat(i);
		
		var WIImgSrcX = pId[i].imgfile;
		var WIImgClsX = "WIPic ".concat(pId[i]["imgbckg"], "bckhv");
		
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
				<img id=${WIImgContX} class="${WIImgClsX}" src=${WIImgSrcX} />
				<p id=${SemTag1WIX} class="SemTags">tag1</p>
				<p id=${SemTag2WIX} class="SemTags">tag2</p>
				<p id=${SemTag3WIX} class="SemTags">tag3</p>
			</div>
			<div class="WIcolumn right">
			<div class="L2WICont">
				<h3 class="L2WordItem" id=${L2WordItemX} ></h3>
				<br>
				<div align="center">
				<p id=${L2WordItemRX} align="center"></p>
				</div>
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
					<div class="icon baseline" onClick="AudioCntrl(${i}, 0, 'IAudClk')">
						<svg viewBox="0 0 300 300">
							<g x="20%" y="15%" id=${PlayIcoWIX}>
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
			<a id=${Link1WIX} class="WIsLink1 dictR" href="https://www.google.com/" target="_blank"></a>
			<a id=${Link2WIX} class="WIsLink2 dictR" href="https://www.google.com/" target="_blank"></a>
			<a id=${Link3WIX} class="WIsLink3 dictR" href="https://www.google.com/" target="_blank"></a>
			<a id=${Link4WIX} class="WIsLink4 dictR" href="https://www.google.com/" target="_blank"></a>
			<a id=${Link5WIX} class="WIsLink5 dictR" href="https://www.google.com/" target="_blank"></a>
			<a id=${Link6WIX} class="WIsLink6 dictR" href="https://www.google.com/" target="_blank"></a>
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
					<div class="ExpBtnContainer-TextImgClass" id="${ACCWIXi}" onclick="openclose(${i})">
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
		var Ex1L1TatSrcWIX = Ex1L1TatSrcWIHead.concat(i);


		var Ex2L2WIX = Ex2L2WIHead.concat(i);
		var L2Ex2AudBtnWIX = L2Ex2AudBtnWIHead.concat(i);
		var Ex2PlayIcoWIX = Ex2PlayIcoWIHead.concat(i);
		var Ex2PauseIcoWIX = Ex2PauseIcoWIHead.concat(i);
		var Ex2L1WIX = Ex2L1WIHead.concat(i);
		var Ex2L1TatSrcWIX = Ex2L1TatSrcWIHead.concat(i);


		var Ex3L2WIX = Ex3L2WIHead.concat(i);
		var L2Ex3AudBtnWIX = L2Ex3AudBtnWIHead.concat(i);
		var Ex3PlayIcoWIX = Ex3PlayIcoWIHead.concat(i);
		var Ex3PauseIcoWIX = Ex3PauseIcoWIHead.concat(i);
		var Ex3L1WIX = Ex3L1WIHead.concat(i);
		var Ex3L1TatSrcWIX = Ex3L1TatSrcWIHead.concat(i);


		var WIListExsTemp = `
		<h5 id=${Ex1L2WIX}></h5>
		<h5>
			<div class="icon baseline" onClick="AudioCntrl(${i}, 1, 'IAudClk')">
				<svg class="Container" viewBox="0 0 300 300">
					<g x="20%" y="15%" id=${Ex1PlayIcoWIX}>
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
		<p class="WIL1Exs" id=${Ex1L1WIX} >-</p>
		<a id=${Ex1L1TatSrcWIX} style="display: inline-block; margin: 10px; font-size: 12px;" href="https://www.google.com/" target="_blank">tatoeba.org</a>
		<br><br>

		<h5 id=${Ex2L2WIX}></h5>
		<h5>
			<div class="icon baseline" onClick="AudioCntrl(${i}, 2, 'IAudClk')">
				<svg class="Container" viewBox="0 0 300 300">
					<g x="20%" y="15%" id=${Ex2PlayIcoWIX}>
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
		<a id=${Ex2L1TatSrcWIX} style="display: inline; margin-left: 10px; font-size: 12px;" href="https://www.google.com/" target="_blank">tatoeba.org</a>
		<br><br>

		<h5 id=${Ex3L2WIX}></h5>
		<h5>
			<div class="icon baseline" onClick="AudioCntrl(${i}, 3, 'IAudClk')">
				<svg class="Container" viewBox="0 0 300 300">
					<g x="20%" y="15%" id=${Ex3PlayIcoWIX}>
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
		<a id=${Ex3L1TatSrcWIX} style="display: inline; margin-left: 10px; font-size: 12px;" href="https://www.google.com/" target="_blank">tatoeba.org</a>

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


function AttrImgsTempSet() {
	for(var i = 0; i < 9; ++i) {
		var attrimgX = "attrimg".concat(i);
		var attrimgsrcX = pId[i].imgfile;
		var attrimgclsX = "imgattr ".concat(pId[i].imgbckg)
		//document.getElementById("attrimg0").className = "imgattr ".concat(pId[0].imgbckg);
		AttrImgTmp = `
			<div class="imgattrcol"><img class="${attrimgclsX}" id="${attrimgX}" src="${attrimgsrcX}" onClick="modaldisp(${i})"></div>
		`;
		
		AttrImgX = "AttrImg".concat(i);
		window[AttrImgX] = AttrImgTmp;
	}
	
	AttrImgsBlk = AttrImg0.concat(AttrImg1, AttrImg2, AttrImg3, AttrImg4, AttrImg5, AttrImg6, AttrImg7, AttrImg8);	
}

// Load in Page Graphics
function PgBtnImgs() {
  //Audio Button Play Icon Loader
  for(var i = 0; i < 37; ++i) {
     var AudBtnPlayTriCl = document.getElementsByClassName("AudBtn-PlayTri");
     AudBtnPlayTriCl[i].setAttribute('d', 'm 95.514374,224.65227 c -0.05649,-49.76848 -0.112973,-99.53696 -0.16946,-149.30544 43.129016,24.83532 86.258026,49.67064 129.387036,74.50596 -43.07252,24.93316 -86.14505,49.86632 -129.217576,74.79948 z');
   }

   //Audio Button Pause Icon Loader
   for (var i = 0; i < 37; ++i) {
     var AudBtnPauseRectCl = document.getElementsByClassName("AudBtn-PauseRectL");
     AudBtnPauseRectCl[i].setAttribute('width', '47');
     AudBtnPauseRectCl[i].setAttribute('height', '150');
     AudBtnPauseRectCl[i].setAttribute('x', '115');
     AudBtnPauseRectCl[i].setAttribute('y', '26');
     AudBtnPauseRectCl[i].setAttribute('ry', '8');
   }

   for (var i = 0; i < 37; ++i) {
     var AudBtnPauseRectCl = document.getElementsByClassName("AudBtn-PauseRectR");
     AudBtnPauseRectCl[i].setAttribute('width', '47');
     AudBtnPauseRectCl[i].setAttribute('height', '150');
     AudBtnPauseRectCl[i].setAttribute('x', '35');
     AudBtnPauseRectCl[i].setAttribute('y', '26');
     AudBtnPauseRectCl[i].setAttribute('ry', '8');
   }

   //Accordion Button Icon Loader
   for (var i = 0; i < 9; ++i) {
     var AccBtnRectHCl = document.getElementsByClassName("AccBtn-RectH");
     AccBtnRectHCl[i].setAttribute('width', '80');
     AccBtnRectHCl[i].setAttribute('height', '20');
     AccBtnRectHCl[i].setAttribute('x', '23');
     AccBtnRectHCl[i].setAttribute('y', '52.5');
     //AccBtnRectHCl[i].setAttribute('fill', 'red');
    }

   for (var i = 0; i < 9; ++i) {
     var AccBtnRectHCl = document.getElementsByClassName("AccBtn-RectV");
     AccBtnRectHCl[i].setAttribute('width', '80');
     AccBtnRectHCl[i].setAttribute('height', '20');
     AccBtnRectHCl[i].setAttribute('x', '22.5');
     AccBtnRectHCl[i].setAttribute('y', '-72.5');
     AccBtnRectHCl[i].setAttribute('transform', 'matrix(0 1 -1 0 0 0)');
     //AccBtnRectHCl[i].setAttribute('fill', 'blue');
    }

   for (var i = 0; i < 9; ++i) {
     var ExpBtnCircleCl = document.getElementsByClassName("ExpBtn-CircleClass");
     ExpBtnCircleCl[i].setAttribute('cx', '49%');
     ExpBtnCircleCl[i].setAttribute('cy', '49%');
     ExpBtnCircleCl[i].setAttribute('r', '40%');
    }

}
