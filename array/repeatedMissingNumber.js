function findRepeatedMissingNumber(A) {
    var actualSum = A.reduce(function(sum, e) {
        return sum + e;
    }, 0); // also n * (n+1)/2 + A - B
    var n = A.length;
    var expectedSum = n * (n+1)/2;
    var d = expectedSum + actualSum; // n * (n+1) + A - B
    var e = expectedSum - actualSum // -A + B
    // a = b + actualSum - sum;
    
}

console.log(findRepeatedMissingNumber([3, 1, 2, 5, 3]));
