var sortSentence = function(s) {
    let arr=s.split(" ");
    let res=[];
    for(let i=0;i<arr.length;i++)
    {
        let lastChar=arr[i].length-1;
        let index=arr[i][lastChar]
        res[index-1]=arr[i].substring(0,lastChar);
    }
    return res.join(' ');
};