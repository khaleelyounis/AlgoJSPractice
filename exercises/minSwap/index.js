// --- Directions
// Determine the minimum number of transitions needed
// to return a matching parantheses string.
// --- Example
// const s = "))(()("
// minSwap(s) = 2;
// the index 0, 2 swap, the index 1,5 swap

const minSwap = (s) => {
  const invalid_closed = [];
  const invalid_open = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      if (i === s.length - 1) {
        invalid_open.push(i);
      } else if (s[i + 1] !== ')') {
        invalid_open.push(i);
      }
    } else if (s[i] === ')') {
      if (i === s.length - 1) {
        invalid_closed.push(i);
      } else if (s[i - 1] !== '(') {
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
