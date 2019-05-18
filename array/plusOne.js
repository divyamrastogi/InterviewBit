function plusOne(A){
    var i = A.length - 1;
    var carry = 1;
    while (i >= 0 && carry > 0) {
        var digit = A[i] + carry;
        if (digit > 9) {
            A[i] = digit % 10;
        } else {
            A[i] = digit;
            carry = 0;
        }
        --i;
    }
    if (carry === 1) {
        A.unshift(1);
    }
    return A;
}

plusOne([ 9, 9, 9, 9, 9 ]);
