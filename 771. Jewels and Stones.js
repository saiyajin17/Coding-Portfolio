var numJewelsInStones = function(jewels, stones) {
    const stone=new Map();
    for(let i=0;i<jewels.length;i++){
        if(!stone.has(jewels[i])){
            stone.set(jewels[i],0);
        }
    }
    let cnt=0;
    for(let i=0;i<stones.length;i++){
        if(stone.has(stones[i])){
          cnt++;
        }
    }
    return cnt;
};