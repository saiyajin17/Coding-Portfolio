var xorOperation = function(n, start) {
    let ans=start;
    for(let i=1;i<n;i++)
    {
        start+=2;
        ans=ans^start;
    }
    return ans;
};