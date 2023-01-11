var balancedStringSplit = function(s) {
  
    let j=0,cnt=0;
    for(let i=0;i<s.length;i++)
    {
        if(s[i]=='R') {
            j++;
        } 
        else if(s[i]=="L"){
            j--;
        } 
        
        if(j==0){
            cnt++
        }
    }
    return cnt;
};