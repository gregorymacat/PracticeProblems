/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let middle = Math.floor(nums.length / 2);
  let top = nums.length - 1;
  let bottom = 0;

  while (bottom <= top) {
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      bottom = middle + 1; 
    } else if (nums[middle] > target) {
      top = middle - 1;
    }
    middle = Math.floor((top + bottom) / 2);
  }
  
  if (middle < 0) {
    return 0;
  } else if (nums[middle] < target) {
    return middle + 1;
  } else if (nums[middle] > target) {
    return middle - 1;
  }
};