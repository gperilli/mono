// Load Image Data
function SetImgData() {
  //Word Item Images
  if (pId.AnnotType == "HLight") {
	//Load in blank 1024x768 box MUI Image
	
	document.getElementById(P00XMUIImgCont).src = "graphics/HlightBox.svg";
	//Highlighted annotations will load in imgfile to Word Item 0 slot 
	document.getElementById("WIImgCont0").src = pId[0].imgfile;
  } else {
	//Load in MUI Image
	document.getElementById(P00XMUIImgCont).src = pId[0].imgfile;
	//Numbered annotations will load in imgfile to Word Item 0 slot 
	
	document.getElementById("WIImgCont0").src = pId[0].imgfile;
  }
  
  document.getElementById("WIImgCont1").src = pId[1].imgfile;
  document.getElementById("WIImgCont2").src = pId[2].imgfile;
  document.getElementById("WIImgCont3").src = pId[3].imgfile;
  document.getElementById("WIImgCont4").src = pId[4].imgfile;
  document.getElementById("WIImgCont5").src = pId[5].imgfile;
  document.getElementById("WIImgCont6").src = pId[6].imgfile;
  document.getElementById("WIImgCont7").src = pId[7].imgfile;
  document.getElementById("WIImgCont8").src = pId[8].imgfile;

  //Set class for background color
  document.getElementById(P00XMUIImgCont).className = "WIPic ".concat(pId[0].imgbckg, "bckhv");
  document.getElementById("WIImgCont0").className = "WIPic ".concat(pId[0].imgbckg, "bckhv");
  document.getElementById("WIImgCont1").className = "WIPic ".concat(pId[1].imgbckg, "bckhv");
  document.getElementById("WIImgCont2").className = "WIPic ".concat(pId[2].imgbckg, "bckhv");
  document.getElementById("WIImgCont3").className = "WIPic ".concat(pId[3].imgbckg, "bckhv");
  document.getElementById("WIImgCont4").className = "WIPic ".concat(pId[4].imgbckg, "bckhv");
  document.getElementById("WIImgCont5").className = "WIPic ".concat(pId[5].imgbckg, "bckhv");
  document.getElementById("WIImgCont6").className = "WIPic ".concat(pId[6].imgbckg, "bckhv");
  document.getElementById("WIImgCont7").className = "WIPic ".concat(pId[7].imgbckg, "bckhv");
  document.getElementById("WIImgCont8").className = "WIPic ".concat(pId[8].imgbckg, "bckhv");

  //Share Image
  //document.getElementById("ShareImgCont").src = pId.ShareImg;
  

  //Image Attr. Images
  document.getElementById("attrimg0").src = pId[0].imgfile;
  document.getElementById("attrimg1").src = pId[1].imgfile;
  document.getElementById("attrimg2").src = pId[2].imgfile;
  document.getElementById("attrimg3").src = pId[3].imgfile;
  document.getElementById("attrimg4").src = pId[4].imgfile;
  document.getElementById("attrimg5").src = pId[5].imgfile;
  document.getElementById("attrimg6").src = pId[6].imgfile;
  document.getElementById("attrimg7").src = pId[7].imgfile;
  document.getElementById("attrimg8").src = pId[8].imgfile;
  //Set class for background color
  
  
  if (pId.AnnotType == "Annot") {
	  
  document.getElementById(P00XBtnImgId0T).addEventListener("mouseover", BckImgHver);
  document.getElementById(P00XBtnImgId0T).addEventListener("mouseout", BckImgOut);
  
  } 
}

function BckImgHver() {
	//alert("test");
	document.getElementById(P00XMUIImgCont).className = pId[0].imgbckg.concat("hvr");
	//document.getElementById("P00XBtnImgId0T").className = "btnbckon");
}

function BckImgOut() {
	document.getElementById(P00XMUIImgCont).className = pId[0].imgbckg;
	//document.getElementById("P00XBtnImgId0T").className = "btnbckoff");
}


var digitH = "m 106.53335,354.43 c 0.0327,-1.22648 3.95043,-20.89477 8.70605,-43.70731 l 8.64657,-41.47736 H 106.26006 88.63415 v -15.16376 -15.16376 h 20.48169 c 19.77057,0 20.51455,-0.13933 21.42801,-4.01394 4.93098,-20.91544 14.54246,-70.95318 13.7762,-71.71944 -0.53758,-0.53758 -13.28683,-0.97742 -28.33166,-0.97742 H 88.63415 v -14.27178 -14.27178 h 31.09929 c 28.09308,0 31.18455,-0.30178 31.98126,-3.12195 0.48508,-1.71707 4.68591,-21.78676 9.33518,-44.599302 l 8.45322,-41.477352 h 14.65485 14.65485 l -8.64657,41.477352 c -4.75562,22.812542 -8.67334,42.882232 -8.70606,44.599302 -0.0545,2.86293 2.67878,3.12195 32.94401,3.12195 18.15192,0 33.00349,-0.28689 33.00349,-0.63753 0,-0.35065 3.13928,-15.80431 6.97617,-34.341471 3.8369,-18.537156 7.90775,-38.319951 9.04634,-43.961763 l 2.07018,-10.25784 h 14.71459 14.7146 l -8.53918,41.477352 c -4.69654,22.812542 -8.56526,42.882232 -8.59718,44.599302 -0.0514,2.76903 1.95873,3.12195 17.78172,3.12195 h 17.83973 v 14.27178 14.27178 h -20.41039 c -11.61869,0 -20.88311,0.76485 -21.5078,1.77563 -1.26052,2.03957 -15.16892,68.33931 -15.16892,72.3085 0,2.20346 4.59889,2.62667 28.54355,2.62667 h 28.54356 v 15.16376 15.16376 h -32.07752 c -31.79897,0 -32.08563,0.0348 -33.01331,4.01394 -0.51469,2.20767 -4.18379,20.06969 -8.15355,39.69338 -3.96976,19.6237 -7.66491,37.48572 -8.21144,39.69338 -0.92577,3.73956 -1.95602,4.01394 -15.07208,4.01394 -11.14262,0 -14.07838,-0.54222 -14.07838,-2.60025 0,-1.43014 3.61255,-19.97231 8.02788,-41.20483 4.41533,-21.23251 8.02787,-39.7307 8.02787,-41.10707 0,-2.05715 -5.87315,-2.50249 -33.00348,-2.50249 -18.15192,0 -33.00349,0.38179 -33.00349,0.84843 0,0.96898 -15.4987,76.4409 -16.95271,82.55227 -0.8916,3.74754 -1.89993,4.01394 -15.19277,4.01394 -10.23264,0 -14.22106,-0.6273 -14.17831,-2.22997 z M 226,238.1287 c 0,-0.434 3.21115,-16.13465 7.13589,-34.89033 3.92474,-18.75568 7.13589,-35.66052 7.13589,-37.5663 0,-3.30201 -1.50609,-3.46506 -32.00621,-3.46506 -17.60342,0 -32.43574,0.69498 -32.96072,1.54441 -1.12738,1.82415 -15.31182,69.21293 -15.31182,72.74488 0,1.95211 6.39768,2.42151 33.00349,2.42151 18.15191,0 33.00348,-0.3551 33.00348,-0.78911 z";

// Auto Audio speaker
var AutAudSpkr = "M52.546307 96.563052C50.574302 94.844602 45.153635 89.605852 40.500381 84.921382C40.500381 84.921382 32.039916 76.404164 32.039916 76.404164C32.039916 76.404164 22.733247 76.404164 22.733247 76.404164C10.032796 76.404164 11.125427 77.955252 11.125427 59.925843C11.125427 42.0607 10.031272 43.595831 22.764529 43.595831C22.764529 43.595831 31.954168 43.595831 31.954168 43.595831C31.954168 43.595831 42.838755 32.836325 42.838755 32.836325C48.825279 26.918594 54.379592 21.651537 55.181676 21.131753C56.42993 20.322827 56.869207 20.281627 58.231113 20.845747C59.193979 21.244579 59.97627 22.052941 60.212366 22.893028C60.71812 24.692615 60.72379 95.288012 60.218366 97.083232C59.876336 98.297992 57.957761 99.687493 56.622491 99.687493C56.352616 99.687493 54.518352 98.281492 52.546349 96.563052C52.546349 96.563052 52.546307 96.563052 52.546307 96.563052";

// Auto Audio on waves
var AutAudOn1 = "M73.08867635 74.5106609363C71.8965220734 73.3185066596 71.6956953884 70.8791224404 72.691801355 69.6899394345C73.0556034338 69.2556206067 74.4780854367 68.008676414 75.8528710027 66.9189529278C78.7182396749 64.6477193522 79.744129787 62.0096806771 79.1438113779 58.4564218052C78.7791943825 56.2982790824 77.7649353536 55.0285092859 73.7245468212 51.671949599C71.7071994716 49.9960338076 71.4398750583 47.5844652338 73.08867635 45.9356612963C74.5657683523 44.4585719399 76.7021252837 44.6156127296 79.5302803105 46.4091754987C84.3041467504 49.4366702522 86.8237685103 54.2088777546 86.8237685103 60.2231611163C86.8237685103 66.2374471238 84.3041467504 71.0096519804 79.5302803105 74.0371493797C76.7021252837 75.8307121488 74.5657683523 75.9877529385 73.08867635 74.5106609363C73.08867635 74.5106609363 73.08867635 74.5106609363 73.08867635 74.5106609363";

var AutAudOn2 = "M79.5309179564 89.69009762C77.2187745063 87.2289329011 77.9946174966 85.7330581282 83.4448409487 82.1438053401C88.7394788195 78.6570177382 91.1574450182 75.9962222509 93.5070614053 71.0710776463C99.366150769 58.7895507385 94.8467155967 44.7067511034 82.8786511434 37.9523937719C78.3733711793 35.4097717831 77.2616634641 33.0484846253 79.4592926031 30.6896104675C80.9783819173 29.0590574881 83.211393785 29.2248427568 87.0247301328 31.2512864813C94.1326131266 35.0284886837 101.040420852 44.1682129019 102.968130015 52.346010028C103.987651607 56.6710611194 103.987651607 63.775263759 102.968130015 68.1003148504C101.026292102 76.3380586216 94.1918295217 85.377944966 87.0198088829 89.1950357513C83.168364598 91.2448474755 81.1188174572 91.3803353071 79.5309179564 89.69009762C79.5309179564 89.69009762 79.5309179564 89.69009762 79.5309179564 89.69009762";

// Auto Audio off cross
var AutAudOff1 = "M 88.893387,62.509705 C 72.877577,46.493899 71.818667,45.318212 71.818667,43.551946 c 0,-2.446633 1.76836,-4.184194 4.25835,-4.184194 1.66892,0 3.13007,1.321183 18.8836,17.074713 15.468933,15.468922 17.074723,17.23786 17.074723,18.80947 0,1.136284 -0.4481,2.182849 -1.29887,3.033619 -0.85077,0.850771 -1.89733,1.298864 -3.03362,1.298864 -1.57161,0 -3.34054,-1.605791 -18.809463,-17.074713 z";

var AutAudOff2 = "m 73.071277,78.285554 c -1.47634,-1.476335 -1.63229,-2.880738 -0.54912,-4.945123 0.41237,-0.78591 8.25041,-8.751273 17.41789,-17.700805 16.967563,-16.564186 17.486373,-16.974211 20.173243,-15.943167 1.24389,0.477327 2.4779,3.165147 2.11571,4.608256 -0.17144,0.683059 -7.98357,8.900427 -17.360283,18.260817 -15.3988,15.371982 -17.2155,17.018886 -18.77358,17.018886 -1.12593,0 -2.17608,-0.45108 -3.02386,-1.298864 z";

// Play All Triangle
var PlyAll = "m 35.514374,174.65227 -0.08473,-74.652722 -0.08473,-74.652718 64.693518,37.252981 64.69352,37.25298 -64.60879,37.399739 z";


// Load in Page Graphics

function BtnImgs() {
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



// Image Attribution Images Event Listeners
function ImgAttrSet() {

document.getElementById("attrimg0").addEventListener("click", function() {modaldisp(0);}, false);
document.getElementById("attrimg1").addEventListener("click", function() {modaldisp(1);}, false);
document.getElementById("attrimg2").addEventListener("click", function() {modaldisp(2);}, false);
document.getElementById("attrimg3").addEventListener("click", function() {modaldisp(3);}, false);
document.getElementById("attrimg4").addEventListener("click", function() {modaldisp(4);}, false);
document.getElementById("attrimg5").addEventListener("click", function() {modaldisp(5);}, false);
document.getElementById("attrimg6").addEventListener("click", function() {modaldisp(6);}, false);
document.getElementById("attrimg7").addEventListener("click", function() {modaldisp(7);}, false);
document.getElementById("attrimg8").addEventListener("click", function() {modaldisp(8);}, false);


//Set class for background color
document.getElementById("attrimg0").className = "imgattr ".concat(pId[0].imgbckg);
document.getElementById("attrimg1").className = "imgattr ".concat(pId[1].imgbckg);
document.getElementById("attrimg2").className = "imgattr ".concat(pId[2].imgbckg);
document.getElementById("attrimg3").className = "imgattr ".concat(pId[3].imgbckg);
document.getElementById("attrimg4").className = "imgattr ".concat(pId[4].imgbckg);
document.getElementById("attrimg5").className = "imgattr ".concat(pId[5].imgbckg);
document.getElementById("attrimg6").className = "imgattr ".concat(pId[6].imgbckg);
document.getElementById("attrimg7").className = "imgattr ".concat(pId[7].imgbckg);
document.getElementById("attrimg8").className = "imgattr ".concat(pId[8].imgbckg);
}

// Modal Image Attr Display Process
function modaldisp(x) {
	
	modal = document.getElementById('myModal');
	modalImg = document.getElementById("modalimg");
	modalSrcImg = document.getElementById("srcimg");
	captionText = document.getElementById("caption");
	// Get the <span> element that closes the modal
	span = document.getElementsByClassName("close")[0];
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}
	
    
    modal.style.display = "block";

    if (pId[x].imgsrc == "original") {
		document.getElementById("imgattrLCol").style.display = "none";
		document.getElementById('CRContMine').innerHTML = UItext[L1Selected]["CRTextWIO"];
    } else {

		if (x == 0) {
		  document.getElementById("imgattrLCol").style.display = "none";
		  document.getElementById('CRContMine').innerHTML = UItext[L1Selected]["CRTextWI0"];
		} else {
		  document.getElementById("imgattrLCol").style.display = "block";
		  document.getElementById('CRContMine').innerHTML = UItext[L1Selected]["CRTextWID"];
		  modalSrcImg.src = pId[x].imgattrsrcfle;
		  //document.getElementById("imgsrccr").innerHTML = pId[x].imgsrccr;
		}
    }
    modalImg.src = pId[x].imgfile;
    modalImg.className = "modal-content ".concat(pId[x].imgbckg);

    document.getElementById("ImgAttrLnkCnt").innerHTML = pId[x].imgattrsite;
  	document.getElementById("ImgAttrLnkCnt").href = pId[x].imgattrurl;
    //captionText.innerHTML = this.alt;
  }

// Accordion Event Listeners and Functions
function AccListeners() {
	//Set all initial Accordion statuses to 0
	
	for (i=0; i<8; ++i) {
		AccXStat[i] = 0;
	}
	
	document.getElementById("ACCWI0").addEventListener("click", function() {openclose(0);}, false);
	document.getElementById("ACCWI1").addEventListener("click", function() {openclose(1);}, false);
	document.getElementById("ACCWI2").addEventListener("click", function() {openclose(2);}, false);
	document.getElementById("ACCWI3").addEventListener("click", function() {openclose(3);}, false);
	document.getElementById("ACCWI4").addEventListener("click", function() {openclose(4);}, false);
	document.getElementById("ACCWI5").addEventListener("click", function() {openclose(5);}, false);
	document.getElementById("ACCWI6").addEventListener("click", function() {openclose(6);}, false);
	document.getElementById("ACCWI7").addEventListener("click", function() {openclose(7);}, false);
	document.getElementById("ACCWI8").addEventListener("click", function() {openclose(8);}, false);
	
}

function openclose(AccId) {
	
	if (AccXStat[AccId] == 0) {
     	document.getElementById('AccExsWI'.concat(AccId)).className = "WIExs expand";
		document.getElementById('AccBtnLnVWI'.concat(AccId)).style.display = 'none';
        AccXStat[AccId] = 1;
     } else {
    	document.getElementById('AccExsWI'.concat(AccId)).className = "WIExs";
		document.getElementById('AccBtnLnVWI'.concat(AccId)).style.display = 'block';
        AccXStat[AccId] = 0;
     }
}



  

