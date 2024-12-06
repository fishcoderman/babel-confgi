"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));
var _context;
var Person = /*#__PURE__*/function () {
  function Person() {
    (0, _classCallCheck2["default"])(this, Person);
  }
  return (0, _createClass2["default"])(Person, [{
    key: "sayName",
    value: function sayName() {
      return 'name';
    }
  }]);
}();
var john = new Person();
console.log(john);
var promise = new _promise["default"]();
var isHas = (0, _includes["default"])(_context = [1, 2, 3]).call(_context, 2);
