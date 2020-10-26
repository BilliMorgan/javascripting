// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  if (arr[0] < arr[1]) {
    let newArr = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
      newArr.push(i);
    }
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    return newArr.reduce(reducer);
  }
  if (arr[0] > arr[1]) {
    let newArr = [];
    for (let i = arr[0]; i >= arr[1]; i--) {
      newArr.push(i);
    }
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    return newArr.reduce(reducer);
  }
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 8]);
sumAll([10, 5]);
