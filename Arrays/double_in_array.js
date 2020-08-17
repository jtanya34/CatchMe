/**Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
 * More formally check if there exists two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 

Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
Example 2:

Input: arr = [7,1,14,11]
Output: true
Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
 */

 //! Solution
 var checkIfExist = function(arr) {
    let buf={}
    buf[arr[0]]=1
    for(let i=1;i<arr.length;i++){
        if(buf[arr[i]*2] || buf[arr[i]/2]){
            return true
        }else{
            buf[arr[i]]=1
        }
    }
    return false
};