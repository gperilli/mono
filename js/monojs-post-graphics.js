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



  

