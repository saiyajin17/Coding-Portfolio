class Solution {
    public int minOperations(String[] logs) {

        int stack=0;
        for(int i=0;i<logs.length;i++){
            if(logs[i].equals("../")){
                if(stack!=0) stack--;
            } else if(logs[i].equals("./")){
                continue;
            }else{
                stack++;
            }
        }           
        return stack;
    }
}