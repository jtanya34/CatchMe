/**
 * Given an integer array nums sorted in ascending order, and an integer target.

    Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

    You should search for target in nums and if you found return its index, otherwise return -1.

    

    Example 1:

    Input: nums = [4,5,6,7,0,1,2], target = 0
    Output: 4
 */


//! Solution

var search = function(nums, target) {
  if (target === nums[0]) {
    return 0;
  } else if (target === nums[nums.length - 1]) {
    return nums.length - 1;
  }

  let s = 0;
  if (target < nums[0]) {
    s = 1;
  }

  if (s == 1 && nums[0] > nums[1]) {
    for (let i = 0; i < nums.length; i++) {
      if (target === nums[i]) {
        return i;
      }
    }
  } else if (s === 1 && nums[0] < nums[1]) {
    for (let i = nums.length - 1; i > 0; i--) {
      if (target === nums[i]) {
        return i;
      }
    }
  } else if (s == 0) {
    for (let i = 1; i < nums.length; i++) {
      if (target === nums[i]) {
        return i;
      }
    }
  }
  return -1;
};
