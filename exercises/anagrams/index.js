// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return reduceStr(stringA) === reduceStr(stringB);
    // stringA = reduceStr(stringA);
    // stringB = reduceStr(stringB);
    // if (stringA.length !== stringB.length) {
    //     return false;
    // }
    // for (let i = 0; i < stringA.length; i++) {
    //     if (stringA[i] !== stringB[i]) {
    //         return false;
    //     }
    // }
    // return true;
}

function reduceStr(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;


// function anagrams(stringA, stringB) {
//     const objA = charMap(stringA);
//     const objB = charMap(stringB);
//     if (Object.keys(objA).length !== Object.keys(objB).length) {
//         return false;
//     }
//     for (let chars in objA) {
//         if (objA[chars] !== objB[chars]) {
//             return false;
//         }
//     }
//     return true;
// }

// function charMap(str) {
//     const charObject = {};
//     str = str.replace(/[^\w]/g, '').toLowerCase();
//     for (let char in str) {
//         charObject[char] = charObject[char] + 1 || 1;
//     }
//     return charObject;
// }