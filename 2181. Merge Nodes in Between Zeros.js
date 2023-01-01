var mergeNodes = function(head) {
    let sum=0;
    let newHead=head;
    let temp=newHead;
    head=head.next;
    while(head)
    {
        if(head.val==0)
        {
            var tempnode=new ListNode();
            tempnode.val=sum;
            tempnode.next=null;
            temp.next=tempnode;
            temp=temp.next;
            sum=0;
        }else{
            sum=sum+head.val;
        }
        head=head.next;
    }
    
    return newHead.next;
};

/* without creating new list -> BETTER*/

var mergeNodes = function(head) {
    head=head.next;
    let start=head;
    let sum;
    while(start)
    {
        let temp=start;
        sum=0;
        while(temp.val){
            sum=sum+temp.val;
            temp=temp.next;
        }
        start.val=sum;
        start.next=temp.next;
        start=start.next;
    }

    return head;
};

