/**
 * Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
 * After doing so, return the array.

    Example 1:

    Input: arr = [17,18,5,4,6,1]
    Output: [18,6,6,6,1,-1]

    Constraints:

    1 <= arr.length <= 10^4
    1 <= arr[i] <= 10^5

 */

 //! Solution
 /**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let len=arr.length-1
 
    let g=arr[len]
    let n=g
    arr[len]=-1
    for(let i=len-1;i>=0;i--){
        
        if(g<arr[i]){
             n=g
            g=arr[i]
            arr[i]=n
        }else{
            arr[i]=g
        }
             
    }
        return arr
};