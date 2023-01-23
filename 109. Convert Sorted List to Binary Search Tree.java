class Solution {
    public TreeNode sortedListToBST(ListNode head) {
        return insert(head,null);
    }

    public TreeNode insert(ListNode head,ListNode tail){
        if(head==tail) return null;

        ListNode fast=head,slow=head;
        while(fast!=tail && fast.next!=tail){
            fast=fast.next.next;
            slow=slow.next;
        }
        
        TreeNode root=new TreeNode(slow.val);
        root.right=insert(slow.next,tail);
        root.left=insert(head,slow);

        return root;
    }
}