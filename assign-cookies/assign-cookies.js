/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 11:50
 */
var findContentChildren = function(g, s) {
    // for each child
        // see if theres a cookie meeting their minimum
            // if so pop that cookie from the array, add 1 to result
    var result = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    
    for (var child = 0; child < g.length; child++) {
        var childMinReq = g[child];
        var cookieFound = false;
        var cookieIndex = 0;
        
        while (cookieFound === false && cookieIndex < s.length) {
            if (s[cookieIndex] >= childMinReq) {
                s.splice(cookieIndex, 1);
                result++;
                cookieFound = true;
            }
            cookieIndex++;
        }
    }
    return result;
};