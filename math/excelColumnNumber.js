var s = {
    getColumnNumber: function (A) {
        if (A.length == 0 || !A) {
            return 0;
        }
        var colNum = 0;
        for (var i = A.length; i > 0; i--) {
            colNum += (A.charCodeAt(i - 1) - 64) * Math.pow(26, A.length - i);
        }
        return colNum;
    }
};

s.getColumnNumber('ZZA');
