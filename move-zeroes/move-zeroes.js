/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroes = [];
    let len = nums.length;
    for (var index = 0; index < len; index++) {
        if (nums[index] === 0) {
            nums.splice(index, 1);
            zeroes.push(0);
            index--;
        }
    }
    nums.push(...zeroes);
};