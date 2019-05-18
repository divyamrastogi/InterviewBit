// https://www.interviewbit.com/problems/max-distance/
// Given an array A of integers, find the maximum of j - i subjected to the constraint of A[i] <= A[j].

// If there is no solution possible, return -1.

// Example :

// A : [3 5 4 2]

// Output : 2 
// for the pair (3, 4)

var s = {
    maxDistance: function(A) {
        for (var i = 0; i < A.length; i++) {
            for(var j = A.length - 1; j > i; j--) {
                if (A[i] < A[j]) {
                    return j - i;
                }
            }
        }
        return -1;
    }
};


s.maxDistance([3, 5, 4, 2]);
