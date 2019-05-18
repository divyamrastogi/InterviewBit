function generatePascalTriangle(rows) {
    var pascalTriangle = [[1]];
    for (var i = 1; i < rows; i++) {
        pascalTriangle[i] = [];
        for (var j = 0; j <= i; j++) {
            pascalTriangle[i][j] = (pascalTriangle[i-1][j] || 0) + (pascalTriangle[i-1][j -1] || 0)
        }
    }
    return pascalTriangle;
}

generatePascalTriangle(7);
