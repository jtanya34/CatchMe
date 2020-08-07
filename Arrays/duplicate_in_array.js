/**
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 * Find all the elements that appear twice in this array.
 */

var findDuplicates = function(nums) {
    let duplicate=[]
    nums.map(each=>{
        if( nums[Math.abs(each)-1]<0){
            duplicate.push(Math.abs(each))
        }else{
            nums[Math.abs(each)-1]=-nums[Math.abs(each)-1]
        }
    })
    return duplicate
};