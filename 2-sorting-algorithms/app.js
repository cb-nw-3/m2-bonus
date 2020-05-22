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
let intervalDelay;

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
  clearInterval(bubbleInterval)
  clearInterval(insertionInterval)
  clearInterval(selectionInterval)
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
    bubbleButton.removeEventListener('click', bubbleSort)
  }
  if (diagramGrid.childElementCount < 41) {
    intervalDelay = 50;
  } else if (diagramGrid.childElementCount < 81) {
    intervalDelay = 30;
  } else {
    intervalDelay = 5;
  }
  // create counters
  let i = diagramGrid.childElementCount - 1;
  let j = 0;
  // create interval
  bubbleInterval = setInterval(() => {
    // if j reaches the end of array, increment i and restart j
    if (j === i) {
      i--;
      j = 0;
    }
    // check if divs is higher than next one
    if (diagramGrid.children[j].offsetHeight > diagramGrid.children[j + 1].offsetHeight) {
      // function call
      switchDivs(diagramGrid.children[j], diagramGrid.children[j + 1])
    }
    // increment j
    j++;
    // clear interval if i passed through all the array
    if (i === 0) {
      clearInterval(bubbleInterval)
    }
  }, intervalDelay);
}

function insertionSort() {
  // remove event listeners
  if (diagramGrid.childElementCount !== 0) {
    selectionButton.removeEventListener('click', selectionSort)
    insertionButton.removeEventListener('click', insertionSort)
    bubbleButton.removeEventListener('click', bubbleSort)
  }
  if (diagramGrid.childElementCount < 41) {
    intervalDelay = 100;
  } else if (diagramGrid.childElementCount < 81) {
    intervalDelay = 50;
  } else {
    intervalDelay = 30;
  }
  // create counter
  let i = 0;
  // create interval
  insertionInterval = setInterval(() => {
    // check if first and second element are in order
    if (diagramGrid.children[0].offsetHeight > diagramGrid.children[1].offsetHeight) {
      // function call
      switchDivs(diagramGrid.children[0], diagramGrid.children[1])
    }
    // bring low divs as far before as possible
    if (i > 0 && diagramGrid.children[i].offsetHeight < diagramGrid.children[i - 1].offsetHeight) {
      // initiate decrementing counter
      let counter = i;
      // while current div is lower than previous swap them
      while (counter > 0 && diagramGrid.children[counter].offsetHeight < diagramGrid.children[counter - 1].offsetHeight) {
        // function call
        switchDivs(diagramGrid.children[counter], diagramGrid.children[counter - 1])
        // decrement counter
        counter--;
      }   
    }
    // increment counter
    i++;
    // clear interval if counter is not in array
    if (i >= diagramGrid.childElementCount) {
      clearInterval(insertionInterval)
    }
  }, intervalDelay);
}

function selectionSort() {
  // remove event listeners
  if (diagramGrid.childElementCount !== 0) {
    selectionButton.removeEventListener('click', selectionSort)
    insertionButton.removeEventListener('click', insertionSort)
    bubbleButton.removeEventListener('click', bubbleSort)
  }
  if (diagramGrid.childElementCount < 41) {
    intervalDelay = 50;
  } else if (diagramGrid.childElementCount < 81) {
    intervalDelay = 30;
  } else {
    intervalDelay = 5;
  }
  // create "global counters"
  let i = 0;
  let j = i;
  // create interval
  selectionInterval = setInterval(() => {
    // if j reaches end of array, iterate i and start over
    if (j === diagramGrid.childElementCount) {
      i++;
      j = i;
    }
    // check if height is in order
    if (i < diagramGrid.childElementCount && j < diagramGrid.childElementCount && diagramGrid.children[i].offsetHeight > diagramGrid.children[j].offsetHeight) {
      // function call
      switchDivs(diagramGrid.children[i], diagramGrid.children[j])
    }
    // iterate j
    j++;
    // if j or i goes outside of array clear the interval
    if (i > diagramGrid.childElementCount || j > diagramGrid.childElementCount) {
      clearInterval(selectionInterval)
    }
  }, intervalDelay)
}
