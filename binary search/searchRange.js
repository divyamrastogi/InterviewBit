function findLowerRange(A, B, low, high) {
    var mid = -1;
    while(low <= high) {
        mid = parseInt((low + high)/2);
        if (A[mid] == B) {
            if (mid > 0 && A[mid - 1] == B) {
                return findLowerRange(A, B, low, mid - 1);
            } else {
                return mid;
            }
        } else if (A[mid] < B) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

function findUpperRange(A, B, low, high) {
    var mid = -1;
    while(low <= high) {
        mid = parseInt((low + high)/2);
        if (A[mid] == B) {
            if (mid < high && A[mid + 1] == B) {
                return findUpperRange(A, B, mid + 1, high);
            } else {
                return mid;
            }
        } else if (A[mid] < B) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

function findRange(A, B, low, high) {
    if(low <= high) {
        var mid = parseInt((low + high)/2);
        if (A[mid] == B) {
            var l = findLowerRange(A, B, low, mid - 1);
            var h = findUpperRange(A, B, mid + 1, high);
            return [l == -1 ? mid : l, h == -1 ? mid : h];
        } else if(B < A[mid]) {
            return findRange(A, B, low, mid - 1);
        } else {
            return findRange(A, B, mid + 1, high);
        }
    }
    return [-1, -1];
}

// function findRange(A,B,low,high){ 
//         if(low==high && A[low]>=B) return low;
//         if(high<low) return A.length;
//         var mid=parseInt((low+high)/2);
//         if(A[mid]==B){
//             var k=findRange(A,B,low,mid-1);
//             if(k!=-1){
//                 return k;
//             }
//             else{
//                 return mid;
//             }
//         }
//         if(A[mid]<B){
//             return findRange(A,B,mid+1,high);
//         }
//         if(A[mid]>B){
//             return findRange(A,B,low,mid);
//         }
// }

var arr = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ];
findRange(arr, 1, 0, arr.length-1)
