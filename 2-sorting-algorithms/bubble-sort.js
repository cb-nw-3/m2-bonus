function bubbleSort(arr) {
  // create temporary variable
  let tempVar;
  // loop from last to first
  for (let i = arr.length - 1; i > 0; i--) {
    // loop from first couple to last non sorted couple
    for (let j = 0; j < i; j++) {
      // set temp variable
      tempVar = arr[j];
      // if couple not in order
      if (arr[j] > arr[j + 1]) {
        // swap elements
        arr[j] = arr[j + 1];
        arr[j + 1] = tempVar;
      }
    }
  }
  return arr
}

// Tests
// (Add some others!)
compareArrays(bubbleSort([5, 1, 2, 4, 2, 2, 2, 4, 3]), [1, 2, 2, 2, 2, 3, 4, 4, 5]);
compareArrays(bubbleSort([1, 5, 2, 4, 1, 3, -2]), [-2, 1, 1, 2, 3, 4, 5]);

// Test code
function compareArrays(arr1, arr2) {
  if (arr1.join(',') === arr2.join(',')) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${arr1}” to equal “${arr2}”`);
  }
}