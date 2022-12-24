var cellsInRange = function(s) {
    let totalRow=s[4]-s[1]+1;
    let totalColumn=s[3].charCodeAt()-s[0].charCodeAt()+1;
    let startC=s[0],startR=s[1];
    let res=[],str='';

    startC=String.fromCharCode(startC.charCodeAt()+0);
    for(let col=0;col<totalColumn;col++)
    {    
        for(let row=0;row<totalRow;row++){
            str=startC.concat(Number(startR)+row);
            res.push(str);
        }
        startC=String.fromCharCode(startC.charCodeAt()+1);
    }

    return res;
};