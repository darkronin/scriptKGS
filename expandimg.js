javascript:(function(){function displayimg(){var r = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;var li = document.getElementsByClassName('ChatMessages-item'); for(il2 = 0; il2 < li.length ; il2++){  if(r.test(li[il2].innerText) && li[il2].childElementCount == 2){let srcurl = li[il2].innerText.match(r)[0];var cont =  li[il2].parentElement;i3 = document.createElement('img');i3.src = srcurl;i3.width = '300';d3 = document.createElement('div');d3.marginLeft = '30px';d3.appendChild(i3);li[il2].appendChild(d3);}}};setInterval( displayimg, 3000 );})();