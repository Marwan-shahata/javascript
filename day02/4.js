1.1

var arr = [4,8,1]
var sum = 0;
 var div = 1;
var mult = 1;
  
for (var i = 0; i < arr.length; ++i){

    sum += arr[i];
    div = arr[i]/div;
    mult *= arr[i];


        
       
    }
    

document.writeln(`<h1>wellcome</h1><br>`);
document.writeln(`sum : ${sum}<br>`);
document.writeln(`Result of mult : ${mult}<br>`);
document.writeln(`Result of divition : ${div}<br>`);