function smallerElements (A, B){
    var low = 0, high = A.length - 1;
    var count = 0, insertionPoint = -1;
    while (low <= high) {
        var mid = parseInt((low + high)/2);
        if (A[mid] == B) {
            return mid;
        } else if(A[mid] > B) {
            high = mid - 1;
            
        } else {
            insertionPoint = mid;
            low = mid + 1;
        }
    }
    return insertionPoint;
}

smallerElements([1, 4, 6, 9, 10], 7);
