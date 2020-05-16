// Exercise 1: Selection Sort

function selectionSort(arr) {
    for (let x = 0; x < arr.length; x++){
        let min = x;
        for (let y = x + 1; y < arr.length; y++){
            if (arr[min] > arr[y]) {
                min = y;
            }
        }
        if ( min !== x) {
            let z = arr[x];
            arr[x] = arr[min];
            arr[min] = z;
        }
    }
    return arr;
}

// Tests
// (Add some others!)
compareArrays(selectionSort([5, 1, 2, 4, 3]), [1, 2, 3, 4, 5]);
compareArrays(selectionSort([10, 51, 22, 44, 35]), [10, 22, 35, 44, 51]);
compareArrays(selectionSort(['a', 'z', 'c', 'e', 'r']), ['a','c','e','r','z']);

// Test code
function compareArrays(arr1, arr2) {
    if (arr1.join(',') === arr2.join(',')) {
        console.log('✅ Test succeeded');
    } else {
        console.log(`⛔️ Expected “${result}” to equal “${value}”`);
    }
}

// Exercise 2: Insertion sort

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let x = 0; x < i; x++) {
            if (arr[i] < arr[x]) {
                let temp = arr.splice(i,1);
                arr.splice(x,0,temp[0]);
            }
        }
    }
    return arr;
}

// Tests
// (Add some others!)
compareArrays(insertionSort([1, 5, 2, 4, 3]), [1, 2, 3, 4, 5]);
compareArrays(insertionSort([10, 51, 22, 44, 35]), [10, 22, 35, 44, 51]);
compareArrays(insertionSort(['a', 'z', 'c', 'e', 'r']), ['a','c','e','r','z']);

// Test code
function compareArrays(arr1, arr2) {
    if (arr1.join(',') === arr2.join(',')) {
        console.log('✅ Test succeeded');
    } else {
        console.log(`⛔️ Expected “${result}” to equal “${value}”`);
    }
}


//Exercise 3: Bubble sort

function bubbleSort(arr) {
    for (let x = 0; x < arr.length; x++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// Tests
// (Add some others!)
compareArrays(bubbleSort([1, 5, 2, 4, 3]), [1, 2, 3, 4, 5]);
compareArrays(bubbleSort([10, 51, 22, 44, 35]), [10, 22, 35, 44, 51]);
compareArrays(bubbleSort(['a', 'z', 'c', 'e', 'r']), ['a','c','e','r','z']);

// Test code
function compareArrays(arr1, arr2) {
    if (arr1.join(',') === arr2.join(',')) {
        console.log('✅ Test succeeded');
    } else {
        console.log(`⛔️ Expected “${result}” to equal “${value}”`);
    }
}
