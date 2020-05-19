const BARNAV = document.createElement("nav");
const CANVAS = document.createElement("div");
const BTNREFRESH = document.createElement("button");
const IMAGE = document.createElement("img");
const RANGE1 = document.createElement("input");
const LABEL1 = document.createElement("label");

BARNAV.id = "barnav";
CANVAS.id = "canvas";
BTNREFRESH.id = "refresh";
CANVAS.style.width = "100vw";
CANVAS.style.height = "100vh";
CANVAS.style.width = "100vw";
CANVAS.style.height = "100vh";
BTNREFRESH.innerText = "Refresh";
IMAGE.src = "keys.png";
IMAGE.id = "keys";
LABEL1.innerText = "Size:";
RANGE1.type = "range";
RANGE1.min = "10";
RANGE1.max = "200";

document.body.appendChild(BARNAV);
BARNAV.appendChild(BTNREFRESH);
BARNAV.appendChild(LABEL1);
BARNAV.appendChild(RANGE1);
document.body.appendChild(CANVAS);

BARNAV.addEventListener("click", cleanUp);

function generateArt() {
  for (let i = 0; i <= 500; i++) {
    setTimeout(() => {
      const BRUSH = document.createElement("canvas");
      BRUSH.style.width = `${randomSize()}%`;
      BRUSH.style.height = `${randomSize()}%`;
      BRUSH.style.backgroundImage = randomBackground();
      BRUSH.style.position = "absolute";
      BRUSH.style.top = `${randomPositionY()}%`;
      BRUSH.style.left = `${randomPositionX()}%`;
      BRUSH.style.transform = `rotate(${randomAngle()}deg)`;
      BRUSH.style.borderRadius = `${randomBorder()}px`;
      BRUSH.style.opacity = `${randomOpacity()}`;
      // BRUSH.getContext("2d").drawImage(
      //   IMAGE,
      //   10,
      //   10,
      //   220,
      //   220,
      //   100,
      //   50,
      //   60,
      //   50
      // );
      CANVAS.appendChild(BRUSH);
    }, 5 * i);
  }
  CANVAS.appendChild(IMAGE);
}

function randomSize() {
  return Math.floor(Math.random() * 25) + 1;
}

function randomColor() {
  color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

function randomBackground() {
  return `linear-gradient(${randomAngle()}deg, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

function randomPositionX() {
  return Math.floor(Math.random() * 100);
}

function randomPositionY() {
  return Math.floor(Math.random() * 100) + 3;
}

function randomBorder() {
  return Math.floor(Math.random() * 100);
}

function randomAngle() {
  return Math.floor(Math.random() * 360);
}

function randomOpacity() {
  return Math.random().toFixed(2);
}

function cleanUp() {
  for (let i = 0; i <= 500; i++) {
    const BRUSH = document.querySelector("canvas");
    CANVAS.removeChild(BRUSH);
  }
  generateArt();
}
generateArt();

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));

function handleUpdate() {
  // const suffix = this.dataset.sizing || '';
  // document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  console.log("work in process");
}
