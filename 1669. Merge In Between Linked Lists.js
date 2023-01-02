var mergeInBetween = function(list1, a, b, list2) {
    let curr=list1;
    let prev=null;

    while(b--){
        prev= (a>0?curr:prev);
        a--;
        curr=curr.next;
    }

    let temp=list2;
    while(temp.next)
    {
        temp=temp.next;
    }

    prev.next=list2;
    temp.next=curr.next;

    return list1;

};