const isLeapYear = year =>(year % 4 === 0 && year % 100 !== 0) || year % 400 == 0;
console.log(isLeapYear(2024));
console.log(isLeapYear(2023));