var s = {
    findCount: function(A, B){
	    var low = 0, high = A.length - 1;
	    var count = 0;
	    var mid = parseInt((low+high)/2, 10);
        while (low <= high) {
            if (A[mid] == B) {
                count++;
                var m = mid - 1;
                while(A[m] == B) {
                    count++;
                    m--
                }
                m = mid + 1;
                while(A[m] == B) {
                    m++;
                    count++;
                }
                break;
            } else if(B < A[mid]) {
                high = mid - 1;
                mid = parseInt((low + high)/2);
            } else {
                low = mid + 1;
                mid = parseInt((low + high)/2);
            }
        }
        return count;
	}
}

s.findCount([ 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 7, 7, 8, 8, 8, 8, 9, 9, 10, 10, 10 ], 5)
