class MyQueue {
    Stack<Integer> stack=new Stack();
    Stack<Integer> helper=new Stack();
    int front;
    public MyQueue() {        
    }
    
    public void push(int x) {
        if(stack.isEmpty())
        {
            front=x;
        }
        stack.push(x);
    }
    
    public int pop() {
        if(helper.isEmpty()){
            while(!stack.isEmpty()){
                helper.push(stack.pop());;
            }
        }
        return helper.pop();
    }
    
    public int peek() {
        if(helper.isEmpty()) return front;
        return helper.peek();
    }
    
    public boolean empty() {
        return stack.isEmpty() && helper.isEmpty();
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */