var s = { 
    //param A : array of integers
    //return a array of array of integers
       hammingDistance : function(A) {
           var distance = 0;
           for (var i = 0; i < A.length; i++) {
               for (var j = 0; j < A.length; j++) {
                   if (!(i == j || A[i] == A[j])) {
                       distance = distance + (A[i] ^ A[j]).toString(2).split('').filter(function(c) { return c == '1'}).length;   
                   }
               }
           }
           return distance;
       }
   };
   
   s.hammingDistance([2,4,6])
