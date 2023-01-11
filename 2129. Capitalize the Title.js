var capitalizeTitle = function(title) {
    let arr=title.split(" ");
    for(let i=0;i<arr.length;i++)
    {
        arr[i]=arr[i].toLowerCase();
        if(arr[i].length>2)
        {
            let str=arr[i].substring(0,1).toUpperCase()+arr[i].substring(1);
            arr[i]=str;
        }
    }

    return arr.join(" ");
};