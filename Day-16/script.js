const Capitalizing = (sentence) =>
  sentence.split(" ").map((theWord) => 
  theWord.charAt(0).toUpperCase() + theWord.slice(1)).join(" ");

const theSentence = prompt("Enter any sentence you like ?");
const theResult = Capitalizing(theSentence);
console.log(theResult);
