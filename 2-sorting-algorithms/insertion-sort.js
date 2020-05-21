function insertionSort(arr) {
  // create temp variable
  let tempVar;
  // loop through array
  for (let i = 0; i <= arr.length; i++) {
    // put array element in temp variable
    tempVar = arr[i];
    // first couple case
    if (i === 0) {
      // if not in order
      if (arr[i] > arr[i + 1]) {
        // swap both numbers
        arr[i] = arr[i + 1];
        arr[i + 1] = tempVar;
      }
    } else {
      // all other cases
      if (arr[i] < arr[i - 1]) {
        // initiate a counter
        let counter = i;
        // while couple are not in order
        while (counter >= 0 && arr[counter] < arr[counter - 1]) {
          // swap numbers
          arr[counter] = arr[counter - 1];
          arr[counter - 1] = tempVar;
          counter--;
        }
      }
    }
  }
  return arr
}

// Tests
// (Add some others!)
compareArrays(insertionSort([5, 1, 2, 4, 3]), [1, 2, 3, 4, 5]);
compareArrays(insertionSort([1, 5, 2, 4, 3, -2]), [-2, 1, 2, 3, 4, 5]);

// Test code
function compareArrays(arr1, arr2) {
  if (arr1.join(',') === arr2.join(',')) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${arr1}” to equal “${arr2}”`);
  }
}