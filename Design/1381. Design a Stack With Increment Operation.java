class CustomStack {

    int[] arr;
    int top;
    public CustomStack(int maxSize) {
        this.arr=new int[maxSize];
        this.top=-1;
    }
    
    public void push(int x) {
        if(top+1==arr.length) return;
        top++;
        arr[top]=x;
    }
    
    public int pop() {
        return (top>=0?arr[top--]:-1);
    }
    
    public void increment(int k, int val) {
        int i=0;
        while(k>0 && i<=top){
            arr[i]=arr[i]+val;
            i++;
            k--;
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * CustomStack obj = new CustomStack(maxSize);
 * obj.push(x);
 * int param_2 = obj.pop();
 * obj.increment(k,val);
 */