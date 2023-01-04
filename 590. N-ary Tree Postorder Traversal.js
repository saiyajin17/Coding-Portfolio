/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    if(!root) return [];
    let arr=[];
    traversal(root,arr);
    return arr;
};

var traversal=function(root,arr){
    if(!root) return;
    for(child of root.children){
        traversal(child,arr);
    }
    arr.push(root.val);
}

/* ITERATIVE APPROACH */
var postorder = function(root) {
    if(!root) return [];
    let arr=[];
    let stack=new Array();
    stack.push(root);
    while(stack.length)
    {
        let curr=stack.pop();
        arr.push(curr.val);
        for(child of curr.children)
        {
            stack.push(child);
        }
    }
    
    return arr.reverse();
};


