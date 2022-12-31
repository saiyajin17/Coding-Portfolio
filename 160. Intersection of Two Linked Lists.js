var getIntersectionNode = function(headA, headB) {
    
    if(!headA || !headB) return null;

    let a=headA;
    let b=headB;
    while(a!=b)
    {
        if(!a) a=headB;
        else a=a.next;

        if(!b) b=headA;
        else b=b.next;
    }

    return a;
};

/* Naive Approach */

var getIntersectionNode = function(headA, headB) {
    
    if(!headA || !headB) return null;

    let lenA=0;
    let temp=headA;
    while(temp)
    {
        lenA++;
        temp=temp.next;
    }
    let lenB=0;
    temp=headB;
    while(temp)
    {
        lenB++;
        temp=temp.next;
    }

    let lenDiff=Math.abs(lenA-lenB);
    if(lenA>lenB){
        
        while(lenDiff--){
            headA=headA.next;
        }
    }else{
        while(lenDiff--){
          headB=headB.next;
        }
    }
    while(headA!=headB)
    {
        headA=headA.next;
        headB=headB.next;
    }

    return headA;
  
};


