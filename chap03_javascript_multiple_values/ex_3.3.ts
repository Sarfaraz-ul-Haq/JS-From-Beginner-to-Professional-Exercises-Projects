/* 1. Create an array containing three values: 1, 2, and 3.
2. Nest the original array into a new array three times.
3. Output the value 2 from one of the arrays into the console. */

const numArr = [1, 2, 3];

const newArr = [numArr, numArr, numArr];

console.log(newArr[0][1]);
