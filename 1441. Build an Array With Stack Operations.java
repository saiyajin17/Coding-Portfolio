class Solution {
    public List<String> buildArray(int[] target, int n) {
        List<String> list= new ArrayList();
        int k=0,top=0;
        for(int i=0;i<target.length;i++){
            k++;
            if(k==target[i]) list.add("Push");
            else
            {
                int diff=target[i]-top;
                while(diff>1){
                list.add("Push");
                list.add("Pop");
                diff--;
                }
                list.add("Push");
            } 
            top=target[i];
        }       
        return list;
    }
}

/* SAME SOLUTION WITH LIL OPTIMISED */
class Solution {
    public List<String> buildArray(int[] target, int n) {
        List<String> list= new ArrayList();
        int k=0;
        for(int i=0;i<target.length;i++){
            k++;
            while(k!=target[i]){
                list.add("Push");
                list.add("Pop");
                k++;
                }
                list.add("Push");
        }       
        return list;
    }
}
