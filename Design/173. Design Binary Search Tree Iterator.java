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
class BSTIterator {                                     // here we have used almost O(n) memory since we pushed all the elements in the stack
    Stack<TreeNode> stack= new Stack();
    
    public BSTIterator(TreeNode root) {
        traversal(root);
    }
    
    public void traversal(TreeNode root){
        while(root!=null){
            stack.push(root);
            root=root.left;
        }
    }

    public int next() {
        TreeNode top=stack.pop();
        TreeNode temp=top;
        if(top.right!=null){
            traversal(top.right);
        }
        return temp.val;
    }
    
    public boolean hasNext() {
        return !stack.isEmpty();
    }
}

/* OTHER APPROACH WHER O(H) Memory is used only */

class BSTIterator {                               // here we have used only O(h) memory since we are just pushing left childs into stack everytime
    Stack<TreeNode> stack= new Stack();
    
    public BSTIterator(TreeNode root) {
        traversal(root);
    }
    
    public void traversal(TreeNode root){
        while(root!=null){
            stack.push(root);
            root=root.left;
        }
    }

    public int next() {
        TreeNode top=stack.pop();
        TreeNode temp=top;
        if(top.right!=null){
            traversal(top.right);
        }
        return temp.val;
    }
    
    public boolean hasNext() {
        return !stack.isEmpty();
    }
}
