let sentence = "Hello dev from dev world hello programm";

const uniqueWord = (input) => {
  let words = [];
  sentenceArr = input.toLowerCase().split(" ");
  for (let i = 0; i < sentenceArr.length; i++) {
    let isExist = false;
    for (let j = 0; j < words.length; j++) {
      if (sentenceArr[i] == words[j]) {
        isExist = true;
      }
    }
    if (!isExist) {
      words.push(sentenceArr[i]);
    }
  }
  return words.length;
};
console.log(uniqueWord(sentence));
