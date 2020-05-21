// select and initialize bunch of variables
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

// add eventListeners on input and buttons
randomArrayLength.addEventListener('change', generateArray)
selectionButton.addEventListener('click', selectionSort)
insertionButton.addEventListener('click', insertionSort)
bubbleButton.addEventListener('click', bubbleSort)
resetButton.addEventListener('click', resetButtons)

function generateArray() {
  // create empty array;
  randomArray = [];
  // remove all children from grid
  resetGrid();
  // loop through array
  for (let i = 0; i < randomArrayLength.value; i++) {
    // generate a random number between 100 and 700
    randomArrayElement = Math.floor(Math.random() * 600 + 100);
    // push the number in array
    randomArray.push(randomArrayElement);
    // create a div and style it
    elementGrid = document.createElement('div');
    elementGrid.style.height = `${randomArrayElement}px`;
    elementGrid.style.background = '#abd1c6';
    elementGrid.id = `element-${i + 1}`;
    // add div to the diagram
    diagramGrid.appendChild(elementGrid);
  }
  // style grid
  diagramGrid.style.gridTemplateColumns = `repeat(${randomArrayLength.value}, 1fr)`;
  diagramGrid.style.gridTemplateRow = `1fr`;
  // remove all events and add them
  selectionButton.removeEventListener('click', selectionSort)
  insertionButton.removeEventListener('click', insertionSort)
  bubbleButton.removeEventListener('click', bubbleSort)
  selectionButton.addEventListener('click', selectionSort)
  insertionButton.addEventListener('click', insertionSort)
  bubbleButton.addEventListener('click', bubbleSort)
}

function resetGrid() {
  // remove child until no more
  while (diagramGrid.firstChild) {
    diagramGrid.removeChild(diagramGrid.lastElementChild);
  }
}

function resetButtons() {
  // remove and add events
  selectionButton.removeEventListener('click', selectionSort)
  insertionButton.removeEventListener('click', insertionSort)
  bubbleButton.removeEventListener('click', bubbleSort)
  selectionButton.addEventListener('click', selectionSort)
  insertionButton.addEventListener('click', insertionSort)
  bubbleButton.addEventListener('click', bubbleSort)
  // remove childs div
  resetGrid()
}

function switchDivs(elem1, elem2) {
  // swap two elements position
  let temp = document.createElement('div');
  elem1.parentNode.insertBefore(temp, elem1);
  elem2.parentNode.insertBefore(elem1, elem2);
  temp.parentNode.insertBefore(elem2, temp);
  temp.parentNode.removeChild(temp);
}

function bubbleSort() {
  // remove other event listeners
  if (diagramGrid.childElementCount !== 0) {
    selectionButton.removeEventListener('click', selectionSort)
    insertionButton.removeEventListener('click', insertionSort)
  }
  // loop through childs from first to last and remove one each increment
  for (let i = diagramGrid.childElementCount - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      // check if next div is higher
      if (diagramGrid.children[j].offsetHeight > diagramGrid.children[j + 1].offsetHeight) {
        // function call
        switchDivs(diagramGrid.children[j], diagramGrid.children[j + 1])
      }
    }
  }
}

function insertionSort() {
  // remove event listeners
  if (diagramGrid.childElementCount !== 0) {
    selectionButton.removeEventListener('click', selectionSort)
    bubbleButton.removeEventListener('click', bubbleSort)
  }
  // loop through childs from 1 to last
  for (let i = 0; i < diagramGrid.childElementCount; i++) {
    if (i === 0) {
      // check if next div is higher
      if (diagramGrid.children[i].offsetHeight > diagramGrid.children[i + 1].offsetHeight) {
        // function call
        switchDivs(diagramGrid.children[i], diagramGrid.children[i + 1])
      }
    } else {
      // check if previous div is higher
      if (diagramGrid.children[i].offsetHeight < diagramGrid.children[i - 1].offsetHeight) {
        // initialize counter
        let counter = i;
        // do something while previous div is higher until counter reaches 0
        while (counter > 0 && diagramGrid.children[counter].offsetHeight < diagramGrid.children[counter - 1].offsetHeight) {
          // function call
          switchDivs(diagramGrid.children[counter], diagramGrid.children[counter - 1])
          // decrement counter
          counter--;
        }   
      }
    }
  }
}

function selectionSort() {
  // remove event listeners
  if (diagramGrid.childElementCount !== 0) {
    insertionButton.removeEventListener('click', insertionSort)
    bubbleButton.removeEventListener('click', bubbleSort)
  }
  // loop through childs from first to last, second to last ...
  for (let i = 0; i < diagramGrid.childElementCount; i++) {
    for (let j = i; j < diagramGrid.childElementCount; j++) {
      // swap elements if higher
      if (diagramGrid.children[i].offsetHeight > diagramGrid.children[j].offsetHeight) {
        // function call
        switchDivs(diagramGrid.children[i], diagramGrid.children[j])
      }
    }
  }
}
