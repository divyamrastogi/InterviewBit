function permuteRec(str, n, index = -1, curr) {
  if (curr === undefined) {
    curr = [];
  }
  // base case
  if (index == n) {
    return;
  }

  console.log(curr);
  for (var i = index + 1; i < n; i++) {
    curr.push(str[i]);
    permuteRec(str, n, i, curr);

    // backtracking
    curr = curr.splice(0, curr.length - 1);
  }
  return;
}

var str = [1, 2, 3, 4];
permuteRec(str, str.length);
