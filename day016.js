// 🚀 Day 16 – JavaScript Challenge

// Task:
// Write a JavaScript program that takes a sentence and reverses the order of words.

function reverseWords(sentence){
    return sentence.split(" ").reverse().join(" ");
}
console.log(reverseWords("I Love Javascript"));