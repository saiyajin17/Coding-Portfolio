var getDecimalValue = function(head) {

    let str='';
    while(head!=null)
    {
        str=head.val+str;
        head=head.next;
    }
    let num=0;
    
    for(let i=0;i<str.length;i++)
    {
        if(str[i]!='0'){
            num+=Math.pow(2,i);
        }
    }

    return num;
};

/* Bit Manipulation approach */
var getDecimalValue = function(head) {

    let num=0;
    while(head!=null)
    {
        num=2*num+head.val;
        head=head.next;
    }
    return num;
};