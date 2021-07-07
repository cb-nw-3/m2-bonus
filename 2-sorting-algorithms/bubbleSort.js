function bubbleSort(arr) {
  // Your code here!
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Tests
// (Add some others!)
compareArrays(bubbleSort([1, 5, 2, 4, 3]), [1, 2, 3, 4, 5]);
compareArrays(bubbleSort([1, 5, 2, 4, 3]), [1, 2, 3, 4, 5]);
compareArrays(bubbleSort([9, 5, 2, 4, 3, 1]), [1, 2, 3, 4, 5, 9]);
compareArrays(bubbleSort([9, 5, 2, 4, 9, 3, 1]), [1, 2, 3, 4, 5, 9, 9]);
compareArrays(bubbleSort([9, 5, 2, 32, 4, 9, 3, 1]), [
  1,
  2,
  3,
  4,
  5,
  9,
  9,
  32,
]);

// Test code
function compareArrays(arr1, arr2) {
  if (arr1.join(",") === arr2.join(",")) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
