"use strict";

var fn = function fn(num) {
  return num + 2;
};
var promise = new Promise(function (resolve) {
  setTimeout(function () {
    resolve(fn(2));
  }, 2000);
});
