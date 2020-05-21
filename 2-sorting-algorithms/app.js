let randomArray = [];
let randomArrayLength = document.querySelector('input');
let diagramGrid = document.querySelector('.diagram');
let selectionButton = document.querySelector('.selection');
let insertionButton = document.querySelector('.insertion');
let bubbleButton = document.querySelector('.bubble');
let resetButton = document.querySelector('.reset');
let elementGrid;
let randomArrayElement;
let selectionInterval;
let insertionInterval;
let bubbleInterval;

randomArrayLength.addEventListener('change', generateArray)
selectionButton.addEventListener('click', selectionSort)
insertionButton.addEventListener('click', insertionSort)
bubbleButton.addEventListener('click', bubbleSort)
resetButton.addEventListener('click', resetButtons)

function generateArray() {
  randomArray = [];
  resetGrid();
  for (let i = 0; i < randomArrayLength.value; i++) {
    randomArrayElement = Math.floor(Math.random() * 600 + 100);
    randomArray.push(randomArrayElement);
    console.log(randomArray)
    elementGrid = document.createElement('div');
    elementGrid.style.height = `${randomArrayElement}px`;
    elementGrid.style.background = 'royalblue';
    elementGrid.id = `element-${i + 1}`;
    diagramGrid.appendChild(elementGrid);
  }
  diagramGrid.style.gridTemplateColumns = `repeat(${randomArrayLength.value}, 1fr)`;
  diagramGrid.style.gridTemplateRow = `1fr`;

  selectionButton.removeEventListener('click', selectionSort)
  insertionButton.removeEventListener('click', insertionSort)
  bubbleButton.removeEventListener('click', bubbleSort)
  selectionButton.addEventListener('click', selectionSort)
  insertionButton.addEventListener('click', insertionSort)
  bubbleButton.addEventListener('click', bubbleSort)

}

function resetGrid() {
  while (diagramGrid.firstChild) {
    diagramGrid.removeChild(diagramGrid.lastElementChild);
  }
}

function resetButtons() {
  selectionButton.addEventListener('click', selectionSort)
  insertionButton.addEventListener('click', insertionSort)
  bubbleButton.addEventListener('click', bubbleSort)
  resetGrid()
}

function switchDivs(elem1, elem2) {
  let temp = document.createElement('div');
  elem1.parentNode.insertBefore(temp, elem1);
  elem2.parentNode.insertBefore(elem1, elem2);
  temp.parentNode.insertBefore(elem2, temp);
  temp.parentNode.removeChild(temp);
}

function bubbleSort() {
  if (diagramGrid.childElementCount !== 0) {
    selectionButton.removeEventListener('click', selectionSort)
    insertionButton.removeEventListener('click', insertionSort)
  }

  let tempVar;
  for (let i = diagramGrid.childElementCount - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      tempVar = diagramGrid.children[j];
      if (diagramGrid.children[j].offsetHeight > diagramGrid.children[j + 1].offsetHeight) {
        switchDivs(diagramGrid.children[j], diagramGrid.children[j + 1])
      }
    }
  }
}

function insertionSort() {
  if (diagramGrid.childElementCount !== 0) {
    selectionButton.removeEventListener('click', selectionSort)
    bubbleButton.removeEventListener('click', bubbleSort)
  }

  for (let i = 0; i < diagramGrid.childElementCount; i++) {
    if (i === 0) {
      if (diagramGrid.children[i].offsetHeight > diagramGrid.children[i + 1].offsetHeight) {
        switchDivs(diagramGrid.children[i], diagramGrid.children[i + 1])
      }
    } else {
      if (diagramGrid.children[i].offsetHeight < diagramGrid.children[i - 1].offsetHeight) {
        let counter = i;
        while (counter > 0 && diagramGrid.children[counter].offsetHeight < diagramGrid.children[counter - 1].offsetHeight) {
          switchDivs(diagramGrid.children[counter], diagramGrid.children[counter - 1])
          counter--;
        }   
      }
    }
  }
}

function selectionSort() {
  if (diagramGrid.childElementCount !== 0) {
    insertionButton.removeEventListener('click', insertionSort)
    bubbleButton.removeEventListener('click', bubbleSort)
  }

  for (let i = 0; i < diagramGrid.childElementCount; i++) {
    for (let j = i; j < diagramGrid.childElementCount; j++) {
      if (diagramGrid.children[i].offsetHeight > diagramGrid.children[j].offsetHeight) {
        switchDivs(diagramGrid.children[i], diagramGrid.children[j])
      }
    }
  }
}
