class Solution {
    public int[] searchRange(int[] arr, int x) {
        int[] list= new int[2];
        int first=-1,last=-1;
        for(int i=0;i<arr.length;i++)
        {
            if(arr[i]==x && first==-1) first=i;
            if(arr[i]==x) last=i;
        }
        list[0]=first;
        list[1]=last;
        return list;
    }
}

/* BINARY SEARCH APPROACH WHICH USES O(logn) time to find the element */
class Solution {
    public int[] searchRange(int[] arr, int x) {
        int first=-1;
        int n=arr.length;
        int l=0,r=n-1;
        while(l<=r){
            int mid=l+(r-l)/2;
            if(arr[mid]==x){
                first=mid;  
                r=mid-1;
            }else if(arr[mid]<x){
                l=mid+1;
            }else{
                r=mid-1;
            }
        }
    l=0;
    r=n-1;
    int last=-1;
    while(l<=r){
            int mid=l+(r-l)/2;
            if(arr[mid]==x){
                last=mid;  
                l=mid+1;
            }else if(arr[mid]<x){
                l=mid+1;
            }else{
                r=mid-1;
            }
        }
    int[] res= new int[2];
    res[0]=first;
    res[1]=last;
    return res;
    }
}