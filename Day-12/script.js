const factorialNumber = (number) => {
  let theResult = 1;
  if (number < 0) {
    return `it is invalid number`;
  } else if (number === 0 || number === 1) {
    return theResult;
  } else {
    let index = 2;
    while (index <= number) {
      theResult*=index;
      index++;
    }
  }
  return theResult;
};
const inputNumber = parseInt(prompt("Please enter a factorial number ?"));;
if (isNaN(inputNumber)) {
    console.log("Invalid input");
} else {
  console.log(`Factorial number:${factorialNumber(inputNumber)}`);
}