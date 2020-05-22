// Adding div + ID
const main = document.querySelector('main');
const mainDiv = document.createElement('div');
mainDiv.setAttribute("id", "canvas");

main.appendChild(mainDiv);

const canvas = document.querySelector('#canvas');

let userWidths = 50;
let userHeights = 25;

const widthSize = document.querySelector('#width');
    widthSize.addEventListener("change", updateWidth);
    widthSize.addEventListener("mousemove", updateWidth);

function updateWidth() {
    userWidths = this.value;
}

const heightSize = document.querySelector('#height');
    heightSize.addEventListener("change", updateheight);
    heightSize.addEventListener("mousemove", updateheight);

function updateheight() {
    userHeights = this.value;
}

function styleElement(element) {
    let turnDiv = Math.floor(Math.random() * 180);

    element.width =  (Math.random() * userWidths) + 10 + 'px';
    element.height =  (Math.random() * userHeights) + 10 + 'px';
    element.left = Math.random() * 95 + '%';
    element.top = Math.random() * 70 + 15 + '%';
    element.transform = "rotate(" + turnDiv + "deg)";
    element.opacity = Math.random() * 1 + 0.5;
    element.borderRadius = Math.random() * 10 + 1 + 'px';
    element.boxShadow = (Math.random() * 3 + 'px' + ' ' + Math.random() * 3 + 'px');
}

//Refresh button
let refresh = document.querySelector('#refresh');
function refreshButton() {

    canvas.innerHTML = '';
    let styleButton = refresh.style;

    styleElement(styleButton);
    let classes = Math.floor(Math.random() * 6);
    refresh.className = `class${classes + 1}`;
}
refreshButton();

refresh.addEventListener('click', generateArt);


function generateArt() {
    refreshButton();
    for(let i = 0; i < 500; i++) {
        setTimeout(() => {
            let divs = document.createElement('div');
            mainDiv.appendChild(divs);
        
            divs.id = `div-${i + 1}`;
        
            let styleDivs = divs.style;

            styleElement(styleDivs);
        
            let classes = Math.floor(Math.random() * 6);
                divs.className = `class${classes + 1}`;

            }, 10 * i);
    }
}
generateArt();