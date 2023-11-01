function mergeSort(array) {
  const arrayLength = array.length;

  if (arrayLength < 2) {
    return;
  }

  const midIndex = arrayLength / 2;
  const leftHalf = [midIndex];
  const rightHalf = [arrayLength - midIndex];

  for (let index = 0; index < midIndex; index++) {
    leftHalf[index] = array[index];
  }

  for (let index = midIndex; index < arrayLength; index++) {
    rightHalf[index - midIndex] = array[index];
  }

  mergeSort(leftHalf);
  mergeSort(rightHalf);

  merge(array, leftHalf, rightHalf);
}

function merge(inputArray, leftHalf, rightHalf) {
  const leftSize = leftHalf.length;
  const rightSize = rightHalf.length;

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < leftSize && j < rightSize) {
    if (leftHalf[i] <= rightHalf[j]) {
      inputArray[k] = leftHalf[i];
      i++;
    } else {
      inputArray[k] = rightHalf[j];
      j++;
    }
    k++;
  }

  while (i < leftSize) {
    inputArray[k] = leftHalf[i];
    i++;
    k++;
  }

  while (j < leftSize) {
    inputArray[k] = rightHalf[j];
    j++;
    k++;
  }
}

function printArray(array) {
  array.forEach((element) => {
    console.log(element);
  });
}

const main = () => {
  const inputArray = [4, 8, 2, 0, 6, 8, 9, 7];
  console.log("Before");
  printArray(inputArray);

  console.log("\nAfter");
  printArray(inputArray);
};

main();
