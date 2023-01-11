var decodeMessage = function(key, message) {
   const map= new Map();
    let j=97;
    for(let i=0;i<key.length;i++)
    {
        if(!map.has(key[i]) && key[i]!=' '){
            let val=String.fromCharCode(j);
            map.set(key[i],val);
            j++;
        }
    }
    let str='';
    for(let i=0;i<message.length;i++)
    {
        let val=map.has(message[i])?map.get(message[i]):" ";
        str=str+val;
    }

    return str;

};