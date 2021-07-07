function insertionSort(arr) {
  // Your code here!
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      // console.log(arr[j + 1], i, "<", arr[j], j);
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
    // console.log(arr);
  }
  return arr;
}

// Tests

// (Add some others!)
compareArrays(insertionSort([1, 5, 2, 4, 3]), [1, 2, 3, 4, 5]);
compareArrays(insertionSort([9, 5, 2, 4, 3, 1]), [1, 2, 3, 4, 5, 9]);
compareArrays(insertionSort([9, 5, 2, 4, 9, 3, 1]), [1, 2, 3, 4, 5, 9, 9]);
compareArrays(insertionSort([9, 5, 2, 32, 4, 9, 3, 1]), [
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
