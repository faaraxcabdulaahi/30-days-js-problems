const theSortedArray = (array) => {
  let index = 0;
  do {
    if (array[index] > array[index + 1]) {
      return false;
    }
    index++;
    return true;
  } while (index < array.length - 1);
};
const theArray1 = [1, 2, 3, 4, 5, 6, 7, 8];
const theArray2 = [5, 3, 5, 4, 9, 8, 7, 6];
console.log(theSortedArray(theArray1));
console.log(theSortedArray(theArray2));