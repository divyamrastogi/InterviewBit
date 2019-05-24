var s = {
  //param A : array of array of integers
  //return an integer
  smallerElements: function(A, B) {
    var low = 0,
      high = A.length - 1;
    var count = 0,
      insertionPoint = -1;
    while (low <= high) {
      var mid = parseInt((low + high) / 2);
      if (A[mid] > B) {
        high = mid - 1;
      } else {
        insertionPoint = mid;
        low = mid + 1;
      }
    }
    return insertionPoint;
  },
  findMedian: function(A) {
    var min = A[0][0],
      max = A[0][0];
    var n = A.length,
      m = A[0].length;
    for (var i = 0; i < n; ++i) {
      if (A[i][0] < min) min = A[i][0];
      if (A[i][m - 1] > max) max = A[i][m - 1];
    }

    var element = parseInt((n * m + 1) / 2);
    while (min < max) {
      var mid = parseInt(min + (max - min) / 2);
      var cnt = 0;
      for (var i = 0; i < n; ++i) {
        var iPoint = this.smallerElements(A[i], mid);
        cnt = cnt + iPoint + 1;
      }
      if (cnt < element) {
        min = mid + 1;
      } else {
        max = mid;
      }
    }
    return min;
  }
};

var arr = [[1, 3, 5], [2, 6, 9], [3, 6, 9]];
s.findMedian(arr);
