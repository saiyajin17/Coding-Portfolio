class Solution {
    public List<Double> averageOfLevels(TreeNode root) {
        List<Double> list= new ArrayList();
        Queue<TreeNode> queue= new LinkedList();
        queue.add(root);
        while(!queue.isEmpty()){
            long sum=0,count=0;
            int n=queue.size();
            for(int i=0;i<n;i++){
                TreeNode node=queue.remove();
                sum=sum+node.val;
                count++;
                if(node.left!=null) queue.add(node.left);
                if(node.right!=null) queue.add(node.right);   
            }
            list.add((double)sum/count);
        }
        
        return list;
    }       

}