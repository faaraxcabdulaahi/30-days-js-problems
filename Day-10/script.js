const reversedFunction = name => name.split('').reverse().join('');
const theName = prompt('Please enter the number you want to be reversed');
const reversedName = reversedFunction(theName);
console.log(reversedName);