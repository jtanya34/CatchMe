// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

//! Solution

var maxSubArray = function (nums) {
	let newArray = [];
	newArray.push(nums[0]);
	let max = nums[0];
	let sumMax = max;
	for (let i = 1; i < nums.length; i++) {
		max = Math.max(newArray[i - 1] + nums[i], nums[i]);
		newArray.push(max);
		sumMax = Math.max(sumMax, max);
	}

	return sumMax;
};
