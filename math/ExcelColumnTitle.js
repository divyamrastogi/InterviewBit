var s = {
    getColumnTitle: function(A) {
        var colTitle = '';
        for (var i = 0; A > 0; i++) {
            var rem = A % 26;
            if (rem == 0) {
                colTitle = 'Z' + colTitle;
                A = parseInt(A/26) - 1;
            } else {
                colTitle =  String.fromCharCode(64 + rem) + colTitle;    
                A = parseInt(A/26);
            }
        }
        return colTitle;
    }
}

s.getColumnTitle(18253)
