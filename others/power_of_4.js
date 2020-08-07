/**
 * Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
 */

var isPowerOfFour = function(num) {
    return (num>0 && (num & (num-1))===0 && num%3==1)
};