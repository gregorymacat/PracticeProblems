/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var triangle = [];
    
    for (var i = 0; i <= rowIndex; i++) {
        var currentRow = [];
        for (var j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                currentRow.push(1);
            } else {
                currentRow.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
            }
        }
        triangle.push(currentRow);
    }
    return triangle[rowIndex];
};