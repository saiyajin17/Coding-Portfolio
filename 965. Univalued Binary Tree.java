class Solution {
    public boolean isUnivalTree(TreeNode root) {
        Queue<TreeNode> q = new LinkedList();
        q.add(root);
        int key=root.val;
        while(!q.isEmpty()){
            int n=q.size();
            for(int i=0;i<n;i++){
                TreeNode temp= q.poll();
                if(temp.val!=key) return false;
                if(temp.left!=null) q.add(temp.left);
                if(temp.right!=null) q.add(temp.right);
            }
        }

        return true;
    }
}

/* RECURSIVE APPROACH */
class Solution {
    public boolean isUnivalTree(TreeNode root) {
        return traversal(root.val,root);
    }

    public boolean traversal(int key, TreeNode root){
        if(root==null) return true;

        if(root.val==key){
            boolean left=traversal(key,root.left);
            boolean right=traversal(key,root.right);
            return left & right;
        }
        return false;
    }
}