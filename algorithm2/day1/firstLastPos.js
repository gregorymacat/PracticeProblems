/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.



Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]


Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  //track the indexes of the found values
  var indices = [-1, -1];

  for (var index = 0; index < nums.length; index++) {
    //find the first index that matches the target
    if (nums[index] === target && indices[0] === -1) {
      indices[0] = index;
    } else if (nums[index] !== target && indices[0] !== -1) {
      //from there find the first index that no longer matches the target
      indices[1] = index - 1;
    }
  }

  if (indices[0] !== -1 && indices[1] === -1) {
    indices[1] = nums.length - 1;
  }

  return indices;
};