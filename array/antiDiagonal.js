var s = {
    antiDiagonal: function(A) {
        var aDiagonal = [];
        for(var i = 0; i < A.length; i++) {
            aDiagonal.push(this.nthRowDiagonal(A, i));
        }
        for(var i = 1; i < A.length; i++) {
            aDiagonal.push(this.nthColDiagonal(A, i, A[i].length - 1));
        }
        return aDiagonal;
    },
    nthRowDiagonal: function(A, n) {
        var arr = [];
        // (n, 0) , (n -1, 1) ..., (0, n)
        var i = 0, j = n;
        while (j >= 0) {
            arr.push(A[i][j]);
            j--;
            i++;
        }
        return arr;
    },
    nthColDiagonal: function(A, r, c) {
        var arr = [];
        // (r, c), (r + 1, c -1)... (c, r)
        var i = r, j = c;
        while(i <= c) {
            arr.push(A[i][j]);
            i++;
            j--;
        }
        return arr;
    }
};
var ar = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
s.antiDiagonal(ar);
