function spinWords(str) {
    var words = str.split(' ');
    var spunWords = words.map(function (word) {
        if (word.length >= 5) {
            var reversedWord = '';
            for (var i = word.length - 1; i >= 0; i--) {
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
