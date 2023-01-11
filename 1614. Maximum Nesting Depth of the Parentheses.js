var maxDepth = function(s) {
    let arr=[];
    let maxi=0;
    for(let i=0;i<s.length;i++)
    {
        if(s[i]=="(")
        {
            arr.push(s[i]);
        }else if(s[i]==")"){
            maxi=Math.max(arr.length,maxi);
            arr.pop();
        }
    }

    return maxi;
};