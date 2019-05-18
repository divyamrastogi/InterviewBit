// https://www.interviewbit.com/problems/hotel-bookings-possible/
var s = {
  //param A : array of integers
  //param B : array of integers
  //param C : integer
  //return an integer
  hotel: function(arrivals, departures, K) {
    // Sort arrivals and departures
    arrivals.sort(function(a, b) {
      return a - b;
    });
    departures.sort(function(a, b) {
      return a - b;
    });

    var arr = 0,
      dep = 0,
      num = 0;
    while (arr < arrivals.length && dep < departures.length) {
      if (arrivals[arr] < departures[dep]) {
        arr++;
        num++;
        if (num > K) {
          return 0;
        }
      } else {
        dep++;
        num--;
      }
    }

    return 1;
  }
};
