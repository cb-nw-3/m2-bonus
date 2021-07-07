function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(arr[j], j, "<", arr[smallest], smallest);
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    if (smallest != i) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
    }
    // console.log(a);
  }
  return arr;
}

// Tests
// (Add some others!)
compareArrays(selectionSort([1, 5, 2, 4, 3]), [1, 2, 3, 4, 5]);
compareArrays(selectionSort([9, 5, 2, 4, 3, 1]), [1, 2, 3, 4, 5, 9]);
compareArrays(selectionSort([9, 5, 2, 4, 9, 3, 1]), [1, 2, 3, 4, 5, 9, 9]);
compareArrays(selectionSort([9, 5, 2, 32, 4, 9, 3, 1]), [
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
