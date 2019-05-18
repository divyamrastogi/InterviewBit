// https://www.interviewbit.com/problems/largest-number/

// Given a list of non negative integers, arrange them such that they form the largest number.

// For example:

// Given [3, 30, 34, 5, 9], the largest formed number is 953433230120.

// Note: The result may be very large, so you need to return a string instead of an integer.

var a = [3, 30, 120, 32, 34, 5, 9];

var s = { 
 //param A : array of integers
 //return a strings
    largestNumber : function(A){
        A = A.sort(this.comparator);
        var numZeros = 0;
        for (var i = 0; i < A.length; i++) {
            if (A[i] == 0) {
                numZeros++;
            }
        }
        if (numZeros == A.length) {
            return '0';
        }
        return A.join('');
    },
    comparator: function (a, b) {
        var aCombo = a + '' + b;
        var bCombo = b + '' + a;
        if (aCombo > bCombo) {
            return -1;
        } else {
            return 1;
        }
    }
};

s.largestNumber(a);
