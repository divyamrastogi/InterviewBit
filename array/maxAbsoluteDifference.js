var s = {
    maxArr : function(A) {
        var add = [];
        var sub = [];
        for (var i = 0; i < A.length; i++) {
            add.push(A[i] + i);
            sub.push(A[i] - i);
        }
        var addMax = Math.max.apply(null, add);
        var addMin = Math.min.apply(null, add);
        
        var subMax = Math.max.apply(null, sub);
        var subMin = Math.min.apply(null, sub);
        
        return Math.max(addMax - addMin, subMax - subMin);
    }
};

s.maxArr([1, 3, -1]);
