var pairSum = function(head) {
    
    if(head.next.next==null) return head.val+head.next.val;

    let stack=[];
    let slow=head;
    let fast=head;
    while(fast && fast.next.next)
    {
        stack.push(slow.val);
        slow=slow.next;
        fast=fast.next.next;
    }
    stack.push(slow.val);
 fast=slow.next;
    let maxi=0;
    while(fast)
    {       
        maxi=Math.max(stack.pop()+fast.val,maxi);
        fast=fast.next;
    }

    return maxi;
};