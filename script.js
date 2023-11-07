let string = [];
output = new Array();
(function () {
   var app = "https://script.google.com/macros/s/AKfycbw94O29dZmG-XE3bX48460aetU81MQW02-skPb2msQpUtSv7K2fE4WNfWij7fFUnNRN/exec",
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
                  output[x] = obj.join();
                  x++;
            }
        } catch(e) {}
     }
document.getElementById('info').innerHTML = output;
o=Array.from(output);

var col=Object.keys(o).length-1;
for(i=0; i<=col; i++){
alert(o[i]);
}
o1=Array.from(o[0]);
alert(o1[0]);
document.getElementById('img1').src = o1[0];
   }
   xhr.send()
})()
