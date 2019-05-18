var s = {
    isPowerOfTwoIntegers: function(A) {
        if (A == 1) return true;
        var logA = Math.log(A);
        for (var i = 2; i*i <= A; i++) {
            var val = logA/Math.log(i);
            if (val == parseInt(val)) {
                return true;
            }
        }
        return false;
    }
}

s.isPowerOfTwoIntegers(6)
