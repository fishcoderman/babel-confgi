export var source = "source";
export var about = "about";
import _asyncToGenerator from "@babel/runtime-corejs3/helpers/esm/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime-corejs3/regenerator";
function fetchData() {
  return _fetchData.apply(this, arguments);
}
function _fetchData() {
  _fetchData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var response;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('https://api.example.com');
        case 2:
          response = _context.sent;
          return _context.abrupt("return", response === null || response === void 0 ? void 0 : response.json());
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _fetchData.apply(this, arguments);
}
export default fetchData;
import _classCallCheck from "@babel/runtime-corejs3/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/esm/createClass";
var _context;
import _Promise from "@babel/runtime-corejs3/core-js/promise";
import _includesInstanceProperty from "@babel/runtime-corejs3/core-js/instance/includes";
import { about } from './about.js';
import fetchData from './home.js';
var Person = /*#__PURE__*/function () {
  function Person() {
    _classCallCheck(this, Person);
  }
  return _createClass(Person, [{
    key: "sayName",
    value: function sayName() {
      return 'name';
    }
  }]);
}();
var john = new Person();
var promise = new _Promise();
var isHas = _includesInstanceProperty(_context = [1, 2, 3]).call(_context, 2);
fetchData();
console.log(about, john, promise, isHas);
