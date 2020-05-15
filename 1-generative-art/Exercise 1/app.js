// select the canvas
let canvas = document.querySelector('#canvas');
// initialize bunch of variables
let newRect;
let randomColor;
let randomLateralPosition;
let randomVerticalPosition;
let randomWidth;
let randomHeight;
let randomAngle;
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
  for (let i = 0; i <= 2000; i++) {
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
    // create the rectangle
    newRect = document.createElement('div');
    // style the rectangle with styles
    newRect.style.background = colors[randomColor];
    newRect.style.width = `${randomWidth}px`;
    newRect.style.height = `${randomHeight}px`;
    newRect.style.left = `${randomLateralPosition}%`;
    newRect.style.top = `${randomVerticalPosition}%`;
    newRect.style.transform = `rotate(${randomAngle}deg)`
    newRect.style.position = 'absolute';
    // add rectangle to canvas
    canvas.appendChild(newRect);
  }
}

generateArt();

