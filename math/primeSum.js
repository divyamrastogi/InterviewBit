module.exports = {
  //param A : integer
  //return a array of integers
  sieve: function(n) {
    var primes = [];
    for (var i = 0; i <= n; i++) {
      primes[i] = 1; // assume all are primes
    }
    primes[0] = 0;
    primes[1] = 0;
    for (var i = 2; i <= n; i++) {
      if (primes[i] == 1) {
        for (var j = 2; i * j <= n; j++) {
          primes[i * j] = 0;
        }
      }
    }
    return primes;
  },
  primesum: function(A) {
    var primes = this.sieve(A);
    for (var i = 2; i < primes.length; i++) {
      if (primes[i] == 1 && primes[A - i] == 1) {
        return [i, A - i];
      }
    }
  }
};
