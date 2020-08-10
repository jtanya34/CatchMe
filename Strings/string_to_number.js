/**Given a column title as appear in an Excel sheet, return its corresponding column number.
 For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
Example 1:

Input: "A"
Output: 1 

Input: "AB"
Output: 28


*/

// !Solution 
var titleToNumber = function(s) {
    let ans=0
    for(let i=0;i<s.length;i++)
      ans += (s.charCodeAt(i)-64)* Math.pow(26,s.length-i-1)
    
    return ans
};