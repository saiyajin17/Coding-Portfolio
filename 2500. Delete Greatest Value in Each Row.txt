var deleteGreatestValue = function(grid) {
    let n=grid.length;
    for(let i=0;i<grid.length;i++)
    {
        grid[i].sort((a,b)=>a-b);
    }
    let maxi,sum=0;
    for(let i=grid[0].length-1;i>=0;i--)
    {
        maxi=0;
        for(let j=0;j<grid.length;j++){
            maxi=Math.max(maxi,grid[j][i]);
        }
        sum=sum+maxi;
    }

    return sum;
};