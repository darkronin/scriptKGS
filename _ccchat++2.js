javascript:(function(){for (var i = 1; i < 99999; i++) window.clearInterval(i);function randomColor(){ return '#'+Math.floor(Math.random()*16777215).toString(16); } var censorList = ["userstoCensor", "LATE", "richduan", "domie","xypher", "highhand", 'Hu'], cl = [] /* censor keys */;var ula = [] /* user keys */, cla = [] /*colors*/; const imageURL="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__340.jpg"; var ul = document.getElementsByClassName('UserList-item'); for(il = 0; il < ul.length ; il++){ utocensor = ul[il].innerText.split("]")[0];utocensorm = utocensor.split(" [")[0];if(censorList.indexOf(utocensorm)> 0) cl.push(utocensorm);}console.log(cl); for(il1 = 0; il1 < ul.length ; il1++){ ula.push(ul[il1].innerText.split("]")[0]);if(cl.indexOf(ul[il1].innerText.split("]")[0].split(" [")[0])>=0){cla.push('#333');}else{cla.push(randomColor());}}console.log(cla);var g=function(){if(document.getElementsByClassName("UserChat").length>0)document.getElementsByClassName("UserChat")[0].style.background="darkslategrey";var ul = document.getElementsByClassName('RoomChat-messages');if(ul.length>0){ul[0].style.backgroundImage="URL("+imageURL+")";var side = document.getElementsByClassName('RoomChat-sidebar');side[0].style.background='lightgray';}var li = document.getElementsByClassName('ChatMessages-item'); for(ulai = 0; ulai < ula.length ; ulai++) for(il2 = 0; il2 < li.length ; il2++){if(li[il2].innerText.substr(0,14).includes( ula[ulai] )) /* use color */ li[il2].firstElementChild.style.background = cla[ulai] }; let a3=document.getElementsByClassName('UnseenBadge-minor');for(let ia3=0;ia3<a3.length;ia3++)a3[ia3].style.background='red'; let cuser='';let floodcount = 0;const MAXFLOOD = 3;let maxflood2 = MAXFLOOD + 1;for(il2 = 0; il2 < li.length ; il2++){ if(cuser==li[il2].innerText.substr(0,11).split("]")[0]){ floodcount++;if(floodcount >= MAXFLOOD){if( floodcount >= maxflood2 ){ /*console.log('user ', cuser, ' is really flooding!')*/;li[il2].style.display = 'none';} else {li[il2].style.transform = "scale(0.65)";li[il2].style.marginLeft = "-18%";}}}else{cuser=li[il2].innerText.substr(0,11).split("]")[0];floodcount = 0; }}};g();setInterval(g, 2500);})();
