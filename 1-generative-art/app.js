// Adding div + ID
const main = document.querySelector('main');
const mainDiv = document.createElement('div');
    mainDiv.setAttribute("id", "canvas");

    main.appendChild(mainDiv);

//Refresh button
let refresh = document.querySelector('#refresh');
function refreshButton() {
    
    let styleButton = refresh.style;
    let turnDiv = Math.floor(Math.random() * 180);

    styleButton.width = Math.random() * 80 + 10 + 'px';
    styleButton.height = Math.random() * 50 + 15 + 'px';
    styleButton.left = Math.random() * 90 + 1 + '%';
    styleButton.top = Math.random() * 85 + 1 + '%';
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
        let divs = document.createElement('div');
        mainDiv.appendChild(divs);

        divs.id = `div-${i + 1}`;

        let styleDivs = divs.style;
        let turnDiv = Math.floor(Math.random() * 180);

        styleDivs.width = Math.random() * 100 + 10 + 'px';
        styleDivs.height = Math.random() * 50 + 15 + 'px';
        styleDivs.left = Math.random() * 90 + 1 + '%';
        styleDivs.top = Math.random() * 85 + 1 + '%';
        styleDivs.transform = "rotate(" + turnDiv + "deg)";
        styleDivs.opacity = Math.random() * 1 + 0.2;
        styleDivs.borderRadius = Math.random() * 10 + 1 + 'px';
        styleDivs.boxShadow = (Math.random() * 3 + 'px' + ' ' + Math.random() * 3 + 'px');
    
        let classes = Math.floor(Math.random() * 6);
            divs.className = `class${classes + 1}`;
    }
}

generateArt();