var mergeTwoLists = function(list1, list2) {
    
    if(list1==null) return list2;
    if(list2==null) return list1;

    let newHead=new ListNode();
    
    if(list1.val < list2.val){
        newHead=list1;
        list1=list1.next;
    }else{
        newHead=list2;
        list2=list2.next;
    }
    
    let tail= new ListNode();
    tail=newHead;
    while(list1 && list2)
    {
        if(list1.val<list2.val){
            tail.next=list1;
            list1=list1.next;
        }else{
            tail.next=list2;
            list2=list2.next;
        }   
        tail=tail.next;
    }

    if(list1) tail.next=list1;
    else tail.next=list2;
    return newHead;
};

/* Recursive Approach */

var mergeTwoLists = function(list1, list2) {
    
    if(list1==null) return list2;
    if(list2==null) return list1;

    if(list1.val < list2.val )
    {
        list1.next=mergeTwoLists(list1.next,list2);
        return list1;
    }else{
        list2.next=mergeTwoLists(list1,list2.next);
        return list2;
    }
};
