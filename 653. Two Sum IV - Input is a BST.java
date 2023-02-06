class Solution {
    public boolean findTarget(TreeNode root, int k) {

        HashMap<Integer, TreeNode> map = new HashMap();
        traversal(root, map);
        for (Integer m : map.keySet()) {
            int rem = k - m;
            if (map.containsKey(rem) && map.get(m) != map.get(rem)) {
                return true;
            }
        }
        return false;
    }

    public void traversal(TreeNode root, HashMap<Integer, TreeNode> map) {
        if (root == null)
            return;

        traversal(root.left, map);
        map.put(root.val, root);
        traversal(root.right, map);
    }
}

/* Optimised Approach */
class Solution {
    public boolean findTarget(TreeNode root, int k) {
        HashSet<Integer> map = new HashSet();
        return traversal(root, map, k);
    }

    public boolean traversal(TreeNode root, HashSet<Integer> map, int target) {
        if (root == null)
            return false;
        if (map.contains(target - root.val)) {
            return true;
        }
        map.add(root.val);
        return traversal(root.left, map, target) || traversal(root.right, map, target);
    }
}