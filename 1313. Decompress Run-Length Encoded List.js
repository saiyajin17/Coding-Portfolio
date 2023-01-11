// javascript

var decompressRLElist = function(nums) {
    let res=[];
    for(let i=0;i<nums.length;i=i+2){
        let freq=nums[i];
        let val=nums[i+1];
        while(freq--){
            res.push(val);
        }
    }

    return res;
};