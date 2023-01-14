class Solution {
    public int[] sortedSquares(int[] nums) {
        int[] res= new int[nums.length];
        int i=0,j=nums.length-1;
        for(int ind=nums.length-1;ind>=0;ind--)
        {
            if(Math.abs(nums[i])<Math.abs(nums[j])){
                res[ind]=nums[j]*nums[j];
                j--;
            }else{
                res[ind]=nums[i]*nums[i];
                i++;
            }
        }
        return res;
    }
}