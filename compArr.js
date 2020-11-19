function diffArray(arr1, arr2) {
  var newArr = [];
  for (let i = 0; i < arr2.length; i++) {
    let isTrue = false;
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        isTrue = true;
      }
    }
    if (!isTrue) {
      newArr.push(arr2[i]);
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    let isTrue = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        isTrue = true;
      }
    }
    if (!isTrue) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
