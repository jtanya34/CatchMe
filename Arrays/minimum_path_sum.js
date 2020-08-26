/**
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

    Note: You can only move either down or right at any point in time.

    Example:

    Input:
    [
    [1,3,1],
    [1,5,1],
    [4,2,1]
    ]
    Output: 7
    Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 */

 //! Solution

 var minPathSum = function(grid) {
    let grid1=grid
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(i==0 && j>0){
                 grid1[i][j]=grid[i][j]+grid1[i][j-1]
            }else if(i>0 && j==0){
                   grid1[i][j]=grid[i][j]+grid1[i-1][0]
            }else if(i>0 && j>0){
                 grid1[i][j]=Math.min(grid[i][j]+grid1[i][j-1],grid[i][j]+grid1[i-1][j])
            }
           
         }
    }
    return grid1[grid1.length-1][grid1[0].length-1]
};