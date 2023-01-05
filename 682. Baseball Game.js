/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack=[];
    for(op of operations)
    {    
        if(op=='C') stack.pop();
        else if(op=='D') stack.push(2* +stack[stack.length-1]);
        else if(op=='+') stack.push(+stack[stack.length-1] + +stack[stack.length-2]);
        else stack.push(op);
    }
    let sum=0;
    for(n of stack)
    {
        sum+= +n;
    }


    return sum;
};