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

// Google Speed insights Optimize CSS Delivery X-Team
var loadDeferredStyles = function() {
    var addStylesNode = document.getElementById("deferred-styles");
    var replacement = document.createElement("div");
    replacement.innerHTML = addStylesNode.textContent;
    document.body.appendChild(replacement)
    addStylesNode.parentElement.removeChild(addStylesNode);
  };
  var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
  else window.addEventListener('load', loadDeferredStyles);
// End Google Speed insights Optimize CSS Delivery X-Team
