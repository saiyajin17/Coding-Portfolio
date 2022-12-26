var minBitFlips = function(start, goal) {
   let cnt=0;
    while(goal>0 || start>0){
        if(start%2!=goal%2){
            cnt++;
        } 
        start=start>>1;
        goal=goal>>1;
    }
    return cnt;
};