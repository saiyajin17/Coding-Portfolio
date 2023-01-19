class Solution {
    public boolean evaluateTree(TreeNode root) {
        if(root.left==null && root.right==null){
            if(root.val==1) return true;
            else return false;
        } 
        if(root.val==2){
            return evaluateTree(root.left) | evaluateTree(root.right);
        }   
        return evaluateTree(root.left) & evaluateTree(root.right);
    }
}