function bubbleSort(array) {
  let isSorted = false;
  let i = 0;
  while (!isSorted) {
    for (let x = 1; x < array.length; x++) {
      if (array[x] < array[i]) {
        let swap = array[i];
        array[i] = array[x];
        array[x] = swap;
        isSorted = false;
      } else {
        isSorted = true;
      }
      i++;
    }
  }
  return array;

  // Not bubble Sort
  // for (let i = 0; i < array.length; i++) {
  //   for (let x = i; x < array.length; x++) {
  //     if (array[x] < array[i]) {
  //       let swap = array[i];
  //       array[i] = array[x];
  //       array[x] = swap;
  //     }
  //   }
  // }
  // return array;
}
console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3, 100]));
