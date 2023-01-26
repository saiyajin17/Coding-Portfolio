class Solution {
    public int minimumSum(int num) {
        int temp=num,i=0;
        int[] res=new int[4];
        while(temp>0){
            res[i]=temp%10;
            i++;
            temp=temp/10;
        }
        Arrays.sort(res);
        int a=res[0]*10+res[2];
        int b=res[1]*10+res[3];
        return a+b;
    }
}

/* More Optimised approach */
class Solution {
    public int minimumSum(int num) {
        int[] res={num%10,(num/10)%10,(num/100)%10,(num/1000)%10};
        Arrays.sort(res);
        return res[0]*10+res[2]+res[1]*10+res[3];
    }
}