// --- Directions
// Determine the minimum number of transitions needed
// to return a matching parantheses string.
// --- Example
// const s = "))(()("
// minSwap(s) = 2;
// the index 0, 2 swap, the index 1,5 swap

const swap = (str, i, j) => {
  let arr = str.split('');
  let t = arr[i];

  arr[i] = arr[j];
  arr[j] = t;

  return arr.join('');
};

const replaceMatchingParan = (str) => {
  return str.replace(/()/g, '');
};

const createRange = (first, last) => {
  const result = [];

  for (let i = first; first < last; first++) {
    result.push(first);
  }

  return result;
};

const findInvalidStr = (str) => {
  let firstOpen = 0;
  let lastClose = 0;
  let invalidOpen;
  let invalidClose;

  str = replaceMatchingParan(str);

  if (!str.length) {
    return [[], []];
  }

  for (let i of str) {
    if (i === '(') {
      firstOpen = i;
    }
  }

  let reversedStr = str.split('').reverse().join('');

  for (let i of reversedStr) {
    if (i === ')') {
      lastClose = str.length - 1 - i;
    }
  }

  if (firstOpen < lastClose) {
    let res = findInvalidStr(
      str.slice(0, firstOpen) + str.slice(lastClose, str.length),
    );
    invalidOpen = res[0];
    invalidClose = res[1];
  }

  if (firstOpen > lastClose) {
    invalidOpen = [];
    invalidClose = [];
  }

  invalidOpen += [createRange(lastClose + 1, str.length)];
  invalidClose += [createRange(0, firstOpen)];
  return [invalidOpen, invalidClose];
};

const minSwap = (str) => {
  let count = 0;
  let numInvalidOpen = 0;
  let numInvalidClose = 0;
  let res;

  while (true) {
    str = replaceMatchingParan(str);
    res = findInvalidStr(str);
    numInvalidOpen = res[0].length;
    numInvalidClose = res[1].length;

    if (numInvalidOpen !== numInvalidClose) {
      return 'Invalid';
    }

    if (numInvalidOpen === 0) {
      break;
    }

    str = swap(str, Math.max.apply(null, res[0]), Math.min.apply(null, res[1]));
    str = replaceMatchingParan(str);
    count += 1;
  }

  return count;
};

module.exports = minSwap;
