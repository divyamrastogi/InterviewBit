var s = {
    trailingZeros: function(A) {
        numFives = 0;
        while (A > 0) {
            numFives += Math.floor(A/5);
            A = A/5;
        }
        return numFives;
    }
}

// s.factorial(20)
s.trailingZeros(100)
