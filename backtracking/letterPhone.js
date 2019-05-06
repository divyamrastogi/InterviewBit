var buckets = {
  0: ['0'],
  1: ['1'],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
};
var arr = [];
var s = {
  //     This will return an array of strings
  letterPhone: function(str, l, r) {
    if (str == 0 || str == 1) {
      return [str];
    }
    if (l == r) {
      return buckets[str[l]];
    }
    if (r < 0) return [];
    var rBucket = buckets[str[r]];
    var that = this;
    return rBucket.map(c => that.letterPhone(str, l, r - 1).map(s => s + c));
  }
};

s.letterPhone('234', 0, 2);
