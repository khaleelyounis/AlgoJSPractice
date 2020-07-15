// --- Directions
// Determine the minimum number of transitions needed
// to return a matching parantheses string.
// --- Example
// const s = "))(()("
// minSwap(s) = 2;
// the index 0, 2 swap, the index 1,5 swap

const determineValidString = (s) => {
  if (!s.length) {
    return false;
  }

  if (s.indexOf(')') < 0 || s.indexOf('(') < 0) {
    return false;
  }

  let imbalanceCounter = 0;
  const stringArr = s.split('');

  for (let str of stringArr) {
    if (str === '(') {
      imbalanceCounter++;
    } else if (str === ')') {
      imbalanceCounter--;
    } else {
      return false;
    }
  }

  return imbalanceCounter === 0;
};

const minSwap = (s) => {
  if (!determineValidString(s)) {
    return 'Invalid input string';
  }

  const invalid_closed = [];
  const invalid_open = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      if (i === s.length - 1 || s[i + 1] !== ')') {
        invalid_open.push(i);
      }
    } else if (s[i] === ')') {
      if (s[i - 1] !== '(') {
        invalid_closed.push(i);
      }
    }
  }

  if (invalid_closed.length !== invalid_open.length) {
    return false;
  } else {
    return invalid_closed.length;
  }
};

module.exports = minSwap;
