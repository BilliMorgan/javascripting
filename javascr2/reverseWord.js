const spinWords = (input) => {
  return input.split(' ').map((word) => {
    return (word.length > 4)? word.split('').reverse().join('') : word;
  }).join(' ')
  
  // let splitedInput = input.split(" ");
  // let newOutput = [];
  // for (let word of splitedInput) {
  //   if (word.length >= 5) {
  //     let reversedWord = word.split("").reverse().join("");
  //     newOutput.push(reversedWord);
  //   } else {
  //     newOutput.push(word);
  //   }
  // }
  // return newOutput.join(" ");
}
console.log(spinWords("Hey fellow warriors"));
