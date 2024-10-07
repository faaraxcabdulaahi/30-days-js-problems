const generateRandomNumber = () => {
  let randomNumbers = [];
  let index = 0;
  while (index < 10) {
    index++;
    randomNumbers.push(Math.floor(Math.random() * 100) + 1);
  }
  return randomNumbers;
};
console.log(generateRandomNumber());
