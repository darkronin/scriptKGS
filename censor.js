javascript:(function(){var censorList = ["userstoCensor", "LATE"], ula = [] /* user keys */; var ul = document.getElementsByClassName('UserList-item'); for(il = 0; il < ul.length ; il++){ utocensor = ul[il].innerText.split("]")[0];utocensorm = utocensor.split(" [")[0];if(censorList.indexOf(utocensorm)> 0) ula.push(utocensor);}console.log(ula);var g=function(){ var li = document.getElementsByClassName('ChatMessages-item'); for(ulai = 0; ulai < ula.length ; ulai++) for(il2 = 0; il2 < li.length ; il2++){ if(li[il2].innerText.includes( ula[ulai] ))/* use censoring color */ li[il2].firstElementChild.style.background = '#333' };};g();setInterval(g, 1500);})();
