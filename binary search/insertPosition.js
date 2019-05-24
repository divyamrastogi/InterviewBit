var s = { 
    //param A : array of array of integers
    //return an integer
       insertionPosition: function (A, B){
           var low = 0, high = A.length - 1;
           var count = 0, insertionPoint = 0;
           while (low <= high) {
               var mid = parseInt((low + high)/2);
               if (A[mid] == B) {
                   return mid;
               } else if(A[mid] > B) {
                   high = mid - 1;
                   
               } else {
                   insertionPoint = mid + 1;
                   low = mid + 1;
               }
           }
           return insertionPoint;
       }
   };
   
   var arr = [1,3,5,6]
   s.insertionPosition(arr, 5);
