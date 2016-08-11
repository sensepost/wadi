string = function(max){
	var letters = 'abcdefghijklmnopqrstuvwxyzåäö-.+½!#¤%&/()=?}][{‚‰$£@0123456789ABCDEF'.split('');
	var returnString=''
	var rounds=rint(max)
	while(rounds--){
		var prob=rint(20)
		if(prob>15){
				returnString+=letters[Math.round(Math.random() * 67)];
		}
		else if(prob>10){
			returnString+=ra(entity_table)
		}
		else if(prob>5){
			returnString+="&#"+rint(10000)+';'
		}
		else{
			returnString+=u(0)
		}
	}
	if(rint(2)){
		return filterUnicode(returnString)
	}
	else if(rint(2))
		return HTMLEscape(returnString)
   else
      return returnString

}

langs  = ["ab","aa","af","sq","am","ar","an","hy","as","ay","az","ba","eu","bn","dz","bh","bi","br","bg","my","be","km","ca","zh","zh-Hans","zh-Hant","co","hr","cs","da","nl","en","eo","et","fo","fa","fj","fi","fr","fy","gl","gd","gv","ka","de","el","kl","gn","gu","ht","ha","he"," iw","hi","hu","is","io","id","in","ia","ie","iu","ik","ga","it","ja","jv","kn","ks","kk","rw","ky","rn","ko","ku","lo","la","lv","li","ln","lt","mk","mg","ms","ml","mt","mi","mr","mo","mn","na","ne","no","oc","or","om","ps","pl","pt","pa","qu","rm","ro","ru","sm","sg","sa","sr","sh","st","tn","sn","ii","sd","si","ss","sk","sl","so","es","su","sw","sv","tl","tg","ta","tt","te","th","bo","ti","to","ts","tr","tk","tw","ug","uk","ur","uz","vi","vo","wa","cy","wo","xh","yi","ji","yo","zu",""]

DOMEvents = [
	['abort','Event'],
	['beforeinput','UIEvent'],
	['blur','FocusEvent'],
	['click','MouseEvent'],
	['compositionstart','CompositionEvent'],
	['compositionupdate','CompositionEvent'],
	['compositionend','CompositionEvent'],
	['dblclick','MouseEvent'],
	['error','Event'],
	['focus','FocusEvent'],
	['focusin','FocusEvent'],
	['focusout','FocusEvent'],
	['input','UIEvent'],
	['keydown','KeyboardEvent'],
	['keyup','KeyboardEvent'],
	['load','Event'],
	['mousedown','MouseEvent'],
	['mouseenter','MouseEvent'],
	['mouseleave','MouseEvent'],
	['mousemove','MouseEvent'],
	['mouseout','MouseEvent'],
	['mouseover','MouseEvent'],
	['mouseup','MouseEvent'],
	['resize','UIEvent'],
	['scroll','UIEvent'],
	['select','Event'],
	['unload','Event'],
	['wheel','WheelEvent'],
	['loadstart','ProgressEvent'],
	['progress','ProgressEvent'],
	['error' ,'ProgressEvent'],
	['abort','ProgressEvent'],
	['timeout','ProgressEvent'],
	['load','ProgressEvent'],
	['loadend','ProgressEvent'],
	['animationstart','AnimationEvent'],
	['animationend','AnimationEvent'],
	['animationiteration','AnimationEvent'],
];

//DOMEvents = ['animationend','animationiteration','animationstart','beginEvent','endEvent','repeatEvent','chargingchange','chargingtimechange','dischargingtimechange levelchange','alerting','busy','callschanged cfstatechange','connected','connecting','dialing','disconnected','disconnecting','error','held','holding','incoming','resuming','statechange','voicechange','CssRuleViewRefreshed','CssRuleViewChanged','CssRuleViewCSSLinkClicked','transitionend','abort','blocked','complete','error ','success','upgradeneeded','versionchange','DOMLinkAdded','DOMLinkRemoved','DOMMetaAdded','DOMMetaRemoved','DOMWillOpenModalDialog','DOMModalDialogClosed','unload','DOMAttributeNameChanged','DOMAttrModified','DOMCharacterDataModified','DOMContentLoaded','DOMElementNameChanged','DOMNodeInserted','DOMNodeInsertedIntoDocument','DOMNodeRemoved','DOMNodeRemovedFromDocument','DOMSubtreeModified','drag','dragdrop','dragend','dragenter','dragexit','draggesture','dragleave','dragover','dragstart','drop','invalid','overflow','underflow','DOMAutoComplete','command','commandupdate','blur','change','DOMFocusIn','DOMFocusOut','focus','focusin','focusout','reset','submit','DOMFrameContentLoaded','click','contextmenu','DOMMouseScroll','dblclick','gamepadconnected','gamepaddisconnected','keydown','keypress','keyup','mousedown','mouseenter','mouseleave','mousemove','mouseout','mouseover','mouseup','mousewheel','pointerlockchange','pointerlockerror,wheel','audioprocess','canplay','canplaythrough','durationchange','emptied','ended','ended','loadeddata','loadedmetadata','pause','play','playing','ratechange','seeked','seeking','stalled','suspend','timeupdate','volumechange','waiting','complete','DOMMenuItemActive','DOMMenuItemInactive','disabled','enabled','offline','online','statuschange','connectionInfoUpdate','AlertActive','AlertClose','popuphidden','popuphiding','popupshowing','popupshown','DOMPopupBlocked','afterprint','beforeprint','abort','error','load','loadend','loadstart','progress','progress','timeout','uploadprogress','cached','afterscriptexecute','beforescriptexecute','compassneedscalibration','devicelight','devicemotion','deviceorientation','deviceproximity','orientationchange','userproximity','pagehide','pageshow','popstate','delivered','received','sent','ussdreceived','change','storage','tabviewsearchenabled','tabviewsearchdisabled','tabviewframeinitialized','tabviewshown','tabviewhidden','TabOpen','TabClose','TabSelect','TabShow','TabHide','TabPinned','TabUnpinned','SSTabClosing','SSTabRestoring','SSTabRestored','visibilitychange','compositionend','compositionstart','compositionupdate','copy','cut','paste','select','touchcancel','touchend','touchenter','touchleave','touchmove','touchstart','checking','downloading','error','noupdate','obsolete','updateready','broadcast','CheckboxStateChange','hashchange','input','RadioStateChange','readystatechange','ValueChange','fullscreen','fullscreenchange','fullscreenerror','resize','scroll','sizemodechange','message','DOMWindowCreated','DOMWindowClose','DOMTitleChanged','SSWindowClosing','SSWindowStateReady','SSWindowStateBusy','close','beforeunload','localized','open','show']

images = ["data:image/gif;base64,R0lGODlhKgANALMAAMwAAP///+FiX9stAN4ZAMwzANIIAOEeAOcmAN9/X9gRANQwAOQiAONkX+R9X////yH5BAEHAA8ALAAAAAAqAA0AAASSMKRCq704a5qCW2AojmRpis6grmzrvmoAr0htB7it7/zd/4iAD0gUEhlIZCCZxDWdTgZuKVVSmYyDdjvdagPf8AEMHpvLZS9hzWYH1lO4nPB+0+9Te3uvr8/tgHd4gntrCoeIU4k4hwGNj4oKjpKMiIcGmJmam5yaAZ2gBg2hpJufpZkNAQIAra6vsLGys60CAREAOw==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAANlBMVEX///+6v8a2u8PKztPAxcu7wMf4+fm0ucHb3eHw8fPX2t77/PzN0dXl5+n4+PnDx83g4uXr7e6d8ylIAAABQklEQVRYhe2U6a6DIBCFy8ywq8D7v2xZa29MbgZN+ouviUWTc5gNXq/FYrH4DQYR3RMD1KDDPelRnxsIwLpSk3pDtkYwDCzNZWIAyPqIUgghMXpLABMO3oEQQAHyXwYgUPngPNtg0+KKRrZBdoCLHib0r1r+Hj7c0nusOpC4oWwWYcpgb3osvbTNTEf27odSNQMIx1c4gEodrCiiJGp5p/4ltVciaTgGZvSQPvuFXknNGiYzWnieomHAm0ane+vkOECKWk2BF0FyxtQtYWQcq56Mcelf5XcarQ57c5T88AdWtqRdssmJvz3h0UcZ6q+util9osthopkIdnk9jaMiHHzQtWvnUS5L3SebQ77BctUj9fQp5isK2i3Jdigzc+yhJL+rMl1T+uzQhui81s2cfvC51u+ygRSPDGzhicFisVj8kDdrEQhDYinVjgAAAABJRU5ErkJggg==","data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3OjoxIys/RD84NzQ5OjQBCgoKDQwNGg8PGjclHyU3Nzc3Nzc0NDc3NDc3NzQ3Nzc0Nzc0LC83Nzc3Nyw4Nyw0NDc0NDM3NDg0NzA0Nyw3N//AABEIACAAIAMBEQACEQEDEQH/xAAaAAABBQEAAAAAAAAAAAAAAAADAAIEBQYH/8QALBAAAgICAgECBAUFAAAAAAAAAQIDBAURACESIjETQXGCU2GBsdEGFRYzUf/EABkBAAMBAQEAAAAAAAAAAAAAAAABAwIEBf/EACMRAAICAgIABwEAAAAAAAAAAAEDAAIREiExBDIzQWGB8CL/2gAMAwEAAhEDEQA/AO374QxEzBQSTrhmGD7SsfMQfFMNRJLko6KwLsKfzY6UfQnfFmVCTqNuIGWS3LNFDZuQUTNv4cMbBpW130zdewOwFP15naa1oKkkZx7w1yfIszR0oIol13ZsPsDr3Cjs/qV5q3ES6LHmOfiZbM3sPjnYZy9YzFwRiVaxHjGVJABCDSEd778joE965G1hPRSlreFV1Ei/5Nk8llYsViYo4KdisrxGJfWsbKQX3sBSj6Gtd6PMC5Jlj4Na1ljD/Q7/AHzItA5LI2sVkakFiXJ0d1cgu/DyClvEl2BB34ny136tdb4+47hK63Xbq3RgMrkMpaXK4PMPLYnmVvhJAyMish8wND1DyAA0d/xgk2lVJQNHp6EdU/o/J5elVW/GKKQoyRvIfJxCw8kXXvtG60dbBI+Q4BOw5iPj1pZa9OSZoMVTwuNmh/tcc+VuVmkWMwEFYg52ylthQAT7EkjfLUricDnNdksOoMvkr5S36rk6VIvwa3qb9XI/YD68oROTdVfLzGWUuG7I2PxlaOY+k3LBHY18gu2b/nZX24iBCpoa82+olwItEtmbkt8kf6n0kI+xff7i3EKQL9fTGJbQxR14xHDGscajSooAAH5AcpiQtfY5J5hPnxxcz//Z","data:image/bmp;base64,Qk2+AAAAAAAAAD4AAAAoAAAAIAAAACAAAAABAAEAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wD/////////////////////////////////////////////////////AAAAAHv7e/57+3v+efoIPnwG67595uu+fe7rvn3u6n5+zhj+ft///n9f//5/P+/+f//v/kcro2J6261eetqtQmbarVpfPWNmX///fmP//35////+AAAAAA==","data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSI0MnB4IiBoZWlnaHQ9IjQzcHgiIHZpZXdCb3g9IjAgMCA0MiA0MyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNDIgNDMiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Y2lyY2xlIGZpbGw9IiNDODI3MjgiIGN4PSIyMSIgY3k9IjIxLjUiIHI9IjE2Ljc0OSIvPgo8cG9seWxpbmUgZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIxNi4xNTMsMTMuNSAyOS44NDksMjIgMTYuMTUxLDI5LjUgIi8+Cjwvc3ZnPgo=","data:image/webp;base64,UklGRioCAABXRUJQVlA4WAoAAAAQAAAAJwAAJwAAQUxQSDwAAAABb6AokqQ2ejl8z0UAVBARkZ+OvSb0UkUoiiQ1coEO/KAFcmiJqWv0wDuviP6nHnJZFPzymzeV+cgNAABWUDggyAEAADAJAJ0BKigAKAA+bTKVR6QioiEqtVgAgA2JaQAOnzE7x//ks/7kFm2zLcGxI1GLVSW8Umr2i3uN3JbrEMVLqRifdJn3uEVAgaUMP51iuXYzjgAA/cfv/1SIF4fPhDBwpxxLtavgXT16mX4kBTD9lpW0tRurTPXrScZG+AypRV5P5s58CSe3H9R6AIqyzd/G/fybv7U+oeNijTZJIfIUUMqH+PrzHKQE2rCmTTx4pOv31v3fBv9TJthnTZX/Caf/3+Dr6fw+jWJX/6jdMoCXIb2vhbhd7ThvRviwg5UBNlwNUgyI/oIE7JK/7Um7ZS/9aHhu1zAgQqIDH4gY6ZjIks+5O1IlThbM1lYY9800d7YJdkIsv6AEl8i+dEGOmoKDwXjDW80++ibZvFr4sEVfdWNwE/Asghbu8tlOh+2zHKxjcI0wZDSj8SXkRs3QQ/rrvscDmuyVnbjqA7Fff9n3jSQHP5SeLg6p+t6DdGTHy4Wy8vLoJCQU37d0Yea/KilxhDHf/0PdUwPg1+T9hj9tOUxqf8IsM9oOWbDQ1Dz7LDFLTZy34LXLU9mCcfQI12bHnr5Zg8Q2hrA7/VN/5JFizlxKQhlZzkAAAA==","data:image/tiff;base64,/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAB8AIAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APzp8P8AwE8f+LfBg8VaH4Zuta0Pe0Zn09kndXU4KtEjGQHvgr056c1xur6HqXh+8a01TT7rTbpfvQXcLROOccqwB6g/lXtv7In7UGp/s3+PVmklkufCeokRapp5XzExxiVUJwWGBn1XI6hSP1u8S2vw68e/DS48SNbR3OmlLd5LVIUu4JvOdViZVY4ZWLjBBAA5xXrww+Enh3iJ1HBRXvN6peb2aXnqfG4nM80w2YRwUKCquo7U0m4yld25Ve6cl292+jXW34TaL4e1XxLeC00jTLzVbsgkQWUDzSEf7qgmut8U/Anx54H8JxeJPEPhu50TSJZRBHLfskUjuc4URMwcn5Sfu9BnpX7WWM3w7+GPwzi8StBFDYxwSyRwTQpbwW6wsyOWRDgKu0jqc4GK/H/9qj9pHVv2kPiE+qTvJBoFiDb6VYEBBFFn75QHaHbAzjoABzjJKmHwsMOq8KjmpfC1on5rdteel+nUeDzPMsXj5YSpQVL2btUTbk4v+VtcqUn296y1fS/i9foh/wAEwfi1Z+LRqvwd8VyRXmn3Kedp8F0ch0Dh3iGf7rqjKBz87kdK/O+um+GXxB1T4VePtC8W6NJ5epaTdLcRZ6MBwyH2ZSyn2NedTlH3qdTWE04yXk9H/n6n0GOoTrU4zoPlq02pwa0alF3Vn07X7Nn2n/wU7+Ltlpmu6f8ACLwq62ekaUivf29sdqj+KOE88/MzyEHrujPavgatvxt4w1L4geLtX8R6xMbjU9TuXuZ3J43Meg9ABgAdgAKxKdaanJKGkYpJLslov67hgcNLD0n7V81SbcpvduUneTb666LySP/Z","data:image/jp2;base64,AAAADGpQICANCocKAAAAFGZ0eXBqcDIgAAAAAGpwMiAAAAAtanAyaAAAABZpaGRyAAAAIAAAACAAAQcHAQAAAAAPY29scgEAAAAAABEAAAAAanAyY/9P/1EAKQAAAAAAIAAAACAAAAAAAAAAAAAAACAAAAAgAAAAAAAAAAAAAQcBAf9SAAwAAAABAAUEBAAA/1wAIyJ3Hnbqdup2vG8AbwBu4mdMZ0xnZFADUANQRVfSV9JXYf9kABEAAUtha2FkdS12NS4yLjH/kAAKAAAAAAPLAAH/k8feBAChwB8AMD7wKD7AIAEAbwcXwfeCx+oPB94MAtLFvKcPgRwH+BUjD/4x/AS8x+QpH5C0PvEwCet81hwawKOi92ahFwZS8vBe3BcHNFKFxn02psXCJKp/A4IKLITBUOMsDwPV+359CmeDQsoUiOKNAf4VNt+STfki35IQQFpM0bt9J1uAllkZ+MlMjwleSca+GOFweW4K8NTnaww0b5jPO8tQpX3DOxwDecGxwFNB4Q6BK1xA4uJSn5FR9gQDvSaVknjUwx0aBfBqiYwK/ZpgEOUmKo0W64rj4fgJYm3o5NT+ZbyndogO6GFAF8FNi2ECyX/uPgX7cpjZ2dBQJoG6M51Lcy004HylKRXzk+aG2B84o4t7H3mxpXZzBWnyeZeuavK1CwFA6bJ4KORHbMdcQErRXTR5iMUwTCAPrRDWUCKlghp89c7rzNyxh9+Vu35WnPvrcAnpl1107PJWbOWYG6zPpRf68tVjPE2M5uCiNMk3onJJnkSGo42VihhL9MVSySiH5euKnUU4lXmd6sWDcByuQk7AQ14T7bhSfKQOV3J6cGGrwTutEGnNGqgNx2QAIR3fS2yQTi0hF9QPacFfbr888jJjObMutpw99XBt8Gbrxg4auabFl/jSvaNHWJwKKu7Mtp5NJDP2lhoJ/ovY7UeytQIH+cW667yn1JzOWFob0AnYO59hBx/FnvwNFWPUXaXbUNk70rocCFEnSUz2tpQGaIq/DGCGBxV3e4meMq92HP2HgYEp8V1DWGukPjC+7Ui2MxInT8+vy98hob6U2IlVn7nl4vYM+JdwioqrfdnpunC2+LtFaWNTP30B8MaMYwTtCX+IJyEERt/U9OkWFzCFjWvQDBpQR0CZez/mLpKRYEsqrd37/ey8k3KY4zSHuUO7kJ8Crs48Gv83abmTB2kbwioGrT7KxbXtIjrFiHK8dvz3nuf6EGgpeUNtfAaTNNVfMi+RE9n23bQM9np4e6sGZqO4gua9rK8flbrqSYDmZeBrjr6Tb0wy5jNzYOv8riaLghiOweVJrJbVhVTaQ2HOJtMpf6aNGxRpoD9uAcsuqG+BPcO0nqNqfyj7+6yp+jnGFjwzubQwi4uO7Rg/LxkG6FcGJdQqKL6OViuRe4VpVBqxmnyUs5AWMvK6Y+7TR1XVGh51upMO4aA8Yq6SLtZ+oKeohGxMMHAQVwLooocBLBALRsYrkXpocXJzcWymB1Gz6LxPJnNo4xjodlbvhx+KenRFjCqdkCDd18/H+9h1VDvZ2sdD2t4KGf/Z","data:image/x-icon;base64,AAACAAEAICAQAAAAAQDoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmZAAAAAAAAAAAAAAAAAAAJmQAAAAAAAAAAAAAAAAAAmZAAAAAAAAAAAAAAAAAAAJmQAAAAAAAAAAAAAAAAAAmZAAAAAAAAAAAAAAAAAAAJmQAAAAAAAAAAAAAAAAAAmZAAAAAAAAAAAAAACQAAAJmQAAAAAAAAAAAAAAmQAAmZAAAAAAAAAAAAAAAJmQAJmQAAAAAAAAAAAAAACZmQmZAAAAAAAAAAAAAAAAmZmZmQAAAAAAAAAAAAAAAJmZmZmZmZmQAAAAAAAAAACZmZmZmZmZAAAAAAAAAAAAmZmZmZmZkAAAAAAAAAAAAJmZmZmZmQAAAAAAAAAAAACZmZmZmZAAAAAAAAAAAAAAmZmZmZkAAAAAAAAAAAAAAJmZmZmQAAAAAAAAAAAAAACZmZmZAAAAAAAAAAAAAAAAmZmZkAAAAAAAAAAAAAAAAJmZmQAAAAAAAAAAAAAAAACZmZAAAAAAAAAAAAAAAAAAmZkAAAAAAAAAAAAAAAAAAJmQAAAAAAAAAAAAAAAAAACZAAAAAAAAAAAAAAAAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////+P////B////wf///4P///+D////B///fwf//z4P//8eD///DB///wQf//8AP///AAA//wAAf/8AAP//AAH//wAD//8AB///AA///wAf//8AP///AH///wD///8B////A////wf///8P////H////z////9//////////w=="]

INT_NUMS = [-1,0,255,254,-128,-129,127,126,65535,-32768,-32769,32767,32766,4294967295,4294967294,-2147483648,-2147483649,2147483647,2147483646]//,-3.4028E+38,-3.4028E+39,3.4028E+38,3.4028E+37]//,-1.7977E+308,-1.7977E+309,1.7977E+308,1.7977E+307]

POS_INT_NUMS = [0,255,254,127,126,65535,32767,32766,4294967295,4294967294,2147483647,2147483646]

NOZ_INT_NUMS = [-1,255,254,-128,-129,127,126,65535,-32768,-32769,32767,32766,4294967295,4294967294,-2147483648,-2147483649,2147483647,2147483646]

observeFunc = function() {
	var prob = 100
	var returnString = "{"
	for (var i = 0;i<MutationObserverInterface.MutationObserverInit.length;i++){
		returnString += MutationObserverInterface.MutationObserverInit[i][0]+":"+arrayWalk(MutationObserverInterface.MutationObserverInit[i][1])+", "
	}
	returnString+="}"
	return ra([ra(createdElements).objName,ra(createdText).objName])+","+returnString
	
}

randUni = function () {
	var charset = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
	var returnString= '\\u';
	for (var i = 0; i <4; i++) {
		returnString += ra(charset)
	}
	return returnString
	
}
rnd4Lengths = function() {
	var prob=rint(125);
	if (prob>75){
		return arrayWalk([distanceValue3,function() {return rint(ra(INT_NUMS))}]) + ' ' + arrayWalk([distanceValue3,function() {return rint(ra(INT_NUMS))}]) + ' ' + arrayWalk([distanceValue3,function() {return rint(ra(INT_NUMS))}]) + ' ' + arrayWalk([distanceValue3,function() {return rint(ra(INT_NUMS))}])
	}
	else if(prob>50&&prob<75){
		return arrayWalk([distanceValue3,function() {return rint(ra(INT_NUMS))}]) + ' ' + arrayWalk([distanceValue3,function() {return rint(ra(INT_NUMS))}]) + ' ' + arrayWalk([distanceValue3,function() {return rint(ra(INT_NUMS))}])
	}
	else if (prob>25&&prob<50){
		return arrayWalk([distanceValue3,function() {return rint(ra(INT_NUMS))}]) + ' ' + arrayWalk([distanceValue3,function() {return rint(ra(INT_NUMS))}])
	}
	else{
		return arrayWalk([function() {return rint(ra(INT_NUMS))}])
	}
}

rnd4Lengthsinset = function() {
	var prob=rint(125);
	if (prob>75){
		return distanceValue4() + ' ' + distanceValue4() + ' ' + distanceValue4() + ' ' + distanceValue4()
	}
	else if(prob>50&&prob<75){
		return distanceValue4() + ' ' + distanceValue4() + ' ' + distanceValue4()
	}
	else if (prob>25&&prob<50){
		return distanceValue4() + ' ' + distanceValue4()
	}
	else{
		return distanceValue4()
	}
}

posrnd4Lengths = function() {
	var prob=rint(125);
	if (prob>75){
		return arrayWalk([posdistanceValue2,function() {return rint(ra(POS_INT_NUMS))}]) + ' ' + arrayWalk([posdistanceValue2,function() {return rint(ra(POS_INT_NUMS))}]) + ' ' + arrayWalk([posdistanceValue2,function() {return rint(ra(POS_INT_NUMS))}]) + ' ' + arrayWalk([posdistanceValue2,function() {return rint(ra(POS_INT_NUMS))}])
	}
	else if(prob>50&&prob<75){
		return arrayWalk([posdistanceValue2,function() {return rint(ra(POS_INT_NUMS))}]) + ' ' + arrayWalk([posdistanceValue2,function() {return rint(ra(POS_INT_NUMS))}]) + ' ' + arrayWalk([posdistanceValue2,function() {return rint(ra(POS_INT_NUMS))}])
	}
	else if (prob>25&&prob<50){
		return arrayWalk([posdistanceValue2,function() {return rint(ra(POS_INT_NUMS))}]) + ' ' + arrayWalk([posdistanceValue2,function() {return rint(ra(POS_INT_NUMS))}])
	}
	else{
		return arrayWalk([posdistanceValue2,function() {return rint(ra(POS_INT_NUMS))}])
	}
}

posrnd4Lengthsflex = function() {
	var prob=rint(125);
	if (prob>75){
		return posdistanceValueflex() + ' ' + posdistanceValueflex() + ' ' + posdistanceValueflex() + ' ' + posdistanceValueflex()
	}
	else if(prob>50&&prob<75){
		return posdistanceValueflex() + ' ' + posdistanceValueflex() + ' ' + posdistanceValueflex()
	}
	else if (prob>25&&prob<50){
		return posdistanceValueflex() + ' ' + posdistanceValueflex()
	}
	else{
		return posdistanceValueflex()
	}
}

posrnd4Lengthsnoperc = function() {
	var prob=rint(125);
	if (prob>75){
		return arrayWalk([posdistanceValue1,function() {return rint(ra(POS_INT_NUMS))}]) + ' ' + arrayWalk([posdistanceValue1,function() {return rint(ra(POS_INT_NUMS))}]) + ' ' + arrayWalk([posdistanceValue1,function() {return rint(ra(POS_INT_NUMS))}]) + ' ' + arrayWalk([posdistanceValue1,function() {return rint(ra(POS_INT_NUMS))}])
	}
	else if(prob>50&&prob<75){
		return arrayWalk([posdistanceValue1,function() {return rint(ra(POS_INT_NUMS))}]) + ' ' + arrayWalk([posdistanceValue1,function() {return rint(ra(POS_INT_NUMS))}]) + ' ' + arrayWalk([posdistanceValue1,function() {return rint(ra(POS_INT_NUMS))}])
	}
	else if (prob>25&&prob<50){
		return arrayWalk([posdistanceValue1,function() {return rint(ra(POS_INT_NUMS))}]) + ' ' + arrayWalk([posdistanceValue1,function() {return rint(ra(POS_INT_NUMS))}])
	}
	else{
		return arrayWalk([posdistanceValue1,function() {return rint(ra(POS_INT_NUMS))}])
	}
}

rnd4nums = function() {
	var prob=rint(125);
	if (prob>75){
		return arrayWalk([percentValue,function() {return rint(ra(INT_NUMS))}]) + ' ' + arrayWalk([percentValue,function() {return rint(ra(INT_NUMS))}]) + ' ' + arrayWalk([percentValue,function() {return rint(ra(INT_NUMS))}]) + ' ' + arrayWalk([percentValue,function() {return rint(ra(INT_NUMS))}])
	}
	else if(prob>50&&prob<75){
		return arrayWalk([percentValue,function() {return rint(ra(INT_NUMS))}]) + ' ' + arrayWalk([percentValue,function() {return rint(ra(INT_NUMS))}]) + ' ' + arrayWalk([percentValue,function() {return rint(ra(INT_NUMS))}])
	}
	else if (prob>25&&prob<50){
		return arrayWalk([percentValue,function() {return rint(ra(INT_NUMS))}]) + ' ' + arrayWalk([percentValue,function() {return rint(ra(INT_NUMS))}])
	}
	else{
		return arrayWalk([percentValue,function() {return rint(ra(INT_NUMS))}])
	}
}

posrnd4nums = function() {
	var prob=rint(125);
	if (prob>75){
		return arrayWalk([pospercentValue,function() {return rint(ra(POS_INT_NUMS))}]) + ' ' + arrayWalk([pospercentValue,function() {return rint(ra(POS_INT_NUMS))}]) + ' ' + arrayWalk([pospercentValue,function() {return rint(ra(POS_INT_NUMS))}]) + ' ' + arrayWalk([pospercentValue,function() {return rint(ra(POS_INT_NUMS))}])
	}
	else if(prob>50&&prob<75){
		return arrayWalk([pospercentValue,function() {return rint(ra(POS_INT_NUMS))}]) + ' ' + arrayWalk([pospercentValue,function() {return rint(ra(POS_INT_NUMS))}]) + ' ' + arrayWalk([pospercentValue,function() {return rint(ra(POS_INT_NUMS))}])
	}
	else if (prob>25&&prob<50){
		return arrayWalk([pospercentValue,function() {return rint(ra(POS_INT_NUMS))}]) + ' ' + arrayWalk([pospercentValue,function() {return rint(ra(POS_INT_NUMS))}])
	}
	else{
		return arrayWalk([pospercentValue,function() {return rint(ra(POS_INT_NUMS))}])
	}
}


backgroundAtrribute = function(){
	var prob = rint(30)
	var color  = getRandomColor()
	var repeat = ra(["repeat","repeat-x","repeat-y","no-repeat"])
	var attachment = ra(["scroll","fixed","local"])
	var origin = ra(["padding-box","border-box","content-box"])
	var image = retCSSimageURI(2000)
	var clip = ra(["border-box","padding-box","content-box"])
	var position = arrayWalk([distanceValue4,'top','center','bottom','right','left','bottom right','bottom left','bottom center','top right','top left','top center',function() {return distanceValue4()+' '+distanceValue4()}])
	var returnString = ''
	returnString = color+' '+position+' '+repeat+' '+origin+' '+clip+' '+attachment+' '+image
	return returnString
}

// backgroundAtrribute = function(){
// 	var prob = rint(30)
// 	var color  = getRandomColor()
// 	var repeat = ra(["repeat","repeat-x","repeat-y","no-repeat","inherit"])
// 	var attachment = ra(["scroll","fixed","inherit"])
// 	var image = retimageURI(2000)
// 	var position = arrayWalk([distanceValue(),'top','center','bottom','right','left','bottom right','bottom left','bottom center','top right','top left','top center'])
// 	var returnString = ''
// 	var arr = [color,repeat,attachment,position,'',image]
// 	for(var i=0;i<rint(arr.length)+1;i++){
// 		returnString+=ra(arr)+' '
// 	}
// 	return returnString
// }

broderAttributes = function() {
	var prob=rint(30)
	var color = ra([getRandomColor(),''])
	var borderWidth = ra([pospxValue(),"thin","thick","medium",''])
	var borderStyle = ra(["none","hidden","dotted","dashed","solid","double","groove","ridge","inset","outset"])
	var returnString = ''
	var arr = [color,borderWidth,borderStyle]
	returnString += borderStyle+' '+color+' '+borderWidth
	return returnString	
}

// retmediaURI = function(max) {
// 	var uris = ['http://','https://','']
// 	var exts = ['.jpg','.svg','.jpeg','.gif','.png','.bmp','.au','.mpg','.avi','.flv','.mp3','.mp4']
// 	var strings = [string(rint(max)),string(rint(max))+'/'+string(rint(max))]
// 	var returnString = ''
// 	returnString += 'url('+ra(uris)+ra(strings)+ra(exts)+')'
// 	return returnString
// }

retmediaURI = function(max) {
	var returnString = ''
	// var exts = ['http://www.elsherei.com/wp-content/uploads/2013/01/mark-of-the-ninja-header-602x2501.jpg','http://img2.wikia.nocookie.net/__cb20091120172618/logopedia/images/2/21/The_CW_logo_2006.svg','http://img2.wikia.nocookie.net/__cb20141112220504/lego/images/5/56/Heart_of_cavora_proof.jpeg','http://img3.wikia.nocookie.net/__cb20060731201839/gtawiki/images/8/85/GTA_Logo.gif','http://vignette3.wikia.nocookie.net/residentevil/images/7/75/Damnation_Tyrant_wallpaper_cutout.png/revision/latest?cb=20130821193013','http://www.fileformat.info/format/bmp/sample/43ab63cb34cc4486b09f559a225ce28e/BLK.BMP','http://www.fileformat.info/format/mpeg/sample/567fd6a0e0da4a8e81bdeb870de3b19c/DELTA.MPG','.avi','http://elsherei.com/pub.flv','http://tdl.org/txlor-dspace/bitstream/handle/2249.3/12/ARendings.mp3','http://techslides.com/demos/sample-videos/small.mp4','http://www.elsherei.com/wp-content/uploads/Stack%20Based%20Buffer%20Overflows.pdf','http://techslides.com/demos/sample-videos/small.webm','http://techslides.com/demos/sample-videos/small.ogv','http://techslides.com/demos/sample-videos/small.3gp']
	var exts = ["/images/1.jpg","/images/10.mp3","/images/11.avi","/images/12.mp4","/images/13.pdf","/images/14.webm","/images/15.ogv","/images/16.3gp","/images/2.svg","/images/3.gif","/images/4.png","/images/5.BMP","/images/6.jpeg","/images/7.MPG","/images/8.JPG","/images/9.flv"]
	returnString += ra(exts)
	return returnString
}

retCSSmediaURI = function(max) {
	var returnString = ''
	var exts = ["/images/1.jpg","/images/10.mp3","/images/11.avi","/images/12.mp4","/images/13.pdf","/images/14.webm","/images/15.ogv","/images/16.3gp","/images/2.svg","/images/3.gif","/images/4.png","/images/5.BMP","/images/6.jpeg","/images/7.MPG","/images/8.JPG","/images/9.flv"]
	returnString += 'url('+ra(exts)+')'
	return returnString
}

// retcursorURI = function(max) {
// 	var uris = ['http://','https://','']
// 	var exts = ['.cur','.csr']
// 	var strings = [string(rint(max)),string(rint(max))+'/'+string(rint(max))]
// 	var returnString = ''
// 	returnString += 'url('+ra(uris)+ra(strings)+ra(exts)+')'
// 	return returnString
// }

retcursorURI = function(max) {
	var uris = ['http://','https://','']
	var returnString = ''
	returnString += 'url('+ra(images)+')'
	return returnString
}

retmultiplecurs = function() {
	var num= rint(6)+1
	var returnString = ''
	while(num--){
		returnString += retcursorURI(2000) +','
	}
	returnString += retcursorURI(2000)
	return returnString
}

// retimageURI = function(max) {
// 	var uris = ['http://','https://','']
// 	var exts = ['.jpg','.svg','.jpeg','.gif','.png','.bmp']
// 	var strings = [string(rint(max)),string(rint(max))+'/'+string(rint(max))]
// 	var returnString = ''
// 	returnString += 'url('+ra(uris)+ra(strings)+ra(exts)+')'
// 	return returnString
// }

retimageURI = function(max) {
	var uris = ['http://','https://','']
	// var exts = ['http://www.elsherei.com/wp-content/uploads/2013/01/mark-of-the-ninja-header-602x2501.jpg','http://img2.wikia.nocookie.net/__cb20091120172618/logopedia/images/2/21/The_CW_logo_2006.svg','http://img2.wikia.nocookie.net/__cb20141112220504/lego/images/5/56/Heart_of_cavora_proof.jpeg','http://img3.wikia.nocookie.net/__cb20060731201839/gtawiki/images/8/85/GTA_Logo.gif','http://vignette3.wikia.nocookie.net/residentevil/images/7/75/Damnation_Tyrant_wallpaper_cutout.png/revision/latest?cb=20130821193013','http://www.fileformat.info/format/bmp/sample/43ab63cb34cc4486b09f559a225ce28e/BLK.BMP']
	// var exts = ["/images/1.jpg","/images/2.svg","/images/3.gif","/images/4.png","/images/5.BMP","/images/6.jpeg","/images/8.JPG"]
	var returnString = ''
	returnString += ra(images)
	return returnString
}

retCSSimageURI = function(max) {
	// var uris = ['http://','https://','']
	// var exts = ["/images/1.jpg","/images/2.svg","/images/3.gif","/images/4.png","/images/5.BMP","/images/6.jpeg","/images/8.JPG"]
	var returnString = ''
	returnString += 'url('+ra(images)+')'
	return returnString
}

// fontAtrribute = function(){
// 	var prob = rint(30)
// 	var style  = ra(["normal","italic","oblique","inherit"])
// 	var variant = ra(["normal","small-caps","inherit"])
// 	var weight = ra(["normal","bold","bolder","lighter",100,200,300,400,500,600,700,800,900,"inherit",randoms()])
// 	var size = ra(["xx-small","x-small","small","medium","large","x-large","xx-large","larger","smaller",distanceValue(),distanceValue()])
// 	var height = ra(["normal",randoms(),rint(ra(INT_NUMS)),distanceValue(),distanceValue()])
// 	var sizeHeight = size+'/'+height
// 	var fontFamily = ra(["'Trebuchet MS'", "'Lucida Grande'", "'Lucida Sans Unicode'", "'Lucida Sans'", "Tahoma", "Arial", "'Helvetica Neue'", "Helvetica","'Arial Black'", "'Arial Bold'", "Gadget","'Arial Narrow'","'Arial Rounded MT Bold'", "'Helvetica Rounded'","'Avant Garde'", "Avantgarde", "'Century Gothic'", "CenturyGothic", "AppleGothic","Calibri", "Candara", "Segoe", "'Segoe UI'", "Optima","'Franklin Gothic Medium'", "'Franklin Gothic'", "'ITC Franklin Gothic'","Futura", "'Trebuchet MS'","Geneva","Verdana","'Gill Sans'", "'Gill Sans MT'","Impact", "Haettenschweiler", "'Franklin Gothic Bold'", "Charcoal", "'Helvetica Inserat'", "'Bitstream Vera Sans Bold'","Frutiger", "'Frutiger Linotype'", "'Dejavu Sans'", "'Helvetica Neue'","Baskerville", "'Baskerville Old Face'", "'Hoefler Text'", "Garamond", "'Times New Roman'","'Big Caslon'", "'Book Antiqua'", "'Palatino Linotype'", "Georgia","'Bodoni MT'", "Didot", "'Didot LT STD'", "'Hoefler Text'","'Book Antiqua'", "Palatino", "'Palatino Linotype'", "'Palatino LT STD'","'Calisto MT'", "'Bookman Old Style'", "Bookman", "'Goudy Old Style'", "'Hoefler Text'", "'Bitstream Charter'","Cambria","'Didot LT STD'", "'Hoefler Text'","'Lucida Bright'","Palatino", "'Palatino Linotype'", "'Palatino LT STD'", "'Book Antiqua'","Perpetua","Rockwell", "'Courier Bold'", "Courier","'Rockwell Extra Bold'", "'Rockwell Bold'","TimesNewRoman","Times","'Andale Mono'", "AndaleMono","Consolas", "monaco","'Lucida Sans Typewriter'", "'Lucida Typewriter'", "'Lucida Console'", "Monaco", "'Bitstream Vera Sans Mono'","Copperplate", "'Copperplate Gothic Light'", "Papyrus","'Brush Script MT'"])
// 	var genericFamily = ra(["serif","sans-serif","cursive","fantasy","monospace"])
// 	var ffgf = fontFamily+','+genericFamily
// 	var returnString = ''
// 	var arr = [style,variant,weight,'']//fontFamily,genericFamily]
// 	var prob = 50
// 	if(prob>35){
// 		returnString += sizeHeight + ' ' + ffgf
// 	}
// 	else {
// 		for(var i=0;i<rint(arr.length)+1;i++){
// 			returnString+=ra(arr)+' '
// 		}
// 		returnString += sizeHeight + ' ' + ffgf
// 	}
// 	return returnString
// }

fontAtrribute = function(){
	var prob = rint(30)
	var style  = ra(["normal","italic","oblique"])
	var variant = ra(["normal","small-caps"])
	var weight = ra(["normal","bold","bolder","lighter","100","200","300","400","500","600","700","800","900",])
	var size = ra(["xx-small","x-small","small","medium","large","x-large","xx-large","larger","smaller",distanceValue(),distanceValue()])
	var height = ra(["normal",posdistanceValue1()])
	var sizeHeight = size+'/'+height
	var fontFamily = ra(['Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', "Tahoma", "Arial", 'Helvetica Neue', "Helvetica",'Arial Black', 'Arial Bold', "Gadget",'Arial Narrow','Arial Rounded MT Bold', 'Helvetica Rounded','Avant Garde', "Avantgarde", 'Century Gothic', "CenturyGothic", "AppleGothic","Calibri", "Candara", "Segoe", 'Segoe UI', "Optima",'Franklin Gothic Medium', 'Franklin Gothic', 'ITC Franklin Gothic',"Futura", 'Trebuchet MS',"Geneva","Verdana",'Gill Sans', 'Gill Sans MT',"Impact", "Haettenschweiler", 'Franklin Gothic Bold', "Charcoal", 'Helvetica Inserat', 'Bitstream Vera Sans Bold',"Frutiger", 'Frutiger Linotype', 'Dejavu Sans', 'Helvetica Neue',"Baskerville", 'Baskerville Old Face', 'Hoefler Text', "Garamond", 'Times New Roman','Big Caslon', 'Book Antiqua', 'Palatino Linotype', "Georgia",'Bodoni MT', "Didot", 'Didot LT STD', 'Hoefler Text','Book Antiqua', "Palatino", 'Palatino Linotype', 'Palatino LT STD','Calisto MT', 'Bookman Old Style', "Bookman", 'Goudy Old Style', 'Hoefler Text', 'Bitstream Charter',"Cambria",'Didot LT STD', 'Hoefler Text','Lucida Bright',"Palatino", 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua',"Perpetua","Rockwell", 'Courier Bold', "Courier",'Rockwell Extra Bold', 'Rockwell Bold',"TimesNewRoman","Times",'Andale Mono', "AndaleMono","Consolas", "monaco",'Lucida Sans Typewriter', 'Lucida Typewriter', 'Lucida Console', "Monaco", 'Bitstream Vera Sans Mono',"Copperplate", 'Copperplate Gothic Light', "Papyrus",'Brush Script MT'])
	var genericFamily = ra(["serif","sans-serif","cursive","fantasy","monospace"])
	var ffgf = fontFamily+','+genericFamily
	var returnString = ''
	var arr = [style,variant,weight]//fontFamily,genericFamily]
	var prob = 50
	if(prob>35){
		returnString += arrayWalk([sizeHeight,distanceValue]) + ' ' + ffgf
	}
	else {
		for(var i=0;i<rint(arr.length)+1;i++){
			returnString+=arr[i]+' '
		}
		returnString += arrayWalk([sizeHeight,distanceValue]) + ' ' + ffgf
	}
	return returnString
}

returnMultipleFamilies = function() {

	var num= rint(6)+1
	var returnString = ''
	while(num--){
		var fontFamily = ra(['Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Tahoma', 'Arial', 'Helvetica Neue', 'Helvetica','Arial Black', 'Arial Bold', 'Gadget','Arial Narrow','Arial Rounded MT Bold', 'Helvetica Rounded','Avant Garde', 'Avantgarde', 'Century Gothic', 'CenturyGothic', 'AppleGothic','Calibri', 'Candara', 'Segoe', 'Segoe UI', 'Optima','Franklin Gothic Medium', 'Franklin Gothic', 'ITC Franklin Gothic','Futura', 'Trebuchet MS','Geneva','Verdana','Gill Sans', 'Gill Sans MT','Impact', 'Haettenschweiler', 'Franklin Gothic Bold', 'Charcoal', 'Helvetica Inserat', 'Bitstream Vera Sans Bold','Frutiger', 'Frutiger Linotype', 'Dejavu Sans', 'Helvetica Neue','Baskerville', 'Baskerville Old Face', 'Hoefler Text', 'Garamond', 'Times New Roman','Big Caslon', 'Book Antiqua', 'Palatino Linotype', 'Georgia','Bodoni MT', 'Didot', 'Didot LT STD', 'Hoefler Text','Book Antiqua', 'Palatino', 'Palatino Linotype', 'Palatino LT STD','Calisto MT', 'Bookman Old Style', 'Bookman', 'Goudy Old Style', 'Hoefler Text', 'Bitstream Charter','Cambria','Didot LT STD', 'Hoefler Text','Lucida Bright','Palatino', 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua','Perpetua','Rockwell', 'Courier Bold', 'Courier','Rockwell Extra Bold', 'Rockwell Bold','TimesNewRoman','Times','Andale Mono', 'AndaleMono','Consolas', 'monaco','Lucida Sans Typewriter', 'Lucida Typewriter', 'Lucida Console', 'Monaco', 'Bitstream Vera Sans Mono','Copperplate', 'Copperplate Gothic Light', 'Papyrus','Brush Script MT'])
		var genericFamily = ra(["serif","sans-serif","cursive","fantasy","monospace"])
		returnString += fontFamily +','
	}
	returnString += genericFamily
	// returnString += ra([fontFamily,genericFamily])
	return returnString
}

listStyleAttribute = function() {
	var prob = rint(30)
	var styleType  = ra(["disc","circle","square","decimal","decimal-leading-zero","lower-roman","upper-roman","lower-greek","lower-alpha","lower-latin","upper-alpha","upper-latin","hebrew","armenian","georgian","cjk-ideographic","hiragana","katakana","hiragana-iroha","katakana-iroha","none"])
	var stylePosition = ra(["inside","outside"])
	var styleImage = ra([retCSSimageURI(2000),"none"])
	var returnString = ''
	returnString+=styleType+' '+stylePosition+' '+styleImage
	return returnString
}

marginAttribute = function() {
	var returnString = ''
	for (var i=0;i<rint(4)+1;i++){
		returnString+=arrayWalk([distanceValue3,function() {return rint(ra(INT_NUMS))}])+' '
	}
	return returnString
}

outlineAttribute = function() {
	var returnString = ''
	var color = ra([getRandomColor(),"invert"])
	var style = ra(["none","dotted","dashed","solid","double","groove","ridge","inset","outset"])//,"hidden"
	var width = ra([posdistanceValueblur(),"thin","thick","medium"])//,rint(ra(POS_INT_NUMS))
	returnString += color + ' ' +style+' '+width
	return returnString
}

paddingAttribute = function() {
	var returnString = ''
	for (var i=0;i<rint(4)+1;i++){
		returnString+=arrayWalk([posdistanceValue1,function() {return rint(ra(POS_INT_NUMS))}])+' '
	}
	return returnString
}


timeValue = function (){
	var types=['ms','s','%','']//ex
   	var prob=rint(100)
   	if(prob>50){
   		var distance = rint(50000)
   		if(rint(2)){distance=distance%100}
   		distance+=ra(types)
	}
	else if(prob>30){
		var distance = [-1,1][Math.random()*2,0]*rint(500) + ra(types)
	}
   else if(prob>25){
      var distance = randoms() + ra(types)
   }
	else{
		var distance = floatValue()*(rint(10)+1)*(rint(10)+1) + ra(types)
	}
	return distance
}

freqValue = function (){
	var types=['ms','s','%','']//ex
   	var prob=rint(100)
   	if(prob>50){
   		var distance = rint(50000)
   		if(rint(2)){distance=distance%100}
   		distance+=ra(types)
	}
	else if(prob>30){
		var distance = [-1,1][Math.random()*2,0]*rint(500) + ra(types)
	}
   else if(prob>25){
      var distance = randoms() + ra(types)
   }
	else{
		var distance = floatValue()*(rint(10)+1)*(rint(10)+1) + ra(types)
	}
   	return distance
}

textShadowAttribute = function (){
	var returnString = ''
	var color = getRandomColor()
	returnString += txtdistanceValue() + ' ' + txtdistanceValue() + ' ' +ra([posdistanceValueblur(),'']) + ' ' +ra([color,''])
	return returnString
}

voiceFamilyAttribute = function(){
	var returnString = ''
	//need some work 
	for (var i=0;i<rint(3)+5;i++){
		var genericFamily = ra(["male","female","child"])
		var voiceFamily = ra(["juliet","romeo","announcer","comedian","carlos"])
		var arr = [genericFamily,voiceFamily,'']
		returnString+=ra(arr)+' '
	}
	return returnString
}	

// retURI = function(max) {
// 	var uris = ['http://','https://','']
// 	var ns = ['http://www.w3.org/2001/XMLSchema#','http://www.w3.org/2000/01/rdf-schema#','http://data.globalchange.gov/gcis.owl','http://purl.org/dc/terms/','http://purl.org/ontology/bibo/','http://www.w3.org/ns/prov#','http://www.w3.org/TR/html4/','http://www.w3.org/TR/html5/','http://www.w3.org/1999/XSL/Transfor','http://www.w3.org/1999/xhtml','http://www.w3.org/2000/svg','']
// 	var strings = [string(rint(max)),string(rint(max))+'/'+string(rint(max))]
// 	var returnString = ''
// 	if(rint(2)){
// 		returnString += ra(uris)+'www'+ra(strings)
// 	}
// 	else {
// 		returnString+=ra(ns)
// 	}
// 	return returnString
// }

retURI = function(max) {
	var ns = ['http://www.w3.org/2001/XMLSchema#','http://www.w3.org/2000/01/rdf-schema#','http://data.globalchange.gov/gcis.owl','http://www.w3.org/ns/prov#','http://www.w3.org/TR/html4/','http://www.w3.org/TR/html5/','http://www.w3.org/1999/XSL/Transfor','http://www.w3.org/1999/xhtml','http://www.w3.org/2000/svg','','http://www.elsherei.com','http://www.google.com']
	var returnString = ''
	returnString+=ra(ns)
	return returnString
}

// retURL = function(max) {
// 	var ns = ['http://www.w3.org/2001/XMLSchema#','http://www.w3.org/2000/01/rdf-schema#','http://data.globalchange.gov/gcis.owl','http://purl.org/dc/terms/','http://purl.org/ontology/bibo/','http://www.w3.org/ns/prov#','http://www.w3.org/TR/html4/','http://www.w3.org/TR/html5/','http://www.w3.org/1999/XSL/Transfor','http://www.w3.org/1999/xhtml','http://www.w3.org/2000/svg','']
// 	var strings = [string(rint(max))+ra([".com",".org",".net"]),string(rint(max))+ra([".com",".org",".net"])+'/'+string(rint(max))]
// 	var returnString = ''
// 	if(rint(2)){
// 		returnString += "www."+ra(strings)
// 	}
// 	else {
// 		returnString+=ra(ns)
// 	}
// 	return returnString
// }

retURL = function(max) {
	var ns = ['http://www.w3.org/2001/XMLSchema#','http://www.w3.org/2000/01/rdf-schema#','http://data.globalchange.gov/gcis.owl','http://purl.org/dc/terms/','http://www.w3.org/ns/prov#','http://www.w3.org/TR/html4/','http://www.w3.org/TR/html5/','http://www.w3.org/1999/XSL/Transfor','http://www.w3.org/1999/xhtml','http://www.w3.org/2000/svg','','http://www.elsherei.com','http://www.google.com']
	var returnString = ''
	returnString+=ra(ns)
	return returnString
}

op = function() {
	var returnString = '';
	var mimeTypes = ['text/html','text/xml','text/plain','text/cmd','text/css','text/csv','text/example','text/javascript','text/rtf','text/vcard','text/vnd.abc',''];
	var rep = ['replace','']
	switch(rint(4)) {
		case 0:
			returnString += '"'+ra(mimeTypes)+'"'
			break;
		case 1:
			returnString += '"'+ra(mimeTypes)+'","'+ra(rep)+'"'
			break;
		case 2:
			returnString += '"'+ra(mimeTypes)+'","'+ra(rep)+'"'
			break;
		case 3:
			returnString += ''
			break;	
	}
	return returnString
	
}


mediaValue = function() {
	var returnString = '';
	var operators = ['and','not',',',''];
	var devices = ['all','aural','braille','handheld','projection','print','screen','tty','tv',''];
	var values = [
		['width',[distanceValue,'']],
		['height',[distanceValue,'']],
		['device-width',[distanceValue,'']],
		['device-height',[distanceValue,'']],
		['orientation',['portrait','landscape','']],
		['aspect-ratio',[function() {return rint(2) ? rint(ra(INT_NUMS))+'/'+rint(ra(INT_NUMS)):randoms()+'/'+randoms()},function() {return rint(2) ? rint(ra(INT_NUMS))+'/'+randoms():randoms()+'/'+rint(ra(INT_NUMS))},'']],
		['device-aspect-ratio',[function() {return rint(2) ? rint(ra(INT_NUMS))+'/'+rint(ra(INT_NUMS)):randoms()+'/'+randoms()},function() {return rint(2) ? rint(ra(INT_NUMS))+'/'+randoms():randoms()+'/'+rint(ra(INT_NUMS))},'']],
		['color',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},'']],
		['color-index',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},'']],
		['monochrome',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},'']],
		['resolution',[function() {return rint(2) ? rint(ra(INT_NUMS))+ra(["dpi","dpcm",""]):randoms()+ra(["dpi","dpcm",""])},'']],
		['scan',["progressive","interlace",""]],
		['grid',[function() {return rint(2) ? rint(ra(INT_NUMS)):randoms()},'']]
	];
	var prefixes = ['min-','max-'];
	var rounds = rint(10)+1;
	while(rounds--){
		var prob = rint(30);
		var operator = ra(operators)
		var device = ra(devices)
		var value = ra(values)
		var prefix = ra(prefixes)
		if (prob>30) {
			returnString += device + ' '
		}
		else if (prob>25) {
			returnString += device + ' '+operator + ' '
		}
		else if (prob>20) {
			returnString += device +' and ('+value[0]+':'+arrayWalk(value[1])+') ' + operator+ ' '
		}
		else if (prob>15) {
			returnString += device +' and ('+value[0]+':'+arrayWalk(value[1])+') ' + ' '
		}
		else if (prob>10) {
			returnString += device +' and ('+prefix+value[0]+':'+arrayWalk(value[1])+') ' + ' '
		}
		else if (prob>5) {
			returnString += device +' and ('+prefix+value[0]+':'+arrayWalk(value[1])+') '+operator+ ' '
		}
	}
	return returnString
	
}

coords = function(max) {
	var returnString = rint(max)
	var num = rint(max)
	while(num--){
		returnString += ',' + rint(max) 
	}
	return returnString
}

dateTime = function() {
	var returnString = '';
	var prob = rint(45);
	if(prob>40) {
		returnString += rint(ra(INT_NUMS)) +'-'+rint(ra(INT_NUMS))+'-'+rint(ra(INT_NUMS))
	}
	else if(prob>35) {
		returnString += randoms()+'-'+randoms()+'-'+randoms()
	}
	else if(prob>30) {
		returnString += rint(ra(INT_NUMS)) +'-'+rint(ra(INT_NUMS))+'-'+rint(ra(INT_NUMS))+'T'+rint(ra(INT_NUMS))+':'+rint(ra(INT_NUMS))+':'+rint(ra(INT_NUMS))
	}
	else if(prob>25) {
		returnString += randoms()+'-'+randoms()+'-'+randoms()+'T'+randoms()+':'+randoms()+':'+randoms()
	}
	else if(prob>20) {
		returnString += rint(ra(INT_NUMS)) +'-'+rint(ra(INT_NUMS))+'-'+rint(ra(INT_NUMS))+' '+rint(ra(INT_NUMS))+':'+rint(ra(INT_NUMS))+':'+rint(ra(INT_NUMS))
	}
	else if(prob>15) {
		returnString += randoms()+'-'+randoms()+'-'+randoms()+' '+randoms()+':'+randoms()+':'+randoms()+'Z'
	}
	else if(prob>10) {
		returnString += rint(ra(INT_NUMS)) +'-'+rint(ra(INT_NUMS))+'-'+rint(ra(INT_NUMS))+' '+rint(ra(INT_NUMS))+':'+rint(ra(INT_NUMS))+':'+rint(ra(INT_NUMS))+'Z'
	}
	else if(prob>5) {
		returnString += rint(ra(INT_NUMS)) +'-'+rint(ra(INT_NUMS))+'-'+rint(ra(INT_NUMS))+' '+rint(ra(INT_NUMS))+':'+rint(ra(INT_NUMS))+':'+rint(ra(INT_NUMS))+'Z+'+rint(ra(INT_NUMS))
	}
	else if(prob>0) {
		returnString += randoms()+'-'+randoms()+'-'+randoms()+' '+randoms()+':'+randoms()+':'+randoms()+'Z+'+randoms()
	}
	return returnString;
}

sndbox = function() {
	var vals = ['allow-forms','allow-pointer-lock','allow-popups','allow-same-origin','allow-scripts','allow-top-navigation',''];
	var sep = ' ';
	var retrunString = ''
	var rounds = rint(50);
	while(rounds--)	{
		retrunString += ra(vals) + sep
	}
	retrunString += ra(vals)
	return retrunString
}

retMultipleLength = function(max) {
	var returnString = '';
	var max = rint(max)
	while(max--){
		switch(rint(7)){
			case 0:
				returnString += "'"+percentValue() + "',";
				break;
			case 1:
				returnString += "'"+rint(ra(INT_NUMS))+'*'+ "',";
				break;
			case 2:
				returnString += "'"+randoms()+'*'+ "',";
				break;
			case 3:
				returnString += "'"+rint(ra(INT_NUMS))+ "',";
				break;
			case 4:
				returnString += "'"+randoms()+ "',";
				break;
			case 5:
				returnString += "'"+distanceValue()+"*',";
				break;
			case 6:
				returnString += "'"+distanceValue() + "',";
				break;
		}
	}
	returnString += arrayWalk(["'"+distanceValue()+"'","'"+distanceValue()+"*'","'"+randoms()+"'","'"+randoms()+"*'",function() {return rint(ra(INT_NUMS))},function() {return "'"+rint(ra(INT_NUMS))+"*'"},"'"+percentValue()+"'","'"+percentValue()+"*'"])
	return returnString
}

mimeTypes = ["video/1d-interleaved-parityfec","video/3gpp","video/3gpp2","video/3gpp-tt","video/BMPEG","video/BT656","video/CelB","video/DV","video/encaprtp","video/example","video/H261","video/H263","video/H263-1998","video/H263-2000","video/H264","video/H264-RCDO","video/H264-SVC","video/iso.segment","video/JPEG","video/jpeg2000","video/mj2","video/MP1S","video/MP2P","video/MP2T","video/mp4","video/MP4V-ES","video/MPV","","video/mpeg4-generic","video/nv","video/ogg","","video/pointer","video/quicktime","video/raptorfec","","video/rtp-enc-aescm128","video/rtploopback","video/rtx","video/SMPTE292M","video/ulpfec","video/vc1","video/vnd.CCTV","video/vnd.dece.hd","video/vnd.dece.mobile","video/vnd.dece-mp4","video/vnd.dece.pd","video/vnd.dece.sd","video/vnd.dece.video","video/vnd.directv-mpeg","video/vnd.directv.mpeg-tts","video/vnd.dlna.mpeg-tts","video/vnd.dvb.file","video/vnd.fvt","video/vnd.hns.video","video/vnd.iptvforum.1dparityfec-1010","video/vnd.iptvforum.1dparityfec-2005","video/vnd.iptvforum.2dparityfec-1010","video/vnd.iptvforum.2dparityfec-2005","video/vnd.iptvforum.ttsavc","video/vnd.iptvforum.ttsmpeg2","video/vnd.motorola.video","video/vnd.motorola.videop","video/vnd-mpegurl","video/vnd.ms-playready.media.pyv","video/vnd.nokia.interleaved-multimedia","video/vnd.nokia.videovoip","video/vnd.objectvideo","video/vnd.radgamettools.bink","video/vnd.radgamettools.smacker","video/vnd.sealed.mpeg1","video/vnd.sealed.mpeg4","video/vnd.sealed-swf","video/vnd.sealedmedia.softseal-mov","video/vnd.uvvu-mp4","video/vnd-vivo","text/1d-interleaved-parityfec","text/cache-manifest","text/calendar","text/css","text/csv","text/directory","text/dns","text/ecmascript","text/encaprtp","","text/example","text/fwdred","text/grammar-ref-list","text/html","text/javascript","text/jcr-cnd","text/mizar","text/n3","text/parameters","","","text/provenance-notation","text/prs.fallenstein.rst","text/prs.lines.tag","text/raptorfec","text/RED","text/rfc822-headers","","text/rtf","text/rtp-enc-aescm128","text/rtploopback","text/rtx","text/SGML","text/t140","text/tab-separated-values","text/troff","text/turtle","text/ulpfec","text/uri-list","text/vcard","text/vnd-a","text/vnd.abc","text/vnd-curl","text/vnd.debian.copyright","text/vnd.DMClientScript","text/vnd.dvb.subtitle","text/vnd.esmertec.theme-descriptor","text/vnd.fly","text/vnd.fmi.flexstor","text/vnd.graphviz","text/vnd.in3d.3dml","text/vnd.in3d.spot","text/vnd.IPTC.NewsML","text/vnd.IPTC.NITF","text/vnd.latex-z","text/vnd.motorola.reflex","text/vnd.ms-mediapackage","text/vnd.net2phone.commcenter.command","text/vnd.radisys.msml-basic-layout","text/vnd.si.uricatalogue","text/vnd.sun.j2me.app-descriptor","text/vnd.trolltech.linguist","text/vnd.wap.si","text/vnd.wap.sl","text/vnd.wap-wml","text/vnd.wap.wmlscript","text/xml","text/xml-external-parsed-entity","multipart/appledouble","multipart/byteranges","","multipart/encrypted","multipart/example","multipart/form-data","multipart/header-set","","","multipart/related","multipart/report","multipart/signed","multipart/voice-message","multipart/x-mixed-replace","model/example","model/iges","","model/vnd.collada+xml","model/vnd-dwf","model/vnd.flatland.3dml","model/vnd.gdl","model/vnd.gs-gdl","model/vnd.gtw","model/vnd.moml+xml","model/vnd.mts","model/vnd.opengex","model/vnd.parasolid.transmit-binary","model/vnd.parasolid.transmit-text","model/vnd.valve.source.compiled-map","model/vnd.vtu","","model/x3d-vrml","model/x3d+fastinfoset","model/x3d+xml","message/CPIM","message/delivery-status","message/disposition-notification","message/example","","message/feedback-report","message/global","message/global-delivery-status","message/global-disposition-notification","message/global-headers","message/http","message/imdn+xml","message/news","","","message/s-http","message/sip","message/sipfrag","message/tracking-status","message/vnd.si.simp","message/vnd.wfa.wsc","image/cgm","image/example","image/fits","image/g3fax","","","image/jp2","","image/jpm","image/jpx","","image/naplps","image/png","image/prs.btif","image/prs.pti","image/pwg-raster","","image/t38","image/tiff","image/tiff-fx","image/vnd.adobe.photoshop","image/vnd.airzip.accelerator.azv","image/vnd.cns.inf2","image/vnd.dece.graphic","image/vnd-djvu","image/vnd.dwg","image/vnd.dxf","image/vnd.dvb.subtitle","image/vnd.fastbidsheet","image/vnd.fpx","image/vnd.fst","image/vnd.fujixerox.edmics-mmr","image/vnd.fujixerox.edmics-rlc","image/vnd.globalgraphics.pgb","image/vnd.microsoft.icon","image/vnd.mix","image/vnd.ms-modi","image/vnd.net-fpx","image/vnd.radiance","image/vnd.sealed-png","image/vnd.sealedmedia.softseal-gif","image/vnd.sealedmedia.softseal-jpg","image/vnd-svf","image/vnd.tencent.tap","image/vnd.valve.source.texture","image/vnd-wap-wbmp","image/vnd.xiff","audio/1d-interleaved-parityfec","audio/32kadpcm","audio/3gpp","audio/3gpp2","audio/ac3","audio/AMR","audio/AMR-WB","amr-wb+","audio/aptx","audio/asc","audio/ATRAC-ADVANCED-LOSSLESS","audio/ATRAC-X","audio/ATRAC3","audio/basic","audio/BV16","audio/BV32","audio/clearmode","audio/CN","audio/DAT12","audio/dls","audio/dsr-es201108","audio/dsr-es202050","audio/dsr-es202211","audio/dsr-es202212","audio/DV","audio/DVI4","audio/eac3","audio/encaprtp","audio/EVRC","audio/EVRC-QCP","audio/EVRC0","audio/EVRC1","audio/EVRCB","audio/EVRCB0","audio/EVRCB1","audio/EVRCNW","audio/EVRCNW0","audio/EVRCNW1","audio/EVRCWB","audio/EVRCWB0","audio/EVRCWB1","audio/example","audio/fwdred","audio/G719","audio/G721","audio/G722","audio/G723","audio/G726-16","audio/G726-24","audio/G726-32","audio/G726-40","audio/G728","audio/G729","","audio/G729D","audio/G729E","audio/GSM","audio/GSM-EFR","audio/GSM-HR-08","audio/iLBC","audio/ip-mr_v2.5","audio/L8","audio/L16","audio/L20","audio/L24","audio/LPC","audio/mobile-xmf","audio/MPA","audio/mp4","audio/MP4A-LATM","audio/mpa-robust","audio/mpeg","audio/mpeg4-generic","audio/ogg","","audio/PCMA","audio/PCMA-WB","audio/PCMU","audio/PCMU-WB","audio/prs.sid","","audio/raptorfec","audio/RED","audio/rtp-enc-aescm128","audio/rtploopback","audio/rtp-midi","audio/rtx","audio/SMV","audio/SMV0","audio/SMV-QCP","audio/sp-midi","audio/speex","audio/t140c","audio/t38","audio/telephone-event","audio/tone","audio/UEMCLIP","audio/ulpfec","audio/VDVI","audio/VMR-WB","audio/vnd.3gpp.iufp","audio/vnd.4SB","audio/vnd.audiokoz","audio/vnd.CELP","audio/vnd.cisco.nse","audio/vnd.cmles.radio-events","audio/vnd.cns.anp1","audio/vnd.cns.inf1","audio/vnd.dece.audio","audio/vnd.digital-winds","audio/vnd.dlna.adts","audio/vnd.dolby.heaac.1","audio/vnd.dolby.heaac.2","audio/vnd.dolby.mlp","audio/vnd.dolby.mps","audio/vnd.dolby.pl2","audio/vnd.dolby.pl2x","audio/vnd.dolby.pl2z","audio/vnd.dolby.pulse.1","audio/vnd.dra","audio/vnd.dts","audio/vnd.dts.hd","audio/vnd.dvb.file","audio/vnd.everad.plj","audio/vnd.hns.audio","audio/vnd.lucent.voice","audio/vnd.ms-playready.media.pya","audio/vnd.nokia.mobile-xmf","audio/vnd.nortel.vbk","audio/vnd.nuera.ecelp4800","audio/vnd.nuera.ecelp7470","audio/vnd.nuera.ecelp9600","audio/vnd.octel.sbc","audio/vnd.qcelp","audio/vnd.rhetorex.32kadpcm","audio/vnd.rip","audio/vnd.sealedmedia.softseal-mpeg","audio/vnd.vmx.cvsd","audio/vorbis","audio/vorbis-config","application/1d-interleaved-parityfec","application/3gpdash-qoe-report+xml","application/3gpp-ims+xml","application/activemessage","application/activemessage","application/alto-costmap+json","application/alto-costmapfilter+json","application/alto-directory+json","application/alto-endpointprop+json","application/alto-endpointpropparams+json","application/alto-endpointcost+json","application/alto-endpointcostparams+json","application/alto-error+json","application/alto-networkmapfilter+json","application/alto-networkmap+json","application/andrew-inset","application/applefile","application/ATF","application/atom+xml","application/atomcat+xml","application/atomdeleted+xml","application/atomicmail","application/atomsvc+xml","application/auth-policy+xml","application/bacnet-xdd+zip","application/batch-SMTP","application/beep+xml","application/calendar+json","application/calendar+xml","application/call-completion","application/cals-1840","application/cbor","application/ccmp+xml","application/ccxml+xml","application/cdmi-capability","application/cdmi-container","application/cdmi-domain","application/cdmi-object","application/cdmi-queue","application/CEA","application/cea-2018+xml","application/cellml+xml","application/cfw","application/cms","application/cnrp+xml","application/coap-group+json","application/commonground","application/conference-info+xml","application/cpl+xml","application/csrattrs","application/csta+xml","application/CSTAdata+xml","application/cybercash","application/dash+xml","application/dashdelta","application/davmount+xml","application/dca-rft","application/DCD","application/dec-dx","application/dialog-info+xml","application/dicom","application/DIT","application/dns","application/dskpp+xml","application/dssc+der","application/dssc+xml","application/dvcs","application/ecmascript","application/EDI-consent","application/EDIFACT","application/EDI-X12","","application/emotionml+xml","application/encaprtp","application/epp+xml","application/eshop","application/example","","application/fastinfoset","application/fastsoap","application/fdt+xml","application/fits","application/font-sfnt","application/font-tdpfr","application/font-woff","application/framework-attributes+xml","application/gzip","application/H224","application/held+xml","application/http","application/hyperstudio","application/ibe-key-request+xml","application/ibe-pkg-reply+xml","application/ibe-pp-data","application/iges","application/im-iscomposing+xml","application/index","application/index.cmd","application/index.obj","application/index.response","application/index.vnd","application/inkml+xml","application/IOTP","application/ipfix","application/ipp","application/ISUP","application/its+xml","application/javascript","application/jrd+json","application/json","application/json-patch+json","application/kpml-request+xml","application/kpml-response+xml","application/ld+json","application/link-format","application/load-control+xml","application/lost+xml","application/lostsync+xml","application/mac-binhex40","application/macwriteii","application/mads+xml","application/marc","application/marcxml+xml","application/mathematica","","","","application/mbms-associated-procedure-description+xml","application/mbms-deregister+xml","application/mbms-envelope+xml","application/mbms-msk-response+xml","application/mbms-msk+xml","application/mbms-protection-description+xml","application/mbms-reception-report+xml","application/mbms-register-response+xml","application/mbms-register+xml","application/mbms-schedule+xml","application/mbms-user-service-description+xml","application/mbox+xml","application/media_control+xml","application/media-policy-dataset+xml","application/mediaservercontrol+xml","application/merge-patch+json","application/metalink4+xml","application/mets+xml","application/mikey","application/mods+xml","application/moss-keys","application/moss-signature","application/mosskey-data","application/mosskey-request","application/mp21","application/mp4","application/mpeg4-generic","application/mpeg4-iod","application/mpeg4-iod-xmt","application/mrb-consumer+xml","application/mrb-publish+xml","application/msc-ivr+xml","application/msc-mixer+xml","application/msword","application/mxf","application/nasdata","application/news-checkgroups","application/news-groupinfo","application/news-transmission","application/nlsml+xml","application/nss","application/ocsp-request","application/oscp-response","application/octet-stream","application/ODA","application/ODX","application/oebps-package+xml","application/ogg","application/oxps","application/p2p-overlay+xml","","application/patch-ops-error+xml","application/pdf","application/PDX","application/pgp-encrypted","","application/pgp-signature","application/pidf-diff+xml","application/pidf+xml","application/pkcs10","application/pkcs7-mime","application/pkcs7-signature","application/pkcs8","application/pkix-attr-cert","application/pkix-cert","application/pkix-crl","application/pkix-pkipath","application/pkixcmp","application/pls+xml","application/poc-settings+xml","application/postscript","application/provenance+xml","application/prs.alvestrand.titrax-sheet","application/prs.cww","application/prs.hpub+zip","application/prs.nprend","application/prs.plucker","application/prs.rdf-xml-crypt","application/prs.xsf+xml","application/pskc+xml","application/rdf+xml","application/QSIG","application/raptorfec","application/reginfo+xml","application/relax-ng-compact-syntax","application/remote-printing","application/reputon+json","application/resource-lists-diff+xml","application/resource-lists+xml","application/riscos","application/rlmi+xml","application/rls-services+xml","application/rpki-ghostbusters","application/rpki-manifest","application/rpki-roa","application/rpki-updown","application/rtf","application/rtploopback","application/rtx","application/samlassertion+xml","application/samlmetadata+xml","application/sbml+xml","application/scaip+xml","application/scvp-cv-request","application/scvp-cv-response","application/scvp-vp-request","application/scvp-vp-response","application/sdp","application/sep-exi","application/sep+xml","application/session-info","application/set-payment","application/set-payment-initiation","application/set-registration","application/set-registration-initiation","application/SGML","application/sgml-open-catalog","application/shf+xml","application/sieve","application/simple-filter+xml","application/simple-message-summary","application/simpleSymbolContainer","application/slate","application/smil","application/smil+xml","application/smpte336m","application/soap+fastinfoset","application/soap+xml","","","application/spirits-event+xml","application/sql","application/srgs","application/srgs+xml","application/sru+xml","application/ssml+xml","application/tamp-apex-update","application/tamp-apex-update-confirm","application/tamp-community-update","application/tamp-community-update-confirm","application/tamp-error","application/tamp-sequence-adjust","application/tamp-sequence-adjust-confirm","application/tamp-status-query","application/tamp-status-response","application/tamp-update","application/tamp-update-confirm","application/tei+xml","application/thraud+xml","application/timestamp-query","application/timestamp-reply","application/timestamped-data","application/ttml+xml","application/tve-trigger","application/ulpfec","application/urc-grpsheet+xml","application/urc-ressheet+xml","application/urc-targetdesc+xml","application/urc-uisocketdesc+xml","application/vcard+json","application/vcard+xml","application/vemmi","application/vnd.3gpp.bsf+xml","application/vnd.3gpp.pic-bw-large","application/vnd.3gpp.pic-bw-small","application/vnd.3gpp.pic-bw-var","application/vnd.3gpp.sms","application/vnd.3gpp2.bcmcsinfo+xml","application/vnd.3gpp2.sms","application/vnd.3gpp2.tcap","application/vnd.3M.Post-it-Notes","application/vnd.accpac.simply.aso","application/vnd.accpac.simply.imp","application/vnd-acucobol","application/vnd.acucorp","application/vnd.adobe.flash-movie","application/vnd.adobe.formscentral.fcdt","application/vnd.adobe.fxp","application/vnd.adobe.partial-upload","application/vnd.adobe.xdp+xml","application/vnd.adobe.xfdf","application/vnd.aether.imp","application/vnd.ah-barcode","application/vnd.ahead.space","application/vnd.airzip.filesecure.azf","application/vnd.airzip.filesecure.azs","application/vnd.americandynamics.acc","application/vnd.amiga.ami","application/vnd.amundsen.maze+xml","application/vnd.anser-web-certificate-issue-initiation","application/vnd.antix.game-component","application/vnd.apache.thrift.binary","application/vnd.api+json","application/vnd.apple.mpegurl","application/vnd.apple.installer+xml","application/vnd.arastra.swi","application/vnd.aristanetworks.swi","application/vnd.artsquare","application/vnd.astraea-software.iota","application/vnd.audiograph","application/vnd.autopackage","application/vnd.avistar+xml","application/vnd.balsamiq.bmml+xml","application/vnd.bekitzur-stech+json","application/vnd.blueice.multipass","application/vnd.bluetooth.ep.oob","application/vnd.bluetooth.le.oob","application/vnd.bmi","application/vnd.businessobjects","application/vnd.cab-jscript","application/vnd.canon-cpdl","application/vnd.canon-lips","application/vnd.cendio.thinlinc.clientconf","application/vnd.century-systems.tcp_stream","application/vnd.chemdraw+xml","application/vnd.chipnuts.karaoke-mmd","application/vnd.cinderella","application/vnd.cirpack.isdn-ext","application/vnd.claymore","application/vnd.cloanto.rp9","application/vnd.clonk.c4group","application/vnd.cluetrust.cartomobile-config","application/vnd.cluetrust.cartomobile-config-pkg","application/vnd.collection.doc+json","application/vnd.collection+json","application/vnd.collection.next+json","application/vnd.commerce-battelle","application/vnd.commonspace","application/vnd.cosmocaller","application/vnd.contact.cmsg","application/vnd.crick.clicker","application/vnd.crick.clicker.keyboard","application/vnd.crick.clicker.palette","application/vnd.crick.clicker.template","application/vnd.crick.clicker.wordbank","application/vnd.criticaltools.wbs+xml","application/vnd.ctc-posml","application/vnd.ctct.ws+xml","application/vnd.cups-pdf","application/vnd.cups-postscript","application/vnd.cups-ppd","application/vnd.cups-raster","application/vnd.cups-raw","application/vnd-curl","application/vnd.cyan.dean.root+xml","application/vnd.cybank","application/vnd-dart","application/vnd.data-vision.rdz","application/vnd.debian.binary-package","application/vnd.dece.data","application/vnd.dece.ttml+xml","application/vnd.dece.unspecified","application/vnd.dece-zip","application/vnd.denovo.fcselayout-link","application/vnd.desmume-movie","application/vnd.dir-bi.plate-dl-nosuffix","application/vnd.dm.delegation+xml","application/vnd.dna","application/vnd.document+json","application/vnd.dolby.mobile.1","application/vnd.dolby.mobile.2","application/vnd.doremir.scorecloud-binary-document","application/vnd.dpgraph","application/vnd.dreamfactory","application/vnd.dtg.local","application/vnd.dtg.local.flash","application/vnd.dtg.local.html","application/vnd.dvb.ait","application/vnd.dvb.dvbj","application/vnd.dvb.esgcontainer","application/vnd.dvb.ipdcdftnotifaccess","application/vnd.dvb.ipdcesgaccess","application/vnd.dvb.ipdcesgaccess2","application/vnd.dvb.ipdcesgpdd","application/vnd.dvb.ipdcroaming","application/vnd.dvb.iptv.alfec-base","application/vnd.dvb.iptv.alfec-enhancement","application/vnd.dvb.notif-aggregate-root+xml","application/vnd.dvb.notif-container+xml","application/vnd.dvb.notif-generic+xml","application/vnd.dvb.notif-ia-msglist+xml","application/vnd.dvb.notif-ia-registration-request+xml","application/vnd.dvb.notif-ia-registration-response+xml","application/vnd.dvb.notif-init+xml","application/vnd.dvb.pfr","application/vnd.dvb_service","application/vnd-dxr","application/vnd.dynageo","application/vnd.dzr","application/vnd.easykaraoke.cdgdownload","application/vnd.ecdis-update","application/vnd.ecowin.chart","application/vnd.ecowin.filerequest","application/vnd.ecowin.fileupdate","application/vnd.ecowin.series","application/vnd.ecowin.seriesrequest","application/vnd.ecowin.seriesupdate","application/vnd.emclient.accessrequest+xml","application/vnd.enliven","application/vnd.eprints.data+xml","application/vnd.epson.esf","application/vnd.epson.msf","application/vnd.epson.quickanime","application/vnd.epson.salt","application/vnd.epson.ssf","application/vnd.ericsson.quickcall","application/vnd.eszigno3+xml","application/vnd.etsi.aoc+xml","application/vnd.etsi.asic-s+zip","application/vnd.etsi.asic-e+zip","application/vnd.etsi.cug+xml","application/vnd.etsi.iptvcommand+xml","application/vnd.etsi.iptvdiscovery+xml","application/vnd.etsi.iptvprofile+xml","application/vnd.etsi.iptvsad-bc+xml","application/vnd.etsi.iptvsad-cod+xml","application/vnd.etsi.iptvsad-npvr+xml","application/vnd.etsi.iptvservice+xml","application/vnd.etsi.iptvsync+xml","application/vnd.etsi.iptvueprofile+xml","application/vnd.etsi.mcid+xml","application/vnd.etsi.mheg5","application/vnd.etsi.overload-control-policy-dataset+xml","application/vnd.etsi.pstn+xml","application/vnd.etsi.sci+xml","application/vnd.etsi.simservs+xml","application/vnd.etsi.timestamp-token","application/vnd.etsi.tsl+xml","application/vnd.etsi.tsl.der","application/vnd.eudora.data","application/vnd.ezpix-album","application/vnd.ezpix-package","application/vnd.f-secure.mobile","application/vnd-fdf","application/vnd.fdsn.mseed","application/vnd.fdsn.seed","application/vnd.ffsns","application/vnd.fints","application/vnd.FloGraphIt","application/vnd.fluxtime.clip","application/vnd.font-fontforge-sfd","application/vnd.framemaker","application/vnd.frogans.fnc","application/vnd.frogans.ltf","application/vnd.fsc.weblaunch","application/vnd.fujitsu.oasys","application/vnd.fujitsu.oasys2","application/vnd.fujitsu.oasys3","application/vnd.fujitsu.oasysgp","application/vnd.fujitsu.oasysprs","application/vnd.fujixerox.ART4","application/vnd.fujixerox.ART-EX","application/vnd.fujixerox.ddd","application/vnd.fujixerox.docuworks","application/vnd.fujixerox.docuworks.binder","application/vnd.fujixerox.docuworks.container","application/vnd.fujixerox.HBPL","application/vnd.fut-misnet","application/vnd.fuzzysheet","application/vnd.genomatix.tuxedo","application/vnd.geo+json","application/vnd.geocube+xml","application/vnd.geogebra.file","application/vnd.geogebra.tool","application/vnd.geometry-explorer","application/vnd.geonext","application/vnd.geoplan","application/vnd.geospace","application/vnd.globalplatform.card-content-mgt","application/vnd.globalplatform.card-content-mgt-response","application/vnd.gmx","application/vnd.google-earth.kml+xml","application/vnd.google-earth.kmz","application/vnd.gov.sk.e-form+zip","application/vnd.grafeq","application/vnd.gridmp","application/vnd.groove-account","application/vnd.groove-help","application/vnd.groove-identity-message","application/vnd.groove-injector","application/vnd.groove-tool-message","application/vnd.groove-tool-template","application/vnd.groove-vcard","application/vnd.hal+json","application/vnd.hal+xml","application/vnd.HandHeld-Entertainment+xml","application/vnd.hbci","application/vnd.hcl-bireports","application/vnd.heroku+json","application/vnd.hhe.lesson-player","application/vnd.hp-HPGL","application/vnd.hp-hpid","application/vnd.hp-hps","application/vnd.hp-jlyt","application/vnd.hp-PCL","application/vnd.hp-PCLXL","application/vnd.httphone","application/vnd.hydrostatix.sof-data","application/vnd.hzn-3d-crossword","application/vnd.ibm.afplinedata","application/vnd.ibm.electronic-media","application/vnd.ibm.MiniPay","application/vnd.ibm.modcap","application/vnd.ibm.rights-management","application/vnd.ibm.secure-container","application/vnd.iccprofile","application/vnd.ieee.1905","application/vnd.igloader","application/vnd.immervision-ivp","application/vnd.immervision-ivu","application/vnd.ims.lis.v2.result+json","application/vnd.ims.lti.v2.toolconsumerprofile+json","application/vnd.ims.lti.v2.toolproxy.id+json","application/vnd.ims.lti.v2.toolproxy+json","application/vnd.ims.lti.v2.toolsettings+json","application/vnd.ims.lti.v2.toolsettings.simple+json","application/vnd.informedcontrol.rms+xml","application/vnd.infotech.project","application/vnd.infotech.project+xml","application/vnd.informix-visionary","application/vnd.innopath.wamp.notification","application/vnd.insors.igm","application/vnd.intercon.formnet","application/vnd.intergeo","application/vnd.intertrust.digibox","application/vnd.intertrust.nncp","application/vnd.intu.qbo","application/vnd.intu.qfx","application/vnd.iptc.g2.catalogitem+xml","application/vnd.iptc.g2.conceptitem+xml","application/vnd.iptc.g2.knowledgeitem+xml","application/vnd.iptc.g2.newsitem+xml","application/vnd.iptc.g2.newsmessage+xml","application/vnd.iptc.g2.packageitem+xml","application/vnd.iptc.g2.planningitem+xml","application/vnd.ipunplugged.rcprofile","application/vnd.irepository.package+xml","application/vnd.is-xpr","application/vnd.isac.fcs","application/vnd.jam","application/vnd.japannet-directory-service","application/vnd.japannet-jpnstore-wakeup","application/vnd.japannet-payment-wakeup","application/vnd.japannet-registration","application/vnd.japannet-registration-wakeup","application/vnd.japannet-setstore-wakeup","application/vnd.japannet-verification","application/vnd.japannet-verification-wakeup","application/vnd.jcp.javame.midlet-rms","application/vnd.jisp","application/vnd.joost.joda-archive","application/vnd.jsk.isdn-ngn","application/vnd.kahootz","application/vnd.kde.karbon","application/vnd.kde.kchart","application/vnd.kde.kformula","application/vnd.kde.kivio","application/vnd.kde.kontour","application/vnd.kde.kpresenter","application/vnd.kde.kspread","application/vnd.kde.kword","application/vnd.kenameaapp","application/vnd.kidspiration","application/vnd.Kinar","application/vnd.koan","application/vnd.kodak-descriptor","application/vnd.las.las+xml","application/vnd.liberty-request+xml","application/vnd.llamagraphics.life-balance.desktop","application/vnd.llamagraphics.life-balance.exchange+xml","application/vnd.lotus-1-2-3","application/vnd.lotus-approach","application/vnd.lotus-freelance","application/vnd.lotus-notes","application/vnd.lotus-organizer","application/vnd.lotus-screencam","application/vnd.lotus-wordpro","application/vnd.macports.portpkg","application/vnd.marlin.drm.actiontoken+xml","application/vnd.marlin.drm.conftoken+xml","application/vnd.marlin.drm.license+xml","application/vnd.marlin.drm.mdcf","application/vnd.mason+json","application/vnd.maxmind.maxmind-db","application/vnd.mcd","application/vnd.medcalcdata","application/vnd.mediastation.cdkey","application/vnd.meridian-slingshot","application/vnd.MFER","application/vnd.mfmp","application/vnd.micrografx.flo","application/vnd.micrografx-igx","application/vnd.miele+json","application/vnd-mif","application/vnd.minisoft-hp3000-save","application/vnd.mitsubishi.misty-guard.trustweb","application/vnd.Mobius.DAF","application/vnd.Mobius.DIS","application/vnd.Mobius.MBK","application/vnd.Mobius.MQY","application/vnd.Mobius.MSL","application/vnd.Mobius.PLC","application/vnd.Mobius.TXF","application/vnd.mophun.application","application/vnd.mophun.certificate","application/vnd.motorola.flexsuite","application/vnd.motorola.flexsuite.adsi","application/vnd.motorola.flexsuite.fis","application/vnd.motorola.flexsuite.gotap","application/vnd.motorola.flexsuite.kmr","application/vnd.motorola.flexsuite.ttc","application/vnd.motorola.flexsuite.wem","application/vnd.motorola.iprm","application/vnd.mozilla.xul+xml","application/vnd.ms-artgalry","application/vnd.ms-asf","application/vnd.ms-cab-compressed","application/vnd.mseq","application/vnd.ms-3mfdocument","application/vnd.ms-excel","application/vnd.ms-excel.addin.macroEnabled.12","application/vnd.ms-excel.sheet.binary.macroEnabled.12","application/vnd.ms-excel.sheet.macroEnabled.12","application/vnd.ms-excel.template.macroEnabled.12","application/vnd.ms-fontobject","application/vnd.ms-htmlhelp","application/vnd.ms-ims","application/vnd.ms-lrm","application/vnd.ms-office.activeX+xml","application/vnd.ms-officetheme","application/vnd.ms-playready.initiator+xml","application/vnd.ms-powerpoint","application/vnd.ms-powerpoint.addin.macroEnabled.12","application/vnd.ms-powerpoint.presentation.macroEnabled.12","application/vnd.ms-powerpoint.slide.macroEnabled.12","application/vnd.ms-powerpoint.slideshow.macroEnabled.12","application/vnd.ms-powerpoint.template.macroEnabled.12","application/vnd.ms-project","application/vnd.ms-tnef","application/vnd.ms-windows.printerpairing","application/vnd.ms-wmdrm.lic-chlg-req","application/vnd.ms-wmdrm.lic-resp","application/vnd.ms-wmdrm.meter-chlg-req","application/vnd.ms-wmdrm.meter-resp","application/vnd.ms-word.document.macroEnabled.12","application/vnd.ms-word.template.macroEnabled.12","application/vnd.ms-works","application/vnd.ms-wpl","application/vnd.ms-xpsdocument","application/vnd.msign","application/vnd.multiad.creator","application/vnd.multiad.creator.cif","application/vnd.musician","application/vnd.music-niff","application/vnd.muvee.style","application/vnd.mynfc","application/vnd.ncd.control","application/vnd.ncd.reference","application/vnd.nervana","application/vnd.netfpx","application/vnd.neurolanguage.nlu","application/vnd.nintendo.snes.rom","application/vnd.nintendo.nitro.rom","application/vnd.nitf","application/vnd.noblenet-directory","application/vnd.noblenet-sealer","application/vnd.noblenet-web","application/vnd.nokia.catalogs","application/vnd.nokia.conml+wbxml","application/vnd.nokia.conml+xml","application/vnd.nokia.iptv.config+xml","application/vnd.nokia.iSDS-radio-presets","application/vnd.nokia.landmark+wbxml","application/vnd.nokia.landmark+xml","application/vnd.nokia.landmarkcollection+xml","application/vnd.nokia.ncd","application/vnd.nokia.n-gage.ac+xml","application/vnd.nokia.n-gage.data","application/vnd.nokia.n-gage.symbian.install","application/vnd.nokia.pcd+wbxml","application/vnd.nokia.pcd+xml","application/vnd.nokia.radio-preset","application/vnd.nokia.radio-presets","application/vnd.novadigm.EDM","application/vnd.novadigm.EDX","application/vnd.novadigm.EXT","application/vnd.ntt-local.content-share","application/vnd.ntt-local.file-transfer","application/vnd.ntt-local.ogw_remote-access","application/vnd.ntt-local.sip-ta_remote","application/vnd.ntt-local.sip-ta_tcp_stream","application/vnd.oasis.opendocument.chart","application/vnd.oasis.opendocument.chart-template","application/vnd.oasis.opendocument.database","application/vnd.oasis.opendocument.formula","application/vnd.oasis.opendocument.formula-template","application/vnd.oasis.opendocument.graphics","application/vnd.oasis.opendocument.graphics-template","application/vnd.oasis.opendocument.image","application/vnd.oasis.opendocument.image-template","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.presentation-template","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.spreadsheet-template","application/vnd.oasis.opendocument.text","application/vnd.oasis.opendocument.text-master","application/vnd.oasis.opendocument.text-template","application/vnd.oasis.opendocument.text-web","application/vnd.obn","application/vnd.oftn.l10n+json","application/vnd.oipf.contentaccessdownload+xml","application/vnd.oipf.contentaccessstreaming+xml","application/vnd.oipf.cspg-hexbinary","application/vnd.oipf.dae.svg+xml","application/vnd.oipf.dae.xhtml+xml","application/vnd.oipf.mippvcontrolmessage+xml","application/vnd.oipf.pae.gem","application/vnd.oipf.spdiscovery+xml","application/vnd.oipf.spdlist+xml","application/vnd.oipf.ueprofile+xml","application/vnd.oipf.userprofile+xml","application/vnd.olpc-sugar","application/vnd.oma.bcast.associated-procedure-parameter+xml","application/vnd.oma.bcast.drm-trigger+xml","application/vnd.oma.bcast.imd+xml","application/vnd.oma.bcast.ltkm","application/vnd.oma.bcast.notification+xml","application/vnd.oma.bcast.provisioningtrigger","application/vnd.oma.bcast.sgboot","application/vnd.oma.bcast.sgdd+xml","application/vnd.oma.bcast.sgdu","application/vnd.oma.bcast.simple-symbol-container","application/vnd.oma.bcast.smartcard-trigger+xml","application/vnd.oma.bcast.sprov+xml","application/vnd.oma.bcast.stkm","application/vnd.oma.cab-address-book+xml","application/vnd.oma.cab-feature-handler+xml","application/vnd.oma.cab-pcc+xml","application/vnd.oma.cab-subs-invite+xml","application/vnd.oma.cab-user-prefs+xml","application/vnd.oma.dcd","application/vnd.oma.dcdc","application/vnd.oma.dd2+xml","application/vnd.oma.drm.risd+xml","application/vnd.oma.group-usage-list+xml","application/vnd.oma.pal+xml","application/vnd.oma.poc.detailed-progress-report+xml","application/vnd.oma.poc.final-report+xml","application/vnd.oma.poc.groups+xml","application/vnd.oma.poc.invocation-descriptor+xml","application/vnd.oma.poc.optimized-progress-report+xml","application/vnd.oma.push","application/vnd.oma.scidm.messages+xml","application/vnd.oma.xcap-directory+xml","application/vnd.omads-email+xml","application/vnd.omads-file+xml","application/vnd.omads-folder+xml","application/vnd.omaloc-supl-init","application/vnd.oma-scws-config","application/vnd.oma-scws-http-request","application/vnd.oma-scws-http-response","application/vnd.openeye.oeb","application/vnd.openxmlformats-officedocument.custom-properties+xml","application/vnd.openxmlformats-officedocument.customXmlProperties+xml","application/vnd.openxmlformats-officedocument.drawing+xml","application/vnd.openxmlformats-officedocument.drawingml.chart+xml","application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml","application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml","application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml","application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml","application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml","application/vnd.openxmlformats-officedocument.extended-properties+xml","application/vnd.openxmlformats-officedocument.presentationml.commentAuthors+xml","application/vnd.openxmlformats-officedocument.presentationml.comments+xml","application/vnd.openxmlformats-officedocument.presentationml.handoutMaster+xml","application/vnd.openxmlformats-officedocument.presentationml.notesMaster+xml","application/vnd.openxmlformats-officedocument.presentationml.notesSlide+xml","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml","application/vnd.openxmlformats-officedocument.presentationml.presProps+xml","application/vnd.openxmlformats-officedocument.presentationml.slide","application/vnd.openxmlformats-officedocument.presentationml.slide+xml","application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml","application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml","application/vnd.openxmlformats-officedocument.presentationml.slideshow","application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml","application/vnd.openxmlformats-officedocument.presentationml.slideUpdateInfo+xml","application/vnd.openxmlformats-officedocument.presentationml.tableStyles+xml","application/vnd.openxmlformats-officedocument.presentationml.tags+xml","application/vnd.openxmlformats-officedocument.presentationml-template","application/vnd.openxmlformats-officedocument.presentationml.template.main+xml","application/vnd.openxmlformats-officedocument.presentationml.viewProps+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml","application/vnd.openxmlformats-officedocument.spreadsheetml-template","application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml","application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml","application/vnd.openxmlformats-officedocument.theme+xml","application/vnd.openxmlformats-officedocument.themeOverride+xml","application/vnd.openxmlformats-officedocument.vmlDrawing","application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml","application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml","application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml","application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml","application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml","application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml","application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml","application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml","application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml","application/vnd.openxmlformats-officedocument.wordprocessingml-template","application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml","application/vnd.openxmlformats-officedocument.wordprocessingml.webSettings+xml","application/vnd.openxmlformats-package.core-properties+xml","application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml","application/vnd.openxmlformats-package.relationships+xml","application/vnd.orange.indata","application/vnd.osa.netdeploy","application/vnd.osgeo.mapguide.package","application/vnd.osgi.bundle","application/vnd.osgi.dp","application/vnd.osgi.subsystem","application/vnd.otps.ct-kip+xml","application/vnd.palm","application/vnd.panoply","application/vnd.paos+xml","application/vnd.pawaafile","application/vnd.pcos","application/vnd.pg.format","application/vnd.pg.osasli","application/vnd.piaccess.application-licence","application/vnd.picsel","application/vnd.pmi.widget","application/vnd.poc.group-advertisement+xml","application/vnd.pocketlearn","application/vnd.powerbuilder6","application/vnd.powerbuilder6-s","application/vnd.powerbuilder7","application/vnd.powerbuilder75","application/vnd.powerbuilder75-s","application/vnd.powerbuilder7-s","application/vnd.preminet","application/vnd.previewsystems.box","application/vnd.proteus.magazine","application/vnd.publishare-delta-tree","application/vnd.pvi.ptid1","application/vwg-multiplexed","application/vnd.pwg-xhtml-print+xml","application/vnd.qualcomm.brew-app-res","application/vnd.Quark.QuarkXPress","application/vnd.quobject-quoxdocument","application/vnd.radisys.moml+xml","application/vnd.radisys.msml-audit-conf+xml","application/vnd.radisys.msml-audit-conn+xml","application/vnd.radisys.msml-audit-dialog+xml","application/vnd.radisys.msml-audit-stream+xml","application/vnd.radisys.msml-audit+xml","application/vnd.radisys.msml-conf+xml","application/vnd.radisys.msml-dialog-base+xml","application/vnd.radisys.msml-dialog-fax-detect+xml","application/vnd.radisys.msml-dialog-fax-sendrecv+xml","application/vnd.radisys.msml-dialog-group+xml","application/vnd.radisys.msml-dialog-speech+xml","application/vnd.radisys.msml-dialog-transform+xml","application/vnd.radisys.msml-dialog+xml","application/vnd.radisys.msml+xml","application/vnd.rainstor.data","application/vnd.rapid","application/vnd.realvnc.bed","application/vnd.recordare.musicxml","application/vnd.recordare.musicxml+xml","application/vnd.renlearn.rlprint","application/vnd.rig.cryptonote","application/vnd.route66.link66+xml","application/vnd.rs-274x","application/vnd.ruckus.download","application/vnd.s3sms","application/vnd.sailingtracker.track","application/vnd.sbm.cid","application/vnd.sbm.mid2","application/vnd.scribus","application/vnd.sealed.3df","application/vnd.sealed.csf","application/vnd.sealed-doc","application/vnd.sealed-eml","application/vnd.sealed-mht","application/vnd.sealed.net","application/vnd.sealed-ppt","application/vnd.sealed-tiff","application/vnd.sealed-xls","application/vnd.sealedmedia.softseal-html","application/vnd.sealedmedia.softseal-pdf","application/vnd.seemail","application/vnd-sema","application/vnd.semd","application/vnd.semf","application/vnd.shana.informed.formdata","application/vnd.shana.informed.formtemplate","application/vnd.shana.informed.interchange","application/vnd.shana.informed.package","application/vnd.SimTech-MindMapper","application/vnd.siren+json","application/vnd.smaf","application/vnd.smart.notebook","application/vnd.smart.teacher","application/vnd.software602.filler.form+xml","application/vnd.software602.filler.form-xml-zip","application/vnd.solent.sdkm+xml","application/vnd.spotfire.dxp","application/vnd.spotfire.sfs","application/vnd.sss-cod","application/vnd.sss-dtf","application/vnd.sss-ntf","application/vnd.stepmania.package","application/vnd.stepmania.stepchart","application/vnd.street-stream","application/vnd.sun.wadl+xml","application/vnd.sus-calendar","application/vnd.svd","application/vnd.swiftview-ics","application/vnd.syncml.dm.notification","application/vnd.syncml.dmddf+xml","application/vnd.syncml.dmtnds+wbxml","application/vnd.syncml.dmtnds+xml","application/vnd.syncml.dmddf+wbxml","application/vnd.syncml.dm+wbxml","application/vnd.syncml.dm+xml","application/vnd.syncml.ds.notification","application/vnd.syncml+xml","application/vnd.tao.intent-module-archive","application/vnd.tcpdump.pcap","application/vnd.tmobile-livetv","application/vnd.trid.tpt","application/vnd.triscape.mxs","application/vnd.trueapp","application/vnd.truedoc","application/vnd.ubisoft.webplayer","application/vnd.ufdl","application/vnd.uiq.theme","application/vnd.umajin","application/vnd.unity","application/vnd.uoml+xml","application/vnd.uplanet.alert","application/vnd.uplanet.alert-wbxml","application/vnd.uplanet.bearer-choice","application/vnd.uplanet.bearer-choice-wbxml","application/vnd.uplanet.cacheop","application/vnd.uplanet.cacheop-wbxml","application/vnd.uplanet.channel","application/vnd.uplanet.channel-wbxml","application/vnd.uplanet.list","application/vnd.uplanet.listcmd","application/vnd.uplanet.listcmd-wbxml","application/vnd.uplanet.list-wbxml","application/vnd.uplanet.signal","application/vnd.valve.source.material","application/vnd.vcx","application/vnd.vd-study","application/vnd.vectorworks","application/vnd.verimatrix.vcas","application/vnd.vidsoft.vidconference","application/vnd.visio","application/vnd.visionary","application/vnd.vividence.scriptfile","application/vnd.vsf","application/vnd.wap.sic","application/vnd.wap-slc","application/vnd.wap-wbxml","application/vnd-wap-wmlc","application/vnd.wap.wmlscriptc","application/vnd.webturbo","application/vnd.wfa.p2p","application/vnd.wfa.wsc","application/vnd.windows.devicepairing","application/vnd.wmc","application/vnd.wmf.bootstrap","application/vnd.wolfram.mathematica","application/vnd.wolfram.mathematica.package","application/vnd.wolfram.player","application/vnd.wordperfect","application/vnd.wqd","application/vnd.wrq-hp3000-labelled","application/vnd.wt.stf","application/vnd.wv.csp+xml","application/vnd.wv.csp+wbxml","application/vnd.wv.ssp+xml","application/vnd.xacml+json","application/vnd.xara","application/vnd.xfdl","application/vnd.xfdl.webform","application/vnd.xmi+xml","application/vnd.xmpie.cpkg","application/vnd.xmpie.dpkg","application/vnd.xmpie.plan","application/vnd.xmpie.ppkg","application/vnd.xmpie.xlim","application/vnd.yamaha.hv-dic","application/vnd.yamaha.hv-script","application/vnd.yamaha.hv-voice","application/vnd.yamaha.openscoreformat.osfpvg+xml","application/vnd.yamaha.openscoreformat","application/vnd.yamaha.remote-setup","application/vnd.yamaha.smaf-audio","application/vnd.yamaha.smaf-phrase","application/vnd.yamaha.through-ngn","application/vnd.yamaha.tunnel-udpencap","application/vnd.yaoweme","application/vnd.yellowriver-custom-menu","application/vnd.zul","application/vnd.zzazz.deck+xml","application/voicexml+xml","application/vq-rtcpxr","application/watcherinfo+xml","application/whoispp-query","application/whoispp-response","","application/wita","application/wordperfect5.1","application/wsdl+xml","application/wspolicy+xml","application/x-www-form-urlencoded","application/x400-bp","application/xacml+xml","application/xcap-att+xml","application/xcap-caps+xml","application/xcap-diff+xml","application/xcap-el+xml","application/xcap-error+xml","application/xcap-ns+xml","application/xcon-conference-info-diff+xml","application/xcon-conference-info+xml","application/xenc+xml","application/xhtml-voice+xml","application/xhtml+xml","application/xml","application/xml-dtd","application/xml-external-parsed-entity","application/xml-patch+xml","application/xmpp+xml","application/xop+xml","","application/xv+xml","application/yang","application/yin+xml","application/zip","application/zlib","audio/*","image/*","video/*"];

acc = function() {
	var returnString = "'"
	// var mimeType = ra(mimeTypes)
	var rounds = rint(50)
	while(rounds--) {
			returnString += ra(mimeTypes)+","
	}
	returnString += ra(mimeTypes)+"'"
	return returnString	
}

transformValue = function() {
	var returnString = ''
	var types = ['matrix','translate','translateX','translateY','scale','scaleX','scaleY','rotate','rotateX','rotateY','rotateZ','skew','skewX','skewY']//,'perspective','matrix3d','translate3d','translateZ','scale3d','scaleZ','rotate3d'
	var type = ra(types)
	returnString += type+"("
	switch(type){
		case 'matrix':
			returnString += ra([floatValue(),rint(ra(INT_NUMS))])+","+ra([floatValue(),rint(ra(INT_NUMS))])+","+ra([floatValue(),rint(ra(INT_NUMS))])+","+ra([floatValue(),rint(ra(INT_NUMS))])+","+ra([floatValue(),rint(ra(INT_NUMS))])+","+ra([floatValue(),rint(ra(INT_NUMS))])
			break;
		case 'matrix3d':
			returnString += ra([floatValue(),rint(ra(INT_NUMS))])+","+ra([floatValue(),rint(ra(INT_NUMS))])+","+ra([floatValue(),rint(ra(INT_NUMS))])+","+ra([floatValue(),rint(ra(INT_NUMS))])+","+ra([floatValue(),rint(ra(INT_NUMS))])+","+ra([floatValue(),rint(ra(INT_NUMS))])+","+ra([floatValue(),rint(ra(INT_NUMS))])+","+ra([floatValue(),rint(ra(INT_NUMS))])+","+ra([floatValue(),rint(ra(INT_NUMS))])+","+ra([floatValue(),rint(ra(INT_NUMS))])+","+ra([floatValue(),rint(ra(INT_NUMS))])+","+ra([floatValue(),rint(ra(INT_NUMS))])+","+ra([floatValue(),rint(ra(INT_NUMS))])+","+ra([floatValue(),rint(ra(INT_NUMS))])+","+ra([floatValue(),rint(ra(INT_NUMS))])+","+ra([floatValue(),rint(ra(INT_NUMS))])
			break;
		case 'translate':
			returnString += distanceValue4()+","+distanceValue4()
			break;
		case 'translate3d':
			returnString += ra([distanceValue(),rint(ra(INT_NUMS))])+","+ra([distanceValue(),rint(ra(INT_NUMS))]),ra([distanceValue(),rint(ra(INT_NUMS))])+","+ra([distanceValue(),rint(ra(INT_NUMS))])+","+ra([distanceValue(),rint(ra(INT_NUMS))])
			break;
		case 'translateX':
		case 'translateY':
		case 'translateZ':
			returnString += distanceValue4()
			break;
		case 'scale':
			returnString += ra([rint(ra(INT_NUMS)),floatValue()])+","+ra([rint(ra(INT_NUMS)),floatValue()])
			break;
		case 'scale3d':
			returnString += ra([distanceValue(),rint(ra(INT_NUMS)),floatValue()])+","+ra([distanceValue(),rint(ra(INT_NUMS)),floatValue()])+","+ra([distanceValue(),rint(ra(INT_NUMS)),floatValue()])
			break;
		case 'scaleX':
		case 'scaleY':
		case 'scaleZ':
			returnString += ra([rint(ra(INT_NUMS)),floatValue()])
			break;
		case 'rotate':
		case 'rotateX':
		case 'rotateY':
		case 'rotateZ':
		case 'skewX':
		case 'skewY':
			returnString += angleValue1()
			break;
		case 'rotate3d':
			returnString += ra([distanceValue(),rint(ra(INT_NUMS)),floatValue()])+","+ra([distanceValue(),rint(ra(INT_NUMS)),floatValue()])+","+ra([distanceValue(),rint(ra(INT_NUMS)),floatValue()])+","+angleValue()
			break;
		case 'skew':
			returnString += angleValue1()+","+angleValue1()
			break;
		case 'perspective':
			returnString += ra([distanceValue(),rint(ra(INT_NUMS)),floatValue()])
			break;
	}
	returnString +=")"
	return returnString
}


timeValue = function (){
	var types=['ms','s','%','']//ex
   	var prob=rint(100)
   	if(prob>50){
   		var distance = rint(50000)
   		if(rint(2)){distance=distance%100}
   		distance+=ra(types)
	}
	else if(prob>30){
		var distance = [-1,1][Math.random()*2|0]*rint(500) + ra(types)
	}
   else if(prob>25){
      var distance = randoms() + ra(types)
   }
	else{
		var distance = floatValue()*(rint(10)+1)*(rint(10)+1) + ra(types)
	}
   	return distance
}

freqValue = function (){
	var types=['ms','s','%','']//ex
   	var prob=rint(100)
   	if(prob>50){
   		var distance = rint(50000)
   		if(rint(2)){distance=distance%100}
   		distance+=ra(types)
	}
	else if(prob>30){
		var distance = [-1,1][Math.random()*2|0]*rint(500) + ra(types)
	}
   else if(prob>25){
      var distance = randoms() + ra(types)
   }
	else{
		var distance = floatValue()*(rint(10)+1)*(rint(10)+1) + ra(types)
	}
   	return distance
}


angleValue = function (){
    var types=["deg","rad","grad",'']//ex
   	var prob=rint(100)
   	if(prob>50){
   		var angle = rint(50000)
   		if(rint(2)){alnge=angle%100}
   		angle+=ra(types)
	}
	else if(prob>30){
		var angle = [-1,1][Math.random()*2|0]*rint(500) + ra(types)
	}
   else if(prob>25){
      var angle = randoms() + ra(types)
   }
	else{
		var angle = floatValue()*(rint(10)+1)*(rint(10)+1) + ra(types)
	}
   	return angle
}

angleValue1 = function (){
    var types=["deg","rad","grad"]//ex,''
   	var prob=rint(100)
   	if(prob>50){
   		var angle = rint(50000)
   		if(rint(2)){alnge=angle%100}
   		angle+=ra(types)
	}
	else if(prob>30){
		var angle = [-1,1][Math.random()*2|0]*rint(500) + ra(types)
	}
   else if(prob>25){
      var angle = rint(ra(INT_NUMS)) + ra(types)
   }
	else{
		var angle = floatValue()*(rint(10)+1)*(rint(10)+1) + ra(types)
	}
   	return angle
}

var entity_table = [
   "&quot;",     
   "&amp;",        
   "&lt;",     
   "&gt;",     
   "&#63;",      
   "&#111;",        
   "&nbsp;",      
   "&iexcl;",     
   "&cent;",      
   "&pound;",     
   "&curren;",    
   "&yen;",       
   "&brvbar;",    
   "&sect;",      
   "&uml;",       
   "&copy;",      
   "&ordf;",      
   "&laquo;",     
   "&not;",       
   "&shy;",       
   "&reg;",       
   "&macr;",      
   "&deg;",       
   "&plusmn;",    
   "&sup2;",      
   "&sup3;",      
   "&acute;",     
   "&micro;",     
   "&para;",      
   "&middot;",    
   "&cedil;",     
   "&sup1;",      
   "&ordm;",      
   "&raquo;",     
   "&frac14;",    
   "&frac12;",    
   "&frac34;",    
   "&iquest;",    
   "&Agrave;",    
   "&Aacute;",    
   "&Acirc;",     
   "&Atilde;",    
   "&Auml;",      
   "&Aring;",     
   "&AElig;",     
   "&Ccedil;",    
   "&Egrave;",    
   "&Eacute;",    
   "&Ecirc;",     
   "&Euml;",      
   "&Igrave;",    
   "&Iacute;",    
   "&Icirc;",     
   "&Iuml;",      
   "&ETH;",       
   "&Ntilde;",    
   "&Ograve;",    
   "&Oacute;",    
   "&Ocirc;",     
   "&Otilde;",    
   "&Ouml;",      
   "&times;",     
   "&Oslash;",    
   "&Ugrave;",    
   "&Uacute;",    
   "&Ucirc;",     
   "&Uuml;",      
   "&Yacute;",    
   "&THORN;",     
   "&szlig;",     
   "&agrave;",    
   "&aacute;",    
   "&acirc;",     
   "&atilde;",    
   "&auml;",      
   "&aring;",     
   "&aelig;",     
   "&ccedil;",    
   "&egrave;",    
   "&eacute;",    
   "&ecirc;",     
   "&euml;",      
   "&igrave;",    
   "&iacute;",    
   "&icirc;",     
   "&iuml;",      
   "&eth;",       
   "&ntilde;",    
   "&ograve;",    
   "&oacute;",    
   "&ocirc;",     
   "&otilde;",    
   "&ouml;",      
   "&divide;",    
   "&oslash;",    
   "&ugrave;",    
   "&uacute;",    
   "&ucirc;",     
   "&uuml;",      
   "&yacute;",    
   "&thorn;",     
   "&yuml;",      
   "&#264;",      
   "&#265;",      
   "&OElig;",     
   "&oelig;",     
   "&Scaron;",    
   "&scaron;",    
   "&#372;",      
   "&#373;",      
   "&#374;",      
   "&#375;",      
   "&Yuml;",      
   "&fnof;",      
   "&circ;",      
   "&tilde;",     
   "&Alpha;",     
   "&Beta;",      
   "&Gamma;",     
   "&Delta;",     
   "&Epsilon;",   
   "&Zeta;",      
   "&Eta;",       
   "&Theta;",     
   "&Iota;",      
   "&Kappa;",     
   "&Lambda;",    
   "&Mu;",        
   "&Nu;",        
   "&Xi;",        
   "&Omicron;",   
   "&Pi;",        
   "&Rho;",       
   "&Sigma;",     
   "&Tau;",       
   "&Upsilon;",   
   "&Phi;",       
   "&Chi;",       
   "&Psi;",       
   "&Omega;",     
   "&alpha;",     
   "&beta;",      
   "&gamma;",     
   "&delta;",     
   "&epsilon;",   
   "&zeta;",      
   "&eta;",       
   "&theta;",     
   "&iota;",      
   "&kappa;",     
   "&lambda;",    
   "&mu;",        
   "&nu;",        
   "&xi;",        
   "&omicron;",   
   "&pi;",        
   "&rho;",       
   "&sigmaf;",    
   "&sigma;",     
   "&tau;",       
   "&upsilon;",   
   "&phi;",       
   "&chi;",       
   "&psi;",       
   "&omega;",     
   "&thetasym;",  
   "&upsih;",     
   "&piv;",       
   "&ensp;",     
   "&emsp;",     
   "&thinsp;",   
   "&zwnj;",     
   "&zwj;",      
   "&lrm;",      
   "&rlm;",      
   "&ndash;",    
   "&mdash;",    
   "&lsquo;",    
   "&rsquo;",    
   "&sbquo;",    
   "&ldquo;",    
   "&rdquo;",    
   "&bdquo;",    
   "&dagger;",   
   "&Dagger;",   
   "&bull;",     
   "&hellip;",   
   "&permil;",   
   "&prime;",    
   "&Prime;",    
   "&lsaquo;",   
   "&rsaquo;",   
   "&oline;",    
   "&frasl;",    
   "&euro;",     
   "&weierp;",   
   "&image;",    
   "&real;",     
   "&trade;",    
   "&alefsym;",  
   "&larr;",     
   "&uarr;",     
   "&rarr;",     
   "&darr;",     
   "&harr;",     
   "&crarr;",    
   "&lArr;",     
   "&uArr;",     
   "&rArr;",     
   "&dArr;",     
   "&hArr;",      
   "&forall;",   
   "&part;",     
   "&exist;",    
   "&empty;",    
   "&nabla;",    
   "&isin;",     
   "&notin;",    
   "&ni;",       
   "&prod;",     
   "&sum;",      
   "&minus;",    
   "&lowast;",   
   "&#8729;",    
   "&radic;",    
   "&prop;",     
   "&infin;",    
   "&ang;",      
   "&and;",      
   "&or;",       
   "&cap;",      
   "&cup;",      
   "&int;",      
   "&there4;",   
   "&sim;",      
   "&cong;",     
   "&asymp;",    
   "&ne;",       
   "&equiv;",    
   "&le;",       
   "&ge;",       
   "&sub;",      
   "&sup;",      
   "&nsub;",     
   "&sube;",     
   "&supe;",     
   "&oplus;",    
   "&otimes;",   
   "&perp;",     
   "&sdot;",     
   "&lceil;",    
   "&rceil;",    
   "&lfloor;",   
   "&rfloor;",   
   "&lang;",     
   "&rang;",     
   "&#9642;",    
   "&#9643;",    
   "&loz;",      
   "&#9702;",    
   "&spades;",   
   "&clubs;",    
   "&hearts;",   
   "&diams;"   
]

function HTMLEscape(str){
var outj = "";	// javascript escaped hex
var outh = "";	// html escaped decimal
for(i=0; i<str.length; i++)
{	var ch=str.charCodeAt(i);
	outj += "\\u";
	outj += ((ch>>12)&15) . toString(16);
	outj += ((ch>>8)&15) . toString(16);
	outj += ((ch>>4)&15) . toString(16);
	outj += (ch&15) . toString(16);
	outh += "&#" + ch + ";";
} // for loop
if(rint(3))
   return outj
else{
   return outh
}
}
function u(round){round++; if(round>10){return 'a'} try{num=Math.round(111411*Math.random());var uni=eval('"\\u'+num.toString(16)+'"');return(uni.length>1)?u(round):uni}catch(e){return 'a'}}
var escapable = /[\x00-\x1f\ud800-\udfff\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufff0-\uffff]/g;

randbool = function(){ return rint(2)}

function filterUnicode(quoted){

  escapable.lastIndex = 0;
  if( !escapable.test(quoted)) return quoted;

  return quoted.replace( escapable, function(a){
    return '';
  });
}

srint = function (upto) {
	return [-1,1][Math.random()*2|0]*Math.floor(upto*Math.random())
}
zrint = function (upto) {
	var z = Math.floor(upto*Math.random());
	if(z==0){
		return 1
	}
	else {
		return z
	}
}
rint = function (upto) {
	return Math.floor(upto*Math.random())
}
ra = function (a) {
	var obj = a
	if (obj instanceof Array) {
		return obj[rint(a.length)]
	}
	if (obj instanceof Object) {
		var keys = Object.keys(obj)
		return obj[keys[rint(keys.length)]]
	}

}
raPos = function (a) {
	return a[rint(a.length)+1]
}

calcWidth = function(){return rint(1000)}


getRandomColor = function () {
		var prob=rint(125)
		if(prob>100){
			if(rint(2)){	
				return '#'+getRandomHex(6) 
			}
			else{ 
				return '#'+getRandomHex(3)
			}
		}
		else if(prob>75&&prob<100){
			return 'rgba('+colorValue()+','+colorValue()+','+colorValue()+','+floatValue()+')'			
		}
		else if(prob>50&&prob<75){			
			return 'rgb('+colorValue()+','+colorValue()+','+colorValue()+')'
		}
		else if(prob>25&&prob<50){
			return 'hsla('+colorValue()+','+percentValue1()+','+percentValue1()+','+floatValue()+')'
		}
		else{
			return 'hsl('+colorValue()+','+percentValue1()+','+percentValue1()+')'
		}
}

function hslcolorValue(){
	var returnString=''
	if(rint(2)){

		returnString=rgbInt()
	}
	else{

		returnString=percentValue1()
	}
	if(!rint(200)){
		returnString='-'+returnString
	}
	return returnString
}

function colorValue(){
	var returnString=''
	returnString=rgbInt()
	if(!rint(200)){
		returnString='-'+returnString
	}
	return returnString
}


getRandomHex = function (max){
	var letters = '0123456789ABCDEF'.split('');
	var hex=''
	for (var i = 0; i < max; i++ ) {
		hex += letters[Math.round(Math.random() * 15)];
	}
	return hex;
}


floatValue = function (){
	var rand=rint(40)
	if(rand>10){
		return [-1,1][Math.random()*2|0]*Math.random()
	}
	else if(rand==0){
		return [-1,1][Math.random()*2|0]*Math.random()*rint(100000)
	}
	else if(rand==1){
		return [-1,1][Math.random()*2|0]*Math.random()*rint(100000)+rint(1000000)
	}
	else if(rand==2){
		return [-1,1][Math.random()*2|0]*Math.random()+rint(1000000)
	}
	else if(rand==3){
		return ''+[-1,1][Math.random()*2|0]*Math.random()*rint(100000)+rint(1000000)+''+rint(1000000)
	}
	else{
		return [-1,1][Math.random()*2|0]*Math.random()*rint(10)	
	}
}

posfloatValue = function (){
	var rand=rint(40)
	if(rand>10){
		return [1,1][Math.random()*2|0]*Math.random()
	}
	else if(rand==0){
		return [1,1][Math.random()*2|0]*Math.random()*rint(100000)
	}
	else if(rand==1){
		return [1,1][Math.random()*2|0]*Math.random()*rint(100000)+rint(1000000)
	}
	else if(rand==2){
		return [1,1][Math.random()*2|0]*Math.random()+rint(1000000)
	}
	else if(rand==3){
		return ''+[1,1][Math.random()*2|0]*Math.random()*rint(100000)+rint(1000000)+''+rint(1000000)
	}
	else{
		return [1,1][Math.random()*2|0]*Math.random()*rint(10)	
	}
}

randoms = function (){
	var rand=Math.floor(Math.random()*25)
	if(rand>10)
	{
		return rint(1000)
	}
   else if(rand==5){
      return rint(100000)
   }	
	else if(rand==0){
		return floatValue()
	}
	else if(rand==1){
		return [-1,1][Math.random()*2|0]*rint(1000)+'e'+[-1,1][Math.random()*2|0]*rint(1000)
	}
	else if(rand==2){
		return [-1,1][Math.random()*2|0]*Math.random()+'e'+[-1,1][Math.random()*2|0]*rint(3000)
	}
	else if(rand==3){
		return [-1,1][Math.random()*2|0]*rint(1000000000000000)
	}
	else if(rand==4){
		return '0x'+getRandomHex((Math.floor(Math.random()*20)+1))
	}
	else{
		return [-1,1][Math.random()*2|0]*rint(1000)
	}

} 

/*var rounds=100000
while(rounds--){
	console.log(randoms())
}*/

rgbInt = function (){ 
	return rint(255);
}

arrayWalk = function (input){
	var obj=input
	//console.log(obj)
	if (obj instanceof Array) {
		return (arrayWalk(ra(obj)));
	} else if (obj instanceof Function) {
		return (obj());
	} else if (obj instanceof String || typeof(obj) == 'string') {
		return obj
	} else {
		return "\n\n\n\nBujaa!!! There is a bug!\n\n\n\n";
	}
}



pxValue = function(){return typedDistanceValue('px')}
degValue = function(){return typedDistanceValue('deg')}
percentValue = function(){return typedDistanceValue('%')}
pospercentValue = function(){return postypedDistanceValue('%')}
percentValue1 = function(){return typedDistanceValue1('%')}
pospxValue = function(){return postypedDistanceValue('px')}

function typedDistanceValue(type){
   	var prob=rint(125)
   	if(prob>100){
   		var distance = rint(50000)
   		if(rint(2)){distance=distance%100}
   		distance+=type
	}
	else if(prob>75){
		var distance = [-1,1][Math.random()*2|0]*rint(500) + type
	}
   else if(prob>50){
      var distance = randoms() + type
   }
	else if (prob>25){
		var distance = floatValue()*(rint(10)+1)*(rint(10)+1) + type
	}
	else {
		var distance = rint(ra(INT_NUMS)) + type
	}
   	return distance
}

function typedDistanceValue1(type){
   	var prob=rint(100)
   	if(prob>75){
   		var distance = rint(50000)
   		if(rint(2)){distance=distance%100}
   		distance+=type
	}
	else if(prob>50&&prob<75){
		var distance = [-1,1][Math.random()*2|0]*rint(500) + type
	}
	else if(prob>25&&prob<50){
		var distance = floatValue()*(rint(10)+1)*(rint(10)+1) + type
	}
	else{
		var distance = rint(ra(INT_NUMS)) + type
	}
   	return distance
}

function postypedDistanceValue(type){
   	var prob=rint(100)
   	if(prob>75){
   		var distance = rint(50000)
   		if(rint(2)){distance=distance%100}
   		distance+=type
	}
	else if(prob>50&&prob<75){
		var distance = [1,1][Math.random()*2|0]*rint(500) + type
	}
	else if(prob>25&&prob<50){
		var distance = posfloatValue()*(rint(10)+1)*(rint(10)+1) + type
	}
	else{
		var distance = rint(ra(POS_INT_NUMS)) + type
	}
   	return distance
}

distanceValue = function (){
   	var types=["em","cm","px","mm",'in','pc','pt','%','']//ex
   	var prob=rint(125)
   	if(prob>100){
   		var distance = rint(50000)
   		if(rint(2)){distance=distance%100}
   		distance+=ra(types)
	}
	else if(prob>75){
		var distance = [-1,1][Math.random()*2|0]*rint(500) + ra(types)
	}
   else if(prob>50){
      var distance = randoms() + ra(types)
   }
	else if (prob>25){
		var distance = floatValue()*(rint(10)+1)*(rint(10)+1) + ra(types)
	}
	else {
		var distance = rint(ra(INT_NUMS)) + ra(types)
	}
   	return distance
}

distanceValue4 = function (){
   	var types=["em","cm","px","mm",'in','pc','pt','%']//ex,''
   	var prob=rint(100)
   	if(prob>75){
   		var distance = rint(50000)
   		if(rint(2)){distance=distance%100}
   		distance+=ra(types)
	}
	else if(prob>50&&prob<75){
		var distance = [-1,1][Math.random()*2|0]*rint(500) + ra(types)
	}
	else if(prob>25&&prob<50){
		var distance = floatValue()*(rint(10)+1)*(rint(10)+1) + ra(types)
	}
	else{
		var distance = rint(ra(INT_NUMS)) + ra(types)
	}
   	return distance
}

distanceValue3 = function (){
   	var types=["em","cm","px","mm",'in','pc','pt','%','']//ex
   	var prob=rint(100)
   	if(prob>75){
   		var distance = rint(50000)
   		if(rint(2)){distance=distance%100}
   		distance+=ra(types)
	}
	else if(prob>50&&prob<75){
		var distance = [-1,1][Math.random()*2|0]*rint(500) + ra(types)
	}
	else if(prob>25&&prob<50){
		var distance = floatValue()*(rint(10)+1)*(rint(10)+1) + ra(types)
	}
	else{
		var distance = rint(ra(INT_NUMS)) + ra(types)
	}
   	return distance
}

posdistanceValue1 = function (){
   	var types=["em","cm","px","mm",'in','pc','pt','']//ex,'%',
   	var prob=rint(100)
   	if(prob>75){
   		var distance = rint(50000)
   		if(rint(2)){distance=distance%100}
   		distance+=ra(types)
	}
	else if(prob>50&&prob<75){
		var distance = [1,1][Math.random()*2|0]*rint(500) + ra(types)
	}
	else if(prob>25&&prob<50){
		var distance = posfloatValue()*(rint(10)+1)*(rint(10)+1) + ra(types)
	}
	else{
		var distance = rint(ra(POS_INT_NUMS)) + ra(types)
	}
   	return distance
}

posdistanceValue2 = function (){
   	var types=["em","cm","px","mm",'in','pc','pt','','%']//ex,
   	var prob=rint(100)
   	if(prob>75){
   		var distance = rint(50000)
   		if(rint(2)){distance=distance%100}
   		distance+=ra(types)
	}
	else if(prob>50&&prob<75){
		var distance = [1,1][Math.random()*2|0]*rint(500) + ra(types)
	}
	else if(prob>25&&prob<50){
		var distance = posfloatValue()*(rint(10)+1)*(rint(10)+1) + ra(types)
	}
	else{
		var distance = rint(ra(POS_INT_NUMS)) + ra(types)
	}
   	return distance
}

posdistanceValueflex = function (){
   	var types=["em","cm","px","mm",'in','pc','pt','%']//ex,
   	var prob=rint(100)
   	if(prob>75){
   		var distance = rint(50000)
   		if(rint(2)){distance=distance%100}
   		distance+=ra(types)
	}
	else if(prob>50&&prob<75){
		var distance = [1,1][Math.random()*2|0]*rint(500) + ra(types)
	}
	else if(prob>25&&prob<50){
		var distance = posfloatValue()*(rint(10)+1)*(rint(10)+1) + ra(types)
	}
	else{
		var distance = rint(ra(POS_INT_NUMS)) + ra(types)
	}
   	return distance
}

posdistanceValueblur = function (){
   	var types=["em","cm","px","mm",'in','pc','pt']//ex,'%',,''
   	var prob=rint(100)
   	if(prob>75){
   		var distance = rint(50000)
   		if(rint(2)){distance=distance%100}
   		distance+=ra(types)
	}
	else if(prob>50&&prob<75){
		var distance = [1,1][Math.random()*2|0]*rint(500) + ra(types)
	}
	else if(prob>25&&prob<50){
		var distance = posfloatValue()*(rint(10)+1)*(rint(10)+1) + ra(types)
	}
	else{
		var distance = rint(ra(POS_INT_NUMS)) + ra(types)
	}
   	return distance
}

distanceValue2 = function (){
   	var types=["em","cm","px","mm",'in','pc','pt','']//ex,'%'
   	var prob=rint(100)
   	if(prob>75){
   		var distance = rint(50000)
   		if(rint(2)){distance=distance%100}
   		distance+=ra(types)
	}
	else if(prob>50&&prob<75){
		var distance = [-1,1][Math.random()*2|0]*rint(500) + ra(types)
	}
	else if(prob>25&&prob<50){
		var distance = floatValue()*(rint(10)+1)*(rint(10)+1) + ra(types)
	}
	else{
		var distance = rint(ra(INT_NUMS)) + ra(types)
	}
   	return distance
}

txtdistanceValue = function (){
   	var types=["em","cm","px","mm",'in','pc','pt']//ex,'%'
   	var prob=rint(100)
   	if(prob>75){
   		var distance = rint(50000)
   		if(rint(2)){distance=distance%100}
   		distance+=ra(types)
	}
	else if(prob>50&&prob<75){
		var distance = [-1,1][Math.random()*2|0]*rint(500) + ra(types)
	}
	else if(prob>25&&prob<50){
		var distance = floatValue()*(rint(10)+1)*(rint(10)+1) + ra(types)
	}
	else{
		var distance = rint(ra(INT_NUMS)) + ra(types)
	}
   	return distance
}

function occurrences(string, subString, allowOverlapping){

    string+=""; subString+="";
    if(subString.length<=0) return string.length+1;

    var n=0, pos=0;
    var step=(allowOverlapping)?(1):(subString.length);

    while(true){
        pos=string.indexOf(subString,pos);
        if(pos>=0){ n++; pos+=step; } else break;
    }
    return(n);
}


shape = function() {
	var returnString = '';
	var shapes = ['circle','polygon','inset','ellipse'];
	var shapeBox = ['margin-box','border-box','padding-box','content-box'];
	var shape = ra(shapes)
	switch(shape){
		case 'circle':
			switch(rint(3)){
				case 0:
					returnString += shape+'('+ra([posdistanceValue2(),'closest-side','farthest-side']) +')'
					break;
				case 1:
					returnString += shape+'('+ra([posdistanceValue2(),'closest-side','farthest-side'])+' at '+distanceValue4()+')'
					break;
				// case 2:
// 					returnString += shape+'()'
// 					break
				case 2:
					returnString += shape+'('+ra([posdistanceValue2(),'closest-side','farthest-side'])+' at '+distanceValue4()+' '+distanceValue4()+')'
					break;
			}
			break;
		case 'inset':
			switch(rint(1)){
				case 0:
					returnString += shape+'('+rnd4Lengthsinset()+')'
					break;
				// case 1:
// 					returnString +=shape+'()'
// 					break;
				// case 2:
					// returnString += shape+'('+rnd4Lengths()+' '+distanceValue3()+')'
					// break;
		}
		break;
	case 'ellipse':
		switch(rint(3)){
			case 0:
				returnString += shape+'('+ra([distanceValue4(),'closest-side','farthest-side',distanceValue4()+' '+distanceValue4()]) +')'
				break;
			case 1:
				returnString += shape+'('+ra([distanceValue4(),'closest-side','farthest-side',distanceValue4()+' '+distanceValue4()])+' at '+distanceValue3()+')'
				break;
			// case 2:
// 				returnString += shape+'()'
// 				break
			case 2:
				returnString += shape+'('+ra([distanceValue4(),'closest-side','farthest-side',distanceValue4()+' '+distanceValue4()])+' at '+distanceValue4()+' '+distanceValue4()+')'
				break;
		}
		break;
	case 'polygon':
		// if(rint(2)) {
// 			returnString += shape+'('+ra(['nonzero','evenodd'])+','
// 		}
// 		else {
			returnString += shape+'('
		// }
		for (var i=0;i<(rint(20)+1);i++){
			returnString += distanceValue4() + ' ' + distanceValue4() +','
		}
		returnString += distanceValue4() + ' ' + distanceValue4() +')'
		break;
	}
	if(rint(2)) {
		return returnString
	}
	else  {
		return returnString + ' ' +ra(shapeBox)
	}
	
}


getTypedArray = function(type) {
	var returnString = '';
	var num = (rint(16)+1)
	if (type === undefined){
		var types  = ['Float64Array','Float32Array','Int32Array','Int16Array','Int8Array','Uint32Array','Uint16Array','Uint8Array','Uint8ClampedArray'];//'ArrayBuffer'
		var type = ra(types);
	}
	else {
		var type = type
	}
	returnString += 'new '+type+'(';
	if(!rint(5)){
		// returnString += ra([rint(ra(POS_INT_NUMS)),num,posfloatValue()])
		returnString += ra([rint(65),num,posfloatValue()])
	}
	else {
		returnString += '['
		while(num--){
			returnString += ra([rint(ra(INT_NUMS)),num,floatValue()])+','
		}
		returnString += ra([rint(ra(INT_NUMS)),num,floatValue()])+']'
	}
	returnString += ')'
	return returnString
}

/*
function benchMark(){
var num=20000
var output='Distance:'
var amount=num
while(num--){

	output+=' '+distanceValue()

}
//distanceValue= Amount: 20000 Negative: 2014 Positive: 17986 Floats: 718
//pxValue= Amount: 20000 Negative: 3076 Positive: 16924 Floats: 555
//randoms= Amount: 20000 Negative: 4842 Positive: 15158 Floats: 1607

var count_float = occurrences(output,'.',false)
var count_negative= occurrences(output,'-',false)
var count_zeropointX=occurrences(output,'0.',false)
var count_positive=amount-count_negative

console.log('Amount: '+amount+' Negative: '+count_negative+' Positive: '+count_positive+' Floats: '+count_float+' ZeroPoints: '+count_zeropointX)
console.log(output)
}

var num=20000
var poscount=0
var negcount=0
while(num--){
	var value=parseInt(percentValue())

	if(Math.abs(value)>100){poscount++}
	else{negcount++}
}

console.log('Over 100: '+poscount+' Under 100: '+negcount)


var num=200

while(num--){
	console.log(getRandomColor())
}

for(i=0;i<10;i++){
console.log(string(50))
}
*/
//console.log(randUni())
