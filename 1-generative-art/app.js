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

//Refresh button
let refresh = document.querySelector('#refresh');
function refreshButton() {

    canvas.innerHTML = '';
    let styleButton = refresh.style;
    let turnDiv = Math.floor(Math.random() * 180);

    styleButton.width =  (Math.random() * userWidths) + 10 + 'px';
    styleButton.height =  (Math.random() * userHeights) + 10 + 'px';
    styleButton.left = Math.random() * 90 + 1 + '%';
    styleButton.top = Math.random() * 70 + 15 + '%';
    styleButton.transform = "rotate(" + turnDiv + "deg)";
    styleButton.opacity = Math.random() * 1 + 0.5;
    styleButton.borderRadius = Math.random() * 10 + 1 + 'px';
    styleButton.boxShadow = (Math.random() * 3 + 'px' + ' ' + Math.random() * 3 + 'px');

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
            let turnDiv = Math.floor(Math.random() * 180);

            styleDivs.width = (Math.random() * userWidths) + 10 + 'px';
            styleDivs.height = (Math.random() * userHeights) + 15 + 'px';
            styleDivs.left = Math.random() * 90 + 1 + '%';
            styleDivs.top = Math.random() * 70 + 15 + '%';
            styleDivs.transform = "rotate(" + turnDiv + "deg)";
            styleDivs.opacity = Math.random() * 1 + 0.2;
            styleDivs.borderRadius = Math.random() * 10 + 1 + 'px';
            styleDivs.boxShadow = (Math.random() * 3 + 'px' + ' ' + Math.random() * 3 + 'px');
        
            let classes = Math.floor(Math.random() * 6);
                divs.className = `class${classes + 1}`;

            }, 10 * i);
    }
}
generateArt();