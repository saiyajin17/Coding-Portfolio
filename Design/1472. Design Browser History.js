let pageName;
let prev,val,next;

var ListNode= function(prev,val,next){

    this.prev=(prev===undefined?null:prev);
    this.val=(val===undefined?null:val);
    this.next=(next===undefined?null:next);
}
let head=new ListNode();
let tail=new ListNode();
/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    let node = new ListNode();
    node.val=homepage;
    head=node;
    tail=node;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    let node=new ListNode();
    node.val=url;
    node.prev=tail;
    tail.next=node;
    tail=tail.next;    
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    
    while(tail.prev && steps--)
    {
        tail=tail.prev;
    }
    return tail.val;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while(tail.next && steps--)
    {
       tail=tail.next;
    }
    return tail.val;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */