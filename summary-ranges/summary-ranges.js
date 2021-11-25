/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    // declare variable first as nums index 0
    // declare variable curr as first
    // declare result array
    
    // iterate through the array
        // if current index's value is curr + 1
            // assign current to this value
            // if current index is last index
                // push first -> current to result
        // else
            // if curr is equal to first
                // push first to result
                // assign this value to first
                // reset curr
            // else
                // push first -> current to result
                // assign this value to first
                // reset curr
    
    let first = nums[0];
    let curr = first;
    let result = [];
    
    if (nums.length === 1) {
        result.push(nums[0].toString());
    }
    
    for (let index = 1; index < nums.length; index++) {
        if (nums[index] === curr + 1) {
            curr = nums[index];
            if (index === nums.length - 1) {
                result.push(`${first}->${curr}`);
            }
        } else {
            if (curr === first) {
                result.push(first.toString());
                first = nums[index];
                curr = first;
            } else {
                result.push(`${first}->${curr}`);
                first = nums[index];
                curr = first;
            }
            if (index === nums.length - 1) {
                result.push(nums[index].toString());
            }
        }
    }
    
    return result;
};

/*
    0   1   2   4   5   7
    
    0           store the first part of range, first=0
    01          store current part b/c match, curr=1
    012         store current part b/c match, curr=2
    
    4 not a match so, ['0->2']    store first then curr as the parts of range
        
    4           store the first part of range, first=4
    45          store current part b/c match, curr=5
    
    7 not a match so, ['0->2', '4->5'] store first then curr in array
    
    7           store the first part of range, first=7
    
    undefined not a match so, ['0->2', '4->5', '7'] store first in array
*/