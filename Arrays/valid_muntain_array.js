
/**
 * Given an array A of integers, return true if and only if it is a valid mountain array.
 * Recall that A is a mountain array if and only if:
 * A.length >= 3
 * There exists some i with 0 < i < A.length - 1 such that:
 * A[0] < A[1] < ... A[i-1] < A[i]
 * A[i] > A[i+1] > ... > A[A.length - 1]
 */



//! Solution

var validMountainArray = function(A) {
    if(A.length<3){
        return false
    }
    let inc=true;
    let prev=A[0]
    for(let i=1;i<A.length;i++){
        if(inc && prev<A[i]){
            prev=A[i]
        }else if(!inc && prev>A[i]){
             prev=A[i]
           
        }else if(inc && prev>A[i] && i!=1){
             prev=A[i]
            inc= false
        }else{
            return false
        }
    }
    return !inc
};