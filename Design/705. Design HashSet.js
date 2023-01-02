let val,next;

var ListNode= function(val,next){
    this.val= (val===undefined?0:val);
    this.next= (next===undefined?null:next);
}

let head;

var MyHashSet = function() {    
    head=null;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if(!head) {
        head=new ListNode(key,null);
    }else{
        let temp=head;
        let prev=null;
        while(temp)
        {
            if(temp.val==key){
                return;
            }
            prev=temp;
            temp=temp.next;
        }
        let node=new ListNode(key,null);
        prev.next=node;
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    if(!head) return;
    let temp=head;
    if(head.val==key){
        head=head.next;
        return;
    }
    while(temp.next)
    {
        if(temp.next.val==key)
        {
            temp.next=temp.next.next;
            return;
        }
        temp=temp.next;
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    
    let temp=head;
    while(temp)
    {
       
        if(temp.val==key){
            return true;
        }
        temp=temp.next;
    }
    return false;
};


/* Other approach using ARRAY */

let hashSet;
var MyHashSet = function() {
    hashSet=new Array();
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    hashSet[key]=1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    hashSet[key]=0;
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return (hashSet[key]==1?true:false);
};
