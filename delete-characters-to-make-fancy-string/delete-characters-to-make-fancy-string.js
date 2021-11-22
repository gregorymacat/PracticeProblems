/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    // a a a
    // a
    // a a
    // a a -a-
    
    // a b a a a b
    // a
    // b
    // a
    // a a
    // a a -a-
    
    // iterate through all chars
    // if previous char equal to the current char
        // if count is equal to 2
            // remove the current char
            // substring before current char to current char
            // substring after current char to end
        // else
            // add 1 to the count
    // else
        // track current char as previous char
        // set count to 1
    let allChars = s.split('');
    let prevChars = ['', 0];
    
    for (var i = allChars.length - 1; i >= 0; i--) {
        if (allChars[i] === prevChars[0]) {
            if (prevChars[1] === 2) {
                allChars.splice(i, 1);
            } else {
                prevChars[1]++;
            }
        } else {
            prevChars[0] = allChars[i];
            prevChars[1] = 1;
        }
    }
    
    return allChars.join('');
};