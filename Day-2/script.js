const checkPalindrome = theWord => {
    let theReverseWord = theWord.split("").reverse().join(""); 
    if (theWord === theReverseWord) { 
        return `${theWord} is a palindrome`;
    } else {
        return `${theWord} is not a palindrome`;
    }
}

console.log(checkPalindrome("luul"));
console.log(checkPalindrome("rar")); 
console.log(checkPalindrome("Geel")); 
