// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let parentArr = [];
    let index = 0;
    while (index < array.length) {
        parentArr.push(array.slice(index, index + size));
        index = index + size;
    }
    return parentArr;
}

module.exports = chunk;


// function chunk(array, size) {
//     let parentArr = [];
//     for (let num of array) {
//         if (!parentArr[parentArr.length - 1] || parentArr[parentArr.length - 1].length === size) {
//             parentArr.push(new Array);
//             parentArr[parentArr.length - 1].push(num);
//         } else {
//             parentArr[parentArr.length - 1].push(num);
//         }
//     }
//     return parentArr;
// }