class MyStack {

    Queue<Integer> queue= new LinkedList();
    Queue<Integer> helper= new LinkedList();
    int front;
    public MyStack() {
    }
    
    public void push(int x) {
        front=x;
        queue.add(x);
    }
    
    public int pop() {
        if(!queue.isEmpty()){
            while(queue.size()>1){
                helper.add(queue.remove());
            }
            
            while(!helper.isEmpty()){
                if(helper.size()==1) front=helper.peek();
                queue.add(helper.remove());
            }
            return queue.remove();
        }
        return -1;
    }
    
    public int top() {
        return front;
    }
    
    public boolean empty() {
        return queue.isEmpty() && helper.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */

/* OTHER APPROACH WITH SINGLE QUEUE */
class MyStack {

    Queue<Integer> queue= new LinkedList();
    public MyStack() {
    }
    
    public void push(int x) {
        queue.add(x);
        int n=queue.size();
        while(n>1){
            queue.add(queue.remove());
            n--;
        }
    }
    
    public int pop() {
        return queue.remove();
    }
    
    public int top() {
        return queue.peek();
    }
    
    public boolean empty() {
        return queue.isEmpty();
    }
}