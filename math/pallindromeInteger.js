var s = {
    isPallindrome(A) {
        A = A + '';
        var n = A.length;
        var mid = parseInt(A.length/2);
        for (var i = 0; i <= mid; i++) {
            if (A[i] !== A[n - i - 1]) {
                return 0;
            }
        }
        return 1;
    }
}

s.isPallindrome(121211)
