/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(' ');
    let reversedWords = [];

    for (let index = 0; index < words.length; index++) {
        let currWord = words[index];
        let revCurrWord = [];

        for (let j = currWord.length - 1; j >= 0; j--) {
          revCurrWord.push(currWord[j]);
        }
        reversedWords.push(revCurrWord.join(''));
    }
    return reversedWords.join(' ');
};