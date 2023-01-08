class Solution {
    public int countStudents(int[] students, int[] sandwiches) {
        


        int zeroCount=0;
        int oneCount=0;    
        for(int i=0;i<students.length;i++)
        {
            if(students[i]==1) oneCount++;
            else zeroCount++;
        }

        for(int i=0;i<sandwiches.length;i++)
        {
            if(sandwiches[i]==1){
                if(oneCount==0){
                    return zeroCount;
                }
                oneCount--;
            } 
            else{
                if(zeroCount==0){
                    return oneCount;
                }
                zeroCount--;
            } 
        }

        return 0;
    }
}