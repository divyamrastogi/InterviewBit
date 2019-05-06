var exports = { 
//param A : array of integers
//return a array of array of integers
    subsets: function(A) {
        if (A.length == 0) {
            return [];
        }
        // console.log(11..toString(2)); // 1011
        A = A.sort(function(a, b) {
            return a - b;
        });
        var allSubsets = [];
        var subsetLengths = [];
        const numSubsets = Math.pow(2, A.length);
        var maxLength = (+(numSubsets - 1)).toString(2).length;
        for (var i = 0; i < numSubsets; i++) {
            var bin = (+i).toString(2);
            while (bin.length < maxLength) {
                bin = '0' + bin;
            }
            subsetLengths.push(bin);
        }
        subsetLengths.sort(function (a, b) {
            return 
        })
        console.log(subsetLengths);
        subsetLengths.forEach(function(subset) {
            var subsetStr = [];
            subset.split('').reverse().forEach(function(bit, index) {
                if (bit == 1) {
                    subsetStr.push(A[index]);
                }
            })
            allSubsets.push(subsetStr);
        });
        return allSubsets;
    }
};
    
console.log(exports.subsets([ 1, 2, 3 ]));

/**
 * 000
 * 001
 * 011
 * 101
 * 111
 * 010
 * 110
 * 100
 */
