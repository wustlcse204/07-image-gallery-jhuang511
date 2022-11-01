image1 = document.getElementById("image1")
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



