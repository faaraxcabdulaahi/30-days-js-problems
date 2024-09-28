const num1 = parseInt(prompt("Please enter the first number"));
const num2 = parseInt(prompt("Please enter the second number"));
const numFunction = (num1,num2) => {
    return num1 + num2;
}
console.log(numFunction(num1, num2));