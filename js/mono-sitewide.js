//Header Template

var HeaderTemp = `
<div class="row">
	 <div class="headercontainer">
			<img border="0" src="graphics/mono.png" height="100%"/>
	 </div>

	 <div class="langbar" id="myDIV">
			<!--L1 Select Box:-->
			<div  style="display: inline-block;">
				 <select id="L1SelectID" onchange="LangUpdate()">
						<option value="ENG" selected="selected">L1: ENG</option>
						<option value="ITA">L1: ITA</option>
						<option value="JPN">L1: JPN</option>
				</select>
			</div>
			<!--L2 Select Box:-->

			<div style="display: inline-block;">
				 <select id="L2SelectID" onchange="LangUpdate()">
						<option value="ENG">L2: ENG</option>
						<option value="ITA">L2: ITA</option>
						<option value="JPN" selected="selected">L2: JPN</option>
				 </select>
			</div>

	 </div>
	 <div style="width: 100%; border: 0px solid; padding-left: 30px; float: left;">
			<p class="header" id="Header"></p>
	 </div>
</div>
`;

//Left side Column Template

var MenuA = `
<!--Start columnA-->
<div class="columnA" align=center style="color: #818181;" >
<div class="MenuA">
	<a class="linkmenu unsel" id="menulist" href="default.asp" target="_blank">List</a>
	<a class="linkmenu unsel" id="menugallery" href="default.asp" target="_blank">Gallery</a>
	<a class="linkmenu unsel" id="menuannotator" href="default.asp" target="_blank">Annotator</a>
	<a class="linkmenu unsel" id="menuabout" href="default.asp" target="_blank">About</a>
</div>
`;

var ShareHeadA = `
<div class="sharelikeA">
<p id="sharetextA"></p>
<br>
<img border="0" id="ShareImgCont" src="" style="display: block;" width="100%" data-original-width="1200" data-original-height="630" />
`;



var ShareFb = `
<!-- Facebook Share Btn -->
<div class="SocialBtnContainerClass" align=left>
   <!-- Button SVG Elements -->
   <div class="SocialBtnContainer-TextImgClass" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(${ShareAdr}),'facebook-share-dialog','width=626,height=436'); return false;">
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


var ShareTw = `
<!-- Twitter Share Btn -->
<div class="SocialBtnContainerClass" align=left>
   <!-- Button SVG Elements -->
   <div class="SocialBtnContainer-TextImgClass"  onclick="window.open('https://twitter.com/home?status='+encodeURIComponent(${ShareAdr}),'twitter-share-dialog','width=626,height=436'); return false;">
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

var MenuATailTemp = `
<!--End columnA-->
</div>
`;

var ColumnATemp = MenuA.concat(ShareHeadA, ShareFb, ShareTw, MenuATailTemp);

//Share Buttons at bottom of Narrow Screen page
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

var ShareBtmTemp = ShareHeadB.concat(ShareFb, ShareTw, ShareBtmTailTemp);

var AttrTemp = `
<!-- Attribution etc -->
<section class="columns" id="attrchunk" style="background-color: white; position: relative; z-index: 10; display: inline-block;">
<div class="CopyRight" style="display: inline-block;">
    <p id="Footer1"></p>
		<div id="imgattrblk" style="display: none;">
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
  <div id="CCCont" style="display: inline; ">
    <p id="CCContp" style="display: inline;"></p>
    <a id="CCContTa" rel="license" style="display: inline;"></a>
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
<!-- Inage Attr. Modal -->
<div id="myModal" class="modal">
	<span class="close">&times;</span>
	<img class="modal-content" id="modalimg" style="background-color: white;">
	<div id="caption"><a id="ImgAttrLnkCnt" class="ImgAttrLnk" href=""></a></div>
</div>
`;


var UItext = {
Eng: {lang: "ENG", share: "Share", HeadN: "An SVG based visual dictionary, and language learning tool. Currently in English, Japanese, and Italian.", CCText1: "This work is licensed under a", CChref: "http://creativecommons.org/licenses/by-nc-sa/4.0/", CCText2: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License", CCImagealt: "Creative Commons License", CCImagesrc: "https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png", HeadN: "An SVG based visual dictionary, and language learning tool. Currently in English, Japanese, and Italian.", FootN1: "Designed and coded by G.Perilli. Image data is either original or derived from copyleft sources - in both cases the image files have been created or adapted by the author; G.Perilli / KochiEditor. All files are available on Wikimedia Commons on a ShareAlike 3.0 licence.", FootN2: "Example sentnces are where stated from the Tatoeba corpus licenced under Creative Commons CC-BY."},

Ita: {share: "Condividi", lang: "ITA", CCText1: "Quest'opera è distribuita con Licenza", CChref: "http://creativecommons.org/licenses/by-nc-sa/3.0/it/", CCText2: "Creative Commons Attribuzione - Non commerciale - Condividi allo stesso modo 3.0 Italia", CCImagealt: "Licenza Creative Commons", CCImagesrc: "https://i.creativecommons.org/l/by-nc-sa/3.0/it/88x31.png", },

Jpn: {share: "シェア", lang: "JPN", CCText1: "この作品は", CChref: "http://creativecommons.org/licenses/by-nc-sa/4.0/", CCText2: "クリエイティブ・コモンズ 表示 - 非営利 - 継承 4.0 国際 ライセンス", CCImagealt: "Creative Commons License", CCText3: "の下に提供されています。", CCImagesrc: "https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"}
};




//UI Language data
function UIEng() {

 var l1 = document.getElementById("L1SelectID").value;
 //document.getElementById("L1LangDisplayP00X").innerHTML = l1;
 var l2 = document.getElementById("L2SelectID").value;
 //document.getElementById("L2LangDisplayP00X").innerHTML = l2;

 document.getElementById('Header').innerHTML = UItext.Eng.HeadN;
 document.getElementById('Footer1').innerHTML = UItext.Eng.FootN1;
 document.getElementById('Footer2').innerHTML = UItext.Eng.FootN2;

 document.getElementById('CCContp').innerHTML = UItext.Eng.CCText1;
 document.getElementById('CCContTa').innerHTML = UItext.Eng.CCText2;
 document.getElementById('CCContTa').href = UItext.Eng.CChref;
 document.getElementById('CCContIa').href = UItext.Eng.CChref;
 document.getElementById('CCConti').src = UItext.Eng.CCImagesrc;
 document.getElementById('CCContp2').style.display = "none";

 document.getElementById("sharetextA").innerHTML = UItext.Eng.share;
 document.getElementById("sharetextB").innerHTML = UItext.Eng.share;
}

function UIIta() {

 var l1 = document.getElementById("L1SelectID").value;
 //document.getElementById("L1LangDisplayP00X").innerHTML = l1;

 var l2 = document.getElementById("L2SelectID").value;
 //document.getElementById("L2LangDisplayP00X").innerHTML = l2;

 document.getElementById('Header').innerHTML = UItext.Eng.HeadN;
 document.getElementById('Footer1').innerHTML = UItext.Eng.FootN1;
 document.getElementById('Footer2').innerHTML = UItext.Eng.FootN2;

 document.getElementById('CCContp').innerHTML = UItext.Ita.CCText1;
 document.getElementById('CCContTa').innerHTML = UItext.Ita.CCText2;
 document.getElementById('CCContTa').href = UItext.Ita.CChref;
 document.getElementById('CCContIa').href = UItext.Ita.CChref;
 document.getElementById('CCConti').src = UItext.Ita.CCImagesrc;
 document.getElementById('CCContp2').style.display = "none";

 document.getElementById("sharetextA").innerHTML = UItext.Ita.share;
 document.getElementById("sharetextB").innerHTML = UItext.Ita.share;
}

function UIJpn() {
 var l1 = document.getElementById("L1SelectID").value;
 //document.getElementById("L1LangDisplayP00X").innerHTML = l1;
 var l2 = document.getElementById("L2SelectID").value;
 //document.getElementById("L2LangDisplayP00X").innerHTML = l2;

 document.getElementById('Header').innerHTML = UItext.Eng.HeadN;
 document.getElementById('Footer1').innerHTML = UItext.Eng.FootN1;
 document.getElementById('Footer2').innerHTML = UItext.Eng.FootN2;

 document.getElementById('CCContp').innerHTML = UItext.Jpn.CCText1;
 document.getElementById('CCContTa').innerHTML = UItext.Jpn.CCText2;
 document.getElementById('CCContp2').innerHTML = UItext.Jpn.CCText3
 document.getElementById('CCContTa').href = UItext.Jpn.CChref;
 document.getElementById('CCContIa').href = UItext.Jpn.CChref;
 document.getElementById('CCConti').src = UItext.Jpn.CCImagesrc;
 document.getElementById('CCContp2').style.display = "block";

 document.getElementById("sharetextA").innerHTML = UItext.Jpn.share;
 document.getElementById("sharetextB").innerHTML = UItext.Jpn.share;
}
