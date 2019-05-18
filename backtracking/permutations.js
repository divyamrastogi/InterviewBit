/**
 *
 * @param {array} A The array for which permutations need to be printed.
 */

var arr = [];

function swap(charArray, i, j) {
  var temp;
  temp = charArray[i];
  charArray[i] = charArray[j];
  charArray[j] = temp;
  return charArray;
}

function permutation(str, l, r) {
    if (l == r) {
        arr.push(str.slice(0));
    } else {
        for (var i = l; i <= r; i++) {
            str = swap(str, l, i);
            permutation(str, l+1, r);
            str = swap(str, l, i);
        }    
    }
}

var s = { 
 //param A : array of integers
 //return a array of array of integers
    permute : function(A) {
        permutation(A, 0, A.length -1);
        return arr;
    }
};

s.permute([1, 2, 3])
