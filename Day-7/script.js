const countDown = number => {
  do {
    console.log(number);
    number--;
  } while (number >= 0)
};
const startCountDown = parseInt(prompt(`Start the count down from: `));
countDown(startCountDown);