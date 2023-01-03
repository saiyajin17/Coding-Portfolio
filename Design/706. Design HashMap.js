let val,next,keyVal;

var ListNode=function(keyVal,val,next){
    this.val= (val===undefined?0:val);
    this.next= (next===undefined?null:next);
    this.keyVal= (keyVal===undefined?0:keyVal);
}

let head;
var MyHashMap = function() {
    head=null;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
        if(!head){
            head=new ListNode(key,value,null);
        }else{
           let curr=head;
            if(curr.keyVal==key) {
                curr.val=value;
                return;
            }
           while(curr.next)
           {
               if(key==curr.next.keyVal){
                   curr.next.val=value;
                   return;
               }
               curr=curr.next;
           }
           let node= new ListNode(key,value,null);
           curr.next=node;

        }
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    if(!head) return -1;
    let temp=head;
    while(temp)
    {
    
        if(temp.keyVal==key)
        {
            return temp.val;
        }
        temp=temp.next;
    }
    return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    if(!head) return;
    if(head.keyVal==key){
        head=head.next;
        return;
    } else{
        let temp=head;
        while(temp.next)
        {
            if(temp.next.keyVal==key)
            {
                temp.next=temp.next.next;
                return;
            }
            temp=temp.next;
        }
    }

};

/* Other Array Method */

0/5
let hashMap;
var MyHashMap = function() {
    hashMap=[];
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    hashMap[key]=value;
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    return (hashMap[key]>=0?hashMap[key]:-1);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    delete hashMap[key];
};