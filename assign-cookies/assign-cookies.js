/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 11:50
 12:20 original solution Time: 252 ms (5.25%), Space: 42.3 MB (16.67%)
 12:37 optimized (191 ms, faster than 10.49% | 40.8 MB, less than 97.22%)
 */
var findContentChildren = function(g, s) {
    // for each child
        // see if theres a cookie meeting their minimum
            // if so pop that cookie from the array, add 1 to result
    var result = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    
    var cookieIndex = 0;
    var childIndex = 0;
    
    while (childIndex < g.length && cookieIndex < s.length) {
        if (g[childIndex] <= s[cookieIndex]) {
            result++;
            cookieIndex++;
            childIndex++;
        } else {
            cookieIndex++;
        }
    }
    return result;
};
