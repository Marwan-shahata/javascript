var continer = document.querySelector(".continer")
// console.log(continer)
var clone = document.querySelector(".clone")
var c;
clone.addEventListener('click', function () {
    c = clone.cloneNode(true);
    continer.appendChild(c);
    var randColor_1 = Math.round(Math.random() * 255);
    var randColor_2 = Math.round(Math.random() * 255);
    var randColor_3 = Math.round(Math.random() * 255);
    var fullColor = `rgb(${randColor_1},${randColor_2} ,${randColor_3})`;
    c.style.backgroundColor = fullColor;
   
});