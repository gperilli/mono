


function aboutpage() {
	
  //Set L1 in local storage to ENG if non existent
  if (localStorage.getItem("Lang1") === undefined || localStorage.getItem("Lang1") === null) {
		localStorage.setItem("Lang1", "ENG");
	}
	
  
	
  ShareAdr = 'https://www.google.com';
  //Prepare template strings
  sitewidetemps();

  //Load templates from strings
  document.getElementById("TemplateContainer").insertAdjacentHTML("beforeend", centralcolumnhead);
	document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", HeaderTemp);
	document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", ColumnATemp);
	document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", ColumnBHead);
	
	document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", ColumnBTail);
	document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", ShareBtmTemp);
	document.getElementById("CentralColumn").insertAdjacentHTML("beforeend", AttrTemp);
  document.getElementById("TemplateContainer").insertAdjacentHTML("beforeend", centralcolumntail);
	
	//Load share button graphics
	SocialMBtns();
	
	//Set L1 from stored value
	document.getElementById("L1SelectID").value = localStorage.getItem("Lang1");
	
	//Load in Menu Content before everything else
	//Share Image
    document.getElementById("ShareImgCont").src = "graphics/shareimg.png";
	L1 = document.getElementById("L1SelectID").value;
    L2 = document.getElementById("L2SelectID").value;
	MnuCntnt(L1);
	document.getElementById("menu-about").className = "linkmenu sel";
	
	//Testing Content
	var AboutCnt = `
	<div class="abouttxt" id="AboutCnt">
			
			
			
			
			<!-- Testing -->
			<p style="margin-left: 10px;">
			
			Mono is my personal project developed solely by myself both as an aid to my own language study, and for classroom use when I have been teaching English in Japan. Having worked in a number of different public schools with the remit to teach English in English, it became apparent to me quite quickly that this kind of teaching required considerable resources, and even with such resources, students still like to have the meaning of words confirmed with translation. This is even the case when a vocabulary item has been taught with images, explanation and context in such a way that leaves little room for doubt as to the meaning of a word. Therefore I have come to the conclusion that translation is a useful part in a repertoire of ways of increasing vocabulary knowledge in a second language. Images, context, associated words, collocations, and the necessary speaking practice and frequent usage are all contributing factors to vocabulary acquisition.</p>
			<br><br>
				
			
			
		
			
			<p>
			A typical way of organizing learning materials, that differs from much public school language teaching, is by functional, real world context, rather than grammar mastery. This difference is quite clear with any basic comparison of textbooks focused on communicative conversation practice, with the standard high school textbooks aimed at imparting test-able vocabulary translation ability, and grammar knowledge. The function of this type of pedagogy is almost in direct confrontation with communictaive approaches, in that it is a clearly meritocratic exercise used for testing students and then using the point scores derived from this as a basis for decisions on, say, suitability for university entrance. </p>
			<br><br>
			
			<p>
			
			Each annotated image on Mono has about 8 vocabulary items that are connected either by their semantic group or through association to a real world scene. There has been much research on the value of semantic grouping, some arguing against it on the basis of "interference" that takes place during vocabulart learning. Though I do not doubt the validity of semantically related word items interfering in the learning process, I still believe that grouping vocabulary in this way helps both learner and teacher keep track of progress in language acquisition. It also serves to logically group items together that may be required by the learner for a particular situation they might find thesmeslves in. At present Mono supports Enlish, Japanese, and Italian. All word items are linked to the folloing dictionaries:
			</p>
			
			<div style="padding-left: 10px; padding-top: 10px;" align="left">
			
			<a href="https://ejje.weblio.jp" >
			<img id="AbtImg3" src="graphics/Weblio.png" >
			</a>
			
			<a href="https://tangorin.com">
			<img id="AbtImg3" src="graphics/Tangorin.png" >
			</a>
			
			<a href="https://context.reverso.net/translation/">
			<img id="AbtImg3" src="graphics/Reverso.png" >
			</a>
			
			<a href="https://forvo.com">
			<img id="AbtImg3" src="graphics/Forvo.png">
			</a>
			
			<a href="https://dictionary.goo.ne.jp">
			<img id="AbtImg3" src="graphics/Goo.png" >
			</a>
			
			<a href="https://jisho.org">
			<img id="AbtImg3" src="graphics/Jisho.png" >
			</a>
			
			<a href="http://www.treccani.it/vocabolario/">
			<img id="AbtImg3" src="graphics/Treccani.png" >
			</a>
			
			<a href="https://www.collinsdictionary.com/dictionary/italian-english/">
			<img id="AbtImg3" src="graphics/Collins.png" >
			</a>
			
			<a href="https://en.bab.la">
			<img id="AbtImg3" src="graphics/babla.png" >
			</a>
			
			<a href="https://dictionary.cambridge.org/dictionary/english/">
			<img id="AbtImg3" src="graphics/Cambridge.png" >
			</a>
			
			<a href="https://www.merriam-webster.com">
			<img id="AbtImg3" src="graphics/Mwebster.png" >
			</a>
			
			<a href="https://www.dict.com">
			<img id="AbtImg3" src="graphics/Dict.png" >
			</a>
			
			
			
			</div>
			
			
			
			<p style="text-indent: 0px;">
			Example sentences are when stated from the Tatoeba corpus, and audio files have been created using Ivona voices, which has since been become Amazon Polly.
			</p>
			
			<div style="padding-left: 10px; padding-top: 10px;" align="center">
			
			<a href="https://tatoeba.org/eng/" >
			<img id="AbtImg3" src="graphics/Tatoeba.png" >
			</a>
			
			<a href="https://www.ivona.com" >
			<img id="AbtImg3" src="graphics/Ivona.png" >
			</a>
			
			</div>
			
			
			<p>
			The next logical step for Mono, beyond simply increasing the annotated image collection, will be to develop a learning platform that can, for example, give a simple 10-20 minute practice session for word items and example sentences, preferably with back-chained audio synced to highlighted text. Extending the available languages is of course, another aim.
			</p>
			<br><br>
			<p>
			Mono is my first attempt at digitizing my language learning materials, and this is probably visible in the code. Everything is written in HTML, CSS, Javascript, and all images are SVGs. I have enjoyed the simplicity of limiting myself to these languages, although I think keeping templates in Javascipt multiline strings is not a standard way of coding a website...
			</p>
			<br><br>
			<p style="text-indent: 0px;">
			If you have any questions or would like to contribute, please contact me by email. 
			</p>
			<br><br>
			<p>
			Thanks for checking out my site.
			</p>
			<br><br>
			<p style="text-indent: 60px;">
			Gareth.
			</p>
			<br>
			
			<div align="right">
			<p>
			<a href="mailto:webmaster@example.com">garethperilli@gmail.com</a>
			</p>
			</div>
	</div>
	`;
	document.getElementById("ColumnB").insertAdjacentHTML("beforeend", AboutCnt);

}

function LangUpdate() {
  // Main App UI Update on Lang. Select,
  
  L1 = document.getElementById("L1SelectID").value;
  L2 = document.getElementById("L2SelectID").value;
  MnuCntnt(L1);
  HdrFtrTxt(L1);
  
  //IndxNms function uses this variable to determine that page is the index 
  PgId = "Index";
  
  //Send newly seleted L1 to local storage
  localStorage.setItem("Lang1", L1);
  

}
