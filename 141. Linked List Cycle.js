var hasCycle = function(head) {
    if(!head || !head.next) return false;
    let slow=head;
    let fast=head.next.next;

    while(fast && fast.next)
    {
        if(slow==fast) return true;
        slow=slow.next;
        fast=fast.next.next;
    }
    return false;
};

/* HashMap Approach */

var hasCycle = function(head) {
    if(!head) return false;

    let map= new Map();
    let temp=head;
    while(temp)
    {
        if(map.has(temp)){
            return true;
        }
        map.set(temp,1);
        temp=temp.next;
    }

    return false;
};