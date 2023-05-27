function spinWords(str: string): string {
  let words = str.split(' ');
  
  let spunWords = words.map(word => {
    if (word.length >= 5) {
      let reversedWord = '';
      for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
      }
      return reversedWord;
    }

    return word;
  });

  return spunWords.join(' ');
}

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));