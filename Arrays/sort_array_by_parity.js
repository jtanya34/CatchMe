/**
 * Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
 * You may return any answer array that satisfies this condition.
 * 
     Example 1:

    Input: [3,1,2,4]
    Output: [2,4,3,1]
    The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 */


 //! Solutions

 //First

 var sortArrayByParity = function(A) {
    let i=0;
    let j=A.length-1
    for(let i=0;i<A.length;i++){
        if(i==j || i>j){
            break;
        }else if(A[i]%2!==0 && A[j]%2==0){
          
            let temp=A[i]
            A[i]=A[j]
            A[j]=temp
            j--
              
        }else if(A[i]%2!==0 && i!=j){
            i--
            j--
        }
    }
    return A
};


//Second

var sortArrayByParity = function(A) {
    A.sort((a,b)=>a%2-b%2)
     return A
 };