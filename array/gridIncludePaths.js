var s = {
    findPaths: function(m, n) {
        var path = 1; 
        for (var i = n; i < (m + n - 1); i++) { 
            path *= i; 
            path /= (i - n + 1); 
        } 
        return path; 
    }
}
s.findPaths(3,3)
