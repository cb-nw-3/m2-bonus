const BARNAV = document.createElement("nav");
const CANVAS = document.createElement("div");
const BTNREFRESH = document.createElement("button");
const IMAGE = document.createElement("img");
const RANGE1 = document.createElement("input");
const LABEL1 = document.createElement("label");
const RANGE2 = document.createElement("input");
const LABEL2 = document.createElement("label");
const RANGE3 = document.createElement("input");
const LABEL3 = document.createElement("label");
let size = 25;
let radius = 50;
let opacity = 1;

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
RANGE1.id = "size";
RANGE1.type = "range";
RANGE1.min = "10";
RANGE1.max = "35";
RANGE1.value = size;
LABEL2.innerText = "Border Radius";
RANGE2.id = "radius";
RANGE2.type = "range";
RANGE2.min = "0";
RANGE2.max = "100";
RANGE2.value = radius;
LABEL3.innerText = "Opacity";
RANGE3.id = "opacity";
RANGE3.type = "range";
RANGE3.min = "0";
RANGE3.max = "1";
RANGE3.step = "0.1";
RANGE3.value = opacity;

document.body.appendChild(BARNAV);
BARNAV.appendChild(BTNREFRESH);
BARNAV.appendChild(LABEL1);
BARNAV.appendChild(RANGE1);
BARNAV.appendChild(LABEL2);
BARNAV.appendChild(RANGE2);
BARNAV.appendChild(LABEL3);
BARNAV.appendChild(RANGE3);
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
      BRUSH.style.opacity = opacity;
      // BRUSH.style.boxShadow = "0 0 5px #999999";

      BRUSH.style.boxShadow = `${border()}px ${border()}px ${border()}px ${randomColor()}`;
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
  return Math.floor(Math.random() * size) + 1;
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

function border() {
  return Math.floor(Math.random() * -6) + 13;
}

function randomBorder() {
  return Math.floor(Math.random() * radius);
}

function randomAngle() {
  return Math.floor(Math.random() * 360);
}

// function randomOpacity() {
//   return Math.random().toFixed(2);
// }

function cleanUp() {
  const BRUSHES = document.querySelectorAll("canvas");
  BRUSHES.forEach((element) => element.parentNode.removeChild(element));

  generateArt();
}

generateArt();

const inputsize = document.querySelector("#size");

inputsize.addEventListener("change", handleUpdate);
inputsize.addEventListener("mousemove", handleUpdate);

function handleUpdate() {
  size = this.value;
}

const inputradius = document.querySelector("#radius");
inputradius.addEventListener("change", handleUpdateRadius);
inputradius.addEventListener("mousemove", handleUpdateRadius);

function handleUpdateRadius() {
  radius = this.value;
}

const inputOpacity = document.querySelector("#opacity");
inputOpacity.addEventListener("change", handleUpdateOpacity);
inputOpacity.addEventListener("mousemove", handleUpdateOpacity);

function handleUpdateOpacity() {
  opacity = this.value;
}
