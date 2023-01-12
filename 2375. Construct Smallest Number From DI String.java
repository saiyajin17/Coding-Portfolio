class Solution {
    public String smallestNumber(String pattern) {
        StringBuilder res=new StringBuilder();
        Stack<Character> stack = new Stack();
        for(int i=0;i<=pattern.length();i++){
            stack.push((char)('1'+i));
            if(i==pattern.length() || pattern.charAt(i)=='I'){
                while(!stack.isEmpty()){
                    res.append(stack.pop());
                }
            }
        }

        return res.toString();
    }
}