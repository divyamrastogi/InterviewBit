// https://www.interviewbit.com/problems/noble-integer/
var s = {
    findNobleInteger: function(A) {
        A = A.sort(function(a, b) { return a - b; });
        var n = A.length;
        for (var i = 0; i < n - 1; i++) {
            if (A[i] == A[i+1]) {
                continue;
            }
            if (A[i] == n-i-1) 
                return A[i]; 
        }
        if (A[n-1] == 0) {
            return A[n-1];
        }
        return -1;
    }
};

s.findNobleInteger([10, 3, 20, 20, 2])
