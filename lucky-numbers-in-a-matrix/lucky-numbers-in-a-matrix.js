/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    var result = [];
    var rowMins = [];
    
    for (var i = 0; i < matrix.length; i++) {
        var row = matrix[i];
        for (var j = 0; j < row.length; j++) {
            if (rowMins[i] === undefined) {
                rowMins[i] = [row[j], j];
            } else if (row[j] < rowMins[i][0]) {
                rowMins[i] = [row[j], j];
            }
        }
    }

    for (var minIndex = 0; minIndex < rowMins.length; minIndex++) {
        var columnMax = true;
        var currMinCol = rowMins[minIndex][1];
        
        for (var rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
            var currColValue = matrix[rowIndex][currMinCol];
            if (currColValue > rowMins[minIndex][0]) {
                columnMax = false;
            }
        }
        if (columnMax === true) {
            result.push(rowMins[minIndex][0]);
        }
    }
    return result;
};
