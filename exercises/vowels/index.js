// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    str = str.toLowerCase();
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelCounter = 0;
    for (let char = 0; char < str.length; char++) {
        if (vowels.indexOf(str[char]) >= 0) {
            vowelCounter++;
        }
    }
    return vowelCounter;
}

module.exports = vowels;