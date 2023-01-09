class Solution {
    public String makeGood(String s) {
        if(s.isEmpty() || s.length()==1) return s;

        Stack<Character> stack=new Stack();
        
        for(int i=s.length()-1;i>=0;i--){

            if(!stack.isEmpty() && Math.abs(stack.lastElement()-s.charAt(i))==32) stack.pop();
            else stack.push(s.charAt(i));
        }
        StringBuffer str= new StringBuffer();
        while(!stack.isEmpty()){
            str.append(stack.pop());
        }
        return str.toString();
    }
}

