alert('Click on the dark border for a new piece of art')

// select the canvas and html
let canvas = document.querySelector('#canvas');
let html = document.querySelector('html');
let container = document.querySelector('#canvas');
let sliderWidth;
let sliderHeight;
let sliderGradient;
let widthLiveValue = document.querySelector('#widthValue');
let heightLiveValue = document.querySelector('#heightValue');
let gradientLiveValue = document.querySelector('#gradientValue');
// initialize bunch of variables
let newRect;
let randomColor;
let randomLateralPosition;
let randomVerticalPosition;
let randomWidth;
let randomHeight;
let randomAngle;
let borderRadius;
let boxShadowBlur;
let boxShadowSpread;
let randomMixBlend;
// array of different mix blend mode
let mixBlendMode = [
  'normal',
  'multiply',
  'hard-light',
  'difference',
  'exclusion',
  'hue',
  'color',
  'soft-light'
];
// set array of rnadom colors
let colors = [
  "#A56BFF", 
  "#63DBEB", 
  "#90FF61", 
  "#EBC462", 
  "#FF6A5E", 
  "#759CFF", 
  "#6CEBA0", 
  "#EBA06C", 
  "#FF69FF"
];

function generateArt(widthValue = 20, heightValue = 10, gradientValue = 100) {
  // create 2000 rectangles
  for (let i = 0; i <= 1000; i++) {
    // random number for color
    randomColor = Math.floor(Math.random() * 8);
    // random position for top value 0 to 100
    randomVerticalPosition = Math.random() * 100;
    // random position for left value 0 to 100
    randomLateralPosition = Math.random() * 100;
    // random width between 20 and 30
    randomWidth = (Math.random() * 10) + 10 + widthValue;
    // random height between 20 and 30
    randomHeight = (Math.random() * 10) + 10 + heightValue;
    // random angle for rectangle rotation
    randomAngle = Math.random() * 360;
    // random radius for border
    borderRadius = Math.floor((Math.random() * 15));
    // random number for blend mix
    randomMixBlend = Math.floor((Math.random() * 8) + 1);
    // random number for shadow box blur
    boxShadowBlur = Math.floor((Math.random() * 15) + 1);
    // random number for shadow box spread
    boxShadowSpread = Math.floor((Math.random() * 2) - 1);
    // create the rectangle
    newRect = document.createElement('div');
    // style the rectangle with styles
    newRect.style.background = colors[randomColor];
    newRect.style.background = `linear-gradient(90deg, ${colors[randomColor]} ${gradientValue}%, #f1f1f1 100%)`;
    newRect.style.width = `${randomWidth}px`;
    newRect.style.height = `${randomHeight}px`;
    newRect.style.left = `${randomLateralPosition}%`;
    newRect.style.top = `${randomVerticalPosition}%`;
    newRect.style.transform = `rotate(${randomAngle}deg)`
    newRect.style.position = 'absolute';
    newRect.style.borderRadius = `${borderRadius}px`;
    // // newRect.style.mixBlendMode = mixBlendMode[randomMixBlend];
    // // newRect.style.boxShadow = `0px 0px ${boxShadowBlur}px ${boxShadowSpread}px rgba(0, 0, 0, 1)`;
    // add rectangle to canvas
    canvas.appendChild(newRect);
  }
}

function resetArt() {
  // grab the values in the input and change it to numbers
  let a = parseInt(document.querySelector('#sliderWidth').value);
  let b = parseInt(document.querySelector('#sliderHeight').value);
  let c = parseInt(document.querySelector('#sliderGradient').value);
  // remove childs until firstChild is false
  while (canvas.firstChild) {
    canvas.removeChild(canvas.lastElementChild);
  }
  generateArt(a, b, c)
}

function stopPropagation(e){
  e.stopPropagation();
}

generateArt();

html.addEventListener('click', resetArt)

// document.querySelector('#sliderWidth').addEventListener('change', function(){
//   let a = parseInt(document.querySelector('#sliderWidth').value);
//   let b = parseInt(document.querySelector('#sliderHeight').value);
//   let c = parseInt(document.querySelector('#sliderGradient').value);
//   widthLiveValue.innerText = `${document.querySelector('#sliderWidth').value}`;
//   resetArt(a, b, c);
// })
// document.querySelector('#sliderHeight').addEventListener('change', function(){
//   let a = parseInt(document.querySelector('#sliderWidth').value);
//   let b = parseInt(document.querySelector('#sliderHeight').value);
//   let c = parseInt(document.querySelector('#sliderGradient').value);
//   heightLiveValue.innerText = `${document.querySelector('#sliderHeight').value}`;
//   resetArt(a, b, c);
// })
// document.querySelector('#sliderGradient').addEventListener('change', function(){
//   let a = parseInt(document.querySelector('#sliderWidth').value);
//   let b = parseInt(document.querySelector('#sliderHeight').value);
//   let c = parseInt(document.querySelector('#sliderGradient').value);
//   gradientLiveValue.innerText = `${document.querySelector('#sliderGradient').value}`;
//   resetArt(a, b, c);
// })

let sliderFunction = function() {
  // grab input values and transform it in a number
  let a = parseInt(document.querySelector('#sliderWidth').value);
  let b = parseInt(document.querySelector('#sliderHeight').value);
  let c = parseInt(document.querySelector('#sliderGradient').value);
  // update slider current value
  if (this.id === 'sliderWidth') {
    widthLiveValue.innerText = `${document.querySelector('#sliderWidth').value}`;
  } else if (this.id === 'sliderHeight') {
    heightLiveValue.innerText = `${document.querySelector('#sliderHeight').value}`;
  } else if (this.id === 'sliderGradient') {
    gradientLiveValue.innerText = `${document.querySelector('#sliderGradient').value}`;
  }
  resetArt(a, b, c);
}
// add the change event listener to each slider
document.querySelector('#sliderWidth').addEventListener('change', sliderFunction)
document.querySelector('#sliderHeight').addEventListener('change', sliderFunction)
document.querySelector('#sliderGradient').addEventListener('change', sliderFunction)
// remove the propagation from clicks on container/canvas and sliders
container.addEventListener('click', stopPropagation)
document.querySelector('#sliderWidth').addEventListener('click', stopPropagation)
document.querySelector('#sliderHeight').addEventListener('click', stopPropagation)
document.querySelector('#sliderGradient').addEventListener('click', stopPropagation)