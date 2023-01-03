var removeOuterParentheses = function(s) {
  let open=0;
  let str='';
  for(let i=0;i<s.length-1;i++)
  {
      if(s[i]=='('){
          open++;
          str=str+(open>1?"(":"");
      } 
      else{
          open--;
          str=str+(open>0?")":"");
      }
  }
    
    return str;
};