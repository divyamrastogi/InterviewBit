function sortWave(A) {
    A = A.sort(function(a, b) { return a - b; });
    for (var i = 0; i < A.length; i += 2) {
        if (i + 1 < A.length) {
            var temp = A[i];
            A[i] = A[i + 1];
            A[i + 1] = temp;   
        }
    }
    return A;
}

sortWave([2, 3,1, 4]);
