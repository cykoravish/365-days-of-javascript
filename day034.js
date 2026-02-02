// Write a JavaScript program that takes a string and returns the first repeating character.

// Example:

// Input → "programming"

// Output → "r"

function getFirstRepeatingChar(str){
    let freq = {};
    for(let char of str){
        if(freq[char]){
            freq[char] += 1;
            return char;
        }else{
            freq[char] = 1;
        }
    }
    
}
console.log(getFirstRepeatingChar("programming"))