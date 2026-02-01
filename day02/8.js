// const months = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var myStringDate = new Date("2/24/2024");

// document.writeln(`<h1>wellcome to calender </h1><br>`)
// document.writeln(`day of now: ${days[now.getDay()]}<br>`);
// document.writeln(`month of now: ${months[now.getMonth()]}<br>`);
// document.writeln(`year of now: ${now.getFullYear()}<br>`);
// document.writeln(`<hr>`);

// document.writeln(`day of wanted: ${days[myStringDate.getDay()]}<br>`);
// document.writeln(`month of wanted: ${months[myStringDate.getMonth()]}<br>`);
// document.writeln(`year of wanted: ${myStringDate.getFullYear()}<br>`);









// 2.
// function GetTwoPArameterOnly(x, y) {
//     if (arguments.length !== 2) {
//         throw "arguments must be 2"
       
//     }
//     if (typeof x !== "number" || typeof y !== "number") {
//         throw "arguments must be numbers"
       
//     }

//     console.log(x,y)
// }
// GetTwoPArameterOnly(2,3)
// GetTwoPArameterOnly()




//3.

// function AddN() {
//     var sum = 0;
//     for (var i=0; i < arguments.length; ++i) {
//         var currentvalue = arguments[i];
//         if (typeof currentvalue !== "number" ) {
//         throw "arguments must be numbers"
       
//         }
//         sum += currentvalue;

       
//     }
   
//     return sum
// }
// var sum = AddN(10, 20, 30, 40,50,gkuugi)
//  console.log(sum)





// // 4.
// function RevarseN() {
//     var argarry;
//     var argarry = Array.from(arguments);
//     console.log(argarry.reverse());
// }

// RevarseN(30,20,30,40,50,0,10)




/*study*/
// console.log(null == undefined); // true
// console.log(typeof null)
// console.log(NaN == undefined); // false
// var str = "jsc"
// var o = 2 - "cdcd"
// console.log(NaN == str); // false
// console.log(NaN == o); // false
// console.log(typeof o)
// console.log( o)
// console.log(NaN)
// console.log(typeof o == typeof NaN) //true



let s = 'JavaScript';
s[0] = 'j';
console.log(s)
console.log(s[0])




