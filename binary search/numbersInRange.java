import java.io.Exception;
import java.util.ArrayList;
import java.util.List;
import java.lang.*;

class Solution {
    // DO NOT MODIFY THE LIST
    public int findLowerRange(List<Integer> A, int B, int low, int high) {
        int mid = -1;
        while(low <= high) {
            mid = (low + high)/2;
            if (A.get(mid) == B) {
                if (mid > 0 && A.get(mid - 1) == B) {
                    return findLowerRange(A, B, low, mid);
                } else {
                    return mid;
                }
            } else if (A.get(mid) < B) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    }
    
    public int findUpperRange(List<Integer> A, int B, int low, int high) {
        int mid = -1;
        while(low <= high) {
            mid = (low + high)/2;
            if (A.get(mid) == B) {
                if (mid < high && A.get(mid + 1) == B) {
                    return findUpperRange(A, B, mid, high);
                } else {
                    return mid;
                }
            } else if (A.get(mid) < B) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    }

    public ArrayList<Integer> findRange(final List<Integer> A, int B, int low, int high) {
        ArrayList<Integer> solution = new ArrayList<Integer>();
        solution.add(-1);
        solution.add(-1);
        if(low <= high) {
            int mid = (low + high)/2;
            if (A.get(mid) == B) {
                int l = findLowerRange(A, B, low, mid);
                int h = findUpperRange(A, B, mid, high);
                solution.set(0, l);
                solution.set(1, h);
                return solution;
            } else if(B < A.get(mid)) {
                return findRange(A, B, low, mid - 1);
            } else {
                return findRange(A, B, mid + 1, high);
            }
        }
        return solution;
    }
    
    public ArrayList<Integer> searchRange(final List<Integer> A, int B) {
        return findRange(A, B, 0, A.size() - 1);
    }

    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        list.add(1);
        Solution s = new Solution();
        System.out.println(s.searchRange(list, 1));
    }
}
