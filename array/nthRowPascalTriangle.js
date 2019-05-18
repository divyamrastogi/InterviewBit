var s = {
  //param A : integer
  //return a array of integers
  getRow: function(A) {
    return this.pGetRow(A + 1);
  },
  pGetRow: function(A) {
    if (A == 0) {
      return [];
    } else if (A == 1) {
      return [1];
    } else {
      var prevRow = [1]; // previous row
      var currentRow; // This will store the current row.
      var n = 2;
      while (n <= A) {
        currentRow = [];
        for (var i = 0; i <= prevRow.length; i++) {
          currentRow.push((prevRow[i] || 0) + (prevRow[i - 1] || 0));
        }
        prevRow = currentRow;
        n++;
      }
      return currentRow;
    }
  }
};

console.log(s.getRow(3));
