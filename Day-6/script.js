const celsiusToFarhenheit = celsius => {let fahrenheit = (celsius * (9/5)) + 32; return fahrenheit};
const theCelsius = parseFloat(prompt("Please enter the celsius number"));
const theFahrenheit = celsiusToFarhenheit(theCelsius);
console.log(`${theCelsius}°C is similar to ${theFahrenheit}°F`);