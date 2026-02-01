// 1.1 Palindrome Checker
var userInput = prompt("Enter your word:");
var considerCase = confirm("Do you want to IGNORE case sensitivity?\n(OK for Yes, Cancel for No)");

var originalWord;

if (considerCase) {
    originalWord = userInput;
} else {
        originalWord = userInput.toLowerCase();

    
}

var reversedWord = originalWord.split('').reverse().join('');

console.log("Original:", originalWord);
console.log("Reversed:", reversedWord);

if (originalWord === reversedWord) {
    alert("It is a palindrome!");
} else {
    alert("It is NOT a palindrome.");
}




