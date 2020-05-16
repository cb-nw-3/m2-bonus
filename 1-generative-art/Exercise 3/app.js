alert('Click on the dark border for a new piece of art')

// select the canvas and html
let canvas = document.querySelector('#canvas');
let html = document.querySelector('html');
let container = document.querySelector('.container');
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

function generateArt() {
  // create 2000 rectangles
  for (let i = 0; i <= 1000; i++) {
    // random number for color
    randomColor = Math.floor(Math.random() * 8);
    // random position for top value 0 to 100
    randomVerticalPosition = Math.random() * 100;
    // random position for left value 0 to 100
    randomLateralPosition = Math.random() * 100;
    // random width between 20 and 30
    randomWidth = (Math.random() * 10) + 20;
    // random height between 20 and 30
    randomHeight = (Math.random() * 10) + 20;
    // random angle for rectangle rotation
    randomAngle = Math.random() * 360;
    // random radius for border
    borderRadius = Math.floor((Math.random() * 5) + 5);
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
    newRect.style.background = `linear-gradient(90deg, ${colors[randomColor]} 20%, #e1e1e1 100%)`;
    newRect.style.width = `${randomWidth}px`;
    newRect.style.height = `${randomHeight}px`;
    newRect.style.left = `${randomLateralPosition}%`;
    newRect.style.top = `${randomVerticalPosition}%`;
    newRect.style.transform = `rotate(${randomAngle}deg)`
    newRect.style.position = 'absolute';
    newRect.style.borderRadius = `${borderRadius}px`;
    newRect.style.mixBlendMode = mixBlendMode[randomMixBlend];
    newRect.style.boxShadow = `0px 0px ${boxShadowBlur}px ${boxShadowSpread}px rgba(0, 0, 0, 1)`;
    // add rectangle to canvas
    canvas.appendChild(newRect);
  }
}
// initial function call
generateArt();

html.addEventListener('click', function() {
  // remove childs until firstChild is false
  while (canvas.firstChild) {
    canvas.removeChild(canvas.lastElementChild);
  }
  generateArt()
})
// remove the propagation from clicks on container/canvas
container.addEventListener('click', e => {
  e.stopPropagation();
})