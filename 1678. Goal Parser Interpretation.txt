var interpret = function(command) {
    let i=0;
    let str='';
    while(i<command.length)
    {
        if(command[i]=='G'){str+="G"; i++;} 
        else if(command[i]=='(' && command[i+1]==')'){str+="o"; i=i+2;}
        else{str+="al"; i=i+4;}
    }

    return str;
};