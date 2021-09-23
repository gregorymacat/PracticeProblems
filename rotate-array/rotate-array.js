/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
//  if (nums.length === 1) {
//    return nums;
//  }
    
//  let currStep = 1;
//  while (currStep <= k) {
//    let last = nums.pop();
//    nums.unshift(last);
//    currStep++;
//  }
    if (k > nums.length) {
        k = k % nums.length;
    }
    nums.unshift(...nums.splice(nums.length - k));
};
