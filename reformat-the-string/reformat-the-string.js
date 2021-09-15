/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    var chars = '';
    var nums = '';
    
    //covid2019
    //covid
    //2019
    
    for (var index = 0; index < s.length; index++) {
        console.log(Number.parseInt(s[index]));
        if (Number.parseInt(s[index]) || Number.parseInt(s[index]) === 0) {
            nums += s[index]; 
        } else {
            chars += s[index];
        }
    }
    
    var lenDiff = Math.abs(chars.length - nums.length);
    console.log(chars, ' and ', nums)
    var newStr = '';
    if (lenDiff > 1) {

        return newStr;
    } else { 
        var largeStr = chars.length >= nums.length ? chars : nums;
        var smallStr = largeStr === chars ? nums : chars;
        for (var index = 0; index < largeStr.length; index++) {
            if (index >= smallStr.length) {
                newStr += largeStr[index];
            } else {
                newStr += largeStr[index];
                newStr += smallStr[index];
            }
        }
        return newStr;
    }
};