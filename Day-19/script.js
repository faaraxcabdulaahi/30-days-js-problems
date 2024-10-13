

const array1= [1,2,3,4,5,];
const array2=[1,2,3,4,5,6,7,8,9,10];
const subSet = (theSubset, theMain) => theSubset.every((theElement=> theMain.includes(theElement)));
console.log(subSet(array1,array2));



