let canvas = document.querySelector('#canvas');

let newRect;

let randomColor;
let randomLateralPosition;
let randomVerticalPosition;
let randomWidth;
let randomHeight;
let randomAngle;

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
  for (let i = 0; i <= 2000; i++) {
    randomColor = Math.floor(Math.random() * 8);
    randomVerticalPosition = Math.random() * 100;
    randomLateralPosition = Math.random() * 100;
    randomWidth = (Math.random() * 10) + 20;
    randomHeight = (Math.random() * 10) + 20;
    randomAngle = Math.random() * 360;
    newRect = document.createElement('div');
    newRect.style.background = colors[randomColor];
    newRect.style.width = `${randomWidth}px`;
    newRect.style.height = `${randomHeight}px`;
    newRect.style.left = `${randomLateralPosition}%`;
    newRect.style.top = `${randomVerticalPosition}%`;
    newRect.style.transform = `rotate(${randomAngle}deg)`
    newRect.classList.add('rectangle');
    canvas.appendChild(newRect);
  }
}

generateArt();

