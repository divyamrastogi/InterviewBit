var s = {
    nextPermutation: function(A) {
        // base cases
        if (this.isDescending(A)) {
            return A.reverse();
        }
        if (this.isAscending(A)) {
            return this.swap(A, A.length - 1, A.length - 2);
        }
        var b;
        for (var i = A.length - 1; i >= 0; i--) {
            if (A[i - 1] < A[i]) {
                b = i - 1;
                break;
            }
        }
        console.log(b)
        var c = this.nextBiggestNum(A, b);
        A = this.swap(A, b, c);
        A.slice(b).sort(function(a, b) {return a - b;}).forEach(function(v, i) {
            A[b + i] = v;
        });
        return A;
    },
    nextBiggestNum: function(A, b) {
        var minPos = b + 1;
        for (var i = b+2; i < A.length; i++) {
            if (A[i] < A[minPos]) {
                minPos = i;
            }
        }
        return minPos;
    },
    swap: function(A, i, j) {
        var temp = A[i];
        A[i] = A[j];
        A[j] = temp;
        return A;
    },
    isAscending: function(A) {
        for (var i = 1; i < A.length; i++) {
            if (A[i] < A[i - 1]) {
                return false;
            }
        }
        return true;
    },
    isDescending: function(A) {
        for (var i = 1; i < A.length; i++) {
            if (A[i] > A[i - 1]) {
                return false;
            }
        }
        return true;
    }
}

s.nextPermutation([1, 2, 3])
