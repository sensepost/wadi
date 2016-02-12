require('./randoms.js')

ATTR_NUM = 10
MTD_NUM = 10
ELEM_COUNT = 50
MNG_COUNT = 10
TXT_COUNT = 30
FUZZ_COUNT = 500
STR_NUM = 200
STYLE_ROUNDS = 10
ANIM_NUM = 20
ANIM_EFFECTS = 10
ANIM_TIMING = 5
OBS_NUM = 10
INT_FUNC = 0
INT_FUZZ = 10

cmds = function() {
	var returnString = '';
	var fontFamily = ra(["'Trebuchet MS'", "'Lucida Grande'", "'Lucida Sans Unicode'", "'Lucida Sans'", "'Tahoma'", "'Arial'", "'Helvetica Neue'", "'Helvetica'","'Arial Black'", "'Arial Bold'", "'Gadget'","'Arial Narrow'","'Arial Rounded MT Bold'", "'Helvetica Rounded'","'Avant Garde'", "'Avantgarde'", "'Century Gothic'", "'CenturyGothic'", "'AppleGothic'","'Calibri'", "'Candara'", "'Segoe'", "'Segoe UI'", "'Optima'","'Franklin Gothic Medium'", "'Franklin Gothic'", "'ITC Franklin Gothic'","'Futura'", "'Trebuchet MS'","'Geneva'","'Verdana'","'Gill Sans'", "'Gill Sans MT'","'Impact'", "'Haettenschweiler'", "'Franklin Gothic Bold'", "'Charcoal'", "'Helvetica Inserat'", "'Bitstream Vera Sans Bold'","'Frutiger'", "'Frutiger Linotype'", "'Dejavu Sans'", "'Helvetica Neue'","'Baskerville'", "'Baskerville Old Face'", "'Hoefler Text'", "'Garamond'", "'Times New Roman'","'Big Caslon'", "'Book Antiqua'", "'Palatino Linotype'", "'Georgia'","'Bodoni MT'", "'Didot'", "'Didot LT STD'", "'Hoefler Text'","'Book Antiqua'", "'Palatino'", "'Palatino Linotype'", "'Palatino LT STD'","'Calisto MT'", "'Bookman Old Style'", "'Bookman'", "'Goudy Old Style'", "'Hoefler Text'", "'Bitstream Charter'","'Cambria'","'Didot LT STD'", "'Hoefler Text'","'Lucida Bright'","'Palatino'", "'Palatino Linotype'", "'Palatino LT STD'", "'Book Antiqua'","'Perpetua'","'Rockwell'", "'Courier Bold'", "'Courier'","'Rockwell Extra Bold'", "'Rockwell Bold'","'TimesNewRoman'","'Times'","'Andale Mono'", "'AndaleMono'","'Consolas'", "'monaco'","'Lucida Sans Typewriter'", "'Lucida Typewriter'", "'Lucida Console'", "'Monaco'", "'Bitstream Vera Sans Mono'","'Copperplate'", "'Copperplate Gothic Light'", "'Papyrus'","'Brush Script MT'"])
	var commands = [
		["backColor",[function() {return '"'+getRandomColor()+'"'},'""']],
		["bold",['""']],
		["contentReadOnly",['""',randbool]],
		["copy",['""']],
		["createLink",['""','" "',function() { return '"'+retURL(2000)+'"'}]],
		["cut",['""']],
		["decreaseFontSize",['""']],
		["delete",['""']],
		["enableInlineTableEditing",['""']],
		["enableObjectResizing",['""']],
		["fontName",['""','"'+fontFamily+'"']],
		["fontSize",['""',function() {return rint(2) ? randoms():rint(ra(INT_NUMS))}]],
		["foreColor",[function() {return '"'+getRandomColor()+'"'},'""']],
		["formatBlock",['""',function() {return '"<'+ra(ElementArray)[0].tagName+'>"'},function() {return ra([returnRandomElement,ra(createdText).objName,"document.body"])+"."+ra(["innerHTML","outerHTML"])}]],
		["forwardDelete",['""']],
		["heading",['""',function() { return '"'+ra(ElementArray)[0].tagName+'"' }]],
		["hiliteColor",['""',function() {return '"'+getRandomColor()+'"'}]],
		["increaseFontSize",['""']],
		["indent",['""']],
		["insertBrOnReturn",['""']],
		["insertHorizontalRule",['""']],
		["insertHTML",['""',function() {var elem=ra(ElementArray)[0].tagName; return '"<'+elem+'>'+string(rint(STR_NUM))+'</'+elem+'>"'},function() {return ra([returnRandomElement(),ra(createdText).objName,"document.body"])+"."+ra(["innerHTML","outerHTML"])}]],
		["insertBrOnReturn",['""','" "',function() {return '"'+retmediaURI(2000)+'"'}]],
		["insertOrderedList",['""']],
		["insertUnorderedList",['""']],
		["insertParagraph",['""']],
		["insertText",['""','" "',function() {return '"'+string(rint(STR_NUM))+'"'}]],
		["italic",['""']],
		["justifyCenter",['""']],
		["justifyFull",['""']],
		["justifyLeft",['""']],
		["justifyRight",['""']],
		["outdent",['""']],
		["paste",['""']],
		["redo",['""']],
		["removeFormat",['""']],
		["selectAll",['""']],
		["strikeThrough",['""']],
		["subscript",['""']],
		["superscript",['""']],
		["underline",['""']],
		["undo",['""']],
		["unlink",['""']],
		["useCSS",['""',randbool]],
		["styleWithCSS",['""',randbool]],
	];
	var rndCmd = ra(commands)
	returnString += '"'+rndCmd[0]+'",'+randbool()+','+arrayWalk(rndCmd[1])+''
	return returnString
}

//CSSSTYLE.IDL
CSS2EffectInterface = {
	'Name':'CSS2Properties',
	'Attributes':[
		["azimuth",[angleValue,'left-side','far-left','left','center-left','center','center-right','right','far-right','right-side','behind left-side','behindfar-left','behind left','behind center-left','behind center','behind center-right','behind right','behind far-right','behind right-side','behind leftwards','behind rightwards','inherit']],
		["background",[backgroundAtrribute,"initial","inherit"]],
		["backgroundAttachment",["scroll","fixed","inherit"]],
		["backgroundColor",[getRandomColor]],
		["backgroundImage",[function() {return retCSSimageURI(2000)}]],
		["backgroundPosition",[distanceValue2,'top','center','bottom','right','left','bottom right','bottom left','bottom center','top right','top left','top center',function() {return distanceValue2()+' '+distanceValue2()}]],
		["backgroundRepeat",["repeat","repeat-x","repeat-y","no-repeat","inherit"]],
		["border",[broderAttributes]],
		["borderCollapse",["collapse","inherit","separate"]],
		["borderColor",[getRandomColor,"transparent","inherit"]],
		["borderSpacing",[posdistanceValue1]],
		["borderStyle",["none","hidden","dotted","dashed","solid","double","groove","ridge","inset","outset"]],
		["borderTop",[broderAttributes]],
		["borderRight",[broderAttributes]],
		["borderBottom",[broderAttributes]],
		["borderLeft",[broderAttributes]],
		["borderTopColor",[getRandomColor,"transparent","inherit"]],
		["borderRightColor",[getRandomColor,"transparent","inherit"]],
		["borderBottomColor",[getRandomColor,"transparent","inherit"]],
		["borderLeftColor",[getRandomColor,"transparent","inherit"]],
		["borderTopStyle",["none","hidden","dotted","dashed","solid","double","groove","ridge","inset","outset"]],
		["borderRightStyle",["none","hidden","dotted","dashed","solid","double","groove","ridge","inset","outset"]],
		["borderBottomStyle",["none","hidden","dotted","dashed","solid","double","groove","ridge","inset","outset"]],
		["borderLeftStyle",["none","hidden","dotted","dashed","solid","double","groove","ridge","inset","outset"]],
		["borderTopWidth",[pospxValue,"thin","thick","medium"]],
		["borderRightWidth",[pospxValue,"thin","thick","medium"]],
		["borderBottomWidth",[pospxValue,"thin","thick","medium"]],
		["borderLeftWidth",[pospxValue,"thin","thick","medium"]],
		["borderWidth",[pospxValue,"thin","thick","medium"]],
		["bottom",[distanceValue3,"inherit","auto",function(){return rint(ra(INT_NUMS))}]],
		["captionSide",["top","bottom","left","right","inherit"]],
		["clear",["none","left","right","both","inherit"]],
		["clip",[function() {return 'rect('+distanceValue2()+','+distanceValue2()+','+distanceValue2()+','+distanceValue2()+')'},"auto","initial","inherit"]],
		["color",[getRandomColor]],
		["content",[function() {return retCSSmediaURI(2000)},'open-quote','close-quote','no-open-quote','no-close-quote','inherit',"normal","none"]],
		["counterIncrement",[function () { return string(rint(STR_NUM))+"a"},"inherit","none","initial"]],
		["counterReset",[function () { return string(rint(STR_NUM))+"a "+rint(ra(INT_NUMS))},"inherit","none","initial"]],
		["cssFloat",["left","right","none","inherit"]],
		["cue",[function() {return retCSSmediaURI(2000)},"inherit"]],
		["cueAfter",[function() {return retCSSmediaURI(2000)},"inherit"]],
		["cueBefore",[function() {return retCSSmediaURI(2000)},"inherit"]],
		["cursor",['auto','crosshair','pointer','alias','all-scroll','cell','context-menu',"col-resize","copy","default","e-resize","ew-resize","help","move","n-resize","ne-resize","nesw-resize","ns-resize","nw-resize","nwse-resize","no-drop","none","not-allowed","pointer","progress","row-resize","s-resize","se-resize","sw-resize","text","vertical-text","w-resize","wait","zoom-in","zoom-out","initial","inherit"]],
		["direction",["ltr","rtl","inherit"]],
		["display",["inline","block","list-item","run-in","compact","marker","table","inline-table","table-row-group","table-header-group","table-footer-group","table-row","table-column-group","table-column","table-cell","table-caption","none","inherit","grid",'inline-grid']],
		["elevation",[angleValue,"below","level","above","higher","lower","inherit"]],
		["emptyCells",["show","hide","inherit"]],
		["float",["left","right","none","inherit"]],
		["font",["caption","icon","menu","message-box","small-caption","status-bar"]],//fontAtrribute,"inherit"
		["fontFamily",[returnMultipleFamilies,"inherit","initial"]],
		["fontSize",["xx-small","x-small","small","medium","large","x-large","xx-large","larger","smaller",posdistanceValue1,posdistanceValue1,"inherit"]],
		["fontSizeAdjust",[randoms,"none","inherit"]],
		// ["fontStretch",["normal","wider","narrower","ultra-condensed","extra-condensed","condensed","semi-condensed","semi-expanded","expanded","extra-expanded","ultra-expanded","inherit","initial"]],
		["fontStyle",["normal","italic","oblique","inherit"]],
		["fontVariant",["normal","small-caps","inherit"]],
		["fontWeight",["normal","bold","bolder","lighter","100","200","300","400","500","600","700","800","900","inherit","initial"]],
		["height",[posdistanceValue2,posdistanceValue2,"inherit","auto",function() {return rint(ra(POS_INT_NUMS))}]],
		["left",[distanceValue3,distanceValue3,"inherit","auto",function() {return rint(ra(INT_NUMS))}]],
		["letterSpacing",["normal",distanceValue2,"inherit",function() {return rint(ra(INT_NUMS))}]],
		["lineHeight",["normal",posdistanceValue1,"inherit",function() {return rint(ra(POS_INT_NUMS))}]],
		["listStyle",[listStyleAttribute,"inherit"]],
		["listStyleImage",[function() {return retCSSimageURI(2000)},"none","inherit"]],
		["listStylePosition",["inside","outside","inherit"]],
		["listStyleType",["disc","circle","square","decimal","decimal-leading-zero","lower-roman","upper-roman","lower-greek","lower-alpha","lower-latin","upper-alpha","upper-latin","hebrew","armenian","georgian","cjk-ideographic","hiragana","katakana","hiragana-iroha","katakana-iroha","none","inherit"]],
		["margin",[marginAttribute,"inherit"]],
		["marginTop",[distanceValue3,"inherit",function() {return rint(ra(INT_NUMS))}]],
		["marginRight",[distanceValue3,"inherit",function() {return rint(ra(INT_NUMS))}]],
		["marginBottom",[distanceValue3,"inherit",function() {return rint(ra(INT_NUMS))}]],
		["marginLeft",[distanceValue3,"inherit",function() {return rint(ra(INT_NUMS))}]],
		["markerOffset",[distanceValue,"inherit","auto",function() {return rint(ra(INT_NUMS))}]],
		["marks",["crop","cross","crop cross","cross crop","none","inherit"]],
		["maxHeight",[posdistanceValue1,"inherit","none",function() {return rint(ra(POS_INT_NUMS))}]],
		["maxWidth",[posdistanceValue1,function() {return rint(ra(POS_INT_NUMS))},"inherit","none"]],
		["minHeight",[posdistanceValue1,function() {return rint(ra(POS_INT_NUMS))},"inherit"]],
		["minWidth",[posdistanceValue1,function() {return rint(ra(POS_INT_NUMS))},"inherit"]],
		["orphans",["inherit",function() {return (rint(ra(POS_INT_NUMS))+1)}]],
		["outline",[outlineAttribute,"inherit"]],
		["outlineColor",[getRandomColor,"invert","inherit"]],
		["outlineStyle",["none","dotted","dashed","solid","double","groove","ridge","inset","outset","inherit"]],//,"hidden"
		["outlineWidth",[posdistanceValueblur,"thin","thick","medium","inherit"]],//,function() {return rint(ra(POS_INT_NUMS))},
		["overflow",["visible","hidden","scroll","auto","inherit"]],
		["padding",[paddingAttribute,"inherit"]],
		["paddingTop",[posdistanceValue1,function(){return rint(ra(POS_INT_NUMS))},"inherit"]],
		["paddingRight",[posdistanceValue1,function(){return rint(ra(POS_INT_NUMS))},"inherit"]],
		["paddingBottom",[posdistanceValue1,function(){return rint(ra(POS_INT_NUMS))},"inherit"]],
		["paddingLeft",[posdistanceValue1,function(){return rint(ra(POS_INT_NUMS))},"inherit"]],
		["pageBreakAfter",["auto","always","avoid","left","right","inherit"]],
		["pageBreakBefore",["auto","always","avoid","left","right","inherit"]],
		["pageBreakInside",["auto","avoid","inherit"]],
		["pause",[function() {return timeValue()},function() {return timeValue()+" "+ timeValue()},"inherit"]],
		["pauseAfter",[function() {return timeValue()},"inherit"]],
		["pauseBefore",[function() {return timeValue()},"inherit"]],
		["pitch",[freqValue,"x-low","low","medium","high","x-high","inherit"]],
		["pitchRange",[randoms,"inherit"]],
		["playDuring",[function() {return retCSSmediaURI(2000)},function() {return retCSSmediaURI(2000)+" mix"},function() {return retCSSmediaURI(2000)+" repeat"},function() {return retCSSmediaURI(2000)+" mix repeat"},"auto","none","inherit"]],
		["position",["static","relative","absolute","fixed","inherit"]],
		["richness",[randoms,function(){return rint(ra(INT_NUMS))},"inherit"]],
		["right",[distanceValue3,"auto","inherit",function(){return rint(ra(INT_NUMS))}]],
		["size",[posdistanceValueblur,function() {return posdistanceValueblur()+" "+posdistanceValueblur()},"auto","portrait","landscape","inherit"]],
		["stress",[randoms,"inherit",function(){return rint(ra(INT_NUMS))}]],
		["tableLayout",["auto","fixed","inherit"]],
		["textAlign",["left","right","center","justify","inherit","initial"]],
		["textDecoration",["none","underline","overline","line-through","initial","inherit"]],
		["textIndent",[distanceValue3,distanceValue3,"inherit",function(){return rint(ra(INT_NUMS))}]],
		["textShadow",[textShadowAttribute,"inherit","none","initial"]],
		["textTransform",["capitalize","uppercase","lowercase","none","inherit","initial"]],
		["top",[distanceValue3,"auto","inherit",function(){return rint(ra(INT_NUMS))}]],
		["unicodeBidi",["normal","embed","bidi-override","inherit"]],
		["visibility",["visible","hidden","collapse","inherit"]],
		["verticalAlign",[distanceValue3,distanceValue3,"baseline","sub","super","top","text-top","middle","bottom","text-bottom","inherit",function(){return rint(ra(INT_NUMS))}]],
		["voiceFamily",[voiceFamilyAttribute,"inherit"]],
		["volume",["inherit",function(){return rint(ra(INT_NUMS))},percentValue]],
		["whiteSpace",["normal","pre","nowrap","inherit","pre-line","pre-wrap","initial"]],
		["widows",[function(){return (rint(ra(POS_INT_NUMS))+1)},"inherit",function(){return (rint(ra(POS_INT_NUMS))+1)}]],
		["width",[posdistanceValue2,function(){return rint(ra(POS_INT_NUMS))},"auto","inherit"]],
		["wordSpacing",[distanceValue2,"normal","inherit",function(){return rint(ra(INT_NUMS))},"initial"]],
		["zIndex",[function(){return rint(ra(INT_NUMS))},"inherit",function(){return rint(ra(INT_NUMS))}]],
		['opacity',[floatValue,"initial","inherit"]],
		['backgroundClip',['border-box','padding-box','content-box','initial','inherit']],
		['backgroundOrigin',['border-box','padding-box','content-box','initial','inherit']],
		['backgroundSize',['contain','initial','inherit','cover','auto',function() {return distanceValue4()+" "+distanceValue4()},distanceValue4]],//,function() {return rint(2) ? rint(ra(INT_NUMS)):rint(ra(INT_NUMS))+' '+rint(ra(INT_NUMS))}
		['borderBottomLeftRadius',['initial','inherit',function() {return posdistanceValueflex()+" "+posdistanceValueflex()},posdistanceValueflex]],//,function() {return rint(2) ? rint(ra(POS_INT_NUMS)):rint(ra(POS_INT_NUMS))+' '+rint(ra(POS_INT_NUMS))}
		['borderBottomRightRadius',['initial','inherit',function() {return posdistanceValueflex()+" "+posdistanceValueflex()},posdistanceValueflex]],//,function() {return rint(2) ? rint(ra(POS_INT_NUMS)):rint(ra(POS_INT_NUMS))+' '+rint(ra(POS_INT_NUMS))}
		['borderImageSource',['none','initial','inherit',function() {return retCSSimageURI(2000)}]],
		['borderImageWidth',['initial','auto','inherit',posrnd4Lengths]],
		['borderImageOutset',['initial','inherit',posrnd4Lengthsnoperc]],
		['borderImageRepeat',['repeat','stretch','round','space','initial','inherit']],
		['borderImageSlice',['initial','inherit',posrnd4nums]],//,'fill'
		['borderImage',[function() {return  retCSSimageURI(2000)+' '+arrayWalk([pospercentValue,function() {return rint(ra(POS_INT_NUMS))},''])+' '+arrayWalk([pospercentValue,function() {return rint(ra(POS_INT_NUMS))},''])+' '+arrayWalk([pospercentValue,function() {return rint(ra(POS_INT_NUMS))},''])+' '+ra(['repeat','stretch','round','space',''])},'inherit','initial']],
		['borderTopLeftRadius',['initial','inherit',function() {return posdistanceValueflex()+" "+posdistanceValueflex()},posdistanceValueflex,]],//function() {return rint(2) ? rint(ra(POS_INT_NUMS)):rint(ra(POS_INT_NUMS))+' '+rint(ra(POS_INT_NUMS))}
		['borderTopRightRadius',['initial','inherit',function() {return posdistanceValueflex()+" "+posdistanceValueflex()},posdistanceValueflex]],//,function() {return rint(2) ? rint(ra(POS_INT_NUMS)):rint(ra(POS_INT_NUMS))+' '+rint(ra(POS_INT_NUMS))}
		['borderRadius',['initial','inherit',function() {return posrnd4Lengthsflex()+'/'+posrnd4Lengthsflex()}]],
		['boxShadow',['none','initial','inherit',function() {return posdistanceValueblur()+' '+posdistanceValueblur()+' '+posdistanceValueblur()+' '+ra([txtdistanceValue(),''])+' '+ra([getRandomColor(),''])+' '+ra(['inset',''])}]],
		['overflowX',['visible','hidden','scroll','auto','initial','inherit']],
		['overflowY',['visible','hidden','scroll','auto','initial','inherit']],
		['alignContent',['stretch','center','flex-start','flex-end','space-between','space-around','initial','inherit']],
		['alignItems',['stretch','center','flex-start','flex-end','baseline','initial','inherit']],
		['alignSelf',['stretch','center','flex-start','flex-end','baseline','initial','inherit','auto']],
		['flexGrow',[function() {return rint(ra(POS_INT_NUMS))},'initial','inherit']],
		['flexShrink',[function() {return rint(ra(POS_INT_NUMS))},'initial','inherit']],
		['flexBasis',[posdistanceValueflex,'initial','inherit','auto']],
		['flexDirection',['row','row-reverse','column','column-reverse','initial','inherit']],
		['flexWrap',['nowrap','wrap','wrap-reverse','initial','inherit']],
		['flexFlow',[function() {return ra(['row','row-reverse','column','column-reverse'])+" "+ra(['nowrap','wrap','wrap-reverse'])},'initial','inherit']],
		['flex',[function() {return rint(ra(POS_INT_NUMS))+' '+ra([rint(ra(POS_INT_NUMS)),''])+' '+ra([posdistanceValueflex(),''])},function() {return rint(ra(POS_INT_NUMS))},'inherit','auto','initial','none']],
		['justifyContent',['flex-start','flex-end','center','space-between','space-around','initial','inherit']],
		['order',['inherit','initial',function() {return rint(ra(INT_NUMS))}]],
		['hangingPunctuation',['initial','inherit','none','first','last','allow-end','force-end']],
		['tabSize',[function() {return rint(ra(POS_INT_NUMS))},'initial','inherit']],//,posdistanceValue2
		['textAlignLast',['auto','left','right','center','justify','start','end','initial','inherit']],
		['textJustify',['auto','distribute','none','initial','inherit']],//,'inter-word','inter-ideograph','inter-cluster','kashida','trim'
		['wordBreak',['normal','break-all','initial','inherit']],//,'keep-all'
		['wordWrap',['normal','break-word','initial','inherit']],
		['textDecorationColor',[getRandomColor,'initial','inherit']],
		['textDecorationLine',['none','underline','overline','line-through','initial','inherit']],
		['textDecorationStyle',['solid','double','dotted','dashed','wavy','initial','inherit']],
		['animationDelay',[timeValue,'initial','inherit']],
		['animationDirection',['normal','reverse','alternate','alternate-reverse','initial','inherit']],
		['animationDuration',[timeValue,'initial','inherit']],
		['animationFillMode',['none','forwards','backwards','both','initial','inherit']],
		['animationPlayState',['paused','running','initial','inherit']],
		['animationName',[function() {return string(rint(STR_NUM))},'none','inherit','initial']],
		['animationIterationCount',['infinite','initial','inherit',function() {return rint(ra(INT_NUMS))},randoms]],
		['animationTimingFunction',['linear','ease','ease-in','ease-out',function() {return 'cubic-bezier('+floatValue()+","+floatValue()+","+floatValue()+","+floatValue()+")"},'initial','inherit']],
		['animation',[function() {return arrayWalk([function() {return string(rint(STR_NUM))},'none'])+" "+timeValue()+" "+arrayWalk(['linear','ease','ease-in','ease-out',function() {return 'cubic-bezier('+floatValue()+","+floatValue()+","+floatValue()+","+floatValue()+")"},''])+" "+arrayWalk([timeValue,''])+" "+arrayWalk(['infinite',function() {return rint(ra(INT_NUMS))},randoms,''])+" "+ra(['normal','reverse','alternate','alternate-reverse',''])+" "+ra(['none','forwards','backwards','both',''])+ " "+ra(['paused','running',''])},'inherit','initial']],
		['backfaceVisibility',['visible','hidden','initial','initial']],
		['perspective',['none',posdistanceValueblur,'initial','inherit']],//,function() {return rint(ra(POS_INT_NUMS))}
		['perspectiveOrigin',[function() {return arrayWalk(['left','center','right',distanceValue4])+" "+ arrayWalk(['top','center','bottom',distanceValue4])},'inherit','initial']],
		['transformOrigin',[function() {return arrayWalk(['left','center','right',txtdistanceValue])+" "+ arrayWalk(['top','center','bottom',txtdistanceValue])+" "+txtdistanceValue()},'inherit','initial']],
		['transformStyle',['flat','preserve-3d','initial','inherit']],
		['transform',[transformValue,'initial','inherit']],
		['transitionProperty',['none','all','initial','inherit',function() {return ra(CSSPropertiesInterface.Attributes)[0]}]],
		['transitionDuration',[timeValue,'initial','inherit']],
		['transitionTimingFunction',['linear','ease','ease-in','ease-out','ease-in-out',function() {return 'cubic-bezier('+floatValue()+","+floatValue()+","+floatValue()+","+floatValue()+")"},'initial','inherit']],
		['transitionDelay',['initial','inherit',timeValue]],
		['transition',[function() {return arrayWalk(['none','all',function() {return ra(CSSPropertiesInterface.Attributes)[0]}])+" "+timeValue()+" "+arrayWalk(['linear','ease','ease-in','ease-out','ease-in-out',function() {return 'cubic-bezier('+floatValue()+","+floatValue()+","+floatValue()+","+floatValue()+")"},''])+ " "+ra([timeValue(),''])},'initial','inherit']],
		['boxSizing',['content-box','border-box','initial','inherit']],
		['icon',[function() {return retCSSimageURI(2000)},'auto','initial','inherit']],
		['navDown',['auto','initial','inherit',function() {return "#"+ra(createdElements).objName},function() {return rint(2) ? ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']']):string(rint(STR_NUM))}]],
		['navLeft',['auto','initial','inherit',function() {return "#"+ra(createdElements).objName},function() {return rint(2) ? ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']']):string(rint(STR_NUM))}]],
		['navRight',['auto','initial','inherit',function() {return "#"+ra(createdElements).objName},function() {return rint(2) ? ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']']):string(rint(STR_NUM))}]],
		['navUp',['auto','initial','inherit',function() {return "#"+ra(createdElements).objName},function() {return rint(2) ? ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']']):string(rint(STR_NUM))}]],
		['navIndex',[function() {return rint(ra(INT_NUMS))},randoms,'auto','initial','inherit']],
		['outlineOffset',[txtdistanceValue,'initial','inherit']],//,function(){return rint(ra(INT_NUMS))}
		['resize',['none','both','horizontal','vertical','initial','inherit']],
		['textOverflow',['clip','ellipsis','initial','inherit']],//,function() {return rint(ra(INT_NUMS))}
		['columnRuleStyle',['none','hidden','dotted','dashed','solid','double','groove','ridge','inset','outset','initial','inherit']],
		['columnRuleWidth',['medium','thin','thick','initial','inherit',distanceValue,function() {return rint(ra(INT_NUMS))}]],
		['columnSpan',['1','all','initial','inherit']],
		['columnWidth',['auto','inherit','initial',distanceValue,function() {return rint(ra(INT_NUMS))}]],
		['columns',['auto',function() {return arrayWalk(['auto','inherit','initial',distanceValue,function() {return rint(ra(INT_NUMS))}])+" "+ra([rint(ra(INT_NUMS))])},'initial','inherit']],
		['columnCount',[function(){return rint(ra(INT_NUMS))},randoms,'auto','initial','inherit']],
		['columnFill',['balance','auto','initial','inherit']],
		['columnGap',[distanceValue,function() {return rint(ra(INT_NUMS))},'normal','initial','inherit']],
		['columnRule',[function() {return arrayWalk(['medium','thin','thick',distanceValue,function() {return rint(ra(INT_NUMS))}])+" "+arrayWalk(['none','hidden','dotted','dashed','solid','double','groove','ridge','inset','outset'])+" "+arrayWalk([getRandomColor])},'initial','inherit']],
		['columnRuleColor',[getRandomColor,'initial','inherit']],
		['boxDecorationBreak',['slice','clone','initial','inherit','unset']],
		['hyphens',['none','manual','auto','inherit']],
		['overflowWrap',['normal','break-word','inherit']],
		['textCombineUpright',['none','all',function() {return rint(ra(INT_NUMS))}]],
		['textUnderlinePosition',['auto','under','inherit']],//'left','right','under left','right under',
		['fontFeatureSettings',['normal','inherit',"aaaa","aaaa "+randbool(),"smcp","smcp "+randbool(),"swsh","swsh "+randbool()]],
		['fontKerning',['auto','normal','none','initial','inherit','unset']],
		['fontLanguageOverride',['normal','initial','inherit','unset',ra(["ABA","ABK","ADY","AFK","AFR","AGW","ALS","ALT","AMH","APPH","ARA","ARI","ARK","ASM","ATH","AVR","AWA","AYM","AZE","BAD","BAG","BAL","BAU","BBR","BCH","BCR","BEL","BEM","BEN","BGR","BHI","BHO","BIK","BIL","BKF","BLI","BLN","BLT","BMB","BML","BOS","BRE","BRH","BRI","BRM","BSH","BTI","CAT","CEB","CHE","CHG","CHH","CHI","CHK","CHP","CHR","CHU","CMR","COP","COS","CRE","CRR","CRT","CSL","CSY","DAN","DAR","DCR","DEU","DGR","DHV","DIV","DJR","DNG","DNK","DRI","DUN","DZN","EBI","ECR","EDO","EFI","ELL","ENG","ERZ","ESP","ETI","EUQ","EVK","EVN","EWE","FAN","FAR","FIN","FJI","FLE","FNE","FON","FOS","FRA","FRI","FRL","FTA","FUL","GAD","GAE","GAG","GAL","GAR","GAW","GEZ","GIL","GMZ","GON","GRN","GRO","GUA","GUJ","HAI","HAL","HAR","HAU","HAW","HBN","HIL","HIN","HMA","HND","HO","HRI","HRV","HUN","HYE","IBO","IJO","ILO","IND","ING","INU","IPPH","IRI","IRT","ISL","ISM","ITA","IWR","JAV","JII","JAN","JUD","JUL","KAB","KAC","KAL","KAN","KAR","KAT","KAZ","KEB","KGE","KHA","KHK","KHM","KHS","KHV","KHW","KIK","KIR","KIS","KKN","KLM","KMB","KMN","KMO","KMS","KNR","KOD","KOH","KOK","KON","KOP","KOR","KOZ","KPL","KRI","KRK","KRL","KRM","KRN","KRT","KSH","KSI","KSM","KUI","KUL","KUM","KUR","KUU","KUY","KYK","LAD","LAH","LAK","LAM","LAO","LAT","LAZ","LCR","LDK","LEZ","LIN","LMA","LMB","LMW","LSB","LSM","LTH","LTZ","LUB","LUG","LUH","LUO","LVI","MAJ","MAK","MAL","MAN","MAP","MAR","MAW","MBN","MCH","MCR","MDE","MEN","MIZ","MKD","MLE","MLG","MLN","MLR","MLY","MND","MNG","MNI","MNK","MNX","MOH","MOK","MOL","MON","MOR","MRI","MTH","MTS","MUN","NAG","NAN","NAS","NCR","NDB","NDG","NEP","NEW","NGR","NHC","NIS","NIU","NKL","NKO","NLD","NOG","NOR","NSM","NTA","NTO","NYN","OCI","OCR","OJB","ORI","ORO","OSS","PAA","PAL","PAN","PAP","PAS","PGR","PIL","PLG","PLK","PRO","PTG","QIN","RAJ","RCR","RBU","RIA","RMS","ROM","ROY","RSY","RUA","RUS","SAD","SAN","SAT","SAY","SEK","SEL","SGO","SHN","SIB","SID","SIG","SKS","SKY","SLA","SLV","SML","SMO","SNA","SND","SNH","SNK","SOG","SOT","SQI","SRB","SRK","SRR","SSL","SSM","SUR","SVA","SVE","SWA","SWK","SWZ","SXT","SYR","TAB","TAJ","TAM","TAT","TCR","TEL","TGN","TGR","TGY","THA","THT","TIB","TKM","TMN","TNA","TNE","TNG","TOD","TRK","TSG","TUA","TUL","TUV","TWI","UDM","UKR","URD","USB","UYG","UZB","VEN","VIT","WA","WAG","WCR","WEL","WLF","XBD","XHS","YAK","YBA","YCR","YIC","YIM","ZHH","ZHP","ZHS","ZHT","ZND","ZUL"])]],
		['fontSynthesis',['none','weight','style','weight style','initial','inherit','unset']],
		['fontVariantAlternates',['normal','historical-forms','initial','inherit','unset',function() {return ra(['stylistic','styleset','character-variant','swash','ornaments','annotation'])+"("+ra([rint(ra(INT_NUMS)),randoms()])+")"},function() {return "swash("+ra([rint(ra(INT_NUMS)),randoms()])+") annotation("+ra([rint(ra(INT_NUMS)),randoms()])+")"}]],
		['fontVariantCaps',['normal','small-caps','all-small-caps','petite-caps','all-petite-caps','unicase','titling-caps','initial','inherit','unset']],
		['fontVariantEastAsian',['normal','ruby','jis78','jis83','jis90','jis04','simplified','traditional','full-width','proportional-width','ruby '+ra(['full-width','proportional-width']+" "+ra(['jis78','jis83','jis90','jis04','simplified','traditional']))]],
		['fontVariantLigatures',['normal','common-ligatures','no-common-ligatures','discretionary-ligatures','no-discretionary-ligatures','historical-ligatures','no-historical-ligatures','contextual','no-contextual','initial','inherit',ra(['contextual','no-contextual'])+" "+ra(['historical-ligatures','no-historical-ligatures'])+" "+ra(['common-ligatures','no-common-ligatures'])]],//,'none'
		['fontVariantNumeric',['normal','ordinal','slashed-zero','lining-nums','oldstyle-nums','proportional-nums','tabular-nums','diagonal-fractions','stacked-fractions','initial','inherit','unset',ra(['stacked-fractions','diagonal-fractions','tabular-nums','proportional-nums','oldstyle-nums','lining-nums'])+ " "+ra(['stacked-fractions','diagonal-fractions','tabular-nums','proportional-nums','oldstyle-nums','lining-nums'])]],
		['fontVariantPosition',['normal','sub','super','initial','inherit','unset']],
		['writingMode',['rl-tb','lr','lr-tb','rl','tb-rl']],//'horizontal-tb','vertical-lr','vertical-rl','bt-rl','bt-lr','lr-bt','rl-bt','tbtb-lr'
		['imeMode',['auto','normal','active','inactive','disabled','inherit']],
		['breakAfter',['auto','always','left','right','recto','verso','page','column','region','avoid','avoid-page','avoid-column','avoid-region']],
		['breakBefore',['auto','always','left','right','recto','verso','page','column','region','avoid','avoid-page','avoid-column','avoid-region']],
		['breakInside',['auto','avoid','avoid-page','avoid-column']],
		['marks',['crop','cross',ra(['crop','cross'])+" "+ra(['crop','cross']),'none']],
		['textOrientation',['mixed','upright','sideways-right','sideways-left','sideways','use-glyph-orientation','inherit','initial','unset']],
		['filter',["url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSI0MnB4IiBoZWlnaHQ9IjQzcHgiIHZpZXdCb3g9IjAgMCA0MiA0MyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNDIgNDMiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Y2lyY2xlIGZpbGw9IiNDODI3MjgiIGN4PSIyMSIgY3k9IjIxLjUiIHI9IjE2Ljc0OSIvPgo8cG9seWxpbmUgZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIxNi4xNTMsMTMuNSAyOS44NDksMjIgMTYuMTUxLDI5LjUgIi8+Cjwvc3ZnPgo=)",'none']],//,"blur("+ra([distanceValue(),rint(ra(INT_NUMS))])+")"
		['imageOrientation',['from-image','flip','inherit',angleValue,function() {return angleValue()+" flip"}]],
		['imageRendering',['auto','pixelated','inherit']],//,'crisp-edges'
		['imageResolution',['from-image','from-image snap',function() {return rint(2) ? rint(ra(INT_NUMS))+ra(["dpi","dpcm"]):randoms()+ra(["dpi","dpcm"])},function() {return rint(2) ? rint(ra(INT_NUMS))+ra(["dpi","dpcm"]):randoms()+ra(["dpi","dpcm"])+" snap"}]],
		['objectFit',['fill','contain','cover','none','scale-down']],
		['objectPosition',[distanceValue4]],//function() {return arrayWalk([distanceValue4(),function() {return rint(ra(INT_NUMS))}])},,function() {return rint(ra(INT_NUMS))}
		['mask',["url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSI0MnB4IiBoZWlnaHQ9IjQzcHgiIHZpZXdCb3g9IjAgMCA0MiA0MyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNDIgNDMiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Y2lyY2xlIGZpbGw9IiNDODI3MjgiIGN4PSIyMSIgY3k9IjIxLjUiIHI9IjE2Ljc0OSIvPgo8cG9seWxpbmUgZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIxNi4xNTMsMTMuNSAyOS44NDksMjIgMTYuMTUxLDI5LjUgIi8+Cjwvc3ZnPgo=)",'none','inherit']],
		['maskType',['luminance','alpha']],
		['markAfter',[function() {return string(rint(STR_NUM))},function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}]],
		['markBefore',[function() {return string(rint(STR_NUM))},function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}]],
		['mark',[function() {return arrayWalk([function() { return string(rint(STR_NUM))},ra(createdText).objName,returnRandomElement,'createdElements[\''+ra(createdText).objName+'\']'])+" "+arrayWalk([function() {return string(rint(STR_NUM))},ra(createdText).objName,returnRandomElement,'createdElements[\''+ra(createdText).objName+'\']'])}]],
		['restAfter',[timeValue,'none','x-weak','weak','medium','strong','x-strong']],
		['restBefore',[timeValue,'none','x-weak','weak','medium','strong','x-strong']],
		['rest',[arrayWalk([timeValue,'none','x-weak','weak','medium','strong','x-strong'])+" "+arrayWalk([timeValue,'none','x-weak','weak','medium','strong','x-strong'])]],
		['voiceBalance',['left','center','right','leftwards','rightwards',function() {return rint(ra(INT_NUMS))}]],
		['voiceDuration',['auto',timeValue]],
		['voicePitch',[freqValue,function() {return freqValue()+" "+ra(["absolute",'x-low','low','high','x-high','medium'])}]],
		['voiceRange',[freqValue,function() {return freqValue()+" "+ra(["absolute",'x-low','low','high','x-high','medium'])}]],
		['voiceStress',['normal','strong','moderate','none','reduced']],
		['voiceRate',['normal','x-slow','slow','medium','fast','x-fast',percentValue]],
		['voiceVolume',['silent','x-soft','soft','medium','loud','x-loud',function() {return ra([rint(ra(INT_NUMS)),'-'+rint(ra(INT_NUMS))])+"db"}]],
		['marqueeDirection',['auto','backwards','left','forwards','right','reverse','down','ahead','up']],
		['marqueePlayCount',[function() {return rint(ra(INT_NUMS))},'infinite']],
		['marqueeSpeed',['fast','normal','slow',function() {return rint(ra(INT_NUMS))}]],
		['marqueeStyle',['alternate','none','scroll','slide']],
		['float',['left','right','none','inherit']],
		['clear',['left','right','none','inherit','both']],
		['all',['initial','inherit','unset']],
		['shapeOutside',[shape]],
		['shapeImageThreshold',[function() {return rint(ra(INT_NUMS))},floatValue]],
		['shapeMargin',[posdistanceValue2]],
		['gridRow',[function() {return zrint(ra(INT_NUMS))},function() {return zrint(ra(INT_NUMS))+'/'+zrint(ra(INT_NUMS))}]],
		['gridColumn',[function() {return zrint(ra(INT_NUMS))},function() {return zrint(ra(INT_NUMS))+'/'+zrint(ra(INT_NUMS))}]],
		// ['gridTemplateColumns',[gridTemplate,'none',]]
	]
}



CSSPropertiesInterface = {
	'Name':'CSSProperties',
	'Attributes':[
		["azimuth","azimuth",["",angleValue,'left-side','far-left','left','center-left','center','center-right','right','far-right','right-side','behind left-side','behindfar-left','behind left','behind center-left','behind center','behind center-right','behind right','behind far-right','behind right-side','behind leftwards','behind rightwards','inherit']],
		["background","background",["",backgroundAtrribute]],//,function () { return string(rint(STR_NUM))},randoms,"url('')",'url()'
		["background-attachment","backgroundAttachment",["","scroll","fixed","inherit"]],//,function () { return string(rint(STR_NUM))},randoms
		["background-color","backgroundColor",["",getRandomColor]],//,function () { return string(rint(STR_NUM))},randoms
		["background-image","backgroundImage",["",function() {return retCSSimageURI(2000)}]],//,function () { return string(rint(STR_NUM))},randoms,"url('')",'url()'
		["background-position","backgroundPosition",["",distanceValue,'top','center','bottom','right','left','bottom right','bottom left','bottom center','top right','top left','top center']],//,function () { return string(rint(STR_NUM))},randoms
		["background-repeat","backgroundRepeat",["","repeat","repeat-x","repeat-y","no-repeat","inherit"]],
		["border","border",["",broderAttributes()]],
		["border-collapse","borderCollapse",["","collapse","inherit","separate"]],
		["border-color","borderColor",["",getRandomColor,"transparent","inherit"]],
		["border-spacing","borderSpacing",["",posdistanceValue1]],
		["border-style","borderStyle",["","none","hidden","dotted","dashed","solid","double","groove","ridge","inset","outset"]],
		["border-top","borderTop",["",broderAttributes]],
		["border-right","borderRight",["",broderAttributes]],
		["border-bottom","borderBottom",["",broderAttributes]],
		["border-left","borderLeft",["",broderAttributes]],
		["border-top-color","borderTopColor",["",getRandomColor,"transparent","inherit"]],
		["border-right-color","borderRightColor",["",getRandomColor,"transparent","inherit"]],
		["border-bottom-color","borderBottomColor",["",getRandomColor,"transparent","inherit"]],
		["border-left-color","borderLeftColor",["",getRandomColor,"transparent","inherit"]],
		["border-top-style","borderTopStyle",["","none","hidden","dotted","dashed","solid","double","groove","ridge","inset","outset"]],
		["border-right-style","borderRightStyle",["","none","hidden","dotted","dashed","solid","double","groove","ridge","inset","outset"]],
		["border-bottom-style","borderBottomStyle",["","none","hidden","dotted","dashed","solid","double","groove","ridge","inset","outset"]],
		["border-left-style","borderLeftStyle",["","none","hidden","dotted","dashed","solid","double","groove","ridge","inset","outset"]],
		["border-top-width","borderTopWidth",["",pospxValue,"thin","thick","medium"]],
		["border-right-width","borderRightWidth",["",pospxValue,"thin","thick","medium"]],
		["border-bottom-width","borderBottomWidth",["",pospxValue,"thin","thick","medium"]],
		["border-left-width","borderLeftWidth",["",pospxValue,"thin","thick","medium"]],
		["border-width","borderWidth",["",pospxValue,"thin","thick","medium"]],
		["bottom","bottom",["",distanceValue3,"inherit","auto",function(){return rint(ra(INT_NUMS))}]],
		["caption-side","captionSide",["","top","bottom","left","right","inherit"]],
		["clear","clear",["","none","left","right","both","inherit"]],
		["clip","clip",["",function() {return 'rect('+distanceValue2()+','+distanceValue2()+','+distanceValue2()+','+distanceValue2()+')'},"auto","initial","inherit"]],
		["color","color",["",getRandomColor]],
		["content","content",["",function() {return retCSSmediaURI(2000)},'open-quote','close-quote','no-open-quote','no-close-quote','inherit',"normal","none"]],
		["counter-increment","counterIncrement",["",function () { return string(rint(STR_NUM))+"a"},"inherit","none","initial"]],
		["counter-reset","counterReset",["",function () { return string(rint(STR_NUM))+"a "+rint(ra(INT_NUMS))},"inherit","none","initial"]],
		["css-float","cssFloat",["","left","right","none","inherit"]],
		["cue","cue",["",function() {return retCSSmediaURI(2000)},"inherit"]],
		["cue-after","cueAfter",["",function() {return retCSSmediaURI(2000)},"inherit"]],
		["cue-before","cueBefore",["",function() {return retCSSmediaURI(2000)},"inherit"]],
		["cursor","cursor",["",function() {return retmultiplecurs()},function() {return retcursorURI(1)},'auto','crosshair','pointer','alias','all-scroll','cell','context-menu',"col-resize","copy","default","e-resize","ew-resize","help","move","n-resize","ne-resize","nesw-resize","ns-resize","nw-resize","nwse-resize","no-drop","none","not-allowed","pointer","progress","row-resize","s-resize","se-resize","sw-resize","text","vertical-text","w-resize","wait","zoom-in","zoom-out","initial","inherit"]],//,"grab","grabbing"
		["direction","direction",["","ltr","rtl","inherit"]],
		["display","display",["","inline","block","list-item","run-in","compact","marker","table","inline-table","table-row-group","table-header-group","table-footer-group","table-row","table-column-group","table-column","table-cell","table-caption","none","inherit","grid",'inline-grid']],
		["elevation","elevation",["",angleValue,"below","level","above","higher","lower","inherit"]],
		["empty-cells","emptyCells",["","show","hide","inherit"]],
		["float","float",["","left","right","none","inherit"]],
		["font","font",["",fontAtrribute,"caption","icon","menu","message-box","small-caption","status-bar","inherit"]],
		["font-family","fontFamily",["",returnMultipleFamilies,"inherit"]],
		["font-size","fontSize",["","xx-small","x-small","small","medium","large","x-large","xx-large","larger","smaller",posdistanceValue1,posdistanceValue1,"inherit"]],
		["font-size-adjust","fontSizeAdjust",["",randoms,"none","inherit"]],
		["font-stretch","fontStretch",["","normal","wider","narrower","ultra-condensed","extra-condensed","condensed","semi-condensed","semi-expanded","expanded","extra-expanded","ultra-expanded","inherit"]],
		["font-style","fontStyle",["","normal","italic","oblique","inherit"]],
		["font-variant","fontVariant",["","normal","small-caps","inherit"]],
		["font-weight","fontWeight",["","normal","bold","bolder","lighter","100","200","300","400","500","600","700","800","900","inherit","initial"]],
		["height","height",["",posdistanceValue2,posdistanceValue2,"inherit","auto",function() {return rint(ra(POS_INT_NUMS))}]],//randoms
		["left","left",["",distanceValue3,distanceValue3,"inherit","auto",function() {return rint(ra(INT_NUMS))}]],
		["letter-spacing","letterSpacing",["","normal",distanceValue2,"inherit",function() {return rint(ra(INT_NUMS))}]],
		["line-height","lineHeight",["","normal",posdistanceValue1,"inherit",function() {return rint(ra(POS_INT_NUMS))}]],
		["list-style","listStyle",["",listStyleAttribute,"inherit"]],
		["list-style-image","listStyleImage",["",function() {return retCSSimageURI(2000)},"none","inherit"]],
		["list-style-position","listStylePosition",["","inside","outside","inherit"]],
		["list-style-type","listStyleType",["","disc","circle","square","decimal","decimal-leading-zero","lower-roman","upper-roman","lower-greek","lower-alpha","lower-latin","upper-alpha","upper-latin","hebrew","armenian","georgian","cjk-ideographic","hiragana","katakana","hiragana-iroha","katakana-iroha","none","inherit"]],
		["margin","margin",["",marginAttribute,"inherit"]],
		["margin-top","marginTop",["",distanceValue3,"inherit",function() {return rint(ra(INT_NUMS))}]],
		["margin-right","marginRight",["",distanceValue3,"inherit",function() {return rint(ra(INT_NUMS))}]],
		["margin-bottom","marginBottom",["",distanceValue3,"inherit",function() {return rint(ra(INT_NUMS))}]],
		["margin-left","marginLeft",["",distanceValue3,"inherit",function() {return rint(ra(INT_NUMS))}]],
		["marker-offset","markerOffset",["",distanceValue,"inherit","auto",function() {return rint(ra(INT_NUMS))}]],
		["marks","marks",["","crop","cross","crop cross","cross crop","none","inherit"]],
		["max-height","maxHeight",["",posdistanceValue1,"inherit","none",function() {return rint(ra(POS_INT_NUMS))}]],
		["max-width","maxWidth",["",posdistanceValue1,function() {return rint(ra(POS_INT_NUMS))},"inherit","none"]],
		["min-height","minHeight",["",posdistanceValue1,function() {return rint(ra(POS_INT_NUMS))},"inherit"]],
		["min-width","minWidth",["",posdistanceValue1,function() {return rint(ra(POS_INT_NUMS))},"inherit"]],
		["orphans","orphans",["",function() {return (rint(ra(POS_INT_NUMS))+1)},"inherit"]],
		["outline","outline",["",outlineAttribute,"inherit"]],
		["outline-color","outlineColor",["",getRandomColor,"invert","inherit"]],
		["outline-style","outlineStyle",["","none","dotted","dashed","solid","double","groove","ridge","inset","outset","inherit"]],//,"hidden"
		["outline-width","outlineWidth",["",posdistanceValueblur,"thin","thick","medium","","inherit"]],//,function() {return rint(ra(POS_INT_NUMS))},
		["overflow","overflow",["","visible","hidden","scroll","auto","inherit"]],
		["padding","padding",["",paddingAttribute,"inherit"]],
		["padding-top","paddingTop",["",posdistanceValue1,function(){return rint(ra(POS_INT_NUMS))},"inherit"]],
		["padding-right","paddingRight",["",posdistanceValue1,function(){return rint(ra(POS_INT_NUMS))},"inherit"]],
		["padding-bottom","paddingBottom",["",posdistanceValue1,function(){return rint(ra(POS_INT_NUMS))},"inherit"]],
		["padding-left","paddingLeft",["",posdistanceValue1,function(){return rint(ra(POS_INT_NUMS))},"inherit"]],
		["page","page",["","inherit"]], //more info needed
		["page-break-after","pageBreakAfter",["","auto","always","avoid","left","right","inherit"]],
		["page-break-before","pageBreakBefore",["","auto","always","avoid","left","right","inherit"]],
		["page-break-inside","pageBreakInside",["","auto","avoid","inherit"]],
		["pause","pause",["",function() {return timeValue()},function() {return timeValue()+" "+ timeValue()},"inherit"]],
		["pause-after","pauseAfter",["",function() {return timeValue()},"inherit"]],
		["pause-before","pauseBefore",["",function() {return timeValue()},"inherit"]],
		["pitch","pitch",["",freqValue,"x-low","low","medium","high","x-high","inherit"]],
		["pitch-range","pitchRange",["",randoms,"inherit"]],
		["play-during","playDuring",["",function() {return retCSSmediaURI(2000)},function() {return retCSSmediaURI(2000)+" mix"},function() {return retCSSmediaURI(2000)+" repeat"},function() {return retCSSmediaURI(2000)+" mix repeat"},"auto","none","inherit"]],
		["position","position",["","static","relative","absolute","fixed","inherit"]],
		// ["quotes",[]],
		["richness","richness",["",randoms,function(){return rint(ra(INT_NUMS))},"inherit"]],
		["right","right",["",distanceValue3,"auto","inherit",function(){return rint(ra(INT_NUMS))}]],
		["size","size",["",posdistanceValueblur,function() {return posdistanceValueblur()+" "+posdistanceValueblur()},"auto","portrait","landscape","inherit"]],
		["stress","stress",["",randoms,"inherit",function(){return rint(ra(INT_NUMS))}]],
		["table-layout","tableLayout",["","auto","fixed","inherit"]],
		["text-align","textAlign",["","left","right","center","justify","inherit","initial"]],
		["text-decoration","textDecoration",["","none","underline","overline","line-through","initial","inherit"]],
		["text-indent","textIdent",["",distanceValue3,distanceValue3,"inherit",function(){return rint(ra(INT_NUMS))}]],
		["text-shadow","textShadow",["",textShadowAttribute,"inherit","none","initial"]],
		["text-transform","textTransform",["capitalize","uppercase","lowercase","none","inherit","initial"]],
		["top","top",["",distanceValue3,"auto","inherit",function(){return rint(ra(INT_NUMS))}]],
		["unicode-bidi","unicodeBidi",["","normal","embed","bidi-override","inherit"]],
		["vertical-align","verticalAlign",["",distanceValue3,distanceValue3,"baseline","sub","super","top","text-top","middle","bottom","text-bottom","inherit",function(){return rint(ra(INT_NUMS))}]],
		["visibility","visibility",["","visible","hidden","collapse","inherit","initial"]],
		["voice-family","voiceFamily",["",voiceFamilyAttribute,"inherit"]],
		["volume","volume",["","inherit",function(){return rint(ra(INT_NUMS))},percentValue]],
		["white-space","whiteSpace",["","normal","pre","nowrap","inherit","pre-line","pre-wrap","initial"]],
		["windows","windows",["",function(){return (rint(ra(POS_INT_NUMS))+1)},"inherit",function(){return (rint(ra(POS_INT_NUMS))+1)}]],
		["width","width",["",posdistanceValue2,function(){return rint(ra(POS_INT_NUMS))},"auto","inherit"]],
		["word-spacing","wordSpacing",["",distanceValue2,"normal","inherit",function(){return rint(ra(INT_NUMS))}]],
		["z-index","zIndex",["",function(){return rint(ra(INT_NUMS))},"inherit",function(){return rint(ra(INT_NUMS))}]],
		['opacity',"opacity",["",floatValue,"initial","inherit"]],
		['background-clip',"backgroundClip",["",'border-box','padding-box','content-box','initial','inherit']],
		['background-origin',"backgroundOrigin",["",'border-box','padding-box','content-box','initial','inherit']],
		['background-size',"backgroundSize",["",'contain','initial','inherit','cover','auto',function() {return distanceValue4()+" "+distanceValue4()},distanceValue4]],//,function() {return rint(2) ? rint(ra(INT_NUMS)):rint(ra(INT_NUMS))+' '+rint(ra(INT_NUMS))}
		['border-bottom-left-radius',"borderBottomLeftRadius",["",'initial','inherit',function() {return posdistanceValueflex()+" "+posdistanceValueflex()},posdistanceValueflex]],//,function() {return rint(2) ? rint(ra(POS_INT_NUMS)):rint(ra(POS_INT_NUMS))+' '+rint(ra(POS_INT_NUMS))}
		['border-bottom-right-radius',"borderBottomRightRadius",["",'initial','inherit',function() {return posdistanceValueflex()+" "+posdistanceValueflex()},posdistanceValueflex]],//,function() {return rint(2) ? rint(ra(POS_INT_NUMS)):rint(ra(POS_INT_NUMS))+' '+rint(ra(POS_INT_NUMS))}
		['border-image-source',"borderImageSource",["",'none','initial','inherit',function() {return retCSSimageURI(2000)}]],
		['border-image-width',"borderImageWidth",["",'initial','auto','inherit',posrnd4Lengths]],
		['border-image-outset',"borderImageOutset",["",'initial','inherit',posrnd4Lengthsnoperc]],
		['border-image-repeat',"borderImageRepeat",["",'repeat','stretch','round','space','initial','inherit']],
		['border-image-slice',"borderImageSlice",["",'initial','inherit',posrnd4nums]],//,'fill'
		['border-image',"borderImage",["",function() {return  retCSSimageURI(2000)+' '+arrayWalk([pospercentValue,function() {return rint(ra(POS_INT_NUMS))},''])+' '+arrayWalk([pospercentValue,function() {return rint(ra(POS_INT_NUMS))},''])+' '+arrayWalk([pospercentValue,function() {return rint(ra(POS_INT_NUMS))},''])+' '+ra(['repeat','stretch','round','space',''])},'inherit','initial']],
		['border-top-left-radius',"borderTopLeftRadius",["",'initial','inherit',function() {return posdistanceValueflex()+" "+posdistanceValueflex()},posdistanceValueflex,]],//function() {return rint(2) ? rint(ra(POS_INT_NUMS)):rint(ra(POS_INT_NUMS))+' '+rint(ra(POS_INT_NUMS))}
		['border-top-right-radius',"borderTopRightRadius",["",'initial','inherit',function() {return posdistanceValueflex()+" "+posdistanceValueflex()},posdistanceValueflex]],//,function() {return rint(2) ? rint(ra(POS_INT_NUMS)):rint(ra(POS_INT_NUMS))+' '+rint(ra(POS_INT_NUMS))}
		['border-radius',"borderRadius",["",'initial','inherit',function() {return posrnd4Lengthsflex()+'/'+posrnd4Lengthsflex()}]],
		['box-shadow',"boxShadow",["",'none','initial','inherit',function() {return posdistanceValueblur()+' '+posdistanceValueblur()+' '+posdistanceValueblur()+' '+ra([txtdistanceValue(),''])+' '+ra([getRandomColor(),''])+' '+ra(['inset',''])}]],
		['overflow-x',"overflowX",["",'visible','hidden','scroll','auto','initial','inherit']],
		['overflow-y',"overflowY",["",'visible','hidden','scroll','auto','initial','inherit']],
		['align-content',"alignContent",["",'stretch','center','flex-start','flex-end','space-between','space-around','initial','inherit']],
		['align-items',"alignItems",["",'stretch','center','flex-start','flex-end','baseline','initial','inherit']],
		['align-self',"alignSelf",["",'stretch','center','flex-start','flex-end','baseline','initial','inherit','auto']],
		['flex-grow',"flexGrow",["",function() {return rint(ra(POS_INT_NUMS))},'initial','inherit']],
		['flex-shrink',"flexShrink",["",function() {return rint(ra(POS_INT_NUMS))},'initial','inherit']],
		['flex-basis',"flexBasis",["",posdistanceValueflex,'initial','inherit','auto']],
		['flex',"flex",["",function() {return rint(ra(POS_INT_NUMS))+' '+ra([rint(ra(POS_INT_NUMS)),''])+' '+ra([posdistanceValueflex(),''])},function() {return rint(ra(POS_INT_NUMS))},'inherit','auto','initial','none']],
		['flex-direction',"flexDirection",["",'row','row-reverse','column','column-reverse','initial','inherit']],
		['flex-wrap',"flexWrap",["",'nowrap','wrap','wrap-reverse','initial','inherit']],
		['flex-flow',"flexFlow",["",function() {return ra(['row','row-reverse','column','column-reverse'])+" "+ra(['nowrap','wrap','wrap-reverse'])},'initial','inherit']],
		['justify-content',"justifyContent",["",'flex-start','flex-end','center','space-between','space-around','initial','inherit']],
		['order',"order",["",'inherit','initial',function() {return rint(ra(INT_NUMS))}]],
		['hanging-punctuation',"hangingPunctuation",["",'initial','inherit','none','first','last','allow-end','force-end']],
		['tab-size',"tabSize",[function() {return rint(ra(POS_INT_NUMS))},'initial','inherit']],
		['text-align-last',"textAlignLast",["",'auto','left','right','center','justify','start','end','initial','inherit']],
		['text-justify',"textJustify",["",'auto','distribute','none','initial','inherit']],//,'inter-word','inter-ideograph','inter-cluster','kashida','trim'
		['word-break',"wordBreak",["",'normal','break-all','initial','inherit']],//,'keep-all'
		['word-wrap',"wordWrap",["",'normal','break-word','initial','inherit']],
		['text-decoration-color',"textDecorationColor",["",getRandomColor,'initial','inherit']],
		['text-decoration-line',"textDecorationLine",["",'none','underline','overline','line-through','initial','inherit']],
		['text-decoration-style',"textDecorationStyle",["",'solid','double','dotted','dashed','wavy','initial','inherit']],
		['animation-delay',"animationDelay",["",timeValue,'initial','inherit']],
		['animation-direction',"animationDirection",["",'normal','reverse','alternate','alternate-reverse','initial','inherit']],
		['animation-duration',"animationDuration",["",timeValue,'initial','inherit']],
		['animation-fill-mode',"animationFillMode",["",'none','forwards','backwards','both','initial','inherit']],
		['animation-iteration-count',"animationIterationCount",["",'infinite','initial','inherit',function() {return rint(ra(INT_NUMS))},randoms]],
		['animation-name',"animationName",["",function() {return "'"+string(rint(STR_NUM))+"'"},'none','inherit','initial']],
		['animation-timing-function',"animationTimingFunction",["",'linear','ease','ease-in','ease-out',function() {return 'cubic-bezier('+floatValue()+","+floatValue()+","+floatValue()+","+floatValue()+")"},'initial','inherit']],
		['animation-play-state',"animationPlayState",["",'paused','running','initial','inherit']],
		['animation',"animation",["",function() {return arrayWalk([function() {return string(rint(STR_NUM))},'none'])+" "+timeValue()+" "+arrayWalk(['linear','ease','ease-in','ease-out',function() {return 'cubic-bezier('+floatValue()+","+floatValue()+","+floatValue()+","+floatValue()+")"},''])+" "+arrayWalk([timeValue,''])+" "+arrayWalk(['infinite',function() {return rint(ra(INT_NUMS))},randoms,''])+" "+ra(['normal','reverse','alternate','alternate-reverse',''])+" "+ra(['none','forwards','backwards','both',''])+ " "+ra(['paused','running',''])},'inherit','initial']],
		['backface-visibility',"backfaceVisibility",["",'visible','hidden','initial','initial']],
		['perspective',"prespective",["",'none',posdistanceValueblur,'initial','inherit']],//,function() {return rint(ra(POS_INT_NUMS))}
		['perspective-origin',"prespectiveOrigin",["",function() {return arrayWalk(['left','center','right',distanceValue4])+" "+ arrayWalk(['top','center','bottom',distanceValue4])},'inherit','initial']],
		['transform-origin',"transformOrigin",["",function() {return arrayWalk(['left','center','right',txtdistanceValue])+" "+ arrayWalk(['top','center','bottom',txtdistanceValue])+" "+txtdistanceValue()},'inherit','initial']],
		['transform-style',"transformStyle",["",'flat','preserve-3d','initial','inherit']],
		['transform',"transform",["",transformValue,'initial','inherit']],
		['transition-property',"transitionProperty",["",'none','all','initial','inherit',function() {return ra(CSSPropertiesInterface.Attributes)[0]}]],
		['transition-duration',"transitionDuration",["",timeValue,'initial','inherit']],
		['transition-timing-function',"transitionTimingFunction",["",'linear','ease','ease-in','ease-out','ease-in-out',function() {return 'cubic-bezier('+floatValue()+","+floatValue()+","+floatValue()+","+floatValue()+")"},'initial','inherit']],
		['transition-delay',"transitionDelay",["",'initial','inherit',timeValue]],
		['transition',"transition",["",function() {return arrayWalk(['none','all',function() {return ra(CSSPropertiesInterface.Attributes)[0]}])+" "+timeValue()+" "+arrayWalk(['linear','ease','ease-in','ease-out','ease-in-out',function() {return 'cubic-bezier('+floatValue()+","+floatValue()+","+floatValue()+","+floatValue()+")"},''])+ " "+ra([timeValue(),''])},'initial','inherit']],
		['box-sizing',"boxSizing",["",'content-box','border-box','initial','inherit']],
		['icon',"icone",["",function() {return retCSSimageURI(2000)},'auto','initial','inherit']],
		['nav-down',"navDown",["",'auto','initial','inherit',function() {return "#"+ra(createdElements).objName},function() {return rint(2) ? ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']']):"'"+string(rint(STR_NUM))+"'"}]],
		['nav-index',"navIndex",["",function() {return rint(ra(INT_NUMS))},randoms,'auto','initial','inherit']],
		['nav-left',"navLeft",["",'auto','initial','inherit',function() {return "#"+ra(createdElements).objName},function() {return rint(2) ? ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']']):"'"+string(rint(STR_NUM))+"'"}]],
		['nav-right',"navRight",["",'auto','initial','inherit',function() {return "#"+ra(createdElements).objName},function() {return rint(2) ? ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']']):"'"+string(rint(STR_NUM))+"'"}]],
		['nav-up',"navUp",["",'auto','initial','inherit',function() {return "#"+ra(createdElements).objName},function() {return rint(2) ? ra([returnRandomElement(),ra(createdText).objName]):"'"+string(rint(STR_NUM))+"'"}]],
		['outline-offset',"outlineOffset",["",txtdistanceValue,'initial','inherit']],//,function(){return rint(ra(INT_NUMS))}
		['resize',"resize",["",'none','both','horizontal','vertical','initial','inherit']],
		['text-overflow',"textOverflow",["",'clip','ellipsis','initial','inherit']],//,function() {return rint(ra(INT_NUMS))}
		['column-rule-style',"columnRuleStyle",["",'none','hidden','dotted','dashed','solid','double','groove','ridge','inset','outset','initial','inherit']],
		['column-rule-width',"columnRuleWidth",["",'medium','thin','thick','initial','inherit',distanceValue,function() {return rint(ra(INT_NUMS))}]],
		['column-span',"columnSpan",["",'1','all','initial','inherit']],
		['column-width',"columnWidth",["",'auto','inherit','initial',distanceValue,function() {return rint(ra(INT_NUMS))}]],
		['columns',"columns",["",'auto',function() {return arrayWalk(['auto','inherit','initial',distanceValue,function() {return rint(ra(INT_NUMS))}])+" "+ra([rint(ra(INT_NUMS))])},'initial','inherit']],
		['column-count',"columnCount",["",function(){return rint(ra(INT_NUMS))},randoms,'auto','initial','inherit']],
		['column-fill',"columnFill",["",'balance','auto','initial','inherit']],
		['column-gap',"columnGap",["",distanceValue,function() {return rint(ra(INT_NUMS))},'normal','initial','inherit']],
		['column-rule',"columnRule",["",function() {return arrayWalk(['medium','thin','thick',distanceValue,function() {return rint(ra(INT_NUMS))}])+" "+arrayWalk(['none','hidden','dotted','dashed','solid','double','groove','ridge','inset','outset'])+" "+arrayWalk([getRandomColor])},'initial','inherit']],
		['column-rule-color',"columnRuleColor",["",getRandomColor,'initial','inherit']],
		['box-decoration-break',"boxDecorationBreak",["",'slice','clone','initial','inherit','unset']],
		['hyphens',"hyphens",["",'none','manual','auto','inherit']],
		['overflow-wrap',"overflowWrap",["",'normal','break-word','inherit']],
		['text-combine-upright',"textCombineUpright",['none','all',function() {return rint(ra(INT_NUMS))}]],
		['text-underline-position',"textUnderLinePosition",["",'auto','under','inherit']],//'left','right','under left','right under',
		['font-feature-settings',"fontFeatureSettings",["",'normal','inherit',"'aaaa'","'aaaa '"+randbool(),"smcp","smcp "+randbool(),"swsh'","swsh "+randbool()]],
		['font-kerning',"fontKerning",["",'auto','normal','none','initial','inherit','unset']],
		['font-language-override',"fontLanguageOverride",["",'normal','initial','inherit','unset',ra(["ABA","ABK","ADY","AFK","AFR","AGW","ALS","ALT","AMH","APPH","ARA","ARI","ARK","ASM","ATH","AVR","AWA","AYM","AZE","BAD","BAG","BAL","BAU","BBR","BCH","BCR","BEL","BEM","BEN","BGR","BHI","BHO","BIK","BIL","BKF","BLI","BLN","BLT","BMB","BML","BOS","BRE","BRH","BRI","BRM","BSH","BTI","CAT","CEB","CHE","CHG","CHH","CHI","CHK","CHP","CHR","CHU","CMR","COP","COS","CRE","CRR","CRT","CSL","CSY","DAN","DAR","DCR","DEU","DGR","DHV","DIV","DJR","DNG","DNK","DRI","DUN","DZN","EBI","ECR","EDO","EFI","ELL","ENG","ERZ","ESP","ETI","EUQ","EVK","EVN","EWE","FAN","FAR","FIN","FJI","FLE","FNE","FON","FOS","FRA","FRI","FRL","FTA","FUL","GAD","GAE","GAG","GAL","GAR","GAW","GEZ","GIL","GMZ","GON","GRN","GRO","GUA","GUJ","HAI","HAL","HAR","HAU","HAW","HBN","HIL","HIN","HMA","HND","HO","HRI","HRV","HUN","HYE","IBO","IJO","ILO","IND","ING","INU","IPPH","IRI","IRT","ISL","ISM","ITA","IWR","JAV","JII","JAN","JUD","JUL","KAB","KAC","KAL","KAN","KAR","KAT","KAZ","KEB","KGE","KHA","KHK","KHM","KHS","KHV","KHW","KIK","KIR","KIS","KKN","KLM","KMB","KMN","KMO","KMS","KNR","KOD","KOH","KOK","KON","KOP","KOR","KOZ","KPL","KRI","KRK","KRL","KRM","KRN","KRT","KSH","KSI","KSM","KUI","KUL","KUM","KUR","KUU","KUY","KYK","LAD","LAH","LAK","LAM","LAO","LAT","LAZ","LCR","LDK","LEZ","LIN","LMA","LMB","LMW","LSB","LSM","LTH","LTZ","LUB","LUG","LUH","LUO","LVI","MAJ","MAK","MAL","MAN","MAP","MAR","MAW","MBN","MCH","MCR","MDE","MEN","MIZ","MKD","MLE","MLG","MLN","MLR","MLY","MND","MNG","MNI","MNK","MNX","MOH","MOK","MOL","MON","MOR","MRI","MTH","MTS","MUN","NAG","NAN","NAS","NCR","NDB","NDG","NEP","NEW","NGR","NHC","NIS","NIU","NKL","NKO","NLD","NOG","NOR","NSM","NTA","NTO","NYN","OCI","OCR","OJB","ORI","ORO","OSS","PAA","PAL","PAN","PAP","PAS","PGR","PIL","PLG","PLK","PRO","PTG","QIN","RAJ","RCR","RBU","RIA","RMS","ROM","ROY","RSY","RUA","RUS","SAD","SAN","SAT","SAY","SEK","SEL","SGO","SHN","SIB","SID","SIG","SKS","SKY","SLA","SLV","SML","SMO","SNA","SND","SNH","SNK","SOG","SOT","SQI","SRB","SRK","SRR","SSL","SSM","SUR","SVA","SVE","SWA","SWK","SWZ","SXT","SYR","TAB","TAJ","TAM","TAT","TCR","TEL","TGN","TGR","TGY","THA","THT","TIB","TKM","TMN","TNA","TNE","TNG","TOD","TRK","TSG","TUA","TUL","TUV","TWI","UDM","UKR","URD","USB","UYG","UZB","VEN","VIT","WA","WAG","WCR","WEL","WLF","XBD","XHS","YAK","YBA","YCR","YIC","YIM","ZHH","ZHP","ZHS","ZHT","ZND","ZUL"])]],
		['font-synthesis',"fontSynthesis",["",'none','weight','style','weight style','initial','inherit','unset']],
		['font-variant-alternates',"fontVariantAlternates",["",'normal','historical-forms','initial','inherit','unset',function() {return ra(['stylistic','styleset','character-variant','swash','ornaments','annotation'])+"("+ra([rint(ra(INT_NUMS)),randoms()])+")"},function() {return "swash("+ra([rint(ra(INT_NUMS)),randoms()])+") annotation("+ra([rint(ra(INT_NUMS)),randoms()])+")"}]],
		['font-variant-caps',"fontVariantCaps",["",'normal','small-caps','all-small-caps','petite-caps','all-petite-caps','unicase','titling-caps','initial','inherit','unset']],
		['font-variant-east-asian',"fontVariantEastAsian",["",'normal','ruby','jis78','jis83','jis90','jis04','simplified','traditional','full-width','proportional-width','ruby '+ra(['full-width','proportional-width']+" "+ra(['jis78','jis83','jis90','jis04','simplified','traditional']))]],
		['font-variant-ligatures',"fontVariantLigatures",["",'normal','common-ligatures','no-common-ligatures','discretionary-ligatures','no-discretionary-ligatures','historical-ligatures','no-historical-ligatures','contextual','no-contextual','initial','inherit',ra(['contextual','no-contextual'])+" "+ra(['historical-ligatures','no-historical-ligatures'])+" "+ra(['common-ligatures','no-common-ligatures'])]],//,'none'
		['font-variant-numeric',"fontVariantNumeric",["",'normal','ordinal','slashed-zero','lining-nums','oldstyle-nums','proportional-nums','tabular-nums','diagonal-fractions','stacked-fractions','initial','inherit','unset',ra(['stacked-fractions','diagonal-fractions','tabular-nums','proportional-nums','oldstyle-nums','lining-nums'])+ " "+ra(['stacked-fractions','diagonal-fractions','tabular-nums','proportional-nums','oldstyle-nums','lining-nums'])]],
		['font-variant-position',"fontVariantPosition",["",'normal','sub','super','initial','inherit','unset']],
		['writing-mode',"writingMode",["",'rl-tb','lr','lr-tb','rl','tb-rl']],//'horizontal-tb','vertical-lr','vertical-rl','bt-rl','bt-lr','lr-bt','rl-bt','tbtb-lr'
		['ime-mode',"imeMode",["",'auto','normal','active','inactive','disabled','inherit']],
		['break-after',"breakAfter",["",'auto','always','left','right','recto','verso','page','column','region','avoid','avoid-page','avoid-column','avoid-region']],
		['break-before',"breakBefore",["",'auto','always','left','right','recto','verso','page','column','region','avoid','avoid-page','avoid-column','avoid-region']],
		['break-inside',"breakInside",["",'auto','avoid','avoid-page','avoid-column']],
		['marks',"marks",["",'crop','cross',ra(['crop','cross'])+" "+ra(['crop','cross']),'none']],
		['text-orientation',"textOrientation",["",'mixed','upright','sideways-right','sideways-left','sideways','use-glyph-orientation','inherit','initial','unset']],
		['filter',"filter",["","url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSI0MnB4IiBoZWlnaHQ9IjQzcHgiIHZpZXdCb3g9IjAgMCA0MiA0MyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNDIgNDMiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Y2lyY2xlIGZpbGw9IiNDODI3MjgiIGN4PSIyMSIgY3k9IjIxLjUiIHI9IjE2Ljc0OSIvPgo8cG9seWxpbmUgZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIxNi4xNTMsMTMuNSAyOS44NDksMjIgMTYuMTUxLDI5LjUgIi8+Cjwvc3ZnPgo=)",'none']],//,"blur("+ra([distanceValue(),rint(ra(INT_NUMS))])+")"
		['image-orientation',"imageOrientation",["",'from-image','flip','inherit',angleValue,function() {return angleValue()+" flip"}]],
		['image-rendering',"imageRendering",["",'auto','pixelated','inherit']],//,'crisp-edges'
		['image-resolution',"imageResolution",["",'from-image','from-image snap',function() {return rint(2) ? rint(ra(INT_NUMS))+ra(["dpi","dpcm"]):randoms()+ra(["dpi","dpcm"])},function() {return rint(2) ? rint(ra(INT_NUMS))+ra(["dpi","dpcm"]):randoms()+ra(["dpi","dpcm"])+" snap"}]],
		['object-fit',"objectFill",["",'fill','contain','cover','none','scale-down']],
		['object-position',"objectPosition",["",distanceValue4]],
		['mask',"mask",["","url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSI0MnB4IiBoZWlnaHQ9IjQzcHgiIHZpZXdCb3g9IjAgMCA0MiA0MyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNDIgNDMiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Y2lyY2xlIGZpbGw9IiNDODI3MjgiIGN4PSIyMSIgY3k9IjIxLjUiIHI9IjE2Ljc0OSIvPgo8cG9seWxpbmUgZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIxNi4xNTMsMTMuNSAyOS44NDksMjIgMTYuMTUxLDI5LjUgIi8+Cjwvc3ZnPgo=)",'none','inherit']],
		['mask-type',"maskType",["",'luminance','alpha']],
		['mark-after',"markAfter",["",function() {return "'"+string(rint(STR_NUM))+"'"},function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}]],
		['mark-before',"markBefore",["",function() {return "'"+string(rint(STR_NUM))+"'"},function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}]],
		['mark',"mark",["",function() {return arrayWalk([function() { return "'"+string(rint(STR_NUM))+"'"},ra(createdText).objName,returnRandomElement,'createdElements[\''+ra(createdText).objName+'\']'])+" "+arrayWalk([function() {return "'"+string(rint(STR_NUM))},returnRandomElement,'createdElements[\''+ra(createdText).objName+'\']'])}]],
		['rest-after',"restAfter",["",timeValue,'none','x-weak','weak','medium','strong','x-strong']],
		['rest-before',"restBefore",["",timeValue,'none','x-weak','weak','medium','strong','x-strong']],	
		['rest',"rest",["",arrayWalk([timeValue,'none','x-weak','weak','medium','strong','x-strong'])+" "+arrayWalk([timeValue,'none','x-weak','weak','medium','strong','x-strong'])]]	,
		['voice-balance',"voiceBalance",["",'left','center','right','leftwards','rightwards',function() {return rint(ra(INT_NUMS))}]],
		['voice-duration',"voiceDuration",["",'auto',timeValue]],
		['voice-pitch',"voicePitch",["",freqValue,function() {return freqValue()+" "+ra(["absolute",'x-low','low','high','x-high','medium'])}]],
		['voice-range',"voiceRange",["",freqValue,function() {return freqValue()+" "+ra(["absolute",'x-low','low','high','x-high','medium'])}]],
		['voice-stress',"voiceStress",["",'normal','strong','moderate','none','reduced']],
		['voice-rate',"voiceRate",["",'normal','x-slow','slow','medium','fast','x-fast',percentValue]],
		['voice-volume',"voiceVolume",["",'silent','x-soft','soft','medium','loud','x-loud',function() {return ra([rint(ra(INT_NUMS)),'-'+rint(ra(INT_NUMS))])+"db"}]],
		['marquee-direction',"marqueeDirection",["",'auto','backwards','left','forwards','right','reverse','down','ahead','up']],
		['marquee-play-count',"marqueePlayCount",["",function() {return rint(ra(INT_NUMS))},'infinite']],
		['marquee-speed',"marqueeSpeed",["",'fast','normal','slow',function() {return rint(ra(INT_NUMS))}]],
		['marquee-style',"marqueeStyle",["",'alternate','none','scroll','slide']],
		['float',"float",["",'left','right','none','inherit']],
		['clear',"clear",["",'left','right','none','inherit','both']],
		['all',"all",["",'initial','inherit','unset']],
		['shape-outside',"shapeOutside",["",shape]],
		['shape-image-threshold',"shapeImageThreshold",["",function() {return rint(ra(INT_NUMS))},floatValue]],
		['shape-margin',"shapeMargin",["",posdistanceValue2]],
		['grid-row',"gridRow",["",function() {return zrint(ra(INT_NUMS))},function() {return zrint(ra(INT_NUMS))+'/'+zrint(ra(INT_NUMS))}]],
		['grid-column',"gridColumn",["",function() {return zrint(ra(INT_NUMS))},function() {return zrint(ra(INT_NUMS))+'/'+zrint(ra(INT_NUMS))}]],
	]
}

//DOM.IDL
NodeInterface = {
	'Name': 'Node',
	'Attributes': [
	 	['nodeValue',["",function() {return string(rint(STR_NUM))},function() {return string(rint(STR_NUM))}],'high'],
		['nodeName',[randoms,function(){return rint(ra(INT_NUMS))},""],'readonly'],
		['nodeType',[randoms,function(){return rint(ra(INT_NUMS))},""],'readonly'],
		['parentNode',['',function() {return ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'readonly'],//[randoms,function(){return rint(ra(INT_NUMS))},"",function () { return string(rint(STR_NUM))}]
		['childNodes',[randoms,function(){return rint(ra(INT_NUMS))},"",function () { return string(rint(STR_NUM))}],'readonly'],
		['firstChild',['',function() {return ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'readonly'],//[randoms,function(){return rint(ra(INT_NUMS))},"",function () { return string(rint(STR_NUM))}]
		['lastChild',['',function() {return ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'readonly'],//[randoms,function(){return rint(ra(INT_NUMS))},"",function () { return string(rint(STR_NUM))}]
		['previousSibling',['',function() {return ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'readonly'],//[randoms,function(){return rint(ra(INT_NUMS))},"",function () { return string(rint(STR_NUM))}]
		['nextSibling',['',function() {return ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'readonly'],//[randoms,function(){return rint(ra(INT_NUMS))},"",function () { return string(rint(STR_NUM))}]
		['attributes',[''],'readonly'],
		['ownerDocument',[''],'readonly'],
		['namespaceURI',[''],'readonly'],
		['prefix',[''],''],
		['localName',[''],'readonly'],
		['baseURI',[''],'readonly'],
		['textContent',["",function () { return string(rint(STR_NUM))}],'high']
		
	],
	'Methods': [
		// ['insertBefore',[function() {return ra([ra(createdElements).objName,"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName])+','+elem.objName+"."+ra(["firstChild","lastChild"])}],'high'],
		['insertBefore',[function(){return ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])+','+ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'high'],
		['replaceChild',[function(){return ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])+','+ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'high'],
		['removeChild',[function(){return ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'high'],
		['appendChild',[function(){return ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'high'],
		['hasChildNodes',[function (){return ''}],''],
		['cloneNode',[function (){return randbool()},''],'high'],
		['normalize',[""],''],//function (){return ''}
		// ['isSupported',[function() {return '"'+ra(["Core","XML","Events","UIEvents","MouseEvents","TextEvents","KeyBoardEvents","MutationEvents","MutationNameEvents","HTMLEvents","LS","LS-Async","Validation","XPath",""])+'","'+randoms()+'"'}]],
		// ['hasAttributes',[function (){return ''}]],
		['compareDocumentPosition',[function() {return ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],''],//[function(){return ra(createdElements).objName}]],
		// ['isSameNode',[function(){return ra(createdElements).objName}]],
		['lookupPrefix',[function() {return '"'+retURI()+'"'},'""'],''],
		['isDefaultNamespace',[function() {return '"'+retURI()+'"'},'""'],''],
		['lookupNamespaceURI',['""',randoms,function(){return rint(ra(INT_NUMS))},function () { return '"'+string(rint(STR_NUM))+'"'}],''],//,""
		['isEqualNode',[function(){return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],''],
		['insertAdjacentHTML',[function() {return ra(['"beforebegin"','"afterbegin"','"beforeend"','"afterend"'])+',"<'+ra(ElementArray)[0].tagName+'>"'}],''],
		// ['getFeature',[function() {return '"'+ra(["Core","XML","Events","UIEvents","MouseEvents","TextEvents","KeyBoardEvents","MutationEvents","MutationNameEvents","HTMLEvents","LS","LS-Async","Validation","XPath",""])+'","'+randoms()+'"'}]],
		// ['setUserData',[function() {return rint(2) ? '"'+randoms()+'",'+randoms()+',{}':'"'+string(rint(STR_NUM))+'","'+randoms()+'",{handle: ""}'},'""','']],//
		// ['getUserData',[function() {return rint(2) ? randoms():string(rint(STR_NUM))},'""','']]		//
	]
}

NodeListInterface = {}
NamedNodeMapInterface = {}

CharacterDataInterface = {
	'Name': 'CharacterData',
	'Attributes': [
		['data',[function(){return string(rint(STR_NUM))},""],'high'],
		['length',['',randoms,function(){return rint(ra(INT_NUMS))}],'readonly'],
		
	].concat(NodeInterface.Attributes),
	'Methods': [
		['substringData',[function() {return ra([rint(ra(INT_NUMS)),randoms(),rint(STR_NUM)])+","+ra([rint(ra(INT_NUMS)),randoms(),rint(STR_NUM)])}],'high'],
		['appendData',[function(){return "'"+string(rint(STR_NUM))+"'"}],'high'],
		['insertData',[function() {return ra([randoms(),rint(ra(INT_NUMS)),rint(STR_NUM)])+",'"+string(rint(STR_NUM))+"'"}],'high'],
		['deleteData',[function () {return ra([rint(ra(INT_NUMS)),randoms(),rint(STR_NUM)])+","+ra([rint(ra(INT_NUMS)),randoms(),rint(STR_NUM)])}],'high'],
		['replaceData',[function() {return ra([rint(ra(INT_NUMS)),randoms(),rint(STR_NUM)])+","+ra([rint(ra(INT_NUMS)),randoms(),rint(STR_NUM)])+",'"+string(rint(STR_NUM))+"'"}],'high'],
	].concat(NodeInterface.Methods)
}

AttrInterface = {
	'Name': 'AttirbuteInterface',
	'Attributes': [
		['name',[function(){return string(rint(STR_NUM))},""],'readonly'],
		['specified',[function() {return randbool()},""],'readonly'],
		['value',[function(){return string(rint(STR_NUM))},"",randoms,function(){return rint(ra(INT_NUMS))}],'high'],
		['ownerElement',[function(){return string(rint(STR_NUM))},"",randoms,function(){return rint(ra(INT_NUMS))},function(){return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'readonly'],
		['schemaTypeInfo',[function(){return string(rint(STR_NUM))},"",randoms,function(){return rint(ra(INT_NUMS))}],'readonly'],
		['isId',[function(){return string(rint(STR_NUM))},"",randoms,function(){return rint(ra(INT_NUMS))}, function() {return randbool()}],'readonly']
	].concat(NodeInterface.Attributes),
	'Methods': NodeInterface.Methods
}

ElementInterface = {
	'Name':'Element',
	'Attributes': [
		['tagName',[function(){return string(rint(STR_NUM))},""],'readonly'],
		['schemaTypeInfo',[''],'readonly']
	].concat(NodeInterface.Attributes),
	'Methods': [
		['getAttribute',[function() {return '"'+ra(ra(createdElements).obj.Attributes)[0]+'"'}],''],
		['setAttribute',[function() {return "'"+ra(ra(createdElements).obj.Attributes)[0]+"',"+ra([rint(ra(INT_NUMS)),randoms(),"''","'"+string(rint(STR_NUM))+"'"])}],'high'],
		['removeAttribute',[function() {return "'"+ra(ra(createdElements).obj.Attributes)[0]+"'"},'""'],'high'],
		['getAttributeNode',[function() {return '"'+ra(ra(createdElements).obj.Attributes)[0]+'"'},'""'],''],
		['setAttributeNode',[function() {var elem = ra(createdElements); return elem.objName+'.getAttributeNode("'+ra(elem.obj.Attributes)[0]+'")'}],'high'],//,function() {var elem = ra(createdElements); return elem.objName+'.getAttribute("")'}
		['removeAttributeNode',[function() {var elem = ra(createdElements); return elem.objName+'.getAttributeNode("'+ra(elem.obj.Attributes)[0]+'")'}],'high'],//function() {var elem = ra(createdElements); return elem.objName+'.getAttribute("")'}
		['getElementsByTagName',[function() {return '"'+ra(createdElements).obj.tagName+'"'},'""'],''],
		['getAttributeNS',[function(){return rint(2) ? '"http://www.w3.org/1999/xhtml","'+ra(ra(createdElements).obj.Attributes)[0]+'"':'"http://www.w3.org/1999/xhtml",""'}],''],
		['setAttributeNS',[function() {return "'http://www.w3.org/1999/xhtml','"+ra(ra(createdElements).obj.Attributes)[0]+"',"+ra([rint(ra(INT_NUMS)),randoms(),"'"+string(rint(STR_NUM))+"'","''"])}],''],//:'"","",""'
		['removeAttributeNS',[function(){return rint(2) ? '"http://www.w3.org/1999/xhtml","'+ra(ra(createdElements).obj.Attributes)[0]+'"':'"http://www.w3.org/1999/xhtml",""'}],''],//:'"",""'
		['getAttributeNodeNS',[function(){return rint(2) ? '"http://www.w3.org/1999/xhtml","'+ra(ra(createdElements).obj.Attributes)[0]+'"':'"http://www.w3.org/1999/xhtml",""'},function(){return rint(2) ? '"","'+ra(ra(createdElements).obj.Attributes)[0]+'"':'"",""'}],''],
		// WORKMORE ['setAttributeNodeNS',[function() {var elem = ra(createdElements); return elem.objName+'.getAttribute("'+ra(elem.obj.Attributes)[0]+'")'}]],//function() {return '"http://www.w3.org/1999/xhtml","'+ra(ra(createdElements).obj.Attributes)[0]+'"'},'"",""',"","null,null",function() {var elem = ra(createdElements); return '"http://www.w3.org/1999/xhtml",'+elem.objName+'.getAttribute("'+ra(elem.obj.Attributes)[0]+'")'},function() {var elem = ra(createdElements); return '"",'+elem.objName+'.getAttribute("'+ra(elem.obj.Attributes)[0]+'")'},function() {var elem = ra(createdElements); return '"http://www.w3.org/1999/xhtml",""'}
		['getElementsByTagNameNS',[function() {return '"http://www.w3.org/1999/xhtml","'+ra(createdElements).obj.tagName+'"'}],''],
		['hasAttribute',[function() {return '"'+ra(ra(createdElements).obj.Attributes)[0]+'"'},'""'],''],
		['hasAttributeNS',[function() {return '"http://www.w3.org/1999/xhtml","'+ra(ra(createdElements).obj.Attributes)[0]+'"'},'"http://www.w3.org/1999/xhtml",""'],''],
		// ['setIdAttribute',[function() {return '"'+ra(ra(createdElements).obj.Attributes)[0]+'",'+randbool()},function() {return '"'+ra(ra(createdElements).object.Attributes)[0]+'",""'},function() {return '"'+ra(ra(createdElements).object.Attributes)[0]+'",'+rint(ra(INT_NUMS))},'"",""']],
		// ['setIdAttributeNS',[function() {return '"http://www.w3.org/1999/xhtml","'+ra(ra(createdElements).obj.Attributes)[0]+'",'+randbool()},function() {return '"http://www.w3.org/1999/xhtml","'+ra(ra(createdElements).object.Attributes)[0]+'",""'},function() {return '"","'+ra(ra(createdElements).object.Attributes)[0]+'",'+rint(ra(INT_NUMS))},'"","",""',function() {return '"","'+ra(ra(createdElements).object.Attributes)[0]+'",'+randbool()}]],
		// ['setIdAttributeNode',[function() {return '"'+ra(ra(createdElements).obj.Attributes)[0]+'",'+randbool()},function() {return '"'+ra(ra(createdElements).object.Attributes)[0]+'",""'},function() {return '"'+ra(ra(createdElements).object.Attributes)[0]+'",'+rint(ra(INT_NUMS))},'"",""',function() {return 'document.createAttribute("'+ra(ra(createdElements).object.Attributes)[0]+'"),'+randbool()},function() {return 'document.createAttribute("'+ra(ra(createdElements).object.Attributes)[0]+'"),'+rint(99999999)},function() {return 'document.createAttribute("'+ra(ra(createdElements).object.Attributes)[0]+'"),'+randoms()}]]
	].concat(NodeInterface.Methods)
}


TextInterface = {
	'Name': 'text',
	'Attributes': [
		['isElementContentWhitespace',['',randbool],'readonly'],
		['wholeText',[function(){return string(rint(STR_NUM))},""],'readonly']
	].concat(CharacterDataInterface.Attributes),
	'Methods':[
		// ['replaceWholeText',[function(){return "'"+string(rint(STR_NUM))+"'"},'""'],'high'],
		['splitText',[function() {return rint(2) ? rint(STR_NUM):rint(ra(INT_NUMS))}],'high']//function(){return rint(2) ? rint(ra(INT_NUMS)):randoms()}
	].concat(CharacterDataInterface.Methods),
	'tagName':'Text',
	'style':CSSPropertiesInterface
}

CommentInterface = CharacterDataInterface

DOMConfigurationInterface = {
	'name':'DOMConfiguration',
	'Attributes':[
		['parameterNames',[function(){return string(rint(STR_NUM))},"",randoms,function(){return rint(ra(INT_NUMS))}],'readonly']
	],
	'Methods':[
		['setParameter',[''],'high'],
		['getParameter',[function(){return '"'+string(rint(STR_NUM))+'"'},'""',"",randoms,function(){return rint(ra(INT_NUMS))},function(){return '"'+randoms()+'"'},function(){return '"'+rint(ra(INT_NUMS))+'"'}],'high'],
		['canSetParameter',[''],'']
	]
}

CDATASectionInterface = TextInterface

EntityInterface = {
	'Name':'Entity',
	'Attributes':[
		['publicId',[function(){return string(rint(STR_NUM))},"",randoms,function(){return rint(ra(INT_NUMS))}],'readonly'],
		['systemId',[function(){return string(rint(STR_NUM))},"",randoms,function(){return rint(ra(INT_NUMS))}],'readonly'],
		['notationName',[function(){return string(rint(STR_NUM))},"",randoms,function(){return rint(ra(INT_NUMS))}],'readonly'],
		['inputEncoding',[function(){return string(rint(STR_NUM))},"",randoms,function(){return rint(ra(INT_NUMS))}],'readonly'],
		['xmlEncoding',[function(){return string(rint(STR_NUM))},"",randoms,function(){return rint(ra(INT_NUMS))}],'readonly'],
		['xmlVersion',[function(){return string(rint(STR_NUM))},"",randoms,function(){return rint(ra(INT_NUMS))}],'readonly']
	].concat(NodeInterface.Attributes),
	'Methods':[].concat(NodeInterface.Methods)
}

EntityReferenceInterface = NodeInterface

DocumentFragmentInterface = NodeInterface

DocumentInterface = {
	'Name':'Document',
	'Attributes':[
		['doctype',[function(){return string(rint(STR_NUM))},"",randoms,function(){return rint(ra(INT_NUMS))}],'readonly'],
		['implementation',[function(){return string(rint(STR_NUM))},"",randoms,function(){return rint(ra(INT_NUMS))}],'readonly'],
		['documentElement',[function(){return string(rint(STR_NUM))},"",randoms,function(){return rint(ra(INT_NUMS))}],'readonly'],
		['inputEncoding',[function(){return string(rint(STR_NUM))},"",randoms,function(){return rint(ra(INT_NUMS))}],'readonly'],
		['xmlEncoding',[function(){return string(rint(STR_NUM))},"",randoms,function(){return rint(ra(INT_NUMS))}],'readonly'],
		['xmlStandalone',[function(){return randbool()},function(){return string(rint(STR_NUM))},"",randoms,function(){return rint(ra(INT_NUMS))}],''],
		// ['xmlVersion',[function(){return string(rint(STR_NUM))},"",randoms,function(){return rint(ra(INT_NUMS))}],''],
		['strictErrorChecking',[function(){return string(rint(STR_NUM))},"",randoms,function(){return rint(ra(INT_NUMS))},function(){return randbool()}],'readonly'],
		// ['documentURI',[''],''],
		['domConfig',[function(){return string(rint(STR_NUM))},"",randoms,function(){return rint(ra(INT_NUMS))}],'readonly'],
	],//.concat(NodeInterface.Attributes),
	'Methods':[
		['createElement',[function(){return '"'+ra(ElementArray)[0].tagName+'"'}],''],//,'""'
		['createDocumentFragment',[''],''],
		['createTextNode',[function(){return '"'+string(rint(STR_NUM))+'"'},'""'],''],
		['createComment',[function(){return '"'+string(rint(STR_NUM))+'"'},'""'],''],
		// ['createCDATASection',[function(){return '"'+string(rint(STR_NUM))+'"'},'""',randoms,function(){return rint(ra(INT_NUMS))}]],
		// ['createProcessingInstruction',[function() {return '"http://www.w3.org/1999/xhtml","'+string(rint(STR_NUM))+'"'}],''],
		['createAttribute',[function(){return '"'+ra(ra(createdElements).obj.Attributes)[0]+'"'}],''],//,'""'
		// ['createEntityReference',[function(){return '"'+string(rint(STR_NUM))+'"'},'""',randoms,function(){return rint(ra(INT_NUMS))}]],
		['getElementsByTagName',[function(){return '"'+ra(createdElements).obj.tagName+'"'},'""'],''],
		['importNode',[function(){return ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])+','+randbool()}],'high'],
		['createElementNS',[function() {return '"http://www.w3.org/1999/xhtml","'+ra(ElementArray)[0].tagName+'"'}],''],
		['createAttributeNS',[function() {return '"http://www.w3.org/1999/xhtml","'+ra(ra(createdElements).obj.Attributes)[0]+'"'}],''],
		['getElementsByTagNameNS',[function(){return '"http://www.w3.org/1999/xhtml","'+ra(createdElements).obj.tagName+'"'}],''],
		['getElementById',[function(){return '"'+ra(createdElements).obj.tagName+'"'}],''],
		['adoptNode',[function(){return ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'high'],
		// ['normalizeDocument',['']],
		// ['renameNode',[function(){return ra(createdElements).obj.tagName+',"http://www.w3.org/1999/xhtml","'+string(rint(STR_NUM))+'"'},function(){return ra(createdElements).object.tagName+',"http://www.w3.org/1999/xhtml",""'},function(){return ra(createdElements).object.tagName+',"",""'},function(){return {},"",""}]],
		['createRange',[''],''],
		// ['createTextRange',['']],
		['createTreeWalker',[function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])+','+ra([randoms(),1,2,3,0xFFFFFFFF,0x00000001,0x00000002,0x00000004,0x00000008,0x00000010,0x00000020,0x00000040,0x00000080,0x00000100,0x00000200,0x00000400,0x00000800])+','+ra(['{acceptNode: NodeFilter.FILTER_ACCEPT}','{acceptNode:NodeFilter.FILTER_REJECT}','{acceptNode:NodeFilter.FILTER_SKIP}',null])+','+ra([randbool(),randoms()])}],''],//ra([randoms()])
		['createNodeIterator',[function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])+','+ra([randoms(),1,2,3,0xFFFFFFFF,0x00000001,0x00000002,0x00000004,0x00000008,0x00000010,0x00000020,0x00000040,0x00000080,0x00000100,0x00000200,0x00000400,0x00000800])+','+ra(['{acceptNode: NodeFilter.FILTER_ACCEPT}','{acceptNode:NodeFilter.FILTER_REJECT}','{acceptNode:NodeFilter.FILTER_SKIP}',null])+','+ra([randbool(),randoms()])}],'']//ra([randoms()])
	]//.concat(NodeInterface.Methods)
}

//HTML.IDL

HTMLDocumentInterface = {
	'Name':'HTMLDocument',
	'Attributes':[
		['title',[function() {return rint(2) ? '':string(rint(STR_NUM))}],''],
		['dir',["ltr","rtl","auto",""],'high'],
		// ['location',[function(){ return retURI(2000)}],'readonly'],
		['referrer',[function(){ return retURI(2000)}],'readonly'],
		// ['domain',[function(){ return retURL(2000)}],'readonly'],
		['URL',[function(){ return retURL(2000)}],'readonly'],
		['body',[function() {return "document.createElement('"+ra(["FRAMESET","BODY"])+"')"},'document.body'],'high'],//function() {return ra([ra(createdElements).objName,ra(createdText).objName,"document.body"])+"."+ra(["innerHTML","outerHTML"])},''
		['head',[function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])},''],'readonly'],
		['images',["document.getElementsByTagName('IMG')","document.createElement('IMG')","document.getElementsByTagName('OBJECT')","document.createElement('OBJECT')",''],'readonly'],
		['embeds',[''],'readonly'],
		['plugins',[''],'readonly'],
		['defaultView',[''],'readonly'],
		['scripts',[''],'readonly'],
		['applets',[''],'readonly'],
		['links',[''],'readonly'],
		['forms',[''],'readonly'],
		['anchors',[''],'readonly'],
		['cookie',[function() {return string(rint(STR_NUM))},""],'readonly'],
		['lastModified',[function() {return rint(2) ? randoms()+"/"+randoms()+"/"+randoms()+" "+randoms()+":"+randoms()+":"+randoms(): rint(99)+"/"+rint(99)+"/"+rint(99)+" "+rint(99)+":"+rint(99)+":"+rint(99)},""],'readonly'],
		['readyState',["loading","interactive","complete","",function() {return string(rint(STR_NUM))}],'readonly'],
		['activeElement',[function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])},''],'readonly'],
		//['designMode',["On","Off",""],'high']
	].concat(DocumentInterface.Attributes),
	'Methods':[
		['open',[function() {return op()}],''],
		['close',[function() {return ''}],'high'],
		['write',[function() {return ra(['"'+string(rint(STR_NUM))+'"',ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])+"."+ra(["innerHTML","outerHTML"])])},'""'],''],
		['writeln',[function() {return ra(['"'+string(rint(STR_NUM))+'"',ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])+"."+ra(["innerHTML","outerHTML"])])},'""'],''],
		['getElementsByName',[function() {return rint(2) ? '"'+ra(createdElements).obj.tagName+'"':'""'}],''],
		['hasFocus',[function() {return ''}],''],
		['execCommand',[function() {return rint(2) ? cmds():cmds()}],'high'],//,''
		['queryCommandEnabled',['""',function() {return '"'+ra(["backColor","bold","contentReadOnly","copy","createLink","cut","decreaseFontSize","delete","enableInlineTableEditing","enableObjectResizing","fontName","fontSize","foreColor","formatBlock","forwardDelete","heading","hiliteColor","increaseFontSize","indent","insertBrOnReturn","insertHorizontalRule","insertHTML","insertBrOnReturn","insertOrderedList","insertUnorderedList","insertParagraph","insertText","italic","justifyCenter","justifyFull","justifyLeft","justifyRight","outdent","paste","redo","removeFormat","selectAll","strikeThrough","subscript","superscript","underline","undo","unlink","useCSS","styleWithCSS"])+'"'}],''],
		['queryCommandIndeterm',['""',function() {return '"'+ra(["backColor","bold","contentReadOnly","copy","createLink","cut","decreaseFontSize","delete","enableInlineTableEditing","enableObjectResizing","fontName","fontSize","foreColor","formatBlock","forwardDelete","heading","hiliteColor","increaseFontSize","indent","insertBrOnReturn","insertHorizontalRule","insertHTML","insertBrOnReturn","insertOrderedList","insertUnorderedList","insertParagraph","insertText","italic","justifyCenter","justifyFull","justifyLeft","justifyRight","outdent","paste","redo","removeFormat","selectAll","strikeThrough","subscript","superscript","underline","undo","unlink","useCSS","styleWithCSS"])+'"'}],''],
		['queryCommandState',['""',function() {return '"'+ra(["backColor","bold","contentReadOnly","copy","createLink","cut","decreaseFontSize","delete","enableInlineTableEditing","enableObjectResizing","fontName","fontSize","foreColor","formatBlock","forwardDelete","heading","hiliteColor","increaseFontSize","indent","insertBrOnReturn","insertHorizontalRule","insertHTML","insertBrOnReturn","insertOrderedList","insertUnorderedList","insertParagraph","insertText","italic","justifyCenter","justifyFull","justifyLeft","justifyRight","outdent","paste","redo","removeFormat","selectAll","strikeThrough","subscript","superscript","underline","undo","unlink","useCSS","styleWithCSS"])+'"'}],''],
		['queryCommandSupported',['""',function() {return '"'+ra(["backColor","bold","contentReadOnly","copy","createLink","cut","decreaseFontSize","delete","enableInlineTableEditing","enableObjectResizing","fontName","fontSize","foreColor","formatBlock","forwardDelete","heading","hiliteColor","increaseFontSize","indent","insertBrOnReturn","insertHorizontalRule","insertHTML","insertBrOnReturn","insertOrderedList","insertUnorderedList","insertParagraph","insertText","italic","justifyCenter","justifyFull","justifyLeft","justifyRight","outdent","paste","redo","removeFormat","selectAll","strikeThrough","subscript","superscript","underline","undo","unlink","useCSS","styleWithCSS"])+'"'}],''],
		['queryCommandValue',['""',function() {return '"'+ra(["backColor","bold","contentReadOnly","copy","createLink","cut","decreaseFontSize","delete","enableInlineTableEditing","enableObjectResizing","fontName","fontSize","foreColor","formatBlock","forwardDelete","heading","hiliteColor","increaseFontSize","indent","insertBrOnReturn","insertHorizontalRule","insertHTML","insertBrOnReturn","insertOrderedList","insertUnorderedList","insertParagraph","insertText","italic","justifyCenter","justifyFull","justifyLeft","justifyRight","outdent","paste","redo","removeFormat","selectAll","strikeThrough","subscript","superscript","underline","undo","unlink","useCSS","styleWithCSS"])+'"'}],'']
	].concat(DocumentInterface.Methods),
	'tagName':'Document'
}

HTMLElementInterface = {
	'Name':'HTMLElement',
	'Attributes': [
		// ['id',[function() {return rint(2) ? '':string(rint(STR_NUM))},''],''],
		// ['title',[function() {return rint(2) ? '':string(rint(STR_NUM))},''],''],
		['lang',[function() {return rint(2) ? ra(["ab","aa","af","sq","am","ar","an","hy","as","ay","az","ba","eu","bn","dz","bh","bi","br","bg","my","be","km","ca","zh","zh-Hans","zh-Hant","co","hr","cs","da","nl","en","eo","et","fo","fa","fj","fi","fr","fy","gl","gd","gv","ka","de","el","kl","gn","gu","ht","ha","he"," iw","hi","hu","is","io","id","in","ia","ie","iu","ik","ga","it","ja","jv","kn","ks","kk","rw","ky","rn","ko","ku","lo","la","lv","li","ln","lt","mk","mg","ms","ml","mt","mi","mr","mo","mn","na","ne","no","oc","or","om","ps","pl","pt","pa","qu","rm","ro","ru","sm","sg","sa","sr","sh","st","tn","sn","ii","sd","si","ss","sk","sl","so","es","su","sw","sv","tl","tg","ta","tt","te","th","bo","ti","to","ts","tr","tk","tw","ug","uk","ur","uz","vi","vo","wa","cy","wo","xh","yi","ji","yo","zu",""]):string(rint(STR_NUM))},''],''],
		['dir',["ltr","rtl","auto",""],'high'],
		['translate',["yes","no","","inherit","default"],'high'],
		['dataset',['false','true',''],'readonly'],
		['hidden',["false","true",''],'high'],
		['draggable',["false","true",'','auto'],'high'],
		['tabIndex',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],''],
		['accessKey',[function() {return string(rint(2)+1)},''],''],
		// ['accessKeyLabel',[],''],
		['dropzone',["copy","move","link",""],'readonly'],
		['contentEditable',["false","true"],'high'],
		['isContentEditable',['true','false'],'readonly'],
		['spellcheck',["false","true",''],'high'],
		['className',[function() {return rint(2) ? '':string(rint(STR_NUM))}],''],
		['innerHTML',['',function() {return ra(['document.body',returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])+".innerHTML"},function() {return ra(['document.body',returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])+".outerHTML"}],'high'],//,function() {return generate(1)}
		['innerText',['',function() {return string(rint(STR_NUM))},function() {return ra(['document.body',returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])+".innerText"},function() {return ra(['document.body',returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])+".outerText"}],'high'],
		['outerHTML',['',function() {return ra(['document.body',returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])+".outerHTML"},function() {return ra(['document.body',returnRandomElement(),ra(createdText).objName])+".innerHTML"}],'high'],
		['outerText',['',function() {return string(rint(STR_NUM))},function() {return ra(['document.body','createdElements[\''+ra(createdText).objName+'\']',returnRandomElement(),ra(createdText).objName])+".innerText"},function() {return ra(['document.body','createdElements[\''+ra(createdText).objName+'\']',returnRandomElement(),ra(createdText).objName])+".outerText"}],'high']
	].concat(ElementInterface.Attributes),
	'Methods': [
		['click',[function() {return ''}],'high'],
		['focus',[function() {return ''}],'high'],
		['blur',[function() {return ''}],'high'],
	].concat(ElementInterface.Methods),
	'tagName':'Element',
	'style':CSSPropertiesInterface
}

HTMLHtmlElementInterface = {
	'Name':'HTMLHtmlElement',
	'Attributes':[['version',[function() {  return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'']].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'HTML',
	'style':HTMLElementInterface.style
}


HTMLHeadElementInterface = {
	'Name':'HTMLHeadElement',
	'Attributes':[['profile',[function() {return rint(2) ? retURL(2000):''}],'']].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'HEAD',
	'style':HTMLElementInterface.style
}

HTMLLinkElementInterface = {
	'Name':'HTMLLinkElement',
	'Attributes':[
		['disabled',[function() {return randbool()},''],'high'],
		['charset',['ASCII','Windows-1252','ISO-8859-1','UTF-8',''],'high'],
		['href',[function() { return rint(2) ? retURL(2000):''}],'high'],
		['hreflang',[function() {return ra(["ab","aa","af","sq","am","ar","an","hy","as","ay","az","ba","eu","bn","dz","bh","bi","br","bg","my","be","km","ca","zh","zh-Hans","zh-Hant","co","hr","cs","da","nl","en","eo","et","fo","fa","fj","fi","fr","fy","gl","gd","gv","ka","de","el","kl","gn","gu","ht","ha","he"," iw","hi","hu","is","io","id","in","ia","ie","iu","ik","ga","it","ja","jv","kn","ks","kk","rw","ky","rn","ko","ku","lo","la","lv","li","ln","lt","mk","mg","ms","ml","mt","mi","mr","mo","mn","na","ne","no","oc","or","om","ps","pl","pt","pa","qu","rm","ro","ru","sm","sg","sa","sr","sh","st","tn","sn","ii","sd","si","ss","sk","sl","so","es","su","sw","sv","tl","tg","ta","tt","te","th","bo","ti","to","ts","tr","tk","tw","ug","uk","ur","uz","vi","vo","wa","cy","wo","xh","yi","ji","yo","zu",""])},''],'high'],
		['media',[mediaValue,''],''],
		['rel',['alternate','author','bookmark','help','icon','license','next','nofollow','noreferrer','prefetch','prev','search','stylesheet','tag',''],''],
		['rev',["alternate","stylesheet","start","next","prev","contents","index","glossary","copyright","chapter","section","subsection","appendix","help","bookmark",""],''],
		['crossOrigin',['anonymous','use-credentials',''],''],
		['relList',[''],'readonly'],
		['target',['_top','_blank','_self','_parent',''],''],
		['sizes',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'readonly'],
		['type',[ra(mimeTypes),''],'']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'LINK',
	'style':HTMLElementInterface.style
}

HTMLTitleElementInterface = {
	'Name':'HTMLTitleElement',
	'Attributes':[
		['text',[function() {return rint(2) ? string(rint(STR_NUM)): ''}],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'TITLE',
	'style':HTMLElementInterface.style
}

HTMLMetaElementInterface = {
	'Name':'HTMLMetaElement',
	'Attributes':[
		['content',[function() {return randoms()},function() {return rint(2) ? rint(ra(INT_NUMS)):''}],''],
		['httpEquiv',["content-language","content-type","default-style","refresh","set-cookie"],''],
		['name',["application-name","author","description","generator","keywords",""],''],
		['scheme',[function() {return retURI(2000)},''],''],
		['charset',['ASCII','Windows-1252','ISO-8859-1','UTF-8',''],'']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'META',
	'style':HTMLElementInterface.style
}

HTMLBaseFontElementInterface = {
	'Name':'HTMLBaseFontElement',
	'Attributes':[
		['color',[getRandomColor,''],'high'],
		['face',[returnMultipleFamilies,''],'high'],
		['size',[randoms,'',function() {return rint(ra(INT_NUMS))}],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'BASEFONT',
	'style':HTMLElementInterface.style
}

HTMLFontElementInterface = {
	'Name':'HTMLFontElement',
	'Attributes':[
		['color',[getRandomColor,''],'high'],
		['face',[returnMultipleFamilies,''],'high'],
		['size',[randoms,'',function() {return rint(ra(INT_NUMS))}],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'FONT',
	'style':HTMLElementInterface.style
}

HTMLIsIndexElementInterface = {
	'Name':'HTMLIsIndexElement',
	'Attributes':[
		['form',[function() {return rint(2) ? "document.createElement('FORM')": "document.getElementsByTagName('FORM')[0]"},''],'readonly'],
		['prompt',[function() {return string(rint(STR_NUM))},''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'ISINDEX',
	'style':HTMLElementInterface.style
}

HTMLStyleElementInterface = {
	'Name':'HTMLStyleElement',
	'Attributes':[
		['disabled',[function() {return randbool()},''],'high'],
		['media',[mediaValue,''],'high'],
		['type',[ra(mimeTypes),''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'STYLE',
	'style':HTMLElementInterface.style
}

HTMLBodyElementInterface = {
	'Name':'HTMLBodyElement',
	'Attributes':[
		['aLink',[getRandomColor,''],'high'],
		['background',[function() {return retimageURI(2000)},''],'high'],
		['bgColor',[getRandomColor,''],'high'],
		['link',[getRandomColor,''],'high'],
		['text',[getRandomColor,''],'high'],
		['vLink',[getRandomColor,''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'BODY',
	'style':HTMLElementInterface.style
}

HTMLFormElementInterface = {
	'Name':'HTMLFormElement',
	'Attributes':[
		['elements',[''],'readonly'],//,function() {return generate(1)},
		['length',[function() {return rint(2) ? rint(ra(INT_NUMS)): randoms()},''],'readonly'],
		['name',[function() {return string(rint(STR_NUM))},''],''],
		['acceptCharset',['ASCII','Windows-1252','ISO-8859-1','UTF-8',''],''],
		['action',[function() {return retURL(2000)},''],'high'],
		['enctype',["application/x-www-form-urlencoded","multipart/form-data","text/plain",""],''],
		['method',["get","post",'put','delete',''],'high'],
		['target',["_blank","_self","_parent","_top",""],'high'],
		['autocomplete',['on','off',''],'high'],
		['noValidate',["novalidate",''],'readonly']
	].concat(HTMLElementInterface.Attributes),
	'Methods':[
		['sumbit',[function() {return ''}],'high'],
		['reset',[function() {return ''}],'high']
		//['checkValidity',[function() {return ''}]]
	].concat(HTMLElementInterface.Methods),
	'tagName':'FORM',
	'style':HTMLElementInterface.style
}

HTMLSelectElementInterface = {
	'Name':'HTMLSelectElement',
	'Attributes':[
		['type',['select-one','select-multiple',''],'readonly'],
		['selectedIndex',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['value',[function() {return string(rint(STR_NUM))},''],'high'],
		['length',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['form',[function() {return rint(2) ? "document.createElement('FORM')":"document.getElementsByTagName('FORM')[0]"},''],'readonly'],
		['options',[function() {return rint(2) ? "document.createElement('OPTION')":"document.getElementsByTagName('OPTION')[0]"},''],'readonly'],
		['disabled',[function() {return randbool()},''],'high'],
		['multiple',[function() {return randbool()},''],'high'],
		['size',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['name',[function() {return string(rint(STR_NUM))},''],''],
		['tabIndex',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],''],
		['autofocus',[function() {return randbool()},''],'high'],
		['required',[function() {return randbool()},''],'high'],
		['willValidate',[function() {return randbool()},''],'readonly'],
		['validity',["valueMissing","typeMismatch","patternMismatch","tooLong","tooShort","rangeUnderflow","rangeOverflow","stepMismatch","badInput","customError","valid",""],'readonly'],
		['validationMessage',[function(){return string(rint(STR_NUM))},''],'high'],
		['selectedOptions',[function() {return rint(2) ? "document.createElement('OPTION')":"document.getElementsByTagName('OPTION')"},''],'readonly'],
		['labels',[function() {return rint(2) ? "document.createElement('LABEL')":"document.getElementsByTagName('LABEL')"},''],'readonly']
	].concat(HTMLElementInterface.Attributes),
	'Methods':[
		['add',[function() {return rint(2) ? null:randoms()},function() {return rint(2) ? "document.createElement('option')":"document.createElement('optgroup')"}, function() {return rint(2) ? "document.getElementsByTagName('option')[0]":"document.getElementsByTagName('optgroup')[0]"},function() {return rint(2) ? "document.createElement('"+ra(createdElements).obj.tagName+"')":"document.createElement('"+ra(ElementArray)[0].tagName+"')"},function() {return rint(2) ? ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']']):''}],'high'],
		['remove',[function() {return ''},function(){return rint(2) ? rint(ra(INT_NUMS)):randoms()}],'high'],
		//['checkValidity',[function() {return ''}]],
		['setCustomValidity',[function() {return '"'+string(rint(STR_NUM))+'"'}],'']//,''
	].concat(HTMLElementInterface.Methods),
	'tagName':'SELECT',
	'style':HTMLElementInterface.style
}

HTMLAnchorElementInterface = {
	'Name':'HTMLAnchorElement',
	'Attributes':[
		['target',["_blank","_self","_parent","_top",""],'high'],
		['download',[function() {return rint(2) ? string(rint(STR_NUM)):"filename"},''],''],
		['rel',['alternate','author','bookmark','help','icon','license','next','nofollow','noreferrer','prefetch','prev','search','stylesheet','tag',''],'high'],
		['rev',["alternate","stylesheet","start","next","prev","contents","index","glossary","copyright","chapter","section","subsection","appendix","help","bookmark","","nofollow","licence","tag","friend"],'high'],
		['relList',[''],'readonly'],
		['hreflang',[function() {return rint(2) ? ra(["ab","aa","af","sq","am","ar","an","hy","as","ay","az","ba","eu","bn","dz","bh","bi","br","bg","my","be","km","ca","zh","zh-Hans","zh-Hant","co","hr","cs","da","nl","en","eo","et","fo","fa","fj","fi","fr","fy","gl","gd","gv","ka","de","el","kl","gn","gu","ht","ha","he"," iw","hi","hu","is","io","id","in","ia","ie","iu","ik","ga","it","ja","jv","kn","ks","kk","rw","ky","rn","ko","ku","lo","la","lv","li","ln","lt","mk","mg","ms","ml","mt","mi","mr","mo","mn","na","ne","no","oc","or","om","ps","pl","pt","pa","qu","rm","ro","ru","sm","sg","sa","sr","sh","st","tn","sn","ii","sd","si","ss","sk","sl","so","es","su","sw","sv","tl","tg","ta","tt","te","th","bo","ti","to","ts","tr","tk","tw","ug","uk","ur","uz","vi","vo","wa","cy","wo","xh","yi","ji","yo","zu",""]):string(rint(STR_NUM))},''],''],
		['type',[ra(mimeTypes),''],'high'],
		['text',[function() { return rint(2) ? string(rint(STR_NUM)):''}],'high'],
		['accessKey',[function() {return rint(2) ? string(2):string(1)},''],''],
		['charset',['ASCII','Windows-1252','ISO-8859-1','UTF-8',''],'high'],
		['coords',[function() {return rint(2) ? coords(rint(2000)):''}],'high'],
		['href',[function() { return rint(2) ? retURL(2000):''}],'high'],
		['name',[function() { return rint(2) ? string(rint(STR_NUM)):''}],''],
		['shape',["default","rect","poly","circle",""],'high'],
		['tabIndex',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'A',
	'style':HTMLElementInterface.style
}

HTMLAbbrElementInterface = {
	'Name':'HTMLAbbrElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'ABBR',
	'style':HTMLElementInterface.style
}

HTMLAddressElementInterface = {
	'Name':'HTMLAddressElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'ADDRESS',
	'style':HTMLElementInterface.style
}

HTMLAreaElementInterface = {
	'Name':'HTMLAreaElement',
	'Attributes':[
		['alt',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'high'],
		['accessKey',[function() {return rint(2) ? string(2):string(1)},''],''],
		['href',[function() { return rint(2) ? retURL(2000):''}],'high'],
		['noHref',[function() {return randbool()},''],'high'],
		['tabIndex',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],''],
		['coords',[function() {return rint(2) ? coords(rint(2000)):''}],'high'],
		['shape',["default","rect","poly","circle",""],'high'],
		['target',["_blank","_self","_parent","_top",""],'high'],
		['download',[function() {return rint(2) ? string(rint(STR_NUM)):"filename"},''],''],
		['rel',['alternate','author','bookmark','help','icon','license','next','nofollow','noreferrer','prefetch','prev','search','stylesheet','tag',''],'high'],
		['relList',[''],'readonly'],
		['hreflang',[function() {return rint(2) ? ra(["ab","aa","af","sq","am","ar","an","hy","as","ay","az","ba","eu","bn","dz","bh","bi","br","bg","my","be","km","ca","zh","zh-Hans","zh-Hant","co","hr","cs","da","nl","en","eo","et","fo","fa","fj","fi","fr","fy","gl","gd","gv","ka","de","el","kl","gn","gu","ht","ha","he"," iw","hi","hu","is","io","id","in","ia","ie","iu","ik","ga","it","ja","jv","kn","ks","kk","rw","ky","rn","ko","ku","lo","la","lv","li","ln","lt","mk","mg","ms","ml","mt","mi","mr","mo","mn","na","ne","no","oc","or","om","ps","pl","pt","pa","qu","rm","ro","ru","sm","sg","sa","sr","sh","st","tn","sn","ii","sd","si","ss","sk","sl","so","es","su","sw","sv","tl","tg","ta","tt","te","th","bo","ti","to","ts","tr","tk","tw","ug","uk","ur","uz","vi","vo","wa","cy","wo","xh","yi","ji","yo","zu",""]):string(rint(STR_NUM))},''],''],
		['type',[ra(mimeTypes),''],'']		
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'AREA',
	'style':HTMLElementInterface.style
}

HTMLArticleElementInterface = {
	'Name':'HTMLArticleElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'ARTICLE',
	'style':HTMLElementInterface.style
}


HTMLAsideElementInterface = {
	'Name':'HTMLAsideElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'ASIDE',
	'style':HTMLElementInterface.style
}

HTMLMediaElementInterface = {
	'Name':'HTMLMediaElement',
	'Attributes':[
		['error',[function() {return rint(2) ? ra([0,1,2,3,4]):randoms()},function() {return rint(ra(INT_NUMS))},''],'readonly'],
		['src',[function() {return rint(2) ? retmediaURI(20000):''}],'high'],
		['currentSrc',[function() {return rint(2) ? retmediaURI(20000):''}],'readonly'],
		['crossOrigin',['anonymous','use-credentials',''],'high'],
		['NETWORK_EMPTY',[function() {return rint(2) ? 0:randoms()}, function() {return rint(ra(INT_NUMS))},''],''],
		['NETWORK_IDLE',[function() {return rint(2) ? 1:randoms()}, function() {return rint(ra(INT_NUMS))},''],''],
		['NETWORK_LOADING',[function() {return rint(2) ? 2:randoms()}, function() {return rint(ra(INT_NUMS))},''],''],
		['NETWORK_NO_SOURCE',[function() {return rint(2) ? 3:randoms()}, function() {return rint(ra(INT_NUMS))},''],''],
		['networkState',[function() { return rint(2) ? ra([0,1,2,3]):randoms()},function() {return rint(ra(INT_NUMS))},''],'readonly'],
		['preload',['none','metadata','auto',''],'high'],
		['buffered',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'readonly'],
		['HAVE_NOTHING',[function() {return rint(2) ? 0:randoms()}, function() {return rint(ra(INT_NUMS))},''],''],
		['HAVE_METADATA',[function() {return rint(2) ? 1:randoms()}, function() {return rint(ra(INT_NUMS))},''],''],
		['HAVE_CURRENT_DATA',[function() {return rint(2) ? 2:randoms()}, function() {return rint(ra(INT_NUMS))},''],''],
		['HAVE_FUTURE_DATA',[function() {return rint(2) ? 3:randoms()}, function() {return rint(ra(INT_NUMS))},''],''],
		['HAVE_ENOUGH_DATA',[function() {return rint(2) ? 4:randoms()}, function() {return rint(ra(INT_NUMS))},''],''],
		['readyState',[function() {return rint(2) ? ra(['0','1','2','3','4']):randoms()},function() {return rint(ra(INT_NUMS))},''],'readonly'],
		['seeking',[function() {return randbool()},''],'high'],
		['currentTime',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['duration',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'readonly'],
		['paused',[function() {return randbool()},''],'readonly'],
		['defaultPlaybackRate',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},'',"1.0"],'high'],
		['playbackRate',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},'',"1.0"],'high'],
		['played',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'readonly'],
		['seekable',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'readonly'],
		['ended',[function() {return randbool()},''],'readonly'],
		['autoplay',[function() {return randbool(),''}],'high'],
		['loop',[function() {return randbool()}],'high'],
		['mediaGroup',[function() {return string(rint(STR_NUM))},'',mediaValue],''],
		['controller',[function() {return 'new MediaController()',null,''}],''],
		['controls',[function() {return randbool(),''}],'high'],
		['volume',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['muted',[function() {return randbool()},''],'high'],
		['defaultMuted',[function() {return randbool()},''],'high'],
		['audioTracks',[''],'readonly'],
		['videoTracks',[''],'readonly'],
		['textTracks',[''],'readonly']
	].concat(HTMLElementInterface.Attributes),
	'Methods':[
		['load',[function() {return '' }],'high'],
		['canPlayType',['"'+ra(mimeTypes)+'"',''],''],
		['getStartDate',[function() {return '' }],''],
		['play',[function() {return '' }],'high'],
		['pause',[function() {return '' }],'high'],
		['addTextTrack',[function() {return '"'+ra(["subtitles","captions","descriptions","chapters","metadata",""])+'","'+string(rint(STR_NUM))+'","'+ra(["ab","aa","af","sq","am","ar","an","hy","as","ay","az","ba","eu","bn","dz","bh","bi","br","bg","my","be","km","ca","zh","zh-Hans","zh-Hant","co","hr","cs","da","nl","en","eo","et","fo","fa","fj","fi","fr","fy","gl","gd","gv","ka","de","el","kl","gn","gu","ht","ha","he"," iw","hi","hu","is","io","id","in","ia","ie","iu","ik","ga","it","ja","jv","kn","ks","kk","rw","ky","rn","ko","ku","lo","la","lv","li","ln","lt","mk","mg","ms","ml","mt","mi","mr","mo","mn","na","ne","no","oc","or","om","ps","pl","pt","pa","qu","rm","ro","ru","sm","sg","sa","sr","sh","st","tn","sn","ii","sd","si","ss","sk","sl","so","es","su","sw","sv","tl","tg","ta","tt","te","th","bo","ti","to","ts","tr","tk","tw","ug","uk","ur","uz","vi","vo","wa","cy","wo","xh","yi","ji","yo","zu",""])+'"'}],'high'],
		['start',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		// ['end',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high']
	].concat(HTMLElementInterface.Methods),
	'tagName':'media',
	'style':HTMLElementInterface.style
}

HTMLAudioElementInterface = {
	'Name':'HTMLAudioElement',
	'Attributes':HTMLMediaElementInterface.Attributes,
	'Methods':HTMLMediaElementInterface.Methods,
	'tagName':'AUDIO',
	'style':HTMLMediaElementInterface.style
}

HTMLBElementInterface = {
	'Name':'HTMLBElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'B',
	'style':HTMLElementInterface.style
}

HTMLBaseElementInterface = {
	'Name':'HTMLBaseElement',
	'Attributes':[
		['href',[function() { return rint(2) ? retURL(2000):''}],'high'],
		['target',["_blank","_self","_parent","_top",""],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'BASE',
	'style':HTMLElementInterface.style
}

HTMLBdiElementInterface = {
	'Name':'HTMLBdiElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'BDI',
	'style':HTMLElementInterface.style
}

HTMLBdoElementInterface = {
	'Name':'HTMLBdoElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'BDO',
	'style':HTMLElementInterface.style
}

HTMLBlockQuoteElementInterface = {
	'Name':'HTMLQuoteElement',
	'Attributes':[
		['cite',[function() { return rint(2) ? retURL(2000):string(rint(STR_NUM))},''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'BLOCKQUOTE',
	'style':HTMLElementInterface.style
}

HTMLBrElementInterface = {
	'Name':'HTMLBrElement',
	'Attributes':[
		['width',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'BR',
	'style':HTMLElementInterface.style
}

HTMLButtonElementInterface = {
	'Name':'HTMLButtonElement',
	'Attributes':[
		['autofocus',[function() { return randbool()}],'high'],
		['disabled',[function() { return randbool()}],'high'],
		['form',[function() {return rint(2) ? "document.createElement('FORM')":"document.getElementsByTagName('FORM')[0]"},''],'readonly'],
		['accessKey',[function() {return rint(2) ? string(2):string(1)},'',function() {return string(rint(STR_NUM))}],''],
		['formAction',[function() {return retURL(2000)},''],'high'],
		['formEnctype',["application/x-www-form-urlencoded","multipart/form-data","text/plain",""],'high'],
		['formMethod',["get","post","put","delete",''],'high'],
		['formNoValidate',[function() { return randbool()},''],'high'],
		['formTarget',["_blank","_self","_parent","_top",""],'high'],
		['name',[function() {return rint(2) ? string(rint(STR_NUM)):''}],''],
		['tabIndex',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],''],
		['type',['submit','reset','button','menu',''],'high'],
		['value',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'high'],
		['willValidate',[function() { return randbool()},''],'readonly'],
		['validity',[function() {return '{'+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+',}'},'{}',''],'readonly'],
		['validationMessage',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'readonly'],
		['labels',[function() {return rint(2) ? "[document.createElement('LABEL')]":"document.getElementsByTagName('LABEL')"},''],'readonly']
	].concat(HTMLElementInterface.Attributes),
	'Methods':[
		//['checkValidity',[function() { return ''}]],
		['setCustomValidity',[function() {return '"'+string(rint(STR_NUM))+'"'}],'']//,''
	].concat(HTMLElementInterface.Methods),
	'tagName':'BUTTON',
	'style':HTMLElementInterface.style
}

HTMLCanvasElementInterface = {
	'Name':'HTMLCanvasElement',
	'Attributes':[
		['width',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['height',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':[
		['getContext',['"'+ra('2d','webgl','','none','direct-2d','direct-webgl','indirect','proxied')+'"',''],'high'],
		['toDataURL',[function() {return rint(2) ? '"'+ra(mimeTypes)+'"':'"'+ra(mimeTypes)+'","'+floatValue()+'"'},'"",""',''],'high'],
		['toBlob',[function() {return rint(2) ? 'function(){},"'+ra(mimeTypes)+'"':'"","'+ra(mimeTypes)+'","'+floatValue()+'"'},'function(){},"",""','function() {}','"","",""','',function() {var elem= ra(createdElements); var method = ra(elem.obj.Methods); return rint(2) ? 'function(){'+ra([elem.objName,'createdElements[\''+elem.objName+'\']'])+'.'+method[0]+'('+arrayWalk(method[1])+')},"'+ra(mimeTypes)+'"':'"","'+ra(mimeTypes)+'","'+floatValue()+'"'},function() {var elem= ra(createdElements); var method = ra(elem.obj.Methods); return 'function(){'+ra([elem.objName,'createdElements[\''+elem.objName+'\']'])+'.'+method[0]+'('+arrayWalk(method[1])+')},"",""'},function() {var elem= ra(createdElements); var method = ra(elem.obj.Methods); return 'function() {'+ra([elem.objName,'createdElements[\''+elem.objName+'\']'])+'.'+method[0]+'('+arrayWalk(method[1])+')}'}],'high']
	].concat(HTMLElementInterface.Methods),
	'tagName':'CANVAS',
	'style':HTMLElementInterface.style
}

HTMLTableCaptionElementInterface = {
	'Name':'HTMLTableCaptionElement',
	'Attributes':[
		['align',['top','bottom','left','right',''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'CAPTION',
	'style':HTMLElementInterface.style
}

HTMLCiteElementInterface = {
	'Name':'HTMLCiteElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'CITE',
	'style':HTMLElementInterface.style
}

HTMLCodeElementInterface = {
	'Name':'HTMLCodeElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'CODE',
	'style':HTMLElementInterface.style
}

HTMLTableColElementInterface = {
	'Name':'HTMLTableColElement',
	'Attributes':[
		['span',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'COL',
	'style':HTMLElementInterface.style
}

HTMLTableColGroupElementInterface = {
	'Name':'HTMLTableColGroupElement',
	'Attributes':[
		['span',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'COLGROUP',
	'style':HTMLElementInterface.style
}

HTMLDataElementInterface = {
	'Name':'HTMLDataElement',
	'Attributes':[
		['value',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'DATA',
	'style':HTMLElementInterface.style
}

HTMLDataListElementInterface = {
	'Name':'HTMLDataListElement',
	'Attributes':[
		['options',[function() {return rint(2) ? "document.createElement('OPTION')":"document.getElementsByTagName('OPTION')[0]"},''],'readonly'],
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'DATALIST',
	'style':HTMLElementInterface.style
}

HTMLDdElementInterface = {
	'Name':'HTMLDdElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'DD',
	'style':HTMLElementInterface.style
}

HTMLModElementInterface = {
	'Name':'HTMLModElement',
	'Attributes':[
		['cite',[function() { return rint(2) ? retURL(2000):string(rint(STR_NUM))},''],'high'],
		['dateTime',[dateTime,''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'DEL',
	'style':HTMLElementInterface.style
}

HTMLDfnElementInterface = {
	'Name':'HTMLDfnElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'DFN',
	'style':HTMLElementInterface.style
}

HTMLDivElementInterface = {
	'Name':'HTMLDivElement',
	'Attributes':[
		['align',['top','bottom','left','right',''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'DIV',
	'style':HTMLElementInterface.style
}

HTMLDListElementInterface = {
	'Name':'HTMLDListElement',
	'Attributes':[
		['compact',[function() { return randbool() },''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'DL',
	'style':HTMLElementInterface.style
}

HTMLDirElementInterface = {
	'Name':'HTMLDirElement',
	'Attributes':[
		['compact',[function() { return randbool() },''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'DIR',
	'style':HTMLElementInterface.style
}

HTMLMenuElementInterface = {
	'Name':'HTMLMenuElement',
	'Attributes':[
		['compact',[function() { return randbool() },''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'MENU',
	'style':HTMLElementInterface.style
}

HTMLDtElementInterface = {
	'Name':'HTMLDtElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'DT',
	'style':HTMLElementInterface.style
}

HTMLEmElementInterface = {
	'Name':'HTMLEmElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'EM',
	'style':HTMLElementInterface.style
}

HTMLEmbedElementInterface = {
	'Name':'HTMLEmbedElement',
	'Attributes':[
		['src',[function() {return rint(2) ? retURI(20000):''}],'high'],
		['type',[ra(mimeTypes),''],'high'],
		['width',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['height',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':[
		['any',[''],'']
	].concat(HTMLElementInterface.Methods),
	'tagName':'EMBED',
	'style':HTMLElementInterface.style
}

HTMLFieldSetElementInterface = {
	'Name':'HTMLFieldSetElement',
	'Attributes':[
		['disabled',[function() { return randbool()}],'high'],
		['type',['submit','reset','button','menu',''],'readonly'],
		['form',[function() {return rint(2) ? "document.createElement('FORM')":"document.getElementsByTagName('FORM')[0].id"},function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])},''],'readonly'],
		['name',[function() {return rint(2) ? string(rint(STR_NUM)):''}],''],
		['elements',['document.body.children',''],'readonly'],
		['willValidate',[function() { return randbool()},''],'readonly'],
		['validity',[function() {return '{'+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+',}'},'{}',''],'readonly'],
		['validationMessage',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'readonly']
	].concat(HTMLElementInterface.Attributes),
	'Methods':[
		//['checkValidity',[function() { return ''}]],
		['setCustomValidity',[function() {return '"'+string(rint(STR_NUM))+'"'}],'']//,''
	].concat(HTMLElementInterface.Methods),
	'tagName':'FIELDSET',
	'style':HTMLElementInterface.style
}

HTMLFigCaptionElementInterface = {
	'Name':'HTMLFigCaptionElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'figcaption',
	'style':HTMLElementInterface.style
}

HTMLFigureElementInterface = {
	'Name':'HTMLFigureElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'figure',
	'style':HTMLElementInterface.style
}

HTMLFooterElementInterface = {
	'Name':'HTMLFooterElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'footer',
	'style':HTMLElementInterface.style
}

HTMLHeadingElementInterface = {
	'Name':'HTMLHeadingElement',
	'Attributes':[
		['align',['top','bottom','left','right',''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'H1',
	'style':HTMLElementInterface.style
}

HTMLHeaderElementInterface = {
	'Name':'HTMLHeaderElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'HEADER',
	'style':HTMLElementInterface.style
}

HTMLHRElementInterface = {
	'Name':'HTMLHRElement',
	'Attributes':[
		['align',['top','bottom','left','right',''],'high'],
		['noShade',[function() { return randbool() },''],'high'],
		['width',[pxValue,percentValue,'',randoms],'high'],
		['size',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'HR',
	'style':HTMLElementInterface.style
}

HTMLIElementInterface = {
	'Name':'HTMLIElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'I',
	'style':HTMLElementInterface.style
}

HTMLIFrameElementInterface = {
	'Name':'HTMLIFrameElement',
	'Attributes':[
		['align',['top','bottom','left','right',''],'high'],
		['frameBorder',[randbool,'',randoms],'high'],
		['longDesc',[function() {return rint(2) ? string(rint(STR_NUM)):''},''],''],
		['marginHeight',[pxValue,'',randoms],'high'],
		['marginWidth',[pxValue,'',randoms],'high'],
		['scrolling',['auto','yes','no',''],'high'],
		['src',[function() {return rint(2) ? retURI(20000):''}],'high'],
		['srcdoc',[''],''],//,function() {return generate(1)},''],
		['name',[function() {return rint(2) ? string(rint(STR_NUM)):''}],''],
		['sandbox',[sndbox,''],'high'],
		['width',[pxValue,percentValue,'',randoms],'high'],
		['height',[pxValue,percentValue,'',randoms],'high'],
		['contentDocument',['document','document.open()',''],'readonly'],
		['contentWindow',['window','','window.open()'],'readonly']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'IFRAME',
	'style':HTMLElementInterface.style
}

HTMLImageElementInterface = {
	'Name':'HTMLImageElement',
	'Attributes':[
		['src',[function() {return retimageURI(2000)},'','X'],'high'],
		['name',[function() {return rint(2) ? string(rint(STR_NUM)):''}],''],
		['align',['top','bottom','left','right',''],'high'],
		['border',[pxValue,randoms,''],'high'],
		['hspace',[pxValue,randoms,''],'high'],
		['longDesc',[function() {return rint(2) ? string(rint(STR_NUM)):''},''],''],
		['alt',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'high'],
		['width',[distanceValue,'',randoms],'high'],
		['vspace',[pxValue,randoms,''],'high'],
		['crossOrigin',['anonymous','use-credentials',''],''],
		['useMap',[function() {var returnString = '';var hash='#';returnString+=hash+ra([ra(createdElements).objName,'createdElements[\''+ra(createdElements).objName+'\']']);return returnString},'#',''],'high'],
		['isMap',[randbool,''],'high'],
		['height',[distanceValue,'',randoms],'high'],
		['naturalWidth',[randoms,distanceValue,'','0'],'readonly'],
		['naturalHeight',[randoms,distanceValue,'','0'],'readonly'],
		['complete',[function() {return randbool()}],'readonly']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'IMG',
	'style':HTMLElementInterface.style
}

HTMLInputElementInterface = {
	'Name':'HTMLInputElement',
	'Attributes':[
		['accessKey',[function() {return rint(2) ? string(2):string(1)},'',function() {return string(rint(STR_NUM))}],''],
		['accept',[acc,''],'high'],
		['alt',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'high'],
		['align',['top','bottom','left','right',''],'high'],
		['autocomplete',['on','off',''],'high'],
		['autofocus',[function() { return randbool()},''],'high'],
		['defaultChecked',[function() { return randbool()},''],'high'],
		['checked',[function() { return randbool()}],'high'],
		['dirName',[function() {return string(rint(STR_NUM))},'',' '],''],
		['disabled',[function() { return randbool()},''],'high'],
		['form',[function() {return rint(2) ? "document.createElement('FORM')":"document.getElementsByTagName('FORM')[0].id"},function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])},''],'readonly'],
		['files',['','new FileList()'],'readonly'],
		['formAction',[function() {return retURL(2000)},''],'high'],
		['formEnctype',["application/x-www-form-urlencoded","multipart/form-data","text/plain",""],'high'],
		['formMethod',["get","post","put","delete",''],'high'],
		['formNoValidate',[function() {return randbool()}],'high'],
		['formTarget',["_blank","_self","_parent","_top",""],'high'],
		['height',[randoms,distanceValue,'','0'],'high'],
		['indeterminate',[function() {return randbool()}],'high'],
		['list',[function() {return "document.getElementByID('"+ra([ra(createdElements).objName])+"')"},''],'readonly'],
		['max',[dateTime,function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['maxLength',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},'',distanceValue],'high'],
		['min',[dateTime,function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['minLength',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},'',distanceValue],'high'],
		['multiple',[function() {return randbool()}],'high'],
		['name',[function() {return string(rint(STR_NUM))},function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])},''],''],
		['pattern',[''],''],
		['placeholder',[function() {return string(rint(STR_NUM))},''],'high'],
		['readOnly',[function() {return randbool()}],'high'],
		['required',[function() {return randbool()}],'high'],
		['size',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['src',[function() {return retimageURI(2000)},''],'high'],
		['tabIndex',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],''],
		['useMap',[function() {var returnString = '';var hash='#';returnString+=hash+returnRandomElement();return returnString},'#',''],'high'],
		['step',['any',floatValue,randoms,function() {return rint(ra(INT_NUMS))},''],'high'],
		['type',["button","checkbox","color","date","datetime","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week",""],'high'],
		//['x-webkit-speech',['',randbool,'x-webkit-speech'],'high'],
		['defaultValue',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'high'],
		['value',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'high'],
		['valueAsDate',[dateTime,''],'high'],
		['valueAsNumber',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['width',[randoms,distanceValue,'','0'],'high'],
		['willValidate',[function() {return randbool()},''],'readonly'],
		['validity',[function() {return '{'+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+',}'},'{}',''],'readonly'],
		['validationMessage',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'readonly'],
		['labels',[function() {return rint(2) ? "[document.createElement('LABEL')]":"document.getElementsByTagName('LABEL')"},''],'readonly'],
		['selectionStart',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['selectionEnd',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['selectionDirection',['forward','backward','none',''],'high'],
		['SelectionMode',['select','start','end','preserve',''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':[
		['stepUp',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['stepDown',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		//['checkValidity',[function() {return randbool()},'']],
		['setCustomValidity',[function() {return '"'+string(rint(STR_NUM))+'"'},'']],//,''
		['select',[function() {return ''}],'high'],
		['setRangeText',[function() {return rint(2) ? '"'+string(rint(STR_NUM))+'"':'""'},function() {return rint(2) ? '"'+string(rint(STR_NUM))+'",'+rint(ra(INT_NUMS))+","+rint(ra(INT_NUMS)):'"'+string(rint(STR_NUM))+'",'+randoms()+","+randoms()},function() {return rint(2) ? '"'+string(rint(STR_NUM))+'",'+rint(ra(INT_NUMS))+","+rint(ra(INT_NUMS))+","+ra(['"select"','"start"','"end"','"preserve"','""']):'"'+string(rint(STR_NUM))+'",'+randoms()+","+randoms()+",",ra(['"select"','"start"','"end"','"preserve"','""'])},''],'high'],
		['setSelectionRange',[function() {return rint(2) ? rint(ra(INT_NUMS))+","+rint(ra(INT_NUMS)):randoms()+","+randoms()},function() {return rint(2) ? rint(ra(INT_NUMS))+","+rint(ra(INT_NUMS))+","+ra(['"forward"','"backward"','"none"','""']):randoms()+","+randoms()+","+ra(['"forward"','"backward"','"none"','""'])}],'high']
	].concat(HTMLElementInterface.Methods),
	'tagName':'INPUT',
	'style':HTMLElementInterface.style
}

HTMLInsElementInterface = {
	'Name':'HTMLInsElement',
	'Attributes':[
		['cite',[function() { return rint(2) ? retURL(2000):string(rint(STR_NUM))},''],'high'],
		['dateTime',[dateTime,''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'INS',
	'style':HTMLElementInterface.style
}

HTMLKbdElementInterface = {
	'Name':'HTMLKbdElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'KBD',
	'style':HTMLElementInterface.style
}

HTMLKeygenElementInterface = {
	'Name':'HTMLKeygenElement',
	'Attributes':[
		['autofocus',[function() { return randbool()}],'high'],
		['challenge',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'high'],
		['disabled',[function() { return randbool()},''],'high'],
		['form',[function() {return rint(2) ? "document.createElement('FORM')":"document.getElementsByTagName('FORM')[0].id"},function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])},''],'readonly'],
		['keytype',['rsa','dsa','ec',''],'high'],
		['name',[function() {return rint(2) ? string(rint(STR_NUM)):''}],''],
		['type',['keygen',''],'readonly'],
		['willValidate',[function() { return randbool()}],'readonly'],
		['validity',[function() {return '{'+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+',}'},'{}',''],'readonly'],
		['validationMessage',[function() {return string(rint(STR_NUM))},''],'readonly'],
		['labels',[function() {return rint(2) ? "[document.createElement('LABEL')]":"document.getElementsByTagName('LABEL')"},''],'readonly']
	].concat(HTMLElementInterface.Attributes),
	'Methods':[
		//['checkValidity',[function() { return ''}]],
		['setCustomValidity',[function() {return '"'+string(rint(STR_NUM))+'"'},''],'']//'""'
	].concat(HTMLElementInterface.Methods),
	'tagName':'KEYGEN',
	'style':HTMLElementInterface.style
}

HTMLLabelElementInterface = {
	'Name':'HTMLLabelElement',
	'Attributes':[
		['form',[function() {return rint(2) ? "document.createElement('FORM')":"document.getElementsByTagName('FORM')[0].id"},function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])},''],'readonly'],
		['accessKey',[function() {return rint(2) ? string(2):string(1)},'',function() {return string(rint(STR_NUM))}],''],
		['htmlFor',[function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])},''],'high'],
		['for',[function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])},''],'high'],
		['control',[function() {return rint(2) ? string(rint(STR_NUM)):ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])},''],'readonly']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'LABEL',
	'style':HTMLElementInterface.style
}

HTMLLegendElementInterface = {
	'Name':'HTMLLegendElement',
	'Attributes':[
		['form',[function() {return rint(2) ? "document.createElement('FORM')":"document.getElementsByTagName('FORM')[0].id"},function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])},''],'readonly'],
		['accessKey',[function() {return rint(2) ? string(2):string(1)},'',function() {return string(rint(STR_NUM))},''],''],
		['align',['top','bottom','left','right',''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'LEGEND',
	'style':HTMLElementInterface.style
}

HTMLLIElementInterface = {
	'Name':'HTMLLIElement',
	'Attributes':[
		['value',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['type',['1','1','a','A','i','I',''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'LI',
	'style':HTMLElementInterface.style
}

HTMLMainElementInterface = {
	'Name':'HTMLMainElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'MAIN',
	'style':HTMLElementInterface.style
}

HTMLMapElementInterface = {
	'Name':'HTMLMapElement',
	'Attributes':[
		['name',[function() {return rint(2) ? string(rint(STR_NUM)):''}],''],
		['areas',["document.getElementsByTagName('AREA')","document.createElement('Area')",''],'readonly'],
		['images',["document.getElementsByTagName('IMG')","document.createElement('IMG')","document.getElementsByTagName('OBJECT')","document.createElement('OBJECT')",''],'readonly']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'MAP',
	'style':HTMLElementInterface.style
}

HTMLMeterElementInterface = {
	'Name':'HTMLMeterElement',
	'Attributes':[
		['value',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['min',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['max',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['low',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['high',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['optimum',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['labels',[function() {return rint(2) ? "[document.createElement('LABEL')]":"document.getElementsByTagName('LABEL')"},''],'readonly']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'METER',
	'style':HTMLElementInterface.style
}

HTMLNavElementInterface = {
	'Name':'HTMLNavElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'NAV',
	'style':HTMLElementInterface.style
}

HTMLNoScriptElementInterface = {
	'Name':'HTMLNoScriptElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'NOSCRIPT',
	'style':HTMLElementInterface.style
}

HTMLObjectElementInterface = {
	'Name':'HTMLObjectElement',
	'Attributes':[
		['data',[function() {return retmediaURI(2000)},''],'high'],
		['align',['top','bottom','left','right',''],'high'],
		['code',[function() {return rint(2) ? string(rint(STR_NUM)):retURI(2000)},''],'high'],
		['border',[pxValue,randoms,''],'high'],
		['archive',[function() {return rint(2) ? retURI(2000):''},''],''],
		['codeBase',[function() {return rint(2) ? retURI(2000):string(rint(STR_NUM))},''],''],
		['codeType',[ra(mimeTypes),''],'high'],
		['classid',[''],''],
		['hspace',[pxValue,randoms,''],'high'],
		['vspace',[pxValue,randoms,''],'high'],
		['standBy',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'high'],
		['tabIndex',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],''],
		['declare',[function() { return randbool() },''],'high'],
		['type',[ra(mimeTypes),''],'high'],
		['typeMustMatch',[function() { return randbool()},''],'high'],
		['name',[function() {return rint(2) ? string(rint(STR_NUM)):''}],''],
		['useMap',[function() {var returnString = '';var hash='#';returnString+=hash+returnRandomElement();return returnString},'#',''],'high'],
		['form',[function() {return rint(2) ? "document.createElement('FORM')":"document.getElementsByTagName('FORM')[0].id"},function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])},''],'readonly'],
		['width',[randoms,distanceValue,'','0',function() {return rint(ra(INT_NUMS))}],'high'],
		['height',[randoms,distanceValue,'','0',function() {return rint(ra(INT_NUMS))}],'high'],
		['contentDocument',['document','document.open()',''],'readonly'],
		['contentWindow',['window','window.open()',''],'readonly'],
		['willValidate',[function() { return randbool()},''],'readonly'],
		['validity',[function() {return '{'+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+',}'},'{}',''],'readonly'],
		['validationMessage',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'readonly'],
		['labels',[function() {return rint(2) ? "[document.createElement('LABEL')]":"document.getElementsByTagName('LABEL')"},''],'readonly']
	].concat(HTMLElementInterface.Attributes),
	'Methods':[
		//['checkValidity',[function() { return ''}]],
		['setCustomValidity',[function() {return '"'+string(rint(STR_NUM))+'"'}],''],//,''
		['any',[''],'']
	].concat(HTMLElementInterface.Methods),
	'tagName':'OBJECT',
	'style':HTMLElementInterface.style
}

HTMLOListElementInterface = {
	'Name':'HTMLOListElement',
	'Attributes':[
		['reversed',[function() { return randbool()},''],'high'],
		['start',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['compact',[function() { return randbool() },''],'high'],
		['type',['1','a','A','i','1','I',''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'OLIST',
	'style':HTMLElementInterface.style
}

HTMLOptGroupElementInterface = {
	'Name':'HTMLOptGroupElement',
	'Attributes':[
		['disabled',[function() { return randbool()},''],'high'],
		['label',[function() {return string(rint(STR_NUM))},''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'OPTGROUP',
	'style':HTMLElementInterface.style
}

HTMLOptionElementInterface = {
	'Name':'HTMLOptionElement',
	'Attributes':[
		['disabled',[function() { return randbool()}],'high'],
		['form',[function() {return rint(2) ? "document.createElement('FORM')":"document.getElementsByTagName('FORM')[0].id"},function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])},''],'readonly'],
		['label',[function() {return string(rint(STR_NUM))},''],'high'],
		['defaultSelected',[function() { return randbool()},''],'high'],
		['selected',[function() { return randbool()},''],'high'],
		['value',[function() {return string(rint(STR_NUM))},''],'high'],
		['text',[function() {return string(rint(STR_NUM))},''],'high'],
		['index',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'readonly']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'OPTION',
	'style':HTMLElementInterface.style
}

HTMLOutputElementInterface = {
	'Name':'HTMLOutputElement',
	'Attributes':[
		['form',[function() {return rint(2) ? "document.createElement('FORM')":"document.getElementsByTagName('FORM')[0].id"},function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])},''],'readonly'],
		['name',[function() {return string(rint(STR_NUM))},''],''],
		['type',['output',''],'readonly'],
		['defaultValue',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'high'],
		['value',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'high'],
		['willValidate',[function() { return randbool()},''],'readonly'],
		['validity',[function() {return '{'+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+',}'},'{}',''],'readonly'],
		['validationMessage',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'readonly'],
		['labels',[function() {return rint(2) ? "[document.createElement('LABEL')]":"document.getElementsByTagName('LABEL')"},''],'']
	].concat(HTMLElementInterface.Attributes),
	'Methods':[
		//['checkValidity',[function() { return ''}]],
		['setCustomValidity',[function() {return '"'+string(rint(STR_NUM))+'"'},''],'']//,''
	].concat(HTMLElementInterface.Methods),
	'tagName':'OUTPUT',
	'style':HTMLElementInterface.style
}

HTMLParagraphElementInterface = {
	'Name':'HTMLParagraphElement',
	'Attributes':[
		['align',['top','bottom','left','right',''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'P',
	'style':HTMLElementInterface.style
}

HTMLParamElementInterface = {
	'Name':'HTMLParamElement',
	'Attributes':[
		['name',[function() {return string(rint(STR_NUM))},''],''],
		['type',[function() {return ra(mimeTypes)},''],'high'],
		['valueType',['data','ref','object',''],'high'],
		['value',[function() {return string(rint(STR_NUM))},''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'PARAM',
	'style':HTMLElementInterface.style
}

HTMLAppletElementInterface = {
	'Name':'HTMLAppletElement',
	'Attributes':[
		['align',['top','bottom','left','right',''],'high'],
		['alt',[function() {return string(rint(STR_NUM))},''],'high'],
		['archive',[function() {return rint(2) ? retURI(2000):''},''],''],
		['code',[function() {return ra(mimeTypes)},''],'high'],
		['codeBase',[function() {return rint(2) ? retURI(2000):string(rint(STR_NUM))},''],'high'],
		['height',[randoms,distanceValue,'','0',function() {return rint(ra(INT_NUMS))}],'high'],
		['hspace',[pxValue,randoms,''],'high'],
		['name',[function() {return rint(2) ? retURI(2000):string(rint(STR_NUM))},''],''],
		['object',[function() {return string(rint(STR_NUM))},''],'high'],
		['vspace',[pxValue,randoms,''],'high'],
		['width',[randoms,distanceValue,'','0',function() {return rint(ra(INT_NUMS))}],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'APPLET',
	'style':HTMLElementInterface.style
}

HTMLPreElementInterface = {
	'Name':'HTMLPreElement',
	'Attributes':[
		['width',[randoms,distanceValue,'','0',function() {return rint(ra(INT_NUMS))}],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'PRE',
	'style':HTMLElementInterface.style
}

HTMLProgressElementInterface = {
	'Name':'HTMLProgressElement',
	'Attributes':[
		['value',[floatValue,randoms,function() {return rint(ra(INT_NUMS))},''],'high'],
		['max',[floatValue,randoms,function() {return rint(ra(INT_NUMS))},''],'high'],
		['position',[floatValue,randoms,function() {return rint(ra(INT_NUMS))},''],'readonly'],
		['labels',[function() {return rint(2) ? "[document.createElement('LABEL')]":"document.getElementsByTagName('LABEL')"},''],'readonly']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'PROGRESS',
	'style':HTMLElementInterface.style
}

HTMLQuoteElementInterface = {
	'Name':'HTMLQuoteElement',
	'Attributes':[
		['cite',[function() { return rint(2) ? retURL(2000):string(rint(STR_NUM))},''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'Q',
	'style':HTMLElementInterface.style
}

HTMLRbElementInterface = {
	'Name':'HTMLRbElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'RB',
	'style':HTMLElementInterface.style
}

HTMLRpElementInterface = {
	'Name':'HTMLRpElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'RP',
	'style':HTMLElementInterface.style
}

HTMLRtElementInterface = {
	'Name':'HTMLRtElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'RT',
	'style':HTMLElementInterface.style
}

HTMLRtcElementInterface = {
	'Name':'HTMLRtcElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'RTC',
	'style':HTMLElementInterface.style
}

HTMLRubyElementInterface = {
	'Name':'HTMLRubyElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'RUBY',
	'style':HTMLElementInterface.style
}

HTMLSElementInterface = {
	'Name':'HTMLSElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'S',
	'style':HTMLElementInterface.style
}

HTMLSampElementInterface = {
	'Name':'HTMLSampElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'SAMP',
	'style':HTMLElementInterface.style
}

HTMLScriptElementInterface = {
	'Name':'HTMLScriptElement',
	'Attributes':[
		['src',[function() {return rint(2) ? retURL(2000):retURI(2000)},''],'high'],
		['type',[function() {return ra(mimeTypes)},''],'high'],
		['charset',['ASCII','Windows-1252','ISO-8859-1','UTF-8',''],'high'],
		['async',[function() { return randbool()},''],'high'],
		['defer',[function() { return randbool()},''],'high'],
		['crossOrigin',['anonymous','use-credentials',''],'high'],
		['text',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'high'],
		['htmlFor',[function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])},''],'high'],
		['event',['',function() {return string(rint(STR_NUM))}],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'SCRIPT',
	'style':HTMLElementInterface.style
}

HTMLSectionElementInterface = {
	'Name':'HTMLSectionElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'SECTION',
	'style':HTMLElementInterface.style
}

HTMLSmallElementInterface = {
	'Name':'HTMLSmallElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'SMALL',
	'style':HTMLElementInterface.style
}

HTMLSourceElementInterface = {
	'Name':'HTMLSourceElement',
	'Attributes':[
		['src',[function() {return retmediaURI(2000)},''],'high'],
		['type',[function() {return ra(mimeTypes)},''],'high'],
		['media',[mediaValue,''],'high'],
		['codecs',[function() {return string(rint(STR_NUM))},'high']]
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'SOURCE',
	'style':HTMLElementInterface.style
}

HTMLSpanElementInterface = {
	'Name':'HTMLSpanElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'SPAN',
	'style':HTMLElementInterface.style
}

HTMLStrongElementInterface = {
	'Name':'HTMLStrongElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'STRONG',
	'style':HTMLElementInterface.style
}

HTMLSubElementInterface = {
	'Name':'HTMLSubElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'SUB',
	'style':HTMLElementInterface.style
}

HTMLSupElementInterface = {
	'Name':'HTMLSupElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'SUP',
	'style':HTMLElementInterface.style
}

HTMLTableElementInterface = {
	'Name':'HTMLTableElement',
	'Attributes':[
		['caption',[function() {return rint(2) ? "document.createElement('CAPTION')":"document.getElementsByTagName('CAPTION')[0]"},function() {return "document.getElementsByTagName('TABLE')[0].createCaption()"},''],'high'],
		['tHead',[function() {return rint(2) ? "document.createElement('TH')":"document.getElementsByTagName('TH')[0]"},function() {return "document.getElementsByTagName('TABLE')[0].createTHead()"},''],'high'],
		['tFoot',[function() {return rint(2) ? "document.createElement('TFOOT')":"document.getElementsByTagName('TFOOT')[0]"},function() {return "document.getElementsByTagName('TABLE')[0].createTFoot()"},''],'high'],		
		['tBodies',[function() {return rint(2) ? "document.createElement('TBODY')":"document.getElementsByTagName('TBODY')"},function() {return "document.getElementsByTagName('TABLE')[0].createTBody()"},''],'readonly'],
		['rows',[function() {return rint(2) ? "document.createElement('TR')":"document.getElementsByTagName('TR')"},function() {return "document.getElementsByTagName('TABLE')[0].insertRow("+rint(ra(INT_NUMS))+")"},''],'readonly'],
		['align',['top','bottom','left','right','','center','justify','char'],'high'],
		['bgColor',[getRandomColor,''],'high'],
		['border',[pxValue,randoms,'',function() {return rint(ra(INT_NUMS))}],'high'],
		['cellPadding',[pxValue,percentValue,'',randoms,function() {return rint(ra(INT_NUMS))},distanceValue],'high'],
		['cellSpacing',[pxValue,percentValue,'',randoms,function() {return rint(ra(INT_NUMS))},distanceValue],'high'],
		['frame',["void","above","below","hsides","lhs","rhs","vsides","box","border",""],'high'],
		['rules',['none','groups','rows','cols','all'],'high'],
		['summary',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'high'],
		['width',[pxValue,percentValue,'',randoms,function() {return rint(ra(INT_NUMS))},distanceValue],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':[
		['createCaption',[function() { return ''}],'high'],
		['deleteCaption',[function() { return ''}],'high'],
		['createTHead',[function() { return ''}],'high'],
		['deleteTHead',[function() { return ''}],'high'],
		['createTFoot',[function() { return ''}],'high'],
		['deleteTFoot',[function() { return ''}],'high'],
		['createTBody',[function() { return ''}],'high'],
		['insertRow',[function() {return rint(ra(INT_NUMS))},'""',randoms],'high'],
		['deleteRow',[function() {return rint(ra(INT_NUMS))},'""',randoms],'high']
	].concat(HTMLElementInterface.Methods),
	'tagName':'TABLE',
	'style':HTMLElementInterface.style
}

HTMLTableSectionElementInterface = {
	'Name':'HTMLTableSectionElement',
	'Attributes':[
		['align',['top','bottom','left','right','','center','justify','char'],'high'],
		['ch',[function() {return rint(2) ? string(2):string(1)},'',function() {return string(rint(STR_NUM))},''],'high'],
		['chOff',[pxValue,percentValue,'',randoms,function() {return rint(ra(INT_NUMS))},distanceValue],'high'],
		['vAlign',[pxValue,percentValue,'',randoms,function() {return rint(ra(INT_NUMS))},distanceValue,'top','middle','bottom','baseline'],'high'],
		['rows',[function() {return rint(2) ? "document.createElement('TR')":"document.getElementsByTagName('TR')"},function() {return "document.getElementsByTagName('TABLE')[0].insertRow("+rint(ra(INT_NUMS))+")"},''],'readonly']
	].concat(HTMLElementInterface.Attributes),
	'Methods':[
		['insertRow',[function() {return rint(ra(INT_NUMS))},'""','',randoms],'high'],
		['deleteRow',[function() {return rint(ra(INT_NUMS))},'""',randoms],'high']
	].concat(HTMLElementInterface.Methods),
	'tagName':'TBODY',
	'style':HTMLElementInterface.style
}

HTMLTableCellElementInterface = {
	'Name':'HTMLTableCellElement',
	'Attributes':[
		['colSpan',[function() {return rint(ra(INT_NUMS))},''],'high'],
		['abbr',[function() {return rint(2) ? string(rint(STR_NUM)):''}],''],
		['align',['top','bottom','left','right','','center','justify','char'],'high'],
		['axis',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'high'],
		['bgColor',[getRandomColor,''],'high'],
		['ch',[function() {return rint(2) ? string(2):string(1)},'',function() {return string(rint(STR_NUM))},''],'high'],
		['chOff',[pxValue,percentValue,'',randoms,function() {return rint(ra(INT_NUMS))},'',distanceValue],'high'],
		['height',[pxValue,percentValue,'',randoms,function() {return rint(ra(INT_NUMS))},distanceValue],'high'],
		['noWrap',[function() { return randbool()}],'high'],
		['rowSpan',[function() {return rint(ra(INT_NUMS))},''],'high'],
		['scope',['row','col','rowgroup','colgroup',''],'high'],
		['vAlign',[pxValue,percentValue,'',randoms,function() {return rint(ra(INT_NUMS))},distanceValue,'top','middle','bottom','baseline'],'high'],
		['width',[pxValue,percentValue,'',randoms,function() {return rint(ra(INT_NUMS))},distanceValue],'high'],
		['headers',[function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])},''],'readonly'],
		['cellIndex',[function() {return rint(ra(INT_NUMS))},''],'readonly']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'CELL',
	'style':HTMLElementInterface.style
}

HTMLTableHeaderCellElementInterface1 = {
	'Name':'HTMLTableHeaderCellElement',
	'Attributes':[
		['scope',['row','col','rowgroup','colgroup',''],'high'],
		['abbr',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'']
	].concat(HTMLTableCellElementInterface.Attributes),
	'Methods':HTMLTableCellElementInterface.Methods,
	'tagName':'TH',
	'style':HTMLTableCellElementInterface.style
}

HTMLTableDataCellElementInterface = {
	'Name':'HTMLTableDataCellElement',
	'Attributes':HTMLTableCellElementInterface.Attributes,
	'Methods':HTMLTableCellElementInterface.Methods,
	'tagName':'TD',
	'style':HTMLTableCellElementInterface.style
}

HTMLFrameSetElementInterface = {
	'Name':'HTMLFrameSetElement',
	'Attributes':[
		['cols',[function() {return retMultipleLength(200)},'',function() {return rint(ra(INT_NUMS))}],'high'],
		['rows',[function() {return retMultipleLength(200)},'',function() {return rint(ra(INT_NUMS))}],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'FRAMESET',
	'style':HTMLElementInterface.style
}

HTMLFrameElementInterface = {
	'Name':'HTMLFrameElement',
	'Attributes':[
		['frameBorder',[function() {return randbool()},''],'high'],
		['longDesc',[function() {return retURI(2000)},''],''],
		['marginHeight',[pxValue,'',randoms,function() {return rint(ra(INT_NUMS))}],'high'],
		['marginWidth',[pxValue,'',randoms,function() {return rint(ra(INT_NUMS))}],'high'],
		['name',[function() {return rint(2) ? string(rint(STR_NUM)):''}],''],
		['noResize',[function() { return randbool() },''],'high'],
		['scrolling',['auto','yes','no',''],'high'],
		['src',[function() {return retURI(2000)},''],'high'],
		['contentDocument',['document','document.open()',''],'readonly']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'FRAME',
	'style':HTMLElementInterface.style
}


HTMLTemplateElementInterface = {
	'Name':'HTMLTemplateElement',
	'Attributes':[
		['content',['document.createDocumentFragment()',''],'readonly']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'TEMPLATE',
	'style':HTMLElementInterface.style
}

HTMLTextAreaElementInterface = {
	'Name':'HTMLTextAreaElement',
	'Attributes':[
		['autocomplete',['on','off',''],'high'],
		['accessKey',[function() {return rint(2) ? string(2):string(1)},'',function() {return string(rint(STR_NUM))},''],''],
		['tabIndex',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],''],
		['autofocus',[function() { return randbool()},''],'high'],
		['cols',[function() {return retMultipleLength(200)},'',function() {return rint(ra(INT_NUMS))}],'high'],
		['dirName',[function() {return string(rint(STR_NUM))},'',' '],''],
		['disabled',[function() { return randbool()},''],'high'],
		['form',[function() {return rint(2) ? "document.createElement('FORM')":"document.getElementsByTagName('FORM')[0].id"},function() {return ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])},''],'readonly'],
		['minLength',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},'',distanceValue],'high'],
		['name',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'high'],
		['placeholder',[function() {return string(rint(STR_NUM))},''],'high'],
		['readOnly',[function() {return randbool()},''],'high'],
		['required',[function() {return randbool()},''],'high'],
		['rows',[function() {return retMultipleLength(200)},'',function() {return rint(ra(INT_NUMS))}],'high'],
		['wrap',['hard','soft',''],'high'],
		['type',['textarea',''],'readonly'],
		['defaultValue',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'high'],
		['value',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'high'],
		['textLength',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'readonly'],
		['willValidate',[function() {return randbool()},''],'readonly'],
		['validity',[function() {return '{'+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+','+randbool()+',}'},'{}',''],'readonly'],
		['validationMessage',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'readonly'],
		['labels',[function() {return rint(2) ? "[document.createElement('LABEL')]":"document.getElementsByTagName('LABEL')"},''],'readonly'],
		['selectionStart',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['selectionEnd',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],'high'],
		['selectionDirection',['forward','backward','none',''],'high'],
		['SelectionMode',['select','start','end','preserve',''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':[
		//['checkValidity',[function() {return randbool()},'']],
		['setCustomValidity',[function() {return '"'+string(rint(STR_NUM))+'"'},''],''],//,''
		['select',[function() {return ''}],'high'],
		['setRangeText',[function() {return rint(2) ? '"'+string(rint(STR_NUM))+'"':'""'},function() {return rint(2) ? '"'+string(rint(STR_NUM))+'",'+rint(ra(INT_NUMS))+","+rint(ra(INT_NUMS)):'"'+string(rint(STR_NUM))+'",'+randoms()+","+randoms()},function() {return rint(2) ? '"'+string(rint(STR_NUM))+'",'+rint(ra(INT_NUMS))+","+rint(ra(INT_NUMS))+","+ra(['"select"','"start"','"end"','"preserve"','""']):'"'+string(rint(STR_NUM))+'",'+randoms()+","+randoms()+",",ra(['"select"','"start"','"end"','"preserve"','""'])}],'high'],//,''
		['setSelectionRange',[function() {return rint(2) ? rint(ra(INT_NUMS))+","+rint(ra(INT_NUMS)):randoms()+","+randoms()},function() {return rint(2) ? rint(ra(INT_NUMS))+","+rint(ra(INT_NUMS))+","+ra(['"forward"','"backward"','"none"','""']):randoms()+","+randoms()+","+ra(['"forward"','"backward"','"none"','""'])}],'high']
	].concat(HTMLElementInterface.Methods),
	'tagName':'TEXTAREA',
	'style':HTMLElementInterface.style
}

HTMLTableSectionTFootElementInterface = {
	'Name':'HTMLTableSectionTFootElement',
	'Attributes':[
		['rows',[function() {return retMultipleLength(200)},''],'readonly']
	].concat(HTMLTableSectionElementInterface.Attributes),
	'Methods':[
		['insertRow',[function() {return rint(ra(INT_NUMS))},'""','',randoms],'high'],
		['deleteRow',[function() {return rint(ra(INT_NUMS))},'""',randoms],'high']
	].concat(HTMLTableSectionElementInterface.Methods),
	'tagName':'TFOOT',
	'style':HTMLTableSectionElementInterface.style
}

HTMLTableHeaderCellElementInterface ={
	'Name':'HTMLTableHeaderCellElemen',
	'Attributes':[
		['rows',[function() {return retMultipleLength(200)},''],'readonly']
	].concat(HTMLTableSectionElementInterface.Attributes),
	'Methods':[
		['insertRow',[function() {return rint(ra(INT_NUMS))},'""','',randoms],'high'],
		['deleteRow',[function() {return rint(ra(INT_NUMS))},'""',randoms],'high']
	].concat(HTMLTableSectionElementInterface.Methods),
	'tagName':'THEAD',
	'style':HTMLTableSectionElementInterface.style
}

HTMLTimeElementInterface = {
	'Name':'HTMLTimeElement',
	'Attributes':[
		['dateTime',[dateTime,''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'TIME',
	'style':HTMLElementInterface.style
}

HTMLTableRowElementElementInterface = {
	'Name':'HTMLTableRowElement',
	'Attributes':[
		['rowIndex',[''],'readonly'],
		['sectionRowIndex',[''],'readonly'],
		['cells',[''],'readonly'],
		['align',['top','bottom','left','right','','center','justify','char'],'high'],
		['bgColor',[getRandomColor,''],'high'],
		['ch',[function() {return rint(2) ? string(2):string(1)},'',function() {return string(rint(STR_NUM))},''],'high'],
		['chOff',[pxValue,percentValue,'',randoms,function() {return rint(ra(INT_NUMS))},'',distanceValue],'high'],
		['vAlign',[pxValue,percentValue,'',randoms,function() {return rint(ra(INT_NUMS))},distanceValue,'top','middle','bottom','baseline'],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':[
		['insertCell',[function() {return rint(ra(INT_NUMS))},'""','',randoms],'high'],
		['deleteCell',[function() {return rint(ra(INT_NUMS))},'""',randoms],'high']
	].concat(HTMLElementInterface.Methods),
	'tagName':'TR',
	'style':HTMLElementInterface.style
}

HTMLTrackElementInterface = {
	'Name':'HTMLTrackElement',
	'Attributes':[
		['kind',['subtitles','captions','descriptions','chapters','metadata',''],'high'],
		['src',[function() {return retURL(2000)},''],'high'],
		['srclang',[function() {return rint(2) ? ra(["ab","aa","af","sq","am","ar","an","hy","as","ay","az","ba","eu","bn","dz","bh","bi","br","bg","my","be","km","ca","zh","zh-Hans","zh-Hant","co","hr","cs","da","nl","en","eo","et","fo","fa","fj","fi","fr","fy","gl","gd","gv","ka","de","el","kl","gn","gu","ht","ha","he"," iw","hi","hu","is","io","id","in","ia","ie","iu","ik","ga","it","ja","jv","kn","ks","kk","rw","ky","rn","ko","ku","lo","la","lv","li","ln","lt","mk","mg","ms","ml","mt","mi","mr","mo","mn","na","ne","no","oc","or","om","ps","pl","pt","pa","qu","rm","ro","ru","sm","sg","sa","sr","sh","st","tn","sn","ii","sd","si","ss","sk","sl","so","es","su","sw","sv","tl","tg","ta","tt","te","th","bo","ti","to","ts","tr","tk","tw","ug","uk","ur","uz","vi","vo","wa","cy","wo","xh","yi","ji","yo","zu",""]):string(rint(STR_NUM))},''],'high'],
		['label',[function() {return rint(2) ? string(rint(STR_NUM)):''}],'high'],
		['default',[function() { return randbool() },''],'high'],
		['NONE',['0','0',function() { return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],''],
		['LOADING',['1','1',function() { return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],''],
		['LOADED',['2','2',function() { return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],''],
		['ERROR',['3','3',function() { return rint(2) ? rint(ra(INT_NUMS)):randoms()},''],''],
		['readyState',['0','1','2','3','0','1','2','3','',function() { return rint(2) ? rint(ra(INT_NUMS)):randoms()}],'readonly'],
		['track',[''],'readonly']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'TRACK',
	'style':HTMLElementInterface.style
}

HTMLUElementInterface = {
	'Name':'HTMLUElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'U',
	'style':HTMLElementInterface.style
}

HTMLUListElementInterface = {
	'Name':'HTMLUListElement',
	'Attributes':[
		['compact',[function() { return randbool() }],'high'],
		['type',['1','1','A','a','i','I',''],'high']
	].concat(HTMLElementInterface.Attributes),
	'Methods':HTMLElementInterface.Methods,
	'tagName':'ULIST',
	'style':HTMLElementInterface.style
}

HTMLVarElementInterface = {
	'Name':'HTMLVarElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'VAR',
	'style':HTMLElementInterface.style
}

HTMLVideoElementInterface = {
	'Name':'HTMLVideoElement',
	'Attributes':[
		['width',[pxValue,'',randoms,function() {return rint(ra(INT_NUMS))}],'high'],
		['height',[pxValue,'',randoms,function() {return rint(ra(INT_NUMS))}],'high'],
		['videoWidth',[pxValue,'',randoms,function() {return rint(ra(INT_NUMS))}],'readonly'],
		['videoHeight',[pxValue,'',randoms,function() {return rint(ra(INT_NUMS))}],'readonly'],
		['poster',[function() {return rint(2) ? retimageURI(2000):''}],'']
	].concat(HTMLMediaElementInterface.Attributes),
	'Methods':HTMLMediaElementInterface.Methods,
	'tagName':'VIDEO',
	'style':HTMLMediaElementInterface.style
}

HTMLWbrElementInterface = {
	'Name':'HTMLWbrElement',
	'Attributes':HTMLElementInterface.Attributes,
	'Methods':HTMLElementInterface.Methods,
	'tagName':'WBR',
	'style':HTMLElementInterface.style
}
var ElementArray = [
	// [HTMLDocumentInterface,''],
	[HTMLHtmlElementInterface,''],
	[HTMLHeadElementInterface,''],
	[HTMLLinkElementInterface,'high'],
	[HTMLTitleElementInterface,''],
	[HTMLMetaElementInterface,''],
	[HTMLBaseFontElementInterface,'high'],
	[HTMLFontElementInterface,'high'],
	[HTMLIsIndexElementInterface,'high'],
	[HTMLStyleElementInterface,''],
	[HTMLBodyElementInterface,''],
	[HTMLFormElementInterface,'high'],
	[HTMLSelectElementInterface,'high'],
	[HTMLAnchorElementInterface,'high'],
	[HTMLAbbrElementInterface,'high'],
	[HTMLAddressElementInterface,''],
	[HTMLAreaElementInterface,'high'],
	[HTMLArticleElementInterface,'high'],
	[HTMLAsideElementInterface,'high'],
	[HTMLAudioElementInterface,''],
	[HTMLBElementInterface,'high'],
	[HTMLBaseElementInterface,'high'],
	[HTMLBdiElementInterface,'high'],
	[HTMLBdoElementInterface,'high'],
	[HTMLBlockQuoteElementInterface,'high'],
	[HTMLBrElementInterface,''],
	[HTMLButtonElementInterface,'high'],
	[HTMLCanvasElementInterface,'high'],
	[HTMLTableCaptionElementInterface,'high'],
	[HTMLCiteElementInterface,''],
	[HTMLCodeElementInterface,'high'],
	[HTMLTableColElementInterface,'high'],
	[HTMLTableColGroupElementInterface,'high'],
	[HTMLDataElementInterface,'high'],
	[HTMLDataListElementInterface,'high'],
	[HTMLDdElementInterface,'high'],
	[HTMLModElementInterface,'high'],
	[HTMLDfnElementInterface,'high'],
	[HTMLDivElementInterface,'high'],
	[HTMLDListElementInterface,'high'],
	[HTMLDirElementInterface,'high'],
	[HTMLMenuElementInterface,'high'],
	[HTMLDtElementInterface,'high'],
	[HTMLEmElementInterface,'high'],
	[HTMLEmbedElementInterface,'high'],
	[HTMLFieldSetElementInterface,'high'],
	[HTMLFigCaptionElementInterface,'high'],
	[HTMLFigureElementInterface,'high'],
	[HTMLFooterElementInterface,'high'],
	[HTMLHeadingElementInterface,'high'],
	[HTMLHeaderElementInterface,'high'],
	[HTMLHRElementInterface,'high'],
	[HTMLIElementInterface,'high'],
	[HTMLIFrameElementInterface,'high'],
	[HTMLImageElementInterface,'high'],
	[HTMLInputElementInterface,'high'],
	[HTMLInsElementInterface,'high'],
	[HTMLKbdElementInterface,'high'],
	[HTMLKeygenElementInterface,'high'],
	[HTMLLabelElementInterface,'high'],
	[HTMLLegendElementInterface,'high'],
	[HTMLLIElementInterface,'high'],
	[HTMLMainElementInterface,''],
	[HTMLMapElementInterface,'high'],
	[HTMLMeterElementInterface,'high'],
	[HTMLNavElementInterface,'high'],
	// [HTMLNoScriptElementInterface,''],
	[HTMLObjectElementInterface,'high'],
	[HTMLOListElementInterface,'high'],
	[HTMLOptGroupElementInterface,'high'],
	[HTMLOutputElementInterface,'high'],
	[HTMLParagraphElementInterface,'high'],
	[HTMLParamElementInterface,'high'],
	[HTMLAppletElementInterface,'high'],
	[HTMLPreElementInterface,'high'],
	[HTMLProgressElementInterface,'high'],
	[HTMLQuoteElementInterface,'high'],
	[HTMLRpElementInterface,'high'],
	[HTMLRtcElementInterface,'high'],
	[HTMLRubyElementInterface,'high'],
	[HTMLSElementInterface,'high'],
	[HTMLSampElementInterface,'high'],
	[HTMLSectionElementInterface,'high'],
	[HTMLSmallElementInterface,'high'],
	[HTMLSourceElementInterface,'high'],
	[HTMLSpanElementInterface,'high'],
	[HTMLStrongElementInterface,'high'],
	[HTMLSubElementInterface,'high'],
	[HTMLSupElementInterface,'high'],
	[HTMLTableElementInterface,'high'],
	[HTMLTableSectionElementInterface,'high'],
	//[HTMLTableCellElementInterface,''],
	[HTMLTableDataCellElementInterface,'high'],
	[HTMLFrameSetElementInterface,'high'],
	[HTMLFrameElementInterface,'high'],
	[HTMLTemplateElementInterface,'high'],
	[HTMLTextAreaElementInterface,'high'],
	[HTMLTableSectionTFootElementInterface,'high'],
	[HTMLTableHeaderCellElementInterface,'high'],
	[HTMLTimeElementInterface,'high'],
	[HTMLTableRowElementElementInterface,'high'],
	[HTMLTrackElementInterface,'high'],
	[HTMLUElementInterface,'high'],
	[HTMLUListElementInterface,'high'],
	[HTMLVarElementInterface,'high'],
	[HTMLVideoElementInterface,''],
	[HTMLWbrElementInterface,'high'],
	[HTMLTableHeaderCellElementInterface1,'high']
]

//traversal.IDL

NodeIteratorInterface = {
	'Name':'NodeIterator',
	'Attributes':[
		['Node',[function() {return rint(2)  ? "document.createElement('"+ra(ElementArray)[0].tagName+"')":ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'readonly'],
		['whatToShow',[randoms,"1","2","3","0xFFFFFFFF","0x00000001","0x00000002","0x00000004","0x00000008","0x00000010","0x00000020","0x00000040","0x00000080","0x00000100","0x00000200","0x00000400","0x00000800"],'readonly'],
		['filter',[function() {return "{acceptNode:"+ra(['NodeFilter.FILTER_REJECT','NodeFilter.FILTER_SKIP','NodeFilter.FILTER_REJECT',randoms()])+"}"}],'readonly'],
		['expandEntityReferences',[randbool,randoms],'readonly']
	],
	'Methods':[
		['nextNode',[''],'high'],
		['previousNode',[''],'high'],
		['detach',[''],'']
	]
}


TreeWalkerInterface = {
	'Name':'TreeWalker',
	'Attributes':[
		['Node',[function() {return rint(2)  ? "document.createElement('"+ra(ElementArray)[0].tagName+"')":ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'readonly'],
		['whatToShow',[randoms,"1","2","3","0xFFFFFFFF","0x00000001","0x00000002","0x00000004","0x00000008","0x00000010","0x00000020","0x00000040","0x00000080","0x00000100","0x00000200","0x00000400","0x00000800"],'readonly'],
		['filter',[function() {return "{acceptNode:"+ra(['NodeFilter.FILTER_REJECT','NodeFilter.FILTER_SKIP','NodeFilter.FILTER_REJECT',randoms()])+"}"}],'readonly'],
		['expandEntityReferences',[randbool,randoms],'readonly'],
		['currentNode',[function() {return rint(2)  ? "document.createElement('"+ra(ElementArray)[0].tagName+"')":ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'high']
	],
	'Methods':[
		['parentNode',[''],'high'],
		['firstChild',[''],'high'],
		['lastChild',[''],'high'],
		['previousSibling',[''],'high'],
		['nextSibling',[''],'high'],
		['previousNode',[''],'high'],
		['nextNode',[''],'high']
	]
}

//Range.IDL

RangeInterface = {
	'Name':'Range',
	'Attributes':[
		['startContainer',[function() {return rint(2)  ? "document.createElement('"+ra(ElementArray)[0].tagName+"')":ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'readonly'],
		['endContainer',[function() {return rint(2)  ? "document.createElement('"+ra(ElementArray)[0].tagName+"')":ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'readonly'],
		['startOffset',[randoms,function() {return rint(ra(INT_NUMS))}],'readonly'],
		['endOffset',[randoms,function() {return rint(ra(INT_NUMS))}],'readonly'],
		['collapsed',[randbool,randoms],'readonly'],
		['commonAncestorContainer',[function() {return rint(2)  ? "document.createElement('"+ra(ElementArray)[0].tagName+"')":ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'readonly'],
	],
	'Methods':[
		['setStart',[function() {return rint(2) ? ra(["document.createElement('"+ra(ElementArray)[0].tagName+"')",ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])])+","+rint(ra(INT_NUMS)):ra(["document.createElement('"+ra(ElementArray)[0].tagName+"')",ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])])+","+randoms()}],'high'],
		['setEnd',[function() {return rint(2) ? ra(["document.createElement('"+ra(ElementArray)[0].tagName+"')",ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])])+","+rint(ra(INT_NUMS)):ra(["document.createElement('"+ra(ElementArray)[0].tagName+"')",ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])])+","+randoms()}],'high'],
		['setStartBefore',[function() {return rint(2)  ? "document.createElement('"+ra(ElementArray)[0].tagName+"')":ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'high'],
		['setStartAfter',[function() {return rint(2)  ? "document.createElement('"+ra(ElementArray)[0].tagName+"')":ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'high'],
		['setEndBefore',[function() {return rint(2)  ? "document.createElement('"+ra(ElementArray)[0].tagName+"')":ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'high'],
		['setEndAfter',[function() {return rint(2)  ? "document.createElement('"+ra(ElementArray)[0].tagName+"')":ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'high'],
		['collapse',[randbool,randoms],'high'],
		['selectNode',[function() {return rint(2)  ? "document.createElement('"+ra(ElementArray)[0].tagName+"')":ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'high'],
		['selectNodeContents',[function() {return rint(2)  ? "document.createElement('"+ra(ElementArray)[0].tagName+"')":ra([returnRandomElement])}],'high'],
		['compareBoundaryPoints',[function() {return "Range."+ra(['START_TO_START','START_TO_END','END_TO_END','END_TO_START'])+",range"+rint(rinit)}],'high'],
		['deleteContents',[''],'high'],
		['extractContents',[''],'high'],
		['cloneContents',[''],'high'],
		['insertNode',[function() {return rint(2)  ? "document.createElement('"+ra(ElementArray)[0].tagName+"')":ra([returnRandomElement])}],'high'],
		['surroundContents',[function() {return rint(2)  ? "document.createElement('"+ra(ElementArray)[0].tagName+"')":ra([returnRandomElement(),ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}],'high'],
		['cloneRange',[''],'high'],
		['toString',[''],'high'],
		['detach',[''],'']		
	]
}

AnimationPlayerTimings = [
	['delay',[floatValue,randoms,function() {return rint(ra(INT_NUMS))}]],
	['endDelay',[floatValue,randoms,function() {return rint(ra(INT_NUMS))}]],
	['fill',["none", "forwards", "backwards", "both", "auto",""]],
	['iterationStart',[floatValue,randoms,function() {return rint(ra(INT_NUMS))}]],
	['iterations',[floatValue,randoms,function() {return rint(ra(INT_NUMS))}]],
	['duration',["auto",floatValue,randoms,function() {return rint(ra(INT_NUMS))}]],
	['playbackRate',[floatValue,randoms,function() {return rint(ra(INT_NUMS))}]],
	['direction',['normal','reverse','alternate','alternate-reverse']],
	['easing',['linear','ease','ease-in','ease-out','ease-in-out',function() {return'cubic-bezier('+arrayWalk([floatValue,randoms,function() {return rint(ra(INT_NUMS))}])+','+arrayWalk([floatValue,randoms,function() {return rint(ra(INT_NUMS))}])+','+arrayWalk([floatValue,randoms,function() {return rint(ra(INT_NUMS))}])+','+arrayWalk([floatValue,randoms,function() {return rint(ra(INT_NUMS))}])+')'},'step-start','step-middle','step-end',function() {return 'steps('+arrayWalk([randoms,function() {return rint(ra(INT_NUMS))}])+','+arrayWalk(['start','middle','end'])+')'}]]
]

AnimationPlayerMethods = [
	['play',['']],
	['pause',['']],
	['reverse',['']],
	['finish',['']]
]

AnimationPlayerAttributes = [
	['startTime',[floatValue,randoms,function() {return rint(ra(INT_NUMS))},'']],
	['currentTime',[floatValue,randoms,function() {return rint(ra(INT_NUMS))},'']],
	['playbackRate',[floatValue,randoms,function() {return rint(ra(INT_NUMS))},'']],
	['playState',["idle", "pending", "running", "paused", "finished",""]]
]


MutationObserverInterface = {
	'Name':'observer',
	'type':'MutationObserver',
	'Methods':[
		['observe',[observeFunc]],
		['disconnect',['']],
		['takeRecords',['']]
	],
	'MutationObserverInit':[
		['childList',["1"]],//randbool
		['attributes',[randbool]],
		['characterData',[randbool]],
		['subtree',[randbool]],
		// ['attributeOldValue',[randbool]],
		// ['characterDataOldValue',[randbool]],
	]
	
}

windowInterface = {
	'Name':'window',
	'type':'windowinterface',
	'Attributes':[
		// ['closed',[randbool,''],'readonly'],
		['defaultStatus',[function() {return string(rint(STR_NUM))},''],''],
		// ['document',['document'],'readonly'],
		// ['frameElement',['document.getElementsByTagName(\'iframe\')[0]',function() {return ra(createdElements).objName},'document.createElement(\'iframe\')',''],'readonly'],
		// ['frames',['document.getElementsByTagName(\'iframe\')',function() {return ra(createdElements).objName},''],'readonly'],
		// ['history',[''],'readonly'],
		// ['innerHeight',[function() {return rint(ra(INT_NUMS))},randoms,''],'readonly'],
		// ['innerWidth',[function() {return rint(ra(INT_NUMS))},randoms,''],'readonly'],
		// ['length',[function() {return rint(ra(INT_NUMS))},randoms,''],'readonly'],
		// ['location',['window.location',''],'readonly'],
		['name',[function() {return string(rint(STR_NUM))},'','window.name'],'high'],
		// ['navigator',['window.navigator',''],'readonly'],
		// ['opener',['window.opener',''],'readonly'],
		// ['outerHeight',[function() {return rint(ra(INT_NUMS))},randoms,''],'readonly'],
		// ['outerWidth',[function() {return rint(ra(INT_NUMS))},randoms,''],'readonly'],
		// ['pageXOffset',[function() {return rint(ra(INT_NUMS))},randoms,''],'readonly'],
		// ['pageYOffset',[function() {return rint(ra(INT_NUMS))},randoms,''],'readonly'],
		// ['parent',['window.parent',''],'readonly'],
		// ['screen',['window.screen',''],'readonly'],
		// ['screenLeft',[function() {return rint(ra(INT_NUMS))},randoms,''],'readonly'],
		// ['screenTop',[function() {return rint(ra(INT_NUMS))},randoms,''],'readonly'],
		// ['screenX',[function() {return rint(ra(INT_NUMS))},randoms,''],'readonly'],
		// ['screenY',[function() {return rint(ra(INT_NUMS))},randoms,''],'readonly'],
		// ['scrollX',[function() {return rint(ra(INT_NUMS))},randoms,''],'readonly'],
		// ['scrollY',[function() {return rint(ra(INT_NUMS))},randoms,''],'readonly'],
		// ['self',['window.self','window',''],'readonly'],
		['status',[function() {return string(rint(STR_NUM))},''],''],
		// ['top',['window',''],'readonly']
	],
	'Methods':[
		// ['alert',['document.cookie','',function() {return string(rint(STR_NUM))}],''],
		['atob',['document.cookie','""',function() {return '"'+string(rint(STR_NUM))+'"'}],''],
		['blur',[''],'high'],
		['btoa',['atob("'+string(rint(STR_NUM))+'")','""'],''],
		['clearInterval',[''],'high'],
		['clearTimeout',[''],'high'],
		//['close',[''],'high'],
		// ['confirm',['',function() {return string(rint(STR_NUM))},''],''],
		// ['createPopup',[''],''],
		['focus',[''],'high'],
		['moveBy',[function() {return rint(ra(INT_NUMS))+','+rint(ra(INT_NUMS))}],'high'],
		['moveTo',[function() {return rint(ra(INT_NUMS))+','+rint(ra(INT_NUMS))}],'high'],
		['open',['','window.location'],''],
		// ['print',[''],''],
		// ['prompt',[function(){return string(rint(STR_NUM))+','+string(rint(STR_NUM))},'"",""',''],''],
		['resizeBy',[function() {return rint(ra(INT_NUMS))+','+rint(ra(INT_NUMS))}],'high'],
		['resizeTo',[function() {return rint(ra(INT_NUMS))+','+rint(ra(INT_NUMS))}],'high'],
		['scrollBy',[function() {return rint(ra(INT_NUMS))+','+rint(ra(INT_NUMS))}],'high'],
		['scrollTo',[function() {return rint(ra(INT_NUMS))+','+rint(ra(INT_NUMS))}],'high'],
		// ['stop',[''],'high']
	]
}

function generateTestCase(){

	var returnString="<html>\n	<head>\n	<meta http-equiv='Cache-Control' content='no-cache'/>	<style></style>\n"//	<script>\nfunction start(){"
	returnString +="\n</head>\n"
	returnString +="\n<script>\n"
	returnString +=generate(1)
	returnString += "\n</script>\n"
	//returnString+= '\n<body>\n</body>'
	//returnString+="window.location.href = window.location.protocol + '//' + window.location.host + '/'\n"
	returnString+='\n</script>'
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
	var returnString = 'var createdElements={}\n'
	var returnArray=new Array()
	fuzzStruct = {}
	createdElements = {}
	createdText = {}
	fuzzStyleCSS = new Array()
	createdRanges = new Array()
	createdPlayers = new Array()
	createdObservers = new Array()
	evtArr = new Array()
	createArray = new Array()
	createArray2 = new Array()
	funcsarray = new Array()
	funcsinit = 0;
	evtinit = 0;
	twinit = 0;
	stweak = 0;
	rinit = 0;
	niinit = 0;
	sinit = 0;
	pinit = 0;
	oinit = 0;
	while(num--){
		createArray=createArray.concat(createElements((rint(ELEM_COUNT)+1)))
		createArray=createArray.concat(createTextNodes((rint(TXT_COUNT)+1)))
		createFuzzStruct()
		//returnArray=returnArray.concat(mangleElements((rint(MNG_COUNT)+1)))
		returnArray=returnArray.concat(fuzz(rint(FUZZ_COUNT)+1))
		// returnArray=returnArray.shuffle()
		returnString += prepareString(returnString,returnArray)
	}
	// if(!rint(10)){
	// 	var Surku=require('./Surku/Surku.js')
	// 	var newGenerator=new Surku({maxMutations:50,minMutations:10})
	// 	return newGenerator.generateTestCase(returnString)
	// }
	return returnString
}

function prepareString(str,arr) {
	var retStr = str;
	var retArr = arr;
	for(var i = retArr.length -1; i--;) {
                if (retArr[i].indexOf("var ")!=-1){
//	for(var i=0;i<retArr.length;i++){
//		if (retArr[i].indexOf("var ")>-1){
			createArray.push(retArr[i])
			//retArr.remove(i,i)
			retArr.splice(i,1)
		}
//		else {
//			continue;
//		}
	}
	//console.log(retArr)
	for(var j=0;j<funcsarray.length;j++){
		retStr += 'function '+funcsarray[j]+'(arg) {\n'
		var rand = rint(INT_FUZZ)+1
		while(rand--){
			//retStr += 'try { alert(1) } catch(e) {}\n'
			//retStr += 'try { '+retArr[rint(retArr.length)]+'} catch(e) {}\n'
			//retStr += ra(retArr)+'\n'
			retStr += 'try {'+ra(retArr)+'} catch(e) {}\n'
			//retStr += retArr[rint(retArr.length)]+'\n'
		}
		retStr += '}\n\n'
	}
	for(var k=0;k<createArray.length;k++){
		retStr += 'try { '+createArray[k]+'} catch(e) {}\n'
		//retStr += createArray[k]+'\n'
	}
	for(var x=0;x<retArr.length;x++){
		retArr.shuffle()
		retStr += 'try {'+retArr[x]+'} catch(e) {}\n'
		//retStr += retArr[x]+'\n'
	}
	return retStr
}

function createElements(num){
	var returnArray = new Array();
	var init = 0
	var objName = 'HTML' 
	while(num--){
		var obj = ra(ElementArray)
		// if(obj[1] != 'high' && rint(10)) continue;//createElements(num)
		if(obj==undefined) continue
		returnArray = returnArray.concat(objName+init+'=document.createElement("'+obj[0].tagName+'")')
		returnArray = returnArray.concat(objName+init+'.id="'+objName+init+'"')
		returnArray = returnArray.concat("createdElements['"+objName+init+"']="+objName+init)
		createdElements[objName+init] = {'objName':objName+init,'Attributes':[],'Methods':[],'obj':obj[0]} 
		returnArray = returnArray.concat("document.body"+'.appendChild('+objName+init+')')//"document.body"+
		init++
	}
	return returnArray
}

function createTextNodes(num){
	var returnArray = new Array();
	var init = 0
	var objName = 'TXT' 
	var obj = TextInterface
	while(num--){
		var elem4 = ra(createdElements)
		if (elem4 == undefined) continue
		returnArray = returnArray.concat(objName+init+"=document.createTextNode('"+string(rint(STR_NUM))+"')")	
		returnArray = returnArray.concat("createdElements['"+objName+init+"']="+objName+init)
		createdText[objName+init] = {'objName':objName+init,'Attributes':[], 'Methods':[],'obj':obj}
		returnArray = returnArray.concat(elem4.objName+'.appendChild('+objName+init+')')//"document.body"+
		init++
	}
	return returnArray
}


function createFuzzStruct(){
	
	//Creating Element Object Containing Certain number of Attribs and Operations
	for (var key in createdElements) {
		for(var i=0; i<rint(ATTR_NUM)+1; i++) {
			var attrib = ra(createdElements[key].obj.Attributes) 
			//console.log(attrib)
			createdElements[key].Attributes.push(attrib)
		}
		for(var k=0; k<rint(MTD_NUM)+1; k++) {
			var Method  =ra(createdElements[key].obj.Methods) 
			createdElements[key].Methods.push(Method)
		}	
	}
	for ( var key in createdText) {
		for(var j=0; j<rint(ATTR_NUM)+1; j++) {
			var attrib = ra(createdText[key].obj.Attributes) 
			//console.log(attrib)
			createdText[key].Attributes.push(attrib)
		}
		for(var l=0; l<rint(MTD_NUM)+1; l++) {
			var Method  =ra(createdText[key].obj.Methods) 
			createdText[key].Methods.push(Method)
		}	
	}
	for (var p=0; p<rint(STYLE_ROUNDS)+1; p++){
		var styAttrib = ra(CSSPropertiesInterface.Attributes)
		fuzzStyleCSS.push(styAttrib)
	}
	//console.log(createdElements)
	//console.log(createdText)
	
}

function mangleElements(num){
	var returnArray = new Array();
	var objName = 'HTML' 
	var objKeys = Object.keys(createdElements)
	var init = objKeys.length
	for (var i=0;i<objKeys.length;i++) {
		no = rint(num)+1
		// console.log(objKeys)
		while(no--){
			var obj = ra(ElementArray)
			if(obj[1] != 'high' && rint(10)) continue;//createElements(num)
			if(obj==undefined) continue
			var e = createdElements[i]
			// if (e ==undefined) continue
			returnArray = returnArray.concat(objName+init+'=document.createElement("'+obj[0].tagName+'")')
			returnArray = returnArray.concat(objName+init+'.id="'+objName+init+'"')
			returnArray = returnArray.concat("createdElements['"+objName+init+"']="+objName+init)
			returnArray = returnArray.concat(e.objName+'.appendChild('+objName+init+')')
			createdElements.push({'objName':objName+init,'type':obj[0].Name, 'object':obj[0]})
			init++
		}
	}
	return returnArray
}

function mangleElements1(num){
	var returnArray = new Array();
	var objName = 'HTML' 
	var objKeys = Object.keys(createdElements)
	var init = objKeys.length
	for (var i=0;i<objKeys.length;i++) {
		no = rint(num)+1
		// console.log(objKeys)
		while(no--){
			var obj = ra(ElementArray)
			if(obj[1] != 'high' && rint(10)) continue;//createElements(num)
			if(obj==undefined) continue
			var e = createdElements[i]
			// if (e ==undefined) continue
			returnArray = returnArray.concat(objName+init+'=document.createElement("'+obj[0].tagName+'")')
			returnArray = returnArray.concat(objName+init+'.id="'+objName+init+'"')
			returnArray = returnArray.concat("createdElements['"+objName+init+"']="+objName+init)
			returnArray = returnArray.concat(e.objName+'.appendChild('+objName+init+')')
			createdElements.push({'objName':objName+init,'type':obj[0].Name, 'object':obj[0]})
			init++
		}
	}
	return returnArray
}
var fuzzing = [
	fuzzWindowAttribs,
	fuzzWindowMethods,
	fuzzStyle,
	fuzzStyle1,
	fuzzDocumentAttribs,
	fuzzDocumentMethods,
	deleteRandomKey,
	fuzzPLayerMethods,
	fuzzPlayerAttribs,
	MutationObserve,
	fuzzMutationObserve,
	createRangeTraversal,
	fuzzRangeTraversal,
	fuzzElementsMethods,
	fuzzElementsAttribs,
	fuzzElementsMethods,
	fuzzElementsAttribs,
	fuzzElementsMethods,
	fuzzElementsAttribs,
	//addLoop,
	crossRef,
	dispatchEvt,
	AddEvent,
	GarColl,
]
function fuzz(num){
	var returnArray = new Array()
	while(num--){
		var fuzzwht = ra(fuzzing)
		if((fuzzwht == 'addLoop') && rint(25)) {
			continue;
		}
		else {
			returnArray=returnArray.concat(fuzzwht())
		}
		
	}
	return returnArray
}

function intfuzz(){
	var returnString = '';
	returnString += 'func'+funcsinit;
	funcsarray.push(returnString);
	funcsinit++;
	return returnString
}

returnRandomElement = function() {

	var types=['.firstChild','.firstChild.nextSibling','.lastChild','.lastChild.previousSibling','.firstChild.parentNode','.lastChild.parentNode','']
	var Element = [ra(createdElements).objName,'createdElements[\''+ra(createdElements).objName+'\']']
	var returnString = ra(Element)+ra(types)
	return returnString

}

function createEvt(elm,evt) {
        var returnArray = new Array;
        var elm = elm;
        var evt = evt;
        var e = 'EVT'+evtinit
	//console.log(e)
        var prob = rint(5)
        if (prob == 0 || evt[1] == 'Event' || evt[1] == 'UIEvent') {
                returnArray = returnArray.concat('var '+e+'= new Event("'+evt[0]+'",{"bubbles":'+randbool()+', "cacelable":'+randbool()+'})')
        }
        else if (prob == 1) {
                returnArray = returnArray.concat('var '+e+'= new UIEvent("'+evt[0]+'",{"bubbles":'+randbool()+', "cacelable":'+randbool()+', "view" : window , "detail":'+rint(ra(INT_NUMS))+', "cancelBubble":'+randbool()+', "which":'+rint(ra(INT_NUMS))+'})')
        }
        else {
                if(evt[1] == 'MouseEvent') {
                        returnArray = returnArray.concat('var '+e+'= new MouseEvent("'+evt[0]+'",{ "bubbles":'+randbool()+', "cancelable":'+randbool()+', "view": window , "detail":'+rint(ra(INT_NUMS))+', "screenX":'+rint(ra(INT_NUMS))+',"screenY":'+rint(ra(INT_NUMS))+', "clientX":'+rint(ra(INT_NUMS))+', "clientY":'+rint(ra(INT_NUMS))+', "ctrlKey": '+randbool()+', "shiftKey":'+randbool()+', "altKey":'+randbool()+', "metaKey": '+randbool()+', "button":'+ra([rint(3),-1,rint(ra(INT_NUMS))])+', "buttons":'+ra([rint(ra(INT_NUMS)),1,2,4])+', "relatedTarget":'+ra(['null',returnRandomElement()])+', "cancelBubble":'+randbool()+', "which":'+rint(ra(INT_NUMS))+'})');       
                }
                else if (evt[1] == 'FocusEvent') {
                        returnArray = returnArray.concat('var '+e+'= new FocusEvent("'+evt[0]+'", { "bubbles":'+randbool()+', "cancelable":'+randbool()+', "view": window , "detail":'+rint(ra(INT_NUMS))+', "relatedTarget":'+ra(['null',returnRandomElement()])+', "cancelBubble":'+randbool()+', "which":'+rint(ra(INT_NUMS))+'})');
                }
                else if (evt[1] == 'KeyboardEvent') {
                        returnArray = returnArray.concat('var '+e+'= new KeyboardEvent("'+evt[0]+'",{ "bubbles":'+randbool()+', "cancelable":'+randbool()+', "view": window , "detail":'+rint(ra(INT_NUMS))+', "cancelBubble":'+randbool()+', "keyIdentification":"'+randUni()+'", "location":'+rint(ra(INT_NUMS))+', "ctrlKey": '+randbool()+', "shiftKey":'+randbool()+', "altKey":'+randbool()+', "metaKey": '+randbool()+', "repeat":'+randbool()+', "isComposing":'+randbool()+', "charCode":'+rint(ra(INT_NUMS))+', "keyCode":'+rint(ra(INT_NUMS))+', "which":'+rint(ra(INT_NUMS))+'})');
                }
                else if (evt[1] == 'WheelEvent') {
                        returnArray = returnArray.concat('var '+e+'= new WheelEvent("'+evt[0]+'",{ "bubbles":'+randbool()+', "cancelable":'+randbool()+', "view": window , "detail":'+rint(ra(INT_NUMS))+', "cancelBubble":'+randbool()+', "deltaX":'+floatValue()+', "deltaY":'+floatValue()+', "deltaZ":'+floatValue()+', "deltaMode":'+rint(ra(INT_NUMS))+', "which":'+rint(ra(INT_NUMS))+', "relatedTarget":'+ra(['null',returnRandomElement()])+'})')
                }
                else if(evt[1] == 'CompositionEvent') {
                        returnArray = returnArray.concat('var '+e+'= new WheelEvent("'+evt[0]+'",{ "bubbles":'+randbool()+', "cancelable":'+randbool()+', "view": window , "detail":'+rint(ra(INT_NUMS))+', "which":'+rint(ra(INT_NUMS))+', "data":"'+string(rint(STR_NUM))+'"})'); 
                }
		else if (evt[1] == 'ProgressEvent') {
			returnArray = returnArray.concat('var '+e+'= new PorgressEvent("'+evt[0]+'",{ "bubbles":'+randbool()+', "cancelable":'+randbool()+', "lengthComputable":'+randbool()+', "loaded":'+rint(ra(INT_NUMS))+', "total":'+rint(ra(INT_NUMS))+'})')
		}
		else if (evt[1] == 'AnimationEvent') {
			returnArray = returnArray.concat('var '+e+'= new AnimationEvent("'+evt[0]+'",{ "bubbles":'+randbool()+', "cancelable":'+randbool()+', "animationName":'+ra(['"'+string(rint(STR_NUM))+'"','""'])+', "elapsedTime":'+floatValue()+', "pseudoElement": "::'+ra([returnRandomElement(),''])+'"})')
		}
        }
        evtArr.push([elm,evt[0],evt[1],e]);
        evtinit++;
        return returnArray
}

function dispatchEvt() {
        var returnArray = new Array
        if (evtArr.length == 0) {
                var evt = ra(DOMEvents)
                var element = ra([returnRandomElement(),'document','document.body','window'])
                returnArray = returnArray.concat(createEvt(element,evt))
        }
        var ev = ra(evtArr)
        var prob = rint(20)
        if(prob < 13) {
                returnArray = returnArray.concat(ev[0]+'.dispatchEvent('+ev[3]+')')
        }
        else {
                returnArray = returnArray.concat(returnRandomElement()+'.dispatchEvent('+ev[3]+')')
        }
        return returnArray
}


function AddEvent() {
	var returnArray = new Array
	var evt = ra(DOMEvents)
	var element = ra([returnRandomElement(),'document','document.body','window'])
	//var funcs = intfuzz(rint(10))
	var funcs = intfuzz()
	returnArray = returnArray.concat(createEvt(element,evt))
	returnArray = returnArray.concat(element+'.addEventListener("'+evt[0]+'",'+funcs+','+randbool()+')')
	//returnArray = returnArray.concat(element+'.addEventListener("'+evt[0]+'",function() {'+funcs.join(";")+'},'+randbool()+')')
	//returnArray = returnArray.concat(element+'.addEventListener("'+evt[0]+'",function() {alert("HIT!!!")},'+randbool()+')')
	return returnArray
}

function RemEvent() {
	var returnArray = new Array
	var evt = ra(DOMEvents)
	var element = ra([returnRandomElement(),'document','document.body','window'])
	var funcs =intfuzz()
	//var funcs =intfuzz(rint(10))
	returnArray = returnArray.concat(element+'.removeEventListener("'+evt[0]+'",'+funcs+','+randbool()+')')
	return returnArray
}

function GarColl(){
	return 'CollectGarbage()'
}

function MutationObserve(){
	var returnArray = new Array()
	var obj = MutationObserverInterface
	// while(num--){
		createdObservers.push({'objName':obj.Name+oinit,'type':obj.type, 'object':obj})
		if(rint(20)){
			//var funcs =intfuzz(rint(10))
			var funcs =intfuzz()
 			returnArray = returnArray.concat('var '+obj.Name+oinit + "= new MutationObserver("+funcs+"); createdElements['"+obj.Name+oinit+"']="+obj.Name+oinit)
 		}
 		else {
			returnArray = returnArray.concat('var '+obj.Name+oinit + "= new MutationObserver(function() {}); createdElements['"+obj.Name+oinit+"']="+obj.Name+oinit)
		}
		//returnArray = returnArray.concat("createdElements['"+obj.Name+oinit+"']="+obj.Name+oinit)
		// createdObservers.push({'objName':obj.Name+oinit,'type':obj.type, 'object':obj})
		oinit++
	// }
	return returnArray
}

function fuzzMutationObserve() {
	var returnArray = new Array();
	if(createdObservers.length == 0){
		returnArray = returnArray.concat(MutationObserve())
	}
	else{
		var o = ra(createdObservers)
		var mtd = ra(o.object.Methods)
		returnArray = returnArray.concat(o.objName+"."+mtd[0]+"("+arrayWalk(mtd[1])+")")
	}
	return returnArray
}

function getAnimEffects() {
	var returnArray = new Array();
	var rounds = (rint(ANIM_EFFECTS)+2);
	var effects = new Array()
	if (rint(2)){
		var effNo = 1
	}
	else {
		var effNo = (rint(ANIM_EFFECTS)+1);
	}
	for (var i=0;i<effNo;i++) {
		effects.push(ra(CSS2EffectInterface.Attributes));
	}
	while(rounds--){
		var returnString =''
		returnString += "{"
		for (var i=0;i<effects.length;i++) {
			var effect = effects[i];
			returnString +=effect[0]+":\""+arrayWalk(effect[1])+"\","
		}
		returnString +="}";
		returnArray=returnArray.concat(returnString)
	}
	return returnArray
}

function getAnimTiming() {
	var returnArray = new Array();
	var rounds = (rint(ANIM_TIMING)+1);
	var returnString =''
	returnString += "{"
	while(rounds--){
		var timing = ra(AnimationPlayerTimings);
		returnString +=timing[0]+":'"+arrayWalk(timing[1])+"',"
	}
	returnString +="}";
	returnArray=returnArray.concat(returnString)
	return returnArray
}

function createAnimPLayers(num) {
	var returnArray = new Array();
	var objName = 'player';
	while(num--) {
		var e  = returnRandomElement()
		returnArray=returnArray.concat('var '+objName+pinit+"="+e+".animate(["+getAnimEffects()+"],"+getAnimTiming()+"); createdElements['"+objName+pinit+"']="+objName+pinit)
		//returnArray = returnArray.concat("createdElements['"+objName+pinit+"']="+objName+pinit)
		createdPlayers.push({'objName':objName+pinit})
		pinit++;
	}
	return returnArray
	 
}

function fuzzPlayerAttribs() {
	var returnArray = new Array();
	if(createdPlayers.length == 0){
		returnArray = returnArray.concat(createAnimPLayers((rint(ANIM_NUM)+1)))
	}
	else {
		var p = ra(createdPlayers)
		var attrib = ra(AnimationPlayerAttributes)
		returnArray = returnArray.concat(p.objName+"."+attrib[0]+"='"+arrayWalk(attrib[1])+"'")
	}
	return returnArray
}

function fuzzPLayerMethods() {
	var returnArray = new Array();
	if(createdPlayers.length == 0){
		returnArray = returnArray.concat(createAnimPLayers((rint(ANIM_NUM)+1)))
	}
	else{
		var p = ra(createdPlayers)
		var mtd = ra(AnimationPlayerMethods)
		returnArray = returnArray.concat(p.objName+"."+mtd[0]+"("+arrayWalk(mtd[1])+")")
	}
	return returnArray
}

function fuzzStyle() {
	var returnArray = new Array()
	var e = ra(createdElements)
	// console.log(createdElements)
// 	console.log(createdElements.length)
	var attrib =ra(fuzzStyleCSS)
	returnArray=returnArray.concat(ra([e.objName,'createdElements[\''+e.objName+'\']'])+'.style.'+attrib[1]+'="'+arrayWalk(attrib[2]))+'"'
	return returnArray
}

function fuzzStyle1() {
	var returnArray = new Array()
	var rounds = rint(STYLE_ROUNDS) +1
	var returnString = ''
	var prob = rint(100)
	var selector = ra([ra(createdElements).obj.tagName,'#'+ra(createdElements).objName,'*',ra(createdElements).obj.tagName+","+ra(createdElements).obj.tagName])
	while(rounds--) {
		var attrib =ra(fuzzStyleCSS)
		returnString += attrib[0]+": "+arrayWalk(attrib[2])+"; " 
	}
	if(prob>15 || !stweak){
		returnArray=returnArray.concat('document.styleSheets[0].insertRule("'+selector+' {'+returnString+'}",'+rint(sinit)+')')
		stweak = 1;
		sinit++
	}
	else{
		returnArray=returnArray.concat('document.styleSheets[0].deleteRule('+(rint(sinit))+')')
		sinit--
	}
	return returnArray
}

function fuzzDocumentAttribs() {
	var returnArray = new Array()
	var attrib=ra(HTMLDocumentInterface.Attributes)
	if ((attrib[2] == 'readonly' || attrib[2] != 'high') && rint(20)) {
		fuzzDocumentAttribs()
	}
	if(attrib[0] == 'body'){
		returnArray = returnArray.concat('document.'+attrib[0]+'='+arrayWalk(attrib[1]))
	}
	else {
		returnArray = returnArray.concat('document.'+attrib[0]+'="'+arrayWalk(attrib[1]))+'"'
	}
	return returnArray
	
}

function fuzzDocumentMethods() {
	var returnArray = new Array()
	var mtd=ra(HTMLDocumentInterface.Methods)
	if ((mtd[2] != 'high') && rint(20)) {
		fuzzDocumentAttribs()
	}
	returnArray = returnArray.concat('document.'+mtd[0]+'('+arrayWalk(mtd[1])+')')	
	return returnArray
	
}

function fuzzElementsAttribs() {
	var returnArray = new Array()
	var elem = ra([ra(createdElements),ra(createdText)])
	//console.log(elem)
	var attrib = ra(elem.Attributes)
	if ((attrib[2] == 'readonly' || attrib[2] != 'high') && rint(20)) {
		fuzzElementsAttribs()
	}
	var value  = arrayWalk(attrib[1])
	if((attrib[0]=='innerHTML' && value.indexOf('HTML')> -1) || (attrib[0]=='innerText' && value.indexOf('Text')> -1) || (attrib[0]=='outerHTML' && value.indexOf('HTML')> -1) || (attrib[0]=='outerText' && value.indexOf('Text')> -1) || (attrib[0]=='body' && value.indexOf('HTML')>-1)) {
		returnArray = returnArray.concat(ra([elem.objName,'createdElements[\''+elem.objName+'\']'])+'.'+attrib[0]+'='+value+'')
	}
	else {
		returnArray = returnArray.concat(elem.objName+'.'+attrib[0]+'="'+value+'"')
	}
	return returnArray
	
}

function fuzzElementsMethods() {
	var returnArray = new Array()
	var elem = ra([ra(createdElements),ra(createdText)])
	// var elemName = elem.objName
	var mtd = ra(elem.Methods)
	//console.log(mtd)
	if ((mtd[2] != 'high') && rint(20)) {
		fuzzElementsMethods()
	}
	returnArray = returnArray.concat(ra([elem.objName,'createdElements[\''+elem.objName+'\']'])+'.'+mtd[0]+'('+arrayWalk(mtd[1]))	+')'
	// returnArray = returnArray.concat(elemName+'.'+mtd[0]+'('+arrayWalk(mtd[1])+')\n')
	return returnArray
	
}

function fuzzWindowAttribs() {
	var returnArray = new Array()
	var elem = windowInterface
	var attrib = ra(elem.Attributes)
	if ((attrib[2] == 'readonly' || attrib[2] != 'high') && rint(20)) {
		fuzzElementsAttribs()
	}
	var value  = arrayWalk(attrib[1])
	returnArray = returnArray.concat(elem.Name+'.'+attrib[0]+'="'+value+'"')
	return returnArray
	
}

function fuzzWindowMethods() {
	var returnArray = new Array()
	var elem = windowInterface
	// var elemName = elem.objName
	var mtd = ra(elem.Methods)
	if ((mtd[2] != 'high') && rint(20)) {
		fuzzWindowMethods()
	}
	returnArray = returnArray.concat(elem.Name+'.'+mtd[0]+'('+arrayWalk(mtd[1]))+')'
	// returnArray = returnArray.concat(elemName+'.'+mtd[0]+'('+arrayWalk(mtd[1])+')\n')
	return returnArray
	
}

function deleteRandomKey() {
	var returnArray = new Array()
	// returnArray = returnArray.concat("delete createdElements['"+ra([ra(createdElements),ra(createdRanges)]).objName)+"']"
	if(rint(10)<5) {
	 	returnArray = returnArray.concat("delete "+ra([ra(createdElements).objName,ra(createdText).objName,returnRandomElement()]))
	}
	else {
		returnArray = returnArray.concat("delete createdElements['"+ra([ra(createdElements).objName,ra(createdText).objName])+"']")
	}	
	return returnArray
}

function addLoop() {
	var returnArray = new Array()
	var rndNum = rint(50);
	var loop = ra(["setInterval","setTimeout"])//,"for","while"])
	switch (loop) {
		case 'for':
			returnArray = returnArray.concat('for (var i=0;i<'+rndNum+';i++){\n'+intfuzz((rint(5)+1)).join(";")+'}\n')
			break;
		case 'setInterval':
			//var retStr ='setInterval(function() {'+intfuzz((rint(5)+1)).join(";")+'},'+rint(10)+');\n' ;
			returnArray = returnArray.concat('setInterval('+intfuzz()+','+rint(10)+');');
		//	returnArray = returnArray.concat(retStr.replace(/\n/g, ' ')+'\n')
			break;
		case 'setTimeout':
		    //var retStr ='setTimeout(function() {'+intfuzz((rint(5)+1)).join(";")+'},'+rint(10)+');\n';
		    returnArray = returnArray.concat('setTimeout('+intfuzz()+','+rint(10)+');');
			//returnArray = returnArray.concat(retStr.replace(/\n/g, ' ')+'\n')
			break;
		case 'while':
			returnArray = returnArray.concat('var rndNum = '+rndNum+';\nwhile(rndNum--){\n\t'+intfuzz((rint(5)+1)).join(";")+'}\n')
			break;
	}
	return returnArray
}

function crossRef() {
	
	var returnArray = new Array()
	var HTMLelements = [
		['insertBefore',[function() {return ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])+','+returnRandomElement()}]],
		['insertBefore',[function(){return ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])+','+ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}]],
		['replaceChild',[function(){return ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'[\''+ra(createdText).objName+'\']'])+','+returnRandomElement()}]],
		['replaceChild',[function(){return ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])+','+ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}]],
		['removeChild',[function(){return returnRandomElement()}]],
		['appendChild',[function(){return ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}]],
		['cloneNode',[function (){return randbool()}]]
	];
	var DocumentElements = [
		['adoptNode',[function(){return ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])}]],
		['importNode',[function(){return ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])+','+randbool()},function(){return ra([returnRandomElement(),"document.createElement('"+ra(ElementArray)[0].tagName+"')",ra(createdText).objName,'createdElements[\''+ra(createdText).objName+'\']'])+','+rint(ra(INT_NUMS))}]]
]; 
	
	var prob = rint(150)
	if(prob>100) {
		var e = ra(HTMLelements)
		returnArray = returnArray.concat(returnRandomElement()+"."+e[0]+"("+arrayWalk(e[1])+")")
	}
	else if(prob>75){
		var e = ra(DocumentElements)
		returnArray = returnArray.concat("document."+e[0]+"("+arrayWalk(e[1])+")")
	}
	else {
		var e=ra(['.firstChild','.firstChild.nextSibling','.lastChild','.lastChild.previousSibling','.firstChild.parentNode','.lastChild.parentNode'])
		
		returnArray = returnArray.concat(returnRandomElement()+'='+returnRandomElement()+e)//ra([ra(createdElements),ra(createdRanges)]).objName
	}		
	return returnArray
}

function createRangeTraversal() {
	var returnArray = new Array();
	var prob = rint(75);
	if(prob>50){
		returnArray = returnArray.concat('var range'+rinit+' = document.createRange(); createdElements["range'+rinit+'"]=range'+rinit);
		//returnArray = returnArray.concat("createdElements['range"+rinit+"']=range"+rinit+"")
		createdRanges.push({'objName':'range'+rinit,'type':RangeInterface.Name, 'object':RangeInterface})
		rinit++;
	}
	else if(prob>25){		
		returnArray = returnArray.concat("var tw"+twinit+" = document.createTreeWalker("+returnRandomElement()+","+ra([1,2,3,0xFFFFFFFF,0x00000001,0x00000002,0x00000004,0x00000008,0x00000010,0x00000020,0x00000040,0x00000080,0x00000100,0x00000200,0x00000400,0x00000800])+","+ra(['NodeFilter.FILTER_REJECT','NodeFilter.FILTER_SKIP','NodeFilter.FILTER_REJECT',randoms()])+","+randbool()+"); createdElements['tw"+twinit+"']=tw"+twinit);//{acceptNode:}
		//returnArray = returnArray.concat("createdElements['tw"+twinit+"']=tw"+twinit+"")
		createdRanges.push({'objName':'tw'+twinit,'type':TreeWalkerInterface.Name, 'object':TreeWalkerInterface})
		twinit++;
	}
	else {	
		returnArray = returnArray.concat("var ni"+niinit+" = document.createNodeIterator("+returnRandomElement()+","+ra([1,2,3,0xFFFFFFFF,0x00000001,0x00000002,0x00000004,0x00000008,0x00000010,0x00000020,0x00000040,0x00000080,0x00000100,0x00000200,0x00000400,0x00000800])+","+ra(['NodeFilter.FILTER_REJECT','NodeFilter.FILTER_SKIP','NodeFilter.FILTER_REJECT',randoms()])+","+randbool()+"); createdElements['ni"+niinit+"']=ni"+niinit);//{acceptNode:+"}
		//returnArray = returnArray.concat("createdElements['ni"+niinit+"']=ni"+niinit+"")
		createdRanges.push({'objName':'ni'+niinit,'type':NodeIteratorInterface.Name, 'object':NodeIteratorInterface})
		niinit++;
	}

	return returnArray
}

function fuzzRangeTraversal() {
	var returnArray = new Array();
	if(createdRanges.length==0){
		returnArray=returnArray.concat(createRangeTraversal())
	}
	else {
		var prob = rint(100);
	
		if(prob>50) {
			var obj = ra(createdRanges)
			var attrib = ra(obj.object.Attributes)
			returnArray = returnArray.concat(obj.objName+"."+attrib[0]+"="+arrayWalk(attrib[1]))
		}
		else {
			var obj = ra(createdRanges)
			var mtd = ra(obj.object.Methods)
			returnArray = returnArray.concat(obj.objName+"."+mtd[0]+"("+arrayWalk(mtd[1])+")")
		}	
	}
	return returnArray
}
module.exports={
	init:function(){
		//
		//These inits are for config.reBuildClientFile() and NodeFuzz.html
		//
		config.filetype='html'
		config.type='text/html'
		config.tagtype='html'
		config.clientFile=config.reBuildClientFile()
		console.log('Mega DOM/HTML/CSS Grammar Fuzzer')
	},
	fuzz: function(){
		return generateTestCase()
	}
}
console.log(generateTestCase())
