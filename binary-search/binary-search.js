/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var middle = Math.floor(nums.length / 2);
    var low = 0;
    var high = nums.length - 1;
    
    while (low <= high && nums[middle] !== target) {
        if (nums[middle] > target) {
            high = middle - 1;
        } else if (nums[middle] < target) {
            low = middle + 1;
        }
        middle = Math.floor((low + high) / 2);
    }
    
    if (nums[middle] === target) {
        return middle;
    } else {
        return -1;
    }
};