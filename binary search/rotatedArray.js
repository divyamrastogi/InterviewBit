function binarySearch (A, low, high, B) {
    var mid = parseInt((low+high)/2, 10);
    while (low <= high) {
        if (A[mid] == B) {
            return mid;
        } else if(A[mid] < B) {
            high = mid - 1;
            mid = (low + high)/2
        } else {
            low = mid + 1;
            mid = (low + high)/2;
        }
    }
    return -1;
}

function findPivot(A) {
    var low = 0, n = A.length - 1;
    var high = n;
    if (A[low] <= A[high]) {
        return low;
    }
    while (low <= high) {
        var mid = parseInt((low + high)/2);
        var next = (mid + 1) % n;
        var prev = (mid + n - 1) % n;
        if (A[mid] <= A[next] && A[mid] <= A[prev]) {
            return mid;
        } else if (A[mid] <= A[high]) {
            high = mid - 1;
        } else if (A[low] <= A[mid]) {
            low = mid + 1;
        }
    }
    return -1;
}

function searchRotated(A, num) {
    var pivot = findPivot(A);
    // Either it's in the right or the left
    var left = binarySearch(A, 0, pivot - 1, num);
    var right = binarySearch(A, pivot, A.length - 1, num);
    if (left != -1) {
        console.log(left);
    } else if (right != -1) {
        console.log(right);
    } else {
        console.log(left);
    }
}

searchRotated([6, 7, 8, 1, 4, 5], 7)
