/**
 * Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

    Example 1:

    Input: [5,7]
    Output: 4
    Example 2:

    Input: [0,1]
    Output: 0
 */

 //! Solution

 var rangeBitwiseAnd = function(m, n) {
    if((m==0 || n==0)){
        return 0
    }
    let r=0
    while(m!=n){
        m=m>>1
        n=n>>1
        r++
    }
    return m<<r
};