function selectionSort(arr) {
  // create random variable to store a value 
  let temporaryValue;
  // loop through the array twice
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      // check if current value is lower than the rest
      if (arr[i] > arr[j]) {
        // store small value in temporary var
        temporaryValue = arr[j];
        // change small value with high value
        arr[j] = arr[i];
        // change high value with small value with temp var
        arr[i] = temporaryValue;
      }
    }
  }
  return arr
}

// Tests
// (Add some others!)
compareArrays(selectionSort([1, 5, 2, 4, 3]), [1, 2, 3, 4, 5]);
compareArrays(selectionSort([1, 5, 2, 4, 3, -1, 123, 23, 2, 12]), [-1, 1, 2, 2, 3, 4, 5, 12, 23, 123]);

// Test code
function compareArrays(arr1, arr2) {
  if (arr1.join(',') === arr2.join(',')) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${arr1}” to equal “${arr2}”`);
  }
}