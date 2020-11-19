// const sumLargestNumbers = function (data) {
//   let secondNumber = 0;
//   let firstNumber = 0;
//   for (let i = 0; i < data.length; i++) {
//     if (data[i] > data[i + 1] && data[i] > firstNumber) {
//       firstNumber = data[i];
//     } else if (data[i] < data[i + 1] && data[i + 1] > firstNumber) {
//       firstNumber = data[i + 1];
//     }
//     for (let i = 0; i < data.length; i++) {
//       if (data[i] < firstNumber && data[i] > secondNumber) {
//         secondNumber = data[i];
//       }
//     }
//   }
//   return firstNumber + secondNumber;
// };

sumLargestNumbers = (data) => {
  arr = data.sort((a, b) => { return a - b;})
  // console.log(arr)
  .slice(-2)
  // console.log(arr)
  .reduce((a,b) => {return a + b})
  return arr;
}


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([54, 102, 48, 10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([107, 102, 48, 10, 4, 34, 6, 92, 108]));
console.log(sumLargestNumbers([150, 102, 48, 10, 4, 34, 6, 92, 108]));
