class Solution {

    List<Integer> list1=new ArrayList();
    List<Integer> list2=new ArrayList();

    public boolean leafSimilar(TreeNode root1, TreeNode root2) {
        traversal(root1,list1);
        traversal(root2,list2);

        if(list1.size()!=list2.size()) return false;
        
        for(int i=0;i<list1.size();i++)
        {
            if(list1.get(i)!=list2.get(i)) return false;
        }
        return true;
    }

    public void traversal(TreeNode root,List<Integer> list){
        if(root==null) return;

        if(root.left==null && root.right==null){
            list.add(root.val);
        }
        traversal(root.left,list);
        traversal(root.right,list);
    }
}