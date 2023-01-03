var increasingBST = function(root) {
    let stack=[];
    traversal(root,stack);
    let ans=new TreeNode(stack.pop(),null,null);
    let temp=ans;
    while(stack.length){
        let node=new TreeNode(stack.pop(),null,null);
        temp.right=node;
        temp=temp.right;
    }
    return ans;
  };
  
  var traversal=function(root,stack)
  {
      if(!root) return;
      traversal(root.right,stack);
      stack.push(root.val);
      traversal(root.left,stack);
  }
  