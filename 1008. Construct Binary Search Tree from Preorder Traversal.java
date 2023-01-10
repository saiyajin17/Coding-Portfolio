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
    public TreeNode bstFromPreorder(int[] preorder) {
     return traversal(0,preorder.length-1,preorder);
    }

    public TreeNode traversal(int start,int end,int[] preorder){
        if(start>end) return null;

        TreeNode root= new TreeNode(preorder[start],null,null);
            int mid;
            for(mid=start;mid<=end;mid++)
            {
                if(preorder[mid]>root.val) break;
            }
            root.left=traversal(start+1,mid-1,preorder);
            root.right=traversal(mid,end,preorder);
        return root;
    }
}