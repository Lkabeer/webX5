var spinnerX = document.querySelector('#spinnerX');
var slideShowX = document.querySelector('#slideShowX');

var next = document.getElementById('next');
var pre = document.getElementById('pre');

function nextImage() {
    slideShowX.style.backgroundImage = "url('./assets/bmw101.jpg')";
}

function preImage() {
    slideShowX.style.backgroundImage = "url('./assets/bmw102.jpg')";
}

// setTimeout(() => {
//     spinnerX.style.display = 'none';
//     slideShowX.style.display = 'block';
// }, 2000);

window.addEventListener('load', function() {
    spinnerX.style.display = 'none';
    slideShowX.style.display = 'block';
    console.log('All assets are loaded')
});