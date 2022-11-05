/** image1 = document.getElementById("image1")
image2 = document.getElementById("image2")

function largerImage() {
    image1.style.transform = "scale(2)";
}

function resetImage() {
    image1.style.transform = "scale(1)";
}

function hoverImage() {
    image2.style.transform = "scale(1.5)"
}

 */

/** initialize image variables using an array */
var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var image3 = document.getElementById("image3");
var image4 = document.getElementById("image4");
var image5 = document.getElementById("image5");
var image6 = document.getElementById("image7");
var image8 = document.getElementById("image8");
var image9 = document.getElementById("image9");
var image10 = document.getElementById("image10");
var image11 = document.getElementById("image11");
var image12 = document.getElementById("image12");

let imageArray = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];

/** on hover, changes the color of the image border*/
document.getElementById("image1").onmouseover = function() {hover("image1")};
document.getElementById("image1").onmouseout = function() {endHover("image1")};

document.getElementById("image2").onmouseover = function() {hover("image2")};
document.getElementById("image2").onmouseout = function() {endHover("image2")};

document.getElementById("image3").onmouseover = function() {hover("image3")};
document.getElementById("image3").onmouseout = function() {endHover("image3")};

document.getElementById("image4").onmouseover = function() {hover("image4")};
document.getElementById("image4").onmouseout = function() {endHover("image4")};

document.getElementById("image5").onmouseover = function() {hover("image5")};
document.getElementById("image5").onmouseout = function() {endHover("image5")};

document.getElementById("image6").onmouseover = function() {hover("image6")};
document.getElementById("image6").onmouseout = function() {endHover("image6")};

document.getElementById("image7").onmouseover = function() {hover("image7")};
document.getElementById("image7").onmouseout = function() {endHover("image7")};

document.getElementById("image8").onmouseover = function() {hover("image8")};
document.getElementById("image8").onmouseout = function() {endHover("image8")};

document.getElementById("image9").onmouseover = function() {hover("image9")};
document.getElementById("image9").onmouseout = function() {endHover("image9")};

document.getElementById("image10").onmouseover = function() {hover("image10")};
document.getElementById("image10").onmouseout = function() {endHover("image10")};

document.getElementById("image11").onmouseover = function() {hover("image11")};
document.getElementById("image11").onmouseout = function() {endHover("image11")}

document.getElementById("image12").onmouseover = function() {hover("image12")};
document.getElementById("image12").onmouseout = function() {endHover("image12")}

function hover(id){
    document.getElementById(id).style.border = "25px solid red";
}
function endHover(id){
    document.getElementById(id).style.border = "25px solid #464545";
}

/** on click, enlarge image*/
document.getElementById("image1").onclick = function() {enlarge("image1")};

function enlarge(id){
    image = document.getElementById(id);
    image.style.transform = "scale(2.5)";
}