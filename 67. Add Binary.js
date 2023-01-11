var addBinary = function(a, b) {

    let i=a.length-1;
    let j=b.length-1;
    let carry=0;
    let ansA,ansB;
    let str="";
    while(i>=0 || j>=0 || carry>0)
    {
        ansA=(i>=0)?Number(a[i--]):0;
        ansB=(j>=0)?Number(b[j--]):0;
        str=(ansA+ansB+carry)%2+str;
        carry=Math.floor((ansA+ansB+carry)/2);
    }
   
   return str;
};



