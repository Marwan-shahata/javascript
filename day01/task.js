//-1

// for (var i = 1; i <= 6; ++i){
//     document.write(`<h${i}>this is header Number ${i} </h${i}>`);
   
    
// }


// //3- Write a script that takes from the user n values and returns their sum, stop
// receiving values from user when he enters 0 or sum exceeds 100, check that
// the entered data is numeric and inform the user with the total sum of the
// entered values.
 function calculateSum() {
    let sum = 0;
    let n;

    do {
        n = Number(prompt("Enter a number:"));
        if (isNaN(n)) continue;
        if (n === 0) break;
        
        sum += n;
        if (sum > 100) break;
    } while (true);

    return sum; // This "returns" the final value to wherever you called it
}

// How to use it:
let total = calculateSum();
document.writeln(`Your final sum is: ${total}`);


//4-
do {
    var myName = prompt("enter your name :");
    if (isNaN(myName)) {
        break;
    } else {
        alert("Please enter letters, not numbers.");
    }
} while (true);
do {
    var myYear = prompt("enter your Year :");
    if (!isNaN(myYear)&&myYear>=1980 && myYear<=2010) {
        break;
    } else {
        alert("Please enter year in number format greater than 1980 and  less than 2010.");
    }
} while (true);
document.writeln(`<h1>wellcome</h1><br>`)
document.writeln(`Name : ${myName}<br>`);

document.writeln(`Year : ${myYear}<br>`);
var now = new Date();
let age =Number(now.getFullYear())-myYear ;
document.writeln(`Age : ${age}<br>`);
