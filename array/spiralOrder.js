function spiralOrder (A){
    var solution = [];
    var top = 0, bottom = A.length - 1, left = 0, right = A[0].length - 1, dir = 0;
    while (top <= bottom && left <= right) {
        if (dir == 0) {
            for (var i = left; i <= right; i++) {
                solution.push(A[top][i]);
            }
            top++;
        } else if (dir == 1) {
            for (var j = top; j <= bottom; j++) {
                solution.push(A[j][right]);
            }
            right--;
        } else if (dir == 2) {
            for (var i = right; i >= left; i--) {
                solution.push(A[bottom][i]);
            }
            bottom--;
        } else {
            for (var j = bottom; j >= top; j--) {
                solution.push(A[j][left]);
            }
            left++;
        }
        dir++;
        dir = dir % 4;
    }
    return solution;
}

var a = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];
console.log(spiralOrder(a));
