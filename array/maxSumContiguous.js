var arr = [-2,-1,-3,-4,-1,-2,-1,-5,-4];

function kadane(A) {
    if (A.every(function(num) {
        return num < 0;
    })) {
        return Math.max.apply(null, A);
    }
    var maxSoFar = 0;
    var maxUntilHere = 0;
    for (var i = 0; i < A.length; i++) {
        maxUntilHere += A[i];
        if (maxUntilHere < 0) {
            maxUntilHere = 0;
        }
        if (maxSoFar < maxUntilHere) {
            maxSoFar = maxUntilHere;
        }
    }
    return maxSoFar;
}

kadane(arr);
