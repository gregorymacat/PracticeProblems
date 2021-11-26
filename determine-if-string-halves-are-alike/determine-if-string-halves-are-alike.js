/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let first = s.substring(0, s.length / 2).toLowerCase();
    let second = s.substring(s.length / 2).toLowerCase();
    let firstCount = 0;
    let secondCount = 0;
    
    let vowels = {
        a: 1,
        e: 1,
        i: 1,
        o: 1,
        u: 1,
    }
    
    for (let index = 0; index < first.length; index++) {
        if (vowels[first[index]] === 1) {
            firstCount++;
        }
        if (vowels[second[index]] === 1) {
            secondCount++;
        }
    }
    
    return firstCount === secondCount;
};