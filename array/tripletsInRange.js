// Find (a, b, c) such that 1 < a + b + c < 2
// 1 - a < b + c < 2 - a -> Subtract a from all sides

var s = {
    findTriplets(A) {
        var fromOne = A.map(function(v) { return 1 - v;});
        var fromTwo = A.map(function(v) { return 2 - v;});
    }
};
