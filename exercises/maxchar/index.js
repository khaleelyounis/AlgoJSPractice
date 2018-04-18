// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {};
    let max = 0;
    let charMax = '';
    for (let character of str) {
        chars[character] = chars[character] + 1 || 1;
    }
    for (var property in chars) {
        if (chars[property] > max) {
            max = chars[property];
            charMax = property;
        }
    }
    return charMax;
}

module.exports = maxChar;