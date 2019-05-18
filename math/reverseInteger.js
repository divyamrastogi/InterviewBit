var s = {
    reverseInteger: function(A) {
        if (A.toString(2).length > 32) {
            return 0;
        }
        A = A + '';
        if (A[0] == '-') {
            ans = +('-' + A.slice(1).split('').reverse().join(''))
        } else {
            ans = +(A.slice(0).split('').reverse().join(''))
        }
        if (ans.toString(2).length > 32) {
            return 0;
        }
        return ans;
    }
}

s.reverseInteger(-1146467285)
