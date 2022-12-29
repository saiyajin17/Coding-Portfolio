var middleNode = function(head) {

  let cnt=0;
  let temp=head;
  while(temp!=null)
  {
      cnt++;
      temp=temp.next;
  }  
  let mid;
    if(cnt%2==0)
    {
        mid=(cnt/2)+1;
    }else{
        mid=(cnt+1)/2;
    }
    mid=mid-1;
    while(mid--)
    {
        head=head.next;
        
    }
    return head;
};

/* two pointer approach */
var middleNode = function(head) {

    let slow=head;
    let fast=head;    
    while(fast && fast.next)
    {
        slow=slow.next;
        fast=fast.next.next;
    }

    return slow;
};
  
