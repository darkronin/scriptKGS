javascript:(function(){var censorList = ["userstoCensor", "Hu"], ula = [] /* user keys */, cla = [] /*counts*/; function beep(){var snd = new Audio("data:audio/mpeg;base64,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");snd.play();}function playSound( debug ) { if(debug)console.log( 'beep!' );if(!debug) beep();}var ul = document.getElementsByClassName('UserList-item'); for(il = 0; il < ul.length ; il++){ utocensor = ul[il].innerText.split("]")[0];utocensorm = utocensor.split(" [")[0];if(censorList.indexOf(utocensorm)> 0) {ula.push(utocensor);cla.push(0);}};window.cla0 = cla.slice();var g=function(){ var li = document.getElementsByClassName('ChatMessages-item'); cla.fill(0);for(ulai = 0; ulai < ula.length ; ulai++) for(il2 = 0; il2 < li.length ; il2++){ if(li[il2].innerText.substr(0,14).includes( ula[ulai] )) /* use censoring color */ cla[ulai]++; };for(ulai = 0; ulai < ula.length ; ulai++){ if(window.cla0[ulai]==cla[ulai]){} else {if(cla[ulai]==0){} else { console.log(ula[ulai], 'has spoken');playSound();}} } window.cla0 = cla.slice();};g();setInterval(g, 400);})();