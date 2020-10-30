// Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.

// Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.


// Example 1:

// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
// Example 2:

// Input: arr = [1,2,2,3,3,3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

//!solution
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let max=-1
  let countmap=new Map()
  for(let num of arr){
      if(countmap.has(num)){
          countmap.set(num,countmap.get(num)+1)
      }else{
          countmap.set(num,1) 
      }
  }
    
    for(let [num,count] of countmap){
        if(count===num && num>max){
            max=num
        }
    }
    return max
};