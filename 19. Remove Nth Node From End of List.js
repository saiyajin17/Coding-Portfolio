var removeNthFromEnd = function(head, n) {
    
    if(head.next==null && n==1) return null;

    let counter=0;
    let temp=head;
    while(temp!=null)
    {
        counter++;
        temp=temp.next;
    }
    
    counter = counter-n;
    if(counter>0){
        let prev=new ListNode();
    let curr=head;
    while(counter--)
    {
        prev=curr;
        curr=curr.next;
    }

    prev.next=curr.next;
    return head;
    }else{
        return head.next;
    }
    
};

/* slow fast pointer approach */
var removeNthFromEnd = function(head, n) {
    
    let slow=head,fast=head;
    while(n--) {
        fast=fast.next;
    }
    if(!fast) return head.next;

    while(fast.next)
    {
        slow=slow.next;
        fast=fast.next;
    }
    slow.next=slow.next.next;
    
    return head;
};
