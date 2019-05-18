function rotLeft(a, d) {
    var numRotations = d % a.length;
    for (var i = 0; i < numRotations; i++) {
        var num = a.shift();
        a[a.length] = num;
    }
    return a;
}

rotLeft([1, 2, 3, 4, 5], 4);
