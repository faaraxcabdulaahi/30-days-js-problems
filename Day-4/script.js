const checkingNumber = () => {
    let number =  parseInt(prompt("Please enter a number"));
if (number%2==0) {
    return `The ${number} number is even`
} else {
    return `The ${number} number is odd`
}

};
console.log(checkingNumber());
