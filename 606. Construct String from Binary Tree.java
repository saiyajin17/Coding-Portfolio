class Solution {
    public String tree2str(TreeNode root) {
        if(root==null) return "";

        StringBuilder str=new StringBuilder();
        traversal(root,str);
        return str.toString();
    }

    public void traversal(TreeNode root,StringBuilder s)
    { 
        if(root==null){
            return;
        } 
        
        s.append(root.val);
        if(root.left!=null){
            s.append("(");
            traversal(root.left,s);
            s.append(")");
        }
        if(root.right!=null){
            if(root.left==null){
                s.append("()");
            }
            s.append("(");
            traversal(root.right,s);
            s.append(")");
        }
    }
}