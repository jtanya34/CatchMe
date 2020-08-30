/**
 * Given two strings text1 and text2, return the length of their longest common subsequence.

    A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

    

    If there is no common subsequence, return 0.

    

    Example 1:

    Input: text1 = "abcde", text2 = "ace" 
    Output: 3  
    Explanation: The longest common subsequence is "ace" and its length is 3.
    Example 2:

    Input: text1 = "abc", text2 = "abc"
    Output: 3
    Explanation: The longest common subsequence is "abc" and its length is 3.
 */


 //!Solution - Dynamic programming

 var longestCommonSubsequence = function(text1, text2) {
    let rows=text1.split('').length
    let columns=text2.split('').length
     
    let dp = Array(rows+1).fill().map(() => Array(columns+1).fill(0));
   
     for(let i=1;i<=rows;i++){
        for(let j=1;j<=columns;j++){
            if(text1[i-1]===text2[j-1]){
                dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]+1)
            }else{
                 dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])
            }
        } 
     }
     console.log(dp)
     return dp[rows][columns]
 };