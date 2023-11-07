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
   }
   xhr.send()
})()