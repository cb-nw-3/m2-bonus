const CANVAS = document.createElement("div");
CANVAS.id = "canvas";
CANVAS.style.width = "100vw";
CANVAS.style.height = "100vh";
document.body.appendChild(CANVAS);

function generateArt() {
  for (let i = 0; i <= 500; i++) {
    setTimeout(() => {
      const BRUSH = document.createElement("canvas");
      BRUSH.style.width = `${randomSize()}%`;
      BRUSH.style.height = `${randomSize()}%`;
      BRUSH.style.backgroundImage = randomBackground();
      BRUSH.style.position = "absolute";
      BRUSH.style.top = `${randomPosition()}%`;
      BRUSH.style.left = `${randomPosition()}%`;
      BRUSH.style.transform = `rotate(${randomAngle()}deg)`;
      BRUSH.style.borderRadius = `${randomPosition()}px`;
      CANVAS.appendChild(BRUSH);
    }, 50 * i);
  }
}

function randomSize() {
  return Math.floor(Math.random() * 15) + 1;
}

function randomColor() {
  color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

function randomBackground() {
  return `linear-gradient(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

function randomPosition() {
  return Math.floor(Math.random() * 100);
}

function randomAngle() {
  return Math.floor(Math.random() * 360);
}

generateArt();
