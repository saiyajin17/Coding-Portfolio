class Solution {
    public int rangeSumBST(TreeNode root, int low, int high) {
        if(root==null) return 0;
        int l=0,r=0;
        if(low<root.val){
            l=rangeSumBST(root.left,low,high);
        }
        if(high>root.val){
            r=rangeSumBST(root.right,low,high);
        }
        if(root.val>=low && root.val<=high){
            return root.val+l+r;
        }
        return l+r;
    }
}