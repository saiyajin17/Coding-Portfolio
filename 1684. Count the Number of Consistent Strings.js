var countConsistentStrings = function(allowed, words) {
    const map=new Map();
    let cnt=0;
    let flagCHeck=false;
    for(let i=0;i<allowed.length;i++)
    {
        if(!map.has(allowed[i])){
            map.set(allowed[i],1);
        }
    }

    for(let word of words)
    {
        for(let i=0;i<word.length;i++)
        {
            if(!map.has(word[i])){
                cnt++;
                break;
            }        
        }

    }
    return words.length-cnt;
};


