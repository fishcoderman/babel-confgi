"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/promise"));
var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/instance/includes"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/esm/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/esm/createClass"));
var _about = require("./about.js");
var _home = _interopRequireDefault(require("./home.js"));
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
var promise = new _promise["default"]();
var isHas = (0, _includes["default"])(_context = [1, 2, 3]).call(_context, 2);
(0, _home["default"])();
console.log(_about.about, john, promise, isHas);