/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestSubstring = '';
    
    if (s.length <= 1) {
        return s.length;
    }
    
    //iterate through each character of the string
    for (let firstIndex = 0; firstIndex < s.length; firstIndex++) {
        //while the current character is not in current string
        //add it to current string
        //iterate on next character while keeping track of primary index
        let secondIndex = firstIndex + 1;
        let currString = s[firstIndex];
        
        while (!currString.includes(s[secondIndex]) && secondIndex < s.length) {
            currString += s[secondIndex];
            secondIndex++;
        }
        
        //once the character is in the string, check if it is longer than current longest
        //if so then replace the current longest, otherwise leave current longest as is
        //make sure to reset secondary index tracker to the next primary index
        if (longestSubstring.length < currString.length) {
            longestSubstring = currString;
        }
    }
    
    return longestSubstring.length;
};