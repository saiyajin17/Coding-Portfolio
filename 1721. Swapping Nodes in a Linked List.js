var swapNodes = function(head, k) {
    let counter=1;
    let temp=head;
    while(temp.next)  
    {
        counter++;
        temp=temp.next;
    }
    console.log(counter);
    if(k==counter){
        let c=temp.val;
        temp.val=head.val;
        head.val=c;
    }else{
        counter=counter-k;
        temp=head;
        let temp1=head;
       while(k-1>0)
       {
           temp1=temp1.next;
           k--;
       }
        while(counter--)
        {
            temp=temp.next;
        }
    let c=temp1.val;
    temp1.val=temp.val;
    temp.val=c;
    }
    
    return head;
};

/* Easy Approach */

var swapNodes = function(head, k) {
    
    let temp=head;
    while(k-1>0)
    {
        temp=temp.next;
        k--;
    }

    let slow=head;
    let fast=temp.next;
    while(fast)
    {
        slow=slow.next;
        fast=fast.next;
    }

    let c=slow.val;
    slow.val=temp.val;
    temp.val=c;

    return head;
};