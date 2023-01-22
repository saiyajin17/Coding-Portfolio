class Solution {
    public int maxDepth(Node root) {
        if(root==null) return 0;

        List<Node> list=root.children;
        int maxi=0;
        for(Node child:list){
            maxi=Math.max(maxi,maxDepth(child));
        }
        return 1+maxi;
    }
}

/* Iterative Approach -> more efficient*/
class Solution {
    public int maxDepth(Node root) {
        if(root==null) return 0;
        Queue<Node>q = new LinkedList();
        q.add(root);
        int height=0;
        while(!q.isEmpty()){
            int n=q.size();
            for(int i=0;i<n;i++){
                Node node=q.poll();
                for(Node curr:node.children) q.add(curr);
            }
            height++;
        }
        return height;
    }
}