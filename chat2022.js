javascript: (function() {
    for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
    function randomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    var hardLogoff = true;
    var censorList = ["userstoCensor", "testuser1", "testuser2"]
      , cl = []/* censor keys */
    ;
    var ula = []/* user keys */
      , cla = []/*colors*/
    ;
    var ul = document.getElementsByClassName('UserList-item');
    for (il = 0; il < ul.length; il++) {
        utocensor = ul[il].innerText.split("]")[0];
        utocensorm = utocensor.split(" [")[0];
        if (censorList.indexOf(utocensorm) > 0) {
            /* old grayout */
            cl.push(utocensorm);
        }
    }
    console.log(cl);
    for (il1 = 0; il1 < ul.length; il1++) {
        ula.push(ul[il1].innerText.split("]")[0]);
        if (cl.indexOf(ul[il1].innerText.split("]")[0].split(" [")[0]) >= 0) {
            cla.push('#333');
        } else {
            cla.push(randomColor());
        }
    }
    console.log(cla);
    var g = function() {
        document.getElementsByClassName('RoomChat-messages')[0].style.background = 'cadetblue';
        var ul = document.getElementsByClassName('UserList-item');
        for (il = 0; il < ul.length; il++) {
            utocensor = ul[il].innerText.split("]")[0];
            utocensorm = utocensor.split(" [")[0];
            if (censorList.indexOf(utocensorm) > 0) {
                if (hardLogoff) {
                    /* straight logoff */
                    document.getElementsByClassName('MainNav-account-trigger')[0].click();
                    var f = document.getElementsByClassName('MoreMenu-item')[1];
                    f.click();
                    alert('Logging out for your own protection');
                }
            }
        }
        var li = document.getElementsByClassName('ChatMessages-item');
        for (ulai = 0; ulai < ula.length; ulai++)
            for (il2 = 0; il2 < li.length; il2++) {
                if (li[il2].innerText.substr(0, 14).includes(ula[ulai])) {
                    /* use color */
                    li[il2].firstElementChild.style.background = cla[ulai];
                    li[il2].firstElementChild.style.boxShadow = '2px 2px';
                }
            }
        ;let a3 = document.getElementsByClassName('UnseenBadge-minor');
        for (let ia3 = 0; ia3 < a3.length; ia3++)
            a3[ia3].style.background = 'red';
        let cuser = '';
        let floodcount = 0;
        const MAXFLOOD = 3;
        let maxflood2 = MAXFLOOD + 1;
        for (il2 = 0; il2 < li.length; il2++) {
            if (cuser == li[il2].innerText.substr(0, 11).split("]")[0]) {
                floodcount++;
                if (floodcount >= MAXFLOOD) {
                    if (floodcount >= maxflood2) {
                        /*console.log('user ', cuser, ' is really flooding!');*/
                        li[il2].style.display = 'none';
                    } else {
                        li[il2].style.transform = "scale(0.65)";
                        li[il2].style.marginLeft = "-18%";
                    }
                }
            } else {
                cuser = li[il2].innerText.substr(0, 11).split("]")[0];
                floodcount = 0;
            }
        }
        var t1 = document.getElementsByClassName('ChatScreen-tab')[1];
        if (t1)
            if (t1.children[0].children[0].children[0].children[0]) {
                if (t1.children[0].children[0].children[0].children[0].className == 'ChatUnseenBadge')
                    document.title = '(' + t1.children[0].children[0].children[0].children[0].innerText + ') unread';
            } else {
                document.title = 'Shin KGS';
            }
    };
    g();
    setInterval(g, 2500);    
    document.getElementsByClassName('RoomChat-messages-container')[0].style.right = '110px';
    document.getElementsByClassName('RoomChat-sidebar')[0].style.width = '110px';
}
)();
