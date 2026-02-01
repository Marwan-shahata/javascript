//2.math Object.
do {
    var num = prompt("enter your Number :");
    var result = Math.sqrt(num);
    
} while (isNaN(num));
do {
    var r = prompt("enter your redias :");
    var area =( Math.PI)*(r**2);
    
} while (isNaN(r));


document.writeln(`<h1>wellcome</h1><br>`)
document.writeln(`result : ${result}<br>`);
document.writeln(`area : ${area}<br>`);