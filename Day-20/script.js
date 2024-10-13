



const theLimit = 100;
const fibonacciNumbers = (theLimit) => {
  const fibonacci = [];
  let [a, b] = [0, 1];
  while (a <= theLimit) {
    fibonacci.push(a);
    [a, b] = [b, a + b];
  }
  return fibonacci;
};
console.log(fibonacciNumbers(theLimit));




