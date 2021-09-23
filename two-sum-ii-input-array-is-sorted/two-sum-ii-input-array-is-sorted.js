/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let num1;
    let num2;
    
    for (var i = 0; i < numbers.length; i++) {
        num1 = numbers[i];
        for (var j = 1; j < numbers.length; j++) {
            num2 = numbers[j];
            if (i !== j) {
                if (num1 + num2 === target) {
                    return [i + 1, j + 1];
                }
            }
        }
    }
};