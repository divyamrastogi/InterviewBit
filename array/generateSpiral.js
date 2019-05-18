function generateSpiral(A) {
    var solution = new Array(A);
    for (var i = 0; i < A; i++) {
        solution[i] = new Array(A);
    }
    // [[], [], []]
    var top = 0, bottom = A - 1, left = 0, right = A - 1, dir = 0;
    var count = 0;
    while (top <= bottom && left <= right && count < A*A) {
        if (dir == 0) {
            for (var i = left; i <= right; i++) {
                solution[top][i] = ++count;
            }
            top++;
        } else if (dir == 1) {
            for (var j = top; j <= bottom; j++) {
                solution[j][right] = ++count;
            }
            right--;
        } else if (dir == 2) {
            for (var i = right; i >= left; i--) {
                solution[bottom][i] = ++count;
            }
            bottom--;
        } else {
            for (var j = bottom; j >= top; j--) {
                solution[j][left] = ++count;
            }
            left++;
        }
        dir++;
        dir = dir % 4;
    }
    return solution;
}

generateSpiral(3);
