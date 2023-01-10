/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode constructMaximumBinaryTree(int[] nums) {
        int start=0;
        int end=nums.length-1;
        return traversal(start,end,nums);
    }

    public TreeNode traversal(int start,int end,int[] nums){
        if(start==end) return new TreeNode(nums[start],null,null);
        if(start>end) return null;
        
        int index=maximum(start,end,nums);
        TreeNode root=new TreeNode(nums[index],null,null);
        root.left=traversal(start,index-1,nums);
        root.right=traversal(index+1,end,nums);
        return root;
    }

    public int maximum(int start,int end,int[] nums){
        int maxi=start;
        for(int i=start;i<=end;i++){
            if(nums[i]>nums[maxi]){
                maxi=i;
            }
        }
        return maxi;
    }
}


