function pageload() {

  MUITempSet();
  MonoTempLoad();
  //p00X = p00N;
  pId = p00X;

  SetAnnotP00X();
  UIGraphics();
  image = pId[0].imgfile;
  SetImgData();
  LangUpdate();
  document.getElementById("menuannotator").className = "linkmenu sel";
  document.getElementById("myModal").style.display = "none";
  //Variables set at page load
  BtnSelected = 1;

  xoffset = 0;
  yoffset = 0;

  initialx = 0;
  initialy = 0;

  btn1mode = pId[1].dirmode;
  btn2mode = pId[2].dirmode;
  btn3mode = pId[3].dirmode;
  btn4mode = pId[4].dirmode;
  btn5mode = pId[5].dirmode;
  btn6mode = pId[6].dirmode;
  btn7mode = pId[7].dirmode;
  btn8mode = pId[8].dirmode;
  BtnSelct();

}

function loadimage() {
  image = document.getElementById("imageurl").value;
  SetImgData();
}

function LangUpdate() {
  // Main App UI Update on Lang. Select,
  // Set variables before sending through WIXUpd Function

  // set L1 Lang, L2 Lang
  L1Selected = document.getElementById("L1SelectID").value;
  L2Selected = document.getElementById("L2SelectID").value;

  // Page Nav. etc. UI Lang UPdate
  switch (document.getElementById("L1SelectID").value) {
    case "ENG":
      UIEng();
      break;
    case "ITA":
      UIIta();
      break;
    case "JPN":
      UIJpn();
      break;
  }
}

function loadcode() {
  for(var i = 1; i < 9; ++i) {

  XPosBoxX = "XposBox".concat(i);
  YPosBoxX = "YposBox".concat(i);
  BoxPosId = "AnnotDivLn-P00X-ID".concat(i);

  XAdjBtnX = "XAdjBtn".concat(i);
  YAdjBtnX = "YAdjBtn".concat(i);
  BtnPosId = "BtnContainerP00XBtnID".concat(i);

  LnAdjX1BoxX = "LnAdjX1Box".concat(i);
  LnAdjY1BoxX = "LnAdjY1Box".concat(i);
  LnAdjX2BoxX = "LnAdjX2Box".concat(i);
  LnAdjY2BoxX = "LnAdjY2Box".concat(i);
  LnPosId = "AnnotDivLnPos-P00X-ID".concat(i);

  document.getElementById(XPosBoxX).innerHTML = document.getElementById(BoxPosId).getAttribute('x');
  document.getElementById(YPosBoxX).innerHTML = document.getElementById(BoxPosId).getAttribute('y');
  document.getElementById(XAdjBtnX).innerHTML = document.getElementById(BtnPosId).getAttribute('x');
  document.getElementById(YAdjBtnX).innerHTML = document.getElementById(BtnPosId).getAttribute('y');
  document.getElementById(LnAdjX1BoxX).innerHTML = document.getElementById(LnPosId).getAttribute('x1');
  document.getElementById(LnAdjY1BoxX).innerHTML = document.getElementById(LnPosId).getAttribute('y1');
  document.getElementById(LnAdjX2BoxX).innerHTML = document.getElementById(LnPosId).getAttribute('x2');
  document.getElementById(LnAdjY2BoxX).innerHTML = document.getElementById(LnPosId).getAttribute('y2');
}

document.getElementById("TtlXPosId").innerHTML = document.getElementById("AnnotDivLn-P00X-ID0").getAttribute('x');
document.getElementById("TtlYPosId").innerHTML = document.getElementById("AnnotDivLn-P00X-ID0").getAttribute('y');

document.getElementById("TtlBtnXPosId").innerHTML = document.getElementById("P00XBtnImgId0B").getAttribute('x');
document.getElementById("TtlBtnYPosId").innerHTML = document.getElementById("P00XBtnImgId0B").getAttribute('y');

document.getElementById("TtlBtnTxtXPos").innerHTML = document.getElementById("P00XBtnImgId0T").getAttribute('x');
//alert("test");
document.getElementById("TtlBtnDgt1").innerHTML = window[pId[0].BtnChar1];
document.getElementById("TtlBtnDgt2").innerHTML = window[pId[0].BtnChar2];
document.getElementById("TtlBtnDgt3").innerHTML = window[pId[0].BtnChar3];

}

var slider = {

  get_position: function() {
    var marker_pos = $('#marker').position();
    var left_pos = marker_pos.left;
    var top_pos = marker_pos.top;

    slider.position = {
      left: left_pos,
      top: top_pos,
      x: Math.round(slider.round_factor.x * (left_pos * slider.xmax / slider.width)) / slider.round_factor.x,
      y: Math.round((slider.round_factor.y * (slider.height - top_pos) * slider.ymax / slider.height)) / slider.round_factor.y,
    };
  },

  draw: function(x_size, y_size, xmax, ymax, marker_size, round_to) {

    if ((x_size === undefined) && (y_size === undefined) && (xmax === undefined) && (ymax === undefined) && (marker_size === undefined) && (round_to === undefined)) {
      x_size = 150;
      y_size = 150;
      xmax = 1;
      ymax = 1;
      marker_size = 20;
      round_to = 2;
    };

    slider.marker_size = marker_size;
    slider.height = y_size;
    slider.width = x_size;
    slider.xmax = xmax;
    slider.ymax = ymax;
    round_to = Math.pow(10, round_to);
    slider.round_factor = {
      x: round_to,
      y: round_to,
    };

    $("#markerbounds").css({
      "width": (x_size).toString() + 'px',
      "height": (y_size).toString() + 'px',
    });
    $("#box").css({
      "width": (x_size).toString() + 'px',
      "height": (y_size).toString() + 'px',
      "top": 0,
      "left": 0,

    });
    $("#marker").css({
      "width": marker_size.toString() + 'px',
      "height": marker_size.toString() + 'px',
      "top": 0,
      "left": 0,
    });

    $("#coord").css({
      "top": x_size / 2
    });

    $("#widget").css({
      "width": (x_size).toString() + 'px',
    });

    slider.get_position();
    slider.display_position();

  },
};

$("#marker").draggable({
  containment: "#markerbounds",
  drag: function() {
    slider.get_position();
    document.getElementById(LnCont).setAttribute('x', (slider.position.x.toString()*100) + "%");
    document.getElementById(LnCont).setAttribute('y', ((1 - slider.position.y.toString())*100) + "%");
  },
});

var Lnxslider = document.getElementById("LnXPos");
var Lnyslider = document.getElementById("LnYPos");
  Lnxslider.oninput = function() {

  xadj = (this.value) + "%";
  //document.getElementById("demo5").innerHTML = xadj;
  document.getElementById(LnAdjCont).setAttribute('x2', xadj);
  }

  Lnyslider.oninput = function() {
  yadj = (this.value) + "%";
  //document.getElementById("demo6").innerHTML = yadj;
  document.getElementById(LnAdjCont).setAttribute('y2', yadj);
  }

//syntax for rendering is:
//  slider.render(width, height, width-range, height-range, marker size, output decimal places)

function posboxres() {
dw = document.getElementById("posboxcont").clientWidth;

var w = window.innerWidth;
lx = dw*1;
ly = lx*0.75;
boxsize = lx*0.18;
slider.draw(lx,ly,1,1,boxsize,2);
}

dw = document.getElementById("posboxcont").clientWidth;
var w = window.innerWidth;
lx = dw*1;
ly = lx*0.75;
boxsize = lx*0.18;
slider.draw(lx,ly,1,1,boxsize,2);




function TtlSelct() {
  TtlSelected = document.getElementById("TtlSelctID").value;

  switch (document.getElementById("TtlSelctID").value) {
    case "btml":
    document.getElementById("AnnotDivLn-P00X-ID0").setAttribute('x', "0%");
    document.getElementById("AnnotDivLn-P00X-ID0").setAttribute('y', "76%");
    document.getElementById("P00XBtnImgId0B").setAttribute('x', "-5%");
    document.getElementById("P00XBtnImgId0B").setAttribute('y', "25%");
    document.getElementById("P00XBtnImgId0T").setAttribute('x', "0%");
      break;
    case "topl":
    document.getElementById("AnnotDivLn-P00X-ID0").setAttribute('x', "0%");
    document.getElementById("AnnotDivLn-P00X-ID0").setAttribute('y', "0%");
    document.getElementById("P00XBtnImgId0B").setAttribute('x', "-5%");
    document.getElementById("P00XBtnImgId0B").setAttribute('y', "25%");
    document.getElementById("P00XBtnImgId0T").setAttribute('x', "0%");
      break;
    case "btmr":
    document.getElementById("AnnotDivLn-P00X-ID0").setAttribute('x', "82%");
    document.getElementById("AnnotDivLn-P00X-ID0").setAttribute('y', "76%");
    document.getElementById("P00XBtnImgId0B").setAttribute('x', "5%");
    document.getElementById("P00XBtnImgId0B").setAttribute('y', "25%");
    document.getElementById("P00XBtnImgId0T").setAttribute('x', "7%");
      break;
    case "topr":
    document.getElementById("AnnotDivLn-P00X-ID0").setAttribute('x', "82%");
    document.getElementById("AnnotDivLn-P00X-ID0").setAttribute('y', "0%");
    document.getElementById("P00XBtnImgId0B").setAttribute('x', "5%");
    document.getElementById("P00XBtnImgId0B").setAttribute('y', "25%");
    document.getElementById("P00XBtnImgId0T").setAttribute('x', "7%");
      break;
  }
}



function BtnSelct() {

BtnSelected = document.getElementById("BtnSelctID").value;

LnPosId = "AnnotDivLnPos-P00X-ID".concat(BtnSelected);
LnBxId = "AnnotDivLn-P00X-ID".concat(BtnSelected);

lnxpos = document.getElementById(LnPosId).getAttribute('x2');
lnypos = document.getElementById(LnPosId).getAttribute('y2');
document.getElementById("LnXPos").value = parseInt(lnxpos);
document.getElementById("LnYPos").value = parseInt(lnypos);

$("#marker").css({
  "top": document.getElementById(LnBxId).getAttribute('y'),
  "left": document.getElementById(LnBxId).getAttribute('x'),
});

BtnCont = "BtnContainerP00XBtnID".concat(BtnSelected);
LnCont = LnBxId;
LnAdjCont = LnPosId;

btnXmode = "btn".concat(BtnSelected, "mode");
btnmode = window[btnXmode];

DirSelected = btnmode;
direction();
}

function DirSelct() {
DirSelected = document.getElementById("DirSelctID").value;
direction();
}

function direction() {

  var directobj = {
  down: {direction: "down",
       fromdownx: 0, fromdowny: 0,
  	   fromupx: 0, fromupy: -12,
  	   fromleftx: -4.5, fromlefty: -6,
  	   fromrightx: 4.5, fromrighty: -6,
  	   fromdownrightx: 4.5, fromdownrighty: 0,
  	   fromuprightx: 4.5, fromuprighty: -12,
  	   fromdownleftx: -4.5, fromdownlefty: 0,
  	   fromupleftx: -4.5, fromuplefty: -12,
  	   setlinex1: "50%", setlinex2: "50%",
  	   setliney1: "25%", setliney2: "65%",
  	   setlinedispx: 50, setlinedispy: 65,
  	   xoff: 4.5, yoff: 0,},

  up: {direction: "up",
       fromdownx: 0, fromdowny: 12,
  	   fromupx: 0, fromupy: 0,
  	   fromleftx: -4.5, fromlefty: 6,
  	   fromrightx: 4.5, fromrighty: 6,
  	   fromdownrightx: 4.5, fromdownrighty: 12,
  	   fromuprightx: 4.5, fromuprighty: 0,
  	   fromdownleftx: -4.5, fromdownlefty: 12,
  	   fromupleftx: -4.5, fromuplefty: 0,
  	   setlinex1: "50%", setlinex2: "50%",
  	   setliney1: "75%", setliney2: "35%",
  	   setlinedispx: 50, setlinedispy: 35,
  	   xoff: 4.5, yoff: 12,},

  left: {direction: "left",
       fromdownx: 4.5, fromdowny: 6,
  	   fromupx: 4.5, fromupy: -6,
  	   fromleftx: 0, fromlefty: 0,
  	   fromrightx: 9, fromrighty: 0,
  	   fromdownrightx: 9, fromdownrighty: 6,
  	   fromuprightx: 0, fromuprighty: 6,
  	   fromdownleftx: 0, fromdownlefty: 6,
  	   fromupleftx: 0, fromuplefty: -6,
  	   setlinex1: "75%", setlinex2: "35%",
  	   setliney1: "50%", setliney2: "50%",
  	   setlinedispx: 35, setlinedispy: 50,
  	   xoff: 9, yoff: 6,},

  right: {direction: "right",
       fromdownx: -4.5, fromdowny: 6,
  	   fromupx: -4.5, fromupy: -6,
  	   fromleftx: -9, fromlefty: 0,
  	   fromrightx: 0, fromrighty: 0,
  	   fromdownrightx: 0, fromdownrighty: 6,
  	   fromuprightx: 0, fromuprighty: -6,
  	   fromdownleftx: -9, fromdownlefty: 6,
  	   fromupleftx: -9, fromuplefty: -6,
  	   setlinex1: "25%", setlinex2: "65%",
  	   setliney1: "50%", setliney2: "50%",
  	   setlinedispx: 65, setlinedispy: 50,
  	   xoff: 0, yoff: 6,},

  downright: {direction: "downright",
       fromdownx: -4.5, fromdowny: 0,
  	   fromupx: -4.5, fromupy: -12,
  	   fromleftx: -9, fromlefty: -6,
  	   fromrightx: 0, fromrighty: -6,
  	   fromdownrightx: 0, fromdownrighty: 0,
  	   fromuprightx: 0, fromuprighty: -12,
  	   fromdownleftx: -9, fromdownlefty: 0,
  	   fromupleftx: -9, fromuplefty: -12,
  	   setlinex1: "25%", setlinex2: "55%",
  	   setliney1: "25%", setliney2: "55%",
  	   setlinedispx: 55, setlinedispy: 55,
  	   xoff: 0, yoff: 0,},

  upright: {direction: "upright",
        fromdownx: -4.5, fromdowny: 12,
   	   fromupx: -4.5, fromupy: 0,
   	   fromleftx: -9, fromlefty: 6,
   	   fromrightx: 0, fromrighty: 6,
   	   fromdownrightx: 0, fromdownrighty: 12,
   	   fromuprightx: 0, fromuprighty: 0,
   	   fromdownleftx: -9, fromdownlefty: 12,
   	   fromupleftx: -9, fromuplefty: 0,
   	   setlinex1: "25%", setlinex2: "55%",
   	   setliney1: "75%", setliney2: "45%",
   	   setlinedispx: 55, setlinedispy: 45,
   	   xoff: 0, yoff: 12,},

  downleft: {direction: "downleft",
       fromdownx: 4.5, fromdowny: 0,
  	   fromupx: 4.5, fromupy: -12,
  	   fromleftx: 0, fromlefty: -6,
  	   fromrightx: 9, fromrighty: -6,
  	   fromdownrightx: 9, fromdownrighty: 0,
  	   fromuprightx: 9, fromuprighty: -12,
  	   fromdownleftx: 0, fromdownlefty: 0,
  	   fromupleftx: 0, fromuplefty: -12,
  	   setlinex1: "75%", setlinex2: "45%",
  	   setliney1: "25%", setliney2: "55%",
  	   setlinedispx: 45, setlinedispy: 55,
  	   xoff: 9, yoff: 0,},

  upleft: {direction: "upleft",
       fromdownx: 4.5, fromdowny: 12,
  	   fromupx: 4.5, fromupy: 0,
  	   fromleftx: 0, fromlefty: 6,
  	   fromrightx: 9, fromrighty: 6,
  	   fromdownrightx: 9, fromdownrighty: 12,
  	   fromuprightx: 9, fromuprighty: 0,
  	   fromdownleftx: 0, fromdownlefty: 12,
  	   fromupleftx: 0, fromuplefty: 0,
  	   setlinex1: "75%", setlinex2: "45%",
  	   setliney1: "75%", setliney2: "45%",
  	   setlinedispx: 45, setlinedispy: 55,
  	   xoff: 9, yoff: 12,},
  };

offsetx = "from".concat(btnmode, "x");
offsety = "from".concat(btnmode, "y");

initialxoffset = directobj[DirSelected][offsetx];
initialyoffset = directobj[DirSelected][offsety];

if (initialxoffset == 0 && initialyoffset == 0) {
} else {
document.getElementById(LnAdjCont).setAttribute('x1', directobj[DirSelected].setlinex1);
document.getElementById(LnAdjCont).setAttribute('y1', directobj[DirSelected].setliney1);
document.getElementById(LnAdjCont).setAttribute('x2', directobj[DirSelected].setlinex2);
document.getElementById(LnAdjCont).setAttribute('y2', directobj[DirSelected].setliney2);
document.getElementById("LnXPos").value = directobj[DirSelected].setlinedispx;
document.getElementById("LnYPos").value = directobj[DirSelected].setlinedispy;
}

x = document.getElementById(BtnCont).getAttribute('x');
XFloat = parseFloat(x, 10);
document.getElementById(BtnCont).setAttribute('x', XFloat + initialxoffset + "%");

y = document.getElementById(BtnCont).getAttribute('y');
YFloat = parseFloat(y, 10);
document.getElementById(BtnCont).setAttribute('y', YFloat + initialyoffset + "%");

//Set btn mode
for(var i = 0; i < 9; ++i) {
	btnXmode = "btn".concat(i, "mode");
	if (BtnSelected == i) {
		window[btnXmode] = DirSelected;
		btnmode = DirSelected;
	}
}

document.getElementById('DirSelctID').value = DirSelected;
}

var image;
var ShareAdr = pId.ShareAddr;

function SetImgData() {
  document.getElementById("ShareImgCont").src = pId.ShareImg;
  //Load in MUI Image
  document.getElementById(P00XMUIImgCont).src = image;
  bckimg = "url('".concat(image, "')");
  document.getElementById("box").style.backgroundImage = bckimg;
}
