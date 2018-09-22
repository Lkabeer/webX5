var next = document.getElementById('next');
var pre = document.getElementById('pre');
var slideShowX = document.getElementById('slideShowX');

function nextImage() {
    slideShowX.style.backgroundImage = "url('../assets/bmw101.jpg')";
}

function preImage() {
    slideShowX.style.backgroundImage = "url('../assets/bmw102.jpg')";
}