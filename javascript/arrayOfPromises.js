var p1 = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('one');
    }, 1000);
  });
};
var p2 = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('two');
    }, 1000);
  });
};
var p3 = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('three');
    }, 1000);
  });
};
var promises = [p1, p2, p3];

var promiseSerial = function(funcs) {
  var r = funcs.reduce(function(promise, func) {
    return promise.then(function(result) {
      return func().then(Array.prototype.concat.bind(result));
    });
  }, Promise.resolve([]));
  r.then(function(res) {
    console.log(res);
  });
};

promiseSerial(promises);
