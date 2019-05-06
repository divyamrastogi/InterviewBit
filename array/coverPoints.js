var s = {
  coverPoints: function(A, B) {
    var totalSteps = 0;
    var currX = A[0];
    var currY = B[0];
    for (var i = 1; i < A.length; i++) {
      var common = Math.min(Math.abs(currX - A[i]), Math.abs(currY - B[i]));
      var steps = Math.abs(currX - A[i]) + Math.abs(currY - B[i]);
      totalSteps = totalSteps + steps - common;
      currX = A[i];
      currY = B[i];
    }
    return totalSteps;
  }
};

s.coverPoints([1, 2, 6], [1, 2, 6]);
