function bubbleSort(array) {
  for (let i = 0; i <= array.length - 1; i++) {
    // console.log("array", array);

    for (let x = i; x <= array.length - 1; x++) {
      if (array[x] < array[i]) {
        let swap = array[i];
        array[i] = array[x];
        array[x] = swap;
      }
    }
  }
  return array;
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3, 100]));
