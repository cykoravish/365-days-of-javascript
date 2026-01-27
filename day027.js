// Write a JavaScript program that takes a string and returns the longest word in the sentence.

// Example:

// Input → "I am learning JavaScript daily"

// Output → "JavaScript"

function findLongestWord(str) {
    let words = str.split(" ");
    let longestWord = "";

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord("I am learning JavaScript daily"));
