// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.

//! Solution

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr=[]
    nums1 =new Set(nums1.sort((a,b)=>a-b))
     nums2 =new Set(nums2.sort((a,b)=>a-b))
    for(let num1 of nums1){
         for(let num2 of nums2){
             if(num2===num1){
                 arr.push(num1)
             }
    }
    }
    return arr
};