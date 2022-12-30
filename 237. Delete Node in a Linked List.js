var deleteNode = function(node) {
    
    let curr=node;
    let prev=null;
    let forward=node.next;
    while(forward){
        curr.val=forward.val;
        prev=curr;
        curr=forward;
        forward=forward.next;
    }
    prev.next=null;
};