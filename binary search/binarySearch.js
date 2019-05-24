function binarySearch (A, B){
    var low = 0, high = A.length - 1;
    var count = 0;
    while (low <= high) {
        var mid = parseInt((low + high)/2);
        if (A[mid] == B) {
            return mid;
        } else if(A[mid] > B) {
            high = mid - 1;
            
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

binarySearch([1, 4, 5, 6, 7, 8], 7);
