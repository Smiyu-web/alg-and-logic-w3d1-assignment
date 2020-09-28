// Edu and Miyu

// Write a JavaScript program to compute the sum of an array of integers 
// using recursion

let testArray = [4, 7, 9, 3, 1, 0, 5]

const sumOfArrayRecursive = function (arr) {
    if (arr.length === 1) {
        return arr[0];
      } else {
        return arr.pop() + sumOfArrayRecursive(arr);
      }
}



console.log(sumOfArrayRecursive(testArray));