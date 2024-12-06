import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import "core-js/modules/es.array.includes.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.promise.js";
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
console.log(john);
var promise = new Promise();
var isHas = [1, 2, 3].includes(2);
