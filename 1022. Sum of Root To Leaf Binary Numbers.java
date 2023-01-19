class Solution {
    
    public int sumRootToLeaf(TreeNode root) {
        return traversal(root,0);
    }

    public int traversal(TreeNode root,int num){
        if(root==null) return 0;
        num=num*2+root.val;
        if(root.left==null && root.right==null) return num;
        return traversal(root.left,num)+traversal(root.right,num);
    }
}