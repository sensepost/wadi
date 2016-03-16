//require('./randoms.js')

ELEM_COUNT = 10
STR_NUM = 20
FUZZ_COUNT = 100
PATH_COUNT = 5

strokeStyleFunc = function() {
	var returnString = ''
	switch(rint(3)) {
		case 0:
			returnString += 'ctx.createLinearGradient('+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+')'
			break;
		case 1:
			returnString += 'ctx.createRadialGradient('+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+')'
			break;
		case 2:
			returnString += 'ctx.createPattern(img,"'+ra(['repeat','repeat-x','repeat-y','no-repeat',''])+'")'
			break;
	}
	return returnString
}

hitRegion = function() {
	HRinit = 0;
	hitRegionOptions = [
		// ['path',['null',function() {return ra(createdPaths)}]],
		['fillRule',['"evenodd"','"nonzero"']],
		['id',[function() {var str = 'HR'+HRinit; HRinit++;return str}]],
		['parentID',['null']],
		['cursor',[retcursorURI,'"auto"','"crosshair"','"pointer"','"alias"','"all-scroll"','"cell"','"context-menu"','"col-resize"','"copy"','"default"','"e-resize"','"ew-resize"','"help"','"move"','"n-resize"','"ne-resize"','"nesw-resize"','"ns-resize"','"nw-resize"','"nwse-resize"','"no-drop"','"none"','"not-allowed"','"pointer"','"progress"','"row-resize"','"s-resize"','"se-resize"','"sw-resize"','"text"','"vertical-text"','"w-resize"','"wait"','"zoom-in"','"zoom-out"','"initial"','"inherit"']],
		// ['control',['null',function() {return ra(createdElements)}]],
		['label',['null',function() {return '"'+string(rint(STR_NUM))+'"'}]],
		['role',['null',function() {return '"'+string(rint(STR_NUM))+'"'}]]
	]
	var returnString = '{'
	var arr = new Array()
	var prob = rint(hitRegionOptions.length)+1
	while(prob--){
		var hr = ra(hitRegionOptions)
		arr.push(hr[0]+":"+arrayWalk(hr[1]))
	}
	returnString += arr.join()
	returnString +='}'
	return returnString
}

imagedata = function() {
	var returnString = ''
	switch(rint(3)) {
		case 0:
			returnString += 'ctx.createImageData('+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+')'
			break;
		case 1:
			returnString += 'ctx.createImageData(ctx.createImageData('+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+'))'
			break;
		case 2:
			returnString += 'ctx.getImageData('+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+')'
			break;
	}
	return returnString
}

setLineDashFunc = function() {
	var returnString = '['
	var returnArray = new Array()
	var round = rint(1000)+1
	while(round--){
		returnArray.push(rint(ra(INT_NUMS)))
	}
	returnString += returnArray.join()
	returnString +=']'
	return returnString
}

CanvasRenderingContext2DInterface = {
	'Name':'CanvasRenderingContext2D',
	'type':'CanvasRenderingContext2D',
	'Attributes':[
		['width',[function() {return rint(ra(INT_NUMS))},floatValue,''],'high'],
		['height',[function() {return rint(ra(INT_NUMS))},floatValue,''],'high'],
		// ['currentTransform',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])},''],'high],
		['globalAlpha',[function() {return rint(ra(INT_NUMS))},floatValue,''],'high'],
		['globalCompositeOperation',['source-over','copy',''],'high'],
		['imageSmoothingEnabled',[randbool,''],'high'],
		['strokeStyle',[getRandomColor,strokeStyleFunc],'high'],
		['fillStyle',[getRandomColor,strokeStyleFunc],'high'],
		['shadowOffsetX',[function() {return rint(ra(INT_NUMS))},floatValue,''],'high'],
		['shadowOffsetY',[function() {return rint(ra(INT_NUMS))},floatValue,''],'high'],
		['shadowBlur',[function() {return rint(ra(INT_NUMS))},floatValue,''],'high'],
		['shadowColor',[getRandomColor,''],'high'],
		['lineWidth',[function(){return rint(ra(INT_NUMS))},floatValue,''],'high'],
		['lineCap',['butt','round','square',''],'high'],
		['lineJoin',['join','bevel','miter',''],'high'],
		['miterLimit',[function(){return rint(ra(INT_NUMS))},floatValue,''],'high'],
		['lineDashOffset',[function(){return rint(ra(INT_NUMS))},floatValue,''],'high'],
		['font',[fontAtrribute,''],'high'],
		['textAlign',['start','end','left','right','center',''],'high'],
		['textBaseline',["top", "hanging", "middle", "alphabetic", "ideographic", "bottom",''],'high'],
		['direction',["ltr", "rtl", "inherit",''],'high']
	],
	'Methods':[
		// ['commit',[''],'high'],
		['save',[''],'high'],
		['restore',[''],'high'],
		['scale',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['rotate',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['translate',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['transform',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['setTransform',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['resetTransform',[''],'high'],
		['createLinearGradient',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['createRadialGradient',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(POS_INT_NUMS)),posfloatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(POS_INT_NUMS)),posfloatValue()])}],'high'],
		['createPattern',[function() {return 'img,"'+ra(['repeat','repeat-x','repeat-y','no-repeat',''])+'"'}],'high'],
		['clearRect',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['fillRect',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['strokeRect',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['beginPath',[''],'high'],
		['fill',['','"nonzero"','"evenodd"'],'high'],
		['fill',[function() {return ra(createdPaths)+ra([',"nonzero"',',"evenodd"',''])}],'high'],
		['stroke',[''],'high'],
		['stroke',[function() {return ra(createdPaths)}],'high'],
		['drawFocusIfNeeded',['ctx.canvas',function() {return 'document.createElement("'+ra(ElementsArray)+'")'},function() {return ra(createdElements)}],'high'],
		['drawFocusIfNeeded',[function() {return ra(createdPaths)+','+ra(['ctx.canvas',function() {return 'document.createElement("'+ra(ElementsArray)+'")'},ra(createdElements)])}],'high'],
		// ['scrollPathIntoView',[''],'high'],
		// ['scrollPathIntoView',[function() {return ra(createdPaths)}],'high'],
		['clip',['','"nonzero"','"evenodd"'],'high'],
		['clip',[function() {return ra(createdPaths)+ra([',"nonzero"',',"evenodd"',''])}],'high'],
		// ['resetClip',[''],'high'],
		['isPointInPath',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+ra([',"nonzero"',',"evenodd"',''])}],'high'],
		['isPointInPath',[function() {return ra(createdPaths)+','+ ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+ra([',"nonzero"',',"evenodd"',''])}],'high'],
		['isPointInStroke',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['isPointInStroke',[function() {return ra(createdPaths)+','+ ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['fillText',[function() {return '"'+string(rint(STR_NUM))+'",'+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+ra([','+ra([rint(ra(INT_NUMS)),floatValue()]),''])}],'high'],
		['strokeText',[function() {return '"'+string(rint(STR_NUM))+'",'+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+ra([','+ra([rint(ra(INT_NUMS)),floatValue()]),''])}],'high'],
		['measureText',[function() {return '"'+string(rint(STR_NUM))+'"'},'""'],'high'],
		['drawImage',[function() {return 'img,'+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['drawImage',[function() {return 'img,'+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['drawImage',[function() {return 'img,'+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		// ['addHitRegion',['',hitRegion],'high'],
		// ['removeHitRegion',[function() {return 'HR'+rint(HRinit)}],'high'],
		// ['clearHitRegions',[''],'high'],
		['createImageData',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['createImageData',[function() {return 'ctx.createImageData('+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+')'}],'high'],
		['getImageData',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['putImageData',[function() {return imagedata()+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['putImageData',[function() {return imagedata()+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['setLineDash',[setLineDashFunc],'high'],
		['getLineDash',[''],'high'],
		['closePath',[''],'high'],
		['moveTo',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['lineTo',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['quadraticCurveTo',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['bezierCurveTo',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['arcTo',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(POS_INT_NUMS)),posfloatValue()])}],'high'],
		['arcTo',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(POS_INT_NUMS)),posfloatValue()])+','+ra([rint(ra(POS_INT_NUMS)),posfloatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['rect',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['arc',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(POS_INT_NUMS)),posfloatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+ra([','+randbool(),''])}],'high'],
		['ellipse',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(POS_INT_NUMS)),posfloatValue()])+','+ra([rint(ra(POS_INT_NUMS)),posfloatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+ra([','+randbool(),''])}],'high'],
		['setTransform',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high']
	]
}

Path2dInterface = {
	'Name':'Path2d',
	'type':'P',
	'Methods':[
		['closePath',[''],'high'],
		['moveTo',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['lineTo',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['quadraticCurveTo',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['bezierCurveTo',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['arcTo',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(POS_INT_NUMS)),posfloatValue()])}],'high'],
		['arcTo',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(POS_INT_NUMS)),posfloatValue()])+','+ra([rint(ra(POS_INT_NUMS)),posfloatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['rect',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])}],'high'],
		['arc',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(POS_INT_NUMS)),posfloatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+ra([','+randbool(),''])}],'high'],
		['ellipse',[function() {return ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(POS_INT_NUMS)),posfloatValue()])+','+ra([rint(ra(POS_INT_NUMS)),posfloatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+','+ra([rint(ra(INT_NUMS)),floatValue()])+ra([','+randbool(),''])}],'high']
	]
}

ElementsArray = ["TITLE","FONT","ISINDEX","STYLE","BODY","FORM","SELECT","A","ABBR","ADDRESS","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BLOCKQUOTE","BUTTON","CANVAS","CAPTION","CITE","CODE","DATA","DATALIST","DD","DEL","DFN","DIV","DL","DIR","MENU","DT","EM","FIELDSET","figcaption","figure","footer","H1","HEADER","I","IFRAME","INS","KBD","KEYGEN","LABEL","LEGEND","LI","MAIN","MAP","METER","NAV","OBJECT","OLIST","OPTGROUP","OUTPUT","P","APPLET","PRE","PROGRESS","Q","RP","RTC","RUBY","S","SAMP","SECTION","SMALL","SPAN","STRONG","SUB","SUP","TD","TEMPLATE","TEXTAREA","TIME","TRACK","U","ULIST","VAR","VIDEO"]

function generateTestCase(){

	var returnString="<html>\n	<head>\n	<meta http-equiv='Cache-Control' content='no-cache'/>	<style></style>\n"//	<script>\nfunction start(){"
	//returnString += "<script>"
	//returnString+=generate(1)
	//returnString+="window.location.href = window.location.protocol + '//' + window.location.host + '/'\n"
	returnString +="\n</head>\n"
	returnString+='<body>\n</body>\n<script>'
	returnString+=generate(1)
	returnString+="window.location.href = window.location.protocol + '//' + window.location.host + '/wadi'\n"
	returnString+='\n</script>'
	//returnString+= '\n<body>\n</body>'
	returnString+='\n</html>'
	return returnString
}

function generate(num){
	Array.prototype.shuffle = function() {
	var s = [];
	while (this.length) s.push(this.splice(Math.random() * this.length, 1));
	while (s.length) this.push(s.pop());
	return this;
	}
	
	Array.prototype.remove = function(from, to) {
	  var rest = this.slice((to || from) + 1 || this.length);
	  this.length = from < 0 ? this.length + from : from;
	  return this.push.apply(this, rest);
	};
	var returnString = 'var createdObjects={}\n'
	returnString += 'var c = document.createElement("CANVAS")\n'
	returnString += 'c.width = 1000\n'
	returnString += 'c.height = 1000\n'
	returnString += 'document.body.appendChild(c)\n'
	returnString += 'var img = new Image()\n'
	returnString += 'img.src="'+ra(images)+'"\n'
	var returnArray=new Array()
	createdElements = new Array()
	createdObjects = new Array()
	createdPaths = new Array()
	while(num--){
		returnArray=returnArray.concat(createContext())
		returnArray=returnArray.concat(createElements((rint(ELEM_COUNT)+1)))
		returnArray=returnArray.concat(createPaths((rint(PATH_COUNT)+1)))
		returnArray=returnArray.concat(fuzz(rint(FUZZ_COUNT)+1))
		// returnArray=returnArray.shuffle()
		for(i=0; i<returnArray.length;i++){
			returnString+='try{ '+returnArray[i]+'} catch(e){}\n'
			// returnString+=returnArray[i]+'\n'
			}
	}
	// if(!rint(10)){
	// 	var Surku=require('./Surku/Surku.js')
	// 	var newGenerator=new Surku({maxMutations:50,minMutations:10})
	// 	return newGenerator.generateTestCase(returnString)
	// }
	// console.log(returnString)
	return returnString
}

function createContext() {
	var returnArray = new Array();
	returnArray = returnArray.concat('ctx = c.getContext("2d")')
	return returnArray
}

function createElements(num) {
	var returnArray = new Array()
	var Name = 'HTML'
	var init = 0
	while(num--){
		returnArray =  returnArray.concat(Name+init+'= document.createElement("'+ra(ElementsArray)+'")');
		returnArray = returnArray.concat('createdObjects["'+Name+init+'"]='+Name+init)
		if(rint(2)){
			returnArray = returnArray.concat('document.body.appendChild('+Name+init+')')
		}
		createdElements.push(Name+init)
	}
	return returnArray
}

function createPaths(num) {
	var returnArray = new Array()
	var obj = Path2dInterface
	var pinit = 0
	while(num--){
		returnArray = returnArray.concat(obj.type+pinit+'= new Path2D()')
		returnArray = returnArray.concat('createdObjects["'+obj.type+pinit+'"]='+obj.type+pinit)
		createdPaths.push(obj.type+pinit)
		pinit++
	}
	for(var i=0;i<(rint(PATH_COUNT)+1);i++){
		var mtd = ra(Path2dInterface.Methods)
		var path = ra(createdPaths)
		returnArray = returnArray.concat(path+'.'+mtd[0]+'('+arrayWalk(mtd[1])+')')
	}
	return returnArray
}

var intFuzz = [
	fuzzMethods,
	fuzzAttributes,
	// createObjects,
	deleteRandomKey,
	// addLoop,
	GarColl
]

function intfuzz(num){
	var returnArray = new Array()
	while(num--){
		var fuzzwht = ra(intFuzz)
		if((fuzzwht == 'addLoop') && rint(25)) {
			continue;
		}
		else {
			returnArray=returnArray.concat(fuzzwht())
		}
		
	}
	return returnArray
}

var fuzzing = [
	fuzzMethods,
	fuzzAttributes,
	// createObjects,
	deleteRandomKey,
	//addLoop,
	GarColl
]

function fuzz(num){
	var returnArray = new Array()
	while(num--){
		var fuzzwht = ra(fuzzing)
		if((fuzzwht == 'addLoop' || fuzzwht == 'deleteRandomKey' || fuzzwht == 'gc') && rint(25)) {
			continue;
		}
		else {
			returnArray=returnArray.concat(fuzzwht())
		}
		
	}
	return returnArray
}

function fuzzAttributes() {
	var returnArray = new Array()
	var attrib = ra(CanvasRenderingContext2DInterface.Attributes)
	returnArray = returnArray.concat('ctx.'+attrib[0]+'="'+arrayWalk(attrib[1])+'"')
	return returnArray
}

function fuzzMethods() {
	var returnArray = new Array()
	var mtd = ra(CanvasRenderingContext2DInterface.Methods)
	returnArray = returnArray.concat('ctx.'+mtd[0]+'('+arrayWalk(mtd[1])+')')
	return returnArray
}

function deleteRandomKey() {
	var returnArray = new Array()
	returnArray = returnArray.concat("delete createdObjects['"+ra([ra(createdPaths),ra(createdElements)])+"']")
	return returnArray
}

function GarColl(){
	return 'CollectGarbage()'
}

function addLoop() {
	var returnArray = new Array()
	var rndNum = rint(50);
	var loop = ra(["for","setInterval","setTimeout","while"])
	switch (loop) {
		case 'for':
			returnArray = returnArray.concat('for (var i=0;i<'+rndNum+';i++){\n'+intfuzz((rint(5)+1)).join(";")+'}\n')
			break;
		case 'setInterval':
			var retStr ='setInterval(function() {'+intfuzz((rint(5)+1)).join(";")+'},'+rint(10)+');\n' ;
			returnArray = returnArray.concat(retStr.replace(/\n/g, ' ')+'\n')
			break;
		case 'setTimeout':
		    var retStr ='setTimeout(function() {'+intfuzz((rint(5)+1)).join(";")+'},'+rint(10)+');\n';
			returnArray = returnArray.concat(retStr.replace(/\n/g, ' ')+'\n')
			break;
		case 'while':
			returnArray = returnArray.concat('var rndNum = '+rndNum+';\nwhile(rndNum--){\n\t'+intfuzz((rint(5)+1)).join(";")+'}\n')
			break;
	}
	return returnArray
}
/*
module.exports={
	init:function(){
		//
		//These inits are for config.reBuildClientFile() and NodeFuzz.html
		//
		config.filetype='html'
		config.type='text/html'
		config.tagtype='html'
		config.clientFile=config.reBuildClientFile()
		console.log('Mega WebAnimations Grammar Fuzzer')
	},
	fuzz: function(){
		return generateTestCase()
	}
}*/
// console.log(generateTestCase())
// console.log(setLineDashFunc())
