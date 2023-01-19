class Solution {
    public TreeNode invertTree(TreeNode root) {
        if(root==null) return root;

        TreeNode r=invertTree(root.right);
        TreeNode l=invertTree(root.left);
        root.left=r;
        root.right=l;
        return root;
    }
}

/* ITERATIVE APPROACH */
class Solution {
    public TreeNode invertTree(TreeNode root) {
        if(root==null) return root;

        Queue<TreeNode> queue= new LinkedList();
        queue.add(root);
        while(!queue.isEmpty()){
            TreeNode curr=queue.poll();
            if(curr.left!=null) queue.add(curr.left);
            if(curr.right!=null) queue.add(curr.right);
            TreeNode temp=curr.left;
            curr.left=curr.right;
            curr.right=temp;
        }
        return root;
    }
}