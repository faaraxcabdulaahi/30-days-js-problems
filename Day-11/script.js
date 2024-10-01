const arrayNumbers = [2, 3, 4, 5, 5.7, 3, 2.2, 0.8];
const smallNumber = Math.min(...arrayNumbers, 3, 12, 44, 0.2, 0.1);
if (smallNumber % 3 === 0) {
  console.log(`The smallest number ${smallNumber} is prime number`);
} else if (smallNumber % 2 === 0) {
  console.log(`The smallest number ${smallNumber} is even number`);
} else {
  console.log(`The smallest number ${smallNumber} is other number`);
}
