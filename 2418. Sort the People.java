class Person{
    String name;
    int height;

    public Person(String name,int height){
        this.name=name;
        this.height=height;
    }

    public String getName() {
		return name;
	}

    public int getHeight() {
		return height;
	}
}
class Solution {
    public String[] sortPeople(String[] names, int[] heights) {
        Map<Integer,String> map=new HashMap<>();
        List<Person> list=new ArrayList(); 
        for(int i=0;i<names.length;i++)
        {
            Person p= new Person(names[i],heights[i]);
            list.add(p);
        }
        list.sort((a,b)->b.getHeight()-a.getHeight());
        String[] res= new String[names.length];
        int k=0;
        for(Person li:list)
        {
            res[k++]=li.getName();
        }
        return res;

    }
}

/* HashMap Approach */
class Solution {
    public String[] sortPeople(String[] names, int[] heights) {
        Map<Integer,String> map=new HashMap<>();
        for(int i=0;i<names.length;i++)
        {
            map.put(heights[i],names[i]);
        }
        Arrays.sort(heights);
        reverse(heights);
        String[] res= new String[names.length];
        for(int i=0;i<names.length;i++)
        {
            res[i]=map.get(heights[i]);
        }
        return res;
    }

    public void reverse(int[] heights){
        int left=0;
        int right=heights.length-1;
        while(left<right){
            int temp=heights[left];
            heights[left]=heights[right];
            heights[right]=temp;
            left++;
            right--;
        }
    }
}