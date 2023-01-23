class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        return insert(0,nums.length-1,nums);
    }

    public TreeNode insert(int l, int r, int[] num){
        
        if(l>r){
            return null;
        }

        int mid=l+(r-l)/2;
        TreeNode root= new TreeNode();
        root.val=num[mid];
        root.left=insert(l,mid-1,num);
        root.right=insert(mid+1,r,num);

        return root;
    }
}