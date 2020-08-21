/**
 * Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

        Example 1:
        Input: [3, 2, 1]

        Output: 1

        Explanation: The third maximum is 1.
 */

 //! Solution

 var thirdMax = function(nums) {
    let f=m=t=-Infinity;
    f=nums[0]
   for(let i=1;i<nums.length;i++){
       if(nums[i]>f){
           t=m;
           m=f;
           f=nums[i]
       }else if(nums[i]<f && nums[i]>m ){
            t=m
           m=nums[i]
           
       }else if(nums[i]<f && nums[i]<m && nums[i]>t ){
           t=nums[i]
       }
   }
    return t===-Infinity?f:t
};