/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    for(let j=0;j<nums1.length;j++){
        let index=nums2.indexOf(nums1[j]);
        let ans=nums1[j];
        for(let i=index+1;i<nums2.length;i++)
        {
            if(nums2[i]>nums1[j]){
                nums1[j]=nums2[i];
                break;
            }
        }
        if(ans==nums1[j]){
            nums1[j]=-1;
        }
    }
    return nums1;
};

/* OPTIMISED APPROACH USING STACK */
var nextGreaterElement = function(nums1, nums2) {
    const map= {};
    const stack=new Array();

    for(num of nums2){
        while(stack.length>0 && stack[stack.length-1]<num){
           map[stack.pop()]=num;
        }
        stack.push(num);
    }  
    return nums1.map(n=> map[n] || -1);
};