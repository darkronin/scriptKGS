javascript:(function(){for (var i = 1; i < 99999; i++) window.clearInterval(i);function randomColor(){ return '#'+Math.floor(Math.random()*16777215).toString(16); } var censorList = ["userstoCensor", "LATE", "richduan"], cl = [] /* censor keys */;var ula = [] /* user keys */, cla = [] /*colors*/; var ul = document.getElementsByClassName('UserList-item'); for(il = 0; il < ul.length ; il++){ utocensor = ul[il].innerText.split("]")[0];utocensorm = utocensor.split(" [")[0];if(censorList.indexOf(utocensorm)> 0) cl.push(utocensor);} for(il = 0; il < ul.length ; il++){ ula.push(ul[il].innerText.split("]")[0]);if(cl.indexOf(ul[il].innerText.split("]")[0])>0){cla.push('#333');}else{cla.push(randomColor());}}var g=function(){ var li = document.getElementsByClassName('ChatMessages-item'); for(ulai = 0; ulai < ula.length ; ulai++) for(il2 = 0; il2 < li.length ; il2++){if(li[il2].innerText.substr(0,14).includes( ula[ulai] )) /* use color */ li[il2].firstElementChild.style.background = cla[ulai] }; let a3=document.getElementsByClassName('UnseenBadge-minor');for(let ia3=0;ia3<a3.length;ia3++)a3[ia3].style.background='red';};g();setInterval(g, 3000);})();
