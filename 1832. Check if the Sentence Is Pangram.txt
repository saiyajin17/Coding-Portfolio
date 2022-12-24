var checkIfPangram = function(sentence) {
    const arr= new Array(26);

    for(let i=0;i<sentence.length;i++)
    {
        let index=sentence[i].charCodeAt()-97;
        if(arr[index]){
            arr[index]++
        }else{
            arr[index]=1;
        }
    }
    for(let i=0;i<26;i++)
    {
        if(!arr[i]) return false;
    }
    return true;
};

/*Other method*/

var checkIfPangram = function(sentence) {
    const set= new Set();

    for(let i=0;i<sentence.length;i++)
    {
        set.add(sentence[i]);
    }
    
    return (set.size==26)?true:false;
};

