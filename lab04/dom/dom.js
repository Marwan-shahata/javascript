
var imagOriginal = document.querySelector(".center");
var nav = document.querySelector("#navigation");
var ul = document.querySelector("#nav")
var originalImg = document.querySelector("#header");

imagOriginal.addEventListener('click', function () {
imagOriginal.style.position = "fixed"; 
imagOriginal.style.top = "0px";
imagOriginal.style.right = "0px";

nav.style.position = "fixed";
nav.style.top = "50%"; 
nav.style.left = "50%";
nav.style.transform = "translate(-50%, -50%)";
ul.style.listStyleType = "circle";
 

 var imgBottomRight = originalImg.cloneNode(true);
    document.body.appendChild(imgBottomRight);
    imgBottomRight.style.position = "fixed";
    imgBottomRight.style.bottom = "0px";
    imgBottomRight.style.left = "0px";
});