class Solution {
    public final TreeNode getTargetCopy(final TreeNode original, final TreeNode cloned, final TreeNode target) {
        if(original==null || cloned==null) return null;
        
        if(original==target) return cloned;
        TreeNode l=getTargetCopy(original.left,cloned.left,target);
        TreeNode r=getTargetCopy(original.right,cloned.right,target);
        return (l!=null?l:r);
    }
}