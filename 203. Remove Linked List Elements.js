var removeElements = function(head, data) {
    if(head==null) return head;
    head.next=removeElements(head.next,data);
    return (head.val==data)?head.next:head;
};

/* Other approach */

var removeElements = function(head, data) {
    if(head==null) return head;
    
    while(head && head.val==data){
        head=head.next;
    }

    let curr=head;
    while(curr && curr.next)
    {
        if(curr.next.val==data){
            curr.next=curr.next.next;
        }else{
            curr=curr.next;
        }
    }
    
    return head;
};