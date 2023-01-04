/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if(!root) return [];
    let arr=[];
    traversal(root,arr);
      function traversal(root,arr){
          if(!root) return;
          arr.push(root.val);
          for(child of root.children){
              traversal(child,arr);
          }
      }
    return arr;
};

/* OTHER ITERATIVE APPROACH*/
var preorder = function(root) {
    if(!root) return [];
    let arr=[];
    let stack=new Array();
    stack.push(root);
    while(stack.length)
    {
          let curr=stack[0];
          stack.splice(0,1);
          arr.push(curr.val);
          stack=curr.children.concat(stack);
    }
  
    return arr;
  };

