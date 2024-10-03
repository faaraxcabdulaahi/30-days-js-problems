const fizzBuzz = () => {
    let index =1;
  
    do {
      if (index % 3 === 0 && index % 5 === 0) {
        console.log(index,"FizzBuzz");
      } else if (index % 3 === 0) {
        console.log(index,"Fizz");
      } else if (index % 5 === 0) {
        console.log(index,"Buzz");
      } else {
        console.log(index); 
      }
      index++; 
    } while (index <= 100);  
  };
  
  fizzBuzz();
  