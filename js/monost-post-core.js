<!DOCTYPE html>
<html>

<head>
<title></title>

<meta name="viewport" content="width=device-width, initial-scale=1" charset="UTF-8">

<!-- OG Facebook -->
<meta property="og:url" content="https://gperilli.github.io/mono/" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Mono" />
<meta property="og:description" content="Mono" />
<meta property="og:image" content="https://gperilli.github.io/mono/graphics/shareimg.png" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@flickr" />
<meta name="twitter:title" content="Mono" />
<meta name="twitter:description" content="Mono" />
<meta name="twitter:image" content="https://gperilli.github.io/mono/graphics/shareimg.png" />

<link rel="icon" href="graphics/monostfav.png">

<!-- CSS files -->
<link rel="stylesheet" type="text/css" href="css/monost-Site.css">
<link rel="stylesheet" type="text/css" href="css/monost-Menu.css">
<link rel="stylesheet" type="text/css" href="css/monost-MUI.css">
<link rel="stylesheet" type="text/css" href="css/monost-WIList.css">
<link rel="stylesheet" type="text/css" href="css/monost-Footer.css">

<style>
.headercnt {
	display: none;
}
</style>

</head>

<body onload="GetPostNo()">
<div id="TemplateContainer" align=center style="width: 100%;">

<!-- JS Template  Goes Here -->

</div>
</body>

</html>



<script>

// Share address for this page's share button popup window
var ShareAdr = 'https://gperilli.github.io/mono/';

// load in script element using variable in localStorage
var pno = localStorage.getItem("PostId");

// Set Title
document.title = "Mono: #".concat(pno);

//Set GlType in local storage to BW if non existent
  if (localStorage.getItem("GlType") === undefined || localStorage.getItem("GlType") === null) {
		localStorage.setItem("GlType", "BW");
	}

function GetPostNo() {
		
	//testing for rogue/non existent local storage item 
	if (pno === undefined || pno === null) {
		pno = "001";
	} 
	
	var pnosrc = "posts/p".concat(pno, "/", "p", pno, ".js");
	pnovar = "p".concat(pno);
	
	//Load in JS file from local storage item
	//Eg: p00x/p00x.js
	var script1 = window.document.createElement("script");
	window.document.head.appendChild(script1);
	script1.src = pnosrc;
	
	//Load in page with delay
	var myVar;
	//myVar = setTimeout(PageLoadDel, 150);
	setTimeout(function() { pIdTstr(pnovar) }, 150);

}

function pIdTstr(pnovar) {
	pId = window[pnovar];
	if (pId.No === undefined) {
		setTimeout(function() { pIdTstr(pnovar) }, 25)
	} else {
		pageload(pnovar)
	}
}

</script>


<script src="js/monost-sitewide.js"></script>
<script src="js/monost-post-templates.js"></script>
<script src="js/monost-post-core.js"></script>
<script src="js/monost-post-dataprocessing.js"></script>
<script src="js/monost-post-graphics.js"></script>
