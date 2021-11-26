/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    // declare tn variable for iterations
    // initial array starts with [0,1,1]
    // if n === 0,1,2 then use predetermined values
    
    // otherwise
    // iterate n - 2 times
        // tn is equal to arr[0]+arr[1]+arr[2]
        // place arr[2] into arr[1], and arr[1] into arr[0]
        // arr[2] is now tn
    
    let tn;
    let nArr = [0,1,1];
    
    switch(n) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 1;
    }
    
    for (let iterations = 1; iterations <= n-2; iterations++) {
        tn = nArr[0] + nArr[1] + nArr[2];
        nArr[0] = nArr[1];
        nArr[1] = nArr[2];
        nArr[2] = tn;
    }
    
    return tn;
};