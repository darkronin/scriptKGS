javascript:(function(){var div1=document.getElementsByClassName("Board Board-size-19")[0];div1.style.position="relative";div1.style.perspective="280px";div1.style.transform="rotate(180deg)";var div2=document.getElementsByClassName("Board-inner")[0]; div2.style.position="absolute";div2.style.transform="rotateX(-15deg)";var l=document.getElementsByClassName("Board-coord-label");for(var k=0;k<l.length;k++)l[k].style.transform="rotate(180deg)";div2.style.background="#dfbd6d";div1.style.background="#333";document.getElementsByClassName('GameScreen-board')[0].style.marginTop='-50px'})()