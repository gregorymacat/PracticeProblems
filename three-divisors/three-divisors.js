/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    var divisorsCount = 0;
    
    for (var num = 1; num <= n; num++) {
        if (n % num === 0) {
            divisorsCount++;
        }
        if (divisorsCount > 3) {
            return false;
        }
    }
    if (divisorsCount < 3) return false;
    return true;
};