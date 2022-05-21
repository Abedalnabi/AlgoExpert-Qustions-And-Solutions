function bubbleSort(array) {
  let thereIsSwap = true;
  let i = 0;
  while (thereIsSwap) {
    thereIsSwap = false;
    for (let x = 1; x < array.length; x++) {
      if (array[x] < array[i]) {
        let swap = array[i];
        array[i] = array[x];
        array[x] = swap;
        thereIsSwap = true;
      }

      i++;
    }
    if (thereIsSwap && i === array.length - 1) {
      i = 0;
      x = 1;
      thereIsSwap = true;
    }
  }
  return array;
  // [8, 5, 2, 9, 5, 6, 3, 100]
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
console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));
