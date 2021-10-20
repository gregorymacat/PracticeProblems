/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let arr = [];
    let index = 0;
    let dupe = false;
    
    while (dupe === false && index < nums.length) {
        if (arr.includes(nums[index])) {
            dupe = true;
        } else {
            arr.push(nums[index]);
        }
        index++;
    }
    
    return dupe;
};