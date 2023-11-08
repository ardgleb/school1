outputimg = new Array();
o = new Array();
(function () {
   var app = "https://script.google.com/macros/s/AKfycbwADbUxRlw37h-W0ChVgBpnPf9bQaUj2ILEqAOu17DNmYkF6nA49Sv6XyeoB1FkAxSy/exec",
      x=0;
      var xhr = new XMLHttpRequest();
   xhr.open('GET', app);
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== 4) return;

     if (xhr.status == 200) {
        try {
            var r = JSON.parse(xhr.responseText),
               result = r["result"];
            for (var i = 0; i < result.length; i++){
                  var obj = r["result"][i];
                  outputimg[x] = obj.join();
                  x++;
            }
        } catch(e) {}
     }
    elem=Array.from(outputimg);
    var src1= Array(elem[0]);
    document.getElementById('img1').src=src1;
    var src2= Array(elem[1]);
    document.getElementById('img2').src=src2;
    var src3= Array(elem[2]);
    document.getElementById('img3').src=src3;
    var src4= Array(elem[3]);
    document.getElementById('img4').src=src4;
    var src5= Array(elem[4]);
    document.getElementById('img5').src=src5;
   }
   xhr.send()
})()
outputdesc = new Array();
(function () {
   var app = "https://script.google.com/macros/s/AKfycbyRLHJ9cJcs9ZKGmwk3DkTz2z1PitGlo_Es56b_-cmEc0saHKqAfncrFV34Ai8hHR-t/exec",
      x=0;
      var xhr = new XMLHttpRequest();
   xhr.open('GET', app);
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== 4) return;

     if (xhr.status == 200) {
        try {
            var r = JSON.parse(xhr.responseText),
               result = r["result"];
            for (var i = 0; i < result.length; i++){
                  var obj = r["result"][i];
                  outputdesc[x] = obj.join();
                  x++;
            }
        } catch(e) {}
     }
    elem=Array.from(outputdesc);
    var src1= Array(elem[0]);
    document.getElementById('description1').innerHTML=src1;
    var src2= Array(elem[1]);
    document.getElementById('description2').innerHTML=src2;
    var src3= Array(elem[2]);
    document.getElementById('description3').innerHTML=src3;
    var src4= Array(elem[3]);
    document.getElementById('description4').innerHTML=src4;
    var src5= Array(elem[4]);
    document.getElementById('description5').innerHTML=src5;
   }
   xhr.send()
})()
outputimg2 = new Array();
(function () {
   var app = "https://script.google.com/macros/s/AKfycbz1H3K1s75I22NfyVjU5nDtvANiIusclhH2CNdTBAyEdX6rREl55C9AYi7pBFb9maU12w/exec",
      x=0;
      var xhr = new XMLHttpRequest();
   xhr.open('GET', app);
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== 4) return;

     if (xhr.status == 200) {
        try {
            var r = JSON.parse(xhr.responseText),
               result = r["result"];
            for (var i = 0; i < result.length; i++){
                  var obj = r["result"][i];
                  outputimg2[x] = obj.join();
                  x++;
            }
        } catch(e) {}
     }
    elem=Array.from(outputimg2);
    var src1= Array(elem[0]);
    document.getElementById('img1.2').src=src1;
    var src2= Array(elem[1]);
    document.getElementById('img2.2').src=src2;
    var src3= Array(elem[2]);
    document.getElementById('img3.2').src=src3;
    var src4= Array(elem[3]);
    document.getElementById('img4.2').src=src4;
    var src5= Array(elem[4]);
    document.getElementById('img5.2').src=src5;
   }
   xhr.send()
})()

outputname = new Array();
(function () {
   var app = "https://script.google.com/macros/s/AKfycbzXWjmAVCC3Mrm6n9PGA-yMZ_ERcXT-vBY7hXo17vpDAQNDasr0fi5dXMpVGn0MT7L6/exec",
      x=0;
      var xhr = new XMLHttpRequest();
   xhr.open('GET', app);
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== 4) return;

     if (xhr.status == 200) {
        try {
            var r = JSON.parse(xhr.responseText),
               result = r["result"];
            for (var i = 0; i < result.length; i++){
                  var obj = r["result"][i];
                  outputname[x] = obj.join();
                  x++;
            }
        } catch(e) {}
     }
    elem=Array.from(outputname);
    var src1= Array(elem[0]);
    document.getElementById('name1').innerHTML=src1;
    var src2= Array(elem[1]);
    document.getElementById('name2').innerHTML=src2;
    var src3= Array(elem[2]);
    document.getElementById('name3').innerHTML=src3;
    var src4= Array(elem[3]);
    document.getElementById('name4').innerHTML=src4;
    var src5= Array(elem[4]);
    document.getElementById('name5').innerHTML=src5;
   }
   xhr.send()
})()
outputimg = new Array();
o = new Array();
(function () {
   var app = "https://script.google.com/macros/s/AKfycbwADbUxRlw37h-W0ChVgBpnPf9bQaUj2ILEqAOu17DNmYkF6nA49Sv6XyeoB1FkAxSy/exec",
      x=0;
      var xhr = new XMLHttpRequest();
   xhr.open('GET', app);
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== 4) return;

     if (xhr.status == 200) {
        try {
            var r = JSON.parse(xhr.responseText),
               result = r["result"];
            for (var i = 0; i < result.length; i++){
                  var obj = r["result"][i];
                  outputimg[x] = obj.join();
                  x++;
            }
        } catch(e) {}
     }
    elem=Array.from(outputimg);
    var src1= Array(elem[0]);
    document.getElementById('imgq1').src=src1;
    var src2= Array(elem[1]);
    document.getElementById('imgq2').src=src2;
    var src3= Array(elem[2]);
    document.getElementById('imgq3').src=src3;
    var src4= Array(elem[3]);
    document.getElementById('imgq4').src=src4;
    var src5= Array(elem[4]);
    document.getElementById('imgq5').src=src5;
   }
   xhr.send()
})()
outputdesc = new Array();
(function () {
   var app = "https://script.google.com/macros/s/AKfycbyRLHJ9cJcs9ZKGmwk3DkTz2z1PitGlo_Es56b_-cmEc0saHKqAfncrFV34Ai8hHR-t/exec",
      x=0;
      var xhr = new XMLHttpRequest();
   xhr.open('GET', app);
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== 4) return;

     if (xhr.status == 200) {
        try {
            var r = JSON.parse(xhr.responseText),
               result = r["result"];
            for (var i = 0; i < result.length; i++){
                  var obj = r["result"][i];
                  outputdesc[x] = obj.join();
                  x++;
            }
        } catch(e) {}
     }
    elem=Array.from(outputdesc);
    var src1= Array(elem[0]);
    document.getElementById('descriptionq1').innerHTML=src1;
    var src2= Array(elem[1]);
    document.getElementById('descriptionq2').innerHTML=src2;
    var src3= Array(elem[2]);
    document.getElementById('descriptionq3').innerHTML=src3;
    var src4= Array(elem[3]);
    document.getElementById('descriptionq4').innerHTML=src4;
    var src5= Array(elem[4]);
    document.getElementById('descriptionq5').innerHTML=src5;
   }
   xhr.send()
})()
outputimg2 = new Array();
(function () {
   var app = "https://script.google.com/macros/s/AKfycbz1H3K1s75I22NfyVjU5nDtvANiIusclhH2CNdTBAyEdX6rREl55C9AYi7pBFb9maU12w/exec",
      x=0;
      var xhr = new XMLHttpRequest();
   xhr.open('GET', app);
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== 4) return;

     if (xhr.status == 200) {
        try {
            var r = JSON.parse(xhr.responseText),
               result = r["result"];
            for (var i = 0; i < result.length; i++){
                  var obj = r["result"][i];
                  outputimg2[x] = obj.join();
                  x++;
            }
        } catch(e) {}
     }
    elem=Array.from(outputimg2);
    var src1= Array(elem[0]);
    document.getElementById('imgq1.2').src=src1;
    var src2= Array(elem[1]);
    document.getElementById('imgq2.2').src=src2;
    var src3= Array(elem[2]);
    document.getElementById('imgq3.2').src=src3;
    var src4= Array(elem[3]);
    document.getElementById('imgq4.2').src=src4;
    var src5= Array(elem[4]);
    document.getElementById('imgq5.2').src=src5;
   }
   xhr.send()
})()

outputname = new Array();
(function () {
   var app = "https://script.google.com/macros/s/AKfycbzXWjmAVCC3Mrm6n9PGA-yMZ_ERcXT-vBY7hXo17vpDAQNDasr0fi5dXMpVGn0MT7L6/exec",
      x=0;
      var xhr = new XMLHttpRequest();
   xhr.open('GET', app);
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== 4) return;

     if (xhr.status == 200) {
        try {
            var r = JSON.parse(xhr.responseText),
               result = r["result"];
            for (var i = 0; i < result.length; i++){
                  var obj = r["result"][i];
                  outputname[x] = obj.join();
                  x++;
            }
        } catch(e) {}
     }
    elem=Array.from(outputname);
    var src1= Array(elem[0]);
    document.getElementById('nameq1').innerHTML=src1;
    var src2= Array(elem[1]);
    document.getElementById('nameq2').innerHTML=src2;
    var src3= Array(elem[2]);
    document.getElementById('nameq3').innerHTML=src3;
    var src4= Array(elem[3]);
    document.getElementById('nameq4').innerHTML=src4;
    var src5= Array(elem[4]);
    document.getElementById('nameq5').innerHTML=src5;
   }
   xhr.send()
})()
var meneger=0;
var design=0;
var prog=0;
var recom=0;
function check(x, y){
    y=document.getElementById(y).innerHTML;
    if(document.getElementById(x).checked){
        if(y=='менеджмент'){
            meneger++;
        }
        if(y=='дизайн'){
            design++;
        }
        if(y=='программирование'){
            prog++;
        }
    }
    if(meneger>design&&meneger>prog){
        document.getElementById("recomendation").innerHTML="менеджмент";
        document.getElementById("share").href="https://t.me/share/url?url=neymark.neocities.org&text=Этот сайт помогает определиться с направлением деятельности. Мне больше подходит направление 'менеджмент'.";
        document.getElementById('courc1').style.display="inline-block";
        document.getElementById('courc2').style.display="none";
        document.getElementById('courc3').style.display="none";
        document.getElementById('courc4').style.display="none";
        document.getElementById('courc5').style.display="none";
    }
    if(design>meneger&&design>prog){
        document.getElementById("recomendation").innerHTML="дизайн";
        document.getElementById("share").href="https://t.me/share/url?url=neymark.neocities.org&text=Этот сайт помогает определиться с направлением деятельности. Мне больше подходит направление 'дизайн'.";
        document.getElementById('courc1').style.display="none";
        document.getElementById('courc2').style.display="inline-block";
        document.getElementById('courc3').style.display="inline-block";
        document.getElementById('courc4').style.display="none";
        document.getElementById('courc5').style.display="none";
    }
    if(prog>design&&prog>meneger){
        document.getElementById("recomendation").innerHTML="программирование";
        document.getElementById("share").href="https://t.me/share/url?url=neymark.neocities.org&text=Этот сайт помогает определиться с направлением деятельности. Мне больше подходит направление 'программирование'.";
        document.getElementById('courc1').style.display="none";
        document.getElementById('courc2').style.display="none";
        document.getElementById('courc3').style.display="none";
        document.getElementById('courc4').style.display="inline-block";
        document.getElementById('courc5').style.display="inline-block";
    }
}