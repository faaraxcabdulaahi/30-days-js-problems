let findLongestWord = (theSentence) => {
  let theWords = theSentence.split(" ");

  const longestWord = theWords.reduce((theLongest, theCurrentWord) => {
    if (theCurrentWord.length > theLongest.length) {
      return theCurrentWord;
    } else {
      return theLongest;
    }
  }, "");
  return longestWord;
};

const theSentence = "coding the javascript pro, and keep reading the docs";
console.log(findLongestWord(theSentence));
