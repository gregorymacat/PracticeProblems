/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let start = 0;
    let end = s.length - 1;
    
    while (end > start) {
        let temp = s[end];
        s[end] = s[start];
        s[start] = temp;
        start++;
        end--;
    }
};