/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squares = nums.map(val => val ** 2);
    return squares.sort((a, b) => {return a - b});
};